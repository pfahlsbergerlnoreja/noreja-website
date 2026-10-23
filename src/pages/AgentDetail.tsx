import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Database, FileSpreadsheet, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, MINT, Prompt } from "@/components/minerva/MinervaUi";
import { BreadcrumbSchema, FAQSchema, StructuredData } from "@/components/StructuredData";
import { useLanguage } from "@/contexts/LanguageContext";
import { agentCategories, getAgentBySlug, getAgentSlug, getRelatedAgents } from "@/lib/agents";
import { SITE_URL, siteConfig } from "@/lib/config";
import { getRoutePath } from "@/lib/routes";

/**
 * Detail page of one agent in the Minerva Agent Library. The agent name is the
 * H1 and recurs in the H2s, so the page ranks for the agent's own search term;
 * the content comes from src/lib/agents.ts.
 */

const labels = {
  de: {
    home: "Startseite",
    minerva: "Minerva 2.0",
    library: "Agent Library",
    back: "Alle Agents der Library",
    ctaDemo: "Demo buchen",
    what: (name: string) => `Was macht der ${name}?`,
    questions: (name: string) => `Fragen, die der ${name} beantwortet`,
    steps: (name: string) => `So arbeitet der ${name}`,
    metrics: "Kennzahlen und Methoden",
    example: "Beispiel aus der Praxis",
    output: "Was du bekommst",
    data: "Welche Daten der Agent braucht",
    processes: "Passende End-to-End-Prozesse",
    faq: (name: string) => `${name}: häufige Fragen`,
    related: "Weitere Agents aus der Library",
    open: "Zum Agenten",
    partOfEyebrow: "Teil von Minerva 2.0",
    partOf: (name: string) =>
      `Der ${name} ist ein Agent in Minerva, der KI-Assistentin in Noreja. Er nutzt dieselben Datenquellen, dieselbe Modellwahl – lokal oder Cloud – und dieselben Zugriffsrechte: Er liest nur, was du selbst sehen darfst, und ändert nichts in Noreja.`,
    partOfLink: "Minerva 2.0 ansehen",
    closeHeading: (name: string) => `Erlebe, was der ${name} in deinen Prozessdaten findet`,
    closeLead:
      "In einer Demo zeigen wir dir, welche Antworten der Agent auf einem deiner Prozesse liefert – mit Zahlen, Begründung und Quelle.",
  },
  en: {
    home: "Home",
    minerva: "Minerva 2.0",
    library: "Agent Library",
    back: "All agents in the library",
    ctaDemo: "Book a demo",
    what: (name: string) => `What does the ${name} do?`,
    questions: (name: string) => `Questions the ${name} answers`,
    steps: (name: string) => `How the ${name} works`,
    metrics: "KPIs and methods",
    example: "A practical example",
    output: "What you get",
    data: "What data the agent needs",
    processes: "Matching end-to-end processes",
    faq: (name: string) => `${name}: frequently asked questions`,
    related: "More agents from the library",
    open: "View agent",
    partOfEyebrow: "Part of Minerva 2.0",
    partOf: (name: string) =>
      `The ${name} is an agent in Minerva, the AI assistant in Noreja. It uses the same data sources, the same choice of model – local or cloud – and the same access rights: it only reads what you are allowed to see and changes nothing in Noreja.`,
    partOfLink: "See Minerva 2.0",
    closeHeading: (name: string) => `See what the ${name} finds in your process data`,
    closeLead:
      "In a demo we show you what answers the agent delivers on one of your processes – with numbers, reasoning and sources.",
  },
} as const;

const PROCESS_NAMES: Record<string, string> = {
  "purchase-to-pay": "Purchase-to-Pay",
  "order-to-cash": "Order-to-Cash",
  "lead-to-activation": "Lead-to-Activation",
  "premium-to-tax": "Premium-to-Tax",
};

