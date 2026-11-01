import { useEffect, type ReactNode } from 'react';
import { useParams, useLocation, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CitySilhouette } from '@/components/CitySilhouette';
import { BreadcrumbSchema, FAQSchema, StructuredData } from '@/components/StructuredData';
import { getLanguageFromPath, getRoutePath } from '@/lib/routes';
import { SITE_URL, siteConfig } from '@/lib/config';
import type { Language } from '@/lib/translations';
import {
  competenceCities,
  competenceHubPath,
  competenceStates,
  competenceCityPath,
  competenceStatePath,
  findCompetenceCityBySlugs,
  findCompetenceStateBySlug,
  getCitiesOfState,
  getCompetenceState,
  type CompetenceCity,
  type CompetenceCityId,
  type CompetenceState,
} from '@/lib/competenceCenterIndex';
import {
  competenceCityContent,
  competenceHub,
  competenceStateContent,
  type CompetenceCard,
  type CompetencePageContent,
  type CompetenceProcessId,
} from '@/lib/competenceCenters';
import salesPhoto from '@/assets/team/Matthias-Brengartner.webp';

/**
 * "Kompetenzcenter Process Intelligence Süddeutschland": the hub
 * (/de/kompetenzcenter), a page per state (/de/kompetenzcenter/bayern) and a
 * page per city (/de/kompetenzcenter/bayern/muenchen). Local landing pages for
 * "Process Mining Beratung <Stadt>" searches, linked to each other in both
 * directions and from the footer.
 *
 * Copy: src/lib/competenceCenters/*.ts, slugs and names:
 * src/lib/competenceCenterIndex.ts, skylines: src/components/CitySilhouette.tsx.
 */

const processNames: Record<CompetenceProcessId, string> = {
  'order-to-cash': 'Order-to-Cash',
  'purchase-to-pay': 'Purchase-to-Pay',
  'lead-to-activation': 'Lead-to-Activation',
  'premium-to-tax': 'Premium-to-Tax',
};

const skylineLabels: Record<CompetenceCityId, Record<Language, string>> = {
  freiburg: { de: 'Silhouette von Freiburg mit Münster und Schwabentor', en: 'Freiburg skyline with the Minster and the Schwabentor' },
  stuttgart: { de: 'Silhouette von Stuttgart mit Stiftskirche, Bahnhofsturm und Fernsehturm', en: 'Stuttgart skyline with the Stiftskirche, station tower and TV tower' },
  karlsruhe: { de: 'Silhouette von Karlsruhe mit Schloss und Pyramide', en: 'Karlsruhe skyline with the palace and the pyramid' },
  mannheim: { de: 'Silhouette von Mannheim mit Hafenkränen, Wasserturm, Schloss und Fernmeldeturm', en: 'Mannheim skyline with harbour cranes, water tower, palace and telecom tower' },
  muenchen: { de: 'Silhouette von München mit Frauenkirche, Neuem Rathaus und Olympiaturm vor den Alpen', en: 'Munich skyline with the Frauenkirche, New Town Hall and Olympic Tower in front of the Alps' },
  augsburg: { de: 'Silhouette von Augsburg mit St. Ulrich und Afra, Rathaus, Perlachturm und Fuggerei', en: 'Augsburg skyline with St. Ulrich and Afra, town hall, Perlach tower and the Fuggerei' },
};

