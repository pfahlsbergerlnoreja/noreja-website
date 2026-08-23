import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '@/contexts/LanguageContext';
import { getRouteKeyFromPath } from '@/lib/routes';
import { successStories } from '@/lib/successStories';
import { useCases } from '@/lib/useCases';
import { getDefinitionById } from '@/lib/definitions';
import { getBattleCardById, getBattleCardVsName, getBattleCardVsTitle } from '@/lib/battle-cards';
import { getJobById } from '@/lib/careers';
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
  careers: {
    en: 'Careers | Noreja',
    de: 'Karriere | Noreja',
  },
  definitions: {
    en: 'Definitions | Noreja',
    de: 'Definitionen | Noreja',
  },
  battleCards: {
    en: 'Process Intelligence Compared – Battle Cards | Noreja',
    de: 'Process Intelligence im Vergleich – Battle Cards | Noreja',
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

  const language = context?.language;
  const t = context?.t;

  useEffect(() => {
    // Guard lives inside the effect on purpose. It used to be an early
    // `return null` above this hook, which changed the hook order whenever the
    // provider was missing — React throws "rendered more hooks than during the
    // previous render" on the next render that has it.
    if (!language || !t) return;

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
    } else if (routeKey === 'definitionDetail') {
      const match = location.pathname.match(/^\/(?:de|en)\/(?:definitionen|definitions)\/(.+)$/);
      if (match) {
        const definition = getDefinitionById(match[1].toLowerCase());
        if (definition) {
          title = `${definition.question[language]} | Noreja`;
          description = definition.definition[language];
        }
      }
    } else if (routeKey === 'definitions') {
      title = language === 'de' ? 'Definitionen | Noreja' : 'Definitions | Noreja';
      description =
        language === 'de'
          ? 'Wissensdatenbank von Noreja: klare Definitionen zu Process Mining, Process Intelligence, Geschäftsprozessmanagement und mehr.'
          : 'Noreja knowledge base: clear definitions of Process Mining, Process Intelligence, Business Process Management, and more.';
    } else if (routeKey === 'costOfInaction') {
      title =
        language === 'de'
          ? 'Cost-of-Inaction Rechner | Noreja'
          : 'Cost of Inaction Calculator | Noreja';
      description =
        language === 'de'
          ? 'Berechne in 5 Minuten, was Prozessprobleme pro Jahr kosten – aufgeteilt auf Zeit, Kosten, Qualität und Komplexität. Plus interaktives Devil’s Quadrangle zum Zielkonflikt jeder Prozessinitiative.'
          : 'Calculate in 5 minutes what your process problems cost per year – split across time, cost, quality and complexity. Plus an interactive Devil’s Quadrangle on the trade-off behind every process initiative.';
    } else if (routeKey === 'battleCards') {
      title =
        language === 'de'
          ? 'Process Intelligence im Vergleich – Battle Cards | Noreja'
          : 'Process Intelligence Compared – Battle Cards | Noreja';
      description =
        language === 'de'
          ? 'Sachlicher Vergleich führender Process-Mining- und Process-Intelligence-Plattformen – und wie sich Norejas kausaler Ansatz vom frequenzbasierten Paradigma abgrenzt.'
          : 'A factual comparison of leading process mining and process intelligence platforms – and how Noreja’s causal approach differs from the frequency-based paradigm.';
    } else if (routeKey === 'battleCardDetail') {
      const match = location.pathname.match(/^\/(?:de|en)\/battle-cards\/(.+)$/);
      if (match) {
        const card = getBattleCardById(match[1].toLowerCase());
        if (card) {
          const vsName = getBattleCardVsName(card.id);
          title = `${getBattleCardVsTitle(card.id, language)} | Noreja`;
          description =
            language === 'de'
              ? `Noreja vs. ${vsName}: sachlicher Vergleich von Analyse-Paradigma, Datenmodell und Ökosystem-Bindung – kausale Process Intelligence gegenüber frequenzbasiertem Process Mining.`
              : `Noreja vs. ${vsName}: a factual comparison of analysis paradigm, data model, and ecosystem lock-in – causal process intelligence versus frequency-based process mining.`;
        }
      }
    } else if (routeKey === 'careerDetail') {
      const match = location.pathname.match(/^\/(?:de|en)\/(?:karriere|careers)\/(.+)$/);
      if (match) {
        const job = getJobById(match[1]);
        if (job) {
          const label = language === 'de' ? 'Karriere' : 'Careers';
          title = `${job.title} – ${label} | Noreja`;
          description =
            language === 'de'
              ? `${job.title} bei Noreja Intelligence: Aufgaben, Profil und Rahmenbedingungen der Stelle im Bereich Generative Process Intelligence.`
              : `${job.title} at Noreja Intelligence: responsibilities, profile and terms for this role in generative process intelligence.`;
        }
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
