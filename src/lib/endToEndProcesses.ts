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
import capacityToPayment from '@/assets/processes/purchase-to-pay/capacity-to-payment.webp';
import cashDiscountLoss from '@/assets/processes/purchase-to-pay/cash-discount-loss.webp';
import cashDiscountPayments from '@/assets/processes/purchase-to-pay/cash-discount-payments.webp';
import endToEndPerspective from '@/assets/processes/purchase-to-pay/end-to-end-perspective.webp';
import eventKnowledgeGraph from '@/assets/processes/purchase-to-pay/event-knowledge-graph.webp';
import fulfilmentPaths from '@/assets/processes/purchase-to-pay/fulfilment-paths.webp';
import inspectionBatches from '@/assets/processes/purchase-to-pay/inspection-batches.webp';
import inspectionTimePattern from '@/assets/processes/purchase-to-pay/inspection-time-pattern.webp';
import invoiceRework from '@/assets/processes/purchase-to-pay/invoice-rework.webp';
import invoiceTicketContext from '@/assets/processes/purchase-to-pay/invoice-ticket-context.webp';
import maverickAttributes from '@/assets/processes/purchase-to-pay/maverick-attributes.webp';
import maverickBuying from '@/assets/processes/purchase-to-pay/maverick-buying.webp';
import minervaCauseModel from '@/assets/processes/purchase-to-pay/minerva-cause-model.webp';
import minervaKeyStatements from '@/assets/processes/purchase-to-pay/minerva-key-statements.webp';
import minervaStructuralDeviations from '@/assets/processes/purchase-to-pay/minerva-structural-deviations.webp';
import supplierPerformance from '@/assets/processes/purchase-to-pay/supplier-performance.webp';
import o2cEntityGraph from '@/assets/processes/order-to-cash/o2c-entity-graph.webp';
import o2cCausalPerspective from '@/assets/processes/order-to-cash/o2c-causal-perspective.webp';
import orderEntryRelease from '@/assets/processes/order-to-cash/order-entry-release.webp';
import deliveryInvoicing from '@/assets/processes/order-to-cash/delivery-invoicing.webp';
import paymentDunningComplaints from '@/assets/processes/order-to-cash/payment-dunning-complaints.webp';
import o2cKpiReport from '@/assets/processes/order-to-cash/o2c-kpi-report.webp';
import complaintsManagementView from '@/assets/processes/order-to-cash/complaints-management-view.webp';
import skippedOrderReview from '@/assets/processes/order-to-cash/skipped-order-review.webp';
import minervaComplaintReasons from '@/assets/processes/order-to-cash/minerva-complaint-reasons.webp';
import minervaFirstCausePicture from '@/assets/processes/order-to-cash/minerva-first-cause-picture.webp';
import specialValuesRefinement from '@/assets/processes/order-to-cash/special-values-refinement.webp';
import specialFeaturesDrilldown from '@/assets/processes/order-to-cash/special-features-drilldown.webp';
import o2cHypothesisTree from '@/assets/processes/order-to-cash/o2c-hypothesis-tree.webp';
import minervaAgentsVsLlm from '@/assets/processes/order-to-cash/minerva-agents-vs-llm.webp';
import impactBoardMatrix from '@/assets/processes/order-to-cash/impact-board-matrix.webp';
import impactBoardKanban from '@/assets/processes/order-to-cash/impact-board-kanban.webp';
import impactBoardQuadrangle from '@/assets/processes/order-to-cash/impact-board-quadrangle.webp';
import impactBoardRoi from '@/assets/processes/order-to-cash/impact-board-roi.webp';
import a2dEntityModelDe from '@/assets/processes/admission-to-discharge/entity-model-de.webp';
import a2dEntityModelEn from '@/assets/processes/admission-to-discharge/entity-model-en.webp';
import a2dEndToEnd from '@/assets/processes/admission-to-discharge/end-to-end-perspective.webp';
import a2dPreparation from '@/assets/processes/admission-to-discharge/preparation-perspective.webp';
import a2dSurgery from '@/assets/processes/admission-to-discharge/surgery-perspective.webp';
import a2dBedRelease from '@/assets/processes/admission-to-discharge/bed-release-perspective.webp';
import a2dDashboard from '@/assets/processes/admission-to-discharge/management-dashboard.webp';
import a2dRawComparisons from '@/assets/processes/admission-to-discharge/raw-comparisons.webp';
import a2dTeamCCheck from '@/assets/processes/admission-to-discharge/team-c-asa-check.webp';
import a2dStaffingCheck from '@/assets/processes/admission-to-discharge/recovery-room-staffing-check.webp';
import a2dCancellationCauses from '@/assets/processes/admission-to-discharge/minerva-cancellation-causes.webp';
import a2dDocumentedDelays from '@/assets/processes/admission-to-discharge/minerva-documented-delays.webp';
import a2dFirstCasePunctuality from '@/assets/processes/admission-to-discharge/first-case-punctuality.webp';
import a2dReworkPattern from '@/assets/processes/admission-to-discharge/preparation-rework-pattern.webp';
import a2dReworkReasons from '@/assets/processes/admission-to-discharge/preparation-rework-reasons.webp';
import a2dReworkByWard from '@/assets/processes/admission-to-discharge/preparation-rework-by-ward.webp';
import a2dBedReleasePaths from '@/assets/processes/admission-to-discharge/bed-release-paths.webp';
import a2dBedReleaseByWard from '@/assets/processes/admission-to-discharge/minerva-bed-release-by-ward.webp';
import a2dBedReleaseTimeline from '@/assets/processes/admission-to-discharge/bed-release-timeline.webp';
import a2dFirstBedRelease from '@/assets/processes/admission-to-discharge/first-bed-release-per-day.webp';
import a2dForwardCascade from '@/assets/processes/admission-to-discharge/forward-cascade-timeline.webp';
import a2dForwardCascadeTable from '@/assets/processes/admission-to-discharge/forward-cascade-table.webp';
import a2dBacklogView from '@/assets/processes/admission-to-discharge/backlog-cascade-view.webp';
import a2dBacklogCause from '@/assets/processes/admission-to-discharge/backlog-cascade-cause.webp';
import a2dFourTriggers from '@/assets/processes/admission-to-discharge/minerva-four-triggers.webp';
import a2dBedReleaseChain from '@/assets/processes/admission-to-discharge/minerva-bed-release-chain.webp';
import a2dImpactBoard from '@/assets/processes/admission-to-discharge/impact-board-matrix.webp';

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

/** Key figures as a real HTML table, so answer engines can read them without the screenshot. */
export interface ProcessTable {
  caption: string;
  head: string[];
  /** The first cell of each row is its row header. */
  rows: string[][];
  /** Qualitative comparison: cells are left-aligned and wrap instead of being set as numbers. */
  text?: boolean;
}

export interface ProcessContent {
  /** Short industry / scenario label shown in the hero badge. */
  scenario: string;
  metaTitle: string;
  metaDescription: string;
  /** Search keywords for the Article schema. */
  keywords?: string[];
  /** Sub-headline under the H1. */
  tagline: string;
  /** Set while a page is still being completed (e.g. screenshots pending); shown in the hero and on the overview. */
  workInProgress?: string;
  /** Optional thesis between hero and definition: the stance the page argues for. */
  intro?: { heading: string; text: string[]; quote: string };
  /** Answer-first definition of the process — the paragraph answer engines quote. */
  definition: string;
  demoNote: string;
  /** Optional overview figure next to the definition (e.g. the event knowledge graph). */
  definitionImage?: ProcessImage;

  keyFacts: Array<{ value: string; label: string; detail: string }>;

  phasesHeading: string;
  phasesLead: string;
  /** Optional end-to-end perspective shown above the phase cards. */
  phasesImage?: ProcessImage;
  phases: Array<{
    title: string;
    summary: string;
    /** Either a linear sequence of steps … */
    steps?: string[];
    /** … or parallel strands that have to join again. */
    strands?: Array<{ name: string; steps: string[] }>;
    objects: string[];
    question: string;
    image?: ProcessImage;
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
    /** A business question put to Minerva, shown after the text. */
    prompt?: string;
    table?: ProcessTable;
    shift: { from: string; to: string };
    image?: ProcessImage;
    /** Further figures shown directly after the main one. */
    extraImages?: ProcessImage[];
    /** A second analysis step within the same finding (drill-down, context, hypothesis test). */
    deepDive?: {
      title: string;
      /** One or more business questions put to Minerva, shown above the text. */
      prompt?: string | string[];
      text: string[];
      questions?: string[];
      /** Short titled statements, e.g. the rules of a decision hypothesis. */
      points?: Array<{ title: string; text: string }>;
      images?: ProcessImage[];
    };
    /** A closing statement; without `text`, the title stands alone. */
    note?: { title: string; text?: string };
  }>;

  /** Why AI needs a causal analysis basis: titled blocks that each end in a quote. */
  aiContext?: {
    heading: string;
    lead: string;
    blocks: Array<{ title: string; text: string[]; quote: string }>;
    image?: ProcessImage;
    note?: string;
  };

  /** What the causal analysis changes in this case: numbered lessons after the AI context. */
  takeaways?: { heading: string; lead: string[]; items: Array<{ title: string; text: string }> };

  /** Context objects that enrich the analysis without being happy-path steps. */
  contextObjects?: { heading: string; lead: string; items: Array<{ name: string; text: string }> };

  /** Minerva time levers — only for cases that include a Minerva summary. */
  levers?: {
    heading: string;
    lead: string;
    rows: Array<{ area: string; statement: string; lever: string; value: string }>;
    image: ProcessImage;
  };

  /** Minerva cause model: findings condensed into separate cause–effect mechanisms. */
  causeModel?: {
    heading: string;
    lead: string;
    rows: Array<{ area: string; observation: string; question: string }>;
    images: ProcessImage[];
    note?: string;
  };

