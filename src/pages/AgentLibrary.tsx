import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, FileSpreadsheet, SlidersHorizontal, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, MINT } from "@/components/minerva/MinervaUi";
import { BreadcrumbSchema, FAQSchema, StructuredData } from "@/components/StructuredData";
import { useLanguage } from "@/contexts/LanguageContext";
import { agentCategories, agentCategoryOrder, agents, getAgentSlug, getAgentsByCategory } from "@/lib/agents";
import { SITE_URL, siteConfig } from "@/lib/config";
import { getRoutePath } from "@/lib/routes";

/**
 * Overview of the Minerva Agent Library, below the Minerva page. Every agent
 * card links to its own detail page; like the Minerva page, all copy is plain
 * markup so the prerendered HTML carries it.
 */

const copy = {
  de: {
    home: "Startseite",
    minerva: "Minerva 2.0",
    library: "Agent Library",
    badge: "Minerva 2.0 · KI-Agenten",
    title: "Minerva Agent Library",
    titleSub: "KI-Agenten für die Geschäftsprozessanalyse",
    lead:
      "Spezialisierte Agents für jeden Aspekt der Prozessanalyse – von Strukturfehlern, Laufzeiten und Wartezeiten über Working Capital und Work in Progress bis zur Compliance. Jeder Agent kennt seine Fragestellung, die passenden Kennzahlen und den Weg zur Antwort und arbeitet direkt auf dem kausalen Prozessgraphen von Noreja.",
    ctaDemo: "Demo buchen",
    ctaMinerva: "Minerva 2.0 ansehen",
    whatHeading: "Was ist ein Agent in Minerva?",
    what:
      "Ein Agent ist eine spezialisierte Ausführung der KI-Assistentin Minerva: mit einem festen Auftrag, den passenden Skills und einem festgelegten Modell. Stellst du ihm eine Frage, weiß er, welche Kennzahlen zählen, wie sie berechnet werden und welche Folgefragen eine gute Analyse beantwortet. Wie Minerva selbst liest jeder Agent nur die Prozessdaten und Dokumente, auf die du Zugriff hast, und ändert nichts in Noreja.",
    howItems: [
      {
        icon: Bot,
        title: "Agent wählen",
        text: "Nimm den Agenten, der zu deiner Frage passt – im Chat oder im Panel direkt neben Dashboard und Analyzer.",
      },
      {
        icon: SlidersHorizontal,
        title: "An euch anpassen",
        text: "Eigene Definitionen, Schwellenwerte und Richtlinien hinterlegt ihr als Skill oder im Context Hub. Der Agent wendet sie bei jeder Analyse an.",
      },
      {
        icon: FileSpreadsheet,
        title: "Ergebnisse weitergeben",
        text: "Tabellen, Diagramme, Excel-Dateien, Berichte und Präsentationen landen in deinem Workspace – fertig für das nächste Meeting.",
      },
    ],
    countLabel: (count: number) => `${count} Agents`,
    open: "Zum Agenten",
    faqHeading: "Häufige Fragen zur Agent Library",
    faq: [
      {
        question: "Was ist die Minerva Agent Library?",
        answer:
          "Die Minerva Agent Library ist eine Sammlung spezialisierter KI-Agenten für die Geschäftsprozessanalyse in Noreja. Jeder Agent deckt einen Aspekt ab – etwa Strukturfehler, Laufzeiten, Wartezeiten, Working Capital, Work in Progress oder Compliance – und kennt die passenden Kennzahlen, Methoden und Folgefragen.",
      },
      {
        question: "Was ist der Unterschied zwischen den Agents der Library und den Frontier Agents?",
        answer:
          "Die Agents der Library arbeiten auf Anfrage: Du stellst eine Frage, der Agent analysiert und antwortet. Die Minerva Frontier Agents arbeiten dauerhaft im Hintergrund an einer Fragestellung, beobachten Kennzahlen und melden sich, sobald sich etwas Relevantes ändert.",
      },
      {
        question: "Können wir eigene Agents anlegen?",
        answer:
          "Ja. Im AI Hub richtet ihr eigene Agenten ein – mit eigenem Auftrag, ausgewählten Skills, festem Modell und eigener Freigabe für Teams oder Abteilungen.",
      },
      {
        question: "Welche Daten brauchen die Agents?",
        answer:
          "Alle Agents arbeiten auf den Perspektiven in Noreja, also auf dem kausalen Prozessgraphen eurer Prozesse. Welche Merkmale ein Agent zusätzlich braucht – etwa Beträge, Zahlungsziele oder ausführende Personen –, steht auf seiner Seite.",
      },
    ],
    closeHeading: "Welcher Agent passt zu deiner Prozessfrage?",
    closeLead:
      "In einer Demo zeigen wir dir die Agents auf einem deiner Prozesse – und welche Antworten sie in den ersten Minuten liefern.",
  },
  en: {
    home: "Home",
    minerva: "Minerva 2.0",
    library: "Agent Library",
    badge: "Minerva 2.0 · AI agents",
    title: "Minerva Agent Library",
    titleSub: "AI agents for business process analysis",
    lead:
      "Specialized agents for every aspect of process analysis – from structural deviations, cycle times and waiting times to working capital, work in progress and compliance. Each agent knows its question, the right KPIs and the way to the answer, and works directly on Noreja’s causal process graph.",
    ctaDemo: "Book a demo",
    ctaMinerva: "See Minerva 2.0",
    whatHeading: "What is an agent in Minerva?",
    what:
      "An agent is a specialized version of the AI assistant Minerva: with a fixed task, the right skills and a set model. When you ask it a question, it knows which KPIs matter, how they are calculated and which follow-up questions a good analysis answers. Like Minerva herself, every agent only reads the process data and documents you have access to and changes nothing in Noreja.",
    howItems: [
      {
        icon: Bot,
        title: "Pick an agent",
        text: "Choose the agent that fits your question – in the chat or in the panel right next to the dashboard and Analyzer.",
      },
      {
        icon: SlidersHorizontal,
        title: "Adapt it to you",
        text: "Store your own definitions, thresholds and policies as a skill or in the Context Hub. The agent applies them in every analysis.",
      },
      {
        icon: FileSpreadsheet,
        title: "Share the results",
        text: "Tables, charts, Excel files, reports and presentations land in your workspace – ready for the next meeting.",
      },
    ],
    countLabel: (count: number) => `${count} agents`,
    open: "View agent",
    faqHeading: "Frequently asked questions about the Agent Library",
    faq: [
      {
        question: "What is the Minerva Agent Library?",
        answer:
          "The Minerva Agent Library is a collection of specialized AI agents for business process analysis in Noreja. Each agent covers one aspect – such as structural deviations, cycle times, waiting times, working capital, work in progress or compliance – and knows the right KPIs, methods and follow-up questions.",
      },
      {
        question: "What is the difference between the library agents and the Frontier Agents?",
        answer:
          "The library agents work on request: you ask a question, the agent analyzes and answers. The Minerva Frontier Agents work continuously in the background on one question, monitor KPIs and report as soon as something relevant changes.",
      },
      {
        question: "Can we create our own agents?",
        answer:
          "Yes. In the AI Hub you set up your own agents – with their own task, selected skills, a fixed model and their own sharing for teams or departments.",
      },
      {
        question: "What data do the agents need?",
        answer:
          "All agents work on the perspectives in Noreja, i.e. on the causal process graph of your processes. Which attributes an agent needs in addition – such as amounts, payment terms or executing people – is listed on its page.",
      },
    ],
    closeHeading: "Which agent fits your process question?",
    closeLead:
      "In a demo we show you the agents on one of your processes – and the answers they deliver in the first few minutes.",
  },
} as const;

