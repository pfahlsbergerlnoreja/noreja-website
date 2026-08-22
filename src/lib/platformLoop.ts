import type { Language } from "./translations";

/**
 * Content for the Platform page ("Der Noreja Loop").
 *
 * Kept out of translations.ts on purpose: this is page-specific long-form copy,
 * same pattern as useCases.ts. translations.ts stays the place for shared UI strings.
 */

export type Localized = Record<Language, string>;

/** Keys map to lucide icons in the page component. */
export type CapabilityIcon =
  | "search"
  | "clock"
  | "coins"
  | "shield"
  | "bell"
  | "workflow"
  | "listTodo"
  | "euro"
  | "trending"
  | "lock"
  | "activity"
  | "layout"
  | "refresh";

export interface Capability {
  icon: CapabilityIcon;
  title: Localized;
  text: Localized;
}

export interface AgentMetric {
  label: Localized;
  value: Localized;
}

export interface LoopPhase {
  id: string;
  /** Short name shown on the ring node. */
  name: Localized;
  /** The decision-maker question this phase answers. */
  question: Localized;
  /** Headline is rendered as `<accent> — <rest>`. */
  headlineRest: Localized;
  lede: Localized;
  capabilities: Capability[];
  agent: {
    name: Localized;
    status: Localized;
    /** `highlight` is emphasised inside `message`; it must appear verbatim in it. */
    message: Localized;
    highlight: Localized;
    metrics?: AgentMetric[];
    actions?: Localized[];
  };
  /** Mono agent-log line under the sticky ring. */
  log: Localized;
}