  /**
   * From finding to measure. Items with a `finding` render as a finding → direction → impact
   * table; without, as a numbered priority list. Quadrants, cost categories and the Impact
   * Board figures only appear when the case includes them.
   */
  measures?: {
    heading: string;
    lead: string;
    tableHeading?: string;
    quadrants?: Array<{ name: string; text: string }>;
    costCategories?: string[];
    items: Array<{ measure: string; benefit: string; finding?: string }>;
    image?: ProcessImage;
    extraImages?: ProcessImage[];
    note?: string;
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

  /** Closing summary with a one-line claim. */
  conclusion?: { heading: string; text: string[]; claim: string };

  faq: Array<{ question: string; answer: string }>;

  caseHeading: string;
  caseText: string;
  caseCta: string;
}

export interface EndToEndProcess {
  id: string;
  /** Process name, used as the H1 in both languages. */
  name: string;
  /** Full case description in the Help Center; without one, the case CTA books a demo. */
  caseUrl?: string;
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
  capacityToPayment: { src: capacityToPayment, width: 1517, height: 682 },
  cashDiscountLoss: { src: cashDiscountLoss, width: 1775, height: 275 },
  cashDiscountPayments: { src: cashDiscountPayments, width: 990, height: 614 },
  endToEndPerspective: { src: endToEndPerspective, width: 2000, height: 792 },
  eventKnowledgeGraph: { src: eventKnowledgeGraph, width: 1422, height: 866 },
  fulfilmentPaths: { src: fulfilmentPaths, width: 2000, height: 1021 },
  inspectionBatches: { src: inspectionBatches, width: 1815, height: 644 },
  inspectionTimePattern: { src: inspectionTimePattern, width: 2000, height: 814 },
  invoiceRework: { src: invoiceRework, width: 1732, height: 1036 },
  invoiceTicketContext: { src: invoiceTicketContext, width: 2000, height: 744 },
  maverickAttributes: { src: maverickAttributes, width: 1867, height: 919 },
  maverickBuying: { src: maverickBuying, width: 1006, height: 1283 },
  minervaCauseModel: { src: minervaCauseModel, width: 1068, height: 1050 },
  minervaKeyStatements: { src: minervaKeyStatements, width: 1057, height: 231 },
  minervaStructuralDeviations: { src: minervaStructuralDeviations, width: 1133, height: 1303 },
  supplierPerformance: { src: supplierPerformance, width: 2000, height: 809 },
  o2cEntityGraph: { src: o2cEntityGraph, width: 1621, height: 918 },
  o2cCausalPerspective: { src: o2cCausalPerspective, width: 1995, height: 706 },
  orderEntryRelease: { src: orderEntryRelease, width: 1277, height: 669 },
  deliveryInvoicing: { src: deliveryInvoicing, width: 2000, height: 593 },
  paymentDunningComplaints: { src: paymentDunningComplaints, width: 2000, height: 1193 },
  o2cKpiReport: { src: o2cKpiReport, width: 1176, height: 876 },
  complaintsManagementView: { src: complaintsManagementView, width: 1492, height: 1218 },
  skippedOrderReview: { src: skippedOrderReview, width: 1521, height: 733 },
  minervaComplaintReasons: { src: minervaComplaintReasons, width: 861, height: 815 },
  minervaFirstCausePicture: { src: minervaFirstCausePicture, width: 1333, height: 665 },
  specialValuesRefinement: { src: specialValuesRefinement, width: 1111, height: 814 },
  specialFeaturesDrilldown: { src: specialFeaturesDrilldown, width: 1052, height: 691 },
  o2cHypothesisTree: { src: o2cHypothesisTree, width: 1889, height: 761 },
  minervaAgentsVsLlm: { src: minervaAgentsVsLlm, width: 1600, height: 786 },
  impactBoardMatrix: { src: impactBoardMatrix, width: 1290, height: 1000 },
  impactBoardKanban: { src: impactBoardKanban, width: 1770, height: 917 },
  impactBoardQuadrangle: { src: impactBoardQuadrangle, width: 972, height: 900 },
  impactBoardRoi: { src: impactBoardRoi, width: 991, height: 1310 },
  a2dEntityModelDe: { src: a2dEntityModelDe, width: 2000, height: 1617 },
  a2dEntityModelEn: { src: a2dEntityModelEn, width: 2000, height: 1617 },
  a2dEndToEnd: { src: a2dEndToEnd, width: 2000, height: 822 },
  a2dPreparation: { src: a2dPreparation, width: 2000, height: 776 },
  a2dSurgery: { src: a2dSurgery, width: 2000, height: 926 },
  a2dBedRelease: { src: a2dBedRelease, width: 1773, height: 1014 },
  a2dDashboard: { src: a2dDashboard, width: 1240, height: 946 },
  a2dRawComparisons: { src: a2dRawComparisons, width: 1438, height: 426 },
  a2dTeamCCheck: { src: a2dTeamCCheck, width: 862, height: 741 },
  a2dStaffingCheck: { src: a2dStaffingCheck, width: 1076, height: 472 },
  a2dCancellationCauses: { src: a2dCancellationCauses, width: 1862, height: 775 },
  a2dDocumentedDelays: { src: a2dDocumentedDelays, width: 715, height: 596 },
  a2dFirstCasePunctuality: { src: a2dFirstCasePunctuality, width: 837, height: 406 },
  a2dReworkPattern: { src: a2dReworkPattern, width: 1905, height: 1036 },
  a2dReworkReasons: { src: a2dReworkReasons, width: 1280, height: 907 },
  a2dReworkByWard: { src: a2dReworkByWard, width: 618, height: 477 },
  a2dBedReleasePaths: { src: a2dBedReleasePaths, width: 747, height: 465 },
  a2dBedReleaseByWard: { src: a2dBedReleaseByWard, width: 282, height: 477 },
  a2dBedReleaseTimeline: { src: a2dBedReleaseTimeline, width: 1575, height: 765 },
  a2dFirstBedRelease: { src: a2dFirstBedRelease, width: 612, height: 557 },
  a2dForwardCascade: { src: a2dForwardCascade, width: 2000, height: 1538 },
  a2dForwardCascadeTable: { src: a2dForwardCascadeTable, width: 934, height: 859 },
  a2dBacklogView: { src: a2dBacklogView, width: 1805, height: 1162 },
  a2dBacklogCause: { src: a2dBacklogCause, width: 667, height: 792 },
  a2dFourTriggers: { src: a2dFourTriggers, width: 855, height: 657 },
  a2dBedReleaseChain: { src: a2dBedReleaseChain, width: 707, height: 657 },
  a2dImpactBoard: { src: a2dImpactBoard, width: 1261, height: 1001 },
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
  {
    id: 'purchase-to-pay',
    name: 'Purchase-to-Pay',
    caseUrl: 'https://docs.noreja.com/de/article/purchase-to-pay-einkauf-im-sondermaschinenbau',
    dateModified: '2026-09-24',
    content: {
      de: {
        scenario: 'End-to-End-Prozess · Einkauf im Sondermaschinenbau',
        metaTitle: 'Purchase-to-Pay Prozess: Causal Process Mining im Einkauf | Noreja',
        metaDescription:
          'Purchase-to-Pay vom Bedarf bis zur Zahlung: Prozessphasen, Geschäftsobjekte und fünf Findings aus einer Causal-Process-Mining-Analyse im Sondermaschinenbau – Maverick Buying, Rechnungsnacharbeit, geteilte Prüfkapazität, Skontoverlust und Lieferantenperformance.',
        tagline:
          'Vom internen Bedarf bis zur Zahlung: wie Causal Process Mining Freigabeumgehungen, Nacharbeit, Kapazitätsabhängigkeiten und Lieferantenperformance im Purchase-to-Pay-Prozess sichtbar und erklärbar macht.',
        definition:
          'Purchase-to-Pay (P2P) beschreibt den End-to-End-Prozess vom entstehenden Beschaffungsbedarf bis zur Bezahlung einer Rechnung. Im Sondermaschinenbau umfasst er Bestellanforderung und Freigabe, Bestellung und Bestellpositionen, die physische oder digitale Bereitstellung, Wareneingang und Prüfung sowie Rechnung, Freigabe und Zahlung. Auf einer Prozessfolie wirkt das linear – in den operativen Daten ist P2P ein Netz aus verbundenen Geschäftsobjekten. Noreja übernimmt diese Daten granular in den Event Knowledge Graph und leitet erst für eine konkrete Fachfrage die passende Prozessperspektive ab.',
        demoNote:
          'Hinweis: Alle Kennzahlen stammen aus einem synthetischen Demonstrationsdatensatz. Sie veranschaulichen Analysewege, fachliche Zusammenhänge und Methoden von Causal Process Mining und sind keine Produktivkennzahlen eines Kunden.',
        definitionImage: {
          ...IMG.eventKnowledgeGraph,
          alt: 'Event Knowledge Graph des Purchase-to-Pay-Prozesses: Bestellanforderung, Freigaben A und B, Bestellung, Bestellpositionen für Hardware und Software, Wareneingang, Prüfung, Rechnung, Rechnungslauf und Zahlung als verbundene Objekte',
          caption: 'Event Knowledge Graph des Purchase-to-Pay-Prozesses: Geschäftsobjekte und ihre Beziehungen bleiben erhalten.',
        },

        keyFacts: [
          {
            value: '1.145',
            label: 'Maverick Buying',
            detail: '26,3 % der freigabepflichtigen Bestellanforderungen umgehen den vorgesehenen Freigabepfad',
          },
          {
            value: '647',
            label: 'Rechnungsnacharbeit',
            detail: 'Fälle in zwei sichtbaren Wiederholungsschleifen mit 554 und 93 Fällen',
          },
          {
            value: '92',
            label: 'Prüfkapazität überschritten',
            detail: '1,62 % von 5.670 Wareneingangsprüfungen',
          },
          {
            value: '2.209',
            label: 'Zahlungen nach Skontofrist',
            detail: 'gegenüber 2.717 Zahlungen innerhalb der Skontofrist',
          },
          {
            value: '≈ 1,02 Mio. €',
            label: 'Modellierter Skontoverlust',
            detail: 'perspektivweiter Demonstrationswert über alle Zahlungen außerhalb der Skontofrist',
          },
          {
            value: '3',
            label: 'Auffällige Lieferantengruppen',
            detail: 'rund 14 bis 15,5 Tage statt überwiegend rund 5,5 bis 6,2 Tage bei den übrigen Lieferanten',
          },
        ],

        phasesHeading: 'Der Prozess in vier Phasen',
        phasesLead:
          'Die End-to-End-Perspektive verbindet die für die Fachfrage relevanten Teile des gemeinsamen Prozesswissens. Sie reduziert die Komplexität für den Prozessmanager, ohne die zugrunde liegenden Objektbeziehungen zu verlieren.',
        phasesImage: {
          ...IMG.endToEndPerspective,
          alt: 'End-to-End-Perspektive des Purchase-to-Pay-Prozesses von der Bestellanforderung mit und ohne Freigabe über Bestellung, Wareneingang und Prüfung bis zu Rechnung und Zahlung innerhalb bzw. außerhalb der Skontofrist',
          caption: 'End-to-End-Perspektive des Purchase-to-Pay-Prozesses.',
        },
        phases: [
          {
            title: 'Bedarf & Freigabe',
            summary:
              'Eine Bestellanforderung wird angelegt. Abhängig von Wert und Beschaffungskontext läuft sie direkt weiter oder durchläuft einen mehrstufigen Freigabepfad. Erst danach wird die Bestellung erzeugt.',
            steps: ['Bestellanforderung erstellt', 'Freigabebedarf bestimmen', 'Freigabe A', 'Freigabe B', 'Bestellung erstellt'],
            objects: ['Bestellanforderung', 'Freigabe A', 'Freigabe B', 'Bestellung', 'Anforderer', 'Kostenstelle'],
            question: 'Werden die für diesen konkreten Bedarf vorgesehenen Freigaben tatsächlich durchlaufen?',
          },
          {
            title: 'Bestellung & Erfüllungsweg',
            summary:
              'Nach der Bestellung entstehen Bestellpositionen. Je nach Produktgruppe unterscheiden sich die weiteren Wege: Physische Beschaffung benötigt Lieferung und Wareneingang, Software kann über eine Bereitstellung geführt werden.',
            strands: [
              { name: 'Physische Ware', steps: ['Bestellposition angelegt (HW)', 'Lieferung', 'Wareneingang', 'Wareneingangsprüfung'] },
              { name: 'Software', steps: ['Bestellposition angelegt (SW)', 'Software-Bereitstellung'] },
            ],
            objects: ['Bestellung', 'Bestellposition', 'Material', 'Lieferant', 'Vertrag', 'Lieferung', 'Software-Bereitstellung'],
            question: 'Welcher Beschaffungsweg ist für die jeweilige Position fachlich vorgesehen – und wo entstehen Unterschiede in Laufzeit oder Verhalten?',
            image: {
              ...IMG.fulfilmentPaths,
              alt: 'Prozessgraph mit physischem Pfad über Wareneingang, geplante und gebündelte Prüfung sowie Software-Pfad über Software-Bereitstellung, die beide in die Rechnungserfassung münden',
              caption: 'Physischer Pfad und Software-Pfad bis zur Rechnung.',
            },
          },
          {
            title: 'Wareneingang & Prüfung',
            summary:
              'Physische Waren werden nach dem Eingang geprüft. Dabei arbeitet nicht jeder Vorgang für sich: Viele Wareneingänge teilen sich gemeinsame Prüfressourcen und werden in gebündelten Prüfläufen verarbeitet.',
            steps: ['Wareneingang eingegangen', 'Wareneingangsprüfung geplant', 'Prüfung gebündelt durchgeführt'],
            objects: ['Wareneingang', 'Wareneingangsprüfung', 'Prüfplatz', 'Prüf-Batch'],
            question: 'Wartet ein Vorgang wegen seines eigenen Ablaufs – oder weil mehrere Vorgänge dieselbe Ressource und denselben Prüflauf teilen?',
          },
          {
            title: 'Rechnung, Freigabe & Zahlung',
            summary:
              'Nach Erfüllung der Bestellung wird die Rechnung erfasst, freigegeben und im Rechnungslauf verarbeitet. Fachliche Abweichungen können eine manuelle Klärung oder Nachbearbeitung auslösen. Für die Zahlungssteuerung ist außerdem relevant, ob die Zahlung innerhalb der Skontofrist erfolgt.',
            steps: ['Rechnung erfasst', 'Rechnung freigegeben', 'Rechnungslauf durchgeführt', 'Zahlung ausgeführt'],
            objects: ['Rechnung', 'Rechnungsfreigabe', 'Rechnungslauf', 'Zahlung', 'Lieferantenklärung', 'Skontofrist'],
            question: 'Welche Prozessbedingungen erzeugen Nacharbeit, Wartezeit oder einen messbaren finanziellen Effekt?',
          },
        ],
        objectsNote:
          'Eine Bestellanforderung kann unterschiedliche Freigabelogiken auslösen, eine Bestellung mehrere Positionen enthalten, mehrere Wareneingänge teilen sich Prüfkapazitäten, und Rechnungen stehen in Beziehung zu Bestellung, Wareneingang, Konditionen und Zahlung. Genau diese Beziehungen bleiben im Event Knowledge Graph erhalten.',

        findingsHeading: 'Fünf Findings entlang des Purchase-to-Pay-Prozesses',
        findingsLead:
          'Die Findings beantworten unterschiedliche Fachfragen. Entscheidend ist nicht nur, was auffällig ist, sondern warum es passiert, welche Bedingungen dahinterstehen und welcher Hebel sich daraus ableiten lässt.',
        findings: [
          {
            area: 'Compliance',
            title: 'Der schnellste Pfad ist der falsche',
            metric: '1.145',
            metricLabel: 'freigabepflichtige Bestellanforderungen führen direkt zur Bestellung (26,3 %)',
            text: [
              'Nicht jedes Prozessproblem zeigt sich als Verzögerung. Im Einkauf kann ein Vorgang sogar besonders schnell sein, weil notwendige Kontrollschritte fehlen. Der Analyzer interpretiert den direkten Übergang deshalb nicht als zusätzliche Prozessvariante, sondern klassifiziert ihn fachlich als Ignorieren eines vorgesehenen Freigabepfads.',
              'Der Direktpfad benötigt im Mittel nur rund 15 Minuten bis zur Bestellung, der reguläre Weg über die Freigaben mehrere Stunden. Genau darin liegt der Konflikt: Was aus Performance-Sicht attraktiv wirkt, ist aus Governance- und Compliance-Sicht problematisch.',
            ],
            shift: {
              from: 'Welche Variante ist besonders schnell?',
              to: 'Welche fachlich notwendige Kontrolle fehlt – und bei welchen Geschäftsobjekten konzentriert sich das Verhalten?',
            },
            image: {
              ...IMG.maverickBuying,
              alt: 'Prozessgraph Bestellanforderung: roter Direktpfad von der Bestellanforderung mit Freigabepflicht zur Bestellung (1.145 Fälle, 26 %, rund 15 Minuten) an Bestellfreigabe A und B vorbei',
              caption: 'Maverick Buying als Fehlermuster „Ignorieren“: der Direktpfad umgeht Bestellfreigabe A und B.',
            },
            deepDive: {
              title: 'Von 1.145 Fällen zu einer konkreten Ursachenhypothese',
              text: [
                'Im nächsten Schritt werden die betroffenen Geschäftsobjekte nach gemeinsamen Merkmalen untersucht. Von den 1.145 Fällen entfallen 597 auf den Anforderer Kaya und 515 auf Braun – zusammen rund 97 % der sichtbaren Maverick-Buying-Fälle. Die Kostenstellen sind dagegen wesentlich gleichmäßiger verteilt.',
                'Aus einem abstrakten Compliance-Finding wird so eine konkrete organisatorische Hypothese: Warum konzentriert sich die Freigabeumgehung auf diese Anforderergruppe? Mögliche Erklärungen – Berechtigungen, Zeitdruck, lokale Arbeitsweisen oder nicht dokumentierte Sonderregeln – müssen fachlich geprüft werden. Die Analyse grenzt die relevante Population ein, ohne den organisatorischen Grund zu erfinden.',
              ],
              images: [
                {
                  ...IMG.maverickAttributes,
                  alt: 'Attributverteilung der 1.145 Maverick-Buying-Fälle: Anforderer Kaya 52,14 % und Braun 44,98 %, Kostenstellen KS-100 bis KS-400 nahezu gleich verteilt',
                  caption: 'Attributverteilung der Maverick-Buying-Fälle: zwei Anforderer, gleichmäßig verteilte Kostenstellen.',
                },
              ],
            },
            note: {
              title: 'Geschwindigkeit ist nur eine Dimension',
              text: 'Der schnellste Prozesspfad ist nicht automatisch der beste Prozesspfad. Ein schneller Ablauf kann fachlich schlechter sein als ein langsamerer, aber regelkonformer.',
            },
          },
          {
            area: 'Rechnungsbearbeitung',
            title: 'Nacharbeit ist ein Symptom, Kontext liefert die Erklärung',
            metric: '647',
            metricLabel: 'Fälle in zwei sichtbaren Wiederholungsschleifen (554 und 93 Fälle)',
            text: [
              'Lange Rechnungsdurchlaufzeiten können durch Wartezeit, Freigabe, Klärung oder echte Nacharbeit entstehen. Deshalb wird nicht nur die Dauer gemessen, sondern das beobachtete Verhalten als Fehlermuster klassifiziert: Zwei Nachbearbeitungsschleifen umfassen 554 beziehungsweise 93 Fälle.',
              'Die Aussage „Rechnungen werden nachbearbeitet“ reicht für eine Verbesserung aber noch nicht aus. Entscheidend ist, warum eine manuelle Klärung notwendig wird.',
            ],
            shift: {
              from: 'Wo ist die Durchlaufzeit lang?',
              to: 'Welche fachliche Inkonsistenz erzeugt die Nacharbeit – und welche Informationen außerhalb der operativen Prozessdaten erklären sie?',
            },
            image: {
              ...IMG.invoiceRework,
              alt: 'Prozessgraph Rechnungsbearbeitung mit aktivem Fehlermuster „Nachbearbeitung“: rote Schleifen von der Rechnungserfassung über die manuelle Klärung (554 Fälle) und vom Rechnungslauf zurück (93 Fälle)',
              caption: 'Nachbearbeitung in der Rechnungsbearbeitung: zwei sichtbare Wiederholungsschleifen.',
            },
            deepDive: {
              title: 'Prozessdaten plus Fachkontext',
              text: [
                'In der Demo wurden zusätzliche Informationen aus einem IT-/Support-Ticketsystem in Noreja Context eingebunden. Minerva verbindet die betroffenen Rechnungen über ihre Rechnungs-ID mit diesem Kontext. Sichtbar werden konkrete Klärungsgründe: Abweichung zwischen Rechnung und Bestellung, unklare Rechnungspositionen und Preisabweichung zu hinterlegten Konditionen.',
                'Die Aussage verändert sich damit zu: „Diese fachlichen Gründe lösen die Nacharbeit aus.“ Das ist für die Maßnahmenableitung entscheidend – Mengen- oder Bestellabweichungen verlangen andere Gegenmaßnahmen als unklare Rechnungspositionen oder falsche Konditionsdaten.',
              ],
              images: [
                {
                  ...IMG.invoiceTicketContext,
                  alt: 'Minerva-Antwort neben dem Prozessgraphen: Tabelle mit den Rechnungs-IDs 1669, 1945 und 2644 und ihren Klärungsgründen – Abweichung zur Bestellung, unklare Positionen, Preisabweichung',
                  caption: 'Minerva verbindet Rechnungsnacharbeit mit Kontext aus dem Ticketsystem.',
                },
              ],
            },
          },
          {
            area: 'Shared Capacity',
            title: 'Wenn mehrere Vorgänge dieselbe Ressource teilen',
            metric: '92',
            metricLabel: 'Wareneingangsprüfungen mit überschrittener Prüfkapazität (1,62 % von 5.670)',
            text: [
              'Wareneingangsprüfungen sind nicht nur isolierte Schritte einer einzelnen Bestellung. Mehrere Prüfungen können demselben Prüflauf zugeordnet sein und teilen sich die verfügbaren Ressourcen. Ein Vorgang kann fachlich korrekt sein und trotzdem warten, weil andere Vorgänge denselben Prüfslot beanspruchen.',
              'Die Zeitperspektive macht diese Logik sichtbar: Während Bestellungen und Wareneingänge über die Zeit verteilt entstehen, konzentrieren sich die gebündelt durchgeführten Prüfungen auf wiederkehrende Zeitpunkte.',
            ],
            shift: {
              from: 'Die Prüfung ist langsam.',
              to: 'Welche gemeinsame Ressource hält diese konkreten Vorgänge zurück – und unter welchen Bedingungen entsteht der Rückstau?',
            },
            image: {
              ...IMG.inspectionBatches,
              alt: 'Prozessgraph von „Wareneingangsprüfung geplant“ zu „Prüfung gebündelt durchgeführt“ mit Zeitachse',
              caption: 'Geplante Wareneingangsprüfungen und gemeinsame Prüf-Batches.',
            },
            extraImages: [
              {
                ...IMG.inspectionTimePattern,
                alt: 'Punktdiagramm über die Zeit: Bestellungen verteilt, gebündelt durchgeführte Prüfungen konzentriert auf wiederkehrende Zeitpunkte',
                caption: 'Zeitmuster der gebündelten Wareneingangsprüfung.',
              },
            ],
            deepDive: {
              title: 'Kapazitätsüberschreitung gezielt isolieren',
              text: [
                'Im synthetischen Lauf lassen sich 92 Wareneingangsprüfungen identifizieren, bei denen die verfügbare Prüfkapazität zum vorgesehenen Zeitpunkt überschritten war. Aus dem allgemeinen Zeitmuster wird so ein konkretes operatives Finding: Die Wartezeit ist mit einer dokumentierten Prozessbedingung verknüpft – die gemeinsam genutzte Kapazität reichte für diese Vorgänge nicht aus.',
              ],
              questions: [
                'Sind die Prüfintervalle passend dimensioniert?',
                'Müssen bestimmte Warengruppen priorisiert werden?',
                'Ist zusätzliche Kapazität sinnvoll?',
                'Können Prüfregeln differenziert werden?',
                'Welche Objekte verursachen wiederkehrend den Backlog?',
              ],
            },
            note: {
              title: 'Ursachen außerhalb des einzelnen Falls',
              text: 'Nicht jede Ursache eines Prozessproblems liegt innerhalb derselben Prozessinstanz. In der isolierten Fallhistorie ist kein Fehler erkennbar – erst die gemeinsam genutzte Ressource erklärt die Wartezeit.',
            },
          },
          {
            area: 'Zahlung',
            title: 'Vom sichtbaren Zusammenhang zur geprüften Wirkung',
            metric: '2.209',
            metricLabel: 'Zahlungen außerhalb der Skontofrist (gegenüber 2.717 innerhalb) · modellierter Skontoverlust rund 1,02 Mio. €',
            text: [
              'Im End-to-End-Prozess ist sichtbar, ob Zahlungen innerhalb oder außerhalb der Skontofrist erfolgen. Der Skontoverlust wird als eigenes Zahlungsattribut bis auf Euro-Ebene quantifiziert; für die 2.209 Zahlungen außerhalb der Frist ergibt sich ein modellierter Gesamtwert von rund 1,02 Mio. €.',
              'Damit entsteht eine wirtschaftlich relevante Frage: Welche Prozessbedingungen tragen tatsächlich dazu bei, dass die Skontofrist verfehlt wird?',
            ],
            shift: {
              from: 'Wo sehen wir gleichzeitig Wartezeit und Kosten?',
              to: 'Welche veränderbare Bedingung erklärt den wirtschaftlichen Effekt tatsächlich?',
            },
            image: {
              ...IMG.cashDiscountPayments,
              alt: 'Prozessgraph ab dem Rechnungslauf: Verzweigung in „Zahlung außerhalb Skontofrist“ (2.209) und „Zahlung innerhalb Skontofrist“ (2.717)',
              caption: 'Zahlungen innerhalb und außerhalb der Skontofrist.',
            },
            extraImages: [
              {
                ...IMG.cashDiscountLoss,
                alt: 'Attributauswertung skonto_verlust_eur über 2.209 Zahlungen mit Verteilung und Summe von 1.022.005,75 €',
                caption: 'Modellierter Skontoverlust als Zahlungsattribut: Summe 1.022.005,75 € im Demodatensatz.',
              },
            ],
            deepDive: {
              title: 'Kausalität bedeutet auch, Hypothesen zu schärfen',
              text: [
                'Eine plausible erste Hypothese: Der Rückstau in der Wareneingangsprüfung verzögert spätere Zahlungen. Noreja verfolgt deshalb die tatsächlich kapazitätsüberschrittenen Prüfungen entlang ihrer Beziehungen bis zur Zahlung.',
                'Die Analyse trennt dabei zwei Dinge, die in einer reinen End-to-End-Sicht leicht verwechselt werden: Ein operativer Engpass kann real sein, ohne automatisch der alleinige Treiber eines später sichtbaren finanziellen Effekts zu sein. Der Prüfstau bleibt ein relevantes operatives Finding; für den Skontoverlust müssen zusätzlich Rechnungslauf, Zahlungssteuerung, fachliche Klärungen und weitere Bedingungen betrachtet werden.',
              ],
              images: [
                {
                  ...IMG.capacityToPayment,
                  alt: 'Prozessgraph der kapazitätsüberschrittenen Prüfungen: von „Prüfung gebündelt durchgeführt“ über Rechnungserfassung, Freigabe und Rechnungslauf bis „Zahlung außerhalb Skontofrist“',
                  caption: 'Kapazitätsüberschrittene Prüfungen, verfolgt bis zur Zahlung.',
                },
              ],
            },
            note: {
              title: 'Keine vorschnelle Root Cause',
              text: 'Causal Process Mining prüft Ursachenhypothesen entlang derselben betroffenen Geschäftsobjekte – statt zeitliche Nähe mit Ursache gleichzusetzen.',
            },
          },
          {
            area: 'Lieferantenperformance',
            title: 'Derselbe Standardprozess, andere Laufzeit',
            metric: '≈ 2×',
            metricLabel: 'so lange bei drei Lieferantengruppen: rund 14 bis 15,5 Tage statt überwiegend 5,5 bis 6,2 Tage',
            text: [
              'Nicht jede Verzögerung entsteht im eigenen Prozess. Die Lieferantenanalyse vergleicht dieselbe Beschaffungslogik entlang der verbundenen Lieferantenobjekte. Die zusätzliche Zeit konzentriert sich vor allem auf den Übergang Bestellung erstellt → Wareneingang eingegangen.',
              'Gleichzeitig folgen die langsamen Lieferanten überwiegend dem normalen Prozesspfad, und auch eine außergewöhnlich hohe Nacharbeitsrate erklärt ihre längere Dauer nicht. Ein interner Workflow-Umbau adressiert keine externe Lieferverzögerung – stattdessen rücken Lieferzeiten, Disposition, Vereinbarungen und Lieferantensteuerung in den Fokus.',
            ],
            shift: {
              from: 'Warum ist unser P2P-Prozess langsam?',
              to: 'Warum benötigt derselbe Standardprozess bei bestimmten Lieferanten deutlich länger?',
            },
            image: {
              ...IMG.supplierPerformance,
              alt: 'Lieferantenanalyse: Prozessgraph Bestellung erstellt → Wareneingang eingegangen neben einer Minerva-Auswertung mit drei Lieferanten bei rund 14 bis 15 Tagen Durchlaufzeit',
              caption: 'Analyse der Lieferantenperformance: die Verzögerung liegt zwischen Bestellung und Wareneingang.',
            },
          },
        ],

        causeModel: {
          heading: 'Von einzelnen Findings zu einem Ursachenbild',
          lead:
            'Die Findings gehören zum selben End-to-End-Prozess, haben aber unterschiedliche Wirkmechanismen. Minerva führt die Ergebnisse aus den verschiedenen Perspektiven zusammen – nicht, um eine universelle „Root Cause“ zu konstruieren, sondern um die Ursache-Wirkungs-Mechanismen sauber zu trennen.',
          rows: [
            { area: 'Freigabe', observation: '1.145 Maverick-Buying-Fälle', question: 'Warum konzentriert sich die Umgehung auf bestimmte Anforderer?' },
            { area: 'Rechnung', observation: '647 sichtbare Rework-Fälle', question: 'Welche fachlichen Klärungsgründe wiederholen sich?' },
            { area: 'Wareneingangsprüfung', observation: '92 Kapazitätsüberschreitungen', question: 'Welche gemeinsame Ressource erzeugt den Backlog?' },
            { area: 'Zahlung', observation: '2.209 Zahlungen außerhalb Skontofrist', question: 'Welche Prozessbedingungen treiben den monetären Effekt?' },
            { area: 'Lieferanten', observation: 'drei deutlich langsamere Gruppen', question: 'Liegt der Hebel intern oder beim externen Partner?' },
          ],
          images: [
            {
              ...IMG.minervaStructuralDeviations,
              alt: 'Minerva-Analyse der Prozessauslassungen: Tabelle struktureller Defekte im P2P-Prozess, angeführt von Maverick Buying (1.145) und Rechnungsnacharbeit (554)',
              caption: 'Minerva fasst strukturelle Abweichungen im P2P-Prozess zusammen.',
            },
            {
              ...IMG.minervaCauseModel,
              alt: 'Minerva-Auswertung: Tortendiagramm der pausierten Objekte und Ursachendiagramm mit Maverick Buying, Rechnungsnacharbeit, gebündelter Bearbeitung und Zahlung außerhalb der Skontofrist',
              caption: 'Minerva verdichtet die Findings zu einem Ursachenmodell.',
            },
            {
              ...IMG.minervaKeyStatements,
              alt: 'Kernursachen laut Minerva: Maverick Buying als größtes strukturelles Risiko, Rechnungserfassung als wichtigste Nacharbeitsquelle, gebündelte Prüfung und Rechnungslauf als Verzögerungsursache',
              caption: 'Verdichtete Kernaussagen aus der Minerva-Analyse.',
            },
          ],
          note: 'Die Business-Frage steht am Anfang – nicht die Bedienlogik des Analysewerkzeugs.',
        },

        measures: {
          heading: 'Vom Finding zur priorisierten Maßnahme',
          lead:
            'Ein Finding verändert noch keinen Prozess. Im Business Impact Board werden Findings nach Wirkung, Umsetzungsaufwand und Unsicherheit bewertet – Process Excellence und Fachbereich entscheiden gemeinsam, welche Verbesserungsinitiative zuerst umgesetzt wird und welche bewusst später folgt.',
          tableHeading: 'Beispielhafte Maßnahmenfelder',
          items: [
            {
              finding: 'Maverick Buying',
              measure: 'Berechtigungen und legitime Sonderregeln prüfen, Bypass-Verhalten gezielt adressieren',
              benefit: 'Compliance, Governance, Risiko',
            },
            {
              finding: 'Rechnungsnacharbeit',
              measure: 'Validierungen zwischen Bestellung, Rechnung und Konditionen früher ausführen',
              benefit: 'Nacharbeitsaufwand, Durchlaufzeit, Qualität',
            },
            {
              finding: 'Prüfkapazität / Batching',
              measure: 'Prüfintervalle, Priorisierung und Ressourcensteuerung optimieren',
              benefit: 'Wartezeit, Ressourcennutzung, Stabilität',
            },
            {
              finding: 'Skontoverlust',
              measure: 'Rechnungslauf und Zahlungslogik auf vermeidbare Verzögerungen untersuchen',
              benefit: 'Kosten, Cashflow, Skontonutzung',
            },
            {
              finding: 'Lieferantenperformance',
              measure: 'Langsame Lieferantengruppen gezielt mit Lieferzeit- und Dispositionsdaten analysieren',
              benefit: 'Versorgungssicherheit, Durchlaufzeit',
            },
          ],
          note: 'Die Priorisierung ist eine fachliche Entscheidung. Minerva bereitet Analysewege, Kontext und Handlungsoptionen vor; die Verantwortung für die Maßnahme bleibt beim Prozessverantwortlichen und Fachbereich.',
        },

        loop: {
          heading: 'Der Kreislauf: Insight → Action → Impact → Feedback',
          lead:
            'Die Analyse endet nicht mit dem Finding und auch nicht mit der Umsetzung einer Maßnahme. Entscheidend ist, ob sich das Prozessverhalten danach tatsächlich verändert.',
          steps: [
            { step: 'Insight', text: 'Fehlermuster, Zeitmuster, fehlende Voraussetzung oder auffällige Objektgruppe erkennen' },
            { step: 'Action', text: 'Ursache verstehen, Verbesserungshypothese formulieren, Wirkung und Aufwand bewerten und priorisieren' },
            { step: 'Impact', text: 'Maßnahme umsetzen und den erwarteten fachlichen bzw. wirtschaftlichen Effekt definieren' },
            { step: 'Feedback', text: 'Wirkung erneut mit denselben granularen Daten und derselben Prozesslogik messen' },
          ],
          questions: [
            'Wird Maverick Buying tatsächlich seltener?',
            'Sinkt die Rechnungsnacharbeit bei den adressierten Klärungsgründen?',
            'Geht der Backlog an der Wareneingangsprüfung zurück?',
            'Werden Lieferzeiten bei den betroffenen Lieferanten stabiler?',
            'Verbessert sich die Skontonutzung tatsächlich?',
            'Hat sich das Problem verschoben oder wurde es wirklich gelöst?',
          ],
        },

        principlesHeading: 'Fünf Prinzipien für die Analyse',
        principles: [
          {
            title: 'Granularität erhalten',
            text: 'Bestellanforderung, Freigabe, Bestellung, Position, Wareneingang, Prüfung, Rechnung und Zahlung bleiben mitsamt ihren Beziehungen erhalten – nicht vorab auf eine lineare Prozesssicht reduziert.',
          },
          {
            title: 'Komplexität fachlich reduzieren',
            text: 'Für eine konkrete Fachfrage entsteht eine passende Perspektive auf den Event Knowledge Graph – einfacher, ohne die Beziehungen zu verlieren.',
          },
          {
            title: 'Kausale Hypothesen prüfen',
            text: 'Auffälligkeiten werden nicht automatisch als Ursache interpretiert, sondern entlang derselben Geschäftsobjekte gegen den beobachteten Effekt geprüft.',
          },
          {
            title: 'Kontext einbeziehen',
            text: 'Tickets, Kommentare, Qualitätsmeldungen oder andere Fachinformationen werden mit den betroffenen Geschäftsobjekten verbunden.',
          },
          {
            title: 'Erkenntnisse operationalisieren',
            text: 'Findings werden zu Verbesserungshypothesen, nach Wirkung, Aufwand und Unsicherheit priorisiert und nach der Umsetzung erneut gemessen.',
          },
        ],

        faq: [
          {
            question: 'Was ist ein Purchase-to-Pay-Prozess?',
            answer:
              'Purchase-to-Pay ist der End-to-End-Prozess vom entstehenden Beschaffungsbedarf bis zur Zahlung. Im gezeigten Sondermaschinenbau-Szenario umfasst er Bestellanforderung, Freigaben, Bestellung und Bestellpositionen, physische bzw. digitale Erfüllung, Wareneingang und Prüfung sowie Rechnung, Freigabe und Zahlung.',
          },
          {
            question: 'Warum ist P2P für Causal Process Mining besonders interessant?',
            answer:
              'Weil viele fachlich unterschiedliche Geschäftsobjekte und Abhängigkeiten zusammenspielen. Eine Bestellung kann mehrere Positionen enthalten, physische und digitale Beschaffung folgen unterschiedlichen Wegen, Prüfressourcen werden von mehreren Vorgängen gleichzeitig genutzt und Rechnungen beziehen sich auf Bestellung, Wareneingang und Konditionen. Ursachen sind deshalb nicht immer dort sichtbar, wo ihre Wirkung später auftritt.',
          },
          {
            question: 'Was ist Maverick Buying?',
            answer:
              'Maverick Buying bezeichnet hier den Fall, dass eine eigentlich freigabepflichtige Bestellanforderung direkt zur Bestellung führt und vorgesehene Freigabeschritte umgangen werden. Im synthetischen Demo-Run betrifft das 1.145 Fälle bzw. 26,3 % der freigabepflichtigen Anforderungen.',
          },
          {
            question: 'Warum ist eine kurze Durchlaufzeit nicht automatisch positiv?',
            answer:
              'Weil Geschwindigkeit nur eine Dimension von Prozessqualität ist. Der Maverick-Buying-Pfad ist deutlich schneller als der reguläre Freigabepfad, gerade weil Kontrollen fehlen. Ein schneller Prozess kann damit fachlich schlechter sein als ein langsamerer, aber regelkonformer.',
          },
          {
            question: 'Wie hilft zusätzlicher Kontext bei Rechnungsnacharbeit?',
            answer:
              'Der Analyzer zeigt zunächst, dass Nacharbeit oder manuelle Klärung stattfindet. Über Noreja Context werden zusätzliche Fachinformationen – etwa aus einem Ticketsystem – mit der betroffenen Rechnungs-ID verbunden. So werden konkrete Gründe wie Bestellabweichungen, unklare Rechnungspositionen oder Konditionsprobleme sichtbar.',
          },
          {
            question: 'Was bedeutet Cross-Case-Abhängigkeit bei der Wareneingangsprüfung?',
            answer:
              'Mehrere Wareneingänge teilen sich gemeinsame Prüfressourcen und werden in denselben Batchläufen verarbeitet. Ein einzelner Vorgang kann deshalb warten, obwohl in seiner eigenen Historie kein Fehler erkennbar ist – die Ursache liegt in einer gemeinsam genutzten Ressource außerhalb dieses einen Vorgangs.',
          },
          {
            question: 'Verursacht der Prüfstau automatisch den Skontoverlust?',
            answer:
              'Nein. Die Wareneingangsprüfung kann ein realer operativer Engpass sein. Für die wirtschaftliche Wirkung muss aber separat geprüft werden, ob dieselben betroffenen Geschäftsobjekte später tatsächlich überproportional die Skontofrist verfehlen. Causal Process Mining trennt sichtbare Korrelationen von geprüften Ursache-Wirkungs-Hypothesen.',
          },
          {
            question: 'Welche Rolle spielt Minerva?',
            answer:
              'Minerva unterstützt den Prozessmanager dabei, fachliche Fragen über Prozesswissen, Analyseergebnisse und zusätzlichen Kontext hinweg zu untersuchen. Sie führt Findings zusammen, bildet Vergleichsgruppen, strukturiert Ursachenhypothesen und bereitet Analysewege vor. Die Entscheidung über Maßnahmen bleibt beim Menschen.',
          },
          {
            question: 'Wie werden Findings priorisiert?',
            answer:
              'Prozessverantwortliche bewerten Findings beispielsweise nach Wirkung, Umsetzungsaufwand und Unsicherheit. So wird aus einer analytischen Auffälligkeit eine priorisierte Verbesserungsinitiative, deren Wirkung nach der Umsetzung erneut gegen die granularen Prozessdaten gemessen wird.',
          },
          {
            question: 'Stammen die Kennzahlen von einem echten Sondermaschinenbauer?',
            answer:
              'Nein. Alle Kennzahlen stammen aus einem synthetischen Demonstrationsdatensatz. Sie machen Analysewege, kausale Fragestellungen und die Verbindung von Prozessdaten mit fachlichem Kontext nachvollziehbar.',
          },
        ],

        caseHeading: 'Die vollständige Case-Beschreibung',
        caseText:
          'Event Knowledge Graph, End-to-End-Perspektive, alle fünf Findings mit ihren Analyseschritten, das Minerva-Ursachenmodell und der Weg zur priorisierten Maßnahme – Schritt für Schritt im Noreja Help Center.',
        caseCta: 'Case im Help Center lesen',
      },

      en: {
        scenario: 'End-to-end process · Procurement in special machine building',
        metaTitle: 'Purchase-to-Pay Process: Causal Process Mining in Procurement | Noreja',
        metaDescription:
          'Purchase-to-Pay from requirement to payment: process phases, business objects and five findings from a causal process mining analysis in special machine building – maverick buying, invoice rework, shared inspection capacity, lost cash discounts and supplier performance.',
        tagline:
          'From internal requirement to payment: how causal process mining makes approval bypasses, rework, capacity dependencies and supplier performance in purchase-to-pay visible and explainable.',
        definition:
          'Purchase-to-Pay (P2P) is the end-to-end process from an emerging procurement need to the payment of an invoice. In special machine building it covers purchase requisition and approval, purchase order and order items, physical or digital fulfilment, goods receipt and inspection, and invoice, approval and payment. On a process slide it looks linear – in the operational data P2P is a network of connected business objects. Noreja takes this data in at full granularity in the event knowledge graph and derives the fitting process perspective only for a concrete business question.',
        demoNote:
          'Note: all figures come from a synthetic demonstration dataset. They illustrate analysis paths, business relationships and methods of causal process mining and are not production figures of any customer.',
        definitionImage: {
          ...IMG.eventKnowledgeGraph,
          alt: 'Event knowledge graph of the purchase-to-pay process: purchase requisition, approvals A and B, purchase order, order items for hardware and software, goods receipt, inspection, invoice, invoice run and payment as connected objects',
          caption: 'Event knowledge graph of the purchase-to-pay process: business objects and their relationships are preserved.',
        },

        keyFacts: [
          {
            value: '1,145',
            label: 'Maverick buying',
            detail: '26.3% of requisitions requiring approval bypass the intended approval path',
          },
          {
            value: '647',
            label: 'Invoice rework',
            detail: 'cases in two visible rework loops with 554 and 93 cases',
          },
          {
            value: '92',
            label: 'Inspection capacity exceeded',
            detail: '1.62% of 5,670 goods-receipt inspections',
          },
          {
            value: '2,209',
            label: 'Payments after discount period',
            detail: 'compared to 2,717 payments within the cash discount period',
          },
          {
            value: '≈ €1.02m',
            label: 'Modelled lost cash discount',
            detail: 'perspective-wide demonstration value across all payments outside the discount period',
          },
          {
            value: '3',
            label: 'Conspicuous supplier groups',
            detail: 'about 14 to 15.5 days instead of mostly about 5.5 to 6.2 days for the other suppliers',
          },
        ],

        phasesHeading: 'The process in four phases',
        phasesLead:
          'The end-to-end perspective connects the parts of the shared process knowledge that matter for the business question. It reduces complexity for the process manager without losing the underlying object relationships.',
        phasesImage: {
          ...IMG.endToEndPerspective,
          alt: 'End-to-end perspective of the purchase-to-pay process from purchase requisition with and without approval through purchase order, goods receipt and inspection to invoice and payment within or outside the cash discount period',
          caption: 'End-to-end perspective of the purchase-to-pay process.',
        },
        phases: [
          {
            title: 'Requirement & approval',
            summary:
              'A purchase requisition is created. Depending on value and procurement context it either continues directly or passes through a multi-level approval path. Only then is the purchase order created.',
            steps: ['Requisition created', 'Determine approval need', 'Approval A', 'Approval B', 'Purchase order created'],
            objects: ['Purchase requisition', 'Approval A', 'Approval B', 'Purchase order', 'Requester', 'Cost centre'],
            question: 'Are the approvals intended for this specific requirement actually carried out?',
          },
          {
            title: 'Purchase order & fulfilment path',
            summary:
              'After the purchase order, order items are created. Depending on the product group the paths differ: physical procurement needs delivery and goods receipt, software can be handled through a provisioning step.',
            strands: [
              { name: 'Physical goods', steps: ['Order item created (HW)', 'Delivery', 'Goods receipt', 'Goods-receipt inspection'] },
              { name: 'Software', steps: ['Order item created (SW)', 'Software provisioning'] },
            ],
            objects: ['Purchase order', 'Order item', 'Material', 'Supplier', 'Contract', 'Delivery', 'Software provisioning'],
            question: 'Which procurement path is intended for each item – and where do lead time or behaviour differ?',
            image: {
              ...IMG.fulfilmentPaths,
              alt: 'Process graph with the physical path via goods receipt, planned and batched inspection, and the software path via software provisioning, both leading into invoice capture',
              caption: 'Physical path and software path up to the invoice.',
            },
          },
          {
            title: 'Goods receipt & inspection',
            summary:
              'Physical goods are inspected after receipt. Not every case works on its own: many goods receipts share inspection resources and are processed in batched inspection runs.',
            steps: ['Goods received', 'Inspection planned', 'Batched inspection performed'],
            objects: ['Goods receipt', 'Goods-receipt inspection', 'Inspection station', 'Inspection batch'],
            question: 'Is a case waiting because of its own flow – or because several cases share the same resource and inspection run?',
          },
          {
            title: 'Invoice, approval & payment',
            summary:
              'Once the order is fulfilled, the invoice is captured, approved and processed in the invoice run. Business deviations can trigger manual clarification or rework. For payment control it also matters whether payment happens within the cash discount period.',
            steps: ['Invoice captured', 'Invoice approved', 'Invoice run performed', 'Payment executed'],
            objects: ['Invoice', 'Invoice approval', 'Invoice run', 'Payment', 'Supplier clarification', 'Cash discount period'],
            question: 'Which process conditions create rework, waiting time or a measurable financial effect?',
          },
        ],
        objectsNote:
          'A requisition can trigger different approval logics, a purchase order can contain several items, several goods receipts share inspection capacity, and invoices relate to purchase order, goods receipt, conditions and payment. Exactly these relationships are preserved in the event knowledge graph.',

        findingsHeading: 'Five findings along the purchase-to-pay process',
        findingsLead:
          'The findings answer different business questions. What matters is not only what stands out, but why it happens, which conditions are behind it and which lever follows from it.',
        findings: [
          {
            area: 'Compliance',
            title: 'The fastest path is the wrong one',
            metric: '1,145',
            metricLabel: 'requisitions requiring approval go straight to a purchase order (26.3%)',
            text: [
              'Not every process problem shows up as a delay. In procurement a case can even be particularly fast because necessary control steps are missing. The Analyzer therefore does not treat the direct transition as just another process variant but classifies it as ignoring an intended approval path.',
              'The direct path takes only about 15 minutes to the purchase order on average; the regular path through the approvals takes several hours. That is the conflict: what looks attractive from a performance view is problematic from a governance and compliance view.',
            ],
            shift: {
              from: 'Which variant is particularly fast?',
              to: 'Which necessary control is missing – and on which business objects does the behaviour concentrate?',
            },
            image: {
              ...IMG.maverickBuying,
              alt: 'Purchase requisition process graph: red direct path from the requisition requiring approval to the purchase order (1,145 cases, 26%, about 15 minutes), bypassing approvals A and B',
              caption: 'Maverick buying as the error pattern “ignore”: the direct path bypasses approvals A and B.',
            },
            deepDive: {
              title: 'From 1,145 cases to a concrete cause hypothesis',
              text: [
                'The next step examines the affected business objects for shared characteristics. Of the 1,145 cases, 597 belong to the requester Kaya and 515 to Braun – together about 97% of the visible maverick buying cases. The cost centres, by contrast, are distributed much more evenly.',
                'An abstract compliance finding thus becomes a concrete organisational hypothesis: why does the approval bypass concentrate on this group of requesters? Possible explanations – permissions, time pressure, local ways of working or undocumented special rules – have to be checked by the business. The analysis narrows down the relevant population without inventing the organisational reason.',
              ],
              images: [
                {
                  ...IMG.maverickAttributes,
                  alt: 'Attribute distribution of the 1,145 maverick buying cases: requester Kaya 52.14% and Braun 44.98%, cost centres KS-100 to KS-400 almost evenly distributed',
                  caption: 'Attribute distribution of maverick buying cases: two requesters, evenly distributed cost centres.',
                },
              ],
            },
            note: {
              title: 'Speed is only one dimension',
              text: 'The fastest process path is not automatically the best one. A fast flow can be worse from a business perspective than a slower but compliant one.',
            },
          },
          {
            area: 'Invoice processing',
            title: 'Rework is a symptom, context provides the explanation',
            metric: '647',
            metricLabel: 'cases in two visible rework loops (554 and 93 cases)',
            text: [
              'Long invoice lead times can come from waiting, approval, clarification or genuine rework. So the analysis does not just measure duration but classifies the observed behaviour as an error pattern: two rework loops cover 554 and 93 cases.',
              'The statement “invoices are reworked” is not yet enough for an improvement, though. What matters is why manual clarification becomes necessary.',
            ],
            shift: {
              from: 'Where is lead time long?',
              to: 'Which business inconsistency creates the rework – and which information outside the operational process data explains it?',
            },
            image: {
              ...IMG.invoiceRework,
              alt: 'Invoice processing graph with the error pattern “rework” active: red loops from invoice capture via manual clarification (554 cases) and back from the invoice run (93 cases)',
              caption: 'Rework in invoice processing: two visible rework loops.',
            },
            deepDive: {
              title: 'Process data plus business context',
              text: [
                'In the demo, additional information from an IT/support ticket system was brought into Noreja Context. Minerva links the affected invoices to this context via their invoice ID. Concrete clarification reasons become visible: mismatch between invoice and purchase order, unclear invoice items and price deviation from the agreed conditions.',
                'The statement thus changes to: “These business reasons trigger the rework.” That is decisive for deriving measures – quantity or order mismatches need different countermeasures than unclear invoice items or wrong condition data.',
              ],
              images: [
                {
                  ...IMG.invoiceTicketContext,
                  alt: 'Minerva answer next to the process graph: table with invoice IDs 1669, 1945 and 2644 and their clarification reasons – mismatch to the order, unclear items, price deviation',
                  caption: 'Minerva links invoice rework with context from the ticket system.',
                },
              ],
            },
          },
          {
            area: 'Shared capacity',
            title: 'When several cases share the same resource',
            metric: '92',
            metricLabel: 'goods-receipt inspections with exceeded inspection capacity (1.62% of 5,670)',
            text: [
              'Goods-receipt inspections are not just isolated steps of a single purchase order. Several inspections can be assigned to the same inspection run and share the available resources. A case can be correct and still wait because other cases claim the same inspection slot.',
              'The time perspective makes this logic visible: while purchase orders and goods receipts arise spread out over time, the batched inspections concentrate on recurring points in time.',
            ],
            shift: {
              from: 'The inspection is slow.',
              to: 'Which shared resource is holding back these specific cases – and under which conditions does the backlog build up?',
            },
            image: {
              ...IMG.inspectionBatches,
              alt: 'Process graph from “inspection planned” to “batched inspection performed” with a time axis',
              caption: 'Planned goods-receipt inspections and shared inspection batches.',
            },
            extraImages: [
              {
                ...IMG.inspectionTimePattern,
                alt: 'Dotted chart over time: purchase orders spread out, batched inspections concentrated on recurring points in time',
                caption: 'Time pattern of batched goods-receipt inspection.',
              },
            ],
            deepDive: {
              title: 'Isolating capacity overruns',
              text: [
                'In the synthetic run, 92 goods-receipt inspections can be identified where the available inspection capacity was exceeded at the planned time. The general time pattern thus becomes a concrete operational finding: the waiting time is linked to a documented process condition – the shared capacity was not sufficient for these cases.',
              ],
              questions: [
                'Are the inspection intervals sized appropriately?',
                'Do certain material groups need to be prioritised?',
                'Does additional capacity make sense?',
                'Can inspection rules be differentiated?',
                'Which objects repeatedly cause the backlog?',
              ],
            },
            note: {
              title: 'Causes outside the individual case',
              text: 'Not every cause of a process problem lies within the same process instance. The isolated case history shows no error – only the shared resource explains the waiting time.',
            },
          },
          {
            area: 'Payment',
            title: 'From a visible correlation to a tested effect',
            metric: '2,209',
            metricLabel: 'payments outside the cash discount period (vs. 2,717 within) · modelled lost discount about €1.02m',
            text: [
              'The end-to-end process shows whether payments happen within or outside the cash discount period. The lost discount is quantified down to the euro as a separate payment attribute; for the 2,209 payments outside the period the modelled total is about €1.02m.',
              'This raises an economically relevant question: which process conditions actually contribute to the discount period being missed?',
            ],
            shift: {
              from: 'Where do we see waiting time and cost at the same time?',
              to: 'Which changeable condition actually explains the economic effect?',
            },
            image: {
              ...IMG.cashDiscountPayments,
              alt: 'Process graph from the invoice run: branching into “payment outside discount period” (2,209) and “payment within discount period” (2,717)',
              caption: 'Payments within and outside the cash discount period.',
            },
            extraImages: [
              {
                ...IMG.cashDiscountLoss,
                alt: 'Attribute evaluation skonto_verlust_eur across 2,209 payments with distribution and a sum of €1,022,005.75',
                caption: 'Modelled lost cash discount as a payment attribute: €1,022,005.75 in the demo dataset.',
              },
            ],
            deepDive: {
              title: 'Causality also means sharpening hypotheses',
              text: [
                'A plausible first hypothesis: the backlog in goods-receipt inspection delays later payments. Noreja therefore follows the inspections that actually exceeded capacity along their relationships all the way to payment.',
                'The analysis separates two things that are easily confused in a plain end-to-end view: an operational bottleneck can be real without automatically being the sole driver of a financial effect visible later. The inspection backlog remains a relevant operational finding; for the lost discount, invoice run, payment control, business clarifications and further conditions also have to be considered.',
              ],
              images: [
                {
                  ...IMG.capacityToPayment,
                  alt: 'Process graph of the capacity-exceeding inspections: from “batched inspection performed” through invoice capture, approval and invoice run to “payment outside discount period”',
                  caption: 'Capacity-exceeding inspections, followed through to payment.',
                },
              ],
            },
            note: {
              title: 'No premature root cause',
              text: 'Causal process mining tests cause hypotheses along the same affected business objects – instead of equating proximity in time with cause.',
            },
          },
          {
            area: 'Supplier performance',
            title: 'Same standard process, different lead time',
            metric: '≈ 2×',
            metricLabel: 'as long for three supplier groups: about 14 to 15.5 days instead of mostly 5.5 to 6.2 days',
            text: [
              'Not every delay originates in your own process. The supplier analysis compares the same procurement logic along the connected supplier objects. The extra time concentrates mainly on the transition purchase order created → goods received.',
              'At the same time the slow suppliers mostly follow the normal process path, and an unusually high rework rate does not explain their longer duration either. An internal workflow redesign does not address an external delivery delay – instead delivery times, material planning, agreements and supplier management move into focus.',
            ],
            shift: {
              from: 'Why is our P2P process slow?',
              to: 'Why does the same standard process take much longer with certain suppliers?',
            },
            image: {
              ...IMG.supplierPerformance,
              alt: 'Supplier analysis: process graph purchase order created → goods received next to a Minerva evaluation showing three suppliers at about 14 to 15 days lead time',
              caption: 'Supplier performance analysis: the delay lies between purchase order and goods receipt.',
            },
          },
        ],

        causeModel: {
          heading: 'From individual findings to a picture of causes',
          lead:
            'The findings belong to the same end-to-end process but have different mechanisms. Minerva brings together the results from the different perspectives – not to construct one universal “root cause”, but to separate the cause–effect mechanisms cleanly.',
          rows: [
            { area: 'Approval', observation: '1,145 maverick buying cases', question: 'Why does the bypass concentrate on certain requesters?' },
            { area: 'Invoice', observation: '647 visible rework cases', question: 'Which business clarification reasons recur?' },
            { area: 'Goods-receipt inspection', observation: '92 capacity overruns', question: 'Which shared resource creates the backlog?' },
            { area: 'Payment', observation: '2,209 payments outside discount period', question: 'Which process conditions drive the monetary effect?' },
            { area: 'Suppliers', observation: 'three much slower groups', question: 'Is the lever internal or with the external partner?' },
          ],
          images: [
            {
              ...IMG.minervaStructuralDeviations,
              alt: 'Minerva analysis of process omissions: table of structural defects in the P2P process, led by maverick buying (1,145) and invoice rework (554)',
              caption: 'Minerva summarises structural deviations in the P2P process.',
            },
            {
              ...IMG.minervaCauseModel,
              alt: 'Minerva evaluation: pie chart of paused objects and a cause diagram with maverick buying, invoice rework, batched processing and payment outside the discount period',
              caption: 'Minerva condenses the findings into a cause model.',
            },
            {
              ...IMG.minervaKeyStatements,
              alt: 'Core causes according to Minerva: maverick buying as the biggest structural risk, invoice capture as the main source of rework, batched inspection and invoice run as causes of delay',
              caption: 'Condensed key statements from the Minerva analysis.',
            },
          ],
          note: 'The business question comes first – not the operating logic of the analysis tool.',
        },

        measures: {
          heading: 'From finding to prioritised measure',
          lead:
            'A finding does not change a process yet. In the Business Impact Board, findings are rated by impact, implementation effort and uncertainty – process excellence and the business decide together which improvement initiative comes first and which deliberately follows later.',
          tableHeading: 'Example fields of action',
          items: [
            {
              finding: 'Maverick buying',
              measure: 'Review permissions and legitimate special rules, address bypass behaviour specifically',
              benefit: 'Compliance, governance, risk',
            },
            {
              finding: 'Invoice rework',
              measure: 'Run validations between purchase order, invoice and conditions earlier',
              benefit: 'Rework effort, lead time, quality',
            },
            {
              finding: 'Inspection capacity / batching',
              measure: 'Optimise inspection intervals, prioritisation and resource control',
              benefit: 'Waiting time, resource utilisation, stability',
            },
            {
              finding: 'Lost cash discount',
              measure: 'Examine invoice run and payment logic for avoidable delays',
              benefit: 'Cost, cash flow, discount utilisation',
            },
            {
              finding: 'Supplier performance',
              measure: 'Analyse slow supplier groups specifically with delivery-time and material-planning data',
              benefit: 'Security of supply, lead time',
            },
          ],
          note: 'Prioritisation is a business decision. Minerva prepares analysis paths, context and options; responsibility for the measure stays with the process owner and the business.',
        },

        loop: {
          heading: 'The loop: Insight → Action → Impact → Feedback',
          lead:
            'The analysis does not end with the finding, nor with implementing a measure. What matters is whether process behaviour actually changes afterwards.',
          steps: [
            { step: 'Insight', text: 'Spot the error pattern, time pattern, missing prerequisite or conspicuous object group' },
            { step: 'Action', text: 'Understand the cause, formulate an improvement hypothesis, rate and prioritise impact and effort' },
            { step: 'Impact', text: 'Implement the measure and define the expected business or economic effect' },
            { step: 'Feedback', text: 'Measure the effect again with the same granular data and the same process logic' },
          ],
          questions: [
            'Is maverick buying actually becoming less frequent?',
            'Does invoice rework drop for the addressed clarification reasons?',
            'Is the backlog at goods-receipt inspection going down?',
            'Are delivery times of the affected suppliers becoming more stable?',
            'Is cash discount utilisation actually improving?',
            'Has the problem shifted, or has it really been solved?',
          ],
        },

        principlesHeading: 'Five principles behind the analysis',
        principles: [
          {
            title: 'Keep granularity',
            text: 'Requisition, approval, purchase order, item, goods receipt, inspection, invoice and payment are kept with their relationships – not reduced up front to one linear process view.',
          },
          {
            title: 'Reduce complexity by business question',
            text: 'A concrete business question gets a fitting perspective on the event knowledge graph – simpler, without losing the relationships.',
          },
          {
            title: 'Test causal hypotheses',
            text: 'Anomalies are not automatically read as causes but tested against the observed effect along the same business objects.',
          },
          {
            title: 'Include context',
            text: 'Tickets, comments, quality notifications or other business information are linked to the affected business objects.',
          },
          {
            title: 'Operationalise insights',
            text: 'Findings become improvement hypotheses, are prioritised by impact, effort and uncertainty and measured again after implementation.',
          },
        ],

        faq: [
          {
            question: 'What is a purchase-to-pay process?',
            answer:
              'Purchase-to-pay is the end-to-end process from an emerging procurement need to payment. In the special machine building scenario shown, it covers purchase requisition, approvals, purchase order and order items, physical or digital fulfilment, goods receipt and inspection, and invoice, approval and payment.',
          },
          {
            question: 'Why is P2P particularly interesting for causal process mining?',
            answer:
              'Because many different business objects and dependencies interact. A purchase order can contain several items, physical and digital procurement follow different paths, inspection resources are used by several cases at once, and invoices relate to purchase order, goods receipt and conditions. Causes are therefore not always visible where their effect appears later.',
          },
          {
            question: 'What is maverick buying?',
            answer:
              'Here, maverick buying means that a purchase requisition that actually requires approval leads straight to a purchase order and the intended approval steps are bypassed. In the synthetic demo run this affects 1,145 cases, or 26.3% of requisitions requiring approval.',
          },
          {
            question: 'Why is a short lead time not automatically positive?',
            answer:
              'Because speed is only one dimension of process quality. The maverick buying path is much faster than the regular approval path precisely because controls are missing. A fast process can therefore be worse from a business perspective than a slower but compliant one.',
          },
          {
            question: 'How does additional context help with invoice rework?',
            answer:
              'The Analyzer first shows that rework or manual clarification takes place. Through Noreja Context, additional business information – for example from a ticket system – is linked to the affected invoice ID. This reveals concrete reasons such as order mismatches, unclear invoice items or condition problems.',
          },
          {
            question: 'What does cross-case dependency mean in goods-receipt inspection?',
            answer:
              'Several goods receipts share inspection resources and are processed in the same batch runs. A single case can therefore wait although its own history shows no error – the cause lies in a shared resource outside that one case.',
          },
          {
            question: 'Does the inspection backlog automatically cause the lost cash discount?',
            answer:
              'No. Goods-receipt inspection can be a real operational bottleneck. For the economic effect, however, it has to be checked separately whether the same affected business objects later actually miss the discount period disproportionately. Causal process mining separates visible correlations from tested cause–effect hypotheses.',
          },
          {
            question: 'What role does Minerva play?',
            answer:
              'Minerva helps the process manager investigate business questions across process knowledge, analysis results and additional context. It brings findings together, forms comparison groups, structures cause hypotheses and prepares analysis paths. The decision about measures stays with people.',
          },
          {
            question: 'How are findings prioritised?',
            answer:
              'Process owners rate findings for example by impact, implementation effort and uncertainty. An analytical anomaly thus becomes a prioritised improvement initiative whose effect is measured again against the granular process data after implementation.',
          },
          {
            question: 'Are the figures from a real special machine builder?',
            answer:
              'No. All figures come from a synthetic demonstration dataset. They make analysis paths, causal questions and the connection of process data with business context understandable.',
          },
        ],

        caseHeading: 'The full case description',
        caseText:
          'Event knowledge graph, end-to-end perspective, all five findings with their analysis steps, the Minerva cause model and the path to a prioritised measure – step by step in the Noreja Help Center (in German).',
        caseCta: 'Read the case in the Help Center',
      },
    },
  },
  {
    id: 'order-to-cash',
    name: 'Order-to-Cash',
    caseUrl: 'https://docs.noreja.com/de/article/order-to-cash-touchless-aber-nicht-um-jeden-preis',
    dateModified: '2026-10-22',
    content: {
      de: {
        scenario: 'End-to-End-Prozess · Touchless-Auftragsabwicklung',
        metaTitle: 'Order-to-Cash Prozess: Touchless & Causal Process Mining | Noreja',
        metaDescription:
          'Order-to-Cash vom Auftragseingang bis zur Zahlung: Prozessphasen, Geschäftsobjekte und fünf Findings aus einer Causal-Process-Mining-Analyse – Touchless-Rate, OTIF, Reklamationen, übersprungene Auftragsprüfung und risikobasierte Prüfregeln.',
        keywords: [
          'Order-to-Cash',
          'O2C',
          'Touchless Processing',
          'Touchless-Rate',
          'OTIF',
          'Auftragsmanagement',
          'Auftragsprüfung',
          'Reklamationsmanagement',
          'Sonderkonfigurationen',
          'KI-Assistent',
          'Event Knowledge Graph',
          'Causal Process Mining',
          'Root-Cause-Analyse',
        ],
        tagline:
          'Wie Causal Process Mining zeigt, welche Kundenaufträge touchless laufen können – und wo gezielte Prüfung Qualität schützt.',
        intro: {
          heading: 'Touchless, aber nicht um jeden Preis',
          text: [
            'Viele Order-to-Cash-Initiativen verfolgen dieselben Ziele: mehr Automatisierung, zuverlässige Lieferungen und weniger Reklamationen. Eine hohe Touchless-Rate wirkt dabei zunächst wie die logische Zielgröße.',
            'Doch nicht jeder manuelle Schritt ist Verschwendung. Manche Prüfungen verhindern Fehler, andere kosten tatsächlich nur Zeit.',
          ],
          quote: 'Touchless ist kein Ziel an sich. Entscheidend ist, welche Aufträge einen Menschen brauchen – und welche nicht.',
        },
        definition:
          'Order-to-Cash (O2C) beschreibt den End-to-End-Prozess vom Auftragseingang bis zum Zahlungsausgleich. Dazu gehören Auftragserfassung und Freigabe, Lieferabwicklung und Faktura, Zahlung und Mahnwesen sowie Reklamationen und Nachbearbeitung. Auf einer Prozessfolie wirkt O2C oft linear – in den operativen Daten ist der Ablauf jedoch ein Netz aus Geschäftsobjekten und fachlichen Abhängigkeiten: Kundenauftrag, Position, Konfiguration, Änderung, Prüfung, Lieferung, Rechnung, Zahlung und Reklamation hängen miteinander zusammen. Causal Process Mining erhält diese Granularität und bildet erst für die konkrete Fachfrage die passende Causal Perspective.',
        demoNote:
          'Hinweis: Die Kennzahlen auf dieser Seite stammen aus einem synthetischen Order-to-Cash-Datensatz. Sie zeigen die Analysemethode und sind keine Produktivkennzahlen eines Kunden.',
        definitionImage: {
          ...IMG.o2cEntityGraph,
          alt: 'Event Knowledge Graph des Order-to-Cash-Prozesses: Kundenauftrag im Zentrum, verbunden mit Auftragseingang, Kreditsperre, Auftragsänderung, Auftragsprüfung, Freigabe, Auftragsposition und Konfiguration, Reklamation und Gutschrift, Lieferung mit Lieferschein, Kommissionierung, Warenausgang, Versand, Transport und Zustellnachweis sowie Rechnung mit Zahlung, Mahnwesen und Forderungsausbuchung',
          caption:
            'Event Knowledge Graph des O2C-Prozesses: Geschäftsobjekte und ihre Beziehungen bleiben erhalten – Komplexität wird bei der Analyse reduziert, nicht bereits beim Datenimport.',
        },

        keyFacts: [
          {
            value: '4.500',
            label: 'Kundenaufträge',
            detail: 'gesamter synthetischer O2C-Datenbestand',
          },
          {
            value: '46,37 %',
            label: 'Touchless-Rate',
            detail: '1.978 von 4.266 einheitlich bewertbaren Aufträgen',
          },
          {
            value: '86,92 %',
            label: 'OTIF-Rate',
            detail: '3.708 von 4.266 einheitlich bewertbaren Aufträgen',
          },
          {
            value: '207',
            label: 'Reklamierte Aufträge',
            detail: '4,60 % bezogen auf alle 4.500 Aufträge',
          },
          {
            value: '76,33 %',
            label: 'Reklamationen aus Konfigurationen',
            detail: 'technische und Service-Konfigurationen – bei nur 35,42 % Anteil am Auftragsbestand',
          },
          {
            value: '197 / 340',
            label: 'Änderungen ohne Prüfpfad',
            detail: 'vor der Freigabe geänderte Aufträge gehen direkt zur Freigabe (rund 58 %)',
          },
        ],

        phasesHeading: 'Der Prozess in drei Phasen',
        phasesLead:
          'Die End-to-End Causal Perspective verbindet Auftragseingang, Lieferung, Rechnung, Zahlung und Reklamation in einer fachlichen Sicht. Komplexität wird bei der Analyse reduziert – nicht bereits beim Datenimport.',
        phasesImage: {
          ...IMG.o2cCausalPerspective,
          alt: 'End-to-End Causal Perspective des Order-to-Cash-Prozesses vom Auftragseingang über Kundenauftrag, Kreditsperre, Auftragsänderung, Auftragsprüfung und Freigabe, Lieferung mit Kommissionierung, Versand und Transport bis zu Rechnung, Zahlungsausgleich, Reklamation, Gutschrift und Forderungsausbuchung',
          caption: 'End-to-End Causal Perspective des O2C-Prozesses vom Auftragseingang bis zu Zahlung und Reklamation.',
        },
        phases: [
          {
            title: 'Auftragseingang, Konfiguration & Freigabe',
            summary:
              'Aufträge werden automatisch oder manuell erfasst und als Kundenauftrag mit Positionen und Konfiguration angelegt. Je nach Auftrag folgen eine Kreditprüfung, Änderungen vor der Freigabe und eine Auftragsprüfung, bevor der Auftrag freigegeben wird.',
            steps: [
              'Auftragseingang erstellen',
              'Kundenauftrag anlegen',
              'Auftragsposition angelegt',
              'Konfiguration angelegt',
              'Auftrag ändern (vor Freigabe)',
              'Auftrag prüfen',
              'Auftrag freigeben',
            ],
            objects: ['Kundenauftrag', 'Auftragsposition', 'Konfiguration', 'Auftragsänderung', 'Auftragsprüfung', 'Kreditprüfung'],
            question: 'Welche Aufträge können automatisiert freigegeben werden – und welche benötigen aufgrund ihres Risikos eine Prüfung?',
            image: {
              ...IMG.orderEntryRelease,
              alt: 'Prozessgraph Auftragseingang: automatische und manuelle Auftragserfassung, Kundenauftrag anlegen, Auftragsposition und Konfiguration, Kreditsperren, Auftrag ändern (vor Freigabe), Auftrag prüfen und Auftrag freigeben',
              caption: 'Auftragseingang, Konfiguration, Änderung, Prüfung und Freigabe.',
            },
          },
          {
            title: 'Lieferabwicklung & Faktura',
            summary:
              'Nach der Freigabe startet die Lieferung mit dem Lieferschein. Kommissionierung und Warenausgang, Versand sowie Transport und Zustellung laufen als eigene Stränge mit eigenen Objekten und münden gemeinsam in die Rechnung.',
            strands: [
              { name: 'Kommissionierung', steps: ['Lieferschein erstellen', 'Auftrag kommissionieren', 'Warenausgang buchen'] },
              { name: 'Versand', steps: ['Sendung anlegen', 'Versandavis senden'] },
              { name: 'Transport & Zustellung', steps: ['Transport vorbereiten', 'Zustellnachweis erhalten'] },
            ],
            objects: ['Kundenauftrag', 'Lieferung', 'Sendung', 'Transport', 'Zustellnachweis', 'Rechnung'],
            question: 'Wo entstehen Abweichungen bei Liefertreue und Laufzeit – im eigenen Ablauf oder in verbundenen Liefer- und Transportobjekten?',
            image: {
              ...IMG.deliveryInvoicing,
              alt: 'Prozessgraph der Lieferabwicklung mit Zeitachse: vom Kundenauftrag über Lieferschein, Kommissionierung und Warenausgang, Sendung und Versandavis sowie Transport und Zustellnachweis bis zur Rechnung',
              caption: 'Lieferabwicklung vom Lieferschein über Kommissionierung und Transport bis zur Rechnung.',
            },
          },
          {
            title: 'Zahlung, Mahnung & Reklamation',
            summary:
              'Nach der Rechnungsstellung führt der Prozess direkt in den Zahlungsausgleich oder verläuft über Zahlungserinnerung, Mahnung, Gutschrift beziehungsweise Ausbuchung. Reklamationen bilden einen zusätzlichen fachlichen Pfad.',
            strands: [
              { name: 'Zahlung', steps: ['Rechnung erstellen', 'Zahlung ausgeglichen'] },
              { name: 'Mahnwesen', steps: ['Zahlungserinnerung senden', 'Mahnung durchführen', 'Letzte Mahnung durchführen', 'Forderung ausbuchen'] },
              { name: 'Reklamation', steps: ['Reklamation erfasst', 'Gutschrift erstellt (keine Zahlung)'] },
            ],
            objects: ['Rechnung', 'Zahlung', 'Forderung', 'Gutschrift', 'Reklamation'],
            question: 'Welche vorgelagerten Prozessbedingungen erklären Reklamationen und andere nachgelagerte Effekte?',
            image: {
              ...IMG.paymentDunningComplaints,
              alt: 'Prozessgraph nach der Rechnung: direkter Zahlungsausgleich (83 %), Zahlungserinnerung, Mahnung und letzte Mahnung bis zur Forderungsausbuchung sowie Reklamation mit Gutschrift; eingeblendet sind Pfadinfo, Happy-Path-Hervorhebung und Fehlermuster',
              caption: 'Zahlungs-, Mahn- und Reklamationspfade nach der Rechnungsstellung.',
            },
          },
        ],
        objectsNote:
          'Ein Kundenauftrag kann mehrere Positionen und Konfigurationen haben, mehrere Lieferungen auslösen und über Rechnung, Zahlung, Mahnung oder Reklamation abgeschlossen werden. Die Kennzahlen dieser Seite werden deshalb auf Kundenauftragsebene gemessen – ohne Mehrfachgewichtung durch Positionen oder Teillieferungen.',

        findingsHeading: 'Fünf Findings entlang des Order-to-Cash-Prozesses',
        findingsLead:
          'Die Findings führen von der Management-Kennzahl bis zur überprüfbaren Prüfregel. Jedes verschiebt die Frage von „Was ist passiert?“ zu „Warum ist es passiert – und was folgt daraus?“.',
        findings: [
          {
            area: 'Touchless',
            title: 'Touchless zeigt das Was – aber noch nicht das Warum',
            metric: '46,37 %',
            metricLabel: 'Touchless-Rate: 1.978 von 4.266 einheitlich bewertbaren Aufträgen laufen ohne manuellen Eingriff',
            text: [
              'Mit 46,37 % läuft nicht einmal jeder zweite bewertete Auftrag vollständig touchless. Die naheliegende Reaktion wäre, manuelle Schritte möglichst weit zu reduzieren.',
              'Doch die Kennzahl sagt nicht, welcher Eingriff überflüssig ist und welcher Qualität schützt. Dasselbe gilt für die übrigen Management-KPIs auf Auftragsebene: Die OTIF-Rate liegt bei 86,92 %, 207 Aufträge wurden reklamiert – sichtbar ist das Ergebnis, nicht seine Ursache.',
            ],
            shift: {
              from: 'Wie entfernen wir mehr manuelle Schritte?',
              to: 'Welche manuellen Schritte erzeugen keinen zusätzlichen Nutzen – und welche schützen einen riskanten Auftrag vor einem teuren Fehler?',
            },
            image: {
              ...IMG.o2cKpiReport,
              alt: 'KPI-Report Kundenaufträge im Order-to-Cash: Touchless-Rate 46,37 % (1.978 von 4.266 bewerteten Aufträgen), OTIF-Rate 86,92 % (3.708 von 4.266) und Reklamationsrate 4,85 % (207 von 4.266)',
              caption:
                'Management-KPIs auf Auftragsebene. Die Reklamationsrate bezieht sich hier auf 4.266 bewertete Aufträge (4,85 %); bezogen auf alle 4.500 Aufträge sind es 4,60 %.',
            },
          },
          {
            area: 'Reklamationen',
            title: 'Reklamationen konzentrieren sich auf konfigurierte Aufträge',
            metric: '76,33 %',
            metricLabel: 'aller Reklamationen stammen aus technischen und Service-Konfigurationen – bei nur 35,42 % Anteil am Auftragsbestand',
            text: [
              '207 von 4.500 Aufträgen wurden reklamiert (4,60 %). Die Reklamationsquote unterscheidet sich jedoch deutlich nach Auftragsart: von 1,69 % bei Standardprodukten über 8,01 % bei technischen Konfigurationen bis zu 12,90 % bei Service-Konfigurationen.',
              'Auch die Reklamationsgründe konzentrieren sich: „Serviceeinsatz nicht wie vereinbart“ und „Falsche Konfiguration“ stehen gemeinsam für rund 72,5 % der dokumentierten Gründe.',
            ],
            table: {
              caption: 'Reklamationsquote je Auftragsart',
              head: ['Auftragsart', 'Aufträge', 'Reklamiert', 'Quote', 'Anteil an allen Reklamationen'],
              rows: [
                ['Standardprodukt', '2.906', '49', '1,69 %', '23,67 %'],
                ['Technische Konfiguration', '974', '78', '8,01 %', '37,68 %'],
                ['Service-Konfiguration', '620', '80', '12,90 %', '38,65 %'],
                ['Gesamt', '4.500', '207', '4,60 %', '100 %'],
              ],
            },
            shift: {
              from: 'Warum haben wir 4,6 % Reklamationen?',
              to: 'Welche Auftragsarten und Merkmale unterscheiden riskante von unkritischen Fällen?',
            },
            image: {
              ...IMG.complaintsManagementView,
              alt: 'Management-Dashboard „Reklamationen im Managementblick“: Reklamationsquote 4,60 % (207 von 4.500 Aufträgen), Quote je Auftragsart – Standardprodukt 1,69 %, technische Konfiguration 8,01 %, Service-Konfiguration 12,90 % – und Reklamationsgründe, angeführt von „Serviceeinsatz nicht wie vereinbart“ und „Falsche Konfiguration“',
              caption: 'Reklamationen im Managementblick: Quote je Auftragsart und Reklamationsgründe.',
            },
          },
          {
            area: 'Fehlermuster',
            title: 'Nicht jeder Fehler ist eine neue Variante',
            metric: '197 / 340',
            metricLabel: 'vor der Freigabe geänderte technische Aufträge gehen ohne die vorgesehene Auftragsprüfung direkt zur Freigabe (rund 58 %)',
            text: [
              'Für technische Aufträge gilt eine klare fachliche Soll-Logik: Wird ein Auftrag vor seiner Freigabe geändert, ist anschließend eine Auftragsprüfung vorgesehen – Auftragsänderung → Auftragsprüfung → Freigabe. Von 340 geänderten Aufträgen durchlaufen jedoch nur 143 diesen Prüfpfad; 197 gehen direkt zur Freigabe.',
              'Noreja behandelt solche Abweichungen nicht als zusätzliche Prozessvarianten, sondern als Fehlermuster. So bleiben die fachlich relevanten Varianten überschaubar, während Abweichungen gezielt separat analysiert werden. In klassischen, eventlog-basierten Process-Mining-Ansätzen erscheint dagegen schnell jede Abweichung als eigene Variante – die Variantenanzahl wächst stark und die Analyse wird unübersichtlich.',
              'Die Causal Perspective beschreibt den erwarteten Ablauf. Fehlermuster zeigen, wo dieser Ablauf verletzt wird – etwa durch Überspringen, falsche Reihenfolge, Nachbearbeitung, Verzögerung, Bündelung oder offene Fälle.',
            ],
            shift: {
              from: 'Welche neue Variante ist das?',
              to: 'Wo wird die fachliche Soll-Logik verletzt – und warum?',
            },
            image: {
              ...IMG.skippedOrderReview,
              alt: 'Causal Perspective der 974 technischen Konfigurationsaufträge mit aktiviertem Fehlermuster: roter Pfad von „Auftrag ändern (vor Freigabe)“ direkt zu „Auftrag freigeben“ (197 Fälle, 58 %) am vorgesehenen Schritt „Auftrag prüfen“ (143 Fälle, 42 %) vorbei',
              caption: 'Fehlermuster „Ignorieren“: Nach einer Auftragsänderung wird die vorgesehene Auftragsprüfung übersprungen.',
            },
            deepDive: {
              title: 'Vom Fehlermuster zur Root-Cause-Analyse',
              prompt: 'Analysiere alle Gründe, die zu einer Reklamation führen.',
              text: [
                'Die breite Ursachenanalyse startet bewusst offen. Minerva strukturiert dokumentierte Reklamationsgründe, vorgelagerte Faktoren und noch offene Hypothesen – und trennt dabei belegte Befunde klar von Ursachenhypothesen.',
                'Ein erster Schwerpunkt entsteht bei den technischen Konfigurationsaufträgen: Von 78 reklamierten technischen Aufträgen weisen 70 keine dokumentierte Auftragsprüfung auf, 8 wurden trotz Prüfung reklamiert. Bei Service ist das Bild deutlich weniger eindeutig – 43 Reklamationen ohne und 37 trotz Prüfung.',
                'Die fehlende Prüfung wird damit zu einem relevanten Analysepfad – aber noch nicht zur bewiesenen Ursache.',
              ],
              images: [
                {
                  ...IMG.minervaComplaintReasons,
                  alt: 'Minerva-Antwort zur Root-Cause-Analyse: Tabelle der fünf dokumentierten Reklamationsgründe – Serviceeinsatz nicht wie vereinbart 38,6 %, Falsche Konfiguration 33,8 %, Mengenabweichung 13,0 %, Produkt nicht passend 12,1 %, Transportschaden 2,4 % – jeweils mit den noch offenen Ursachenfragen',
                  caption: 'Minerva strukturiert die dokumentierten Reklamationsgründe und trennt belegte Befunde von offenen Ursachenhypothesen.',
                },
                {
                  ...IMG.minervaFirstCausePicture,
                  alt: 'Erstes Ursachenbild aus Minerva: 158 reklamierte Konfigurationsaufträge, davon technisch 78 (70 ohne dokumentierte Prüfung, 8 trotz Prüfung) und Service 80 (43 ohne, 37 trotz Prüfung), jeweils mit einer zu prüfenden Hypothese',
                  caption: 'Erstes Ursachenbild: Bei technischen Aufträgen fehlt in 70 von 78 Reklamationsfällen die dokumentierte Prüfung.',
                },
              ],
            },
            note: {
              title: 'Wie läuft mein Prozess? → Wo weicht er ab? → Warum?',
              text: 'Das Fehlermuster ist nicht die Ursache selbst, sondern der Startpunkt für die Root-Cause-Analyse. Die Business-Frage steht am Anfang – nicht die Bedienlogik des Analysewerkzeugs.',
            },
          },
          {
            area: 'Ursachenanalyse',
            title: 'Die erste plausible Erklärung hält der Gegenprüfung nicht stand',
            metric: '2,23 % → 35,82 %',
            metricLabel: 'Reklamationsquote zugestellter technischer Aufträge ohne Prüfung – von 0 auf mindestens 2 Sonderwerte',
            text: [
              'Das erste Ursachenbild legt eine naheliegende Erklärung nahe: Geänderte, ungeprüfte Technikaufträge werden häufiger reklamiert. Ob diese Erklärung trägt, klärt die nächste Frage an Minerva – bewusst einfach formuliert.',
            ],
            prompt:
              'Analysiere die ungeprüften technischen Aufträge genauer. Welchen Einfluss haben Sonderwerte und Änderungen vor der Freigabe auf die Reklamationsquote?',
            table: {
              caption: 'Zugestellte technische Aufträge ohne Prüfung – Reklamationsquote nach Sonderwerten',
              head: ['Sonderwerte', 'Reklamiert / Aufträge', 'Reklamationsquote'],
              rows: [
                ['0', '6 / 269', '2,23 %'],
                ['1', '40 / 186', '21,51 %'],
                ['2 oder mehr', '24 / 67', '35,82 %'],
                ['Gesamt', '70 / 522', '13,41 %'],
              ],
            },
            shift: {
              from: 'Geänderte Aufträge sind riskant.',
              to: 'Welche Aufträge waren bereits aufgrund ihrer Konfiguration riskant?',
            },
            image: {
              ...IMG.specialValuesRefinement,
              alt: 'Minerva-Tabelle zu 522 zugestellten Technikaufträgen ohne dokumentierte Prüfung: Reklamationsquote nach Sonderwerteanzahl (0: 2,23 %, 1: 21,51 %, 2 oder mehr: 35,82 %), jeweils mit und ohne Änderung vor Freigabe',
              caption: 'Gegenprüfung: Sonderwerte trennen das Risiko deutlich stärker als die pauschale Änderungs-Hypothese.',
            },
            deepDive: {
              title: 'WHY statt WHAT: welches Sondermerkmal auffällig wird',
              text: [
                'Die Zahl der Sonderwerte trennt das Risiko deutlich. Die pauschale Aussage „Änderung = Risiko“ hält der Gegenprüfung dagegen nicht allgemein stand: Bei genau einem Sonderwert liegt die Quote mit Änderung höher als ohne, bei mindestens zwei Sonderwerten kehrt sich die Richtung um.',
                'Ein weiterer Drill-down zeigt, dass auch die Art des Sondermerkmals zählt. Besonders markant ist die Kombination aus Firmware-Sonderstand, Änderung vor Freigabe und fehlender Prüfung: 11 von 25 dieser Aufträge wurden reklamiert (44,00 %), ohne Änderung 6 von 51 (11,76 %).',
              ],
              images: [
                {
                  ...IMG.specialFeaturesDrilldown,
                  alt: 'Drill-down auf einzelne Sondermerkmale bei genau einem Sonderwert: Schaltschrankmaß 17,11 %, Firmware 22,37 %, Schnittstelle 29,41 %; Firmware mit Änderung vor Freigabe 44,00 % gegenüber 11,76 % ohne Änderung',
                  caption: 'WHY statt WHAT: Nicht nur die Zahl, auch die Art des Sondermerkmals ist relevant.',
                },
                {
                  ...IMG.o2cHypothesisTree,
                  alt: 'Hypothesenbaum: zugestellte Technikaufträge ohne Prüfung (13,41 %) nach 0, 1 und mindestens 2 Sonderwerten sowie mit und ohne Änderung; bei einem Sonderwert führt der Zweig zur Firmware-Konstellation (44,00 % mit Änderung) und zur Hypothese eines unzureichenden Spezifikationsabgleichs',
                  caption: 'Verfeinertes Ursachenbild: Die Firmware-Konstellation bleibt bewusst als zu prüfende Hypothese gekennzeichnet.',
                },
              ],
            },
            note: {
              title: 'Hypothese, kein nachgewiesener Mechanismus',
              text: 'Der Änderungsdatensatz nennt nicht das tatsächlich geänderte Merkmal. Die Zahlen belegen deshalb eine auffällige Risikokombination – noch nicht den Mechanismus „Firmware wurde falsch geändert“.',
            },
          },
          {
            area: 'Prüfregel',
            title: 'Von der Ursache zur risikobasierten Prüfregel',
            metric: '≥ 1 Sonderwert',
            metricLabel: 'als Kriterium für eine priorisierte Prüfung technischer Aufträge – ohne Sonderwert ist in den Daten kein Qualitätsvorteil durch zusätzliche Prüfung erkennbar',
            text: [
              'Für die Managemententscheidung zählt am Ende nicht nur die Erklärung, sondern die Frage, wann eine Prüfung tatsächlich sinnvoll erscheint.',
              'Bei technischen Aufträgen ohne Sonderwert ist in diesen Daten kein Qualitätsvorteil durch eine zusätzliche Prüfung erkennbar. Ab einem Sonderwert unterscheiden sich geprüfte und ungeprüfte Aufträge dagegen deutlich. Auch wirtschaftlich ist die Differenz relevant: Im Demo-Datensatz liegt der hinterlegte Aufwand einer Reklamation deutlich über dem einer einzelnen Prüfung.',
            ],
            shift: {
              from: 'Wie erreichen wir eine möglichst hohe Touchless-Rate?',
              to: 'Wann schützt eine Prüfung Qualität – und wann kann ein Auftrag ohne Eingriff durchlaufen?',
            },
            deepDive: {
              title: 'Eine überprüfbare Entscheidungshypothese',
              text: [
                'Aus der Analyse entsteht keine pauschale Regel, sondern eine Hypothese, die im Pilot gemessen werden kann:',
              ],
              points: [
                {
                  title: 'Bestehende Pflicht beibehalten',
                  text: 'Wird ein Auftrag vor der Freigabe verändert, bleibt die vorgesehene Prüfung bestehen.',
                },
                {
                  title: 'Risikobasiert ergänzen',
                  text: 'Technische Aufträge mit mindestens einem Sonderwert werden zusätzlich priorisiert geprüft.',
                },
                {
                  title: 'Automatisierungspotenzial nutzen',
                  text: 'Technische Aufträge ohne Sonderwert können eher ohne zusätzliche Prüfung durchlaufen, sofern kein anderer Prüfgrund vorliegt.',
                },
              ],
            },
            note: {
              title: 'So viel Touchless wie möglich. So viel wirksame Prüfung wie nötig.',
              text: 'Die Regel wird als Pilot umgesetzt und ihre Wirkung anschließend an Touchless-Rate, Reklamationsquote, OTIF und Kosten gemessen.',
            },
          },
        ],

        aiContext: {
          heading: 'Warum KI Causal Process Mining braucht',
          lead:
            'Generative KI kann Muster schnell zusammenfassen und Maßnahmen formulieren. Für Prozessautomatisierung reicht Geschwindigkeit allein jedoch nicht.',
          blocks: [
            {
              title: 'Prozessdaten allein liefern noch keine Bedeutung',
              text: [
                'Systemdaten zeigen Werte und Ereignisse. Sie erklären aber nicht automatisch, was ein Merkmal fachlich bedeutet oder welche Regel im Unternehmen dahintersteht.',
                'Unternehmenskontext ergänzt diese Bedeutung. Causal Process Mining prüft anschließend, wie Merkmale, Prozessverhalten und Ergebnisse zusammenhängen. Minerva verbindet diese Ebenen im Dialog und macht die Analyse für den Anwender zugänglich.',
              ],
              quote: 'Prozessdaten liefern die Fakten. Unternehmenskontext liefert die Bedeutung. Causal Process Mining prüft die Ursachenhypothesen.',
            },
            {
              title: 'Automatisieren auf Basis der richtigen Analyse',
              text: [
                'Für KI-gestützte Prozessentscheidungen sind vier Dinge entscheidend: die richtige fachliche Granularität, Beziehungen zwischen Geschäftsobjekten, Unternehmenskontext und eine Analyse, die Korrelationen nicht vorschnell als Ursachen interpretiert.',
              ],
              quote: 'Einen Prozess auf Basis der falschen Analyse zu automatisieren, macht ihn nicht besser – nur schneller falsch.',
            },
          ],
          image: {
            ...IMG.minervaAgentsVsLlm,
            alt: 'Übersicht „Was Minerva-Agenten leisten, was ein LLM allein nicht kann“: Architektur, Agenten & Skills, Konfigurierbarkeit, belegte Antworten, Governance, Kontext, Kausalität und kontinuierlicher Kreislauf 24/7',
            caption: 'Was Minerva-Agenten leisten, was ein LLM allein nicht kann.',
          },
          note: 'Causal Process Mining schafft die analytische Grundlage. Minerva macht sie im Dialog nutzbar.',
        },

        measures: {
          heading: 'Vom Finding zur priorisierten Maßnahme',
          lead:
            'Ein Finding verändert noch keinen Prozess. Im Business Impact Board werden Findings nach erwarteter Wirkung, Umsetzungsaufwand, Risiko und Unsicherheit bewertet – Process Excellence und Fachbereich priorisieren anschließend gemeinsam die nächste Verbesserungsinitiative.',
          tableHeading: 'Mögliche Verbesserungsrichtungen',
          items: [
            {
              finding: 'Prüfung nach Änderungen wird häufig übersprungen',
              measure: 'Bestehende Prüfregel konsequenter umsetzen und Ursachen des Überspringens untersuchen',
              benefit: 'Qualität, Compliance, Reklamationsrisiko',
            },
            {
              finding: 'Sonderkonfigurationen zeigen deutlich höhere Risiken',
              measure: 'Technische Aufträge ab einem Sonderwert risikobasiert zur Prüfung priorisieren',
              benefit: 'Reklamationsquote, Qualität, Prüfaufwand',
            },
            {
              finding: 'Risikoarme Aufträge ohne Sonderwert',
              measure: 'Zusätzliche Prüfung gezielt reduzieren und als Pilot testen',
              benefit: 'Touchless-Rate, Durchlaufzeit, Automatisierungsgrad',
            },
            {
              finding: 'Firmware-Konstellation besonders auffällig',
              measure: 'Hypothese gezielt weiter untersuchen',
              benefit: 'Qualität, Reklamationsrisiko, Unsicherheit',
            },
            {
              finding: 'Service-Reklamationen bleiben trotz Prüfung hoch',
              measure: 'Separaten Ursachenpfad untersuchen',
              benefit: 'Servicequalität, Kundenzufriedenheit',
            },
          ],
          image: {
            ...IMG.impactBoardMatrix,
            alt: 'Business Impact Board mit fünf O2C-Findings in der Impact-/Aufwand-Matrix: drei Quick Wins, ein strategisches Finding und eines mit niedriger Priorität',
            caption: 'Business Impact Board: Findings nach Wirkung und Aufwand eingeordnet.',
          },
          extraImages: [
            {
              ...IMG.impactBoardKanban,
              alt: 'Kanban-Ansicht des Business Impact Board mit den Spalten Backlog, In Bearbeitung, Pausiert, Impact generiert und Verworfen; alle fünf Findings im Backlog',
              caption: 'Kanban: Findings wandern vom Backlog bis „Impact generiert“.',
            },
            {
              ...IMG.impactBoardQuadrangle,
              alt: 'Devil’s Quadrangle über alle Findings mit den Dimensionen Zeit, Kosten, Qualität und Komplexität sowie Impact-Timeline mit dem Kick-off-Workshop als erstem Meilenstein',
              caption: 'Devil’s Quadrangle und Impact-Timeline für die Findings.',
            },
            {
              ...IMG.impactBoardRoi,
              alt: 'ROI-Rechner im Business Impact Board: jährliches Einsparpotenzial, Umsetzungskosten, Netto-ROI im ersten Jahr, kumulative Einsparung über fünf Jahre und Einsparpotenzial je Finding',
              caption: 'ROI-Rechner: Einsparpotenzial, Umsetzungskosten und Payback je Finding – Werte aus dem Demo-Datensatz.',
            },
          ],
          note: 'Die Priorisierung ist eine fachliche Entscheidung. Minerva kann Analysewege, Kontext und Handlungsoptionen vorbereiten; Kontrolle und Entscheidungshoheit bleiben jederzeit nachvollziehbar beim Prozessverantwortlichen und Fachbereich.',
        },

        loop: {
          heading: 'Der Kreislauf: Insight → Action → Impact → Feedback',
          lead:
            'Nach der Priorisierung wird eine Maßnahme als Pilot umgesetzt und ihre Wirkung anhand derselben Prozessdaten erneut gemessen. Minerva Frontier Agents können diesen Regelkreis kontinuierlich begleiten: neue Findings erkennen, Hypothesen weiterentwickeln und die Wirkung umgesetzter Maßnahmen beobachten.',
          steps: [
            { step: 'Insight', text: 'Sonderkonfigurationen zeigen unterschiedliche Risikoprofile; „Änderung = Risiko“ reicht als Erklärung nicht aus.' },
            { step: 'Action', text: 'Pflichtprüfungen beibehalten und technische Sonderkonfigurationen risikobasiert priorisieren.' },
            { step: 'Impact', text: 'Touchless-Rate, Reklamationsquote, OTIF und Kosten erneut messen.' },
            { step: 'Feedback', text: 'Bestätigt sich die erwartete Wirkung nicht, wird die Hypothese angepasst.' },
          ],
          questions: [
            'Steigt die Touchless-Rate bei risikoarmen Aufträgen ohne Sonderwert?',
            'Sinkt die Reklamationsquote bei technischen Sonderkonfigurationen?',
            'Wird die Prüfung nach Auftragsänderungen konsequenter durchlaufen?',
            'Bleibt die OTIF-Rate stabil oder verbessert sie sich?',
            'Stehen Prüfaufwand und vermiedene Reklamationskosten in einem sinnvollen Verhältnis?',
            'Bestätigt sich die Hypothese – oder muss sie angepasst werden?',
          ],
        },

        principlesHeading: 'Vier Prinzipien für die Analyse',
        principles: [
          {
            title: 'Granularität erhalten',
            text: 'Geschäftsobjekte und ihre Beziehungen bleiben erhalten, statt den Prozess vorab auf eine einzige lineare Case-Logik zu reduzieren.',
          },
          {
            title: 'Mit der Business-Frage beginnen',
            text: 'Die Causal Perspective wird für die konkrete Fachfrage gebildet – nicht die Bedienlogik des Werkzeugs bestimmt die Analyse.',
          },
          {
            title: 'Fehlermuster von Ursachen trennen',
            text: 'Eine sichtbare Abweichung ist ein Analyseausgangspunkt, noch keine Root Cause.',
          },
          {
            title: 'Kontext einbeziehen',
            text: 'Systemdaten zeigen Werte; Unternehmenskontext erklärt ihre fachliche Bedeutung.',
          },
        ],

        conclusion: {
          heading: 'Fazit: Touchless allein ist keine Steuerungslogik',
          text: [
            'Eine hohe Touchless-Rate allein ist keine ausreichende Steuerungslogik. Entscheidend ist, wo ein manueller Eingriff keinen Mehrwert liefert und wo er einen riskanten Auftrag vor einem späteren Qualitätsproblem schützt.',
            'Causal Process Mining verbindet fachliche Soll-Logik, beobachtete Fehlermuster, Unternehmenskontext und gezielte Gegenprüfungen. Im O2C-Beispiel wird dadurch eine zunächst plausible Erklärung korrigiert: Nicht die Änderung allein trennt gute und schlechte Fälle, sondern vor allem das Risikoprofil der Sonderkonfiguration.',
            'Aus „mehr Touchless“ wird damit eine konkretere Handlungsoption: risikoarme Aufträge stärker automatisieren, technische Sonderkonfigurationen gezielt prüfen und anschließend messen, ob die Regel tatsächlich Qualität und Effizienz verbessert.',
          ],
          claim: 'Verstehen. Priorisieren. Wirksam automatisieren. Qualität schützen.',
        },

        faq: [
          {
            question: 'Was ist ein Order-to-Cash-Prozess?',
            answer:
              'Order-to-Cash (O2C) ist der End-to-End-Prozess vom Auftragseingang bis zum Zahlungsausgleich. Er umfasst Auftragserfassung, Konfiguration und Freigabe, Lieferabwicklung und Faktura, Zahlung und Mahnwesen sowie Reklamationen und Nachbearbeitung. In den operativen Daten ist O2C kein linearer Ablauf, sondern ein Netz aus Geschäftsobjekten wie Kundenauftrag, Position, Konfiguration, Lieferung, Rechnung, Zahlung und Reklamation.',
          },
          {
            question: 'Was bedeutet Touchless im Order-to-Cash-Prozess?',
            answer:
              'Ein Auftrag gilt als touchless, wenn er ohne manuellen Eingriff durch den Prozess läuft. Die Touchless-Rate misst den Anteil solcher Aufträge – im synthetischen Demo-Datensatz 46,37 %, also 1.978 von 4.266 einheitlich bewertbaren Kundenaufträgen.',
          },
          {
            question: 'Sollte die Touchless-Rate möglichst hoch sein?',
            answer:
              'Nicht um jeden Preis. Manche manuellen Schritte kosten nur Zeit, andere verhindern teure Fehler. Im O2C-Beispiel steigt die Reklamationsquote ungeprüfter technischer Aufträge mit der Zahl der Sonderwerte deutlich an. Entscheidend ist deshalb, welche Aufträge einen Menschen brauchen und welche nicht: so viel Touchless wie möglich, so viel wirksame Prüfung wie nötig.',
          },
          {
            question: 'Was misst die OTIF-Rate?',
            answer:
              'OTIF steht für „On Time In Full“: Ein Auftrag wurde termingerecht und vollständig geliefert. Im Demo-Datensatz erfüllen 3.708 von 4.266 einheitlich bewertbaren Aufträgen dieses Kriterium – die OTIF-Rate liegt damit bei 86,92 %.',
          },
          {
            question: 'Warum behandelt Noreja Abweichungen als Fehlermuster statt als Varianten?',
            answer:
              'In eventlog-basierten Ansätzen erscheint jede Abweichung schnell als eigene Variante; die Variantenanzahl wächst und die Analyse wird unübersichtlich. Noreja beschreibt den erwarteten Ablauf in der Causal Perspective und klassifiziert Verletzungen – etwa Überspringen, falsche Reihenfolge oder Nachbearbeitung – als Fehlermuster. Im O2C-Beispiel gehen 197 von 340 vor der Freigabe geänderten technischen Aufträgen ohne die vorgesehene Prüfung direkt zur Freigabe.',
          },
          {
            question: 'Ist ein Fehlermuster schon die Ursache eines Problems?',
            answer:
              'Nein. Ein Fehlermuster zeigt, wo der erwartete Ablauf verletzt wird. Es ist der Startpunkt der Root-Cause-Analyse, nicht ihr Ergebnis. Im O2C-Beispiel ist die fehlende Prüfung zunächst ein relevanter Analysepfad – erst die Gegenprüfung zeigt, dass vor allem das Risikoprofil der Sonderkonfiguration gute und schlechte Fälle trennt.',
          },
          {
            question: 'Warum ist „Änderung vor Freigabe“ nicht automatisch die Ursache von Reklamationen?',
            answer:
              'Weil die Gegenprüfung die pauschale Hypothese nicht allgemein bestätigt. Bei zugestellten technischen Aufträgen ohne Prüfung steigt die Reklamationsquote vor allem mit der Zahl der Sonderwerte – von 2,23 % ohne Sonderwert auf 21,51 % bei einem und 35,82 % bei mindestens zwei Sonderwerten. Innerhalb gleicher Sonderwerteanzahl zeigt die Änderung kein einheitliches Bild.',
          },
          {
            question: 'Welche Rolle spielt der KI-Assistent Minerva?',
            answer:
              'Minerva beantwortet fachliche Fragen im Dialog, strukturiert Reklamationsgründe, bildet Vergleichsgruppen und trennt belegte Befunde von Ursachenhypothesen. Sie verbindet Prozessdaten, Unternehmenskontext und Causal Process Mining. Die Entscheidung über Maßnahmen bleibt beim Prozessverantwortlichen und Fachbereich.',
          },
          {
            question: 'Warum braucht KI Causal Process Mining?',
            answer:
              'Generative KI kann Muster schnell zusammenfassen, unterscheidet aber nicht von selbst zwischen Korrelation und Ursache. Für KI-gestützte Prozessentscheidungen braucht es die richtige fachliche Granularität, Beziehungen zwischen Geschäftsobjekten, Unternehmenskontext und eine Analyse, die Ursachenhypothesen prüft. Einen Prozess auf Basis der falschen Analyse zu automatisieren, macht ihn nur schneller falsch.',
          },
          {
            question: 'Wie wird aus einem Finding eine Maßnahme?',
            answer:
              'Im Business Impact Board werden Findings nach erwarteter Wirkung, Umsetzungsaufwand, Risiko und Unsicherheit bewertet und priorisiert. Die gewählte Maßnahme wird als Pilot umgesetzt; danach werden Touchless-Rate, Reklamationsquote, OTIF und Kosten mit denselben Prozessdaten erneut gemessen.',
          },
          {
            question: 'Stammen die Kennzahlen aus einem echten Unternehmen?',
            answer:
              'Nein. Alle Kennzahlen stammen aus einem synthetischen Order-to-Cash-Datensatz. Sie zeigen die Analysemethode und sind keine Produktivkennzahlen eines Kunden.',
          },
        ],

        caseHeading: 'Die vollständige Case-Beschreibung',
        caseText:
          'Event Knowledge Graph, End-to-End Causal Perspective, alle fünf Findings mit ihren Analyseschritten, die Root-Cause-Analyse mit Minerva und der Weg zur risikobasierten Prüfregel – Schritt für Schritt im Noreja Help Center.',
        caseCta: 'Case im Help Center lesen',
      },

      en: {
        scenario: 'End-to-end process · Touchless order processing',
        metaTitle: 'Order-to-Cash Process: Touchless & Causal Process Mining | Noreja',
        metaDescription:
          'Order-to-cash from order entry to payment: process phases, business objects and five findings from a causal process mining analysis – touchless rate, OTIF, complaints, skipped order reviews and risk-based review rules.',
        keywords: [
          'order-to-cash',
          'O2C',
          'touchless processing',
          'touchless rate',
          'OTIF',
          'order management',
          'order review',
          'complaint management',
          'special configurations',
          'AI assistant',
          'event knowledge graph',
          'causal process mining',
          'root cause analysis',
        ],
        tagline:
          'How causal process mining shows which customer orders can run touchless – and where a targeted review protects quality.',
        intro: {
          heading: 'Touchless, but not at any price',
          text: [
            'Many order-to-cash initiatives pursue the same goals: more automation, reliable deliveries and fewer complaints. A high touchless rate initially looks like the logical target.',
            'But not every manual step is waste. Some reviews prevent errors, others really only cost time.',
          ],
          quote: 'Touchless is not a goal in itself. What matters is which orders need a human – and which do not.',
        },
        definition:
          'Order-to-cash (O2C) is the end-to-end process from order entry to payment clearing. It covers order capture and release, delivery and invoicing, payment and dunning, and complaints and rework. On a process slide O2C often looks linear – in the operational data, however, it is a network of business objects and dependencies: customer order, item, configuration, change, review, delivery, invoice, payment and complaint are all connected. Causal process mining keeps this granularity and builds the fitting causal perspective only for the concrete business question.',
        demoNote:
          'Note: the figures on this page come from a synthetic order-to-cash dataset. They illustrate the analysis method and are not production figures of any customer.',
        definitionImage: {
          ...IMG.o2cEntityGraph,
          alt: 'Event knowledge graph of the order-to-cash process: the customer order at the centre, connected to order entry, credit block, order change, order review, release, order item and configuration, complaint and credit note, delivery with delivery note, picking, goods issue, shipping, transport and proof of delivery, and invoice with payment, dunning and write-off',
          caption:
            'Event knowledge graph of the O2C process: business objects and their relationships are preserved – complexity is reduced during analysis, not already at data import.',
        },

        keyFacts: [
          {
            value: '4,500',
            label: 'Customer orders',
            detail: 'entire synthetic O2C dataset',
          },
          {
            value: '46.37%',
            label: 'Touchless rate',
            detail: '1,978 of 4,266 consistently assessable orders',
          },
          {
            value: '86.92%',
            label: 'OTIF rate',
            detail: '3,708 of 4,266 consistently assessable orders',
          },
          {
            value: '207',
            label: 'Orders with complaints',
            detail: '4.60% of all 4,500 orders',
          },
          {
            value: '76.33%',
            label: 'Complaints from configurations',
            detail: 'technical and service configurations – at only 35.42% of the order volume',
          },
          {
            value: '197 / 340',
            label: 'Changes without review',
            detail: 'orders changed before release go straight to release (about 58%)',
          },
        ],

        phasesHeading: 'The process in three phases',
        phasesLead:
          'The end-to-end causal perspective brings order entry, delivery, invoice, payment and complaint together in one business view. Complexity is reduced during analysis – not already at data import.',
        phasesImage: {
          ...IMG.o2cCausalPerspective,
          alt: 'End-to-end causal perspective of the order-to-cash process from order entry through customer order, credit block, order change, order review and release, delivery with picking, shipping and transport, to invoice, payment clearing, complaint, credit note and write-off',
          caption: 'End-to-end causal perspective of the O2C process from order entry to payment and complaint.',
        },
        phases: [
          {
            title: 'Order entry, configuration & release',
            summary:
              'Orders are captured automatically or manually and created as a customer order with items and configuration. Depending on the order, a credit check, changes before release and an order review follow before the order is released.',
            steps: [
              'Create order entry',
              'Create customer order',
              'Order item created',
              'Configuration created',
              'Change order (before release)',
              'Review order',
              'Release order',
            ],
            objects: ['Customer order', 'Order item', 'Configuration', 'Order change', 'Order review', 'Credit check'],
            question: 'Which orders can be released automatically – and which need a review because of their risk?',
            image: {
              ...IMG.orderEntryRelease,
              alt: 'Order entry process graph: automatic and manual order capture, create customer order, order item and configuration, credit blocks, change order (before release), review order and release order',
              caption: 'Order entry, configuration, change, review and release.',
            },
          },
          {
            title: 'Delivery & invoicing',
            summary:
              'After release, delivery starts with the delivery note. Picking and goods issue, shipping, and transport and delivery run as separate strands with their own objects and join again in the invoice.',
            strands: [
              { name: 'Picking', steps: ['Create delivery note', 'Pick order', 'Post goods issue'] },
              { name: 'Shipping', steps: ['Create shipment', 'Send shipping notification'] },
              { name: 'Transport & delivery', steps: ['Prepare transport', 'Receive proof of delivery'] },
            ],
            objects: ['Customer order', 'Delivery', 'Shipment', 'Transport', 'Proof of delivery', 'Invoice'],
            question: 'Where do deviations in delivery reliability and lead time arise – in your own flow or in connected delivery and transport objects?',
            image: {
              ...IMG.deliveryInvoicing,
              alt: 'Delivery process graph with a time axis: from the customer order via delivery note, picking and goods issue, shipment and shipping notification, and transport and proof of delivery to the invoice',
              caption: 'Delivery from the delivery note through picking and transport to the invoice.',
            },
          },
          {
            title: 'Payment, dunning & complaint',
            summary:
              'After invoicing, the process leads straight to payment clearing or runs through payment reminder, dunning, credit note or write-off. Complaints form an additional business path.',
            strands: [
              { name: 'Payment', steps: ['Create invoice', 'Payment cleared'] },
              { name: 'Dunning', steps: ['Send payment reminder', 'Dunning notice', 'Final dunning notice', 'Write off receivable'] },
              { name: 'Complaint', steps: ['Complaint recorded', 'Credit note issued (no payment)'] },
            ],
            objects: ['Invoice', 'Payment', 'Receivable', 'Credit note', 'Complaint'],
            question: 'Which upstream process conditions explain complaints and other downstream effects?',
            image: {
              ...IMG.paymentDunningComplaints,
              alt: 'Process graph after the invoice: direct payment clearing (83%), payment reminder, dunning and final dunning up to the write-off, and complaint with credit note; path info, happy-path highlighting and error patterns are shown',
              caption: 'Payment, dunning and complaint paths after invoicing.',
            },
          },
        ],
        objectsNote:
          'A customer order can have several items and configurations, trigger several deliveries and be closed through invoice, payment, dunning or complaint. The figures on this page are therefore measured at customer-order level – without multiple weighting through items or partial deliveries.',

        findingsHeading: 'Five findings along the order-to-cash process',
        findingsLead:
          'The findings lead from the management KPI to a testable review rule. Each one shifts the question from “What happened?” to “Why did it happen – and what follows from it?”.',
        findings: [
          {
            area: 'Touchless',
            title: 'Touchless shows the what – but not yet the why',
            metric: '46.37%',
            metricLabel: 'touchless rate: 1,978 of 4,266 consistently assessable orders run without manual intervention',
            text: [
              'At 46.37%, not even every second assessed order runs fully touchless. The obvious reaction would be to remove as many manual steps as possible.',
              'But the KPI does not say which intervention is superfluous and which protects quality. The same is true of the other management KPIs at order level: the OTIF rate is 86.92% and 207 orders received complaints – the result is visible, its cause is not.',
            ],
            shift: {
              from: 'How do we remove more manual steps?',
              to: 'Which manual steps add no value – and which protect a risky order from a costly error?',
            },
            image: {
              ...IMG.o2cKpiReport,
              alt: 'Order-to-cash KPI report on customer orders: touchless rate 46.37% (1,978 of 4,266 assessed orders), OTIF rate 86.92% (3,708 of 4,266) and complaint rate 4.85% (207 of 4,266)',
              caption:
                'Management KPIs at order level. The complaint rate here refers to 4,266 assessed orders (4.85%); relative to all 4,500 orders it is 4.60%.',
            },
          },
          {
            area: 'Complaints',
            title: 'Complaints concentrate on configured orders',
            metric: '76.33%',
            metricLabel: 'of all complaints come from technical and service configurations – at only 35.42% of the order volume',
            text: [
              '207 of 4,500 orders received a complaint (4.60%). The complaint rate differs markedly by order type, though: from 1.69% for standard products through 8.01% for technical configurations to 12.90% for service configurations.',
              'The complaint reasons are concentrated too: “service visit not as agreed” and “wrong configuration” together account for about 72.5% of the documented reasons.',
            ],
            table: {
              caption: 'Complaint rate by order type',
              head: ['Order type', 'Orders', 'Complaints', 'Rate', 'Share of all complaints'],
              rows: [
                ['Standard product', '2,906', '49', '1.69%', '23.67%'],
                ['Technical configuration', '974', '78', '8.01%', '37.68%'],
                ['Service configuration', '620', '80', '12.90%', '38.65%'],
                ['Total', '4,500', '207', '4.60%', '100%'],
              ],
            },
            shift: {
              from: 'Why do we have 4.6% complaints?',
              to: 'Which order types and characteristics separate risky cases from uncritical ones?',
            },
            image: {
              ...IMG.complaintsManagementView,
              alt: 'Management dashboard “complaints at a glance”: complaint rate 4.60% (207 of 4,500 orders), rate by order type – standard product 1.69%, technical configuration 8.01%, service configuration 12.90% – and complaint reasons, led by “service visit not as agreed” and “wrong configuration”',
              caption: 'Complaints at a glance: rate by order type and complaint reasons.',
            },
          },
          {
            area: 'Error pattern',
            title: 'Not every error is a new variant',
            metric: '197 / 340',
            metricLabel: 'technical orders changed before release go straight to release without the intended order review (about 58%)',
            text: [
              'Technical orders follow a clear business rule: if an order is changed before its release, an order review is required afterwards – order change → order review → release. Of 340 changed orders, however, only 143 follow this review path; 197 go straight to release.',
              'Noreja does not treat such deviations as additional process variants but as error patterns. The relevant variants stay manageable while deviations are analysed separately and specifically. In classic event-log-based process mining approaches, by contrast, every deviation quickly appears as a variant of its own – the number of variants grows sharply and the analysis becomes confusing.',
              'The causal perspective describes the expected flow. Error patterns show where this flow is violated – for example by skipping, wrong order, rework, delay, batching or open cases.',
            ],
            shift: {
              from: 'Which new variant is this?',
              to: 'Where is the business logic violated – and why?',
            },
            image: {
              ...IMG.skippedOrderReview,
              alt: 'Causal perspective of the 974 technical configuration orders with the error pattern view active: red path from “change order (before release)” straight to “release order” (197 cases, 58%), bypassing the intended “review order” step (143 cases, 42%)',
              caption: 'Error pattern “ignore”: after an order change, the intended order review is skipped.',
            },
            deepDive: {
              title: 'From error pattern to root cause analysis',
              prompt: 'Analyse all reasons that lead to a complaint.',
              text: [
                'The broad cause analysis deliberately starts open. Minerva structures documented complaint reasons, upstream factors and open hypotheses – and clearly separates documented findings from cause hypotheses.',
                'A first focus emerges among the technical configuration orders: of 78 technical orders with complaints, 70 have no documented order review and 8 received a complaint despite a review. For service orders the picture is much less clear – 43 complaints without and 37 despite a review.',
                'The missing review thus becomes a relevant path of analysis – but not yet a proven cause.',
              ],
              images: [
                {
                  ...IMG.minervaComplaintReasons,
                  alt: 'Minerva answer on root cause analysis: table of the five documented complaint reasons – service visit not as agreed 38.6%, wrong configuration 33.8%, quantity deviation 13.0%, product not suitable 12.1%, transport damage 2.4% – each with the open cause questions',
                  caption: 'Minerva structures the documented complaint reasons and separates documented findings from open cause hypotheses.',
                },
                {
                  ...IMG.minervaFirstCausePicture,
                  alt: 'First picture of causes from Minerva: 158 configuration orders with complaints, of which 78 technical (70 without documented review, 8 despite review) and 80 service (43 without, 37 despite review), each with a hypothesis to be tested',
                  caption: 'First picture of causes: for technical orders, 70 of 78 complaint cases have no documented review.',
                },
              ],
            },
            note: {
              title: 'How does my process run? → Where does it deviate? → Why?',
              text: 'The error pattern is not the cause itself but the starting point for root cause analysis. The business question comes first – not the operating logic of the analysis tool.',
            },
          },
          {
            area: 'Root cause analysis',
            title: 'The first plausible explanation does not survive the cross-check',
            metric: '2.23% → 35.82%',
            metricLabel: 'complaint rate of delivered technical orders without review – from 0 to at least 2 special values',
            text: [
              'The first picture of causes suggests an obvious explanation: changed, unreviewed technical orders receive more complaints. Whether this explanation holds is answered by the next question to Minerva – deliberately kept simple.',
            ],
            prompt:
              'Analyse the unreviewed technical orders in more detail. What influence do special values and changes before release have on the complaint rate?',
            table: {
              caption: 'Delivered technical orders without review – complaint rate by special values',
              head: ['Special values', 'Complaints / orders', 'Complaint rate'],
              rows: [
                ['0', '6 / 269', '2.23%'],
                ['1', '40 / 186', '21.51%'],
                ['2 or more', '24 / 67', '35.82%'],
                ['Total', '70 / 522', '13.41%'],
              ],
            },
            shift: {
              from: 'Changed orders are risky.',
              to: 'Which orders were already risky because of their configuration?',
            },
            image: {
              ...IMG.specialValuesRefinement,
              alt: 'Minerva table on 522 delivered technical orders without documented review: complaint rate by number of special values (0: 2.23%, 1: 21.51%, 2 or more: 35.82%), each with and without a change before release',
              caption: 'Cross-check: special values separate the risk much more clearly than the blanket change hypothesis.',
            },
            deepDive: {
              title: 'WHY instead of WHAT: which special feature stands out',
              text: [
                'The number of special values clearly separates the risk. The blanket statement “change = risk”, by contrast, does not generally survive the cross-check: with exactly one special value the rate is higher with a change than without, with two or more special values the direction reverses.',
                'A further drill-down shows that the type of special feature matters too. The combination of a special firmware version, a change before release and a missing review stands out in particular: 11 of 25 of these orders received a complaint (44.00%), compared with 6 of 51 without a change (11.76%).',
              ],
              images: [
                {
                  ...IMG.specialFeaturesDrilldown,
                  alt: 'Drill-down on individual special features with exactly one special value: control cabinet dimensions 17.11%, firmware 22.37%, interface 29.41%; firmware with a change before release 44.00% versus 11.76% without a change',
                  caption: 'WHY instead of WHAT: not only the number but also the type of special feature matters.',
                },
                {
                  ...IMG.o2cHypothesisTree,
                  alt: 'Hypothesis tree: delivered technical orders without review (13.41%) split by 0, 1 and at least 2 special values and with or without a change; with one special value the branch leads to the firmware constellation (44.00% with a change) and to the hypothesis of an insufficient specification check',
                  caption: 'Refined picture of causes: the firmware constellation is deliberately marked as a hypothesis still to be tested.',
                },
              ],
            },
            note: {
              title: 'A hypothesis, not a proven mechanism',
              text: 'The change record does not name the feature that was actually changed. The figures therefore show a conspicuous risk combination – not yet the mechanism “the firmware was changed incorrectly”.',
            },
          },
          {
            area: 'Review rule',
            title: 'From cause to a risk-based review rule',
            metric: '≥ 1 special value',
            metricLabel: 'as the criterion for a prioritised review of technical orders – without a special value the data show no quality benefit from an additional review',
            text: [
              'For the management decision, what ultimately counts is not only the explanation but the question of when a review actually makes sense.',
              'For technical orders without a special value, these data show no quality benefit from an additional review. From one special value onwards, however, reviewed and unreviewed orders differ clearly. The difference also matters economically: in the demo dataset, the stored effort of a complaint is well above that of a single review.',
            ],
            shift: {
              from: 'How do we reach the highest possible touchless rate?',
              to: 'When does a review protect quality – and when can an order run through without intervention?',
            },
            deepDive: {
              title: 'A testable decision hypothesis',
              text: [
                'The analysis does not produce a blanket rule but a hypothesis that can be measured in a pilot:',
              ],
              points: [
                {
                  title: 'Keep the existing obligation',
                  text: 'If an order is changed before release, the intended review remains in place.',
                },
                {
                  title: 'Add risk-based reviews',
                  text: 'Technical orders with at least one special value are additionally reviewed with priority.',
                },
                {
                  title: 'Use the automation potential',
                  text: 'Technical orders without a special value can more readily run through without an additional review, provided there is no other reason for one.',
                },
              ],
            },
            note: {
              title: 'As much touchless as possible. As much effective review as necessary.',
              text: 'The rule is implemented as a pilot and its effect is then measured against touchless rate, complaint rate, OTIF and cost.',
            },
          },
        ],

        aiContext: {
          heading: 'Why AI needs causal process mining',
          lead:
            'Generative AI can summarise patterns and formulate measures quickly. For process automation, however, speed alone is not enough.',
          blocks: [
            {
              title: 'Process data alone does not carry meaning',
              text: [
                'System data shows values and events. It does not automatically explain what a characteristic means in business terms or which company rule lies behind it.',
                'Company context adds this meaning. Causal process mining then tests how characteristics, process behaviour and outcomes are related. Minerva connects these levels in dialogue and makes the analysis accessible to the user.',
              ],
              quote: 'Process data provides the facts. Company context provides the meaning. Causal process mining tests the cause hypotheses.',
            },
            {
              title: 'Automating on the basis of the right analysis',
              text: [
                'Four things are decisive for AI-supported process decisions: the right business granularity, relationships between business objects, company context and an analysis that does not prematurely read correlations as causes.',
              ],
              quote: 'Automating a process on the basis of the wrong analysis does not make it better – only wrong faster.',
            },
          ],
          image: {
            ...IMG.minervaAgentsVsLlm,
            alt: 'Overview “What Minerva agents do that an LLM alone cannot”: architecture, agents and skills, configurability, evidenced answers, governance, context, causality and a continuous 24/7 loop',
            caption: 'What Minerva agents do that an LLM alone cannot (in German).',
          },
          note: 'Causal process mining provides the analytical foundation. Minerva makes it usable in dialogue.',
        },

        measures: {
          heading: 'From finding to prioritised measure',
          lead:
            'A finding does not change a process yet. In the Business Impact Board, findings are rated by expected impact, implementation effort, risk and uncertainty – process excellence and the business then prioritise the next improvement initiative together.',
          tableHeading: 'Possible improvement directions',
          items: [
            {
              finding: 'Review after changes is often skipped',
              measure: 'Enforce the existing review rule more consistently and investigate why it is skipped',
              benefit: 'Quality, compliance, complaint risk',
            },
            {
              finding: 'Special configurations show much higher risks',
              measure: 'Prioritise technical orders with at least one special value for a risk-based review',
              benefit: 'Complaint rate, quality, review effort',
            },
            {
              finding: 'Low-risk orders without a special value',
              measure: 'Reduce additional reviews specifically and test this as a pilot',
              benefit: 'Touchless rate, lead time, degree of automation',
            },
            {
              finding: 'Firmware constellation particularly conspicuous',
              measure: 'Investigate the hypothesis further in a targeted way',
              benefit: 'Quality, complaint risk, uncertainty',
            },
            {
              finding: 'Service complaints stay high despite review',
              measure: 'Investigate a separate cause path',
              benefit: 'Service quality, customer satisfaction',
            },
          ],
          image: {
            ...IMG.impactBoardMatrix,
            alt: 'Business Impact Board with five O2C findings in the impact/effort matrix: three quick wins, one strategic finding and one with low priority',
            caption: 'Business Impact Board: findings placed by impact and effort.',
          },
          extraImages: [
            {
              ...IMG.impactBoardKanban,
              alt: 'Kanban view of the Business Impact Board with the columns backlog, in progress, paused, impact generated and discarded; all five findings in the backlog',
              caption: 'Kanban: findings move from the backlog to “impact generated”.',
            },
            {
              ...IMG.impactBoardQuadrangle,
              alt: 'Devil’s Quadrangle across all findings with the dimensions time, cost, quality and complexity, and an impact timeline with the kick-off workshop as the first milestone',
              caption: 'Devil’s Quadrangle and impact timeline for the findings.',
            },
            {
              ...IMG.impactBoardRoi,
              alt: 'ROI calculator in the Business Impact Board: annual savings potential, implementation cost, net ROI in year one, cumulative savings over five years and savings potential per finding',
              caption: 'ROI calculator: savings potential, implementation cost and payback per finding – values from the demo dataset.',
            },
          ],
          note: 'Prioritisation is a business decision. Minerva can prepare analysis paths, context and options; control and decision-making authority stay traceably with the process owner and the business at all times.',
        },

        loop: {
          heading: 'The loop: Insight → Action → Impact → Feedback',
          lead:
            'After prioritisation, a measure is implemented as a pilot and its effect is measured again against the same process data. Minerva Frontier Agents can accompany this loop continuously: spotting new findings, developing hypotheses further and observing the effect of implemented measures.',
          steps: [
            { step: 'Insight', text: 'Special configurations show different risk profiles; “change = risk” is not enough as an explanation.' },
            { step: 'Action', text: 'Keep mandatory reviews and prioritise technical special configurations on a risk basis.' },
            { step: 'Impact', text: 'Measure touchless rate, complaint rate, OTIF and cost again.' },
            { step: 'Feedback', text: 'If the expected effect is not confirmed, the hypothesis is adjusted.' },
          ],
          questions: [
            'Does the touchless rate rise for low-risk orders without a special value?',
            'Does the complaint rate fall for technical special configurations?',
            'Is the review after order changes carried out more consistently?',
            'Does the OTIF rate stay stable or improve?',
            'Are review effort and avoided complaint costs in a sensible proportion?',
            'Is the hypothesis confirmed – or does it need adjusting?',
          ],
        },

        principlesHeading: 'Four principles behind the analysis',
        principles: [
          {
            title: 'Keep granularity',
            text: 'Business objects and their relationships are preserved instead of reducing the process up front to a single linear case logic.',
          },
          {
            title: 'Start with the business question',
            text: 'The causal perspective is built for the concrete business question – the operating logic of the tool does not drive the analysis.',
          },
          {
            title: 'Separate error patterns from causes',
            text: 'A visible deviation is a starting point for analysis, not yet a root cause.',
          },
          {
            title: 'Include context',
            text: 'System data shows values; company context explains what they mean in business terms.',
          },
        ],

        conclusion: {
          heading: 'Conclusion: touchless alone is no control logic',
          text: [
            'A high touchless rate alone is not a sufficient control logic. What matters is where a manual intervention adds no value and where it protects a risky order from a later quality problem.',
            'Causal process mining connects the business target logic, observed error patterns, company context and targeted cross-checks. In the O2C example this corrects an initially plausible explanation: it is not the change alone that separates good from bad cases, but above all the risk profile of the special configuration.',
            '“More touchless” thus becomes a more concrete course of action: automate low-risk orders more, review technical special configurations specifically, and then measure whether the rule actually improves quality and efficiency.',
          ],
          claim: 'Understand. Prioritise. Automate effectively. Protect quality.',
        },

        faq: [
          {
            question: 'What is an order-to-cash process?',
            answer:
              'Order-to-cash (O2C) is the end-to-end process from order entry to payment clearing. It covers order capture, configuration and release, delivery and invoicing, payment and dunning, and complaints and rework. In the operational data O2C is not a linear flow but a network of business objects such as customer order, item, configuration, delivery, invoice, payment and complaint.',
          },
          {
            question: 'What does touchless mean in order-to-cash?',
            answer:
              'An order counts as touchless when it runs through the process without manual intervention. The touchless rate measures the share of such orders – 46.37% in the synthetic demo dataset, i.e. 1,978 of 4,266 consistently assessable customer orders.',
          },
          {
            question: 'Should the touchless rate be as high as possible?',
            answer:
              'Not at any price. Some manual steps only cost time, others prevent costly errors. In the O2C example, the complaint rate of unreviewed technical orders rises markedly with the number of special values. What matters is therefore which orders need a human and which do not: as much touchless as possible, as much effective review as necessary.',
          },
          {
            question: 'What does the OTIF rate measure?',
            answer:
              'OTIF stands for “on time in full”: an order was delivered on schedule and complete. In the demo dataset, 3,708 of 4,266 consistently assessable orders meet this criterion – an OTIF rate of 86.92%.',
          },
          {
            question: 'Why does Noreja treat deviations as error patterns rather than variants?',
            answer:
              'In event-log-based approaches every deviation quickly appears as a variant of its own; the number of variants grows and the analysis becomes confusing. Noreja describes the expected flow in the causal perspective and classifies violations – such as skipping, wrong order or rework – as error patterns. In the O2C example, 197 of 340 technical orders changed before release go straight to release without the intended review.',
          },
          {
            question: 'Is an error pattern already the cause of a problem?',
            answer:
              'No. An error pattern shows where the expected flow is violated. It is the starting point of root cause analysis, not its result. In the O2C example the missing review is first a relevant path of analysis – only the cross-check shows that it is above all the risk profile of the special configuration that separates good from bad cases.',
          },
          {
            question: 'Why is a change before release not automatically the cause of complaints?',
            answer:
              'Because the cross-check does not generally confirm the blanket hypothesis. For delivered technical orders without review, the complaint rate rises above all with the number of special values – from 2.23% without a special value to 21.51% with one and 35.82% with two or more. Within the same number of special values, the change shows no consistent picture.',
          },
          {
            question: 'What role does the AI assistant Minerva play?',
            answer:
              'Minerva answers business questions in dialogue, structures complaint reasons, forms comparison groups and separates documented findings from cause hypotheses. It connects process data, company context and causal process mining. The decision about measures stays with the process owner and the business.',
          },
          {
            question: 'Why does AI need causal process mining?',
            answer:
              'Generative AI can summarise patterns quickly but does not by itself distinguish correlation from cause. AI-supported process decisions need the right business granularity, relationships between business objects, company context and an analysis that tests cause hypotheses. Automating a process on the basis of the wrong analysis only makes it wrong faster.',
          },
          {
            question: 'How does a finding become a measure?',
            answer:
              'In the Business Impact Board, findings are rated and prioritised by expected impact, implementation effort, risk and uncertainty. The chosen measure is implemented as a pilot; afterwards touchless rate, complaint rate, OTIF and cost are measured again with the same process data.',
          },
          {
            question: 'Are the figures from a real company?',
            answer:
              'No. All figures come from a synthetic order-to-cash dataset. They illustrate the analysis method and are not production figures of any customer.',
          },
        ],

        caseHeading: 'The full case description',
        caseText:
          'Event knowledge graph, end-to-end causal perspective, all five findings with their analysis steps, the root cause analysis with Minerva and the path to a risk-based review rule – step by step in the Noreja Help Center (in German).',
        caseCta: 'Read the case in the Help Center',
      },
    },
  },
  {
    id: 'plan-to-produce',
    name: 'Plan-to-Produce',
    dateModified: '2026-11-04',
    content: {
      de: {
        scenario: 'End-to-End-Prozess · Fertigung im Sondermaschinenbau',
        metaTitle: 'Plan-to-Produce: Process Mining in der Fertigung im Sondermaschinenbau | Noreja',
        metaDescription:
          'Plan-to-Produce vom Produktionsauftrag bis zur Auslieferung: Plan-Ist-Vergleich je Arbeitsplatz, Wartezeiten zwischen Arbeitsplätzen und gebundenes Kapital im Umlaufbestand – Process Mining im Sondermaschinenbau.',
        keywords: [
          'Plan-to-Produce',
          'Process Mining Fertigung',
          'Process Mining Produktion',
          'Sondermaschinenbau',
          'Plan-Ist-Vergleich Fertigung',
          'Termintreue Arbeitsplatz',
          'Wartezeitenanalyse',
          'Liegezeiten Fertigung',
          'Durchlaufzeit Fertigung',
          'Work in Progress',
          'gebundenes Kapital Umlaufbestand',
        ],
        tagline:
          'Vom Produktionsauftrag bis zur ausgelieferten Maschine: wie Process Intelligence Soll- und Ist-Termine je Arbeitsplatz vergleicht, Wartezeiten zwischen Arbeitsplätzen findet und das dabei gebundene Kapital sichtbar macht.',
        workInProgress:
          'Diese Seite ist in Arbeit: Screenshots aus der Analyse in Noreja folgen in Kürze. Die Kennzahlen sind Beispielwerte eines synthetischen Szenarios.',
        definition:
          'Plan-to-Produce ist der End-to-End-Prozess von der Fertigungsplanung bis zum fertigen Endprodukt. Im Sondermaschinenbau umfasst er Fertigungsplanung und Kalkulation, Produktionsaufträge für Vorfertigung und Unterbaugruppen sowie Endmontage und Auslieferung. Weil jede Maschine ein Kundenprojekt mit Losgröße 1 ist, laufen viele Fertigungsaufträge parallel über gemeinsame Arbeitsplätze und müssen zur Endmontage wieder zusammenkommen. Noreja misst diesen Ablauf auf Ebene des einzelnen Arbeitsgangs: Soll- und Ist-Termine, Wartezeiten zwischen Arbeitsplätzen und das dabei gebundene Kapital.',
        demoNote:
          'Hinweis: Alle Kennzahlen sind Beispielwerte eines synthetischen Demonstrationsszenarios. Sie veranschaulichen Analysewege und Methoden und sind keine Produktivkennzahlen eines Kunden.',

        keyFacts: [
          {
            value: '41 %',
            label: 'Arbeitsgänge mit Startverzug',
            detail: 'beginnen mehr als einen Arbeitstag nach dem Soll-Start laut Arbeitsplan',
          },
          {
            value: '78 %',
            label: 'Liegezeit in der Durchlaufzeit',
            detail: 'von Vorfertigung und Baugruppenmontage entfallen auf Warten zwischen Arbeitsplätzen',
          },
          {
            value: '≈ 3,1 Mio. €',
            label: 'Gebundenes Kapital',
            detail: 'durchschnittlicher Materialbestand an Arbeitsplätzen und Pufferflächen (Work in Progress)',
          },
          {
            value: '46 %',
            label: 'Endmontage wartet auf den Schaltschrank',
            detail: 'der Kundenprojekte, in denen der Schaltschrank als letzte Unterbaugruppe fertig wird',
          },
        ],

        phasesHeading: 'Der Prozess in drei Phasen',
        phasesLead:
          'Ein Kundenprojekt zerfällt nach der Planung in viele Fertigungsaufträge, die parallel über gemeinsame Arbeitsplätze laufen und sich zur Endmontage wieder treffen. Gemessen wird auf jeder Ebene: Arbeitsgang, Arbeitsplatz, Fertigungsauftrag und Kundenprojekt.',
        phases: [
          {
            title: 'Fertigungsplanung & Kalkulation',
            summary:
              'Aus dem freigegebenen Kundenprojekt entstehen Fertigungsstückliste und Arbeitsplan. Die Vorkalkulation bewertet Material und Vorgabezeiten, die Terminierung legt für jeden Arbeitsgang Soll-Start und Soll-Ende am jeweiligen Arbeitsplatz fest. Mit der Freigabe der Produktionsaufträge wird der Plan verbindlich.',
            steps: [
              'Kundenprojekt freigegeben',
              'Fertigungsstückliste erstellt',
              'Arbeitsplan erstellt',
              'Vorkalkulation abgeschlossen',
              'Terminierung & Kapazitätsplanung',
              'Produktionsauftrag freigegeben',
            ],
            objects: ['Kundenprojekt', 'Stückliste', 'Arbeitsplan', 'Arbeitsgang', 'Vorkalkulation', 'Produktionsauftrag'],
            question: 'Sind die Vorgabezeiten im Arbeitsplan realistisch – und wo werden sie systematisch unterschätzt?',
          },
          {
            title: 'Produktionsauftrag, Vorfertigung & Unterbaugruppen',
            summary:
              'Mit der Freigabe der Produktionsaufträge wird Material an die Arbeitsplätze bereitgestellt. Mechanische Teile, Schaltschrank und Unterbaugruppen entstehen in parallelen Strängen, die sich dieselben Arbeitsplätze teilen. Jeder Arbeitsgang wird mit Ist-Start und Ist-Ende zurückgemeldet, jede Materialbewegung verändert den Bestandswert am Arbeitsplatz.',
            strands: [
              {
                name: 'Mechanische Vorfertigung',
                steps: ['Materialbereitstellung', 'Zuschnitt / Sägen', 'Fräsen am Bearbeitungszentrum', 'Drehen', 'Schweißen', 'Lackieren'],
              },
              {
                name: 'Elektro & Schaltschrank',
                steps: ['Elektrokonstruktion freigegeben', 'Kommissionierung Elektromaterial', 'Schaltschrankbau', 'Verdrahtung & Prüfung'],
              },
              {
                name: 'Unterbaugruppen',
                steps: ['Kommissionierung Teile & Zukaufteile', 'Baugruppenmontage', 'Baugruppenprüfung', 'Einlagerung Pufferfläche'],
              },
            ],
            objects: ['Produktionsauftrag', 'Arbeitsgang', 'Arbeitsplatz', 'Rückmeldung', 'Material', 'Bestand', 'Unterbaugruppe', 'Lackiercharge'],
            question: 'Wo warten Bauteile zwischen zwei Arbeitsplätzen – und wie viel Kapital bindet das?',
          },
          {
            title: 'Endmontage & Auslieferung',
            summary:
              'Erst wenn alle Unterbaugruppen bereitstehen, beginnt die Endmontage. Es folgen Inbetriebnahme und Werksabnahme mit dem Kunden, danach wird die Maschine für den Transport vorbereitet und ausgeliefert. Die Nachkalkulation vergleicht die tatsächlichen Kosten mit der Vorkalkulation.',
            steps: [
              'Unterbaugruppen vollständig',
              'Endmontage Start',
              'Endmontage Ende',
              'Inbetriebnahme',
              'Werksabnahme (FAT)',
              'Verpackung & Versand',
              'Nachkalkulation',
            ],
            objects: ['Endmontageauftrag', 'Unterbaugruppe', 'Abnahmeprotokoll', 'Lieferung', 'Nachkalkulation'],
            question: 'Welche Unterbaugruppe hält den Start der Endmontage auf – und was bedeutet das für den Liefertermin?',
          },
        ],
        objectsNote:
          'Ein Kundenprojekt hat viele Fertigungsaufträge, ein Fertigungsauftrag viele Arbeitsgänge, ein Arbeitsplatz bearbeitet Teile aus vielen Projekten, und eine Lackiercharge bündelt Teile aus unterschiedlichen Aufträgen. Genau diese Beziehungen bleiben im Event Knowledge Graph erhalten – nur so lässt sich jede Wartezeit bis zum betroffenen Bauteil und Kundenprojekt zurückverfolgen.',

        contextObjects: {
          heading: 'Kontext, der die Fertigungsdaten erklärt',
          lead:
            'Nicht jede Information, die eine Abweichung erklärt, steht im Produktionsauftrag. Diese Kontextobjekte reichern die Analyse an, ohne Teil des eigentlichen Ablaufs zu sein.',
          items: [
            {
              name: 'Schichtkalender',
              text: 'Zeigt, ob ein Arbeitsplatz zum Soll-Start überhaupt besetzt war – und trennt Wartezeit aus Kapazitätsmangel von Wartezeit aus Ablaufgründen.',
            },
            {
              name: 'Maschinenstörung',
              text: 'Stillstände und Wartungsfenster aus der Instandhaltung erklären Dauerabweichungen, die nicht an der Vorgabezeit liegen.',
            },
            {
              name: 'Konstruktionsänderung',
              text: 'Änderungsaufträge aus dem PLM-System zeigen, welche Fertigungsaufträge nach der Freigabe noch einmal angepasst wurden.',
            },
            {
              name: 'Qualitätsmeldung',
              text: 'Prüfbefunde und Nacharbeitsaufträge erklären, warum Teile auf einen vorherigen Arbeitsplatz zurückspringen.',
            },
            {
              name: 'Zukaufteil-Bestellung',
              text: 'Die Verbindung zum Purchase-to-Pay-Prozess zeigt, ob eine Montage auf ein verspätetes Zukaufteil wartet.',
            },
            {
              name: 'Liefertermin',
              text: 'Der zugesagte Liefertermin des Kundenprojekts macht aus einem Startverzug am Arbeitsplatz ein Terminrisiko für den Kunden.',
            },
          ],
        },

        findingsHeading: 'Fünf Findings: messen, verstehen, optimieren',
        findingsLead:
          'Die Anwendungsfälle bauen aufeinander auf: Der Plan-Ist-Vergleich zeigt, wo der Plan nicht hält, die Wartezeitenanalyse, wo Bauteile liegen, und die Bestandswerte, was das kostet. Daraus folgen die Hebel für Endmontage und Kalkulation.',
        findings: [
          {
            area: 'Termintreue',
            title: 'Verspäteter Start ist nicht dasselbe wie zu lange Bearbeitung',
            metric: '41 %',
            metricLabel: 'der Arbeitsgänge beginnen mehr als einen Arbeitstag nach dem Soll-Start',
            text: [
              'Für jeden Arbeitsgang stehen im Arbeitsplan Soll-Start und Soll-Ende, aus den Rückmeldungen der Betriebsdatenerfassung kommen Ist-Start und Ist-Ende. Statt nur zu fragen, ob ein Auftrag zu spät fertig wird, zerlegt die Analyse die Abweichung in zwei Größen: den Startverzug (Ist-Start gegenüber Soll-Start) und die Dauerabweichung (Ist-Dauer gegenüber Soll-Dauer).',
              'Beide Größen verlangen unterschiedliche Maßnahmen. Ein Arbeitsgang, der zu spät beginnt, wartet auf Vorgänger, Material oder Kapazität – die Ursache liegt vor dem Arbeitsplatz. Ein Arbeitsgang, der pünktlich beginnt und zu lange dauert, deutet auf knappe Vorgabezeiten, Rüstaufwand oder Nacharbeit am Arbeitsplatz selbst.',
              'Im Beispiel zeigen sich genau diese zwei Profile: Das 5-Achs-Bearbeitungszentrum beginnt 58 % seiner Arbeitsgänge verspätet, liegt in der Bearbeitungsdauer aber nur 6 % über Plan. Die Schweißerei startet meist pünktlich, braucht aber im Median 31 % länger als vorgegeben.',
            ],
            prompt: 'An welchen Arbeitsplätzen beginnen Arbeitsgänge verspätet, und wo dauert die Bearbeitung länger als im Arbeitsplan vorgesehen?',
            table: {
              caption: 'Plan-Ist-Vergleich je Arbeitsplatz (Auswahl, Beispielwerte; AT = Arbeitstage)',
              head: ['Arbeitsplatz', 'Arbeitsgänge', 'Startverzug > 1 AT', 'Dauer vs. Soll', 'Ende termingerecht'],
              rows: [
                ['Zuschnitt / Sägen', '2.910', '22 %', '+4 %', '81 %'],
                ['5-Achs-Bearbeitungszentrum', '3.420', '58 %', '+6 %', '44 %'],
                ['Drehen', '2.180', '35 %', '+9 %', '63 %'],
                ['Schweißerei', '1.640', '18 %', '+31 %', '49 %'],
                ['Lackierung', '1.210', '64 %', '+3 %', '38 %'],
                ['Schaltschrankbau', '960', '47 %', '+22 %', '36 %'],
                ['Baugruppenmontage', '2.650', '39 %', '+12 %', '57 %'],
              ],
            },
            shift: {
              from: 'Welcher Auftrag ist zu spät?',
              to: 'Beginnt der Arbeitsgang zu spät oder dauert er zu lange – und liegt die Ursache vor dem Arbeitsplatz oder an ihm?',
            },
            note: {
              title: 'Wie genau sind die Rückmeldezeiten?',
              text: 'Werden Arbeitsgänge erst am Schichtende gesammelt zurückgemeldet, sehen Prozessfehler und Datenfehler gleich aus. Bevor eine Abweichung als Prozessproblem bewertet wird, wird deshalb geprüft, wie die Ist-Zeiten entstehen – etwa ob sich Rückmeldungen auffällig auf Schichtwechsel häufen.',
            },
          },
          {
            area: 'Wartezeiten',
            title: 'Bauteile liegen länger, als sie bearbeitet werden',
            metric: '78 %',
            metricLabel: 'der Durchlaufzeit in Vorfertigung und Baugruppenmontage sind Liegezeit zwischen zwei Arbeitsplätzen',
            text: [
              'Die Wartezeit zwischen zwei Arbeitsplätzen ergibt sich aus dem Ist-Ende des einen und dem Ist-Start des nächsten Arbeitsgangs. Über alle Übergänge eines Fertigungsauftrags entsteht so ein vollständiges Bild, wo Bauteile im Prozess warten – und wie viel der Durchlaufzeit tatsächlich Bearbeitung ist.',
              'Im Beispiel liegt der Bearbeitungsanteil der Vorfertigung bei 22 %. Der auffälligste Übergang führt von der Schweißerei zur Lackierung: Geschweißte Teile warten im Median 4,6 Arbeitstage, weil die Lackieranlage in Chargen gefahren wird und erst bei ausreichender Belegung startet.',
              'Nicht jede Wartezeit hat denselben Grund. Die Analyse unterscheidet, ob ein Bauteil auf Kapazität am nächsten Arbeitsplatz wartet, auf fehlendes Material oder Zukaufteile, auf eine gebündelte Charge oder auf eine Konstruktionsänderung.',
            ],
            prompt: 'Zwischen welchen Arbeitsplätzen warten Bauteile am längsten, und worauf warten sie?',
            table: {
              caption: 'Längste Übergänge zwischen Arbeitsplätzen (Beispielwerte; AT = Arbeitstage)',
              head: ['Übergang', 'Fälle', 'Median Wartezeit', 'Hauptgrund'],
              rows: [
                ['Schweißerei → Lackierung', '1.180', '4,6 AT', 'Chargenbildung'],
                ['Vorfertigung → Baugruppenmontage', '2.340', '3,8 AT', 'Fehlende Zukaufteile'],
                ['Bearbeitungszentrum → Drehen', '960', '2,1 AT', 'Kapazität'],
                ['Lackierung → Baugruppenmontage', '1.090', '1,9 AT', 'Trocknung & Transport'],
                ['Zuschnitt → Bearbeitungszentrum', '2.480', '1,7 AT', 'Kapazität'],
              ],
            },
            shift: {
              from: 'Wie lange dauert die Fertigung?',
              to: 'Wo wartet ein Bauteil, worauf wartet es – und welcher Übergang verlängert die Durchlaufzeit am stärksten?',
            },
            deepDive: {
              title: 'Eigener Ablauf oder geteilte Ressource?',
              text: [
                'Die Lackieranlage ist eine gemeinsame Ressource für Teile aus vielen Fertigungsaufträgen und Kundenprojekten. Ob ein Teil wartet, hängt deshalb nicht von seinem eigenen Auftrag ab, sondern davon, welche anderen Teile denselben Lackierlauf belegen.',
                'Im Event Knowledge Graph bleibt die Beziehung zwischen Bauteil, Arbeitsgang und Lackiercharge erhalten. Ein flacher Eventlog je Fertigungsauftrag sieht nur, dass das Teil wartet – nicht, auf wen.',
              ],
              questions: [
                'Welche Farbtöne oder Teilegrößen verlängern die Chargenbildung?',
                'Wäre eine feste Taktung der Lackierläufe besser als eine Mindestbelegung?',
                'Welche Kundenprojekte verlieren durch die Lackierung ihren Puffer bis zur Endmontage?',
                'Wie verändert sich die Wartezeit, wenn eilige Teile eigene Läufe bekommen?',
              ],
            },
          },
          {
            area: 'Gebundenes Kapital',
            title: 'Wartende Bauteile binden Kapital – vor allem kurz vor der Endmontage',
            metric: '≈ 3,1 Mio. €',
            metricLabel: 'durchschnittlich gebundenes Kapital in Material an Arbeitsplätzen und Pufferflächen',
            text: [
              'Mit den Bestandswerten der Materialien an den Arbeitsplätzen wird aus Wartezeit Geld. Für jeden Zeitpunkt ist bekannt, welches Material mit welchem Wert an welchem Arbeitsplatz liegt. Daraus ergibt sich das gebundene Kapital im Umlaufbestand (Work in Progress) – je Arbeitsplatz, je Fertigungsauftrag und je Kundenprojekt.',
              'Entscheidend ist die Kombination aus Wert und Dauer: Ein Rohteil für 200 €, das zehn Tage liegt, bindet weniger Kapital als eine fertig montierte Baugruppe für 60.000 €, die zwei Tage wartet. Im Beispiel liegen 43 % des gebundenen Kapitals auf der Pufferfläche vor der Endmontage – in fertigen Unterbaugruppen, deren Wert durch Material und bereits geleistete Arbeit am höchsten ist.',
              'Bei einem kalkulatorischen Zinssatz von 8 % kostet der durchschnittliche Umlaufbestand rund 250.000 € im Jahr – noch ohne Fläche, Handling, Beschädigungsrisiko und Teile, die durch spätere Konstruktionsänderungen obsolet werden.',
            ],
            prompt: 'Wie viel Kapital ist an welchen Arbeitsplätzen gebunden, und welcher Anteil davon wartet nur?',
            table: {
              caption: 'Gebundenes Kapital nach Bereich (Beispielwerte; AT = Arbeitstage)',
              head: ['Bereich', 'Ø Bestandswert', 'Anteil', 'Median Liegedauer'],
              rows: [
                ['Rohmaterial an Arbeitsplätzen', '0,31 Mio. €', '10 %', '2,4 AT'],
                ['Teile in der Vorfertigung', '0,62 Mio. €', '20 %', '6,8 AT'],
                ['Teile vor und nach der Lackierung', '0,38 Mio. €', '12 %', '5,9 AT'],
                ['Unterbaugruppen in der Montage', '0,46 Mio. €', '15 %', '4,2 AT'],
                ['Pufferfläche vor der Endmontage', '1,33 Mio. €', '43 %', '9,7 AT'],
              ],
            },
            shift: {
              from: 'Wie hoch ist der Bestand?',
              to: 'Welcher Bestand wartet nur – wo, wie lange und mit welchem Wert?',
            },
          },
          {
            area: 'Endmontage',
            title: 'Die Endmontage wartet auf die letzte Unterbaugruppe',
            metric: '46 %',
            metricLabel: 'der Endmontagen beginnen erst, wenn der Schaltschrank als letzte Unterbaugruppe fertig ist',
            text: [
              'Eine Sondermaschine besteht aus mehreren Unterbaugruppen – Grundgestell, Antriebs- und Handhabungseinheiten, Schutzeinhausung, Schaltschrank –, die jeweils eigene Fertigungsaufträge haben. Die Endmontage kann erst beginnen, wenn alle bereitstehen. Ihr Start wird deshalb nicht vom Durchschnitt bestimmt, sondern von der Baugruppe, die als letzte fertig wird.',
              'Im Beispiel ist das in 46 % der Kundenprojekte der Schaltschrank, in weiteren 21 % eine Baugruppe mit fehlenden Zukaufteilen. Die übrigen Unterbaugruppen sind zu diesem Zeitpunkt im Median seit 8 Arbeitstagen fertig und warten auf der Pufferfläche – genau dort, wo das meiste Kapital gebunden ist.',
              'Der Hebel liegt daher nicht darin, alle Baugruppen schneller zu fertigen, sondern sie zu synchronisieren: die kritische Baugruppe früher einzuplanen und unkritische Baugruppen später zu starten, damit sie nicht wochenlang auf das letzte Teil warten.',
            ],
            prompt: 'Welche Unterbaugruppe ist bei Endmontagebeginn am häufigsten die letzte, und wie lange warten die übrigen?',
            shift: {
              from: 'Warum beginnt die Endmontage zu spät?',
              to: 'Welche Unterbaugruppe bestimmt den Start – und wie lange warten alle anderen auf sie?',
            },
            deepDive: {
              title: 'Warum der Schaltschrank zum Engpass wird',
              prompt: 'Beginnt der Schaltschrankbau in Projekten mit späten Konstruktionsänderungen später als in Projekten ohne Änderung?',
              text: [
                'Der Schaltschrankbau beginnt erst, wenn die Elektrokonstruktion freigegeben ist, und diese hängt an Änderungen aus der mechanischen Konstruktion. Verbindet man die Fertigungsaufträge mit den Änderungsaufträgen aus dem PLM-System, zeigt sich: Projekte mit mindestens einer Konstruktionsänderung nach der Fertigungsfreigabe beginnen den Schaltschrankbau im Median 6 Arbeitstage später.',
                'Das ist eine Hypothese, noch kein Ursachenbeweis. Sie lässt sich aber prüfen: Wenn späte Änderungen der Treiber sind, müssen Projekte ohne Änderung einen deutlich pünktlicheren Schaltschrankstart zeigen – unabhängig von Maschinentyp und Auslastung.',
              ],
            },
          },
          {
            area: 'Kalkulation',
            title: 'Ist-Zeiten zeigen, wo die Vorkalkulation zu optimistisch ist',
            metric: '+7 %',
            metricLabel: 'höhere Fertigungskosten je Maschine als vorkalkuliert, zu zwei Dritteln aus drei Arbeitsplätzen',
            text: [
              'Die Vorgabezeiten aus dem Arbeitsplan sind nicht nur Grundlage der Terminierung, sondern auch der Vorkalkulation. Liegen die Ist-Dauern an einzelnen Arbeitsplätzen systematisch über dem Soll, werden Liefertermine und Kosten gleichermaßen unterschätzt.',
              'Verdichtet über alle Arbeitsgänge liegen die Fertigungskosten je Maschine im Beispiel rund 7 % über der Vorkalkulation. Zwei Drittel der Abweichung entstehen in der Schweißerei, im Schaltschrankbau und in der Baugruppenmontage – also dort, wo der Plan-Ist-Vergleich die größten Dauerabweichungen zeigt.',
              'Werden die gemessenen Ist-Zeiten je Arbeitsplatz und Maschinentyp in die Arbeitspläne zurückgespielt, rechnen Angebote für neue Sondermaschinen mit realistischen Zeiten, und die Kapazitätsplanung setzt Puffer dort, wo sie tatsächlich gebraucht werden.',
            ],
            prompt: 'An welchen Arbeitsplätzen weichen die Ist-Zeiten systematisch von den Vorgabezeiten ab, und was bedeutet das für die Kalkulation neuer Maschinen?',
            shift: {
              from: 'Wie hoch war die Abweichung im letzten Projekt?',
              to: 'Welche Vorgabezeiten sind systematisch zu knapp – und für welche Maschinentypen und Arbeitsplätze gilt das?',
            },
            note: {
              title: 'Abweichung ist nicht automatisch Ineffizienz',
              text: 'Im Sondermaschinenbau ist jede Maschine ein Stück weit neu. Eine Dauerabweichung kann auf echte Ineffizienz hinweisen, aber auch auf einen Konstruktionsanteil, der in der Vorgabezeit fehlt. Erst der Vergleich über Maschinentypen und Projekte trennt einmalige Effekte von systematischen.',
            },
          },
        ],

        measures: {
          heading: 'Vom Finding zur Maßnahme',
          lead:
            'Aus jedem Finding lässt sich eine Verbesserungsrichtung ableiten. Welche zuerst umgesetzt wird, entscheidet die Fachseite nach Wirkung, Aufwand und Risiko – die Analyse liefert dafür die Grundlage.',
          items: [
            {
              finding: 'Termintreue',
              measure: 'Startverzug und Dauerabweichung getrennt steuern: Material und Vorgänger vor dem Arbeitsplatzstart prüfen, Vorgabezeiten an Arbeitsplätzen mit Dauerabweichung überarbeiten',
              benefit: 'Mehr termingerecht beendete Arbeitsgänge, weniger Eilaufträge und Umplanungen',
            },
            {
              finding: 'Wartezeiten',
              measure: 'Lackierläufe fest takten statt nach Mindestbelegung starten, Fehlteile vor Freigabe der Baugruppenmontage prüfen',
              benefit: 'Kürzere Durchlaufzeit der Vorfertigung, höherer Bearbeitungsanteil',
            },
            {
              finding: 'Gebundenes Kapital',
              measure: 'Bestandsobergrenzen je Pufferfläche einführen und gebundenes Kapital je Arbeitsplatz als Kennzahl im Shopfloor-Board verankern',
              benefit: 'Weniger gebundenes Kapital, geringere Kapitalkosten, weniger Fläche',
            },
            {
              finding: 'Endmontage',
              measure: 'Unterbaugruppen rückwärts vom Endmontagestart terminieren, Schaltschrankbau früher freigeben und priorisieren',
              benefit: 'Früherer Endmontagestart, kürzere Liegezeit fertiger Baugruppen, höhere Liefertermintreue',
            },
            {
              finding: 'Kalkulation',
              measure: 'Gemessene Ist-Zeiten je Arbeitsplatz und Maschinentyp regelmäßig in Arbeitspläne und Vorkalkulation zurückspielen',
              benefit: 'Realistischere Angebote und Liefertermine, geringeres Margenrisiko',
            },
          ],
          note: 'Priorisierung ist eine fachliche Entscheidung. Minerva kann Analysewege, Kontext und Optionen vorbereiten; Steuerung und Entscheidungshoheit bleiben bei Fertigungsleitung und Fachseite.',
        },

        loop: {
          heading: 'Der Loop: Insight → Action → Impact → Feedback',
          lead:
            'Nach der Umsetzung wird die Wirkung einer Maßnahme mit denselben Fertigungsdaten erneut gemessen. Minerva Frontier Agents können diesen Loop kontinuierlich begleiten: neue Abweichungen erkennen, Hypothesen weiterentwickeln und die Wirkung umgesetzter Maßnahmen beobachten.',
          steps: [
            { step: 'Insight', text: 'Fertige Unterbaugruppen warten im Median 8 Arbeitstage auf den Schaltschrank und binden dabei das meiste Kapital.' },
            { step: 'Action', text: 'Schaltschrankbau früher freigeben, unkritische Baugruppen rückwärts vom Endmontagestart terminieren.' },
            { step: 'Impact', text: 'Liegezeit auf der Pufferfläche, gebundenes Kapital und Liefertermintreue erneut messen.' },
            { step: 'Feedback', text: 'Bestätigt sich die Wirkung nicht, wird die Hypothese angepasst – etwa in Richtung später Konstruktionsänderungen.' },
          ],
          questions: [
            'Sinkt die Liegezeit fertiger Unterbaugruppen vor der Endmontage?',
            'Sinkt das gebundene Kapital auf der Pufferfläche?',
            'Beginnt die Endmontage näher am Soll-Start?',
            'Bleibt die Auslastung der Vorfertigung stabil?',
            'Verbessert sich die Liefertermintreue gegenüber dem Kunden?',
            'Bestätigt sich die Hypothese – oder muss sie angepasst werden?',
          ],
        },

        analysisQuestions: {
          heading: 'Weitere Fragen an die Fertigungsdaten',
          lead: 'Dieselbe Datengrundlage – Arbeitsplan, Rückmeldungen und Bestandswerte – beantwortet weitere Fachfragen:',
          items: [
            'Welche Arbeitsplätze sind echte Engpässe, und welche wirken nur so, weil sie auf Vorgänger warten?',
            'Wie oft springen Teile wegen Nacharbeit auf einen vorherigen Arbeitsplatz zurück?',
            'Welche Kundenprojekte sind heute schon absehbar terminkritisch?',
            'Wie wirken sich Eilaufträge auf die Termintreue der übrigen Aufträge aus?',
            'Welche Maschinentypen haben die stabilsten, welche die unsichersten Durchlaufzeiten?',
            'Wie viel Kapital würde eine um eine Woche kürzere Liegezeit vor der Endmontage freisetzen?',
          ],
        },

        principlesHeading: 'Vier Prinzipien hinter der Analyse',
        principles: [
          {
            title: 'Auf Arbeitsgangebene messen',
            text: 'Gemessen wird am einzelnen Arbeitsgang und Arbeitsplatz – nicht erst am fertigen Auftrag, an dem sich Verzögerungen längst überlagert haben.',
          },
          {
            title: 'Beziehungen erhalten',
            text: 'Bauteil, Fertigungsauftrag, Unterbaugruppe, Kundenprojekt und Charge bleiben verbundene Objekte, statt früh in einen flachen Eventlog verdichtet zu werden.',
          },
          {
            title: 'Zeit und Geld zusammen sehen',
            text: 'Erst mit dem Bestandswert wird Wartezeit steuerbar: Das gebundene Kapital zeigt, welche Liegezeit wirklich teuer ist.',
          },
          {
            title: 'Muster von Ursachen trennen',
            text: 'Eine Abweichung ist ein Startpunkt der Analyse, noch keine Ursache. Hypothesen werden gegen Vergleichsgruppen geprüft.',
          },
        ],

        conclusion: {
          heading: 'Fazit: Durchlaufzeit entsteht zwischen den Arbeitsplätzen',
          text: [
            'Im Sondermaschinenbau entscheidet sich der Liefertermin selten an einem einzelnen Arbeitsplatz. Er entsteht aus vielen kleinen Startverzügen, aus Liegezeiten zwischen Arbeitsplätzen und aus Unterbaugruppen, die aufeinander warten.',
            'Der Plan-Ist-Vergleich auf Arbeitsgangebene zeigt, wo der Plan nicht hält. Die Wartezeitenanalyse zeigt, wo Bauteile liegen. Die Bestandswerte zeigen, was das kostet. Zusammen ergeben sie eine Steuerungslogik, die nicht „schneller arbeiten“ verlangt, sondern „besser synchronisieren“.',
          ],
          claim: 'Plan und Ist vergleichen. Wartezeit sichtbar machen. Kapital freisetzen.',
        },

        faq: [
          {
            question: 'Was ist der Plan-to-Produce-Prozess?',
            answer:
              'Plan-to-Produce ist der End-to-End-Prozess von der Fertigungsplanung bis zum fertigen Endprodukt. Im Sondermaschinenbau umfasst er Fertigungsplanung und Kalkulation, Produktionsaufträge für Vorfertigung und Unterbaugruppen sowie Endmontage und Auslieferung. In den operativen Daten besteht er aus Kundenprojekten, Fertigungsaufträgen, Arbeitsgängen, Rückmeldungen und Materialbeständen.',
          },
          {
            question: 'Wie misst man Termintreue in der Fertigung auf Arbeitsplatzebene?',
            answer:
              'Für jeden Arbeitsgang werden Soll-Start und Soll-Ende aus dem Arbeitsplan mit Ist-Start und Ist-Ende aus den Rückmeldungen der Betriebsdatenerfassung verglichen. Daraus ergeben sich je Arbeitsplatz der Anteil verspätet begonnener Arbeitsgänge, der Startverzug, die Dauerabweichung und der Anteil termingerecht beendeter Arbeitsgänge.',
          },
          {
            question: 'Was ist der Unterschied zwischen Startverzug und Dauerabweichung?',
            answer:
              'Der Startverzug misst, wie viel später ein Arbeitsgang beginnt als geplant – die Ursache liegt meist vor dem Arbeitsplatz, etwa bei Vorgängern, Material oder Kapazität. Die Dauerabweichung misst, wie viel länger die Bearbeitung dauert als vorgegeben – die Ursache liegt meist am Arbeitsplatz selbst, etwa bei Vorgabezeiten, Rüstaufwand oder Nacharbeit.',
          },
          {
            question: 'Wie wird die Wartezeit zwischen Arbeitsplätzen berechnet?',
            answer:
              'Die Wartezeit ist die Zeit zwischen dem Ist-Ende eines Arbeitsgangs und dem Ist-Start des folgenden Arbeitsgangs am nächsten Arbeitsplatz. Summiert über alle Übergänge zeigt sie, welcher Anteil der Durchlaufzeit Liegezeit ist. Mit Kontext wie Schichtkalender, Chargen und Zukaufteilen lässt sich unterscheiden, worauf ein Bauteil wartet.',
          },
          {
            question: 'Wie lässt sich gebundenes Kapital in der Fertigung messen?',
            answer:
              'Über die Bestandswerte der Materialien an den Arbeitsplätzen: Für jeden Zeitpunkt ist bekannt, welches Material mit welchem Wert wo liegt. Daraus ergibt sich das gebundene Kapital im Umlaufbestand (Work in Progress) je Arbeitsplatz, Fertigungsauftrag und Kundenprojekt. Mit einem kalkulatorischen Zinssatz lassen sich die Kapitalkosten der Wartezeit beziffern.',
          },
          {
            question: 'Welche Daten braucht Noreja für die Analyse eines Fertigungsprozesses?',
            answer:
              'Im Kern Produktions- bzw. Fertigungsaufträge mit Arbeitsplan und Arbeitsgängen (Arbeitsplatz, Soll-Start, Soll-Ende), Rückmeldungen mit Ist-Start und Ist-Ende sowie Materialbewegungen oder Bestände mit Werten je Arbeitsplatz. Kontext wie Schichtkalender, Störungen, Konstruktionsänderungen oder Qualitätsmeldungen macht die Analyse erklärungsstärker, ist aber keine Voraussetzung. Ein klassischer flacher Eventlog muss vorher nicht gebaut werden.',
          },
          {
            question: 'Warum eignet sich ein Event Knowledge Graph für den Sondermaschinenbau?',
            answer:
              'Weil die entscheidenden Effekte zwischen Objekten entstehen: Viele Fertigungsaufträge laufen über gemeinsame Arbeitsplätze, eine Lackiercharge bündelt Teile aus verschiedenen Aufträgen, und die Endmontage hängt an mehreren Unterbaugruppen zugleich. Der Event Knowledge Graph erhält diese Beziehungen; ein flacher Eventlog je Fall könnte sie nicht erklären.',
          },
          {
            question: 'Stammen die Kennzahlen von einem echten Unternehmen?',
            answer:
              'Nein. Alle Kennzahlen sind Beispielwerte eines synthetischen Demonstrationsszenarios. Sie veranschaulichen die Analysemethode und sind keine Produktivkennzahlen eines Kunden.',
          },
        ],

        caseHeading: 'Den Case auf deinen Fertigungsdaten sehen',
        caseText:
          'Die ausführliche Case-Beschreibung mit Screenshots aus Noreja ist in Arbeit. Bis dahin zeigen wir dir die Analyse gern direkt: Plan-Ist-Vergleich, Wartezeiten und gebundenes Kapital – auf Basis deines Arbeitsplans und deiner Rückmeldedaten.',
        caseCta: 'Demo buchen',
      },
      en: {
        scenario: 'End-to-end process · Manufacturing in special machine building',
        metaTitle: 'Plan-to-Produce: Process Mining in Special Machine Manufacturing | Noreja',
        metaDescription:
          'Plan-to-produce from production order to delivery: plan vs. actual per work center, waiting times between work centers and capital tied up in work in progress – process mining in special machine building.',
        keywords: [
          'Plan-to-Produce',
          'process mining manufacturing',
          'process mining production',
          'special machine building',
          'plan vs actual manufacturing',
          'schedule adherence work center',
          'waiting time analysis',
          'manufacturing lead time',
          'work in progress',
          'tied-up capital WIP',
        ],
        tagline:
          'From production order to delivered machine: how process intelligence compares planned and actual dates per work center, finds waiting times between work centers and makes the capital tied up along the way visible.',
        workInProgress:
          'This page is a work in progress: screenshots from the analysis in Noreja will follow shortly. The figures are example values from a synthetic scenario.',
        definition:
          'Plan-to-produce is the end-to-end process from production planning to the finished end product. In special machine building it covers production planning and costing, production orders for parts manufacturing and sub-assemblies, and final assembly and delivery. Because every machine is a customer project with a batch size of one, many production orders run in parallel across shared work centers and have to come together again for final assembly. Noreja measures this flow at the level of the individual operation: planned and actual dates, waiting times between work centers and the capital tied up along the way.',
        demoNote:
          'Note: All figures are example values from a synthetic demonstration scenario. They illustrate analysis paths and methods and are not production figures of any customer.',

        keyFacts: [
          {
            value: '41%',
            label: 'Operations starting late',
            detail: 'start more than one working day after the planned start in the routing',
          },
          {
            value: '78%',
            label: 'Idle time in the lead time',
            detail: 'of parts manufacturing and sub-assembly lead time is spent waiting between work centers',
          },
          {
            value: '≈ EUR 3.1m',
            label: 'Tied-up capital',
            detail: 'average material stock at work centers and buffer areas (work in progress)',
          },
          {
            value: '46%',
            label: 'Final assembly waits for the control cabinet',
            detail: 'of customer projects in which the control cabinet is the last sub-assembly to be finished',
          },
        ],

        phasesHeading: 'The process in three phases',
        phasesLead:
          'After planning, a customer project breaks down into many production orders that run in parallel across shared work centers and meet again for final assembly. Measurement takes place at every level: operation, work center, production order and customer project.',
        phases: [
          {
            title: 'Production planning & costing',
            summary:
              'The released customer project yields the manufacturing bill of materials and the routing. Preliminary costing values material and standard times; scheduling sets a planned start and planned end for every operation at its work center. Releasing the production orders makes the plan binding.',
            steps: [
              'Customer project released',
              'Manufacturing BOM created',
              'Routing created',
              'Preliminary costing completed',
              'Scheduling & capacity planning',
              'Production order released',
            ],
            objects: ['Customer project', 'Bill of materials', 'Routing', 'Operation', 'Preliminary costing', 'Production order'],
            question: 'Are the standard times in the routing realistic – and where are they systematically underestimated?',
          },
          {
            title: 'Production order, parts manufacturing & sub-assemblies',
            summary:
              'Once the production orders are released, material is staged at the work centers. Mechanical parts, the control cabinet and sub-assemblies are produced in parallel strands that share the same work centers. Every operation is confirmed with an actual start and actual end, and every material movement changes the stock value at the work center.',
            strands: [
              {
                name: 'Mechanical parts manufacturing',
                steps: ['Material staging', 'Cutting / sawing', 'Milling on the machining center', 'Turning', 'Welding', 'Painting'],
              },
              {
                name: 'Electrical & control cabinet',
                steps: ['Electrical design released', 'Picking of electrical material', 'Control cabinet assembly', 'Wiring & testing'],
              },
              {
                name: 'Sub-assemblies',
                steps: ['Picking of parts & purchased parts', 'Sub-assembly', 'Sub-assembly inspection', 'Storage in buffer area'],
              },
            ],
            objects: ['Production order', 'Operation', 'Work center', 'Confirmation', 'Material', 'Stock', 'Sub-assembly', 'Paint batch'],
            question: 'Where do parts wait between two work centers – and how much capital does that tie up?',
          },
          {
            title: 'Final assembly & delivery',
            summary:
              'Final assembly only starts once all sub-assemblies are available. It is followed by commissioning and the factory acceptance test with the customer; the machine is then prepared for transport and delivered. Final costing compares the actual costs with the preliminary costing.',
            steps: [
              'Sub-assemblies complete',
              'Final assembly start',
              'Final assembly end',
              'Commissioning',
              'Factory acceptance test (FAT)',
              'Packing & shipping',
              'Final costing',
            ],
            objects: ['Final assembly order', 'Sub-assembly', 'Acceptance report', 'Delivery', 'Final costing'],
            question: 'Which sub-assembly holds up the start of final assembly – and what does that mean for the delivery date?',
          },
        ],
        objectsNote:
          'A customer project has many production orders, a production order many operations, a work center processes parts from many projects, and a paint batch bundles parts from different orders. These relationships are preserved in the event knowledge graph – which is the only way to trace every waiting time back to the affected part and customer project.',

        contextObjects: {
          heading: 'Context that explains the manufacturing data',
          lead:
            'Not every piece of information that explains a deviation is part of the production order. These context objects enrich the analysis without being steps of the actual flow.',
          items: [
            {
              name: 'Shift calendar',
              text: 'Shows whether a work center was staffed at all at the planned start – and separates waiting caused by missing capacity from waiting caused by the flow.',
            },
            {
              name: 'Machine breakdown',
              text: 'Downtimes and maintenance windows from plant maintenance explain duration deviations that are not caused by the standard time.',
            },
            {
              name: 'Engineering change',
              text: 'Change orders from the PLM system show which production orders were adjusted again after release.',
            },
            {
              name: 'Quality notification',
              text: 'Inspection findings and rework orders explain why parts jump back to a previous work center.',
            },
            {
              name: 'Purchased-part order',
              text: 'The link to the purchase-to-pay process shows whether an assembly is waiting for a late purchased part.',
            },
            {
              name: 'Delivery date',
              text: 'The delivery date promised for the customer project turns a late start at a work center into a schedule risk for the customer.',
            },
          ],
        },

        findingsHeading: 'Five findings: measure, understand, optimise',
        findingsLead:
          'The use cases build on each other: the plan vs. actual comparison shows where the plan does not hold, the waiting time analysis where parts sit, and the stock values what that costs. The levers for final assembly and costing follow from there.',
        findings: [
          {
            area: 'Schedule adherence',
            title: 'Starting late is not the same as taking too long',
            metric: '41%',
            metricLabel: 'of operations start more than one working day after the planned start',
            text: [
              'For every operation, the routing holds a planned start and planned end; the confirmations from shop floor data collection provide the actual start and actual end. Instead of only asking whether an order finishes late, the analysis splits the deviation into two measures: the start delay (actual start versus planned start) and the duration deviation (actual duration versus planned duration).',
              'The two call for different measures. An operation that starts late is waiting for predecessors, material or capacity – the cause lies before the work center. An operation that starts on time and takes too long points to tight standard times, set-up effort or rework at the work center itself.',
              'The example shows exactly these two profiles: the 5-axis machining center starts 58% of its operations late but is only 6% over plan in processing time. The welding shop mostly starts on time but takes a median 31% longer than planned.',
            ],
            prompt: 'At which work centers do operations start late, and where does processing take longer than the routing plans?',
            table: {
              caption: 'Plan vs. actual per work center (selection, example values; WD = working days)',
              head: ['Work center', 'Operations', 'Start delay > 1 WD', 'Duration vs. plan', 'Finished on time'],
              rows: [
                ['Cutting / sawing', '2,910', '22%', '+4%', '81%'],
                ['5-axis machining center', '3,420', '58%', '+6%', '44%'],
                ['Turning', '2,180', '35%', '+9%', '63%'],
                ['Welding shop', '1,640', '18%', '+31%', '49%'],
                ['Paint shop', '1,210', '64%', '+3%', '38%'],
                ['Control cabinet assembly', '960', '47%', '+22%', '36%'],
                ['Sub-assembly', '2,650', '39%', '+12%', '57%'],
              ],
            },
            shift: {
              from: 'Which order is late?',
              to: 'Does the operation start too late or take too long – and does the cause lie before the work center or at it?',
            },
            note: {
              title: 'How accurate are the confirmation times?',
              text: 'If operations are only confirmed in bulk at the end of a shift, process errors and data errors look the same. Before a deviation is assessed as a process problem, the analysis therefore checks how the actual times come about – for example whether confirmations cluster conspicuously at shift changes.',
            },
          },
          {
            area: 'Waiting times',
            title: 'Parts wait longer than they are worked on',
            metric: '78%',
            metricLabel: 'of the lead time in parts manufacturing and sub-assembly is idle time between two work centers',
            text: [
              'The waiting time between two work centers is the gap between the actual end of one operation and the actual start of the next. Across all transitions of a production order this gives a complete picture of where parts wait in the process – and how much of the lead time is actually processing.',
              'In the example, the processing share of parts manufacturing is 22%. The most conspicuous transition runs from the welding shop to the paint shop: welded parts wait a median 4.6 working days because the paint line runs in batches and only starts once it is sufficiently loaded.',
              'Not every waiting time has the same reason. The analysis distinguishes whether a part is waiting for capacity at the next work center, for missing material or purchased parts, for a batch or for an engineering change.',
            ],
            prompt: 'Between which work centers do parts wait longest, and what are they waiting for?',
            table: {
              caption: 'Longest transitions between work centers (example values; WD = working days)',
              head: ['Transition', 'Cases', 'Median waiting time', 'Main reason'],
              rows: [
                ['Welding → painting', '1,180', '4.6 WD', 'Batching'],
                ['Parts manufacturing → sub-assembly', '2,340', '3.8 WD', 'Missing purchased parts'],
                ['Machining center → turning', '960', '2.1 WD', 'Capacity'],
                ['Painting → sub-assembly', '1,090', '1.9 WD', 'Drying & transport'],
                ['Cutting → machining center', '2,480', '1.7 WD', 'Capacity'],
              ],
            },
            shift: {
              from: 'How long does manufacturing take?',
              to: 'Where does a part wait, what is it waiting for – and which transition extends the lead time the most?',
            },
            deepDive: {
              title: 'Its own flow or a shared resource?',
              text: [
                'The paint line is a shared resource for parts from many production orders and customer projects. Whether a part waits therefore does not depend on its own order but on which other parts occupy the same paint run.',
                'In the event knowledge graph, the relationship between part, operation and paint batch is preserved. A flat event log per production order only sees that the part is waiting – not what it is waiting for.',
              ],
              questions: [
                'Which colours or part sizes prolong batch formation?',
                'Would a fixed paint-run cycle work better than a minimum load?',
                'Which customer projects lose their buffer to final assembly in the paint shop?',
                'How does waiting time change if urgent parts get runs of their own?',
              ],
            },
          },
          {
            area: 'Tied-up capital',
            title: 'Waiting parts tie up capital – above all just before final assembly',
            metric: '≈ EUR 3.1m',
            metricLabel: 'average capital tied up in material at work centers and buffer areas',
            text: [
              'With the stock values of the materials at the work centers, waiting time turns into money. For every point in time it is known which material of which value sits at which work center. This yields the capital tied up in work in progress – per work center, per production order and per customer project.',
              'What matters is the combination of value and duration: a EUR 200 raw part that sits for ten days ties up less capital than a fully assembled EUR 60,000 module that waits for two. In the example, 43% of the tied-up capital sits in the buffer area before final assembly – in finished sub-assemblies whose value, from material and work already done, is highest.',
              'At an imputed interest rate of 8%, the average work in progress costs around EUR 250,000 a year – before floor space, handling, damage risk and parts made obsolete by later engineering changes.',
            ],
            prompt: 'How much capital is tied up at which work centers, and how much of it is just waiting?',
            table: {
              caption: 'Tied-up capital by area (example values; WD = working days)',
              head: ['Area', 'Avg. stock value', 'Share', 'Median idle time'],
              rows: [
                ['Raw material at work centers', 'EUR 0.31m', '10%', '2.4 WD'],
                ['Parts in parts manufacturing', 'EUR 0.62m', '20%', '6.8 WD'],
                ['Parts before and after painting', 'EUR 0.38m', '12%', '5.9 WD'],
                ['Sub-assemblies in assembly', 'EUR 0.46m', '15%', '4.2 WD'],
                ['Buffer area before final assembly', 'EUR 1.33m', '43%', '9.7 WD'],
              ],
            },
            shift: {
              from: 'How high is the stock?',
              to: 'Which stock is just waiting – where, for how long and with what value?',
            },
          },
          {
            area: 'Final assembly',
            title: 'Final assembly waits for the last sub-assembly',
            metric: '46%',
            metricLabel: 'of final assemblies only start once the control cabinet is finished as the last sub-assembly',
            text: [
              'A special machine consists of several sub-assemblies – base frame, drive and handling units, safety enclosure, control cabinet – each with its own production orders. Final assembly can only start when all of them are available. Its start is therefore not determined by the average but by the sub-assembly that is finished last.',
              'In the example, that is the control cabinet in 46% of customer projects and a sub-assembly with missing purchased parts in another 21%. By then, the other sub-assemblies have been finished for a median 8 working days and are waiting in the buffer area – exactly where most capital is tied up.',
              'The lever is therefore not to build all sub-assemblies faster but to synchronise them: schedule the critical sub-assembly earlier and start non-critical ones later so they do not wait for weeks for the last part.',
            ],
            prompt: 'Which sub-assembly is most often the last one when final assembly starts, and how long do the others wait?',
            shift: {
              from: 'Why does final assembly start late?',
              to: 'Which sub-assembly determines the start – and how long do all the others wait for it?',
            },
            deepDive: {
              title: 'Why the control cabinet becomes the bottleneck',
              prompt: 'Does control cabinet assembly start later in projects with late engineering changes than in projects without a change?',
              text: [
                'Control cabinet assembly can only start once the electrical design is released, and that depends on changes from the mechanical design. Linking the production orders with the change orders from the PLM system shows that projects with at least one engineering change after production release start control cabinet assembly a median 6 working days later.',
                'This is a hypothesis, not yet proof of a cause. But it can be tested: if late changes are the driver, projects without a change must show a markedly more punctual cabinet start – regardless of machine type and utilisation.',
              ],
            },
          },
          {
            area: 'Costing',
            title: 'Actual times show where preliminary costing is too optimistic',
            metric: '+7%',
            metricLabel: 'higher manufacturing costs per machine than costed, two thirds of it from three work centers',
            text: [
              'The standard times in the routing are the basis not only of scheduling but also of preliminary costing. If actual durations at individual work centers are systematically above plan, delivery dates and costs are underestimated alike.',
              'Aggregated across all operations, manufacturing costs per machine in the example are around 7% above preliminary costing. Two thirds of the deviation arise in the welding shop, control cabinet assembly and sub-assembly – exactly where the plan vs. actual comparison shows the largest duration deviations.',
              'If the measured actual times per work center and machine type are fed back into the routings, quotes for new special machines are based on realistic times and capacity planning puts buffers where they are actually needed.',
            ],
            prompt: 'At which work centers do actual times deviate systematically from standard times, and what does that mean for costing new machines?',
            shift: {
              from: 'How large was the deviation in the last project?',
              to: 'Which standard times are systematically too tight – and for which machine types and work centers?',
            },
            note: {
              title: 'A deviation is not automatically inefficiency',
              text: 'In special machine building every machine is new to some extent. A duration deviation can point to real inefficiency, but also to a share of design work missing from the standard time. Only the comparison across machine types and projects separates one-off effects from systematic ones.',
            },
          },
        ],

        measures: {
          heading: 'From finding to measure',
          lead:
            'Each finding suggests a direction for improvement. Which one is implemented first is decided by the business based on impact, effort and risk – the analysis provides the basis for that decision.',
          items: [
            {
              finding: 'Schedule adherence',
              measure: 'Manage start delay and duration deviation separately: check material and predecessors before the work center starts, revise standard times at work centers with duration deviations',
              benefit: 'More operations finished on time, fewer rush orders and rescheduling',
            },
            {
              finding: 'Waiting times',
              measure: 'Run paint batches on a fixed cycle instead of a minimum load, check missing parts before releasing sub-assembly',
              benefit: 'Shorter lead time in parts manufacturing, higher processing share',
            },
            {
              finding: 'Tied-up capital',
              measure: 'Introduce stock limits per buffer area and anchor tied-up capital per work center as a KPI on the shop floor board',
              benefit: 'Less tied-up capital, lower capital costs, less floor space',
            },
            {
              finding: 'Final assembly',
              measure: 'Schedule sub-assemblies backwards from the final assembly start, release and prioritise control cabinet assembly earlier',
              benefit: 'Earlier final assembly start, shorter idle time of finished sub-assemblies, better delivery reliability',
            },
            {
              finding: 'Costing',
              measure: 'Regularly feed measured actual times per work center and machine type back into routings and preliminary costing',
              benefit: 'More realistic quotes and delivery dates, lower margin risk',
            },
          ],
          note: 'Prioritisation is a business decision. Minerva can prepare analysis paths, context and options; control and decision-making authority stay with production management and the business.',
        },

        loop: {
          heading: 'The loop: Insight → Action → Impact → Feedback',
          lead:
            'After implementation, the effect of a measure is measured again with the same manufacturing data. Minerva Frontier Agents can accompany this loop continuously: spotting new deviations, developing hypotheses further and observing the effect of implemented measures.',
          steps: [
            { step: 'Insight', text: 'Finished sub-assemblies wait a median 8 working days for the control cabinet and tie up most of the capital while doing so.' },
            { step: 'Action', text: 'Release control cabinet assembly earlier, schedule non-critical sub-assemblies backwards from the final assembly start.' },
            { step: 'Impact', text: 'Measure idle time in the buffer area, tied-up capital and delivery reliability again.' },
            { step: 'Feedback', text: 'If the effect is not confirmed, the hypothesis is adjusted – for example towards late engineering changes.' },
          ],
          questions: [
            'Does the idle time of finished sub-assemblies before final assembly fall?',
            'Does the capital tied up in the buffer area fall?',
            'Does final assembly start closer to the planned start?',
            'Does utilisation in parts manufacturing stay stable?',
            'Does delivery reliability towards the customer improve?',
            'Is the hypothesis confirmed – or does it need adjusting?',
          ],
        },

        analysisQuestions: {
          heading: 'More questions for the manufacturing data',
          lead: 'The same data – routing, confirmations and stock values – answers further business questions:',
          items: [
            'Which work centers are real bottlenecks, and which only look like one because they wait for predecessors?',
            'How often do parts jump back to a previous work center because of rework?',
            'Which customer projects are already foreseeably at risk of missing their date?',
            'How do rush orders affect the schedule adherence of all other orders?',
            'Which machine types have the most stable lead times, and which the least predictable?',
            'How much capital would one week less idle time before final assembly release?',
          ],
        },

        principlesHeading: 'Four principles behind the analysis',
        principles: [
          {
            title: 'Measure at operation level',
            text: 'Measurement happens at the individual operation and work center – not only at the finished order, where delays have long since overlapped.',
          },
          {
            title: 'Keep relationships',
            text: 'Part, production order, sub-assembly, customer project and batch stay connected objects instead of being condensed early into a flat event log.',
          },
          {
            title: 'See time and money together',
            text: 'Only the stock value makes waiting time manageable: tied-up capital shows which idle time is really expensive.',
          },
          {
            title: 'Separate patterns from causes',
            text: 'A deviation is a starting point for analysis, not yet a cause. Hypotheses are tested against comparison groups.',
          },
        ],

        conclusion: {
          heading: 'Conclusion: lead time is lost between the work centers',
          text: [
            'In special machine building, the delivery date is rarely decided at a single work center. It results from many small start delays, from idle time between work centers and from sub-assemblies waiting for each other.',
            'The plan vs. actual comparison at operation level shows where the plan does not hold. The waiting time analysis shows where parts sit. The stock values show what that costs. Together they form a control logic that does not demand “work faster” but “synchronise better”.',
          ],
          claim: 'Compare plan and actual. Make waiting visible. Free up capital.',
        },

        faq: [
          {
            question: 'What is the plan-to-produce process?',
            answer:
              'Plan-to-produce is the end-to-end process from production planning to the finished end product. In special machine building it covers production planning and costing, production orders for parts manufacturing and sub-assemblies, and final assembly and delivery. In the operational data it consists of customer projects, production orders, operations, confirmations and material stocks.',
          },
          {
            question: 'How do you measure schedule adherence in manufacturing at work center level?',
            answer:
              'For every operation, the planned start and planned end from the routing are compared with the actual start and actual end from the shop floor confirmations. This yields, per work center, the share of operations started late, the start delay, the duration deviation and the share of operations finished on time.',
          },
          {
            question: 'What is the difference between start delay and duration deviation?',
            answer:
              'The start delay measures how much later an operation starts than planned – the cause usually lies before the work center, for example in predecessors, material or capacity. The duration deviation measures how much longer processing takes than planned – the cause usually lies at the work center itself, for example in standard times, set-up effort or rework.',
          },
          {
            question: 'How is the waiting time between work centers calculated?',
            answer:
              'The waiting time is the time between the actual end of one operation and the actual start of the following operation at the next work center. Summed across all transitions, it shows what share of the lead time is idle time. With context such as shift calendars, batches and purchased parts, the analysis can tell what a part is waiting for.',
          },
          {
            question: 'How can tied-up capital in manufacturing be measured?',
            answer:
              'Through the stock values of the materials at the work centers: for every point in time it is known which material of which value sits where. This yields the capital tied up in work in progress per work center, production order and customer project. With an imputed interest rate, the capital cost of waiting can be quantified.',
          },
          {
            question: 'What data does Noreja need to analyse a manufacturing process?',
            answer:
              'At its core, production orders with routings and operations (work center, planned start, planned end), confirmations with actual start and actual end, and material movements or stocks with values per work center. Context such as shift calendars, breakdowns, engineering changes or quality notifications makes the analysis more explanatory but is not a prerequisite. A traditional flat event log does not have to be built first.',
          },
          {
            question: 'Why is an event knowledge graph suited to special machine building?',
            answer:
              'Because the decisive effects arise between objects: many production orders run across shared work centers, a paint batch bundles parts from different orders, and final assembly depends on several sub-assemblies at once. The event knowledge graph preserves these relationships; a flat event log per case could not explain them.',
          },
          {
            question: 'Are the figures from a real company?',
            answer:
              'No. All figures are example values from a synthetic demonstration scenario. They illustrate the analysis method and are not production figures of any customer.',
          },
        ],

        caseHeading: 'See the case on your own manufacturing data',
        caseText:
          'The detailed case description with screenshots from Noreja is in progress. Until then, we are happy to show you the analysis directly: plan vs. actual, waiting times and tied-up capital – based on your routings and confirmation data.',
        caseCta: 'Book a demo',
      },
    },
  },
  {
    id: 'admission-to-discharge',
    name: 'Admission-to-Discharge',
    caseUrl: 'https://docs.noreja.com/de/article/op-patientenpfad-das-symptom-zeigt-sich-im-op-die-ursache-liegt-woanders',
    dateModified: '2026-11-10',
    content: {
      de: {
        scenario: 'End-to-End-Prozess · OP-Patientenpfad im Krankenhaus',
        metaTitle: 'Admission-to-Discharge: Process Mining im OP-Patientenpfad | Noreja',
        metaDescription:
          'OP-Patientenpfad von der Station über OP-Saal und Aufwachraum bis zur Verlegung: wie Causal Process Mining die Ursachen von OP-Holds, verspäteten Erstfällen und Absetzungen wegen Zeitmangels findet – und warum sie oft nicht im OP liegen.',
        keywords: [
          'Admission-to-Discharge',
          'OP-Patientenpfad',
          'perioperativer Prozess',
          'Process Mining im Krankenhaus',
          'Process Mining im Gesundheitswesen',
          'OP-Management',
          'OP-Effizienz',
          'OP-Kapazität',
          'OP-Absetzung',
          'OP-Hold',
          'Aufwachraum',
          'Patientenfluss',
          'Bettenmanagement',
          'Wechselzeit',
          'Ursachenanalyse',
          'KI im Krankenhaus',
          'Event Knowledge Graph',
          'Causal Process Mining',
        ],
        tagline:
          'Wie Causal Process Mining verborgene Ursachen zwischen Station, Aufwachraum und OP-Saal sichtbar macht.',
        intro: {
          heading: 'Das Symptom zeigt sich im OP. Die Ursache liegt woanders.',
          text: [
            'Viele OP-Initiativen verfolgen dieselben Ziele: mehr Planbarkeit, eine bessere Auslastung der OP-Säle und weniger Verzögerungen oder Absetzungen. Pünktlichkeit, Wechselzeiten oder OP-Holds wirken dabei zunächst wie die naheliegenden Steuerungsgrößen.',
            'Doch gerade im perioperativen Prozess entstehen Verzögerungen oft an ganz anderer Stelle: bei einer unvollständigen Vorbereitung auf der Station, bei einem fehlenden Bett nach dem Aufwachraum oder bei einem Rückstau an gemeinsam genutzten Ressourcen.',
          ],
          quote: 'Im OP wird das Problem sichtbar. Die Ursache liegt oft woanders. Wer nur den OP optimiert, behandelt das Symptom.',
        },
        definition:
          'Admission-to-Discharge beschreibt den Weg eines Patienten durch das Krankenhaus – von der Aufnahme bis zur Entlassung. Dieser Case betrachtet den OP-Patientenpfad, auch perioperativer Patientenpfad genannt: den End-to-End-Prozess rund um einen operativen Eingriff mit präoperativer Vorbereitung und Freigabe, Patientenabruf und Transport, Einleitung und Operation, Ausleitung und Saalaustritt, Versorgung im Aufwachraum (AWR) sowie der Verlegung auf Station oder Intensivstation. Auf einer Prozessfolie wirkt der Ablauf linear. In der Realität greifen mehrere Patienten, Teams und gemeinsam genutzte Ressourcen ineinander: Ein OP-Saal wartet auf einen Patienten, ein Patient auf die vollständige Vorbereitung, ein AWR-Platz auf die Verlegung eines Vorgängers und dieser auf ein freies Bett auf Station. Causal Process Mining erhält diese Granularität und die Beziehungen zwischen Patient, OP, Saal, Aufwachraum, Bett und Station.',
        demoNote:
          'Hinweis: Die Kennzahlen auf dieser Seite stammen aus einem synthetischen perioperativen Datensatz mit 2.400 OP-Vorgängen. Sie zeigen die Analysemethode und sind keine Produktivkennzahlen eines Krankenhauses.',
        definitionImage: {
          ...IMG.a2dEntityModelDe,
          alt: 'Event Knowledge Graph des OP-Patientenpfads: Aktivitäten aus 26 Tabellen, gruppiert nach vier OP-Sälen, drei Stationen, dem Aufwachraum (AWR), den Absetzungen und den übergreifenden Aktivitäten – von Patientenaufnahme, Checkliste, Prämedikation und Nüchternheit über Patient im Saal und Anästhesie bis zu Verlegungsfreigabe, Bettfreimeldung und Übergabe auf Station',
          caption:
            'Event Knowledge Graph des OP-Prozesses: Patient, OP-Fall, Saal, Aufwachraum, Bett und Station bleiben verbunden – Komplexität wird bei der Analyse reduziert, nicht bereits beim Datenimport.',
        },

        keyFacts: [
          {
            value: '67,2 %',
            label: 'Pünktliche erste Saaleintritte',
            detail: 'innerhalb von 15 Minuten nach geplantem Saaleintritt',
          },
          {
            value: '431',
            label: 'OP-Holds',
            detail: 'Patient kann den Saal nicht verlassen, weil der AWR voll ist',
          },
          {
            value: '143',
            label: 'Abgesetzte Eingriffe',
            detail: 'davon 107 wegen Zeitmangels, 36 wegen fehlender Nüchternheit',
          },
          {
            value: '374,1 h',
            label: 'Blockierte OP-Kapazität',
            detail: 'kumulierte Hold-Zeit; nicht automatisch 1:1 vermeidbar',
          },
          {
            value: '514',
            label: 'OPs mit Saalaustritt nach 15:30 Uhr',
            detail: 'Überzug über das geplante Saalende',
          },
          {
            value: '752',
            label: 'Nachgeholte Vorbereitungen',
            detail: '31,3 % aller OP-Vorgänge, im Mittel rund 45 Minuten',
          },
          {
            value: '2.400',
            label: 'OP-Vorgänge',
            detail: 'gesamter synthetischer Datenbestand',
          },
          {
            value: '26',
            label: 'Tabellen aus 5 Systemen',
            detail: 'im Demo-Setup in einem Event Knowledge Graph zusammengeführt',
          },
        ],

        phasesHeading: 'Der Prozess in drei Blöcken',
        phasesLead:
          'Die End-to-End Causal Perspective verbindet Station, OP-Saal, Aufwachraum und Bett in einer fachlichen Sicht. Erst für die konkrete Fachfrage entsteht daraus eine passende Causal Perspective – zum Beispiel End-to-End, Vorbereitung, OP, AWR/Bettmeldung oder Saaltag.',
        phasesImage: {
          ...IMG.a2dEndToEnd,
          alt: 'End-to-End Causal Perspective des perioperativen Patientenpfads: von der elektiven Aufnahme oder Notfallaufnahme über die Vorbereitung auf drei Stationen, Patientenabruf, OP-Schleuse und Umlagerung, die Abläufe in den OP-Sälen und die Übergabe an das AWR-Personal oder die Intensivstation bis zu Verlegungsfreigabe, Bettfreimeldung, Abholung aus dem AWR und Übergabe auf Station',
          caption: 'End-to-End Causal Perspective des OP-Patientenpfads von der Station über den OP bis zur Verlegung.',
        },
        phases: [
          {
            title: 'Präoperative Vorbereitung & Patientenabruf',
            summary:
              'Der Patient wird auf der Station vorbereitet: Aufklärung, Labor, Prämedikation und Checkliste. Erst wenn alle Voraussetzungen erfüllt sind, kann er abgerufen und transportiert werden. Fehlen Schritte, werden sie kurzfristig nachgeholt – der Patient erreicht den Saal später.',
            steps: [
              'Patientenfall auf Station aufgenommen',
              'Vorbereitungsauftrag',
              'OP-Checkliste abgearbeitet',
              'Prämedikation verabreicht',
              'Nüchternheit festgestellt',
              'Abruf durch OP',
              'Patient abgeholt',
              'OP-Schleuse & Identitätskontrolle',
              'Patient im Saal',
            ],
            objects: ['Patient', 'OP-Fall', 'Station', 'Präoperative Vorbereitung', 'Checkliste', 'Aufklärung', 'Labor', 'Prämedikation', 'Patiententransport'],
            question: 'Welche vorbereitenden Schritte verhindern einen pünktlichen Patientenabruf – und welche davon lassen sich früher oder verlässlicher abschließen?',
            image: {
              ...IMG.a2dPreparation,
              alt: 'Causal Perspective der präoperativen Vorbereitung: elektive Aufnahme oder Notfallaufnahme, je Station 1 bis 3 Patientenfall, Vorbereitungsauftrag, OP-Checkliste, Prämedikation, Nüchternheit, Abruf durch den OP und Patient abgeholt, danach OP-Schleuse, Identitätskontrolle, Umlagerung und Patient im Saal; abzweigend „Vorbereitung nachholen“ sowie die Absetzungen wegen fehlender Nüchternheit und zu späten Saalbeginns',
              caption: 'Präoperative Vorbereitung, Patientenabruf, Transport und nachgeholte Vorbereitungsschritte.',
            },
          },
          {
            title: 'Einleitung, Operation & Saalsteuerung',
            summary:
              'Patient, OP-Saal, Anästhesieteam und chirurgisches Team treffen zusammen. Auf Einleitung und Eingriff folgen Ausleitung, Saalaustritt und der Wechsel zum nächsten Patienten. Verzögert sich ein früher Fall, kann sich die Abweichung über alle folgenden OPs des Saaltags aufbauen.',
            steps: [
              'Patient im Saal',
              'Lagerung geprüft',
              'Anästhesiebeginn',
              'Anästhesiefreigabe',
              'Team-Time-Out',
              'Schnitt',
              'Naht',
              'Ausleitung',
              'Anästhesieende',
              'Saal verlassen',
              'Saal gereinigt',
            ],
            objects: ['Patient', 'OP-Fall', 'OP-Saal', 'Anästhesieteam', 'OP-Team', 'Fachrichtung', 'Vorgänger- und Folgeeingriff'],
            question: 'Entsteht die Verzögerung tatsächlich im OP-Saal – oder sehen wir dort nur die Auswirkung einer Ursache, die bereits vorher entstanden ist?',
            image: {
              ...IMG.a2dSurgery,
              alt: 'Causal Perspective des Saaltags: vom Saalbeginn über Umlagerung und Patient im Saal in vier parallele Saalstränge mit Lagerung geprüft, Anästhesiebeginn, Anästhesiefreigabe, Team-Time-Out, Schnitt, Naht, Ausleitung und Anästhesieende bis Saal verlassen und Saal gereinigt, anschließend Übergabe an das AWR-Personal oder die Intensivstation und Saalende',
              caption: 'Einleitung, Operation und Saalbelegung: Auf dem Saaltag bauen sich fallübergreifende Verzögerungskaskaden auf.',
            },
          },
          {
            title: 'Aufwachraum, Bett & Rückverlegung',
            summary:
              'Nach dem Eingriff wird der Patient im Aufwachraum versorgt und anschließend auf Station oder Intensivstation verlegt. Ist er verlegungsbereit, aber noch kein Bett gemeldet, bleibt der AWR-Platz belegt. Ist der AWR voll, kann der nächste Patient den OP-Saal nicht verlassen.',
            steps: [
              'Übergabe an AWR-Personal',
              'Überwachung begonnen',
              'Schmerztherapie begonnen',
              'Verlegungsfreigabe',
              'Bett frei gemeldet',
              'Abholung aus AWR',
              'Übergabe Station',
            ],
            objects: ['Patient', 'OP-Fall', 'Aufwachraum', 'AWR-Platz', 'Verlegungsfreigabe', 'Stationsbett', 'Station', 'Intensivstation', 'Patiententransport'],
            question: 'Was hält den Patienten nach der Verlegungsfreigabe tatsächlich im Aufwachraum – das fehlende Bett, der Transport oder ein anderer Engpass?',
            image: {
              ...IMG.a2dBedRelease,
              alt: 'Causal Perspective von Aufwachraum und Bettfreigabe: von Patient im Saal über die Verlegungsfreigabe zu „Bett frei melden“ für Station 1 bis 4 beziehungsweise „Bett frei gemeldet“, weiter zur Abholung aus dem AWR und zur Übergabe auf Station 1 bis 4',
              caption: 'Rückstau zwischen Aufwachraum, Bettfreimeldung, Patiententransport und OP-Saal.',
            },
          },
        ],
        objectsNote:
          'Ein Patient kann mehrere Eingriffe haben, ein OP-Saal versorgt pro Saaltag mehrere Patienten nacheinander, AWR-Plätze und Stationsbetten werden von wechselnden Patienten belegt. Diese gemeinsam genutzten Ressourcen verbinden Fälle über Fallgrenzen hinweg – genau dort entstehen Verzögerungen, die eine reine Einzelfallsicht nicht erklärt.',

        findingsHeading: 'Fünf Findings entlang des OP-Patientenpfads',
        findingsLead:
          'Die Findings führen von der Management-Kennzahl über drei widerlegte Verdachtsmomente bis zu den fallübergreifenden Kaskaden. Jedes verschiebt die Frage von „Wo zeigt sich das Problem?“ zu „Wo entsteht es?“.',
        findings: [
          {
            area: 'Kennzahlen',
            title: 'Die Kennzahlen zeigen das Wo – aber noch nicht das Warum',
            metric: '67,2 %',
            metricLabel: 'der ersten OPs eines Saaltags beginnen pünktlich – innerhalb von 15 Minuten nach geplantem Saaleintritt',
            text: [
              'Nur 67,2 % der ersten OPs beginnen pünktlich. 431 OPs sind von einem OP-Hold betroffen, insgesamt 374,1 Stunden blockierte OP-Kapazität. 143 Eingriffe werden abgesetzt, davon 107 wegen Zeitmangels.',
              'Das Problem scheint klar: Der OP verliert Zeit und Kapazität. Die Kennzahlen sagen aber nicht, wo dieser Verlust entsteht.',
            ],
            shift: {
              from: 'Wie wird der OP schneller?',
              to: 'Wo entsteht der Zeitverlust, der im OP sichtbar wird?',
            },
            image: {
              ...IMG.a2dDashboard,
              alt: 'Management-Dashboard OP-Bereich „Kapazität sichern. Schnittstellen gemeinsam steuern.“: 67,2 % Erstfälle pünktlich (640 von 952), 431 OPs mit OP-Hold, 374,1 Stunden kumulierte Hold-Zeit, 514 OPs nach 15:30 Uhr fertig und 143 abgesetzte Eingriffe, davon 107 wegen Zeitmangels und 36 wegen fehlender Nüchternheit; darunter die OPs nach 15:30 Uhr je Saal',
              caption: 'Management-Dashboard: pünktliche Erstfälle, OP-Holds, blockierte Saalzeit, Tagesende und abgesetzte Eingriffe.',
            },
          },
          {
            area: 'Gegenprüfung',
            title: 'Drei naheliegende Verdächtige – keiner hält der Gegenprüfung stand',
            metric: '0 von 3',
            metricLabel: 'naheliegenden Erklärungen – Anästhesieteam C, Saal 4 und AWR-Personal – halten dem Vergleich vergleichbarer Fälle stand',
            text: [
              'Die ersten Analysen zeigen drei auffällige Zusammenhänge. Jeder davon legt eine schnelle Maßnahme nahe: Team C trainieren, Saal 4 optimieren, mehr Personal in den Aufwachraum.',
              'Die Daten waren korrekt. Die naheliegenden Schlussfolgerungen waren nicht ausreichend begründet.',
            ],
            table: {
              text: true,
              caption: 'Rohvergleich und Gegenprüfung',
              head: ['Verdacht', 'Rohvergleich', 'Gegenprüfung'],
              rows: [
                [
                  'Anästhesieteam C ist langsamer',
                  'Einleitung im Mittel 29,7 min (Team A 18,7, Team B 18,3)',
                  'Bei vergleichbaren Patienten (ASA) gleich schnell – Team C betreut vor allem die schweren Fälle',
                ],
                [
                  'Saal 4 arbeitet ineffizient',
                  'Deutlich höherer Median der Wechselzeit',
                  'Saal 4 übernimmt Fälle aus mehreren Fachrichtungen; die Fachrichtungswechsel kosten Zeit, nicht der Saal',
                ],
                [
                  'Zu wenig Personal im AWR',
                  'Holdquote 40,5 % bei reduzierter, 14,5 % bei voller Besetzung',
                  'Der AWR ist belegt, weil Patienten auf ein Bett warten – der Engpass liegt weiter hinten in der Ressourcenkette',
                ],
              ],
            },
            shift: {
              from: 'Team C trainieren, Saal 4 optimieren, mehr AWR-Personal',
              to: 'Hält der Unterschied stand, wenn wir vergleichbare Fälle vergleichen?',
            },
            image: {
              ...IMG.a2dRawComparisons,
              alt: 'Drei Dashboard-Kacheln mit Rohvergleichen: Anästhesieeinleitung im Mittel 22,1 Minuten bei 1.607 Eingriffen (Team A 18,7, Team B 18,3, Team C 29,7 Minuten), Wechselzeit im Mittel 40,5 Minuten bei einem Median von 28,3 Minuten und 1.305 Wechseln (Saal 4 mit einem Median von 40,8 Minuten gegenüber 26,0 bis 27,6 Minuten in Saal 1 bis 3) sowie eine Holdquote von 14,5 % bei voller und 40,5 % bei reduzierter AWR-Besetzung',
              caption: 'Auffällige Zusammenhänge im Rohvergleich: Anästhesieteam, Wechselzeit je Saal und Holdquote nach AWR-Besetzung.',
            },
            extraImages: [
              {
                ...IMG.a2dTeamCCheck,
                alt: 'Minerva-Antwort zur Einleitungsdauer: Team C betreut zu 88,2 % Patienten der ASA-Klassen III–IV (450 von 510), Team A und B zusammen zu 10,2 % (112 von 1.097); bei vergleichbaren Patientengruppen nach ASA-Klasse und vorhandenem Zugang liegen die Mittelwerte nahe beieinander, etwa 22,4 gegenüber 22,6 Minuten bei ASA III–IV mit vorhandenem Zugang',
                caption: 'Team C: Der Patientenmix nach ASA-Klasse erklärt den größten Teil der längeren Einleitungsdauer.',
              },
              {
                ...IMG.a2dStaffingCheck,
                alt: 'Minerva-Tabelle „Warum bleiben AWR-Plätze gebunden?“ für 1.619 Verläufe bei voller und 504 bei reduzierter Besetzung: In beiden Gruppen bleiben verlegungsbereite Patienten im Mittel rund eine Stunde im AWR (66,4 beziehungsweise 61,2 Minuten), der größere Teil davon zwischen Verlegungsfreigabe und Bettfreimeldung',
                caption: 'AWR-Personal: Verlegungsfähige Patienten bleiben bei voller wie reduzierter Besetzung rund eine Stunde im AWR – vor allem vor der Bettfreimeldung.',
              },
            ],
            deepDive: {
              title: 'Vom Symptom zur Root-Cause-Analyse',
              prompt: [
                'Analysiere, warum Operationen abgesagt wurden.',
                'Welche Vorgänger-OPs und Ressourcenkonflikte haben zu den 107 wegen Zeitmangels abgesetzten Eingriffen beigetragen?',
              ],
              text: [
                'Von den 143 abgesetzten Eingriffen wurden 107 wegen Zeitmangels abgesetzt. „Zeitmangel“ ist allerdings kein Root Cause, sondern der dokumentierte Anlass am Ende einer Entwicklung.',
                'Die 107 Fälle verteilen sich auf 95 Saaltage. Um zu verstehen, wie die fehlende Zeit entstanden ist, reicht der Blick auf den abgesetzten Patienten nicht. Die Analyse bezieht die Vorgänger-OPs desselben Saaltags und die gemeinsam genutzten Ressourcen ein. Drei Verzögerungsmuster wiederholen sich:',
              ],
              points: [
                { title: 'Vor dem OP', text: 'Vorbereitungsschritte werden nachgeholt.' },
                { title: 'Nach dem OP', text: 'Patienten bleiben durch OP-Holds länger im Saal.' },
                { title: 'Zwischen den Eingriffen', text: 'Verzögerungen aus Vorgängerfällen übertragen sich auf nachfolgende OPs.' },
              ],
              images: [
                {
                  ...IMG.a2dCancellationCauses,
                  alt: 'Saaltag-Ansicht, gefiltert auf die 107 wegen Zeitmangels abgesetzten Eingriffe auf 95 Saaltagen, daneben die Minerva-Antwort: Alle Absetzungen betreffen elektive Eingriffe, auf diesen Saaltagen wurden 115 Vorbereitungen nachgeholt, und 39 der Tage haben keine ausgewiesene Startverspätung; als Fehlerbilder folgen nachgeholte Prämedikation (35), fehlendes Labor (28), fehlende Einwilligung (28) und unvollständige Checkliste (24)',
                  caption: 'Minerva: Ursachen der 107 wegen Zeitmangels abgesetzten Eingriffe – ein verspäteter Tagesbeginn allein erklärt sie nicht.',
                },
                {
                  ...IMG.a2dDocumentedDelays,
                  alt: 'Minerva-Tabelle zu den Saaleintritten: 144 Vorgänge mit vorgängerbedingter Verzögerung, im Mittel 1 Stunde 55 Minuten, und 57 Vorgänge mit AWR-bedingter Saalblockierung (OP-Hold), im Mittel 1 Stunde 7 Minuten und maximal 2 Stunden 52 Minuten',
                  caption: 'Minerva: vor- und nachgelagerte Verzögerungen – Vorgängerverspätung und AWR-bedingte OP-Holds.',
                },
              ],
            },
            note: {
              title: 'Die Ursache einer abgesetzten OP liegt nicht zwingend im abgesetzten Fall selbst. Sie kann Stunden früher und bei einem anderen Patienten entstanden sein.',
            },
          },
          {
            area: 'Vorbereitung',
            title: 'Nachgeholte Vorbereitung lässt den Erstfall platzen',
            metric: '26,3 % vs. 91,8 %',
            metricLabel: 'pünktliche erste Saaleintritte mit beziehungsweise ohne nachgeholte Vorbereitung – insgesamt sind es 67,2 %',
            text: [
              'In 752 von 2.400 Fällen (31,3 %) wird präoperative Vorbereitung nachgeholt, im Mittel rund 45 Minuten. Die dokumentierten Gründe sind eine unvollständige Checkliste, die Prämedikation, die Aufklärung und das Labor.',
              'Besonders deutlich wird der Zusammenhang beim ersten Fall des Tages: Mit nachgeholter Vorbereitung beginnen nur 26,3 % pünktlich, ohne nachgeholte Vorbereitung 91,8 % – insgesamt sind es 67,2 %.',
            ],
            prompt:
              'Welche fehlenden Vorbereitungsschritte treiben verspätete erste Saaleintritte? Auf welchen Stationen treten sie besonders häufig auf?',
            table: {
              caption: 'Dokumentierte Gründe für nachgeholte Vorbereitung',
              head: ['Nachholgrund', 'Fälle', 'Anteil'],
              rows: [
                ['Checkliste unvollständig', '223', '29,7 %'],
                ['Prämedikation', '189', '25,1 %'],
                ['Aufklärung', '187', '24,9 %'],
                ['Labor', '153', '20,3 %'],
                ['Gesamt', '752', '100 %'],
              ],
            },
            shift: {
              from: 'Warum startet der erste OP zu spät?',
              to: 'Welcher Vorbereitungsschritt fehlt beim Abruf – und auf welcher Station?',
            },
            image: {
              ...IMG.a2dFirstCasePunctuality,
              alt: 'Saaltag-Ansicht mit Filter auf nachgeholte Vorbereitung und Minerva-Überblick zum OP-Bereich 2025: 261 OP-Tage mit 952 Saaltagen in 4 OP-Sälen und 2.257 durchgeführten Eingriffen; Pünktlichkeit des Tagesstarts 67,2 % gesamt, 26,3 % mit und 91,8 % ohne nachgeholte Vorbereitung; bei 84,3 % der verspäteten Tagesstarts wurde die Vorbereitung der ersten OP nachgeholt',
              caption: 'Einfluss der Vorbereitung auf die Pünktlichkeit des ersten Saaleintritts.',
            },
            extraImages: [
              {
                ...IMG.a2dReworkPattern,
                alt: 'Causal Perspective der Vorbereitung mit aktiviertem Fehlermuster „Nachbearbeitung“: rote Rücksprünge vom angenommenen Abrufauftrag zurück zum Vorbereitungsauftrag – 521 Fälle auf Station 2, 143 auf Station 3 und 88 auf Station 1',
                caption: 'Fehlermuster „Nachbearbeitung“: Nach dem Abruf springt der Prozess zurück in die Vorbereitung.',
              },
              {
                ...IMG.a2dReworkReasons,
                alt: 'Detailansicht der Aktivität „Vorbereitung nachholen (Start)“ mit 752 Einträgen: Checkliste unvollständig 29,65 %, Prämedikation fehlt 25,13 %, Einwilligung fehlt 24,87 %, Labor fehlt 20,35 %',
                caption: 'Nachholgründe aus den Eigenschaften der Aktivität: 752 nachgeholte Vorbereitungen.',
              },
              {
                ...IMG.a2dReworkByWard,
                alt: 'Minerva-Kreisdiagramm „Nachholvorbereitung nach Herkunftsstation“: Station 2 mit 521 Fällen (69 %), Station 3 mit 143 (19 %) und Station 1 mit 88 (12 %)',
                caption: 'Minerva: Rund 69 % der nachgeholten Vorbereitungen entfallen auf Station 2.',
              },
            ],
          },
          {
            area: 'AWR & Bett',
            title: 'Der OP ist blockiert, weil die Station kein Bett meldet',
            metric: '66,9 min',
            metricLabel: 'vergehen auf Station 2 im Mittel von der Verlegungsfreigabe bis zur Bettfreimeldung – auf Station 1 sind es 19,3 Minuten',
            text: [
              'Die Analyse des Pfads Verlegungsfreigabe → Bettfreimeldung → Abholung zeigt deutliche Unterschiede zwischen den Stationen.',
              'Der anschließende Transport dauert auf allen drei Stationen vergleichbare 15–16 Minuten. Der Engpass ist also nicht die Abholung, sondern die Bettfreimeldung.',
              'Wird ein verlegungsbereiter Patient nicht weiterverlegt, bleibt sein AWR-Platz belegt. Füllt sich der AWR, reicht der Rückstau bis in den OP.',
            ],
            table: {
              caption: 'Von der Verlegungsfreigabe bis zur Bettfreimeldung je Station',
              head: ['Station', 'Verlegungsfreigabe bis Bettfreimeldung', 'Erste Bettfreimeldung meist um'],
              rows: [
                ['Station 1', '19,3 min', '12:00 Uhr'],
                ['Station 3', '45,6 min', '13:00 Uhr'],
                ['Station 2', '66,9 min', '13:30 Uhr'],
              ],
            },
            shift: {
              from: 'Brauchen wir mehr Personal im Aufwachraum?',
              to: 'Warum ist der Aufwachraum zum Zeitpunkt des Holds voll?',
            },
            image: {
              ...IMG.a2dBedReleasePaths,
              alt: 'Causal Perspective von der Verlegungsfreigabe (2.123 Fälle) über „Bett frei melden“ je Station zur Abholung aus dem AWR: Station 2 mit 952 Fällen (45 %) und im Mittel 1 Stunde 6 Minuten, Station 3 mit 727 Fällen (34 %) und 45 Minuten, Station 1 mit 444 Fällen (21 %) und 19 Minuten bis zur Bettfreimeldung; danach jeweils rund 15 Minuten bis zur Abholung',
              caption: 'Wartezeit zwischen Verlegungsfreigabe, Bettfreimeldung und Abholung nach Station.',
            },
            extraImages: [
              {
                ...IMG.a2dBedReleaseByWard,
                alt: 'Minerva-Antwort „Bettfreimeldung: Station 2 wartet am längsten“: im Mittel 19,3 Minuten auf Station 1 (444 Freimeldungen), 45,6 Minuten auf Station 3 (727) und 66,9 Minuten auf Station 2 (952); Station 2 benötigt rund 48 Minuten länger als Station 1, die Transportwartezeit liegt auf allen Stationen bei 15 bis 16 Minuten',
                caption: 'Minerva: Station 2 benötigt bis zur Bettfreimeldung rund 3,5-mal so lange wie Station 1.',
              },
              {
                ...IMG.a2dBedReleaseTimeline,
                alt: 'Zeitliche Verteilung der Ereignisse im Tagesverlauf mit eingeblendetem Einzelfall: Patient im Saal, Übergabe an das AWR-Personal, Verlegungsfreigabe, „Bett frei melden (Station 2)“ 2 Stunden 16 Minuten später, Abholung aus dem AWR und Übergabe auf Station 2',
                caption: 'Einzelfall im Tagesverlauf: Zwischen Verlegungsfreigabe und Bettfreimeldung vergehen über zwei Stunden.',
              },
              {
                ...IMG.a2dFirstBedRelease,
                alt: 'Minerva-Tabelle „Erste Bettfreimeldung je Kalendertag und Station“ mit dokumentierten Freimeldungen, Kalendertagen, mittlerer und medianer erster Tagesmeldung und häufigster exakter Uhrzeit: Auf Station 2 fällt die erste Meldung an 245 von 257 Tagen (95,3 %) auf dieselbe Uhrzeit, auf Station 3 an 224 von 252 Tagen (88,9 %)',
                caption: 'Stationsabhängige Muster: Die erste Bettfreimeldung des Tages fällt fast immer auf dieselbe feste Uhrzeit.',
              },
            ],
            note: {
              title: 'Eine Verzögerung auf der Station wird dort sichtbar, wo man sie zunächst nicht vermutet: im OP-Saal.',
            },
          },
          {
            area: 'Kaskaden',
            title: 'Der OP-Stau entsteht zwischen den Fällen',
            metric: '33 → 74 → 110 min',
            metricLabel: 'Startverzögerung der ersten drei Eingriffe in Saal 4 am 25.11.2025 – der vierte geplante Eingriff wird wegen Zeitmangels abgesetzt',
            text: [
              'Die beiden Hauptmechanismen laufen in entgegengesetzte Richtungen.',
              'Mit dem Patientenfluss: Nutzen mehrere Eingriffe nacheinander denselben Saal, setzt sich ein später Start von Fall zu Fall fort. In Saal 4 am 25.11.2025 muss beim ersten Eingriff die Checkliste nachgeholt werden. Der Fall startet mit 33 Minuten Verzögerung, der nächste mit 74, der dritte mit 110 Minuten. Der vierte geplante Eingriff wird wegen Zeitmangels abgesetzt.',
              'Gegen den Patientenfluss: Patienten warten nach der Verlegungsfreigabe auf ein Stationsbett, AWR-Plätze bleiben belegt, im Beispiel kommt eine verspätete Abholung hinzu. Am Ende sind mehrere OP-Säle gleichzeitig betroffen – mit Holds von 59, 42 und 60 Minuten.',
            ],
            table: {
              caption: 'Saal 4 am 25.11.2025: vier Eingriffe, eine Kaskade',
              head: ['Eingriff', 'Planbeginn', 'Saaleintritt', 'Planabweichung', 'Abgesetzt'],
              rows: [
                ['OP 423 · Appendektomie', '08:30:00', '09:03:17', '+33 min', 'nein'],
                ['OP 2057 · Sigmaresektion', '10:55:26', '12:09:03', '+74 min', 'nein'],
                ['OP 2119 · Hüft-Endoprothese', '12:34:28', '14:24:56', '+110 min', 'nein'],
                ['OP 215 · Sigmaresektion', '–', '–', '–', 'ja, 15:30 Uhr'],
              ],
            },
            shift: {
              from: 'Warum wurde dieser Eingriff abgesetzt?',
              to: 'Welche früheren Fälle und Ressourcenkonflikte haben die Zeit verbraucht?',
            },
            image: {
              ...IMG.a2dForwardCascade,
              alt: 'Saaltag-Ansicht von Saal 4 am 25.11.2025, nach Zeit sortiert: Patient 1 im Saal um 09:03 Uhr, Patient 2 um 12:09 Uhr, Patient 3 um 14:24 Uhr; der vierte Eingriff wird um 15:30 Uhr als „OP abgesetzt (Kaskade Saalbeginn zu spät)“ dokumentiert; darunter die Übergaben der Vorgänger an den Aufwachraum, Verlegungsfreigaben, Bettfreimeldungen und Abholungen',
              caption: 'Vier Eingriffe, eine Kaskade: Saal 4 am 25.11.2025.',
            },
            extraImages: [
              {
                ...IMG.a2dForwardCascadeTable,
                alt: 'Minerva-Tabelle Saal 4 am 25.11.2025: OP 423 (Appendektomie) mit nachgeholter, unvollständiger Checkliste startet 33 Minuten nach Plan, OP 2057 (Sigmaresektion) 74 Minuten und OP 2119 (Hüft-Endoprothese) 110 Minuten nach Plan; OP 215 (Sigmaresektion) wird um 15:30 Uhr wegen Zeitmangels abgesetzt, während der Saal noch bis 16:17 Uhr durch OP 2119 belegt ist',
                caption: 'Verzögerungen am Fall selbst und durch vorherige OPs: Die Kaskade beginnt mit der nachgeholten Checkliste am Morgen.',
              },
              {
                ...IMG.a2dBacklogView,
                alt: 'Bettenfreigabe-Perspektive am Beispieltag 10.07.2025, gefiltert auf mittlere und lange OP-Holds: acht Verläufe von der Verlegungsfreigabe über „Bett frei gemeldet“ (im Mittel 55 Minuten später) und die Abholung aus dem AWR (weitere 22 Minuten) bis zur Übergabe auf Station; davor die Übergaben aus Saal 1, 3 und 4 an das AWR-Personal',
                caption: 'Rückstaukette: verspätete Bettfreimeldung und Abholung – AWR-Plätze bleiben belegt.',
              },
              {
                ...IMG.a2dBacklogCause,
                alt: 'Minerva-Ursachenbild „Warum entsteht der OP-Hold?“: Ein noch nicht gemeldetes Stationsbett (zwei auffällige Wartezeiten zur Station 2 von 2 Stunden 39 Minuten und 3 Stunden 7 Minuten) und eine verzögerte Abholung trotz gemeldetem Bett (59 Minuten zur Station 1) halten verlegungsfähige Patienten im Aufwachraum; die AWR-Kapazität bleibt gebunden, OP-Holds blockieren Saal 1 für 59, Saal 3 für 42 und Saal 4 für 60 Minuten – zusammen 2 Stunden 41 Minuten',
                caption: 'Ursachenbild: Patienten können den OP-Saal nicht verlassen – Holds von 59, 42 und 60 Minuten.',
              },
            ],
            deepDive: {
              title: 'Vier Auslöser, eine Folge',
              prompt: 'Fasse die Ursachen der Absetzungen wegen Zeitmangels zusammen.',
              text: [
                'Vier Auslöser führen zur selben Folge: Folgeeingriffe rutschen nach hinten, die verbleibende Tageskapazität nimmt ab. Reicht sie nicht mehr, wird der nächste geplante Eingriff wegen Zeitmangels abgesetzt.',
              ],
              points: [
                { title: 'Unvollständige Vorbereitung', text: 'Nachholen vor Transport oder Saaleintritt → späterer Start.' },
                { title: 'Belegter AWR / fehlendes Bett', text: 'Patient kann nicht weiterverlegt werden → späterer Saalaustritt.' },
                { title: 'Notfalleinschub', text: 'Geplante Reihenfolge und verfügbare Kapazität verändern sich.' },
                { title: 'Gebündelte Bettfreimeldungen', text: 'Verlegungsfähige Patienten bleiben länger im AWR.' },
              ],
              images: [
                {
                  ...IMG.a2dFourTriggers,
                  alt: 'Minerva-Ursachendiagramm: Unvollständige Vorbereitung führt über das Nachholen vor Transport oder Saaleintritt zu einem späteren Erst- oder Folgestart, ein belegter AWR über den OP-Hold zu späterem Saalaustritt und Wechsel, ein Notfalleinschub verändert Reihenfolge und Kapazität; alle drei verringern die verbleibende Tageskapazität, bis ein geplanter Eingriff nicht mehr beginnen kann und wegen Zeitmangels abgesetzt wird',
                  caption: 'Minerva: Auslöser einer Verzögerungskette bis zur Absetzung wegen Zeitmangels.',
                },
                {
                  ...IMG.a2dBedReleaseChain,
                  alt: 'Minerva-Ursachendiagramm zur Bettfreimeldung: Ein regelmäßig später Meldestart – als mögliche organisatorische Freigabeschwelle oder alternativ als gebündelte Dokumentation oder technische Zeitsetzung – lässt Stationsbetten für verlegungsfähige Patienten fehlen; der Patient bleibt trotz medizinischer Freigabe im AWR, nach der Bettmeldung folgen weitere 15 bis 16 Minuten bis zur Abholung, der AWR-Platz bleibt belegt, die nächste Übernahme aus dem OP muss warten und der Patient verbleibt im OP: Hold und Saalblockade',
                  caption: 'Minerva: Gebündelte Bettfreimeldungen tragen den Rückstau bis zur Saalblockade.',
                },
              ],
            },
            note: {
              title: 'Die Absetzung entsteht am Ende des Tages. Die Kaskade beginnt bereits am Morgen.',
            },
          },
        ],

        aiContext: {
          heading: 'Warum KI Causal Process Mining braucht',
          lead:
            'Generative KI kann Muster schnell zusammenfassen und Maßnahmen formulieren. Im OP-Beispiel hätte sie aus den Rohvergleichen sofort drei Maßnahmen abgeleitet: Team C schulen, Saal 4 optimieren, mehr Personal in den Aufwachraum. Keine davon hätte die Ursache getroffen.',
          blocks: [
            {
              title: 'Prozessdaten allein liefern noch keine Bedeutung',
              text: [
                'Systemdaten zeigen Werte und Ereignisse: einen Zeitstempel für die Bettfreimeldung, einen Nachholgrund, eine ASA-Klasse. Sie erklären aber nicht automatisch, was ein Merkmal fachlich bedeutet – etwa dass eine ASA-III/IV-Einleitung länger dauern darf, dass ein Fachrichtungswechsel ein anderes Rüsten verlangt oder dass Stationen ihre Betten nach festen Abläufen freimelden.',
                'Unternehmenskontext ergänzt diese Bedeutung. Causal Process Mining prüft anschließend, wie Merkmale, Prozessverhalten und Ergebnisse über Fälle und Ressourcen hinweg zusammenhängen. Minerva verbindet diese Ebenen im Dialog und macht die Analyse für den Anwender zugänglich.',
              ],
              quote: 'Prozessdaten liefern die Fakten. Unternehmenskontext liefert die Bedeutung. Causal Process Mining prüft die Ursachenhypothesen.',
            },
            {
              title: 'Verändern auf Basis der richtigen Analyse',
              text: [
                'Für KI-gestützte Prozessentscheidungen sind deshalb vier Dinge entscheidend: die richtige fachliche Granularität, Beziehungen zwischen Patienten, Ressourcen und Ereignissen, Unternehmenskontext und eine Analyse, die Korrelationen nicht vorschnell als Ursachen interpretiert.',
              ],
              quote: 'Einen Prozess auf Basis der falschen Analyse zu verändern, macht ihn nicht besser – nur schneller falsch.',
            },
          ],
          image: {
            ...IMG.minervaAgentsVsLlm,
            alt: 'Übersicht „Was Minerva-Agenten leisten, was ein LLM allein nicht kann“: Architektur, Agenten & Skills, Konfigurierbarkeit, belegte Antworten, Governance, Kontext, Kausalität und kontinuierlicher Kreislauf 24/7',
            caption: 'Was Minerva-Agenten leisten, was ein LLM allein nicht kann.',
          },
          note: 'Causal Process Mining schafft die analytische Grundlage. Minerva macht sie im Dialog nutzbar.',
        },

        takeaways: {
          heading: 'Was Causal Process Mining hier verändert',
          lead: [
            'Klassisches Process Mining zeigt sehr gut, was passiert: Varianten, Durchlaufzeiten, Wartezeiten, Wiederholungen und Abweichungen. Für das Warum braucht es zusätzlich Fachlogik, Kontext und fallübergreifende Beziehungen.',
            'Der Healthcare-Case zeigt vier Dinge, die eine reine KPI- oder Einzelfallanalyse leicht übersieht:',
          ],
          items: [
            {
              title: 'Korrelation ist nicht automatisch Ursache',
              text: 'Team C, Saal 4 und AWR-Personal zeigen, wie verführerisch Rohvergleiche sind.',
            },
            {
              title: 'Der betroffene Fall trägt seine Ursache nicht zwingend selbst',
              text: 'Die Absetzung kann durch Vorgängerfälle oder andere Patienten vorbereitet worden sein.',
            },
            {
              title: 'Gemeinsam genutzte Ressourcen verbinden Fälle',
              text: 'Saal, AWR-Platz und Stationsbett erzeugen Abhängigkeiten über Fallgrenzen hinweg.',
            },
            {
              title: 'Nicht jedes Finding braucht eine Maßnahme',
              text: 'Einige Ursachen werden priorisiert, andere weiter untersucht oder verworfen.',
            },
          ],
        },

        measures: {
          heading: 'Vom Finding zur priorisierten Maßnahme',
          lead:
            'Ein Finding verändert noch keinen Prozess. Nach der Analyse entscheidet der Prozessverantwortliche, welche Erkenntnisse tatsächlich bearbeitet werden sollen. Im Business Impact Board werden Findings nach erwarteter Wirkung, Umsetzungsaufwand, Risiko und Unsicherheit bewertet; Process Excellence und Fachbereich priorisieren gemeinsam, welche Entscheidungshypothese als Pilot umgesetzt wird.',
          tableHeading: 'Mögliche Verbesserungsrichtungen',
          items: [
            {
              finding: 'Bettfreimeldung und AWR-Rückstau',
              measure: 'Prozess der Bettfreimeldung gemeinsam mit den Stationen prüfen',
              benefit: 'OP-Holds, blockierte OP-Kapazität, Absetzungen',
            },
            {
              finding: 'Präoperative Vorbereitung',
              measure: 'Vorbereitung vor dem Patientenabruf vollständig abschließen',
              benefit: 'Pünktlichkeit Erstfall, Folgeverzögerungen',
            },
            {
              finding: 'Unvollständige Vorbereitung (31,3 %)',
              measure: 'Checkliste, Prämedikation, Aufklärung und Labor vor dem Abruf prüfen',
              benefit: 'Nachholquote, Pflegeaufwand, Pünktlichkeit',
            },
            {
              finding: 'Fachrichtungswechsel in Saal 4',
              measure: 'Belegung nach Fachrichtung bündeln, unvermeidbare Wechsel realistisch einplanen',
              benefit: 'Wechselzeit, Saalende, Absetzungen',
            },
            {
              finding: 'Team C und AWR-Personal',
              measure: 'Keine Maßnahme – Scheinkorrelation; Patientenmix beziehungsweise Bettenengpass weiter beobachten',
              benefit: 'Unsicherheit',
            },
          ],
          image: {
            ...IMG.a2dImpactBoard,
            alt: 'Business Impact Board mit vier Findings aus dem OP-Case in der Impact-/Aufwand-Matrix: F-001 zur Vorbereitung erst am OP-Tag und F-002 zu den 107 wegen Zeitmangels abgesetzten OPs als strategisch, F-004 zu den hohen Saalwechselzeiten in Saal 4 als Quick Win und F-003 „Verdacht erhärtet sich nicht: Team C leitet langsamer ein“ mit niedriger Priorität',
            caption: 'Business Impact Board: vom Finding zur priorisierten Handlungsoption.',
          },
          note: 'Die Priorisierung ist eine fachliche Entscheidung. Minerva bereitet Analysewege, Kontext und Handlungsoptionen vor; Kontrolle und Entscheidungshoheit bleiben jederzeit nachvollziehbar beim Prozessverantwortlichen und Fachbereich.',
        },

        loop: {
          heading: 'Der Kreislauf: Insight → Action → Impact → Feedback',
          lead:
            'Nach der Priorisierung wird eine Maßnahme als Pilot umgesetzt und ihre Wirkung anhand derselben Prozessdaten erneut gemessen. Minerva Frontier Agents können diesen Regelkreis kontinuierlich begleiten: neue Findings erkennen, Hypothesen weiterentwickeln und die Wirkung umgesetzter Maßnahmen beobachten.',
          steps: [
            { step: 'Insight', text: 'Vorbereitung und AWR-/Bett-Mechanismen tragen zu sichtbaren Kapazitätsverlusten im OP bei.' },
            { step: 'Action', text: 'Vorbereitung vor dem Abruf stabilisieren; Ursache der späten Bettfreimeldung organisatorisch adressieren.' },
            { step: 'Impact', text: 'Erstfall-Pünktlichkeit, Holds, blockierte OP-Kapazität, Absetzungen und Saalende erneut messen.' },
            { step: 'Feedback', text: 'Zeigt die Umsetzung nicht die erwartete Wirkung, wird die Ursachenhypothese überprüft und angepasst.' },
          ],
          questions: [
            'Beginnen mehr erste OPs innerhalb von 15 Minuten nach Plan?',
            'Sinkt die Quote nachgeholter Vorbereitung – und auf welchen Stationen?',
            'Gehen OP-Holds und blockierte OP-Kapazität zurück?',
            'Werden weniger Eingriffe wegen Zeitmangels abgesetzt?',
            'Enden weniger OPs nach dem geplanten Saalende um 15:30 Uhr?',
            'Verschiebt sich der Engpass nur an eine andere Stelle zwischen Station, OP, Aufwachraum und Bett?',
          ],
        },

        principlesHeading: 'Vier Prinzipien für die Analyse',
        principles: [
          {
            title: 'Granularität erhalten',
            text: 'Patient, Saal, AWR-Platz und Bett bleiben verbunden, statt den Prozess vorab auf einen linearen Fall zu reduzieren.',
          },
          {
            title: 'Mit der Business-Frage beginnen',
            text: 'Die Causal Perspective wird für die konkrete Fachfrage gebildet – End-to-End, Vorbereitung, OP, AWR/Bett oder Saaltag.',
          },
          {
            title: 'Korrelationen gegenprüfen',
            text: 'Ein auffälliger Rohvergleich ist ein Ausgangspunkt, noch keine Root Cause.',
          },
          {
            title: 'Über den Einzelfall hinausschauen',
            text: 'Gemeinsam genutzte Ressourcen verbinden Fälle; die Ursache kann bei einem anderen Patienten liegen.',
          },
        ],

        conclusion: {
          heading: 'Fazit: Wer nur den OP optimiert, behandelt das Symptom',
          text: [
            'Auffällige Kennzahlen allein sind keine ausreichende Steuerungslogik. Team C wirkt langsamer, Saal 4 fällt bei den Wechselzeiten auf, reduzierte AWR-Besetzung korreliert mit mehr Holds. Wer daraus sofort Maßnahmen ableitet, optimiert möglicherweise nur das sichtbarste Symptom.',
            'Causal Process Mining verbindet Prozessdaten, fachliche Beziehungen, gemeinsam genutzte Ressourcen und fallübergreifende Abhängigkeiten. Im OP-Beispiel zeigt sich: Nachgeholte Vorbereitung destabilisiert den Tagesstart. Spät oder gebündelt gemeldete Stationsbetten binden AWR-Plätze und tragen den Rückstau bis in den OP. Verzögerungen setzen sich über Vorgängerfälle von Eingriff zu Eingriff fort.',
            'Aus „den OP optimieren“ wird damit eine konkretere Aufgabe: Vorbereitung stabilisieren, Bett- und AWR-Prozesse gemeinsam betrachten, fallübergreifende Kaskaden verstehen – und anschließend messen, ob die Maßnahmen tatsächlich mehr Stabilität und Kapazität schaffen.',
          ],
          claim: 'Nicht nur sehen, wo die Verzögerung auftritt. Verstehen, wo sie entsteht. Ursachen priorisieren. Wirkung messen.',
        },

        faq: [
          {
            question: 'Was ist Admission-to-Discharge?',
            answer:
              'Admission-to-Discharge ist der End-to-End-Prozess eines Patienten im Krankenhaus von der Aufnahme bis zur Entlassung. Noreja zeigt ihn am OP-Patientenpfad: präoperative Vorbereitung auf der Station, Patientenabruf und Transport, Einleitung und Operation, Ausleitung und Saalaustritt, Versorgung im Aufwachraum sowie Verlegung auf Station oder Intensivstation. Patienten, OP-Säle, AWR-Plätze und Stationsbetten sind dabei über gemeinsam genutzte Ressourcen miteinander verbunden.',
          },
          {
            question: 'Was ist der perioperative Patientenpfad?',
            answer:
              'Der perioperative Patientenpfad – auch OP-Patientenpfad – beschreibt den End-to-End-Prozess rund um einen operativen Eingriff: präoperative Vorbereitung und Freigabe, Patientenabruf und Transport, Einleitung und Operation, Ausleitung und Saalaustritt, Versorgung im Aufwachraum (AWR) sowie die Verlegung auf Station oder Intensivstation.',
          },
          {
            question: 'Was ist ein OP-Hold?',
            answer:
              'Bei einem OP-Hold kann ein Patient den OP-Saal nach dem Eingriff nicht verlassen, weil der Aufwachraum voll ist. Der Saal bleibt gebunden, der nächste Eingriff beginnt später. Im synthetischen Demo-Datensatz sind 431 OPs von einem OP-Hold betroffen, insgesamt 374,1 Stunden blockierte OP-Kapazität – ein Wert, der nicht automatisch 1:1 vermeidbar ist.',
          },
          {
            question: 'Warum werden Operationen wegen Zeitmangels abgesetzt?',
            answer:
              '„Zeitmangel“ ist der dokumentierte Anlass, nicht die Ursache. Im OP-Case werden 107 von 143 abgesetzten Eingriffen wegen Zeitmangels abgesetzt, verteilt auf 95 Saaltage. Drei Verzögerungsmuster wiederholen sich: nachgeholte Vorbereitung vor dem OP, OP-Holds nach dem OP und Verzögerungen aus Vorgängerfällen, die sich auf nachfolgende Eingriffe übertragen. Die Ursache kann Stunden früher und bei einem anderen Patienten entstanden sein.',
          },
          {
            question: 'Warum beginnt die erste OP des Tages zu spät?',
            answer:
              'Im Demo-Datensatz vor allem, weil Vorbereitung nachgeholt werden muss. Mit nachgeholter Vorbereitung beginnen nur 26,3 % der ersten Eingriffe pünktlich, ohne 91,8 %. Insgesamt wird in 752 von 2.400 Fällen (31,3 %) Vorbereitung nachgeholt, im Mittel rund 45 Minuten; die dokumentierten Gründe sind eine unvollständige Checkliste, Prämedikation, Aufklärung und Labor.',
          },
          {
            question: 'Braucht der Aufwachraum mehr Personal, wenn bei reduzierter Besetzung mehr OP-Holds entstehen?',
            answer:
              'Nicht zwingend. Die Holdquote liegt bei reduzierter Besetzung bei 40,5 %, bei voller bei 14,5 %. Die Gegenprüfung zeigt jedoch: Der AWR ist belegt, weil verlegungsbereite Patienten auf ein Stationsbett warten – in beiden Besetzungsgruppen im Mittel rund eine Stunde. Der Engpass liegt weiter hinten in der Ressourcenkette, bei der Bettfreimeldung.',
          },
          {
            question: 'Wie hängen Bettenmanagement und OP-Kapazität zusammen?',
            answer:
              'Über den Aufwachraum. Meldet eine Station kein Bett, bleibt ein verlegungsbereiter Patient im AWR; ist der AWR voll, kann der nächste Patient den OP-Saal nicht verlassen. Im Demo-Datensatz vergehen von der Verlegungsfreigabe bis zur Bettfreimeldung auf Station 1 im Mittel 19,3, auf Station 3 45,6 und auf Station 2 66,9 Minuten, während der Transport überall 15–16 Minuten dauert.',
          },
          {
            question: 'Was ist eine Verzögerungskaskade im OP?',
            answer:
              'Eine Kaskade entsteht, wenn sich ein später Start von Eingriff zu Eingriff fortsetzt, weil mehrere Eingriffe nacheinander denselben Saal nutzen. Im Beispiel Saal 4 am 25.11.2025 wird beim ersten Eingriff die Checkliste nachgeholt; die Fälle starten mit 33, 74 und 110 Minuten Verzögerung, der vierte geplante Eingriff wird wegen Zeitmangels abgesetzt. Die Absetzung entsteht am Ende des Tages, die Kaskade beginnt am Morgen.',
          },
          {
            question: 'Leitet ein Anästhesieteam mit längeren Einleitungszeiten langsamer ein?',
            answer:
              'Im Demo-Datensatz nicht. Team C braucht für die Einleitung im Mittel 29,7 Minuten, Team A 18,7 und Team B 18,3. Team C betreut aber vor allem die schweren Fälle: 88,2 % seiner Patienten gehören zu den ASA-Klassen III–IV. Bei vergleichbaren Patienten nach ASA-Klasse ist Team C gleich schnell – eine Scheinkorrelation, keine Ursache.',
          },
          {
            question: 'Welche Daten braucht die Analyse des OP-Patientenpfads?',
            answer:
              'Im Demo-Setup werden 26 Tabellen aus 5 Systemen in einem Event Knowledge Graph zusammengeführt – etwa Patientenfall, Checkliste, Saalbelegung, Anästhesie-Einleitung und -Ausleitung, Patiententransport, Aufwachraum und Bettmeldung. Patient, OP-Fall, Saal, AWR-Platz, Bett und Station bleiben verbunden; erst für die konkrete Fachfrage entsteht eine Causal Perspective.',
          },
          {
            question: 'Welche Rolle spielt der KI-Assistent Minerva?',
            answer:
              'Minerva beantwortet Fachfragen im Dialog – etwa „Analysiere, warum Operationen abgesagt wurden.“ –, bildet Vergleichsgruppen, bezieht Vorgänger-OPs und gemeinsam genutzte Ressourcen ein und trennt belegte Befunde von Ursachenhypothesen. Die Entscheidung über Maßnahmen bleibt beim Prozessverantwortlichen und Fachbereich.',
          },
          {
            question: 'Stammen die Kennzahlen aus einem echten Krankenhaus?',
            answer:
              'Nein. Alle Kennzahlen stammen aus einem synthetischen perioperativen Datensatz mit 2.400 OP-Vorgängen. Sie zeigen die Analysemethode und sind keine Produktivkennzahlen eines Krankenhauses.',
          },
        ],

        caseHeading: 'Die vollständige Case-Beschreibung',
        caseText:
          'Event Knowledge Graph, die Causal Perspectives für Vorbereitung, OP und Aufwachraum, alle fünf Findings mit ihren Analyseschritten, die Root-Cause-Analyse der Absetzungen mit Minerva und der Weg ins Business Impact Board – Schritt für Schritt im Noreja Help Center.',
        caseCta: 'Case im Help Center lesen',
      },

      en: {
        scenario: 'End-to-end process · Surgical patient pathway in hospitals',
        metaTitle: 'Admission-to-Discharge: Hospital & OR Process Mining | Noreja',
        metaDescription:
          'The surgical patient pathway from ward to operating room, recovery room and transfer: how causal process mining finds the causes of OR holds, late first cases and cancellations for lack of time – and why they often lie outside the OR.',
        keywords: [
          'admission-to-discharge',
          'surgical patient pathway',
          'perioperative process',
          'process mining in healthcare',
          'hospital process mining',
          'OR management',
          'operating room efficiency',
          'OR capacity',
          'first case on-time start',
          'surgery cancellations',
          'OR hold',
          'PACU',
          'patient flow',
          'bed management',
          'turnover time',
          'root cause analysis',
          'AI in hospitals',
          'event knowledge graph',
          'causal process mining',
        ],
        tagline:
          'How causal process mining reveals hidden causes between the ward, the recovery room and the operating room.',
        intro: {
          heading: 'The symptom shows in the OR. The cause lies elsewhere.',
          text: [
            'Many OR initiatives pursue the same goals: more predictable schedules, better utilisation of the operating rooms and fewer delays or cancellations. On-time starts, turnover times and OR holds look like the obvious levers.',
            'Yet in the perioperative process, delays often arise somewhere else entirely: in incomplete preparation on the ward, in a missing bed after the recovery room, or in a backlog at shared resources.',
          ],
          quote: 'The problem becomes visible in the OR. The cause often lies elsewhere. Optimising only the OR treats the symptom.',
        },
        definition:
          'Admission-to-discharge describes a patient’s path through the hospital, from admission to discharge. This case looks at the surgical patient pathway, also called the perioperative patient pathway: the end-to-end process around a surgical procedure with preoperative preparation and clearance, patient call-up and transport, anaesthesia induction and surgery, emergence and leaving the operating room, care in the recovery room (PACU) and the transfer to a ward or the intensive care unit. On a process slide the flow looks linear. In reality, several patients, teams and shared resources interlock: an operating room waits for a patient, a patient for complete preparation, a PACU bay for the transfer of the previous patient – and that patient for a free bed on the ward. Causal process mining preserves this granularity and the relationships between patient, surgery, operating room, PACU, bed and ward.',
        demoNote:
          'Note: the figures on this page come from a synthetic perioperative dataset of 2,400 surgical cases. They illustrate the analysis method and are not production figures of any hospital. Apart from the event knowledge graph, the screenshots show the German user interface.',
        definitionImage: {
          ...IMG.a2dEntityModelEn,
          alt: 'Event knowledge graph of the surgical patient pathway: activities from 26 tables grouped into four operating rooms, three wards, one PACU, cancellations and the holistic cross-cutting activities – from patient admission, checklist, premedication and fasting status through patient in the operating room and anaesthesia to transfer clearance, bed release and handover to the ward',
          caption:
            'Event knowledge graph of the OR process: patient, surgical case, operating room, PACU, bed and ward stay connected – complexity is reduced during analysis, not already at data import.',
        },

        keyFacts: [
          {
            value: '67.2%',
            label: 'First cases on time',
            detail: 'OR entry within 15 minutes of the planned time',
          },
          {
            value: '431',
            label: 'OR holds',
            detail: 'the patient cannot leave the OR because the PACU is full',
          },
          {
            value: '143',
            label: 'Cancelled procedures',
            detail: '107 for lack of time, 36 because the patient was not fasting',
          },
          {
            value: '374.1 h',
            label: 'Blocked OR capacity',
            detail: 'cumulative hold time; not automatically avoidable one to one',
          },
          {
            value: '514',
            label: 'Surgeries leaving the OR after 15:30',
            detail: 'overrun beyond the planned end of the OR day',
          },
          {
            value: '752',
            label: 'Preparations completed late',
            detail: '31.3% of all surgical cases, about 45 minutes on average',
          },
          {
            value: '2,400',
            label: 'Surgical cases',
            detail: 'entire synthetic dataset',
          },
          {
            value: '26',
            label: 'Tables from 5 systems',
            detail: 'combined in one event knowledge graph in the demo setup',
          },
        ],

        phasesHeading: 'The process in three blocks',
        phasesLead:
          'The end-to-end causal perspective connects ward, operating room, PACU and bed in one business view. Only for the concrete business question is a matching causal perspective derived from it – for example end-to-end, preparation, surgery, PACU and bed release, or the OR day.',
        phasesImage: {
          ...IMG.a2dEndToEnd,
          alt: 'End-to-end causal perspective of the perioperative patient pathway: from elective or emergency admission through preparation on three wards, patient call-up, OR transfer area and transfer to the table, the flows in the operating rooms and the handover to PACU staff or the intensive care unit, to transfer clearance, bed release, collection from the PACU and handover to the ward',
          caption: 'End-to-end causal perspective of the surgical patient pathway from the ward through the OR to the transfer.',
        },
        phases: [
          {
            title: 'Preoperative preparation & patient call-up',
            summary:
              'The patient is prepared on the ward: informed consent, lab tests, premedication and checklist. Only when all prerequisites are met can the patient be called up and transported. If steps are missing, they are completed at short notice – and the patient reaches the operating room later.',
            steps: [
              'Case admitted on ward',
              'Preparation order',
              'Surgical checklist completed',
              'Premedication given',
              'Fasting status confirmed',
              'Call-up by the OR',
              'Patient collected',
              'OR transfer area & identity check',
              'Patient in OR',
            ],
            objects: ['Patient', 'Surgical case', 'Ward', 'Preoperative preparation', 'Checklist', 'Informed consent', 'Lab tests', 'Premedication', 'Patient transport'],
            question: 'Which preparatory steps prevent an on-time patient call-up – and which of them can be completed earlier or more reliably?',
            image: {
              ...IMG.a2dPreparation,
              alt: 'Causal perspective of preoperative preparation: elective or emergency admission, then per ward 1 to 3 the patient case, preparation order, surgical checklist, premedication, fasting status, call-up by the OR and patient collected, followed by OR transfer area, identity check, transfer to the table and patient in OR; branching off are “complete preparation later” and the cancellations for missing fasting and a late OR start',
              caption: 'Preoperative preparation, patient call-up, transport and preparation steps completed late.',
            },
          },
          {
            title: 'Induction, surgery & OR control',
            summary:
              'Patient, operating room, anaesthesia team and surgical team come together. Induction and surgery are followed by emergence, leaving the room and the turnover to the next patient. If an early case is delayed, the deviation can build up across all following surgeries of the OR day.',
            steps: [
              'Patient in OR',
              'Positioning checked',
              'Anaesthesia start',
              'Anaesthesia release',
              'Team time-out',
              'Incision',
              'Suture',
              'Emergence',
              'Anaesthesia end',
              'Patient leaves OR',
              'OR cleaned',
            ],
            objects: ['Patient', 'Surgical case', 'Operating room', 'Anaesthesia team', 'Surgical team', 'Specialty', 'Preceding and following procedure'],
            question: 'Does the delay really arise in the operating room – or do we only see the effect of a cause that arose earlier?',
            image: {
              ...IMG.a2dSurgery,
              alt: 'Causal perspective of the OR day: from the start of the day through transfer to the table and patient in OR into four parallel room strands with positioning checked, anaesthesia start, anaesthesia release, team time-out, incision, suture, emergence and anaesthesia end to patient leaves OR and OR cleaned, followed by handover to PACU staff or the intensive care unit and the end of the day',
              caption: 'Induction, surgery and room occupancy: cross-case delay cascades build up over the OR day.',
            },
          },
          {
            title: 'PACU, bed & transfer',
            summary:
              'After surgery the patient is cared for in the recovery room (PACU) and then transferred to a ward or the intensive care unit. If the patient is ready for transfer but no bed has been released yet, the PACU bay stays occupied. If the PACU is full, the next patient cannot leave the operating room.',
            steps: [
              'Handover to PACU staff',
              'Monitoring started',
              'Pain therapy started',
              'Transfer clearance',
              'Bed released',
              'Collection from PACU',
              'Handover to ward',
            ],
            objects: ['Patient', 'Surgical case', 'PACU', 'PACU bay', 'Transfer clearance', 'Ward bed', 'Ward', 'Intensive care unit', 'Patient transport'],
            question: 'What actually keeps the patient in the PACU after transfer clearance – the missing bed, the transport or another bottleneck?',
            image: {
              ...IMG.a2dBedRelease,
              alt: 'Causal perspective of the PACU and bed release: from patient in the operating room through transfer clearance to “release bed” for wards 1 to 4 or “bed released”, then on to collection from the PACU and handover to wards 1 to 4',
              caption: 'Backlog between PACU, bed release, patient transport and operating room.',
            },
          },
        ],
        objectsNote:
          'A patient can have several procedures, an operating room serves several patients in a row per OR day, and PACU bays and ward beds are occupied by changing patients. These shared resources connect cases across case boundaries – which is exactly where delays arise that a single-case view cannot explain.',

        findingsHeading: 'Five findings along the surgical patient pathway',
        findingsLead:
          'The findings lead from the management KPI through three refuted suspicions to the cross-case cascades. Each one shifts the question from “Where does the problem show?” to “Where does it arise?”.',
        findings: [
          {
            area: 'KPIs',
            title: 'The KPIs show the where – but not yet the why',
            metric: '67.2%',
            metricLabel: 'of the first surgeries of an OR day start on time – within 15 minutes of the planned OR entry',
            text: [
              'Only 67.2% of first surgeries start on time. 431 surgeries are affected by an OR hold, adding up to 374.1 hours of blocked OR capacity. 143 procedures are cancelled, 107 of them for lack of time.',
              'The problem seems clear: the OR is losing time and capacity. But the KPIs do not say where this loss arises.',
            ],
            shift: {
              from: 'How do we make the OR faster?',
              to: 'Where does the time loss that becomes visible in the OR arise?',
            },
            image: {
              ...IMG.a2dDashboard,
              alt: 'Management dashboard for the OR area, “Secure capacity. Manage interfaces together.”: 67.2% of first cases on time (640 of 952), 431 surgeries with an OR hold, 374.1 hours of cumulative hold time, 514 surgeries finished after 15:30 and 143 cancelled procedures, 107 of them for lack of time and 36 for missing fasting; below, the surgeries ending after 15:30 per operating room',
              caption: 'Management dashboard: first cases on time, OR holds, blocked OR time, end of day and cancelled procedures.',
            },
          },
          {
            area: 'Cross-check',
            title: 'Three obvious suspects – none survives the cross-check',
            metric: '0 of 3',
            metricLabel: 'obvious explanations – anaesthesia team C, OR 4 and PACU staffing – hold up when comparable cases are compared',
            text: [
              'The first analyses show three conspicuous correlations. Each one suggests a quick measure: train team C, optimise OR 4, add staff to the PACU.',
              'The data was correct. The obvious conclusions were not sufficiently justified.',
            ],
            table: {
              text: true,
              caption: 'Raw comparison and cross-check',
              head: ['Suspicion', 'Raw comparison', 'Cross-check'],
              rows: [
                [
                  'Anaesthesia team C is slower',
                  'Induction takes 29.7 min on average (team A 18.7, team B 18.3)',
                  'Equally fast with comparable patients (ASA) – team C mainly cares for the severe cases',
                ],
                [
                  'OR 4 works inefficiently',
                  'Clearly higher median turnover time',
                  'OR 4 takes cases from several specialties; the specialty changes cost time, not the room',
                ],
                [
                  'Too few staff in the PACU',
                  'Hold rate 40.5% with reduced, 14.5% with full staffing',
                  'The PACU is occupied because patients are waiting for a bed – the bottleneck lies further down the resource chain',
                ],
              ],
            },
            shift: {
              from: 'Train team C, optimise OR 4, add PACU staff',
              to: 'Does the difference hold up when we compare comparable cases?',
            },
            image: {
              ...IMG.a2dRawComparisons,
              alt: 'Three dashboard tiles with raw comparisons: anaesthesia induction averaging 22.1 minutes over 1,607 procedures (team A 18.7, team B 18.3, team C 29.7 minutes), turnover time averaging 40.5 minutes with a median of 28.3 minutes over 1,305 turnovers (OR 4 with a median of 40.8 minutes versus 26.0 to 27.6 minutes in ORs 1 to 3), and a hold rate of 14.5% with full and 40.5% with reduced PACU staffing',
              caption: 'Conspicuous correlations in the raw comparison: anaesthesia team, turnover time per room and hold rate by PACU staffing.',
            },
            extraImages: [
              {
                ...IMG.a2dTeamCCheck,
                alt: 'Minerva answer on induction time: 88.2% of team C’s patients belong to ASA classes III–IV (450 of 510), compared with 10.2% for teams A and B together (112 of 1,097); in comparable patient groups by ASA class and existing venous access the averages are close, for example 22.4 versus 22.6 minutes for ASA III–IV with access in place',
                caption: 'Team C: the patient mix by ASA class explains most of the longer induction time.',
              },
              {
                ...IMG.a2dStaffingCheck,
                alt: 'Minerva table “Why do PACU bays stay tied up?” for 1,619 cases with full and 504 with reduced staffing: in both groups, patients ready for transfer stay in the PACU for about an hour on average (66.4 and 61.2 minutes), most of it between transfer clearance and bed release',
                caption: 'PACU staffing: patients ready for transfer stay about an hour in the PACU with full and reduced staffing alike – mostly before the bed is released.',
              },
            ],
            deepDive: {
              title: 'From symptom to root cause analysis',
              prompt: [
                'Analyse why surgeries were cancelled.',
                'Which preceding surgeries and resource conflicts contributed to the 107 procedures cancelled for lack of time?',
              ],
              text: [
                'Of the 143 cancelled procedures, 107 were cancelled for lack of time. “Lack of time”, however, is not a root cause but the documented reason at the end of a development.',
                'The 107 cases are spread across 95 OR days. To understand how the missing time arose, looking at the cancelled patient is not enough. The analysis includes the preceding surgeries of the same OR day and the shared resources. Three delay patterns recur:',
              ],
              points: [
                { title: 'Before surgery', text: 'Preparation steps are completed late.' },
                { title: 'After surgery', text: 'Patients stay in the operating room longer because of OR holds.' },
                { title: 'Between procedures', text: 'Delays from preceding cases carry over to the following surgeries.' },
              ],
              images: [
                {
                  ...IMG.a2dCancellationCauses,
                  alt: 'OR-day view filtered on the 107 procedures cancelled for lack of time on 95 OR days, next to the Minerva answer: all cancellations concern elective procedures, 115 preparations were completed late on these days, and 39 of the days show no start delay; the documented error patterns that follow are premedication completed late (35), missing lab tests (28), missing consent (28) and an incomplete checklist (24)',
                  caption: 'Minerva: causes of the 107 procedures cancelled for lack of time – a late start of the day alone does not explain them.',
                },
                {
                  ...IMG.a2dDocumentedDelays,
                  alt: 'Minerva table on OR entries: 144 cases with a delay caused by the preceding case, averaging 1 hour 55 minutes, and 57 cases with the room blocked by a full PACU (OR hold), averaging 1 hour 7 minutes and at most 2 hours 52 minutes',
                  caption: 'Minerva: upstream and downstream delays – late preceding cases and PACU-related OR holds.',
                },
              ],
            },
            note: {
              title: 'The cause of a cancelled surgery does not necessarily lie in the cancelled case itself. It may have arisen hours earlier and with a different patient.',
            },
          },
          {
            area: 'Preparation',
            title: 'Late preparation derails the first case',
            metric: '26.3% vs. 91.8%',
            metricLabel: 'first OR entries on time with and without preparation completed late – 67.2% overall',
            text: [
              'In 752 of 2,400 cases (31.3%), preoperative preparation is completed late, taking about 45 minutes on average. The documented reasons are an incomplete checklist, premedication, informed consent and lab tests.',
              'The link is particularly clear for the first case of the day: with preparation completed late, only 26.3% start on time; without it, 91.8% do – 67.2% overall.',
            ],
            prompt:
              'Which missing preparation steps drive late first OR entries? On which wards do they occur particularly often?',
            table: {
              caption: 'Documented reasons for preparation completed late',
              head: ['Reason', 'Cases', 'Share'],
              rows: [
                ['Incomplete checklist', '223', '29.7%'],
                ['Premedication', '189', '25.1%'],
                ['Informed consent', '187', '24.9%'],
                ['Lab tests', '153', '20.3%'],
                ['Total', '752', '100%'],
              ],
            },
            shift: {
              from: 'Why does the first surgery start late?',
              to: 'Which preparation step is missing at call-up – and on which ward?',
            },
            image: {
              ...IMG.a2dFirstCasePunctuality,
              alt: 'OR-day view filtered on preparation completed late, with a Minerva overview of the OR area in 2025: 261 OR days with 952 room days in 4 operating rooms and 2,257 procedures performed; first-case punctuality of 67.2% overall, 26.3% with and 91.8% without preparation completed late; for 84.3% of late day starts, the preparation of the first surgery was completed late',
              caption: 'Effect of preparation on the punctuality of the first OR entry.',
            },
            extraImages: [
              {
                ...IMG.a2dReworkPattern,
                alt: 'Causal perspective of preparation with the error pattern “rework” switched on: red loops from the accepted call-up order back to the preparation order – 521 cases on ward 2, 143 on ward 3 and 88 on ward 1',
                caption: 'Error pattern “rework”: after call-up, the process jumps back into preparation.',
              },
              {
                ...IMG.a2dReworkReasons,
                alt: 'Detail view of the activity “complete preparation later (start)” with 752 entries: incomplete checklist 29.65%, premedication missing 25.13%, consent missing 24.87%, lab tests missing 20.35%',
                caption: 'Reasons from the activity properties: 752 preparations completed late.',
              },
              {
                ...IMG.a2dReworkByWard,
                alt: 'Minerva pie chart “Late preparation by ward of origin”: ward 2 with 521 cases (69%), ward 3 with 143 (19%) and ward 1 with 88 (12%)',
                caption: 'Minerva: about 69% of the preparations completed late fall to ward 2.',
              },
            ],
          },
          {
            area: 'PACU & bed',
            title: 'The OR is blocked because the ward does not release a bed',
            metric: '66.9 min',
            metricLabel: 'pass on average on ward 2 between transfer clearance and bed release – on ward 1 it is 19.3 minutes',
            text: [
              'Analysing the path transfer clearance → bed release → collection shows clear differences between the wards.',
              'The subsequent transport takes a comparable 15–16 minutes on all three wards. So the bottleneck is not the collection but the bed release.',
              'If a patient who is ready for transfer is not moved on, their PACU bay stays occupied. When the PACU fills up, the backlog reaches back into the OR.',
            ],
            table: {
              caption: 'From transfer clearance to bed release per ward',
              head: ['Ward', 'Transfer clearance to bed release', 'First bed release usually at'],
              rows: [
                ['Ward 1', '19.3 min', '12:00'],
                ['Ward 3', '45.6 min', '13:00'],
                ['Ward 2', '66.9 min', '13:30'],
              ],
            },
            shift: {
              from: 'Do we need more staff in the PACU?',
              to: 'Why is the PACU full at the time of the hold?',
            },
            image: {
              ...IMG.a2dBedReleasePaths,
              alt: 'Causal perspective from transfer clearance (2,123 cases) through “release bed” per ward to collection from the PACU: ward 2 with 952 cases (45%) and 1 hour 6 minutes on average, ward 3 with 727 cases (34%) and 45 minutes, ward 1 with 444 cases (21%) and 19 minutes until the bed is released; then about 15 minutes each until collection',
              caption: 'Waiting time between transfer clearance, bed release and collection by ward.',
            },
            extraImages: [
              {
                ...IMG.a2dBedReleaseByWard,
                alt: 'Minerva answer “Bed release: ward 2 waits longest”: on average 19.3 minutes on ward 1 (444 releases), 45.6 minutes on ward 3 (727) and 66.9 minutes on ward 2 (952); ward 2 needs about 48 minutes longer than ward 1, while the transport wait is 15 to 16 minutes on every ward',
                caption: 'Minerva: ward 2 takes about 3.5 times as long as ward 1 to release a bed.',
              },
              {
                ...IMG.a2dBedReleaseTimeline,
                alt: 'Distribution of events over the day with a single case overlaid: patient in OR, handover to PACU staff, transfer clearance, “release bed (ward 2)” 2 hours 16 minutes later, collection from the PACU and handover to ward 2',
                caption: 'A single case over the day: more than two hours pass between transfer clearance and bed release.',
              },
              {
                ...IMG.a2dFirstBedRelease,
                alt: 'Minerva table “First bed release per calendar day and ward” with documented releases, calendar days, mean and median first release of the day and the most frequent exact time: on ward 2 the first release falls on the same time on 245 of 257 days (95.3%), on ward 3 on 224 of 252 days (88.9%)',
                caption: 'Ward-specific patterns: the first bed release of the day almost always falls on the same fixed time.',
              },
            ],
            note: {
              title: 'A delay on the ward becomes visible where you would not expect it at first: in the operating room.',
            },
          },
          {
            area: 'Cascades',
            title: 'The OR backlog arises between cases',
            metric: '33 → 74 → 110 min',
            metricLabel: 'start delay of the first three procedures in OR 4 on 25 November 2025 – the fourth planned procedure is cancelled for lack of time',
            text: [
              'The two main mechanisms run in opposite directions.',
              'With the patient flow: when several procedures use the same operating room one after another, a late start carries over from case to case. In OR 4 on 25 November 2025, the checklist has to be completed late for the first procedure. That case starts 33 minutes late, the next one 74 and the third 110 minutes late. The fourth planned procedure is cancelled for lack of time.',
              'Against the patient flow: after transfer clearance, patients wait for a ward bed, PACU bays stay occupied, and in the example a late collection adds to it. In the end, several operating rooms are affected at the same time – with holds of 59, 42 and 60 minutes.',
            ],
            table: {
              caption: 'OR 4 on 25 November 2025: four procedures, one cascade',
              head: ['Procedure', 'Planned start', 'OR entry', 'Deviation', 'Cancelled'],
              rows: [
                ['Surgery 423 · Appendectomy', '08:30:00', '09:03:17', '+33 min', 'no'],
                ['Surgery 2057 · Sigmoid resection', '10:55:26', '12:09:03', '+74 min', 'no'],
                ['Surgery 2119 · Hip replacement', '12:34:28', '14:24:56', '+110 min', 'no'],
                ['Surgery 215 · Sigmoid resection', '–', '–', '–', 'yes, 15:30'],
              ],
            },
            shift: {
              from: 'Why was this procedure cancelled?',
              to: 'Which earlier cases and resource conflicts used up the time?',
            },
            image: {
              ...IMG.a2dForwardCascade,
              alt: 'OR-day view of OR 4 on 25 November 2025, sorted by time: patient 1 in the room at 09:03, patient 2 at 12:09, patient 3 at 14:24; the fourth procedure is recorded at 15:30 as “surgery cancelled (cascade, late room start)”; below, the predecessors’ handovers to the PACU, transfer clearances, bed releases and collections',
              caption: 'Four procedures, one cascade: OR 4 on 25 November 2025.',
            },
            extraImages: [
              {
                ...IMG.a2dForwardCascadeTable,
                alt: 'Minerva table for OR 4 on 25 November 2025: surgery 423 (appendectomy) with an incomplete checklist completed late starts 33 minutes behind plan, surgery 2057 (sigmoid resection) 74 minutes and surgery 2119 (hip replacement) 110 minutes behind plan; surgery 215 (sigmoid resection) is cancelled at 15:30 for lack of time while the room is still occupied by surgery 2119 until 16:17',
                caption: 'Delays in the case itself and from previous surgeries: the cascade begins with the checklist completed late in the morning.',
              },
              {
                ...IMG.a2dBacklogView,
                alt: 'Bed release perspective on the example day of 10 July 2025, filtered on medium and long OR holds: eight cases from transfer clearance through “bed released” (55 minutes later on average) and collection from the PACU (another 22 minutes) to handover to the ward; before that, the handovers from ORs 1, 3 and 4 to PACU staff',
                caption: 'Backlog chain: late bed release and collection – PACU bays stay occupied.',
              },
              {
                ...IMG.a2dBacklogCause,
                alt: 'Minerva cause picture “Why does the OR hold arise?”: a ward bed not yet released (two conspicuous waits for ward 2 of 2 hours 39 minutes and 3 hours 7 minutes) and a delayed collection despite a released bed (59 minutes for ward 1) keep patients ready for transfer in the PACU; PACU capacity stays tied up, and OR holds block OR 1 for 59, OR 3 for 42 and OR 4 for 60 minutes – 2 hours 41 minutes in total',
                caption: 'Cause picture: patients cannot leave the operating room – holds of 59, 42 and 60 minutes.',
              },
            ],
            deepDive: {
              title: 'Four triggers, one consequence',
              prompt: 'Summarise the causes of the cancellations for lack of time.',
              text: [
                'Four triggers lead to the same consequence: following procedures slip back and the remaining capacity of the day shrinks. When it is no longer sufficient, the next planned procedure is cancelled for lack of time.',
              ],
              points: [
                { title: 'Incomplete preparation', text: 'Completed before transport or OR entry → later start.' },
                { title: 'Occupied PACU / missing bed', text: 'The patient cannot be transferred → later exit from the OR.' },
                { title: 'Emergency add-on case', text: 'The planned sequence and the available capacity change.' },
                { title: 'Batched bed releases', text: 'Patients ready for transfer stay longer in the PACU.' },
              ],
              images: [
                {
                  ...IMG.a2dFourTriggers,
                  alt: 'Minerva cause diagram: incomplete preparation leads, via completion before transport or OR entry, to a later first or follow-up start; an occupied PACU leads, via the OR hold, to a later exit from the room and later turnover; an emergency add-on changes sequence and capacity; all three reduce the remaining capacity of the day until a planned procedure can no longer start and is cancelled for lack of time',
                  caption: 'Minerva: triggers of a delay chain that ends in a cancellation for lack of time.',
                },
                {
                  ...IMG.a2dBedReleaseChain,
                  alt: 'Minerva cause diagram on bed release: a regularly late start of bed releases – possibly an organisational release threshold, alternatively batched documentation or a technical time stamp – means ward beds are missing for patients ready for transfer; the patient stays in the PACU despite medical clearance, another 15 to 16 minutes pass after the bed release until collection, the PACU bay stays occupied, the next handover from the OR has to wait and the patient remains in the OR: hold and blocked room',
                  caption: 'Minerva: batched bed releases carry the backlog all the way to a blocked operating room.',
                },
              ],
            },
            note: {
              title: 'The cancellation happens at the end of the day. The cascade begins in the morning.',
            },
          },
        ],

        aiContext: {
          heading: 'Why AI needs causal process mining',
          lead:
            'Generative AI can summarise patterns and formulate measures quickly. In the OR example it would immediately have derived three measures from the raw comparisons: train team C, optimise OR 4, add staff to the PACU. None of them would have hit the cause.',
          blocks: [
            {
              title: 'Process data alone does not provide meaning',
              text: [
                'System data shows values and events: a timestamp for the bed release, a reason for late preparation, an ASA class. But it does not automatically explain what a feature means in business terms – for example that an ASA III/IV induction may take longer, that a change of specialty requires a different set-up, or that wards release their beds according to fixed routines.',
                'Company context adds this meaning. Causal process mining then tests how features, process behaviour and outcomes are connected across cases and resources. Minerva combines these layers in a dialogue and makes the analysis accessible to the user.',
              ],
              quote: 'Process data provides the facts. Company context provides the meaning. Causal process mining tests the cause hypotheses.',
            },
            {
              title: 'Changing a process on the basis of the right analysis',
              text: [
                'For AI-supported process decisions, four things are therefore decisive: the right business granularity, relationships between patients, resources and events, company context, and an analysis that does not rashly interpret correlations as causes.',
              ],
              quote: 'Changing a process on the basis of the wrong analysis does not make it better – only wrong faster.',
            },
          ],
          image: {
            ...IMG.minervaAgentsVsLlm,
            alt: 'Overview “What Minerva agents do that an LLM alone cannot”: architecture, agents and skills, configurability, evidenced answers, governance, context, causality and a continuous 24/7 loop',
            caption: 'What Minerva agents do that an LLM alone cannot.',
          },
          note: 'Causal process mining creates the analytical basis. Minerva makes it usable in dialogue.',
        },

        takeaways: {
          heading: 'What causal process mining changes here',
          lead: [
            'Classic process mining is very good at showing what happens: variants, cycle times, waiting times, repetitions and deviations. The why additionally requires business logic, context and cross-case relationships.',
            'The healthcare case shows four things that a pure KPI or single-case analysis easily overlooks:',
          ],
          items: [
            {
              title: 'Correlation is not automatically causation',
              text: 'Team C, OR 4 and PACU staffing show how tempting raw comparisons are.',
            },
            {
              title: 'The affected case does not necessarily carry its own cause',
              text: 'The cancellation may have been set up by preceding cases or other patients.',
            },
            {
              title: 'Shared resources connect cases',
              text: 'Operating room, PACU bay and ward bed create dependencies across case boundaries.',
            },
            {
              title: 'Not every finding needs a measure',
              text: 'Some causes are prioritised, others investigated further or discarded.',
            },
          ],
        },

        measures: {
          heading: 'From finding to prioritised measure',
          lead:
            'A finding does not change a process yet. After the analysis, the process owner decides which insights are actually worked on. In the Business Impact Board, findings are assessed by expected impact, implementation effort, risk and uncertainty; process excellence and the responsible department jointly prioritise which decision hypothesis is piloted.',
          tableHeading: 'Possible improvement directions',
          items: [
            {
              finding: 'Bed release and PACU backlog',
              measure: 'Review the bed release process together with the wards',
              benefit: 'OR holds, blocked OR capacity, cancellations',
            },
            {
              finding: 'Preoperative preparation',
              measure: 'Complete preparation fully before the patient is called up',
              benefit: 'First-case punctuality, knock-on delays',
            },
            {
              finding: 'Incomplete preparation (31.3%)',
              measure: 'Check checklist, premedication, informed consent and lab tests before call-up',
              benefit: 'Late-preparation rate, nursing workload, punctuality',
            },
            {
              finding: 'Specialty changes in OR 4',
              measure: 'Bundle scheduling by specialty and plan unavoidable changes realistically',
              benefit: 'Turnover time, end of the OR day, cancellations',
            },
            {
              finding: 'Team C and PACU staffing',
              measure: 'No measure – spurious correlation; keep monitoring the patient mix and the bed bottleneck',
              benefit: 'Uncertainty',
            },
          ],
          image: {
            ...IMG.a2dImpactBoard,
            alt: 'Business Impact Board with four findings from the OR case in the impact/effort matrix: F-001 on preparation only on the day of surgery and F-002 on the 107 surgeries cancelled for lack of time as strategic, F-004 on the high turnover times in OR 4 as a quick win, and F-003 “Suspicion not confirmed: team C induces more slowly” as low priority',
            caption: 'Business Impact Board: from finding to prioritised option for action.',
          },
          note: 'Prioritisation is a business decision. Minerva prepares analysis paths, context and options for action; control and decision-making authority remain traceable with the process owner and the responsible department at all times.',
        },

        loop: {
          heading: 'The loop: Insight → Action → Impact → Feedback',
          lead:
            'After prioritisation, a measure is piloted and its effect is measured again using the same process data. Minerva Frontier Agents can accompany this control loop continuously: detecting new findings, developing hypotheses further and observing the effect of measures implemented.',
          steps: [
            { step: 'Insight', text: 'Preparation and PACU/bed mechanisms contribute to visible capacity losses in the OR.' },
            { step: 'Action', text: 'Stabilise preparation before call-up; address the cause of late bed releases organisationally.' },
            { step: 'Impact', text: 'Measure first-case punctuality, holds, blocked OR capacity, cancellations and the end of the OR day again.' },
            { step: 'Feedback', text: 'If implementation does not show the expected effect, the cause hypothesis is reviewed and adjusted.' },
          ],
          questions: [
            'Do more first surgeries start within 15 minutes of plan?',
            'Does the share of preparation completed late fall – and on which wards?',
            'Do OR holds and blocked OR capacity decrease?',
            'Are fewer procedures cancelled for lack of time?',
            'Do fewer surgeries end after the planned end of the OR day at 15:30?',
            'Does the bottleneck merely shift elsewhere between ward, OR, PACU and bed?',
          ],
        },

        principlesHeading: 'Four principles for the analysis',
        principles: [
          {
            title: 'Preserve granularity',
            text: 'Patient, operating room, PACU bay and bed stay connected instead of reducing the process to a linear case up front.',
          },
          {
            title: 'Start with the business question',
            text: 'The causal perspective is built for the concrete business question – end-to-end, preparation, surgery, PACU and bed, or the OR day.',
          },
          {
            title: 'Cross-check correlations',
            text: 'A conspicuous raw comparison is a starting point, not yet a root cause.',
          },
          {
            title: 'Look beyond the single case',
            text: 'Shared resources connect cases; the cause may lie with a different patient.',
          },
        ],

        conclusion: {
          heading: 'Conclusion: optimising only the OR treats the symptom',
          text: [
            'Conspicuous KPIs alone are not sufficient steering logic. Team C looks slower, OR 4 stands out for its turnover times, and reduced PACU staffing correlates with more holds. Anyone who derives measures from this straight away may only be optimising the most visible symptom.',
            'Causal process mining connects process data, business relationships, shared resources and cross-case dependencies. The OR example shows: preparation completed late destabilises the start of the day. Ward beds released late or in batches tie up PACU bays and carry the backlog into the OR. Delays carry over from procedure to procedure through preceding cases.',
            '“Optimise the OR” thus becomes a more concrete task: stabilise preparation, look at bed and PACU processes together, understand cross-case cascades – and then measure whether the measures actually create more stability and capacity.',
          ],
          claim: 'Don’t just see where the delay occurs. Understand where it arises. Prioritise causes. Measure the effect.',
        },

        faq: [
          {
            question: 'What is admission-to-discharge?',
            answer:
              'Admission-to-discharge is a patient’s end-to-end process in hospital, from admission to discharge. Noreja shows it on the surgical patient pathway: preoperative preparation on the ward, patient call-up and transport, anaesthesia induction and surgery, emergence and leaving the operating room, care in the recovery room (PACU) and the transfer to a ward or the intensive care unit. Patients, operating rooms, PACU bays and ward beds are connected through shared resources.',
          },
          {
            question: 'What is the perioperative patient pathway?',
            answer:
              'The perioperative patient pathway – also called the surgical patient pathway – is the end-to-end process around a surgical procedure: preoperative preparation and clearance, patient call-up and transport, induction and surgery, emergence and leaving the operating room, care in the recovery room (PACU) and the transfer to a ward or the intensive care unit.',
          },
          {
            question: 'What is an OR hold?',
            answer:
              'In an OR hold, a patient cannot leave the operating room after surgery because the recovery room (PACU) is full. The room stays tied up and the next procedure starts later. In the synthetic demo dataset, 431 surgeries are affected by an OR hold, adding up to 374.1 hours of blocked OR capacity – a figure that is not automatically avoidable one to one.',
          },
          {
            question: 'Why are surgeries cancelled for lack of time?',
            answer:
              '“Lack of time” is the documented reason, not the cause. In the OR case, 107 of 143 cancelled procedures are cancelled for lack of time, spread across 95 OR days. Three delay patterns recur: preparation completed late before surgery, OR holds after surgery, and delays from preceding cases that carry over to the following procedures. The cause may have arisen hours earlier and with a different patient.',
          },
          {
            question: 'Why does the first surgery of the day start late?',
            answer:
              'In the demo dataset mainly because preparation has to be completed late. With preparation completed late, only 26.3% of first procedures start on time; without it, 91.8% do. Overall, preparation is completed late in 752 of 2,400 cases (31.3%), taking about 45 minutes on average; the documented reasons are an incomplete checklist, premedication, informed consent and lab tests.',
          },
          {
            question: 'Does the PACU need more staff if more OR holds occur with reduced staffing?',
            answer:
              'Not necessarily. The hold rate is 40.5% with reduced and 14.5% with full staffing. The cross-check shows, however, that the PACU is occupied because patients ready for transfer are waiting for a ward bed – for about an hour on average in both staffing groups. The bottleneck lies further down the resource chain, at the bed release.',
          },
          {
            question: 'How are bed management and OR capacity connected?',
            answer:
              'Through the recovery room. If a ward does not release a bed, a patient ready for transfer stays in the PACU; if the PACU is full, the next patient cannot leave the operating room. In the demo dataset, it takes 19.3 minutes on average from transfer clearance to bed release on ward 1, 45.6 on ward 3 and 66.9 on ward 2, while the transport takes 15–16 minutes everywhere.',
          },
          {
            question: 'What is a delay cascade in the OR?',
            answer:
              'A cascade arises when a late start carries over from procedure to procedure because several procedures use the same operating room one after another. In the example of OR 4 on 25 November 2025, the checklist is completed late for the first procedure; the cases start 33, 74 and 110 minutes late, and the fourth planned procedure is cancelled for lack of time. The cancellation happens at the end of the day, the cascade begins in the morning.',
          },
          {
            question: 'Is an anaesthesia team with longer induction times slower?',
            answer:
              'Not in the demo dataset. Team C needs 29.7 minutes on average for induction, team A 18.7 and team B 18.3. But team C mainly cares for the severe cases: 88.2% of its patients belong to ASA classes III–IV. With comparable patients by ASA class, team C is just as fast – a spurious correlation, not a cause.',
          },
          {
            question: 'What data does the analysis of the surgical patient pathway need?',
            answer:
              'In the demo setup, 26 tables from 5 systems are combined in one event knowledge graph – for example the patient case, checklist, room occupancy, anaesthesia induction and emergence, patient transport, PACU stay and bed release. Patient, surgical case, operating room, PACU bay, bed and ward stay connected; a causal perspective is only derived for the concrete business question.',
          },
          {
            question: 'What role does the AI assistant Minerva play?',
            answer:
              'Minerva answers business questions in dialogue – such as “Analyse why surgeries were cancelled.” –, builds comparison groups, includes preceding surgeries and shared resources, and separates evidenced findings from cause hypotheses. The decision on measures stays with the process owner and the responsible department.',
          },
          {
            question: 'Are the figures from a real hospital?',
            answer:
              'No. All figures come from a synthetic perioperative dataset of 2,400 surgical cases. They illustrate the analysis method and are not production figures of any hospital.',
          },
        ],

        caseHeading: 'The full case description',
        caseText:
          'Event knowledge graph, the causal perspectives for preparation, surgery and PACU, all five findings with their analysis steps, the root cause analysis of the cancellations with Minerva and the way into the Business Impact Board – step by step in the Noreja Help Center (in German).',
        caseCta: 'Read the case in the Help Center',
      },
    },
  },
];

export function getEndToEndProcessById(id: string): EndToEndProcess | undefined {
  return endToEndProcesses.find((process) => process.id === id.toLowerCase());
}