const copy = {
  de: {
    home: 'Startseite',
    hubName: 'Kompetenzcenter',
    hubRegion: 'Süddeutschland',
    eyebrow: (place: string) => `Kompetenzcenter ${place}`,
    ctaPrimary: 'Termin vereinbaren',
    ctaSecondary: 'Kontakt aufnehmen',
    facts: ['Workshops bei dir vor Ort', 'Proof of Value in 3–4 Wochen', 'Direkt aus SAP, proAlpha & Co.', 'ISO 27001 · Hosting in Frankfurt'],
    surroundings: (city: string) => `Auch für Unternehmen rund um ${city}:`,
    moreCities: 'Außerdem vor Ort, zum Beispiel in',
    industriesTitle: (place: string) => `Branchen, die wir in ${place} kennen`,
    processesTitle: 'Prozesse, mit denen wir hier oft starten',
    processLink: (name: string) => `${name} im Detail`,
    servicesTitle: 'Was wir vor Ort für dich tun',
    services: [
      { title: 'Process-Mining-Workshop', text: 'Wir sehen uns gemeinsam einen Prozess an, klären Ziele und Datenquellen und zeigen, was Process Intelligence in deinem Unternehmen leisten kann.' },
      { title: 'Proof of Value', text: 'Ein Teilprozess, drei bis vier Wochen, Fixpreis: kausale Analyse direkt aus deinem ERP, inklusive erster Optimierungspotenziale.' },
      { title: 'Process-Intelligence-Plattform', text: 'Nach dem Proof of Value geht es mit einer Jahreslizenz weiter: Dashboard, Process Analyzer, Workbench und Minerva in einer Plattform.' },
      { title: 'KI-Agenten für Prozesse', text: 'Minerva und ihre Agenten überwachen Prozesse laufend, finden Ursachen und beantworten Fragen in Klartext.' },
    ],
    approachTitle: 'So arbeiten wir mit dir',
    approach: [
      { title: 'Kennenlernen', text: 'Wir klären Ziele, Prozess und Datenquellen – gern persönlich bei dir oder in einem kurzen Videocall.' },
      { title: 'Kick-off vor Ort', text: 'Wir kommen zu dir, sehen uns den Prozess mit deinen Fachbereichen an und binden die Daten direkt aus ERP oder Datenbank an.' },
      { title: 'Proof of Value', text: 'In drei bis vier Wochen analysieren wir einen Teilprozess kausal und zeigen, wo Zeit, Geld und Qualität verloren gehen – und warum.' },
      { title: 'Ergebnisworkshop vor Ort', text: 'Gemeinsam priorisieren wir Maßnahmen. Danach entscheidest du, ob es mit einer Jahreslizenz weitergeht.' },
    ],
    statesTitle: 'Zwei Bundesländer, sechs Städte',
    citiesTitle: (state: string) => `Unsere Städte in ${state}`,
    toState: (state: string) => `Kompetenzcenter ${state}`,
    toCity: 'Mehr erfahren',
    referencesTitle: (state: string) => `Referenzen aus ${state}`,
    referenceLink: 'Zur Success Story',
    contactTitle: 'Dein Ansprechpartner',
    contactText: 'Ob Workshop, Proof of Value oder eine erste Einschätzung zu deinem Prozess: Ruf an oder buch dir direkt einen Termin.',
    faqTitle: 'Häufige Fragen',
    relatedTitle: 'Weiterlesen',
    nearbyTitle: 'Weitere Städte im Kompetenzcenter',
    hubLink: 'Alle Standorte in Süddeutschland',
    ctaTitle: (place: string) => `Process Intelligence in ${place} – lass uns sprechen`,
    ctaText: 'Erzähl uns, welcher Prozess dich gerade beschäftigt. Wir kommen zu dir oder starten mit einem kurzen Videocall.',
    serviceType: 'Process Mining und Process Intelligence Beratung',
  },
  en: {
    home: 'Home',
    hubName: 'Competence Center',
    hubRegion: 'Southern Germany',
    eyebrow: (place: string) => `Competence Center ${place}`,
    ctaPrimary: 'Book a meeting',
    ctaSecondary: 'Get in touch',
    facts: ['Workshops at your site', 'Proof of value in 3–4 weeks', 'Straight from SAP, proAlpha & co.', 'ISO 27001 · Hosted in Frankfurt'],
    surroundings: (city: string) => `Also for companies around ${city}:`,
    moreCities: 'Also on site, for example in',
    industriesTitle: (place: string) => `Industries We Know in ${place}`,
    processesTitle: 'Processes We Often Start With Here',
    processLink: (name: string) => `${name} in detail`,
    servicesTitle: 'What We Do for You on Site',
    services: [
      { title: 'Process mining workshop', text: 'We look at a process together, clarify goals and data sources and show what process intelligence can do in your company.' },
      { title: 'Proof of value', text: 'One sub-process, three to four weeks, fixed price: a causal analysis straight from your ERP, including the first optimization potentials.' },
      { title: 'Process intelligence platform', text: 'After the proof of value you continue with an annual license: dashboard, process analyzer, workbench and Minerva in one platform.' },
      { title: 'AI agents for processes', text: 'Minerva and her agents monitor processes continuously, find causes and answer questions in plain language.' },
    ],
    approachTitle: 'How We Work With You',
    approach: [
      { title: 'Getting to know each other', text: 'We clarify goals, process and data sources – in person at your site or in a short video call.' },
      { title: 'Kick-off on site', text: 'We come to you, look at the process with your departments and connect the data directly from your ERP or database.' },
      { title: 'Proof of value', text: 'In three to four weeks we analyze one sub-process causally and show where time, money and quality are lost – and why.' },
      { title: 'Results workshop on site', text: 'Together we prioritize measures. Then you decide whether to continue with an annual license.' },
    ],
    statesTitle: 'Two States, Six Cities',
    citiesTitle: (state: string) => `Our Cities in ${state}`,
    toState: (state: string) => `Competence Center ${state}`,
    toCity: 'Learn more',
    referencesTitle: (state: string) => `References from ${state}`,
    referenceLink: 'Read the success story',
    contactTitle: 'Your Contact',
    contactText: 'Whether a workshop, a proof of value or a first assessment of your process: give us a call or book a meeting directly.',
    faqTitle: 'Frequently Asked Questions',
    relatedTitle: 'Further Reading',
    nearbyTitle: 'More Cities in the Competence Center',
    hubLink: 'All locations in southern Germany',
    ctaTitle: (place: string) => `Process Intelligence in ${place} – Let’s Talk`,
    ctaText: 'Tell us which process is on your mind. We come to you or start with a short video call.',
    serviceType: 'Process mining and process intelligence consulting',
  },
};

