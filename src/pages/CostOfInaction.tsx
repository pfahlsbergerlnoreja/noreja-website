import { useEffect } from "react";
import { teaserHeadings } from "@/lib/heroCopy";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calculator,
  Clock,
  Euro,
  Network,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { CostOfInactionCalculator } from "@/components/CostOfInactionCalculator";
import { CostOfInactionFaq } from "@/components/CostOfInactionFaq";
import { DevilsQuadrangle } from "@/components/DevilsQuadrangle";
import { FinalCTA } from "@/components/FinalCTA";
import { ProcessTradeOffReferences } from "@/components/ProcessTradeOffReferences";
import { BreadcrumbSchema, StructuredData } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/config";
import { getRoutePath } from "@/lib/routes";
import { allReferences, referenceSchemaType } from "@/lib/processTradeOffReferences";

const copy = {
  de: {
    badge: "Cost of Inaction",
    title: "Was kostet es, nichts zu tun?",
    lead:
      "Prozessprobleme verschwinden nicht, wenn man sie ignoriert – sie werden nur unsichtbar bezahlt. Jeder Tag ohne Prozesstransparenz kostet Durchlaufzeit, Marge, Qualität und Nerven. Der Cost-of-Inaction-Rechner macht diese versteckten Kosten in fünf Minuten sichtbar: einmal für ein Jahr und einmal für den Zeitraum, den du wirklich betrachten musst.",
    body: [
      "Die Berechnung basiert auf Branchen-Benchmarks und typischen Prozesskennzahlen. Du gibst an, wie dein Geschäft aussieht – Branche, Größe, verkaufte Menge, Wert pro Einheit, Kundenstamm und Fertigungsart – und wählst den End-to-End-Prozess, der dich interessiert: Order-to-Cash, Purchase-to-Pay, Produktion, Instandhaltung, Kreditvergabe oder Schadenregulierung.",
      "Aus diesen Angaben leitet der Rechner die Prozessvolumina ab und verteilt die versteckten Kosten auf die vier Prozessdimensionen: Zeit, Kosten, Qualität und Komplexität. Am Ende steht kein Marketing-Versprechen, sondern eine nachvollziehbare Größenordnung – inklusive PDF zum Mitnehmen in die interne Diskussion.",
    ],
    highlights: [
      {
        icon: Clock,
        title: "Zeit",
        text: "Manuelle Touchpoints, Wartezeiten und Rückfragen je Vorgang",
      },
      {
        icon: Euro,
        title: "Kosten",
        text: "Wertverlust auf dem Volumen, das durch den Prozess fließt",
      },
      {
        icon: ShieldCheck,
        title: "Qualität",
        text: "Fehlerfälle, Nacharbeit und deren Folgekosten",
      },
      {
        icon: Network,
        title: "Komplexität",
        text: "Overhead durch Varianten, Systembrüche und Übergaben",
      },
    ],
    calculatorHeading: "Der Rechner: deine Zahlen, deine Prozessdimensionen",
    calculatorLead:
      "Wähle Branche, Größe und den End-to-End-Prozess, den du betrachten willst. Jede Änderung wirkt sofort auf das Ergebnis und auf die Verteilung über die vier Prozessdimensionen.",
    primaryCta: "Zum Rechner",
    secondaryCta: "Potenzial im Gespräch validieren",
    note:
      "Kein Login, keine Datenübertragung: Die Berechnung läuft vollständig in deinem Browser.",
  },
  en: {
    badge: "Cost of Inaction",
    title: "What does doing nothing cost you?",
    lead:
      "Process problems do not disappear when you ignore them – you just pay for them invisibly. Every day without process transparency costs cycle time, margin, quality and patience. The cost-of-inaction calculator makes those hidden costs visible in five minutes: once for a single year and once for the horizon you actually have to plan for.",
    body: [
      "The calculation is based on industry benchmarks and typical process KPIs. You describe your business – industry, size, units sold, value per unit, customer base and production type – and pick the end-to-end process you care about: order-to-cash, purchase-to-pay, production, maintenance, lending or claims handling.",
      "From those inputs the calculator derives your process volumes and splits the hidden cost across the four process dimensions: time, cost, quality and complexity. What you get is not a marketing promise but a transparent order of magnitude – including a PDF you can take into your internal discussion.",
    ],
    highlights: [
      {
        icon: Clock,
        title: "Time",
        text: "Manual touchpoints, waiting times and clarification loops per case",
      },
      {
        icon: Euro,
        title: "Cost",
        text: "Value leakage on the volume flowing through the process",
      },
      {
        icon: ShieldCheck,
        title: "Quality",
        text: "Defect cases, rework and their downstream cost",
      },
      {
        icon: Network,
        title: "Complexity",
        text: "Overhead from variants, system breaks and handovers",
      },
    ],
    calculatorHeading: "The calculator: your numbers, your process dimensions",
    calculatorLead:
      "Pick your industry, your size and the end-to-end process you want to look at. Every change feeds straight into the result and into its split across the four process dimensions.",
    primaryCta: "Go to the calculator",
    secondaryCta: "Validate your potential with us",
    note: "No login, no data transfer: the calculation runs entirely in your browser.",
  },
} as const;

