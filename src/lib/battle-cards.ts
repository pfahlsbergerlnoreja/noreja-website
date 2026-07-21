import type { Language } from './translations';

/**
 * Analyse-Paradigma eines Werkzeugs.
 * - frequency: Modellbildung aus beobachteten Häufigkeiten und Directly-Follows-Relationen
 * - causal:    Rekonstruktion tatsächlicher Ursache-Wirkungs-Beziehungen auf einem semantischen Graphen
 * - hybrid:    frequenzbasierter Kern mit ergänzenden objektzentrierten oder prädiktiven Bausteinen
 */
export type AnalysisParadigm = 'frequency' | 'causal' | 'hybrid';

/** Grad der Bindung an ein bestimmtes Hersteller-Ökosystem. */
export type EcosystemLockIn = 'low' | 'medium' | 'high';

/** Reifegrad der kausalen Ursache-Wirkungs-Analyse. */
export type CausalMaturity = 'none' | 'partial' | 'native';

export interface BattleCard {
  /** URL-Slug, sprachübergreifend (z. B. "celonis") */
  id: string;
  /** Anzeigename des Anbieters/Werkzeugs */
  name: string;
  /** Kurzkategorie, als Chip auf der Karte gerendert */
  category: {
    de: string;
    en: string;
  };
  /** Einzeiler zur methodischen Ausrichtung */
  focus: {
    de: string;
    en: string;
  };
  /** Neutraler Überblick, 2–3 Sätze */
  summary: {
    de: string;
    en: string;
  };
  /** Technische Stärken / charakteristische Fähigkeiten */
  strengths: {
    de: string[];
    en: string[];
  };
  /** Sachliche Einordnung von Reichweite und methodischen Grenzen */
  considerations: {
    de: string[];
    en: string[];
  };
  /** Wodurch sich Norejas kausaler Ansatz methodisch abgrenzt */
  differentiator: {
    de: string;
    en: string;
  };
  /** Attribute für die Vergleichsmatrix */
  matrix: {
    paradigm: AnalysisParadigm;
    /** Zugrundeliegende Datenrepräsentation */
    dataModel: {
      de: string;
      en: string;
    };
    lockIn: EcosystemLockIn;
    causal: CausalMaturity;
  };
}

/**
 * Norejas Positionierung als Referenzpunkt der Übersicht.
 * Bewusst getrennt von den Wettbewerbskarten gehalten, damit die Seite
 * die eigene Methodik als Bezugsrahmen und nicht als bloßen Listeneintrag darstellt.
 */
export const norejaProfile = {
  name: 'Noreja',
  category: {
    de: 'Kausale Process Intelligence',
    en: 'Causal Process Intelligence',
  },
  focus: {
    de: 'Ursache-Wirkungs-Analyse auf einem Event Knowledge Graph statt frequenzbasierter Directly-Follows-Modelle.',
    en: 'Cause-and-effect analysis on an Event Knowledge Graph instead of frequency-based Directly-Follows models.',
  },
  summary: {
    de: 'Noreja verortet Prozessverhalten in einem semantischen Modell aus Geschäftsobjekten, Domänenwissen und Geschäftsregeln. Statt aus der bloßen Häufigkeit von Aktivitätsfolgen auf Zusammenhänge zu schließen, unterscheidet die Plattform kausal, ob eine Abweichung ein legitimer Prozesspfad oder ein Fehlermuster ist – und macht KI-Empfehlungen dadurch nachvollziehbar.',
    en: 'Noreja situates process behavior within a semantic model of business objects, domain knowledge, and business rules. Instead of inferring relationships from the sheer frequency of activity sequences, the platform distinguishes causally whether a deviation is a legitimate process path or an error pattern – making AI recommendations traceable.',
  },
  pillars: {
    de: [
      {
        title: 'Event Knowledge Graph statt flacher Logs',
        text: 'Ereignisse, Objekte und ihre Beziehungen werden als Graph gespeichert. Damit entfällt die Reduktion mehrdimensionaler Prozesse auf eine einzige Fall-ID – die zentrale Verzerrungsquelle case-zentrierter Verfahren.',
      },
      {
        title: 'Von der Frequenz zur Kausalität',
        text: 'Directly-Follows-Häufigkeiten belegen zeitliche Nähe, nicht Ursächlichkeit. Norejas Kausalmodell trennt echte Auslöser von Koinzidenz und vermeidet die falschen Kausalannahmen frequenzbasierter Prozessgraphen.',
      },
      {
        title: 'Semantik & Process Frontier Agents',
        text: 'Geschäftslogik und Fachwissen sind Teil des Modells. Abweichungen werden fachlich als Nacharbeit, Fehler oder Batching-Effekt klassifiziert – die Grundlage für Process Frontier Agents, die daraus kontinuierlich Optimierungs- und Automatisierungspotenziale erschließen.',
      },
    ],
    en: [
      {
        title: 'Event Knowledge Graph instead of flat logs',
        text: 'Events, objects, and their relationships are stored as a graph. This removes the need to reduce multidimensional processes to a single case ID – the core source of distortion in case-centric methods.',
      },
      {
        title: 'From frequency to causality',
        text: 'Directly-follows frequencies evidence temporal proximity, not causation. Noreja’s causal model separates genuine triggers from coincidence and avoids the false causal assumptions of frequency-based process graphs.',
      },
      {
        title: 'Semantics & Process Frontier Agents',
        text: 'Business logic and domain knowledge are part of the model. Deviations are classified in business terms as rework, error, or batching effect – the foundation for Process Frontier Agents that continuously surface optimization and automation potential.',
      },
    ],
  },
} as const;

