import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, ChevronRight, FileText, Flag, Gauge, Play, Sparkles, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCTA } from "@/components/FinalCTA";
import { BreadcrumbSchema, FAQSchema, StructuredData } from "@/components/StructuredData";
import { useLanguage } from "@/contexts/LanguageContext";
import { agentSlugs, type AgentId } from "@/lib/agentSlugs";
import { SITE_URL, siteConfig } from "@/lib/config";
import { endToEndProcesses } from "@/lib/endToEndProcesses";
import { processProfiles, type ProcessProfile as Profile } from "@/lib/processProfiles";
import { getRoutePath } from "@/lib/routes";

/**
 * Landing page for one process profile (Record-to-Report, Hire-to-Retire, …),
 * rendered by EndToEndProcess when the slug is not a demo case.
 *
 * A profile describes the process in general and links to the demo cases for
 * analyses with figures. All copy comes from src/lib/processProfiles/ and is
 * plain markup, so the prerendered HTML carries the whole page.
 */

const labels = {
  de: {
    home: "Startseite",
    processes: "Prozesse",
    badge: "Prozessprofil",
    aliases: "Auch bekannt als",
    toDemoCases: "Zu den Demo-Cases",
    bookDemo: "Demo buchen",
    profileNoteTitle: "Prozessprofil, kein Demo-Case",
    profileNote:
      "Diese Seite beschreibt den Prozess allgemein: Ablauf, Geschäftsobjekte, Kennzahlen und typische Probleme. Ausgearbeitete Analysen mit Findings und Kennzahlen findest du in unseren Demo-Cases.",
    definitionHeading: "Was ist",
    start: "Startet mit",
    end: "Endet mit",
    phasesHeading: "Typische Phasen",
    phase: "Phase",
    objectsHeading: "Geschäftsobjekte und Systeme",
    objectsLead: "Diese Objekte hinterlässt der Prozess in den Quellsystemen – mit Zeitstempeln, Verantwortlichen und Beziehungen untereinander.",
    systems: "Typische Quellsysteme",
    kpisHeading: "Kennzahlen, die sich messen lassen",
    challengesHeading: "Typische Probleme",
    questionsHeading: "Fragen, die Noreja beantwortet",
    agents: "Passende Agents aus der Minerva Agent Library",
    approachHeading: "So analysiert Noreja",
    faqHeading: "Häufige Fragen zu",
    demoCasesHeading: "Demo-Cases mit ausgearbeiteter Analyse",
    demoCasesLead: "End-to-End-Prozesse, die wir mit Findings, Ursachen und Maßnahmen durchgespielt haben – teils mit Berührungspunkten zu",
    moreProfiles: "Weitere Prozessprofile",
    allProcesses: "Alle End-to-End-Prozesse",
    ctaHeading: "Deinen Prozess kausal verstehen — ",
    ctaHighlight: "sprich mit uns",
  },
  en: {
    home: "Home",
    processes: "Processes",
    badge: "Process profile",
    aliases: "Also known as",
    toDemoCases: "See the demo cases",
    bookDemo: "Book a demo",
    profileNoteTitle: "Process profile, not a demo case",
    profileNote:
      "This page describes the process in general: flow, business objects, KPIs and typical problems. Worked-through analyses with findings and figures are in our demo cases.",
    definitionHeading: "What is",
    start: "Starts with",
    end: "Ends with",
    phasesHeading: "Typical phases",
    phase: "Phase",
    objectsHeading: "Business objects and systems",
    objectsLead: "These are the objects the process leaves in the source systems – with timestamps, owners and relationships to each other.",
    systems: "Typical source systems",
    kpisHeading: "KPIs that can be measured",
    challengesHeading: "Typical problems",
    questionsHeading: "Questions Noreja answers",
    agents: "Matching agents from the Minerva Agent Library",
    approachHeading: "How Noreja analyses",
    faqHeading: "Frequently asked questions about",
    demoCasesHeading: "Demo cases with a worked-through analysis",
    demoCasesLead: "End-to-end processes we have played through with findings, causes and measures – some of them touching",
    moreProfiles: "More process profiles",
    allProcesses: "All end-to-end processes",
    ctaHeading: "Understand your process causally — ",
    ctaHighlight: "talk to us",
  },
} as const;

