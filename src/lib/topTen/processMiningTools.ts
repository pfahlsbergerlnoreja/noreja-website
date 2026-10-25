import type { TopTenContent } from '../topTenLists';

export const processMiningTools: TopTenContent = {
  id: 'process-mining-tools',
  metaTitle: {
    de: 'Top 10 Process Mining Tools 2027 im Vergleich',
    en: 'Top 10 Process Mining Tools 2027 Compared',
  },
  metaDescription: {
    de: 'Die 10 besten Process Mining Tools 2027: Noreja, Celonis, SAP Signavio, ARIS, UiPath und mehr – verglichen nach Datenmodell, Analysetiefe und Lock-in.',
    en: 'The 10 best process mining tools for 2027: Noreja, Celonis, SAP Signavio, ARIS, UiPath and more – compared by data model, analysis depth and lock-in.',
  },
  intro: {
    de: 'Die stärksten Process Mining Tools für 2027 sind Noreja, Celonis, SAP Signavio und ARIS – gefolgt von UiPath, Microsoft, IBM, QPR, Apromore und Disco. Die Rangliste bewertet, wie tief ein Werkzeug Prozesse tatsächlich analysiert: Datenmodell, Ursachenanalyse, Zeit bis zur ersten belastbaren Erkenntnis und Offenheit gegenüber Quellsystemen. Sie gibt den Stand von Oktober 2026 wieder und blickt auf 2027, wenn Process Mining zunehmend zur Datengrundlage für KI-Agenten wird.',
    en: 'The strongest process mining tools for 2027 are Noreja, Celonis, SAP Signavio and ARIS – followed by UiPath, Microsoft, IBM, QPR, Apromore and Disco. The ranking assesses how deeply a tool actually analyzes processes: data model, root-cause analysis, time to the first reliable insight, and openness toward source systems. It reflects the state of October 2026 and looks ahead to 2027, when process mining increasingly becomes the data foundation for AI agents.',
  },
  criteria: {
    de: [
      {
        title: 'Datenmodell',
        text: 'Wird der Prozess auf eine einzige Fall-ID reduziert (case-zentriert), über mehrere Objekttypen abgebildet (objektzentriert) oder als Graph aus Ereignissen, Objekten und Beziehungen gespeichert? Das Modell bestimmt, wie realitätsnah jede weitere Analyse sein kann.',
      },
      {
        title: 'Analysetiefe',
        text: 'Wie gut deckt das Werkzeug Discovery, Conformance Checking und Ursachenanalyse ab – und unterscheidet es echte Ursachen von bloßer zeitlicher Nähe?',
      },
      {
        title: 'Zeit bis zur Erkenntnis',
        text: 'Wie viel Extraktion, Datenaufbereitung und Einführungsaufwand liegt vor der ersten belastbaren Analyse? Entscheidend ist der Weg vom Quellsystem zum ersten Befund, nicht die Demo.',
      },
      {
        title: 'Offenheit & Transparenz',
        text: 'Wie stark ist die Analyse an ein ERP-, Automatisierungs- oder Plattform-Ökosystem gebunden, und ist das Pricing öffentlich nachvollziehbar?',
      },
    ],
    en: [
      {
        title: 'Data model',
        text: 'Is the process reduced to a single case ID (case-centric), represented across several object types (object-centric), or stored as a graph of events, objects and relationships? The model determines how realistic every further analysis can be.',
      },
      {
        title: 'Analysis depth',
        text: 'How well does the tool cover discovery, conformance checking and root-cause analysis – and does it separate genuine causes from mere temporal proximity?',
      },
      {
        title: 'Time to insight',
        text: 'How much extraction, data preparation and rollout effort comes before the first reliable analysis? What counts is the path from source system to first finding, not the demo.',
      },
      {
        title: 'Openness & transparency',
        text: 'How tightly is the analysis bound to an ERP, automation or platform ecosystem, and is pricing publicly traceable?',
      },
    ],
  },
  entries: [
    {
      name: 'Noreja',
      isNoreja: true,
      definitionId: 'causal-process-mining',
      bestFor: {
        de: 'Kausale Ursachenanalyse über Systemgrenzen',
        en: 'Causal root-cause analysis across systems',
      },
      summary: {
        de: 'Noreja speichert Ereignisse, Geschäftsobjekte und ihre Beziehungen in einem Event Knowledge Graph und analysiert Prozesse kausal und temporal statt über Directly-Follows-Häufigkeiten. Die Plattform setzt direkt auf den relationalen Quelltabellen auf, ohne dass zuerst ein flacher Event Log gebaut werden muss. Gartner nennt Noreja 2026 in „Coolest Vendor Innovations in Process Intelligence“.',
        en: 'Noreja stores events, business objects and their relationships in an Event Knowledge Graph and analyzes processes causally and temporally instead of through directly-follows frequencies. The platform starts directly on relational source tables, without first building a flat event log. Gartner named Noreja in “Coolest Vendor Innovations in Process Intelligence” in 2026.',
      },
      highlights: {
        de: [
          'Kausales Modell trennt echte Auslöser von Koinzidenz und klassifiziert Abweichungen fachlich',
          'Quellsystem-agnostisch: SAP- und Nicht-SAP-Daten in einem gemeinsamen Graphen',
          'Öffentlich einsehbares Pricing und Einstieg über einen fokussierten Proof-of-Value',
        ],
        en: [
          'Causal model separates genuine triggers from coincidence and classifies deviations in business terms',
          'Source-system agnostic: SAP and non-SAP data in one shared graph',
          'Publicly available pricing and entry through a focused proof-of-value',
        ],
      },
      consider: {
        de: 'Ein vorgefertigter Katalog an Standard-Konnektoren und Prozess-Apps ist kleiner als bei den großen Plattformanbietern; Datenqualität, Ereignissemantik und Konfiguration bleiben auch hier Projektarbeit.',
        en: 'Its catalog of pre-built standard connectors and process apps is smaller than those of the large platform vendors; data quality, event semantics and configuration still require project work.',
      },
    },
    {
      name: 'Celonis',
      battleCardId: 'celonis',
      bestFor: {
        de: 'Großunternehmen mit breitem Konnektorbedarf',
        en: 'Large enterprises needing broad connectivity',
      },
      summary: {
        de: 'Celonis hat Process Mining als Kategorie geprägt und bietet die größte Auswahl an vorgefertigten Konnektoren sowie eine umfangreiche Bibliothek an Standard-KPIs und Prozess-Apps. Die Analyse läuft auf einem objektzentrierten Event Log; im Gartner Magic Quadrant 2026 ist Celonis als Leader eingestuft.',
        en: 'Celonis shaped process mining as a category and offers the largest selection of pre-built connectors along with an extensive library of standard KPIs and process apps. Analysis runs on an object-centric event log; Celonis is positioned as a Leader in the 2026 Gartner Magic Quadrant.',
      },
      highlights: {
        de: [
          'Größte Auswahl an Schnittstellen und Konnektoren am Markt',
          'Objektzentrierter Event Log erfasst mehrere Objekttypen je Ereignis',
          'Ausgereifte Schulungs- und Enablement-Programme für Analyseteams',
        ],
        en: [
          'Largest selection of interfaces and connectors on the market',
          'Object-centric event log captures several object types per event',
          'Mature training and enablement programs for analysis teams',
        ],
      },
      consider: {
        de: 'Die Modellbildung beruht auf Directly-Follows-Frequenzen, und belastbare Ergebnisse setzen häufig eine aufwändige Extraktion und mehrmonatige Einführung voraus.',
        en: 'Model construction relies on directly-follows frequencies, and reliable results often require labor-intensive extraction and a multi-month rollout.',
      },
    },
    {
      name: 'SAP Signavio Process Intelligence',
      battleCardId: 'sap-signavio',
      bestFor: {
        de: 'SAP-zentrierte Prozesslandschaften',
        en: 'SAP-centric process landscapes',
      },
      summary: {
        de: 'SAP Signavio verbindet Process Mining mit Modellierung und Prozessmanagement auf der SAP Business Technology Platform. Die weitgehend vorkonfigurierte Anbindung an SAP-Quellsysteme senkt den Integrationsaufwand deutlich; Gartner führt SAP Signavio 2026 als Leader.',
        en: 'SAP Signavio combines process mining with modeling and process management on the SAP Business Technology Platform. Largely pre-configured connectivity to SAP source systems noticeably reduces integration effort; Gartner lists SAP Signavio as a Leader in 2026.',
      },
      highlights: {
        de: [
          'Tiefe, weitgehend vorkonfigurierte Anbindung an SAP-Quellsysteme',
          'Durchgängige Suite von Modellierung über Mining bis Conformance',
          'Branchen-Benchmarks zur Einordnung eigener Kennzahlen',
        ],
        en: [
          'Deep, largely pre-configured connectivity to SAP source systems',
          'End-to-end suite from modeling through mining to conformance',
          'Industry benchmarks for putting your own metrics into context',
        ],
      },
      consider: {
        de: 'Die Analyse folgt einer case-zentrierten Sicht, und heterogene Nicht-SAP-Quellen erfordern zusätzlichen Integrationsaufwand.',
        en: 'Analysis follows a case-centric view, and heterogeneous non-SAP sources require additional integration effort.',
      },
    },
    {
      name: 'ARIS Process Mining',
      battleCardId: 'aris-process-mining',
      bestFor: {
        de: 'Conformance gegen governte Soll-Modelle',
        en: 'Conformance against governed to-be models',
      },
      summary: {
        de: 'ARIS koppelt Process Mining eng an sein BPM-Repository und vergleicht beobachtete Ist-Abläufe laufend mit governten Soll-Modellen in BPMN oder EPK. Ein KI-gestützter Root-Cause-Miner korreliert Verzögerungsfaktoren; im Gartner Magic Quadrant 2026 ist ARIS als Leader positioniert.',
        en: 'ARIS couples process mining tightly with its BPM repository and continuously compares observed as-is flows with governed to-be models in BPMN or EPC. An AI-supported root-cause miner correlates delay factors; ARIS is positioned as a Leader in the 2026 Gartner Magic Quadrant.',
      },
      highlights: {
        de: [
          'Automatisierte Conformance gegen Soll-Modelle aus dem ARIS-Repository',
          'Große Produktfamilie für Modellierung und Prozessverwaltung',
          'KI-gestützter Root-Cause-Miner für Verzögerungsfaktoren',
        ],
        en: [
          'Automated conformance against to-be models from the ARIS repository',
          'Large product family for modeling and process administration',
          'AI-supported root-cause miner for delay factors',
        ],
      },
      consider: {
        de: 'Die Ursachenanalyse bleibt korrelativ, und der volle Nutzen entsteht im Zusammenspiel mit der ARIS-BPM-Suite.',
        en: 'Root-cause analysis remains correlative, and the full value emerges in combination with the ARIS BPM suite.',
      },
    },
    {
      name: 'UiPath Process Mining',
      battleCardId: 'uipath-process-mining',
      bestFor: {
        de: 'Automatisierungskandidaten finden',
        en: 'Finding automation candidates',
      },
      summary: {
        de: 'UiPath kombiniert Process Mining, Task Mining und Communications Mining in einer automatisierungsorientierten Plattform. Erkenntnisse fließen direkt in Bau und Betrieb von Software-Robotern; mit Maestro koordiniert UiPath zudem Agenten, Roboter und Menschen in BPMN-Prozessen.',
        en: 'UiPath combines process mining, task mining and communications mining in an automation-oriented platform. Insights feed directly into building and operating software robots; with Maestro, UiPath also coordinates agents, robots and people in BPMN processes.',
      },
      highlights: {
        de: [
          'Gemeinsame Sicht auf System-, Desktop- und Kommunikationsdaten',
          'Nahtloser Übergang von der Analyse zur RPA-Umsetzung',
          'Integriertes ROI-Tracking für Automatisierungsvorhaben',
        ],
        en: [
          'Combined view of system, desktop and communication data',
          'Seamless transition from analysis to RPA implementation',
          'Integrated ROI tracking for automation initiatives',
        ],
      },
      consider: {
        de: 'Die Analysetiefe ist der Automatisierung untergeordnet, und der volle Nutzen entsteht vor allem auf der UiPath-Plattform.',
        en: 'Analysis depth is subordinate to automation, and the full value emerges mainly on the UiPath platform.',
      },
    },
    {
      name: 'Microsoft Power Automate Process Mining',
      vendor: 'Microsoft',
      battleCardId: 'microsoft-process-mining',
      bestFor: {
        de: 'Niedrige Einstiegshürde im Microsoft-Stack',
        en: 'Low entry barrier in the Microsoft stack',
      },
      summary: {
        de: 'Als Teil von Power Automate bringt Microsoft Process Mining in die vertraute Power Platform und verbindet Discovery, RPA und Dokumentenverarbeitung. Der Low-Code-Ansatz und die Integration mit Power BI senken die Einstiegshürde für Fachbereiche spürbar.',
        en: 'As part of Power Automate, Microsoft brings process mining into the familiar Power Platform and connects discovery, RPA and document processing. The low-code approach and integration with Power BI noticeably lower the entry barrier for business teams.',
      },
      highlights: {
        de: [
          'Enge Integration mit Azure, Power BI und Microsoft 365',
          'Low-Code-Oberflächen mit niedriger Einstiegshürde',
          'Abfragen in natürlicher Sprache über integrierte Sprachmodelle',
        ],
        en: [
          'Tight integration with Azure, Power BI and Microsoft 365',
          'Low-code interfaces with a low entry barrier',
          'Natural-language queries via integrated language models',
        ],
      },
      consider: {
        de: 'Der Fokus liegt auf Zugänglichkeit statt Analysetiefe, und die kapazitäts- und kontingentbasierte Lizenzierung setzt eine Microsoft-zentrierte Landschaft voraus.',
        en: 'The focus is on accessibility rather than analytical depth, and the capacity- and quota-based licensing presupposes a Microsoft-centric landscape.',
      },
    },
    {
      name: 'IBM Process Mining',
      battleCardId: 'ibm-process-mining',
      bestFor: {
        de: 'Regulierte Branchen mit Hybrid-Cloud',
        en: 'Regulated industries with hybrid cloud',
      },
      summary: {
        de: 'IBM Process Mining unterstützt objektzentriertes Process Mining sowie datengetriebene What-if-Simulation und präskriptive Empfehlungen. Der Betrieb on-premises oder in der Hybrid Cloud adressiert strenge Anforderungen an Datenresidenz; ein watsonx-basierter Assistent liefert Hypothesen zu Ursachen.',
        en: 'IBM Process Mining supports object-centric process mining along with data-driven what-if simulation and prescriptive recommendations. On-premises or hybrid-cloud operation addresses strict data-residency requirements; a watsonx-powered assistant offers root-cause hypotheses.',
      },
      highlights: {
        de: [
          'Objektzentrierte Analyse überwindet die starre Einzelfall-Sicht',
          'What-if-Simulation und präskriptive Empfehlungen auf Datenbasis',
          'On-Premises- und Hybrid-Betrieb für regulierte Umgebungen',
        ],
        en: [
          'Object-centric analysis overcomes the rigid single-case view',
          'Data-driven what-if simulation and prescriptive recommendations',
          'On-premises and hybrid operation for regulated environments',
        ],
      },
      consider: {
        de: 'Methodisch bleibt die Analyse frequenzbasiert, und Einführung wie Betrieb erfordern erheblichen Implementierungsaufwand.',
        en: 'Methodically the analysis remains frequency-based, and rollout and operation require substantial implementation effort.',
      },
    },
    {
      name: 'QPR ProcessAnalyzer',
      vendor: 'QPR Software',
      bestFor: {
        de: 'Process Mining direkt in Snowflake',
        en: 'Process mining directly in Snowflake',
      },
      summary: {
        de: 'QPR ProcessAnalyzer läuft nach Herstellerangaben nativ in Snowflake und vereint Process Mining, Prozessmodellierung und objektzentriertes Process Mining. Gartner führt QPR 2026 zum vierten Mal in Folge als Visionary; seit April 2026 stellt eine MCP-Schnittstelle die Analysen KI-Agenten zur Verfügung.',
        en: 'According to the vendor, QPR ProcessAnalyzer runs natively in Snowflake and unites process mining, process modeling and object-centric process mining. Gartner lists QPR as a Visionary for the fourth consecutive year in 2026; since April 2026, an MCP interface makes its analyses available to AI agents.',
      },
      highlights: {
        de: [
          'Nativer Betrieb in Snowflake, ohne separate Mining-Datenhaltung',
          'Objektzentriertes Process Mining im Produktumfang',
          'KI-gestützte Ursachenanalyse und MCP-Schnittstelle für KI-Agenten',
        ],
        en: [
          'Native operation in Snowflake without separate mining data storage',
          'Object-centric process mining within the product scope',
          'AI-supported root-cause analysis and an MCP interface for AI agents',
        ],
      },
      consider: {
        de: 'Der Nutzen ist eng an Snowflake als Datenplattform gekoppelt, und die Ursachenanalyse beruht nicht auf einem kausalen Graphmodell.',
        en: 'Its value is closely tied to Snowflake as the data platform, and root-cause analysis is not based on a causal graph model.',
      },
    },
    {
      name: 'Apromore',
      vendor: 'Salesforce',
      bestFor: {
        de: 'Simulation und Compliance-Monitoring',
        en: 'Simulation and compliance monitoring',
      },
      summary: {
        de: 'Apromore bietet Process Mining und Task Mining, Simulation als digitalen Zwilling, Ursachenanalyse und Compliance-Monitoring. Seit der Übernahme durch Salesforce – Gartner führt den Anbieter 2026 als „Salesforce (Apromore)“ – soll die Prozessanalyse die Agentenplattform Agentforce mit Prozesswissen versorgen.',
        en: 'Apromore offers process mining and task mining, digital-twin simulation, root-cause analysis and compliance monitoring. Since its acquisition by Salesforce – Gartner lists the vendor as “Salesforce (Apromore)” in 2026 – its process analysis is meant to supply the Agentforce agent platform with process knowledge.',
      },
      highlights: {
        de: [
          'Simulation von Prozessvarianten als digitaler Zwilling',
          'Compliance-Monitoring und Ursachenanalyse in einer Lösung',
          'Kombination aus Process Mining und Task Mining',
        ],
        en: [
          'Simulation of process variants as a digital twin',
          'Compliance monitoring and root-cause analysis in one solution',
          'Combination of process mining and task mining',
        ],
      },
      consider: {
        de: 'Die künftige Produktausrichtung folgt der Salesforce-Strategie rund um Agentforce, was die Unabhängigkeit vom Salesforce-Ökosystem offen lässt.',
        en: 'Future product direction follows Salesforce’s Agentforce strategy, which leaves independence from the Salesforce ecosystem an open question.',
      },
    },
    {
      name: 'Disco',
      vendor: 'Fluxicon',
      bestFor: {
        de: 'Schneller Einstieg, Beratung und Lehre',
        en: 'Quick starts, consulting and teaching',
      },
      summary: {
        de: 'Disco von Fluxicon ist ein Desktop-Werkzeug, das aus importierten Event Logs in kurzer Zeit verständliche Prozesslandkarten erzeugt. Wegen seiner einfachen Bedienung ist es in Beratungsprojekten und in der Lehre weit verbreitet – oft als erster Kontakt mit Process Mining überhaupt.',
        en: 'Disco by Fluxicon is a desktop tool that quickly turns imported event logs into understandable process maps. Thanks to its ease of use, it is widely used in consulting projects and in teaching – often as the very first contact with process mining.',
      },
      highlights: {
        de: [
          'Sehr kurze Einarbeitung und intuitive Bedienung',
          'Schnelle Process Discovery aus importierten Event Logs',
          'Etabliertes Werkzeug in Beratung, Lehre und Ausbildung',
        ],
        en: [
          'Very short learning curve and intuitive operation',
          'Fast process discovery from imported event logs',
          'Established tool in consulting, teaching and training',
        ],
      },
      consider: {
        de: 'Als Desktop-Werkzeug ohne eigene Enterprise-Datenplattform eignet sich Disco für Analysen auf vorbereiteten Logs, nicht für den laufenden, systemübergreifenden Betrieb.',
        en: 'As a desktop tool without its own enterprise data platform, Disco suits analyses on prepared logs rather than ongoing, cross-system operation.',
      },
    },
  ],
  trends: {
    de: [
      {
        title: 'Process Mining wird zur Datengrundlage für KI-Agenten',
        text: 'Agenten brauchen verlässlichen Prozesskontext, um zu entscheiden, wo sie eingreifen dürfen. Werkzeuge, deren Datenmodell Objekte, Beziehungen und Geschäftsregeln abbildet, werden 2027 zur Kontextschicht für agentische KI.',
      },
      {
        title: 'Vom Event Log zum Graphen',
        text: 'Die Reduktion auf eine einzige Fall-ID verliert gegenüber objektzentrierten und graphbasierten Modellen an Boden. Entscheidend wird, ob ein Modell schrittweise um weitere Prozesse, Dokumente und Organisationseinheiten wachsen kann.',
      },
      {
        title: 'Von Häufigkeiten zu Ursachen',
        text: 'Wer Prozesse automatisieren oder von Agenten steuern lässt, muss wissen, warum eine Abweichung entsteht – nicht nur, wie oft. Kausale Ursachenanalyse wird damit vom Spezialthema zum Auswahlkriterium.',
      },
    ],
    en: [
      {
        title: 'Process mining becomes the data foundation for AI agents',
        text: 'Agents need reliable process context to decide where they are allowed to act. Tools whose data model captures objects, relationships and business rules become the context layer for agentic AI in 2027.',
      },
      {
        title: 'From event log to graph',
        text: 'Reducing processes to a single case ID loses ground to object-centric and graph-based models. What matters is whether a model can grow incrementally with further processes, documents and organizational units.',
      },
      {
        title: 'From frequencies to causes',
        text: 'Anyone automating processes or letting agents steer them must know why a deviation occurs – not just how often. Causal root-cause analysis thus moves from a specialist topic to a selection criterion.',
      },
    ],
  },
  faq: [
    {
      question: {
        de: 'Welches Process Mining Tool ist das beste?',
        en: 'Which process mining tool is the best?',
      },
      answer: {
        de: 'Das hängt von Systemlandschaft und Ziel ab. Für kausale Ursachenanalyse über heterogene Quellsysteme liegt Noreja vorn, für breite Konnektivität im Großunternehmen Celonis, für SAP-zentrierte Landschaften SAP Signavio und für Conformance gegen governte Soll-Modelle ARIS. Wer vor allem Automatisierungskandidaten sucht, ist mit UiPath gut bedient.',
        en: 'It depends on your system landscape and goal. For causal root-cause analysis across heterogeneous source systems Noreja leads, for broad connectivity in large enterprises Celonis, for SAP-centric landscapes SAP Signavio, and for conformance against governed to-be models ARIS. If you are mainly looking for automation candidates, UiPath is a good fit.',
      },
    },
    {
      question: {
        de: 'Was unterscheidet case-zentriertes, objektzentriertes und graphbasiertes Process Mining?',
        en: 'What distinguishes case-centric, object-centric and graph-based process mining?',
      },
      answer: {
        de: 'Case-zentrierte Werkzeuge ordnen jedes Ereignis genau einer Fall-ID zu und verzerren damit Prozesse, an denen mehrere Objekte beteiligt sind. Objektzentrierte Event Logs erfassen mehrere Objekttypen je Ereignis. Ein Event Knowledge Graph speichert Ereignisse, Objekte und Beziehungen dauerhaft und lässt sich um Unternehmenswissen erweitern.',
        en: 'Case-centric tools assign every event to exactly one case ID and thus distort processes that involve several objects. Object-centric event logs capture several object types per event. An Event Knowledge Graph stores events, objects and relationships persistently and can be extended with enterprise knowledge.',
      },
    },
    {
      question: {
        de: 'Gibt es kostenlose oder Open-Source-Process-Mining-Tools?',
        en: 'Are there free or open-source process mining tools?',
      },
      answer: {
        de: 'Ja: ProM und die Python-Bibliothek PM4Py stammen aus der Forschung und eignen sich gut zum Lernen, für Experimente und wissenschaftliche Arbeiten. Für den produktiven Betrieb fehlen ihnen jedoch Konnektoren, Rechteverwaltung und Betriebsunterstützung, weshalb Unternehmen in der Regel auf kommerzielle Werkzeuge setzen.',
        en: 'Yes: ProM and the Python library PM4Py come from research and are well suited to learning, experiments and academic work. For production use, however, they lack connectors, permission management and operational support, which is why companies usually rely on commercial tools.',
      },
    },
    {
      question: {
        de: 'Welche Process Mining Tools führt Gartner 2026?',
        en: 'Which process mining tools does Gartner list in 2026?',
      },
      answer: {
        de: 'Gartner hat den Magic Quadrant am 5. Mai 2026 in „Magic Quadrant for Process Intelligence Platforms“ umbenannt und 13 Anbieter bewertet. Als Leader sind Celonis, SAP Signavio, ARIS und Pega positioniert; QPR ist zum vierten Mal in Folge Visionary. Noreja wurde 2026 in Gartners „Coolest Vendor Innovations in Process Intelligence“ genannt.',
        en: 'Gartner renamed its Magic Quadrant to “Magic Quadrant for Process Intelligence Platforms” on 5 May 2026 and evaluated 13 vendors. Celonis, SAP Signavio, ARIS and Pega are positioned as Leaders; QPR is a Visionary for the fourth consecutive year. Noreja was named in Gartner’s “Coolest Vendor Innovations in Process Intelligence” in 2026.',
      },
    },
    {
      question: {
        de: 'Wie schnell liefert ein Process Mining Tool erste Ergebnisse?',
        en: 'How quickly does a process mining tool deliver first results?',
      },
      answer: {
        de: 'Das bestimmt vor allem der Weg vom Quellsystem zum Datenmodell. Werkzeuge, die zunächst einen extrahierten Event Log benötigen, liefern belastbare Ergebnisse oft erst nach mehrmonatiger Einführung. Ansätze, die direkt auf den relationalen Quelltabellen aufsetzen und prozessweise starten, verkürzen diesen Weg – Datenqualität und Konfiguration bleiben dennoch Projektarbeit.',
        en: 'This is determined mainly by the path from source system to data model. Tools that first require an extracted event log often deliver reliable results only after a multi-month rollout. Approaches that start directly on relational source tables, one process at a time, shorten this path – although data quality and configuration still require project work.',
      },
    },
  ],
};
