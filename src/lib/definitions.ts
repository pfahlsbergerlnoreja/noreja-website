import type { Language } from './translations';

export interface Definition {
  /** URL slug, shared across languages (e.g. "process-mining") */
  id: string;
  /** The question, rendered as the H1 on the detail page */
  question: {
    de: string;
    en: string;
  };
  /** Short definition, 2-3 sentences */
  definition: {
    de: string;
    en: string;
  };
  /** "Warum ist das wichtig?" section */
  whyImportant: {
    de: string;
    en: string;
  };
  /** Short teaser shown on the hub page card */
  teaser: {
    de: string;
    en: string;
  };
  /**
   * Optional explicit glossary term for the DefinedTerm schema. If omitted, the term
   * is derived from the question. Set this when the question doesn't reduce cleanly.
   */
  term?: {
    de: string;
    en: string;
  };
  /** Related definition ids for internal linking */
  related?: string[];
}

export const definitions: Definition[] = [
  {
    id: 'process-mining',
    question: {
      de: 'Was ist Process Mining?',
      en: 'What is Process Mining?',
    },
    definition: {
      de: 'Process Mining ist eine datengetriebene Analysemethode, die reale Geschäftsprozesse anhand digitaler Spuren in IT-Systemen wie ERP, CRM oder Ticketsystemen rekonstruiert und visualisiert. Es macht sichtbar, wie Prozesse tatsächlich ablaufen – im Gegensatz zu der Art, wie sie geplant oder dokumentiert wurden. Dadurch lassen sich Engpässe, Abweichungen und Optimierungspotenziale objektiv und faktenbasiert aufdecken.',
      en: 'Process Mining is a data-driven analysis method that reconstructs and visualizes real business processes based on the digital traces left in IT systems such as ERP, CRM, or ticketing tools. It reveals how processes actually run – as opposed to how they were planned or documented. This makes bottlenecks, deviations, and optimization potential visible in an objective, fact-based way.',
    },
    whyImportant: {
      de: 'Unternehmen verlassen sich oft auf Annahmen über ihre Prozesse, die selten der Realität entsprechen. Process Mining schafft eine faktenbasierte Grundlage für Entscheidungen, senkt Kosten durch das Aufdecken von Ineffizienzen und bildet die Basis für Automatisierung und kontinuierliche Verbesserung.',
      en: 'Companies often rely on assumptions about their processes that rarely match reality. Process Mining provides a fact-based foundation for decisions, reduces costs by uncovering inefficiencies, and forms the basis for automation and continuous improvement.',
    },
    teaser: {
      de: 'Die datengetriebene Methode, um reale Prozesse aus IT-Systemen sichtbar zu machen.',
      en: 'The data-driven method for making real processes visible from IT systems.',
    },
    related: ['process-intelligence', 'event-log', 'causal-process-mining'],
  },
  {
    id: 'process-intelligence',
    question: {
      de: 'Was ist Process Intelligence?',
      en: 'What is Process Intelligence?',
    },
    definition: {
      de: 'Process Intelligence ist die Weiterentwicklung des klassischen Process Mining: Sie verbindet Prozessdaten mit Kontext- und Fachwissen und nutzt KI, um Prozesse nicht nur sichtbar, sondern verständlich und optimierbar zu machen. Statt nur zu zeigen, was passiert, erklärt Process Intelligence, warum etwas passiert, und leitet konkrete Handlungsempfehlungen ab.',
      en: 'Process Intelligence is the evolution of classic Process Mining: it combines process data with context and domain knowledge and uses AI to make processes not just visible, but understandable and optimizable. Instead of only showing what happens, Process Intelligence explains why it happens and derives concrete recommendations for action.',
    },
    whyImportant: {
      de: 'Reine Prozessvisualisierung reicht nicht aus, um echten Wert zu schaffen. Process Intelligence liefert Ursachenanalysen und priorisierte Maßnahmen, wodurch Organisationen schneller von der Erkenntnis zur Umsetzung kommen und operative Exzellenz erreichen.',
      en: 'Pure process visualization is not enough to create real value. Process Intelligence delivers root-cause analysis and prioritized measures, allowing organizations to move faster from insight to action and achieve operational excellence.',
    },
    teaser: {
      de: 'Prozessdaten plus Kontext und KI – von reiner Sichtbarkeit zu Verständnis und Handlung.',
      en: 'Process data plus context and AI – from mere visibility to understanding and action.',
    },
    related: ['process-mining', 'causal-process-mining', 'event-knowledge-graph', 'agentic-process-intelligence'],
  },
  {
    id: 'graph-databases',
    question: {
      de: 'Was sind Graphdatenbanken?',
      en: 'What are Graph Databases?',
    },
    definition: {
      de: 'Graphdatenbanken speichern Daten als Knoten (Entitäten) und Kanten (Beziehungen), anstatt sie in Tabellen mit Zeilen und Spalten abzulegen. Dadurch lassen sich stark vernetzte Daten und komplexe Beziehungen effizient abbilden und abfragen. Bekannte Beispiele sind Neo4j oder Amazon Neptune.',
      en: 'Graph databases store data as nodes (entities) and edges (relationships) instead of in tables with rows and columns. This allows highly connected data and complex relationships to be represented and queried efficiently. Well-known examples include Neo4j and Amazon Neptune.',
    },
    whyImportant: {
      de: 'Geschäftsprozesse bestehen aus vielfältigen, miteinander verknüpften Objekten wie Aufträgen, Rechnungen und Kunden. Graphdatenbanken bilden diese Realität natürlicher ab als relationale Modelle und sind die technologische Grundlage für moderne Ansätze wie Event Knowledge Graphs und Causal Process Mining.',
      en: 'Business processes consist of diverse, interconnected objects such as orders, invoices, and customers. Graph databases represent this reality more naturally than relational models and are the technological foundation for modern approaches such as Event Knowledge Graphs and Causal Process Mining.',
    },
    teaser: {
      de: 'Daten als Knoten und Kanten – die natürliche Basis für vernetzte Prozessdaten.',
      en: 'Data as nodes and edges – the natural basis for connected process data.',
    },
    related: ['event-knowledge-graph', 'causal-process-mining'],
  },
  {
    id: 'event-knowledge-graph',
    question: {
      de: 'Was ist ein Event Knowledge Graph?',
      en: 'What is an Event Knowledge Graph?',
    },
    definition: {
      de: 'Ein Event Knowledge Graph (EKG) ist eine graphbasierte Datenstruktur, die Ereignisse (Events) gemeinsam mit den beteiligten Objekten und deren Beziehungen speichert. Anders als ein flacher Event-Log kann ein EKG mehrere Prozessperspektiven und deren Verknüpfungen gleichzeitig abbilden, ohne sie auf eine einzige Fall-ID zu reduzieren.',
      en: 'An Event Knowledge Graph (EKG) is a graph-based data structure that stores events together with the objects involved and their relationships. Unlike a flat event log, an EKG can represent multiple process perspectives and their connections simultaneously, without reducing them to a single case ID.',
    },
    whyImportant: {
      de: 'Reale Prozesse folgen selten einer einzigen Fallnotion. Event Knowledge Graphs überwinden diese Einschränkung, indem sie mehrere Dimensionen gleichzeitig verbinden – die Grundlage für realistischere, mehrdimensionale Prozessanalysen ohne künstliche Vereinfachung.',
      en: 'Real processes rarely follow a single case notion. Event Knowledge Graphs overcome this limitation by connecting several dimensions at once – the basis for more realistic, multidimensional process analysis without artificial simplification.',
    },
    teaser: {
      de: 'Ereignisse, Objekte und Beziehungen im Graphen – mehrere Perspektiven auf einmal.',
      en: 'Events, objects, and relationships in a graph – multiple perspectives at once.',
    },
    related: ['graph-databases', 'object-centric-process-mining', 'event-log', 'process-grounding'],
  },
  {
    id: 'causal-process-mining',
    question: {
      de: 'Was ist Causal Process Mining?',
      en: 'What is Causal Process Mining?',
    },
    definition: {
      de: 'Causal Process Mining ist ein Ansatz, der nicht nur die zeitliche Abfolge von Aktivitäten betrachtet, sondern die tatsächlichen Ursache-Wirkungs-Beziehungen zwischen ihnen aufdeckt. Statt aus bloßer Reihenfolge auf Zusammenhänge zu schließen, modelliert es, welche Ereignisse welche anderen wirklich auslösen.',
      en: 'Causal Process Mining is an approach that goes beyond the temporal order of activities to uncover the actual cause-and-effect relationships between them. Instead of inferring connections from mere sequence, it models which events genuinely trigger which others.',
    },
    whyImportant: {
      de: 'Klassische Ansätze verwechseln zeitliche Nähe häufig mit Kausalität und erzeugen dadurch irreführende Prozessmodelle. Causal Process Mining liefert korrekte Zusammenhänge – entscheidend für verlässliche Ursachenanalysen, fundierte Entscheidungen und den sinnvollen Einsatz von KI.',
      en: 'Classic approaches often confuse temporal proximity with causality, producing misleading process models. Causal Process Mining delivers correct relationships – essential for reliable root-cause analysis, sound decisions, and the meaningful use of AI.',
    },
    teaser: {
      de: 'Ursache statt bloßer Reihenfolge – echte Zusammenhänge zwischen Prozessschritten.',
      en: 'Cause instead of mere sequence – the real relationships between process steps.',
    },
    related: ['process-mining', 'directly-follows-limitations', 'event-knowledge-graph', 'causal-ai'],
  },
  {
    id: 'directly-follows-limitations',
    question: {
      de: 'Was sind die Schwächen von Directly-Follows Ansätzen?',
      en: 'What are the Weaknesses of Directly-Follows Approaches?',
    },
    definition: {
      de: 'Directly-Follows-Ansätze (Directly-Follows Graphs, DFG) bauen Prozessmodelle allein daraus, welche Aktivität unmittelbar auf eine andere folgt. Diese rein sequenzielle Betrachtung kann Nebenläufigkeit, Schleifen und echte Abhängigkeiten nicht korrekt darstellen und ist zudem empfindlich gegenüber Rauschen und unvollständigen Daten. Das Ergebnis sind oft ungenaue oder irreführende Modelle.',
      en: 'Directly-Follows approaches (Directly-Follows Graphs, DFG) build process models solely from which activity immediately follows another. This purely sequential view cannot correctly represent concurrency, loops, and genuine dependencies, and is also sensitive to noise and incomplete data. The result is often inaccurate or misleading models.',
    },
    whyImportant: {
      de: 'Da viele Process-Mining-Werkzeuge auf DFGs basieren, entstehen häufig unübersichtliche "Spaghetti-Diagramme" und falsche Kausalannahmen. Wer diese Schwächen kennt, kann bewusst auf ausdrucksstärkere Methoden wie Event Knowledge Graphs und Causal Process Mining setzen.',
      en: 'Because many process mining tools rely on DFGs, they frequently produce cluttered "spaghetti diagrams" and false causal assumptions. Understanding these weaknesses allows you to deliberately choose more expressive methods such as Event Knowledge Graphs and Causal Process Mining.',
    },
    teaser: {
      de: 'Warum "A folgt auf B" für realistische Prozessmodelle nicht ausreicht.',
      en: 'Why "A is followed by B" is not enough for realistic process models.',
    },
    related: ['causal-process-mining', 'process-mining', 'event-log'],
  },
  {
    id: 'event-log',
    question: {
      de: 'Was ist ein Event-Log?',
      en: 'What is an Event Log?',
    },
    definition: {
      de: 'Ein Event-Log ist eine chronologische Aufzeichnung von Ereignissen, in der jeder Eintrag mindestens eine Fall-ID (Case ID), eine Aktivität und einen Zeitstempel enthält. Er ist das klassische Eingabeformat für traditionelles Process Mining.',
      en: 'An event log is a chronological record of events in which each entry contains at least a case ID, an activity, and a timestamp. It is the classic input format for traditional Process Mining.',
    },
    whyImportant: {
      de: 'Die Erstellung von Event-Logs ist aufwändig und zwingt komplexe, mehrdimensionale Prozesse in eine einzige Fallperspektive – ein wesentlicher Engpass klassischer Ansätze. Moderne Verfahren arbeiten deshalb direkt auf relationalen Datenbanken oder Graphen und benötigen keinen vorab erstellten Event-Log.',
      en: 'Creating event logs is labor-intensive and forces complex, multidimensional processes into a single case perspective – a major bottleneck of classic approaches. Modern methods therefore work directly on relational databases or graphs and require no pre-built event log.',
    },
    teaser: {
      de: 'Das klassische Eingabeformat für Process Mining – und seine Grenzen.',
      en: 'The classic input format for Process Mining – and its limits.',
    },
    related: ['process-mining', 'event-knowledge-graph', 'object-centric-process-mining'],
  },
  {
    id: 'business-process-management',
    question: {
      de: 'Was ist Geschäftsprozessmanagement?',
      en: 'What is Business Process Management?',
    },
    definition: {
      de: 'Geschäftsprozessmanagement (Business Process Management, BPM) ist eine Disziplin zur systematischen Gestaltung, Ausführung, Überwachung und Verbesserung von Geschäftsprozessen. Es verbindet Methoden, Kennzahlen und Technologien, um Abläufe konsequent an den Unternehmenszielen auszurichten.',
      en: 'Business Process Management (BPM) is a discipline for the systematic design, execution, monitoring, and improvement of business processes. It combines methods, metrics, and technologies to consistently align workflows with organizational goals.',
    },
    whyImportant: {
      de: 'Gut gemanagte Prozesse sind der Hebel für Effizienz, Qualität und Anpassungsfähigkeit. BPM schafft den Rahmen, in dem Analysemethoden wie Process Mining und Process Intelligence ihren Wert entfalten – von der Ist-Analyse bis zur kontinuierlichen Optimierung.',
      en: 'Well-managed processes are the lever for efficiency, quality, and adaptability. BPM provides the framework in which analysis methods such as Process Mining and Process Intelligence unfold their value – from as-is analysis to continuous optimization.',
    },
    teaser: {
      de: 'Die Disziplin, Prozesse systematisch zu gestalten, zu steuern und zu verbessern.',
      en: 'The discipline of systematically designing, steering, and improving processes.',
    },
    related: ['process-mining', 'process-intelligence', 'what-is-a-process', 'bpmn', 'epk'],
  },
  {
    id: 'what-is-a-process',
    question: {
      de: 'Wie definiere ich den Begriff Prozess?',
      en: 'How do I define the term Process?',
    },
    definition: {
      de: 'Ein Prozess ist eine strukturierte Abfolge von Aktivitäten, die aus definierten Eingaben (Inputs) ein Ergebnis (Output) erzeugt und dabei einen Wert für Kunden oder das Unternehmen schafft. Prozesse haben einen klaren Anfang, ein klares Ende und wiederholbare Schritte.',
      en: 'A process is a structured sequence of activities that turns defined inputs into a result (output) while creating value for customers or the organization. Processes have a clear beginning, a clear end, and repeatable steps.',
    },
    whyImportant: {
      de: 'Ein gemeinsames Verständnis des Prozessbegriffs ist die Voraussetzung für jede Analyse und Optimierung. Nur wer Prozesse klar abgrenzt und definiert, kann sie messen, vergleichen und gezielt verbessern.',
      en: 'A shared understanding of what a process is forms the prerequisite for any analysis and optimization. Only by clearly delineating and defining processes can you measure, compare, and purposefully improve them.',
    },
    teaser: {
      de: 'Input, Aktivitäten, Output – was einen Prozess ausmacht und abgrenzt.',
      en: 'Input, activities, output – what makes and delineates a process.',
    },
    related: ['business-process-management', 'process-mining'],
  },
  {
    id: 'object-centric-process-mining',
    question: {
      de: 'Was ist OCPM?',
      en: 'What is OCPM?',
    },
    definition: {
      de: 'OCPM steht für Object-Centric Process Mining – einen Ansatz, der Prozesse rund um mehrere Objekttypen (z. B. Auftrag, Lieferung, Rechnung) analysiert, statt sie auf eine einzige Fall-ID zu reduzieren. Ereignisse können sich dabei auf mehrere Objekte gleichzeitig beziehen.',
      en: 'OCPM stands for Object-Centric Process Mining – an approach that analyzes processes around multiple object types (e.g. order, delivery, invoice) instead of reducing them to a single case ID. Events can relate to several objects at the same time.',
    },
    whyImportant: {
      de: 'Reale ERP- und CRM-Prozesse sind von Natur aus objektzentriert und mehrdimensional. OCPM vermeidet die Verzerrungen durch Konvergenz und Divergenz, die beim erzwungenen Zusammenfassen auf eine einzige Fallnotion entstehen, und liefert dadurch ein realistischeres Prozessbild.',
      en: 'Real ERP and CRM processes are inherently object-centric and multidimensional. OCPM avoids the convergence and divergence distortions that arise when forcing everything into a single case notion, and thereby delivers a more realistic picture of the process.',
    },
    teaser: {
      de: 'Prozesse rund um mehrere Objekte statt eine einzige Fall-ID.',
      en: 'Processes centered on multiple objects instead of a single case ID.',
    },
    related: ['event-knowledge-graph', 'event-log', 'causal-process-mining'],
  },
  {
    id: 'process-discovery',
    question: {
      de: 'Was ist Process Discovery?',
      en: 'What is Process Discovery?',
    },
    definition: {
      de: 'Process Discovery ist eine Kerndisziplin des Process Mining, bei der aus den Ereignisdaten eines IT-Systems automatisch ein Prozessmodell erzeugt wird. Ohne vorherige Annahmen wird der tatsächliche Ablauf – inklusive aller Varianten und Abweichungen – als Diagramm rekonstruiert.',
      en: 'Process Discovery is a core Process Mining discipline that automatically generates a process model from the event data in an IT system. Without any prior assumptions, it reconstructs the actual flow – including all variants and deviations – as a diagram.',
    },
    whyImportant: {
      de: 'Manuell erstellte Prozessdokumentationen sind oft unvollständig oder veraltet. Process Discovery liefert ein objektives, datenbasiertes Ist-Bild als Ausgangspunkt für jede Analyse, Optimierung und Automatisierung.',
      en: 'Manually created process documentation is often incomplete or outdated. Process Discovery delivers an objective, data-based as-is picture as the starting point for any analysis, optimization, and automation.',
    },
    teaser: {
      de: 'Automatisch ein Prozessmodell aus Ereignisdaten erzeugen – ohne Vorannahmen.',
      en: 'Automatically generate a process model from event data – with no prior assumptions.',
    },
    related: ['process-mining', 'event-log', 'conformance-checking'],
  },
  {
    id: 'conformance-checking',
    question: {
      de: 'Was ist Conformance Checking?',
      en: 'What is Conformance Checking?',
    },
    definition: {
      de: 'Conformance Checking ist eine Process-Mining-Technik, die den tatsächlich beobachteten Prozessablauf (Ist) mit einem definierten Referenz- oder Soll-Modell vergleicht. So werden Abweichungen, Regelverstöße und Compliance-Lücken sichtbar gemacht und quantifiziert.',
      en: 'Conformance Checking is a Process Mining technique that compares the actually observed process flow (as-is) against a defined reference or target model. This makes deviations, rule violations, and compliance gaps visible and quantifiable.',
    },
    whyImportant: {
      de: 'Unternehmen müssen nachweisen, dass Prozesse Vorgaben und Regularien einhalten. Conformance Checking deckt Abweichungen automatisch auf und ist damit ein zentraler Baustein für Compliance, Qualitätssicherung und Risikomanagement.',
      en: 'Companies must demonstrate that their processes comply with policies and regulations. Conformance Checking uncovers deviations automatically and is therefore a central building block for compliance, quality assurance, and risk management.',
    },
    teaser: {
      de: 'Ist-Ablauf gegen Soll-Modell prüfen – Abweichungen und Regelverstöße aufdecken.',
      en: 'Check the actual flow against a target model – reveal deviations and violations.',
    },
    related: ['process-discovery', 'to-be-vs-as-is-process', 'bpmn', 'agent-conformance-checking'],
  },
  {
    id: 'task-mining',
    question: {
      de: 'Was ist Task Mining?',
      en: 'What is Task Mining?',
    },
    definition: {
      de: 'Task Mining analysiert die Interaktionen von Nutzer:innen direkt am Desktop – etwa Klicks, Tastatureingaben und Anwendungswechsel –, um manuelle Arbeitsschritte sichtbar zu machen. Anders als Process Mining, das auf Systemdaten basiert, erfasst Task Mining Tätigkeiten auf Aktivitätsebene direkt am Arbeitsplatz.',
      en: 'Task Mining analyzes user interactions directly at the desktop – such as clicks, keystrokes, and application switches – to make manual work steps visible. Unlike Process Mining, which relies on system data, Task Mining captures activities at the task level directly at the workstation.',
    },
    whyImportant: {
      de: 'Viele Ineffizienzen entstehen in manuellen, nicht systemgestützten Tätigkeiten, die klassisches Process Mining nicht erfasst. Task Mining schließt diese Lücke und hilft, Automatisierungspotenziale – etwa für RPA – präzise zu identifizieren.',
      en: 'Many inefficiencies arise in manual, non-system-supported tasks that classic Process Mining does not capture. Task Mining closes this gap and helps to precisely identify automation potential, for example for RPA.',
    },
    teaser: {
      de: 'Manuelle Tätigkeiten am Desktop erfassen – die Ergänzung zum Process Mining.',
      en: 'Capture manual desktop activities – the complement to Process Mining.',
    },
    related: ['process-mining', 'process-intelligence', 'agent-mining'],
  },
  {
    id: 'ocel-2',
    question: {
      de: 'Was ist OCEL 2.0?',
      en: 'What is OCEL 2.0?',
    },
    definition: {
      de: 'OCEL 2.0 (Object-Centric Event Log Standard, Version 2.0) ist ein offenes Standardformat zum Speichern objektzentrierter Ereignisdaten. Es erlaubt, dass sich ein einzelnes Ereignis auf mehrere Objekte unterschiedlicher Typen bezieht, und bildet zudem Objektattribute und Beziehungen über die Zeit ab.',
      en: 'OCEL 2.0 (Object-Centric Event Log standard, version 2.0) is an open standard format for storing object-centric event data. It allows a single event to relate to multiple objects of different types and also captures object attributes and relationships over time.',
    },
    whyImportant: {
      de: 'Klassische Event-Logs zwingen Prozesse in eine einzige Fall-ID und verzerren dadurch die Realität. OCEL 2.0 ist die Datengrundlage für Object-Centric Process Mining und ermöglicht realistischere, mehrdimensionale Analysen komplexer ERP- und CRM-Prozesse.',
      en: 'Classic event logs force processes into a single case ID and thereby distort reality. OCEL 2.0 is the data foundation for Object-Centric Process Mining and enables more realistic, multidimensional analysis of complex ERP and CRM processes.',
    },
    teaser: {
      de: 'Der offene Standard für objektzentrierte Ereignisdaten.',
      en: 'The open standard for object-centric event data.',
    },
    term: {
      de: 'OCEL 2.0',
      en: 'OCEL 2.0',
    },
    related: ['object-centric-process-mining', 'event-log', 'event-knowledge-graph'],
  },
  {
    id: 'process-variant',
    question: {
      de: 'Was ist eine Prozessvariante?',
      en: 'What is a Process Variant?',
    },
    definition: {
      de: 'Eine Prozessvariante ist eine bestimmte, eindeutige Abfolge von Aktivitäten, mit der ein Prozess von Anfang bis Ende durchlaufen wird. Alle Prozessinstanzen, die exakt demselben Pfad folgen, gehören zur selben Variante.',
      en: 'A process variant is a specific, distinct sequence of activities through which a process runs from start to finish. All process instances that follow exactly the same path belong to the same variant.',
    },
    whyImportant: {
      de: 'Reale Prozesse weichen oft stark vom vorgesehenen Standardablauf ab und bringen zahlreiche Varianten hervor. Die Analyse von Prozessvarianten zeigt, wo Standardisierungspotenzial, Sonderfälle und Ineffizienzen liegen.',
      en: 'Real processes often deviate significantly from the intended standard flow, producing numerous variants. Analyzing process variants reveals where standardization potential, special cases, and inefficiencies lie.',
    },
    teaser: {
      de: 'Ein eindeutiger Pfad durch den Prozess – die Basis der Variantenanalyse.',
      en: 'A distinct path through the process – the basis of variant analysis.',
    },
    related: ['process-instance', 'process-mining', 'directly-follows-limitations'],
  },
  {
    id: 'process-instance',
    question: {
      de: 'Was ist eine Prozessinstanz?',
      en: 'What is a Process Instance?',
    },
    definition: {
      de: 'Eine Prozessinstanz (auch „Case" genannt) ist die konkrete, einmalige Ausführung eines Prozesses – zum Beispiel ein einzelner Kundenauftrag, der den gesamten Order-to-Cash-Prozess durchläuft. Sie umfasst alle Ereignisse, die zu diesem einen Fall gehören.',
      en: 'A process instance (also called a "case") is the concrete, one-time execution of a process – for example, a single customer order running through the entire order-to-cash process. It comprises all events belonging to that one case.',
    },
    whyImportant: {
      de: 'Die Prozessinstanz ist die grundlegende Analyseeinheit im Process Mining. Erst durch das Bündeln von Ereignissen zu Instanzen lassen sich Durchlaufzeiten, Varianten und Abweichungen messen und vergleichen.',
      en: 'The process instance is the fundamental unit of analysis in Process Mining. Only by bundling events into instances can throughput times, variants, and deviations be measured and compared.',
    },
    teaser: {
      de: 'Die konkrete Einzelausführung eines Prozesses – die Analyseeinheit im Process Mining.',
      en: 'The concrete single execution of a process – the unit of analysis in Process Mining.',
    },
    related: ['process-variant', 'event-log', 'what-is-a-process'],
  },
  {
    id: 'process-simulation',
    question: {
      de: 'Was ist Process Simulation?',
      en: 'What is Process Simulation?',
    },
    definition: {
      de: 'Process Simulation modelliert einen Geschäftsprozess und spielt seinen Ablauf rechnerisch durch, um das Verhalten unter verschiedenen Bedingungen vorherzusagen. So lassen sich Änderungen – etwa an Kapazitäten, Reihenfolgen oder Regeln – testen, bevor sie in der Realität umgesetzt werden.',
      en: 'Process Simulation models a business process and computationally plays through its execution to predict its behavior under different conditions. This makes it possible to test changes – such as to capacities, sequences, or rules – before they are implemented in reality.',
    },
    whyImportant: {
      de: 'Prozessänderungen sind in der Praxis teuer und riskant. Mit Process Simulation können Unternehmen „Was-wäre-wenn"-Szenarien risikofrei durchspielen, Engpässe vorhersehen und die Wirkung von Optimierungen belegen, bevor sie investieren.',
      en: 'Process changes are expensive and risky in practice. With Process Simulation, companies can play through "what-if" scenarios risk-free, anticipate bottlenecks, and prove the impact of optimizations before investing.',
    },
    teaser: {
      de: 'Prozesse rechnerisch durchspielen – Was-wäre-wenn-Szenarien vor der Umsetzung.',
      en: 'Play processes through computationally – what-if scenarios before implementation.',
    },
    related: ['digital-process-twin', 'process-intelligence', 'to-be-vs-as-is-process'],
  },
  {
    id: 'digital-process-twin',
    question: {
      de: 'Was ist ein Digital Process Twin?',
      en: 'What is a Digital Process Twin?',
    },
    definition: {
      de: 'Ein Digital Process Twin ist ein digitales, datenbasiertes Abbild eines realen Geschäftsprozesses, das kontinuierlich mit aktuellen Betriebsdaten gespeist wird. Er bildet den Prozess nicht nur einmalig ab, sondern spiegelt seinen laufenden Zustand wider und erlaubt Analysen, Simulationen und Vorhersagen.',
      en: 'A Digital Process Twin is a digital, data-based replica of a real business process that is continuously fed with current operational data. It represents not just a one-time snapshot but reflects the process\'s ongoing state and enables analysis, simulation, and prediction.',
    },
    whyImportant: {
      de: 'Ein Digital Process Twin verbindet Ist-Transparenz mit Zukunftsfähigkeit: Unternehmen können Auswirkungen von Entscheidungen vorab simulieren, Abweichungen in Echtzeit erkennen und Prozesse kontinuierlich statt punktuell steuern.',
      en: 'A Digital Process Twin combines as-is transparency with future readiness: companies can simulate the impact of decisions in advance, detect deviations in real time, and steer processes continuously rather than sporadically.',
    },
    teaser: {
      de: 'Das lebende digitale Abbild eines Prozesses – für Analyse, Simulation und Steuerung.',
      en: 'The living digital replica of a process – for analysis, simulation, and control.',
    },
    related: ['process-simulation', 'process-intelligence', 'event-knowledge-graph'],
  },
  {
    id: 'to-be-vs-as-is-process',
    question: {
      de: 'Was ist ein Soll-Prozess und was ist ein Ist-Prozess?',
      en: 'What is a To-Be process and what is an As-Is process?',
    },
    definition: {
      de: 'Der Ist-Prozess (AS-IS) beschreibt, wie ein Prozess tatsächlich abläuft, während der Soll-Prozess (TO-BE) den angestrebten, idealen Zielzustand definiert. Process Mining macht den Ist-Prozess sichtbar; das Soll-Modell dient als Referenz für Verbesserung und Vergleich.',
      en: 'The as-is process (AS-IS) describes how a process actually runs, while the to-be process (TO-BE) defines the desired, ideal target state. Process Mining makes the as-is process visible; the to-be model serves as a reference for improvement and comparison.',
    },
    whyImportant: {
      de: 'Optimierung entsteht erst aus dem Abgleich beider Sichtweisen: Nur wer Ist und Soll kennt, kann Lücken erkennen, Maßnahmen ableiten und deren Wirkung messen. Dieser Vergleich ist der Kern von Conformance Checking und kontinuierlicher Prozessverbesserung.',
      en: 'Improvement only emerges from comparing both perspectives: only by knowing the as-is and to-be can you identify gaps, derive measures, and measure their impact. This comparison is at the heart of Conformance Checking and continuous process improvement.',
    },
    teaser: {
      de: 'AS-IS gegen TO-BE – die Grundlage jeder Prozessverbesserung.',
      en: 'AS-IS versus TO-BE – the foundation of every process improvement.',
    },
    term: {
      de: 'Soll-Prozess und Ist-Prozess',
      en: 'To-Be and As-Is Process',
    },
    related: ['conformance-checking', 'business-process-management', 'process-mining', 'bpmn'],
  },
  {
    id: 'bpmn',
    question: {
      de: 'Was ist BPMN?',
      en: 'What is BPMN?',
    },
    definition: {
      de: 'BPMN (Business Process Model and Notation) ist ein international standardisierter Notationsstandard zur grafischen Modellierung von Geschäftsprozessen, gepflegt von der Object Management Group. Er definiert Symbole für Aktivitäten, Ereignisse, Verzweigungen, Rollen (Pools und Lanes) sowie Nachrichtenflüsse, sodass Fachbereich und IT dieselbe Darstellung lesen können. BPMN-Modelle sind zugleich für Menschen lesbar und technisch ausführbar.',
      en: 'BPMN (Business Process Model and Notation) is an internationally standardized notation for graphically modeling business processes, maintained by the Object Management Group. It defines symbols for activities, events, gateways, roles (pools and lanes), and message flows, so that business and IT can read the same representation. BPMN models are both human-readable and technically executable.',
    },
    whyImportant: {
      de: 'In vielen Organisationen ist BPMN die Sprache, in der Soll-Prozesse dokumentiert sind. Damit ist es der natürliche Bezugspunkt für Conformance Checking: Der aus Daten rekonstruierte Ist-Prozess wird gegen das BPMN-Modell gehalten, um Abweichungen objektiv zu bestimmen.',
      en: 'In many organizations, BPMN is the language in which target processes are documented. That makes it the natural reference point for Conformance Checking: the as-is process reconstructed from data is compared against the BPMN model to determine deviations objectively.',
    },
    teaser: {
      de: 'Der internationale Standard zur grafischen Modellierung von Geschäftsprozessen.',
      en: 'The international standard for graphically modeling business processes.',
    },
    term: {
      de: 'BPMN',
      en: 'BPMN',
    },
    related: ['epk', 'business-process-management', 'to-be-vs-as-is-process'],
  },
  {
    id: 'epk',
    question: {
      de: 'Was ist eine ereignisgesteuerte Prozesskette (EPK)?',
      en: 'What is an Event-driven Process Chain (EPC)?',
    },
    definition: {
      de: 'Die ereignisgesteuerte Prozesskette (EPK) ist eine Modellierungsnotation, die einen Prozess als strenge Abfolge von Ereignissen und Funktionen darstellt, verknüpft durch logische Operatoren (UND, ODER, XOR). Sie entstand Anfang der 1990er-Jahre an der Universität des Saarlandes und verbreitete sich über SAP R/3 und ARIS im deutschsprachigen Raum. Charakteristisch ist der strikte Wechsel: Auf jedes Ereignis folgt eine Funktion und auf jede Funktion ein Ereignis.',
      en: 'The Event-driven Process Chain (EPC) is a modeling notation that represents a process as a strict alternation of events and functions, linked by logical operators (AND, OR, XOR). It originated in the early 1990s at Saarland University and spread through SAP R/3 and ARIS across German-speaking countries. Its defining characteristic is the strict alternation: every event is followed by a function and every function by an event.',
    },
    whyImportant: {
      de: 'In vielen deutschen Unternehmen liegt die bestehende Prozessdokumentation bis heute als EPK vor – häufig in ARIS. Wer Process Mining einführt, trifft daher fast immer auf EPK-Modelle als Soll-Referenz und muss sie mit den tatsächlich gemessenen Abläufen abgleichen.',
      en: 'In many German companies, existing process documentation still exists as EPCs – frequently in ARIS. Anyone introducing Process Mining therefore almost always encounters EPC models as the target reference and has to reconcile them with the flows actually measured.',
    },
    teaser: {
      de: 'Die im deutschsprachigen Raum verbreitete Notation aus Ereignissen und Funktionen.',
      en: 'The notation of events and functions widely used in German-speaking countries.',
    },
    term: {
      de: 'Ereignisgesteuerte Prozesskette (EPK)',
      en: 'Event-driven Process Chain (EPC)',
    },
    related: ['bpmn', 'business-process-management', 'conformance-checking'],
  },
  {
    id: 'agentic-process-intelligence',
    question: {
      de: 'Was ist Agentic Process Intelligence?',
      en: 'What is Agentic Process Intelligence?',
    },
    definition: {
      de: 'Agentic Process Intelligence bezeichnet den Einsatz autonomer KI-Agenten, die kontinuierlich auf dem Prozessmodell und den Prozessdaten eines Unternehmens arbeiten, statt nur auf einzelne Nutzeranfragen zu antworten. Die Agenten beobachten Kennzahlen, bilden und prüfen Hypothesen, erkennen Abweichungen und melden Ergebnisse proaktiv zurück. Damit verschiebt sich Process Intelligence von einer Analyse auf Abruf hin zu einer dauerhaft mitlaufenden Beobachtung.',
      en: 'Agentic Process Intelligence describes the use of autonomous AI agents that work continuously on an organization’s process model and process data, rather than only responding to individual user queries. The agents monitor metrics, form and test hypotheses, detect deviations, and report results back proactively. This shifts Process Intelligence from analysis on demand to continuous, always-on observation.',
    },
    whyImportant: {
      de: 'Klassische Prozessanalyse ist an die Aufmerksamkeit von Menschen gebunden: Was niemand abfragt, bleibt unentdeckt. Agentische Ansätze skalieren die Beobachtung über alle Prozesse hinweg und verkürzen die Zeit zwischen dem Entstehen eines Problems und seiner Erkennung erheblich.',
      en: 'Classic process analysis is bound to human attention: whatever nobody queries stays undiscovered. Agentic approaches scale observation across all processes and substantially shorten the time between a problem arising and being noticed.',
    },
    teaser: {
      de: 'Autonome KI-Agenten, die dauerhaft auf Prozessdaten arbeiten statt nur auf Abruf.',
      en: 'Autonomous AI agents working continuously on process data instead of on demand.',
    },
    term: {
      de: 'Agentic Process Intelligence',
      en: 'Agentic Process Intelligence',
    },
    related: ['process-intelligence', 'agentic-root-cause-analysis', 'process-grounding'],
  },
  {
    id: 'agent-mining',
    question: {
      de: 'Was ist Agent Mining?',
      en: 'What is Agent Mining?',
    },
    definition: {
      de: 'Agent Mining überträgt die Methoden des Process Mining auf die Aktivität von KI-Agenten: Deren Aufrufe, Werkzeugnutzungen und Entscheidungen werden als Ereignisdaten erfasst und wie ein Prozess analysiert. So wird sichtbar, welche Wege ein Agent tatsächlich genommen hat, wo er scheitert, sich im Kreis dreht oder unnötig teure Schritte ausführt. Agent Mining verhält sich zu KI-Agenten wie Task Mining zu menschlicher Desktop-Arbeit.',
      en: 'Agent Mining applies Process Mining methods to the activity of AI agents: their calls, tool invocations, and decisions are captured as event data and analyzed like a process. This reveals which paths an agent actually took, where it fails, loops, or performs unnecessarily expensive steps. Agent Mining relates to AI agents the way Task Mining relates to human desktop work.',
    },
    whyImportant: {
      de: 'Sobald Agenten in produktiven Abläufen mitarbeiten, werden sie selbst zu einem Prozessbestandteil – mit Laufzeiten, Kosten, Fehlerquoten und Varianten. Ohne Agent Mining bleibt ihr Verhalten eine Blackbox, die sich weder gezielt optimieren noch gegenüber Fachbereich und Revision belegen lässt.',
      en: 'As soon as agents take part in productive workflows, they become part of the process themselves – with runtimes, costs, error rates, and variants. Without Agent Mining their behavior remains a black box that can neither be optimized deliberately nor evidenced to business owners and auditors.',
    },
    teaser: {
      de: 'Process Mining, angewendet auf die Spuren von KI-Agenten.',
      en: 'Process Mining applied to the traces left by AI agents.',
    },
    term: {
      de: 'Agent Mining',
      en: 'Agent Mining',
    },
    related: ['task-mining', 'process-mining', 'agent-conformance-checking'],
  },
  {
    id: 'agent-conformance-checking',
    question: {
      de: 'Was ist Agent Conformance Checking?',
      en: 'What is Agent Conformance Checking?',
    },
    definition: {
      de: 'Agent Conformance Checking prüft, ob ein autonom handelnder KI-Agent innerhalb der für ihn erlaubten Prozess-, Rollen- und Regelgrenzen geblieben ist. Dazu wird das tatsächliche Verhalten des Agenten gegen ein Soll-Modell abgeglichen – analog zum klassischen Conformance Checking, aber mit dem Agenten als handelndem Akteur. Abweichungen wie nicht erlaubte Werkzeugaufrufe, übersprungene Freigaben oder Handlungen außerhalb des Mandats werden dadurch sichtbar.',
      en: 'Agent Conformance Checking verifies whether an autonomously acting AI agent stayed within the process, role, and policy boundaries defined for it. The agent’s actual behavior is compared against a target model – analogous to classic Conformance Checking, but with the agent as the acting party. Deviations such as disallowed tool calls, skipped approvals, or actions outside its mandate become visible.',
    },
    whyImportant: {
      de: 'Mit steigender Autonomie verschiebt sich die Verantwortungsfrage: Nicht mehr nur Menschen, sondern auch Agenten müssen nachweisen können, dass sie regelkonform gehandelt haben. Regulatorische Anforderungen wie der EU AI Act verlangen Nachvollziehbarkeit und Protokollierung – Agent Conformance Checking liefert dafür die prüfbare Grundlage.',
      en: 'As autonomy increases, the accountability question shifts: not only humans but also agents must be able to demonstrate that they acted in compliance. Regulatory requirements such as the EU AI Act demand traceability and logging – Agent Conformance Checking provides the auditable basis for this.',
    },
    teaser: {
      de: 'Der Nachweis, dass ein KI-Agent innerhalb seiner erlaubten Grenzen gehandelt hat.',
      en: 'The proof that an AI agent acted within its permitted boundaries.',
    },
    term: {
      de: 'Agent Conformance Checking',
      en: 'Agent Conformance Checking',
    },
    related: ['conformance-checking', 'agent-mining', 'agentic-process-intelligence'],
  },
  {
    id: 'process-grounding',
    question: {
      de: 'Was ist Process Grounding?',
      en: 'What is Process Grounding?',
    },
    definition: {
      de: 'Process Grounding bezeichnet die Verankerung eines Sprachmodells in den realen Prozess- und Ereignisdaten eines Unternehmens, sodass seine Aussagen auf überprüfbaren Fakten statt auf Sprachwahrscheinlichkeiten beruhen. Statt Dokumente als Textschnipsel bereitzustellen, greift das Modell auf ein strukturiertes Prozessmodell – etwa einen Event Knowledge Graph – mit Fällen, Objekten, Zeitpunkten und Beziehungen zu. Jede Antwort lässt sich damit auf konkrete Prozessinstanzen zurückführen.',
      en: 'Process Grounding means anchoring a language model in an organization’s real process and event data, so that its statements rest on verifiable facts rather than on linguistic probability. Instead of supplying documents as text snippets, the model queries a structured process model – such as an Event Knowledge Graph – containing cases, objects, timestamps, and relationships. Every answer can therefore be traced back to concrete process instances.',
    },
    whyImportant: {
      de: 'Ein Sprachmodell ohne Prozesskontext erzeugt plausibel klingende, aber unbelegte Aussagen über Durchlaufzeiten, Ursachen oder Verantwortlichkeiten. Grounding macht den Unterschied zwischen einem Assistenten, dem man glauben muss, und einem, dessen Aussagen man nachprüfen kann – die Voraussetzung dafür, KI überhaupt in Entscheidungen einzubinden.',
      en: 'A language model without process context produces plausible-sounding but unsubstantiated claims about throughput times, causes, or responsibilities. Grounding is the difference between an assistant you have to believe and one whose statements you can verify – the precondition for involving AI in decisions at all.',
    },
    teaser: {
      de: 'KI-Antworten in echten Prozessdaten verankern statt in Sprachwahrscheinlichkeit.',
      en: 'Anchoring AI answers in real process data instead of linguistic probability.',
    },
    term: {
      de: 'Process Grounding',
      en: 'Process Grounding',
    },
    related: ['event-knowledge-graph', 'agentic-process-intelligence', 'process-ontology'],
  },
  {
    id: 'causal-ai',
    question: {
      de: 'Was ist Causal AI?',
      en: 'What is Causal AI?',
    },
    definition: {
      de: 'Causal AI ist ein Zweig der künstlichen Intelligenz, der Ursache-Wirkungs-Beziehungen modelliert, statt nur statistische Zusammenhänge zu erkennen. Während klassisches Machine Learning aus Korrelationen Vorhersagen ableitet, beantwortet Causal AI Fragen der Form „Was passiert, wenn ich X verändere?". Grundlage dafür sind kausale Modelle, Interventionen und kontrafaktische Betrachtungen.',
      en: 'Causal AI is a branch of artificial intelligence that models cause-and-effect relationships instead of only detecting statistical associations. While classic machine learning derives predictions from correlations, Causal AI answers questions of the form "what happens if I change X?". It rests on causal models, interventions, and counterfactual reasoning.',
    },
    whyImportant: {
      de: 'Für operative Entscheidungen reicht eine Vorhersage nicht aus – gebraucht wird die Wirkung einer Maßnahme. Ein Modell, das erkennt, dass verspätete Lieferungen mit Reklamationen korrelieren, sagt nichts darüber, ob schnellere Lieferung die Reklamationen senkt. Causal AI schließt genau diese Lücke zwischen Beobachtung und Handlung.',
      en: 'For operational decisions a prediction is not enough – what is needed is the effect of an action. A model that finds late deliveries correlate with complaints says nothing about whether faster delivery reduces complaints. Causal AI closes exactly this gap between observation and action.',
    },
    teaser: {
      de: 'KI, die Ursache und Wirkung modelliert statt nur Korrelationen zu finden.',
      en: 'AI that models cause and effect instead of merely finding correlations.',
    },
    term: {
      de: 'Causal AI',
      en: 'Causal AI',
    },
    related: ['causal-process-mining', 'directly-follows-limitations', 'agentic-root-cause-analysis'],
  },
  {
    id: 'model-context-protocol',
    question: {
      de: 'Was ist das Model Context Protocol (MCP)?',
      en: 'What is the Model Context Protocol (MCP)?',
    },
    definition: {
      de: 'Das Model Context Protocol (MCP) ist ein offener Standard, über den KI-Modelle und Agenten auf externe Datenquellen, Werkzeuge und Systeme zugreifen. Statt für jede Kombination aus Modell und System eine eigene Schnittstelle zu bauen, stellt ein MCP-Server seine Fähigkeiten einmal standardisiert bereit, und jeder MCP-fähige Client kann sie nutzen. Für Prozessdaten bedeutet das: Ein Agent kann Prozessmodell, Kennzahlen und Fallhistorien abfragen, ohne dass eine maßgeschneiderte Integration nötig ist.',
      en: 'The Model Context Protocol (MCP) is an open standard through which AI models and agents access external data sources, tools, and systems. Instead of building a separate interface for every model-and-system combination, an MCP server exposes its capabilities once in a standardized way, and any MCP-capable client can use them. For process data this means an agent can query the process model, metrics, and case histories without a bespoke integration.',
    },
    whyImportant: {
      de: 'Der begrenzende Faktor agentischer KI ist selten das Modell, sondern der Zugang zu belastbarem Kontext. Ein offener Zugriffsstandard entkoppelt die Werkzeuglandschaft vom eingesetzten Modell und verhindert, dass sich Unternehmen dauerhaft an einen einzelnen Anbieter binden.',
      en: 'The limiting factor for agentic AI is rarely the model but access to reliable context. An open access standard decouples the tool landscape from the model in use and prevents organizations from permanently locking themselves to a single vendor.',
    },
    teaser: {
      de: 'Der offene Standard, über den KI-Agenten an externe Daten und Werkzeuge kommen.',
      en: 'The open standard through which AI agents reach external data and tools.',
    },
    term: {
      de: 'Model Context Protocol (MCP)',
      en: 'Model Context Protocol (MCP)',
    },
    related: ['agentic-process-intelligence', 'process-grounding', 'agent-readiness'],
  },
  {
    id: 'agentic-automation-vs-rpa',
    question: {
      de: 'Was unterscheidet Agentic Automation von RPA?',
      en: 'What distinguishes Agentic Automation from RPA?',
    },
    definition: {
      de: 'RPA (Robotic Process Automation) führt fest definierte Regeln und Klickfolgen aus: Der Roboter tut exakt das, was vorher modelliert wurde, und bricht ab, sobald die Realität davon abweicht. Agentic Automation gibt stattdessen ein Ziel vor und überlässt dem Agenten den Weg dorthin – er wählt Werkzeuge, reagiert auf unerwartete Zustände und plant um. Der Unterschied liegt also nicht im Automatisierungsgrad, sondern darin, ob der Ablauf vorgeschrieben oder zur Laufzeit entschieden wird.',
      en: 'RPA (Robotic Process Automation) executes strictly defined rules and click sequences: the robot does exactly what was modeled beforehand and breaks as soon as reality deviates from it. Agentic Automation instead sets a goal and leaves the path to the agent – it selects tools, reacts to unexpected states, and re-plans. The difference is therefore not the degree of automation but whether the sequence is prescribed or decided at runtime.',
    },
    whyImportant: {
      de: 'RPA scheitert typischerweise an Ausnahmen – und genau dort liegt in den meisten Prozessen der größte Aufwand. Agentische Ansätze decken diesen Ausnahmebereich ab, verlangen dafür aber neue Kontrollmechanismen: Wer den Weg nicht vorschreibt, muss ihn im Nachhinein überprüfen können.',
      en: 'RPA typically fails on exceptions – and in most processes that is exactly where the greatest effort sits. Agentic approaches cover this exception space, but demand new control mechanisms in return: whoever does not prescribe the path must be able to review it afterwards.',
    },
    teaser: {
      de: 'Vorgeschriebener Ablauf gegen zielgetriebene Entscheidung zur Laufzeit.',
      en: 'A prescribed sequence versus a goal-driven decision at runtime.',
    },
    term: {
      de: 'Agentic Automation',
      en: 'Agentic Automation',
    },
    related: ['agent-conformance-checking', 'task-mining', 'agentic-process-intelligence'],
  },
  {
    id: 'ai-agent-vs-copilot',
    question: {
      de: 'Was ist der Unterschied zwischen einem KI-Agenten und einem Copilot?',
      en: 'What is the difference between an AI agent and a copilot?',
    },
    definition: {
      de: 'Ein Copilot arbeitet reaktiv und im Takt des Menschen: Er wartet auf eine Eingabe, liefert einen Vorschlag und überlässt die Ausführung der Nutzerin oder dem Nutzer. Ein KI-Agent verfolgt dagegen ein Ziel über längere Zeit, entscheidet selbst über Zwischenschritte und wird auch dann tätig, wenn ihn niemand fragt. Der Unterschied liegt in Initiative, Zeithorizont und Handlungsspielraum – nicht im zugrunde liegenden Modell.',
      en: 'A copilot works reactively and at human pace: it waits for input, offers a suggestion, and leaves execution to the user. An AI agent, by contrast, pursues a goal over a longer period, decides on intermediate steps itself, and acts even when nobody asks. The difference lies in initiative, time horizon, and scope of action – not in the underlying model.',
    },
    whyImportant: {
      de: 'Die Begriffe werden im Marketing häufig synonym verwendet, führen aber zu völlig unterschiedlichen Erwartungen und Kontrollanforderungen. Wer einen Agenten einführt, braucht Mandat, Grenzen und Protokollierung; wer einen Copilot einführt, braucht vor allem gute Vorschlagsqualität.',
      en: 'The terms are often used interchangeably in marketing, yet they create entirely different expectations and control requirements. Introducing an agent requires a mandate, boundaries, and logging; introducing a copilot mainly requires good suggestion quality.',
    },
    teaser: {
      de: 'Reaktiver Vorschlag gegen eigenständiges Verfolgen eines Ziels.',
      en: 'A reactive suggestion versus independently pursuing a goal.',
    },
    term: {
      de: 'KI-Agent und Copilot',
      en: 'AI Agent and Copilot',
    },
    related: ['agentic-process-intelligence', 'agentic-automation-vs-rpa', 'agent-conformance-checking'],
  },
  {
    id: 'self-improving-processes',
    question: {
      de: 'Was sind selbstverbessernde Prozesse?',
      en: 'What are self-improving processes?',
    },
    definition: {
      de: 'Selbstverbessernde Prozesse sind Abläufe, die ihre eigene Ausführung messen, Schwachstellen erkennen und Anpassungen anstoßen, ohne dass dafür ein Verbesserungsprojekt gestartet werden muss. Sie entstehen aus der Kopplung von kontinuierlicher Prozessbeobachtung, Ursachenanalyse und der Fähigkeit, Maßnahmen vorzuschlagen oder auszulösen. Der Regelkreis aus Messen, Verstehen und Eingreifen läuft dabei dauerhaft statt in Projektzyklen.',
      en: 'Self-improving processes are workflows that measure their own execution, identify weaknesses, and trigger adjustments without an improvement project having to be launched. They emerge from coupling continuous process observation, root-cause analysis, and the ability to propose or initiate measures. The loop of measuring, understanding, and intervening runs permanently instead of in project cycles.',
    },
    whyImportant: {
      de: 'Klassische Prozessoptimierung ist projektförmig: Sie erzeugt einen Verbesserungssprung, der danach langsam wieder erodiert. Ein dauerhaft laufender Regelkreis hält das erreichte Niveau und reagiert auf Veränderungen in Märkten, Systemen und Volumina, ohne auf die nächste Analysewelle zu warten.',
      en: 'Classic process optimization is project-shaped: it produces a step change that then slowly erodes again. A permanently running control loop holds the level achieved and reacts to changes in markets, systems, and volumes without waiting for the next wave of analysis.',
    },
    teaser: {
      de: 'Prozesse, die ihren eigenen Verbesserungskreislauf dauerhaft am Laufen halten.',
      en: 'Processes that keep their own improvement loop running permanently.',
    },
    term: {
      de: 'Selbstverbessernde Prozesse',
      en: 'Self-Improving Processes',
    },
    related: ['agentic-process-intelligence', 'business-process-management', 'digital-process-twin'],
  },
  {
    id: 'process-ontology',
    question: {
      de: 'Was ist eine Prozess-Ontologie?',
      en: 'What is a process ontology?',
    },
    definition: {
      de: 'Eine Prozess-Ontologie ist eine formale Beschreibung der Begriffe eines Prozessbereichs und ihrer Beziehungen: welche Objekttypen es gibt, welche Ereignisse an ihnen auftreten und wie beides zusammenhängt. Sie hält fest, dass etwa Bestellung, Lieferung und Rechnung eigenständige Objekte mit definierten Verbindungen sind – und nicht bloß Spaltennamen in einer Tabelle. Damit wird aus Rohdaten ein Modell, das auch von Maschinen interpretiert werden kann.',
      en: 'A process ontology is a formal description of the concepts in a process domain and their relationships: which object types exist, which events occur on them, and how the two connect. It records that a purchase order, a delivery, and an invoice are distinct objects with defined links – not merely column names in a table. This turns raw data into a model that machines can interpret as well.',
    },
    whyImportant: {
      de: 'KI-Agenten können nur so präzise arbeiten, wie die Bedeutung der Daten hinterlegt ist. Ohne Ontologie muss jedes Modell die Semantik erraten; mit Ontologie kann es Fragen entlang echter Zusammenhänge beantworten und Fehlschlüsse durch falsch verknüpfte Objekte vermeiden.',
      en: 'AI agents can only work as precisely as the meaning of the data is recorded. Without an ontology, every model has to guess the semantics; with one, it can answer questions along real relationships and avoid false conclusions from wrongly linked objects.',
    },
    teaser: {
      de: 'Die semantische Schicht, die Prozessdaten für Mensch und Maschine interpretierbar macht.',
      en: 'The semantic layer that makes process data interpretable for humans and machines.',
    },
    term: {
      de: 'Prozess-Ontologie',
      en: 'Process Ontology',
    },
    related: ['event-knowledge-graph', 'graph-databases', 'process-grounding'],
  },
  {
    id: 'agentic-root-cause-analysis',
    question: {
      de: 'Was ist agentische Ursachenanalyse?',
      en: 'What is agentic root cause analysis?',
    },
    definition: {
      de: 'Bei der agentischen Ursachenanalyse übernimmt ein KI-Agent die Schrittfolge, die sonst eine Analystin oder ein Analyst manuell durchläuft: Auffälligkeit erkennen, Hypothesen bilden, sie gegen die Prozessdaten prüfen, verwerfen oder bestätigen und das Ergebnis begründen. Der Agent arbeitet iterativ und kann viele Hypothesen parallel prüfen, statt sich auf die naheliegendsten zu beschränken. Das Ergebnis ist keine Kennzahl, sondern eine belegte Erklärung samt der zugehörigen Fälle.',
      en: 'In agentic root cause analysis, an AI agent takes over the sequence of steps an analyst would otherwise perform manually: spot an anomaly, form hypotheses, test them against the process data, reject or confirm them, and justify the result. The agent works iteratively and can test many hypotheses in parallel rather than being limited to the most obvious ones. The output is not a metric but a substantiated explanation together with the underlying cases.',
    },
    whyImportant: {
      de: 'Der Engpass in der Prozessverbesserung ist selten das Erkennen einer Abweichung, sondern das Erklären ihrer Ursache – dieser Schritt ist zeitaufwendig und stark erfahrungsabhängig. Wird er automatisiert, verschiebt sich der menschliche Beitrag vom Suchen zum Bewerten und Entscheiden.',
      en: 'The bottleneck in process improvement is rarely spotting a deviation but explaining its cause – a step that is time-consuming and heavily experience-dependent. Automating it shifts the human contribution from searching to judging and deciding.',
    },
    teaser: {
      de: 'Ein Agent, der Ursachen-Hypothesen selbst bildet und an den Daten prüft.',
      en: 'An agent that forms root-cause hypotheses itself and tests them against the data.',
    },
    term: {
      de: 'Agentische Ursachenanalyse',
      en: 'Agentic Root Cause Analysis',
    },
    related: ['causal-process-mining', 'agentic-process-intelligence', 'causal-ai'],
  },
  {
    id: 'agent-readiness',
    question: {
      de: 'Wann sind Prozessdaten bereit für KI-Agenten?',
      en: 'When is process data ready for AI agents?',
    },
    definition: {
      de: 'Agent Readiness beschreibt, ob die Prozessdaten eines Unternehmens so beschaffen sind, dass KI-Agenten verlässlich darauf arbeiten können. Dazu gehören eindeutige Identifikatoren, verlässliche Zeitstempel, klar benannte Aktivitäten, abgebildete Objektbeziehungen und ein hinterlegtes semantisches Modell. Fehlt eine dieser Voraussetzungen, liefert ein Agent zwar Antworten – aber keine belastbaren.',
      en: 'Agent Readiness describes whether an organization’s process data is structured such that AI agents can work on it reliably. This includes unambiguous identifiers, dependable timestamps, clearly named activities, modeled object relationships, and a documented semantic model. If any of these is missing, an agent will still produce answers – just not dependable ones.',
    },
    whyImportant: {
      de: 'Die meisten gescheiterten KI-Initiativen scheitern nicht am Modell, sondern an der Datengrundlage. Agent Readiness früh zu prüfen verhindert, dass Aufwand in Agenten fließt, für deren Aussagen später niemand einstehen kann.',
      en: 'Most failed AI initiatives fail not on the model but on the data foundation. Assessing Agent Readiness early prevents effort flowing into agents whose statements nobody can later stand behind.',
    },
    teaser: {
      de: 'Die Voraussetzungen, die Prozessdaten erfüllen müssen, damit Agenten verlässlich arbeiten.',
      en: 'The conditions process data must meet for agents to work reliably.',
    },
    term: {
      de: 'Agent Readiness von Prozessdaten',
      en: 'Agent Readiness of Process Data',
    },
    related: ['event-log', 'process-grounding', 'process-ontology'],
  },
];

export const getDefinitionById = (id: string): Definition | undefined =>
  definitions.find((d) => d.id === id);

export const getRelatedDefinitions = (definition: Definition): Definition[] =>
  (definition.related ?? [])
    .map((id) => getDefinitionById(id))
    .filter((d): d is Definition => Boolean(d));

export const getDefinitionQuestion = (definition: Definition, language: Language): string =>
  definition.question[language];
