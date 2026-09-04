import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Boxes,
  Braces,
  Database,
  Dice5,
  FlaskConical,
  GitBranch,
  Layers,
  Lock,
  MonitorSmartphone,
  Repeat,
  ShieldCheck,
  Sparkles,
  Target,
  Timer,
  Workflow,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCTA } from "@/components/FinalCTA";
import { SmartDataForgeGate } from "@/components/SmartDataForgeGate";
import { BreadcrumbSchema, FAQSchema, StructuredData } from "@/components/StructuredData";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_URL, SMART_DATA_FORGE_VERSION } from "@/lib/config";
import { getRoutePath } from "@/lib/routes";

/**
 * Landing page for the Smart Data Forge lead magnet.
 *
 * Everything above the gate is plain markup so it survives the build-time
 * prerender (scripts/prerender.ts) — the generator itself only ever mounts in
 * the browser, behind <SmartDataForgeGate />.
 */

const copy = {
  de: {
    badge: `Smart Data Forge ${SMART_DATA_FORGE_VERSION}`,
    title: "Process Mining Daten selbst generieren",
    lead:
      "Smart Data Forge ist das Tool, mit dem du dir deine Process-Mining-Daten selbst baust: Tabellen, Schlüssel, Zeitstempel, kausale Ketten, gezielte Abweichungen und deren Geschäftsfolgen — fertig als DDL- und INSERT-Skripte für PostgreSQL, SQL Server, MySQL oder Oracle. Du öffnest es und legst los.",
    body: [
      "Ein Demo-Datensatz aus Zufallsrauschen beweist nichts. „20 % aller Fälle haben Rework“ ist keine Erkenntnis, sondern ein Zufallsgenerator mit Prozentzeichen. Interessant wird es erst, wenn die Daten eine bekannte Ursache tragen: Lieferanten der Gruppe C liefern bei kritischem Material häufiger ab — daraus entsteht Prüfverzug, daraus ein Rechnungsblock, daraus eine Zahlung nach Skontofrist.",
      "Genau das baust du hier: Du legst die Ground Truth vorher fest, erzeugst die Daten dazu und prüfst anschließend, ob Noreja die Ursache findet. Damit wird aus einer Demo ein Test — mit einer Antwort, die du vorher kennst.",
    ],
    primaryCta: "Zugang freischalten",
    secondaryCta: "So läuft es ab",
    note: "Läuft vollständig lokal im Browser. Keine Installation, kein Server, keine Datenübertragung.",

    whyHeading: "Warum synthetische Daten mit Ursache",
    why: [
      {
        icon: Target,
        title: "Ground Truth statt Zufall",
        text: "Ursache, betroffene Dimension, Prozesswirkung, Fehlermuster und Business Outcome stehen fest, bevor die erste Zeile erzeugt wird.",
      },
      {
        icon: Boxes,
        title: "Objekte statt flachem Log",
        text: "Bestellung, Lieferung, Prüfung, Rechnung, Zahlung — mit echten 1:N- und N:1-Beziehungen, Verzweigungen und Joins statt einer einzigen Ereignisspalte.",
      },
      {
        icon: Dice5,
        title: "Reproduzierbar per Seed",
        text: "Ein fester Seed liefert denselben Datensatz erneut. Demos laufen jedes Mal identisch, Tests bleiben vergleichbar.",
      },
      {
        icon: FlaskConical,
        title: "Prüfbares Ergebnis",
        text: "Weil die Ursache bekannt ist, lässt sich messen, ob eine Analyse sie findet — statt nur zu zeigen, dass irgendetwas auffällt.",
      },
    ],

    stepsHeading: "Was der Generator kann",
    stepsLead:
      "Sieben Schritte, von der Tabelle bis zum Sammellauf. Jeder davon ist im Tool ein eigener Bereich.",
    steps: [
      {
        icon: Layers,
        title: "01 · Define Tables",
        text: "Geschäftsobjekte, Dimensionen und Historien: Primary Key, Foreign Keys, primärer Zeitstempel, weitere Zeitstempel, Properties und Status-Spalten.",
      },
      {
        icon: Database,
        title: "02 · Generate DDL",
        text: "Das passende Datenbankschema für PostgreSQL, SQL Server, MySQL oder Oracle — auf Wunsch als DROP + CREATE für Testumgebungen.",
      },
      {
        icon: Workflow,
        title: "03 · Causal Chain",
        text: "Die Prozesskette: Reihenfolge, Zeitabstände und -verteilungen, Kardinalitäten, AND-/XOR-Logik, Zeittrends, Fallzahl, Zeitraum und Seed.",
      },
      {
        icon: GitBranch,
        title: "04 · Special Behaviour",
        text: "Gezielte Abweichungen: Overjump, Wrong Order, Rework und Abort — auch bedingt, sodass eine Property Timing, Wahrscheinlichkeit oder Attribute beeinflusst.",
      },
      {
        icon: Braces,
        title: "05 · Column Values",
        text: "Werte und Verteilungen für Lieferantengruppe, Warengruppe, Werk, Betrag, Menge, Region oder Risikoklasse — jede Property mit analytischem Zweck.",
      },
      {
        icon: Wrench,
        title: "06 · Generate Data",
        text: "Erst klein zum Prüfen, dann voll: INSERT-Skripte zum Herunterladen und Einspielen in die Zieldatenbank.",
      },
      {
        icon: Timer,
        title: "07 · Bündelung / Batching",
        text: "Im Expertenmodus: feste Prüftermine, Kapazität, Rückstau, Sammelläufe und der Durchschlag einer Verzögerung bis in den Skontoverlust.",
      },
    ],

    workflowHeading: "In drei Schritten zum Datensatz",
    workflow: [
      {
        icon: Lock,
        title: "E-Mail eintragen",
        text: "Der Generator öffnet sich direkt hier auf der Seite — in voller Größe, sofort nutzbar. Wer lieber offline arbeitet, lädt ihn zusätzlich herunter und startet ihn lokal.",
      },
      {
        icon: Sparkles,
        title: "Datei der KI geben",
        text: "Lade das Tool zusätzlich in ChatGPT, Claude oder Gemini hoch. Die KI sieht damit die tatsächlich vorhandenen Felder deiner Version und führt dich vom Kundenproblem über Hypothese und Ground Truth Schritt für Schritt durch die Konfiguration.",
      },
      {
        icon: Repeat,
        title: "Erzeugen, laden, prüfen",
        text: "Daten generieren, in die Datenbank einspielen, in Noreja analysieren — und gegen die eingebaute Ursache prüfen. Die Konfiguration lässt sich als JSON speichern, wieder laden und von der KI gegen die Ground Truth reviewen.",
      },
    ],

    specsHeading: "Auf einen Blick",
    specs: [
      { icon: MonitorSmartphone, label: "Sofort einsatzbereit im Browser" },
      { icon: Database, label: "PostgreSQL · SQL Server · MySQL · Oracle" },
      { icon: ShieldCheck, label: "Keine Datenübertragung, keine Installation" },
      { icon: Dice5, label: "Seed für reproduzierbare Läufe" },
      { icon: Braces, label: "Konfiguration als JSON speichern und laden" },
      { icon: Timer, label: "Batching und Rückstau im Expertenmodus" },
    ],

    gateHeading: "Generator öffnen",
    gateLead:
      "Einmal E-Mail eintragen — danach bleibt der Zugang in diesem Browser bestehen.",

    faqHeading: "Häufige Fragen",
  },

  en: {
    badge: `Smart Data Forge ${SMART_DATA_FORGE_VERSION}`,
    title: "Generate your own process mining data",
    lead:
      "Smart Data Forge is the tool for building your own process mining data: tables, keys, timestamps, causal chains, deliberate deviations and their business consequences — ready to run as DDL and INSERT scripts for PostgreSQL, SQL Server, MySQL or Oracle. You open it and get going.",
    body: [
      "A demo dataset made of random noise proves nothing. “20% of all cases have rework” is not an insight, it is a random number generator with a percent sign. It only gets interesting once the data carries a known cause: group C suppliers deviate more often on critical material — which creates an inspection backlog, which creates an invoice block, which creates a payment after the discount deadline.",
      "That is what you build here: you fix the ground truth first, generate the data around it, and then check whether Noreja finds the cause. That turns a demo into a test — one whose answer you already know.",
    ],
    primaryCta: "Unlock access",
    secondaryCta: "See how it works",
    note: "Runs entirely in your browser. No install, no server, no data leaving your machine.",

    whyHeading: "Why synthetic data needs a cause",
    why: [
      {
        icon: Target,
        title: "Ground truth, not randomness",
        text: "Cause, affected dimension, process effect, error pattern and business outcome are settled before the first row is generated.",
      },
      {
        icon: Boxes,
        title: "Objects, not a flat log",
        text: "Order, delivery, inspection, invoice, payment — with real 1:N and N:1 relationships, branches and joins instead of one event column.",
      },
      {
        icon: Dice5,
        title: "Reproducible by seed",
        text: "A fixed seed returns the same dataset again. Demos run identically every time and tests stay comparable.",
      },
      {
        icon: FlaskConical,
        title: "A verifiable result",
        text: "Because the cause is known, you can measure whether an analysis actually finds it — instead of just showing that something looks odd.",
      },
    ],

    stepsHeading: "What the generator does",
    stepsLead:
      "Seven steps, from the first table to the collective run. Each one is its own area in the tool.",
    steps: [
      {
        icon: Layers,
        title: "01 · Define tables",
        text: "Business objects, dimensions and histories: primary key, foreign keys, primary timestamp, additional timestamps, properties and status columns.",
      },
      {
        icon: Database,
        title: "02 · Generate DDL",
        text: "The matching database schema for PostgreSQL, SQL Server, MySQL or Oracle — optionally as DROP + CREATE for test environments.",
      },
      {
        icon: Workflow,
        title: "03 · Causal chain",
        text: "The process chain: order, time gaps and distributions, cardinalities, AND/XOR logic, time trends, case count, period and seed.",
      },
      {
        icon: GitBranch,
        title: "04 · Special behaviour",
        text: "Deliberate deviations: overjump, wrong order, rework and abort — conditional too, so a property can drive timing, likelihood or attributes.",
      },
      {
        icon: Braces,
        title: "05 · Column values",
        text: "Values and distributions for supplier group, material group, plant, amount, quantity, region or risk class — every property with an analytical purpose.",
      },
      {
        icon: Wrench,
        title: "06 · Generate data",
        text: "Small first to check, then full: INSERT scripts to download and load into your target database.",
      },
      {
        icon: Timer,
        title: "07 · Bundling / batching",
        text: "In expert mode: fixed inspection slots, capacity, backlog, collective runs and how one delay propagates all the way into lost cash discount.",
      },
    ],

    workflowHeading: "Three steps to a dataset",
    workflow: [
      {
        icon: Lock,
        title: "Leave your email",
        text: "The generator opens right here on the page — full size, ready to use. If you would rather work offline, download it as well and start it locally.",
      },
      {
        icon: Sparkles,
        title: "Hand the file to your AI",
        text: "Upload the tool to ChatGPT, Claude or Gemini as well. The AI then sees the fields your version actually has and walks you from the customer problem through hypothesis and ground truth to the configuration, step by step.",
      },
      {
        icon: Repeat,
        title: "Generate, load, verify",
        text: "Generate the data, load it into your database, analyse it in Noreja — and check it against the cause you built in. The configuration saves as JSON, loads back, and can be reviewed by the AI against your ground truth.",
      },
    ],

    specsHeading: "At a glance",
    specs: [
      { icon: MonitorSmartphone, label: "Ready to use straight in the browser" },
      { icon: Database, label: "PostgreSQL · SQL Server · MySQL · Oracle" },
      { icon: ShieldCheck, label: "No data transfer, no installation" },
      { icon: Dice5, label: "Seed for reproducible runs" },
      { icon: Braces, label: "Save and load the configuration as JSON" },
      { icon: Timer, label: "Batching and backlog in expert mode" },
    ],

    gateHeading: "Open the generator",
    gateLead: "Enter your email once — access then stays available in this browser.",

    faqHeading: "Frequently asked questions",
  },
} as const;