export const loopPhases: LoopPhase[] = [
  {
    id: "insights",
    name: { de: "Insights", en: "Insights" },
    question: {
      de: "„Wo verliere ich eigentlich Geld?“",
      en: "“Where am I actually losing money?”",
    },
    headlineRest: {
      de: "die Ursache, nicht das Symptom.",
      en: "the cause, not the symptom.",
    },
    lede: {
      de: "Noreja rekonstruiert aus deinen Systemdaten ein kausales Prozessmodell und arbeitet sich von der Auffälligkeit zur Root Cause vor.",
      en: "Noreja reconstructs a causal process model from your system data and works its way from the anomaly to the root cause.",
    },
    capabilities: [
      {
        icon: "search",
        title: { de: "Fehlerquellen", en: "Sources of error" },
        text: {
          de: "Wo brechen Fälle ab, laufen in Schleifen, werden nachgearbeitet?",
          en: "Where do cases break off, loop, or need rework?",
        },
      },
      {
        icon: "clock",
        title: { de: "Durchlaufzeit-Treiber", en: "Cycle-time drivers" },
        text: {
          de: "Welche Schritte kosten Tage — und welcher davon ist der kausale?",
          en: "Which steps cost days — and which of them is the causal one?",
        },
      },
      {
        icon: "coins",
        title: { de: "Versteckte Kosten", en: "Hidden costs" },
        text: {
          de: "Manuelle Eingriffe, Skonto-Verluste, Doppelarbeit — in Euro beziffert.",
          en: "Manual interventions, lost discounts, duplicated work — quantified in euros.",
        },
      },
      {
        icon: "shield",
        title: { de: "Qualitätsabweichungen", en: "Quality deviations" },
        text: {
          de: "Wo weicht die Realität vom Soll-Prozess ab — und mit welcher Folge?",
          en: "Where does reality diverge from the target process — and with what consequence?",
        },
      },
    ],
    agent: {
      name: { de: "Insights Agent", en: "Insights Agent" },
      status: { de: "abgeschlossen", en: "completed" },
      message: {
        de: "4.812 Purchase-to-Pay-Fälle analysiert. Drei Ursachen erklären 68 % aller Verzögerungen — führend: fehlender Wareneingang bei Lieferant DE-114, im Schnitt 6,2 Tage Verzug.",
        en: "4,812 purchase-to-pay cases analysed. Three causes explain 68% of all delays — leading: missing goods receipt from supplier DE-114, 6.2 days of delay on average.",
      },
      highlight: {
        de: "Drei Ursachen erklären 68 % aller Verzögerungen",
        en: "Three causes explain 68% of all delays",
      },
      metrics: [
        { label: { de: "Fälle", en: "Cases" }, value: { de: "4.812", en: "4,812" } },
        { label: { de: "Konfidenz", en: "Confidence" }, value: { de: "94 %", en: "94%" } },
        { label: { de: "Laufzeit", en: "Runtime" }, value: { de: "38 s", en: "38 s" } },
      ],
    },
    log: {
      de: "insights_agent.scan(p2p) → 3 Ursachen · 68 % Wirkung",
      en: "insights_agent.scan(p2p) → 3 causes · 68% impact",
    },
  },
  {
    id: "action",
    name: { de: "Action", en: "Action" },
    question: {
      de: "„Und was soll ich jetzt tun?“",
      en: "“And what should I do about it?”",
    },
    headlineRest: {
      de: "vom Befund zur Maßnahme.",
      en: "from finding to action.",
    },
    lede: {
      de: "Der Agent schlägt nicht nur vor, was zu tun ist — er kann es auslösen. Menschen, Systeme und Agenten informieren oder ein Redesign planen: entschieden wird von dir, vorbereitet vom System.",
      en: "The agent doesn't just suggest what to do — it can trigger it. Notify people, systems, and agents or plan a redesign: you decide, the system prepares.",
    },
    capabilities: [
      {
        icon: "bell",
        title: { de: "Person informieren", en: "Notify the right person" },
        text: {
          de: "Die zuständige Rolle bekommt den Fall inklusive Kontext — nicht die Abteilung.",
          en: "The responsible role gets the case with full context — not the department.",
        },
      },
      {
        icon: "workflow",
        title: { de: "Workflow anstoßen", en: "Trigger a workflow" },
        text: {
          de: "Trigger in SAP, ServiceNow oder RPA — direkt aus der Erkenntnis heraus.",
          en: "Trigger in SAP, ServiceNow or RPA — straight out of the insight.",
        },
      },
      {
        icon: "listTodo",
        title: { de: "Redesign-Projekt aufsetzen", en: "Set up a redesign project" },
        text: {
          de: "Scope, betroffene Varianten und Baseline-KPIs kommen vorbefüllt.",
          en: "Scope, affected variants and baseline KPIs come pre-filled.",
        },
      },
    ],
    agent: {
      name: { de: "Action Agent", en: "Action Agent" },
      status: { de: "wartet auf Freigabe", en: "awaiting approval" },
      message: {
        de: "Empfehlung: Freigabelimit für Bestellungen unter 2.500 € automatisieren. 1.203 Fälle pro Jahr entfallen damit vollständig aus der manuellen Prüfung.",
        en: "Recommendation: automate the approval limit for orders below €2,500. That removes 1,203 cases per year from manual review entirely.",
      },
      highlight: {
        de: "1.203 Fälle pro Jahr entfallen damit vollständig",
        en: "That removes 1,203 cases per year from manual review entirely",
      },
      actions: [
        { de: "Maßnahme freigeben", en: "Approve action" },
        { de: "Owner zuweisen", en: "Assign owner" },
        { de: "Simulieren", en: "Simulate" },
      ],
    },
    log: {
      de: "action_agent.propose() → Freigabelimit 2.500 € · wartet auf OK",
      en: "action_agent.propose() → approval limit €2,500 · awaiting OK",
    },
  },
  {
    id: "impact",
    name: { de: "Impact", en: "Impact" },
    question: {
      de: "„Was bringt mir das — in Euro?“",
      en: "“What's in it for me — in euros?”",
    },
    headlineRest: {
      de: "der Business Case, bevor du investierst.",
      en: "the business case, before you invest.",
    },
    lede: {
      de: "Jede Maßnahme kommt mit gerechnetem Potenzial, nötigem Invest und Amortisationszeitpunkt. Du priorisierst nach Wirkung statt nach Lautstärke.",
      en: "Every action comes with calculated potential, required investment and payback point. You prioritise by impact instead of by who shouts loudest.",
    },
    capabilities: [
      {
        icon: "euro",
        title: { de: "Potenzial in Euro", en: "Potential in euros" },
        text: {
          de: "Hochgerechnet auf Fallzahl, Ressourcenkosten und Fehlerquote.",
          en: "Extrapolated from case volume, resource cost and error rate.",
        },
      },
      {
        icon: "trending",
        title: { de: "Amortisation", en: "Payback" },
        text: {
          de: "Ab welchem Monat die Maßnahme sich selbst trägt — als Kurve, nicht als Behauptung.",
          en: "From which month the action pays for itself — as a curve, not a claim.",
        },
      },
      {
        icon: "lock",
        title: { de: "Investitionsbedarf", en: "Investment required" },
        text: {
          de: "Aufwand, Lizenzen, interne Tage — bevor das Budget beantragt wird.",
          en: "Effort, licences, internal days — before the budget request goes out.",
        },
      },
    ],
    agent: {
      name: { de: "Impact Agent", en: "Impact Agent" },
      status: { de: "gerechnet", en: "calculated" },
      message: {
        de: "Potenzial 1,42 Mio. € p. a. bei 180 T€ Umsetzungsinvest. Break-even in Monat 5, danach 118 T€ Deckungsbeitrag pro Monat.",
        en: "Potential €1.42m p.a. at €180k implementation investment. Break-even in month 5, then €118k contribution margin per month.",
      },
      highlight: {
        de: "Potenzial 1,42 Mio. € p. a.",
        en: "Potential €1.42m p.a.",
      },
      metrics: [
        { label: { de: "Potenzial", en: "Potential" }, value: { de: "1,42 Mio €", en: "€1.42m" } },
        { label: { de: "Invest", en: "Investment" }, value: { de: "180 T€", en: "€180k" } },
        { label: { de: "Break-even", en: "Break-even" }, value: { de: "Monat 5", en: "Month 5" } },
        { label: { de: "ROI 1. Jahr", en: "ROI year 1" }, value: { de: "689 %", en: "689%" } },
      ],
    },
    log: {
      de: "impact_agent.calc() → 1,42 Mio € p. a. · Break-even M5",
      en: "impact_agent.calc() → €1.42m p.a. · break-even M5",
    },
  },
  {
    id: "feedback",
    name: { de: "Feedback", en: "Feedback" },
    question: {
      de: "„Hat es tatsächlich gewirkt?“",
      en: "“Did it actually work?”",
    },
    headlineRest: {
      de: "der Nachweis, nicht die Absicht.",
      en: "the proof, not the intention.",
    },
    lede: {
      de: "Nach dem Rollout misst Noreja gegen die Baseline weiter. Wirkt die Maßnahme, siehst du es in Zahlen. Wirkt sie nicht, startet der Loop von vorn — mit dem, was du inzwischen weißt.",
      en: "After rollout, Noreja keeps measuring against the baseline. If the action works, you see it in numbers. If it doesn't, the loop starts over — with what you know by now.",
    },
    capabilities: [
      {
        icon: "activity",
        title: { de: "Kennzahlen-Monitoring", en: "KPI monitoring" },
        text: {
          de: "Ist-Wirkung gegen Baseline und Zielwert, fortlaufend statt quartalsweise.",
          en: "Actual impact against baseline and target, continuously instead of quarterly.",
        },
      },
      {
        icon: "layout",
        title: { de: "Dynamische Dashboards", en: "Dynamic dashboards" },
        text: {
          de: "Sichten, die sich am Prozess ausrichten — nicht an der Datenbanktabelle.",
          en: "Views that follow the process — not the database table.",
        },
      },
      {
        icon: "refresh",
        title: { de: "Rückkopplung in Phase 1", en: "Feedback into phase 1" },
        text: {
          de: "Jede gemessene Wirkung schärft das Modell für die nächste Runde.",
          en: "Every measured effect sharpens the model for the next round.",
        },
      },
    ],
    agent: {
      name: { de: "Feedback Agent", en: "Feedback Agent" },
      status: { de: "live", en: "live" },
      message: {
        de: "12 Wochen nach Rollout: Durchlaufzeit −22 %, manuelle Eingriffe −41 %. Realisierter Effekt 1,31 Mio. € — 92 % der Prognose. Zwei neue Auffälligkeiten an Phase 1 übergeben.",
        en: "12 weeks after rollout: cycle time −22%, manual interventions −41%. Realised effect €1.31m — 92% of forecast. Two new anomalies handed over to phase 1.",
      },
      highlight: {
        de: "Durchlaufzeit −22 %",
        en: "cycle time −22%",
      },
      metrics: [
        { label: { de: "Durchlaufzeit", en: "Cycle time" }, value: { de: "−22 %", en: "−22%" } },
        { label: { de: "Prognosetreue", en: "Forecast accuracy" }, value: { de: "92 %", en: "92%" } },
        { label: { de: "Neue Signale", en: "New signals" }, value: { de: "2", en: "2" } },
      ],
    },
    log: {
      de: "feedback_agent.track() → Durchlaufzeit −22 % · 2 Signale → Phase 1",
      en: "feedback_agent.track() → cycle time −22% · 2 signals → phase 1",
    },
  },
];

