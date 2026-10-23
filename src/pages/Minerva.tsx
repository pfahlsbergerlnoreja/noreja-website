import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Bot,
  Check,
  Cpu,
  Database,
  FileDown,
  FileSpreadsheet,
  FolderOpen,
  GitFork,
  Library,
  ListChecks,
  MessageCircleQuestion,
  MessageSquareText,
  Search,
  ShieldCheck,
  Sparkles,
  Table2,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DownloadGateInline } from "@/components/DownloadGate";
import { Eyebrow, MINT, Prompt } from "@/components/minerva/MinervaUi";
import { BreadcrumbSchema, FAQSchema, StructuredData } from "@/components/StructuredData";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_URL, siteConfig } from "@/lib/config";
import { getMinervaPresentation } from "@/lib/downloads";
import { getRoutePath } from "@/lib/routes";
import { agents, getAgentSlug } from "@/lib/agents";

import minervaNextToAnalyzer from "@/assets/minerva/minerva-next-to-analyzer.webp";
import answerWithTable from "@/assets/minerva/answer-with-table.webp";
import traceableSteps from "@/assets/minerva/traceable-steps.webp";
import fileCreated from "@/assets/minerva/file-created.webp";
import contextHub from "@/assets/minerva/context-hub.webp";
import skillPicker from "@/assets/minerva/skill-picker.webp";
import modelPicker from "@/assets/minerva/model-picker.webp";
import invoiceTicketContext from "@/assets/processes/purchase-to-pay/invoice-ticket-context.webp";

/**
 * Product landing page for Minerva 2.0, the AI assistant inside Noreja.
 *
 * Linked from the platform page. All copy is plain markup (no accordion, no
 * effect-loaded content) so the prerendered HTML carries the full page for
 * crawlers and answer engines. The screenshots show the German UI on both
 * language versions until English captures are available.
 */

const IMG = {
  minervaNextToAnalyzer: { src: minervaNextToAnalyzer, width: 2000, height: 1038 },
  answerWithTable: { src: answerWithTable, width: 2000, height: 2481 },
  traceableSteps: { src: traceableSteps, width: 2000, height: 906 },
  fileCreated: { src: fileCreated, width: 2000, height: 1149 },
  contextHub: { src: contextHub, width: 2000, height: 964 },
  skillPicker: { src: skillPicker, width: 2000, height: 668 },
  modelPicker: { src: modelPicker, width: 2000, height: 735 },
  invoiceTicketContext: { src: invoiceTicketContext, width: 2000, height: 744 },
} as const;

interface Shot {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
}

