import type { TopTenContent } from '../topTenLists';

export const celonisAlternatives: TopTenContent = {
  id: 'celonis-alternatives',
  metaTitle: {
    de: 'Top 10 Celonis-Alternativen 2027 im Vergleich',
    en: 'Top 10 Celonis Alternatives 2027 Compared',
  },
  metaDescription: {
    de: 'Die 10 besten Celonis-Alternativen 2027: Noreja, SAP Signavio, UiPath, Microsoft, ARIS, IBM, QPR, Apromore, mpmX und ABBYY – mit Einordnung, wann Celonis besser passt.',
    en: 'The 10 best Celonis alternatives for 2027: Noreja, SAP Signavio, UiPath, Microsoft, ARIS, IBM, QPR, Apromore, mpmX and ABBYY – and when Celonis remains the better fit.',
  },
  intro: {
    de: 'Celonis ist der Pionier des Process-Mining-Markts, bietet die größte Auswahl an vorgefertigten Konnektoren und ist 2026 erneut Leader im Gartner® Magic Quadrant™ für Process Intelligence Platforms. Eine Alternative lohnt sich dennoch, wenn Pricing auf Anfrage, mehrmonatige Einführungen, die Bindung an ein bestimmtes Ökosystem oder ein rein frequenzbasiertes Analysemodell nicht zum eigenen Bedarf passen. Diese Liste ordnet die zehn wichtigsten Celonis-Alternativen ein und nennt bei jeder ehrlich, wann Celonis die bessere Wahl bleibt. Sie spiegelt den Marktstand im Oktober 2026 und blickt auf 2027.',
    en: 'Celonis pioneered the process mining market, offers the largest selection of pre-built connectors and was again named a Leader in the 2026 Gartner® Magic Quadrant™ for Process Intelligence Platforms. An alternative still makes sense when pricing on request, multi-month rollouts, dependence on a specific ecosystem or a purely frequency-based analysis model do not fit your needs. This list ranks the ten most relevant Celonis alternatives and states honestly for each one when Celonis remains the better choice. It reflects the market as of October 2026, with an outlook on 2027.',
  },
  criteria: {
    de: [
      {
        title: 'Time-to-Value',
        text: 'Wie schnell liefert das Werkzeug belastbare Erkenntnisse – und wie viel Datenextraktion und Plattform-Rollout gehen dem voraus?',
      },
      {
        title: 'Analyse-Paradigma',
        text: 'Bildet die Lösung nur Reihenfolgen und Häufigkeiten ab oder rekonstruiert sie Ursache-Wirkungs-Beziehungen? Davon hängt ab, wie belastbar Maßnahmen und KI-Empfehlungen sind.',
      },
      {
        title: 'Ökosystem-Passung',
        text: 'Passt das Werkzeug zur vorhandenen Landschaft aus ERP, Automatisierung und Datenplattform – oder setzt es einen bestimmten Hersteller-Stack voraus?',
      },
      {
        title: 'Kostentransparenz',
        text: 'Sind Pakete und Preise öffentlich nachvollziehbar, und lässt sich mit einem abgegrenzten Prozess statt mit einem unternehmensweiten Programm starten?',
      },
    ],
    en: [
      {
        title: 'Time to value',
        text: 'How quickly does the tool deliver reliable insights – and how much data extraction and platform rollout has to come first?',
      },
      {
        title: 'Analysis paradigm',
        text: 'Does the solution only depict sequences and frequencies, or does it reconstruct cause-and-effect relationships? That determines how reliable measures and AI recommendations are.',
      },
      {
        title: 'Ecosystem fit',
        text: 'Does the tool fit the existing landscape of ERP, automation and data platform – or does it presuppose a specific vendor stack?',
      },
      {
        title: 'Cost transparency',
        text: 'Are packages and prices publicly traceable, and can you start with one scoped process instead of an enterprise-wide program?',
      },
    ],
  },
  entries: [
    {
      name: 'Noreja',
      vendor: 'Noreja Intelligence GmbH',
      isNoreja: true,
      battleCardId: 'celonis',
      definitionId: 'causal-process-mining',
      bestFor: {
        de: 'Kausale Ursachenanalyse, schneller Start',
        en: 'Causal root-cause analysis, fast start',
      },
      summary: {
        de: 'Wo Celonis Prozesse aus extrahierten Event Logs und Directly-Follows-Häufigkeiten aufbaut, verbindet Noreja die relationalen Quellsysteme direkt über ihre Primär- und Fremdschlüssel in einem Event Knowledge Graph. Darauf rekonstruiert die Plattform kausale und zeitliche Zusammenhänge – und unterscheidet, ob eine Abweichung ein legitimer Prozesspfad oder ein Fehlermuster ist.',
        en: 'Where Celonis builds processes from extracted event logs and directly-follows frequencies, Noreja connects relational source systems directly via their primary and foreign keys in an Event Knowledge Graph. On top of it the platform reconstructs causal and temporal relationships – and distinguishes whether a deviation is a legitimate process path or an error pattern.',
      },
      highlights: {
        de: [
          'Kausales und temporales Modell statt reiner Häufigkeiten von Aktivitätsfolgen',
          'Einstieg prozessweise per abgegrenztem Proof-of-Value, mit öffentlich einsehbarem Pricing',
          'Minerva und Workbench mit freier LLM-Wahl – lokal, privat gehostet oder in der Cloud',
        ],
        en: [
          'Causal and temporal model instead of mere frequencies of activity sequences',
          'Start process by process with a scoped proof-of-value and publicly listed pricing',
          'Minerva and Workbench with free LLM choice – local, privately hosted or cloud',
        ],
      },
      consider: {
        de: 'Wer sofort eine sehr breite Palette vorgefertigter Konnektoren, Standard-KPIs und Prozess-Apps für viele Prozesse gleichzeitig braucht, findet bei Celonis die größere Auswahl.',
        en: 'If you need a very broad range of pre-built connectors, standard KPIs and process apps for many processes at once, Celonis offers the larger selection.',
      },
    },
    {
      name: 'SAP Signavio',
      vendor: 'SAP',
      battleCardId: 'sap-signavio',
      bestFor: {
        de: 'SAP-zentrierte Landschaften',
        en: 'SAP-centric landscapes',
      },
      summary: {
        de: 'Für Unternehmen, deren Prozesse überwiegend in SAP laufen, ist Signavio die naheliegendste Alternative: Die Anbindung an SAP-Quellsysteme ist weitgehend vorkonfiguriert, und Mining, Modellierung und Prozess-Governance liegen in einer Suite. Seit Februar 2026 ergänzen allgemein verfügbare Joule Agents die Prozessanalyse.',
        en: 'For organizations whose processes run mostly in SAP, Signavio is the most obvious alternative: connectivity to SAP source systems is largely pre-configured, and mining, modeling and process governance sit in one suite. Since February 2026, generally available Joule Agents support process analysis.',
      },
      highlights: {
        de: [
          'Tiefe, weitgehend vorkonfigurierte Anbindung an SAP-Quellsysteme',
          'Durchgängige Suite von der Modellierung über das Mining bis zur Conformance',
          'Leader im Gartner Magic Quadrant 2026 – nach Herstellerangaben zum vierten Mal in Folge',
        ],
        en: [
          'Deep, largely pre-configured connectivity to SAP source systems',
          'End-to-end suite from modeling through mining to conformance',
          'Leader in the 2026 Gartner Magic Quadrant – according to the vendor, for the fourth year running',
        ],
      },
      consider: {
        de: 'In heterogenen Landschaften mit vielen Nicht-SAP-Quellen bleibt Celonis mit seiner breiteren Konnektorauswahl oft die flexiblere Wahl.',
        en: 'In heterogeneous landscapes with many non-SAP sources, Celonis with its broader connector selection often remains the more flexible choice.',
      },
    },
    {
      name: 'UiPath Process Mining',
      vendor: 'UiPath',
      battleCardId: 'uipath-process-mining',
      bestFor: {
        de: 'Mining direkt in Automatisierung überführen',
        en: 'Turning mining into automation',
      },
      summary: {
        de: 'UiPath eignet sich als Alternative, wenn die Analyse vor allem Automatisierungskandidaten liefern soll. Process Mining, Task Mining und Communications Mining speisen direkt die Entwicklung und den Betrieb von Software-Robotern, und mit Maestro orchestriert UiPath Agenten, Roboter und Menschen in BPMN-Prozessen.',
        en: 'UiPath works as an alternative when analysis is mainly meant to surface automation candidates. Process mining, task mining and communications mining feed directly into building and running software robots, and with Maestro UiPath orchestrates agents, robots and people in BPMN processes.',
      },
      highlights: {
        de: [
          'Nahtloser Übergang von der Analyse in die RPA- und Agenten-Umsetzung',
          'Kombinierte Sicht auf System-, Desktop- und Kommunikationsdaten',
          'Integrierte Governance und ROI-Tracking für Automatisierungsvorhaben',
        ],
        en: [
          'Seamless transition from analysis to RPA and agent implementation',
          'Combined view of system, desktop and communication data',
          'Integrated governance and ROI tracking for automation initiatives',
        ],
      },
      consider: {
        de: 'Steht die breite Prozessdiagnose über viele Systeme im Vordergrund statt der Automatisierung, ist Celonis analytisch umfassender aufgestellt.',
        en: 'If broad process diagnosis across many systems matters more than automation, Celonis is analytically more comprehensive.',
      },
    },
    {
      name: 'Microsoft Power Automate Process Mining',
      vendor: 'Microsoft',
      battleCardId: 'microsoft-process-mining',
      bestFor: {
        de: 'Niedriger Einstieg im Microsoft-Stack',
        en: 'Low-barrier entry on Microsoft stack',
      },
      summary: {
        de: 'Microsoft bringt Process Mining in die vertraute Power Platform. Wer ohnehin mit Power Automate, Power BI und Microsoft 365 arbeitet, startet ohne neues Werkzeug, mit Low-Code-Oberflächen und Abfragen in natürlicher Sprache. Das macht die Lösung zur zugänglichsten Alternative für Teams, die Process Mining zunächst erproben wollen.',
        en: 'Microsoft brings process mining into the familiar Power Platform. If you already work with Power Automate, Power BI and Microsoft 365, you can start without a new tool, with low-code interfaces and natural-language queries. That makes it the most accessible alternative for teams that want to try process mining first.',
      },
      highlights: {
        de: [
          'Enge Integration mit Azure, Power BI und Microsoft 365',
          'Niedrige Einstiegshürde durch Low-Code und bekannte Oberflächen',
          'Konversationelle Abfragen über integrierte Sprachmodelle',
        ],
        en: [
          'Tight integration with Azure, Power BI and Microsoft 365',
          'Low entry barrier through low-code and familiar interfaces',
          'Conversational queries via integrated language models',
        ],
      },
      consider: {
        de: 'Für tiefe Analysen großer, systemübergreifender ERP-Prozesse jenseits der Kapazitäts- und Speicherkontingente der Power Platform bleibt Celonis die leistungsfähigere Wahl.',
        en: 'For deep analysis of large, cross-system ERP processes beyond the capacity and storage quotas of the Power Platform, Celonis remains the more powerful choice.',
      },
    },
    {
      name: 'ARIS Process Mining',
      vendor: 'ARIS',
      battleCardId: 'aris-process-mining',
      bestFor: {
        de: 'Conformance gegen governte Soll-Modelle',
        en: 'Conformance against governed models',
      },
      summary: {
        de: 'ARIS ist die Alternative für Organisationen, die ihre Prozesse bereits im ARIS-Repository modellieren und verwalten. Das Mining vergleicht beobachtete Ist-Abläufe laufend mit den governten Soll-Modellen, und Process Core dient als Digital Twin von Prozessen, Rollen, Regeln und Kontrollen – auch als Leitplanke für KI-Agenten.',
        en: 'ARIS is the alternative for organizations that already model and govern their processes in the ARIS repository. Mining continuously compares observed as-is flows with the governed to-be models, and Process Core serves as a digital twin of processes, roles, rules and controls – also as guardrails for AI agents.',
      },
      highlights: {
        de: [
          'Enge Kopplung von Mining und governtem Modell-Repository (BPMN, EPK)',
          'KI-gestützter Root-Cause-Miner zur Korrelation von Verzögerungsfaktoren',
          'Leader im Gartner Magic Quadrant 2026 für Process Intelligence Platforms',
        ],
        en: [
          'Tight coupling of mining and the governed model repository (BPMN, EPC)',
          'AI-supported root-cause miner correlating delay factors',
          'Leader in the 2026 Gartner Magic Quadrant for Process Intelligence Platforms',
        ],
      },
      consider: {
        de: 'Ohne gepflegtes ARIS-Repository entfällt der Kernvorteil – dann bietet Celonis den direkteren, datengetriebenen Einstieg.',
        en: 'Without a maintained ARIS repository the core advantage falls away – Celonis then offers the more direct, data-driven entry.',
      },
    },
    {
      name: 'IBM Process Mining',
      vendor: 'IBM',
      battleCardId: 'ibm-process-mining',
      bestFor: {
        de: 'Regulierte Branchen, On-Premises-Betrieb',
        en: 'Regulated industries, on-premises',
      },
      summary: {
        de: 'IBM Process Mining ist eine Alternative für Unternehmen mit strengen Anforderungen an Datenresidenz und Betrieb. Die Lösung lässt sich On-Premises und hybrid betreiben, unterstützt objektzentriertes Process Mining und ergänzt die Analyse um datengestützte What-if-Simulation sowie einen LLM-gestützten Assistenten auf Basis von watsonx.',
        en: 'IBM Process Mining is an alternative for organizations with strict requirements on data residency and operations. It can run on-premises and in hybrid setups, supports object-centric process mining and adds data-driven what-if simulation plus an LLM-powered assistant based on watsonx.',
      },
      highlights: {
        de: [
          'On-Premises- und Hybrid-Betrieb für regulierte Branchen',
          'Objektzentrierte Analyse statt starrer Einzelfall-Sicht',
          'What-if-Simulation und prädiktive, präskriptive Empfehlungen',
        ],
        en: [
          'On-premises and hybrid operation for regulated industries',
          'Object-centric analysis instead of a rigid single-case view',
          'What-if simulation and predictive, prescriptive recommendations',
        ],
      },
      consider: {
        de: 'Wer keine IBM-Automatisierungssuite einsetzt und eine breite Bibliothek fertiger Prozess-Apps sucht, ist mit Celonis meist schneller am Ziel.',
        en: 'If you do not use the IBM automation suite and want a broad library of ready-made process apps, Celonis usually gets you there faster.',
      },
    },
    {
      name: 'QPR ProcessAnalyzer',
      vendor: 'QPR Software',
      bestFor: {
        de: 'Process Mining nativ in Snowflake',
        en: 'Process mining native in Snowflake',
      },
      summary: {
        de: 'Der finnische Anbieter QPR führt sein Process Mining nativ in Snowflake aus – die Daten bleiben damit auf der vorhandenen Datenplattform. ProcessAnalyzer verbindet Process Mining, Prozessmodellierung und objektzentriertes Process Mining und stellt seine Ergebnisse seit April 2026 über eine MCP-Schnittstelle auch KI-Agenten wie Claude, ChatGPT oder Microsoft Copilot zur Verfügung.',
        en: 'Finnish vendor QPR runs its process mining natively in Snowflake, so the data stays on the existing data platform. ProcessAnalyzer combines process mining, process modeling and object-centric process mining, and since April 2026 has exposed its results to AI agents such as Claude, ChatGPT or Microsoft Copilot through an MCP interface.',
      },
      highlights: {
        de: [
          'Läuft nativ in Snowflake, ohne separate Mining-Datenhaltung',
          'MCP-Schnittstelle für KI-Agenten seit April 2026',
          'Visionary im Gartner Magic Quadrant 2026 – zum vierten Mal in Folge',
        ],
        en: [
          'Runs natively in Snowflake, without separate mining data storage',
          'MCP interface for AI agents since April 2026',
          'Visionary in the 2026 Gartner Magic Quadrant – for the fourth year running',
        ],
      },
      consider: {
        de: 'Ohne Snowflake als Datenplattform und bei Bedarf an einem großen Enablement- und Partner-Ökosystem bietet Celonis die breitere Basis.',
        en: 'Without Snowflake as the data platform, or when you need a large enablement and partner ecosystem, Celonis offers the broader foundation.',
      },
    },
    {
      name: 'Apromore',
      vendor: 'Salesforce',
      bestFor: {
        de: 'Salesforce- und Agentforce-Umgebungen',
        en: 'Salesforce and Agentforce environments',
      },
      summary: {
        de: 'Apromore ging aus der Process-Mining-Forschung hervor und gehört inzwischen zu Salesforce, das damit Process Intelligence mit seiner Agentforce-Plattform verbinden will. Die Lösung deckt Process und Task Mining, Digital-Twin-Simulation, Ursachenanalyse und Compliance-Monitoring ab.',
        en: 'Apromore grew out of process mining research and is now part of Salesforce, which aims to connect process intelligence with its Agentforce platform. The solution covers process and task mining, digital-twin simulation, root-cause analysis and compliance monitoring.',
      },
      highlights: {
        de: [
          'Process und Task Mining in einer Lösung',
          'Digital-Twin-Simulation von Prozessänderungen vor der Umsetzung',
          'Strategische Anbindung an Salesforce Agentforce für agentische Automatisierung',
        ],
        en: [
          'Process and task mining in one solution',
          'Digital-twin simulation of process changes before implementation',
          'Strategic link to Salesforce Agentforce for agentic automation',
        ],
      },
      consider: {
        de: 'Liegt der Schwerpunkt auf ERP-Prozessen außerhalb der Salesforce-Welt, bietet Celonis die ausgereiftere Anbindung an Transaktionssysteme.',
        en: 'If the focus is on ERP processes outside the Salesforce world, Celonis offers more mature connectivity to transactional systems.',
      },
    },
    {
      name: 'mpmX',
      vendor: 'MEHRWERK',
      battleCardId: 'mpmx-mehrwerk',
      bestFor: {
        de: 'Self-Service auf Qlik, Snowflake, Databricks',
        en: 'Self-service on Qlik, Snowflake, Databricks',
      },
      summary: {
        de: 'mpmX des deutschen Anbieters MEHRWERK verlagert Process Mining auf die Datenplattform, die ein Unternehmen ohnehin betreibt: Aufbereitung, Speicherung und Mining laufen nativ auf Qlik, Snowflake oder Databricks. Objektzentriertes Process Mining gehört zum Standardumfang, und datenaffine Fachbereiche können im Self-Service starten.',
        en: 'mpmX from German vendor MEHRWERK moves process mining onto the data platform a company already runs: preparation, storage and mining run natively on Qlik, Snowflake or Databricks. Object-centric process mining is part of the standard scope, and data-savvy departments can start in self-service.',
      },
      highlights: {
        de: [
          'Datenplattform-nativ statt eigener Mining-Infrastruktur',
          'Objektzentriertes Process Mining löst n:m-Beziehungen zwischen Objekten auf',
          'Teil des Gartner Magic Quadrant 2026 für Process Intelligence Platforms',
        ],
        en: [
          'Data-platform-native instead of separate mining infrastructure',
          'Object-centric process mining resolves n:m relationships between objects',
          'Included in the 2026 Gartner Magic Quadrant for Process Intelligence Platforms',
        ],
      },
      consider: {
        de: 'Ohne Qlik, Snowflake oder Databricks im Haus fehlt die Grundlage – dann ist Celonis als eigenständige Plattform der einfachere Weg.',
        en: 'Without Qlik, Snowflake or Databricks in-house the foundation is missing – Celonis as a standalone platform is then the simpler path.',
      },
    },
    {
      name: 'ABBYY Timeline',
      vendor: 'ABBYY',
      battleCardId: 'abbyy-timeline',
      bestFor: {
        de: 'Dokumentenintensive Prozesse',
        en: 'Document-intensive processes',
      },
      summary: {
        de: 'ABBYY Timeline verbindet Task und Process Mining mit ABBYYs Herkunft in der Dokumentenverarbeitung. Die Lösung erschließt Kontext aus Dokumenten und E-Mails und eignet sich damit für Abläufe, in denen viel Information unstrukturiert vorliegt – etwa in regulierten Antrags- oder Schadenprozessen.',
        en: 'ABBYY Timeline combines task and process mining with ABBYY’s heritage in document processing. It surfaces context from documents and emails and therefore suits workflows where much of the information is unstructured – for example regulated application or claims processes.',
      },
      highlights: {
        de: [
          'Starke Extraktion von Dokumenten- und E-Mail-Kontext',
          'Ursachen- und Compliance-Auswertungen für regulierte Abläufe',
          'KI-gestützte Prozessvorhersage und Simulation auf Basis historischer Muster',
        ],
        en: [
          'Strong extraction of document and email context',
          'Root-cause and compliance evaluations for regulated workflows',
          'AI-supported process prediction and simulation from historical patterns',
        ],
      },
      consider: {
        de: 'Für strukturierte, transaktionsgetriebene ERP-Prozesse ohne Dokumentenschwerpunkt ist Celonis die naheliegendere Wahl.',
        en: 'For structured, transaction-driven ERP processes without a document focus, Celonis is the more obvious choice.',
      },
    },
  ],
  trends: {
    de: [
      {
        title: 'Vom Plattform-Rollout zum Proof-of-Value',
        text: 'Budgets für Process Mining werden 2027 stärker an schnell nachweisbaren Ergebnissen gemessen. Werkzeuge, die mit einem abgegrenzten Prozess starten und transparente Pakete bieten, gewinnen gegenüber unternehmensweiten Programmen an Gewicht.',
      },
      {
        title: 'Kausalität statt Korrelation',
        text: 'Je mehr KI-Agenten auf Basis von Prozessdaten Empfehlungen geben, desto wichtiger wird, ob ein Modell Ursachen oder nur zeitliche Nähe abbildet. Frequenzbasierte Prozessgraphen geraten dabei an ihre Grenzen.',
      },
      {
        title: 'Process Intelligence als Kontext für Agenten',
        text: 'Mit MCP-Schnittstellen und Agenten-Plattformen wie Agentforce, Copilot oder Joule wird Process Mining zur Kontextquelle für KI. Entscheidend ist, wie vollständig das Datenmodell Objekte, Beziehungen und Unternehmenswissen abbildet.',
      },
    ],
    en: [
      {
        title: 'From platform rollout to proof-of-value',
        text: 'In 2027, process mining budgets will be measured more strictly against results that can be shown quickly. Tools that start with one scoped process and offer transparent packages gain ground against enterprise-wide programs.',
      },
      {
        title: 'Causation instead of correlation',
        text: 'The more AI agents make recommendations based on process data, the more it matters whether a model captures causes or only temporal proximity. Frequency-based process graphs reach their limits here.',
      },
      {
        title: 'Process intelligence as context for agents',
        text: 'With MCP interfaces and agent platforms such as Agentforce, Copilot or Joule, process mining becomes a context source for AI. What counts is how completely the data model captures objects, relationships and enterprise knowledge.',
      },
    ],
  },
  faq: [
    {
      question: {
        de: 'Wer sind die wichtigsten Wettbewerber von Celonis?',
        en: 'Who are Celonis’ main competitors?',
      },
      answer: {
        de: 'Im Gartner Magic Quadrant 2026 für Process Intelligence Platforms stehen neben Celonis unter anderem SAP Signavio, ARIS, Pegasystems, UiPath, Microsoft, IBM, ServiceNow, Appian, QPR, iGrafx, mpmX und Salesforce (Apromore). Hinzu kommen spezialisierte Anbieter wie Noreja mit kausaler Process Intelligence oder ABBYY Timeline für dokumentenintensive Prozesse.',
        en: 'Besides Celonis, the 2026 Gartner Magic Quadrant for Process Intelligence Platforms includes SAP Signavio, ARIS, Pegasystems, UiPath, Microsoft, IBM, ServiceNow, Appian, QPR, iGrafx, mpmX and Salesforce (Apromore). Specialized vendors add to this, such as Noreja with causal process intelligence or ABBYY Timeline for document-intensive processes.',
      },
    },
    {
      question: {
        de: 'Wann lohnt sich eine Alternative zu Celonis?',
        en: 'When does an alternative to Celonis make sense?',
      },
      answer: {
        de: 'Vor allem dann, wenn ein schneller, abgegrenzter Einstieg wichtiger ist als eine breite Plattform, wenn das Budget transparente Preise verlangt oder wenn die Analyse Ursachen statt nur Häufigkeiten liefern soll. Auch eine starke Bindung an SAP, Microsoft, Salesforce oder eine bestimmte Datenplattform spricht oft für die jeweils passende Alternative.',
        en: 'Mainly when a fast, scoped start matters more than a broad platform, when the budget calls for transparent pricing, or when analysis should deliver causes rather than just frequencies. A strong commitment to SAP, Microsoft, Salesforce or a specific data platform also often favors the matching alternative.',
      },
    },
    {
      question: {
        de: 'Gibt es eine Open-Source-Alternative zu Celonis?',
        en: 'Is there an open-source alternative to Celonis?',
      },
      answer: {
        de: 'Ja, mit ProM und der Python-Bibliothek PM4Py gibt es etablierte Open-Source-Werkzeuge aus der Forschung. Sie eignen sich gut für Lehre, Experimente und Data-Science-Teams, bieten aber keine Enterprise-Konnektoren, keinen Betrieb und keinen Support – die Datenextraktion und -aufbereitung liegt vollständig beim eigenen Team.',
        en: 'Yes – ProM and the Python library PM4Py are established open-source tools from research. They work well for teaching, experiments and data science teams, but offer no enterprise connectors, operations or support – data extraction and preparation rest entirely with your own team.',
      },
    },
    {
      question: {
        de: 'Welche Celonis-Alternative passt zu SAP-Landschaften?',
        en: 'Which Celonis alternative suits SAP landscapes?',
      },
      answer: {
        de: 'In SAP-dominierten Landschaften ist SAP Signavio wegen der vorkonfigurierten SAP-Anbindung die naheliegendste Wahl. Wer SAP- und Nicht-SAP-Daten in einem Modell analysieren will, ohne den Analysewert an eine S/4HANA-Transformation zu knüpfen, sollte Noreja prüfen: Es verbindet die Objekte über die Schlüsselbeziehungen der Quellsysteme hinweg in einem Event Knowledge Graph.',
        en: 'In SAP-dominated landscapes, SAP Signavio is the most obvious choice thanks to its pre-configured SAP connectivity. If you want to analyze SAP and non-SAP data in one model without tying analytical value to an S/4HANA transformation, consider Noreja: it connects objects across source systems via their key relationships in one Event Knowledge Graph.',
      },
    },
    {
      question: {
        de: 'Ist Noreja günstiger als Celonis?',
        en: 'Is Noreja cheaper than Celonis?',
      },
      answer: {
        de: 'Noreja veröffentlicht seine Pakete und Preise auf der Website, während Celonis Preise auf Anfrage nennt – ein direkter Vergleich ist daher nur über ein konkretes Angebot möglich. Der Einstieg über einen abgegrenzten Proof-of-Value hält die Anfangsinvestition bei Noreja planbar.',
        en: 'Noreja publishes its packages and prices on its website, while Celonis quotes prices on request – a direct comparison is therefore only possible with a concrete offer. Starting with a scoped proof-of-value keeps Noreja’s initial investment predictable.',
      },
    },
  ],
};