const AgentLibrary = () => {
  const { language } = useLanguage();
  const text = copy[language];
  const pageUrl = `${SITE_URL}${getRoutePath("agentLibrary", language)}`;
  const agentUrl = (agent: (typeof agents)[number]) =>
    `${SITE_URL}${getRoutePath("agentDetail", language, { agentSlug: getAgentSlug(agent, language) })}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}#agents`,
    name: `${text.title} – ${text.titleSub}`,
    inLanguage: language,
    numberOfItems: agents.length,
    itemListElement: agentCategoryOrder
      .flatMap(getAgentsByCategory)
      .map((agent, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: agent.content[language].name,
        description: agent.content[language].teaser,
        url: agentUrl(agent),
      })),
  };

  return (
    <div className="min-h-screen bg-background">
      <StructuredData schema={itemListSchema} id="agent-library" />
      <FAQSchema items={text.faq.map((item) => ({ ...item }))} />
      <BreadcrumbSchema
        items={[
          { name: text.home, url: `${SITE_URL}${getRoutePath("home", language)}` },
          { name: text.minerva, url: `${SITE_URL}${getRoutePath("minerva", language)}` },
          { name: text.library, url: pageUrl },
        ]}
      />

      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-24 lg:pb-16">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 50% 10%, hsl(var(--noreja-main) / 0.34), transparent 62%),
              radial-gradient(ellipse 45% 45% at 85% 60%, hsl(var(--noreja-tertiary) / 0.12), transparent 60%)
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
            <span className="text-foreground">{text.library}</span>
          </nav>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Sparkles className="mr-2 h-4 w-4 text-accent" />
            <span className="text-sm font-medium">{text.badge}</span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-[-0.03em] text-foreground md:text-5xl lg:text-6xl">
            {text.title}
            {/* Keeps title and subtitle apart in the text crawlers read. */}
            <span className="sr-only"> – </span>
            <span className="mt-3 block bg-gradient-accent bg-clip-text text-2xl font-bold tracking-tight text-transparent md:text-3xl">
              {text.titleSub}
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">{text.lead}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="group">
              <a href={siteConfig.hubspot.appointmentBooking} target="_blank" rel="noopener noreferrer">
                {text.ctaDemo}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/60">
              <Link to={getRoutePath("minerva", language)}>{text.ctaMinerva}</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ---------------- What is an agent ---------------- */}
      <section className="px-4 pb-12 lg:px-8 lg:pb-16">
        <div className="mx-auto w-full max-w-6xl">
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
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {text.howItems.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border/50 bg-card/60 p-5">
                <item.icon className="mb-3 h-5 w-5" style={{ color: MINT }} />
                <h3 className="mb-1.5 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Agents by category ---------------- */}
      {agentCategoryOrder.map((category, categoryIndex) => {
        const categoryAgents = getAgentsByCategory(category);
        const categoryText = agentCategories[category][language];
        return (
          <section
            key={category}
            className={categoryIndex % 2 === 0 ? "border-y py-14 lg:py-20" : "py-14 lg:py-20"}
            style={
              categoryIndex % 2 === 0
                ? { borderColor: "hsl(var(--border))", background: "hsl(var(--card))" }
                : undefined
            }
          >
            <div className="mx-auto w-full max-w-6xl px-4 lg:px-8">
              <div className="mb-8 flex max-w-[66ch] flex-col gap-3">
                <Eyebrow>{text.countLabel(categoryAgents.length)}</Eyebrow>
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground lg:text-[2.4rem]">
                  {categoryText.title}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">{categoryText.text}</p>
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {categoryAgents.map((agent, index) => {
                  const content = agent.content[language];
                  return (
                    <motion.div
                      key={agent.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                    >
                      <Link
                        to={getRoutePath("agentDetail", language, { agentSlug: getAgentSlug(agent, language) })}
                        className="group flex h-full flex-col rounded-2xl border border-border/50 bg-background p-6 transition-colors hover:border-noreja-main/50"
                      >
                        <span
                          aria-hidden="true"
                          className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                          style={{ background: "hsl(var(--noreja-tertiary) / 0.1)" }}
                        >
                          <agent.icon className="h-5 w-5" style={{ color: MINT }} />
                        </span>
                        <h3 className="mb-2 text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-noreja-main">
                          {content.name}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{content.teaser}</p>
                        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-foreground">
                          {text.open}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* ---------------- FAQ ---------------- */}
      <section className="px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">{text.faqHeading}</h2>
          <div className="space-y-4">
            {text.faq.map((item) => (
              <div key={item.question} className="rounded-2xl border border-border/50 bg-card/60 p-6">
                <h3 className="mb-2 text-base font-semibold text-foreground">{item.question}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
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
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground lg:text-[3rem]">
            {text.closeHeading}
          </h2>
          <p className="max-w-[62ch] text-lg leading-relaxed text-muted-foreground">{text.closeLead}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="group" asChild>
              <a href={siteConfig.hubspot.appointmentBooking} target="_blank" rel="noopener noreferrer">
                {text.ctaDemo}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to={getRoutePath("minerva", language)}>{text.ctaMinerva}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentLibrary;