const CostOfInaction = () => {
  const { language } = useLanguage();
  const text = copy[language];
  const pageUrl = `${SITE_URL}${getRoutePath("costOfInaction", language)}`;

  /** Article schema, citing the same peer-reviewed sources the page links to */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${pageUrl}#article`,
    headline: text.title,
    description: text.lead,
    inLanguage: language,
    url: pageUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    author: { "@type": "Organization", name: "Noreja Intelligence GmbH", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Noreja Intelligence GmbH", url: SITE_URL },
    about: [
      {
        "@type": "DefinedTerm",
        name: language === "de" ? "Cost of Inaction" : "Cost of inaction",
        description:
          language === "de"
            ? "Die jährlichen Kosten, die entstehen, weil ein Geschäftsprozess nicht verbessert wird – verteilt auf Zeit, Kosten, Qualität und Komplexität."
            : "The annual cost incurred because a business process is not improved – spread across time, cost, quality and complexity.",
      },
      {
        "@type": "DefinedTerm",
        name: "Devil's Quadrangle",
        description:
          language === "de"
            ? "Modell des Business Process Management, das die vier konkurrierenden Prozessdimensionen Zeit, Kosten, Qualität und Flexibilität beschreibt: Zeit steht Kosten gegenüber, Qualität steht Flexibilität gegenüber."
            : "A business process management model describing the four competing process dimensions time, cost, quality and flexibility: time is opposed by cost, quality is opposed by flexibility.",
        sameAs: "https://doi.org/10.1016/j.omega.2004.04.012",
      },
    ],
    citation: allReferences.map((reference) => ({
      "@type": referenceSchemaType(reference.kind),
      name: reference.title,
      author: reference.authors,
      datePublished: reference.year,
      url: reference.url,
    })),
  };

  /** The calculator itself is a free, browser-side tool — worth declaring separately */
  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${pageUrl}#calculator`,
    name:
      language === "de" ? "Noreja Cost-of-Inaction Rechner" : "Noreja Cost of Inaction Calculator",
    url: `${pageUrl}#cost-of-inaction`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web browser",
    inLanguage: language,
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    provider: { "@type": "Organization", name: "Noreja Intelligence GmbH", url: SITE_URL },
    description:
      language === "de"
        ? "Schätzt die versteckten Jahreskosten eines nicht verbesserten End-to-End-Prozesses anhand von Branchen-Benchmarks und verteilt sie auf Zeit, Kosten, Qualität und Komplexität. Läuft vollständig im Browser."
        : "Estimates the hidden annual cost of an unimproved end-to-end process from industry benchmarks and splits it across time, cost, quality and complexity. Runs entirely in the browser.",
    featureList:
      language === "de"
        ? [
            "Cost of Inaction pro Jahr und über einen frei wählbaren Zeitraum",
            "Verteilung auf die Prozessdimensionen Zeit, Kosten, Qualität und Komplexität",
            "Auswahl aus End-to-End-Prozessen wie Order-to-Cash und Purchase-to-Pay",
            "PDF-Export der eigenen Einstellungen",
            "Interaktives Devil's Quadrangle zum Zielkonflikt der Prozessdimensionen",
          ]
        : [
            "Cost of inaction per year and over a freely chosen horizon",
            "Split across the process dimensions time, cost, quality and complexity",
            "Choice of end-to-end processes such as order-to-cash and purchase-to-pay",
            "PDF export of your own settings",
            "Interactive Devil's Quadrangle covering the process-dimension trade-off",
          ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gradientStyle = {
    background: `
      linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 35%, hsl(var(--noreja-secondary) / 0.14) 75%, hsl(var(--background)) 100%),
      radial-gradient(ellipse 1000px 700px at 75% 15%, hsl(var(--noreja-tertiary) / 0.12) 0%, transparent 60%)
    `,
  } as const;

  return (
    <div className="relative min-h-screen overflow-hidden" style={gradientStyle}>
      <StructuredData schema={articleSchema} id="coi-article" />
      <StructuredData schema={calculatorSchema} id="coi-calculator" />
      <BreadcrumbSchema
        items={[
          {
            name: language === "de" ? "Startseite" : "Home",
            url: `${SITE_URL}${getRoutePath("home", language)}`,
          },
          {
            name: text.badge,
            url: `${SITE_URL}${getRoutePath("costOfInaction", language)}`,
          },
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
                <TrendingDown className="mr-2 h-4 w-4 text-accent" />
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
                  <a href="#cost-of-inaction">
                    <Calculator className="mr-2 h-5 w-5" />
                    {text.primaryCta}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-background/60">
                  <Link to={getRoutePath("contact", language)}>
                    {text.secondaryCta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <p className="mt-4 text-xs text-muted-foreground/80">{text.note}</p>
            </motion.div>

            {/* the four process dimensions the result is split into */}
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {text.highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-border/50 bg-card/60 p-5 text-left backdrop-blur-sm"
                >
                  <highlight.icon className="mb-3 h-5 w-5 text-accent" />
                  <p className="mb-1 text-sm font-semibold text-foreground">{highlight.title}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">{highlight.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ calculator */}
        <div className="mx-auto mb-8 w-full max-w-3xl px-4 text-center lg:px-8">
          <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
            {text.calculatorHeading}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">{text.calculatorLead}</p>
        </div>
        <CostOfInactionCalculator defaultExpanded hideIntro />

        {/* ------------------------------------------------- devil's quadrangle */}
        <DevilsQuadrangle />

        {/* ------------------------------------------------------------- FAQ */}
        <CostOfInactionFaq />

        {/* ------------------------------------------- external reference links */}
        <ProcessTradeOffReferences />

        <FinalCTA
          heading={teaserHeadings.finalCta.costOfInaction.lead[language]}
          headingHighlight={teaserHeadings.finalCta.costOfInaction.highlight[language]}
        />
      </div>
    </div>
  );
};

export default CostOfInaction;