/** Roster cards under "who turns the loop". */
export const agentRoster: {
  name: Localized;
  role: Localized;
  text: Localized;
  runs: Localized;
}[] = [
  {
    name: { de: "Insights Agent", en: "Insights Agent" },
    role: { de: "Findet die Ursache", en: "Finds the cause" },
    text: {
      de: "Durchsucht kausale Prozessmodelle nach dem Auslöser hinter der Auffälligkeit.",
      en: "Searches causal process models for the trigger behind the anomaly.",
    },
    runs: { de: "Phase 01 · läuft täglich", en: "Phase 01 · runs daily" },
  },
  {
    name: { de: "Action Agent", en: "Action Agent" },
    role: { de: "Schlägt Maßnahmen vor", en: "Proposes actions" },
    text: {
      de: "Formuliert, wer was tut — und stößt Workflows nach Freigabe direkt an.",
      en: "Spells out who does what — and triggers workflows once approved.",
    },
    runs: { de: "Phase 02 · Human-in-the-Loop", en: "Phase 02 · human-in-the-loop" },
  },
  {
    name: { de: "Impact Agent", en: "Impact Agent" },
    role: { de: "Rechnet den Case", en: "Runs the numbers" },
    text: {
      de: "Potenzial, Invest, Amortisation — pro Maßnahme, vor der Entscheidung.",
      en: "Potential, investment, payback — per action, before the decision.",
    },
    runs: { de: "Phase 03 · pro Maßnahme", en: "Phase 03 · per action" },
  },
  {
    name: { de: "Feedback Agent", en: "Feedback Agent" },
    role: { de: "Belegt die Wirkung", en: "Proves the effect" },
    text: {
      de: "Misst gegen Baseline und meldet zurück, wenn die Wirkung ausbleibt.",
      en: "Measures against the baseline and reports back if the effect fails to appear.",
    },
    runs: { de: "Phase 04 · dauerhaft aktiv", en: "Phase 04 · always on" },
  },
];

