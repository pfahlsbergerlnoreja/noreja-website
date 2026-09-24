import type { Language } from './translations';
import salesRework from '@/assets/processes/lead-to-activation/sales-rework.webp';
import constructionSeasonality from '@/assets/processes/lead-to-activation/construction-seasonality.webp';
import handoverCompliance from '@/assets/processes/lead-to-activation/handover-compliance.webp';
import tradeCoordination from '@/assets/processes/lead-to-activation/trade-coordination.webp';
import impactBoard from '@/assets/processes/lead-to-activation/impact-board.webp';
import minervaSummary from '@/assets/processes/lead-to-activation/minerva-summary.webp';
import filingBeforeApproval from '@/assets/processes/premium-to-tax/filing-before-approval.webp';
import calculationRework from '@/assets/processes/premium-to-tax/calculation-rework.webp';
import approvalRework from '@/assets/processes/premium-to-tax/approval-rework.webp';
import stopAfterReconciliation from '@/assets/processes/premium-to-tax/stop-after-reconciliation.webp';
import filedNotPaid from '@/assets/processes/premium-to-tax/filed-not-paid.webp';

/**
 * End-to-end process pages (/de/prozesse/:processSlug, /en/processes/:processSlug).
 *
 * One entry per process; the page (src/pages/EndToEndProcess.tsx), the page
 * meta (src/lib/pageMeta.ts) and the sitemap (scripts/generate-sitemap.ts,
 * which reads the `id` lines of this array with a regex) all derive from it.
 * Adding a process means adding an entry here — nothing else.
 *
 * Content is plain data resolved at import time, so the prerendered HTML
 * already carries the full page text for crawlers and answer engines.
 */

export interface ProcessImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}

export interface ProcessContent {
  /** Short industry / scenario label shown in the hero badge. */
  scenario: string;
  metaTitle: string;
  metaDescription: string;
  /** Sub-headline under the H1. */
  tagline: string;
  /** Answer-first definition of the process — the paragraph answer engines quote. */
  definition: string;
  demoNote: string;

  keyFacts: Array<{ value: string; label: string; detail: string }>;

  phasesHeading: string;
  phasesLead: string;
  phases: Array<{
    title: string;
    summary: string;
    /** Either a linear sequence of steps … */
    steps?: string[];
    /** … or parallel strands that have to join again. */
    strands?: Array<{ name: string; steps: string[] }>;
    objects: string[];
    question: string;
  }>;
  objectsNote: string;

  findingsHeading: string;
  findingsLead: string;
  findings: Array<{
    area: string;
    title: string;
    metric: string;
    metricLabel: string;
    text: string[];
    shift: { from: string; to: string };
    image?: ProcessImage;
    note?: { title: string; text: string };
  }>;

  /** Context objects that enrich the analysis without being happy-path steps. */
  contextObjects?: { heading: string; lead: string; items: Array<{ name: string; text: string }> };

  /** Minerva time levers — only for cases that include a Minerva summary. */
  levers?: {
    heading: string;
    lead: string;
    rows: Array<{ area: string; statement: string; lever: string; value: string }>;
    image: ProcessImage;
  };

  /** Impact Board prioritisation — only for cases that include one. */
  measures?: {
    heading: string;
    lead: string;
    quadrants: Array<{ name: string; text: string }>;
    costCategories: string[];
    items: Array<{ measure: string; benefit: string }>;
    image: ProcessImage;
  };

  /** Open analysis questions the dataset makes answerable. */
  analysisQuestions?: { heading: string; lead: string; items: string[] };

  loop?: {
    heading: string;
    lead: string;
    steps: Array<{ step: string; text: string }>;
    questions: string[];
  };

  principlesHeading: string;
  principles: Array<{ title: string; text: string }>;

  faq: Array<{ question: string; answer: string }>;

  caseHeading: string;
  caseText: string;
  caseCta: string;
}

export interface EndToEndProcess {
  id: string;
  /** Process name, used as the H1 in both languages. */
  name: string;
  /** Full case description in the Help Center. */
  caseUrl: string;
  /** ISO date of the last content change, for the Article schema. */
  dateModified: string;
  content: Record<Language, ProcessContent>;
}

const IMG = {
  salesRework: { src: salesRework, width: 2000, height: 391 },
  constructionSeasonality: { src: constructionSeasonality, width: 2000, height: 496 },
  handoverCompliance: { src: handoverCompliance, width: 2000, height: 539 },
  tradeCoordination: { src: tradeCoordination, width: 2000, height: 619 },
  impactBoard: { src: impactBoard, width: 2000, height: 1204 },
  minervaSummary: { src: minervaSummary, width: 1340, height: 685 },
  filingBeforeApproval: { src: filingBeforeApproval, width: 872, height: 477 },
  calculationRework: { src: calculationRework, width: 971, height: 467 },
  approvalRework: { src: approvalRework, width: 927, height: 430 },
  stopAfterReconciliation: { src: stopAfterReconciliation, width: 937, height: 455 },
  filedNotPaid: { src: filedNotPaid, width: 1297, height: 437 },
};