const copy = {
  de: {
    home: "Startseite",
    platform: "Plattform",
    badge: "Generative Process Intelligence · KI-Assistentin",
    title: "Minerva 2.0",
    lead:
      "Stell Fragen zu deinen Prozessen so, wie du einen Kollegen fragen würdest. Minerva liest den kausalen Prozessgraphen, bezieht euer Unternehmenswissen ein und liefert Antworten, Ursachen und fertige Dateien – direkt neben deiner Analyse.",
    ctaDemo: "Demo buchen",
    ctaHow: "So arbeitet Minerva",
    hero: {
      ...IMG.minervaNextToAnalyzer,
      alt: "Minerva-Panel neben einem Analyzer-Tab des Purchase-to-Pay-Prozesses: Minerva beantwortet eine Frage zur geöffneten Ansicht, die genannte Aktivität ist im Prozessgraphen hervorgehoben.",
      caption: "Minerva antwortet neben dem Prozessgraphen – und hebt hervor, wovon sie spricht.",
    },
    enlarge: "Bild in voller Größe öffnen",

    whatHeading: "Was ist Minerva?",
    what: [
      "Minerva ist die KI-Assistentin in Noreja. Sie beantwortet Fragen zu deinen Prozessen in natürlicher Sprache, erklärt, was sie findet, und erstellt auf Wunsch Excel-Tabellen, Berichte oder Präsentationen. Dafür arbeitet sie direkt auf dem kausalen Prozessgraphen von Noreja: Fälle, Varianten, Kennzahlen, Abweichungen vom erwarteten Ablauf und die Eigenschaften jeder Aktivität. Was die Prozessdaten nicht erklären können – Richtlinien, Sonderregeln, bekannte Probleme –, holt sie aus dem Wissen, das euer Unternehmen im Context Hub hinterlegt.",
      "Das Ergebnis: Process Mining, das nicht bei Dashboards und Filtern endet. Wer eine Frage hat, stellt sie – und bekommt eine Antwort mit Zahlen, Begründung und Quelle.",
    ],

    glanceEyebrow: "Auf einen Blick",
    glance: [
      {
        icon: MessageSquareText,
        title: "Fragen statt Klickpfade",
        text: "Keine Filterlogik, kein Export nach Excel: Du fragst in Klartext, Minerva sucht die passende Perspektive, rechnet und antwortet in der Sprache deiner Frage.",
      },
      {
        icon: Search,
        title: "Ursachen statt Symptome",
        text: "Minerva verbindet Prozessdaten mit Unternehmenswissen – Richtlinien, Prozessbeschreibungen, Ticket-Informationen – und erklärt so nicht nur, was passiert, sondern warum.",
      },
      {
        icon: FileSpreadsheet,
        title: "Ergebnisse zum Weitergeben",
        text: "Tabellen, Diagramme, Excel-Dateien, Word- und PDF-Berichte und PowerPoint-Präsentationen in eurem Corporate Design – fertig für das nächste Meeting.",
      },
      {
        icon: ShieldCheck,
        title: "Deine Daten, deine Regeln",
        text: "Lokales Modell in Norejas eigener Infrastruktur oder Cloud-Modell – du wählst pro Chat. Minerva sieht nie mehr, als du selbst sehen darfst.",
      },
    ],

    compareEyebrow: "Vom Klickpfad zur Frage",
    compareHeading: "Was früher ein Nachmittag war, ist jetzt eine Frage",
    compareLead:
      "Klassisches Process Mining beantwortet Fragen, die du vorher in Filter, Tabs und Exporte übersetzt hast. Mit Minerva fällt dieser Schritt weg.",
    insteadOf: "Statt …",
    youAsk: "… fragst du Minerva",
    compare: [
      {
        before: "Filter setzen, Varianten vergleichen, Durchlaufzeiten in Excel gegenüberstellen",
        ask: "Vergleiche die Varianten mit Nacharbeit mit den übrigen: Wie viel länger dauern sie?",
      },
      {
        before: "Den Fall im Graphen suchen und jede Kante einzeln prüfen",
        ask: "Erkläre den ausgewählten Fall: Warum hat er so lange gedauert?",
      },
      {
        before: "Screenshots sammeln und eine Präsentation bauen",
        ask: "Mach eine kurze Präsentation mit den drei wichtigsten Erkenntnissen für die Prozessverantwortliche.",
      },
    ],

    howEyebrow: "So arbeitet Minerva",
    howHeading: "Fünf Bausteine, eine Antwort",
    diagram: {
      input: "Eingang",
      question: ["Deine Frage", "in Klartext"],
      model: ["Modell deiner Wahl", "lokal oder Cloud"],
      core: "Minerva",
      coreSub: "plant die Schritte",
      skills: "lädt bei Bedarf Skills",
      subagents: "verteilt große Aufgaben an Sub-Agenten",
      sources: "Liest",
      sourceItems: [
        "Prozessdaten aus dem kausalen Prozessgraphen",
        "Unternehmenswissen aus dem Context Hub",
        "Dateien im Workspace",
        "Noreja-Dokumentation und Websuche",
      ],
      result: "Ergebnis",
      resultItems: [
        "Antwort mit Tabellen, Diagrammen, Graph-Highlights",
        "Dateien: Excel, Word, PDF, PowerPoint",
        "Rückfrage, wenn etwas unklar ist",
      ],
    },
    blocks: [
      {
        icon: ListChecks,
        title: "01 · Plan",
        text: "Bei Fragen mit mehreren Schritten macht Minerva zuerst einen Plan und arbeitet ihn dann ab. Du siehst im Chat, woran sie gerade arbeitet.",
      },
      {
        icon: BookOpen,
        title: "02 · Skills",
        text: "Geschriebenes Know-how für eine bestimmte Aufgabe – etwa wie Nacharbeitsquoten berechnet oder Präsentationen gebaut werden. Minerva lädt einen Skill nur dann, wenn deine Frage ihn braucht.",
      },
      {
        icon: GitFork,
        title: "03 · Sub-Agenten",
        text: "Große Aufgaben verteilt Minerva an Helfer, die Teile parallel bearbeiten – etwa zwei Perspektiven gleichzeitig analysieren – und ihr Ergebnis zurückmelden.",
      },
      {
        icon: Cpu,
        title: "04 · Modell",
        text: "Das KI-Modell, das denkt und schreibt. Du wählst es im Chat: lokal in Norejas Infrastruktur oder extern bei einem Cloud-Anbieter, mit transparenter Preisstufe.",
      },
      {
        icon: Database,
        title: "05 · Datenquellen",
        text: "Prozessdaten der Perspektiven und Analyzer-Tabs, die du öffnen darfst, Unternehmenswissen aus dem Context Hub, Dateien im Workspace, die Noreja-Dokumentation und – bei ausgewählten Cloud-Modellen – die Websuche.",
      },
    ],

    featuresEyebrow: "Was Minerva für dich tut",
    featuresHeading: "Sechs Dinge, die du ab dem ersten Chat bemerkst",
    features: [
      {
        label: "Im Kontext",
        title: "Fragen, wo du gerade arbeitest",
        body: [
          "Minerva gibt es als eigene Chat-Seite und als Panel direkt neben Dashboards und dem Analyzer. Dort liest sie auf Wunsch den geöffneten Tab, seine Filter und das Element, das du ausgewählt hast. Kurze Fragen reichen:",
        ],
        prompts: [
          "Welcher Übergang dauert in dieser Ansicht im Schnitt am längsten?",
          "Erkläre den ausgewählten Fall: Warum hat er so lange gedauert?",
          "Was lassen die Filter in diesem Tab weg?",
        ],
        after:
          "Aktivitäten und Übergänge in der Antwort sind mit dem Prozessgraphen verknüpft: Fährst du mit der Maus darüber, leuchtet der Pfad im Graphen auf.",
        shots: [
          {
            ...IMG.minervaNextToAnalyzer,
            alt: "Minerva-Panel neben dem Analyzer: Nacharbeit-Analyse mit Tabellen, die Aktivität Rechnungserfassung ist im Graphen hervorgehoben.",
            caption: "Die genannte Aktivität leuchtet im Graphen auf.",
          },
        ],
      },
      {
        label: "Antworten",
        title: "Zahlen, Tabellen und Diagramme",
        body: [
          "Minerva antwortet mit dem, was du brauchst: einer Zahl, einer kleinen Tabelle, einem Flussdiagramm oder einer Zeitleiste. Tabellen kopierst du mit einem Klick oder lädst sie als CSV herunter, Diagramme als SVG oder PNG. Fälle und Varianten, die Minerva nennt, öffnest du direkt als Graph neben dem Chat.",
          "Wenn etwas unklar ist – etwa welche Perspektive du meinst –, fragt Minerva nach, statt zu raten.",
        ],
        shots: [
          {
            ...IMG.answerWithTable,
            alt: "Chat mit Minerva: Frage zur Perspektive Purchase-to-Pay, darunter die geladenen Skills, die gelesenen Prozessdaten und eine Antwort mit Kennzahlen und Tabelle.",
            caption: "Eine Frage, eine Antwort mit Tabelle – und jede Aktivität darin mit dem Graphen verknüpft.",
          },
        ],
      },
      {
        label: "Kontext",
        title: "Prozessdaten erklären, was passiert. Unternehmenswissen erklärt, warum.",
        body: [
          "Eine Verzögerung im Einkauf kann von einem Streik kommen, von einer neuen Vorschrift oder von einem Lieferanten, der nie in den Eventdaten auftaucht. Dieses Wissen legt ihr im Context Hub ab: Prozessbeschreibungen, Richtlinien, Organigramme, bekannte Probleme – als Text oder Datei, für das ganze Unternehmen, eine Perspektive oder eine einzelne Aktivität.",
          "Minerva durchsucht dieses Wissen, wenn eine Frage nach dem Warum fragt, und nennt das Dokument, das sie verwendet hat. Für jeden Eintrag legt ihr fest, wer ihn nutzen darf und ob er nur mit lokalen Modellen verarbeitet werden darf.",
        ],
        shots: [
          {
            ...IMG.contextHub,
            alt: "Context Hub im AI Hub: Karten mit Unternehmenswissen, jeweils mit Freigabe (für alle oder geteilt) und Modellbeschränkung (öffentlich oder nur lokales Modell).",
            caption: "Context Hub: Unternehmenswissen mit Freigabe und Modellbeschränkung je Eintrag.",
          },
          {
            ...IMG.invoiceTicketContext,
            alt: "Minerva-Antwort neben dem Prozessgraphen: Tabelle mit Rechnungs-IDs und ihren Klärungsgründen aus dem Ticketsystem.",
            caption:
              "Aus der Purchase-to-Pay-Analyse: Minerva verbindet Rechnungsnacharbeit über die Rechnungs-ID mit Klärungsgründen aus dem Ticketsystem.",
          },
        ],
        link: { label: "Zum vollständigen Case", slug: "purchase-to-pay" },
      },
      {
        label: "Nachvollziehbar",
        title: "Keine Blackbox",
        body: [
          "Minerva zeigt ihre Arbeit, während sie antwortet: welche Skills sie geladen hat, welche Daten sie gelesen hat, welche Teile Sub-Agenten übernehmen und welche Schritte im Plan noch offen sind. Du kannst jederzeit stoppen, eine Frage bearbeiten und neu stellen oder die Antwort mit einem anderen Modell wiederholen.",
          "Unter jeder Antwort steht, wie lange sie gedauert und wie viele Tokens sie verbraucht hat; die Kosten eines Chats siehst du aufgeschlüsselt nach Modell und Werkzeug.",
        ],
        shots: [
          {
            ...IMG.traceableSteps,
            alt: "Minerva kündigt an, was sie prüft, und zeigt im Chat jeden Schritt: welche Skills sie lädt und wofür.",
            caption: "Jeder Schritt sichtbar: angekündigter Plan und geladene Skills.",
          },
        ],
      },
      {
        label: "Dateien",
        title: "Ergebnisse, die du weitergeben kannst",
        body: ["Bitte Minerva um die Datei, die du brauchst:"],
        bullets: [
          "Excel- und CSV-Tabellen",
          "Diagramme als Bild",
          "Word- und PDF-Dokumente",
          "PowerPoint-Präsentationen in euren Unternehmensfarben und mit eurem Logo",
        ],
        after:
          "Die Dateien landen in deinem Workspace. Mit geteilten Workspaces arbeitet ein Projektteam mit denselben Dateien; Minerva liest dort auch, was ihr hochladet – CSV, Excel, Word, PowerPoint und PDF, auch gescannte. Alles, was Minerva erzeugt, ist als KI-generiert gekennzeichnet.",
        shots: [
          {
            ...IMG.fileCreated,
            alt: "Minerva hat eine PowerPoint-Präsentation mit den drei wichtigsten Abweichungen im Purchase-to-Pay-Prozess erstellt; darunter der abgehakte Plan in drei Schritten, rechts der Workspace mit dem neuen Ordner.",
            caption: "Von der Frage zur Präsentation – ohne Export, ohne Copy-and-paste.",
          },
        ],
      },
      {
        label: "Anpassbar",
        title: "Euer Know-how als Skill",
        body: [
          "Jedes Unternehmen hat seine eigenen Definitionen: Was ist eine verspätete Lieferung? Was gehört in ein Management-Briefing? Im AI Hub schreibt ihr dieses Wissen einmal als Skill auf – Minerva wendet es ab dann bei jeder passenden Frage an. Wer einen Skill gezielt nutzen will, tippt im Chat „/“ und wählt ihn aus.",
          "Für spezielle Aufgaben richtet ihr eigene Agenten ein: mit eigenem Auftrag, ausgewählten Skills, festem Modell und eigener Freigabe für Teams oder Abteilungen.",
        ],
        shots: [
          {
            ...IMG.skillPicker,
            alt: "Eingabefeld des Chats nach Eingabe von „/“: Liste der verfügbaren Skills.",
            caption: "Ein „/“ im Chat öffnet die Liste der Skills.",
          },
        ],
      },
    ],

    askEyebrow: "Was du Minerva fragen kannst",
    askHeading: "Fragen aus dem Alltag – für jede Rolle",
    askGroups: [
      {
        title: "Prozessverantwortliche",
        prompts: [
          "Wie viele Fälle hat die Perspektive Purchase-to-Pay, und wie lang ist die durchschnittliche Durchlaufzeit?",
          "Wo gibt es die meisten Abweichungen vom erwarteten Ablauf, und welche Aktivitäten werden am häufigsten übersprungen?",
          "Mach eine kurze Präsentation mit den drei wichtigsten Erkenntnissen für die Prozessverantwortliche.",
        ],
      },
      {
        title: "Analystinnen und Analysten",
        prompts: [
          "Vergleiche die Varianten mit Nacharbeit mit den übrigen: Wie viel länger dauern sie?",
          "Wie viele Fälle sind im ersten Quartal gestartet, und wie unterscheidet sich ihre Durchlaufzeit von allen Fällen? Antworte mit einer kleinen Tabelle.",
          "Erstelle eine Excel-Datei mit den langsamsten Übergängen des letzten Quartals.",
        ],
      },
      {
        title: "Alle, die mit Noreja arbeiten",
        prompts: [
          "Erkläre den ausgewählten Fall: Warum hat er so lange gedauert?",
          "Was lassen die Filter in diesem Tab weg?",
          "Wie teile ich ein Dashboard mit meinem Team?",
        ],
      },
    ],

    libraryEyebrow: "Agent Library",
    libraryHeading: "Spezialisierte Agents für jede Prozessfrage",
    libraryLead:
      "Für typische Aufgaben der Geschäftsprozessanalyse gibt es fertige Agents: Jeder kennt seine Fragestellung, die passenden Kennzahlen und die Folgefragen, die eine gute Analyse beantwortet.",
    libraryLink: "Zur Agent Library",

    trustEyebrow: "Deine Daten, deine Kontrolle",
    trustHeading: "Minerva sieht nicht mehr als du.",
    trustLead:
      "Sie liest nur die Perspektiven, Tabs und Wissenseinträge, auf die du selbst Zugriff hast. Eine Perspektive, die du nicht öffnen darfst, existiert für Minerva nicht.",
    trust: [
      {
        title: "Modell pro Chat wählbar",
        text: "Lokale Modelle laufen in Norejas eigener Infrastruktur, externe Modelle bei Cloud-Anbietern. Vor dem Wechsel zu einem externen Modell warnt Noreja.",
      },
      {
        title: "Vertrauliches Wissen bleibt lokal",
        text: "Einträge im Context Hub, die als „nur lokales Modell“ markiert sind, nutzt Minerva nie mit einem Cloud-Modell.",
      },
      {
        title: "Einzelne Antworten sperren",
        text: "Mit dem Schloss schließt du eine Frage und ihre Antwort von allen späteren Cloud-Anfragen im Chat aus. Antworten eines lokalen Modells gehen ohnehin nicht an externe Modelle.",
      },
      {
        title: "Persönliche Chats",
        text: "Andere Nutzer – auch Administratoren – sehen deine Chats nicht in ihrer Chatliste.",
      },
      {
        title: "Nur lesend",
        text: "Minerva ändert nichts in Noreja – keine Importe, keine Perspektiven, keine Filter.",
      },
      {
        title: "Gekennzeichnet",
        text: "Dateien von Minerva sind als KI-generiert markiert.",
      },
    ],
    trustShot: {
      ...IMG.modelPicker,
      alt: "Modellauswahl im Chat: lokale Modelle und externe Modelle, jeweils mit Preisstufe von $ bis $$$+.",
      caption: "Modellauswahl im Chat: lokal oder extern, mit Preisstufe.",
    },
    trustBadges: ["ISO zertifiziert", "DSGVO konform"],
    trustCenter: "Zum Trust Center",

    stepsEyebrow: "Loslegen",
    stepsHeading: "In drei Schritten zur ersten Antwort",
    steps: [
      {
        title: "Minerva öffnen",
        text: "Schalte Minerva-AI in der oberen Leiste ein, um sie neben Dashboard oder Analyzer zu öffnen – oder geh auf die Chat-Seite. Auf Smartphone und Tablet öffnet Noreja direkt den Chat.",
      },
      {
        title: "Frage stellen",
        text: "Tippe oder diktiere deine Frage und nenne die Perspektive, um die es geht. Sag dazu, welche Fälle zählen und was du zurückhaben willst – eine Zahl, eine Tabelle, eine Präsentation.",
      },
      {
        title: "Prüfen und weitergeben",
        text: "Folge den Schritten, die Minerva zeigt, prüfe wichtige Zahlen im Analyzer und lade Tabellen, Diagramme oder Dateien herunter – oder leg sie im geteilten Workspace für dein Team ab.",
      },
    ],

    frontierEyebrow: "Minerva und die Frontier Agents",
    frontierText:
      "Minerva antwortet, wenn du fragst. Die Minerva Frontier Agents gehen einen Schritt weiter: Sie arbeiten im Hintergrund dauerhaft an einer Fragestellung, beobachten Kennzahlen und melden sich, sobald sich etwas Relevantes ändert.",
    frontierLink: "Frontier Agents ansehen",

    presentationLink: "Alle Details als Präsentation (PDF)",
    presentationEyebrow: "Präsentation",
    presentationHeading: "Minerva 2.0 im Detail – zum Nachlesen und Weitergeben",
    presentationLead:
      "Die Produktvorstellung fasst Funktionen, Arbeitsweise, Datenquellen, Modellwahl und Datenschutz auf einen Blick zusammen – ideal, um Minerva im eigenen Team vorzustellen.",
    presentationButton: "Präsentation herunterladen",

    faqHeading: "Häufige Fragen",
    contact: "Frage offen? Schreib uns.",

    closeEyebrow: "Bereit zum Start",
    closeHeading: "Stell Minerva deine erste Prozessfrage – mit deinen Daten",
    closeLead:
      "In einer Demo zeigen wir dir, wie Minerva auf einem deiner Prozesse Ursachen findet, erklärt und als Präsentation aufbereitet.",
    closeBack: "Zurück zur Plattform",
  },

  en: {
    home: "Home",
    platform: "Platform",
    badge: "Generative Process Intelligence · AI assistant",
    title: "Minerva 2.0",
    lead:
      "Ask about your processes the way you would ask a colleague. Minerva reads the causal process graph, draws on your company knowledge and delivers answers, root causes and finished files – right next to your analysis.",
    ctaDemo: "Book a demo",
    ctaHow: "How Minerva works",
    hero: {
      ...IMG.minervaNextToAnalyzer,
      alt: "Minerva panel next to an Analyzer tab of the purchase-to-pay process: Minerva answers a question about the open view, and the activity it mentions is highlighted in the process graph.",
      caption: "Minerva answers next to the process graph – and highlights what she is talking about.",
    },
    enlarge: "Open image at full size",

    whatHeading: "What is Minerva?",
    what: [
      "Minerva is the AI assistant in Noreja. She answers questions about your processes in natural language, explains what she finds and, on request, creates Excel sheets, reports or presentations. To do so she works directly on Noreja's causal process graph: cases, variants, KPIs, deviations from the expected flow and the properties of every activity. What the process data cannot explain – policies, special rules, known issues – she takes from the knowledge your company keeps in the Context Hub.",
      "The result: process mining that does not stop at dashboards and filters. Whoever has a question asks it – and gets an answer with numbers, reasoning and a source.",
    ],

    glanceEyebrow: "At a glance",
    glance: [
      {
        icon: MessageSquareText,
        title: "Questions, not click paths",
        text: "No filter logic, no export to Excel: you ask in plain language, Minerva finds the right perspective, does the maths and answers in the language of your question.",
      },
      {
        icon: Search,
        title: "Causes, not symptoms",
        text: "Minerva combines process data with company knowledge – policies, process descriptions, ticket information – and so explains not only what happens, but why.",
      },
      {
        icon: FileSpreadsheet,
        title: "Results ready to share",
        text: "Tables, charts, Excel files, Word and PDF reports and PowerPoint decks in your corporate design – ready for the next meeting.",
      },
      {
        icon: ShieldCheck,
        title: "Your data, your rules",
        text: "A local model in Noreja's own infrastructure or a cloud model – you choose per chat. Minerva never sees more than you are allowed to see.",
      },
    ],

    compareEyebrow: "From click path to question",
    compareHeading: "What used to take an afternoon is now one question",
    compareLead:
      "Classic process mining answers questions you first had to translate into filters, tabs and exports. With Minerva that step disappears.",
    insteadOf: "Instead of …",
    youAsk: "… you ask Minerva",
    compare: [
      {
        before: "Setting filters, comparing variants, lining up throughput times in Excel",
        ask: "Compare the variants with rework to the rest: how much longer do they take?",
      },
      {
        before: "Finding the case in the graph and checking every edge one by one",
        ask: "Explain the selected case: why did it take so long?",
      },
      {
        before: "Collecting screenshots and building a presentation",
        ask: "Make a short presentation with the three most important findings for the process owner.",
      },
    ],

    howEyebrow: "How Minerva works",
    howHeading: "Five building blocks, one answer",
    diagram: {
      input: "Input",
      question: ["Your question", "in plain language"],
      model: ["Model of your choice", "local or cloud"],
      core: "Minerva",
      coreSub: "plans the steps",
      skills: "loads skills when needed",
      subagents: "hands large tasks to sub-agents",
      sources: "Reads",
      sourceItems: [
        "Process data from the causal process graph",
        "Company knowledge from the Context Hub",
        "Files in the workspace",
        "Noreja documentation and web search",
      ],
      result: "Result",
      resultItems: [
        "Answer with tables, charts, graph highlights",
        "Files: Excel, Word, PDF, PowerPoint",
        "A follow-up question if something is unclear",
      ],
    },
    blocks: [
      {
        icon: ListChecks,
        title: "01 · Plan",
        text: "For questions with several steps, Minerva makes a plan first and then works through it. You see in the chat what she is working on.",
      },
      {
        icon: BookOpen,
        title: "02 · Skills",
        text: "Written know-how for a specific task – such as how rework rates are calculated or how presentations are built. Minerva loads a skill only when your question needs it.",
      },
      {
        icon: GitFork,
        title: "03 · Sub-agents",
        text: "Minerva hands large tasks to helpers that work on parts in parallel – analysing two perspectives at once, for example – and report back.",
      },
      {
        icon: Cpu,
        title: "04 · Model",
        text: "The AI model that thinks and writes. You choose it in the chat: local in Noreja's infrastructure or external with a cloud provider, with a transparent price tier.",
      },
      {
        icon: Database,
        title: "05 · Data sources",
        text: "Process data from the perspectives and Analyzer tabs you may open, company knowledge from the Context Hub, files in the workspace, the Noreja documentation and – with selected cloud models – web search.",
      },
    ],

    featuresEyebrow: "What Minerva does for you",
    featuresHeading: "Six things you notice from the first chat",
    features: [
      {
        label: "In context",
        title: "Ask where you are working",
        body: [
          "Minerva is available as a chat page of her own and as a panel right next to dashboards and the Analyzer. There she can read the open tab, its filters and the element you selected. Short questions are enough:",
        ],
        prompts: [
          "Which transition takes the longest on average in this view?",
          "Explain the selected case: why did it take so long?",
          "What do the filters in this tab leave out?",
        ],
        after:
          "Activities and transitions in the answer are linked to the process graph: hover over them and the path lights up in the graph.",
        shots: [
          {
            ...IMG.minervaNextToAnalyzer,
            alt: "Minerva panel next to the Analyzer: rework analysis with tables, the activity invoice entry is highlighted in the graph.",
            caption: "The activity she mentions lights up in the graph.",
          },
        ],
      },
      {
        label: "Answers",
        title: "Numbers, tables and charts",
        body: [
          "Minerva answers with what you need: a number, a small table, a flowchart or a timeline. Copy tables with one click or download them as CSV, charts as SVG or PNG. Cases and variants Minerva mentions open directly as a graph next to the chat.",
          "If something is unclear – which perspective you mean, for instance – Minerva asks instead of guessing.",
        ],
        shots: [
          {
            ...IMG.answerWithTable,
            alt: "Chat with Minerva: a question about the purchase-to-pay perspective, below it the loaded skills, the process data read and an answer with KPIs and a table.",
            caption: "One question, one answer with a table – and every activity in it linked to the graph.",
          },
        ],
      },
      {
        label: "Context",
        title: "Process data explains what happens. Company knowledge explains why.",
        body: [
          "A delay in purchasing can come from a strike, a new regulation or a supplier who never shows up in the event data. You keep this knowledge in the Context Hub: process descriptions, policies, org charts, known issues – as text or file, for the whole company, one perspective or a single activity.",
          "Minerva searches this knowledge when a question asks why, and names the document she used. For every entry you decide who may use it and whether it may only be processed by local models.",
        ],
        shots: [
          {
            ...IMG.contextHub,
            alt: "Context Hub in the AI Hub: cards with company knowledge, each with its sharing (for everyone or shared) and model restriction (public or local model only).",
            caption: "Context Hub: company knowledge with sharing and model restriction per entry.",
          },
          {
            ...IMG.invoiceTicketContext,
            alt: "Minerva answer next to the process graph: table with invoice IDs and their clarification reasons from the ticket system.",
            caption:
              "From the purchase-to-pay analysis: Minerva links invoice rework to clarification reasons from the ticket system via the invoice ID.",
          },
        ],
        link: { label: "Read the full case", slug: "purchase-to-pay" },
      },
      {
        label: "Traceable",
        title: "No black box",
        body: [
          "Minerva shows her work while she answers: which skills she loaded, which data she read, which parts sub-agents take over and which steps of the plan are still open. You can stop at any time, edit a question and ask again, or repeat the answer with a different model.",
          "Below every answer you see how long it took and how many tokens it used; the cost of a chat is broken down by model and tool.",
        ],
        shots: [
          {
            ...IMG.traceableSteps,
            alt: "Minerva announces what she will check and shows every step in the chat: which skills she loads and why.",
            caption: "Every step visible: the announced plan and the loaded skills.",
          },
        ],
      },
      {
        label: "Files",
        title: "Results you can pass on",
        body: ["Ask Minerva for the file you need:"],
        bullets: [
          "Excel and CSV tables",
          "Charts as images",
          "Word and PDF documents",
          "PowerPoint decks in your company colours and with your logo",
        ],
        after:
          "The files land in your workspace. With shared workspaces a project team works on the same files; Minerva also reads what you upload there – CSV, Excel, Word, PowerPoint and PDF, scanned ones too. Everything Minerva creates is labelled as AI-generated.",
        shots: [
          {
            ...IMG.fileCreated,
            alt: "Minerva created a PowerPoint deck with the three most important deviations in the purchase-to-pay process; below it the completed three-step plan, on the right the workspace with the new folder.",
            caption: "From question to presentation – no export, no copy and paste.",
          },
        ],
      },
      {
        label: "Customisable",
        title: "Your know-how as a skill",
        body: [
          "Every company has its own definitions: what counts as a late delivery? What belongs in a management briefing? In the AI Hub you write this knowledge down once as a skill – from then on Minerva applies it to every matching question. To use a skill on purpose, type “/” in the chat and pick it.",
          "For special tasks you set up your own agents: with their own brief, selected skills, a fixed model and their own sharing for teams or departments.",
        ],
        shots: [
          {
            ...IMG.skillPicker,
            alt: "Chat input after typing “/”: list of the available skills.",
            caption: "A “/” in the chat opens the list of skills.",
          },
        ],
      },
    ],

    askEyebrow: "What you can ask Minerva",
    askHeading: "Everyday questions – for every role",
    askGroups: [
      {
        title: "Process owners",
        prompts: [
          "How many cases does the purchase-to-pay perspective have, and what is the average throughput time?",
          "Where are the most deviations from the expected flow, and which activities are skipped most often?",
          "Make a short presentation with the three most important findings for the process owner.",
        ],
      },
      {
        title: "Analysts",
        prompts: [
          "Compare the variants with rework to the rest: how much longer do they take?",
          "How many cases started in the first quarter, and how does their throughput time differ from all cases? Answer with a small table.",
          "Create an Excel file with the slowest transitions of the last quarter.",
        ],
      },
      {
        title: "Everyone who works with Noreja",
        prompts: [
          "Explain the selected case: why did it take so long?",
          "What do the filters in this tab leave out?",
          "How do I share a dashboard with my team?",
        ],
      },
    ],

    libraryEyebrow: "Agent Library",
    libraryHeading: "Specialized agents for every process question",
    libraryLead:
      "For typical tasks in business process analysis there are ready-made agents: each one knows its question, the right KPIs and the follow-up questions a good analysis answers.",
    libraryLink: "Open the Agent Library",

    trustEyebrow: "Your data, your control",
    trustHeading: "Minerva sees no more than you do.",
    trustLead:
      "She reads only the perspectives, tabs and knowledge entries you have access to yourself. A perspective you may not open does not exist for Minerva.",
    trust: [
      {
        title: "Model selectable per chat",
        text: "Local models run in Noreja's own infrastructure, external models with cloud providers. Noreja warns you before you switch to an external model.",
      },
      {
        title: "Confidential knowledge stays local",
        text: "Context Hub entries marked “local model only” are never used with a cloud model.",
      },
      {
        title: "Lock individual answers",
        text: "The lock excludes a question and its answer from all later cloud requests in the chat. Answers from a local model never go to external models anyway.",
      },
      {
        title: "Personal chats",
        text: "Other users – administrators included – do not see your chats in their chat list.",
      },
      {
        title: "Read-only",
        text: "Minerva changes nothing in Noreja – no imports, no perspectives, no filters.",
      },
      {
        title: "Labelled",
        text: "Files from Minerva are marked as AI-generated.",
      },
    ],
    trustShot: {
      ...IMG.modelPicker,
      alt: "Model picker in the chat: local and external models, each with a price tier from $ to $$$+.",
      caption: "Model picker in the chat: local or external, with price tier.",
    },
    trustBadges: ["ISO certified", "GDPR compliant"],
    trustCenter: "Visit the Trust Center",

    stepsEyebrow: "Get started",
    stepsHeading: "Three steps to your first answer",
    steps: [
      {
        title: "Open Minerva",
        text: "Switch on Minerva AI in the top bar to open her next to a dashboard or the Analyzer – or go to the chat page. On smartphones and tablets Noreja opens the chat directly.",
      },
      {
        title: "Ask your question",
        text: "Type or dictate your question and name the perspective it is about. Say which cases count and what you want back – a number, a table, a presentation.",
      },
      {
        title: "Check and share",
        text: "Follow the steps Minerva shows, check important numbers in the Analyzer and download tables, charts or files – or put them in the shared workspace for your team.",
      },
    ],

    frontierEyebrow: "Minerva and the Frontier Agents",
    frontierText:
      "Minerva answers when you ask. The Minerva Frontier Agents go one step further: they work on a question continuously in the background, watch KPIs and get in touch as soon as something relevant changes.",
    frontierLink: "See the Frontier Agents",

    presentationLink: "All the details as a presentation (PDF)",
    presentationEyebrow: "Presentation",
    presentationHeading: "Minerva 2.0 in detail – to read and pass on",
    presentationLead:
      "The product presentation sums up features, how Minerva works, data sources, model choice and data protection – ideal for introducing Minerva to your own team. Currently available in German only.",
    presentationButton: "Download the presentation",

    faqHeading: "Frequently asked questions",
    contact: "Still have a question? Get in touch.",

    closeEyebrow: "Ready to start",
    closeHeading: "Ask Minerva your first process question – with your data",
    closeLead:
      "In a demo we show you how Minerva finds root causes in one of your processes, explains them and turns them into a presentation.",
    closeBack: "Back to the platform",
  },
} as const;

