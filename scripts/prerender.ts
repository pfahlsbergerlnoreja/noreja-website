/**
 * Post-build step: turn the single-page app into one real HTML document per
 * route.
 *
 * Why: everything about this site — <title>, canonical, hreflang, JSON-LD, and
 * all of the copy — was produced by JavaScript at runtime. A crawler that does
 * not execute JS (which includes several AI crawlers, link unfurlers, and SEO
 * auditors) received an empty <div id="root"> at every URL: no h1, no text, no
 * internal links, no structured data.
 *
 * What this does, for every URL in the sitemap plus a few unlisted routes:
 *   1. renders the route with react-dom/server (via dist-ssr/entry-server.js),
 *   2. reduces that markup to its content (see `extractContent`) and puts it
 *      into <div id="root"> as a no-JS fallback,
 *   3. rewrites the head — title, description, canonical, hreflang, Open
 *      Graph, robots — and appends a WebPage/BreadcrumbList JSON-LD node,
 *   4. writes it to dist/<route>/index.html so Netlify can serve it directly.
 *
 * Nothing about the client-side app changes: main.tsx still uses createRoot(),
 * so React discards the fallback markup on mount, and an inline script in
 * index.html removes it before first paint so visitors never see it unstyled.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { JSDOM } from 'jsdom';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');
const distDir = join(rootDir, 'dist');
const ssrEntry = join(rootDir, 'dist-ssr', 'entry-server.js');

const SITE_URL = 'https://noreja.com';
const ROBOTS_INDEX =
  'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
const ROBOTS_NOINDEX = 'noindex, nofollow';

const BODY_START = '<!--PRERENDER-BODY-START-->';
const BODY_END = '<!--PRERENDER-BODY-END-->';

/**
 * Routes that are intentionally absent from the sitemap but still need a real
 * document: they are reachable (HubSpot form redirects, maintenance mode) and
 * without a file here they would be served as 404s.
 */
const EXTRA_ROUTES = [
  '/de/download-vielen-dank',
  '/en/download-thank-you',
  '/de/wartung',
  '/en/maintenance',
  '/maintenance',
];

interface RenderResult {
  html: string;
  lang: 'de' | 'en';
  title: string;
  description: string;
  canonical: string;
  noindex: boolean;
  alternates: { de: string; en: string };
  incomplete: boolean;
}

// ------------------------------------------------------------------ utilities

function readSitemapRoutes(): string[] {
  const sitemapPath = join(distDir, 'sitemap.xml');
  const xml = readFileSync(sitemapPath, 'utf-8');
  const routes: string[] = [];
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const url = new URL(match[1]);
    routes.push(url.pathname.replace(/\/$/, '') || '/');
  }
  return routes;
}

/**
 * Static (non-parameterised) route paths declared in App.tsx. Used as a
 * safety net: since unmatched URLs are served as 404s, a route that exists in
 * the router but has no prerendered file would silently disappear.
 */
function readRouterRoutes(): string[] {
  const appSource = readFileSync(join(rootDir, 'src', 'App.tsx'), 'utf-8');
  const paths = new Set<string>();
  for (const match of appSource.matchAll(/<Route\s+path="([^"]+)"/g)) {
    const path = match[1];
    if (path === '*' || path === '/' || path.includes(':')) continue;
    paths.add(path);
  }
  return [...paths];
}

/**
 * Reduce server-rendered markup to the part a crawler cares about.
 *
 * The rendered home page is ~700 kB of Tailwind class names, inline styles and
 * generated SVG. All of that is dead weight here: the browser throws this
 * markup away, so what is left only has to carry the text, the headings, the
 * links and the images. Stripping it takes the home page to ~20 kB and makes
 * the document far easier for an LLM to read.
 */