/** Agent names as in src/lib/agents.ts – kept here so the agent copy stays out of this chunk. */
const AGENT_NAMES: Record<AgentId, { de: string; en: string }> = {
  "structural-deviation": { de: "Strukturfehleranalyse-Agent", en: "Structural Deviation Analysis Agent" },
  rework: { de: "Nacharbeitsanalyse-Agent", en: "Rework Analysis Agent" },
  compliance: { de: "Compliance-Agent", en: "Compliance Agent" },
  "cycle-time": { de: "Laufzeitenanalyse-Agent", en: "Cycle Time Analysis Agent" },
  "waiting-time": { de: "Wartezeitenanalyse-Agent", en: "Waiting Time Analysis Agent" },
  "on-time": { de: "Termintreue-Analyse-Agent", en: "On-Time Performance Agent" },
  "working-capital": { de: "Working-Capital-Analyse-Agent", en: "Working Capital Analysis Agent" },
  "work-in-progress": { de: "WIP-Analyse-Agent", en: "WIP Analysis Agent" },
  "root-cause": { de: "Ursachenanalyse-Agent", en: "Root Cause Analysis Agent" },
  automation: { de: "Automatisierungspotenzial-Agent", en: "Automation Potential Agent" },
};

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
} as const;

const card = "rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm";

function SectionHeading({ children, lead }: { children: React.ReactNode; lead?: string }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">{children}</h2>
      {lead && <p className="text-base leading-relaxed text-muted-foreground">{lead}</p>}
    </div>
  );
}

