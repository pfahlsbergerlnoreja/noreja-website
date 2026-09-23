import type { Language } from './translations';
import salesRework from '@/assets/processes/lead-to-activation/sales-rework.webp';
import constructionSeasonality from '@/assets/processes/lead-to-activation/construction-seasonality.webp';
import handoverCompliance from '@/assets/processes/lead-to-activation/handover-compliance.webp';
import tradeCoordination from '@/assets/processes/lead-to-activation/trade-coordination.webp';
import impactBoard from '@/assets/processes/lead-to-activation/impact-board.webp';
import minervaSummary from '@/assets/processes/lead-to-activation/minerva-summary.webp';

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
    image: ProcessImage;
    note?: { title: string; text: string };
  }>;

  leversHeading: string;
  leversLead: string;
  levers: Array<{ area: string; statement: string; lever: string; value: string }>;
  leversImage: ProcessImage;

  measuresHeading: string;
  measuresLead: string;
  quadrants: Array<{ name: string; text: string }>;
  costCategories: string[];
  measures: Array<{ measure: string; benefit: string }>;
  measuresImage: ProcessImage;

  loopHeading: string;
  loopLead: string;
  loop: Array<{ step: string; text: string }>;
  loopQuestions: string[];

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

        leversHeading: 'Wo die größten Zeithebel liegen',
        leversLead:
          'Der KI-Assistent Minerva fasst die Prozessbereiche zusammen und benennt die größten Zeithebel. Der Prozessmanager beginnt mit einer Fachfrage – statt zuerst View, Filter und Visualisierung wählen zu müssen.',
        levers: [
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
        leversImage: {
          ...IMG.minervaSummary,
          alt: 'Minerva-Management-Summary zur Prozessanalyse Vertrieb, Bau und Inbetriebnahme mit Tabelle der Zeithebel und priorisiertem Maßnahmenplan',
          caption: 'Minerva fasst Prozessbereiche zusammen und identifiziert die größten Zeithebel.',
        },

        measuresHeading: 'Vom Finding zur priorisierten Maßnahme',
        measuresLead:
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
        measures: [
          { measure: 'Genehmigungs- und Baustartsteuerung bündeln', benefit: 'Verkürzung des größten Engpasses von 77,8 Tagen' },
          { measure: 'Bauplanung mit verbindlichem Baustart-Freigabeprozess verbinden', benefit: 'Reduktion der 55,7 Tage nach Planungsende' },
          { measure: 'Technische Kalkulation und Angebotserstellung standardisieren', benefit: 'Verkürzung der 27 Tage im Vertrieb' },
          { measure: 'Übergabeprotokolle zeitlich und fachlich vollständig erfassen', benefit: 'Transparenz über Dokumentations- und Übergabeverzögerungen' },
          { measure: 'Bauabnahme frühzeitig vorbereiten', benefit: 'Reduktion der 27,8 Tage zwischen Bauende und Abnahmebeginn' },
          { measure: 'Rechnungs- und Lieferantenfreigaben analysieren', benefit: 'Weniger Wartezeit nach Lieferungen und weniger Rechnungskorrekturen' },
          { measure: 'Mehrfachbestellungen transparent machen', benefit: 'Reduktion vermeidbarer Beschaffungs- und Koordinationsschleifen' },
        ],
        measuresImage: {
          ...IMG.impactBoard,
          alt: 'Noreja Impact Board mit Impact-/Aufwand-Matrix: Findings des Fernwärmeanschlusses eingeordnet als Quick Wins, strategisch, Low Priority und verschieben',
          caption: 'Impact-/Aufwand-Matrix: Findings werden nach Wirkung und Umsetzungsaufwand priorisiert.',
        },

        loopHeading: 'Der Kreislauf: Insight → Action → Impact → Feedback',
        loopLead:
          'Der Verbesserungsprozess endet nicht bei der Umsetzung. Die Frage lautet nicht „Haben wir jetzt KI eingesetzt?“, sondern „Ist der Prozess dadurch schneller, stabiler oder qualitativ besser geworden?“',
        loop: [
          { step: 'Insight', text: 'Fehlermuster, Zeitreihe oder fehlende Voraussetzung erkennen' },
          { step: 'Action', text: 'Maßnahme ableiten, bewerten und priorisieren' },
          { step: 'Impact', text: 'Wirkung wirtschaftlich beziffern und umsetzen' },
          { step: 'Feedback', text: 'Wirkung erneut gegen die Prozessdaten messen' },
        ],
        loopQuestions: [
          'Hat sich die Durchlaufzeit tatsächlich verbessert?',
          'Ist ein Fehlermuster seltener geworden?',
          'Hat sich der betroffene Prozessabschnitt stabilisiert?',
          'Ist die erwartete Wirkung tatsächlich eingetreten?',
        ],

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

        leversHeading: 'Where the biggest time levers are',
        leversLead:
          'The AI assistant Minerva summarises the process areas and names the biggest time levers. The process manager starts with a business question instead of first choosing a view, filter and visualisation.',
        levers: [
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
        leversImage: {
          ...IMG.minervaSummary,
          alt: 'Minerva management summary of the sales, construction and commissioning analysis with a table of time levers and a prioritised action plan',
          caption: 'Minerva summarises process areas and identifies the biggest time levers.',
        },

        measuresHeading: 'From finding to prioritised measure',
        measuresLead:
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
        measures: [
          { measure: 'Bundle permit and construction-start management', benefit: 'Shorten the biggest bottleneck of 77.8 days' },
          { measure: 'Link construction planning to a binding start-approval process', benefit: 'Reduce the 55.7 days after planning ends' },
          { measure: 'Standardise technical calculation and offer preparation', benefit: 'Shorten the 27 days in sales' },
          { measure: 'Record handover reports completely, in time and content', benefit: 'Transparency on documentation and handover delays' },
          { measure: 'Prepare construction acceptance early', benefit: 'Reduce the 27.8 days between construction end and start of acceptance' },
          { measure: 'Analyse invoice and supplier approvals', benefit: 'Less waiting after deliveries and fewer invoice corrections' },
          { measure: 'Make multiple orders transparent', benefit: 'Fewer avoidable procurement and coordination loops' },
        ],
        measuresImage: {
          ...IMG.impactBoard,
          alt: 'Noreja Impact Board with an impact/effort matrix: district heating findings placed as quick wins, strategic, low priority and postpone',
          caption: 'Impact/effort matrix: findings are prioritised by impact and implementation effort.',
        },

        loopHeading: 'The loop: Insight → Action → Impact → Feedback',
        loopLead:
          'Improvement does not end with implementation. The question is not “Have we used AI now?” but “Has the process become faster, more stable or better in quality?”',
        loop: [
          { step: 'Insight', text: 'Spot the error pattern, time series or missing prerequisite' },
          { step: 'Action', text: 'Derive, rate and prioritise a measure' },
          { step: 'Impact', text: 'Quantify the economic effect and implement' },
          { step: 'Feedback', text: 'Measure the effect against the process data again' },
        ],
        loopQuestions: [
          'Has the lead time actually improved?',
          'Has an error pattern become less frequent?',
          'Has the affected process section stabilised?',
          'Did the expected effect actually materialise?',
        ],

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
];

export function getEndToEndProcessById(id: string): EndToEndProcess | undefined {
  return endToEndProcesses.find((process) => process.id === id.toLowerCase());
}
