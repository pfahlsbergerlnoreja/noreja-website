import type { TopTenContent } from '../topTenLists';

export const processIntelligencePlatforms: TopTenContent = {
  id: 'process-intelligence-platforms',
  metaTitle: {
    de: 'Top 10 Process-Intelligence-Plattformen 2027 im Vergleich',
    en: 'Top 10 Process Intelligence Platforms 2027 Compared',
  },
  metaDescription: {
    de: 'Die besten Process-Intelligence-Plattformen 2027: Noreja, Celonis, SAP Signavio, Pega & mehr – mit Gartner-Einordnung, Kriterien und KI-Agenten-Readiness.',
    en: 'The best process intelligence platforms for 2027: Noreja, Celonis, SAP Signavio, Pega and more – with Gartner context, criteria and AI agent readiness.',
  },
  intro: {
    de: 'Die besten Process-Intelligence-Plattformen 2027 sind aus unserer Sicht Noreja, Celonis, SAP Signavio und Pega – gefolgt von ARIS, UiPath, ServiceNow, Appian, Skan AI und iGrafx. Seit Gartner seinen Magic Quadrant im Mai 2026 von „Process Mining Platforms“ in „Process Intelligence Platforms“ umbenannt hat, zählt nicht mehr nur die Prozesslandkarte, sondern ob eine Plattform Kontext liefert, KI-Agenten versorgt und Erkenntnisse in Maßnahmen überführt. Die Liste spiegelt den Stand Oktober 2026 und gibt einen Ausblick darauf, worauf es 2027 ankommt.',
    en: 'In our view, the best process intelligence platforms for 2027 are Noreja, Celonis, SAP Signavio and Pega – followed by ARIS, UiPath, ServiceNow, Appian, Skan AI and iGrafx. Since Gartner renamed its Magic Quadrant from “Process Mining Platforms” to “Process Intelligence Platforms” in May 2026, the process map alone no longer decides: what counts is whether a platform delivers context, feeds AI agents and turns insights into action. The list reflects the state of October 2026 and looks ahead to what will matter in 2027.',
  },
  criteria: {
    de: [
      {
        title: 'Kontext- und Wissensmodell',
        text: 'Wie gut verbindet das Datenmodell Ereignisse, Geschäftsobjekte, Beziehungen und Unternehmenswissen? Je reicher der Kontext, desto belastbarer die Analyse und desto tragfähiger die Grundlage für KI.',
      },
      {
        title: 'Analysetiefe',
        text: 'Erklärt die Plattform Ursachen oder zeigt sie vor allem Häufigkeiten und Reihenfolgen? Entscheidend ist, ob Abweichungen fachlich eingeordnet und Ursachen nachvollziehbar belegt werden.',
      },
      {
        title: 'KI- und Agenten-Readiness',
        text: 'Können Assistenten und Agenten auf den Prozesskontext zugreifen – intern oder über offene Schnittstellen wie das Model Context Protocol – und bleiben ihre Empfehlungen überprüfbar?',
      },
      {
        title: 'Weg zur Umsetzung und Offenheit',
        text: 'Wie schnell werden Erkenntnisse zu Maßnahmen, und gelingt das, ohne die Analyse an ein einzelnes ERP-, RPA- oder Plattform-Ökosystem zu binden?',
      },
    ],
    en: [
      {
        title: 'Context and knowledge model',
        text: 'How well does the data model connect events, business objects, relationships and enterprise knowledge? The richer the context, the more reliable the analysis and the sounder the foundation for AI.',
      },
      {
        title: 'Analytical depth',
        text: 'Does the platform explain causes, or does it mainly show frequencies and sequences? What matters is whether deviations are classified in business terms and causes are traceably evidenced.',
      },
      {
        title: 'AI and agent readiness',
        text: 'Can assistants and agents access the process context – internally or through open interfaces such as the Model Context Protocol – and do their recommendations remain verifiable?',
      },
      {
        title: 'Path to action and openness',
        text: 'How quickly do insights become actions, and does that work without tying the analysis to a single ERP, RPA or platform ecosystem?',
      },
    ],
  },
  entries: [
    {
      name: 'Noreja',
      isNoreja: true,
      definitionId: 'process-intelligence',
      bestFor: {
        de: 'Kausale Analyse mit KI-Kontext',
        en: 'Causal analysis with AI context',
      },
      summary: {
        de: 'Noreja versteht Process Intelligence als Kontextschicht: Ereignisse, Geschäftsobjekte, Beziehungen und Unternehmenswissen liegen in einem Event Knowledge Graph, auf dem die Plattform Prozesse kausal und zeitlich analysiert. Die KI-Assistentin Minerva liest diesen Graphen und das Wissen aus dem Context Hub – wahlweise mit lokalen oder Cloud-Modellen – und macht Ursachen und Empfehlungen nachvollziehbar.',
        en: 'Noreja treats process intelligence as a context layer: events, business objects, relationships and enterprise knowledge live in an Event Knowledge Graph on which the platform analyzes processes causally and temporally. The AI assistant Minerva reads this graph and the knowledge in the Context Hub – with local or cloud models – and makes causes and recommendations traceable.',
      },
      highlights: {
        de: [
          'Event Knowledge Graph als erweiterbare Wissensbasis für Analyse und unternehmensspezifische KI',
          'Minerva Agent Library mit zehn spezialisierten Analyse-Agenten und dauerhaft arbeitende Frontier Agents',
          'Quellsystem-agnostisch, freie LLM-Wahl bis On-Premises und öffentlich einsehbares Pricing',
        ],
        en: [
          'Event Knowledge Graph as an extensible knowledge base for analysis and enterprise-specific AI',
          'Minerva Agent Library with ten specialized analysis agents, plus continuously running Frontier Agents',
          'Source-system agnostic, free choice of LLMs up to on-premises, and publicly available pricing',
        ],
      },
      consider: {
        de: 'Maßnahmen werden über angebundene Systeme ausgeführt – Noreja ersetzt keine Workflow- oder RPA-Plattform, und belastbare Ergebnisse setzen saubere Zeitstempel und Identifikatoren voraus.',
        en: 'Actions are executed through connected systems – Noreja does not replace a workflow or RPA platform, and reliable results require clean timestamps and identifiers.',
      },
    },
    {
      name: 'Celonis',
      battleCardId: 'celonis',
      bestFor: {
        de: 'Große Enterprise-Transformationsprogramme',
        en: 'Large enterprise transformation programs',
      },
      summary: {
        de: 'Celonis hat den Markt geprägt und ist im Magic Quadrant for Process Intelligence Platforms 2026 als Leader positioniert. Die Plattform verbindet einen Process Intelligence Graph mit einer Orchestration Engine für automatisierte Folgeaktionen; über AgentC und einen MCP-Server stellt Celonis Prozesswissen auch externen Agenten-Plattformen bereit.',
        en: 'Celonis shaped the market and is positioned as a Leader in the 2026 Magic Quadrant for Process Intelligence Platforms. The platform combines a Process Intelligence Graph with an Orchestration Engine for automated follow-up actions; through AgentC and an MCP server, Celonis also makes process knowledge available to external agent platforms.',
      },
      highlights: {
        de: [
          'Größte Auswahl an vorgefertigten Konnektoren und eine umfangreiche Bibliothek an Prozess-Apps',
          'AgentC-Anbindung an Agenten-Plattformen, u. a. Copilot Studio, Bedrock und Agentforce',
          'Ausgereifte Schulungs- und Enablement-Programme für den Aufbau interner Teams',
        ],
        en: [
          'Largest selection of pre-built connectors and an extensive library of process apps',
          'AgentC connectivity to agent platforms, including Copilot Studio, Bedrock and Agentforce',
          'Mature training and enablement programs for building internal teams',
        ],
      },
      consider: {
        de: 'Die Modellbildung beruht auf Directly-Follows-Frequenzen, und vor der ersten belastbaren Analyse steht meist eine aufwändige Datenextraktion.',
        en: 'Model construction relies on directly-follows frequencies, and the first reliable analysis is usually preceded by labor-intensive data extraction.',
      },
    },
    {
      name: 'SAP Signavio',
      battleCardId: 'sap-signavio',
      bestFor: {
        de: 'SAP-geprägte Prozesslandschaften',
        en: 'SAP-centric process landscapes',
      },
      summary: {
        de: 'SAP Signavio verbindet Modellierung, Process Mining, Governance und Benchmarks in einer Suite und ist nach Angaben von SAP zum vierten Mal in Folge Leader im Gartner Magic Quadrant. Seit Februar 2026 sind Joule Agents für SAP Signavio allgemein verfügbar; sie unterstützen Content-Suche, Prozessanalyse, Value Cases und Onboarding.',
        en: 'SAP Signavio combines modeling, process mining, governance and benchmarks in one suite and, according to SAP, is a Leader in the Gartner Magic Quadrant for the fourth consecutive year. Joule Agents for SAP Signavio have been generally available since February 2026, supporting content discovery, process analysis, value cases and onboarding.',
      },
      highlights: {
        de: [
          'Weitgehend vorkonfigurierte Anbindung an SAP-Quellsysteme',
          'Durchgängige Suite von der Modellierung über das Mining bis zur Conformance',
          'Branchen-Benchmarks zur Einordnung der eigenen Kennzahlen',
        ],
        en: [
          'Largely pre-configured connectivity to SAP source systems',
          'End-to-end suite from modeling through mining to conformance',
          'Industry benchmarks for putting your own metrics in context',
        ],
      },
      consider: {
        de: 'Der volle Nutzen entfaltet sich vor allem in SAP-dominierten Landschaften; heterogene Nicht-SAP-Quellen erfordern zusätzlichen Integrationsaufwand.',
        en: 'Its full value unfolds primarily in SAP-dominated landscapes; heterogeneous non-SAP sources require additional integration effort.',
      },
    },
    {
      name: 'Pega Process Mining',
      vendor: 'Pegasystems',
      bestFor: {
        de: 'Analyse mit direktem App-Redesign',
        en: 'Mining tied to app redesign',
      },
      summary: {
        de: 'Pega ist im Magic Quadrant for Process Intelligence Platforms 2026 als Leader positioniert und kombiniert Process Mining, Task Mining und Prozessmodellierung in einer Plattform. Nach Herstellerangaben fließen die gewonnenen Erkenntnisse in Pega Blueprint ein, wo Prozesse simuliert, optimiert und in überarbeitete Workflows und Anwendungen überführt werden.',
        en: 'Pega is positioned as a Leader in the 2026 Magic Quadrant for Process Intelligence Platforms and combines process mining, task mining and process modeling in one platform. According to the vendor, mined insights feed into Pega Blueprint, where processes are simulated, optimized and turned into reworked workflows and applications.',
      },
      highlights: {
        de: [
          'Process Mining, Task Mining und Modellierung in einer Plattform',
          'Kurzer Weg von der Analyse zum Redesign über Pega Blueprint',
          'Positioniert als operativer Kontext für die Frage, wo KI-Agenten eingesetzt werden',
        ],
        en: [
          'Process mining, task mining and modeling in one platform',
          'Short path from analysis to redesign via Pega Blueprint',
          'Positioned as operational context for deciding where to deploy AI agents',
        ],
      },
      consider: {
        de: 'Der Weg von der Erkenntnis zur Umsetzung ist auf die Pega-Plattform ausgerichtet – in heterogenen Ausführungslandschaften lohnt eine genaue Prüfung der Integrationen.',
        en: 'The path from insight to execution is geared toward the Pega platform – in heterogeneous execution landscapes, the integrations deserve a close look.',
      },
    },
    {
      name: 'ARIS',
      battleCardId: 'aris-process-mining',
      bestFor: {
        de: 'Governance mit Soll-Modell-Abgleich',
        en: 'Governance and model conformance',
      },
      summary: {
        de: 'ARIS verbindet seine lange BPM-Tradition mit Process Mining und KI und ist nach eigenen Angaben zum vierten Mal in Folge Leader im Gartner Magic Quadrant. Mit Process Core führt ARIS einen gesteuerten digitalen Zwilling aus Prozessen, Rollen, Regeln und Kontrollen, der auch als Leitplanke für KI-Agenten dienen soll.',
        en: 'ARIS combines its long BPM heritage with process mining and AI and, according to the vendor, is a Leader in the Gartner Magic Quadrant for the fourth consecutive year. With Process Core, ARIS maintains a governed digital twin of processes, roles, rules and controls that is also meant to serve as guardrails for AI agents.',
      },
      highlights: {
        de: [
          'Enge Kopplung von Process Mining und governtem Modell-Repository',
          'Automatisierte Conformance gegen Soll-Modelle in BPMN und EPK',
          'KI-gestützter Root-Cause-Miner zur Korrelation von Verzögerungsfaktoren',
        ],
        en: [
          'Tight coupling of process mining with a governed model repository',
          'Automated conformance against to-be models in BPMN and EPC',
          'AI-supported root-cause miner correlating delay factors',
        ],
      },
      consider: {
        de: 'Die Ursachenanalyse bleibt korrelativ, und der volle Nutzen entsteht im Zusammenspiel mit der ARIS-BPM-Suite.',
        en: 'Root-cause analysis remains correlative, and the full value emerges in conjunction with the ARIS BPM suite.',
      },
    },
    {
      name: 'UiPath Process Mining',
      battleCardId: 'uipath-process-mining',
      bestFor: {
        de: 'Analyse als Startpunkt für Automatisierung',
        en: 'Discovery that feeds automation',
      },
      summary: {
        de: 'UiPath verbindet Process Mining und Task Mining mit seiner Automatisierungsplattform. Mit Maestro orchestriert UiPath Agenten, Roboter und Menschen in BPMN-Prozessen – Process Intelligence wird so zum Ausgangspunkt für agentische Automatisierung und deren Erfolgsmessung.',
        en: 'UiPath connects process mining and task mining with its automation platform. With Maestro, UiPath orchestrates agents, robots and people in BPMN processes – making process intelligence the starting point for agentic automation and for measuring its results.',
      },
      highlights: {
        de: [
          'Kombinierte Sicht auf System-, Desktop- und Kommunikationsdaten',
          'Maestro koordiniert Agenten, Roboter und Menschen in BPMN-Prozessen',
          'Integrierte Governance und ROI-Messung für Automatisierungsvorhaben',
        ],
        en: [
          'Combined view of system, desktop and communication data',
          'Maestro coordinates agents, robots and people in BPMN processes',
          'Integrated governance and ROI tracking for automation initiatives',
        ],
      },
      consider: {
        de: 'Die Analyse ist primär auf das Finden von Automatisierungskandidaten ausgerichtet; der volle Nutzen entsteht mit der UiPath-Plattform.',
        en: 'Discovery is primarily geared toward finding automation candidates; the full value emerges together with the UiPath platform.',
      },
    },
    {
      name: 'ServiceNow Process Mining',
      battleCardId: 'servicenow-process-mining',
      bestFor: {
        de: 'Service- und ITSM-Prozesse',
        en: 'Service and ITSM processes',
      },
      summary: {
        de: 'ServiceNow Process Mining läuft nativ auf der Now Platform und analysiert Service-Workflows ohne externe Datenextraktion. Mit dem Zurich-Release stehen Process und Task Mining im Kontext agentischer KI; externe Daten werden über Workflow Data Fabric vor allem für Workflows und Agenten bereitgestellt.',
        en: 'ServiceNow Process Mining runs natively on the Now Platform and analyzes service workflows without external data extraction. With the Zurich release, process and task mining sit in the context of agentic AI; external data is surfaced via Workflow Data Fabric, primarily for workflows and agents.',
      },
      highlights: {
        de: [
          'Keine externe Datenextraktion für ServiceNow-Prozesse nötig',
          'Echtzeit-KPI-Monitoring für die Einhaltung von SLAs',
          'Erkenntnisse fließen direkt in Workflows und Agenten derselben Plattform',
        ],
        en: [
          'No external data extraction needed for ServiceNow processes',
          'Real-time KPI monitoring for SLA compliance',
          'Insights flow directly into workflows and agents on the same platform',
        ],
      },
      consider: {
        de: 'Die Mining-Analyse bleibt auf Plattformprozesse fokussiert; End-to-End-Abläufe über ERP- und Backend-Systeme liegen außerhalb ihres Kerns.',
        en: 'Mining analysis stays focused on platform processes; end-to-end flows across ERP and back-end systems lie outside its core.',
      },
    },
    {
      name: 'Appian Process HQ',
      battleCardId: 'appian',
      bestFor: {
        de: 'Low-Code-Orchestrierung mit Mining',
        en: 'Low-code orchestration with mining',
      },
      summary: {
        de: 'Appian Process HQ bündelt Data Fabric, Process Mining, Machine Learning und den AI Copilot in einer geführten Analyseumgebung. Erkenntnisse lassen sich direkt in orchestrierte Workflows und Case Management derselben Low-Code-Plattform überführen.',
        en: 'Appian Process HQ bundles data fabric, process mining, machine learning and the AI Copilot in a guided analysis environment. Insights can be translated directly into orchestrated workflows and case management on the same low-code platform.',
      },
      highlights: {
        de: [
          'Kurzer Weg von der Erkenntnis zur orchestrierten Umsetzung',
          'Low-Code-Entwicklung für schnelle Prozessänderungen',
          'Orchestrierung komplexer Abläufe über mehrere Systeme hinweg',
        ],
        en: [
          'Short path from insight to orchestrated implementation',
          'Low-code development for rapid process changes',
          'Orchestration of complex workflows across multiple systems',
        ],
      },
      consider: {
        de: 'Mining ist ein Baustein der Orchestrierungsplattform, nicht ihr methodischer Kern; ein kausales, graphbasiertes Prozessmodell gehört nicht zum Umfang.',
        en: 'Mining is a building block of the orchestration platform rather than its methodical core; a causal, graph-based process model is not part of its scope.',
      },
    },
    {
      name: 'Skan AI',
      bestFor: {
        de: 'Desktop-Arbeit sichtbar machen',
        en: 'Making desktop work visible',
      },
      summary: {
        de: 'Skan AI beobachtet Arbeit direkt am Desktop: Bildschirminhalte werden lokal verarbeitet, an die Analyseplattform gehen nur anonymisierte Metadaten. Das Portfolio gliedert sich in Blueprint, Intelligence und Agents; im Februar 2026 stellte Skan die Agentic Ontology of Work vor, ein offenes semantisches Rahmenwerk für die Zusammenarbeit von Menschen und KI-Agenten.',
        en: 'Skan AI observes work directly on the desktop: screen content is processed locally, and only anonymized metadata reaches the analytics platform. The portfolio is split into Blueprint, Intelligence and Agents; in February 2026 Skan introduced the Agentic Ontology of Work, an open semantic framework for how humans and AI agents work together.',
      },
      highlights: {
        de: [
          'Erfasst auch Arbeit in Anwendungen, die keine verwertbaren Event-Logs liefern',
          'Honorable Mention im Magic Quadrant 2026 und Representative Vendor im Gartner Market Guide for Task Mining',
          'Series-C-Finanzierung über 63 Mio. US-Dollar im August 2026 für den Ausbau als Kontextschicht für Agenten',
        ],
        en: [
          'Also captures work in applications that provide no usable event logs',
          'Honorable mention in the 2026 Magic Quadrant and Representative Vendor in the Gartner Market Guide for Task Mining',
          'USD 63 million Series C in August 2026 to expand as a context layer for agents',
        ],
      },
      consider: {
        de: 'Der Ansatz setzt Software auf den Arbeitsplätzen der Mitarbeitenden voraus; Betriebsrat und Datenschutz sollten entsprechend früh eingebunden werden.',
        en: 'The approach requires software on employees’ workstations, so works councils and data protection officers should be involved early.',
      },
    },
    {
      name: 'iGrafx Process360 Live',
      vendor: 'iGrafx',
      bestFor: {
        de: 'Modellierung, Simulation und Repository',
        en: 'Modeling, simulation and repository',
      },
      summary: {
        de: 'iGrafx kombiniert in Process360 Live Process Mining, Prozessdesign, Simulation und ein gesteuertes Prozess-Repository. Nach eigenen Angaben ist iGrafx Leader in The Forrester Wave: Process Intelligence Software, Q3 2025; im Januar 2026 kündigte das Unternehmen eine Kooperation mit NTT DATA INTRAMART in Richtung autonomer, agentengestützter Abläufe an.',
        en: 'In Process360 Live, iGrafx combines process mining, process design, simulation and a governed process repository. According to the vendor, iGrafx is a Leader in The Forrester Wave: Process Intelligence Software, Q3 2025; in January 2026 the company announced a collaboration with NTT DATA INTRAMART toward autonomous, agent-supported operations.',
      },
      highlights: {
        de: [
          'Mining, Design und Simulation in einer Umgebung',
          'Gesteuertes Prozess-Repository als gemeinsame Wissensbasis der Teams',
          'Digital-Twin-Funktionen für Was-wäre-wenn-Szenarien',
        ],
        en: [
          'Mining, design and simulation in one environment',
          'Governed process repository as a shared knowledge base for teams',
          'Digital twin capabilities for what-if scenarios',
        ],
      },
      consider: {
        de: 'Für die Ausführung von Maßnahmen setzt iGrafx auf Partner-Technologie – die Ausführungsschicht ist also separat zu planen.',
        en: 'For executing actions, iGrafx relies on partner technology – so the execution layer has to be planned separately.',
      },
    },
  ],
  trends: {
    de: [
      {
        title: 'Vom Mining zur Intelligence',
        text: 'Gartner hat den Markt 2026 als Process Intelligence neu benannt und bewertet damit mehr als Discovery und Conformance. 2027 wird sich zeigen, welche Plattformen Kontext, Analyse und Umsetzung tatsächlich verbinden.',
      },
      {
        title: 'Prozesskontext für KI-Agenten',
        text: 'Agenten brauchen Wissen darüber, wie Prozesse wirklich laufen, um sinnvoll zu handeln. Wissensgraphen und offene Schnittstellen wie das Model Context Protocol werden damit zur Grundausstattung.',
      },
      {
        title: 'Nachvollziehbarkeit statt Blackbox',
        text: 'Je mehr Entscheidungen Agenten vorbereiten, desto wichtiger werden überprüfbare Ursache-Wirkungs-Ketten und menschliche Freigaben. Plattformen, die ihre Empfehlungen belegen können, gewinnen an Vertrauen.',
      },
    ],
    en: [
      {
        title: 'From mining to intelligence',
        text: 'In 2026, Gartner renamed the market process intelligence and now evaluates more than discovery and conformance. 2027 will show which platforms genuinely connect context, analysis and execution.',
      },
      {
        title: 'Process context for AI agents',
        text: 'Agents need to know how processes actually run in order to act sensibly. Knowledge graphs and open interfaces such as the Model Context Protocol are becoming standard equipment.',
      },
      {
        title: 'Traceability instead of a black box',
        text: 'The more decisions agents prepare, the more important verifiable cause-and-effect chains and human approvals become. Platforms that can evidence their recommendations gain trust.',
      },
    ],
  },
  faq: [
    {
      question: {
        de: 'Was ist der Unterschied zwischen Process Intelligence und Process Mining?',
        en: 'What is the difference between process intelligence and process mining?',
      },
      answer: {
        de: 'Process Mining rekonstruiert Prozessabläufe aus den Ereignisdaten der IT-Systeme. Process Intelligence geht weiter: Sie verbindet diese Abläufe mit Geschäftskontext, Unternehmenswissen und KI, erklärt Ursachen und unterstützt Maßnahmen bis zur Erfolgsmessung. Process Mining ist damit ein Baustein von Process Intelligence.',
        en: 'Process mining reconstructs process flows from the event data of IT systems. Process intelligence goes further: it connects these flows with business context, enterprise knowledge and AI, explains causes and supports actions through to measuring their impact. Process mining is therefore one building block of process intelligence.',
      },
    },
    {
      question: {
        de: 'Welche Process-Intelligence-Plattformen hat Gartner als Leader eingestuft?',
        en: 'Which process intelligence platforms did Gartner rate as Leaders?',
      },
      answer: {
        de: 'Im Magic Quadrant for Process Intelligence Platforms vom Mai 2026, der 13 Anbieter bewertet, sind nach Angaben der Hersteller Celonis, SAP Signavio, ARIS und Pegasystems als Leader positioniert. Der Bericht ist die umbenannte Fortsetzung des früheren Magic Quadrant for Process Mining Platforms. Noreja wurde 2026 von Gartner in „Coolest Vendor Innovations in Process Intelligence“ ausgezeichnet.',
        en: 'In the Magic Quadrant for Process Intelligence Platforms of May 2026, which evaluates 13 vendors, Celonis, SAP Signavio, ARIS and Pegasystems are positioned as Leaders according to the vendors. The report is the renamed successor of the earlier Magic Quadrant for Process Mining Platforms. In 2026, Gartner recognized Noreja in “Coolest Vendor Innovations in Process Intelligence”.',
      },
    },
    {
      question: {
        de: 'Brauchen KI-Agenten eine Process-Intelligence-Plattform?',
        en: 'Do AI agents need a process intelligence platform?',
      },
      answer: {
        de: 'Agenten handeln nur so gut, wie sie den Prozess kennen, in dem sie arbeiten. Eine Process-Intelligence-Plattform liefert diesen Kontext: wie Abläufe tatsächlich verlaufen, wo Abweichungen entstehen und welche Regeln gelten. Bei Noreja liegt dieser Kontext in einem Event Knowledge Graph, den die KI-Assistentin Minerva und spezialisierte Agenten direkt nutzen.',
        en: 'Agents act only as well as they know the process they work in. A process intelligence platform provides that context: how flows actually run, where deviations arise and which rules apply. At Noreja, this context lives in an Event Knowledge Graph that the AI assistant Minerva and specialized agents use directly.',
      },
    },
    {
      question: {
        de: 'Welche Process-Intelligence-Plattform passt zu welchem Unternehmen?',
        en: 'Which process intelligence platform fits which organization?',
      },
      answer: {
        de: 'SAP-geprägte Unternehmen finden in SAP Signavio die engste Integration, servicelastige Organisationen in ServiceNow, Automatisierungsprogramme in UiPath, Pega oder Appian. Wer Ursachen systemübergreifend und unabhängig von einem Ökosystem verstehen und den Prozesskontext für eigene KI nutzen will, ist mit einer graphbasierten, kausalen Plattform wie Noreja gut beraten.',
        en: 'SAP-centric companies find the tightest integration in SAP Signavio, service-heavy organizations in ServiceNow, and automation programs in UiPath, Pega or Appian. Anyone who wants to understand causes across systems, independent of one ecosystem, and use the process context for their own AI is well served by a graph-based, causal platform such as Noreja.',
      },
    },
    {
      question: {
        de: 'Was kostet eine Process-Intelligence-Plattform?',
        en: 'How much does a process intelligence platform cost?',
      },
      answer: {
        de: 'Viele Anbieter nennen Preise nur auf Anfrage. Die Kosten hängen typischerweise von Datenvolumen, Nutzerzahl, Modulen und KI-Nutzung ab. Noreja veröffentlicht seine Pakete transparent auf der Preisseite.',
        en: 'Many vendors quote prices only on request. Costs typically depend on data volume, number of users, modules and AI usage. Noreja publishes its packages transparently on its pricing page.',
      },
    },
  ],
};
