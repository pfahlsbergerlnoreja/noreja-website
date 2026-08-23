import { Language, translations } from './translations';
import { getRouteKeyFromPath } from './routes';
import { successStories } from './successStories';
import { useCases } from './useCases';
import { getDefinitionById } from './definitions';
import { getBattleCardById, getBattleCardVsName, getBattleCardVsTitle } from './battle-cards';
import { getJobById } from './careers';
import { SITE_NAME, SITE_URL } from './config';

/**
 * Single source of truth for the <title> and meta description of a route.
 *
 * PageTitle.tsx and MetaDescription.tsx used to carry their own (nearly
 * identical) copies of these maps, which meant a title could change in one
 * place and not the other. Both now call getPageMeta(), and so does the
 * build-time prerenderer (scripts/prerender.ts via src/entry-server.tsx) —
 * that is what puts a correct title/description into the static HTML for
 * crawlers that do not execute JavaScript.
 */

const DEFAULT_TITLE = `${SITE_NAME} | Generative Process Intelligence`;

const DEFAULT_DESCRIPTION =
  "Noreja's Generative Process Intelligence allows to contextualize operational data and human knowledge for the application of GenAI.";

const pageTitles: Record<string, Record<Language, string>> = {
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
  costOfInaction: {
    en: 'Cost of Inaction Calculator | Noreja',
    de: 'Cost-of-Inaction Rechner | Noreja',
  },
  maintenance: {
    en: 'Maintenance | Noreja',
    de: 'Wartung | Noreja',
  },
};

/**
 * Descriptions for routes that translations.metaDescriptions does not cover.
 * Without these the pages all shared the generic site-wide description.
 */
const extraDescriptions: Record<string, Record<Language, string>> = {
  home: {
    en: 'Noreja is a Generative Process Intelligence platform: it connects directly to your source systems, models processes causally in an Event Knowledge Graph, and combines them with context and generative AI.',
    de: 'Noreja ist eine Generative-Process-Intelligence-Plattform: direkte Anbindung an Quellsysteme, kausale Prozessmodellierung im Event Knowledge Graph und Analyse mit Kontextwissen und generativer KI.',
  },
  aiAgents: {
    en: 'Minerva Frontier Agents are context-aware AI agents that continuously monitor processes, maintain process models, and flag deviations, data-source changes, and compliance risks.',
    de: 'Minerva Frontier Agents sind kontextbewusste KI-Agenten, die Prozesse laufend überwachen, Prozessmodelle pflegen und Abweichungen, Datenquellenänderungen und Compliance-Risiken melden.',
  },
  imprint: {
    en: 'Legal notice for Noreja Intelligence GmbH: company details, management, commercial register entry, VAT ID and contact information.',
    de: 'Impressum der Noreja Intelligence GmbH: Firmenangaben, Geschäftsführung, Registereintrag, Umsatzsteuer-ID und Kontaktdaten.',
  },
  privacy: {
    en: 'How Noreja Intelligence GmbH processes personal data on noreja.com: purposes, legal bases, third-party services, storage periods and your rights under the GDPR.',
    de: 'Wie die Noreja Intelligence GmbH personenbezogene Daten auf noreja.com verarbeitet: Zwecke, Rechtsgrundlagen, Drittdienste, Speicherdauer und Ihre Rechte nach DSGVO.',
  },
  terms: {
    en: 'Terms of service for the use of noreja.com and the Noreja Process Intelligence platform.',
    de: 'Nutzungsbedingungen für die Website noreja.com und die Noreja Process Intelligence Plattform.',
  },
  downloadThankYou: {
    en: 'Your download is starting. Thank you for your interest in Noreja Generative Process Intelligence.',
    de: 'Dein Download startet. Danke für dein Interesse an Noreja Generative Process Intelligence.',
  },
  maintenance: {
    en: 'noreja.com is temporarily unavailable for maintenance.',
    de: 'noreja.com ist wegen Wartungsarbeiten kurzzeitig nicht verfügbar.',
  },
};

export interface PageMeta {
  title: string;
  description: string;
  /** Absolute canonical URL for the route. */
  canonical: string;
  /** True for pages that should stay out of the index (thank-you, maintenance). */
  noindex: boolean;
  /** False when no route matches, i.e. the router renders the 404 page. */
  known: boolean;
}

