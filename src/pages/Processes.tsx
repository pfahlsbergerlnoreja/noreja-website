import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, GitBranch, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, MINT } from "@/components/minerva/MinervaUi";
import { BreadcrumbSchema, StructuredData } from "@/components/StructuredData";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_URL, siteConfig } from "@/lib/config";
import { endToEndProcesses, type EndToEndProcess } from "@/lib/endToEndProcesses";
import { getRoutePath } from "@/lib/routes";

/**
 * Overview of the end-to-end process pages (/de/prozesse, /en/processes).
 *
 * Everything shown per process – scenario, tagline, phases, key facts – comes
 * from src/lib/endToEndProcesses.ts, so a new process appears here without
 * touching this page. The order below only puts the best-known processes first.
 */

const ORDER = ["order-to-cash", "purchase-to-pay", "lead-to-activation", "premium-to-tax"];

/** One accent hue per card, all from the brand palette. */
const ACCENTS = ["var(--noreja-main)", "var(--noreja-tertiary)", "var(--noreja-secondary)", "var(--noreja-main)"];

const copy = {
  de: {
    home: "Startseite",
    breadcrumb: "Prozesse",
    badge: "Causal Process Mining · End-to-End",
    title: "End-to-End-Prozesse",
    titleSub: "vom ersten Schritt bis zum letzten Euro",
    lead:
      "Vier Beispiele, durchgängig analysiert: Wie Geschäftsprozesse wirklich ablaufen, wo sie Zeit und Geld verlieren und welche Ursachen dahinterstehen – von der Auftragsabwicklung über den Einkauf bis zur Versicherungsteuer. Dieselbe Analyse funktioniert für jeden weiteren Prozess, der in deinen Systemen Spuren hinterlässt.",
    whatHeading: "Was ist ein End-to-End-Prozess?",
    what:
      "Ein End-to-End-Prozess umfasst alle Schritte vom auslösenden Ereignis bis zum Ergebnis, das für Kunden oder Unternehmen zählt – über Abteilungs- und Systemgrenzen hinweg. Order-to-Cash beginnt mit dem Kundenauftrag und endet mit dem Zahlungseingang, Purchase-to-Pay reicht vom Bedarf bis zur bezahlten Rechnung. Erst die durchgängige Sicht zeigt, wo eine Verzögerung entsteht und wo sie sich auswirkt.",
    phases: "Phasen",
    facts: "Aus der Analyse",
    open: "Prozess ansehen",
    demoNote:
      "Die Kennzahlen stammen aus synthetischen Demonstrationsdatensätzen. Sie veranschaulichen Analysewege und sind keine Produktivkennzahlen eines Kunden.",
    agentsEyebrow: "Minerva Agent Library",
    agentsHeading: "Deine Prozesse, analysiert von spezialisierten Agents",
    agentsText:
      "Laufzeiten, Wartezeiten, Strukturfehler, Working Capital oder Compliance: Für jede Frage an deine Prozesse gibt es einen Agent, der die passenden Kennzahlen kennt.",
    agentsLink: "Zur Agent Library",
    closeHeading: "Welcher Prozess kostet dich am meisten?",
    closeLead:
      "In einer Demo zeigen wir dir die Analyse auf deinen eigenen Prozessdaten – für einen dieser Prozesse oder einen ganz anderen.",
    ctaDemo: "Demo buchen",
  },
  en: {
    home: "Home",
    breadcrumb: "Processes",
    badge: "Causal process mining · End-to-end",
    title: "End-to-End Processes",
    titleSub: "from the first step to the last euro",
    lead:
      "Four examples, analyzed end to end: how business processes really run, where they lose time and money and what causes are behind it – from order processing and procurement to insurance premium tax. The same analysis works for any other process that leaves traces in your systems.",
    whatHeading: "What is an end-to-end process?",
    what:
      "An end-to-end process covers every step from the triggering event to the result that matters to customers or the company – across departments and systems. Order-to-cash starts with the customer order and ends with the incoming payment; purchase-to-pay runs from the requirement to the paid invoice. Only the continuous view shows where a delay arises and where it takes effect.",
    phases: "Phases",
    facts: "From the analysis",
    open: "View process",
    demoNote:
      "The figures come from synthetic demonstration datasets. They illustrate analysis paths and are not production figures of any customer.",
    agentsEyebrow: "Minerva Agent Library",
    agentsHeading: "Your processes, analyzed by specialized agents",
    agentsText:
      "Cycle times, waiting times, structural deviations, working capital or compliance: for every question about your processes there is an agent that knows the right KPIs.",
    agentsLink: "Open the Agent Library",
    closeHeading: "Which process costs you the most?",
    closeLead: "In a demo we show you the analysis on your own process data – for one of these processes or a completely different one.",
    ctaDemo: "Book a demo",
  },
} as const;