const ProcessProfile = ({ profile }: { profile: Profile }) => {
  const { language } = useLanguage();
  const text = profile.content[language];
  const l = labels[language];
  const processPath = (processSlug: string) => getRoutePath("endToEndProcess", language, { processSlug });
  const pageUrl = `${SITE_URL}${processPath(profile.id)}`;
  // Related demo cases first; without any, every demo case is a fitting next step.
  const demoCases = profile.relatedCases.length
    ? profile.relatedCases.flatMap((id) => endToEndProcesses.filter((process) => process.id === id))
    : endToEndProcesses;
  const otherProfiles = processProfiles.filter((other) => other.id !== profile.id);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${pageUrl}#article`,
    headline: `${profile.name}: ${text.tagline}`,
    name: profile.name,
    alternateName: text.aliases,
    description: text.metaDescription,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    inLanguage: language,
    dateModified: profile.dateModified,
    keywords: text.keywords.join(", "),
    author: { "@type": "Organization", name: "Noreja Intelligence GmbH", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Noreja Intelligence GmbH", url: SITE_URL },
    about: [
      { "@type": "DefinedTerm", name: profile.name, alternateName: profile.abbreviation, description: text.definition },
      { "@type": "Thing", name: "Process Mining" },
      { "@type": "Thing", name: text.area },
    ],
    hasPart: text.phases.map((phase, index) => ({
      "@type": "WebPageElement",
      name: `${l.phase} ${index + 1}: ${phase.title}`,
      text: phase.text,
    })),
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <StructuredData schema={articleSchema} id={`process-profile-${profile.id}`} />
      <FAQSchema items={text.faq.map((item) => ({ ...item }))} />
      <BreadcrumbSchema
        items={[
          { name: l.home, url: `${SITE_URL}${getRoutePath("home", language)}` },
          { name: l.processes, url: `${SITE_URL}${getRoutePath("processes", language)}` },
          { name: profile.name, url: pageUrl },
        ]}
      />

      {/* ------------------------------------------------------------ hero */}
      <section className="relative px-4 pt-16 pb-10 lg:px-8 md:pt-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 55% 50% at 25% 0%, hsl(var(--noreja-secondary) / 0.22), transparent 62%),
              radial-gradient(ellipse 45% 45% at 85% 30%, hsl(var(--noreja-tertiary) / 0.1), transparent 60%)
            `,
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto w-full max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <FileText className="mr-2 h-4 w-4 text-accent" />
            <span className="text-sm font-medium">
              {l.badge} · {text.area}
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            {profile.name}
            <span className="ml-3 align-middle font-mono text-xl font-semibold text-muted-foreground md:text-2xl">
              ({profile.abbreviation})
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">{text.tagline}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            {l.aliases}: {text.aliases.join(" · ")}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="group">
              <a href={siteConfig.hubspot.appointmentBooking} target="_blank" rel="noopener noreferrer">
                {l.bookDemo}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/60">
              <a href="#demo-cases">
                <Play className="mr-2 h-4 w-4" />
                {l.toDemoCases}
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ---------------------------------------------- definition + scope */}
      <section className="px-4 pb-12 lg:px-8">
        <div className="mx-auto w-full max-w-4xl">
          <div className={`${card} p-6 md:p-8`}>
            <h2 className="mb-3 text-xl font-bold text-foreground md:text-2xl">
              {l.definitionHeading} {profile.name}?
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">{text.definition}</p>

            <div className="mt-6 grid items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr]">
              <div className="rounded-xl border border-border/50 bg-background/40 p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-noreja-main">{l.start}</p>
                <p className="text-sm text-foreground">{text.scope.start}</p>
              </div>
              <ArrowRight className="mx-auto hidden h-5 w-5 self-center text-muted-foreground sm:block" aria-hidden="true" />
              <div className="rounded-xl border border-border/50 bg-background/40 p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-noreja-main">{l.end}</p>
                <p className="text-sm text-foreground">{text.scope.end}</p>
              </div>
            </div>
          </div>

          <aside className="mt-4 flex gap-3 rounded-2xl border border-accent/30 bg-accent/5 p-5">
            <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="font-semibold text-foreground">{l.profileNoteTitle}.</strong> {l.profileNote}
            </p>
          </aside>
        </div>
      </section>

      {/* ---------------------------------------------------------- phases */}
      <section className="px-4 py-12 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeading>{l.phasesHeading}</SectionHeading>
          <ol className="grid gap-4 md:grid-cols-2 lg:[grid-template-columns:repeat(var(--phases),minmax(0,1fr))]" style={{ "--phases": text.phases.length } as React.CSSProperties}>
            {text.phases.map((phase, index) => (
              <motion.li
                key={phase.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className={`${card} flex flex-col p-5`}
              >
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-noreja-main/15 text-sm font-bold text-noreja-main">
                  {index + 1}
                </span>
                <h3 className="mb-2 text-base font-semibold text-foreground">{phase.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{phase.text}</p>
                <ul className="mt-auto flex flex-wrap gap-1.5">
                  {phase.steps.map((step) => (
                    <li
                      key={step}
                      className="rounded-md border border-noreja-main/30 bg-noreja-main/10 px-2 py-1 text-[0.7rem] font-medium text-foreground"
                    >
                      {step}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------- objects + systems */}
      <section className="px-4 py-12 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeading lead={l.objectsLead}>{l.objectsHeading}</SectionHeading>
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {text.objects.map((object) => (
              <div key={object.name} className={`${card} p-5`}>
                <dt className="mb-2 inline-block rounded-md border border-noreja-main/30 bg-noreja-main/10 px-2.5 py-1 font-mono text-xs font-semibold text-foreground">
                  {object.name}
                </dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">{object.text}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{l.systems}</p>
            <ul className="flex flex-wrap justify-center gap-2">
              {text.systems.map((system) => (
                <li key={system} className="rounded-md border border-border/60 bg-background/50 px-2.5 py-1 text-xs text-foreground">
                  {system}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- KPIs + challenges */}
      <section className="px-4 py-12 lg:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-2">
          <div className={`${card} p-6 md:p-8`}>
            <h2 className="mb-5 flex items-center gap-2 text-xl font-bold text-foreground md:text-2xl">
              <Gauge className="h-5 w-5 text-accent" aria-hidden="true" />
              {l.kpisHeading}
            </h2>
            <dl className="space-y-4">
              {text.kpis.map((kpi) => (
                <div key={kpi.name}>
                  <dt className="text-sm font-semibold text-foreground">{kpi.name}</dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground">{kpi.text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className={`${card} p-6 md:p-8`}>
            <h2 className="mb-5 flex items-center gap-2 text-xl font-bold text-foreground md:text-2xl">
              <TriangleAlert className="h-5 w-5 text-accent" aria-hidden="true" />
              {l.challengesHeading}
            </h2>
            <div className="space-y-4">
              {text.challenges.map((challenge) => (
                <div key={challenge.title}>
                  <h3 className="text-sm font-semibold text-foreground">{challenge.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{challenge.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------- questions + approach */}
      <section className="px-4 py-12 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <SectionHeading>
            {l.approachHeading} {profile.name}
          </SectionHeading>
          <div className="mx-auto mb-8 max-w-3xl space-y-3">
            {text.approach.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <div className={`${card} p-6`}>
            <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-foreground">
              <Flag className="h-4 w-4 text-accent" aria-hidden="true" />
              {l.questionsHeading}
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {text.questions.map((question) => (
                <li key={question} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                  {question}
                </li>
              ))}
            </ul>

            {profile.agents.length > 0 && (
              <div className="mt-6 border-t border-border/40 pt-5">
                <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  <Bot className="h-3.5 w-3.5" aria-hidden="true" />
                  {l.agents}
                </p>
                <div className="flex flex-wrap gap-2">
                  {profile.agents.map((agentId) => (
                    <Link
                      key={agentId}
                      to={getRoutePath("agentDetail", language, { agentSlug: agentSlugs[agentId][language] })}
                      className="group inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-noreja-main/50"
                    >
                      {AGENT_NAMES[agentId][language]}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- FAQ */}
      <section className="px-4 py-12 lg:px-8">
        <div className="mx-auto w-full max-w-3xl">
          <SectionHeading>
            {l.faqHeading} {profile.name}
          </SectionHeading>
          {/* Plain markup, no accordion: the full answers stay in the DOM. */}
          <div className="space-y-4">
            {text.faq.map((item) => (
              <div key={item.question} className={`${card} p-6`}>
                <h3 className="mb-2 text-base font-semibold text-foreground">{item.question}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ demo cases */}
      <section id="demo-cases" className="scroll-mt-24 px-4 py-12 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeading lead={profile.relatedCases.length ? `${l.demoCasesLead} ${profile.name}.` : undefined}>
            {l.demoCasesHeading}
          </SectionHeading>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {demoCases.map((process) => (
              <li key={process.id}>
                <Link
                  to={processPath(process.id)}
                  className="group flex h-full flex-col rounded-2xl border border-noreja-main/30 bg-gradient-to-br from-noreja-main/10 via-card/70 to-card/60 p-5 backdrop-blur-sm transition-colors hover:border-noreja-main/60"
                >
                  <span className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-noreja-main">
                    {process.content[language].scenario.split("·").pop()?.trim()}
                  </span>
                  <span className="mb-2 text-lg font-bold text-foreground">{process.name}</span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{process.content[language].tagline}</span>
                  <span className="mt-auto pt-4">
                    <ArrowRight className="h-4 w-4 text-noreja-main transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* -------------------------------------------------- other profiles */}
      <section className="px-4 py-12 lg:px-8">
        <div className="mx-auto w-full max-w-5xl text-center">
          <h2 className="mb-6 text-xl font-bold text-foreground md:text-2xl">{l.moreProfiles}</h2>
          <ul className="flex flex-wrap justify-center gap-2">
            {otherProfiles.map((other) => (
              <li key={other.id}>
                <Link
                  to={processPath(other.id)}
                  className="inline-flex items-center rounded-full border border-border px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-noreja-main/50"
                >
                  {other.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm">
            <Link to={getRoutePath("processes", language)} className="text-noreja-main underline-offset-4 hover:underline">
              {l.allProcesses}
            </Link>
          </p>
        </div>
      </section>

      <FinalCTA heading={l.ctaHeading} headingHighlight={l.ctaHighlight} />
    </div>
  );
};

export default ProcessProfile;
