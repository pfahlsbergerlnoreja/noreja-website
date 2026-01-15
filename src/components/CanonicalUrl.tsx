import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '@/lib/config';

/**
 * Component that dynamically updates the canonical link tag in <head>
 * based on the current route. Always points to the no-trailing-slash variant.
 */
export function CanonicalUrl() {
  const location = useLocation();

  useEffect(() => {
    // Normalize: remove trailing slash (except root)
    let path = location.pathname;
    if (path.length > 1 && path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    const canonicalUrl = `${SITE_URL}${path}`;

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;
  }, [location.pathname]);

  return null;
}