const sortedProcesses = (): EndToEndProcess[] =>
  [...endToEndProcesses].sort((a, b) => {
    const rank = (id: string) => (ORDER.includes(id) ? ORDER.indexOf(id) : ORDER.length);
    return rank(a.id) - rank(b.id);
  });

/** "Vertrieb: vom Lead zum Auftrag" → "Vertrieb" – the strip only needs the short name. */
const shortPhase = (title: string) => title.split(":")[0].trim();

const Processes = () => {
  const { language } = useLanguage();
  const text = copy[language];
  const processes = sortedProcesses();
  const pageUrl = `${SITE_URL}${getRoutePath("processes", language)}`;
  const processPath = (process: EndToEndProcess) =>
    getRoutePath("endToEndProcess", language, { processSlug: process.id });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}#processes`,
    name: `${text.title} – ${text.titleSub}`,
    inLanguage: language,
    numberOfItems: processes.length,
    itemListElement: processes.map((process, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: process.name,
      description: process.content[language].definition,
      url: `${SITE_URL}${processPath(process)}`,
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <StructuredData schema={itemListSchema} id="processes" />
      <BreadcrumbSchema
        items={[
          { name: text.home, url: `${SITE_URL}${getRoutePath("home", language)}` },
          { name: text.breadcrumb, url: pageUrl },
        ]}
      />

      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden pt-16 pb-14 md:pt-24 lg:pb-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 55% 50% at 30% 10%, hsl(var(--noreja-main) / 0.32), transparent 62%),
              radial-gradient(ellipse 45% 45% at 80% 40%, hsl(var(--noreja-tertiary) / 0.14), transparent 60%)
            `,
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center lg:px-8"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Sparkles className="mr-2 h-4 w-4 text-accent" />
            <span className="text-sm font-medium">{text.badge}</span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-[-0.03em] text-foreground md:text-6xl lg:text-7xl">
            {text.title}
            <span className="sr-only"> – </span>
            <span className="mt-3 block bg-gradient-accent bg-clip-text text-2xl font-bold tracking-tight text-transparent md:text-3xl">
              {text.titleSub}
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">{text.lead}</p>

          {/* The example processes as a connected chain; each chip jumps to its card. */}
          <div className="relative mx-auto mt-12 max-w-4xl">
            <div
              aria-hidden="true"
              className="absolute left-6 right-6 top-1/2 hidden h-px -translate-y-1/2 md:block"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--noreja-main) / 0.7), hsl(var(--noreja-tertiary) / 0.7), transparent)",
              }}
            />
            <div className="relative grid grid-cols-2 gap-3 md:grid-cols-4">
              {processes.map((process, index) => (
                <motion.a
                  key={process.id}
                  href={`#${process.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="rounded-xl border bg-background/90 px-3 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-noreja-main/60"
                  style={{ borderColor: `hsl(${ACCENTS[index % ACCENTS.length]} / 0.4)` }}
                >
                  <span className="mb-0.5 block font-mono text-[0.65rem] font-normal tracking-[0.14em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {process.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ---------------- What is an end-to-end process ---------------- */}
      <section className="px-4 pb-14 lg:px-8 lg:pb-20">
        <div
          className="mx-auto max-w-4xl rounded-3xl border p-6 md:p-10"
          style={{
            borderColor: "hsl(var(--border))",
            background: "linear-gradient(160deg, hsl(var(--secondary)), hsl(var(--card)))",
          }}
        >
          <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">{text.whatHeading}</h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{text.what}</p>
        </div>
      </section>

      {/* ---------------- Process cards ---------------- */}
      <section className="px-4 pb-16 lg:px-8 lg:pb-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:gap-10">
          {processes.map((process, index) => {
            const content = process.content[language];
            const accent = ACCENTS[index % ACCENTS.length];
            return (
              <motion.article
                key={process.id}
                id={process.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="group relative scroll-mt-24 overflow-hidden rounded-3xl border p-6 md:p-10"
                style={{
                  borderColor: `hsl(${accent} / 0.3)`,
                  background: `linear-gradient(135deg, hsl(${accent} / 0.12), hsl(var(--card)) 45%)`,
                }}
              >
                {/* Large index number as a quiet backdrop. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-6 select-none font-mono text-[9rem] font-bold leading-none md:text-[12rem]"
                  style={{ color: `hsl(${accent} / 0.07)` }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
                  <div className="flex flex-col gap-4">
                    <span
                      className="w-fit rounded-full border px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.14em]"
                      style={{ color: `hsl(${accent})`, borderColor: `hsl(${accent} / 0.35)` }}
                    >
                      {content.scenario.replace(/^End-to-End-Prozess · |^End-to-end process · /, "")}
                    </span>
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                      <Link to={processPath(process)} className="transition-colors hover:text-noreja-main">
                        {process.name}
                      </Link>
                    </h2>
                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{content.tagline}</p>

                    {/* Phases as a connected strip */}
                    <div className="mt-2">
                      <Eyebrow>{text.phases}</Eyebrow>
                      <div className="relative mt-4">
                      <div
                        aria-hidden="true"
                        className="absolute left-3 right-3 top-3 hidden h-px lg:block"
                        style={{ background: `linear-gradient(90deg, hsl(${accent} / 0.6), hsl(var(--border)))` }}
                      />
                      <ol
                        className="relative grid gap-3 sm:grid-cols-2 lg:[grid-template-columns:repeat(var(--phases),minmax(0,1fr))]"
                        style={{ "--phases": content.phases.length } as React.CSSProperties}
                      >
                        {content.phases.map((phase, phaseIndex) => (
                          <li key={phase.title} className="relative flex items-start gap-2.5 lg:flex-col lg:gap-2">
                            <span
                              className="relative z-10 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[0.7rem] font-bold"
                              style={{ background: `hsl(${accent})`, color: "hsl(var(--background))" }}
                            >
                              {phaseIndex + 1}
                            </span>
                            <span className="text-sm font-medium leading-snug text-foreground">
                              {shortPhase(phase.title)}
                            </span>
                          </li>
                        ))}
                      </ol>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Eyebrow>{text.facts}</Eyebrow>
                    <ul className="grid gap-3">
                      {content.keyFacts.slice(0, 3).map((fact) => (
                        <li
                          key={fact.label}
                          className="rounded-2xl border bg-background/70 px-5 py-4"
                          style={{ borderColor: "hsl(var(--border))" }}
                        >
                          <span
                            className="block text-2xl font-extrabold tracking-tight md:text-3xl"
                            style={{ color: `hsl(${accent})` }}
                          >
                            {fact.value}
                          </span>
                          <span className="text-sm font-medium text-foreground">{fact.label}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild size="lg" className="group/btn mt-2 w-full sm:w-fit">
                      <Link to={processPath(process)}>
                        {text.open}: {process.name}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.article>
            );
          })}
          <p className="text-center text-xs leading-relaxed text-muted-foreground">{text.demoNote}</p>
        </div>
      </section>

      {/* ---------------- Agent Library teaser ---------------- */}
      <section className="px-4 pb-16 lg:px-8 lg:pb-24">
        <div
          className="mx-auto flex w-full max-w-5xl flex-col gap-5 rounded-3xl border p-6 md:flex-row md:items-center md:gap-10 md:p-10"
          style={{
            borderColor: "hsl(var(--noreja-main) / 0.35)",
            background: "linear-gradient(120deg, hsl(var(--noreja-main) / 0.12), hsl(var(--card)))",
          }}
        >
          <div
            aria-hidden="true"
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl"
            style={{ background: "hsl(var(--noreja-tertiary) / 0.1)" }}
          >
            <Bot className="h-8 w-8" style={{ color: MINT }} />
          </div>
          <div className="flex-1">
            <Eyebrow>{text.agentsEyebrow}</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-foreground md:text-[1.7rem]">{text.agentsHeading}</h2>
            <p className="mt-3 text-[0.97rem] leading-relaxed text-muted-foreground">{text.agentsText}</p>
          </div>
          <Button asChild variant="outline" className="group shrink-0 bg-background/60">
            <Link to={getRoutePath("agentLibrary", language)}>
              {text.agentsLink}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ---------------- Closing CTA ---------------- */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 55% 70% at 50% 50%, hsl(var(--noreja-main) / 0.3), transparent 66%)",
          }}
        />
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 text-center lg:px-8">
          <GitBranch className="h-8 w-8" style={{ color: MINT }} />
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground lg:text-[3rem]">
            {text.closeHeading}
          </h2>
          <p className="max-w-[62ch] text-lg leading-relaxed text-muted-foreground">{text.closeLead}</p>
          <Button size="lg" className="group" asChild>
            <a href={siteConfig.hubspot.appointmentBooking} target="_blank" rel="noopener noreferrer">
              {text.ctaDemo}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Processes;
