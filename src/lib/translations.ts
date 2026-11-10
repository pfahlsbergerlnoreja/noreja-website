import type { PartnerCategory } from "./partners";
import { de } from "./i18n/de";
import { en } from "./i18n/en";

export type Language = 'en' | 'de';

export interface Translations {
  navigation: {
    home: string;
    functionalities: string;
    successStories: string;
    partners: string;
    pricing: string;
    blog: string;
    team: string;
    downloads: string;
    events: string;
    careers: string;
    definitions: string;
    battleCards: string;
    faq: string;
    costOfInaction: string;
    smartDataForge: string;
    frontierAgents: string;
    minerva: string;
    processes: string;
    agents: string;
    quickNavigation: string;
  };
  pages: {
    functionalities: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      learnMore: string;
      learnMoreHighlight: string;
      learnMoreSubtitle: string;
      learnMoreCta: string;
      learnMoreCtaComparison: string;
      videoHeadline: string;
      discoverVideoSeries: string;
      capabilities: {
        dataCollection: {
          title: string;
          description: string;
          schematicTitle: string;
          schematicDesc: string;
        };
        aiProcessing: {
          title: string;
          description: string;
          schematicTitle: string;
          schematicDesc: string;
        };
        analyticsInsights: {
          title: string;
          description: string;
          schematicTitle: string;
          schematicDesc: string;
        };
        automation: {
          title: string;
          description: string;
          schematicTitle: string;
          schematicDesc: string;
        };
        integration: {
          title: string;
          description: string;
          schematicTitle: string;
          schematicDesc: string;
        };
        security: {
          title: string;
          description: string;
          schematicTitle: string;
          schematicDesc: string;
        };
      };
    };
    successStories: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      /**
       * Heading + intro above the story grid. `text` is a template; the page
       * fills {companies}, {industries}, {industryList} and {published} from the
       * data, so the numbers cannot drift from what is actually listed below.
       */
      storiesSection: { title: string; text: string };
      readCaseStudy: string;
      comingSoon: string;
      backButton?: string;
      downloadSection?: {
        title: string;
        subtitle: string;
        buttonLabel: string;
      };
      pricingCta?: {
        title: string;
        highlight: string;
        subtitle: string;
        buttonLabel: string;
      };
      partnerSection: {
        title: string;
        highlight: string;
        subtitle: string;
        buttonLabel: string;
      };
      useCasesSection?: {
        title: string;
        subtitle: string;
        buttonLabel: string;
      };
    };
    useCases?: {
      cta?: {
        title: string;
        description: string;
        buttonLabel: string;
        secondaryButtonLabel: string;
      };
    };
    partners: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      strategicPartnerships: string;
      trustedBy: string;
      visitWebsite: string;
      becomePartner: string;
      partnerWithUs: string;
      learnMore: string;
      partnerSubtitle: string;
      successStoriesCta: {
        title: string;
        highlight: string;
        description: string;
        buttonLabel: string;
      };
      partnerDescriptions: Record<string, string>;
      partnerCategories: Record<PartnerCategory, string> & { uncategorized: string };
      /** One line per category, saying what this kind of partner does in a project. */
      partnerCategoryDescriptions: Record<PartnerCategory, string> & { uncategorized: string };
    };
    pricing: {
      title: string;
      subtitle: string;
      /** Heading + explainer above the two sliders and the plan cards. */
      composition: { title: string; text: string };
      teamSize: string;
      dataVolume: string;
      dataAmount?: string;
      perspectives?: string;
      dataAmountSuffix?: string;
      perspectivesSuffix?: string;
      dataAmountTooltip?: string;
      perspectivesTooltip?: string;
      usersTooltip?: string;
      users: string;
      user: string;
      extraPowerUserPrice: string;
      additionalPowerUsersLabel: string;
      readingUsers: string;
      mostPopular: string;
      month: string;
      perMonthAndUser: string;
      perYear: string;
      annualCostTooltip: string;
      /** `{count}` is replaced with the plan's included power users. */
      perUserCostTooltip: string;
      year: string;
      onRequest: string;
      viewAllFeatures: string;
      contactUs: string;
      footerNote: string;
      statisticsNote: string;
      statisticsBox: {
        lines: string[];
      };
        categories: {
          feature: string;
          users: string;
          aiTokens: string;
          service: string;
          onboarding: string;
          llmAi: string;
          supportRate: string;
        };
      privateLLMHosting: string;
      /** The Proof-of-Value timeline below the plan cards. */
      proofOfValue: {
        eyebrow: string;
        title: string;
        text: string;
        povTitle: string;
        povDuration: string;
        /** Tick labels under the progress bar: start, month 1, month 2. */
        months: string[];
        milestones: string[];
        decisionTitle: string;
        decisionSub: string;
        continueLabel: string;
        continueTitle: string;
        continuePrice: string;
        continueText: string;
        continueTag: string;
        optOutLabel: string;
        optOutTitle: string;
        optOutPrice: string;
        optOutText: string;
        benefits: { title: string; text: string }[];
      };
      /**
       * Only the section framing lives here — the questions themselves moved to
       * src/lib/faq.ts so the /faq hub and this page share one source.
       */
      faq: {
        title: string;
        subtitle: string;
        linkLabel: string;
      };
      plans: {
        core: {
          name: string;
          description: string;
          statistics?: {
            costDriverPercent: string;
            ftePercent: string;
          };
          features: string[];
          users?: string;
          aiTokens: string[];
          services: string[];
          onboarding: string[];
          llmAi: string[];
          cta: string;
        };
        pro: {
          name: string;
          description: string;
          statistics?: {
            costDriverPercent: string;
            ftePercent: string;
          };
          features: string[];
          users?: string;
          aiTokens: string[];
          services: string[];
          onboarding: string[];
          llmAi: string[];
          cta: string;
        };
        excellence: {
          name: string;
          description: string;
          statistics?: {
            costDriverPercent: string;
            ftePercent: string;
          };
          features: string[];
          users?: string;
          aiTokens: string[];
          services: string[];
          onboarding: string[];
          llmAi: string[];
          cta: string;
        };
        };
      successStoriesCta: {
        title: string;
        highlight: string;
        description: string;
        buttonLabel: string;
      };
      };
      contact: {
        title: string;
        subtitle: string;
        /** Heading over the "what to reach out about" list. */
        reasonsTitle: string;
        reasons: { title: string; text: string }[];
        /** Personal sales contact shown next to the form. */
        salesContact: {
          greeting: string;
          intro: string;
          callLabel: string;
          /** Floating chip next to the photo. */
          hello: string;
          /** Header of the animated question stream. */
          questionsLabel: string;
          /** Questions popping up one after another in the hero. */
          questions: string[];
          /** Matthias' answer under the question stream. */
          reply: string;
        };
        /** Heading over the form, which now sits below the hero. */
        formTitle: string;
        bookCallText: string;
        bookCallButton: string;
        responseNote: string;
        formLoading: string;
        formError: string;
      };
      aiAgents: {
        title: string;
        subtitle: string;
        cards: {
          card1: {
            title: string;
            description: string;
            efficiencyTag: string;
          };
          card2: {
            title: string;
            description: string;
            efficiencyTag: string;
          };
          card3: {
            title: string;
            description: string;
            efficiencyTag: string;
          };
        };
        waitlistCta: {
          title: string;
          subtitle: string;
          buttonLabel: string;
        };
        frontierAgentsExplainer: {
          title: string;
          paragraph1: string;
          paragraph2: string;
        };
      };
    };
  hero: {
    badge: string;
    /** Static lead-in line of the H1. Must name the brand and the topic. */
    headingFixed: string;
    /** Words stacked under the lead-in. All are rendered; only the highlight moves. */
    headingWords: string[];
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    getStarted: string;
    learnMore: string;
    features: {
      secure: string;
      fast: string;
      innovative: string;
    };
    dataCollection: {
      title: string;
      description: string;
    };
  };
  processGraph: {
    /** Section heading above the animation. */
    heading: string;
    /** One-sentence explanation of what the graph shows. */
    lede: string;
    /** Intentionally English in both locales; only STRG/CTRL differs. */
    hint: string;
    /** Header above the findings panel in the animation. */
    findingsHeader: string;
    /**
     * Illustrative order-to-cash findings shown in the animation's alert panel.
     * These are example figures for the demo graph, not customer data.
     */
    findings: { title: string; meta: string }[];
  };
  functionalities: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    exploreFeatures: string;
    dataCollection: {
      title: string;
      description: string;
    };
    aiProcessing: {
      title: string;
      description: string;
    };
    analyticsInsights: {
      title: string;
      description: string;
    };
    automation: {
      title: string;
      description: string;
    };
    integration: {
      title: string;
      description: string;
    };
    security: {
      title: string;
      description: string;
    };
    features: {
      aiAnalytics: {
        title: string;
        description: string;
      };
      dataIntegration: {
        title: string;
        description: string;
      };
      security: {
        title: string;
        description: string;
      };
      realTime: {
        title: string;
        description: string;
      };
      workbench: {
        title: string;
        description: string;
      };
    };
    teaserFeatures: {
      aiAnalytics: {
        title: string;
        description: string;
      };
      dataIntegration: {
        title: string;
        description: string;
      };
      security: {
        title: string;
        description: string;
      };
      realTime: {
        title: string;
        description: string;
      };
      workbench: {
        title: string;
        description: string;
      };
    };
    frontierAgentsCta: {
      title: string;
      subtitle: string;
      buttonLabel: string;
    };
  };
  usps: {
    title: string;
    highlight: string;
    subtitle: string;
    /** Label of the contact button under the heading. */
    cta: string;
    tapToLearnMore: string;
    features: {
      connectionSpeed: {
        title: string;
        description: string;
      };
      realisticResults: {
        title: string;
        description: string;
      };
      multidimensionalPerspectives: {
        title: string;
        description: string;
      };
      contextDomainKnowledge: {
        title: string;
        description: string;
      };
    };
  };
  integrations: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    discoverIntegrations: string;
  };
  process: {
    title: string;
    subtitle: string;
    steps: {
      collect: {
        title: string;
        description: string;
      };
      process: {
        title: string;
        description: string;
      };
      analyze: {
        title: string;
        description: string;
      };
      optimize: {
        title: string;
        description: string;
      };
      processing: {
        title: string;
        description: string;
      };
      security: {
        title: string;
        description: string;
      };
      analysis: {
        title: string;
        description: string;
      };
      optimization: {
        title: string;
        description: string;
      };
      encryption: {
        title: string;
        description: string;
      };
      deployment: {
        title: string;
        description: string;
      };
      users: {
        title: string;
        description: string;
      };
    };
  };
  partners: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    viewAll: string;
    viewAllPartners: string;
    stats: {
      clients: string;
      countries: string;
      users: string;
    };
  };
  blog: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    latestPosts: string;
    readMore: string;
    openBlog: string;
    poweredBy: string;
    placeholder: string;
    configNote: string;
    features: {
      quickTips: {
        title: string;
        description: string;
      };
      twoForOne: {
        title: string;
        description: string;
      };
      newsRoundUp: {
        title: string;
        description: string;
      };
      businessCase: {
        title: string;
        description: string;
      };
      featureHighlight: {
        title: string;
        description: string;
      };
    };
    subscribeRss: string;
    subscribeNewsletter: string;
    whatYouFind: string;
    latestPostsPreview: string;
    getGlimpse: string;
    categories: {
      quickTips: string;
      twoForOne: string;
      newsRoundUp: string;
      businessCase: string;
      featureHighlight: string;
    };
    viewAllPosts: string;
    latestFrom: string;
    newsletterCta: {
      title: string;
      description: string;
      subscribeLinkedIn: string;
    };
  };
    downloads: {
      title: string;
      subtitle: string;
      filterByCategory: string;
      availableDownloads: string;
      resource: string;
      resources: string;
      clickToDownload: string;
      access: {
        free: string;
        locked: string;
      };
      noResourcesFound: string;
      noResourcesDescription: string;
    };
    events: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      upcomingEvents: string;
      pastEvents: string;
      noUpcomingEvents: string;
      noUpcomingDescription: string;
      stayTuned: string;
      subscribeNewsletter: string;
      register: string;
      learnMore: string;
      viewDetails: string;
      showPastEvents: string;
      hidePastEvents: string;
      eventDate: string;
      eventTime: string;
      location: string;
      online: string;
      onsite: string;
      hybrid: string;
      free: string;
      paid: string;
      capacity: string;
      spotsLeft: string;
      soldOut: string;
      loadingEvents: string;
      upcomingEvent: string;
      upcomingEventsLabel: string;
    };
  careers: {
    subtitle: string;
    /** Heading over the "what working here looks like" block. */
    aboutTitle: string;
    aboutParagraphs: string[];
    openPositions: string;
    openPosition: string;
    openPositionsLabel: string;
    noOpenPositions: string;
    noOpenPositionsDescription: string;
    initiativeApplication: string;
    applyNow: string;
    fullTime: string;
    partTime: string;
    internship: string;
    workingStudent: string;
    remote: string;
    onsite: string;
    hybrid: string;
    joinTeamTitle: string;
    joinTeamSubtitle: string;
    joinTeamCta: string;
    aboutCompanyHeading: string;
    roleDescriptionHeading: string;
    tasksHeading: string;
    requirementsHeading: string;
    benefitsHeading: string;
    closingHeading: string;
    viewDetails: string;
    backToOverview: string;
  };
  team: {
    title: string;
    subtitle: string;
    connectLinkedIn: string;
    founders: string;
    team: string;
    learnMore: string;
    advisoryBoard: string;
    advisorySubtitle: string;
  };
  downloadGate: {
    download: string;
    downloaded: string;
    fillForm: string;
    success: string;
    downloadStarted: string;
    error: string;
    formLoadError: string;
  };
  finalCta: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    startJourney: string;
    scheduleDemo: string;
  };
  footer: {
    description: string;
    copyright: string;
    builtWith: string;
    sections: {
      platform: string;
      processes: string;
      allProcesses: string;
      resources: string;
      company: string;
      /** Footer column with the Kompetenzcenter states and cities. */
      competenceCenter: string;
      legal: string;
      contact: string;
      referralProgram: string;
      documentation: string;
    };
    links: {
      imprint: string;
      privacy: string;
      terms: string;
    };
    legal: {
      imprint: string;
      privacy: string;
      terms: string;
      trustCenter: string;
    };
    contact: {
      contactForm: string;
      bookAppointment: string;
    };
    certifications: {
      iso: string;
      gdpr: string;
    };
  };
  buttons: {
    contactUs: string;
  };
  maintenance?: {
    title: string;
    subtitle: string;
    message: string;
  };
  metaDescriptions: {
    functionalities: string;
    pricing: string;
    successStories: string;
    partners: string;
    team: string;
    events: string;
    careers: string;
    downloads: string;
    contact: string;
  };
}

// Both languages, for code that needs them synchronously: the build-time
// prerender, getPageMeta() (a lazy chunk) and the tests. The browser app
// itself loads one language at a time through src/lib/translationsLoader.ts.
export const translations: Record<Language, Translations> = { en, de };