export interface EquipItem {
  label: Localized;
  /** Whether the chip starts in the active state. */
  on: boolean;
}

export interface AgentEquipment {
  agent: Localized;
  tools: EquipItem[];
  knowledge: EquipItem[];
}

/** Tool / knowledge-base configuration shown in the agent customiser. */
export const agentEquipment: AgentEquipment[] = [
  {
    agent: { de: "Insights Agent", en: "Insights Agent" },
    tools: [
      { label: { de: "Noreja Knowledge Graph", en: "Noreja knowledge graph" }, on: true },
      { label: { de: "SAP S/4HANA Connector", en: "SAP S/4HANA connector" }, on: true },
      { label: { de: "Event-Log-Parser", en: "Event log parser" }, on: true },
      { label: { de: "Anomalie-Detektor", en: "Anomaly detector" }, on: true },
      { label: { de: "Confluence", en: "Confluence" }, on: false },
      { label: { de: "Externe Knowledge Graphs", en: "External knowledge graphs" }, on: false },
      { label: { de: "Weitere Datenbanken", en: "Additional databases" }, on: false },
      { label: { de: "Snowflake", en: "Snowflake" }, on: false },
      { label: { de: "Conformance-Check", en: "Conformance check" }, on: false },
      { label: { de: "Salesforce", en: "Salesforce" }, on: false },
    ],
    knowledge: [
      { label: { de: "Soll-Prozessdokumentation", en: "Target process documentation" }, on: true },
      { label: { de: "Fehler- & Ausnahmekatalog", en: "Error & exception catalogue" }, on: true },
      { label: { de: "Kostenstellen-Stammdaten", en: "Cost centre master data" }, on: true },
      { label: { de: "Frühere Root-Cause-Analysen", en: "Previous root-cause analyses" }, on: false },
    ],
  },
  {
    agent: { de: "Action Agent", en: "Action Agent" },
    tools: [
      { label: { de: "ServiceNow", en: "ServiceNow" }, on: true },
      { label: { de: "SAP-Workflow-API", en: "SAP workflow API" }, on: true },
      { label: { de: "Microsoft Teams", en: "Microsoft Teams" }, on: true },
      { label: { de: "E-Mail-Versand", en: "Email dispatch" }, on: true },
      { label: { de: "Jira", en: "Jira" }, on: false },
      { label: { de: "Asana", en: "Asana" }, on: false },
      { label: { de: "RPA-Trigger (UiPath)", en: "RPA trigger (UiPath)" }, on: false },
    ],
    knowledge: [
      { label: { de: "Freigabe-Richtlinien", en: "Approval policies" }, on: true },
      { label: { de: "Rollen- & Zuständigkeitsmatrix", en: "Roles & responsibilities matrix" }, on: true },
      { label: { de: "Compliance-Vorgaben", en: "Compliance requirements" }, on: true },
      { label: { de: "Maßnahmen-Historie", en: "Action history" }, on: false },
    ],
  },
  {
    agent: { de: "Impact Agent", en: "Impact Agent" },
    tools: [
      { label: { de: "ROI-Kalkulator", en: "ROI calculator" }, on: true },
      { label: { de: "Prozess-Simulation", en: "Process simulation" }, on: true },
      { label: { de: "Kostenmodell-Engine", en: "Cost model engine" }, on: true },
      { label: { de: "Excel-/CSV-Export", en: "Excel / CSV export" }, on: false },
    ],
    knowledge: [
      { label: { de: "Interne Stundensätze", en: "Internal hourly rates" }, on: true },
      { label: { de: "Budget- & Investitionsrichtlinien", en: "Budget & investment policies" }, on: true },
      { label: { de: "Realisierte Effekte Vorjahre", en: "Realised effects, prior years" }, on: true },
      { label: { de: "Business-Case-Vorlagen", en: "Business case templates" }, on: false },
    ],
  },
  {
    agent: { de: "Feedback Agent", en: "Feedback Agent" },
    tools: [
      { label: { de: "KPI-Monitor", en: "KPI monitor" }, on: true },
      { label: { de: "Dashboard-Builder", en: "Dashboard builder" }, on: true },
      { label: { de: "Alerting (Slack / Teams)", en: "Alerting (Slack / Teams)" }, on: true },
      { label: { de: "Power BI Push", en: "Power BI push" }, on: false },
    ],
    knowledge: [
      { label: { de: "KPI-Definitionen", en: "KPI definitions" }, on: true },
      { label: { de: "Zielwerte & Baselines", en: "Targets & baselines" }, on: true },
      { label: { de: "SLA-Vereinbarungen", en: "SLA agreements" }, on: false },
      { label: { de: "Reporting-Kalender", en: "Reporting calendar" }, on: false },
    ],
  },
];

