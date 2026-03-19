import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '@/contexts/LanguageContext';
import { getRouteKeyFromPath } from '@/lib/routes';
import { successStories } from '@/lib/successStories';
import { useCases } from '@/lib/useCases';
import { SITE_NAME } from '@/lib/config';

const pageTitles: Record<string, Record<'en' | 'de', string>> = {
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

export function PageTitle() {
  const location = useLocation();
  const context = useContext(LanguageContext);

  if (!context) {
    return null;
  }

  const { language } = context;

  useEffect(() => {
    const routeKey = getRouteKeyFromPath(location.pathname);
    let title = `${SITE_NAME} | Generative Process Intelligence`;

    if (routeKey === 'successStoryDetail') {
      const match = location.pathname.match(/^\/(?:de|en)\/success-story\/(.+)$/);
      if (match) {
        const story = successStories.find(
          s => s.id.toLowerCase() === match[1].toLowerCase()
        );
        if (story) {
          title = `${story.companyName} – Success Story | ${SITE_NAME}`;
        }
      }
    } else if (routeKey === 'useCases') {
      const match = location.pathname.match(/^\/(?:de|en)\/use-cases\/(.+)$/);
      if (match) {
        const useCase = useCases.find(
          uc => uc.id.toLowerCase() === match[1].toLowerCase()
        );
        if (useCase) {
          title = `${useCase.title[language]} – Use Case | ${SITE_NAME}`;
        }
      }
    } else if (routeKey && routeKey in pageTitles) {
      title = pageTitles[routeKey][language];
    }

    document.title = title;
  }, [location.pathname, language]);

  return null;
}
