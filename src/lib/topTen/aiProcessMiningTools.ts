import type { TopTenContent } from '../topTenLists';

/**
 * Top 10 AI Process Mining Tools 2027.
 *
 * Angle of this list: what the AI in each tool actually does (copilot,
 * agents, MCP access for external agents, AI root-cause analysis, simulation)
 * and how well the underlying data model grounds it. Vendor features are
 * stated as published by the vendor as of October 2026; beta features are
 * labelled as such.
 */
export const aiProcessMiningTools: TopTenContent = {
  id: 'ai-process-mining-tools',
  metaTitle: {
    de: 'Top 10 KI-Tools für Process Mining 2027: Copilots, Agenten, MCP',
    en: 'Top 10 AI Process Mining Tools 2027: Copilots, Agents, MCP',
  },
  metaDescription: {
    de: 'KI im Process Mining 2027: zehn Tools im Vergleich – Copilots, Agenten, MCP-Schnittstellen, KI-Ursachenanalyse und wie gut das Datenmodell die KI erdet.',
    en: 'AI in process mining for 2027: ten tools compared – copilots, agents, MCP interfaces, AI root-cause analysis and how well the data model grounds the AI.',
  },
  intro: {
    de: 'Die besten KI-Tools für Process Mining kombinieren 2027 drei Dinge: Fragen in natürlicher Sprache, Agenten, die selbstständig Analysen ausführen, und ein Datenmodell, das die Antworten der KI an echte Prozessdaten bindet. Fast jeder Anbieter hat inzwischen einen Copilot – der Unterschied liegt darin, worauf die KI zugreift und ob sich ihre Aussagen nachprüfen lassen. Diese Liste bewertet zehn Werkzeuge nach genau diesen Kriterien. Sie bildet den Stand Oktober 2026 ab und blickt auf die Entwicklungen, die 2027 prägen werden.',
    en: 'In 2027, the best AI process mining tools combine three things: questions in natural language, agents that run analyses on their own, and a data model that ties the AI’s answers to real process data. Almost every vendor now offers a copilot – the difference lies in what the AI can access and whether its statements can be verified. This list rates ten tools on exactly those criteria. It reflects the state of October 2026 and looks ahead to the developments that will shape 2027.',
  },
  criteria: {
    de: [
      {
        title: 'Grounding im Datenmodell',
        text: 'Worauf stützt sich die KI: auf einen Graphen aus Ereignissen, Objekten und Beziehungen, einen objektzentrierten Log oder einen case-zentrierten Log? Je reicher der Kontext, desto seltener entstehen plausible, aber falsche Antworten.',
      },
      {
        title: 'Agentenfähigkeit',
        text: 'Kann die KI mehrstufige Analysen planen und ausführen oder beantwortet sie nur Einzelfragen? Bewertet werden Agenten im Produkt und deren Einbindung in Abläufe.',
      },
      {
        title: 'Offenheit für externe KI',
        text: 'Lassen sich eigene Agenten und Modelle anbinden, etwa über MCP oder offene Schnittstellen, und ist die Wahl des Sprachmodells frei?',
      },
      {
        title: 'Nachvollziehbarkeit',
        text: 'Lassen sich KI-Aussagen bis zu den zugrunde liegenden Fällen, Kennzahlen und Zusammenhängen zurückverfolgen? Ohne diese Prüfbarkeit bleiben Empfehlungen Vermutungen.',
      },
    ],
    en: [
      {
        title: 'Grounding in the data model',
        text: 'What does the AI rely on: a graph of events, objects and relationships, an object-centric log or a case-centric log? The richer the context, the fewer plausible-but-wrong answers.',
      },
      {
        title: 'Agent capability',
        text: 'Can the AI plan and execute multi-step analyses, or does it only answer single questions? We assess in-product agents and how they fit into workflows.',
      },
      {
        title: 'Openness to external AI',
        text: 'Can your own agents and models be connected, for example via MCP or open interfaces, and is the choice of language model free?',
      },
      {
        title: 'Traceability',
        text: 'Can AI statements be traced back to the underlying cases, KPIs and relationships? Without that, recommendations remain assumptions.',
      },
    ],
  },
  entries: [
    {
      name: 'Noreja',
      isNoreja: true,
      definitionId: 'agentic-process-mining',
      bestFor: {
        de: 'Nachprüfbare KI auf kausalem Graphen',
        en: 'Verifiable AI on a causal graph',
      },
      summary: {
        de: 'Norejas KI-Assistentin Minerva 2.0 liest den kausalen Prozessgraphen – Fälle, Varianten, Kennzahlen und Abweichungen von der erwarteten Reihenfolge – und verbindet ihn mit Unternehmenswissen aus dem Context Hub. Spezialisierte Agenten übernehmen wiederkehrende Analysen, Frontier Agents arbeiten kontinuierlich im Hintergrund. Das Sprachmodell ist frei wählbar, von Cloud-Modellen bis zu lokal betriebenen Modellen.',
        en: 'Noreja’s AI assistant Minerva 2.0 reads the causal process graph – cases, variants, KPIs and deviations from the expected order – and combines it with company knowledge from the Context Hub. Specialized agents take on recurring analyses, while Frontier Agents work continuously in the background. The language model is freely selectable, from cloud models to locally operated ones.',
      },
      highlights: {
        de: [
          'Event Knowledge Graph als Grounding: KI-Antworten markieren die genannten Aktivitäten direkt im Prozessgraphen',
          'Agent Library mit zehn spezialisierten Analyse-Agenten, etwa für Ursachen, Wartezeiten und Working Capital',
          'Freie LLM-Wahl bis zum On-Premises-Betrieb; Wissen lässt sich auf lokale Modelle beschränken',
        ],
        en: [
          'Event Knowledge Graph as grounding: AI answers highlight the activities they mention directly in the process graph',
          'Agent Library with ten specialized analysis agents, for example for root causes, waiting times and working capital',
          'Free LLM choice up to on-premises operation; knowledge can be restricted to local models',
        ],
      },
      consider: {
        de: 'Minerva liest nur und ändert weder Quelldaten noch Analysen selbstständig – Umsetzungsschritte laufen über angebundene Systeme mit menschlicher Freigabe.',
        en: 'Minerva only reads and does not change source data or analyses on its own – execution steps run through connected systems with human approval.',
      },
    },
    {
      name: 'Celonis',
      battleCardId: 'celonis',
      bestFor: {
        de: 'Breites KI-Ökosystem im Enterprise-Umfeld',
        en: 'Broad AI ecosystem in large enterprises',
      },
      summary: {
        de: 'Celonis hat seine Plattform früh auf KI ausgerichtet: Process Copilot beantwortet Fragen in natürlicher Sprache und erstellt Auswertungen, AgentC bindet Agenten-Plattformen wie Copilot Studio, Bedrock und Agentforce an. Mit dem auf der Celosphere 2025 vorgestellten MCP-Server und der Orchestration Engine reicht der Ansatz von der Analyse bis zu automatisierten Folgeaktionen.',
        en: 'Celonis aligned its platform with AI early on: Process Copilot answers questions in natural language and creates reports, while AgentC connects agent platforms such as Copilot Studio, Bedrock and Agentforce. With the MCP server introduced at Celosphere 2025 and the Orchestration Engine, the approach extends from analysis to automated follow-up actions.',
      },
      highlights: {
        de: [
          'Process Copilot als LLM-Assistent für Fragen und Berichte ohne technische Vorkenntnisse',
          'AgentC verbindet Prozessdaten mit führenden Agenten-Plattformen großer Hyperscaler und Softwareanbieter',
          'MCP-Server und Process Intelligence Graph stellen Prozesskontext für externe Agenten bereit',
        ],
        en: [
          'Process Copilot as an LLM assistant for questions and reports without technical background',
          'AgentC connects process data with leading agent platforms of major hyperscalers and software vendors',
          'MCP server and Process Intelligence Graph provide process context to external agents',
        ],
      },
      consider: {
        de: 'Die KI stützt sich auf frequenzbasierte Prozessmodelle; Ursachenaussagen beruhen damit auf Korrelationen in Reihenfolgen, nicht auf einem kausalen Modell.',
        en: 'The AI relies on frequency-based process models, so root-cause statements rest on correlations in sequences rather than on a causal model.',
      },
    },
    {
      name: 'SAP Signavio',
      battleCardId: 'sap-signavio',
      bestFor: {
        de: 'KI-Assistenz in SAP-Landschaften',
        en: 'AI assistance in SAP landscapes',
      },
      summary: {
        de: 'Mit Joule hat SAP seinen KI-Assistenten in die Signavio-Suite gebracht; seit Februar 2026 ist Joule mit SAP Signavio allgemein verfügbar. Joule Agents unterstützen laut SAP bei der Suche nach Prozessinhalten, bei Prozessanalysen, beim Erstellen von Value Cases und beim Onboarding. Ein Dashboard-Analyzer-Agent, der Event Logs und Kennzahlen interpretiert, wurde im November 2025 als Beta vorgestellt.',
        en: 'With Joule, SAP has brought its AI assistant into the Signavio suite; Joule with SAP Signavio has been generally available since February 2026. According to SAP, Joule Agents help with content discovery, process analysis, creating value cases and onboarding. A Dashboard Analyzer agent that interprets event logs and KPIs was introduced as a beta in November 2025.',
      },
      highlights: {
        de: [
          'Joule als durchgängiger SAP-KI-Assistent – auch in den Signavio-Lösungen allgemein verfügbar',
          'Mehrere Joule Agents arbeiten nach Herstellerangaben in einem Multi-Agenten-Rahmen zusammen',
          'Enge Verzahnung von KI-Analyse mit SAP-Prozessinhalten, Modellierung und Benchmarks',
        ],
        en: [
          'Joule as SAP’s end-to-end AI assistant – generally available in the Signavio solutions as well',
          'Several Joule Agents work together in a multi-agent framework, according to the vendor',
          'Tight integration of AI analysis with SAP process content, modeling and benchmarks',
        ],
      },
      consider: {
        de: 'Einige Agenten befinden sich noch in Beta- oder Early-Adopter-Phasen, und ihr Nutzen entfaltet sich vor allem in SAP-dominierten Landschaften.',
        en: 'Some agents are still in beta or early-adopter phases, and their value unfolds mainly in SAP-dominated landscapes.',
      },
    },
    {
      name: 'UiPath Process Mining',
      vendor: 'UiPath',
      battleCardId: 'uipath-process-mining',
      bestFor: {
        de: 'Vom Befund zum orchestrierten Agenten',
        en: 'From finding to orchestrated agent',
      },
      summary: {
        de: 'Bei UiPath ist Process Mining der Einstieg in agentische Automatisierung. Mit Maestro orchestriert die Plattform Agenten, Roboter und Menschen gemeinsam in BPMN-Prozessen, sodass Erkenntnisse aus dem Mining direkt in automatisierte Abläufe übergehen können. Die KI dient hier vor allem dazu, Automatisierungskandidaten zu finden und umzusetzen.',
        en: 'At UiPath, process mining is the entry point to agentic automation. With Maestro, the platform orchestrates agents, robots and people together in BPMN processes, so insights from mining can flow directly into automated workflows. Here, AI mainly serves to find and implement automation candidates.',
      },
      highlights: {
        de: [
          'Maestro koordiniert Agenten, Roboter und Menschen in einem gemeinsamen BPMN-Prozess',
          'Kombinierte Sicht aus System-, Desktop- und Kommunikationsdaten als Kontext für Automatisierung',
          'Kurzer Weg von der Analyse zur produktiven Agenten- und RPA-Umsetzung',
        ],
        en: [
          'Maestro coordinates agents, robots and people in one shared BPMN process',
          'Combined view of system, desktop and communication data as context for automation',
          'Short path from analysis to productive agent and RPA implementation',
        ],
      },
      consider: {
        de: 'Die analytische Tiefe der Ursachenanalyse ist der Automatisierung untergeordnet; der volle Nutzen entsteht im Zusammenspiel mit der UiPath-Plattform.',
        en: 'The analytical depth of root-cause analysis is subordinate to automation; full value emerges together with the UiPath platform.',
      },
    },
    {
      name: 'Microsoft Power Automate Process Mining',
      vendor: 'Microsoft',
      battleCardId: 'microsoft-process-mining',
      bestFor: {
        de: 'KI-Einstieg in Microsoft-Umgebungen',
        en: 'AI entry point in Microsoft environments',
      },
      summary: {
        de: 'Microsoft verankert Process Mining in der Power Platform und ermöglicht Fragen an Prozessdaten über integrierte Sprachmodelle. Wer bereits mit Power BI, Microsoft 365 und Copilot arbeitet, findet eine vertraute Oberfläche und einen niedrigen Einstieg. Erkenntnisse lassen sich innerhalb des Microsoft-Stacks direkt in Low-Code-Automatisierungen überführen.',
        en: 'Microsoft anchors process mining in the Power Platform and lets users query process data through integrated language models. Teams already working with Power BI, Microsoft 365 and Copilot find a familiar interface and a low entry barrier. Insights can be turned directly into low-code automations within the Microsoft stack.',
      },
      highlights: {
        de: [
          'Konversationelle Abfragen von Prozessdaten über integrierte Sprachmodelle',
          'Enge Verbindung zu Power BI, Azure und Microsoft 365',
          'Low-Code-Automatisierung als naheliegender nächster Schritt nach der Analyse',
        ],
        en: [
          'Conversational queries of process data via integrated language models',
          'Close connection to Power BI, Azure and Microsoft 365',
          'Low-code automation as the natural next step after analysis',
        ],
      },
      consider: {
        de: 'Die KI arbeitet auf case-zentrierten, frequenzbasierten Modellen und ist auf Zugänglichkeit statt analytische Tiefe ausgelegt.',
        en: 'The AI works on case-centric, frequency-based models and is designed for accessibility rather than analytical depth.',
      },
    },
    {
      name: 'ServiceNow Process Mining',
      vendor: 'ServiceNow',
      battleCardId: 'servicenow-process-mining',
      bestFor: {
        de: 'Agentische KI für Service-Workflows',
        en: 'Agentic AI for service workflows',
      },
      summary: {
        de: 'ServiceNow hat Process und Task Mining in sein Zurich-Release integriert, das auf agentische KI mit eingebetteter Prozessautomatisierung ausgerichtet ist. Weil die Prozessdaten bereits auf der Plattform liegen, entfällt für ServiceNow-Prozesse die Datenextraktion. Über Workflow Data Fabric stehen externe Daten vor allem für Workflows und Agenten zur Verfügung.',
        en: 'ServiceNow integrated process and task mining into its Zurich release, which centers on agentic AI with embedded process automation. Because the process data already lives on the platform, no data extraction is needed for ServiceNow processes. Via Workflow Data Fabric, external data is made available mainly for workflows and agents.',
      },
      highlights: {
        de: [
          'Process und Task Mining als Teil eines auf agentische KI ausgerichteten Plattform-Releases',
          'Keine Datenextraktion für Prozesse, die auf der ServiceNow-Plattform laufen',
          'Echtzeit-Monitoring von Kennzahlen, etwa für die Einhaltung von SLAs',
        ],
        en: [
          'Process and task mining as part of a platform release centered on agentic AI',
          'No data extraction for processes running on the ServiceNow platform',
          'Real-time KPI monitoring, for example for SLA compliance',
        ],
      },
      consider: {
        de: 'Die Mining-Analyse konzentriert sich auf Prozesse innerhalb der Plattform; Backend-Abläufe in ERP oder Produktion bleiben weitgehend außerhalb des Blickfelds.',
        en: 'Mining analysis focuses on processes inside the platform; back-end flows in ERP or production largely stay outside its view.',
      },
    },
    {
      name: 'Pega Process Mining',
      vendor: 'Pegasystems',
      bestFor: {
        de: 'Mining als Grundlage für Redesign',
        en: 'Mining as a basis for redesign',
      },
      summary: {
        de: 'Pega positioniert Process Mining als operativen Kontext für die Frage, wo KI-Agenten sinnvoll eingesetzt werden. Laut Pressemitteilung vom 12. Mai 2026 fließen gewonnene Erkenntnisse in Pega Blueprint ein, wo Prozesse simuliert, optimiert und in überarbeitete Workflows und Anwendungen übersetzt werden. Process Mining, Task Mining und Modellierung kombiniert Pega nach eigenen Angaben in einer KI-gestützten Plattform.',
        en: 'Pega positions process mining as the operational context for deciding where AI agents should be deployed. According to its press release of 12 May 2026, insights feed into Pega Blueprint, where processes are simulated, optimized and turned into reworked workflows and applications. According to the vendor, Pega combines process mining, task mining and modeling in one AI-powered platform.',
      },
      highlights: {
        de: [
          'Übergabe von Mining-Erkenntnissen an Pega Blueprint für Simulation und Neugestaltung',
          'Process Mining als Entscheidungsgrundlage für den Einsatz von KI-Agenten',
          'Process Mining, Task Mining und Modellierung in einer Plattform – nach Herstellerangaben',
        ],
        en: [
          'Handover of mining insights to Pega Blueprint for simulation and redesign',
          'Process mining as a basis for deciding where to deploy AI agents',
          'Process mining, task mining and modeling in one platform – according to the vendor',
        ],
      },
      consider: {
        de: 'Der größte Nutzen entsteht, wenn die Neugestaltung auch auf der Pega-Plattform umgesetzt wird.',
        en: 'The greatest value emerges when the redesign is also implemented on the Pega platform.',
      },
    },
    {
      name: 'IBM Process Mining',
      vendor: 'IBM',
      battleCardId: 'ibm-process-mining',
      bestFor: {
        de: 'KI-Assistenz in regulierten Branchen',
        en: 'AI assistance in regulated industries',
      },
      summary: {
        de: 'IBM kombiniert objektzentriertes Process Mining mit einem LLM-gestützten Process Mining Assistant auf Basis von watsonx, der Hypothesen zu Ursachen formuliert. Über die Integration mit watsonx Orchestrate lassen sich Erkenntnisse in automatisierte Abläufe überführen. Datenbasierte What-if-Simulationen und der Betrieb on-premise oder hybrid sprechen vor allem regulierte Branchen an.',
        en: 'IBM combines object-centric process mining with an LLM-powered Process Mining Assistant based on watsonx that formulates root-cause hypotheses. Through integration with watsonx Orchestrate, insights can be turned into automated workflows. Data-driven what-if simulation and on-premises or hybrid operation appeal especially to regulated industries.',
      },
      highlights: {
        de: [
          'Process Mining Assistant auf watsonx-Basis für Ursachenhypothesen in natürlicher Sprache',
          'Integration mit watsonx Orchestrate für den Übergang zur Automatisierung',
          'What-if-Simulation und präskriptive Empfehlungen auf objektzentrierten Daten',
        ],
        en: [
          'Process Mining Assistant based on watsonx for root-cause hypotheses in natural language',
          'Integration with watsonx Orchestrate for the step into automation',
          'What-if simulation and prescriptive recommendations on object-centric data',
        ],
      },
      consider: {
        de: 'Die Ursachenhypothesen bleiben methodisch frequenzbasiert, und Einführung sowie Betrieb erfordern spürbaren Implementierungsaufwand.',
        en: 'Root-cause hypotheses remain methodically frequency-based, and rollout and operation require substantial implementation effort.',
      },
    },
    {
      name: 'QPR ProcessAnalyzer',
      vendor: 'QPR Software',
      bestFor: {
        de: 'Prozessdaten für externe Agenten via MCP',
        en: 'Process data for external agents via MCP',
      },
      summary: {
        de: 'QPR hat im April 2026 eine MCP-Schnittstelle für ProcessAnalyzer vorgestellt, über die KI-Agenten wie Claude, ChatGPT oder Microsoft Copilot Prozessanalysen direkt abfragen können. Dazu kommt eine KI-gestützte Ursachenanalyse, die operative Treiber von Prozessproblemen automatisch identifizieren soll. Die Plattform läuft nativ in Snowflake und unterstützt objektzentriertes Process Mining.',
        en: 'In April 2026, QPR introduced an MCP interface for ProcessAnalyzer that lets AI agents such as Claude, ChatGPT or Microsoft Copilot query process analyses directly. It also offers AI-powered root-cause analysis designed to identify the operational drivers of process problems automatically. The platform runs natively in Snowflake and supports object-centric process mining.',
      },
      highlights: {
        de: [
          'MCP-Schnittstelle bringt Prozessanalysen in gängige KI-Assistenten und Agenten',
          'KI-gestützte Ursachenanalyse für operative Treiber von Prozessproblemen – nach Herstellerangaben',
          'Snowflake-nativer Betrieb mit objektzentriertem Process Mining',
        ],
        en: [
          'MCP interface brings process analyses into common AI assistants and agents',
          'AI-powered root-cause analysis for operational drivers of process problems – according to the vendor',
          'Snowflake-native operation with object-centric process mining',
        ],
      },
      consider: {
        de: 'Die Angaben zur MCP-Schnittstelle stammen aus Herstellermitteilungen; Details zu Verfügbarkeit und Einrichtung sind öffentlich kaum dokumentiert.',
        en: 'The statements about the MCP interface come from vendor announcements; details on availability and setup are hardly documented publicly.',
      },
    },
    {
      name: 'Skan AI',
      bestFor: {
        de: 'Agenten aus beobachteter Desktop-Arbeit',
        en: 'Agents built from observed desktop work',
      },
      summary: {
        de: 'Skan AI erfasst, wie Arbeit am Desktop tatsächlich erledigt wird: Bildschirminhalte werden lokal auf dem Rechner verarbeitet, an die Analyseplattform gehen anonymisierte Metadaten. Aus diesem Bild der Arbeit entstehen laut Hersteller einsatzbereite Agenten auf der eigenen Agents-Plattform. Mit der im Februar 2026 vorgestellten Agentic Ontology of Work bietet Skan ein offenes Vokabular für die Zusammenarbeit von Menschen und Agenten.',
        en: 'Skan AI captures how work is actually done on the desktop: screen content is processed locally on the machine, and anonymized metadata is sent to the analytics platform. According to the vendor, this picture of work produces ready-to-run agents on its own Agents platform. With the Agentic Ontology of Work, introduced in February 2026, Skan offers an open vocabulary for how humans and agents work together.',
      },
      highlights: {
        de: [
          'Beobachtung von Desktop-Arbeit mit lokaler Verarbeitung und anonymisierten Metadaten',
          'Eigenes Agents-Produkt, das Abläufe aus der Beobachtung in ausführbare Agenten übersetzt',
          'Agentic Ontology of Work als offenes semantisches Rahmenwerk für Mensch-Agent-Arbeit',
        ],
        en: [
          'Observation of desktop work with local processing and anonymized metadata',
          'Dedicated Agents product that turns observed workflows into executable agents',
          'Agentic Ontology of Work as an open semantic framework for human-agent work',
        ],
      },
      consider: {
        de: 'Skan setzt auf Beobachtung am Arbeitsplatz statt auf Event-Daten aus Quellsystemen und ergänzt klassisches Process Mining daher eher, als es zu ersetzen.',
        en: 'Skan relies on workplace observation rather than event data from source systems, so it complements classic process mining rather than replacing it.',
      },
    },
  ],
  trends: {
    de: [
      {
        title: 'MCP wird Standardschnittstelle',
        text: 'Immer mehr Anbieter öffnen ihre Prozessdaten über das Model Context Protocol für externe Agenten. 2027 wird entscheidend, welcher Kontext dabei mitgeliefert wird – reine Kennzahlen oder ein Modell mit Ursachen und Zusammenhängen.',
      },
      {
        title: 'Vom Copilot zum Hintergrund-Agenten',
        text: 'Statt einzelne Fragen zu beantworten, überwachen Agenten Prozesse kontinuierlich und melden Abweichungen von sich aus. Damit steigt der Bedarf an Governance, Freigaben und nachvollziehbaren Begründungen.',
      },
      {
        title: 'Grounding schlägt Modellgröße',
        text: 'Die Qualität von KI-Antworten hängt zunehmend vom Datenmodell ab, nicht vom gewählten Sprachmodell. Werkzeuge, die Ereignisse, Objekte und Unternehmenswissen verbinden, liefern belastbarere Antworten als Werkzeuge mit flachen Logs.',
      },
    ],
    en: [
      {
        title: 'MCP becomes the standard interface',
        text: 'More and more vendors open their process data to external agents via the Model Context Protocol. In 2027, what matters is which context comes with it – plain KPIs or a model with causes and relationships.',
      },
      {
        title: 'From copilot to background agent',
        text: 'Instead of answering individual questions, agents monitor processes continuously and report deviations on their own. This raises the need for governance, approvals and traceable reasoning.',
      },
      {
        title: 'Grounding beats model size',
        text: 'The quality of AI answers increasingly depends on the data model rather than on the chosen language model. Tools that connect events, objects and enterprise knowledge deliver more reliable answers than tools built on flat logs.',
      },
    ],
  },
  faq: [
    {
      question: {
        de: 'Was ist KI im Process Mining bzw. Agentic Process Mining?',
        en: 'What is AI process mining, or agentic process mining?',
      },
      answer: {
        de: 'KI im Process Mining bedeutet, dass Sprachmodelle Fragen zu Prozessdaten in natürlicher Sprache beantworten, Ursachen eingrenzen und Berichte erstellen. Agentic Process Mining geht einen Schritt weiter: Agenten planen mehrstufige Analysen selbst, überwachen Prozesse laufend und schlagen Maßnahmen vor. Die Qualität hängt davon ab, wie gut das Datenmodell die KI mit echten Prozessdaten und Fachwissen verbindet.',
        en: 'AI process mining means that language models answer questions about process data in natural language, narrow down causes and create reports. Agentic process mining goes a step further: agents plan multi-step analyses themselves, monitor processes continuously and propose measures. The quality depends on how well the data model connects the AI with real process data and domain knowledge.',
      },
    },
    {
      question: {
        de: 'Kann ich eigene KI-Agenten an Process-Mining-Daten anbinden (MCP)?',
        en: 'Can I connect my own AI agents to process mining data (MCP)?',
      },
      answer: {
        de: 'Ja, immer mehr Anbieter öffnen ihre Plattformen dafür. Celonis hat 2025 einen MCP-Server vorgestellt und verbindet Prozessdaten über AgentC mit Plattformen wie Copilot Studio, Bedrock und Agentforce; QPR hat im April 2026 eine MCP-Schnittstelle für ProcessAnalyzer angekündigt. Entscheidend ist, welcher Kontext übergeben wird und wie Berechtigungen und Datenschutz geregelt sind.',
        en: 'Yes, more and more vendors are opening their platforms for this. Celonis introduced an MCP server in 2025 and connects process data via AgentC with platforms such as Copilot Studio, Bedrock and Agentforce; QPR announced an MCP interface for ProcessAnalyzer in April 2026. What matters is which context is passed on and how permissions and data protection are handled.',
      },
    },
    {
      question: {
        de: 'Halluzinieren KI-Funktionen im Process Mining?',
        en: 'Do AI features in process mining hallucinate?',
      },
      answer: {
        de: 'Sprachmodelle können plausible, aber falsche Aussagen erzeugen – besonders, wenn sie nur Kennzahlen oder flache Logs sehen. Das Risiko sinkt, wenn die KI auf einem Modell aus Ereignissen, Objekten und Beziehungen arbeitet und ihre Aussagen bis zu den zugrunde liegenden Fällen zurückverfolgbar sind. KI-Ergebnisse bleiben dennoch Entscheidungshilfe und sollten vor folgenreichen Entscheidungen geprüft werden.',
        en: 'Language models can produce plausible-but-wrong statements – especially when they only see KPIs or flat logs. The risk drops when the AI works on a model of events, objects and relationships and its statements can be traced back to the underlying cases. AI results nevertheless remain decision support and should be reviewed before consequential decisions.',
      },
    },
    {
      question: {
        de: 'Welches KI-Process-Mining-Tool läuft mit lokalen Sprachmodellen?',
        en: 'Which AI process mining tool runs with local LLMs?',
      },
      answer: {
        de: 'Noreja bietet neben Cloud-Modellen auch lokal betriebene Modelle an, die auf Servern von Noreja oder des Kunden laufen; dafür gibt es eine eigene Agentenvariante, Minerva (On-Premise). Unternehmen können zudem festlegen, dass bestimmtes Wissen aus dem Context Hub nur mit lokalen Modellen genutzt wird. Für andere Anbieter empfiehlt sich ein Blick in deren aktuelle Dokumentation.',
        en: 'Alongside cloud models, Noreja offers locally operated models that run on servers operated by Noreja or the customer; a dedicated agent variant, Minerva (On-Premise), exists for this. Companies can also specify that certain Context Hub knowledge may only be used with local models. For other vendors, check their current documentation.',
      },
    },
    {
      question: {
        de: 'Worauf sollte ich bei der Auswahl eines KI-Tools für Process Mining achten?',
        en: 'What should I look for when choosing an AI process mining tool?',
      },
      answer: {
        de: 'Wichtiger als der Copilot selbst ist das Datenmodell darunter: Kann die KI Ursachen von bloßen Reihenfolgen unterscheiden und Unternehmenswissen einbeziehen? Prüfe außerdem, ob eigene Agenten und Sprachmodelle angebunden werden können und ob sich jede Aussage bis zu den Daten zurückverfolgen lässt.',
        en: 'More important than the copilot itself is the data model underneath: can the AI distinguish causes from mere sequences and draw on enterprise knowledge? Also check whether your own agents and language models can be connected and whether every statement can be traced back to the data.',
      },
    },
  ],
};