/** Short strip that sets up the loop: what process mining leaves undone. */
export const statusQuoGaps: { q: Localized; text: Localized }[] = [
  {
    q: { de: "Ursache?", en: "Cause?" },
    text: {
      de: "Ein Bottleneck ist sichtbar. Warum er entsteht, klärt ein dreiwöchiger Workshop.",
      en: "A bottleneck is visible. Why it happens takes a three-week workshop to work out.",
    },
  },
  {
    q: { de: "Maßnahme?", en: "Action?" },
    text: {
      de: "Die Analyse endet mit einem Report. Wer was tut, steht nicht drin.",
      en: "The analysis ends with a report. Who does what isn't in it.",
    },
  },
  {
    q: { de: "Business Case?", en: "Business case?" },
    text: {
      de: "Der ROI wird in Excel geschätzt — nach Bauchgefühl, vor dem Investment.",
      en: "ROI gets estimated in Excel — by gut feeling, before the investment.",
    },
  },
  {
    q: { de: "Wirkung?", en: "Effect?" },
    text: {
      de: "Ob die Maßnahme etwas gebracht hat, weiß nach zwölf Monaten niemand mehr.",
      en: "Whether the action achieved anything, nobody remembers twelve months later.",
    },
  },
];

/** Comparison table: classic process mining vs. the loop. */
export const comparisonRows: { phase: Localized; classic: Localized; noreja: Localized }[] = [
  {
    phase: { de: "Insights", en: "Insights" },
    classic: { de: "Zeigt Varianten und Kennzahlen", en: "Shows variants and metrics" },
    noreja: { de: "Nennt die kausale Ursache", en: "Names the causal root" },
  },
  {
    phase: { de: "Action", en: "Action" },
    classic: { de: "Report für den Fachbereich", en: "Report for the business unit" },
    noreja: {
      de: "Konkrete Maßnahme, auf Freigabe ausführbar",
      en: "Concrete action, executable on approval",
    },
  },
  {
    phase: { de: "Impact", en: "Impact" },
    classic: { de: "ROI-Schätzung in Excel", en: "ROI estimate in Excel" },
    noreja: {
      de: "Gerechneter Case mit Amortisationszeitpunkt",
      en: "Calculated case with a payback point",
    },
  },
  {
    phase: { de: "Feedback", en: "Feedback" },
    classic: { de: "Nächstes Projekt in 12 Monaten", en: "Next project in 12 months" },
    noreja: {
      de: "Laufende Wirkungsmessung, Rückkopplung in Phase 1",
      en: "Continuous impact measurement, fed back into phase 1",
    },
  },
];