const faq = {
  de: [
    {
      question: "Was ist Minerva?",
      answer:
        "Minerva ist die KI-Assistentin in der Process-Intelligence-Plattform von Noreja. Sie beantwortet Fragen zu deinen Prozessen in natürlicher Sprache, liest dafür den kausalen Prozessgraphen und das Unternehmenswissen im Context Hub und erstellt auf Wunsch Tabellen, Diagramme, Berichte und Präsentationen.",
    },
    {
      question: "Welche Daten nutzt Minerva?",
      answer:
        "Die Prozessdaten der Perspektiven und Analyzer-Tabs, die du öffnen darfst – inklusive der mit dir geteilten –, das Unternehmenswissen aus dem Context Hub, Dateien in deinem Workspace und die Noreja-Dokumentation. Mit ausgewählten Cloud-Modellen kann Minerva zusätzlich im Web suchen.",
    },
    {
      question: "Welche KI-Modelle kann ich verwenden?",
      answer:
        "Lokale Modelle, die in Norejas eigener Infrastruktur laufen, und externe Modelle von Cloud-Anbietern. Du wählst das Modell im Chat; die Preisstufe jedes Modells ist angezeigt. Für lokale Modelle gibt es zusätzlich die Variante „Minerva (On-Premise)“, die genau auf sie abgestimmt ist.",
    },
    {
      question: "Verlassen meine Daten das Unternehmen?",
      answer:
        "Deine Frage und die Daten, die Minerva dafür liest, gehen an das gewählte Modell. Mit einem lokalen Modell bleiben sie in Norejas Infrastruktur, mit einem externen Modell gehen sie an den Cloud-Anbieter. Vertrauliche Wissenseinträge und gesperrte Antworten verarbeitet Minerva nur mit lokalen Modellen. Die Diktierfunktion nutzt derzeit einen Sprachdienst von OpenAI – wer das nicht möchte, tippt.",
    },
    {
      question: "Kann Minerva etwas in Noreja verändern?",
      answer:
        "Nein. Minerva liest Prozessdaten, ändert aber nichts: Sie importiert keine Daten, bearbeitet keine Perspektiven und setzt keine Filter in deinen Tabs. Dateien erstellt sie nur in deinem Workspace.",
    },
    {
      question: "Wie zuverlässig sind die Antworten?",
      answer:
        "Minerva rechnet auf denselben Daten wie der Analyzer und zeigt, welche Daten sie gelesen hat. Antworten sind trotzdem KI-generiert und können Fehler enthalten. Wichtige Zahlen prüfst du deshalb im Analyzer, bevor du sie weitergibst.",
    },
    {
      question: "Kann ich Minerva an unser Unternehmen anpassen?",
      answer:
        "Ja. Im Context Hub hinterlegt ihr Unternehmenswissen, im AI Hub schreibt ihr eigene Skills für eure Definitionen und Berichtsformate, richtet eigene Agenten ein und hinterlegt eure Farben und euer Logo für die Präsentationen.",
    },
    {
      question: "In welcher Sprache antwortet Minerva?",
      answer: "In der Sprache deiner Frage.",
    },
    {
      question: "Wer kann Minerva nutzen?",
      answer:
        "Alle, denen in Noreja das Recht zum Chatten gegeben wurde. Es gibt auch reine Chat-Zugänge: Diese Nutzer arbeiten nur mit Minerva und sehen nur die Prozessdaten, die für sie freigegeben sind.",
    },
  ],
  en: [
    {
      question: "What is Minerva?",
      answer:
        "Minerva is the AI assistant in Noreja's process intelligence platform. She answers questions about your processes in natural language, reads the causal process graph and the company knowledge in the Context Hub to do so, and creates tables, charts, reports and presentations on request.",
    },
    {
      question: "Which data does Minerva use?",
      answer:
        "The process data of the perspectives and Analyzer tabs you may open – including those shared with you –, company knowledge from the Context Hub, files in your workspace and the Noreja documentation. With selected cloud models Minerva can also search the web.",
    },
    {
      question: "Which AI models can I use?",
      answer:
        "Local models running in Noreja's own infrastructure and external models from cloud providers. You choose the model in the chat; each model's price tier is shown. For local models there is also the “Minerva (On-Premise)” variant, tuned specifically for them.",
    },
    {
      question: "Does my data leave the company?",
      answer:
        "Your question and the data Minerva reads for it go to the selected model. With a local model they stay in Noreja's infrastructure; with an external model they go to the cloud provider. Confidential knowledge entries and locked answers are only processed by local models. Dictation currently uses a speech service from OpenAI – if you would rather not, type instead.",
    },
    {
      question: "Can Minerva change anything in Noreja?",
      answer:
        "No. Minerva reads process data but changes nothing: she imports no data, edits no perspectives and sets no filters in your tabs. She only creates files in your workspace.",
    },
    {
      question: "How reliable are the answers?",
      answer:
        "Minerva calculates on the same data as the Analyzer and shows which data she read. Answers are still AI-generated and can contain errors, so check important numbers in the Analyzer before you pass them on.",
    },
    {
      question: "Can we adapt Minerva to our company?",
      answer:
        "Yes. In the Context Hub you store company knowledge; in the AI Hub you write your own skills for your definitions and report formats, set up your own agents and store your colours and logo for the presentations.",
    },
    {
      question: "Which language does Minerva answer in?",
      answer: "In the language of your question.",
    },
    {
      question: "Who can use Minerva?",
      answer:
        "Everyone who has been given the right to chat in Noreja. There are also chat-only accounts: these users work only with Minerva and see only the process data released to them.",
    },
  ],
} as const;

