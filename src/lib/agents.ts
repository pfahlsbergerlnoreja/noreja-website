import type { LucideIcon } from 'lucide-react';
import {
  CalendarClock,
  GitCompare,
  Hourglass,
  Layers,
  Microscope,
  Repeat,
  ShieldCheck,
  Timer,
  Wallet,
  Workflow,
} from 'lucide-react';
import type { Language } from './translations';
import { agentSlugs, getAgentIdBySlug, type AgentId } from './agentSlugs';

/**
 * Minerva Agent Library: one specialised agent per aspect of business process
 * analysis, each with its own page (/de/minerva/agenten/:agentSlug).
 *
 * The pages exist for search and answer engines as much as for visitors, so
 * every agent carries enough substance to stand on its own: an answer-first
 * summary, the questions it answers, how it works, the KPIs it uses, a worked
 * example and an FAQ (rendered as FAQPage schema). The agent name is the H1
 * and always contains "Agent".
 *
 * Examples describe typical patterns, not customer results — keep numbers out
 * of them unless they come from a published success story.
 */

export type AgentCategory = 'flow' | 'time' | 'capital' | 'potential';

export const agentCategories: Record<AgentCategory, Record<Language, { title: string; text: string }>> = {
  flow: {
    de: {
      title: 'Ablauf & Konformität',
      text: 'Läuft der Prozess so, wie er laufen soll? Diese Agents finden Abweichungen, Schleifen und Regelverstöße.',
    },
    en: {
      title: 'Process flow & conformance',
      text: 'Does the process run the way it should? These agents find deviations, loops and rule violations.',
    },
  },
  time: {
    de: {
      title: 'Zeit & Termine',
      text: 'Wo geht Zeit verloren? Diese Agents messen Durchlauf- und Wartezeiten und prüfen, ob Zusagen eingehalten werden.',
    },
    en: {
      title: 'Time & deadlines',
      text: 'Where is time lost? These agents measure cycle and waiting times and check whether commitments are kept.',
    },
  },
  capital: {
    de: {
      title: 'Kapital & Bestand',
      text: 'Was ist gebunden, was liegt offen? Diese Agents verbinden Prozessschritte mit Working Capital und Work in Progress.',
    },
    en: {
      title: 'Capital & work in progress',
      text: 'What is tied up, what is still open? These agents connect process steps with working capital and work in progress.',
    },
  },
  potential: {
    de: {
      title: 'Ursachen & Potenziale',
      text: 'Warum ist es so, und was lässt sich verbessern? Diese Agents erklären Probleme und zeigen Hebel.',
    },
    en: {
      title: 'Root causes & potential',
      text: 'Why is it like this, and what can be improved? These agents explain problems and point to levers.',
    },
  },
};

export const agentCategoryOrder: AgentCategory[] = ['flow', 'time', 'capital', 'potential'];

/** Slugs of the end-to-end process pages (src/lib/endToEndProcesses.ts) an agent page links to. */
type ProcessSlug = 'purchase-to-pay' | 'order-to-cash' | 'lead-to-activation' | 'premium-to-tax';

export interface AgentContent {
  /** H1. Always contains "Agent". */
  name: string;
  /** Second line of the H1, carries the search terms around the agent name. */
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  /** Card text on the overview and the Minerva page. */
  teaser: string;
  /** Answer-first opening paragraph: what the agent does. */
  summary: string;
  /** Example questions, rendered as chat bubbles. */
  questions: string[];
  steps: Array<{ title: string; text: string }>;
  metrics: Array<{ name: string; text: string }>;
  example: string;
  output: string;
  data: string;
  faq: Array<{ question: string; answer: string }>;
}

export interface Agent {
  id: AgentId;
  category: AgentCategory;
  icon: LucideIcon;
  processes?: ProcessSlug[];
  related: AgentId[];
  content: Record<Language, AgentContent>;
}