const faq = {
  de: [
    {
      question: "Was ist Noreja Smart Data Forge?",
      answer:
        "Smart Data Forge ist ein Tool, mit dem du synthetische Process-Mining-Daten selbst erzeugst; es läuft vollständig im Browser. Du definierst darin Tabellen und Beziehungen, eine kausale Prozesskette, gezielte Abweichungen wie Overjump, Wrong Order, Rework oder Abort sowie Werteverteilungen für die Properties. Als Ergebnis erzeugt das Tool DDL- und INSERT-Skripte für PostgreSQL, SQL Server, MySQL oder Oracle.",
    },
    {
      question: "Wofür brauche ich synthetische Prozessdaten?",
      answer:
        "Für Demos, Schulungen, Proof of Concepts und Tests, bei denen echte Kundendaten nicht verwendet werden dürfen oder noch nicht verfügbar sind. Weil die Ursache bewusst eingebaut wird, lässt sich außerdem prüfen, ob eine Analyse sie wiederfindet — das geht mit echten Daten nur selten, weil dort niemand die Wahrheit sicher kennt.",
    },
    {
      question: "Was bedeutet Ground Truth in diesem Zusammenhang?",
      answer:
        "Ground Truth ist die Ursache, die absichtlich in die Daten eingebaut wird, zusammen mit ihrer Wirkung: betroffene Dimension, veränderter Prozessschritt, entstehendes Fehlermuster und der daraus folgende Business Outcome. Eine gute Ground Truth lässt sich nicht an einer Spalte ROOT_CAUSE ablesen, sondern muss sich aus Beziehungen, Zeitverhalten, Properties und Vergleichsgruppen erschließen.",
    },
    {
      question: "Verlassen meine Eingaben den Rechner?",
      answer:
        "Nein. Das Tool läuft vollständig im Browser und macht keine Netzwerkaufrufe: Konfiguration und erzeugte Skripte bleiben auf deinem Rechner, Downloads werden lokal erstellt. Für den Zugang wird lediglich eine E-Mail-Adresse abgefragt.",
    },
    {
      question: "Welche Datenbanken werden unterstützt?",
      answer:
        "Der DDL-Export der bereitgestellten Version unterstützt PostgreSQL, SQL Server, MySQL und Oracle. Für Testumgebungen kann zusätzlich der Modus DROP + CREATE genutzt werden, der vorhandene Tabellen ersetzt.",
    },
    {
      question: "Wie arbeitet der AI Coach mit dem Generator zusammen?",
      answer:
        "Du lädst das Tool in eine KI wie ChatGPT, Claude oder Gemini hoch. Die KI kann damit die tatsächlich vorhandenen Felder lesen und führt dich in der Rolle eines Coaches vom Geschäftsproblem über Hypothese und Ground Truth bis zur konkreten Einstellung jedes einzelnen Generator-Schritts. Die gespeicherte JSON-Konfiguration kannst du der KI anschließend zur Prüfung gegen die Ground Truth geben.",
    },
    {
      question: "Was kostet der Zugang?",
      answer:
        "Nichts. Der Generator ist nach der Eingabe einer E-Mail-Adresse frei nutzbar und kann zusätzlich heruntergeladen und lokal weiterverwendet werden.",
    },
  ],
  en: [
    {
      question: "What is Noreja Smart Data Forge?",
      answer:
        "Smart Data Forge is a tool for generating your own synthetic process mining data; it runs entirely in the browser. In it you define tables and relationships, a causal process chain, deliberate deviations such as overjump, wrong order, rework or abort, and value distributions for the properties. The tool then produces DDL and INSERT scripts for PostgreSQL, SQL Server, MySQL or Oracle.",
    },
    {
      question: "Why would I need synthetic process data?",
      answer:
        "For demos, training, proofs of concept and tests where real customer data must not be used or is not available yet. And because the cause is deliberately built in, you can check whether an analysis actually recovers it — something real data rarely allows, since nobody there knows the truth for certain.",
    },
    {
      question: "What does ground truth mean here?",
      answer:
        "Ground truth is the cause deliberately built into the data, together with its effect: the affected dimension, the process step it changes, the resulting error pattern and the business outcome that follows. A good ground truth cannot be read off a ROOT_CAUSE column; it has to be derivable from relationships, timing, properties and comparison groups.",
    },
    {
      question: "Does anything I enter leave my machine?",
      answer:
        "No. The tool runs entirely in the browser and makes no network calls: the configuration and the generated scripts stay on your machine, and downloads are created locally. All that is asked for access is an email address.",
    },
    {
      question: "Which databases are supported?",
      answer:
        "The DDL export in the provided version supports PostgreSQL, SQL Server, MySQL and Oracle. For test environments there is also a DROP + CREATE mode that replaces existing tables.",
    },
    {
      question: "How does the AI coach work with the generator?",
      answer:
        "You upload the tool to an AI such as ChatGPT, Claude or Gemini. That lets the AI read the fields your version actually has, and it then acts as a coach: from the business problem through hypothesis and ground truth to the concrete setting for every single generator step. The saved JSON configuration can afterwards be handed back to the AI to review against your ground truth.",
    },
    {
      question: "What does access cost?",
      answer:
        "Nothing. After entering an email address the generator is free to use, and it can also be downloaded and kept locally.",
    },
  ],
} as const;

