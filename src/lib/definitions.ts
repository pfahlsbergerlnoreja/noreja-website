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
];

export const getDefinitionById = (id: string): Definition | undefined =>
  definitions.find((d) => d.id === id);

export const getRelatedDefinitions = (definition: Definition): Definition[] =>
  (definition.related ?? [])
    .map((id) => getDefinitionById(id))
    .filter((d): d is Definition => Boolean(d));

export const getDefinitionQuestion = (definition: Definition, language: Language): string =>
  definition.question[language];
