import type { Language } from './translations';
import type { routes } from './routes';

/**
 * FAQ content for the /faq hub.
 *
 * This is the single source of truth for every question the site answers
 * outside the glossary. The pricing page used to carry its own copy in
 * translations.ts; those entries moved here (marked `showOnPricing`) so the
 * hub and the pricing page can never drift apart.
 */

export type FaqCategoryId =
  | 'product'
  | 'method'
  | 'implementation'
  | 'pricing'
  | 'security'
  | 'company';

export interface FaqLink {
  label: { de: string; en: string };
  /** Internal route, resolved per language via getRoutePath */
  routeKey?: keyof typeof routes;
  params?: Record<string, string>;
  /** External target, used when routeKey is absent */
  href?: string;
}

export interface FaqItem {
  /** Stable anchor id, shared across languages */
  id: string;
  category: FaqCategoryId;
  question: { de: string; en: string };
  answer: { de: string; en: string };
  /** Rendered below the answer as follow-up links */
  links?: FaqLink[];
  /** Also rendered in the pricing page's FAQ block */
  showOnPricing?: boolean;
  /** Optional illustration keyed by the page's badge map */
  badge?: 'gartner';
}

export interface FaqCategory {
  id: FaqCategoryId;
  label: { de: string; en: string };
  intro: { de: string; en: string };
}

export const faqCategories: FaqCategory[] = [
  {
    id: 'product',
    label: { de: 'Produkt & Technologie', en: 'Product & technology' },
    intro: {
      de: 'Was Noreja ist, worauf die Plattform aufbaut und welche Systeme sie anbindet.',
      en: 'What Noreja is, what the platform is built on, and which systems it connects to.',
    },
  },
  {
    id: 'method',
    label: { de: 'Methodik & Abgrenzung', en: 'Methodology & differentiation' },
    intro: {
      de: 'Der Unterschied zwischen kausaler Process Intelligence und frequenzbasiertem Process Mining.',
      en: 'The difference between causal process intelligence and frequency-based process mining.',
    },
  },
  {
    id: 'implementation',
    label: { de: 'Einführung & Betrieb', en: 'Implementation & operations' },
    intro: {
      de: 'Wie ein Projekt startet, wie lange es dauert und welches Wissen im Team nötig ist.',
      en: 'How a project starts, how long it takes, and what knowledge your team needs.',
    },
  },
  {
    id: 'pricing',
    label: { de: 'Lizenzen & Preise', en: 'Licensing & pricing' },
    intro: {
      de: 'Pakete, Laufzeiten, Auf- und Abstufungen – Noreja veröffentlicht seine Preise.',
      en: 'Packages, terms, upgrades and downgrades – Noreja publishes its prices.',
    },
  },
  {
    id: 'security',
    label: { de: 'Daten, Hosting & Sicherheit', en: 'Data, hosting & security' },
    intro: {
      de: 'Wo die Daten liegen, wie sie geschützt sind und wie private LLMs betrieben werden.',
      en: 'Where the data lives, how it is protected, and how private LLMs are operated.',
    },
  },
  {
    id: 'company',
    label: { de: 'Unternehmen & Auszeichnungen', en: 'Company & recognition' },
    intro: {
      de: 'Wer hinter Noreja steht, welche Partner es gibt und wie Analysten die Lösung einordnen.',
      en: 'Who is behind Noreja, which partners exist, and how analysts assess the solution.',
    },
  },
];