/**
 * The hero headline words. Derived from the phase names on purpose, so the
 * headline and the ring labels can never drift apart — that identity is what
 * makes the connection between the two readable.
 */
export const heroWords = (language: Language) =>
  loopPhases.map((phase) => `${phase.name[language]}.`);

/** Copy for the loop teaser on the homepage. */
export const homeTeaserCopy = {
  eyebrow: {
    de: "Die Noreja Plattform",
    en: "The Noreja platform",
  },
  headline: {
    de: "Ein Kreislauf statt einzelner Analysen —",
    en: "One loop instead of one-off analyses —",
  },
  headlineHighlight: {
    de: "BPM auf Autopilot",
    en: "BPM on autopilot",
  },
  lede: {
    de: "Insights, Action, Impact, Feedback: Vier generische Agententypen drehen den Zyklus von der Ursache eines Prozessproblems bis zum belegten Euro-Effekt — jeder davon auf deine Systeme, Rollen und Richtlinien anpassbar.",
    en: "Insights, action, impact, feedback: four generic agent types turn the cycle from the cause of a process problem to the proven euro effect — each one adaptable to your systems, roles and policies.",
  },
  cta: { de: "Erfahre mehr", en: "Learn more" },
  ctaHint: {
    de: "Alle vier Phasen im Detail",
    en: "All four phases in detail",
  },
} satisfies Record<string, Localized>;