type Copy = (typeof copy)['de'];

const gradientStyle = {
  background: `
    linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.14) 35%, hsl(var(--noreja-secondary) / 0.12) 75%, hsl(var(--background)) 100%),
    radial-gradient(ellipse 1000px 700px at 75% 15%, hsl(var(--noreja-secondary) / 0.14) 0%, transparent 60%)
  `,
} as const;

const cardClassName = 'rounded-2xl border border-border/50 bg-background/70 p-6';

// ------------------------------------------------------------------ building blocks

function Section({ title, children, className = '' }: { title: string; children: ReactNode; className?: string }) {
  return (
    <section className={`mt-16 md:mt-20 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
      {children}
    </section>
  );
}

function Hero({
  eyebrow,
  content,
  language,
  t,
  illustration,
}: {
  eyebrow: string;
  content: CompetencePageContent;
  language: Language;
  t: Copy;
  illustration: ReactNode;
}) {
  return (
    <header className="pt-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className="inline-flex items-center gap-2 rounded-full bg-noreja-main/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-noreja-main mb-5">
          <MapPin className="h-4 w-4" />
          {eyebrow}
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight max-w-4xl">{content.h1[language]}</h1>
        <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-3xl">{content.intro[language]}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <a href={siteConfig.hubspot.appointmentBooking} target="_blank" rel="noopener noreferrer">
              {t.ctaPrimary}
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to={getRoutePath('contact', language)}>{t.ctaSecondary}</Link>
          </Button>
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {t.facts.map((fact) => (
            <li key={fact} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 shrink-0 text-noreja-main" />
              {fact}
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        {illustration}
      </motion.div>
    </header>
  );
}

function RegionSection({ content, language }: { content: CompetencePageContent; language: Language }) {
  const region = content.region[language];
  return (
    <Section title={region.title}>
      <div className="max-w-3xl space-y-4 text-base md:text-lg text-foreground/85 leading-relaxed">
        {region.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}

function CardGrid({ cards, columns = 2 }: { cards: CompetenceCard[]; columns?: 2 | 3 }) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''}`}>
      {cards.map((card) => (
        <div key={card.title} className={cardClassName}>
          <h3 className="font-semibold text-lg leading-snug">{card.title}</h3>
          <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">{card.text}</p>
        </div>
      ))}
    </div>
  );
}

