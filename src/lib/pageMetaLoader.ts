import type { getPageMeta } from './pageMeta';

/**
 * Lazy access to getPageMeta() for the runtime head components (PageTitle,
 * MetaDescription, CanonicalUrl, HreflangTags).
 *
 * pageMeta.ts imports the data behind every detail page — definitions, battle
 * cards, end-to-end processes, success stories, jobs — to resolve their titles.
 * Imported statically, all of that (~570 kB) landed in the main bundle that
 * every page has to download and parse before it renders. Loaded on demand it
 * is its own chunk, fetched on the first client-side navigation.
 */
let pending: Promise<typeof getPageMeta> | undefined;

export function loadPageMeta(): Promise<typeof getPageMeta> {
  pending ??= import('./pageMeta').then((module) => module.getPageMeta);
  return pending;
}

/**
 * True while the visitor is still on the route the document was prerendered
 * for. scripts/prerender.ts marks <html> with that route, and its head already
 * carries the title, description, canonical and hreflang from getPageMeta() —
 * so there is nothing to sync, and no reason to load the chunk at all. The dev
 * server serves the unmarked index.html, so this is always false there.
 *
 * The marker is dropped on the first other route: after a navigation the head
 * describes that route, so coming back to the entry page has to sync again.
 */
export function isPrerenderedRoute(pathname: string): boolean {
  if (typeof document === 'undefined') return false;
  const root = document.documentElement;
  if (root.dataset.prerenderedRoute === pathname) return true;
  delete root.dataset.prerenderedRoute;
  return false;
}
