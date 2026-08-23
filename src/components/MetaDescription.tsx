import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '@/contexts/LanguageContext';
import { getPageMeta } from '@/lib/pageMeta';

/** Helper to update or create a <meta> tag */
function setMetaTag(selector: string, attrName: string, attrValue: string, content: string) {
  let el = document.querySelector(selector) as HTMLMetaElement;
  if (!el) {
    el = document.createElement('meta');
    if (attrName === 'property') {
      el.setAttribute('property', attrValue);
    } else {
      el.setAttribute(attrName, attrValue);
    }
    document.head.appendChild(el);
  }
  el.content = content;
}

/**
 * Keeps the description / Open Graph / Twitter meta tags in sync with the route
 * during client-side navigation. Titles and descriptions come from
 * `getPageMeta`, the same resolver the build-time prerenderer uses, so the
 * static HTML and the SPA never disagree.
 */
export function MetaDescription() {
  const location = useLocation();
  const context = useContext(LanguageContext);

  const language = context?.language;

  useEffect(() => {
    // Guard lives inside the effect on purpose. It used to be an early
    // `return null` above this hook, which changed the hook order whenever the
    // provider was missing — React throws "rendered more hooks than during the
    // previous render" on the next render that has it.
    if (!language) return;

    const { title, description, canonical, noindex } = getPageMeta(location.pathname, language);

    // Update description tags
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    // Update title tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);

    // og:url has to track the canonical URL, not the URL the visitor arrived on
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonical);

    // Locale of the currently rendered page
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', language === 'de' ? 'de_DE' : 'en_US');
    setMetaTag(
      'meta[property="og:locale:alternate"]',
      'property',
      'og:locale:alternate',
      language === 'de' ? 'en_US' : 'de_DE'
    );

    // Thank-you and maintenance pages must not be indexed; every other route is
    setMetaTag(
      'meta[name="robots"]',
      'name',
      'robots',
      noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    );
  }, [location.pathname, language]);

  return null;
}