export const faqItems: FaqItem[] = [
  // ---------------------------------------------------------------- product
  {
    id: 'what-is-noreja',
    category: 'product',
    question: {
      de: 'Was ist Noreja?',
      en: 'What is Noreja?',
    },
    answer: {
      de: 'Noreja ist eine Generative-Process-Intelligence-Plattform der Noreja Intelligence GmbH. Sie verbindet sich direkt mit den Quellsystemen eines Unternehmens, modelliert die Prozesse in einem Event Knowledge Graph und deckt dort echte Ursache-Wirkungs-Beziehungen auf, statt nur Aktivitätsreihenfolgen zu zählen. Auf diesem Modell setzen Analysen, Dashboards und die KI-Komponente Minerva auf.',
      en: 'Noreja is a Generative Process Intelligence platform built by Noreja Intelligence GmbH. It connects directly to a company’s source systems, models processes in an Event Knowledge Graph, and uncovers genuine cause-and-effect relationships there instead of merely counting activity sequences. Analyses, dashboards, and the Minerva AI layer all build on that model.',
    },
    links: [{ label: { de: 'Zur Plattform', en: 'Explore the platform' }, routeKey: 'functionalities' }],
  },
  {
    id: 'event-knowledge-graph',
    category: 'product',
    question: {
      de: 'Was ist ein Event Knowledge Graph und warum nutzt Noreja ihn?',
      en: 'What is an Event Knowledge Graph and why does Noreja use one?',
    },
    answer: {
      de: 'Ein Event Knowledge Graph speichert Ereignisse, Objekte und ihre Beziehungen als Graph statt als flache Tabelle. Dadurch muss ein Prozess nicht auf eine einzige Fall-ID reduziert werden: Bestellung, Lieferung, Rechnung und Kunde bleiben eigenständige Objekte mit ihren Verknüpfungen. Genau diese Struktur erlaubt es Noreja, mehrdimensionale Prozesse abzubilden und kausale Zusammenhänge zu rekonstruieren.',
      en: 'An Event Knowledge Graph stores events, objects, and their relationships as a graph instead of a flat table. A process therefore does not have to be squeezed into a single case ID: order, delivery, invoice, and customer stay separate objects with their links intact. That structure is what lets Noreja represent multidimensional processes and reconstruct causal relationships.',
    },
    links: [
      {
        label: { de: 'Definition: Event Knowledge Graph', en: 'Definition: Event Knowledge Graph' },
        routeKey: 'definitionDetail',
        params: { slug: 'event-knowledge-graph' },
      },
    ],
  },
  {
    id: 'source-systems',
    category: 'product',
    question: {
      de: 'Welche Quellsysteme kann Noreja anbinden?',
      en: 'Which source systems can Noreja connect to?',
    },
    answer: {
      de: 'Noreja ist quellsystem-agnostisch und liest direkt aus den Datenbanken der operativen Systeme. Angebunden werden unter anderem ERP-Systeme wie SAP, Microsoft Dynamics, Oracle, proAlpha, Sage oder Odoo, Service- und Ticketsysteme wie ServiceNow und Jira sowie Datenbanken und Warehouses wie PostgreSQL, MS SQL, MySQL, Snowflake, BigQuery oder Redshift. Weil kein vorgefertigter Event Log nötig ist, lassen sich auch mehrere Systeme zu einem End-to-End-Prozess zusammenführen.',
      en: 'Noreja is source-system agnostic and reads directly from the databases of operational systems. Connections include ERP systems such as SAP, Microsoft Dynamics, Oracle, proAlpha, Sage, and Odoo, service and ticketing systems such as ServiceNow and Jira, and databases and warehouses such as PostgreSQL, MS SQL, MySQL, Snowflake, BigQuery, and Redshift. Because no pre-built event log is required, several systems can also be merged into a single end-to-end process.',
    },
    links: [{ label: { de: 'Zur Plattform', en: 'Explore the platform' }, routeKey: 'functionalities' }],
  },
  {
    id: 'minerva-agents',
    category: 'product',
    question: {
      de: 'Was sind die Minerva Frontier Agents?',
      en: 'What are the Minerva Frontier Agents?',
    },
    answer: {
      de: 'Minerva Frontier Agents sind kontextbewusste KI-Agenten auf der Noreja-Plattform. Sie überwachen Prozesse laufend, pflegen die Prozessmodelle und melden Abweichungen, Änderungen an Datenquellen sowie Compliance-Risiken. Weil sie auf dem kausalen Prozessmodell arbeiten, sind ihre Hinweise an konkrete Ursachen im Prozess gebunden und nicht an bloße Auffälligkeiten in Kennzahlen.',
      en: 'Minerva Frontier Agents are context-aware AI agents on the Noreja platform. They continuously monitor processes, maintain the process models, and flag deviations, data-source changes, and compliance risks. Because they operate on the causal process model, their findings are tied to concrete causes inside the process rather than to mere anomalies in a metric.',
    },
    links: [{ label: { de: 'Zu den Frontier Agents', en: 'About Frontier Agents' }, routeKey: 'aiAgents' }],
  },
  {
    id: 'use-cases',
    category: 'product',
    question: {
      de: 'Für welche Anwendungsfälle und Branchen eignet sich Noreja?',
      en: 'Which use cases and industries is Noreja suited for?',
    },
    answer: {
      de: 'Noreja wird überall dort eingesetzt, wo Prozesse über mehrere Systeme und Objekte laufen. Ausgearbeitete Anwendungsfälle gibt es für Supply Chain (Lieferantenperformance, Working Capital, Qualität und Compliance), Produktion (Shop-Floor-Optimierung, Bedarfs- und Output-Prognosen, Lagerverwaltung), Versicherungen (Customer Journey, Partnersteuerung, Reservenanpassung) und Banken (KYC und Compliance, Kreditkartenantrag, Kontoeröffnung und Onboarding).',
      en: 'Noreja is used wherever processes span several systems and objects. Worked-out use cases exist for supply chain (supplier performance, working capital, quality and compliance), manufacturing (shop-floor optimization, demand and output forecasting, warehouse management), insurance (customer journey, partner steering, reserve adjustments), and banking (KYC and compliance, credit card applications, account opening and onboarding).',
    },
    links: [{ label: { de: 'Success Stories ansehen', en: 'See success stories' }, routeKey: 'successStories' }],
  },

  // ----------------------------------------------------------------- method
  {
    id: 'causal-process-mining',
    category: 'method',
    question: {
      de: 'Was ist Causal Process Mining und wie unterscheidet es sich von klassischem Process Mining?',
      en: 'What is Causal Process Mining and how does it differ from classic process mining?',
    },
    answer: {
      de: 'Klassisches Process Mining zählt, welcher Schritt auf welchen folgt (Directly-Follows) – das ist eine Häufigkeit, keine Ursache. Causal Process Mining prüft stattdessen, ob ein Schritt einen anderen tatsächlich auslöst oder ob beide von einer dritten Größe abhängen, etwa unvollständigen Stammdaten. Erst diese Unterscheidung zeigt, wo eine Maßnahme überhaupt wirken kann. Noreja baut die Analyse vollständig auf diesem kausalen Modell auf.',
      en: 'Classic process mining counts which step follows which (directly-follows) – that is a frequency, not a cause. Causal Process Mining instead tests whether one step actually triggers another, or whether both depend on a third factor such as incomplete master data. Only that distinction shows where an intervention can work at all. Noreja builds its entire analysis on this causal model.',
    },
    links: [
      {
        label: { de: 'Definition: Causal Process Mining', en: 'Definition: Causal Process Mining' },
        routeKey: 'definitionDetail',
        params: { slug: 'causal-process-mining' },
      },
    ],
  },
  {
    id: 'no-event-logs',
    category: 'method',
    question: {
      de: 'Warum braucht Noreja keine Event Logs?',
      en: 'Why does Noreja not need event logs?',
    },
    answer: {
      de: 'Ein Event Log zwingt jeden Prozess in eine flache Tabelle mit einer Fall-ID – und genau dessen Erstellung verschlingt bei herkömmlichen Lösungen häufig 80 % der Projektzeit. Noreja liest die Daten stattdessen direkt aus den Quellsystemen und überführt sie in den Event Knowledge Graph. Damit entfallen die aufwendigen Datentransformationen, und Informationen, die ein Event Log wegwerfen müsste, bleiben erhalten.',
      en: 'An event log forces every process into a flat table with a single case ID – and building it often consumes 80% of project time with conventional tools. Noreja instead reads the data directly from the source systems and maps it into the Event Knowledge Graph. That removes the costly data transformations, and information an event log would have to discard is preserved.',
    },
    links: [
      {
        label: { de: 'Definition: Event Log', en: 'Definition: Event log' },
        routeKey: 'definitionDetail',
        params: { slug: 'event-log' },
      },
    ],
  },
  {
    id: 'vs-competitors',
    category: 'method',
    question: {
      de: 'Wie unterscheidet sich Noreja von Celonis, Signavio und anderen Anbietern?',
      en: 'How does Noreja differ from Celonis, Signavio, and other vendors?',
    },
    answer: {
      de: 'Der Unterschied liegt nicht in Konnektoren oder Dashboards, sondern im Analyse-Paradigma: Die etablierten Plattformen arbeiten mit frequenzbasierten Directly-Follows-Modellen auf Event Logs, Noreja rekonstruiert Ursache-Wirkungs-Beziehungen auf einem Event Knowledge Graph. Dazu kommen die Unabhängigkeit vom ERP- oder Plattform-Stack und ein öffentlich einsehbares Pricing. Die Battle Cards vergleichen zehn Anbieter im Detail.',
      en: 'The difference lies not in connectors or dashboards but in the analysis paradigm: established platforms work with frequency-based directly-follows models on event logs, while Noreja reconstructs cause-and-effect relationships on an Event Knowledge Graph. Add to that independence from any ERP or platform stack and publicly available pricing. The battle cards compare ten vendors in detail.',
    },
    links: [{ label: { de: 'Zu den Battle Cards', en: 'See the battle cards' }, routeKey: 'battleCards' }],
  },

  // --------------------------------------------------------- implementation
  {
    id: 'proof-of-value',
    category: 'implementation',
    showOnPricing: true,
    question: {
      de: 'Bietet Noreja einen Proof-Of-Value an, um die Technologie kennenzulernen?',
      en: 'Does Noreja offer a Proof-Of-Value to get to know the technology?',
    },
    answer: {
      de: 'Ja, 85% der Kunden starten mit einem initialen Proof-Of-Value, welchen Noreja zu einem sehr günstigen Fixpreis anbietet. Dabei wird sich i.d.R. auf einen Teilprozess fokussiert, den Noreja innerhalb von 3 bis 4 Wochen anbindet, importiert, analysiert und erste Optimierungspotenziale aufdeckt. Nach dem Proof-Of-Value sind 60% der Datenanbindung bereits erledigt, sodass anschließend in wenigen Tagen eine Operationalisierung stattfinden kann.',
      en: 'Yes, 85% of customers start with an initial Proof-Of-Value, which Noreja offers at a very affordable fixed price. This typically focuses on a sub-process that Noreja connects, imports, analyzes, and reveals initial optimization potential within 3 to 4 weeks. After the Proof-Of-Value, 60% of the data integration is already completed, so operationalization can take place within a few days.',
    },
  },
  {
    id: 'time-to-value',
    category: 'implementation',
    question: {
      de: 'Wie lange dauert es, bis Noreja produktiv Ergebnisse liefert?',
      en: 'How long does it take until Noreja delivers results?',
    },
    answer: {
      de: 'Ein Proof-Of-Value auf einem Teilprozess ist in der Regel nach 3 bis 4 Wochen abgeschlossen – inklusive Anbindung, Import, Analyse und ersten Optimierungspotenzialen. Da damit bereits rund 60 % der Datenanbindung stehen, dauert die anschließende Operationalisierung meist nur noch wenige Tage. Den größten Zeitgewinn bringt der Verzicht auf Event Logs, weil die sonst übliche Datentransformation entfällt.',
      en: 'A Proof-Of-Value on a sub-process is usually finished within 3 to 4 weeks – including connection, import, analysis, and the first optimization potentials. Since roughly 60% of the data integration is then already in place, operationalization typically takes only a few more days. The biggest time saver is doing without event logs, which removes the data transformation step entirely.',
    },
  },
  {
    id: 'process-mining-experts',
    category: 'implementation',
    showOnPricing: true,
    question: {
      de: 'Brauche ich dedizierte Process Mining Experten, um Noreja nutzen zu können?',
      en: 'Do I need dedicated Process Mining experts to use Noreja?',
    },
    answer: {
      de: 'Nein. Es werden keine expliziten Process Mining Experten benötigt, um Noreja nutzen zu können. Eine Besonderheit hierbei ist, dass Noreja keine Event-Logs verwendet, sodass keine aufwendigen Datentransformationen nötig sind, die bei herkömmlichen Lösungen häufig 80% der Zeit in Anspruch nehmen.',
      en: 'No. No explicit Process Mining experts are needed to use Noreja. A special feature here is that Noreja does not use event logs, so no complex data transformations are necessary, which often take up 80% of the time with conventional solutions.',
    },
  },
  {
    id: 'documentation-training',
    category: 'implementation',
    showOnPricing: true,
    question: {
      de: 'Gibt es Dokumentation und Schulungsangebote parallel zur Lizenz für den Wissenstransfer?',
      en: 'Is there documentation and training available alongside the license for knowledge transfer?',
    },
    answer: {
      de: 'Ja, die Noreja-Plattform hat eine eigene KI-gestützte Dokumentation, auf die zugegriffen werden kann. Zudem bieten wir im Zuge der Lizenzperiode auch regelmäßige 1:1 Tool-Schulungen an, sodass mit der Zeit jeder Detail der Lösung durchdrungen werden kann.',
      en: 'Yes, the Noreja platform has its own AI-powered documentation that can be accessed. In addition, we offer regular 1:1 tool training sessions throughout the license period, so that over time, every detail of the solution can be understood.',
    },
  },

  // ---------------------------------------------------------------- pricing
  {
    id: 'package-choice',
    category: 'pricing',
    showOnPricing: true,
    question: {
      de: 'Woher weiß ich, welches Paket (z.B. in Bezug auf die Datenmenge) ich wählen muss?',
      en: 'How do I know which package (e.g., regarding data volume) I should choose?',
    },
    answer: {
      de: 'Den genauen Bedarf ermitteln wir gerne gemeinsam in einem Gespräch. Eine optimale Entscheidungsgrundlage bietet hierfür unser Proof-Of-Value, dessen Ergebnis eine gute Einschätzung zur benötigter Datenmenge und zum Servicebedarf ermöglicht.',
      en: 'We are happy to determine the exact requirements together in a conversation. Our Proof-Of-Value provides an optimal basis for decision-making, the results of which enable a good assessment of the required data volume and service needs.',
    },
  },
  {
    id: 'base-package',
    category: 'pricing',
    showOnPricing: true,
    question: {
      de: 'Was genau ist im Basispaket enthalten und wie laufen die inkludierten Workshops ab?',
      en: 'What exactly is included in the base package and how do the included workshops work?',
    },
    answer: {
      de: 'Das Basispaket beinhaltet Features, Service-Leistungen und KI-Komponenten. Unter Features versteht man konkrete Software-Bestandteile, die ein Anwender auf der Plattform nutzen kann. Die Service-Leistungen inkludieren mehrere Workshops (Tagesworkshop à 8h), die Vor-Ort beim Kunden mit ein bis zwei Noreja-Experten durchgeführt werden (Reisekosten inkludiert). Zudem werden (Bi-)Weekly Online-Sessions eingeplant, in welchen die Kunden Unterstützung bei der Nutzung der Plattform aber auch der Identifizierung neuer Use Cases erhalten.',
      en: 'The base package includes features, service offerings, and AI components. Features refer to concrete software components that a user can use on the platform. The service offerings include several workshops (day workshop of 8h), which are conducted on-site at the customer’s location with one to two Noreja experts (travel costs included). In addition, (bi-)weekly online sessions are scheduled, in which customers receive support in using the platform as well as in identifying new use cases.',
    },
  },
  {
    id: 'setup-fee',
    category: 'pricing',
    showOnPricing: true,
    question: {
      de: 'Gibt es eine initiale Setup-Fee?',
      en: 'Is there an initial setup fee?',
    },
    answer: {
      de: 'Grundsätzlich gibt es keine generelle Setup-Fee. Die Datenanbindung kann auch eigenständig bzw. im Zuge der inkludierten Data-Onboarding Workshops stattfinden. Häufig macht es aber Sinn, sich beim initialen Setup Unterstützung zu holen, um Quellsysteme effizient und fehlerfrei anzubinden. Dies kann durch die Noreja selbst oder einen unserer Partner erfolgen.',
      en: 'In principle there is no general setup fee. The data integration can be carried out independently or as part of the included data onboarding workshops. It often makes sense, however, to get support for the initial setup so that source systems are connected efficiently and without errors. This can be done by Noreja itself or by one of our partners.',
    },
  },
  {
    id: 'upgrade-downgrade',
    category: 'pricing',
    showOnPricing: true,
    question: {
      de: 'Wie funktioniert der Herauf- oder Herabstufung in andere Lizenzpakete?',
      en: 'How does upgrading or downgrading to other license packages work?',
    },
    answer: {
      de: 'Prinzipiell werden Jahreslizenzen in bestimmten Preispaketkombinationen abgeschlossen. Eine Herabstufung in kleinere Preiskategorien ist im Anschluss an das Lizenzjahr möglich. Besteht der Bedarf in höhere Preiskategorien aufzusteigen – z.B., weil mehr Daten importiert werden sollen, so kann dies jederzeit geschehen. Allerdings werden niemals automatisch und ohne Rücksprache Preise erhöht. Dies geschieht immer im Dialog mit dem Kunden.',
      en: 'In principle, annual licenses are concluded in certain price package combinations. A downgrade to smaller price categories is possible after the license year. If there is a need to move up to higher price categories - e.g., because more data should be imported - this can happen at any time. However, prices are never automatically increased without consultation. This always happens in dialogue with the customer.',
    },
  },
  {
    id: 'package-limit',
    category: 'pricing',
    showOnPricing: true,
    question: {
      de: 'Was passiert, wenn ich das Limit in einem Paket überschreite?',
      en: 'What happens if I exceed the limit in a package?',
    },
    answer: {
      de: 'Sollte die Kapazität der Datenmenge oder der benötigten Dimensionen nicht ausreichen kann entweder proaktiv mit der Noreja Kontakt aufgenommen werden, oder aber die Noreja meldet sich nach überschreiten der Grenzwerte und sucht das Gespräch.',
      en: 'If the capacity of the data volume or the required dimensions is not sufficient, either Noreja can be contacted proactively, or Noreja will contact you after exceeding the limits and seek a conversation.',
    },
  },
  {
    id: 'license-renewal',
    category: 'pricing',
    showOnPricing: true,
    question: {
      de: 'Wie funktioniert die Lizenzverlängerung?',
      en: 'How does license renewal work?',
    },
    answer: {
      de: 'Der Lizenzvertrag wird auf Jahresbasis abgeschlossen. Laut abgeschlossenem Vertrag verlängert sich die Lizenz dabei automatisch, wenn nicht rechtzeitig gekündigt wird; Allerdings wird auch hier niemals eine stillschweigende Verlängerung durchgeführt, ohne vorab mit dem Kunden über die Verlängerung zu sprechen.',
      en: 'The license contract is concluded on an annual basis. According to the signed contract, the license is automatically renewed if it is not canceled in time; However, a silent renewal is never carried out without first speaking with the customer about the renewal.',
    },
  },
  {
    id: 'cancellation',
    category: 'pricing',
    showOnPricing: true,
    question: {
      de: 'Wie kann ich den Lizenzvertrag kündigen?',
      en: 'How can I cancel the license contract?',
    },
    answer: {
      de: 'Der Lizenzvertrag kann mit einer Frist von einem Monat zum Vertragsende jederzeit gekündigt werden.',
      en: 'The license contract can be canceled at any time with a notice period of one month before the end of the contract.',
    },
  },
  {
    id: 'additional-consulting',
    category: 'pricing',
    showOnPricing: true,
    question: {
      de: 'Kann ich die Noreja auch für zusätzliche bzw. begleitende Beratung buchen?',
      en: 'Can I also book Noreja for additional or accompanying consulting?',
    },
    answer: {
      de: 'Ja, jedes Paket enthält eine Tagesrate, die genutzt werden kann, um zusätzliche Beratung, die über die inkludierten Workshops und regelmäßigen Sessions hinausgehen, zu buchen. Die Rate unterscheidet sich zwischen den Basispaketen.',
      en: 'Yes, each package contains a daily rate that can be used to book additional consulting that goes beyond the included workshops and regular sessions. The rate differs between the base packages.',
    },
  },
  {
    id: 'power-users',
    category: 'pricing',
    showOnPricing: true,
    question: {
      de: 'Was sind Power-User und wie unterscheiden sie sich von herkömmlichen Nutzern?',
      en: 'What are power users and how do they differ from regular users?',
    },
    answer: {
      de: 'Als Power-User bezeichnen wir einen Anwender, der auf der Noreja-Plattform Rechte zum Builder, Manager, Analyzer sowie den weiteren Admin-Funktionen hat. Ausgenommen sind hier lesende Nutzer des Dashboards oder Minerva-AI.',
      en: 'A power user is a user who holds rights to the Builder, Manager, Analyzer, and the other admin functions on the Noreja platform. Read-only users of the dashboard or of Minerva AI are not counted as power users.',
    },
  },
  {
    id: 'llm-token-costs',
    category: 'pricing',
    showOnPricing: true,
    question: {
      de: 'Können für genutzte LLM-Token zusätzliche Kosten entstehen?',
      en: 'Can additional costs arise for the LLM tokens used?',
    },
    answer: {
      de: 'Grundsätzlich sind die LLM-Token für alle Power-User inkludiert. Sollte es den Bedarf nach einer erhöhten Anzahl an lesenden bzw. konsumierenden Nutzern geben, müssen wir die Kosten weiterreichen. In diesem Fall sprechen wir dich explizit an.',
      en: 'In principle, LLM tokens are included for all power users. If there is a need for a larger number of reading or consuming users, we have to pass those costs on. In that case we will address it with you explicitly.',
    },
  },

  // --------------------------------------------------------------- security
  {
    id: 'data-hosting',
    category: 'security',
    showOnPricing: true,
    question: {
      de: 'Wo werden meine Daten gehostet?',
      en: 'Where is my data hosted?',
    },
    answer: {
      de: 'Die Daten werden bei der Google Cloud und Amazon AWS in Frankfurt gehostet. Aufgrund vollständiger Mandanten-Trennung kann auf Wunsch aber auch in anderen Cloud-Regionen oder On-Prem gehostet werden. Bei On-Prem entstehen allerdings Zusatzaufwände.',
      en: 'The data is hosted at Google Cloud and Amazon AWS in Frankfurt. Due to complete tenant separation, hosting can also be done in other cloud regions or on-premises upon request. However, on-premises hosting incurs additional costs.',
    },
  },
  {
    id: 'data-protection',
    category: 'security',
    showOnPricing: true,
    question: {
      de: 'Wie geht Noreja mit Datenschutz und IT-Security um?',
      en: 'How does Noreja handle data protection and IT security?',
    },
    answer: {
      de: 'Die Noreja ist ISO27001 zertifiziert und legt großen Wert auf Datensicherheit. Im Footer dieser Webseite befindet sich unser Trust Center, wo alle Informationen eingesehen werden können.',
      en: 'Noreja is ISO27001 certified and places great emphasis on data security. Our Trust Center can be found in the footer of this website, where all information can be viewed.',
    },
  },
  {
    id: 'private-llm-hosting',
    category: 'security',
    showOnPricing: true,
    question: {
      de: 'Wie kann ich mir das private LLM-Hosting vorstellen?',
      en: 'What does private LLM hosting look like?',
    },
    answer: {
      de: 'Das private LLM-Hosting erfolgt durch den Betrieb einer eigenen und vollständig isolierten Umgebung bei einem beliebigen Cloud-Anbieter (z.B. Amazon AWS). Die Noreja setzt dabei ein beliebiges LLM (z.B. Mistral, Deepseek, Gemma, Qwen3, etc.) auf, auf welches ausschließlich der Kunde Zugriff erhält.',
      en: 'Private LLM hosting is implemented by operating your own fully isolated environment at any cloud provider (e.g., Amazon AWS). Noreja sets up any LLM (e.g., Mistral, Deepseek, Gemma, Qwen3, etc.) that only the customer can access.',
    },
  },

  // ---------------------------------------------------------------- company
  {
    id: 'analyst-recognition',
    category: 'company',
    badge: 'gartner',
    question: {
      de: 'Wurde Noreja bereits von Analysten ausgezeichnet?',
      en: 'Has Noreja been recognized by analysts?',
    },
    answer: {
      de: 'Ja. Noreja wurde 2026 von Gartner in „Coolest Vendor Innovations in Process Intelligence“ ausgezeichnet. Die Auszeichnung bestätigt unabhängig, was den Ansatz von klassischen Process-Mining-Werkzeugen unterscheidet: die kausale Analyse von Prozessen auf einem Event Knowledge Graph statt frequenzbasierter Directly-Follows-Modelle.',
      en: 'Yes. In 2026 Gartner recognized Noreja in “Coolest Vendor Innovations in Process Intelligence”. The recognition independently confirms what sets the approach apart from classic process mining tools: causal analysis of processes on an Event Knowledge Graph instead of frequency-based directly-follows models.',
    },
    links: [
      {
        label: { de: 'Zur Gartner-Veröffentlichung', en: 'Read the Gartner publication' },
        href: 'https://www.gartner.com/en/documents/8319453',
      },
    ],
  },
  {
    id: 'g2-reviews',
    category: 'company',
    question: {
      de: 'Wurde Noreja auf G2.com bewertet?',
      en: 'Has Noreja been reviewed on G2.com?',
    },
    answer: {
      de: 'Ja. Noreja Process Intelligence wurde auf der Bewertungsplattform G2 bewertet. Die Bewertungen stammen von Nutzerinnen und Nutzern der Plattform und sind dort öffentlich einsehbar.',
      en: 'Yes. Noreja Process Intelligence has been reviewed on the software review platform G2. The reviews come from users of the platform and are publicly available there.',
    },
    links: [
      {
        label: { de: 'Noreja auf G2.com ansehen', en: 'See Noreja on G2.com' },
        href: 'https://www.g2.com/products/noreja-process-intelligence/',
      },
    ],
  },
  {
    id: 'who-is-behind-noreja',
    category: 'company',
    question: {
      de: 'Wer steht hinter Noreja?',
      en: 'Who is behind Noreja?',
    },
    answer: {
      de: 'Hinter der Plattform steht die Noreja Intelligence GmbH mit Sitz in Hohenweiler in Österreich, geführt von Philipp Waibel und Lukas Pfahlsberger. Das Team verbindet Forschung zu Process Mining und Graphtechnologien mit der Entwicklung der Plattform und begleitet Kunden in Workshops und regelmäßigen Sessions bei der Umsetzung.',
      en: 'The platform is built by Noreja Intelligence GmbH, based in Hohenweiler, Austria, and led by Philipp Waibel and Lukas Pfahlsberger. The team combines research on process mining and graph technology with platform development, and supports customers through workshops and regular sessions.',
    },
    links: [{ label: { de: 'Zum Team', en: 'Meet the team' }, routeKey: 'team' }],
  },
  {
    id: 'partner-companies',
    category: 'company',
    showOnPricing: true,
    question: {
      de: 'Gibt es auch Partnerunternehmen, die mich bei der Nutzung von Noreja begleiten können?',
      en: 'Are there partner companies that can support me in using Noreja?',
    },
    answer: {
      de: 'Ja, Noreja hat zahlreiche Partner bei Beratungen, Systemintegratoren oder Universitäten, die bei Bedarf Services am und mit Noreja Process Intelligence begleiten können. Mehr dazu gibt es im Hauptmenü unter Partner.',
      en: 'Yes, Noreja has numerous partners among consultancies, system integrators, or universities who can provide services with and for Noreja Process Intelligence as needed. You can find more information in the main menu under Partners.',
    },
    links: [{ label: { de: 'Zu den Partnern', en: 'See the partners' }, routeKey: 'partners' }],
  },
];

/** Items shown in the pricing page's own FAQ block, in source order. */
export const pricingFaqItems = faqItems.filter((item) => item.showOnPricing);

/** Flat question/answer pairs for a language — used for the FAQPage schema. */
export function getFaqPairs(items: FaqItem[], language: Language) {
  return items.map((item) => ({
    question: item.question[language],
    answer: item.answer[language],
  }));
}

export function getFaqItemsByCategory(category: FaqCategoryId): FaqItem[] {
  return faqItems.filter((item) => item.category === category);
}