function ApproachSection({ t }: { t: Copy }) {
  return (
    <Section title={t.approachTitle}>
      <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {t.approach.map((step, index) => (
          <li key={step.title} className={cardClassName}>
            <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-noreja-main/10 text-sm font-bold text-noreja-main">
              {index + 1}
            </span>
            <h3 className="font-semibold leading-snug">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function CityCard({ city, language, t }: { city: CompetenceCity; language: Language; t: Copy }) {
  return (
    <Link
      to={competenceCityPath(city.id, language)}
      className="group flex flex-col rounded-2xl border border-border/50 bg-background/70 p-5 transition-colors hover:border-noreja-main/50"
    >
      <CitySilhouette city={city.id} label={skylineLabels[city.id][language]} className="h-auto w-full" />
      <h3 className="mt-4 text-lg font-semibold group-hover:text-primary">{city.name[language]}</h3>
      <p className="mt-1 flex-1 text-sm text-muted-foreground leading-relaxed">
        {competenceCityContent[city.id].teaser[language]}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-noreja-main">
        {t.toCity}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

function ContactCard({ t }: { t: Copy }) {
  const { salesContact } = siteConfig;
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-noreja-main/30 bg-background/90 p-6 sm:flex-row sm:items-center">
      <img
        src={salesPhoto}
        alt={salesContact.name}
        width={400}
        height={600}
        loading="lazy"
        className="h-28 w-24 shrink-0 rounded-xl object-cover object-top"
      />
      <div className="min-w-0">
        <p className="text-sm font-semibold uppercase tracking-wide text-noreja-main">{t.contactTitle}</p>
        <p className="mt-1 text-lg font-semibold">{salesContact.name}</p>
        <p className="text-sm text-muted-foreground">{salesContact.role}</p>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.contactText}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button size="sm" asChild>
            <a href={`tel:${salesContact.phone}`}>
              <Phone className="h-4 w-4" />
              {salesContact.phoneDisplay}
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a href={siteConfig.hubspot.appointmentBooking} target="_blank" rel="noopener noreferrer">
              {t.ctaPrimary}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

function FaqSection({ content, language, t }: { content: CompetencePageContent; language: Language; t: Copy }) {
  return (
    <Section title={t.faqTitle}>
      <div className="space-y-4">
        {content.faq.map((item) => (
          <div key={item.question[language]} className={cardClassName}>
            <h3 className="font-semibold">{item.question[language]}</h3>
            <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">{item.answer[language]}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function RelatedLinks({ content, language, t }: { content: CompetencePageContent; language: Language; t: Copy }) {
  if (!content.related?.length) return null;
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold mb-3">{t.relatedTitle}</h2>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {content.related.map((link) => (
          <Link
            key={link.path[language]}
            to={link.path[language]}
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-noreja-main underline decoration-dotted underline-offset-4 hover:decoration-solid"
          >
            {link.label[language]}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </section>
  );
}

function CtaBox({ place, language, t }: { place: string; language: Language; t: Copy }) {
  return (
    <section className="mt-16 md:mt-20">
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/95 px-8 py-10 text-center shadow-xl shadow-noreja-main/10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-noreja-main/10 via-transparent to-noreja-secondary/20 opacity-70" />
        <div className="relative z-10 space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t.ctaTitle(place)}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.ctaText}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <a href={siteConfig.hubspot.appointmentBooking} target="_blank" rel="noopener noreferrer">
                {t.ctaPrimary}
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to={getRoutePath('contact', language)}>{t.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Service node with the places it covers, on top of the prerenderer's WebPage node. */
function serviceSchema(content: CompetencePageContent, language: Language, t: Copy, url: string, areaServed: unknown[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: content.h1[language],
    serviceType: t.serviceType,
    description: content.metaDescription[language],
    url,
    provider: { '@type': 'Organization', name: 'Noreja Intelligence GmbH', url: SITE_URL },
    areaServed,
    availableLanguage: ['de', 'en'],
  };
}

const statePlace = (state: CompetenceState, language: Language) => ({
  '@type': 'State',
  name: state.name[language],
  containedInPlace: { '@type': 'Country', name: language === 'de' ? 'Deutschland' : 'Germany' },
});

const cityPlace = (city: CompetenceCity, language: Language) => ({
  '@type': 'City',
  name: city.name[language],
  containedInPlace: statePlace(getCompetenceState(city.state), language),
});

// ---------------------------------------------------------------------- pages

function HubPage({ language, t }: { language: Language; t: Copy }) {
  const content = competenceHub;
  const url = `${SITE_URL}${competenceHubPath[language]}`;
  const serviceLinks = [
    undefined,
    getRoutePath('pricing', language),
    getRoutePath('functionalities', language),
    getRoutePath('agentLibrary', language),
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: t.home, url: `${SITE_URL}${getRoutePath('home', language)}` },
          { name: content.h1[language], url },
        ]}
      />
      <StructuredData
        id="competence-service"
        schema={serviceSchema(content, language, t, url, competenceStates.map((state) => statePlace(state, language)))}
      />
      <FAQSchema items={content.faq.map((item) => ({ question: item.question[language], answer: item.answer[language] }))} />

      <Hero
        eyebrow={t.eyebrow(t.hubRegion)}
        content={content}
        language={language}
        t={t}
        illustration={
          <div className="grid grid-cols-3 gap-x-4 gap-y-6 md:grid-cols-6">
            {competenceCities.map((city) => (
              <Link key={city.id} to={competenceCityPath(city.id, language)} className="group text-center">
                <CitySilhouette city={city.id} label={skylineLabels[city.id][language]} className="h-auto w-full" />
                <span className="mt-2 block text-sm font-medium text-muted-foreground group-hover:text-primary">
                  {city.name[language]}
                </span>
              </Link>
            ))}
          </div>
        }
      />

      <RegionSection content={content} language={language} />

      <Section title={t.statesTitle}>
        <div className="space-y-10">
          {competenceStates.map((state) => (
            <div key={state.id}>
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl md:text-2xl font-semibold">{state.name[language]}</h3>
                <Link
                  to={competenceStatePath(state.id, language)}
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-noreja-main"
                >
                  {t.toState(state.name[language])}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
              <p className="mb-5 max-w-3xl text-sm md:text-base text-muted-foreground">
                {competenceStateContent[state.id].teaser[language]}
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {getCitiesOfState(state.id).map((city) => (
                  <CityCard key={city.id} city={city} language={language} t={t} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t.servicesTitle}>
        <div className="grid gap-4 sm:grid-cols-2">
          {t.services.map((service, index) => {
            const to = serviceLinks[index];
            const inner = (
              <>
                <h3 className="font-semibold text-lg leading-snug">{service.title}</h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">{service.text}</p>
              </>
            );
            return to ? (
              <Link key={service.title} to={to} className={`${cardClassName} transition-colors hover:border-noreja-main/50`}>
                {inner}
              </Link>
            ) : (
              <div key={service.title} className={cardClassName}>
                {inner}
              </div>
            );
          })}
        </div>
      </Section>

      <Section title={t.industriesTitle(t.hubRegion)}>
        <CardGrid cards={content.industries[language]} columns={3} />
      </Section>

      <ApproachSection t={t} />

      <section className="mt-16 md:mt-20">
        <ContactCard t={t} />
      </section>

      <FaqSection content={content} language={language} t={t} />
      <RelatedLinks content={content} language={language} t={t} />
      <CtaBox place={t.hubRegion} language={language} t={t} />
    </>
  );
}

function StatePage({ state, language, t }: { state: CompetenceState; language: Language; t: Copy }) {
  const content = competenceStateContent[state.id];
  const url = `${SITE_URL}${competenceStatePath(state.id, language)}`;
  const cities = getCitiesOfState(state.id);
  const otherStates = competenceStates.filter((other) => other.id !== state.id);
  const stateName = state.name[language];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: t.home, url: `${SITE_URL}${getRoutePath('home', language)}` },
          { name: competenceHub.h1[language], url: `${SITE_URL}${competenceHubPath[language]}` },
          { name: content.h1[language], url },
        ]}
      />
      <StructuredData
        id="competence-service"
        schema={serviceSchema(content, language, t, url, [
          statePlace(state, language),
          ...cities.map((city) => cityPlace(city, language)),
        ])}
      />
      <FAQSchema items={content.faq.map((item) => ({ question: item.question[language], answer: item.answer[language] }))} />

      <Hero
        eyebrow={t.eyebrow(stateName)}
        content={content}
        language={language}
        t={t}
        illustration={
          <div className={`grid gap-6 ${cities.length > 2 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2'}`}>
            {cities.map((city) => (
              <CitySilhouette key={city.id} city={city.id} label={skylineLabels[city.id][language]} className="h-auto w-full" />
            ))}
          </div>
        }
      />

      <RegionSection content={content} language={language} />

      <Section title={t.citiesTitle(stateName)}>
        <div className={`grid gap-4 sm:grid-cols-2 ${cities.length > 2 ? 'lg:grid-cols-4' : ''}`}>
          {cities.map((city) => (
            <CityCard key={city.id} city={city} language={language} t={t} />
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          <span className="font-medium text-foreground/80">{t.moreCities}:</span> {content.moreCities[language].join(' · ')}
        </p>
      </Section>

      <Section title={t.industriesTitle(stateName)}>
        <CardGrid cards={content.industries[language]} />
      </Section>

      {content.references && (
        <Section title={t.referencesTitle(stateName)}>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.references.map((reference) => (
              <div key={reference.name} className={cardClassName}>
                <h3 className="font-semibold text-lg">{reference.name}</h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">{reference.text[language]}</p>
                {reference.successStoryId && (
                  <Link
                    to={getRoutePath('successStoryDetail', language, { companyName: reference.successStoryId })}
                    className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-noreja-main"
                  >
                    {t.referenceLink}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      <ApproachSection t={t} />

      <section className="mt-16 md:mt-20">
        <ContactCard t={t} />
      </section>

      <FaqSection content={content} language={language} t={t} />
      <RelatedLinks content={content} language={language} t={t} />

      <section className="mt-14 border-t border-border/50 pt-10">
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {otherStates.map((other) => (
            <Link
              key={other.id}
              to={competenceStatePath(other.id, language)}
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              {t.toState(other.name[language])}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
          <Link to={competenceHubPath[language]} className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            {t.hubLink}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <CtaBox place={stateName} language={language} t={t} />
    </>
  );
}

function CityPage({ city, language, t }: { city: CompetenceCity; language: Language; t: Copy }) {
  const content = competenceCityContent[city.id];
  const state = getCompetenceState(city.state);
  const url = `${SITE_URL}${competenceCityPath(city.id, language)}`;
  const cityName = city.name[language];
  const presence = content.presence[language];
  const nearby = [
    ...getCitiesOfState(city.state).filter((other) => other.id !== city.id),
    ...competenceCities.filter((other) => other.state !== city.state),
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: t.home, url: `${SITE_URL}${getRoutePath('home', language)}` },
          { name: competenceHub.h1[language], url: `${SITE_URL}${competenceHubPath[language]}` },
          { name: competenceStateContent[state.id].h1[language], url: `${SITE_URL}${competenceStatePath(state.id, language)}` },
          { name: content.h1[language], url },
        ]}
      />
      <StructuredData id="competence-service" schema={serviceSchema(content, language, t, url, [cityPlace(city, language)])} />
      <FAQSchema items={content.faq.map((item) => ({ question: item.question[language], answer: item.answer[language] }))} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <Link to={competenceHubPath[language]} className="hover:text-primary">
          {t.hubName}
        </Link>
        <span className="mx-2">/</span>
        <Link to={competenceStatePath(state.id, language)} className="hover:text-primary">
          {state.name[language]}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground/80">{cityName}</span>
      </nav>

      <Hero
        eyebrow={t.eyebrow(state.name[language])}
        content={content}
        language={language}
        t={t}
        illustration={
          <CitySilhouette city={city.id} label={skylineLabels[city.id][language]} className="mx-auto h-auto w-full max-w-4xl" />
        }
      />

      <section className="mt-16 md:mt-20 grid gap-6 lg:grid-cols-5">
        <div className={`${cardClassName} lg:col-span-3`}>
          <h2 className="text-2xl md:text-3xl font-bold">{presence.title}</h2>
          <p className="mt-4 text-base md:text-lg text-foreground/85 leading-relaxed">{presence.text}</p>
        </div>
        <div className={`${cardClassName} lg:col-span-2`}>
          <p className="font-semibold">{t.surroundings(cityName)}</p>
          <ul className="mt-4 space-y-2">
            {content.surroundings[language].map((place) => (
              <li key={place} className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-noreja-main" />
                {place}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RegionSection content={content} language={language} />

      <Section title={t.industriesTitle(cityName)}>
        <CardGrid cards={content.industries[language]} />
      </Section>

      <Section title={t.processesTitle}>
        <div className={`grid gap-4 ${content.processes.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
          {content.processes.map((process) => (
            <Link
              key={process.id}
              to={getRoutePath('endToEndProcess', language, { processSlug: process.id })}
              className={`group ${cardClassName} transition-colors hover:border-noreja-main/50`}
            >
              <h3 className="font-semibold text-lg group-hover:text-primary">{processNames[process.id]}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{process.text[language]}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-noreja-main">
                {t.processLink(processNames[process.id])}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <ApproachSection t={t} />

      <section className="mt-16 md:mt-20">
        <ContactCard t={t} />
      </section>

      <FaqSection content={content} language={language} t={t} />
      <RelatedLinks content={content} language={language} t={t} />

      <Section title={t.nearbyTitle} className="border-t border-border/50 pt-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {nearby.map((other) => (
            <CityCard key={other.id} city={other} language={language} t={t} />
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          {competenceStates.map((other) => (
            <Link
              key={other.id}
              to={competenceStatePath(other.id, language)}
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              {t.toState(other.name[language])}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
          <Link to={competenceHubPath[language]} className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            {t.hubLink}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Section>

      <CtaBox place={cityName} language={language} t={t} />
    </>
  );
}

// ---------------------------------------------------------------------- route

const CompetenceCenter = () => {
  const { regionSlug, citySlug } = useParams<{ regionSlug?: string; citySlug?: string }>();
  const { pathname } = useLocation();
  // Read from the URL, not from the language context: the context only follows
  // a language switch one render later, and the canonical-path redirect below
  // would send /en/competence-center/bavaria/munich straight back to German.
  const language = getLanguageFromPath(pathname);
  const t = copy[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const state = regionSlug ? findCompetenceStateBySlug(regionSlug) : undefined;
  const city = regionSlug && citySlug ? findCompetenceCityBySlugs(regionSlug, citySlug) : undefined;

  if (regionSlug && !state) {
    return <Navigate to={competenceHubPath[language]} replace />;
  }
  if (state && citySlug && !city) {
    return <Navigate to={competenceStatePath(state.id, language)} replace />;
  }
  // A slug from the other language (/de/kompetenzcenter/bavaria) goes to this language's URL.
  const canonicalPath = city
    ? competenceCityPath(city.id, language)
    : state
      ? competenceStatePath(state.id, language)
      : competenceHubPath[language];
  if (pathname.replace(/\/$/, '') !== canonicalPath) {
    return <Navigate to={canonicalPath} replace />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden" style={gradientStyle}>
      <div className="relative z-10">
        <article className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
          {city ? (
            <CityPage city={city} language={language} t={t} />
          ) : state ? (
            <StatePage state={state} language={language} t={t} />
          ) : (
            <HubPage language={language} t={t} />
          )}
        </article>
      </div>
    </div>
  );
};

export default CompetenceCenter;