function extractContent(html: string): string {
  const dom = new JSDOM(`<body><div id="x">${html}</div></body>`);
  const { document } = dom.window;
  const container = document.getElementById('x')!;

  // Page-specific JSON-LD (FAQPage, DefinedTerm, JobPosting, Person, Article,
  // …) is rendered as part of the React tree, so it survives into the static
  // HTML. Park the payloads behind placeholders while the markup is minified
  // below — the whitespace collapsing must not touch JSON string values.
  const jsonLd: string[] = [];
  container.querySelectorAll('script[type="application/ld+json"]').forEach((el) => {
    jsonLd.push((el.textContent || '').trim());
    el.textContent = `__LD_JSON_${jsonLd.length - 1}__`;
  });

  // Elements that carry no readable content (or that React only emitted to
  // report a server-render error).
  container
    .querySelectorAll(
      'script:not([type="application/ld+json"]), style, template, svg, canvas, iframe, link, noscript'
    )
    .forEach((el) => el.remove());

  const KEEP_ATTRS: Record<string, string[]> = {
    script: ['type'],
    a: ['href', 'title', 'hreflang'],
    img: ['src', 'alt', 'title'],
    time: ['datetime'],
    q: ['cite'],
    blockquote: ['cite'],
  };
  const GLOBAL_KEEP = ['lang', 'dir'];

  const walk = (el: Element) => {
    for (const child of [...el.children]) walk(child);

    const tag = el.tagName.toLowerCase();

    if (tag === 'img') {
      // Vite inlines small images as base64 data URIs, and the logo banner
      // repeats them dozens of times — that alone was 400 kB of the rendered
      // home page. Decorative images carry no alt text and are dropped
      // outright; the rest keep their alt text but lose the payload.
      const alt = el.getAttribute('alt')?.trim();
      if (!alt) {
        el.remove();
        return;
      }
      if (el.getAttribute('src')?.startsWith('data:')) el.removeAttribute('src');
    }

    const keep = new Set([...(KEEP_ATTRS[tag] || []), ...GLOBAL_KEEP]);
    for (const attr of [...el.attributes]) {
      if (!keep.has(attr.name)) el.removeAttribute(attr.name);
    }

    // Drop layout-only wrappers that ended up empty, and unwrap generic
    // containers so the text is not buried under a dozen nested divs.
    const isVoid = ['img', 'br', 'hr', 'input', 'source'].includes(tag);
    if (!isVoid && el.children.length === 0 && !el.textContent?.trim()) {
      el.remove();
      return;
    }
    if ((tag === 'div' || tag === 'span') && el.attributes.length === 0) {
      el.replaceWith(...el.childNodes);
    }
  };
  [...container.children].forEach(walk);

  let content = container.innerHTML.replace(/>\s+</g, '><').replace(/\s{2,}/g, ' ').trim();
  jsonLd.forEach((json, index) => {
    content = content.replace(`__LD_JSON_${index}__`, json);
  });
  return content;
}

/** Absolute URL for a site-relative path. */
const abs = (path: string) => `${SITE_URL}${path}`;

function buildWebPageSchema(result: RenderResult, route: string): Record<string, unknown> {
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebPage',
      '@id': `${result.canonical}#webpage`,
      url: result.canonical,
      name: result.title,
      description: result.description,
      inLanguage: result.lang === 'de' ? 'de-DE' : 'en-US',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      primaryImageOfPage: `${SITE_URL}/og-image.png`,
    },
  ];

  // Breadcrumbs for anything below the language home page.
  const segments = route.split('/').filter(Boolean);
  if (segments.length > 1) {
    const home = `/${segments[0]}`;
    const items = [
      {
        '@type': 'ListItem',
        position: 1,
        name: result.lang === 'de' ? 'Startseite' : 'Home',
        item: abs(home),
      },
    ];
    let path = home;
    segments.slice(1).forEach((segment, index) => {
      path += `/${segment}`;
      const isLast = index === segments.length - 2;
      items.push({
        '@type': 'ListItem',
        position: index + 2,
        name: isLast
          ? result.title.replace(/\s*\|\s*Noreja$/, '')
          : segment.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase()),
        item: abs(path),
      });
    });
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${result.canonical}#breadcrumb`,
      itemListElement: items,
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

// --------------------------------------------------------------- head rewrite

