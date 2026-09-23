import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  ExternalLink,
  Info,
  Lightbulb,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCTA } from "@/components/FinalCTA";
import { BreadcrumbSchema, FAQSchema, StructuredData } from "@/components/StructuredData";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_URL } from "@/lib/config";
import { getEndToEndProcessById, type ProcessImage } from "@/lib/endToEndProcesses";
import { getRoutePath } from "@/lib/routes";
import NotFound from "./NotFound";

/**
 * Landing page for one end-to-end process (Lead-to-Activation, …).
 *
 * All copy comes from src/lib/endToEndProcesses.ts and is rendered as plain
 * markup — no accordions, no effect-loaded content — so the prerendered HTML
 * carries the whole page for crawlers and answer engines.
 */

const labels = {
  de: {
    home: "Startseite",
    toFindings: "Zu den Findings",
    readCase: "Vollständigen Case lesen",
    definitionHeading: "Was ist",
    keyFactsHeading: "Auf einen Blick",
    phase: "Phase",
    objects: "Geschäftsobjekte",
    question: "Leitfrage",
    finding: "Finding",
    insteadOf: "Statt",
    ask: "fragt die Analyse",
    enlarge: "Bild in voller Größe öffnen",
    leversArea: "Prozessbereich",
    leversStatement: "Kernaussage",
    leversLever: "Größter Zeithebel",
    leversValue: "Dauer",
    quadrantsHeading: "Einordnung im Impact Board",
    costHeading: "Kosten- und Wirkungskategorien",
    measuresTableHeading: "Priorisierter Maßnahmenplan",
    priority: "Priorität",
    measure: "Maßnahme",
    benefit: "Erwarteter Nutzen",
    loopQuestionsHeading: "Nach jeder Maßnahme prüfen",
    faqHeading: "Häufige Fragen zu",
    contact: "Eigenen Prozess analysieren? Sprich mit uns.",
    quote: ["„", "“"],
  },
  en: {
    home: "Home",
    toFindings: "Jump to the findings",
    readCase: "Read the full case",
    definitionHeading: "What is",
    keyFactsHeading: "At a glance",
    phase: "Phase",
    objects: "Business objects",
    question: "Guiding question",
    finding: "Finding",
    insteadOf: "Instead of",
    ask: "the analysis asks",
    enlarge: "Open image at full size",
    leversArea: "Process area",
    leversStatement: "Key statement",
    leversLever: "Biggest time lever",
    leversValue: "Duration",
    quadrantsHeading: "Placement in the Impact Board",
    costHeading: "Cost and impact categories",
    measuresTableHeading: "Prioritised action plan",
    priority: "Priority",
    measure: "Measure",
    benefit: "Expected benefit",
    loopQuestionsHeading: "Check after every measure",
    faqHeading: "Frequently asked questions about",
    contact: "Want to analyse your own process? Talk to us.",
    quote: ["“", "”"],
  },
} as const;