/** Section-level copy. */
export const platformCopy = {
  heroEyebrow: {
    de: "Plattform",
    en: "Platform",
  },
  /**
   * Static lead-in line of the H1, above the four stacked phase names. The
   * phase names alone carry no topic — this line is what tells a reader (and a
   * search or answer engine) what the page is about.
   */
  heroHeadingLead: {
    de: "Noreja durchläuft vier Phasen",
    en: "Noreja runs through four phases",
  },
  heroLedeBefore: {
    de: "Noreja liefert keine weitere Sammlung von Dashboards, sondern ",
    en: "Noreja doesn't ship another pile of dashboards. It delivers ",
  },
  heroLedeStrong: {
    de: "Process Intelligence auf Autopilot",
    en: "process intelligence on autopilot",
  },
  heroLedeAfter: {
    de: ". Agentic AI dreht einen geschlossenen Kreislauf aus vier Phasen — von der Ursache eines Prozessproblems bis zum belegten Euro-Effekt. Rund um die Uhr, ohne die manuelle Analysearbeit, die dich das heute kostet.",
    en: ". Agentic AI turns a closed loop of four phases — from the cause of a process problem to the proven euro effect. Around the clock, without the manual analysis work it costs you today.",
  },
  heroCtaPrimary: { de: "Den Loop ansehen", en: "See the loop" },
  heroCtaSecondary: { de: "Was Stillstand kostet", en: "What standing still costs" },
  heroTrust: {
    de: ["4 Phasen", "4 anpassbare Agententypen", "24/7 im Betrieb", "1 kausales Prozessmodell"],
    en: ["4 phases", "4 customisable agent types", "24/7 in operation", "1 causal process model"],
  } as Record<Language, string[]>,
  /** Centre of the ring: completed passes and the potential found across them. */
  ledgerIterations: { de: "Durchläufe", en: "Iterations" },
  ledgerPotential: { de: "Generierter ROI", en: "ROI generated" },

  problemEyebrow: {
    de: "Warum Feature-Listen nicht verkaufen",
    en: "Why feature lists don't sell",
  },
  problemHeadBefore: { de: "Process Mining zeigt dir, ", en: "Process mining shows you " },
  problemHeadStrike: { de: "was passiert", en: "what happens" },
  problemHeadAfter: {
    de: ". Den Rest machen bis heute Menschen.",
    en: ". Everything after that is still done by people.",
  },

  loopEyebrow: { de: "Die Lösung", en: "The solution" },
  loopHeadline: {
    de: "Vier Phasen. Ein Kreislauf. BPM auf Autopilot.",
    en: "Four phases. One loop. BPM on autopilot.",
  },
  loopLede: {
    de: "Jede Phase erzeugt den Input für die nächste — und Phase 4 startet Phase 1 neu. Das ist der Unterschied zwischen einem Analyse-Projekt und einem System, das deine Prozesse dauerhaft besser macht.",
    en: "Each phase produces the input for the next — and phase 4 restarts phase 1. That's the difference between an analysis project and a system that keeps making your processes better.",
  },
  loopPhaseOf: { de: "Phase {n} / 4", en: "Phase {n} / 4" },
  agentLogLabel: { de: "Agent-Log", en: "Agent log" },
  phaseBadge: { de: "Phase {n}", en: "Phase {n}" },

  agentsEyebrow: { de: "Wer den Loop dreht", en: "Who turns the loop" },
  agentsHeadline: {
    de: "Ein Agenten-System, das für dich 24/7 im Hintergrund arbeitet",
    en: "An agent system that works for you 24/7 in the background",
  },
  agentsLede: {
    de: "Vier generische Agententypen, einer je Phase. Sie übergeben aneinander, dokumentieren jeden Schritt und holen sich eine Freigabe, bevor etwas passiert. Kein starres Produkt: Jeden Typ richtest du auf deine Prozesse, Systeme und Richtlinien aus.",
    en: "Four generic agent types, one per phase. They hand over to each other, document every step and ask for approval before anything happens. Not a fixed product: you shape each type around your processes, systems and policies.",
  },

  equipEyebrow: { de: "Deine Agenten, dein Kontext", en: "Your agents, your context" },
  equipHeadline: {
    de: "Generisch ausgeliefert, spezifisch gemacht.",
    en: "Shipped generic, made specific.",
  },
  equipLedeBefore: { de: "Jeder Agent lässt sich mit eigenen ", en: "Every agent can be equipped with your own " },
  equipLedeTools: { de: "Tools", en: "tools" },
  equipLedeAnd: { de: " und ", en: " and " },
  equipLedeKb: { de: "Knowledge Bases", en: "knowledge bases" },
  equipLedeAfter: {
    de: " ausstatten — deine Systeme, deine Richtlinien, deine Kennzahlendefinitionen. Aus vier generischen Agententypen werden so vier Agenten, die dein Unternehmen kennen.",
    en: " — your systems, your policies, your KPI definitions. That turns four generic agent types into four agents that know your company.",
  },
  equipTools: { de: "Tools", en: "Tools" },
  equipKnowledge: { de: "Knowledge Bases", en: "Knowledge bases" },
  equipAddTool: { de: "+ eigenes Tool anbinden", en: "+ connect your own tool" },
  equipAddKb: { de: "+ eigene Wissensquelle", en: "+ add your own source" },
  equipSummary: {
    de: "{agent} ausgestattet mit {t} Tools und {k} Knowledge Bases",
    en: "{agent} equipped with {t} tools and {k} knowledge bases",
  },
  equipHint: {
    de: "Chips anklicken zum Aktivieren · Konfiguration pro Agent",
    en: "Click chips to activate · configured per agent",
  },

  compareEyebrow: { de: "Einordnung", en: "In context" },
  compareHeadline: {
    de: "Klassisches Process Mining endet dort, wo Noreja anfängt.",
    en: "Classic process mining ends where Noreja begins.",
  },
  comparePhase: { de: "Phase", en: "Phase" },
  compareClassic: { de: "Klassisches Process Mining", en: "Classic process mining" },
  compareNoreja: { de: "Noreja Loop", en: "Noreja loop" },

  closeEyebrow: { de: "Nächster Schritt", en: "Next step" },
  closeHeadline: {
    de: "Wir drehen den Loop einmal mit deinen Daten.",
    en: "We'll turn the loop once with your data.",
  },
  closeLede: {
    de: "In einer 45-minütigen Demo zeigen wir, welches Potenzial in den Durchläufen durch die vier Phasen an einem deiner Prozesse steckt — inklusive gerechnetem Business Case.",
    en: "In a 45-minute demo we walk through the potential of iterating through the four phases on one of your processes — including a calculated business case.",
  },
  closeCtaPrimary: { de: "Demo vereinbaren", en: "Book a demo" },
  closeCtaSecondary: { de: "Preise ansehen", en: "See pricing" },
  closeCtaTertiary: { de: "Anbietervergleich", en: "Vendor comparison" },
} satisfies Record<string, Localized | Record<Language, string[]>>;
