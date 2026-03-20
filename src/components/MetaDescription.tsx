import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '@/contexts/LanguageContext';
import { getRouteKeyFromPath } from '@/lib/routes';
import { successStories } from '@/lib/successStories';
import { useCases } from '@/lib/useCases';
import { SITE_URL } from '@/lib/config';

// Page titles for OG tags (mirrors PageTitle.tsx)
const ogPageTitles: Record<string, Record<'en' | 'de', string>> = {
  home: {
    en: 'Noreja | Generative Process Intelligence Platform',
    de: 'Noreja | Generative Process Intelligence Plattform',
  },
  functionalities: {
    en: 'Platform & Features | Noreja',
    de: 'Plattform & Funktionen | Noreja',
  },
  pricing: {
    en: 'Pricing & Plans | Noreja',
    de: 'Preise & Pakete | Noreja',
  },
  successStories: {
    en: 'Success Stories | Noreja',
    de: 'Success Stories | Noreja',
  },
  partners: {
    en: 'Partners | Noreja',
    de: 'Partner | Noreja',
  },
  team: {
    en: 'Team | Noreja',
    de: 'Team | Noreja',
  },
  events: {
    en: 'Events | Noreja',
    de: 'Veranstaltungen | Noreja',
  },
  downloads: {
    en: 'Downloads | Noreja',
    de: 'Downloads | Noreja',
  },
  downloadThankYou: {
    en: 'Thank You | Noreja',
    de: 'Vielen Dank | Noreja',
  },
  contact: {
    en: 'Contact | Noreja',
    de: 'Kontakt | Noreja',
  },
  imprint: {
    en: 'Imprint | Noreja',
    de: 'Impressum | Noreja',
  },
  privacy: {
    en: 'Privacy Policy | Noreja',
    de: 'Datenschutz | Noreja',
  },
  terms: {
    en: 'Terms of Service | Noreja',
    de: 'Nutzungsbedingungen | Noreja',
  },
  aiAgents: {
    en: 'Frontier Agents | Noreja',
    de: 'Frontier Agents | Noreja',
  },
};

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
 * Component that dynamically updates meta tags in <head>
 * based on the current route and language.
 * Updates: description, og:description, twitter:description,
 *          og:title, twitter:title, og:url
 */
export function MetaDescription() {
  const location = useLocation();
  const context = useContext(LanguageContext);

  // Gracefully skip if provider isn't ready (avoids crash during router transitions/HMR)
  if (!context) {
    return null;
  }

  const { language, t } = context;

  useEffect(() => {
    const routeKey = getRouteKeyFromPath(location.pathname);
    let description = '';
    let title = '';

    // Handle success story detail pages
    if (routeKey === 'successStoryDetail') {
      const match = location.pathname.match(/^\/(?:de|en)\/success-story\/(.+)$/);
      if (match) {
        const companyName = match[1];
        const successStory = successStories.find(
          story => story.id.toLowerCase() === companyName.toLowerCase()
        );

        if (successStory) {
          description = successStory.metaDescription?.[language] || successStory.summary[language];
          title = `${successStory.companyName} – Success Story | Noreja`;
        }
      }
    } else if (routeKey === 'useCases') {
      const match = location.pathname.match(/^\/(?:de|en)\/use-cases\/(.+)$/);
      if (match) {
        const useCase = useCases.find(
          uc => uc.id.toLowerCase() === match[1].toLowerCase()
        );
        if (useCase) {
          title = `${useCase.title[language]} – Use Case | Noreja`;
        }
      }
      if (routeKey in t.metaDescriptions) {
        description = t.metaDescriptions[routeKey as keyof typeof t.metaDescriptions];
      }
    } else if (routeKey && routeKey in t.metaDescriptions) {
      description = t.metaDescriptions[routeKey as keyof typeof t.metaDescriptions];
    }

    // Resolve title from page titles map if not set by dynamic routes
    if (!title && routeKey && routeKey in ogPageTitles) {
      title = ogPageTitles[routeKey][language];
    }

    // Defaults
    if (!description) {
      description = "Noreja's Generative Process Intelligence allows to contextualize operational data and human knowledge for the application of GenAI.";
    }
    if (!title) {
      title = 'Noreja | Generative Process Intelligence';
    }

    // Build canonical URL for og:url
    let path = location.pathname;
    if (path.length > 1 && path.endsWith('/')) {
      path = path.slice(0, -1);
    }
    const canonicalUrl = `${SITE_URL}${path}`;

    // Update description tags
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    // Update title tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);

    // Update URL tag
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
  }, [location.pathname, language, t]);

  return null;
}
