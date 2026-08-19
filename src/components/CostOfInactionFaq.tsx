import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FAQSchema } from "@/components/StructuredData";
import type { Language } from "@/lib/translations";

/**
 * Answers are written to stand on their own: each one repeats enough of the
 * question to be quotable in isolation, which is what search snippets and
 * generative engines pick up. Everything renders as plain markup — no
 * accordion — so the full text is always in the DOM for crawlers.
 */
const costOfInactionFaq: Record<Language, Array<{ question: string; answer: string }>> = {
  de: [
    {
      question: "Was ist der Cost of Inaction?",
      answer:
        "Der Cost of Inaction ist der Betrag, den ein Unternehmen jedes Jahr verliert, weil ein Prozess nicht verbessert wird. Er erscheint auf keiner Rechnung, sondern verteilt sich über Wartezeiten, manuelle Nacharbeit, Wertverluste im Auftragsdurchlauf und die Folgekosten von Fehlern. Weil er nirgends gebucht wird, bleibt er unsichtbar – und läuft mit jedem Jahr ohne Prozesstransparenz weiter auf.",
    },
    {
      question: "Wie berechnet der Cost-of-Inaction-Rechner das Ergebnis?",
      answer:
        "Der Rechner leitet aus Branche, Unternehmensgröße, verkaufter Menge, Wert pro Einheit, Kundenstamm und Fertigungsart zunächst die Prozessvolumina ab, etwa die Anzahl der Aufträge pro Jahr. Diese Volumina werden mit branchenüblichen Benchmarks für manuellen Aufwand, Wertverlust, Fehlerquoten und Variantenoverhead verknüpft. Das Ergebnis verteilt sich auf die vier Prozessdimensionen Zeit, Kosten, Qualität und Komplexität und wird über den gewählten Betrachtungszeitraum fortgeschrieben.",
    },
    {
      question: "Was ist das Devil's Quadrangle?",
      answer:
        "Das Devil's Quadrangle ist ein Modell aus dem Business Process Management, das die vier konkurrierenden Leistungsdimensionen eines Prozesses beschreibt: Zeit, Kosten, Qualität und Flexibilität. Bekannt wurde es durch die Redesign-Forschung von Hajo A. Reijers und Selma Limam Mansar (2005), die 29 Redesign-Heuristiken jeweils nach ihrer Wirkung auf diese vier Dimensionen bewerteten. Der Name spielt darauf an, dass sich die vier Dimensionen in der Praxis nicht gleichzeitig verbessern lassen.",
    },
    {
      question: "Warum steht Zeit den Kosten gegenüber und Qualität der Flexibilität?",
      answer:
        "Durchlaufzeit verkürzt man üblicherweise mit zusätzlichen Ressourcen, Parallelverarbeitung oder Puffern – all das kostet Geld, deshalb steht Zeit den Kosten gegenüber. Qualität entsteht dagegen aus Standardisierung, Kontrollen und engen Vorgaben, während Flexibilität genau das Gegenteil verlangt: Varianten, Sonderfälle und Ausnahmen. Jede zusätzliche Variante erzeugt Übergaben und Fehlerquellen, deshalb steht Qualität der Flexibilität gegenüber.",
    },
    {
      question: "Kann man alle vier Dimensionen gleichzeitig verbessern?",
      answer:
        "Innerhalb eines gegebenen Prozessdesigns nicht: Wer eine Dimension anhebt, bezahlt in den anderen. Der Zielkonflikt lockert sich erst, wenn die tatsächlichen Ursachen im Prozess bekannt sind, denn dann findet man Stellhebel, die mehrere Dimensionen gleichzeitig verbessern – etwa eine Rückfrageschleife, die zugleich Zeit kostet, Fehler erzeugt und Varianten aufbaut. Genau darauf zielt kausale Process Intelligence: nicht den Zielkonflikt gewinnen, sondern ihn nach außen verschieben.",
    },
    {
      question: "Wie belastbar sind die Ergebnisse des Rechners?",
      answer:
        "Der Rechner liefert eine Größenordnung, keine Zusage. Er arbeitet mit Branchen-Benchmarks und typischen Prozesskennzahlen, nicht mit deinen Systemdaten, und ist dafür gedacht, eine interne Diskussion mit einer nachvollziehbaren Zahl zu starten. Die tatsächlichen Werte ergeben sich erst aus einer Analyse der eigenen Event-Daten.",
    },
    {
      question: "Werden meine Eingaben an Noreja übertragen?",
      answer:
        "Nein. Die gesamte Berechnung läuft im Browser, es ist kein Login nötig und die eingegebenen Werte werden nicht an einen Server gesendet. Das PDF mit den eigenen Einstellungen wird ebenfalls lokal erzeugt.",
    },
  ],
  en: [
    {
      question: "What is the cost of inaction?",
      answer:
        "The cost of inaction is the amount a company loses every year because a process is not improved. It never appears on an invoice; it spreads across waiting times, manual rework, value leakage along the order flow and the downstream cost of defects. Because it is never booked anywhere it stays invisible – and it keeps accumulating with every year without process transparency.",
    },
    {
      question: "How does the cost-of-inaction calculator arrive at its result?",
      answer:
        "The calculator first derives your process volumes – such as the number of orders per year – from industry, company size, units sold, value per unit, customer base and production type. Those volumes are then combined with industry-typical benchmarks for manual effort, value leakage, error rates and variant overhead. The result is split across the four process dimensions time, cost, quality and complexity and projected over the time horizon you select.",
    },
    {
      question: "What is the Devil's Quadrangle?",
      answer:
        "The Devil's Quadrangle is a model from business process management that describes the four competing performance dimensions of a process: time, cost, quality and flexibility. It became widely known through the redesign research of Hajo A. Reijers and Selma Limam Mansar (2005), who assessed 29 redesign heuristics by their effect on those four dimensions. The name refers to the fact that, in practice, the four dimensions cannot be improved at the same time.",
    },
    {
      question: "Why is time opposed by cost, and quality by flexibility?",
      answer:
        "Cycle time is usually shortened with additional resources, parallel processing or buffers – all of which cost money, which is why time is opposed by cost. Quality, by contrast, comes from standardisation, controls and tight specifications, while flexibility demands the opposite: variants, special cases and exceptions. Every additional variant creates handovers and defect sources, which is why quality is opposed by flexibility.",
    },
    {
      question: "Can all four dimensions be improved at the same time?",
      answer:
        "Not within a given process design: whoever raises one dimension pays in the others. The trade-off only loosens once the actual causes inside the process are known, because then you find levers that improve several dimensions at once – a clarification loop, for instance, that simultaneously costs time, creates defects and builds up variants. That is exactly what causal process intelligence aims at: not winning the trade-off, but moving its frontier outward.",
    },
    {
      question: "How reliable are the calculator's results?",
      answer:
        "The calculator gives you an order of magnitude, not a commitment. It works with industry benchmarks and typical process KPIs rather than your system data, and it is meant to start an internal discussion with a number you can follow. The actual figures only emerge from an analysis of your own event data.",
    },
    {
      question: "Is my input sent to Noreja?",
      answer:
        "No. The entire calculation runs in your browser, no login is required, and the values you enter are not sent to a server. The PDF with your own settings is generated locally as well.",
    },
  ],
};

const copy = {
  de: {
    badge: "Häufige Fragen",
    title: "Cost of Inaction und Devil's Quadrangle – kurz erklärt",
  },
  en: {
    badge: "Frequently asked questions",
    title: "Cost of inaction and the Devil's Quadrangle – briefly explained",
  },
} as const;

export const CostOfInactionFaq = () => {
  const { language } = useLanguage();
  const text = copy[language];
  const items = costOfInactionFaq[language];

  return (
    <section id="faq" className="relative px-4 pb-20 lg:px-8 md:pb-24">
      <FAQSchema items={items} />

      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <HelpCircle className="mr-2 h-4 w-4 text-accent" />
            <span className="text-sm font-medium">{text.badge}</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">{text.title}</h2>
        </motion.div>

        <dl className="grid gap-5 md:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
              className="rounded-2xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm"
            >
              <dt className="mb-2 text-base font-semibold text-foreground">{item.question}</dt>
              <dd className="text-sm leading-relaxed text-muted-foreground">{item.answer}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default CostOfInactionFaq;