function ProcessFigure({ image, enlargeLabel }: { image: ProcessImage; enlargeLabel: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm">
      <a
        href={image.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={enlargeLabel}
        className="block bg-[#f6f2fd] p-2 md:p-4"
      >
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="h-auto w-full"
        />
      </a>
      <figcaption className="px-4 py-3 text-xs leading-relaxed text-muted-foreground md:px-5">
        {image.caption}
      </figcaption>
    </figure>
  );
}

const EndToEndProcess = () => {
  const { processSlug } = useParams<{ processSlug: string }>();
  const { language } = useLanguage();
  const process = processSlug ? getEndToEndProcessById(processSlug) : undefined;

  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [processSlug]);

  if (!process) return <NotFound />;

  const text = process.content[language];
  const l = labels[language];
  const pageUrl = `${SITE_URL}${getRoutePath("endToEndProcess", language, { processSlug: process.id })}`;
  const absolute = (src: string) => (src.startsWith("http") ? src : `${SITE_URL}${src}`);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${pageUrl}#article`,
    headline: `${process.name}: ${text.tagline}`,
    name: process.name,
    description: text.metaDescription,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    inLanguage: language,
    dateModified: process.dateModified,
    image: [text.findings[0].image.src, text.measuresImage.src].map(absolute),
    author: { "@type": "Organization", name: "Noreja Intelligence GmbH", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Noreja Intelligence GmbH", url: SITE_URL },
    isBasedOn: process.caseUrl,
    about: [
      { "@type": "Thing", name: process.name },
      { "@type": "Thing", name: "Process Mining" },
      { "@type": "Thing", name: "Process Intelligence" },
      { "@type": "Thing", name: text.scenario.split("·").pop()?.trim() },
    ],
    hasPart: text.phases.map((phase, index) => ({
      "@type": "WebPageElement",
      name: `${l.phase} ${index + 1}: ${phase.title}`,
      text: phase.summary,
    })),
  };

  const gradientStyle = {
    background: `
      linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 30%, hsl(var(--noreja-secondary) / 0.14) 70%, hsl(var(--background)) 100%),
      radial-gradient(ellipse 1000px 700px at 75% 10%, hsl(var(--noreja-tertiary) / 0.12) 0%, transparent 60%)
    `,
  } as const;

  const fadeUp = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  } as const;

  return (
    <div className="relative min-h-screen overflow-hidden" style={gradientStyle}>
      <StructuredData schema={articleSchema} id={`process-${process.id}`} />
      <FAQSchema items={text.faq.map((item) => ({ ...item }))} />
      <BreadcrumbSchema
        items={[
          { name: l.home, url: `${SITE_URL}${getRoutePath("home", language)}` },
          { name: process.name, url: pageUrl },
        ]}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-noreja-main/5 to-transparent" />

      <div className="relative z-10">
        {/* ------------------------------------------------------------ hero */}
        <section className="px-4 pt-16 pb-10 lg:px-8 md:pt-24">
          <div className="mx-auto w-full max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
                <RefreshCw className="mr-2 h-4 w-4 text-accent" />
                <span className="text-sm font-medium">{text.scenario}</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">{process.name}</h1>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {text.tagline}
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="story-cta">
                  <a href="#findings">
                    {l.toFindings}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-background/60">
                  <a href={process.caseUrl} target="_blank" rel="noopener noreferrer">
                    <BookOpen className="mr-2 h-4 w-4" />
                    {l.readCase}
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------------------ definition + key facts */}
        <section className="px-4 pb-12 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mx-auto max-w-3xl rounded-2xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm md:p-8">
              <h2 className="mb-3 text-xl font-bold text-foreground md:text-2xl">{l.definitionHeading} {process.name}?</h2>
              <p className="text-base leading-relaxed text-muted-foreground">{text.definition}</p>
              <p className="mt-4 flex gap-2 text-xs leading-relaxed text-muted-foreground/80">
                <Info className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                {text.demoNote}
              </p>
            </div>

            <h2 className="sr-only">{l.keyFactsHeading}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {text.keyFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-border/50 bg-card/60 p-5 backdrop-blur-sm"
                >
                  <p className="text-3xl font-bold text-noreja-main">{fact.value}</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{fact.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{fact.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------- process map */}
        <section id="process" className="scroll-mt-24 px-4 py-12 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">{text.phasesHeading}</h2>
              <p className="text-base leading-relaxed text-muted-foreground">{text.phasesLead}</p>
            </div>

            {/* phase stepper */}
            <ol className="mb-8 hidden items-center justify-center gap-2 md:flex">
              {text.phases.map((phase, index) => (
                <li key={phase.title} className="flex items-center gap-2">
                  <a
                    href={`#phase-${index + 1}`}
                    className="rounded-full border border-noreja-main/30 bg-noreja-main/10 px-4 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-noreja-main/60"
                  >
                    {index + 1}. {phase.title.split(":")[0]}
                  </a>
                  {index < text.phases.length - 1 && (
                    <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>

            <div className="space-y-6">
              {text.phases.map((phase, index) => (
                <motion.article
                  key={phase.title}
                  id={`phase-${index + 1}`}
                  {...fadeUp}
                  transition={{ duration: 0.5 }}
                  className="scroll-mt-24 rounded-2xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm md:p-8"
                >
                  <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-noreja-main">
                        {l.phase} {index + 1}
                      </p>
                      <h3 className="mb-3 text-xl font-bold text-foreground">{phase.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{phase.summary}</p>

                      <p className="mt-5 mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        {l.objects}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {phase.objects.map((object) => (
                          <li
                            key={object}
                            className="rounded-md border border-border/60 bg-background/50 px-2.5 py-1 text-xs text-foreground"
                          >
                            {object}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                      {phase.steps && (
                        <ol className="flex flex-wrap items-center gap-y-2">
                          {phase.steps.map((step, stepIndex) => (
                            <li key={step} className="flex items-center">
                              <span className="rounded-lg border border-noreja-main/30 bg-noreja-main/10 px-3 py-1.5 text-xs font-medium text-foreground">
                                {step}
                              </span>
                              {stepIndex < phase.steps!.length - 1 && (
                                <ArrowRight className="mx-1.5 h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                              )}
                            </li>
                          ))}
                        </ol>
                      )}

                      {phase.strands && (
                        <div className="grid gap-3 sm:grid-cols-3">
                          {phase.strands.map((strand) => (
                            <div key={strand.name} className="rounded-xl border border-border/50 bg-background/40 p-4">
                              <p className="mb-3 text-sm font-semibold text-foreground">{strand.name}</p>
                              <ol className="space-y-1.5">
                                {strand.steps.map((step, stepIndex) => (
                                  <li key={step} className="flex items-start gap-2 text-xs text-muted-foreground">
                                    <span className="mt-px inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-noreja-main/15 text-[10px] font-bold text-noreja-main">
                                      {stepIndex + 1}
                                    </span>
                                    {step}
                                  </li>
                                ))}
                              </ol>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="mt-auto rounded-xl border border-accent/30 bg-accent/5 p-4">
                        <p className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                          <Lightbulb className="h-3.5 w-3.5" />
                          {l.question}
                        </p>
                        <p className="text-sm text-foreground">{phase.question}</p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
              {text.objectsNote}
            </p>
          </div>
        </section>

        {/* -------------------------------------------------------- findings */}
        <section id="findings" className="scroll-mt-24 px-4 py-12 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">{text.findingsHeading}</h2>
              <p className="text-base leading-relaxed text-muted-foreground">{text.findingsLead}</p>
            </div>

            <div className="space-y-12">
              {text.findings.map((finding, index) => (
                <motion.article key={finding.title} {...fadeUp} transition={{ duration: 0.5 }}>
                  <div className="mb-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-noreja-main">
                        {l.finding} {index + 1} · {finding.area}
                      </p>
                      <h3 className="mb-4 text-xl font-bold text-foreground md:text-2xl">{finding.title}</h3>
                      <div className="space-y-3">
                        {finding.text.map((paragraph) => (
                          <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="rounded-2xl border border-border/50 bg-card/60 p-5 backdrop-blur-sm">
                        <p className="text-3xl font-bold text-noreja-main">{finding.metric}</p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{finding.metricLabel}</p>
                      </div>
                      <div className="rounded-2xl border border-border/50 bg-card/60 p-5 text-sm backdrop-blur-sm">
                        <p className="text-muted-foreground">
                          {l.insteadOf} <span className="line-through decoration-muted-foreground/60">{l.quote[0]}{finding.shift.from}{l.quote[1]}</span>
                        </p>
                        <p className="mt-2 text-foreground">
                          {l.ask}: <strong>{l.quote[0]}{finding.shift.to}{l.quote[1]}</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <ProcessFigure image={finding.image} enlargeLabel={l.enlarge} />

                  {finding.note && (
                    <aside className="mt-4 rounded-2xl border border-accent/30 bg-accent/5 p-5">
                      <p className="mb-1 text-sm font-semibold text-foreground">{finding.note.title}</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{finding.note.text}</p>
                    </aside>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- levers */}
        <section className="px-4 py-12 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="mb-3 flex items-center justify-center gap-2 text-2xl font-bold text-foreground md:text-3xl">
                <Sparkles className="h-6 w-6 text-accent" />
                {text.leversHeading}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">{text.leversLead}</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-start">
              <div className="overflow-x-auto rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead className="border-b border-border/50 text-xs uppercase tracking-[0.08em] text-muted-foreground">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">{l.leversArea}</th>
                      <th scope="col" className="px-4 py-3 font-semibold">{l.leversStatement}</th>
                      <th scope="col" className="px-4 py-3 font-semibold">{l.leversLever}</th>
                      <th scope="col" className="px-4 py-3 text-right font-semibold">{l.leversValue}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {text.levers.map((lever) => (
                      <tr key={lever.area} className="border-b border-border/30 last:border-0">
                        <th scope="row" className="px-4 py-3 font-semibold text-foreground">{lever.area}</th>
                        <td className="px-4 py-3 text-muted-foreground">{lever.statement}</td>
                        <td className="px-4 py-3 text-muted-foreground">{lever.lever}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-right font-bold text-noreja-main">{lever.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ProcessFigure image={text.leversImage} enlargeLabel={l.enlarge} />
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- measures */}
        <section className="px-4 py-12 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">{text.measuresHeading}</h2>
              <p className="text-base leading-relaxed text-muted-foreground">{text.measuresLead}</p>
            </div>

            <div className="mb-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-base font-semibold text-foreground">{l.quadrantsHeading}</h3>
                <dl className="grid grid-cols-2 gap-3">
                  {text.quadrants.map((quadrant) => (
                    <div key={quadrant.name} className="rounded-xl border border-border/50 bg-background/40 p-3">
                      <dt className="text-sm font-semibold text-foreground">{quadrant.name}</dt>
                      <dd className="text-xs text-muted-foreground">{quadrant.text}</dd>
                    </div>
                  ))}
                </dl>
                <h3 className="mt-6 mb-3 text-base font-semibold text-foreground">{l.costHeading}</h3>
                <ul className="flex flex-wrap gap-2">
                  {text.costCategories.map((category) => (
                    <li
                      key={category}
                      className="rounded-md border border-border/60 bg-background/50 px-2.5 py-1 text-xs text-foreground"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm">
                <table className="w-full min-w-[440px] text-left text-sm">
                  <caption className="px-4 pt-4 text-left text-base font-semibold text-foreground">
                    {l.measuresTableHeading}
                  </caption>
                  <thead className="border-b border-border/50 text-xs uppercase tracking-[0.08em] text-muted-foreground">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">{l.priority}</th>
                      <th scope="col" className="px-4 py-3 font-semibold">{l.measure}</th>
                      <th scope="col" className="px-4 py-3 font-semibold">{l.benefit}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {text.measures.map((item, index) => (
                      <tr key={item.measure} className="border-b border-border/30 last:border-0">
                        <td className="px-4 py-3 font-bold text-noreja-main">{index + 1}</td>
                        <td className="px-4 py-3 text-foreground">{item.measure}</td>
                        <td className="px-4 py-3 text-muted-foreground">{item.benefit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <ProcessFigure image={text.measuresImage} enlargeLabel={l.enlarge} />
          </div>
        </section>

        {/* ------------------------------------------------------------ loop */}
        <section className="px-4 py-12 lg:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">{text.loopHeading}</h2>
              <p className="text-base leading-relaxed text-muted-foreground">{text.loopLead}</p>
            </div>

            <ol className="grid gap-4 md:grid-cols-4">
              {text.loop.map((item, index) => (
                <motion.li
                  key={item.step}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-border/50 bg-card/60 p-5 backdrop-blur-sm"
                >
                  <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-noreja-main/10 text-sm font-bold text-noreja-main">
                    {index + 1}
                  </span>
                  <p className="mb-1 text-base font-semibold text-foreground">{item.step}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </motion.li>
              ))}
            </ol>

            <div className="mt-6 rounded-2xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm">
              <h3 className="mb-3 text-base font-semibold text-foreground">{l.loopQuestionsHeading}</h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {text.loopQuestions.map((question) => (
                  <li key={question} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                    {question}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ principles */}
        <section className="px-4 py-12 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
              {text.principlesHeading}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {text.principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-border/50 bg-card/60 p-5 backdrop-blur-sm"
                >
                  <h3 className="mb-2 text-sm font-semibold text-foreground">{principle.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{principle.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- FAQ */}
        <section className="px-4 py-12 lg:px-8">
          <div className="mx-auto w-full max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">{l.faqHeading} {process.name}</h2>
            {/* Plain markup, no accordion: the full answers stay in the DOM. */}
            <div className="space-y-6">
              {text.faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm"
                >
                  <h3 className="mb-2 text-base font-semibold text-foreground">{item.question}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ full case in docs */}
        <section id="case" className="scroll-mt-24 px-4 py-12 lg:px-8">
          <div className="mx-auto w-full max-w-4xl rounded-3xl border border-noreja-main/30 bg-gradient-to-br from-noreja-main/15 via-card/70 to-noreja-secondary/15 p-8 text-center backdrop-blur-sm md:p-12">
            <BookOpen className="mx-auto mb-4 h-8 w-8 text-accent" />
            <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">{text.caseHeading}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground">{text.caseText}</p>
            <Button asChild size="lg" className="story-cta">
              <a href={process.caseUrl} target="_blank" rel="noopener noreferrer">
                {text.caseCta}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <p className="mt-6 text-sm">
              <Link
                to={getRoutePath("contact", language)}
                className="text-noreja-main underline-offset-4 hover:underline"
              >
                {l.contact}
              </Link>
            </p>
          </div>
        </section>

        <FinalCTA
          heading={
            language === "de"
              ? "Deinen End-to-End-Prozess kausal verstehen — "
              : "Understand your end-to-end process causally — "
          }
          headingHighlight={language === "de" ? "sprich mit uns" : "talk to us"}
        />
      </div>
    </div>
  );
};

export default EndToEndProcess;
