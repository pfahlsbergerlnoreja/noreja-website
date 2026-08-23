import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppProviders, AppRoutes } from './App';
import { getLanguageFromPath, translateRoute } from './lib/routes';
import { getPageMeta, normalizePath } from './lib/pageMeta';
import './index.css';

export interface RenderResult {
  /** Markup for the #root container. */
  html: string;
  lang: 'de' | 'en';
  title: string;
  description: string;
  canonical: string;
  noindex: boolean;
  /** hreflang alternates for this route, keyed by language. */
  alternates: { de: string; en: string };
  /** True when a lazy route never resolved and the markup is just the shell. */
  incomplete: boolean;
}

const FALLBACK_MARKER = 'data-suspense-fallback';

/**
 * Renders one route to static markup for the build-time prerenderer
 * (scripts/prerender.ts). No hydration happens in the browser — main.tsx keeps
 * using createRoot(), so React simply replaces this markup on mount. Its only
 * job is to give crawlers and AI agents a real document.
 */
export async function render(url: string): Promise<RenderResult> {
  const path = normalizePath(url);
  const lang = getLanguageFromPath(path);
  const meta = getPageMeta(path, lang);

  const element = (
    <AppProviders>
      <StaticRouter location={path}>
        <AppRoutes />
      </StaticRouter>
    </AppProviders>
  );

  // Every page except the home page is behind React.lazy(). The first pass
  // therefore suspends and renders the Suspense fallback, which is also what
  // kicks off the dynamic import. Re-rendering once the import has settled
  // produces the real page; nested lazy boundaries need one pass each.
  let html = '';
  let incomplete = true;
  for (let pass = 0; pass < 10; pass++) {
    html = renderToString(element);
    if (!html.includes(FALLBACK_MARKER)) {
      incomplete = false;
      break;
    }
    await new Promise((resolve) => setTimeout(resolve, 25));
  }

  return {
    html,
    lang,
    title: meta.title,
    description: meta.description,
    canonical: meta.canonical,
    noindex: meta.noindex,
    alternates: {
      de: translateRoute(path, 'de'),
      en: translateRoute(path, 'en'),
    },
    incomplete,
  };
}
