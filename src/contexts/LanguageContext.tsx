import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { Language, Translations } from '@/lib/translations';
import { getLoadedTranslations, loadTranslations } from '@/lib/translationsLoader';
import { getLanguageFromPath, translateRoute } from '@/lib/routes';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Inner component that uses router hooks
function LanguageProviderInner({ children }: LanguageProviderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  
  // The language is the URL's, and nothing else. It used to be separate state
  // synced to the URL in an effect: the router commits navigations in a
  // transition, so during a switch the state ran ahead of the location, the
  // effect reset it, and the page flashed the old language once in between.
  const language = getLanguageFromPath(location.pathname);

  // Only the language of the entry page is loaded up front (main.tsx). Until
  // the other one has arrived after a switch, keep showing the copy we have.
  const [lastLoaded, setLastLoaded] = useState<Translations | undefined>(() =>
    getLoadedTranslations(language)
  );
  const current = getLoadedTranslations(language);
  useEffect(() => {
    if (current) {
      setLastLoaded(current);
      return;
    }
    let cancelled = false;
    loadTranslations(language).then((copy) => {
      if (!cancelled) setLastLoaded(copy);
    });
    return () => {
      cancelled = true;
    };
  }, [language, current]);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;

    localStorage.setItem('language', lang);

    // Load the other language's copy first, so the page does not show the
    // new URL with the old language's text in between.
    loadTranslations(lang).then(() => {
      // Navigate to the same page in the new language
      const newPath = translateRoute(location.pathname, lang);
      navigate(newPath, { replace: true });
    });
  };

  useEffect(() => {
    // Update HTML lang attribute for accessibility
    document.documentElement.lang = language;
  }, [language]);

  const t = current ?? lastLoaded;
  if (!t) {
    throw new Error(`Translations for "${language}" were not loaded before rendering`);
  }

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Outer provider that doesn't use router hooks
export function LanguageProvider({ children }: LanguageProviderProps) {
  return <LanguageProviderInner>{children}</LanguageProviderInner>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}