const SmartDataForge = () => {
  const { language } = useLanguage();
  const text = copy[language];
  const questions = faq[language];
  const pageUrl = `${SITE_URL}${getRoutePath("smartDataForge", language)}`;

  useEffect(() => {
    // Keep a deep link such as /de/smart-data-forge#generator working: only
    // reset the scroll position when the URL does not point at a section.
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);

  const applicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${pageUrl}#smart-data-forge`,
    name: "Noreja Smart Data Forge",
    softwareVersion: SMART_DATA_FORGE_VERSION,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web browser",
    url: pageUrl,
    inLanguage: language,
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    provider: { "@type": "Organization", name: "Noreja Intelligence GmbH", url: SITE_URL },
    description:
      language === "de"
        ? "Generator für synthetische, kausal konsistente Process-Mining-Daten mit bewusst eingebauter Ursache. Läuft vollständig im Browser und exportiert DDL- sowie INSERT-Skripte für PostgreSQL, SQL Server, MySQL und Oracle."
        : "A generator for synthetic, causally consistent process mining data with a deliberately built-in root cause. Runs entirely in the browser and exports DDL and INSERT scripts for PostgreSQL, SQL Server, MySQL and Oracle.",
    featureList: text.steps.map((step) => `${step.title}: ${step.text}`),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${pageUrl}#how-to`,
    name: text.workflowHeading,
    inLanguage: language,
    tool: { "@type": "HowToTool", name: "Noreja Smart Data Forge" },
    step: text.workflow.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.text,
    })),
  };

  const gradientStyle = {
    background: `
      linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 35%, hsl(var(--noreja-secondary) / 0.14) 75%, hsl(var(--background)) 100%),
      radial-gradient(ellipse 1000px 700px at 75% 15%, hsl(var(--noreja-tertiary) / 0.12) 0%, transparent 60%)
    `,
  } as const;

  return (
    <div className="relative min-h-screen overflow-hidden" style={gradientStyle}>
      <StructuredData schema={applicationSchema} id="smart-data-forge-app" />
      <StructuredData schema={howToSchema} id="smart-data-forge-howto" />
      <FAQSchema items={questions.map((item) => ({ ...item }))} />
      <BreadcrumbSchema
        items={[
          {
            name: language === "de" ? "Startseite" : "Home",
            url: `${SITE_URL}${getRoutePath("home", language)}`,
          },
          { name: "Smart Data Forge", url: pageUrl },
        ]}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-noreja-main/5 to-transparent" />

      <div className="relative z-10">
        {/* ------------------------------------------------------------ hero */}
        <section className="px-4 pt-16 pb-12 lg:px-8 md:pt-24">
          <div className="mx-auto w-full max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
                <FlaskConical className="mr-2 h-4 w-4 text-accent" />
                <span className="text-sm font-medium">{text.badge}</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">{text.title}</h1>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {text.lead}
              </p>

              <div className="mx-auto mt-8 max-w-3xl space-y-4 text-left">
                {text.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="story-cta">
                  <a href="#generator">
                    <Lock className="mr-2 h-5 w-5" />
                    {text.primaryCta}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-background/60">
                  <a href="#workflow">
                    {text.secondaryCta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <p className="mt-4 text-xs text-muted-foreground/80">{text.note}</p>
            </motion.div>

            {/* the argument for causal test data */}
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {text.why.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-border/50 bg-card/60 p-5 text-left backdrop-blur-sm"
                >
                  <item.icon className="mb-3 h-5 w-5 text-accent" />
                  <p className="mb-1 text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------------------------------- generator steps */}
        <section className="px-4 py-12 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
                {text.stepsHeading}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">{text.stepsLead}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {text.steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                  className="rounded-2xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-noreja-main/40"
                >
                  <step.icon className="mb-4 h-6 w-6 text-accent" />
                  <h3 className="mb-2 text-base font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- workflow */}
        <section id="workflow" className="scroll-mt-24 px-4 py-12 lg:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <h2 className="mb-10 text-center text-2xl font-bold text-foreground md:text-3xl">
              {text.workflowHeading}
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {text.workflow.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative rounded-2xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm"
                >
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-noreja-main/10 text-sm font-bold text-noreja-main">
                    {index + 1}
                  </span>
                  <h3 className="mb-2 flex items-center gap-2 text-base font-semibold text-foreground">
                    <step.icon className="h-4 w-4 text-accent" />
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </motion.div>
              ))}
            </div>

            {/* specs strip */}
            <div className="mt-12">
              <h3 className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {text.specsHeading}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {text.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center gap-3 rounded-xl border border-border/40 bg-card/50 px-4 py-3 backdrop-blur-sm"
                  >
                    <spec.icon className="h-4 w-4 flex-shrink-0 text-accent" />
                    <span className="text-sm text-muted-foreground">{spec.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------- gate + generator */}
        <section id="generator" className="scroll-mt-24 px-4 py-12 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
                {text.gateHeading}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">{text.gateLead}</p>
            </div>

            <SmartDataForgeGate />
          </div>
        </section>

        {/* ------------------------------------------------------------- FAQ */}
        <section className="px-4 py-12 lg:px-8">
          <div className="mx-auto w-full max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
              {text.faqHeading}
            </h2>
            {/* Rendered as plain markup, no accordion: the full answer text is
                always in the DOM for crawlers and answer engines. */}
            <div className="space-y-6">
              {questions.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm"
                >
                  <h3 className="mb-2 text-base font-semibold text-foreground">{item.question}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              <Link
                to={getRoutePath("contact", language)}
                className="text-noreja-main underline-offset-4 hover:underline"
              >
                {language === "de"
                  ? "Frage offen? Schreib uns."
                  : "Still have a question? Get in touch."}
              </Link>
            </p>
          </div>
        </section>

        <FinalCTA
          heading={
            language === "de"
              ? "Von den Testdaten zur echten Analyse — "
              : "From test data to the real analysis — "
          }
          headingHighlight={language === "de" ? "sprich mit uns" : "talk to us"}
        />
      </div>
    </div>
  );
};

export default SmartDataForge;
