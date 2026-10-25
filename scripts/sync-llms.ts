/**
 * Keeps the LLM discovery files in public/ consistent with each other and with
 * the site:
 *
 * 1. llms-ctx-full.txt embeds a verbatim copy of llms-full.txt. The copy is
 *    refreshed here, and the "Generated:" date is bumped when it changed, so
 *    only llms-full.txt has to be edited by hand.
 * 2. Every content page of the sitemap (definitions, agents, processes, ...)
 *    should be listed in llms.txt and summarised in llms-ctx-full.txt, and every
 *    noreja.com link in the three files should point at a page that exists.
 *    Gaps are reported as warnings; they do not fail the build.
 *
 * Runs in prebuild after generate-sitemap, which it reads.
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '../public');
const read = (name: string) => readFileSync(resolve(publicDir, name), 'utf-8');

const SITE = 'https://noreja.com';
// Sitemap URLs that need not appear in the LLM files: job ads change too often.
const IGNORED_PREFIXES = ['/en/careers/', '/de/karriere/'];
// URLs the LLM files may link to although they are not in the sitemap.
const NON_SITEMAP_URLS = new Set(['/llms.txt', '/llms-full.txt', '/llms-ctx-full.txt']);

function syncEmbeddedCopy(): void {
  const full = read('llms-full.txt');
  const ctx = read('llms-ctx-full.txt');
  const eol = ctx.includes('\r\n') ? '\r\n' : '\n';

  const marker = /(<source>https:\/\/noreja\.com\/llms-full\.txt<\/source>[\s\S]*?<content>\r?\n)([\s\S]*?)(\r?\n<\/content>)/;
  const match = ctx.match(marker);
  if (!match) {
    console.warn('⚠️  sync-llms: embedded llms-full.txt block not found in llms-ctx-full.txt');
    return;
  }

  const embedded = full.replace(/\r\n/g, '\n').trimEnd().split('\n').join(eol);
  if (match[2] === embedded) {
    console.log('✅ sync-llms: llms-ctx-full.txt already embeds the current llms-full.txt');
    return;
  }

  const today = new Date().toISOString().slice(0, 10);
  const updated = ctx
    .replace(marker, (_, open, _old, close) => `${open}${embedded}${close}`)
    .replace(/^Generated: \d{4}-\d{2}-\d{2}/m, `Generated: ${today}`);
  writeFileSync(resolve(publicDir, 'llms-ctx-full.txt'), updated);
  console.log(`✅ sync-llms: refreshed the embedded llms-full.txt in llms-ctx-full.txt (Generated: ${today})`);
}

function linkedPaths(text: string): Set<string> {
  const paths = new Set<string>();
  for (const [url] of text.matchAll(/https:\/\/noreja\.com[^\s)<>"'`,;]*/g)) {
    paths.add(url.slice(SITE.length).replace(/[.:]+$/, '').replace(/(.)\/$/, '$1') || '/');
  }
  return paths;
}

function checkCoverage(): void {
  const sitemap = [...read('sitemap.xml').matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, loc]) =>
    loc.slice(SITE.length) || '/',
  );
  const known = new Set(sitemap);
  const files = ['llms.txt', 'llms-full.txt', 'llms-ctx-full.txt'];
  const links = Object.fromEntries(files.map((name) => [name, linkedPaths(read(name))]));

  const warnings: string[] = [];

  for (const name of files) {
    const dead = [...links[name]].filter((path) => !known.has(path) && !NON_SITEMAP_URLS.has(path));
    if (dead.length) warnings.push(`${name} links to pages that are not in the sitemap:\n     ${dead.join('\n     ')}`);
  }

  // English pages carry the full set; German pages are covered by slug notes.
  const content = sitemap.filter(
    (path) => path.startsWith('/en/') && !IGNORED_PREFIXES.some((prefix) => path.startsWith(prefix)),
  );
  for (const name of ['llms.txt', 'llms-ctx-full.txt']) {
    const missing = content.filter((path) => !links[name].has(path));
    if (missing.length) warnings.push(`${name} does not list:\n     ${missing.join('\n     ')}`);
  }

  if (warnings.length) {
    console.warn(`⚠️  sync-llms: the LLM files are out of step with the site\n   ${warnings.join('\n   ')}`);
  } else {
    console.log(`✅ sync-llms: llms.txt and llms-ctx-full.txt cover all ${content.length} English content pages`);
  }
}

syncEmbeddedCopy();
checkCoverage();
