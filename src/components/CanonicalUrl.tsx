import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getLanguageFromPath } from '@/lib/routes';
import { isPrerenderedRoute, loadPageMeta } from '@/lib/pageMetaLoader';

/**
 * Keeps <link rel="canonical"> in sync with the route during client-side
 * navigation. Always points to the no-trailing-slash variant, and drops the tag
 * entirely on unknown routes — those are served with a 404 status and must not
 * claim a canonical URL.
 */
export function CanonicalUrl() {
  const location = useLocation();

  useEffect(() => {
    if (isPrerenderedRoute(location.pathname)) return;

    let cancelled = false;
    loadPageMeta().then((getPageMeta) => {
      if (cancelled) return;

      const { canonical, known } = getPageMeta(
        location.pathname,
        getLanguageFromPath(location.pathname)
      );

      const existing = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

      if (!known) {
        existing?.remove();
        return;
      }

      const link = existing ?? document.createElement('link');
      link.rel = 'canonical';
      link.href = canonical;
      if (!existing) document.head.appendChild(link);
    });
    return () => {
      cancelled = true;
    };
  }, [location.pathname]);

  return null;
}