export const battleCards: BattleCard[] = [
  {
    id: 'celonis',
    name: 'Celonis',
    category: {
      de: 'Marktpionier · ERP-Event-Log',
      en: 'Market pioneer · ERP event log',
    },
    focus: {
      de: 'Retrospektive Prozessexploration auf Basis extrahierter ERP-Event-Logs.',
      en: 'Retrospective process exploration based on extracted ERP event logs.',
    },
    summary: {
      de: 'Celonis hat den Markt für Process Mining maßgeblich geprägt und die Extraktion von Event-Logs aus Transaktionssystemen früh industrialisiert. Die Plattform ist breit im Enterprise-Umfeld verankert und deckt Discovery, Conformance und Reporting umfassend ab.',
      en: 'Celonis substantially shaped the process mining market and industrialized the extraction of event logs from transactional systems early on. The platform is broadly established in the enterprise space and covers discovery, conformance, and reporting comprehensively.',
    },
    strengths: {
      de: [
        'Größte Auswahl an vorgefertigten Schnittstellen und Konnektoren am Markt',
        'Ausgereifte, umfangreiche Schulungs- und Enablement-Programme',
        'Workflow-Trigger (Action Engine) für automatisierte Folgeaktionen',
        'Umfangreiche Bibliothek an Standard-KPIs und Prozess-Apps',
      ],
      en: [
        'Largest selection of pre-built interfaces and connectors on the market',
        'Mature, extensive training and enablement programs',
        'Workflow triggers (Action Engine) for automated follow-up actions',
        'Extensive library of standard KPIs and process apps',
      ],
    },
    considerations: {
      de: [
        'Modellbildung basiert auf Directly-Follows-Frequenzen und bildet Reihenfolge, nicht Ursächlichkeit ab',
        'Aufwändige Datenextraktion und -aufbereitung vor der ersten belastbaren Analyse',
        'Erste belastbare Discovery-Ergebnisse häufig erst nach mehrmonatiger Einführung',
      ],
      en: [
        'Model construction relies on directly-follows frequencies and reflects sequence, not causation',
        'Labor-intensive data extraction and preparation before the first reliable analysis',
        'First reliable discovery results often only after a multi-month rollout',
      ],
    },
    differentiator: {
      de: 'Noreja ergänzt die frequenzbasierte Analyse um ein echtes kausales und temporales Modell auf einem Event Knowledge Graph und deckt so Ursache-Wirkungs-Beziehungen statt bloßer Häufigkeiten auf.',
      en: 'Noreja complements frequency-based analysis with a genuine causal and temporal model on an Event Knowledge Graph, uncovering cause-and-effect relationships rather than mere frequencies.',
    },
    matrix: {
      paradigm: 'frequency',
      dataModel: {
        de: 'Objekt-zentrischer Event Log',
        en: 'Object-centric event log',
      },
      lockIn: 'medium',
      causal: 'none',
    },
  },
  {
    id: 'sap-signavio',
    name: 'SAP Signavio',
    category: {
      de: 'SAP-Ökosystem · BPM-Suite',
      en: 'SAP ecosystem · BPM suite',
    },
    focus: {
      de: 'Prozesstransformation eng verzahnt mit dem SAP-Technologie-Stack.',
      en: 'Process transformation tightly interwoven with the SAP technology stack.',
    },
    summary: {
      de: 'Signavio verbindet Process Mining mit Prozessmodellierung und Business Process Management innerhalb der SAP Business Technology Platform. Für Organisationen mit SAP-zentrierter Landschaft reduziert die native Anbindung den Integrationsaufwand spürbar.',
      en: 'Signavio combines process mining with process modeling and business process management inside the SAP Business Technology Platform. For organizations with an SAP-centric landscape, the native connectivity noticeably reduces integration effort.',
    },
    strengths: {
      de: [
        'Tiefe, weitgehend vorkonfigurierte Anbindung an SAP-Quellsysteme',
        'Große angrenzende Produktfamilie rund um Modellierung und Prozess-Governance',
        'Durchgängige Suite von Modellierung über Mining bis Conformance',
        'Branchen-Benchmarks zur Einordnung der eigenen Kennzahlen',
      ],
      en: [
        'Deep, largely pre-configured connectivity to SAP source systems',
        'Large adjacent product family for modeling and process governance',
        'End-to-end suite from modeling through mining to conformance',
        'Industry benchmarks for contextualizing your own metrics',
      ],
    },
    considerations: {
      de: [
        'Voller Nutzen entfaltet sich vor allem innerhalb SAP-dominierter Landschaften',
        'Analyse folgt einer klassischen, case-zentrierten Prozessperspektive',
        'Heterogene Nicht-SAP-Quellen erfordern zusätzlichen Integrationsaufwand',
      ],
      en: [
        'Full value unfolds primarily within SAP-dominated landscapes',
        'Analysis follows a classic, case-centric process perspective',
        'Heterogeneous non-SAP sources require additional integration effort',
      ],
    },
    differentiator: {
      de: 'Noreja ist quellsystem-agnostisch und modelliert übergreifende Objektbeziehungen im Graphen, statt die Analyse an ein einzelnes ERP-Ökosystem zu binden.',
      en: 'Noreja is source-system agnostic and models cross-cutting object relationships in a graph rather than tying analysis to a single ERP ecosystem.',
    },
    matrix: {
      paradigm: 'frequency',
      dataModel: {
        de: 'Case-zentrierter Event-Log',
        en: 'Case-centric event log',
      },
      lockIn: 'high',
      causal: 'none',
    },
  },
  {
    id: 'uipath-process-mining',
    name: 'UiPath Process Mining',
    category: {
      de: 'RPA-getriebene Discovery',
      en: 'RPA-driven discovery',
    },
    focus: {
      de: 'Prozess- und Task-Discovery als Zulieferer für Automatisierung.',
      en: 'Process and task discovery feeding automation.',
    },
    summary: {
      de: 'UiPath integriert Process Mining, Task Mining und Communications Mining in eine automatisierungszentrierte Plattform. Erkenntnisse fließen in einem geschlossenen Kreislauf direkt in die Entwicklung und den Betrieb von Software-Robotern.',
      en: 'UiPath integrates process mining, task mining, and communications mining into an automation-centric platform. Insights feed directly into building and operating software robots in a closed loop.',
    },
    strengths: {
      de: [
        'Nahtloser Übergang von der Analyse zur RPA-Umsetzung',
        'Kombinierte Sicht auf System-, Desktop- und Kommunikationsdaten',
        'Integrierte Governance und ROI-Nachverfolgung für Automatisierung',
      ],
      en: [
        'Seamless transition from analysis to RPA implementation',
        'Combined view of system, desktop, and communication data',
        'Integrated governance and ROI tracking for automation',
      ],
    },
    considerations: {
      de: [
        'Discovery ist primär auf das Auffinden von Automatisierungskandidaten ausgerichtet',
        'Analytische Tiefe kausaler Ursachenanalyse ist der Automatisierung nachgeordnet',
        'Voller Wert entsteht im Zusammenspiel mit der UiPath-Automatisierungsplattform',
      ],
      en: [
        'Discovery is primarily geared toward finding automation candidates',
        'Analytical depth of causal root-cause analysis is subordinate to automation',
        'Full value emerges in conjunction with the UiPath automation platform',
      ],
    },
    differentiator: {
      de: 'Noreja stellt die kausale Diagnose voran: Erst das semantische Verständnis der Ursachen entscheidet, welche Schritte überhaupt automatisiert werden sollten – plattformunabhängig.',
      en: 'Noreja puts causal diagnosis first: only a semantic understanding of causes determines which steps should be automated at all – independent of any platform.',
    },
    matrix: {
      paradigm: 'frequency',
      dataModel: {
        de: 'Event-Log + Task-Mining',
        en: 'Event log + task mining',
      },
      lockIn: 'medium',
      causal: 'none',
    },
  },
  {
    id: 'ibm-process-mining',
    name: 'IBM Process Mining',
    category: {
      de: 'Reguliert · Hybrid-Cloud · OCPM',
      en: 'Regulated · hybrid cloud · OCPM',
    },
    focus: {
      de: 'Objektzentriertes Mining für komplexe, regulierte Enterprise-Umgebungen.',
      en: 'Object-centric mining for complex, regulated enterprise environments.',
    },
    summary: {
      de: 'IBM Process Mining ist Teil der Cloud Pak for Business Automation und unterstützt objektzentriertes Process Mining (OCPM) sowie prädiktive und präskriptive Analytik. Die Hybrid-Cloud-Fähigkeit adressiert strenge Anforderungen an Datenresidenz und Compliance.',
      en: 'IBM Process Mining is part of Cloud Pak for Business Automation and supports object-centric process mining (OCPM) as well as predictive and prescriptive analytics. Hybrid-cloud capability addresses strict data-residency and compliance requirements.',
    },
    strengths: {
      de: [
        'Objektzentrierte Analyse überwindet die starre Ein-Fall-Sicht',
        'Datengetriebene Simulation und präskriptive Empfehlungen',
        'On-Premise- und Hybrid-Betrieb für regulierte Branchen',
      ],
      en: [
        'Object-centric analysis overcomes the rigid single-case view',
        'Data-driven simulation and prescriptive recommendations',
        'On-premise and hybrid operation for regulated industries',
      ],
    },
    considerations: {
      de: [
        'Objektzentriert, methodisch aber weiterhin frequenzbasiert statt kausal',
        'Vollständiger Nutzen meist im Bündel mit der IBM-Automation-Suite',
        'Einführung und Betrieb erfordern erheblichen Implementierungsaufwand',
      ],
      en: [
        'Object-centric, yet methodically still frequency-based rather than causal',
        'Full value usually bundled with the IBM automation suite',
        'Rollout and operation require substantial implementation effort',
      ],
    },
    differentiator: {
      de: 'Noreja geht über die objektzentrierte Frequenzsicht hinaus und modelliert im Graphen die kausalen Beziehungen zwischen Ereignissen – nicht nur ihre Zuordnung zu mehreren Objekten.',
      en: 'Noreja goes beyond the object-centric frequency view and models the causal relationships between events in a graph – not merely their assignment to multiple objects.',
    },
    matrix: {
      paradigm: 'hybrid',
      dataModel: {
        de: 'Objekt-zentrischer Event Log',
        en: 'Object-centric event log',
      },
      lockIn: 'high',
      causal: 'partial',
    },
  },
  {
    id: 'microsoft-process-mining',
    name: 'Microsoft Process Mining',
    category: {
      de: 'Power Platform · Low-Code',
      en: 'Power Platform · low-code',
    },
    focus: {
      de: 'Zugängliches Process Mining im Microsoft-Ökosystem.',
      en: 'Accessible process mining within the Microsoft ecosystem.',
    },
    summary: {
      de: 'Als Teil von Power Automate bringt Microsoft Process Mining Prozessanalyse in die vertraute Power Platform. Der Low-Code-Ansatz senkt die Einstiegshürde und verbindet Discovery, RPA und Dokumentenverarbeitung in einer durchgängigen Umgebung.',
      en: 'As part of Power Automate, Microsoft Process Mining brings process analysis into the familiar Power Platform. The low-code approach lowers the entry barrier and connects discovery, RPA, and document processing in one continuous environment.',
    },
    strengths: {
      de: [
        'Enge Verzahnung mit Azure, Power BI und Microsoft 365',
        'Niedrige Einstiegshürde durch Low-Code und vertraute Oberflächen',
        'Konversationelle Abfragen über integrierte Sprachmodelle',
      ],
      en: [
        'Tight integration with Azure, Power BI, and Microsoft 365',
        'Low entry barrier through low-code and familiar interfaces',
        'Conversational queries via integrated language models',
      ],
    },
    considerations: {
      de: [
        'Ausrichtung auf Zugänglichkeit statt methodischer Analysetiefe',
        'Voller Nutzen setzt eine Microsoft-zentrierte Landschaft voraus',
        'Prozessmodelle bleiben in der frequenzbasierten Logik verhaftet',
      ],
      en: [
        'Oriented toward accessibility rather than analytical depth',
        'Full value presupposes a Microsoft-centric landscape',
        'Process models remain tied to frequency-based logic',
      ],
    },
    differentiator: {
      de: 'Noreja adressiert die methodische Tiefe: kausale Modellierung und semantischer Kontext statt breiter, aber frequenzbasierter Zugänglichkeit im geschlossenen Ökosystem.',
      en: 'Noreja addresses analytical depth: causal modeling and semantic context instead of broad but frequency-based accessibility within a closed ecosystem.',
    },
    matrix: {
      paradigm: 'frequency',
      dataModel: {
        de: 'Case-zentrierter Event-Log',
        en: 'Case-centric event log',
      },
      lockIn: 'high',
      causal: 'none',
    },
  },
  {
    id: 'servicenow-process-mining',
    name: 'ServiceNow Process Mining',
    category: {
      de: 'ITSM-nativ · Serviceprozesse',
      en: 'ITSM-native · service processes',
    },
    focus: {
      de: 'Prozess-Transparenz nativ innerhalb der ServiceNow-Plattform.',
      en: 'Process transparency native to the ServiceNow platform.',
    },
    summary: {
      de: 'ServiceNow integriert Process Mining direkt in die eigene Plattform und zielt auf IT-Service-Management-Abläufe. Für bestehende ServiceNow-Kunden entfällt die separate Datenextraktion, Erkenntnisse fließen unmittelbar in operative Dashboards.',
      en: 'ServiceNow integrates process mining directly into its own platform and targets IT service management workflows. For existing ServiceNow customers, separate data extraction is unnecessary, and insights flow straight into operational dashboards.',
    },
    strengths: {
      de: [
        'Keine externe Datenextraktion für ServiceNow-Prozesse nötig',
        'Echtzeit-KPI-Überwachung für SLA-Konformität',
        'Geführtes Setup mit schnellem Time-to-Insight im ITSM-Kontext',
      ],
      en: [
        'No external data extraction needed for ServiceNow processes',
        'Real-time KPI monitoring for SLA compliance',
        'Guided setup with fast time-to-insight in the ITSM context',
      ],
    },
    considerations: {
      de: [
        'Fokus liegt auf Service-Management-Abläufen innerhalb der Plattform',
        'Übergreifende End-to-End-Prozesse über Fremdsysteme sind nur eingeschränkt abbildbar',
        'Analyse bleibt auf die frequenzbasierte Prozesssicht beschränkt',
      ],
      en: [
        'Focus lies on service-management workflows within the platform',
        'Cross-system end-to-end processes are only partially representable',
        'Analysis remains confined to the frequency-based process view',
      ],
    },
    differentiator: {
      de: 'Noreja analysiert End-to-End-Prozesse über Systemgrenzen hinweg im Graphen, statt auf die Serviceprozesse einer einzelnen Plattform beschränkt zu sein.',
      en: 'Noreja analyzes end-to-end processes across system boundaries in a graph, rather than being confined to the service processes of a single platform.',
    },
    matrix: {
      paradigm: 'frequency',
      dataModel: {
        de: 'Plattform-native Logs',
        en: 'Platform-native logs',
      },
      lockIn: 'high',
      causal: 'none',
    },
  },
  {
    id: 'abbyy-timeline',
    name: 'ABBYY Timeline',
    category: {
      de: 'Dokumentenzentriert · Task Mining',
      en: 'Document-centric · task mining',
    },
    focus: {
      de: 'Prozessintelligenz für dokumenten- und interaktionsgetriebene Abläufe.',
      en: 'Process intelligence for document- and interaction-driven workflows.',
    },
    summary: {
      de: 'ABBYY Timeline verbindet Task- und Process Mining mit der Dokumentenverarbeitungs-Historie von ABBYY. Über Mustererkennung erschließt die Plattform Kontext aus Dokumenten und E-Mails und eignet sich für dokumentenintensive Abläufe.',
      en: 'ABBYY Timeline combines task and process mining with ABBYY’s document-processing heritage. Through pattern recognition, the platform surfaces context from documents and emails and suits document-intensive workflows.',
    },
    strengths: {
      de: [
        'Starke Erschließung unstrukturierter Dokumenten- und E-Mail-Kontexte',
        'Kombination aus Task Mining und Prozessanalyse',
        'Root-Cause- und Compliance-Auswertungen für regulierte Abläufe',
      ],
      en: [
        'Strong extraction of unstructured document and email context',
        'Combination of task mining and process analysis',
        'Root-cause and compliance evaluations for regulated workflows',
      ],
    },
    considerations: {
      de: [
        'Stärken vor allem bei dokumentenzentrierten Anwendungsfällen',
        'Kein graphbasiertes, kausales Prozessmodell im Kern',
        'Übergreifende Objektbeziehungen werden nicht semantisch modelliert',
      ],
      en: [
        'Strengths primarily in document-centric use cases',
        'No graph-based, causal process model at its core',
        'Cross-cutting object relationships are not modeled semantically',
      ],
    },
    differentiator: {
      de: 'Noreja modelliert Prozesse als semantischen Graphen mit kausalen Beziehungen zwischen Ereignissen und ist damit nicht auf dokumentengetriebene Abläufe zugeschnitten.',
      en: 'Noreja models processes as a semantic graph with causal relationships between events and is therefore not tailored to document-driven workflows.',
    },
    matrix: {
      paradigm: 'frequency',
      dataModel: {
        de: 'Event-Log + Dokumentenkontext',
        en: 'Event log + document context',
      },
      lockIn: 'medium',
      causal: 'partial',
    },
  },
  {
    id: 'appian',
    name: 'Appian',
    category: {
      de: 'Low-Code · Workflow-Orchestrierung',
      en: 'Low-code · workflow orchestration',
    },
    focus: {
      de: 'Prozess-Mining als Baustein einer Automatisierungs- und Orchestrierungsplattform.',
      en: 'Process mining as a building block of an automation and orchestration platform.',
    },
    summary: {
      de: 'Appian positioniert Process Mining als Bestandteil einer Low-Code-Plattform für Workflow-Automatisierung und Case Management. Erkenntnisse lassen sich in derselben Umgebung unmittelbar in orchestrierte Abläufe überführen.',
      en: 'Appian positions process mining as part of a low-code platform for workflow automation and case management. Insights can be translated directly into orchestrated workflows within the same environment.',
    },
    strengths: {
      de: [
        'Kurzer Weg von der Erkenntnis zur orchestrierten Umsetzung',
        'Low-Code-Entwicklung für schnelle Prozessänderungen',
        'Orchestrierung komplexer Abläufe über mehrere Systeme',
      ],
      en: [
        'Short path from insight to orchestrated implementation',
        'Low-code development for rapid process changes',
        'Orchestration of complex workflows across multiple systems',
      ],
    },
    considerations: {
      de: [
        'Mining ist eine Zusatzfunktion, nicht der methodische Kern der Plattform',
        'Analytische Tiefe der Prozessdiagnose ist der Orchestrierung nachgeordnet',
        'Kein kausales, graphbasiertes Prozessmodell',
      ],
      en: [
        'Mining is an add-on capability, not the platform’s methodical core',
        'Analytical depth of process diagnosis is subordinate to orchestration',
        'No causal, graph-based process model',
      ],
    },
    differentiator: {
      de: 'Noreja ist auf die kausale Prozessdiagnose spezialisiert – die belastbare Grundlage, bevor Abläufe orchestriert oder automatisiert werden.',
      en: 'Noreja specializes in causal process diagnosis – the reliable foundation before workflows are orchestrated or automated.',
    },
    matrix: {
      paradigm: 'frequency',
      dataModel: {
        de: 'Workflow-Logs',
        en: 'Workflow logs',
      },
      lockIn: 'high',
      causal: 'none',
    },
  },
  {
    id: 'aris-process-mining',
    name: 'ARIS Process Mining',
    category: {
      de: 'BPM-Erbe · Modell-Konformität',
      en: 'BPM heritage · model conformance',
    },
    focus: {
      de: 'Process Mining im geschlossenen Kreislauf mit dem ARIS-BPM-Repository.',
      en: 'Process mining in a closed loop with the ARIS BPM repository.',
    },
    summary: {
      de: 'ARIS verbindet seine langjährige BPM- und Modellierungshistorie mit Process Mining und KI in einer Umgebung. Der besondere Wert liegt im Abgleich beobachteter Ist-Abläufe gegen governte Soll-Modelle im ARIS-Repository – ein durchgängiger Kreislauf aus Analyse, Dokumentation und Conformance.',
      en: 'ARIS combines its long-standing BPM and modeling heritage with process mining and AI in one environment. Its particular value lies in comparing observed as-is flows against governed to-be models in the ARIS repository – a continuous loop of analysis, documentation, and conformance.',
    },
    strengths: {
      de: [
        'Enge Kopplung von Process Mining und governtem ARIS-Modell-Repository',
        'Große angrenzende Produktfamilie für Modellierung und Prozessverwaltung',
        'Automatisierte Conformance gegen Soll-Modelle (BPMN, EPK)',
        'KI-gestützter Root-Cause-Miner zur Korrelation von Verzögerungsfaktoren',
      ],
      en: [
        'Tight coupling of process mining with the governed ARIS model repository',
        'Large adjacent product family for modeling and process administration',
        'Automated conformance against to-be models (BPMN, EPC)',
        'AI-supported root-cause miner correlating delay factors',
      ],
    },
    considerations: {
      de: [
        'Voller Nutzen entsteht im Verbund mit der ARIS-BPM-Suite',
        'Root-Cause-Analyse bleibt korrelativ und frequenzbasiert statt kausal',
        'Analyse folgt einer case-zentrierten, modellzentrierten Prozesssicht',
      ],
      en: [
        'Full value emerges in conjunction with the ARIS BPM suite',
        'Root-cause analysis remains correlative and frequency-based rather than causal',
        'Analysis follows a case-centric, model-centric process view',
      ],
    },
    differentiator: {
      de: 'Noreja deckt kausale Ursache-Wirkungs-Beziehungen im Graphen auf, statt korrelierende Faktoren gegen ein hinterlegtes Soll-Modell zu gewichten – und benötigt kein vorgelagertes Modell-Repository.',
      en: 'Noreja uncovers causal cause-and-effect relationships in a graph rather than weighting correlating factors against a stored to-be model – and requires no upstream model repository.',
    },
    matrix: {
      paradigm: 'frequency',
      dataModel: {
        de: 'Case-zentrierter Event-Log',
        en: 'Case-centric event log',
      },
      lockIn: 'high',
      causal: 'partial',
    },
  },
  {
    id: 'mpmx-mehrwerk',
    name: 'mpmX (MEHRWERK)',
    category: {
      de: 'Qlik-basiert · Self-Service-Analytik',
      en: 'Qlik-based · self-service analytics',
    },
    focus: {
      de: 'Process Mining verzahnt mit der assoziativen Analytik von Qlik.',
      en: 'Process mining interwoven with Qlik’s associative analytics.',
    },
    summary: {
      de: 'mpmX des deutschen Anbieters MEHRWERK ist eng mit der Qlik-Technologie verwoben und verbindet klassische BI, Reporting und Self-Service-Process-Mining auf einer Plattform. Der assoziative Analyse-Ansatz ermöglicht flexible, interaktive Auswertungen und einen schnellen Einstieg für BI-affine Teams.',
      en: 'mpmX from German vendor MEHRWERK is tightly interwoven with Qlik technology and combines classic BI, reporting, and self-service process mining on one platform. The associative analysis approach enables flexible, interactive evaluations and a fast start for BI-savvy teams.',
    },
    strengths: {
      de: [
        'Löst komplexe n:m-Beziehungen zwischen Prozessobjekten zuverlässig auf',
        'In-Memory-Verarbeitung für performante, hochinteraktive Auswertungen',
        'Assoziative Analytik dank Qlik-Engine, kombiniert mit BI und Reporting',
        'Schneller Einstieg und Self-Service für datenaffine Fachbereiche',
      ],
      en: [
        'Reliably resolves complex n:m relationships between process objects',
        'In-memory processing for performant, highly interactive analysis',
        'Associative analytics via the Qlik engine, combined with BI and reporting',
        'Fast onboarding and self-service for data-savvy departments',
      ],
    },
    considerations: {
      de: [
        'Analytische Stärke ist an das Qlik-Technologiefundament gebunden',
        'Prozessanalyse bleibt frequenzbasiert ohne kausale Modellierung',
        'Kein graphbasiertes, semantisches Kausalmodell im Kern',
      ],
      en: [
        'Analytical strength is tied to the underlying Qlik technology foundation',
        'Process analysis remains frequency-based without causal modeling',
        'No graph-based, semantic causal model at its core',
      ],
    },
    differentiator: {
      de: 'Noreja setzt auf ein eigenständiges, graphbasiertes Kausal- und Temporalmodell statt einer auf BI-Technologie aufsetzenden Frequenzanalyse – und trennt so echte Ursachen von statistischer Koinzidenz.',
      en: 'Noreja relies on a dedicated, graph-based causal and temporal model instead of a frequency analysis built on top of BI technology – thereby separating genuine causes from statistical coincidence.',
    },
    matrix: {
      paradigm: 'frequency',
      dataModel: {
        de: 'Relationales Modell (n:m), In-Memory',
        en: 'Relational model (n:m), in-memory',
      },
      lockIn: 'high',
      causal: 'none',
    },
  },
];