export const endToEndProcesses: EndToEndProcess[] = [
  {
    id: 'lead-to-activation',
    name: 'Lead-to-Activation',
    caseUrl: 'https://docs.noreja.com/de/article/lead-to-activation-fernwarmeanschluss',
    dateModified: '2026-09-23',
    content: {
      de: {
        scenario: 'End-to-End-Prozess · Fernwärmeanschluss',
        metaTitle: 'Lead-to-Activation Prozess: Process Mining im Fernwärmeanschluss | Noreja',
        metaDescription:
          'Lead-to-Activation vom Lead bis zum Lieferbeginn: Prozessphasen, Geschäftsobjekte und vier Findings aus einer Process-Mining-Analyse im Fernwärmeanschluss – Angebots-Nacharbeit, saisonale Bauzeiten, Compliance und Gewerkekoordination.',
        tagline:
          'Vom ersten Kundeninteresse bis zum Lieferbeginn: wie Process Intelligence Nacharbeit, saisonale Bauzeiten und Compliance-Risiken im Fernwärmeanschluss sichtbar macht – und in priorisierte Maßnahmen übersetzt.',
        definition:
          'Lead-to-Activation ist der End-to-End-Prozess vom angelegten Lead bis zur aktiven Leistung beim Kunden. Im Fernwärmeanschluss umfasst er Vertrieb und Angebot, die parallele Koordination von Tiefbau, Material und Hausanschluss, Bau und Inbetriebnahme sowie Übergabeprotokoll, Abrechnung und Lieferbeginn. Aus Kundensicht klingt das einfach – Interesse, Angebot, Vertrag, Bau, Anschluss, Wärme. Tatsächlich gehört er zu den komplexesten Prozessen der Energieversorgung.',
        demoNote:
          'Hinweis: Die gezeigten Kennzahlen stammen aus einem synthetischen Demonstrationsdatensatz. Sie veranschaulichen Analysewege und methodische Zusammenhänge und sind keine Produktivkennzahlen eines Kunden.',

        keyFacts: [
          {
            value: '13 %',
            label: 'Angebote in Nacharbeit',
            detail: '154 von 1.208 Vorgängen zwischen Angebotserstellung und -versand',
          },
          {
            value: '+20 Tage',
            label: 'Baudauer im Winter',
            detail: 'Wiederkehrendes saisonales Muster von November bis März',
          },
          {
            value: '121',
            label: 'Lieferbeginn vor Protokoll',
            detail: 'Anschlüsse liefern vor finalisiertem Übergabeprotokoll, 45 überspringen es ganz',
          },
          {
            value: '119',
            label: 'Fehlende Genehmigungen',
            detail: 'von 1.208 Fällen ohne rechtzeitige behördliche Genehmigung vor Baustart',
          },
        ],

        phasesHeading: 'Der Prozess in vier Phasen',
        phasesLead:
          'Schon vor dem Auftrag liegen Informationen in unterschiedlichen Systemen und Objekten. Nach dem Auftrag verzweigt der Ablauf in parallele Stränge, die vor Bau, Inbetriebnahme, Abrechnung und Lieferbeginn wieder zusammengeführt werden müssen.',
        phases: [
          {
            title: 'Vertrieb: vom Lead zum Auftrag',
            summary:
              'Ein Lead wird angelegt und qualifiziert. Für qualifizierte Leads folgt eine technische Kalkulation, auf deren Basis das Angebot erstellt, versendet und schließlich als Vertrag unterzeichnet wird.',
            steps: [
              'Lead angelegt',
              'Lead qualifiziert',
              'Technische Kalkulation abgeschlossen',
              'Angebot erstellt',
              'Angebot versendet',
              'Vertrag unterzeichnet',
              'Auftrag erhalten',
            ],
            objects: ['Lead', 'Kalkulation', 'Angebot', 'Vertrag', 'Auftrag'],
            question: 'Wie oft muss ein Angebot zurück in die Nacharbeit – und warum?',
          },
          {
            title: 'Gewerkekoordination: parallele Stränge bis zum Baustart',
            summary:
              'Nach dem Auftrag laufen mehrere Stränge gleichzeitig. Sie haben unterschiedliche Laufzeiten, Objekte und Kardinalitäten – ein einzelner Anschluss kann mehrere Bestellungen, Lieferungen und Rechnungen erzeugen.',
            strands: [
              {
                name: 'Hausanschluss & Bauplanung',
                steps: ['Auftragsposition Installation', 'PSP-Element', 'Auftragsplan', 'Installationsplanung'],
              },
              {
                name: 'Fremdleistung & Tiefbau',
                steps: ['Auftragsposition Fremdleistung', 'Bestellung Subunternehmer', 'Behördliche Genehmigung'],
              },
              {
                name: 'Material: Rohre, Kabel, Anlagen',
                steps: ['Bestellung', 'Lieferung', 'Rechnungseingang', 'Zahlung'],
              },
            ],
            objects: ['Auftragsposition', 'PSP-Element', 'Bestellung', 'Lieferung', 'Rechnung', 'Genehmigung'],
            question: 'Welche Voraussetzung hält den gemeinsamen nächsten Schritt – den Baustart – zurück?',
          },
          {
            title: 'Bau & Inbetriebnahme',
            summary:
              'Erst wenn alle Stränge zusammengeführt sind, beginnt die Baudurchführung. Auf das Bauende folgen Abnahme und technische Inbetriebnahme. Werden mehrere Anschlüsse zu einer Tiefbaumaßnahme gebündelt, hängen die Fälle zusätzlich voneinander ab.',
            steps: ['Baudurchführung Start', 'Baudurchführung Ende', 'Abnahme', 'Inbetriebnahme'],
            objects: ['Baumaßnahme', 'Anschluss', 'Abnahme'],
            question: 'Welcher Teil der Bauausführung wird langsamer, ab wann, wie stark – und wiederholt es sich?',
          },
          {
            title: 'Übergabe, Abrechnung & Lieferbeginn',
            summary:
              'Das Übergabeprotokoll muss vor dem Lieferbeginn bestimmte Zustände erreichen. Parallel läuft die kaufmännische Finalisierung mit der Faktura.',
            steps: [
              'Übergabeprotokoll erstellt',
              'Übergabeprotokoll in Bearbeitung',
              'Übergabeprotokoll finalisiert',
              'Faktura',
              'Lieferbeginn',
            ],
            objects: ['Übergabeprotokoll', 'Rechnung', 'Liefervertrag'],
            question: 'Waren zum Zeitpunkt des Lieferbeginns alle Voraussetzungen erfüllt?',
          },
        ],
        objectsNote:
          'Ein Geschäftsfall ist nicht dasselbe wie ein einzelnes Geschäftsobjekt. Entscheidend ist, dass die Analyse Objekte und ihre Beziehungen erhält, statt sie früh in einen flachen Eventlog zu aggregieren – nur so lässt sich jedes Finding bis zu den betroffenen Aufträgen, Bestellungen oder Protokollen zurückverfolgen.',

        findingsHeading: 'Vier Findings entlang des Prozesses',
        findingsLead:
          'Die folgenden Auffälligkeiten wurden mit Noreja aufgedeckt. Jede beantwortet eine konkrete Fachfrage – und verschiebt sie von „Was ist passiert?“ zu „Warum ist es passiert und was folgt daraus?“.',
        findings: [
          {
            area: 'Vertrieb',
            title: 'Jedes achte Angebot geht zurück in die Nacharbeit',
            metric: '154 / 1.208',
            metricLabel: 'Nachbearbeitungen zwischen „Angebot erstellt“ und „Angebot versendet“ (≈ 13 %)',
            text: [
              'Statt jede Wiederholung als neue Prozessvariante zu zählen, wird sie fachlich als Nachbearbeitung interpretiert: ein wiederkehrendes Rework-Muster, das den Vertragsabschluss verzögert und Vertriebskapazität bindet.',
              'Dasselbe Muster tritt später erneut auf: In der Faktura ist in rund 106 von 1.089 Vorgängen eine spätere Nachbearbeitung sichtbar. Rework ist damit kein Einzelfall einer Abteilung, sondern ein prozessübergreifendes Thema.',
            ],
            shift: { from: 'Welche Variante ist das?', to: 'Welches Fehlermuster liegt vor, warum entsteht es und welche Auswirkung hat es?' },
            image: {
              ...IMG.salesRework,
              alt: 'Prozessgraph Vertrieb im Fernwärmeanschluss: Rückläufer von „Offer sent“ zu „Offer prepared“ als Nacharbeit markiert',
              caption: 'Nacharbeit im Angebotsprozess: Rückläufer zwischen „Offer prepared“ und „Offer sent“.',
            },
          },
          {
            area: 'Bau',
            title: 'Die Baudurchführung wird im Winter systematisch langsamer',
            metric: '≈ 20 Tage',
            metricLabel: 'längere Baudurchführung in den Wintermonaten',
            text: [
              'Eine lange Durchlaufzeit in einem einzelnen Fall sagt wenig aus. Deshalb wird dieselbe Aktivität über alle Prozessinstanzen betrachtet und daraus eine Zeitreihe erzeugt: Ab November steigt die Dauer der Baudurchführung spürbar an, bleibt über die Wintermonate erhöht und geht ab April wieder zurück.',
              'Die Zeitreihe bleibt mit der Prozessstruktur verbunden und lässt sich auf konkrete Zeiträume, Fälle und Objekte zurückführen.',
            ],
            shift: { from: 'Ist der Prozess im Winter langsamer?', to: 'Welcher konkrete Teil wird langsamer, ab wann, wie stark – und wiederholt es sich?' },
            image: {
              ...IMG.constructionSeasonality,
              alt: 'Zeitreihe der Dauer von Baudurchführung Start bis Ende, Mai 2025 bis Mai 2026, mit deutlichem Anstieg ab November',
              caption: 'Zeitreihe der Baudurchführung (Start → Ende): Anstieg der Dauer über die Wintermonate.',
            },
          },
          {
            area: 'Compliance',
            title: 'Lieferbeginn vor finalisiertem Übergabeprotokoll',
            metric: '121 · 45',
            metricLabel: 'Anschlüsse liefern vor Finalisierung (≈ 11 %) · Finalisierung ganz übersprungen (4,1 %)',
            text: [
              'Das Übergabeprotokoll muss vor dem Lieferbeginn bestimmte Zustände erreichen. Die fachliche Frage wird damit wichtiger als die reine Eventfolge.',
              'Gerade bei Vor-Ort-Prozessen ist eine Unterscheidung entscheidend: Ein verspäteter Zeitstempel im ERP – etwa durch fehlende Konnektivität oder spätere Synchronisierung – muss nicht bedeuten, dass der reale Prozess verspätet war. Prozessfehler und Datenfehler sehen im Eventlog gleich aus, erfordern aber völlig unterschiedliche Maßnahmen.',
            ],
            shift: { from: 'In welcher Reihenfolge liefen die Events?', to: 'Waren zum Zeitpunkt des Lieferbeginns alle Voraussetzungen erfüllt?' },
            image: {
              ...IMG.handoverCompliance,
              alt: 'Prozessgraph Übergabeprotokoll: Pfade von „Handover Report created“ und „in progress“ direkt zu „Start Delivery“, am Zustand „finalised“ vorbei',
              caption: 'Compliance-Sicht auf die Übergabeprotokolle: nicht alle Anschlüsse erreichen die erwarteten Zustände vor dem Lieferbeginn.',
            },
          },
          {
            area: 'Gewerkekoordination',
            title: 'Der Baustart hängt an mehreren Voraussetzungen gleichzeitig',
            metric: '393 · 119',
            metricLabel: 'Anlagen bei Zweitlieferant beschafft · Fälle ohne rechtzeitige Genehmigung',
            text: [
              'Nicht eine einzelne Aktivität bestimmt, wann gebaut werden kann – mehrere Voraussetzungen müssen gemeinsam erfüllt sein. 393 Anlagen mussten bei einem anderen Lieferanten beschafft werden, weil der erste nicht liefern konnte; in 119 von 1.208 Fällen fehlt die rechtzeitige behördliche Genehmigung; in Einzelfällen startet der Bau trotz abgeschlossener Technik nicht, weil eine kaufmännische Voraussetzung wie die Kundenanzahlung fehlt.',
              'Das ist der Kern der kausalen Prozesslogik: nicht nur zu kennen, was passiert ist, sondern welche Voraussetzung fehlt, damit der nächste Schritt erfolgen kann.',
            ],
            shift: { from: 'Welche Aktivität dauert am längsten?', to: 'Welche Voraussetzung hält den gemeinsamen nächsten Schritt zurück?' },
            image: {
              ...IMG.tradeCoordination,
              alt: 'Prozessgraph der parallelen Gewerke vor dem Baustart: Installation, Fremdleistung sowie Materialstränge für Rohre, Kabel und Anlagen',
              caption: 'Parallele Gewerke vor dem Baustart: Fremdleistung, Hausanschluss und Materialstränge laufen gleichzeitig.',
            },
            note: {
              title: 'Ursachen außerhalb des einzelnen Falls',
              text: 'Werden mehrere Anschlüsse zu einer gemeinsamen Tiefbaumaßnahme gebündelt, kann ein fertiger Anschluss auf einen anderen warten. In der isolierten Fallhistorie wäre das nur eine unerklärliche Liegezeit – erst die Beziehung zu den anderen Instanzen erklärt sie. Solche Cross-Instance-Abhängigkeiten sind ein starkes Argument für einen graphbasierten Analyseansatz.',
            },
          },
        ],

        levers: {
          heading: 'Wo die größten Zeithebel liegen',
          lead:
            'Der KI-Assistent Minerva fasst die Prozessbereiche zusammen und benennt die größten Zeithebel. Der Prozessmanager beginnt mit einer Fachfrage – statt zuerst View, Filter und Visualisierung wählen zu müssen.',
          rows: [
            {
              area: 'Vertrieb',
              statement: 'Hohe Überführung qualifizierter Leads in Aufträge',
              lever: 'Technische Kalkulation bis Angebot',
              value: '27 Tage',
            },
            {
              area: 'Gewerkekoordination',
              statement: 'Mehrere parallele Voraussetzungen bestimmen den Baustart',
              lever: 'Tiefbaugenehmigung bis Baustart',
              value: '77,8 Tage',
            },
            {
              area: 'Anschluss & Inbetriebnahme',
              statement: 'Stabiler Ablauf, aber lange Bau- und Abnahmephase',
              lever: 'Baudurchführung plus Wartezeit bis Abnahme',
              value: '69,2 Tage',
            },
            {
              area: 'Übergabeprotokolle',
              statement: 'Dokumentationsmarker vor Auftragseingang',
              lever: 'Zeitwirkung nicht messbar',
              value: '–',
            },
          ],
          image: {
            ...IMG.minervaSummary,
            alt: 'Minerva-Management-Summary zur Prozessanalyse Vertrieb, Bau und Inbetriebnahme mit Tabelle der Zeithebel und priorisiertem Maßnahmenplan',
            caption: 'Minerva fasst Prozessbereiche zusammen und identifiziert die größten Zeithebel.',
          },
        },

        measures: {
          heading: 'Vom Finding zur priorisierten Maßnahme',
          lead:
            'Ein Finding verbessert noch keinen Prozess. Im Impact Board werden Findings nach Wirkung, Umsetzungsaufwand und Ungewissheit bewertet – Process Excellence und Fachbereich entscheiden gemeinsam, welche Maßnahme sich wirtschaftlich und organisatorisch lohnt.',
          quadrants: [
            { name: 'Quick Wins', text: 'Hohe Wirkung, geringer Aufwand' },
            { name: 'Strategisch', text: 'Hohe Wirkung, höherer Aufwand' },
            { name: 'Low Priority', text: 'Geringe Wirkung, geringer Aufwand' },
            { name: 'Verschieben', text: 'Geringe Wirkung, hoher Aufwand' },
          ],
          costCategories: [
            'Wartezeit',
            'Ressourcenverschwendung',
            'SLA-Verletzung',
            'Kapitalbindung',
            'Entgangener Umsatz',
            'Compliance-Risiko',
            'Nacharbeit',
          ],
          items: [
            { measure: 'Genehmigungs- und Baustartsteuerung bündeln', benefit: 'Verkürzung des größten Engpasses von 77,8 Tagen' },
            { measure: 'Bauplanung mit verbindlichem Baustart-Freigabeprozess verbinden', benefit: 'Reduktion der 55,7 Tage nach Planungsende' },
            { measure: 'Technische Kalkulation und Angebotserstellung standardisieren', benefit: 'Verkürzung der 27 Tage im Vertrieb' },
            { measure: 'Übergabeprotokolle zeitlich und fachlich vollständig erfassen', benefit: 'Transparenz über Dokumentations- und Übergabeverzögerungen' },
            { measure: 'Bauabnahme frühzeitig vorbereiten', benefit: 'Reduktion der 27,8 Tage zwischen Bauende und Abnahmebeginn' },
            { measure: 'Rechnungs- und Lieferantenfreigaben analysieren', benefit: 'Weniger Wartezeit nach Lieferungen und weniger Rechnungskorrekturen' },
            { measure: 'Mehrfachbestellungen transparent machen', benefit: 'Reduktion vermeidbarer Beschaffungs- und Koordinationsschleifen' },
          ],
          image: {
            ...IMG.impactBoard,
            alt: 'Noreja Impact Board mit Impact-/Aufwand-Matrix: Findings des Fernwärmeanschlusses eingeordnet als Quick Wins, strategisch, Low Priority und verschieben',
            caption: 'Impact-/Aufwand-Matrix: Findings werden nach Wirkung und Umsetzungsaufwand priorisiert.',
          },
        },

        loop: {
          heading: 'Der Kreislauf: Insight → Action → Impact → Feedback',
          lead:
            'Der Verbesserungsprozess endet nicht bei der Umsetzung. Die Frage lautet nicht „Haben wir jetzt KI eingesetzt?“, sondern „Ist der Prozess dadurch schneller, stabiler oder qualitativ besser geworden?“',
          steps: [
            { step: 'Insight', text: 'Fehlermuster, Zeitreihe oder fehlende Voraussetzung erkennen' },
            { step: 'Action', text: 'Maßnahme ableiten, bewerten und priorisieren' },
            { step: 'Impact', text: 'Wirkung wirtschaftlich beziffern und umsetzen' },
            { step: 'Feedback', text: 'Wirkung erneut gegen die Prozessdaten messen' },
          ],
          questions: [
            'Hat sich die Durchlaufzeit tatsächlich verbessert?',
            'Ist ein Fehlermuster seltener geworden?',
            'Hat sich der betroffene Prozessabschnitt stabilisiert?',
            'Ist die erwartete Wirkung tatsächlich eingetreten?',
          ],
        },

        principlesHeading: 'Vier Prinzipien für die Analyse',
        principles: [
          { title: 'Granularität erhalten', text: 'Geschäftsobjekte und ihre Beziehungen werden nicht früh in einen flachen Eventlog aggregiert.' },
          { title: 'Komplexität fachlich reduzieren', text: 'Analysen beantworten konkrete Prozessfragen, ohne die zugrunde liegenden Informationen zu verlieren.' },
          { title: 'Ursachen statt nur Auffälligkeiten', text: 'Prozessverhalten wird gegen fachliche und kausale Abhängigkeiten bewertet.' },
          { title: 'Erkenntnisse operationalisieren', text: 'Findings werden zu Maßnahmen, wirtschaftlich bewertet und anschließend wieder gegen die Prozessdaten gemessen.' },
        ],

        faq: [
          {
            question: 'Was ist ein Lead-to-Activation-Prozess?',
            answer:
              'Lead-to-Activation ist der End-to-End-Prozess vom angelegten Lead bis zur aktiven Leistung beim Kunden. Im Fernwärmeanschluss reicht er von Lead-Qualifizierung, technischer Kalkulation, Angebot und Vertrag über die Koordination von Tiefbau, Material und Hausanschluss sowie Bau und Inbetriebnahme bis zu Übergabeprotokoll, Abrechnung und Lieferbeginn.',
          },
          {
            question: 'Warum ist der Fernwärmeanschluss für Process Mining besonders anspruchsvoll?',
            answer:
              'Weil der Prozess nach dem Auftrag in mehrere parallele Stränge verzweigt – Tiefbau beziehungsweise Fremdleistung, Materialbeschaffung, Hausanschluss und kaufmännische Voraussetzungen – mit unterschiedlichen Laufzeiten und Kardinalitäten. Ein Anschluss erzeugt mehrere Bestellungen, Lieferungen und Rechnungen, und gebündelte Tiefbaumaßnahmen schaffen Abhängigkeiten zwischen Fällen. Eine einzige Prozesskarte oder ein flacher Eventlog bildet das nicht ab.',
          },
          {
            question: 'Welche Engpässe zeigt die Analyse im Lead-to-Activation-Prozess?',
            answer:
              'Rund 13 % der Angebote gehen in die Nacharbeit (154 von 1.208), die Baudurchführung dauert im Winter rund 20 Tage länger, 121 Anschlüsse beginnen die Lieferung vor finalisiertem Übergabeprotokoll, und der Baustart hängt an mehreren Voraussetzungen – etwa fehlenden Genehmigungen in 119 Fällen. Der größte Zeithebel liegt zwischen Tiefbaugenehmigung und Baustart mit 77,8 Tagen.',
          },
          {
            question: 'Wie unterscheidet man einen Prozessfehler von einem Datenfehler?',
            answer:
              'Im Eventlog sehen beide gleich aus. Ein verspäteter Zeitstempel im ERP kann durch fehlende Konnektivität oder spätere Synchronisierung vor Ort entstehen, ohne dass der reale Prozess verspätet war. Erst die fachliche Bewertung gegen Objekte, Zustände und Abhängigkeiten zeigt, ob eine Prozess- oder eine Datenmaßnahme nötig ist.',
          },
          {
            question: 'Stammen die Kennzahlen von einem echten Energieversorger?',
            answer:
              'Nein. Die Kennzahlen stammen aus einem synthetischen Demonstrationsdatensatz. Sie veranschaulichen Analysewege und methodische Zusammenhänge und sind keine Produktivkennzahlen eines Kunden.',
          },
        ],

        caseHeading: 'Die vollständige Case-Beschreibung',
        caseText:
          'Event Knowledge Graph, Perspektiven, Fehlermuster, kausale Prozesslogik, Bündelung und der Weg vom Finding zur Verbesserungsinitiative – Schritt für Schritt im Noreja Help Center.',
        caseCta: 'Case im Help Center lesen',
      },

      en: {
        scenario: 'End-to-end process · District heating connection',
        metaTitle: 'Lead-to-Activation Process: Process Mining for District Heating Connections | Noreja',
        metaDescription:
          'Lead-to-Activation from lead to start of supply: process phases, business objects and four findings from a process mining analysis of district heating connections – offer rework, seasonal construction times, compliance and trade coordination.',
        tagline:
          'From first customer interest to start of supply: how process intelligence exposes rework, seasonal construction times and compliance risks in district heating connections – and turns them into prioritised measures.',
        definition:
          'Lead-to-Activation is the end-to-end process from a newly created lead to an active service at the customer. For a district heating connection it covers sales and offer, the parallel coordination of civil works, materials and house connection, construction and commissioning, and finally the handover report, billing and start of supply. From the customer’s side it sounds simple – interest, offer, contract, construction, connection, heat. In reality it is one of the most complex processes in the energy sector.',
        demoNote:
          'Note: the figures shown come from a synthetic demonstration dataset. They illustrate analysis paths and methodological relationships and are not production figures of any customer.',

        keyFacts: [
          {
            value: '13%',
            label: 'Offers reworked',
            detail: '154 of 1,208 cases between offer preparation and sending',
          },
          {
            value: '+20 days',
            label: 'Construction in winter',
            detail: 'A recurring seasonal pattern from November to March',
          },
          {
            value: '121',
            label: 'Supply before handover',
            detail: 'connections start supply before the handover report is finalised; 45 skip it entirely',
          },
          {
            value: '119',
            label: 'Missing permits',
            detail: 'of 1,208 cases lack a timely official permit before construction starts',
          },
        ],

        phasesHeading: 'The process in four phases',
        phasesLead:
          'Even before the order, information sits in different systems and objects. After the order the flow branches into parallel strands that have to be joined again before construction, commissioning, billing and start of supply.',
        phases: [
          {
            title: 'Sales: from lead to order',
            summary:
              'A lead is created and qualified. Qualified leads get a technical calculation, on which the offer is prepared, sent and finally signed as a contract.',
            steps: [
              'Lead created',
              'Lead qualified',
              'Technical calculation completed',
              'Offer prepared',
              'Offer sent',
              'Contract signed',
              'Order received',
            ],
            objects: ['Lead', 'Calculation', 'Offer', 'Contract', 'Order'],
            question: 'How often does an offer go back for rework – and why?',
          },
          {
            title: 'Trade coordination: parallel strands up to construction start',
            summary:
              'After the order several strands run at once. They have different durations, objects and cardinalities – a single connection can create several purchase orders, deliveries and invoices.',
            strands: [
              {
                name: 'House connection & planning',
                steps: ['Order item for installation', 'WBS element', 'Work plan', 'Installation planning'],
              },
              {
                name: 'Subcontracting & civil works',
                steps: ['Order item for subcontractor', 'Subcontractor order', 'Official permit'],
              },
              {
                name: 'Materials: pipes, cables, equipment',
                steps: ['Ordered', 'Delivered', 'Invoice received', 'Payment'],
              },
            ],
            objects: ['Order item', 'WBS element', 'Purchase order', 'Delivery', 'Invoice', 'Permit'],
            question: 'Which prerequisite is holding back the shared next step – the start of construction?',
          },
          {
            title: 'Construction & commissioning',
            summary:
              'Construction only starts once all strands are joined. The end of construction is followed by acceptance and technical commissioning. When several connections are bundled into one civil-works job, the cases also depend on each other.',
            steps: ['Construction started', 'Construction completed', 'Acceptance', 'Commissioning'],
            objects: ['Construction job', 'Connection', 'Acceptance'],
            question: 'Which part of construction slows down, from when, by how much – and does it repeat?',
          },
          {
            title: 'Handover, billing & start of supply',
            summary:
              'The handover report has to reach certain states before supply starts. Commercial finalisation with billing runs in parallel.',
            steps: [
              'Handover report created',
              'Handover report in progress',
              'Handover report finalised',
              'Billing',
              'Start of supply',
            ],
            objects: ['Handover report', 'Invoice', 'Supply contract'],
            question: 'Were all prerequisites met at the moment supply started?',
          },
        ],
        objectsNote:
          'A business case is not the same as a single business object. What matters is that the analysis keeps objects and their relationships instead of aggregating them early into a flat event log – only then can every finding be traced back to the affected orders, purchase orders or reports.',

        findingsHeading: 'Four findings along the process',
        findingsLead:
          'The following patterns were uncovered with Noreja. Each answers a concrete business question – and moves it from “What happened?” to “Why did it happen and what follows from it?”.',
        findings: [
          {
            area: 'Sales',
            title: 'One offer in eight goes back for rework',
            metric: '154 / 1,208',
            metricLabel: 'reworks between “Offer prepared” and “Offer sent” (≈ 13%)',
            text: [
              'Instead of counting every repetition as a new process variant, it is interpreted as rework: a recurring error pattern that delays contract signature and ties up sales capacity.',
              'The same pattern shows up again later: in billing, about 106 of 1,089 cases show a later correction. Rework is therefore not an issue of one department but a cross-process theme.',
            ],
            shift: { from: 'Which variant is this?', to: 'Which error pattern is this, why does it occur and what is its impact?' },
            image: {
              ...IMG.salesRework,
              alt: 'Sales process graph for a district heating connection: loop from “Offer sent” back to “Offer prepared” highlighted as rework',
              caption: 'Rework in the offer process: loops between “Offer prepared” and “Offer sent”.',
            },
          },
          {
            area: 'Construction',
            title: 'Construction systematically slows down in winter',
            metric: '≈ 20 days',
            metricLabel: 'longer construction in the winter months',
            text: [
              'A long lead time in a single case says little. So the same activity is looked at across all process instances and turned into a time series: from November the duration of construction rises noticeably, stays high through the winter and drops again from April.',
              'The time series stays connected to the process structure and can be traced back to concrete periods, cases and objects.',
            ],
            shift: { from: 'Is the process slower in winter?', to: 'Which specific part slows down, from when, by how much – and does it repeat?' },
            image: {
              ...IMG.constructionSeasonality,
              alt: 'Time series of construction duration from start to end, May 2025 to May 2026, rising sharply from November',
              caption: 'Time series of construction (start → end): duration rises over the winter months.',
            },
          },
          {
            area: 'Compliance',
            title: 'Supply starts before the handover report is finalised',
            metric: '121 · 45',
            metricLabel: 'connections start supply before finalisation (≈ 11%) · finalisation skipped entirely (4.1%)',
            text: [
              'The handover report has to reach certain states before supply starts. The business question therefore matters more than the plain sequence of events.',
              'For field processes one distinction is crucial: a late timestamp in the ERP – caused by missing connectivity or later synchronisation – does not mean the real process was late. Process errors and data errors look the same in an event log but need completely different measures.',
            ],
            shift: { from: 'In which order did the events happen?', to: 'Were all prerequisites met when supply started?' },
            image: {
              ...IMG.handoverCompliance,
              alt: 'Handover report process graph: paths from “Handover Report created” and “in progress” straight to “Start Delivery”, bypassing “finalised”',
              caption: 'Compliance view of handover reports: not every connection reaches the expected states before supply starts.',
            },
          },
          {
            area: 'Trade coordination',
            title: 'Construction start depends on several prerequisites at once',
            metric: '393 · 119',
            metricLabel: 'units sourced from a second supplier · cases without a timely permit',
            text: [
              'No single activity decides when construction can start – several prerequisites have to be met together. 393 units had to be sourced from another supplier because the first could not deliver; 119 of 1,208 cases lack a timely official permit; and in some cases construction does not start despite completed technical work because a commercial prerequisite such as the customer’s down payment is missing.',
              'That is the core of causal process logic: not only knowing what happened, but which prerequisite is missing for the next step to happen.',
            ],
            shift: { from: 'Which activity takes longest?', to: 'Which prerequisite is holding back the shared next step?' },
            image: {
              ...IMG.tradeCoordination,
              alt: 'Process graph of parallel trades before construction start: installation, subcontracting and material strands for pipes, cables and equipment',
              caption: 'Parallel trades before construction start: subcontracting, house connection and material strands run at the same time.',
            },
            note: {
              title: 'Causes outside the individual case',
              text: 'When several connections are bundled into one civil-works job, a finished connection can wait for another. In the isolated case history this is just unexplained idle time – only the relationship to the other instances explains it. Cross-instance dependencies like these are a strong argument for a graph-based analysis approach.',
            },
          },
        ],

        levers: {
          heading: 'Where the biggest time levers are',
          lead:
            'The AI assistant Minerva summarises the process areas and names the biggest time levers. The process manager starts with a business question instead of first choosing a view, filter and visualisation.',
          rows: [
            {
              area: 'Sales',
              statement: 'High conversion of qualified leads into orders',
              lever: 'Technical calculation to offer',
              value: '27 days',
            },
            {
              area: 'Trade coordination',
              statement: 'Several parallel prerequisites decide construction start',
              lever: 'Civil-works permit to construction start',
              value: '77.8 days',
            },
            {
              area: 'Connection & commissioning',
              statement: 'Stable flow, but long construction and acceptance phase',
              lever: 'Construction plus wait until acceptance',
              value: '69.2 days',
            },
            {
              area: 'Handover reports',
              statement: 'Documentation marker before order receipt',
              lever: 'Time impact not measurable',
              value: '–',
            },
          ],
          image: {
            ...IMG.minervaSummary,
            alt: 'Minerva management summary of the sales, construction and commissioning analysis with a table of time levers and a prioritised action plan',
            caption: 'Minerva summarises process areas and identifies the biggest time levers.',
          },
        },

        measures: {
          heading: 'From finding to prioritised measure',
          lead:
            'A finding does not improve a process yet. In the Impact Board, findings are rated by impact, implementation effort and uncertainty – process excellence and the business decide together which measure pays off economically and organisationally.',
          quadrants: [
            { name: 'Quick wins', text: 'High impact, low effort' },
            { name: 'Strategic', text: 'High impact, higher effort' },
            { name: 'Low priority', text: 'Low impact, low effort' },
            { name: 'Postpone', text: 'Low impact, high effort' },
          ],
          costCategories: [
            'Waiting time',
            'Wasted resources',
            'SLA breach',
            'Tied-up capital',
            'Lost revenue',
            'Compliance risk',
            'Rework',
          ],
          items: [
            { measure: 'Bundle permit and construction-start management', benefit: 'Shorten the biggest bottleneck of 77.8 days' },
            { measure: 'Link construction planning to a binding start-approval process', benefit: 'Reduce the 55.7 days after planning ends' },
            { measure: 'Standardise technical calculation and offer preparation', benefit: 'Shorten the 27 days in sales' },
            { measure: 'Record handover reports completely, in time and content', benefit: 'Transparency on documentation and handover delays' },
            { measure: 'Prepare construction acceptance early', benefit: 'Reduce the 27.8 days between construction end and start of acceptance' },
            { measure: 'Analyse invoice and supplier approvals', benefit: 'Less waiting after deliveries and fewer invoice corrections' },
            { measure: 'Make multiple orders transparent', benefit: 'Fewer avoidable procurement and coordination loops' },
          ],
          image: {
            ...IMG.impactBoard,
            alt: 'Noreja Impact Board with an impact/effort matrix: district heating findings placed as quick wins, strategic, low priority and postpone',
            caption: 'Impact/effort matrix: findings are prioritised by impact and implementation effort.',
          },
        },

        loop: {
          heading: 'The loop: Insight → Action → Impact → Feedback',
          lead:
            'Improvement does not end with implementation. The question is not “Have we used AI now?” but “Has the process become faster, more stable or better in quality?”',
          steps: [
            { step: 'Insight', text: 'Spot the error pattern, time series or missing prerequisite' },
            { step: 'Action', text: 'Derive, rate and prioritise a measure' },
            { step: 'Impact', text: 'Quantify the economic effect and implement' },
            { step: 'Feedback', text: 'Measure the effect against the process data again' },
          ],
          questions: [
            'Has the lead time actually improved?',
            'Has an error pattern become less frequent?',
            'Has the affected process section stabilised?',
            'Did the expected effect actually materialise?',
          ],
        },

        principlesHeading: 'Four principles behind the analysis',
        principles: [
          { title: 'Keep granularity', text: 'Business objects and their relationships are not aggregated early into a flat event log.' },
          { title: 'Reduce complexity by business question', text: 'Analyses answer concrete process questions without losing the underlying information.' },
          { title: 'Causes, not just anomalies', text: 'Process behaviour is assessed against business and causal dependencies.' },
          { title: 'Operationalise insights', text: 'Findings become measures, are valued economically and then measured against the process data again.' },
        ],

        faq: [
          {
            question: 'What is a Lead-to-Activation process?',
            answer:
              'Lead-to-Activation is the end-to-end process from a newly created lead to an active service at the customer. For a district heating connection it runs from lead qualification, technical calculation, offer and contract through the coordination of civil works, materials and house connection, construction and commissioning, to the handover report, billing and start of supply.',
          },
          {
            question: 'Why is a district heating connection hard to analyse with process mining?',
            answer:
              'Because after the order the process branches into several parallel strands – civil works or subcontracting, material procurement, house connection and commercial prerequisites – with different durations and cardinalities. One connection creates several purchase orders, deliveries and invoices, and bundled civil-works jobs create dependencies between cases. A single process map or a flat event log cannot represent that.',
          },
          {
            question: 'Which bottlenecks does the analysis reveal in the Lead-to-Activation process?',
            answer:
              'About 13% of offers go back for rework (154 of 1,208), construction takes about 20 days longer in winter, 121 connections start supply before the handover report is finalised, and construction start depends on several prerequisites – such as missing permits in 119 cases. The biggest time lever lies between civil-works permit and construction start, at 77.8 days.',
          },
          {
            question: 'How do you tell a process error from a data error?',
            answer:
              'In the event log both look the same. A late ERP timestamp can come from missing connectivity or later synchronisation in the field without the real process being late. Only a business assessment against objects, states and dependencies shows whether a process measure or a data measure is needed.',
          },
          {
            question: 'Are the figures from a real energy supplier?',
            answer:
              'No. The figures come from a synthetic demonstration dataset. They illustrate analysis paths and methodological relationships and are not production figures of any customer.',
          },
        ],

        caseHeading: 'The full case description',
        caseText:
          'Event knowledge graph, perspectives, error patterns, causal process logic, bundling and the path from finding to improvement initiative – step by step in the Noreja Help Center (in German).',
        caseCta: 'Read the case in the Help Center',
      },
    },
  },
  {
    id: 'premium-to-tax',
    name: 'Premium-to-Tax',
    caseUrl: 'https://docs.noreja.com/de/article/premium-to-tax-p2t',
    dateModified: '2026-09-24',
    content: {
      de: {
        scenario: 'End-to-End-Prozess · Versicherungsteuer (IPT)',
        metaTitle: 'Premium-to-Tax Prozess: Process Mining für Versicherungsteuer-Compliance | Noreja',
        metaDescription:
          'Premium-to-Tax von der Prämientransaktion bis zur Steuerzahlung: elf Prozessschritte, Geschäftsobjekte und sechs Abweichungen aus einer Process-Mining-Analyse der Versicherungsteuer – übersprungene Kontrollen, falsche Reihenfolgen, Nacharbeit und Abbrüche.',
        tagline:
          'Von der Versicherungsprämie bis zur bezahlten Steuererklärung: wie Process Intelligence übersprungene Kontrollen, falsche Reihenfolgen, Nacharbeit und offene Steuerpflichten in der Versicherungsteuer sichtbar macht.',
        definition:
          'Premium-to-Tax ist der End-to-End-Prozess von der steuerrelevanten Versicherungsprämientransaktion bis zur beglichenen Versicherungsteuer (Insurance Premium Tax, IPT). Jede Transaktion muss als steuerrelevant erkannt, der richtigen Jurisdiktion zugeordnet, korrekt berechnet, im Hauptbuch verbucht und abgestimmt werden, bevor sie in eine Steuererklärung eingeht, die geprüft, freigegeben, eingereicht und bezahlt wird. Aus der Vogelperspektive klingt das einfach – in der Realität durchläuft ein einzelner Fall operative Versicherungsdaten, Steuerermittlung, Buchhaltung, Abstimmung und Steuermeldung.',
        demoNote:
          'Hinweis: Der gezeigte Datensatz ist ein synthetischer Demonstrationsdatensatz mit bewusst eingebauten, realistischen Abweichungen. Die Kennzahlen veranschaulichen Analysewege und sind keine Produktivkennzahlen eines Kunden.',

        keyFacts: [
          {
            value: '11',
            label: 'Kernaktivitäten',
            detail: 'von der Prämientransaktion bis zur Steuerzahlung, jede gestützt durch ein eigenes Quellobjekt',
          },
          {
            value: '6',
            label: 'Abweichungsmuster',
            detail: 'Übersprung, falsche Reihenfolge, Nachbearbeitung und Abbruch – jeweils mit eigener Compliance-Frage',
          },
          {
            value: '≈ 5 %',
            label: 'Risikoort übersprungen',
            detail: 'Steuerermittlung ohne vorherige Bestimmung des Risikoorts – und damit der Jurisdiktion',
          },
          {
            value: '≈ 3 %',
            label: 'Einreichung vor Freigabe',
            detail: 'Steuererklärungen gehen an die Behörde, bevor die interne Kontrolle abgeschlossen ist',
          },
        ],

        phasesHeading: 'Der Prozess in vier Phasen',
        phasesLead:
          'Der vorgesehene Ablauf ist eine klare Abfolge aus elf Aktivitäten mit realistischen Wartezeiten dazwischen. Ein Fall ist erst abgeschlossen, wenn die Steuererklärung eingereicht und bezahlt ist – alles dazwischen ist ein Kontrollpunkt, den Process Mining sichtbar machen kann.',
        phases: [
          {
            title: 'Erfassung & Steuerermittlung: von der Prämie zum Steuerbetrag',
            summary:
              'Eine Prämientransaktion – Neu- oder Folgeprämie, Anpassung, Stornierung oder Erstattung – wird erfasst. Danach wird der Ort des versicherten Risikos bestimmt, die steuerliche Behandlung (Steuerart, Jurisdiktion, Steuercode, Satz) anhand zentral gepflegter Steuerregeln ermittelt und der Steuerbetrag berechnet. Zwischen den Schritten liegen typischerweise zwei bis vier Stunden.',
            steps: ['Prämientransaktion erfassen', 'Risikoort bestimmen', 'Steuerermittlung durchführen', 'Steuerbetrag berechnen'],
            objects: ['PREMIUM_TRANSACTION', 'RISK_LOCATION', 'TAX_DETERMINATION', 'TAX_RULE', 'TAX_CALCULATION'],
            question: 'Wurde vor der Steuerermittlung der Risikoort bestimmt – und damit die richtige Jurisdiktion?',
          },
          {
            title: 'Buchhaltung & Abstimmung: der zentrale Kontrollpunkt',
            summary:
              'Der Steuerbetrag wird mit Sachkonto, Buchungskreis und Belegreferenz im Hauptbuch verbucht. Anschließend wird die berechnete Steuer gegen die Buchung abgestimmt – Differenzen führen gegebenenfalls zu einer Steuerausnahme. Nach der Abstimmung vergehen typischerweise rund 24 Stunden bis zur Steuererklärung.',
            steps: ['Steuer im Hauptbuch verbuchen', 'Steuerbeträge abstimmen'],
            objects: ['GL_POSTING', 'TAX_RECONCILIATION', 'TAX_EXCEPTION'],
            question: 'Stimmen Berechnung und Buchung überein – und wie oft löst die Abstimmung eine Neuberechnung aus?',
          },
          {
            title: 'Steuererklärung & Freigabe: von der Transaktion zur Erklärung',
            summary:
              'Die Steuererklärung wird je Rechtsträger, Steuerart, Jurisdiktion und Meldezeitraum vorbereitet; einzelne Berechnungen werden ihr als Steuererklärungspositionen zugeordnet. Vor der externen Einreichung prüfen und geben Steuerexperten oder Führungskräfte die Erklärung frei – eine zentrale interne Compliance-Kontrolle.',
            steps: ['Steuererklärung vorbereiten', 'Steuererklärungsposition vorbereiten', 'Steuererklärung prüfen und freigeben'],
            objects: ['TAX_RETURN', 'TAX_RETURN_ITEM', 'TAX_APPROVAL', 'LEGAL_ENTITY', 'USER_ORG'],
            question: 'Erreicht jede abgestimmte Transaktion eine Erklärung – und wird diese vor der Einreichung freigegeben?',
          },
          {
            title: 'Einreichung & Zahlung: Meldepflicht und Zahlungspflicht',
            summary:
              'Nach der Freigabe wird die Erklärung mit Behördenreferenz und Bestätigung bei der zuständigen Steuerbehörde eingereicht. Der letzte Schritt ist die Zahlung der Steuerschuld; zwischen Einreichung und Zahlung liegen typischerweise rund 48 Stunden.',
            steps: ['Steuererklärung einreichen', 'Steuerzahlung ausführen'],
            objects: ['TAX_FILING', 'TAX_PAYMENT'],
            question: 'Wurde jede eingereichte Steuererklärung auch bezahlt?',
          },
        ],
        objectsNote:
          'Jedes Geschäftsobjekt trägt einen eigenen created_at-Zeitstempel; aus diesen Zeitstempeln wird der tatsächliche Ablauf rekonstruiert. Weil Objekte und Beziehungen im Event-Wissensgraphen erhalten bleiben, lässt sich jede Abweichung bis zur einzelnen Transaktion, Berechnung oder Erklärung zurückverfolgen.',

        contextObjects: {
          heading: 'Unterstützende Datenobjekte',
          lead:
            'Neben den operativen Aktivitäten liefert das Modell Kontextobjekte, die keine Pflichtschritte im Happy Path sind. Sie erlauben es, nicht nur zu fragen, was passiert ist – sondern wer beteiligt war, welche Regel galt und welche Ausnahme ausgelöst wurde.',
          items: [
            { name: 'POLICY', text: 'Der zugrunde liegende Versicherungsvertrag, der Transaktionen und Risikoinformationen mit dem Versicherungsgeschäft verknüpft.' },
            { name: 'LEGAL_ENTITY', text: 'Das meldende Unternehmen bzw. der Buchungskreis, verantwortlich für Transaktion und Steuererklärung.' },
            { name: 'TAX_RULE', text: 'Die bei der Ermittlung verwendeten Steuerregeln mit Jurisdiktion, Steuerart, Satz und Regelversion.' },
            { name: 'USER_ORG', text: 'Mitarbeitende, Rollen und Teams – für Verantwortlichkeiten, Ausnahmebehandlung und Freigaben.' },
            { name: 'TAX_EXCEPTION', text: 'Ausnahmen der Steuerverarbeitung, verknüpft mit fehlerhaften Berechnungen, Abstimmungsdifferenzen oder fehlenden Informationen.' },
          ],
        },

        findingsHeading: 'Sechs Abweichungen vom erwarteten Prozess',
        findingsLead:
          'Die interessanten Erkenntnisse liegen weniger im Happy Path als in den Abweichungen davon. Die zentrale Frage lautet: Wie läuft der Prozess tatsächlich ab im Vergleich zum erwarteten Prozess – und welche Abweichungen erzeugen Compliance- oder operative Risiken?',
        findings: [
          {
            area: 'Übersprung',
            title: 'Die Bestimmung des Risikoorts wird übersprungen',
            metric: '≈ 5 %',
            metricLabel: 'der Fälle gehen direkt von der Prämientransaktion zur Steuerermittlung',
            text: [
              'Erwartet ist Prämientransaktion → Risikoort → Steuerermittlung. In rund 5 % der Fälle fehlt der mittlere Schritt, und der Prozess springt direkt zur Steuerermittlung.',
              'Für die Versicherungsteuer kann der Ort des versicherten Risikos darüber entscheiden, welche Jurisdiktion die Steuer erheben darf. Fehlt er, drohen falsche Jurisdiktion, falscher Steuersatz, falsche steuerliche Behandlung – oder schlicht unzureichende Nachweise für die Steuerentscheidung.',
            ],
            shift: {
              from: 'Wurde die Steuer ermittelt?',
              to: 'Wie viele Transaktionen erhalten eine Steuerermittlung ohne vorherige Bestimmung des Risikoorts?',
            },
          },
          {
            area: 'Falsche Reihenfolge',
            title: 'Steuererklärungen werden vor der Freigabe eingereicht',
            metric: '≈ 3 %',
            metricLabel: 'der Erklärungen werden eingereicht, bevor sie geprüft und freigegeben sind',
            text: [
              'Beide Aktivitäten finden statt – aber in der falschen Reihenfolge: Die Erklärung geht an die Behörde, die Freigabe folgt erst danach.',
              'Die Freigabe ist eine wichtige interne Kontrolle. Eine Einreichung davor bedeutet, dass Informationen extern übermittelt werden, bevor die Prüfung abgeschlossen ist – mit dem Risiko nicht autorisierter oder fehlerhafter Erklärungen, zusätzlicher Korrekturen und Compliance-Feststellungen. Es reicht deshalb nicht zu prüfen, ob Aktivitäten stattgefunden haben: Auch die Reihenfolge ist entscheidend.',
            ],
            shift: {
              from: 'Wurde die Erklärung freigegeben?',
              to: 'Wurde sie freigegeben, bevor sie eingereicht wurde?',
            },
            image: {
              ...IMG.filingBeforeApproval,
              alt: 'Prozessgraph Steuererklärung: Pfad von „Prepare tax return item“ direkt zu „File tax return“ (150 Fälle, 3 %) und Rückpfeil von „File tax return“ zu „Review and approve tax return“',
              caption: 'Einreichung vor der Freigabe: ein Teil der Fälle springt von der Position direkt zu „File tax return“ und wird erst danach geprüft.',
            },
          },
          {
            area: 'Nachbearbeitung',
            title: 'Die Abstimmung löst eine erneute Steuerberechnung aus',
            metric: '≈ 2 %',
            metricLabel: 'der Fälle springen nach Buchung und Abstimmung zurück zur Steuerberechnung',
            text: [
              'Die Abstimmung findet ein Problem, und die Steuerberechnung wird erneut ausgeführt. Mögliche Ursachen: falscher Steuersatz, falsche Bemessungsgrundlage oder Jurisdiktion, eine Differenz zur Hauptbuchbuchung, eine veraltete Steuerregel oder unvollständige Quellinformationen.',
              'Das ist wahrscheinlich eine der wichtigsten operativen Ineffizienzen im Prozess: zusätzliche Bearbeitungszeit, manuelle Untersuchung, wiederholte Berechnungen, zusätzlicher Buchhaltungsaufwand und potenziell eine verzögerte Einreichung.',
            ],
            shift: {
              from: 'Ist die Steuer berechnet?',
              to: 'Welche Jurisdiktionen oder Steuerarten erzeugen die meiste Berechnungs-Nacharbeit – und wie viel Zeit kostet sie?',
            },
            image: {
              ...IMG.calculationRework,
              alt: 'Prozessgraph Steuerberechnung: Rückpfeil von „Post tax to general ledger“ zu „Calculate tax amount“ (19 Fälle, 2 %) vor „Reconcile tax amounts“',
              caption: 'Nacharbeit nach der Abstimmung: Rückläufer von der Hauptbuchbuchung zur erneuten Steuerberechnung.',
            },
          },
          {
            area: 'Nachbearbeitung',
            title: 'Erklärungen gehen während der Freigabe zur Korrektur zurück',
            metric: '≈ 5 %',
            metricLabel: 'der Erklärungen werden in der Prüfung zurückgegeben und erneut vorbereitet',
            text: [
              'Der Prüfer erkennt ein Problem mit dem Inhalt der Erklärung und gibt sie zur Korrektur zurück – etwa wegen fehlender oder fälschlich aufgenommener Transaktionen, falscher Beträge, falschem Meldezeitraum oder falscher Jurisdiktion.',
              'Späte Nachbearbeitung ist in der Regel teurer, als ein Problem früher zu erkennen, und sie schiebt den Prozess näher an die gesetzliche Einreichungsfrist.',
            ],
            shift: {
              from: 'Wurde die Erklärung freigegeben?',
              to: 'Welche Teams oder Jurisdiktionen erzeugen die höchsten Freigabe-Nachbearbeitungsraten – und wie viel Durchlaufzeit kostet das?',
            },
            image: {
              ...IMG.approvalRework,
              alt: 'Prozessgraph Freigabe: Schleife zwischen „Review and approve tax return“ und „File tax return“ mit rot markierten Rückläufern',
              caption: 'Freigabe-Nacharbeit: Erklärungen laufen aus der Prüfung zurück, bevor sie eingereicht werden können.',
            },
          },
          {
            area: 'Abbruch',
            title: 'Abgestimmte Transaktionen erreichen nie eine Steuererklärung',
            metric: '≈ 2 %',
            metricLabel: 'der Fälle enden direkt nach der Abstimmung',
            text: [
              'Die Transaktion wird verarbeitet und abgestimmt – danach wird keine Steuererklärung erstellt. Sie geht effektiv zwischen operativer Steuerverarbeitung und Steuermeldung verloren.',
              'Die möglichen Folgen: nicht gemeldete steuerpflichtige Transaktionen, unvollständige Erklärungen, zu niedrig ausgewiesene Steuerschulden und versäumte Meldepflichten. Ein klassischer unvollständiger Prozessfall.',
            ],
            shift: {
              from: 'Ist die Transaktion abgestimmt?',
              to: 'Welche abgestimmten Transaktionen erreichen nie die Erstellung der Steuererklärung?',
            },
            image: {
              ...IMG.stopAfterReconciliation,
              alt: 'Prozessgraph: Fälle enden nach „Reconcile tax amounts“, der Folgeschritt „Prepare tax return“ ist nur gestrichelt und wird nicht erreicht',
              caption: 'Abbruch nach der Abstimmung: der Schritt „Prepare tax return“ wird von diesen Fällen nie erreicht.',
            },
          },
          {
            area: 'Abbruch',
            title: 'Eingereicht, aber nie bezahlt',
            metric: '≈ 2 %',
            metricLabel: 'der Erklärungen enden nach der Einreichung ohne Steuerzahlung',
            text: [
              'Die Erklärung liegt bei der Behörde, doch der Prozess endet, bevor die Zahlung ausgeführt wird. Die Meldepflicht ist möglicherweise erfüllt, die finanzielle Verpflichtung bleibt offen.',
              'Das ist ein besonders wichtiges Compliance-Risiko: überfällige Steuerschulden, Zinsen, Strafzahlungen, Zahlungserinnerungen und zusätzliche manuelle Untersuchung. Daraus lässt sich eine sehr klare Kontrolle ableiten – eingereichte, aber nicht bezahlte Steuererklärungen.',
            ],
            shift: {
              from: 'Wurde eingereicht?',
              to: 'Welche eingereichten Steuererklärungen haben keine entsprechende Steuerzahlung?',
            },
            image: {
              ...IMG.filedNotPaid,
              alt: 'Prozessgraph: nach „File tax return“ führt nur ein gestrichelter Pfad zu „Execute tax payment“ und zum Prozessende – die Zahlung wird nicht erreicht',
              caption: 'Eingereicht, aber nicht bezahlt: nach „File tax return“ wird „Execute tax payment“ nicht mehr erreicht.',
            },
          },
        ],

        analysisQuestions: {
          heading: 'Fragen, die die Analyse beantwortet',
          lead: 'Der Datensatz erlaubt es, über die reine Visualisierung des Happy Path hinauszugehen.',
          items: [
            'Welcher Anteil der Fälle folgt dem erwarteten Prozess, und welche Varianten treten am häufigsten auf?',
            'Wo werden verpflichtende Aktivitäten übersprungen, und welche treten in der falschen Reihenfolge auf?',
            'Wie oft tritt Nachbearbeitung auf, und wie viel zusätzliche Durchlaufzeit erzeugt sie?',
            'Wo brechen Fälle vorzeitig ab?',
            'Welche Jurisdiktionen, Rechtsträger, Transaktionstypen oder Steuerarten haben die höchsten Abweichungsraten?',
            'Welche Fälle wurden ohne vorherige Freigabe eingereicht, und welche eingereichten Erklärungen wurden nicht bezahlt?',
            'Welche Transaktionen erreichten die Steuerermittlung ohne dokumentierte Bestimmung des Risikoorts?',
            'Wo liegen die größten Abstimmungsdifferenzen, und welche Prozessteile erzeugen die längsten Wartezeiten?',
          ],
        },

        principlesHeading: 'Von „Wurde eingereicht?“ zu „Wie sind wir dahin gekommen?“',
        principles: [
          {
            title: 'Compliance',
            text: 'Übersprungene Kontrollen, falsche Reihenfolgen, fehlende Freigaben und unvollständige Steuerpflichten identifizieren.',
          },
          {
            title: 'Effizienz',
            text: 'Nachbearbeitungsschleifen, Engpässe, unnötige Wiederholungen und lange Wartezeiten aufdecken.',
          },
          {
            title: 'Transparenz',
            text: 'Steuerverarbeitung auf Transaktionsebene, Buchhaltung, Meldung, Freigabe, Einreichung und Zahlung zu einer durchgängigen End-to-End-Sicht verbinden.',
          },
        ],

        faq: [
          {
            question: 'Was ist ein Premium-to-Tax-Prozess?',
            answer:
              'Premium-to-Tax ist der End-to-End-Prozess von der steuerrelevanten Versicherungsprämientransaktion bis zur bezahlten Versicherungsteuer. Er umfasst elf Kernaktivitäten: Prämientransaktion erfassen, Risikoort bestimmen, Steuerermittlung, Steuerberechnung, Hauptbuchbuchung, Abstimmung, Vorbereitung von Steuererklärung und Erklärungspositionen, Prüfung und Freigabe, Einreichung und Steuerzahlung.',
          },
          {
            question: 'Warum ist der Risikoort für die Versicherungsteuer so wichtig?',
            answer:
              'Der Ort des versicherten Risikos kann darüber entscheiden, welches Land bzw. welche Jurisdiktion das Recht hat, die Versicherungsteuer zu erheben. Wird er nicht bestimmt, können Jurisdiktion, Steuersatz und steuerliche Behandlung falsch sein – und es fehlt der Nachweis für die Steuerentscheidung.',
          },
          {
            question: 'Welche Abweichungen zeigt die Analyse im Premium-to-Tax-Prozess?',
            answer:
              'Sechs Muster: Die Bestimmung des Risikoorts wird übersprungen (ca. 5 %), Erklärungen werden vor der Freigabe eingereicht (ca. 3 %), die Abstimmung löst eine erneute Steuerberechnung aus (ca. 2 %), Erklärungen gehen in der Freigabe zur Korrektur zurück (ca. 5 %), abgestimmte Transaktionen erreichen nie eine Erklärung (ca. 2 %) und eingereichte Erklärungen werden nicht bezahlt (ca. 2 %).',
          },
          {
            question: 'Warum reicht es nicht zu prüfen, ob eine Steuererklärung eingereicht wurde?',
            answer:
              'Weil eine Einreichung nichts darüber aussagt, wie sie zustande kam. Process Mining zeigt, ob die Freigabe vor der Einreichung lag, ob Kontrollen wie die Risikoortbestimmung übersprungen wurden, wo Arbeit wiederholt werden musste und ob auf die Einreichung auch die Zahlung folgte.',
          },
          {
            question: 'Stammen die Kennzahlen von einem echten Versicherer?',
            answer:
              'Nein. Der Datensatz ist synthetisch und enthält bewusst eingebaute, realistische Abweichungen. Die Kennzahlen veranschaulichen Analysewege und sind keine Produktivkennzahlen eines Kunden.',
          },
        ],

        caseHeading: 'Die vollständige Case-Beschreibung',
        caseText:
          'Alle elf Prozessschritte mit Quelltabellen und typischen Wartezeiten, die unterstützenden Datenobjekte und die sechs Abweichungen im Detail – Schritt für Schritt im Noreja Help Center.',
        caseCta: 'Case im Help Center lesen',
      },

      en: {
        scenario: 'End-to-end process · Insurance premium tax (IPT)',
        metaTitle: 'Premium-to-Tax Process: Process Mining for Insurance Premium Tax Compliance | Noreja',
        metaDescription:
          'Premium-to-Tax from premium transaction to tax payment: eleven process steps, business objects and six deviations from a process mining analysis of insurance premium tax – skipped controls, wrong order, rework and incomplete cases.',
        tagline:
          'From the insurance premium to the paid tax return: how process intelligence exposes skipped controls, wrong sequences, rework and open tax obligations in insurance premium tax.',
        definition:
          'Premium-to-Tax is the end-to-end process from a tax-relevant insurance premium transaction to the settled insurance premium tax (IPT). Every transaction has to be recognised as taxable, assigned to the right jurisdiction, calculated correctly, posted to the general ledger and reconciled before it flows into a tax return that is reviewed, approved, filed and paid. From a bird’s-eye view it sounds simple – in reality a single case passes through operational insurance data, tax determination, accounting, reconciliation and tax reporting.',
        demoNote:
          'Note: the dataset shown is a synthetic demonstration dataset with deliberately built-in, realistic deviations. The figures illustrate analysis paths and are not production figures of any customer.',

        keyFacts: [
          {
            value: '11',
            label: 'Core activities',
            detail: 'from premium transaction to tax payment, each backed by its own source object',
          },
          {
            value: '6',
            label: 'Deviation patterns',
            detail: 'skips, wrong order, rework and abandonment – each with its own compliance question',
          },
          {
            value: '≈ 5%',
            label: 'Risk location skipped',
            detail: 'tax determination without prior determination of the risk location – and so the jurisdiction',
          },
          {
            value: '≈ 3%',
            label: 'Filed before approval',
            detail: 'tax returns reach the authority before the internal control is complete',
          },
        ],

        phasesHeading: 'The process in four phases',
        phasesLead:
          'The intended flow is a clear sequence of eleven activities with realistic waiting times in between. A case is only complete once the tax return has been filed and paid – everything in between is a control point that process mining can make visible.',
        phases: [
          {
            title: 'Capture & tax determination: from premium to tax amount',
            summary:
              'A premium transaction – new or renewal premium, adjustment, cancellation or refund – is captured. The location of the insured risk is then determined, the tax treatment (tax type, jurisdiction, tax code, rate) is derived from centrally maintained tax rules, and the tax amount is calculated. Two to four hours typically pass between steps.',
            steps: ['Capture premium transaction', 'Determine risk location', 'Perform tax determination', 'Calculate tax amount'],
            objects: ['PREMIUM_TRANSACTION', 'RISK_LOCATION', 'TAX_DETERMINATION', 'TAX_RULE', 'TAX_CALCULATION'],
            question: 'Was the risk location – and so the right jurisdiction – determined before the tax determination?',
          },
          {
            title: 'Accounting & reconciliation: the central control point',
            summary:
              'The tax amount is posted to the general ledger with GL account, company code and document reference. The calculated tax is then reconciled against the posting – differences may raise a tax exception. About 24 hours typically pass between reconciliation and the tax return.',
            steps: ['Post tax to general ledger', 'Reconcile tax amounts'],
            objects: ['GL_POSTING', 'TAX_RECONCILIATION', 'TAX_EXCEPTION'],
            question: 'Do calculation and posting match – and how often does reconciliation trigger a recalculation?',
          },
          {
            title: 'Tax return & approval: from transaction to return',
            summary:
              'The tax return is prepared per legal entity, tax type, jurisdiction and reporting period; individual calculations are assigned to it as tax return items. Before external filing, tax experts or managers review and approve the return – a key internal compliance control.',
            steps: ['Prepare tax return', 'Prepare tax return item', 'Review and approve tax return'],
            objects: ['TAX_RETURN', 'TAX_RETURN_ITEM', 'TAX_APPROVAL', 'LEGAL_ENTITY', 'USER_ORG'],
            question: 'Does every reconciled transaction reach a return – and is that return approved before filing?',
          },
          {
            title: 'Filing & payment: reporting and payment obligation',
            summary:
              'After approval the return is filed with the competent tax authority, with an authority reference and confirmation. The final step is paying the tax liability; about 48 hours typically pass between filing and payment.',
            steps: ['File tax return', 'Execute tax payment'],
            objects: ['TAX_FILING', 'TAX_PAYMENT'],
            question: 'Was every filed tax return actually paid?',
          },
        ],
        objectsNote:
          'Every business object carries its own created_at timestamp; these timestamps are used to reconstruct the actual flow. Because objects and relationships are kept in the event knowledge graph, every deviation can be traced back to the individual transaction, calculation or return.',

        contextObjects: {
          heading: 'Supporting data objects',
          lead:
            'Besides the operational activities, the model contains context objects that are not mandatory happy-path steps. They make it possible to ask not only what happened – but who was involved, which rule applied and which exception was raised.',
          items: [
            { name: 'POLICY', text: 'The underlying insurance contract that links transactions and risk information to the insurance business.' },
            { name: 'LEGAL_ENTITY', text: 'The reporting company or company code responsible for the transaction and the tax return.' },
            { name: 'TAX_RULE', text: 'The tax rules used in determination, with jurisdiction, tax type, rate and rule version.' },
            { name: 'USER_ORG', text: 'Employees, roles and teams – for responsibilities, exception handling and approvals.' },
            { name: 'TAX_EXCEPTION', text: 'Tax processing exceptions linked to faulty calculations, reconciliation differences or missing information.' },
          ],
        },

        findingsHeading: 'Six deviations from the expected process',
        findingsLead:
          'The interesting insights lie less in the happy path than in the deviations from it. The central question is: how does the process actually run compared to the expected one – and which deviations create compliance or operational risk?',
        findings: [
          {
            area: 'Skip',
            title: 'The risk location is never determined',
            metric: '≈ 5%',
            metricLabel: 'of cases go straight from the premium transaction to tax determination',
            text: [
              'The expected flow is premium transaction → risk location → tax determination. In about 5% of cases the middle step is missing and the process jumps straight to tax determination.',
              'For insurance premium tax, the location of the insured risk can decide which jurisdiction may levy the tax. Without it, the case risks the wrong jurisdiction, the wrong rate, the wrong tax treatment – or simply insufficient evidence for the tax decision.',
            ],
            shift: {
              from: 'Was the tax determined?',
              to: 'How many transactions get a tax determination without a prior risk-location determination?',
            },
          },
          {
            area: 'Wrong order',
            title: 'Tax returns are filed before approval',
            metric: '≈ 3%',
            metricLabel: 'of returns are filed before they are reviewed and approved',
            text: [
              'Both activities happen – but in the wrong order: the return goes to the authority and the approval only follows afterwards.',
              'Approval is an important internal control. Filing before it means information is sent externally before the review is complete – with the risk of unauthorised or incorrect returns, additional corrections and compliance findings. Checking whether activities happened is therefore not enough: the order matters too.',
            ],
            shift: {
              from: 'Was the return approved?',
              to: 'Was it approved before it was filed?',
            },
            image: {
              ...IMG.filingBeforeApproval,
              alt: 'Tax return process graph: path from “Prepare tax return item” straight to “File tax return” (150 cases, 3%) and a back arrow from “File tax return” to “Review and approve tax return”',
              caption: 'Filing before approval: some cases jump from the item straight to “File tax return” and are only reviewed afterwards.',
            },
          },
          {
            area: 'Rework',
            title: 'Reconciliation triggers a new tax calculation',
            metric: '≈ 2%',
            metricLabel: 'of cases jump back to tax calculation after posting and reconciliation',
            text: [
              'Reconciliation finds a problem and the tax calculation is run again. Possible causes: wrong tax rate, wrong tax base or jurisdiction, a difference to the GL posting, an outdated tax rule or incomplete source information.',
              'This is probably one of the most important operational inefficiencies in the process: extra processing time, manual investigation, repeated calculations, additional accounting effort and potentially a delayed filing.',
            ],
            shift: {
              from: 'Has the tax been calculated?',
              to: 'Which jurisdictions or tax types cause the most calculation rework – and how much time does it cost?',
            },
            image: {
              ...IMG.calculationRework,
              alt: 'Tax calculation process graph: back arrow from “Post tax to general ledger” to “Calculate tax amount” (19 cases, 2%) before “Reconcile tax amounts”',
              caption: 'Rework after reconciliation: loops from the GL posting back to a new tax calculation.',
            },
          },
          {
            area: 'Rework',
            title: 'Returns are sent back for correction during approval',
            metric: '≈ 5%',
            metricLabel: 'of returns are sent back in review and prepared again',
            text: [
              'The reviewer spots a problem with the content of the return and sends it back for correction – for example missing or wrongly included transactions, wrong amounts, the wrong reporting period or the wrong jurisdiction.',
              'Late rework is usually more expensive than catching a problem earlier, and it pushes the process closer to the statutory filing deadline.',
            ],
            shift: {
              from: 'Was the return approved?',
              to: 'Which teams or jurisdictions have the highest approval rework rates – and how much lead time does that cost?',
            },
            image: {
              ...IMG.approvalRework,
              alt: 'Approval process graph: loop between “Review and approve tax return” and “File tax return” with rework paths highlighted in red',
              caption: 'Approval rework: returns loop back out of review before they can be filed.',
            },
          },
          {
            area: 'Abandonment',
            title: 'Reconciled transactions never reach a tax return',
            metric: '≈ 2%',
            metricLabel: 'of cases end right after reconciliation',
            text: [
              'The transaction is processed and reconciled – but no tax return is created afterwards. It is effectively lost between operational tax processing and tax reporting.',
              'Possible consequences: unreported taxable transactions, incomplete returns, understated tax liabilities and missed reporting obligations. A classic incomplete process case.',
            ],
            shift: {
              from: 'Is the transaction reconciled?',
              to: 'Which reconciled transactions never reach the creation of a tax return?',
            },
            image: {
              ...IMG.stopAfterReconciliation,
              alt: 'Process graph: cases end after “Reconcile tax amounts”; the next step “Prepare tax return” is only dashed and never reached',
              caption: 'Abandonment after reconciliation: these cases never reach “Prepare tax return”.',
            },
          },
          {
            area: 'Abandonment',
            title: 'Filed, but never paid',
            metric: '≈ 2%',
            metricLabel: 'of returns end after filing without a tax payment',
            text: [
              'The return is with the authority, but the process ends before payment is executed. The reporting obligation may be met while the financial obligation stays open.',
              'This is a particularly important compliance risk: overdue tax liabilities, interest, penalties, payment reminders and extra manual investigation. It translates into a very clear control – filed but unpaid tax returns.',
            ],
            shift: {
              from: 'Was it filed?',
              to: 'Which filed tax returns have no matching tax payment?',
            },
            image: {
              ...IMG.filedNotPaid,
              alt: 'Process graph: after “File tax return” only a dashed path leads to “Execute tax payment” and the process end – payment is not reached',
              caption: 'Filed but not paid: after “File tax return”, “Execute tax payment” is never reached.',
            },
          },
        ],

        analysisQuestions: {
          heading: 'Questions the analysis answers',
          lead: 'The dataset lets the analysis go beyond simply visualising the happy path.',
          items: [
            'What share of cases follows the expected process, and which variants occur most often?',
            'Where are mandatory activities skipped, and which occur in the wrong order?',
            'How often does rework occur, and how much extra lead time does it create?',
            'Where do cases end prematurely?',
            'Which jurisdictions, legal entities, transaction types or tax types have the highest deviation rates?',
            'Which cases were filed without prior approval, and which filed returns were not paid?',
            'Which transactions reached tax determination without a documented risk-location determination?',
            'Where are the largest reconciliation differences, and which parts of the process cause the longest waits?',
          ],
        },

        principlesHeading: 'From “Was it filed?” to “How did we get there?”',
        principles: [
          {
            title: 'Compliance',
            text: 'Identify skipped controls, wrong sequences, missing approvals and incomplete tax obligations.',
          },
          {
            title: 'Efficiency',
            text: 'Uncover rework loops, bottlenecks, unnecessary repetitions and long waiting times.',
          },
          {
            title: 'Transparency',
            text: 'Connect transaction-level tax processing, accounting, reporting, approval, filing and payment into one end-to-end view.',
          },
        ],

        faq: [
          {
            question: 'What is a Premium-to-Tax process?',
            answer:
              'Premium-to-Tax is the end-to-end process from a tax-relevant insurance premium transaction to the paid insurance premium tax. It comprises eleven core activities: capture premium transaction, determine risk location, tax determination, tax calculation, GL posting, reconciliation, preparation of the tax return and return items, review and approval, filing and tax payment.',
          },
          {
            question: 'Why does the risk location matter so much for insurance premium tax?',
            answer:
              'The location of the insured risk can decide which country or jurisdiction has the right to levy insurance premium tax. If it is not determined, jurisdiction, tax rate and tax treatment may be wrong – and the evidence for the tax decision is missing.',
          },
          {
            question: 'Which deviations does the analysis reveal in the Premium-to-Tax process?',
            answer:
              'Six patterns: the risk-location determination is skipped (about 5%), returns are filed before approval (about 3%), reconciliation triggers a new tax calculation (about 2%), returns are sent back for correction during approval (about 5%), reconciled transactions never reach a return (about 2%) and filed returns are not paid (about 2%).',
          },
          {
            question: 'Why is it not enough to check whether a tax return was filed?',
            answer:
              'Because a filing says nothing about how it came about. Process mining shows whether approval came before filing, whether controls such as the risk-location determination were skipped, where work had to be repeated and whether the filing was actually followed by payment.',
          },
          {
            question: 'Are the figures from a real insurer?',
            answer:
              'No. The dataset is synthetic and contains deliberately built-in, realistic deviations. The figures illustrate analysis paths and are not production figures of any customer.',
          },
        ],

        caseHeading: 'The full case description',
        caseText:
          'All eleven process steps with source tables and typical waiting times, the supporting data objects and the six deviations in detail – step by step in the Noreja Help Center (in German).',
        caseCta: 'Read the case in the Help Center',
      },
    },
  },
];

export function getEndToEndProcessById(id: string): EndToEndProcess | undefined {
  return endToEndProcesses.find((process) => process.id === id.toLowerCase());
}
