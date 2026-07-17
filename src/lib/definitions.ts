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
    related: ['process-mining', 'causal-process-mining', 'event-knowledge-graph'],
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
    related: ['graph-databases', 'object-centric-process-mining', 'event-log'],
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
    related: ['process-mining', 'directly-follows-limitations', 'event-knowledge-graph'],
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
    related: ['process-mining', 'process-intelligence', 'what-is-a-process'],
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
    related: ['process-discovery', 'to-be-vs-as-is-process', 'business-process-management'],
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
    related: ['process-mining', 'process-intelligence'],
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
    related: ['conformance-checking', 'business-process-management', 'process-mining'],
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
