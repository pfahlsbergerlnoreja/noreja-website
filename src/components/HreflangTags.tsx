import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { translateRoute } from '@/lib/routes';
import { SITE_URL } from '@/lib/config';

export function HreflangTags() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    // Skip for maintenance page
    if (path === '/maintenance') return;

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