/** Strip a trailing slash, so /de/team/ and /de/team share one canonical. */
export function normalizePath(pathname: string): string {
  return pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

const NOINDEX_ROUTE_KEYS = new Set(['downloadThankYou', 'maintenance']);

export function getPageMeta(pathname: string, language: Language): PageMeta {
  const path = normalizePath(pathname);
  // "/" is redirected to the language home page (server-side on Netlify, via
  // <Navigate> in the dev server), so treat it as the home route rather than as
  // an unknown one.
  const routeKey = path === '/' ? 'home' : getRouteKeyFromPath(path);
  const metaDescriptions = translations[language].metaDescriptions as Record<string, string>;

  let title = '';
  let description = '';

  if (routeKey === 'successStoryDetail') {
    const match = path.match(/^\/(?:de|en)\/success-story\/(.+)$/);
    const story = match
      ? successStories.find((s) => s.id.toLowerCase() === match[1].toLowerCase())
      : undefined;
    if (story) {
      title = `${story.companyName} – Success Story | ${SITE_NAME}`;
      description = story.metaDescription?.[language] || story.summary[language];
    }
  } else if (routeKey === 'useCases') {
    const match = path.match(/^\/(?:de|en)\/use-cases\/(.+)$/);
    const useCase = match
      ? useCases.find((uc) => uc.id.toLowerCase() === match[1].toLowerCase())
      : undefined;
    if (useCase) {
      title = `${useCase.title[language]} – Use Case | ${SITE_NAME}`;
      description = useCase.description?.[language] || '';
    }
  } else if (routeKey === 'definitionDetail') {
    const match = path.match(/^\/(?:de|en)\/(?:definitionen|definitions)\/(.+)$/);
    const definition = match ? getDefinitionById(match[1].toLowerCase()) : undefined;
    if (definition) {
      title = `${definition.question[language]} | ${SITE_NAME}`;
      description = definition.definition[language];
    }
  } else if (routeKey === 'definitions') {
    description =
      language === 'de'
        ? 'Wissensdatenbank von Noreja: klare Definitionen zu Process Mining, Process Intelligence, Geschäftsprozessmanagement und mehr.'
        : 'Noreja knowledge base: clear definitions of Process Mining, Process Intelligence, Business Process Management, and more.';
  } else if (routeKey === 'costOfInaction') {
    description =
      language === 'de'
        ? 'Berechne in 5 Minuten, was Prozessprobleme pro Jahr kosten – aufgeteilt auf Zeit, Kosten, Qualität und Komplexität. Plus interaktives Devil’s Quadrangle zum Zielkonflikt jeder Prozessinitiative.'
        : 'Calculate in 5 minutes what your process problems cost per year – split across time, cost, quality and complexity. Plus an interactive Devil’s Quadrangle on the trade-off behind every process initiative.';
  } else if (routeKey === 'battleCards') {
    description =
      language === 'de'
        ? 'Sachlicher Vergleich führender Process-Mining- und Process-Intelligence-Plattformen – und wie sich Norejas kausaler Ansatz vom frequenzbasierten Paradigma abgrenzt.'
        : 'A factual comparison of leading process mining and process intelligence platforms – and how Noreja’s causal approach differs from the frequency-based paradigm.';
  } else if (routeKey === 'battleCardDetail') {
    const match = path.match(/^\/(?:de|en)\/battle-cards\/(.+)$/);
    const card = match ? getBattleCardById(match[1].toLowerCase()) : undefined;
    if (card) {
      const vsName = getBattleCardVsName(card.id);
      title = `${getBattleCardVsTitle(card.id, language)} | ${SITE_NAME}`;
      description =
        language === 'de'
          ? `Noreja vs. ${vsName}: sachlicher Vergleich von Analyse-Paradigma, Datenmodell und Ökosystem-Bindung – kausale Process Intelligence gegenüber frequenzbasiertem Process Mining.`
          : `Noreja vs. ${vsName}: a factual comparison of analysis paradigm, data model, and ecosystem lock-in – causal process intelligence versus frequency-based process mining.`;
    }
  } else if (routeKey === 'careerDetail') {
    const match = path.match(/^\/(?:de|en)\/(?:karriere|careers)\/(.+)$/);
    const job = match ? getJobById(match[1]) : undefined;
    if (job) {
      const label = language === 'de' ? 'Karriere' : 'Careers';
      title = `${job.title} – ${label} | ${SITE_NAME}`;
      description =
        language === 'de'
          ? `${job.title} bei Noreja Intelligence: Aufgaben, Profil und Rahmenbedingungen der Stelle im Bereich Generative Process Intelligence.`
          : `${job.title} at Noreja Intelligence: responsibilities, profile and terms for this role in generative process intelligence.`;
    }
  }

  if (!title && routeKey && routeKey in pageTitles) {
    title = pageTitles[routeKey][language];
  }
  if (!description && routeKey && routeKey in metaDescriptions) {
    description = metaDescriptions[routeKey];
  }
  if (!description && routeKey && routeKey in extraDescriptions) {
    description = extraDescriptions[routeKey][language];
  }

  // No route matches: the router renders the 404 page, so say so instead of
  // repeating the site-wide title and description.
  if (!routeKey) {
    return {
      title: language === 'de' ? 'Seite nicht gefunden | Noreja' : 'Page not found | Noreja',
      description:
        language === 'de'
          ? 'Diese Seite existiert nicht (mehr). Starte stattdessen auf der Noreja-Startseite.'
          : 'This page does not exist (any more). Start from the Noreja home page instead.',
      canonical: `${SITE_URL}${path}`,
      noindex: true,
      known: false,
    };
  }

  return {
    title: title || DEFAULT_TITLE,
    description: description || DEFAULT_DESCRIPTION,
    canonical: `${SITE_URL}${path}`,
    noindex: NOINDEX_ROUTE_KEYS.has(routeKey),
    known: true,
  };
}