/** A screenshot in a light browser frame; click opens the full-size image. */
function Screenshot({ shot, enlargeLabel, eager = false }: { shot: Shot; enlargeLabel: string; eager?: boolean }) {
  return (
    <figure
      className="overflow-hidden rounded-2xl border bg-card/60"
      style={{
        borderColor: "hsl(var(--border))",
        boxShadow: "0 30px 80px -40px hsl(var(--noreja-main) / 0.65)",
      }}
    >
      <div
        aria-hidden="true"
        className="flex items-center gap-1.5 border-b px-4 py-2.5"
        style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--secondary))" }}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
      </div>
      <a
        href={shot.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={enlargeLabel}
        className="block bg-[#f6f2fd]"
      >
        <img
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="mx-auto h-auto max-h-[720px] w-full object-contain object-top"
        />
      </a>
      {shot.caption && (
        <figcaption className="px-4 py-3 text-xs leading-relaxed text-muted-foreground md:px-5">
          {shot.caption}
        </figcaption>
      )}
    </figure>
  );
}

/** One node in the "How Minerva works" diagram. */
const Node = ({
  tone,
  icon: Icon,
  children,
}: {
  tone: "user" | "agent" | "data";
  icon?: LucideIcon;
  children: React.ReactNode;
}) => {
  const colour = {
    user: "35 85% 60%",
    agent: "var(--noreja-main)",
    data: "var(--noreja-tertiary)",
  }[tone];
  return (
    <div
      className="flex items-start gap-2.5 rounded-xl border px-3.5 py-3 text-[0.88rem] leading-snug text-foreground"
      style={{ borderColor: `hsl(${colour} / 0.45)`, background: `hsl(${colour} / 0.08)` }}
    >
      {Icon && <Icon className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: `hsl(${colour})` }} />}
      <div>{children}</div>
    </div>
  );
};

