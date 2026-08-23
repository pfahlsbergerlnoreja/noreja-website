import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { translateRoute, getLanguageFromPath } from '@/lib/routes';
import { SITE_URL } from '@/lib/config';
import { getPageMeta } from '@/lib/pageMeta';

export function HreflangTags() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    // Skip for maintenance page
    if (path === '/maintenance') return;

    // Unknown routes are served with a 404 status; advertising language
    // alternates for a page that does not exist only confuses crawlers.
    if (!getPageMeta(path, getLanguageFromPath(path)).known) {
      document
        .querySelectorAll('link[rel="alternate"][hreflang]')
        .forEach((el) => el.remove());
      return;
    }

    const dePath = translateRoute(path, 'de');
    const enPath = translateRoute(path, 'en');

    const deUrl = `${SITE_URL}${dePath}`;
    const enUrl = `${SITE_URL}${enPath}`;

    // Helper to upsert a hreflang link tag
    const upsertHreflang = (hreflang: string, href: string) => {
      let link = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'alternate';
        link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
      }
      link.href = href;
    };

    upsertHreflang('de', deUrl);
    upsertHreflang('en', enUrl);
    upsertHreflang('x-default', deUrl);
  }, [location.pathname]);

  return null;
}