export interface BattleCardFaqItem {
  question: { de: string; en: string };
  answer: { de: string; en: string };
}

export interface BattleCardDetail {
  /** Kurzer Markenname für den „Noreja vs. X"-Titel (z. B. "Signavio") */
  vsName: string;
  /** Ausführliche Einleitung des Head-to-Head-Vergleichs */
  intro: { de: string; en: string };
  /** SEO-FAQ, als FAQPage-Schema ausgezeichnet */
  faq: BattleCardFaqItem[];
}

/**
 * Erweiterte, eigenständig formulierte Vergleichsinhalte je Anbieter.
 * Bewusst als separate Struktur gehalten, damit die kompakten Karten der
 * Übersicht und die ausführlichen Vergleichsseiten getrennt gepflegt werden können.
 */
export const battleCardDetails: Record<string, BattleCardDetail> = {
  celonis: {
    vsName: 'Celonis',
    intro: {
      de: 'Celonis gilt als Pionier des Process Mining und ist für seine breite Konnektoren-Landschaft, ausgereifte Schulungsprogramme und Workflow-Trigger bekannt. Der Vergleich beleuchtet die methodische Kernfrage: Während Celonis Prozesse überwiegend aus Directly-Follows-Häufigkeiten auf extrahierten Event-Logs rekonstruiert, analysiert Noreja Ursache-Wirkungs- und Zeitbeziehungen direkt auf einem Event Knowledge Graph. Beide adressieren dieselben Enterprise-Prozesse in Order-to-Cash, Purchase-to-Pay oder Service – der Unterschied liegt darin, ob beobachtete Häufigkeit oder rekonstruierte Kausalität die Analysegrundlage bildet.',
      en: 'Celonis is regarded as the pioneer of process mining and is known for its broad connector landscape, mature training programs, and workflow triggers. This comparison examines the core methodical question: while Celonis reconstructs processes predominantly from directly-follows frequencies on extracted event logs, Noreja analyzes cause-and-effect and temporal relationships directly on an Event Knowledge Graph. Both address the same enterprise processes in order-to-cash, purchase-to-pay, or service – the difference lies in whether observed frequency or reconstructed causality forms the basis of analysis.',
    },
    faq: [
      {
        question: {
          de: 'Ist Noreja eine Alternative zu Celonis?',
          en: 'Is Noreja an alternative to Celonis?',
        },
        answer: {
          de: 'Ja. Noreja deckt dieselben Enterprise-Anwendungsfälle ab, setzt jedoch auf ein kausales und temporales Analysemodell statt auf frequenzbasierte Directly-Follows-Graphen. Die vorgelagerte Konstruktion flacher Event-Logs entfällt, da Noreja direkt auf relationalen Quellen und einem Graphmodell arbeitet.',
          en: 'Yes. Noreja covers the same enterprise use cases but relies on a causal and temporal analysis model instead of frequency-based directly-follows graphs. The upfront construction of flat event logs is unnecessary, as Noreja works directly on relational sources and a graph model.',
        },
      },
      {
        question: {
          de: 'Worin unterscheiden sich Noreja und Celonis technisch?',
          en: 'How do Noreja and Celonis differ technically?',
        },
        answer: {
          de: 'Celonis modelliert Prozesse auf Basis extrahierter Event-Logs und Directly-Follows-Frequenzen. Noreja speichert Ereignisse, Geschäftsobjekte und ihre Beziehungen als Event Knowledge Graph und rekonstruiert daraus kausale Zusammenhänge – nicht nur beobachtete Reihenfolgen. Dadurch werden falsche Kausalannahmen aus reiner zeitlicher Nähe vermieden.',
          en: 'Celonis models processes based on extracted event logs and directly-follows frequencies. Noreja stores events, business objects, and their relationships as an Event Knowledge Graph and reconstructs causal relationships from it – not just observed sequences. This avoids false causal assumptions derived from mere temporal proximity.',
        },
      },
      {
        question: {
          de: 'Ist Noreja günstiger als Celonis?',
          en: 'Is Noreja more affordable than Celonis?',
        },
        answer: {
          de: 'Noreja veröffentlicht sein Pricing transparent und öffentlich, während Celonis mit individuellen Enterprise-Angeboten arbeitet. Ein direkter Vergleich ist über die Preisseite von Noreja möglich.',
          en: 'Noreja publishes its pricing transparently and publicly, whereas Celonis works with individual enterprise quotes. A direct comparison is possible via Noreja’s pricing page.',
        },
      },
    ],
  },
  'sap-signavio': {
    vsName: 'Signavio',
    intro: {
      de: 'SAP Signavio verbindet Process Mining mit Prozessmodellierung und Governance und ist besonders in SAP-zentrierten Landschaften stark – gestützt auf eine große angrenzende Produktfamilie rund um Modellierung und Verwaltung. Der Vergleich zeigt, wie sich Norejas quellsystem-agnostischer, kausaler Ansatz von der SAP-nahen, case-zentrierten Prozesssicht abgrenzt. Wo Signavio seine Stärke aus der Integration in das SAP-Ökosystem zieht, modelliert Noreja übergreifende Objektbeziehungen unabhängig vom führenden ERP.',
      en: 'SAP Signavio combines process mining with process modeling and governance and is particularly strong in SAP-centric landscapes – backed by a large adjacent product family for modeling and administration. This comparison shows how Noreja’s source-system-agnostic, causal approach differs from the SAP-oriented, case-centric process view. Where Signavio draws its strength from integration into the SAP ecosystem, Noreja models cross-cutting object relationships independently of the leading ERP.',
    },
    faq: [
      {
        question: {
          de: 'Ist Noreja eine Alternative zu SAP Signavio?',
          en: 'Is Noreja an alternative to SAP Signavio?',
        },
        answer: {
          de: 'Ja, insbesondere für Organisationen mit heterogenen Systemlandschaften. Noreja ist nicht an das SAP-Ökosystem gebunden und analysiert End-to-End-Prozesse quellsystem-agnostisch auf einem Event Knowledge Graph.',
          en: 'Yes, especially for organizations with heterogeneous system landscapes. Noreja is not tied to the SAP ecosystem and analyzes end-to-end processes in a source-system-agnostic way on an Event Knowledge Graph.',
        },
      },
      {
        question: {
          de: 'Brauche ich SAP, um Noreja zu nutzen?',
          en: 'Do I need SAP to use Noreja?',
        },
        answer: {
          de: 'Nein. Noreja bindet relationale Quellen unabhängig vom führenden ERP an. Signavio entfaltet seinen vollen Nutzen dagegen vor allem innerhalb SAP-dominierter Landschaften.',
          en: 'No. Noreja connects to relational sources independently of the leading ERP. Signavio, by contrast, unfolds its full value primarily within SAP-dominated landscapes.',
        },
      },
      {
        question: {
          de: 'Ersetzt Noreja die Modellierungswerkzeuge von Signavio?',
          en: 'Does Noreja replace Signavio’s modeling tools?',
        },
        answer: {
          de: 'Noreja fokussiert auf die kausale Prozessdiagnose und weniger auf eine breite Modellierungs- und Governance-Suite. Wer primär datengetriebene Ursachenanalyse und keine ausgedehnte BPM-Modellierungslandschaft sucht, findet in Noreja einen schlankeren, spezialisierten Ansatz.',
          en: 'Noreja focuses on causal process diagnosis rather than a broad modeling and governance suite. Those primarily seeking data-driven root-cause analysis, rather than an extensive BPM modeling landscape, will find Noreja a leaner, specialized approach.',
        },
      },
    ],
  },
  'uipath-process-mining': {
    vsName: 'UiPath',
    intro: {
      de: 'UiPath ist als RPA-Plattform etabliert und integriert Process Mining, Task Mining und Communications Mining in einen automatisierungszentrierten Kreislauf. Der Vergleich verdeutlicht die unterschiedliche Priorisierung: UiPath richtet Discovery primär auf das Auffinden von Automatisierungskandidaten aus, während Noreja die kausale Diagnose voranstellt. Erst das semantische Verständnis der Ursachen entscheidet bei Noreja, welche Schritte überhaupt automatisiert werden sollten – plattformunabhängig statt auf einen RPA-Stack ausgerichtet.',
      en: 'UiPath is established as an RPA platform and integrates process mining, task mining, and communications mining into an automation-centric loop. This comparison highlights the different prioritization: UiPath orients discovery primarily toward finding automation candidates, while Noreja puts causal diagnosis first. Only a semantic understanding of causes determines, in Noreja, which steps should be automated at all – platform-independent rather than geared toward an RPA stack.',
    },
    faq: [
      {
        question: {
          de: 'Ist Noreja eine Alternative zu UiPath Process Mining?',
          en: 'Is Noreja an alternative to UiPath Process Mining?',
        },
        answer: {
          de: 'Ja, für Organisationen, die eine tiefe, kausale Prozessdiagnose vor der Automatisierung suchen. Noreja ist plattformunabhängig und bindet die Analyse nicht an einen bestimmten RPA-Stack.',
          en: 'Yes, for organizations seeking deep, causal process diagnosis before automation. Noreja is platform-independent and does not tie the analysis to a specific RPA stack.',
        },
      },
      {
        question: {
          de: 'Ergänzt Noreja bestehende Automatisierung?',
          en: 'Does Noreja complement existing automation?',
        },
        answer: {
          de: 'Ja. Noreja liefert mit Process Frontier Agents und einer kausal fundierten Priorisierung die Grundlage dafür, welche Prozesse sich lohnend automatisieren lassen – unabhängig davon, welche Automatisierungsplattform anschließend zum Einsatz kommt.',
          en: 'Yes. With Process Frontier Agents and a causally grounded prioritization, Noreja provides the basis for which processes are worth automating – regardless of which automation platform is used afterward.',
        },
      },
      {
        question: {
          de: 'Analysiert Noreja auch die Ursachen von Ineffizienzen?',
          en: 'Does Noreja also analyze the causes of inefficiencies?',
        },
        answer: {
          de: 'Genau darauf liegt der Fokus. Statt Automatisierungskandidaten nur zu identifizieren, deckt Noreja über das kausale Modell auf, warum Nacharbeit, Verzögerungen oder Fehler entstehen.',
          en: 'That is precisely the focus. Rather than merely identifying automation candidates, Noreja uses its causal model to reveal why rework, delays, or errors arise.',
        },
      },
    ],
  },
  'ibm-process-mining': {
    vsName: 'IBM',
    intro: {
      de: 'IBM Process Mining ist Teil der Cloud Pak for Business Automation, unterstützt objektzentriertes Mining (OCPM) und bietet Hybrid-Cloud-Betrieb für regulierte Umgebungen. Der Vergleich zeigt eine feine, aber entscheidende Abgrenzung: IBM überwindet mit OCPM zwar die starre Ein-Fall-Sicht, bleibt methodisch jedoch frequenzbasiert. Noreja geht darüber hinaus und modelliert im Graphen die kausalen Beziehungen zwischen Ereignissen – nicht nur ihre Zuordnung zu mehreren Objekten.',
      en: 'IBM Process Mining is part of Cloud Pak for Business Automation, supports object-centric mining (OCPM), and offers hybrid-cloud operation for regulated environments. This comparison reveals a subtle but decisive distinction: while IBM overcomes the rigid single-case view with OCPM, it remains methodically frequency-based. Noreja goes further and models the causal relationships between events in a graph – not merely their assignment to multiple objects.',
    },
    faq: [
      {
        question: {
          de: 'Ist Noreja eine Alternative zu IBM Process Mining?',
          en: 'Is Noreja an alternative to IBM Process Mining?',
        },
        answer: {
          de: 'Ja. Beide adressieren komplexe, mehrdimensionale Prozesse. Noreja ergänzt die objektzentrierte Sicht um eine echte kausale und temporale Analyse und ist nicht an eine umfassende Automation-Suite gebunden.',
          en: 'Yes. Both address complex, multidimensional processes. Noreja complements the object-centric view with genuine causal and temporal analysis and is not tied to a comprehensive automation suite.',
        },
      },
      {
        question: {
          de: 'Ist OCPM dasselbe wie der kausale Ansatz von Noreja?',
          en: 'Is OCPM the same as Noreja’s causal approach?',
        },
        answer: {
          de: 'Nein. OCPM bezieht mehrere Objekttypen ein, bleibt aber eine frequenzbasierte Methode. Norejas Event Knowledge Graph modelliert zusätzlich die kausalen Ursache-Wirkungs-Beziehungen zwischen Ereignissen.',
          en: 'No. OCPM incorporates multiple object types but remains a frequency-based method. Noreja’s Event Knowledge Graph additionally models the causal cause-and-effect relationships between events.',
        },
      },
      {
        question: {
          de: 'Eignet sich Noreja für regulierte Branchen?',
          en: 'Is Noreja suitable for regulated industries?',
        },
        answer: {
          de: 'Ja. Der semantische Kontext macht KI-Empfehlungen nachvollziehbar und Abweichungen fachlich begründbar – ein Vorteil in Umgebungen mit hohen Compliance- und Nachweisanforderungen.',
          en: 'Yes. The semantic context makes AI recommendations traceable and deviations justifiable in business terms – an advantage in environments with high compliance and audit requirements.',
        },
      },
    ],
  },
  'microsoft-process-mining': {
    vsName: 'Microsoft',
    intro: {
      de: 'Microsoft Process Mining ist Teil von Power Automate und bringt Prozessanalyse niederschwellig in die Power Platform. Der Low-Code-Ansatz senkt die Einstiegshürde, ist aber auf Zugänglichkeit statt methodische Tiefe ausgelegt und entfaltet seinen Nutzen vor allem in Microsoft-zentrierten Landschaften. Noreja adressiert demgegenüber die analytische Tiefe: kausale Modellierung und semantischer Kontext statt breiter, aber frequenzbasierter Auswertung im geschlossenen Ökosystem.',
      en: 'Microsoft Process Mining is part of Power Automate and brings process analysis into the Power Platform with a low entry barrier. The low-code approach lowers the threshold but is geared toward accessibility rather than analytical depth, and unfolds its value primarily in Microsoft-centric landscapes. Noreja, by contrast, addresses analytical depth: causal modeling and semantic context instead of broad but frequency-based evaluation within a closed ecosystem.',
    },
    faq: [
      {
        question: {
          de: 'Ist Noreja eine Alternative zu Microsoft Process Mining?',
          en: 'Is Noreja an alternative to Microsoft Process Mining?',
        },
        answer: {
          de: 'Ja, vor allem wenn methodische Tiefe gefragt ist. Noreja ist nicht an die Power Platform gebunden und liefert mit dem kausalen Modell mehr als eine frequenzbasierte Prozesssicht.',
          en: 'Yes, especially when analytical depth is required. Noreja is not tied to the Power Platform and, with its causal model, delivers more than a frequency-based process view.',
        },
      },
      {
        question: {
          de: 'Brauche ich das Microsoft-Ökosystem für Noreja?',
          en: 'Do I need the Microsoft ecosystem for Noreja?',
        },
        answer: {
          de: 'Nein. Noreja arbeitet quellsystem-agnostisch. Microsoft Process Mining hingegen setzt für den vollen Nutzen eine Microsoft-zentrierte Landschaft voraus.',
          en: 'No. Noreja works in a source-system-agnostic manner. Microsoft Process Mining, on the other hand, presupposes a Microsoft-centric landscape for full value.',
        },
      },
      {
        question: {
          de: 'Ist Noreja auch für Fachanwender zugänglich?',
          en: 'Is Noreja also accessible to business users?',
        },
        answer: {
          de: 'Ja. Über kontextbezogene KI-Unterstützung lassen sich Prozessfragen in natürlicher Sprache stellen – bei gleichzeitig kausal fundierter Analyse im Hintergrund.',
          en: 'Yes. Through context-aware AI support, process questions can be asked in natural language – while a causally grounded analysis runs in the background.',
        },
      },
    ],
  },
  'servicenow-process-mining': {
    vsName: 'ServiceNow',
    intro: {
      de: 'ServiceNow integriert Process Mining nativ in die eigene Plattform und zielt auf IT-Service-Management-Abläufe – ohne separate Datenextraktion für ServiceNow-Prozesse. Der Vergleich zeigt die unterschiedliche Reichweite: ServiceNow ist auf Serviceprozesse innerhalb der Plattform fokussiert, während Noreja End-to-End-Prozesse über Systemgrenzen hinweg auf einem Event Knowledge Graph analysiert. Wo ServiceNow seine Stärke aus der Plattform-Nähe zieht, verbindet Noreja mehrere Quellsysteme kausal miteinander.',
      en: 'ServiceNow integrates process mining natively into its own platform and targets IT service management workflows – without separate data extraction for ServiceNow processes. This comparison shows the different reach: ServiceNow focuses on service processes within the platform, while Noreja analyzes end-to-end processes across system boundaries on an Event Knowledge Graph. Where ServiceNow draws its strength from platform proximity, Noreja connects multiple source systems causally.',
    },
    faq: [
      {
        question: {
          de: 'Ist Noreja eine Alternative zu ServiceNow Process Mining?',
          en: 'Is Noreja an alternative to ServiceNow Process Mining?',
        },
        answer: {
          de: 'Ja, insbesondere für übergreifende Prozesse. Noreja ist nicht auf die Serviceprozesse einer einzelnen Plattform beschränkt, sondern verbindet mehrere Quellsysteme in einer End-to-End-Analyse.',
          en: 'Yes, especially for cross-cutting processes. Noreja is not confined to the service processes of a single platform but connects multiple source systems in an end-to-end analysis.',
        },
      },
      {
        question: {
          de: 'Kann Noreja auch ITSM-Prozesse analysieren?',
          en: 'Can Noreja also analyze ITSM processes?',
        },
        answer: {
          de: 'Ja. Noreja bindet ServiceNow als eine von mehreren Quellen an und kann Serviceprozesse im Kontext vor- und nachgelagerter Abläufe kausal betrachten.',
          en: 'Yes. Noreja connects ServiceNow as one of several sources and can analyze service processes causally in the context of upstream and downstream workflows.',
        },
      },
      {
        question: {
          de: 'Worin liegt der methodische Unterschied?',
          en: 'What is the methodical difference?',
        },
        answer: {
          de: 'ServiceNow bleibt bei einer frequenzbasierten Prozesssicht innerhalb der Plattform. Noreja rekonstruiert kausale und zeitliche Beziehungen über Systemgrenzen hinweg im Graphen.',
          en: 'ServiceNow stays with a frequency-based process view within the platform. Noreja reconstructs causal and temporal relationships across system boundaries in a graph.',
        },
      },
    ],
  },
  'abbyy-timeline': {
    vsName: 'ABBYY',
    intro: {
      de: 'ABBYY Timeline verbindet Task- und Process Mining mit der Dokumentenverarbeitungs-Historie von ABBYY und erschließt Kontext aus Dokumenten und E-Mails. Der Vergleich zeigt die unterschiedliche Ausrichtung: ABBYY spielt seine Stärke bei dokumentenzentrierten Abläufen aus, verfügt im Kern aber über kein graphbasiertes, kausales Prozessmodell. Noreja modelliert Prozesse als semantischen Graphen mit kausalen Beziehungen zwischen Ereignissen und ist damit nicht auf dokumentengetriebene Anwendungsfälle zugeschnitten.',
      en: 'ABBYY Timeline combines task and process mining with ABBYY’s document-processing heritage and surfaces context from documents and emails. This comparison shows the different orientation: ABBYY plays to its strength in document-centric workflows but, at its core, has no graph-based, causal process model. Noreja models processes as a semantic graph with causal relationships between events and is therefore not tailored to document-driven use cases.',
    },
    faq: [
      {
        question: {
          de: 'Ist Noreja eine Alternative zu ABBYY Timeline?',
          en: 'Is Noreja an alternative to ABBYY Timeline?',
        },
        answer: {
          de: 'Ja, für Anwendungsfälle, die über dokumentenzentrierte Abläufe hinausgehen. Noreja fokussiert auf kausale End-to-End-Prozessanalyse über strukturierte und vernetzte Daten.',
          en: 'Yes, for use cases beyond document-centric workflows. Noreja focuses on causal end-to-end process analysis over structured and connected data.',
        },
      },
      {
        question: {
          de: 'Analysiert Noreja auch dokumentengetriebene Prozesse?',
          en: 'Does Noreja also analyze document-driven processes?',
        },
        answer: {
          de: 'Ja, sofern die relevanten Ereignisse in den angebundenen Systemen abgebildet sind. Der Schwerpunkt liegt jedoch auf der kausalen Modellierung von Objekt- und Ereignisbeziehungen, nicht auf der Extraktion aus Dokumenten.',
          en: 'Yes, provided the relevant events are represented in the connected systems. The emphasis, however, is on causal modeling of object and event relationships rather than extraction from documents.',
        },
      },
      {
        question: {
          de: 'Was ist der zentrale Unterschied?',
          en: 'What is the central difference?',
        },
        answer: {
          de: 'ABBYY Timeline ist dokumenten- und task-zentriert und frequenzbasiert. Noreja setzt auf ein graphbasiertes, kausales und temporales Prozessmodell.',
          en: 'ABBYY Timeline is document- and task-centric and frequency-based. Noreja relies on a graph-based, causal, and temporal process model.',
        },
      },
    ],
  },
  appian: {
    vsName: 'Appian',
    intro: {
      de: 'Appian positioniert Process Mining als Bestandteil einer Low-Code-Plattform für Workflow-Automatisierung und Orchestrierung. Der Vergleich zeigt die unterschiedliche Gewichtung: Bei Appian ist Mining eine Zusatzfunktion, deren analytische Tiefe der Orchestrierung nachgeordnet ist. Noreja ist auf die kausale Prozessdiagnose spezialisiert – die belastbare Grundlage, bevor Abläufe orchestriert oder automatisiert werden.',
      en: 'Appian positions process mining as part of a low-code platform for workflow automation and orchestration. This comparison shows the different emphasis: for Appian, mining is an add-on capability whose analytical depth is subordinate to orchestration. Noreja specializes in causal process diagnosis – the reliable foundation before workflows are orchestrated or automated.',
    },
    faq: [
      {
        question: {
          de: 'Ist Noreja eine Alternative zu Appian?',
          en: 'Is Noreja an alternative to Appian?',
        },
        answer: {
          de: 'Für die Prozessanalyse ja. Noreja ist auf die kausale Diagnose spezialisiert, während Appian primär eine Orchestrierungs- und Low-Code-Plattform mit ergänzendem Mining ist.',
          en: 'For process analysis, yes. Noreja specializes in causal diagnosis, whereas Appian is primarily an orchestration and low-code platform with complementary mining.',
        },
      },
      {
        question: {
          de: 'Ersetzt Noreja die Workflow-Orchestrierung von Appian?',
          en: 'Does Noreja replace Appian’s workflow orchestration?',
        },
        answer: {
          de: 'Nein. Noreja liefert die kausale Analysegrundlage; die Orchestrierung selbst bleibt Sache spezialisierter Plattformen. Noreja ist bewusst plattformunabhängig gehalten.',
          en: 'No. Noreja provides the causal analytical foundation; orchestration itself remains the domain of specialized platforms. Noreja is deliberately kept platform-independent.',
        },
      },
      {
        question: {
          de: 'Warum zuerst analysieren, dann automatisieren?',
          en: 'Why analyze first, then automate?',
        },
        answer: {
          de: 'Ohne kausales Verständnis der Ursachen besteht das Risiko, ineffiziente oder fehlerhafte Abläufe zu automatisieren. Noreja stellt die Diagnose voran, damit Automatisierung auf belastbaren Erkenntnissen aufsetzt.',
          en: 'Without a causal understanding of the underlying causes, there is a risk of automating inefficient or faulty workflows. Noreja puts diagnosis first, so that automation is based on reliable insights.',
        },
      },
    ],
  },
  'aris-process-mining': {
    vsName: 'ARIS',
    intro: {
      de: 'ARIS verbindet seine langjährige BPM- und Modellierungshistorie mit Process Mining und KI und ist für den Abgleich beobachteter Ist-Abläufe gegen governte Soll-Modelle im ARIS-Repository bekannt – gestützt auf eine große angrenzende Produktfamilie für Modellierung und Verwaltung. Der Vergleich zeigt: ARIS gewichtet korrelierende Faktoren gegen ein hinterlegtes Modell, bleibt dabei aber frequenzbasiert. Noreja deckt stattdessen kausale Ursache-Wirkungs-Beziehungen im Graphen auf und benötigt kein vorgelagertes Modell-Repository.',
      en: 'ARIS combines its long-standing BPM and modeling heritage with process mining and AI and is known for comparing observed as-is flows against governed to-be models in the ARIS repository – backed by a large adjacent product family for modeling and administration. This comparison shows: ARIS weights correlating factors against a stored model but remains frequency-based. Noreja instead uncovers causal cause-and-effect relationships in a graph and requires no upstream model repository.',
    },
    faq: [
      {
        question: {
          de: 'Ist Noreja eine Alternative zu ARIS Process Mining?',
          en: 'Is Noreja an alternative to ARIS Process Mining?',
        },
        answer: {
          de: 'Ja. Noreja liefert eine datengetriebene, kausale Prozessanalyse ohne die Notwendigkeit eines vorab gepflegten Soll-Modell-Repositorys.',
          en: 'Yes. Noreja delivers data-driven, causal process analysis without the need for a pre-maintained to-be model repository.',
        },
      },
      {
        question: {
          de: 'Ist der Root-Cause-Miner von ARIS mit Noreja vergleichbar?',
          en: 'Is the ARIS root-cause miner comparable to Noreja?',
        },
        answer: {
          de: 'Beide adressieren Ursachen, aber unterschiedlich: ARIS korreliert Faktoren statistisch gegen ein Modell, während Noreja echte kausale Beziehungen zwischen Ereignissen im Graphen rekonstruiert.',
          en: 'Both address causes, but differently: ARIS statistically correlates factors against a model, whereas Noreja reconstructs genuine causal relationships between events in a graph.',
        },
      },
      {
        question: {
          de: 'Brauche ich vorab modellierte Prozesse für Noreja?',
          en: 'Do I need pre-modeled processes for Noreja?',
        },
        answer: {
          de: 'Nein. Noreja rekonstruiert die tatsächlichen Abläufe direkt aus den Daten. Ein governtes Modell-Repository wie bei ARIS ist keine Voraussetzung.',
          en: 'No. Noreja reconstructs the actual flows directly from the data. A governed model repository, as with ARIS, is not a prerequisite.',
        },
      },
    ],
  },
  'mpmx-mehrwerk': {
    vsName: 'mpmX',
    intro: {
      de: 'mpmX des deutschen Anbieters MEHRWERK ist eng mit der Qlik-Technologie verwoben, löst komplexe n:m-Beziehungen zuverlässig auf und arbeitet In-Memory für hochinteraktive Auswertungen. Der Vergleich zeigt die technologische Abgrenzung: mpmX setzt auf einer assoziativen BI-Engine auf und bleibt in der Prozessanalyse frequenzbasiert. Noreja setzt demgegenüber auf ein eigenständiges, graphbasiertes Kausal- und Temporalmodell und trennt so echte Ursachen von statistischer Koinzidenz.',
      en: 'mpmX from German vendor MEHRWERK is tightly interwoven with Qlik technology, reliably resolves complex n:m relationships, and works in-memory for highly interactive analysis. This comparison shows the technological distinction: mpmX builds on an associative BI engine and remains frequency-based in its process analysis. Noreja, by contrast, relies on a dedicated, graph-based causal and temporal model, thereby separating genuine causes from statistical coincidence.',
    },
    faq: [
      {
        question: {
          de: 'Ist Noreja eine Alternative zu mpmX (MEHRWERK)?',
          en: 'Is Noreja an alternative to mpmX (MEHRWERK)?',
        },
        answer: {
          de: 'Ja. Beide adressieren Process Mining, doch Noreja setzt auf ein graphbasiertes Kausalmodell statt auf eine auf Qlik aufsetzende, frequenzbasierte Analyse.',
          en: 'Yes. Both address process mining, but Noreja relies on a graph-based causal model instead of a frequency-based analysis built on Qlik.',
        },
      },
      {
        question: {
          de: 'Brauche ich Qlik, um Noreja zu nutzen?',
          en: 'Do I need Qlik to use Noreja?',
        },
        answer: {
          de: 'Nein. Noreja bringt seine eigene Graph- und Analyseinfrastruktur mit. mpmX ist dagegen an das Qlik-Technologiefundament gebunden.',
          en: 'No. Noreja brings its own graph and analysis infrastructure. mpmX, on the other hand, is tied to the Qlik technology foundation.',
        },
      },
      {
        question: {
          de: 'Wie geht Noreja mit n:m-Beziehungen um?',
          en: 'How does Noreja handle n:m relationships?',
        },
        answer: {
          de: 'Noreja bildet n:m-Beziehungen nativ im Event Knowledge Graph ab und ergänzt sie um kausale und zeitliche Verknüpfungen – über die relationale Auflösung hinaus.',
          en: 'Noreja represents n:m relationships natively in the Event Knowledge Graph and augments them with causal and temporal links – beyond relational resolution alone.',
        },
      },
    ],
  },
};