const FlowArrow = () => (
  <div aria-hidden="true" className="flex items-center justify-center text-muted-foreground/60">
    <ArrowRight className="hidden h-5 w-5 lg:block" />
    <ArrowDown className="h-5 w-5 lg:hidden" />
  </div>
);

const SOURCE_ICONS: LucideIcon[] = [Database, Library, FolderOpen, Search];
const RESULT_ICONS: LucideIcon[] = [Table2, FileSpreadsheet, MessageCircleQuestion];

const Minerva = () => {
  const { language } = useLanguage();
  const text = copy[language];
  const questions = faq[language];
  const pageUrl = `${SITE_URL}${getRoutePath("minerva", language)}`;
  const d = text.diagram;

  useEffect(() => {
    // Keep deep links such as /de/minerva#so-arbeitet-minerva working.
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);

  const applicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${pageUrl}#minerva`,
    name: "Noreja Minerva",
    softwareVersion: "2.0",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web browser",
    url: pageUrl,
    inLanguage: language,
    isPartOf: { "@type": "SoftwareApplication", name: "Noreja", url: SITE_URL },
    provider: { "@type": "Organization", name: "Noreja Intelligence GmbH", url: SITE_URL },
    description: text.what[0],
    featureList: text.blocks.map((block) => `${block.title}: ${block.text}`),
    screenshot: `${SITE_URL}${IMG.minervaNextToAnalyzer.src}`,
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${pageUrl}#how-to`,
    name: text.stepsHeading,
    inLanguage: language,
    tool: { "@type": "HowToTool", name: "Noreja Minerva" },
    step: text.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.text,
    })),
  };

  const howId = language === "de" ? "so-arbeitet-minerva" : "how-minerva-works";
  const presentationId = language === "de" ? "praesentation" : "presentation";
  const libraryId = "agent-library";
  const presentation = getMinervaPresentation(language);

  return (
    <div className="min-h-screen bg-background">
      <StructuredData schema={applicationSchema} id="minerva-app" />
      <StructuredData schema={howToSchema} id="minerva-howto" />
      <FAQSchema items={questions.map((item) => ({ ...item }))} />
      <BreadcrumbSchema
        items={[
          { name: text.home, url: `${SITE_URL}${getRoutePath("home", language)}` },
          { name: text.platform, url: `${SITE_URL}${getRoutePath("functionalities", language)}` },
          { name: text.title, url: pageUrl },
        ]}
      />

      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-24 lg:pb-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 50% 10%, hsl(var(--noreja-main) / 0.34), transparent 62%),
              radial-gradient(ellipse 45% 45% at 85% 60%, hsl(var(--noreja-tertiary) / 0.12), transparent 60%)
            `,
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <nav aria-label="Breadcrumb" className="mb-6 font-mono text-[0.72rem] tracking-[0.08em] text-muted-foreground">
              <Link to={getRoutePath("functionalities", language)} className="hover:text-foreground">
                {text.platform}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{text.title}</span>
            </nav>
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
              <Sparkles className="mr-2 h-4 w-4 text-accent" />
              <span className="text-sm font-medium">{text.badge}</span>
            </div>
            <h1 className="mb-6 text-5xl font-extrabold tracking-[-0.04em] text-foreground md:text-6xl lg:text-7xl">
              Minerva{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">2.0</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {text.lead}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="group">
                <a href={siteConfig.hubspot.appointmentBooking} target="_blank" rel="noopener noreferrer">
                  {text.ctaDemo}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-background/60">
                <a href={`#${howId}`}>
                  {text.ctaHow}
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            {presentation && (
              <a
                href={`#${presentationId}`}
                className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground underline decoration-dotted underline-offset-4 hover:text-foreground hover:decoration-solid"
              >
                <FileDown className="h-4 w-4" style={{ color: MINT }} />
                {text.presentationLink}
              </a>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14"
          >
            <Screenshot shot={text.hero} enlargeLabel={text.enlarge} eager />
          </motion.div>
        </div>
      </section>

      {/* ---------------- What is Minerva + at a glance ---------------- */}
      <section className="px-4 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div
            className="mx-auto max-w-4xl rounded-3xl border p-6 md:p-10"
            style={{
              borderColor: "hsl(var(--border))",
              background: "linear-gradient(160deg, hsl(var(--secondary)), hsl(var(--card)))",
            }}
          >
            <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">{text.whatHeading}</h2>
            <div className="space-y-4">
              {text.what.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <div className="mb-6 text-center">
              <Eyebrow>{text.glanceEyebrow}</Eyebrow>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {text.glance.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-border/50 bg-card/60 p-5"
                >
                  <item.icon className="mb-3 h-5 w-5" style={{ color: MINT }} />
                  <h3 className="mb-1.5 text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- From click path to question ---------------- */}
      <section
        className="border-y py-16 lg:py-24"
        style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--card))" }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="mb-10 flex max-w-[66ch] flex-col gap-4">
            <Eyebrow>{text.compareEyebrow}</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground lg:text-[2.6rem]">
              {text.compareHeading}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">{text.compareLead}</p>
          </div>

          <div className="grid gap-4">
            {text.compare.map((row) => (
              <div
                key={row.ask}
                className="grid gap-3 rounded-2xl border bg-background p-4 md:grid-cols-[1fr_auto_1.2fr] md:items-center md:gap-6 md:p-5"
                style={{ borderColor: "hsl(var(--border))" }}
              >
                <div>
                  <span className="mb-1 block font-mono text-[0.68rem] uppercase tracking-[0.14em] text-amber-400">
                    {text.insteadOf}
                  </span>
                  <span className="text-[0.95rem] text-muted-foreground line-through decoration-muted-foreground/40">
                    {row.before}
                  </span>
                </div>
                <FlowArrow />
                <div>
                  <span className="mb-1.5 block font-mono text-[0.68rem] uppercase tracking-[0.14em]" style={{ color: MINT }}>
                    {text.youAsk}
                  </span>
                  <Prompt language={language}>{row.ask}</Prompt>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- How Minerva works ---------------- */}
      <section id={howId} className="scroll-mt-24 px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-10 flex max-w-[66ch] flex-col gap-4">
            <Eyebrow>{text.howEyebrow}</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground lg:text-[2.6rem]">
              {text.howHeading}
            </h2>
          </div>

          {/* Diagram, rebuilt in the page style from diagrams/01-so-arbeitet-minerva.mmd */}
          <div
            className="grid gap-4 rounded-3xl border p-5 md:p-8 lg:grid-cols-[1fr_auto_1.15fr_auto_1.25fr_auto_1.1fr] lg:items-center"
            style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--card) / 0.6)" }}
          >
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">{d.input}</span>
              <Node tone="user" icon={MessageSquareText}>
                <b className="font-semibold">{d.question[0]}</b>
                <br />
                <span className="text-muted-foreground">{d.question[1]}</span>
              </Node>
              <Node tone="agent" icon={Cpu}>
                <b className="font-semibold">{d.model[0]}</b>
                <br />
                <span className="text-muted-foreground">{d.model[1]}</span>
              </Node>
            </div>

            <FlowArrow />

            <div
              className="flex flex-col gap-3 rounded-2xl border p-4"
              style={{
                borderColor: "hsl(var(--noreja-main) / 0.6)",
                background: "hsl(var(--noreja-main) / 0.14)",
                boxShadow: "0 0 50px -18px hsl(var(--noreja-main) / 0.8)",
              }}
            >
              <div className="flex items-center gap-2.5">
                <Bot className="h-5 w-5" style={{ color: MINT }} />
                <div>
                  <b className="block text-lg font-bold text-foreground">{d.core}</b>
                  <span className="text-[0.82rem] text-muted-foreground">{d.coreSub}</span>
                </div>
              </div>
              <Node tone="agent" icon={BookOpen}>
                {d.skills}
              </Node>
              <Node tone="agent" icon={GitFork}>
                {d.subagents}
              </Node>
            </div>

            <FlowArrow />

            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">{d.sources}</span>
              {d.sourceItems.map((item, i) => (
                <Node key={item} tone="data" icon={SOURCE_ICONS[i]}>
                  {item}
                </Node>
              ))}
            </div>

            <FlowArrow />

            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">{d.result}</span>
              {d.resultItems.map((item, i) => (
                <Node key={item} tone="user" icon={RESULT_ICONS[i]}>
                  {item}
                </Node>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {text.blocks.map((block, index) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-2xl border border-border/50 bg-card/60 p-5 transition-colors hover:border-noreja-main/40"
              >
                <block.icon className="mb-3 h-5 w-5" style={{ color: MINT }} />
                <h3 className="mb-2 font-mono text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-foreground">
                  {block.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{block.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Features ---------------- */}
      <section
        className="border-y py-16 lg:py-24"
        style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--card))" }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
          <div className="mb-14 flex max-w-[66ch] flex-col gap-4">
            <Eyebrow>{text.featuresEyebrow}</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground lg:text-[2.6rem]">
              {text.featuresHeading}
            </h2>
          </div>

          <div className="flex flex-col gap-20 lg:gap-28">
            {text.features.map((feature, index) => {
              const reversed = index % 2 === 1;
              return (
                <article
                  key={feature.title}
                  className="grid items-center gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-14"
                >
                  <div className={`flex flex-col gap-4 ${reversed ? "lg:order-2" : ""}`}>
                    {feature.shots.map((shot) => (
                      <Screenshot key={shot.alt} shot={shot} enlargeLabel={text.enlarge} />
                    ))}
                  </div>

                  <div className={`flex flex-col gap-4 ${reversed ? "lg:order-1" : ""}`}>
                    <span
                      className="w-fit rounded-full border px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.16em]"
                      style={{
                        color: MINT,
                        borderColor: "hsl(var(--noreja-tertiary) / 0.35)",
                        background: "hsl(var(--noreja-tertiary) / 0.06)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")} · {feature.label}
                    </span>
                    <h3 className="text-2xl font-bold leading-tight tracking-tight text-foreground lg:text-[1.9rem]">
                      {feature.title}
                    </h3>
                    {feature.body.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                    {"prompts" in feature && (
                      <div className="grid gap-2">
                        {feature.prompts.map((prompt) => (
                          <Prompt key={prompt} language={language}>
                            {prompt}
                          </Prompt>
                        ))}
                      </div>
                    )}
                    {"bullets" in feature && (
                      <ul className="grid gap-2">
                        {feature.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2.5 text-[0.95rem] text-foreground">
                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: MINT }} />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                    {"after" in feature && (
                      <p className="text-base leading-relaxed text-muted-foreground">{feature.after}</p>
                    )}
                    {"link" in feature && (
                      <Link
                        to={getRoutePath("endToEndProcess", language, { processSlug: feature.link.slug })}
                        className="group inline-flex w-fit items-center gap-2 font-medium text-foreground underline decoration-dotted underline-offset-4 hover:decoration-solid"
                      >
                        {feature.link.label}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- What you can ask ---------------- */}
      <section className="px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-10 flex max-w-[66ch] flex-col gap-4">
            <Eyebrow>{text.askEyebrow}</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground lg:text-[2.6rem]">
              {text.askHeading}
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {text.askGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <h3 className="font-mono text-[0.78rem] uppercase tracking-[0.12em] text-foreground">{group.title}</h3>
                {group.prompts.map((prompt) => (
                  <Prompt key={prompt} language={language}>
                    {prompt}
                  </Prompt>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Agent Library ---------------- */}
      <section id={libraryId} className="scroll-mt-24 px-4 pb-16 lg:px-8 lg:pb-24">
        <div
          className="mx-auto w-full max-w-6xl rounded-3xl border p-6 md:p-10"
          style={{
            borderColor: "hsl(var(--noreja-main) / 0.35)",
            background: "linear-gradient(160deg, hsl(var(--noreja-main) / 0.1), hsl(var(--card)))",
          }}
        >
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
            <div className="flex max-w-[62ch] flex-col gap-3">
              <Eyebrow>{text.libraryEyebrow}</Eyebrow>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground lg:text-[2.6rem]">
                {text.libraryHeading}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{text.libraryLead}</p>
            </div>
            <Button asChild variant="outline" className="group shrink-0 bg-background/60">
              <Link to={getRoutePath("agentLibrary", language)}>
                {text.libraryLink}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <ul className="grid gap-3 md:grid-cols-2">
            {agents.map((agent) => (
              <li key={agent.id}>
                <Link
                  to={getRoutePath("agentDetail", language, { agentSlug: getAgentSlug(agent, language) })}
                  className="group flex h-full items-start gap-3 rounded-xl border bg-background/80 px-4 py-3.5 transition-colors hover:border-noreja-main/50"
                  style={{ borderColor: "hsl(var(--border))" }}
                >
                  <agent.icon className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: MINT }} />
                  <span>
                    <span className="block text-[0.97rem] font-semibold tracking-tight text-foreground group-hover:text-noreja-main">
                      {agent.content[language].name}
                    </span>
                    <span className="text-[0.88rem] leading-snug text-muted-foreground">
                      {agent.content[language].teaser}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- Trust ---------------- */}
      <section
        className="border-y py-16 lg:py-24"
        style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--card))" }}
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:px-8">
          <div className="flex flex-col gap-5">
            <Eyebrow>{text.trustEyebrow}</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground lg:text-[2.6rem]">
              {text.trustHeading}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">{text.trustLead}</p>
            <ul className="mt-2 grid gap-2.5">
              {text.trust.map((item) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[20px_1fr] items-start gap-3 rounded-xl border bg-background px-4 py-3.5"
                  style={{ borderColor: "hsl(var(--border))" }}
                >
                  <Check className="mt-0.5 h-5 w-5" style={{ color: MINT }} strokeWidth={2} />
                  <div>
                    <b className="block text-[0.97rem] font-semibold tracking-tight text-foreground">{item.title}</b>
                    <span className="text-[0.9rem] text-muted-foreground">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6 lg:pt-24">
            <Screenshot shot={text.trustShot} enlargeLabel={text.enlarge} />
            <div className="flex flex-wrap items-center gap-3">
              {text.trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm text-foreground"
                  style={{ borderColor: "hsl(var(--border))" }}
                >
                  <ShieldCheck className="h-4 w-4" style={{ color: MINT }} />
                  {badge}
                </span>
              ))}
              <a
                href={"https://trust.noreja.com/"}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-dotted underline-offset-4 hover:decoration-solid"
              >
                {text.trustCenter}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Three steps ---------------- */}
      <section className="px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-5xl">
          <div className="mb-10 flex flex-col items-center gap-4 text-center">
            <Eyebrow>{text.stepsEyebrow}</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground lg:text-[2.6rem]">
              {text.stepsHeading}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {text.steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-border/50 bg-card/60 p-6"
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-noreja-main/10 text-sm font-bold text-noreja-main">
                  {index + 1}
                </span>
                <h3 className="mb-2 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Frontier Agents teaser */}
          <div
            className="mt-12 flex flex-col gap-4 rounded-2xl border p-6 md:flex-row md:items-center md:gap-8"
            style={{
              borderColor: "hsl(var(--noreja-main) / 0.35)",
              background: "linear-gradient(120deg, hsl(var(--noreja-main) / 0.12), hsl(var(--card)))",
            }}
          >
            <div className="flex-1">
              <Eyebrow>{text.frontierEyebrow}</Eyebrow>
              <p className="mt-2 text-[0.97rem] leading-relaxed text-muted-foreground">{text.frontierText}</p>
            </div>
            <Button asChild variant="outline" className="group shrink-0 bg-background/60">
              <Link to={getRoutePath("aiAgents", language)}>
                {text.frontierLink}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------- Presentation download ---------------- */}
      {presentation && (
        <section id={presentationId} className="scroll-mt-24 px-4 pb-16 lg:px-8 lg:pb-24">
          <div
            className="mx-auto flex w-full max-w-5xl flex-col gap-6 rounded-3xl border p-6 md:flex-row md:items-center md:gap-10 md:p-10"
            style={{
              borderColor: "hsl(var(--border))",
              background: "linear-gradient(160deg, hsl(var(--secondary)), hsl(var(--card)))",
            }}
          >
            <div
              aria-hidden="true"
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl"
              style={{ background: "hsl(var(--noreja-tertiary) / 0.1)" }}
            >
              <FileDown className="h-8 w-8" style={{ color: MINT }} />
            </div>
            <div className="flex-1">
              <Eyebrow>{text.presentationEyebrow}</Eyebrow>
              <h2 className="mt-2 text-2xl font-bold leading-tight text-foreground md:text-[1.7rem]">
                {text.presentationHeading}
              </h2>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-muted-foreground">{text.presentationLead}</p>
              <p className="mt-2 font-mono text-[0.72rem] tracking-[0.06em] text-muted-foreground">
                {presentation.fileType} · {presentation.fileSize}
              </p>
            </div>
            <DownloadGateInline
              title={presentation.title}
              description={presentation.description}
              fileUrl={presentation.fileUrl}
              fileSize={presentation.fileSize}
              fileType={presentation.fileType}
              requiresForm={presentation.access === "locked"}
              buttonText={text.presentationButton}
              buttonVariant="default"
              className="shrink-0"
            />
          </div>
        </section>
      )}

      {/* ---------------- FAQ ---------------- */}
      <section className="px-4 pb-16 lg:px-8 lg:pb-24">
        <div className="mx-auto w-full max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">{text.faqHeading}</h2>
          {/* Plain markup, no accordion: the full answer text is always in the
              DOM for crawlers and answer engines. */}
          <div className="space-y-4">
            {questions.map((item) => (
              <div key={item.question} className="rounded-2xl border border-border/50 bg-card/60 p-6">
                <h3 className="mb-2 text-base font-semibold text-foreground">{item.question}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            <Link to={getRoutePath("contact", language)} className="text-noreja-main underline-offset-4 hover:underline">
              {text.contact}
            </Link>
          </p>
        </div>
      </section>

      {/* ---------------- Closing CTA ---------------- */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 50% 50%, hsl(var(--noreja-main) / 0.3), transparent 66%)",
          }}
        />
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 text-center lg:px-8">
          <Eyebrow>{text.closeEyebrow}</Eyebrow>
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
              <Link to={getRoutePath("functionalities", language)}>{text.closeBack}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Minerva;