export const agents: Agent[] = [
  // ------------------------------------------------------------------ flow
  {
    id: 'structural-deviation',
    category: 'flow',
    icon: GitCompare,
    processes: ['purchase-to-pay', 'order-to-cash'],
    related: ['rework', 'compliance', 'root-cause'],
    content: {
      de: {
        name: 'Strukturfehleranalyse-Agent',
        tagline: 'Übersprungene Schritte, falsche Reihenfolgen und unerwartete Pfade im Prozess automatisch finden',
        metaTitle: 'Strukturfehleranalyse-Agent – Prozessabweichungen mit KI finden | Noreja',
        metaDescription:
          'Der Strukturfehleranalyse-Agent in Minerva findet übersprungene Schritte, vertauschte Reihenfolgen, Schleifen und unerwartete Pfade in Geschäftsprozessen – mit Fallzahl, Mehrdauer und Ursprung.',
        teaser:
          'Findet übersprungene Schritte, vertauschte Reihenfolgen und Pfade, die es laut Soll-Prozess nicht geben dürfte – und zeigt, was sie kosten.',
        summary:
          'Der Strukturfehleranalyse-Agent prüft, ob deine Prozesse so ablaufen, wie sie ablaufen sollen. Er vergleicht jeden Fall mit dem erwarteten Ablauf im kausalen Prozessgraphen von Noreja und findet strukturelle Abweichungen: übersprungene Aktivitäten, vertauschte Reihenfolgen, zusätzliche Schritte, Schleifen und Fälle, die an der falschen Stelle enden. Für jede Abweichung nennt er, wie viele Fälle betroffen sind, wie sich Durchlaufzeit und Aufwand verändern und wo sie gehäuft auftritt.',
        questions: [
          'Welche Aktivitäten werden im Purchase-to-Pay-Prozess am häufigsten übersprungen?',
          'In wie vielen Fällen wurde die Rechnung vor dem Wareneingang gebucht?',
          'Welche Abweichungen vom erwarteten Ablauf kosten uns die meiste Durchlaufzeit?',
          'Zeig mir die Varianten, die im Soll-Prozess nicht vorgesehen sind, sortiert nach Fallzahl.',
        ],
        steps: [
          {
            title: 'Soll-Ablauf lesen',
            text: 'Der Agent liest den erwarteten Ablauf der Perspektive aus dem kausalen Prozessgraphen: welche Aktivität auf welche folgen soll und welche Schritte Pflicht sind. Prozessbeschreibungen aus dem Context Hub bezieht er mit ein.',
          },
          {
            title: 'Abweichungen klassifizieren',
            text: 'Jede Abweichung ordnet er einem Typ zu: fehlender Schritt, falsche Reihenfolge, zusätzlicher Schritt, Wiederholung oder vorzeitiges Ende.',
          },
          {
            title: 'Auswirkung bewerten',
            text: 'Er vergleicht abweichende und konforme Fälle: Wie viel länger dauern sie, wie viele Aktivitäten kommen hinzu, welche Risiken entstehen?',
          },
          {
            title: 'Ursprung eingrenzen',
            text: 'Über die Merkmale der Fälle – Lieferant, Werk, Belegart, Organisationseinheit – grenzt er ein, wo eine Abweichung gehäuft auftritt.',
          },
        ],
        metrics: [
          { name: 'Konformitätsquote', text: 'Anteil der Fälle, die ohne strukturelle Abweichung durch den Prozess laufen.' },
          { name: 'Abweichungen je Typ', text: 'Fehlende, vertauschte und zusätzliche Schritte – getrennt gezählt.' },
          { name: 'Betroffene Fälle und Varianten', text: 'Wie viele Fälle eine Abweichung zeigen und in welchen Varianten sie vorkommt.' },
          { name: 'Zeiteffekt', text: 'Mehrdauer der abweichenden Fälle gegenüber den konformen Fällen.' },
        ],
        example:
          'Im Purchase-to-Pay-Prozess soll die Rechnung erst nach dem Wareneingang gebucht werden. Der Agent findet die Fälle, in denen die Reihenfolge vertauscht ist, zählt sie, vergleicht ihre Durchlaufzeit mit den übrigen Fällen und zeigt, dass sie sich bei wenigen Lieferanten und einer Belegart konzentrieren. Du bekommst eine Tabelle der Abweichungen nach Häufigkeit und Mehrdauer – und auf Wunsch eine kurze Präsentation für die Prozessverantwortlichen.',
        output:
          'Eine nach Auswirkung sortierte Liste der strukturellen Abweichungen mit Fallzahl, Mehrdauer und den Merkmalen, bei denen sie gehäuft auftreten. Jede genannte Aktivität ist mit dem Prozessgraphen verknüpft; Tabellen lassen sich als Excel exportieren.',
        data:
          'Eine Perspektive in Noreja mit dem Prozess, den du prüfen willst. Den erwarteten Ablauf liest der Agent aus dem kausalen Prozessgraphen; Prozessbeschreibungen oder Richtlinien im Context Hub schärfen das Bild.',
        faq: [
          {
            question: 'Was ist eine Strukturfehleranalyse im Prozess?',
            answer:
              'Eine Strukturfehleranalyse prüft Reihenfolge und Vollständigkeit der Schritte in einem Geschäftsprozess. Sie zeigt, wo Fälle vom vorgesehenen Ablauf abweichen – etwa weil eine Freigabe fehlt, Schritte vertauscht sind oder Aktivitäten wiederholt werden. In der Prozessanalyse ist sie eng mit dem Conformance Checking verwandt.',
          },
          {
            question: 'Worin unterscheidet sich der Agent von klassischem Conformance Checking?',
            answer:
              'Klassisches Conformance Checking vergleicht ein Event-Log mit einem modellierten Soll-Prozess und liefert einen Übereinstimmungswert. Der Agent arbeitet auf dem kausalen Prozessgraphen, in dem die Abhängigkeiten zwischen Aktivitäten bereits abgebildet sind, und beantwortet die Folgefragen gleich mit: Welche Abweichung kostet am meisten Zeit, und wo tritt sie gehäuft auf?',
          },
          {
            question: 'Brauche ich ein BPMN-Modell als Soll-Prozess?',
            answer:
              'Nein. Der erwartete Ablauf ist im Prozessgraphen von Noreja hinterlegt. Habt ihr Prozessbeschreibungen oder Richtlinien, legt ihr sie im Context Hub ab – der Agent nutzt sie dann zusätzlich.',
          },
        ],
      },
      en: {
        name: 'Structural Deviation Analysis Agent',
        tagline: 'Automatically find skipped steps, wrong sequences and unexpected paths in your business processes',
        metaTitle: 'Structural Deviation Analysis Agent – Find Process Deviations with AI | Noreja',
        metaDescription:
          'The Structural Deviation Analysis Agent in Minerva finds skipped steps, swapped sequences, loops and unexpected paths in business processes – with case counts, added duration and where they originate.',
        teaser:
          'Finds skipped steps, swapped sequences and paths that should not exist according to the target process – and shows what they cost.',
        summary:
          'The Structural Deviation Analysis Agent checks whether your processes run the way they are supposed to. It compares every case with the expected flow in Noreja’s causal process graph and finds structural deviations: skipped activities, swapped sequences, extra steps, loops and cases that end in the wrong place. For each deviation it reports how many cases are affected, how cycle time and effort change, and where the deviation clusters.',
        questions: [
          'Which activities are skipped most often in the purchase-to-pay process?',
          'In how many cases was the invoice posted before the goods receipt?',
          'Which deviations from the expected flow cost us the most cycle time?',
          'Show me the variants the target process does not allow for, sorted by case count.',
        ],
        steps: [
          {
            title: 'Read the target flow',
            text: 'The agent reads the expected flow of the perspective from the causal process graph: which activity should follow which, and which steps are mandatory. It also draws on process descriptions from the Context Hub.',
          },
          {
            title: 'Classify deviations',
            text: 'It assigns every deviation to a type: missing step, wrong sequence, extra step, repetition or premature end.',
          },
          {
            title: 'Assess the impact',
            text: 'It compares deviating and conforming cases: how much longer do they take, how many activities are added, what risks arise?',
          },
          {
            title: 'Narrow down the origin',
            text: 'Using case attributes – supplier, plant, document type, organizational unit – it narrows down where a deviation clusters.',
          },
        ],
        metrics: [
          { name: 'Conformance rate', text: 'Share of cases that run through the process without a structural deviation.' },
          { name: 'Deviations by type', text: 'Missing, swapped and extra steps – counted separately.' },
          { name: 'Affected cases and variants', text: 'How many cases show a deviation and in which variants it occurs.' },
          { name: 'Time impact', text: 'Additional duration of deviating cases compared with conforming ones.' },
        ],
        example:
          'In purchase-to-pay, the invoice should only be posted after the goods receipt. The agent finds the cases where that order is reversed, counts them, compares their cycle time with the remaining cases and shows that they concentrate on a few suppliers and one document type. You get a table of deviations ranked by frequency and added duration – and, if you like, a short presentation for the process owners.',
        output:
          'A list of structural deviations ranked by impact, with case counts, added duration and the attributes where they cluster. Every activity mentioned is linked to the process graph; tables can be exported to Excel.',
        data:
          'A perspective in Noreja containing the process you want to check. The agent reads the expected flow from the causal process graph; process descriptions or policies in the Context Hub sharpen the picture.',
        faq: [
          {
            question: 'What is a structural deviation analysis of a process?',
            answer:
              'A structural deviation analysis checks the sequence and completeness of the steps in a business process. It shows where cases depart from the intended flow – because an approval is missing, steps are swapped or activities are repeated. In process analysis it is closely related to conformance checking.',
          },
          {
            question: 'How does the agent differ from classic conformance checking?',
            answer:
              'Classic conformance checking compares an event log with a modeled target process and returns a fitness score. The agent works on the causal process graph, where the dependencies between activities are already represented, and answers the follow-up questions too: which deviation costs the most time, and where does it cluster?',
          },
          {
            question: 'Do I need a BPMN model as the target process?',
            answer:
              'No. The expected flow is stored in Noreja’s process graph. If you have process descriptions or policies, put them in the Context Hub – the agent will use them as well.',
          },
        ],
      },
    },
  },
  {
    id: 'rework',
    category: 'flow',
    icon: Repeat,
    processes: ['purchase-to-pay'],
    related: ['structural-deviation', 'root-cause', 'cycle-time'],
    content: {
      de: {
        name: 'Nacharbeitsanalyse-Agent',
        tagline: 'Schleifen, Wiederholungen und Korrekturen im Prozess finden – und beziffern, was sie kosten',
        metaTitle: 'Nacharbeitsanalyse-Agent – Rework und Schleifen im Prozess finden | Noreja',
        metaDescription:
          'Der Nacharbeitsanalyse-Agent in Minerva berechnet Nacharbeitsquoten, findet Schleifen und Wiederholungen im Prozess, beziffert den Mehraufwand und zeigt die Ursachen dahinter.',
        teaser:
          'Berechnet die Nacharbeitsquote, findet Schleifen und wiederholte Schritte und verbindet sie mit ihren Ursachen.',
        summary:
          'Der Nacharbeitsanalyse-Agent findet die Stellen, an denen deine Prozesse Arbeit doppelt machen: Rechnungen, die mehrfach geändert werden, Aufträge, die zurück in die Prüfung gehen, Anträge, zu denen wiederholt Unterlagen nachgefordert werden. Er berechnet die Nacharbeitsquote, beziffert Mehraufwand und zusätzliche Durchlaufzeit und zeigt, welche Ursachen hinter den Schleifen stehen – aus den Prozessdaten und aus dem Wissen im Context Hub.',
        questions: [
          'Wie hoch ist die Nacharbeitsquote im Purchase-to-Pay-Prozess?',
          'Vergleiche die Varianten mit Nacharbeit mit den übrigen: Wie viel länger dauern sie?',
          'Welche Aktivitäten werden am häufigsten wiederholt?',
          'Warum müssen Rechnungen nachbearbeitet werden? Nutze die Klärungsgründe aus dem Ticketsystem.',
        ],
        steps: [
          {
            title: 'Schleifen erkennen',
            text: 'Der Agent findet Aktivitäten, die in einem Fall mehrfach vorkommen, und Rücksprünge auf frühere Schritte.',
          },
          {
            title: 'Nacharbeitsquote berechnen',
            text: 'Er berechnet den Anteil der Fälle mit Nacharbeit – gesamt, je Aktivität und je Variante. Habt ihr eine eigene Definition als Skill hinterlegt, rechnet er danach.',
          },
          {
            title: 'Mehraufwand beziffern',
            text: 'Er vergleicht Fälle mit und ohne Nacharbeit: zusätzliche Schritte, zusätzliche Durchlaufzeit und – mit Kostensätzen aus dem Context Hub – zusätzliche Kosten.',
          },
          {
            title: 'Ursachen verbinden',
            text: 'Über Fallmerkmale und Kontext, etwa Klärungsgründe aus einem Ticketsystem, zeigt er, warum Nacharbeit entsteht.',
          },
        ],
        metrics: [
          { name: 'Nacharbeitsquote', text: 'Anteil der Fälle, in denen mindestens eine Aktivität wiederholt wird.' },
          { name: 'Wiederholungen je Aktivität', text: 'Wie oft eine Aktivität im Schnitt pro Fall ausgeführt wird.' },
          { name: 'Mehrdauer durch Nacharbeit', text: 'Zusätzliche Durchlaufzeit der Fälle mit Nacharbeit.' },
          { name: 'First Time Right', text: 'Anteil der Fälle, die ohne Korrektur durchlaufen.' },
        ],
        example:
          'Im Purchase-to-Pay-Prozess fällt dem Agenten auf, dass die Rechnungserfassung in einem Teil der Fälle mehrfach vorkommt. Er vergleicht diese Fälle mit den übrigen, beziffert die Mehrdauer und verbindet die Rechnungsnacharbeit über die Rechnungs-ID mit den Klärungsgründen aus dem Ticketsystem. So wird aus einer Schleife im Graphen eine konkrete Ursache: falsche Preise auf der Bestellung, fehlende Wareneingänge, abweichende Mengen.',
        output:
          'Nacharbeitsquote und Mehraufwand je Aktivität und Variante, eine Rangliste der Ursachen und die betroffenen Fälle – verknüpft mit dem Prozessgraphen und als Excel-Datei oder Präsentation exportierbar.',
        data:
          'Eine Perspektive des Prozesses. Für die Ursachen helfen zusätzliche Informationen im Context Hub, etwa Ticket- oder Klärungsdaten; für Kosten braucht der Agent Kostensätze je Aktivität.',
        faq: [
          {
            question: 'Was ist Nacharbeit im Prozess?',
            answer:
              'Nacharbeit – englisch Rework – sind Schritte, die wiederholt werden müssen, weil das Ergebnis beim ersten Mal nicht gestimmt hat: geänderte Bestellungen, korrigierte Rechnungen, erneute Prüfungen. Nacharbeit kostet Zeit und Kapazität und ist oft ein Hinweis auf Probleme weiter vorne im Prozess.',
          },
          {
            question: 'Wie berechnet der Agent die Nacharbeitsquote?',
            answer:
              'Standardmäßig zählt ein Fall als nachgearbeitet, wenn mindestens eine Aktivität mehrfach vorkommt oder der Fall auf einen früheren Schritt zurückspringt. Habt ihr eine eigene Definition, legt ihr sie als Skill im AI Hub ab – der Agent rechnet dann nach euren Regeln.',
          },
          {
            question: 'Was ist der Unterschied zum Strukturfehleranalyse-Agenten?',
            answer:
              'Der Strukturfehleranalyse-Agent findet alle Abweichungen vom erwarteten Ablauf; Nacharbeit ist eine davon. Der Nacharbeitsanalyse-Agent geht bei Schleifen und Wiederholungen in die Tiefe: Quote, Mehraufwand und Ursachen.',
          },
        ],
      },
      en: {
        name: 'Rework Analysis Agent',
        tagline: 'Find loops, repetitions and corrections in your processes – and quantify what they cost',
        metaTitle: 'Rework Analysis Agent – Find Rework and Loops in Processes | Noreja',
        metaDescription:
          'The Rework Analysis Agent in Minerva calculates rework rates, finds loops and repeated steps in your processes, quantifies the extra effort and shows the causes behind it.',
        teaser: 'Calculates the rework rate, finds loops and repeated steps and connects them with their causes.',
        summary:
          'The Rework Analysis Agent finds the places where your processes do work twice: invoices that are changed several times, orders that go back to review, applications for which documents are requested again and again. It calculates the rework rate, quantifies extra effort and added cycle time and shows the causes behind the loops – from the process data and from the knowledge in the Context Hub.',
        questions: [
          'What is the rework rate in the purchase-to-pay process?',
          'Compare the variants with rework against the rest: how much longer do they take?',
          'Which activities are repeated most often?',
          'Why do invoices need rework? Use the clarification reasons from the ticket system.',
        ],
        steps: [
          {
            title: 'Detect loops',
            text: 'The agent finds activities that occur more than once in a case and jumps back to earlier steps.',
          },
          {
            title: 'Calculate the rework rate',
            text: 'It calculates the share of cases with rework – overall, per activity and per variant. If you have stored your own definition as a skill, it uses that.',
          },
          {
            title: 'Quantify the extra effort',
            text: 'It compares cases with and without rework: additional steps, additional cycle time and – with cost rates from the Context Hub – additional cost.',
          },
          {
            title: 'Connect the causes',
            text: 'Using case attributes and context, such as clarification reasons from a ticket system, it shows why rework happens.',
          },
        ],
        metrics: [
          { name: 'Rework rate', text: 'Share of cases in which at least one activity is repeated.' },
          { name: 'Repetitions per activity', text: 'How often an activity is executed per case on average.' },
          { name: 'Added duration from rework', text: 'Additional cycle time of cases with rework.' },
          { name: 'First time right', text: 'Share of cases that run through without correction.' },
        ],
        example:
          'In purchase-to-pay the agent notices that invoice entry occurs more than once in some cases. It compares these cases with the rest, quantifies the added duration and links invoice rework via the invoice ID to the clarification reasons from the ticket system. A loop in the graph becomes a concrete cause: wrong prices on the purchase order, missing goods receipts, quantity mismatches.',
        output:
          'Rework rate and extra effort per activity and variant, a ranking of causes and the affected cases – linked to the process graph and exportable as an Excel file or presentation.',
        data:
          'A perspective of the process. For causes, additional information in the Context Hub helps, such as ticket or clarification data; for cost, the agent needs cost rates per activity.',
        faq: [
          {
            question: 'What is rework in a process?',
            answer:
              'Rework means steps that have to be repeated because the result was not right the first time: changed purchase orders, corrected invoices, repeated checks. Rework costs time and capacity and often points to problems further upstream in the process.',
          },
          {
            question: 'How does the agent calculate the rework rate?',
            answer:
              'By default a case counts as reworked if at least one activity occurs more than once or the case jumps back to an earlier step. If you have your own definition, store it as a skill in the AI Hub – the agent then calculates according to your rules.',
          },
          {
            question: 'How is it different from the Structural Deviation Analysis Agent?',
            answer:
              'The Structural Deviation Analysis Agent finds every deviation from the expected flow; rework is one of them. The Rework Analysis Agent goes deep on loops and repetitions: rate, extra effort and causes.',
          },
        ],
      },
    },
  },
  {
    id: 'compliance',
    category: 'flow',
    icon: ShieldCheck,
    processes: ['purchase-to-pay', 'premium-to-tax'],
    related: ['structural-deviation', 'root-cause', 'working-capital'],
    content: {
      de: {
        name: 'Compliance-Agent',
        tagline: 'Freigaben, Funktionstrennung und interne Kontrollen im Prozess prüfen – in jedem Fall statt in Stichproben',
        metaTitle: 'Compliance-Agent – Prozess-Compliance und Kontrollen mit KI prüfen | Noreja',
        metaDescription:
          'Der Compliance-Agent in Minerva prüft alle Fälle eines Prozesses gegen eure Richtlinien: Freigabegrenzen, Vier-Augen-Prinzip, Funktionstrennung und nachträgliche Bestellungen – mit Nachweis je Befund.',
        teaser:
          'Prüft alle Fälle gegen eure Richtlinien – Freigabegrenzen, Vier-Augen-Prinzip, Funktionstrennung – und belegt jeden Befund.',
        summary:
          'Der Compliance-Agent prüft, ob deine Prozesse die Regeln einhalten, die für sie gelten: interne Richtlinien, Freigabegrenzen, das Vier-Augen-Prinzip und die Funktionstrennung. Statt Stichproben prüft er alle Fälle einer Perspektive, findet Verstöße und die Muster dahinter und nennt zu jedem Befund die Regel, gegen die verstoßen wurde. Die Regeln selbst holt er aus dem Context Hub: Ihr hinterlegt eure Richtlinien einmal, der Agent wendet sie bei jeder Prüfung an.',
        questions: [
          'Gibt es Bestellungen, die von derselben Person angelegt und freigegeben wurden?',
          'Welche Rechnungen über 10.000 Euro wurden ohne zweite Freigabe bezahlt?',
          'Wo wurde nachträglich bestellt, also erst nach dem Rechnungseingang?',
          'Fass die Compliance-Befunde des letzten Quartals für die Interne Revision zusammen.',
        ],
        steps: [
          {
            title: 'Regeln lesen',
            text: 'Der Agent liest die relevanten Richtlinien aus dem Context Hub – etwa Freigabegrenzen, Vier-Augen-Prinzip oder Regeln zur Funktionstrennung – und übersetzt sie in prüfbare Bedingungen.',
          },
          {
            title: 'Alle Fälle prüfen',
            text: 'Er prüft jede Bedingung gegen alle Fälle der Perspektive: Reihenfolge der Schritte, ausführende Personen oder Rollen, Beträge und Zeitpunkte.',
          },
          {
            title: 'Befunde bündeln',
            text: 'Er fasst Verstöße nach Regel, Organisationseinheit und Zeitraum zusammen und trennt Einzelfälle von systematischen Mustern.',
          },
          {
            title: 'Nachweise dokumentieren',
            text: 'Jeder Befund verweist auf die betroffenen Fälle und die verletzte Regel – nachvollziehbar für Revision und Prüfer.',
          },
        ],
        metrics: [
          { name: 'Verstoßquote je Regel', text: 'Anteil der Fälle, die eine bestimmte Regel verletzen.' },
          {
            name: 'Funktionstrennungskonflikte',
            text: 'Fälle, in denen dieselbe Person unvereinbare Schritte ausgeführt hat (Segregation of Duties).',
          },
          { name: 'Fehlende Freigaben', text: 'Fälle über einer Freigabegrenze ohne die vorgeschriebene Genehmigung.' },
          {
            name: 'Nachträgliche Bestellungen',
            text: 'Bestellungen, die erst nach dem Rechnungseingang angelegt wurden.',
          },
        ],
        example:
          'Vor der Jahresabschlussprüfung bittet die Interne Revision um eine Übersicht der Kontrollverstöße im Einkauf. Der Agent prüft alle Bestellungen des Geschäftsjahres gegen die Freigaberichtlinie und die Regeln zur Funktionstrennung, findet nachträgliche Bestellungen und Fälle mit identischer Person bei Anlage und Freigabe und zeigt, dass sie sich auf eine Gesellschaft konzentrieren. Das Ergebnis liefert er als Excel-Liste mit allen betroffenen Fällen und als kurzen Bericht.',
        output:
          'Eine Übersicht der Befunde je Regel mit Verstoßquote, eine Liste aller betroffenen Fälle zum Nachprüfen und auf Wunsch ein Bericht für Revision, Compliance-Abteilung oder Prozessverantwortliche.',
        data:
          'Eine Perspektive mit den ausführenden Personen oder Rollen je Aktivität und, je nach Regel, mit Beträgen und Zeitstempeln. Die Richtlinien legt ihr im Context Hub ab – vertrauliche Regelwerke lassen sich auf lokale Modelle beschränken.',
        faq: [
          {
            question: 'Was prüft ein Compliance-Agent in Geschäftsprozessen?',
            answer:
              'Ein Compliance-Agent prüft, ob die tatsächlichen Abläufe internen Richtlinien und externen Vorgaben entsprechen – zum Beispiel Freigabegrenzen, dem Vier-Augen-Prinzip, der Funktionstrennung oder der Reihenfolge von Bestellung, Wareneingang und Rechnung. Anders als eine Stichprobenprüfung deckt er alle Fälle ab.',
          },
          {
            question: 'Ersetzt der Agent die Interne Revision?',
            answer:
              'Nein. Er nimmt der Revision die Fleißarbeit ab: alle Fälle prüfen, Befunde bündeln, Nachweise zusammenstellen. Die Bewertung der Befunde und die Entscheidung über Maßnahmen bleiben bei den Menschen, die dafür verantwortlich sind.',
          },
          {
            question: 'Wie geht der Agent mit vertraulichen Richtlinien um?',
            answer:
              'Einträge im Context Hub lassen sich so markieren, dass sie nur mit lokalen Modellen in Norejas Infrastruktur verarbeitet werden. Außerdem sieht der Agent nur die Perspektiven und Dokumente, auf die die fragende Person selbst Zugriff hat.',
          },
        ],
      },
      en: {
        name: 'Compliance Agent',
        tagline: 'Check approvals, segregation of duties and internal controls in your processes – in every case, not in samples',
        metaTitle: 'Compliance Agent – Check Process Compliance and Controls with AI | Noreja',
        metaDescription:
          'The Compliance Agent in Minerva checks every case of a process against your policies: approval limits, four-eyes principle, segregation of duties and after-the-fact purchase orders – with evidence for each finding.',
        teaser:
          'Checks every case against your policies – approval limits, four-eyes principle, segregation of duties – and backs up each finding.',
        summary:
          'The Compliance Agent checks whether your processes follow the rules that apply to them: internal policies, approval limits, the four-eyes principle and segregation of duties. Instead of sampling, it checks every case in a perspective, finds violations and the patterns behind them, and names the rule that was broken for each finding. It takes the rules themselves from the Context Hub: you store your policies once, and the agent applies them in every check.',
        questions: [
          'Are there purchase orders created and approved by the same person?',
          'Which invoices over €10,000 were paid without a second approval?',
          'Where were purchase orders created after the invoice had arrived?',
          'Summarize last quarter’s compliance findings for internal audit.',
        ],
        steps: [
          {
            title: 'Read the rules',
            text: 'The agent reads the relevant policies from the Context Hub – approval limits, the four-eyes principle or segregation-of-duties rules – and turns them into testable conditions.',
          },
          {
            title: 'Check every case',
            text: 'It tests each condition against all cases in the perspective: sequence of steps, executing people or roles, amounts and timestamps.',
          },
          {
            title: 'Group the findings',
            text: 'It groups violations by rule, organizational unit and period and separates one-off cases from systematic patterns.',
          },
          {
            title: 'Document the evidence',
            text: 'Every finding points to the affected cases and the rule that was broken – traceable for internal and external auditors.',
          },
        ],
        metrics: [
          { name: 'Violation rate per rule', text: 'Share of cases that break a specific rule.' },
          {
            name: 'Segregation-of-duties conflicts',
            text: 'Cases in which the same person performed incompatible steps.',
          },
          { name: 'Missing approvals', text: 'Cases above an approval limit without the required sign-off.' },
          { name: 'After-the-fact purchase orders', text: 'Purchase orders created only after the invoice arrived.' },
        ],
        example:
          'Ahead of the year-end audit, internal audit asks for an overview of control violations in procurement. The agent checks every purchase order of the fiscal year against the approval policy and the segregation-of-duties rules, finds after-the-fact purchase orders and cases where the same person created and approved, and shows that they concentrate in one legal entity. It delivers the result as an Excel list of all affected cases and a short report.',
        output:
          'An overview of findings per rule with violation rates, a list of all affected cases for follow-up and, on request, a report for internal audit, the compliance team or process owners.',
        data:
          'A perspective with the executing people or roles per activity and, depending on the rule, amounts and timestamps. You store the policies in the Context Hub – confidential rule sets can be restricted to local models.',
        faq: [
          {
            question: 'What does a compliance agent check in business processes?',
            answer:
              'A compliance agent checks whether the actual process flows meet internal policies and external requirements – for example approval limits, the four-eyes principle, segregation of duties or the order of purchase order, goods receipt and invoice. Unlike a sample-based audit, it covers every case.',
          },
          {
            question: 'Does the agent replace internal audit?',
            answer:
              'No. It takes over the legwork: checking every case, grouping findings, compiling evidence. Assessing the findings and deciding on measures stays with the people responsible for them.',
          },
          {
            question: 'How does the agent handle confidential policies?',
            answer:
              'Entries in the Context Hub can be marked so that they are only processed by local models in Noreja’s infrastructure. On top of that, the agent only sees the perspectives and documents the person asking has access to.',
          },
        ],
      },
    },
  },

  // ------------------------------------------------------------------ time
  {
    id: 'cycle-time',
    category: 'time',
    icon: Timer,
    processes: ['order-to-cash', 'purchase-to-pay'],
    related: ['waiting-time', 'on-time', 'work-in-progress'],
    content: {
      de: {
        name: 'Laufzeitenanalyse-Agent',
        tagline: 'Durchlaufzeiten von Geschäftsprozessen messen, vergleichen und erklären',
        metaTitle: 'Laufzeitenanalyse-Agent – Durchlaufzeiten mit KI analysieren | Noreja',
        metaDescription:
          'Der Laufzeitenanalyse-Agent in Minerva misst Durchlaufzeiten je Fall, Übergang und Variante, zeigt Median und Ausreißer und erklärt, warum manche Fälle deutlich länger dauern als andere.',
        teaser:
          'Misst Durchlaufzeiten je Fall, Übergang und Variante, zeigt die Verteilung statt nur des Durchschnitts und erklärt die Ausreißer.',
        summary:
          'Der Laufzeitenanalyse-Agent misst, wie lange deine Prozesse dauern – vom ersten bis zum letzten Schritt und zwischen jeder einzelnen Aktivität. Er vergleicht Durchlaufzeiten über Varianten, Zeiträume und Fallmerkmale, findet die Abschnitte, die am meisten Zeit kosten, und erklärt, warum manche Fälle deutlich länger brauchen als andere. Statt eines Durchschnitts bekommst du die Verteilung: Median, Streuung und die langsamsten Fälle.',
        questions: [
          'Wie lang ist die durchschnittliche und die mediane Durchlaufzeit im Order-to-Cash-Prozess?',
          'Welcher Übergang trägt am meisten zur Gesamtdurchlaufzeit bei?',
          'Wie hat sich die Durchlaufzeit seit Jahresbeginn entwickelt – pro Monat?',
          'Warum dauern Fälle aus Werk Nord länger als die aus Werk Süd?',
        ],
        steps: [
          {
            title: 'Fälle festlegen',
            text: 'Der Agent klärt, welche Fälle zählen – abgeschlossene, in einem Zeitraum gestartete oder nur eine Variante – und fragt nach, wenn die Frage das offen lässt.',
          },
          {
            title: 'Durchlaufzeiten berechnen',
            text: 'Er berechnet die Durchlaufzeit je Fall und je Übergang zwischen zwei Aktivitäten, mit Mittelwert, Median und Perzentilen.',
          },
          {
            title: 'Zeittreiber finden',
            text: 'Er zerlegt die Gesamtdauer in ihre Abschnitte und zeigt, welche Übergänge und Varianten den größten Anteil haben.',
          },
          {
            title: 'Unterschiede erklären',
            text: 'Er vergleicht schnelle und langsame Fälle über ihre Merkmale und den Kontext aus dem Context Hub und nennt die Faktoren, die mit langen Laufzeiten einhergehen.',
          },
        ],
        metrics: [
          { name: 'Durchlaufzeit', text: 'Dauer vom ersten bis zum letzten Ereignis eines Falls.' },
          { name: 'Median und Perzentile', text: 'Typische Dauer und die Ausreißer am oberen Ende – robuster als der Durchschnitt.' },
          { name: 'Übergangszeit', text: 'Dauer zwischen zwei aufeinanderfolgenden Aktivitäten.' },
          { name: 'Trend', text: 'Entwicklung der Durchlaufzeit über Wochen, Monate oder Quartale.' },
        ],
        example:
          'Im Order-to-Cash-Prozess sieht die mittlere Durchlaufzeit gut aus, und trotzdem beschweren sich Kunden. Der Agent zeigt die Verteilung statt des Mittelwerts: Ein kleiner Teil der Aufträge braucht ein Vielfaches der typischen Zeit. Er zerlegt diese Fälle in ihre Abschnitte, findet den Übergang von der Auftragsbestätigung zur Lieferung als Haupttreiber und zeigt, dass er vor allem Aufträge mit Sonderkonditionen betrifft.',
        output:
          'Kennzahlen zur Durchlaufzeit als Tabelle oder Diagramm, eine Aufschlüsselung nach Übergängen und Varianten sowie die Faktoren, die lange Laufzeiten erklären – auf Wunsch als Excel-Datei oder Bericht.',
        data:
          'Eine Perspektive mit Zeitstempeln je Aktivität. Für die Durchlaufzeit genügt ein Zeitstempel je Ereignis; Bearbeitungszeiten innerhalb einer Aktivität brauchen Start- und Endzeitpunkte.',
        faq: [
          {
            question: 'Was ist der Unterschied zwischen Durchlaufzeit und Bearbeitungszeit?',
            answer:
              'Die Durchlaufzeit ist die gesamte Dauer eines Falls vom ersten bis zum letzten Schritt, einschließlich aller Wartezeiten. Die Bearbeitungszeit umfasst nur die Zeit, in der aktiv an einem Schritt gearbeitet wird. Die Differenz ist Liegezeit – sie untersucht der Wartezeitenanalyse-Agent im Detail.',
          },
          {
            question: 'Warum zeigt der Agent den Median und nicht nur den Durchschnitt?',
            answer:
              'Durchlaufzeiten sind fast immer schief verteilt: Wenige sehr lange Fälle ziehen den Durchschnitt nach oben. Der Median zeigt die typische Dauer, Perzentile zeigen, wie lang die langsamsten Fälle sind. Beides zusammen ergibt ein ehrliches Bild.',
          },
          {
            question: 'Kann der Agent Durchlaufzeiten zweier Zeiträume vergleichen?',
            answer:
              'Ja. Du nennst die Zeiträume oder Gruppen – etwa vor und nach einer Prozessänderung –, und der Agent stellt die Kennzahlen gegenüber und zeigt, welche Abschnitte sich verändert haben.',
          },
        ],
      },
      en: {
        name: 'Cycle Time Analysis Agent',
        tagline: 'Measure, compare and explain the cycle times of your business processes',
        metaTitle: 'Cycle Time Analysis Agent – Analyze Process Cycle Times with AI | Noreja',
        metaDescription:
          'The Cycle Time Analysis Agent in Minerva measures cycle times per case, transition and variant, shows median and outliers and explains why some cases take much longer than others.',
        teaser:
          'Measures cycle times per case, transition and variant, shows the distribution rather than just the average and explains the outliers.',
        summary:
          'The Cycle Time Analysis Agent measures how long your processes take – from the first to the last step and between every pair of activities. It compares cycle times across variants, periods and case attributes, finds the segments that cost the most time and explains why some cases take much longer than others. Instead of an average you get the distribution: median, spread and the slowest cases.',
        questions: [
          'What are the average and median cycle times in the order-to-cash process?',
          'Which transition contributes most to the total cycle time?',
          'How has the cycle time developed since the start of the year – per month?',
          'Why do cases from the north plant take longer than those from the south plant?',
        ],
        steps: [
          {
            title: 'Define the cases',
            text: 'The agent clarifies which cases count – completed ones, those started in a period or a single variant – and asks if the question leaves this open.',
          },
          {
            title: 'Calculate cycle times',
            text: 'It calculates the cycle time per case and per transition between two activities, with mean, median and percentiles.',
          },
          {
            title: 'Find the time drivers',
            text: 'It breaks the total duration into its segments and shows which transitions and variants account for the largest share.',
          },
          {
            title: 'Explain the differences',
            text: 'It compares fast and slow cases by their attributes and the context from the Context Hub and names the factors that go along with long cycle times.',
          },
        ],
        metrics: [
          { name: 'Cycle time (lead time)', text: 'Duration from the first to the last event of a case.' },
          { name: 'Median and percentiles', text: 'Typical duration and the outliers at the top end – more robust than the average.' },
          { name: 'Transition time', text: 'Duration between two consecutive activities.' },
          { name: 'Trend', text: 'Development of cycle time over weeks, months or quarters.' },
        ],
        example:
          'In order-to-cash, the average cycle time looks fine, yet customers complain. The agent shows the distribution instead of the mean: a small share of orders takes several times the typical duration. It breaks these cases into segments, identifies the transition from order confirmation to delivery as the main driver and shows that it mainly affects orders with special terms.',
        output:
          'Cycle time KPIs as a table or chart, a breakdown by transition and variant and the factors that explain long cycle times – as an Excel file or report on request.',
        data:
          'A perspective with timestamps per activity. One timestamp per event is enough for cycle time; processing times within an activity need start and end timestamps.',
        faq: [
          {
            question: 'What is the difference between cycle time and processing time?',
            answer:
              'Cycle time is the total duration of a case from the first to the last step, including all waiting. Processing time covers only the time spent actively working on a step. The difference is idle time – the Waiting Time Analysis Agent examines it in detail.',
          },
          {
            question: 'Why does the agent show the median and not just the average?',
            answer:
              'Cycle times are almost always skewed: a few very long cases pull the average up. The median shows the typical duration, percentiles show how long the slowest cases are. Together they give an honest picture.',
          },
          {
            question: 'Can the agent compare cycle times of two periods?',
            answer:
              'Yes. You name the periods or groups – for instance before and after a process change – and the agent puts the KPIs side by side and shows which segments changed.',
          },
        ],
      },
    },
  },
  {
    id: 'waiting-time',
    category: 'time',
    icon: Hourglass,
    processes: ['purchase-to-pay', 'lead-to-activation'],
    related: ['cycle-time', 'work-in-progress', 'root-cause'],
    content: {
      de: {
        name: 'Wartezeitenanalyse-Agent',
        tagline: 'Liegezeiten zwischen Prozessschritten finden, Engpässe erkennen und ihre Ursachen erklären',
        metaTitle: 'Wartezeitenanalyse-Agent – Liegezeiten und Engpässe im Prozess finden | Noreja',
        metaDescription:
          'Der Wartezeitenanalyse-Agent in Minerva misst Liegezeiten zwischen Prozessschritten, findet Engpässe und zeitliche Muster und erklärt mit Prozessdaten und Unternehmenswissen, warum Vorgänge liegen bleiben.',
        teaser:
          'Findet die Zeit, in der nichts passiert: Liegezeiten zwischen Schritten, Engpässe und die Gründe, warum Vorgänge liegen bleiben.',
        summary:
          'Der Wartezeitenanalyse-Agent findet die Zeit, in der in deinen Prozessen nichts passiert. In vielen Geschäftsprozessen macht Liegezeit einen großen Teil der Durchlaufzeit aus: Vorgänge warten auf eine Freigabe, auf eine Rückmeldung, auf den nächsten Stapellauf. Der Agent misst diese Wartezeiten zwischen den Aktivitäten, zeigt, wo sie sich stauen, und erklärt mit Prozessdaten und Unternehmenswissen, warum Vorgänge dort liegen bleiben.',
        questions: [
          'Wo liegen Vorgänge im Purchase-to-Pay-Prozess am längsten, bevor es weitergeht?',
          'Wie lange warten Rechnungen im Schnitt auf die Freigabe – und bei welchen Kostenstellen am längsten?',
          'Gibt es Wochentage oder Uhrzeiten, an denen sich Vorgänge stauen?',
          'Welcher Anteil der Durchlaufzeit ist Wartezeit?',
        ],
        steps: [
          {
            title: 'Wartezeiten messen',
            text: 'Der Agent berechnet für jeden Übergang die Zeit zwischen dem Ende eines Schritts und dem Beginn des nächsten.',
          },
          {
            title: 'Engpässe lokalisieren',
            text: 'Er sortiert die Übergänge nach Gesamtwartezeit – Fallzahl mal Dauer – und findet die Stellen, an denen der Prozess am meisten Zeit verliert.',
          },
          {
            title: 'Muster erkennen',
            text: 'Er prüft, ob Wartezeiten mit Wochentagen, Monatsenden, Teams oder Belegarten zusammenhängen – typische Hinweise auf Stapelverarbeitung oder Kapazitätsgrenzen.',
          },
          {
            title: 'Ursachen benennen',
            text: 'Mit Richtlinien und bekannten Problemen aus dem Context Hub erklärt er, warum Vorgänge an dieser Stelle warten, und nennt die Quelle.',
          },
        ],
        metrics: [
          { name: 'Wartezeit je Übergang', text: 'Mittlere und mediane Liegezeit zwischen zwei Aktivitäten.' },
          { name: 'Gesamtwartezeit', text: 'Summe der Wartezeit über alle Fälle – zeigt, wo sich ein Hebel lohnt.' },
          { name: 'Wartezeitanteil', text: 'Anteil der Wartezeit an der gesamten Durchlaufzeit.' },
          { name: 'Zeitliche Muster', text: 'Wartezeiten nach Wochentag, Tageszeit oder Monatsabschnitt.' },
        ],
        example:
          'Im Purchase-to-Pay-Prozess sieht der Agent, dass Rechnungen nach der Erfassung lange auf die Freigabe warten – und zwar nicht gleichmäßig: Die Wartezeit steigt in der zweiten Monatshälfte stark an und betrifft vor allem Rechnungen ohne Bestellbezug. Aus dem Context Hub kennt er die Freigaberichtlinie, nach der solche Rechnungen an die Kostenstellenverantwortlichen gehen, und benennt damit die eigentliche Ursache: eine Freigabestufe, die in der Monatsabschlussphase kaum Kapazität hat.',
        output:
          'Eine Rangliste der Übergänge mit den höchsten Wartezeiten, zeitliche Muster als Diagramm und eine Erklärung, warum Vorgänge dort liegen bleiben – mit Verweis auf die Daten und Dokumente, auf die sich der Agent stützt.',
        data:
          'Eine Perspektive mit Zeitstempeln je Aktivität. Mit Start- und Endzeitpunkten trennt der Agent Warte- und Bearbeitungszeit sauber; liegt nur ein Zeitstempel je Ereignis vor, misst er die Zeit zwischen den Ereignissen.',
        faq: [
          {
            question: 'Was ist der Unterschied zwischen Wartezeit und Durchlaufzeit?',
            answer:
              'Die Durchlaufzeit ist die gesamte Dauer eines Falls. Wartezeit ist der Teil davon, in dem niemand an dem Vorgang arbeitet – er liegt in einer Warteschlange, einem Postfach oder wartet auf eine Freigabe. Wer Durchlaufzeiten senken will, setzt meist bei den Wartezeiten an.',
          },
          {
            question: 'Wie erkennt der Agent einen Engpass?',
            answer:
              'Ein Engpass zeigt sich, wenn sich vor einem Schritt Vorgänge sammeln und die Wartezeit dort deutlich höher ist als an anderen Stellen. Der Agent gewichtet die Wartezeit dafür mit der Zahl der betroffenen Fälle und prüft, ob sie mit der Menge offener Vorgänge steigt.',
          },
          {
            question: 'Braucht der Agent Start- und Endzeitpunkte je Aktivität?',
            answer:
              'Nicht zwingend. Mit Start- und Endzeitpunkten trennt er Warte- und Bearbeitungszeit sauber. Liegt nur ein Zeitstempel je Ereignis vor, misst er die Zeit zwischen den Ereignissen und weist darauf hin, dass sie auch Bearbeitungszeit enthält.',
          },
        ],
      },
      en: {
        name: 'Waiting Time Analysis Agent',
        tagline: 'Find idle time between process steps, spot bottlenecks and explain their causes',
        metaTitle: 'Waiting Time Analysis Agent – Find Idle Time and Bottlenecks | Noreja',
        metaDescription:
          'The Waiting Time Analysis Agent in Minerva measures idle time between process steps, finds bottlenecks and time patterns and uses process data and company knowledge to explain why work sits idle.',
        teaser:
          'Finds the time in which nothing happens: idle time between steps, bottlenecks and the reasons why work sits still.',
        summary:
          'The Waiting Time Analysis Agent finds the time in which nothing happens in your processes. In many business processes, idle time makes up a large part of the cycle time: work waits for an approval, for a reply, for the next batch run. The agent measures these waiting times between activities, shows where they pile up and uses process data and company knowledge to explain why work sits there.',
        questions: [
          'Where does work sit longest in the purchase-to-pay process before it moves on?',
          'How long do invoices wait for approval on average – and at which cost centers the longest?',
          'Are there weekdays or times of day when work piles up?',
          'What share of the cycle time is waiting time?',
        ],
        steps: [
          {
            title: 'Measure waiting times',
            text: 'For every transition, the agent calculates the time between the end of one step and the start of the next.',
          },
          {
            title: 'Locate bottlenecks',
            text: 'It ranks transitions by total waiting time – case count times duration – and finds the places where the process loses the most time.',
          },
          {
            title: 'Recognize patterns',
            text: 'It checks whether waiting times relate to weekdays, month ends, teams or document types – typical signs of batch processing or capacity limits.',
          },
          {
            title: 'Name the causes',
            text: 'Using policies and known issues from the Context Hub, it explains why work waits at this point and cites the source.',
          },
        ],
        metrics: [
          { name: 'Waiting time per transition', text: 'Mean and median idle time between two activities.' },
          { name: 'Total waiting time', text: 'Sum of waiting time across all cases – shows where a lever pays off.' },
          { name: 'Waiting time share', text: 'Share of waiting time in the total cycle time.' },
          { name: 'Time patterns', text: 'Waiting times by weekday, time of day or part of the month.' },
        ],
        example:
          'In purchase-to-pay, the agent sees that invoices wait a long time for approval after entry – and not evenly: waiting time rises sharply in the second half of the month and mainly affects invoices without a purchase order. From the Context Hub it knows the approval policy that routes such invoices to cost center owners, and so names the actual cause: an approval level with hardly any capacity during month-end closing.',
        output:
          'A ranking of the transitions with the highest waiting times, time patterns as a chart and an explanation of why work sits there – with references to the data and documents the agent relied on.',
        data:
          'A perspective with timestamps per activity. With start and end timestamps the agent cleanly separates waiting and processing time; with a single timestamp per event it measures the time between events.',
        faq: [
          {
            question: 'What is the difference between waiting time and cycle time?',
            answer:
              'Cycle time is the total duration of a case. Waiting time is the part of it in which nobody works on the case – it sits in a queue, an inbox or waits for an approval. Anyone who wants to reduce cycle times usually starts with waiting times.',
          },
          {
            question: 'How does the agent recognize a bottleneck?',
            answer:
              'A bottleneck shows when work piles up before a step and the waiting time there is clearly higher than elsewhere. The agent weights waiting time by the number of affected cases and checks whether it rises with the amount of open work.',
          },
          {
            question: 'Does the agent need start and end timestamps per activity?',
            answer:
              'Not necessarily. With start and end timestamps it cleanly separates waiting and processing time. With a single timestamp per event it measures the time between events and points out that this includes processing time.',
          },
        ],
      },
    },
  },
  {
    id: 'on-time',
    category: 'time',
    icon: CalendarClock,
    processes: ['order-to-cash', 'lead-to-activation'],
    related: ['cycle-time', 'waiting-time', 'root-cause'],
    content: {
      de: {
        name: 'Termintreue-Analyse-Agent',
        tagline: 'Liefertermintreue, SLA-Einhaltung und Fristen im Prozess messen – und jede Verspätung erklären',
        metaTitle: 'Termintreue-Analyse-Agent – Liefertreue und SLAs mit KI analysieren | Noreja',
        metaDescription:
          'Der Termintreue-Analyse-Agent in Minerva misst Liefertermintreue, OTIF und SLA-Einhaltung, zeigt, an welchem Prozessschritt Zeit verloren geht, und findet die Muster hinter Verspätungen.',
        teaser:
          'Misst Liefertermintreue, OTIF und SLA-Einhaltung und zeigt, an welchem Schritt Zusagen gerissen werden.',
        summary:
          'Der Termintreue-Analyse-Agent misst, wie zuverlässig deine Prozesse ihre Zusagen einhalten: Liefertermine an Kunden, Service Level Agreements, gesetzliche oder vertragliche Fristen. Er zeigt den Anteil pünktlicher Fälle, wie groß die Verspätungen sind und an welchem Prozessschritt die Zeit verloren geht. Weil er den gesamten Prozessverlauf kennt, findet er auch offene Fälle, deren Frist bereits überschritten oder knapp ist.',
        questions: [
          'Wie hoch war unsere Liefertermintreue im letzten Quartal, und wie hat sie sich entwickelt?',
          'Welche Tickets haben die SLA-Reaktionszeit überschritten, und in welchem Schritt?',
          'An welchem Prozessschritt entstehen die meisten Verspätungen?',
          'Welche offenen Fälle haben ihre Frist schon überschritten?',
        ],
        steps: [
          {
            title: 'Zusage festlegen',
            text: 'Der Agent klärt, woran Pünktlichkeit gemessen wird – zugesagter Liefertermin, SLA-Zeit oder Frist – und liest den Sollwert aus den Fallmerkmalen oder aus einer Regel im Context Hub.',
          },
          {
            title: 'Pünktlichkeit messen',
            text: 'Er vergleicht für jeden Fall den Sollwert mit dem tatsächlichen Zeitpunkt und berechnet Quote und Ausmaß der Verspätungen.',
          },
          {
            title: 'Verspätungen verorten',
            text: 'Er zerlegt verspätete Fälle in ihre Abschnitte und zeigt, an welchem Schritt die Zeit verloren geht.',
          },
          {
            title: 'Muster aufdecken',
            text: 'Er prüft, ob Verspätungen bei bestimmten Kunden, Produkten, Standorten oder Zeiträumen gehäuft auftreten.',
          },
        ],
        metrics: [
          { name: 'Termintreue', text: 'Anteil der Fälle, die ihre Zusage einhalten (On-Time-Rate).' },
          { name: 'OTIF (On Time In Full)', text: 'Anteil der Lieferungen, die pünktlich und vollständig erfolgen – sofern Mengen vorliegen.' },
          { name: 'SLA-Einhaltung', text: 'Anteil der Fälle innerhalb der vereinbarten Reaktions- oder Lösungszeit.' },
          { name: 'Verspätung in Tagen', text: 'Wie groß Verspätungen sind – Median und Verteilung.' },
        ],
        example:
          'Die Vertriebsleitung will wissen, warum die Liefertermintreue gesunken ist. Der Agent berechnet sie je Monat, sieht den Rückgang bei Aufträgen mit Sonderanfertigung und verortet den Zeitverlust zwischen Auftragsbestätigung und Fertigungsfreigabe. Zusätzlich zeigt er, dass bei einem Teil dieser Aufträge der zugesagte Termin kürzer war als die übliche Fertigungszeit – die Zusage war also von Anfang an kaum zu halten.',
        output:
          'Termintreue-Kennzahlen je Zeitraum, Kunde oder Standort, die Prozessschritte mit dem größten Zeitverlust und eine Liste der verspäteten und kritischen offenen Fälle – als Tabelle, Diagramm oder Bericht.',
        data:
          'Eine Perspektive mit dem zugesagten Termin, der SLA-Zeit oder der Frist als Fallmerkmal – oder eine Regel im Context Hub, aus der sich der Sollwert ableiten lässt.',
        faq: [
          {
            question: 'Was ist Termintreue?',
            answer:
              'Termintreue – auch Liefertreue oder On-Time-Performance – ist der Anteil der Aufträge oder Vorgänge, die zum zugesagten Zeitpunkt erledigt werden. Sie ist eine der wichtigsten Kennzahlen für Kundenzufriedenheit in Vertrieb, Logistik und Service.',
          },
          {
            question: 'Was ist der Unterschied zwischen Termintreue und OTIF?',
            answer:
              'Termintreue misst nur den Zeitpunkt. OTIF – On Time In Full – verlangt zusätzlich, dass die Lieferung vollständig ist. Ein Auftrag, der pünktlich, aber nur zur Hälfte geliefert wird, zählt für die Termintreue, nicht aber für OTIF.',
          },
          {
            question: 'Funktioniert der Agent auch für interne SLAs?',
            answer:
              'Ja. Jede Zusage, die sich als Sollzeit oder Frist ausdrücken lässt, kann der Agent prüfen – etwa Reaktionszeiten im IT-Service, Bearbeitungsfristen bei Anträgen oder interne Freigabefristen.',
          },
        ],
      },
      en: {
        name: 'On-Time Performance Agent',
        tagline: 'Measure on-time delivery, SLA compliance and deadlines in your processes – and explain every delay',
        metaTitle: 'On-Time Performance Agent – Analyze On-Time Delivery and SLAs with AI | Noreja',
        metaDescription:
          'The On-Time Performance Agent in Minerva measures on-time delivery, OTIF and SLA compliance, shows at which process step time is lost and finds the patterns behind delays.',
        teaser: 'Measures on-time delivery, OTIF and SLA compliance and shows at which step commitments are missed.',
        summary:
          'The On-Time Performance Agent measures how reliably your processes keep their commitments: delivery dates to customers, service level agreements, legal or contractual deadlines. It shows the share of on-time cases, how large the delays are and at which process step the time is lost. Because it knows the full process history, it also finds open cases whose deadline has already passed or is close.',
        questions: [
          'What was our on-time delivery rate last quarter, and how has it developed?',
          'Which tickets exceeded the SLA response time, and at which step?',
          'At which process step do most delays arise?',
          'Which open cases have already missed their deadline?',
        ],
        steps: [
          {
            title: 'Define the commitment',
            text: 'The agent clarifies what punctuality is measured against – promised delivery date, SLA time or deadline – and reads the target from the case attributes or a rule in the Context Hub.',
          },
          {
            title: 'Measure punctuality',
            text: 'For every case it compares the target with the actual time and calculates the rate and extent of delays.',
          },
          {
            title: 'Locate the delays',
            text: 'It breaks late cases into their segments and shows at which step the time is lost.',
          },
          {
            title: 'Uncover patterns',
            text: 'It checks whether delays cluster at certain customers, products, sites or periods.',
          },
        ],
        metrics: [
          { name: 'On-time rate', text: 'Share of cases that meet their commitment.' },
          { name: 'OTIF (on time in full)', text: 'Share of deliveries that are on time and complete – where quantities are available.' },
          { name: 'SLA compliance', text: 'Share of cases within the agreed response or resolution time.' },
          { name: 'Delay in days', text: 'How large delays are – median and distribution.' },
        ],
        example:
          'Sales management wants to know why on-time delivery has dropped. The agent calculates it per month, sees the decline in made-to-order jobs and locates the time loss between order confirmation and production release. It also shows that for some of these orders the promised date was shorter than the usual production time – the commitment was hard to keep from the start.',
        output:
          'On-time KPIs by period, customer or site, the process steps with the largest time loss and a list of late and critical open cases – as a table, chart or report.',
        data:
          'A perspective with the promised date, SLA time or deadline as a case attribute – or a rule in the Context Hub from which the target can be derived.',
        faq: [
          {
            question: 'What is on-time performance?',
            answer:
              'On-time performance – also on-time delivery – is the share of orders or cases completed by the promised time. It is one of the key KPIs for customer satisfaction in sales, logistics and service.',
          },
          {
            question: 'What is the difference between on-time delivery and OTIF?',
            answer:
              'On-time delivery only measures timing. OTIF – on time in full – also requires the delivery to be complete. An order delivered on time but only half complete counts for on-time delivery, not for OTIF.',
          },
          {
            question: 'Does the agent work for internal SLAs too?',
            answer:
              'Yes. Any commitment that can be expressed as a target time or deadline can be checked – response times in IT service, processing deadlines for applications or internal approval deadlines.',
          },
        ],
      },
    },
  },

  // --------------------------------------------------------------- capital
  {
    id: 'working-capital',
    category: 'capital',
    icon: Wallet,
    processes: ['purchase-to-pay', 'order-to-cash'],
    related: ['compliance', 'rework', 'on-time'],
    content: {
      de: {
        name: 'Working-Capital-Analyse-Agent',
        tagline: 'Gebundenes Kapital in Purchase-to-Pay und Order-to-Cash aufdecken – von Zahlungszielen bis Skonto',
        metaTitle: 'Working-Capital-Analyse-Agent – DSO, DPO und Skonto analysieren | Noreja',
        metaDescription:
          'Der Working-Capital-Analyse-Agent in Minerva verbindet Prozessdaten mit Zahlungszielen und Beträgen: verfrühte Zahlungen, verlorenes Skonto, DSO und DPO – und die Prozessschritte dahinter.',
        teaser:
          'Zeigt, wo in Purchase-to-Pay und Order-to-Cash Kapital gebunden ist: verfrühte Zahlungen, verlorenes Skonto, späte Zahlungseingänge.',
        summary:
          'Der Working-Capital-Analyse-Agent zeigt, wo in deinen Prozessen Kapital gebunden ist und wo Geld unnötig früh oder zu spät fließt. Er verbindet die Prozessdaten aus Purchase-to-Pay und Order-to-Cash mit Beträgen, Zahlungszielen und Konditionen und beantwortet Fragen wie: Zahlen wir vor Fälligkeit? Verlieren wir Skonto? Warum kommen Kundenzahlungen später als vereinbart? So wird Working Capital nicht nur als Bilanzkennzahl sichtbar, sondern als Ergebnis konkreter Prozessschritte.',
        questions: [
          'Wie viele Rechnungen haben wir im letzten Quartal vor Fälligkeit bezahlt, und um welchen Betrag geht es?',
          'Wo verlieren wir Skonto, und welche Prozessschritte verzögern die Zahlung?',
          'Wie haben sich die Days Sales Outstanding je Kundensegment entwickelt?',
          'Welche Kunden zahlen regelmäßig nach Fälligkeit, und was passiert davor im Prozess?',
        ],
        steps: [
          {
            title: 'Beträge und Termine verbinden',
            text: 'Der Agent liest Rechnungsbeträge, Zahlungsziele, Skontofristen und Zahlungsdaten aus den Merkmalen der Fälle und ordnet sie dem Prozessverlauf zu.',
          },
          {
            title: 'Zahlungsverhalten bewerten',
            text: 'Er unterscheidet pünktliche, verfrühte und verspätete Zahlungen – auf Lieferanten- wie auf Kundenseite – und beziffert den betroffenen Betrag.',
          },
          {
            title: 'Kapitalbindung berechnen',
            text: 'Er berechnet prozessbasierte Kennzahlen wie DPO und DSO für die Fälle der Perspektive und zeigt, wie sie sich über Zeit, Gesellschaften oder Segmente verteilen.',
          },
          {
            title: 'Prozessursachen finden',
            text: 'Er verknüpft verspätete oder verfrühte Zahlungen mit dem, was vorher im Prozess passiert ist: Nacharbeit an der Rechnung, Klärungsfälle, fehlende Freigaben oder Mahnstufen.',
          },
        ],
        metrics: [
          { name: 'DPO (Days Payables Outstanding)', text: 'Tage zwischen Rechnungseingang und Zahlung an Lieferanten.' },
          { name: 'DSO (Days Sales Outstanding)', text: 'Tage zwischen Rechnungsstellung und Zahlungseingang.' },
          { name: 'Zahlung vor Fälligkeit', text: 'Anteil und Betrag der Rechnungen, die früher als nötig bezahlt werden.' },
          { name: 'Skontoausnutzung', text: 'Anteil des möglichen Skontos, der tatsächlich gezogen wird – und der Betrag, der verloren geht.' },
        ],
        example:
          'In der Kreditorenbuchhaltung zeigt der Agent zwei gegenläufige Effekte: Ein Teil der Rechnungen wird deutlich vor Fälligkeit bezahlt, weil der Zahllauf nicht auf die Zahlungsziele abgestimmt ist. Gleichzeitig verfällt bei Rechnungen mit Nacharbeit regelmäßig die Skontofrist. Der Agent beziffert beide Beträge, zeigt die betroffenen Lieferanten und verknüpft den Skontoverlust mit den Klärungsgründen aus dem Ticketsystem.',
        output:
          'Working-Capital-Kennzahlen je Prozess, Gesellschaft oder Segment, eine Liste der Fälle mit dem größten Hebel und die Prozessschritte, die Zahlungen verzögern oder vorziehen – als Tabelle, Excel-Datei oder Management-Briefing.',
        data:
          'Perspektiven für Purchase-to-Pay oder Order-to-Cash mit Beträgen, Zahlungszielen und Zahlungsdaten als Fallmerkmale. Konditionen und Zahlungsrichtlinien könnt ihr im Context Hub hinterlegen.',
        faq: [
          {
            question: 'Was ist Working Capital?',
            answer:
              'Working Capital – auf Deutsch Nettoumlaufvermögen – ist das Kapital, das im laufenden Geschäft gebunden ist: in Forderungen und Vorräten, abzüglich der kurzfristigen Verbindlichkeiten. Je länger Kunden für ihre Zahlung brauchen und je früher ein Unternehmen seine Lieferanten bezahlt, desto mehr Kapital ist gebunden.',
          },
          {
            question: 'Wie hängen Prozesse und Working Capital zusammen?',
            answer:
              'Kennzahlen wie DSO und DPO sind das Ergebnis vieler einzelner Prozessschritte: wann eine Rechnung erfasst, freigegeben, verschickt oder gemahnt wird. Wer Working Capital verbessern will, muss diese Schritte kennen – genau dort setzt der Agent an.',
          },
          {
            question: 'Ersetzt der Agent das Treasury-Reporting?',
            answer:
              'Nein, er ergänzt es: Das Reporting zeigt die Kennzahl, der Agent zeigt, welche Fälle und Prozessschritte sie treiben.',
          },
        ],
      },
      en: {
        name: 'Working Capital Analysis Agent',
        tagline: 'Uncover tied-up capital in purchase-to-pay and order-to-cash – from payment terms to cash discounts',
        metaTitle: 'Working Capital Analysis Agent – Analyze DSO, DPO and Cash Discounts | Noreja',
        metaDescription:
          'The Working Capital Analysis Agent in Minerva combines process data with payment terms and amounts: early payments, lost cash discounts, DSO and DPO – and the process steps behind them.',
        teaser:
          'Shows where capital is tied up in purchase-to-pay and order-to-cash: early payments, lost cash discounts, late incoming payments.',
        summary:
          'The Working Capital Analysis Agent shows where capital is tied up in your processes and where money flows unnecessarily early or too late. It combines process data from purchase-to-pay and order-to-cash with amounts, payment terms and conditions and answers questions such as: Do we pay before the due date? Are we losing cash discounts? Why do customer payments arrive later than agreed? Working capital becomes visible not just as a balance-sheet figure but as the result of concrete process steps.',
        questions: [
          'How many invoices did we pay before the due date last quarter, and what amount is involved?',
          'Where are we losing cash discounts, and which process steps delay payment?',
          'How have days sales outstanding developed per customer segment?',
          'Which customers regularly pay late, and what happens before that in the process?',
        ],
        steps: [
          {
            title: 'Connect amounts and dates',
            text: 'The agent reads invoice amounts, payment terms, discount periods and payment dates from the case attributes and maps them to the process flow.',
          },
          {
            title: 'Assess payment behavior',
            text: 'It distinguishes on-time, early and late payments – on the supplier and the customer side – and quantifies the amount involved.',
          },
          {
            title: 'Calculate tied-up capital',
            text: 'It calculates process-based KPIs such as DPO and DSO for the cases in the perspective and shows how they vary across time, legal entities or segments.',
          },
          {
            title: 'Find process causes',
            text: 'It links late or early payments with what happened earlier in the process: invoice rework, clarification cases, missing approvals or dunning levels.',
          },
        ],
        metrics: [
          { name: 'DPO (days payables outstanding)', text: 'Days between invoice receipt and payment to suppliers.' },
          { name: 'DSO (days sales outstanding)', text: 'Days between invoicing and incoming payment.' },
          { name: 'Payment before due date', text: 'Share and amount of invoices paid earlier than necessary.' },
          { name: 'Cash discount utilization', text: 'Share of available cash discount actually taken – and the amount lost.' },
        ],
        example:
          'In accounts payable the agent shows two opposing effects: some invoices are paid well before the due date because the payment run is not aligned with payment terms. At the same time, the discount period regularly expires for invoices with rework. The agent quantifies both amounts, shows the suppliers affected and links the lost discounts to the clarification reasons from the ticket system.',
        output:
          'Working capital KPIs per process, legal entity or segment, a list of cases with the biggest lever and the process steps that delay or bring forward payments – as a table, Excel file or management briefing.',
        data:
          'Purchase-to-pay or order-to-cash perspectives with amounts, payment terms and payment dates as case attributes. You can store conditions and payment policies in the Context Hub.',
        faq: [
          {
            question: 'What is working capital?',
            answer:
              'Working capital is the capital tied up in day-to-day business: in receivables and inventory, minus short-term liabilities. The longer customers take to pay and the earlier a company pays its suppliers, the more capital is tied up.',
          },
          {
            question: 'How are processes and working capital connected?',
            answer:
              'KPIs such as DSO and DPO are the result of many individual process steps: when an invoice is entered, approved, sent or dunned. Improving working capital means knowing these steps – which is exactly where the agent comes in.',
          },
          {
            question: 'Does the agent replace treasury reporting?',
            answer:
              'No, it complements it: reporting shows the KPI, the agent shows which cases and process steps drive it.',
          },
        ],
      },
    },
  },
  {
    id: 'work-in-progress',
    category: 'capital',
    icon: Layers,
    processes: ['lead-to-activation', 'premium-to-tax'],
    related: ['cycle-time', 'waiting-time', 'on-time'],
    content: {
      de: {
        name: 'WIP-Analyse-Agent',
        tagline: 'Work in Progress im Blick: offene Fälle, Rückstau und gealterte Vorgänge im Prozess analysieren',
        metaTitle: 'WIP-Analyse-Agent – Work in Progress und Rückstau analysieren | Noreja',
        metaDescription:
          'Der WIP-Analyse-Agent in Minerva zählt den Work in Progress je Prozessschritt, zeigt das Alter offener Fälle und erkennt, wo sich ein Rückstau aufbaut – bevor er die Durchlaufzeit verschlechtert.',
        teaser:
          'Zählt offene Fälle je Prozessschritt, zeigt ihr Alter und erkennt, wo sich ein Rückstau aufbaut.',
        summary:
          'Der WIP-Analyse-Agent beantwortet eine Frage, die klassische Durchlaufzeitanalysen auslassen: Was liegt gerade alles offen im Prozess? Er zählt den Work in Progress – alle gestarteten, aber noch nicht abgeschlossenen Fälle –, zeigt, in welchem Schritt sie stehen und wie lange schon, und erkennt, wo sich ein Rückstau aufbaut. So siehst du nicht erst im Nachhinein, dass ein Prozess langsamer geworden ist, sondern schon, während sich die Vorgänge stauen.',
        questions: [
          'Wie viele Fälle sind im Moment offen, und in welchem Schritt stehen sie?',
          'Welche offenen Fälle sind älter als 30 Tage?',
          'Wie hat sich der Bestand offener Fälle in den letzten zwölf Wochen entwickelt?',
          'Kommen mehr Fälle herein, als wir abschließen?',
        ],
        steps: [
          {
            title: 'Offene Fälle bestimmen',
            text: 'Der Agent ermittelt, welche Fälle gestartet, aber nicht abgeschlossen sind, und in welcher Aktivität sie zuletzt standen.',
          },
          {
            title: 'Alter und Verteilung zeigen',
            text: 'Er gruppiert die offenen Fälle nach Schritt und Alter und zeigt, wo sich gealterte Vorgänge sammeln.',
          },
          {
            title: 'Zu- und Abgänge vergleichen',
            text: 'Er stellt neu gestartete und abgeschlossene Fälle je Woche oder Monat gegenüber und erkennt so, ob sich ein Rückstau auf- oder abbaut.',
          },
          {
            title: 'Folgen für die Laufzeit zeigen',
            text: 'Nach Little’s Law hängen Bestand, Durchsatz und Durchlaufzeit direkt zusammen. Der Agent nutzt das, um zu zeigen, was ein wachsender Bestand für künftige Durchlaufzeiten bedeutet.',
          },
        ],
        metrics: [
          { name: 'Work in Progress (WIP)', text: 'Anzahl der offenen Fälle zu einem Stichtag – gesamt und je Prozessschritt.' },
          { name: 'Alter offener Fälle', text: 'Wie lange offene Fälle schon im Prozess sind, gruppiert in Altersklassen.' },
          { name: 'Durchsatz', text: 'Abgeschlossene Fälle je Zeiteinheit.' },
          { name: 'Zu- und Abgangsbilanz', text: 'Gestartete minus abgeschlossene Fälle je Periode – positiv heißt: Der Rückstau wächst.' },
        ],
        example:
          'In einem Antragsprozess steigt die Zahl der offenen Vorgänge seit einigen Wochen, die Durchlaufzeit der abgeschlossenen Vorgänge sieht aber unauffällig aus – weil die schwierigen Fälle noch gar nicht abgeschlossen sind. Der Agent zeigt den wachsenden Bestand, seine Konzentration im Schritt „Rückfrage an Fachabteilung“ und die Altersverteilung. Er macht sichtbar, was die Durchlaufzeit erst Wochen später zeigen würde.',
        output:
          'Eine Momentaufnahme des Bestands je Prozessschritt, die Altersverteilung der offenen Fälle, die Zu- und Abgangsbilanz als Zeitreihe und eine Liste der ältesten Vorgänge – als Tabelle, Diagramm oder Excel-Datei.',
        data:
          'Eine Perspektive, die auch noch nicht abgeschlossene Fälle enthält, und eine Festlegung, welche Aktivität einen Fall abschließt. Geht das aus den Daten nicht eindeutig hervor, fragt der Agent nach.',
        faq: [
          {
            question: 'Was bedeutet Work in Progress (WIP) in Geschäftsprozessen?',
            answer:
              'Work in Progress bezeichnet alle Vorgänge, die begonnen, aber noch nicht abgeschlossen sind – offene Bestellungen, unbearbeitete Rechnungen, laufende Anträge. Ein hoher oder wachsender WIP ist ein Frühindikator für längere Durchlaufzeiten und überlastete Teams.',
          },
          {
            question: 'Was ist Little’s Law?',
            answer:
              'Little’s Law beschreibt den Zusammenhang zwischen Bestand, Durchsatz und Durchlaufzeit in einem stabilen System: Durchlaufzeit = Bestand ÷ Durchsatz. Steigt der Bestand bei gleichem Durchsatz, steigt zwangsläufig auch die Durchlaufzeit.',
          },
          {
            question: 'Worin unterscheidet sich der WIP-Analyse-Agent vom Laufzeitenanalyse-Agenten?',
            answer:
              'Der Laufzeitenanalyse-Agent blickt auf abgeschlossene Fälle und fragt, wie lange sie gedauert haben. Der WIP-Analyse-Agent blickt auf offene Fälle und fragt, was sich gerade staut. Zusammen zeigen sie Vergangenheit und Gegenwart eines Prozesses.',
          },
        ],
      },
      en: {
        name: 'WIP Analysis Agent',
        tagline: 'Keep work in progress in view: analyze open cases, backlogs and aging items in your processes',
        metaTitle: 'WIP Analysis Agent – Analyze Work in Progress and Backlogs | Noreja',
        metaDescription:
          'The WIP Analysis Agent in Minerva counts work in progress per process step, shows the age of open cases and detects where a backlog builds up – before it hurts your cycle time.',
        teaser: 'Counts open cases per process step, shows their age and detects where a backlog is building up.',
        summary:
          'The WIP Analysis Agent answers a question classic cycle time analyses leave out: what is currently open in the process? It counts the work in progress – every case started but not yet completed – shows which step each one is in and for how long, and detects where a backlog is building up. You don’t learn after the fact that a process has slowed down; you see it while work is piling up.',
        questions: [
          'How many cases are open right now, and which step are they in?',
          'Which open cases are older than 30 days?',
          'How has the number of open cases developed over the last twelve weeks?',
          'Are more cases coming in than we complete?',
        ],
        steps: [
          {
            title: 'Identify open cases',
            text: 'The agent determines which cases have started but not finished, and in which activity they were last.',
          },
          {
            title: 'Show age and distribution',
            text: 'It groups open cases by step and age and shows where aging items accumulate.',
          },
          {
            title: 'Compare inflow and outflow',
            text: 'It compares newly started and completed cases per week or month and so detects whether a backlog is growing or shrinking.',
          },
          {
            title: 'Show the effect on cycle time',
            text: 'According to Little’s Law, inventory, throughput and cycle time are directly linked. The agent uses this to show what a growing backlog means for future cycle times.',
          },
        ],
        metrics: [
          { name: 'Work in progress (WIP)', text: 'Number of open cases at a cut-off date – overall and per process step.' },
          { name: 'Age of open cases', text: 'How long open cases have been in the process, grouped into age buckets.' },
          { name: 'Throughput', text: 'Completed cases per unit of time.' },
          { name: 'Inflow/outflow balance', text: 'Started minus completed cases per period – positive means the backlog is growing.' },
        ],
        example:
          'In an application process the number of open cases has been rising for weeks, yet the cycle time of completed cases looks unremarkable – because the difficult cases have not been completed yet. The agent shows the growing backlog, its concentration in the step “query to specialist department” and the age distribution. It makes visible what cycle time would only reveal weeks later.',
        output:
          'A snapshot of open cases per process step, the age distribution, the inflow/outflow balance as a time series and a list of the oldest cases – as a table, chart or Excel file.',
        data:
          'A perspective that includes cases not yet completed, plus a definition of which activity completes a case. If the data does not make this clear, the agent asks.',
        faq: [
          {
            question: 'What does work in progress (WIP) mean in business processes?',
            answer:
              'Work in progress means all cases that have started but are not yet completed – open purchase orders, unprocessed invoices, pending applications. A high or growing WIP is an early indicator of longer cycle times and overloaded teams.',
          },
          {
            question: 'What is Little’s Law?',
            answer:
              'Little’s Law describes the relationship between inventory, throughput and cycle time in a stable system: cycle time = inventory ÷ throughput. If inventory rises while throughput stays the same, cycle time inevitably rises too.',
          },
          {
            question: 'How is the WIP Analysis Agent different from the Cycle Time Analysis Agent?',
            answer:
              'The Cycle Time Analysis Agent looks at completed cases and asks how long they took. The WIP Analysis Agent looks at open cases and asks what is piling up right now. Together they show the past and the present of a process.',
          },
        ],
      },
    },
  },

  // ------------------------------------------------------------- potential
  {
    id: 'root-cause',
    category: 'potential',
    icon: Microscope,
    processes: ['order-to-cash', 'purchase-to-pay'],
    related: ['structural-deviation', 'rework', 'on-time'],
    content: {
      de: {
        name: 'Ursachenanalyse-Agent',
        tagline: 'Root-Cause-Analyse für Geschäftsprozesse: herausfinden, warum Fälle verspätet, teuer oder fehlerhaft sind',
        metaTitle: 'Ursachenanalyse-Agent – Root-Cause-Analyse für Prozesse mit KI | Noreja',
        metaDescription:
          'Der Ursachenanalyse-Agent in Minerva findet die Gründe hinter Prozessproblemen: Er verfolgt Abhängigkeiten im kausalen Prozessgraphen, vergleicht betroffene und unauffällige Fälle und bezieht Unternehmenswissen ein.',
        teaser:
          'Beantwortet die Frage nach dem Warum: verfolgt Abhängigkeiten im kausalen Prozessgraphen und erklärt Probleme mit Belegen.',
        summary:
          'Der Ursachenanalyse-Agent beantwortet die Frage, die nach jeder Kennzahl kommt: Warum? Er nimmt ein Problem – verspätete Lieferungen, hohe Nacharbeit, lange Freigaben – und sucht die Faktoren, die es erklären. Dafür nutzt er den kausalen Prozessgraphen von Noreja, in dem die Abhängigkeiten zwischen Aktivitäten abgebildet sind, vergleicht betroffene und unauffällige Fälle über ihre Merkmale und bezieht Unternehmenswissen aus dem Context Hub ein. Das Ergebnis ist eine nachvollziehbare Erklärung: welche Faktoren hinter dem Problem stehen, wie stark sie wirken und welche Belege dafür sprechen.',
        questions: [
          'Warum werden so viele Aufträge im Order-to-Cash-Prozess verspätet ausgeliefert?',
          'Was unterscheidet die langsamsten zehn Prozent der Fälle von den übrigen?',
          'Erkläre den ausgewählten Fall: Warum hat er so lange gedauert?',
          'Welche Merkmale haben Rechnungen, die in die Klärung gehen?',
        ],
        steps: [
          {
            title: 'Problem präzisieren',
            text: 'Der Agent legt fest, welche Fälle als betroffen gelten – etwa verspätet, nachgearbeitet oder über einer Kostengrenze – und fragt nach, wenn die Frage das offen lässt.',
          },
          {
            title: 'Kausale Pfade verfolgen',
            text: 'Im Prozessgraphen verfolgt er, welche vorgelagerten Schritte und Abhängigkeiten zu dem Problem führen.',
          },
          {
            title: 'Einflussfaktoren vergleichen',
            text: 'Er vergleicht betroffene und unauffällige Fälle über ihre Merkmale – Lieferant, Produkt, Region, Team, Belegart – und gewichtet die Unterschiede nach Häufigkeit und Wirkung.',
          },
          {
            title: 'Mit Kontext erklären',
            text: 'Was die Daten nicht zeigen – Streiks, Systemumstellungen, neue Vorschriften –, ergänzt er aus dem Context Hub und nennt das Dokument, auf das er sich stützt.',
          },
        ],
        metrics: [
          { name: 'Anteil betroffener Fälle', text: 'Wie viele Fälle das Problem zeigen – gesamt und je Merkmal.' },
          { name: 'Abweichung je Merkmal', text: 'Wie stark sich die Problemquote bei einem Merkmal vom Durchschnitt unterscheidet.' },
          { name: 'Beitrag zur Gesamtwirkung', text: 'Welcher Teil der Mehrdauer oder Mehrkosten auf einen Faktor entfällt.' },
          { name: 'Vorgelagerte Ereignisse', text: 'Schritte und Abweichungen, die betroffenen Fällen im Prozessverlauf vorausgehen.' },
        ],
        example:
          'Im Order-to-Cash-Prozess wird ein wachsender Anteil der Aufträge zu spät ausgeliefert. Der Agent vergleicht verspätete und pünktliche Aufträge und findet zwei Faktoren: nachträgliche Änderungen am Liefertermin und eine Kreditprüfung, die bei Neukunden zusätzliche Tage kostet. Aus dem Context Hub ergänzt er, dass die Kreditrichtlinie vor einigen Monaten verschärft wurde – und erklärt damit, warum das Problem genau seit diesem Zeitpunkt auftritt.',
        output:
          'Eine begründete Erklärung des Problems mit den wichtigsten Einflussfaktoren, ihrem Gewicht und den Belegen dafür – betroffene Fälle, Pfade im Prozessgraphen und die verwendeten Dokumente. Auf Wunsch als Bericht oder Präsentation.',
        data:
          'Eine Perspektive mit möglichst vielen Merkmalen je Fall. Je mehr Unternehmenswissen im Context Hub liegt – Richtlinien, organisatorische Änderungen, bekannte Probleme –, desto besser kann der Agent das Warum erklären.',
        faq: [
          {
            question: 'Was ist eine Ursachenanalyse (Root-Cause-Analyse) im Prozessmanagement?',
            answer:
              'Eine Ursachenanalyse sucht nicht nach dem Symptom, sondern nach dem Grund eines Prozessproblems. Statt festzustellen, dass Lieferungen zu spät kommen, fragt sie, welche Schritte, Bedingungen und Entscheidungen dazu führen. Klassische Methoden sind die 5-Why-Methode oder das Ishikawa-Diagramm; datenbasiert geschieht das über den Vergleich betroffener und unauffälliger Fälle.',
          },
          {
            question: 'Warum hilft ein kausaler Prozessgraph bei der Ursachenanalyse?',
            answer:
              'Ein frequenzbasiertes Prozessmodell zeigt, welche Schritte häufig aufeinander folgen. Ein kausaler Prozessgraph zeigt, welche Schritte voneinander abhängen. Für die Ursachenanalyse ist das der entscheidende Unterschied: Der Agent kann Abhängigkeiten zurückverfolgen, statt nur zeitliche Abfolgen zu vergleichen.',
          },
          {
            question: 'Kann der Agent einzelne Fälle erklären?',
            answer:
              'Ja. Wählst du im Analyzer einen Fall aus, erklärt der Agent, warum gerade dieser Fall so lange gedauert hat oder vom erwarteten Ablauf abweicht.',
          },
        ],
      },
      en: {
        name: 'Root Cause Analysis Agent',
        tagline: 'Root cause analysis for business processes: find out why cases are late, costly or faulty',
        metaTitle: 'Root Cause Analysis Agent – AI-Powered Process Root Cause Analysis | Noreja',
        metaDescription:
          'The Root Cause Analysis Agent in Minerva finds the reasons behind process problems: it traces dependencies in the causal process graph, compares affected and unaffected cases and draws on company knowledge.',
        teaser:
          'Answers the question of why: traces dependencies in the causal process graph and explains problems with evidence.',
        summary:
          'The Root Cause Analysis Agent answers the question that follows every KPI: why? It takes a problem – late deliveries, high rework, long approvals – and looks for the factors that explain it. To do so it uses Noreja’s causal process graph, which represents the dependencies between activities, compares affected and unaffected cases by their attributes and draws on company knowledge from the Context Hub. The result is a traceable explanation: which factors are behind the problem, how strongly they act and what evidence supports them.',
        questions: [
          'Why are so many orders in the order-to-cash process delivered late?',
          'What distinguishes the slowest ten percent of cases from the rest?',
          'Explain the selected case: why did it take so long?',
          'What do invoices that go into clarification have in common?',
        ],
        steps: [
          {
            title: 'Specify the problem',
            text: 'The agent defines which cases count as affected – late, reworked or above a cost threshold – and asks if the question leaves this open.',
          },
          {
            title: 'Trace causal paths',
            text: 'In the process graph it traces which upstream steps and dependencies lead to the problem.',
          },
          {
            title: 'Compare influencing factors',
            text: 'It compares affected and unaffected cases by their attributes – supplier, product, region, team, document type – and weights the differences by frequency and impact.',
          },
          {
            title: 'Explain with context',
            text: 'What the data does not show – strikes, system migrations, new regulations – it adds from the Context Hub and cites the document it relies on.',
          },
        ],
        metrics: [
          { name: 'Share of affected cases', text: 'How many cases show the problem – overall and per attribute.' },
          { name: 'Deviation per attribute', text: 'How much the problem rate for an attribute differs from the average.' },
          { name: 'Contribution to total impact', text: 'Which part of the added duration or cost is due to a factor.' },
          { name: 'Upstream events', text: 'Steps and deviations that precede affected cases in the process flow.' },
        ],
        example:
          'In order-to-cash, a growing share of orders is delivered late. The agent compares late and on-time orders and finds two factors: subsequent changes to the delivery date and a credit check that costs new customers extra days. From the Context Hub it adds that the credit policy was tightened a few months ago – and so explains why the problem has occurred since exactly that point.',
        output:
          'A reasoned explanation of the problem with the main influencing factors, their weight and the evidence for them – affected cases, paths in the process graph and the documents used. As a report or presentation on request.',
        data:
          'A perspective with as many attributes per case as possible. The more company knowledge there is in the Context Hub – policies, organizational changes, known issues – the better the agent can explain the why.',
        faq: [
          {
            question: 'What is root cause analysis in process management?',
            answer:
              'Root cause analysis looks not at the symptom but at the reason for a process problem. Instead of stating that deliveries are late, it asks which steps, conditions and decisions lead to that. Classic methods are the 5 Whys or the Ishikawa diagram; data-driven, it is done by comparing affected and unaffected cases.',
          },
          {
            question: 'Why does a causal process graph help with root cause analysis?',
            answer:
              'A frequency-based process model shows which steps often follow one another. A causal process graph shows which steps depend on one another. For root cause analysis that is the decisive difference: the agent can trace dependencies back instead of merely comparing time sequences.',
          },
          {
            question: 'Can the agent explain individual cases?',
            answer:
              'Yes. If you select a case in the Analyzer, the agent explains why that particular case took so long or deviates from the expected flow.',
          },
        ],
      },
    },
  },
  {
    id: 'automation',
    category: 'potential',
    icon: Workflow,
    processes: ['purchase-to-pay', 'premium-to-tax'],
    related: ['rework', 'waiting-time', 'root-cause'],
    content: {
      de: {
        name: 'Automatisierungspotenzial-Agent',
        tagline: 'Manuelle, wiederkehrende Prozessschritte finden und bewerten, wo sich Automatisierung lohnt',
        metaTitle: 'Automatisierungspotenzial-Agent – Automatisierung im Prozess finden | Noreja',
        metaDescription:
          'Der Automatisierungspotenzial-Agent in Minerva findet manuelle, gleichförmige Prozessschritte, misst die Automatisierungsquote und schätzt ab, wie viel Arbeitszeit eine Automatisierung freisetzt.',
        teaser:
          'Findet manuelle, gleichförmige Schritte, misst die Automatisierungsquote und sortiert Kandidaten nach Potenzial.',
        summary:
          'Der Automatisierungspotenzial-Agent zeigt, welche Schritte in deinen Prozessen sich für eine Automatisierung eignen – und welche nicht. Er findet Aktivitäten, die häufig, gleichförmig und manuell ausgeführt werden, prüft, ob sie nach festen Regeln ablaufen, und schätzt ab, wie viel Arbeitszeit eine Automatisierung freisetzen würde. Bereits automatisierte Schritte erkennt er ebenfalls, sodass du siehst, wo die Automatisierungsquote heute steht und wo sich der nächste Schritt lohnt.',
        questions: [
          'Welche Aktivitäten im Purchase-to-Pay-Prozess werden am häufigsten manuell ausgeführt?',
          'Wie hoch ist die Automatisierungsquote je Aktivität?',
          'Welche manuellen Schritte folgen festen Regeln und eignen sich für eine Automatisierung?',
          'Wie viele Stunden pro Monat stecken in der manuellen Rechnungserfassung?',
        ],
        steps: [
          {
            title: 'Manuell und automatisch trennen',
            text: 'Der Agent unterscheidet anhand der ausführenden Benutzer oder Systeme, welche Schritte Menschen erledigen und welche automatisch laufen.',
          },
          {
            title: 'Kandidaten finden',
            text: 'Er sucht Aktivitäten mit hoher Fallzahl, gleichförmigem Ablauf und wenig Varianz in den Eingangsdaten – typische Merkmale gut automatisierbarer Schritte.',
          },
          {
            title: 'Regeln erkennen',
            text: 'Er prüft, ob das Ergebnis eines Schritts von wenigen Merkmalen abhängt, etwa Betrag, Lieferant oder Belegart – ein Hinweis darauf, dass es sich als Regel abbilden lässt.',
          },
          {
            title: 'Potenzial abschätzen',
            text: 'Mit Bearbeitungszeiten aus den Daten oder Zeitannahmen aus dem Context Hub schätzt er ab, wie viel Arbeitszeit eine Automatisierung freisetzen würde, und sortiert die Kandidaten danach.',
          },
        ],
        metrics: [
          { name: 'Automatisierungsquote', text: 'Anteil der Ausführungen einer Aktivität, die ohne menschliches Zutun erfolgen.' },
          { name: 'Manuelles Volumen', text: 'Anzahl manueller Ausführungen je Aktivität und Zeitraum.' },
          { name: 'Gleichförmigkeit', text: 'Wie einheitlich eine Aktivität abläuft – gleiche Vorgänger, Nachfolger und Merkmale.' },
          { name: 'Geschätzte Zeitersparnis', text: 'Freigesetzte Arbeitszeit bei Automatisierung, auf Basis von Bearbeitungszeiten oder Annahmen.' },
        ],
        example:
          'Ein Shared-Service-Center will entscheiden, welche Schritte in der Kreditorenbuchhaltung als Nächstes automatisiert werden. Der Agent zeigt, dass die Rechnungsprüfung bei Rechnungen mit Bestellbezug fast immer ohne Abweichung durchläuft und nur von wenigen Merkmalen abhängt – ein klarer Kandidat. Die Klärung von Preisabweichungen dagegen ist vielgestaltig und oft auf Rückfragen angewiesen; hier empfiehlt er, zuerst die Ursachen zu beheben, statt den Schritt zu automatisieren.',
        output:
          'Eine nach Potenzial sortierte Liste von Automatisierungskandidaten mit Volumen, Gleichförmigkeit und geschätzter Zeitersparnis, dazu die aktuelle Automatisierungsquote je Aktivität – als Tabelle, Excel-Datei oder Entscheidungsvorlage.',
        data:
          'Eine Perspektive mit dem ausführenden Benutzer oder System je Aktivität. Für die Zeitersparnis helfen Bearbeitungszeiten aus den Daten oder Zeitannahmen, die ihr im Context Hub hinterlegt.',
        faq: [
          {
            question: 'Wie erkennt man Automatisierungspotenzial in Prozessen?',
            answer:
              'Gut automatisierbar sind Schritte, die häufig vorkommen, nach festen Regeln ablaufen, auf strukturierten Daten beruhen und selten Ausnahmen haben. Prozessdaten zeigen genau diese Eigenschaften: Volumen, Varianz, ausführende Benutzer und die Merkmale, von denen der Ablauf abhängt.',
          },
          {
            question: 'Was ist die Automatisierungsquote?',
            answer:
              'Die Automatisierungsquote ist der Anteil der Ausführungen einer Aktivität oder eines Prozesses, die ohne manuelles Eingreifen erfolgen – etwa durch Batch-Jobs, Workflows oder RPA-Bots. Sie zeigt, wie weit ein Prozess bereits automatisiert ist.',
          },
          {
            question: 'Rät der Agent auch davon ab, etwas zu automatisieren?',
            answer:
              'Ja. Schritte mit vielen Varianten und Rückfragen sind oft ein Symptom vorgelagerter Probleme. Dann ist es meist sinnvoller, die Ursache zu beheben – der Agent weist darauf hin, statt jeden manuellen Schritt als Kandidaten zu melden.',
          },
        ],
      },
      en: {
        name: 'Automation Potential Agent',
        tagline: 'Find manual, repetitive process steps and assess where automation pays off',
        metaTitle: 'Automation Potential Agent – Find Automation Opportunities in Processes | Noreja',
        metaDescription:
          'The Automation Potential Agent in Minerva finds manual, uniform process steps, measures the automation rate and estimates how much working time automation would free up.',
        teaser: 'Finds manual, uniform steps, measures the automation rate and ranks candidates by potential.',
        summary:
          'The Automation Potential Agent shows which steps in your processes are suitable for automation – and which are not. It finds activities that are performed often, uniformly and manually, checks whether they follow fixed rules and estimates how much working time automation would free up. It also recognizes steps that are already automated, so you see where your automation rate stands today and where the next step pays off.',
        questions: [
          'Which activities in the purchase-to-pay process are most often performed manually?',
          'What is the automation rate per activity?',
          'Which manual steps follow fixed rules and are suitable for automation?',
          'How many hours per month go into manual invoice entry?',
        ],
        steps: [
          {
            title: 'Separate manual and automated',
            text: 'Based on the executing users or systems, the agent distinguishes which steps people perform and which run automatically.',
          },
          {
            title: 'Find candidates',
            text: 'It looks for activities with high case volume, a uniform flow and little variance in the input data – typical traits of steps that automate well.',
          },
          {
            title: 'Recognize rules',
            text: 'It checks whether the outcome of a step depends on a few attributes, such as amount, supplier or document type – a sign that it can be expressed as a rule.',
          },
          {
            title: 'Estimate the potential',
            text: 'Using processing times from the data or time assumptions from the Context Hub, it estimates how much working time automation would free up and ranks the candidates accordingly.',
          },
        ],
        metrics: [
          { name: 'Automation rate', text: 'Share of an activity’s executions that happen without human involvement.' },
          { name: 'Manual volume', text: 'Number of manual executions per activity and period.' },
          { name: 'Uniformity', text: 'How consistently an activity runs – same predecessors, successors and attributes.' },
          { name: 'Estimated time savings', text: 'Working time freed up by automation, based on processing times or assumptions.' },
        ],
        example:
          'A shared service center wants to decide which steps in accounts payable to automate next. The agent shows that invoice verification for invoices with a purchase order almost always runs without deviation and depends on only a few attributes – a clear candidate. Resolving price variances, on the other hand, is varied and often relies on follow-up questions; here it recommends fixing the causes first instead of automating the step.',
        output:
          'A list of automation candidates ranked by potential, with volume, uniformity and estimated time savings, plus the current automation rate per activity – as a table, Excel file or decision paper.',
        data:
          'A perspective with the executing user or system per activity. For time savings, processing times from the data or time assumptions stored in the Context Hub help.',
        faq: [
          {
            question: 'How do you identify automation potential in processes?',
            answer:
              'Steps that automate well occur frequently, follow fixed rules, rely on structured data and rarely have exceptions. Process data shows exactly these traits: volume, variance, executing users and the attributes the flow depends on.',
          },
          {
            question: 'What is the automation rate?',
            answer:
              'The automation rate is the share of executions of an activity or process that happen without manual intervention – through batch jobs, workflows or RPA bots, for example. It shows how far a process is already automated.',
          },
          {
            question: 'Does the agent also advise against automating something?',
            answer:
              'Yes. Steps with many variants and follow-up questions are often a symptom of upstream problems. Then it usually makes more sense to fix the cause – the agent points this out instead of flagging every manual step as a candidate.',
          },
        ],
      },
    },
  },
];

export function getAgentById(id: string): Agent | undefined {
  return agents.find((agent) => agent.id === id);
}

export function getAgentBySlug(slug: string): Agent | undefined {
  const id = getAgentIdBySlug(slug);
  return id ? getAgentById(id) : undefined;
}

export function getAgentSlug(agent: Agent, language: Language): string {
  return agentSlugs[agent.id][language];
}

export function getAgentsByCategory(category: AgentCategory): Agent[] {
  return agents.filter((agent) => agent.category === category);
}

export function getRelatedAgents(agent: Agent): Agent[] {
  return agent.related.map(getAgentById).filter((related): related is Agent => Boolean(related));
}