export const getBattleCardDetail = (id: string): BattleCardDetail | undefined =>
  battleCardDetails[id];

/** Kurzer Markenname für den „Noreja vs. X"-Titel. */
export const getBattleCardVsName = (id: string): string =>
  battleCardDetails[id]?.vsName ?? getBattleCardById(id)?.name ?? '';

/** Vollständiger Vergleichstitel, z. B. „Noreja vs. Celonis Vergleich". */
export const getBattleCardVsTitle = (id: string, language: Language): string => {
  const vs = getBattleCardVsName(id);
  return language === 'de' ? `Noreja vs. ${vs} Vergleich` : `Noreja vs. ${vs} Comparison`;
};

export const getBattleCardById = (id: string): BattleCard | undefined =>
  battleCards.find((c) => c.id === id);

export const getBattleCardName = (card: BattleCard): string => card.name;

/** Sprachneutrale Labels für die Matrix-Ausprägungen. */
export const paradigmLabel: Record<AnalysisParadigm, { de: string; en: string }> = {
  frequency: { de: 'Frequenzbasiert', en: 'Frequency-based' },
  hybrid: { de: 'Hybrid', en: 'Hybrid' },
  causal: { de: 'Kausal', en: 'Causal' },
};

export const lockInLabel: Record<EcosystemLockIn, { de: string; en: string }> = {
  low: { de: 'Gering', en: 'Low' },
  medium: { de: 'Mittel', en: 'Medium' },
  high: { de: 'Hoch', en: 'High' },
};

export const causalLabel: Record<CausalMaturity, { de: string; en: string }> = {
  none: { de: 'Nein', en: 'No' },
  partial: { de: 'Teilweise', en: 'Partial' },
  native: { de: 'Nativ', en: 'Native' },
};

export const getLocalized = (value: { de: string; en: string }, language: Language): string =>
  value[language];
