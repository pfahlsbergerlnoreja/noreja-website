import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, BookMarked, BookOpen, FileText, Globe, ScrollText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getRoutePath } from "@/lib/routes";
import {
  referenceGroups,
  type ReferenceKind,
} from "@/lib/processTradeOffReferences";

const KIND_META: Record<ReferenceKind, { Icon: typeof FileText; label: Record<"de" | "en", string> }> = {
  paper: { Icon: FileText, label: { de: "Peer-Review-Paper", en: "Peer-reviewed paper" } },
  book: { Icon: BookOpen, label: { de: "Fachbuch", en: "Textbook" } },
  standard: { Icon: ScrollText, label: { de: "Standardwerk der Community", en: "Community standard" } },
  article: { Icon: BookMarked, label: { de: "Fachartikel", en: "Trade article" } },
  overview: { Icon: Globe, label: { de: "Überblicksartikel", en: "Overview article" } },
};

const copy = {
  de: {
    badge: "Quellen & weiterführende Literatur",
    title: "Worauf dieses Modell aufbaut",
    intro:
      "Das Devil's Quadrangle ist kein Marketingbild, sondern ein etabliertes Modell aus der Business-Process-Management-Forschung. Die folgenden Quellen beschreiben seinen Ursprung, seine Weiterentwicklung und wie sich der Zielkonflikt mit echten Prozessdaten messen lässt. Alle Links führen direkt zur Primärquelle.",
    internalTitle: "Begriffe bei Noreja nachlesen",
    internalIntro:
      "Die zentralen Konzepte hinter dieser Seite erklären wir ausführlich in unserer Wissensdatenbank:",
    externalHint: "öffnet in neuem Tab",
  },
  en: {
    badge: "Sources & further reading",
    title: "What this model is built on",
    intro:
      "The Devil's Quadrangle is not a marketing picture but an established model from business process management research. The sources below describe its origin, its further development, and how the trade-off can be measured with real process data. Every link goes straight to the primary source.",
    internalTitle: "Look up the terms at Noreja",
    internalIntro:
      "We explain the core concepts behind this page in detail in our knowledge base:",
    externalHint: "opens in a new tab",
  },
} as const;

/** Definition-page slugs that carry the concepts used on this page */
const RELATED_DEFINITIONS = [
  { slug: "what-is-a-process", label: { de: "Was ist ein Prozess?", en: "What is a process?" } },
  {
    slug: "business-process-management",
    label: { de: "Business Process Management", en: "Business Process Management" },
  },
  { slug: "process-mining", label: { de: "Process Mining", en: "Process Mining" } },
  {
    slug: "causal-process-mining",
    label: { de: "Causal Process Mining", en: "Causal Process Mining" },
  },
  { slug: "process-variant", label: { de: "Prozessvariante", en: "Process variant" } },
  {
    slug: "process-simulation",
    label: { de: "Prozesssimulation", en: "Process simulation" },
  },
];

export const ProcessTradeOffReferences = () => {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <section id="references" className="relative px-4 pb-20 lg:px-8 md:pb-28">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <BookMarked className="mr-2 h-4 w-4 text-accent" />
            <span className="text-sm font-medium">{text.badge}</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{text.title}</h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{text.intro}</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {referenceGroups.map((group, groupIndex) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="flex flex-col rounded-3xl border border-border/60 bg-card/70 p-6 backdrop-blur-sm"
            >
              <h3 className="mb-2 text-lg font-semibold leading-snug text-foreground">
                {group.label[language]}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {group.description[language]}
              </p>

              <ul className="flex flex-1 flex-col gap-5">
                {group.references.map((reference) => {
                  const { Icon, label } = KIND_META[reference.kind];
                  return (
                    <li key={reference.id}>
                      <a
                        href={reference.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block rounded-2xl border border-border/40 bg-background/40 p-4 transition-all hover:border-accent/50 hover:bg-background/70"
                      >
                        <span className="mb-2 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-accent">
                          <Icon className="h-3.5 w-3.5" />
                          {label[language]}
                        </span>
                        <cite className="block text-sm font-semibold not-italic leading-snug text-foreground transition-colors group-hover:text-accent">
                          {reference.title}
                          <ArrowUpRight className="ml-1 inline h-3.5 w-3.5 shrink-0 align-text-top opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </cite>
                        <p className="mt-1.5 text-xs text-muted-foreground">
                          {reference.authors} · {reference.venue} · {reference.year}
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground/90">
                          {reference.note[language]}
                        </p>
                        <span className="sr-only">({text.externalHint})</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Internal linking into the knowledge base for the concepts used above */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-3xl border border-border/60 bg-card/60 p-6 backdrop-blur-sm md:p-8"
        >
          <h3 className="mb-2 text-lg font-semibold text-foreground">{text.internalTitle}</h3>
          <p className="mb-5 text-sm text-muted-foreground">{text.internalIntro}</p>
          <ul className="flex flex-wrap gap-2">
            {RELATED_DEFINITIONS.map((definition) => (
              <li key={definition.slug}>
                <Link
                  to={getRoutePath("definitionDetail", language, { slug: definition.slug })}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/50 px-4 py-2 text-sm text-muted-foreground transition-all hover:border-accent/60 hover:text-foreground"
                >
                  {definition.label[language]}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTradeOffReferences;