const AgentDetail = () => {
  const { agentSlug } = useParams<{ agentSlug: string }>();
  const { language } = useLanguage();
  const agent = agentSlug ? getAgentBySlug(agentSlug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [agentSlug]);

  if (!agent) {
    return <Navigate to={getRoutePath("agentLibrary", language)} replace />;
  }
  // A slug of the other language: send it to this language's own slug.
  const slug = getAgentSlug(agent, language);
  if (agentSlug !== slug) {
    return <Navigate to={getRoutePath("agentDetail", language, { agentSlug: slug })} replace />;
  }

  const text = labels[language];
  const content = agent.content[language];
  const category = agentCategories[agent.category][language];
  const related = getRelatedAgents(agent);

  const libraryUrl = `${SITE_URL}${getRoutePath("agentLibrary", language)}`;
  const minervaUrl = `${SITE_URL}${getRoutePath("minerva", language)}`;
  const pageUrl = `${SITE_URL}${getRoutePath("agentDetail", language, { agentSlug: slug })}`;

  const agentSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${pageUrl}#agent`,
    name: content.name,
    alternateName: content.tagline,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: language === "de" ? "KI-Agent für Prozessanalyse" : "AI agent for process analysis",
    operatingSystem: "Web browser",
    url: pageUrl,
    inLanguage: language,
    description: content.summary,
    isPartOf: { "@type": "SoftwareApplication", "@id": `${minervaUrl}#minerva`, name: "Noreja Minerva", url: minervaUrl },
    provider: { "@type": "Organization", name: "Noreja Intelligence GmbH", url: SITE_URL },
    featureList: content.metrics.map((metric) => `${metric.name}: ${metric.text}`),
  };

  return (
    <div className="min-h-screen bg-background">
      <StructuredData schema={agentSchema} id="agent" />
      <FAQSchema items={content.faq.map((item) => ({ ...item }))} />
      <BreadcrumbSchema
        items={[
          { name: text.home, url: `${SITE_URL}${getRoutePath("home", language)}` },
          { name: text.minerva, url: minervaUrl },
          { name: text.library, url: libraryUrl },
          { name: content.name, url: pageUrl },
        ]}
      />

      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-24 lg:pb-16">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 50% 10%, hsl(var(--noreja-main) / 0.3), transparent 62%),
              radial-gradient(ellipse 45% 45% at 85% 60%, hsl(var(--noreja-tertiary) / 0.1), transparent 60%)
            `,
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center lg:px-8"
        >
          <nav aria-label="Breadcrumb" className="mb-6 font-mono text-[0.72rem] tracking-[0.08em] text-muted-foreground">
            <Link to={getRoutePath("minerva", language)} className="hover:text-foreground">
              {text.minerva}
            </Link>
            <span className="mx-2">/</span>
            <Link to={getRoutePath("agentLibrary", language)} className="hover:text-foreground">
              {text.library}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{content.name}</span>
          </nav>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <agent.icon className="mr-2 h-4 w-4" style={{ color: MINT }} />
            <span className="text-sm font-medium">{category.title}</span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-[-0.03em] text-foreground md:text-5xl lg:text-6xl">
            {content.name}
            {/* Keeps name and tagline apart in the text crawlers read. */}
            <span className="sr-only"> – </span>
            <span className="mx-auto mt-4 block max-w-3xl text-xl font-semibold leading-snug tracking-tight text-muted-foreground md:text-2xl">
              {content.tagline}
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">{content.teaser}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="group">
              <a href={siteConfig.hubspot.appointmentBooking} target="_blank" rel="noopener noreferrer">
                {text.ctaDemo}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/60">
              <Link to={getRoutePath("agentLibrary", language)}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {text.back}
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ---------------- What it does ---------------- */}
      <section className="px-4 pb-12 lg:px-8 lg:pb-16">
        <div
          className="mx-auto max-w-4xl rounded-3xl border p-6 md:p-10"
          style={{
            borderColor: "hsl(var(--border))",
            background: "linear-gradient(160deg, hsl(var(--secondary)), hsl(var(--card)))",
          }}
        >
          <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">{text.what(content.name)}</h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{content.summary}</p>
        </div>
      </section>

      {/* ---------------- Questions ---------------- */}
      <section className="px-4 pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="mb-8 text-2xl font-extrabold leading-tight tracking-tight text-foreground md:text-3xl">
            {text.questions(content.name)}
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {content.questions.map((question) => (
              <Prompt key={question} language={language}>
                {question}
              </Prompt>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Steps ---------------- */}
      <section
        className="border-y py-16 lg:py-20"
        style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--card))" }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <h2 className="mb-10 max-w-[66ch] text-3xl font-extrabold leading-tight tracking-tight text-foreground lg:text-[2.4rem]">
            {text.steps(content.name)}
          </h2>
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {content.steps.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-border/50 bg-background p-6"
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-noreja-main/10 text-sm font-bold text-noreja-main">
                  {index + 1}
                </span>
                <h3 className="mb-2 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- Metrics ---------------- */}
      <section className="px-4 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="mb-8 text-2xl font-extrabold leading-tight tracking-tight text-foreground md:text-3xl">
            {text.metrics}
          </h2>
          <dl className="grid gap-3 md:grid-cols-2">
            {content.metrics.map((metric) => (
              <div
                key={metric.name}
                className="grid grid-cols-[20px_1fr] items-start gap-3 rounded-xl border bg-card/60 px-4 py-3.5"
                style={{ borderColor: "hsl(var(--border))" }}
              >
                <Check className="mt-0.5 h-5 w-5" style={{ color: MINT }} strokeWidth={2} />
                <div>
                  <dt className="text-[0.97rem] font-semibold tracking-tight text-foreground">{metric.name}</dt>
                  <dd className="text-[0.9rem] text-muted-foreground">{metric.text}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------------- Example, output, data ---------------- */}
      <section
        className="border-y py-16 lg:py-20"
        style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--card))" }}
      >
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 lg:grid-cols-[1.2fr_1fr] lg:gap-14 lg:px-8">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground lg:text-[2.4rem]">
              {text.example}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{content.example}</p>
            {agent.processes && agent.processes.length > 0 && (
              <div className="mt-2">
                <Eyebrow>{text.processes}</Eyebrow>
                <div className="mt-3 flex flex-wrap gap-2">
                  {agent.processes.map((processSlug) => (
                    <Link
                      key={processSlug}
                      to={getRoutePath("endToEndProcess", language, { processSlug })}
                      className="group inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-noreja-main/50"
                      style={{ borderColor: "hsl(var(--border))" }}
                    >
                      {PROCESS_NAMES[processSlug]}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border/50 bg-background p-6">
              <FileSpreadsheet className="mb-3 h-5 w-5" style={{ color: MINT }} />
              <h3 className="mb-2 text-base font-semibold text-foreground">{text.output}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{content.output}</p>
            </div>
            <div className="rounded-2xl border border-border/50 bg-background p-6">
              <Database className="mb-3 h-5 w-5" style={{ color: MINT }} />
              <h3 className="mb-2 text-base font-semibold text-foreground">{text.data}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{content.data}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="px-4 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">{text.faq(content.name)}</h2>
          {/* Plain markup, no accordion: the answers stay in the DOM for crawlers. */}
          <div className="space-y-4">
            {content.faq.map((item) => (
              <div key={item.question} className="rounded-2xl border border-border/50 bg-card/60 p-6">
                <h3 className="mb-2 text-base font-semibold text-foreground">{item.question}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Part of Minerva ---------------- */}
      <section className="px-4 pb-16 lg:px-8 lg:pb-20">
        <div
          className="mx-auto flex w-full max-w-5xl flex-col gap-4 rounded-2xl border p-6 md:flex-row md:items-center md:gap-8"
          style={{
            borderColor: "hsl(var(--noreja-main) / 0.35)",
            background: "linear-gradient(120deg, hsl(var(--noreja-main) / 0.12), hsl(var(--card)))",
          }}
        >
          <div className="flex-1">
            <Eyebrow>{text.partOfEyebrow}</Eyebrow>
            <p className="mt-2 text-[0.97rem] leading-relaxed text-muted-foreground">{text.partOf(content.name)}</p>
          </div>
          <Button asChild variant="outline" className="group shrink-0 bg-background/60">
            <Link to={getRoutePath("minerva", language)}>
              <Sparkles className="mr-2 h-4 w-4" />
              {text.partOfLink}
            </Link>
          </Button>
        </div>
      </section>

      {/* ---------------- Related agents ---------------- */}
      {related.length > 0 && (
        <section
          className="border-y py-16 lg:py-20"
          style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--card))" }}
        >
          <div className="mx-auto w-full max-w-6xl px-4 lg:px-8">
            <h2 className="mb-8 text-2xl font-extrabold leading-tight tracking-tight text-foreground md:text-3xl">
              {text.related}
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((relatedAgent) => {
                const relatedContent = relatedAgent.content[language];
                return (
                  <Link
                    key={relatedAgent.id}
                    to={getRoutePath("agentDetail", language, { agentSlug: getAgentSlug(relatedAgent, language) })}
                    className="group flex h-full flex-col rounded-2xl border border-border/50 bg-background p-6 transition-colors hover:border-noreja-main/50"
                  >
                    <relatedAgent.icon className="mb-3 h-5 w-5" style={{ color: MINT }} />
                    <h3 className="mb-2 text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-noreja-main">
                      {relatedContent.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{relatedContent.teaser}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-foreground">
                      {text.open}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-8">
              <Link
                to={getRoutePath("agentLibrary", language)}
                className="group inline-flex items-center gap-2 font-medium text-foreground underline decoration-dotted underline-offset-4 hover:decoration-solid"
              >
                {text.back}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ---------------- Closing CTA ---------------- */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 55% 70% at 50% 50%, hsl(var(--noreja-main) / 0.3), transparent 66%)",
          }}
        />
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground lg:text-[2.6rem]">
            {text.closeHeading(content.name)}
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

export default AgentDetail;
