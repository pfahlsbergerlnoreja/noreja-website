import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '@/contexts/LanguageContext';
import { getPageMeta } from '@/lib/pageMeta';

/**
 * Keeps document.title in sync with the route during client-side navigation.
 * The initial title of a page comes from the prerendered HTML
 * (scripts/prerender.ts), which resolves it from the same getPageMeta().
 */
export function PageTitle() {
  const location = useLocation();
  const context = useContext(LanguageContext);
  const language = context?.language;

  useEffect(() => {
    // Guard lives inside the effect on purpose. It used to be an early
    // `return null` above this hook, which changed the hook order whenever the
    // provider was missing — React throws "rendered more hooks than during the
    // previous render" on the next render that has it.
    if (!language) return;

    document.title = getPageMeta(location.pathname, language).title;
  }, [location.pathname, language]);

  return null;
}