function renderDocument(
  template: string,
  route: string,
  result: RenderResult,
  options: { is404?: boolean } = {}
): string {
  const dom = new JSDOM(template);
  const { document } = dom.window;
  const head = document.head;

  document.documentElement.setAttribute('lang', result.lang);

  const content = extractContent(result.html);

  const setMeta = (selector: string, content: string) => {
    const el = head.querySelector(selector);
    if (el) el.setAttribute('content', content);
  };

  document.title = result.title;
  setMeta('meta[name="description"]', result.description);
  setMeta('meta[property="og:title"]', result.title);
  setMeta('meta[property="og:description"]', result.description);
  setMeta('meta[name="twitter:title"]', result.title);
  setMeta('meta[name="twitter:description"]', result.description);
  setMeta('meta[property="og:url"]', result.canonical);
  setMeta('meta[property="og:locale"]', result.lang === 'de' ? 'de_DE' : 'en_US');
  setMeta('meta[property="og:locale:alternate"]', result.lang === 'de' ? 'en_US' : 'de_DE');
  setMeta('meta[name="robots"]', result.noindex ? ROBOTS_NOINDEX : ROBOTS_INDEX);

  if (options.is404) {
    // The 404 document is served under many URLs, so it must not claim a
    // canonical or advertise language alternates.
    head
      .querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang]')
      .forEach((el) => el.remove());
  } else {
    const canonical = head.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', result.canonical);

    const setAlternate = (hreflang: string, href: string) => {
      const el = head.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
      if (el) el.setAttribute('href', href);
    };
    setAlternate('de', abs(result.alternates.de));
    setAlternate('en', abs(result.alternates.en));
    setAlternate('x-default', abs(result.alternates.de));

    // The page's own schema (FAQPage, JobPosting, Person, Article, Event, …)
    // is already in the body, rendered by the components themselves; this adds
    // the per-route WebPage and BreadcrumbList nodes on top.
    const schema = document.createElement('script');
    schema.setAttribute('type', 'application/ld+json');
    schema.textContent = JSON.stringify(buildWebPageSchema(result, route));
    head.appendChild(schema);
  }

  const html = dom.serialize();

  // Swap the hand-written fallback in index.html for this route's content.
  const start = html.indexOf(BODY_START);
  const end = html.indexOf(BODY_END);
  if (start === -1 || end === -1) {
    throw new Error('prerender: body markers not found in dist/index.html');
  }
  return html.slice(0, start + BODY_START.length) + content + html.slice(end);
}

// ---------------------------------------------------------------------- main

async function main() {
  if (!existsSync(ssrEntry)) {
    console.error(`❌ prerender: ${ssrEntry} not found (run \`npm run build:ssr\` first)`);
    process.exit(1);
  }

  const templatePath = join(distDir, 'index.html');
  const template = readFileSync(templatePath, 'utf-8');
  if (!template.includes(BODY_START)) {
    console.error('❌ prerender: dist/index.html has no PRERENDER-BODY markers');
    process.exit(1);
  }

  const { render } = (await import(pathToFileURL(ssrEntry).href)) as {
    render: (url: string) => Promise<RenderResult>;
  };

  const routes = [...new Set([...readSitemapRoutes(), ...EXTRA_ROUTES])].sort();
  const started = Date.now();
  const incomplete: string[] = [];
  const failed: string[] = [];
  let written = 0;

  for (const route of routes) {
    try {
      const result = await render(route);
      if (result.incomplete) incomplete.push(route);

      const outDir = join(distDir, ...route.split('/').filter(Boolean));
      mkdirSync(outDir, { recursive: true });
      writeFileSync(join(outDir, 'index.html'), renderDocument(template, route, result));
      written++;
    } catch (error) {
      failed.push(`${route} (${(error as Error).message})`);
    }
  }

  // Unmatched URLs are served as /404.html with a 404 status (see
  // netlify.toml), so it needs the same shell — the router renders the NotFound
  // page once the bundle loads.
  try {
    const result = await render('/404');
    writeFileSync(
      join(distDir, '404.html'),
      renderDocument(template, '/404', { ...result, noindex: true }, { is404: true })
    );
  } catch (error) {
    failed.push(`/404.html (${(error as Error).message})`);
  }

  // Safety net: every static route in the router must have a file, otherwise
  // it would now answer 404.
  const missing = readRouterRoutes().filter(
    (route) => !existsSync(join(distDir, ...route.split('/').filter(Boolean), 'index.html'))
  );

  console.log(
    `✅ prerender: ${written} routes in ${((Date.now() - started) / 1000).toFixed(1)}s`
  );
  if (incomplete.length) {
    console.warn(
      `⚠️  prerender: ${incomplete.length} route(s) rendered without their lazy content: ${incomplete.join(', ')}`
    );
  }
  if (failed.length) {
    console.error(`❌ prerender: ${failed.length} route(s) failed:\n   ${failed.join('\n   ')}`);
    process.exit(1);
  }
  if (missing.length) {
    console.error(
      `❌ prerender: routes declared in App.tsx but not prerendered (they would 404):\n   ${missing.join('\n   ')}\n   Add them to the sitemap (scripts/generate-sitemap.ts) or to EXTRA_ROUTES.`
    );
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('❌ prerender failed:', error);
  process.exit(1);
});
