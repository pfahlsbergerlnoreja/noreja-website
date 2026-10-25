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
  /**
   * "Wie sieht das konkret aus?" — a worked example. Optional so terms can be
   * filled in over time; the section is skipped where it is missing.
   *
   * The detail pages carry roughly 120 words of substance, which is thin for
   * the pages most likely to be cited by an answer engine. These two blocks
   * are where that gets fixed, and they render as their own H2 sections.
   */
  example?: {
    de: string;
    en: string;
  };
  /** "Nicht zu verwechseln mit" — delimitation against adjacent terms. */
  delimitation?: {
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
    example: {
      de: 'In einem Purchase-to-Pay-Prozess liegen die Spuren in SAP: Bestellung angelegt, Wareneingang gebucht, Rechnung erfasst, Zahlung freigegeben. Process Mining liest diese Zeitstempel je Fall aus und setzt sie zu den tatsächlich gelaufenen Pfaden zusammen. Sichtbar wird dann etwa, dass 12 % der Rechnungen vor dem Wareneingang eintreffen und im Schnitt sechs Tage liegen bleiben — ein Muster, das in keinem Prozessdiagramm steht.',
      en: 'In a purchase-to-pay process the traces sit in SAP: purchase order created, goods receipt booked, invoice recorded, payment approved. Process mining reads those timestamps per case and assembles them into the paths that actually occurred. What surfaces is, for instance, that 12% of invoices arrive before the goods receipt and then sit idle for six days on average — a pattern no process diagram contains.',
    },
    delimitation: {
      de: 'Nicht mit Task Mining: das erfasst Klicks und Tastatureingaben am Arbeitsplatz, Process Mining die Ereignisse in den Fachsystemen. Und nicht mit Business Intelligence: ein BI-Dashboard zeigt Kennzahlen zu einem Zeitpunkt, Process Mining rekonstruiert die Reihenfolge der Schritte, die zu diesen Kennzahlen geführt hat.',
      en: 'Not to be confused with task mining, which records clicks and keystrokes at the desktop, whereas process mining reads events from the business systems. Nor with business intelligence: a BI dashboard shows metrics at a point in time, while process mining reconstructs the sequence of steps that produced them.',
    },
    related: ['process-intelligence', 'event-log', 'causal-process-mining', 'process-intelligence-vs-process-mining', 'agentic-process-mining'],
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
    example: {
      de: 'Eine Versicherung sieht im Process Mining, dass Schadenfälle zu oft wieder geöffnet werden. Process Intelligence geht weiter: Sie verknüpft den Prozess mit Vertragsart, Schadenhöhe und Sachbearbeiter, erkennt, dass Re-Openings vor allem bei nachträglich korrigierten Rückstellungswerten auftreten, und beziffert, was diese Schleife pro Jahr kostet.',
      en: 'An insurer sees in process mining that claims are reopened too often. Process intelligence goes further: it links the process to policy type, claim size and case handler, identifies that reopenings cluster around reserves corrected after the fact, and quantifies what that loop costs per year.',
    },
    delimitation: {
      de: 'Nicht mit Process Mining gleichzusetzen: Process Mining ist die Analysemethode, Process Intelligence die darüberliegende Disziplin, die Prozessdaten mit Kontext, Kennzahlen und Entscheidungen verbindet. Process Mining beantwortet, wie ein Prozess abläuft; Process Intelligence, warum er so abläuft, was das kostet und was daraus folgt.',
      en: 'Not the same as process mining. Process mining is the analysis method; process intelligence is the wider discipline that connects process data with context, metrics and decisions. Process mining answers how a process runs; process intelligence answers why it runs that way, what it costs, and what follows from it.',
    },
    related: ['process-mining', 'causal-process-mining', 'event-knowledge-graph', 'agentic-process-intelligence', 'process-intelligence-vs-process-mining'],
  },
  {
    id: 'process-intelligence-vs-process-mining',
    question: {
      de: 'Was unterscheidet Process Intelligence von Process Mining?',
      en: 'What is the difference between Process Intelligence and Process Mining?',
    },
    definition: {
      de: 'Process Mining ist eine Analysemethode: Sie rekonstruiert aus den Ereignisdaten von IT-Systemen, wie ein Prozess tatsächlich abläuft. Process Intelligence ist die übergeordnete Disziplin, die diese Prozessdaten mit Geschäftskontext, Kennzahlen, Fachwissen und KI verbindet, um zu erklären, warum ein Prozess so abläuft, und daraus Entscheidungen abzuleiten. Process Mining liefert also die Faktenbasis, Process Intelligence macht daraus Verständnis und Handlung.',
      en: 'Process Mining is an analysis method: it reconstructs how a process actually runs from the event data in IT systems. Process Intelligence is the wider discipline that combines this process data with business context, metrics, domain knowledge, and AI to explain why a process runs the way it does and to derive decisions from it. Process Mining supplies the factual basis; Process Intelligence turns it into understanding and action.',
    },
    whyImportant: {
      de: 'Der Markt ordnet sich entlang dieser Unterscheidung neu: Gartner hat seinen Marktbericht im Mai 2026 als „Magic Quadrant for Process Intelligence Platforms" veröffentlicht, die Vorgänger trugen „Process Mining" im Titel. Wer Werkzeuge auswählt, sollte deshalb prüfen, ob ein Anbieter nur Abläufe visualisiert oder auch Ursachen, Kontext und Maßnahmen liefert – das ist der eigentliche Unterschied hinter den beiden Begriffen.',
      en: 'The market is reorganizing along this distinction: in May 2026 Gartner published its market report as the "Magic Quadrant for Process Intelligence Platforms", whereas earlier editions carried "Process Mining" in the title. Anyone selecting tools should therefore check whether a vendor only visualizes flows or also delivers causes, context, and actions – that is the real difference behind the two terms.',
    },
    teaser: {
      de: 'Analysemethode gegen übergeordnete Disziplin – was die beiden Begriffe trennt.',
      en: 'Analysis method versus wider discipline – what separates the two terms.',
    },
    term: {
      de: 'Process Intelligence vs. Process Mining',
      en: 'Process Intelligence vs. Process Mining',
    },
    example: {
      de: 'Process Mining zeigt im Order-to-Cash-Prozess: 18 % der Aufträge durchlaufen eine Kreditsperre, im Schnitt vier Tage lang. Process Intelligence verknüpft das mit Kundensegment, Kreditlimit und Umsatz, erkennt, dass fast alle Sperren Bestandskunden mit veraltetem Limit treffen, beziffert die dadurch gebundene Liquidität und schlägt vor, die Limits dieser Gruppe gezielt zu überprüfen.',
      en: 'Process mining shows that in order-to-cash 18% of orders pass through a credit block lasting four days on average. Process intelligence links that to customer segment, credit limit and revenue, finds that almost all blocks hit existing customers with an outdated limit, quantifies the working capital tied up as a result, and proposes reviewing that group’s limits specifically.',
    },
    delimitation: {
      de: 'Nicht als Konkurrenz zu verstehen: Process Intelligence ersetzt Process Mining nicht, sondern baut darauf auf. Und nicht mit Business Intelligence zu verwechseln: BI verdichtet Kennzahlen zu Berichten, Process Intelligence erklärt die Abläufe, die hinter diesen Kennzahlen stehen.',
      en: 'Not a rivalry: process intelligence does not replace process mining but builds on it. Nor the same as business intelligence, which condenses metrics into reports, whereas process intelligence explains the flows behind those metrics.',
    },
    related: ['process-mining', 'process-intelligence', 'agentic-process-intelligence', 'causal-process-mining'],
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
    example: {
      de: 'Die Frage „welche Lieferanten hängen an Bestellungen, deren Rechnung länger als 30 Tage offen ist?" braucht relational mehrere Joins über Bestell-, Rechnungs- und Lieferantentabellen. In einer Graphdatenbank ist sie ein Pfad entlang bestehender Kanten — die Beziehung ist gespeichert, nicht zur Abfragezeit errechnet. Der Unterschied wächst mit jeder weiteren Ebene.',
      en: 'The question "which suppliers are attached to orders whose invoice has been open for more than 30 days?" needs several joins across order, invoice and supplier tables in a relational database. In a graph database it is a walk along existing edges — the relationship is stored, not computed at query time. The gap widens with every additional hop.',
    },
    delimitation: {
      de: 'Nicht mit einem Knowledge Graph gleichzusetzen: der ist ein Datenmodell, die Graphdatenbank die Technologie, die ihn speichert und abfragbar macht. Und nicht mit einer relationalen Datenbank samt Fremdschlüsseln: dort sind Beziehungen implizit über Schlüsselwerte, im Graph explizit als eigene Objekte mit eigenen Eigenschaften.',
      en: 'Not the same as a knowledge graph, which is a data model; the graph database is the technology that stores and queries it. Nor the same as a relational database with foreign keys: there, relationships are implicit in key values, while in a graph they are explicit objects with properties of their own.',
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
    example: {
      de: 'Ein Event-Log kennt genau eine Fall-ID, etwa die Bestellnummer. Ein Event Knowledge Graph modelliert Bestellung, Lieferung, Rechnung und Kunde als eigene Objekte mit Beziehungen zwischen ihnen. Eine Sammellieferung für drei Bestellungen ist damit ein Knoten mit drei Kanten — im flachen Log müsste derselbe Vorgang dreimal dupliziert werden.',
      en: 'An event log knows exactly one case ID, the order number for example. An event knowledge graph models order, delivery, invoice and customer as separate objects with relationships between them. A consolidated shipment covering three orders becomes one node with three edges — in a flat log the same event would have to be duplicated three times.',
    },
    delimitation: {
      de: 'Nicht mit einer Graphdatenbank gleichzusetzen: die ist die Speichertechnologie, der Event Knowledge Graph das Datenmodell darin. Und nicht mit einem Prozessmodell wie BPMN: das beschreibt den Soll-Ablauf, der Graph enthält die tatsächlich beobachteten Ereignisse und ihre Verknüpfungen.',
      en: 'Not the same as a graph database, which is the storage technology; the event knowledge graph is the data model held inside it. Nor the same as a process model such as BPMN, which describes the intended flow — the graph holds the events actually observed and how they connect.',
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
    example: {
      de: 'Klassisches Process Mining zeigt, dass auf die Kreditprüfung häufig eine Nacharbeit folgt. Das ist eine Häufigkeit, keine Ursache. Causal Process Mining prüft, ob die Nacharbeit tatsächlich aus der Kreditprüfung folgt oder ob beide von einer dritten Größe abhängen — etwa unvollständigen Stammdaten. Erst diese Unterscheidung sagt dir, wo eine Maßnahme überhaupt wirken kann.',
      en: 'Classic process mining shows that a credit check is frequently followed by rework. That is a frequency, not a cause. Causal process mining tests whether the rework actually follows from the credit check, or whether both depend on a third factor — incomplete master data, say. Only that distinction tells you where an intervention can work at all.',
    },
    delimitation: {
      de: 'Nicht mit Directly-Follows-Analysen zu verwechseln: die zählen, welcher Schritt auf welchen folgt. Aufeinanderfolge ist aber keine Kausalität — zwei Schritte können regelmäßig hintereinander auftreten, ohne dass der eine den anderen auslöst. Genau diese Lücke schließt der kausale Ansatz.',
      en: 'Not to be confused with directly-follows analysis, which counts which step follows which. Succession is not causation: two steps can occur in sequence regularly without one triggering the other. Closing that gap is precisely what the causal approach is for.',
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
    example: {
      de: 'Laufen Bonitätsprüfung und Lagerprüfung parallel, erscheinen sie im Log mal in der einen, mal in der anderen Reihenfolge. Ein Directly-Follows-Graph zeichnet daraus Kanten in beide Richtungen und suggeriert eine Schleife, die es nie gab. Das Modell wirkt komplizierter als der Prozess — und die vermeintliche Schleife zieht Analysen auf sich, die ins Leere laufen.',
      en: 'If a credit check and a stock check run in parallel, the log shows them sometimes in one order, sometimes the other. A directly-follows graph draws edges in both directions and suggests a loop that never existed. The model looks more complicated than the process — and the phantom loop attracts analysis that leads nowhere.',
    },
    delimitation: {
      de: 'Nicht als genereller Einwand gegen Process Mining zu lesen: Directly-Follows-Graphen sind eine — allerdings sehr verbreitete — Modellierungsform unter mehreren. Verfahren wie Inductive Mining sowie objektzentrierte und kausale Ansätze umgehen genau diese Schwächen.',
      en: 'Not to be read as a general objection to process mining: directly-follows graphs are one — admittedly very common — modelling form among several. Techniques such as inductive mining, and object-centric and causal approaches, avoid precisely these weaknesses.',
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
    example: {
      de: 'Drei Zeilen aus einem Order-to-Cash-Log: (Fall 4711, „Auftrag angelegt", 02.03. 09:14), (Fall 4711, „Kreditprüfung", 02.03. 11:02), (Fall 4711, „Lieferung", 05.03. 08:30). Mehr braucht Process Mining nicht, um daraus einen Pfad zu rekonstruieren. Zusätzliche Spalten wie Sachbearbeiter, Betrag oder Werk machen die Analyse reicher, sind aber nicht Pflicht.',
      en: 'Three rows from an order-to-cash log: (case 4711, "order created", 2 Mar 09:14), (case 4711, "credit check", 2 Mar 11:02), (case 4711, "delivery", 5 Mar 08:30). That is all process mining needs to reconstruct a path. Extra columns such as handler, amount or plant make the analysis richer but are not required.',
    },
    delimitation: {
      de: 'Nicht mit einem Application- oder Systemlog zu verwechseln: das protokolliert technische Ereignisse ohne Fallbezug. Und nicht mit einer Datenbanktabelle: die zeigt den aktuellen Zustand eines Objekts, der Event-Log die Historie, wie es dazu kam.',
      en: 'Not to be confused with an application or system log, which records technical events with no case reference. Nor with a database table: that shows an object\'s current state, whereas the event log holds the history of how it got there.',
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
    example: {
      de: 'Ein Mittelständler dokumentiert seinen Reklamationsprozess, definiert Verantwortliche und Durchlaufzeit-Ziele, führt ein Ticketsystem ein und misst quartalsweise nach. Kommen aus der Messung Änderungen zurück in die Dokumentation, ist der BPM-Kreislauf geschlossen: modellieren, umsetzen, messen, verbessern.',
      en: 'A mid-sized company documents its complaints process, defines owners and cycle-time targets, introduces a ticketing system and measures quarterly. Once those measurements feed changes back into the documentation, the BPM cycle is closed: model, implement, measure, improve.',
    },
    delimitation: {
      de: 'Nicht mit Process Mining zu verwechseln: BPM ist die Management-Disziplin, Process Mining eine Analysemethode darin. BPM legt fest, wie ein Prozess laufen soll; Process Mining zeigt, wie er läuft. Und nicht mit Workflow-Automatisierung: die führt einzelne Abläufe technisch aus, BPM steuert den gesamten Lebenszyklus.',
      en: 'Not to be confused with process mining: BPM is the management discipline, process mining one analysis method within it. BPM defines how a process should run; process mining shows how it does. Nor with workflow automation, which executes individual flows technically while BPM governs the whole lifecycle.',
    },
    related: ['process-mining', 'process-intelligence', 'what-is-a-process', 'bpmn', 'epk', 'agentic-bpm'],
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
    example: {
      de: 'Order-to-Cash ist ein Prozess: Er beginnt mit der Bestellung, endet mit dem Zahlungseingang, und dazwischen liegen Kreditprüfung, Kommissionierung, Versand und Rechnungsstellung. Jede einzelne Bestellung durchläuft ihn als eigene Instanz — mit eigenem Startzeitpunkt, eigenen Beteiligten und eigenem Ergebnis.',
      en: 'Order-to-cash is a process: it starts with the order, ends with payment received, and in between sit credit check, picking, shipping and invoicing. Every single order runs through it as its own instance — with its own start time, its own participants and its own outcome.',
    },
    delimitation: {
      de: 'Nicht mit einem Projekt zu verwechseln: das ist einmalig und hat ein definiertes Ende, ein Prozess wiederholt sich. Und nicht mit einer Funktion oder Abteilung: die beschreibt, wer etwas tut; der Prozess beschreibt, in welcher Reihenfolge es geschieht — meist quer über mehrere Abteilungen.',
      en: 'Not to be confused with a project, which happens once and has a defined end, whereas a process repeats. Nor with a function or department, which describes who does something; a process describes the order in which things happen — usually across several departments.',
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
    example: {
      de: 'Eine Rechnung deckt drei Bestellungen ab, eine Bestellung wird in zwei Teillieferungen erfüllt. Mit einer einzigen Fall-ID muss man sich entscheiden, ob man den Prozess aus Sicht der Bestellung oder der Rechnung betrachtet — und dupliziert die jeweils andere Seite. Das verzerrt Häufigkeiten und Durchlaufzeiten. OCPM behält beide Objekttypen und ihre Verknüpfung bei.',
      en: 'One invoice covers three orders; one order is fulfilled in two partial deliveries. With a single case ID you have to choose whether to view the process from the order or the invoice side — and duplicate the other. That distorts frequencies and cycle times. OCPM keeps both object types and the link between them.',
    },
    delimitation: {
      de: 'Nicht mit Multi-Perspektiven-Auswertungen zu verwechseln, bei denen man mehrere Sichten nacheinander auf denselben eindimensionalen Log legt. OCPM ändert das Datenmodell selbst, nicht nur die Auswertung darüber.',
      en: 'Not to be confused with multi-perspective reporting, where several views are applied one after another to the same one-dimensional log. OCPM changes the data model itself, not just the analysis on top of it.',
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
    example: {
      de: 'Aus 4.812 Purchase-to-Pay-Fällen entsteht binnen Sekunden ein Modell mit allen tatsächlich gelaufenen Pfaden — darunter 37 Varianten, von denen die Fachabteilung vier kannte. Filtert man auf die häufigsten 80 % der Fälle, bleibt ein lesbares Grundmodell; der Rest ist die Ausnahmelandschaft, und oft steckt dort das Geld.',
      en: 'From 4,812 purchase-to-pay cases a model of every path actually taken appears within seconds — 37 variants among them, of which the business knew four. Filter to the most frequent 80% of cases and a readable base model remains; the rest is the exception landscape, and that is often where the money sits.',
    },
    delimitation: {
      de: 'Nicht mit Prozessmodellierung zu verwechseln: dort zeichnet ein Mensch, wie ein Prozess laufen soll. Discovery leitet aus Daten ab, wie er gelaufen ist. Und nicht mit Conformance Checking: das setzt ein Modell bereits voraus und vergleicht die Realität dagegen.',
      en: 'Not to be confused with process modelling, where a person draws how a process should run. Discovery derives from data how it did run. Nor with conformance checking, which already assumes a model and compares reality against it.',
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
    example: {
      de: 'Das Soll-Modell verlangt eine Vier-Augen-Freigabe ab 10.000 €. Der Abgleich mit dem Ist-Verlauf liefert 214 Fälle, in denen dieselbe Person angelegt und freigegeben hat — mit Zeitpunkt, Betrag und Verantwortlichem, statt einer Prozentzahl im Quartalsbericht.',
      en: 'The target model requires dual approval above €10,000. Comparing it with the actual runs returns 214 cases in which the same person both created and approved — with timestamp, amount and owner, rather than a percentage in a quarterly report.',
    },
    delimitation: {
      de: 'Nicht mit Process Discovery zu verwechseln: die erzeugt das Modell, Conformance Checking prüft dagegen. Und nicht mit einer Stichprobenprüfung: dort kontrolliert jemand einen Bruchteil der Fälle manuell, hier wird jeder Fall automatisch abgeglichen.',
      en: 'Not to be confused with process discovery, which produces the model; conformance checking tests against it. Nor with sample-based auditing, where someone manually checks a fraction of cases — here every case is compared automatically.',
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
    example: {
      de: 'Der Event-Log zeigt zwischen „Rechnung erfasst" und „Rechnung geprüft" eine Lücke von vier Stunden, aber nicht, was darin passiert. Task Mining zeichnet auf, dass in dieser Zeit Werte aus einer Excel-Liste in drei Masken übertragen werden — ein Arbeitsschritt, der in keinem Fachsystem als Ereignis existiert.',
      en: 'The event log shows a four-hour gap between "invoice recorded" and "invoice checked", but not what happens inside it. Task mining records that values are being copied from a spreadsheet into three screens during that time — a step that exists as an event in no business system.',
    },
    delimitation: {
      de: 'Nicht mit Process Mining zu verwechseln: das liest Ereignisse aus Fachsystemen, Task Mining Interaktionen am Arbeitsplatz. Und nicht mit Bildschirmaufzeichnung zur Leistungskontrolle: ausgewertet werden aggregierte Arbeitsmuster, was in der Praxis Datenschutz und Mitbestimmung einzubeziehen verlangt.',
      en: 'Not to be confused with process mining, which reads events from business systems, whereas task mining captures desktop interactions. Nor with screen recording for performance monitoring: the output is aggregated work patterns, and in practice the approach requires data-protection and works-council involvement.',
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
    example: {
      de: 'In OCEL 2.0 verweist das Ereignis „Lieferung versandt" gleichzeitig auf drei Bestellungen und einen Lieferschein. In einem klassischen XES-Log müsste dasselbe Ereignis dreimal auftauchen, je einmal pro Bestell-Fall — mit allen Verzerrungen, die daraus für Häufigkeiten und Durchlaufzeiten folgen.',
      en: 'In OCEL 2.0 the event "shipment sent" references three orders and one delivery note at once. In a classic XES log the same event would have to appear three times, once per order case — with all the distortion that introduces into frequencies and cycle times.',
    },
    delimitation: {
      de: 'Nicht mit XES zu verwechseln, dem älteren Standard mit genau einer Fall-ID je Ereignis. Und nicht mit OCPM selbst: OCEL 2.0 ist das Austauschformat, OCPM die Analysemethode, die damit arbeitet.',
      en: 'Not to be confused with XES, the older standard with exactly one case ID per event. Nor with OCPM itself: OCEL 2.0 is the exchange format, OCPM the analysis method that works on it.',
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
    example: {
      de: 'Von 12.000 Bestellungen laufen 7.400 über den Pfad Auftrag → Kreditprüfung → Lieferung → Rechnung. Das ist die Hauptvariante. Weitere 2.100 nehmen denselben Weg mit einer zusätzlichen Nacharbeit vor der Lieferung — schon eine eigene Variante, auch wenn der Unterschied nur ein Schritt ist.',
      en: 'Of 12,000 orders, 7,400 run along the path order → credit check → delivery → invoice. That is the main variant. Another 2,100 take the same route with one extra rework step before delivery — already a variant of its own, even though the difference is a single step.',
    },
    delimitation: {
      de: 'Nicht mit einer Prozessinstanz zu verwechseln: die ist ein einzelner Durchlauf, die Variante die Menge aller Durchläufe mit identischem Pfad. Und nicht mit einer Ausnahme: auch die häufigste Route ist eine Variante.',
      en: 'Not to be confused with a process instance, which is a single run; a variant is the set of all runs sharing an identical path. Nor with an exception: the most frequent route is a variant too.',
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
    example: {
      de: 'Bestellung 4711 ist eine Instanz des Order-to-Cash-Prozesses: angelegt am 2. März, Kreditprüfung am selben Tag, Lieferung am 5. März, Zahlungseingang am 28. März. Alle Ereignisse mit dieser Fall-ID gehören zu ihr — und die Durchlaufzeit von 26 Tagen ist die genau dieser einen Instanz, nicht des Prozesses insgesamt.',
      en: 'Order 4711 is one instance of the order-to-cash process: created 2 March, credit-checked the same day, delivered 5 March, paid 28 March. Every event carrying that case ID belongs to it — and the 26-day cycle time is that of this one instance, not of the process as a whole.',
    },
    delimitation: {
      de: 'Nicht mit der Prozessvariante zu verwechseln: viele Instanzen können denselben Pfad nehmen und bilden dann gemeinsam eine Variante. Und nicht mit dem Prozessmodell: das beschreibt alle möglichen Abläufe, die Instanz genau einen tatsächlich gelaufenen.',
      en: 'Not to be confused with a process variant: many instances can share the same path and together form one variant. Nor with the process model, which describes every possible run, whereas the instance is exactly one run that happened.',
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
    example: {
      de: 'Die Analyse zeigt die Kreditprüfung als Engpass. Bevor zwei zusätzliche Prüfer eingestellt werden, spielt die Simulation durch, was sie bewirken: Die Durchlaufzeit sinkt um 3,1 Tage, der Engpass wandert aber zur Kommissionierung. Diese Verschiebung liefert keine Ist-Analyse, sondern erst der Durchlauf des veränderten Modells.',
      en: 'Analysis points to the credit check as the bottleneck. Before hiring two more reviewers, simulation plays out what they achieve: cycle time drops by 3.1 days, but the bottleneck moves to picking. No as-is analysis produces that shift — only running the changed model does.',
    },
    delimitation: {
      de: 'Nicht mit einer Prognose zu verwechseln: die schreibt beobachtete Entwicklungen fort. Die Simulation rechnet hypothetische Szenarien durch, die es so noch nie gab. Und nicht mit einem Digital Process Twin: der wird laufend mit Echtdaten gespeist, eine Simulation ist ein abgegrenzter Rechenlauf.',
      en: 'Not to be confused with a forecast, which extrapolates observed trends. Simulation computes hypothetical scenarios that have never occurred. Nor with a digital process twin, which is continuously fed with live data — a simulation is a bounded computation.',
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
    example: {
      de: 'Der Zwilling eines Schadenprozesses liest nächtlich neue Ereignisse ein. Verschiebt sich die durchschnittliche Bearbeitungszeit um mehr als zwei Tage, meldet er das, bevor es im Quartalsbericht auffällt — und erlaubt zugleich, eine geplante Regeländerung erst am Modell durchzurechnen, bevor sie produktiv geht.',
      en: 'The twin of a claims process ingests new events nightly. If average handling time shifts by more than two days it flags that before a quarterly report would — and at the same time lets a planned rule change be computed against the model before it goes live.',
    },
    delimitation: {
      de: 'Nicht mit einem BPMN-Prozessmodell zu verwechseln: das ist ein statisches Diagramm ohne Datenanbindung. Und nicht mit einem Digital Twin aus der Fertigung: der bildet eine physische Anlage ab, der Process Twin einen Ablauf.',
      en: 'Not to be confused with a BPMN process model, which is a static diagram with no data feed. Nor with a digital twin in manufacturing, which mirrors a physical asset — the process twin mirrors a flow.',
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
    example: {
      de: 'Im Soll-Prozess folgt auf die Bestellung die Freigabe, dann die Lieferung. Der Ist-Prozess zeigt, dass in 18 % der Fälle zuerst geliefert und die Freigabe nachgereicht wird. Beides nebeneinandergelegt, lautet die Frage nicht mehr „passiert das?", sondern „warum, wie oft, und was kostet es?".',
      en: 'In the target process, approval follows the order and delivery follows approval. The as-is process shows that in 18% of cases delivery happens first and approval is filed afterwards. Put side by side, the question is no longer "does this happen?" but "why, how often, and what does it cost?".',
    },
    delimitation: {
      de: 'Nicht mit „falsch und richtig" zu verwechseln: eine Abweichung kann ein sinnvoller Workaround sein, den das Soll-Modell noch nicht kennt. Manchmal ist die richtige Konsequenz, das Soll-Modell zu ändern, nicht die Praxis.',
      en: 'Not to be read as "wrong versus right": a deviation can be a sensible workaround the target model does not yet know about. Sometimes the right conclusion is to change the target model, not the practice.',
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
    example: {
      de: 'Eine Freigabe ab 10.000 € wird in BPMN als exklusives Gateway modelliert: ein Rautensymbol mit zwei ausgehenden Pfaden, beschriftet mit den Bedingungen. Weil die Symbole genormt sind, liest die Fachabteilung dasselbe Diagramm wie die Entwicklung, die daraus einen ausführbaren Workflow ableitet.',
      en: 'An approval above €10,000 is modelled in BPMN as an exclusive gateway: a diamond with two outgoing paths labelled with the conditions. Because the symbols are standardised, the business reads the same diagram as the engineers who derive an executable workflow from it.',
    },
    delimitation: {
      de: 'Nicht mit einem Flussdiagramm zu verwechseln: dessen Symbole sind weder genormt noch ausführbar. Und nicht mit der EPK, die dieselbe Aufgabe mit anderer Notation löst und vor allem im deutschsprachigen Raum verbreitet ist.',
      en: 'Not to be confused with a flowchart, whose symbols are neither standardised nor executable. Nor with the EPC, which solves the same task in a different notation and is used mainly in German-speaking countries.',
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
    example: {
      de: 'Eine EPK wechselt strikt zwischen Ereignis und Funktion: „Bestellung eingegangen" → „Bonität prüfen" → „Bonität geprüft" → „Auftrag freigeben". Diese Abwechslung macht Modelle länger als in BPMN, zwingt aber dazu, jeden Zustandswechsel ausdrücklich zu benennen.',
      en: 'An EPC alternates strictly between event and function: "order received" → "check credit" → "credit checked" → "release order". That alternation makes models longer than in BPMN, but it forces every state change to be named explicitly.',
    },
    delimitation: {
      de: 'Nicht mit BPMN zu verwechseln: BPMN ist der internationale Standard der Object Management Group, die EPK stammt aus dem ARIS-Umfeld. Und nicht mit einem Ereignis im Process-Mining-Sinn: das EPK-Ereignis ist ein modellierter Zustand, kein aufgezeichneter Zeitstempel.',
      en: 'Not to be confused with BPMN, the international Object Management Group standard, whereas the EPC comes out of the ARIS world. Nor with an event in the process-mining sense: an EPC event is a modelled state, not a recorded timestamp.',
    },
    related: ['bpmn', 'business-process-management', 'conformance-checking'],
  },
  {
    id: 'agentic-ai',
    question: {
      de: 'Was ist agentische KI (Agentic AI)?',
      en: 'What is Agentic AI?',
    },
    definition: {
      de: 'Agentische KI (Agentic AI) bezeichnet KI-Systeme, die ein vorgegebenes Ziel eigenständig über mehrere Schritte verfolgen: Sie planen, wählen Werkzeuge und Datenquellen, führen Aktionen aus, prüfen das Ergebnis und passen ihr Vorgehen an. Grundlage ist meist ein großes Sprachmodell, das mit Werkzeugzugriff, Gedächtnis und einer Steuerungsschleife zu einem oder mehreren KI-Agenten kombiniert wird. Entscheidend ist nicht, dass die KI Text erzeugt, sondern dass sie handelt.',
      en: 'Agentic AI refers to AI systems that pursue a given goal independently across multiple steps: they plan, choose tools and data sources, carry out actions, check the result, and adjust their approach. It is usually built on a large language model that is combined with tool access, memory, and a control loop to form one or more AI agents. What matters is not that the AI generates text but that it acts.',
    },
    whyImportant: {
      de: 'Mit agentischer KI verschiebt sich KI vom Antworten zum Erledigen – und damit aus der Einzelanfrage in den laufenden Geschäftsprozess. Das eröffnet Automatisierung dort, wo feste Regeln bisher scheiterten, wirft aber neue Fragen auf: Welches Mandat hat der Agent, auf welchen Daten entscheidet er, und wie lässt sich im Nachhinein belegen, was er getan hat? Gartner erwartet, dass bis Ende 2027 über 40 % der Agentic-AI-Projekte eingestellt werden, vor allem wegen unklarem Nutzen und unzureichender Risikokontrolle.',
      en: 'With agentic AI, AI shifts from answering to getting things done – and therefore from the single request into the running business process. That opens up automation where fixed rules used to fail, but raises new questions: what mandate does the agent have, what data does it decide on, and how can what it did be evidenced afterwards? Gartner expects more than 40% of agentic AI projects to be canceled by the end of 2027, mainly due to unclear business value and inadequate risk controls.',
    },
    teaser: {
      de: 'KI, die ein Ziel über mehrere Schritte selbst verfolgt – vom Antworten zum Handeln.',
      en: 'AI that pursues a goal across several steps on its own – from answering to acting.',
    },
    term: {
      de: 'Agentische KI (Agentic AI)',
      en: 'Agentic AI',
    },
    example: {
      de: 'Eine generative KI schreibt auf Anfrage eine Mahnung. Ein agentisches System bekommt das Ziel „offene Forderungen über 60 Tage reduzieren": Es zieht die betroffenen Rechnungen aus dem ERP, prüft je Fall, ob eine Reklamation offen ist, entwirft gestaffelte Mahnungen, legt Fälle mit mehr als 10.000 € Streitwert einer Sachbearbeiterin vor und misst zwei Wochen später, wie viel eingegangen ist.',
      en: 'A generative AI writes a payment reminder when asked. An agentic system is given the goal "reduce receivables older than 60 days": it pulls the affected invoices from the ERP, checks per case whether a complaint is open, drafts staged reminders, routes cases with more than €10,000 in dispute to a case handler, and measures two weeks later how much has come in.',
    },
    delimitation: {
      de: 'Nicht mit generativer KI gleichzusetzen: die erzeugt Inhalte auf Anfrage, agentische KI nutzt solche Modelle, um Aufgaben auszuführen. Und nicht mit klassischer Automatisierung: dort ist jeder Schritt vorab festgelegt, ein agentisches System entscheidet zur Laufzeit, welcher Schritt als Nächstes sinnvoll ist.',
      en: 'Not the same as generative AI, which produces content on request; agentic AI uses such models to carry out tasks. Nor the same as classic automation, where every step is fixed in advance, whereas an agentic system decides at runtime which step makes sense next.',
    },
    related: ['ai-agent', 'agentic-ai-vs-generative-ai', 'agentic-process-intelligence', 'frontier-agents'],
  },
  {
    id: 'ai-agent',
    question: {
      de: 'Was ist ein KI-Agent?',
      en: 'What is an AI agent?',
    },
    definition: {
      de: 'Ein KI-Agent ist ein Softwaresystem, das mithilfe eines KI-Modells ein Ziel verfolgt, indem es seine Umgebung wahrnimmt, Entscheidungen trifft und über Werkzeuge handelt. Typische Bausteine sind ein Sprachmodell für das Schlussfolgern, Zugriff auf Werkzeuge und Daten wie APIs, Datenbanken oder Prozessmodelle, ein Gedächtnis für Zwischenstände sowie Regeln, die festlegen, was der Agent darf. Anders als ein Chatbot beendet ein Agent seine Arbeit nicht mit einer Antwort, sondern mit einem erreichten – oder begründet abgebrochenen – Ziel.',
      en: 'An AI agent is a software system that uses an AI model to pursue a goal by perceiving its environment, making decisions, and acting through tools. Typical building blocks are a language model for reasoning, access to tools and data such as APIs, databases, or process models, memory for intermediate state, and rules that define what the agent is allowed to do. Unlike a chatbot, an agent does not finish its work with an answer but with a goal achieved – or abandoned for a stated reason.',
    },
    whyImportant: {
      de: 'KI-Agenten sind die Form, in der agentische KI im Unternehmen ankommt: als konkreter Akteur mit Aufgabe, Werkzeugen und Befugnissen. Wer sie einführt, muss dieselben Fragen klären wie bei einer neuen Rolle im Prozess – Zuständigkeit, Zugriffsrechte, Freigabegrenzen und Nachvollziehbarkeit.',
      en: 'AI agents are the form in which agentic AI arrives in an organization: a concrete actor with a task, tools, and permissions. Introducing them requires answering the same questions as for a new role in the process – responsibility, access rights, approval limits, and traceability.',
    },
    teaser: {
      de: 'Software, die mit einem KI-Modell ein Ziel verfolgt, entscheidet und über Werkzeuge handelt.',
      en: 'Software that uses an AI model to pursue a goal, decide, and act through tools.',
    },
    term: {
      de: 'KI-Agent',
      en: 'AI Agent',
    },
    example: {
      de: 'Ein Agent für Lieferantenrechnungen liest eingehende PDFs, gleicht die Positionen mit Bestellung und Wareneingang ab, bucht passende Rechnungen und schreibt bei Abweichungen dem Einkauf eine Rückfrage mit den betroffenen Positionen. Sein Werkzeugkasten: Lesezugriff auf das ERP, ein Buchungsrecht bis 5.000 € und ein E-Mail-Postfach. Alles darüber hinaus ist ihm nicht erlaubt.',
      en: 'An agent for supplier invoices reads incoming PDFs, matches the line items against purchase order and goods receipt, posts invoices that match, and on deviations sends purchasing a query listing the affected lines. Its toolkit: read access to the ERP, permission to post up to €5,000, and a mailbox. Anything beyond that it is not allowed to do.',
    },
    delimitation: {
      de: 'Nicht mit einem Chatbot zu verwechseln: der führt ein Gespräch, der Agent führt eine Aufgabe aus. Und nicht mit einem RPA-Bot: der spielt eine festgelegte Klickfolge ab, der Agent wählt seine Schritte selbst – innerhalb der Grenzen, die ihm gesetzt sind.',
      en: 'Not to be confused with a chatbot, which holds a conversation, whereas an agent carries out a task. Nor with an RPA bot, which replays a fixed click sequence; the agent chooses its own steps – within the boundaries it has been given.',
    },
    related: ['agentic-ai', 'ai-agent-vs-copilot', 'frontier-agents', 'agent-readiness'],
  },
  {
    id: 'agentic-ai-vs-generative-ai',
    question: {
      de: 'Was unterscheidet agentische KI von generativer KI?',
      en: 'What is the difference between agentic AI and generative AI?',
    },
    definition: {
      de: 'Generative KI erzeugt Inhalte – Text, Bilder, Code oder Zusammenfassungen – als Antwort auf eine Eingabe; was damit geschieht, entscheidet der Mensch. Agentische KI nutzt generative Modelle als Denkwerkzeug, verfolgt damit aber ein Ziel über mehrere Schritte, ruft Systeme auf und führt Aktionen aus. Der Unterschied liegt im Ergebnis: Bei generativer KI ist es ein Inhalt, bei agentischer KI ein veränderter Zustand in der Welt.',
      en: 'Generative AI produces content – text, images, code, or summaries – in response to an input; a person decides what happens with it. Agentic AI uses generative models as a reasoning tool, but pursues a goal across multiple steps with them, calls systems, and carries out actions. The difference lies in the outcome: with generative AI it is content, with agentic AI it is a changed state in the world.',
    },
    whyImportant: {
      de: 'Beide Begriffe werden oft vermischt, verlangen aber unterschiedliche Absicherung. Bei generativer KI genügt meist eine Qualitätsprüfung der Ausgabe; bei agentischer KI muss geregelt sein, welche Systeme der Agent verändern darf, wann er eine Freigabe braucht und wie seine Handlungen protokolliert werden.',
      en: 'The two terms are often mixed up, yet they require different safeguards. With generative AI a quality check of the output is usually enough; with agentic AI it must be defined which systems the agent may change, when it needs approval, and how its actions are logged.',
    },
    teaser: {
      de: 'Inhalte erzeugen gegen Aufgaben erledigen – und was das für die Kontrolle bedeutet.',
      en: 'Producing content versus getting tasks done – and what that means for control.',
    },
    term: {
      de: 'Agentische KI und generative KI',
      en: 'Agentic AI and Generative AI',
    },
    example: {
      de: 'Gefragt „warum sind die Lieferzeiten im März gestiegen?", schreibt eine generative KI eine plausible Erklärung. Ein agentisches System fragt das Prozessmodell ab, vergleicht März mit Februar, findet ein Lager, in dem Kommissionierungen seit einer Schichtumstellung liegen bleiben, legt dazu ein Ticket für die Standortleitung an und prüft eine Woche später, ob die Wartezeit gesunken ist.',
      en: 'Asked "why did delivery times rise in March?", a generative AI writes a plausible explanation. An agentic system queries the process model, compares March with February, finds a warehouse where picking has stalled since a shift change, opens a ticket for the site manager, and checks a week later whether the waiting time has come down.',
    },
    delimitation: {
      de: 'Nicht als Gegensatz zu verstehen: agentische KI baut auf generativer KI auf, statt sie abzulösen. Und nicht mit dem Unterschied zwischen Copilot und Agent gleichzusetzen: der betrifft die Art der Zusammenarbeit mit dem Menschen, dieser hier die Art des Ergebnisses.',
      en: 'Not an opposition: agentic AI builds on generative AI rather than replacing it. Nor the same as the copilot-versus-agent distinction, which concerns how the system works with a person; this one concerns what kind of result it produces.',
    },
    related: ['agentic-ai', 'ai-agent-vs-copilot', 'process-grounding'],
  },
  {
    id: 'frontier-agents',
    question: {
      de: 'Was sind Frontier Agents?',
      en: 'What are Frontier Agents?',
    },
    definition: {
      de: 'Frontier Agents sind KI-Agenten, die nicht auf einzelne Anfragen reagieren, sondern autonom und dauerhaft an einem Ziel arbeiten – über Stunden, Tage oder fortlaufend im Hintergrund. Sie behalten ihren Kontext über die Zeit, verfolgen mehrere Aufgaben parallel und melden sich von selbst, sobald sich etwas Relevantes ergibt. Im Prozessumfeld beobachten Frontier Agents Kennzahlen, Datenquellen und Regeln eines Unternehmens kontinuierlich und arbeiten dabei auf dessen Prozessmodell statt auf isolierten Datenausschnitten.',
      en: 'Frontier Agents are AI agents that do not react to individual requests but work towards a goal autonomously and persistently – for hours, days, or continuously in the background. They retain their context over time, pursue several tasks in parallel, and report back on their own as soon as something relevant comes up. In a process setting, Frontier Agents continuously observe an organization’s metrics, data sources, and rules, working on its process model rather than on isolated data extracts.',
    },
    whyImportant: {
      de: 'Die meisten KI-Werkzeuge warten darauf, gefragt zu werden – entdeckt wird also nur, wonach jemand sucht. Frontier Agents drehen das um: Sie bleiben an einer Fragestellung dran und verkürzen die Zeit zwischen dem Entstehen eines Problems und seiner Erkennung. In Noreja arbeiten sie als Minerva Frontier Agents auf dem Prozess- und Wissenskontext der Plattform.',
      en: 'Most AI tools wait to be asked – so only what someone looks for gets discovered. Frontier Agents reverse that: they stay with a question and shorten the time between a problem arising and being detected. In Noreja they work as Minerva Frontier Agents on the platform’s process and knowledge context.',
    },
    teaser: {
      de: 'KI-Agenten, die autonom und dauerhaft an einem Ziel dranbleiben, statt auf Abruf zu antworten.',
      en: 'AI agents that stay on a goal autonomously and persistently instead of answering on demand.',
    },
    term: {
      de: 'Frontier Agents',
      en: 'Frontier Agents',
    },
    example: {
      de: 'Ein Frontier Agent soll die Durchlaufzeit im Purchase-to-Pay-Prozess im Blick behalten. Drei Wochen lang passiert nichts Auffälliges. Dann steigt in einem Werk die Wartezeit vor der Rechnungsfreigabe um zwei Tage; der Agent prüft, ob eine neue Freigabestufe, ein Personalwechsel oder ein Datenfehler dahintersteckt, findet eine geänderte Workflow-Regel im ERP und meldet sie samt betroffener Fälle — bevor der Monatsbericht sie gezeigt hätte.',
      en: 'A frontier agent is tasked with keeping an eye on purchase-to-pay cycle time. For three weeks nothing unusual happens. Then waiting time before invoice approval rises by two days at one plant; the agent checks whether a new approval tier, a staffing change or a data error is behind it, finds a modified workflow rule in the ERP, and reports it with the affected cases — before the monthly report would have shown it.',
    },
    delimitation: {
      de: 'Nicht mit einem einzelnen Produkt gleichzusetzen: AWS hat den Begriff im Dezember 2025 für autonome Agenten in Softwareentwicklung, Sicherheit und Betrieb verwendet, OpenAI nennt seine Agentenplattform für Unternehmen „Frontier". Gemeinsam ist allen Verwendungen der Kern aus Autonomie, Ausdauer und Skalierung. Und nicht mit einem Copilot zu verwechseln: der wartet auf eine Frage, ein Frontier Agent bleibt von sich aus dran.',
      en: 'Not the same as any single product: AWS used the term in December 2025 for autonomous agents in software development, security and operations, and OpenAI calls its enterprise agent platform "Frontier". What all uses share is the core of autonomy, persistence and scale. Nor to be confused with a copilot, which waits for a question, whereas a frontier agent stays on the case by itself.',
    },
    related: ['agentic-process-intelligence', 'ai-agent', 'ai-agent-vs-copilot', 'agent-observability'],
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
    example: {
      de: 'Statt dass ein Analyst ein Dashboard öffnet, arbeitet ein Agent den Fall ab: Er findet die Ursache einer Verzögerung, schlägt eine Maßnahme vor, rechnet den Business Case und misst nach dem Rollout den realisierten Effekt. Jeder Schritt ist dokumentiert, und vor einer Änderung am System holt der Agent eine Freigabe ein.',
      en: 'Instead of an analyst opening a dashboard, an agent works the case: it finds the cause of a delay, proposes an action, calculates the business case, and measures the realised effect after rollout. Every step is documented, and the agent asks for approval before anything changes in a system.',
    },
    delimitation: {
      de: 'Nicht mit einem Copilot zu verwechseln: der antwortet auf Fragen, die jemand stellt. Ein Agent verfolgt ein Ziel über mehrere Schritte hinweg und stößt Handlungen an. Und nicht mit RPA: die führt vorher festgelegte Klickfolgen aus, während der Agent entscheidet, welcher Schritt als Nächstes sinnvoll ist.',
      en: 'Not to be confused with a copilot, which answers questions somebody asks. An agent pursues a goal across multiple steps and initiates actions. Nor with RPA, which replays predefined click sequences, whereas the agent decides which step makes sense next.',
    },
    related: ['process-intelligence', 'agentic-root-cause-analysis', 'process-grounding', 'frontier-agents', 'agentic-ai'],
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
    example: {
      de: 'Ein Agent bearbeitet 300 Anfragen. Agent Mining zeigt, dass er in 42 Fällen dieselbe Datenquelle zweimal abfragt, bevor er antwortet, und in 9 Fällen einen Klärungsschritt überspringt, den seine Anweisung vorsieht. Das sind Prozessbefunde über den Agenten — erhoben mit denselben Mitteln wie über einen menschlichen Ablauf.',
      en: 'An agent handles 300 requests. Agent mining shows that in 42 of them it queries the same data source twice before answering, and in 9 it skips a clarification step its instructions require. These are process findings about the agent — produced with the same means as findings about a human workflow.',
    },
    delimitation: {
      de: 'Nicht mit Model-Monitoring zu verwechseln: das misst Qualität und Drift der Modellausgaben. Agent Mining betrachtet die Abfolge der Schritte und ihre Häufigkeiten, nicht die Güte einer einzelnen Antwort.',
      en: 'Not to be confused with model monitoring, which measures output quality and drift. Agent mining looks at the sequence of steps and how often they occur, not at the quality of any single answer.',
    },
    related: ['task-mining', 'process-mining', 'agent-conformance-checking', 'agent-observability', 'agentic-process-mining'],
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
    example: {
      de: 'Ein Agent darf Bestellungen bis 2.500 € freigeben, darüber nur vorbereiten. Der Abgleich zeigt drei Fälle, in denen er eine Bestellung über 3.100 € freigegeben hat, weil ein Feld leer war und er den Betrag als 0 gelesen hat. Der Verstoß liegt mit Zeitpunkt, Fall und Auslöser dokumentiert vor.',
      en: 'An agent may approve orders up to €2,500 and only prepare anything above. The comparison surfaces three cases where it approved an order of €3,100 because a field was empty and it read the amount as 0. The breach is documented with timestamp, case and trigger.',
    },
    delimitation: {
      de: 'Nicht mit Guardrails zu verwechseln: die verhindern eine Handlung im Moment der Ausführung. Conformance Checking prüft im Nachhinein, was tatsächlich geschehen ist — beides ergänzt einander, ersetzt sich aber nicht.',
      en: 'Not to be confused with guardrails, which block an action at the moment of execution. Conformance checking examines afterwards what actually happened — the two complement each other rather than substitute for one another.',
    },
    related: ['conformance-checking', 'agent-mining', 'agentic-process-intelligence', 'guardian-agents', 'ai-agent-governance'],
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
    example: {
      de: 'Auf die Frage „warum dauert die Rechnungsprüfung so lange?" antwortet ein ungegroundetes Modell mit Allgemeinplätzen aus seinem Trainingskorpus. Ein gegroundetes greift auf den Prozessgraphen zu und nennt die 1.203 Fälle, in denen die Freigabe auf einen einzelnen Prüfer wartete, samt durchschnittlicher Wartezeit.',
      en: 'Asked "why does invoice checking take so long?", an ungrounded model answers with generalities from its training corpus. A grounded one reaches into the process graph and names the 1,203 cases in which approval waited on a single reviewer, with the average wait attached.',
    },
    delimitation: {
      de: 'Nicht mit RAG allein zu verwechseln: das holt Textpassagen aus Dokumenten. Process Grounding verankert das Modell in strukturierten Ereignisdaten, sodass es zählen, vergleichen und Ursachen verfolgen kann, statt zu zitieren.',
      en: 'Not to be confused with RAG on its own, which retrieves passages from documents. Process grounding anchors the model in structured event data, so it can count, compare and trace causes rather than quote.',
    },
    related: ['event-knowledge-graph', 'agentic-process-intelligence', 'process-ontology', 'context-engineering'],
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
    example: {
      de: 'Ein Modell erkennt, dass Bestellungen mit Expressversand seltener reklamiert werden. Die kausale Frage ist eine andere: Sinkt die Reklamationsquote, wenn man Expressversand einführt — oder wählen ohnehin zuverlässige Kunden diese Option? Nur die zweite Antwort trägt eine Entscheidung.',
      en: 'A model finds that orders shipped by express are complained about less often. The causal question is a different one: does the complaint rate fall if you introduce express shipping — or do already reliable customers simply choose it? Only the second answer can carry a decision.',
    },
    delimitation: {
      de: 'Nicht mit erklärbarer KI (XAI) zu verwechseln: die macht transparent, warum ein Modell so entschieden hat. Causal AI fragt, was in der Welt geschieht, wenn man eingreift — unabhängig davon, wie das Modell intern arbeitet.',
      en: 'Not to be confused with explainable AI, which makes transparent why a model decided as it did. Causal AI asks what happens in the world if you intervene — independently of how the model works internally.',
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
    example: {
      de: 'Statt für zwei Modelle je einen eigenen Konnektor zu SAP, Jira und dem Data Warehouse zu bauen — sechs Integrationen —, stellt jedes System einen MCP-Server bereit und jedes Modell nutzt denselben Client. Aus sechs Integrationen werden vier, und jedes weitere Modell kostet keine einzige neue.',
      en: 'Instead of building a separate connector from each of two models to SAP, Jira and the data warehouse — six integrations — each system exposes an MCP server and every model uses the same client. Six integrations become four, and each additional model costs none at all.',
    },
    delimitation: {
      de: 'Nicht mit einer gewöhnlichen REST-API zu verwechseln: MCP standardisiert, wie ein Modell Werkzeuge und Datenquellen entdeckt und aufruft, nicht was das einzelne System fachlich anbietet. Und nicht mit dem Function Calling eines einzelnen Anbieters: MCP ist offen und anbieterübergreifend.',
      en: 'Not to be confused with an ordinary REST API: MCP standardises how a model discovers and calls tools and data sources, not what any individual system offers. Nor with one vendor\'s function calling: MCP is open and works across providers.',
    },
    related: ['agentic-process-intelligence', 'process-grounding', 'agent-readiness', 'a2a-protocol', 'context-engineering'],
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
    example: {
      de: 'Ein Lieferant ändert das Layout seines Rechnungsportals. Der RPA-Bot klickt ins Leere und bricht ab, bis jemand das Skript nachzieht. Ein Agent liest die Seite, erkennt die verschobenen Felder und arbeitet weiter — meldet die Änderung aber, weil sie eine Abweichung vom bekannten Ablauf ist.',
      en: 'A supplier changes the layout of its invoicing portal. The RPA bot clicks into empty space and stops until someone updates the script. An agent reads the page, recognises the moved fields and carries on — but reports the change, because it is a deviation from the known flow.',
    },
    delimitation: {
      de: 'Nicht als Ablösung zu verstehen: RPA bleibt die bessere Wahl, wo ein Ablauf stabil, hochvolumig und exakt spezifiziert ist. Agentic Automation lohnt dort, wo Varianz und Entscheidungen im Spiel sind — in der Praxis laufen beide häufig nebeneinander.',
      en: 'Not to be read as a replacement: RPA remains the better choice where a flow is stable, high-volume and precisely specified. Agentic automation pays off where variance and judgement are involved — in practice the two often run side by side.',
    },
    related: ['agent-conformance-checking', 'task-mining', 'agentic-process-intelligence', 'agentic-process-automation', 'agent-washing'],
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
    example: {
      de: 'Ein Copilot schlägt beim Schreiben einer Mail eine Formulierung vor. Ein Agent bekommt „kläre die offene Reklamation zu Fall 4711", zieht sich Bestell- und Lieferdaten, verfasst die Antwort, holt eine Freigabe ein und verschickt sie — über mehrere Schritte hinweg, ohne dass jemand jeden einzelnen anstößt.',
      en: 'A copilot suggests a phrasing while you write an email. An agent is given "resolve the open complaint on case 4711", pulls order and delivery data, drafts the reply, obtains approval and sends it — across several steps, without anyone triggering each one.',
    },
    delimitation: {
      de: 'Nicht als Rangfolge zu verstehen: ein Copilot ist richtig, wo ein Mensch die Kontrolle Schritt für Schritt behalten soll. Der Agent lohnt, wo dasselbe Ziel über viele gleichartige Fälle hinweg verfolgt wird.',
      en: 'Not a ranking: a copilot is the right choice where a person should keep control step by step. An agent pays off where the same goal is pursued across many similar cases.',
    },
    related: ['agentic-process-intelligence', 'agentic-automation-vs-rpa', 'agent-conformance-checking', 'ai-agent', 'agentic-ai-vs-generative-ai'],
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
    example: {
      de: 'Nach einem Rollout misst das System zwölf Wochen weiter. Fällt die Durchlaufzeit geringer aus als prognostiziert, wird das nicht als Projektergebnis abgehakt, sondern als neuer Befund in die Analyse zurückgegeben — und löst den nächsten Vorschlag aus, ohne dass jemand ein Folgeprojekt beantragen muss.',
      en: 'After a rollout the system keeps measuring for twelve weeks. If cycle time improves less than forecast, that is not filed as a project result but returned to the analysis as a new finding — triggering the next proposal without anyone having to raise a follow-up project.',
    },
    delimitation: {
      de: 'Nicht mit selbstlernenden Modellen zu verwechseln: dort passt sich ein Algorithmus an Daten an, hier verändert sich der Geschäftsprozess selbst. Und nicht mit vollautomatisch: die Änderung wird vorbereitet und belegt, freigegeben wird sie weiterhin von Menschen.',
      en: 'Not to be confused with self-learning models, where an algorithm adapts to data; here the business process itself changes. Nor with fully automatic: the change is prepared and evidenced, but people still approve it.',
    },
    related: ['agentic-process-intelligence', 'business-process-management', 'digital-process-twin', 'agentic-bpm'],
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
    example: {
      de: 'Die Ontologie hält fest, dass eine Rechnung sich auf eine oder mehrere Bestellungen bezieht, dass „storniert" ein Zustand der Bestellung und nicht der Lieferung ist, und dass „Freigabe" in Einkauf und Vertrieb dasselbe Ereignis meint. Ohne diese Festlegung zählt jede Auswertung etwas leicht anderes.',
      en: 'The ontology records that an invoice relates to one or more orders, that "cancelled" is a state of the order and not of the delivery, and that "approval" means the same event in purchasing as in sales. Without those commitments, every report counts something slightly different.',
    },
    delimitation: {
      de: 'Nicht mit einem Datenmodell zu verwechseln: das legt Tabellen und Felder fest, die Ontologie die fachliche Bedeutung dahinter. Und nicht mit einem Glossar: das erklärt Begriffe für Menschen, die Ontologie ist maschinenlesbar und auswertbar.',
      en: 'Not to be confused with a data model, which defines tables and fields; the ontology defines the meaning behind them. Nor with a glossary, which explains terms for people — an ontology is machine-readable and can be reasoned over.',
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
    example: {
      de: 'Ein Agent bekommt „die Durchlaufzeit in Purchase-to-Pay ist um 12 % gestiegen". Er prüft nacheinander Lieferanten, Warengruppen und Freigabestufen, verwirft Hypothesen, die die Zahlen nicht tragen, und landet bei einem Lieferanten, dessen Wareneingänge seit sechs Wochen verspätet gebucht werden. Der Weg dorthin ist protokolliert und nachvollziehbar.',
      en: 'An agent is given "purchase-to-pay cycle time is up 12%". It works through suppliers, material groups and approval tiers, discards hypotheses the numbers do not support, and lands on one supplier whose goods receipts have been booked late for six weeks. The path there is logged and reviewable.',
    },
    delimitation: {
      de: 'Nicht mit Anomalie-Erkennung zu verwechseln: die meldet, dass etwas auffällig ist. Die Ursachenanalyse arbeitet weiter, bis eine erklärende Größe gefunden ist. Und nicht mit einem Dashboard-Drilldown: dort führt ein Mensch die Kette, hier der Agent.',
      en: 'Not to be confused with anomaly detection, which reports that something is unusual. Root-cause analysis keeps going until an explanatory factor is found. Nor with a dashboard drilldown, where a person drives the chain — here the agent does.',
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
    example: {
      de: 'Ein Agent soll Bestellfreigaben vorbereiten. Dafür muss er wissen, welches Feld den Betrag führt, dass „freigegeben" und „approved" dasselbe bedeuten und wer ab welcher Summe zuständig ist. Fehlt dieser Kontext, kann er zwar auf die Datenbank zugreifen, aber nicht verlässlich entscheiden.',
      en: 'An agent is to prepare order approvals. For that it needs to know which field carries the amount, that "freigegeben" and "approved" mean the same thing, and who is responsible above which sum. Without that context it can reach the database but cannot decide reliably.',
    },
    delimitation: {
      de: 'Nicht mit Datenqualität allein zu verwechseln: vollständige, saubere Daten sind notwendig, aber nicht hinreichend. Agent Readiness verlangt zusätzlich Semantik, Zuständigkeiten und Regeln in maschinenlesbarer Form.',
      en: 'Not to be confused with data quality on its own: complete, clean data is necessary but not sufficient. Agent readiness additionally requires semantics, ownership and rules in machine-readable form.',
    },
    related: ['event-log', 'process-grounding', 'process-ontology', 'context-engineering'],
  },
  {
    id: 'agentic-process-automation',
    question: {
      de: 'Was ist Agentic Process Automation (APA)?',
      en: 'What is Agentic Process Automation (APA)?',
    },
    definition: {
      de: 'Agentic Process Automation (APA) automatisiert Geschäftsprozesse mit KI-Agenten, denen Ziele statt fester Abläufe vorgegeben werden. Die Agenten arbeiten neben regelbasierter Automatisierung wie RPA oder Workflow-Engines und übernehmen vor allem die Teile, an denen Regeln scheitern: Ausnahmen, unstrukturierte Eingaben und Entscheidungen mit Ermessensspielraum. Stabile Standardschritte bleiben deterministisch, die variablen Stellen löst der Agent zur Laufzeit.',
      en: 'Agentic Process Automation (APA) automates business processes with AI agents that are given goals rather than fixed sequences. The agents work alongside rule-based automation such as RPA or workflow engines and mainly take over the parts where rules fail: exceptions, unstructured input, and decisions that require judgment. Stable standard steps stay deterministic; the variable parts are resolved by the agent at runtime.',
    },
    whyImportant: {
      de: 'In vielen Prozessen läuft der Standardfall längst automatisch – Aufwand und Durchlaufzeit stecken in den Ausnahmen. Genau dort setzt APA an. Damit das funktioniert, muss klar sein, wo die Ausnahmen liegen, wie häufig sie sind und was sie kosten; ohne diese Prozesskenntnis automatisiert man die falschen Stellen.',
      en: 'In many processes the standard case has long been automated – effort and cycle time sit in the exceptions. That is exactly where APA comes in. For it to work, it must be clear where the exceptions occur, how frequent they are, and what they cost; without that process knowledge, you automate the wrong places.',
    },
    teaser: {
      de: 'KI-Agenten übernehmen die Ausnahmen, an denen regelbasierte Automatisierung scheitert.',
      en: 'AI agents take over the exceptions where rule-based automation fails.',
    },
    term: {
      de: 'Agentic Process Automation (APA)',
      en: 'Agentic Process Automation (APA)',
    },
    example: {
      de: 'In der Rechnungsverarbeitung laufen 82 % der Rechnungen per Dreifachabgleich automatisch durch, die übrigen 18 % landen in einer Klärungsschlange. Ein Agent übernimmt diese Fälle: Er erkennt Teillieferungen, rechnet Preisabweichungen gegen Rahmenverträge nach, fordert fehlende Wareneingänge an und legt nur noch die Fälle vor, die wirklich eine Entscheidung brauchen. Die Klärungsschlange schrumpft auf einen Bruchteil.',
      en: 'In invoice processing, 82% of invoices pass automatically via three-way match; the remaining 18% land in a clarification queue. An agent takes over these cases: it recognises partial deliveries, checks price deviations against framework contracts, requests missing goods receipts, and escalates only the cases that genuinely need a decision. The clarification queue shrinks to a fraction.',
    },
    delimitation: {
      de: 'Nicht mit RPA zu verwechseln: RPA spielt festgelegte Klickfolgen ab, APA gibt ein Ziel vor und lässt den Weg offen. Und nicht mit Intelligent Automation: die ergänzt RPA um einzelne KI-Bausteine wie Texterkennung, entscheidet aber weiterhin entlang fester Regeln.',
      en: 'Not to be confused with RPA, which replays fixed click sequences, whereas APA sets a goal and leaves the path open. Nor with intelligent automation, which adds individual AI components such as document recognition to RPA but still decides along fixed rules.',
    },
    related: ['agentic-automation-vs-rpa', 'agent-orchestration', 'agentic-ai', 'task-mining'],
  },
  {
    id: 'agentic-process-mining',
    question: {
      de: 'Was ist Agentic Process Mining?',
      en: 'What is Agentic Process Mining?',
    },
    definition: {
      de: 'Agentic Process Mining bezeichnet Process Mining, das von KI-Agenten durchgeführt wird: Statt dass eine Analystin oder ein Analyst Filter setzt, Varianten vergleicht und Abweichungen untersucht, übernimmt ein Agent diese Schritte selbstständig. Er formuliert Fragen an die Prozessdaten, wählt passende Analysen, prüft Hypothesen und berichtet Ergebnisse mit Belegen. Die Prozessdaten bleiben dieselben – neu ist, wer die Analyse steuert.',
      en: 'Agentic Process Mining refers to process mining carried out by AI agents: instead of an analyst setting filters, comparing variants, and investigating deviations, an agent performs these steps on its own. It formulates questions to the process data, selects suitable analyses, tests hypotheses, and reports results with evidence. The process data stays the same – what is new is who drives the analysis.',
    },
    whyImportant: {
      de: 'Process-Mining-Initiativen stocken selten an der Technik, sondern an der Analysekapazität: Es gibt mehr Prozesse und Fragen als Menschen, die sie auswerten können. Agentic Process Mining skaliert die Analyse über alle Prozesse und macht Process Mining auch für Fachbereiche nutzbar, die keine eigenen Analysten haben.',
      en: 'Process mining initiatives rarely stall on technology but on analysis capacity: there are more processes and questions than people who can evaluate them. Agentic process mining scales analysis across all processes and makes process mining usable for business units without analysts of their own.',
    },
    teaser: {
      de: 'Process Mining, bei dem KI-Agenten die Analyse selbst steuern.',
      en: 'Process mining in which AI agents drive the analysis themselves.',
    },
    term: {
      de: 'Agentic Process Mining',
      en: 'Agentic Process Mining',
    },
    example: {
      de: 'Eine Controllerin fragt: „Warum sind unsere Skontoverluste im letzten Quartal gestiegen?" Der Agent filtert die Kreditorenrechnungen mit verpasster Skontofrist, vergleicht ihre Pfade mit fristgerecht bezahlten, stellt fest, dass 70 % der Verluste auf Rechnungen mit nachträglicher Kostenstellenänderung entfallen, und liefert die Fallliste samt Hochrechnung des entgangenen Skontos.',
      en: 'A controller asks: "Why did our lost early-payment discounts rise last quarter?" The agent filters the supplier invoices that missed the discount deadline, compares their paths with those paid on time, finds that 70% of the losses come from invoices with a subsequent cost-centre change, and delivers the case list with an estimate of the discount forgone.',
    },
    delimitation: {
      de: 'Nicht mit Agent Mining zu verwechseln: dort sind KI-Agenten das Untersuchungsobjekt, deren Verhalten mit Process-Mining-Methoden analysiert wird. Beim Agentic Process Mining ist der Agent das Werkzeug, das die Analyse durchführt. Und nicht mit einem Chat über Dashboards: der beantwortet einzelne Fragen, der Agent arbeitet eine Analyse über mehrere Schritte ab.',
      en: 'Not to be confused with agent mining, where AI agents are the object of study whose behaviour is analysed with process mining methods. In agentic process mining the agent is the tool that performs the analysis. Nor with chatting to a dashboard, which answers individual questions, whereas the agent works through an analysis over several steps.',
    },
    related: ['process-mining', 'agent-mining', 'agentic-root-cause-analysis', 'agentic-process-intelligence'],
  },
  {
    id: 'context-engineering',
    question: {
      de: 'Was ist Context Engineering?',
      en: 'What is Context Engineering?',
    },
    definition: {
      de: 'Context Engineering ist die Gestaltung all dessen, was ein KI-Modell oder Agent im Moment einer Entscheidung „sieht": Anweisungen, Daten, Werkzeuge, Gedächtnis, Beispiele und Regeln. Statt nur die Formulierung einer Anfrage zu optimieren, legt es fest, welche Informationen in welcher Struktur, Reihenfolge und Menge bereitgestellt werden. Ziel ist, dass das Modell genau das Relevante erhält – nicht zu wenig und nicht zu viel.',
      en: 'Context Engineering is the design of everything an AI model or agent "sees" at the moment of a decision: instructions, data, tools, memory, examples, and rules. Rather than only optimizing the wording of a request, it defines which information is provided in what structure, order, and amount. The aim is for the model to receive exactly what is relevant – neither too little nor too much.',
    },
    whyImportant: {
      de: 'Die Qualität eines Agenten hängt weniger am Modell als am Kontext, den es bekommt. Für Prozessfragen heißt das: Ein Agent braucht Fälle, Objekte, Zeitstempel, Kennzahlendefinitionen und Zuständigkeiten in strukturierter Form – nicht einen Stapel Dokumente. Wer diesen Prozesskontext sauber bereitstellt, bekommt belastbare Antworten; wer ihn dem Zufall überlässt, bekommt plausible.',
      en: 'An agent’s quality depends less on the model than on the context it receives. For process questions this means an agent needs cases, objects, timestamps, metric definitions, and responsibilities in structured form – not a pile of documents. Provide that process context cleanly and you get dependable answers; leave it to chance and you get plausible ones.',
    },
    teaser: {
      de: 'Festlegen, welche Informationen ein KI-Agent im richtigen Moment bekommt.',
      en: 'Deciding which information an AI agent receives at the right moment.',
    },
    term: {
      de: 'Context Engineering',
      en: 'Context Engineering',
    },
    example: {
      de: 'Ein Agent soll Lieferverzögerungen erklären. Ohne Context Engineering erhält er die Frage und einen Datenbankzugang und muss Tabellen, Feldnamen und Kennzahlen selbst erraten. Mit Context Engineering bekommt er die Definition von „verspätet" (Termin laut Auftragsbestätigung, nicht laut Bestellung), das Objektmodell aus Auftrag, Lieferung und Werk sowie ein Werkzeug, das Durchlaufzeiten je Variante liefert — und beantwortet die Frage in zwei Schritten statt in zwölf.',
      en: 'An agent is asked to explain delivery delays. Without context engineering it gets the question and database access and has to guess tables, field names and metrics. With context engineering it receives the definition of "late" (date per order confirmation, not per purchase order), the object model of order, delivery and plant, and a tool that returns cycle times per variant — and answers in two steps instead of twelve.',
    },
    delimitation: {
      de: 'Nicht mit Prompt Engineering zu verwechseln: das optimiert die Formulierung einer einzelnen Anfrage, Context Engineering das gesamte Informationsumfeld, in dem ein Agent über viele Schritte arbeitet. Und nicht mit RAG gleichzusetzen: das Nachladen von Textpassagen ist nur eine von mehreren Techniken, um Kontext bereitzustellen.',
      en: 'Not to be confused with prompt engineering, which optimises the wording of a single request; context engineering shapes the whole information environment in which an agent works over many steps. Nor the same as RAG: retrieving text passages is only one of several techniques for supplying context.',
    },
    related: ['process-grounding', 'model-context-protocol', 'process-ontology', 'agent-readiness'],
  },
  {
    id: 'human-in-the-loop',
    question: {
      de: 'Was bedeutet Human-in-the-Loop?',
      en: 'What does Human-in-the-Loop mean?',
    },
    definition: {
      de: 'Human-in-the-Loop (HITL) bezeichnet KI-Systeme, in denen ein Mensch an festgelegten Stellen in den Ablauf eingebunden ist: Er prüft, korrigiert oder gibt frei, bevor das System weiterarbeitet. Bei KI-Agenten betrifft das vor allem Handlungen mit Außenwirkung oder hohem Risiko, etwa Buchungen, Zahlungen oder Änderungen an Stammdaten. Wo genau der Mensch eingreift, ist eine bewusste Designentscheidung zwischen Tempo und Kontrolle.',
      en: 'Human-in-the-Loop (HITL) describes AI systems in which a person is involved at defined points in the flow: they review, correct, or approve before the system continues. For AI agents this mainly concerns actions with external effect or high risk, such as postings, payments, or master-data changes. Exactly where the person steps in is a deliberate design choice between speed and control.',
    },
    whyImportant: {
      de: 'Autonomie ohne Eingriffspunkte ist in den meisten Unternehmensprozessen weder erlaubt noch sinnvoll; ständige Rückfragen machen einen Agenten dagegen nutzlos. Human-in-the-Loop legt fest, wo die Verantwortung beim Menschen bleibt – und der EU AI Act verlangt für Hochrisiko-Systeme ausdrücklich eine wirksame menschliche Aufsicht.',
      en: 'Autonomy without intervention points is neither permitted nor sensible in most business processes; constant check-backs, on the other hand, make an agent useless. Human-in-the-loop defines where responsibility stays with a person – and the EU AI Act explicitly requires effective human oversight for high-risk systems.',
    },
    teaser: {
      de: 'Der Mensch prüft und gibt frei, bevor ein KI-Agent folgenreich handelt.',
      en: 'A person reviews and approves before an AI agent takes consequential action.',
    },
    term: {
      de: 'Human-in-the-Loop (HITL)',
      en: 'Human-in-the-Loop (HITL)',
    },
    example: {
      de: 'Ein Agent bereitet Gutschriften für Reklamationen vor. Bis 200 € bucht er selbst, darüber legt er der Teamleitung einen Entwurf mit Begründung und Fallhistorie vor. Nach drei Monaten zeigt die Auswertung, dass 96 % der Entwürfe unverändert freigegeben wurden — Anlass, die Grenze auf 500 € anzuheben und die menschliche Prüfung auf die schwierigen Fälle zu konzentrieren.',
      en: 'An agent prepares credit notes for complaints. Up to €200 it posts them itself; above that it puts a draft with reasoning and case history in front of the team lead. After three months the analysis shows that 96% of drafts were approved unchanged — reason to raise the limit to €500 and focus human review on the difficult cases.',
    },
    delimitation: {
      de: 'Nicht mit Human-on-the-Loop zu verwechseln: dort arbeitet das System selbstständig, und der Mensch überwacht und greift nur bei Bedarf ein, statt jede Entscheidung freizugeben. Und nicht mit manueller Nacharbeit: die korrigiert Fehler im Nachhinein, Human-in-the-Loop setzt die Prüfung vor die Wirkung.',
      en: 'Not to be confused with human-on-the-loop, where the system works on its own and the person supervises and steps in only when needed rather than approving each decision. Nor with manual rework, which fixes errors afterwards, whereas human-in-the-loop places the check before the effect.',
    },
    related: ['ai-agent-governance', 'agent-conformance-checking', 'guardian-agents', 'ai-agent'],
  },
  {
    id: 'agent-orchestration',
    question: {
      de: 'Was ist Agent Orchestration?',
      en: 'What is Agent Orchestration?',
    },
    definition: {
      de: 'Agent Orchestration (auch Agentic Orchestration) ist die Koordination mehrerer KI-Agenten, regelbasierter Automatisierung und Menschen in einem gemeinsamen Ablauf. Eine Orchestrierungsschicht verteilt Aufgaben, übergibt Zwischenergebnisse, achtet auf Reihenfolge und Abhängigkeiten und entscheidet, wann ein Mensch einbezogen wird. Sie sorgt dafür, dass spezialisierte Agenten gemeinsam einen Prozess Ende-zu-Ende abdecken, statt nebeneinander her zu arbeiten.',
      en: 'Agent Orchestration (also agentic orchestration) is the coordination of multiple AI agents, rule-based automation, and people within a shared flow. An orchestration layer distributes tasks, hands over intermediate results, manages sequence and dependencies, and decides when a person is brought in. It ensures that specialized agents together cover a process end to end instead of working side by side in isolation.',
    },
    whyImportant: {
      de: 'Einzelne Agenten lösen Teilaufgaben; Wert entsteht erst, wenn sie gemeinsam einen Prozess tragen. Ohne Orchestrierung entstehen Insellösungen, deren Übergaben niemand verantwortet – und gerade an Übergaben entstehen in Prozessen die meisten Wartezeiten.',
      en: 'Individual agents solve subtasks; value only emerges when together they carry a process. Without orchestration, isolated solutions arise whose handovers nobody owns – and handovers are precisely where most waiting time in processes builds up.',
    },
    teaser: {
      de: 'Die Koordination vieler Agenten, Bots und Menschen zu einem durchgängigen Prozess.',
      en: 'Coordinating many agents, bots, and people into one end-to-end process.',
    },
    term: {
      de: 'Agent Orchestration',
      en: 'Agent Orchestration',
    },
    example: {
      de: 'Beim Onboarding eines Geschäftskunden prüft ein Agent die Handelsregisterdaten, ein zweiter bewertet die Bonität, ein RPA-Bot legt den Debitor im ERP an, und ab einem Risikoscore von 70 entscheidet eine Mitarbeiterin aus dem Risikomanagement. Die Orchestrierung sorgt dafür, dass Register- und Bonitätsprüfung parallel laufen, der Bot erst nach beiden startet und die Entscheidung der Mitarbeiterin zurück in den Ablauf fließt.',
      en: 'When onboarding a business customer, one agent checks the commercial register data, a second assesses creditworthiness, an RPA bot creates the customer account in the ERP, and from a risk score of 70 a risk manager decides. Orchestration ensures the register and credit checks run in parallel, the bot starts only after both, and the manager’s decision flows back into the process.',
    },
    delimitation: {
      de: 'Nicht mit einem Multi-Agenten-System gleichzusetzen: das beschreibt eine Architektur aus mehreren Agenten, die Orchestrierung die Steuerung ihres Zusammenspiels – auch mit Menschen und klassischen Bots. Und nicht mit klassischer Workflow-Automatisierung: die folgt einem festen Ablaufmodell, eine agentische Orchestrierung kann den Ablauf zur Laufzeit anpassen.',
      en: 'Not the same as a multi-agent system, which describes an architecture made of several agents; orchestration governs how they work together – including with people and classic bots. Nor the same as classic workflow automation, which follows a fixed flow model, whereas agentic orchestration can adapt the flow at runtime.',
    },
    related: ['multi-agent-system', 'agentic-process-automation', 'a2a-protocol', 'human-in-the-loop'],
  },
  {
    id: 'multi-agent-system',
    question: {
      de: 'Was ist ein Multi-Agenten-System?',
      en: 'What is a multi-agent system?',
    },
    definition: {
      de: 'Ein Multi-Agenten-System besteht aus mehreren KI-Agenten, die jeweils eine spezialisierte Rolle haben und gemeinsam eine Aufgabe lösen, die für einen einzelnen Agenten zu umfangreich oder zu vielseitig wäre. Die Agenten tauschen Zwischenergebnisse aus, prüfen sich gegenseitig oder bearbeiten Teilaufgaben parallel; häufig koordiniert ein übergeordneter Agent die Verteilung. Das Prinzip entspricht einem Team aus Fachleuten statt eines einzelnen Generalisten.',
      en: 'A multi-agent system consists of several AI agents, each with a specialized role, that together solve a task too large or too varied for a single agent. The agents exchange intermediate results, check each other, or work on subtasks in parallel; often a supervising agent coordinates the distribution. The principle is that of a team of specialists rather than a single generalist.',
    },
    whyImportant: {
      de: 'Spezialisierte Agenten mit eng begrenztem Werkzeug- und Datenzugriff lassen sich leichter testen, absichern und verbessern als ein Agent, der alles kann. Zugleich wachsen mit der Zahl der Agenten auch Übergaben, Kosten und Fehlerquellen – Multi-Agenten-Systeme brauchen deshalb Orchestrierung und eine Auswertung ihres tatsächlichen Zusammenspiels.',
      en: 'Specialized agents with narrowly scoped tool and data access are easier to test, secure, and improve than one agent that can do everything. At the same time, handovers, costs, and failure points grow with the number of agents – which is why multi-agent systems need orchestration and an analysis of how they actually interact.',
    },
    teaser: {
      de: 'Mehrere spezialisierte KI-Agenten, die gemeinsam eine Aufgabe lösen.',
      en: 'Several specialized AI agents solving one task together.',
    },
    term: {
      de: 'Multi-Agenten-System',
      en: 'Multi-Agent System',
    },
    example: {
      de: 'Für eine Prozessanalyse im Einkauf wertet ein Agent die Durchlaufzeiten aus, ein zweiter untersucht Compliance-Verstöße, ein dritter rechnet Working-Capital-Effekte. Ein koordinierender Agent führt die Befunde zusammen, erkennt, dass zwei davon dieselbe Ursache haben — Rechnungen, die ohne vorherige Bestellung eingehen —, und fasst sie zu einer Maßnahme zusammen.',
      en: 'For a process analysis in procurement, one agent evaluates cycle times, a second investigates compliance breaches, a third calculates working-capital effects. A coordinating agent merges the findings, recognises that two of them share a cause — invoices arriving without a prior purchase order — and combines them into one action.',
    },
    delimitation: {
      de: 'Nicht mit Agent Orchestration gleichzusetzen: das Multi-Agenten-System ist die Architektur, die Orchestrierung die Steuerung darin. Und nicht mit einem einzelnen Agenten mit vielen Werkzeugen: dort trifft ein Modell alle Entscheidungen, im Multi-Agenten-System sind die Zuständigkeiten auf mehrere verteilt.',
      en: 'Not the same as agent orchestration: the multi-agent system is the architecture, orchestration the control within it. Nor the same as a single agent with many tools, where one model makes every decision; in a multi-agent system responsibilities are spread across several.',
    },
    related: ['agent-orchestration', 'a2a-protocol', 'ai-agent', 'agent-observability'],
  },
  {
    id: 'a2a-protocol',
    question: {
      de: 'Was ist das Agent2Agent-Protokoll (A2A)?',
      en: 'What is the Agent2Agent Protocol (A2A)?',
    },
    definition: {
      de: 'Das Agent2Agent-Protokoll (A2A) ist ein offener Standard, über den KI-Agenten unterschiedlicher Hersteller und Plattformen miteinander kommunizieren und einander Aufgaben übergeben. Jeder Agent beschreibt seine Fähigkeiten in einer sogenannten Agent Card; andere Agenten können ihn darüber finden, beauftragen und den Stand der Aufgabe verfolgen. Google hat A2A im April 2025 vorgestellt und noch im selben Jahr an die Linux Foundation übergeben.',
      en: 'The Agent2Agent Protocol (A2A) is an open standard through which AI agents from different vendors and platforms communicate with one another and hand tasks over. Each agent describes its capabilities in a so-called agent card; other agents can use it to discover the agent, assign it work, and track the task’s progress. Google introduced A2A in April 2025 and handed it over to the Linux Foundation later that year.',
    },
    whyImportant: {
      de: 'In Unternehmen entstehen Agenten in vielen Systemen gleichzeitig – im ERP, im CRM, in Analyseplattformen. Ohne gemeinsamen Standard bleibt jeder davon eine Insel oder braucht maßgeschneiderte Schnittstellen. A2A macht Agenten über Plattformgrenzen hinweg kombinierbar und verringert die Abhängigkeit von einem einzelnen Anbieter.',
      en: 'Organizations are building agents in many systems at once – in the ERP, the CRM, analytics platforms. Without a shared standard, each one remains an island or needs bespoke interfaces. A2A makes agents combinable across platform boundaries and reduces dependence on a single vendor.',
    },
    teaser: {
      de: 'Der offene Standard, über den KI-Agenten untereinander Aufgaben austauschen.',
      en: 'The open standard through which AI agents exchange tasks with one another.',
    },
    term: {
      de: 'Agent2Agent-Protokoll (A2A)',
      en: 'Agent2Agent Protocol (A2A)',
    },
    example: {
      de: 'Ein Agent im Servicesystem bemerkt, dass sich Reklamationen zu einem Produkt häufen. Über A2A beauftragt er den Prozessanalyse-Agenten einer anderen Plattform mit der Frage, ob die betroffenen Aufträge einen gemeinsamen Lieferweg haben. Der Analyse-Agent meldet Zwischenstände und liefert das Ergebnis zurück — ohne dass eine der beiden Plattformen eine eigene Schnittstelle für die andere gebaut hätte.',
      en: 'An agent in the service system notices complaints piling up for one product. Via A2A it asks a process analysis agent on another platform whether the affected orders share a delivery route. The analysis agent reports progress and returns the result — without either platform having built a dedicated interface for the other.',
    },
    delimitation: {
      de: 'Nicht mit dem Model Context Protocol (MCP) zu verwechseln: MCP verbindet einen Agenten mit Werkzeugen und Datenquellen, A2A verbindet Agenten miteinander. Beide ergänzen sich — ein Agent kann über MCP Daten abfragen und über A2A einen anderen Agenten beauftragen.',
      en: 'Not to be confused with the Model Context Protocol (MCP): MCP connects an agent to tools and data sources, A2A connects agents to each other. The two complement each other — an agent can query data via MCP and delegate to another agent via A2A.',
    },
    related: ['model-context-protocol', 'multi-agent-system', 'agent-orchestration'],
  },
  {
    id: 'ai-agent-governance',
    question: {
      de: 'Was ist KI-Agenten-Governance?',
      en: 'What is AI agent governance?',
    },
    definition: {
      de: 'KI-Agenten-Governance umfasst die Regeln, Rollen und Kontrollmechanismen, mit denen ein Unternehmen steuert, welcher KI-Agent was tun darf. Dazu gehören ein festgelegtes Mandat je Agent, Zugriffsrechte und Freigabegrenzen, eine eindeutige Agenten-Identität, die Protokollierung aller Handlungen und die regelmäßige Prüfung, ob sich Agenten innerhalb dieser Grenzen bewegen. Sie überträgt bewährte Prinzipien der IT- und Prozess-Governance auf Akteure, die selbst Entscheidungen treffen.',
      en: 'AI agent governance comprises the rules, roles, and control mechanisms with which an organization determines which AI agent may do what. It includes a defined mandate per agent, access rights and approval limits, a unique agent identity, logging of all actions, and regular review of whether agents stay within those boundaries. It carries proven principles of IT and process governance over to actors that make decisions themselves.',
    },
    whyImportant: {
      de: 'Mit jedem Agenten, der in Systemen handelt, entsteht eine neue Stelle, an der etwas schiefgehen kann – und eine neue Frage, wer dafür verantwortlich ist. Ohne Governance bleiben Agenten Pilotprojekte, weil Revision, Datenschutz und Fachbereich ihnen keine echten Befugnisse geben. Regulatorisch verlangt der EU AI Act je nach Risikoklasse Dokumentation, Protokollierung und menschliche Aufsicht.',
      en: 'Every agent that acts in systems creates a new point where things can go wrong – and a new question of who is accountable. Without governance, agents remain pilots, because audit, data protection, and business owners will not grant them real authority. On the regulatory side, the EU AI Act requires documentation, logging, and human oversight depending on the risk class.',
    },
    teaser: {
      de: 'Regeln, Rollen und Kontrollen dafür, was KI-Agenten tun dürfen.',
      en: 'Rules, roles, and controls for what AI agents are allowed to do.',
    },
    term: {
      de: 'KI-Agenten-Governance',
      en: 'AI Agent Governance',
    },
    example: {
      de: 'Bevor ein Agent im Einkauf produktiv geht, wird ein Steckbrief angelegt: Ziel, verantwortliche Person, erlaubte Systeme, Buchungsgrenze 2.500 €, Freigabepflicht bei neuen Lieferanten, Protokollierung jeder Aktion. Quartalsweise werden die Protokolle gegen diesen Steckbrief abgeglichen — um zu prüfen, ob der Agent sich daran gehalten hat und ob die Grenzen noch passen.',
      en: 'Before a procurement agent goes live, a profile is created: goal, accountable person, permitted systems, a posting limit of €2,500, mandatory approval for new suppliers, logging of every action. Each quarter the logs are checked against that profile — to see whether the agent kept to it and whether the limits still fit.',
    },
    delimitation: {
      de: 'Nicht mit allgemeiner KI-Governance gleichzusetzen: die regelt den Einsatz von KI-Modellen insgesamt, etwa Datenherkunft und Fairness. Agenten-Governance kommt hinzu, weil Agenten handeln, statt nur etwas auszugeben. Und nicht mit Guardrails: die sind ein technisches Mittel innerhalb der Governance, nicht die Governance selbst.',
      en: 'Not the same as general AI governance, which regulates the use of AI models overall, such as data provenance and fairness. Agent governance comes on top because agents act rather than merely produce output. Nor the same as guardrails, which are a technical means within governance, not governance itself.',
    },
    related: ['agent-conformance-checking', 'guardian-agents', 'human-in-the-loop', 'agent-observability'],
  },
  {
    id: 'guardian-agents',
    question: {
      de: 'Was sind Guardian Agents?',
      en: 'What are Guardian Agents?',
    },
    definition: {
      de: 'Guardian Agents sind KI-Agenten, deren Aufgabe die Überwachung anderer KI-Agenten ist: Sie beobachten deren Handlungen, prüfen sie gegen Ziele, Regeln und Grenzen und können je nach Befugnis warnen, umlenken oder blockieren. Bekannt gemacht hat den Begriff das Analystenhaus Gartner, das Guardian Agents als eigene Technologiekategorie beschreibt. Die Bandbreite reicht von prüfenden Assistenten bis zu autonomen Kontrollinstanzen, die selbst eingreifen.',
      en: 'Guardian Agents are AI agents whose job is to supervise other AI agents: they observe their actions, check them against goals, rules, and boundaries, and – depending on their authority – warn, redirect, or block. The term was popularized by the analyst firm Gartner, which describes guardian agents as a technology category of its own. They range from reviewing assistants to autonomous control instances that intervene themselves.',
    },
    whyImportant: {
      de: 'Wenn Agenten in großer Zahl und schneller als Menschen handeln, kann ihre Überwachung nicht mehr allein manuell erfolgen. Gartner erwartet, dass Guardian-Agent-Technologien bis 2030 mindestens 10 bis 15 % des Marktes für agentische KI ausmachen. Ihre Wirksamkeit hängt davon ab, ob sie das Soll-Verhalten kennen – also den Prozess, in dem der überwachte Agent arbeitet.',
      en: 'When agents act in large numbers and faster than people, supervising them can no longer be purely manual. Gartner expects guardian agent technologies to account for at least 10 to 15% of the agentic AI market by 2030. Their effectiveness depends on whether they know the target behavior – that is, the process in which the supervised agent works.',
    },
    teaser: {
      de: 'KI-Agenten, die andere KI-Agenten überwachen und bei Regelverstößen eingreifen.',
      en: 'AI agents that supervise other AI agents and intervene when rules are broken.',
    },
    term: {
      de: 'Guardian Agents',
      en: 'Guardian Agents',
    },
    example: {
      de: 'Ein Agent bereitet Zahlungsläufe vor. Ein Guardian Agent prüft jeden Lauf, bevor er an die Bank geht: Stimmt die Bankverbindung mit den Stammdaten überein, wurde sie in den letzten 14 Tagen geändert, liegt der Betrag im üblichen Rahmen dieses Lieferanten? Bei einer frisch geänderten IBAN hält er die Zahlung an und legt sie einer Person zur Prüfung vor.',
      en: 'An agent prepares payment runs. A guardian agent checks every run before it goes to the bank: does the bank account match master data, was it changed in the last 14 days, is the amount within this supplier’s usual range? For a freshly changed IBAN it holds the payment and routes it to a person for review.',
    },
    delimitation: {
      de: 'Nicht mit Agent Conformance Checking zu verwechseln: das prüft im Nachhinein, ob ein Agent regelkonform gehandelt hat; ein Guardian Agent wacht während der Ausführung und kann eingreifen. Und nicht mit statischen Guardrails: die blockieren fest definierte Eingaben oder Ausgaben, ein Guardian Agent bewertet Handlungen im Kontext.',
      en: 'Not to be confused with agent conformance checking, which examines afterwards whether an agent acted in compliance; a guardian agent watches during execution and can intervene. Nor with static guardrails, which block predefined inputs or outputs, whereas a guardian agent assesses actions in context.',
    },
    related: ['agent-conformance-checking', 'ai-agent-governance', 'agent-observability', 'human-in-the-loop'],
  },
  {
    id: 'agent-observability',
    question: {
      de: 'Was ist Agent Observability (AgentOps)?',
      en: 'What is Agent Observability (AgentOps)?',
    },
    definition: {
      de: 'Agent Observability macht sichtbar, was ein KI-Agent im Betrieb tatsächlich tut: welche Modellaufrufe und Werkzeugnutzungen er auslöst, wie lange sie dauern, was sie kosten, wo Fehler auftreten und wie gut die Ergebnisse sind. Grundlage sind Traces – lückenlose Aufzeichnungen jedes Schritts eines Agentenlaufs. AgentOps bezeichnet die Betriebspraxis darum herum: Agenten überwachen, testen, versionieren und fortlaufend verbessern.',
      en: 'Agent Observability makes visible what an AI agent actually does in operation: which model calls and tool invocations it triggers, how long they take, what they cost, where errors occur, and how good the results are. It rests on traces – complete records of every step in an agent run. AgentOps refers to the operating practice around it: monitoring, testing, versioning, and continuously improving agents.',
    },
    whyImportant: {
      de: 'Agenten verhalten sich nicht deterministisch: Dieselbe Aufgabe kann heute drei und morgen elf Schritte brauchen. Ohne Observability fallen Kostensprünge, Endlosschleifen und schleichende Qualitätsverluste erst auf, wenn sich Nutzer beschweren. Sie ist die technische Voraussetzung dafür, Agenten überhaupt verantwortbar zu betreiben.',
      en: 'Agents do not behave deterministically: the same task may take three steps today and eleven tomorrow. Without observability, cost spikes, endless loops, and creeping quality loss only surface when users complain. It is the technical prerequisite for operating agents responsibly at all.',
    },
    teaser: {
      de: 'Sichtbar machen, was KI-Agenten im Betrieb tun, kosten und falsch machen.',
      en: 'Making visible what AI agents do, cost, and get wrong in operation.',
    },
    term: {
      de: 'Agent Observability (AgentOps)',
      en: 'Agent Observability (AgentOps)',
    },
    example: {
      de: 'Nach einem Modellwechsel steigen die Kosten eines Service-Agenten um 40 %. Die Traces zeigen den Grund: Das neue Modell fragt vor jeder Antwort die Wissensdatenbank zweimal ab, weil es die erste Trefferliste verwirft. Eine angepasste Werkzeugbeschreibung behebt das — gefunden in einer Stunde statt erst über die Monatsrechnung.',
      en: 'After a model switch, a service agent’s costs rise by 40%. The traces show why: the new model queries the knowledge base twice before every answer because it discards the first result list. An adjusted tool description fixes it — found within an hour rather than via the monthly bill.',
    },
    delimitation: {
      de: 'Nicht mit Agent Mining gleichzusetzen: Observability zeigt einzelne Läufe in technischer Tiefe, Agent Mining verdichtet Tausende Läufe zu Prozessmustern, Varianten und Häufigkeiten. Und nicht mit klassischem Application Monitoring: das misst Verfügbarkeit und Antwortzeiten, Agent Observability auch Entscheidungen und Ergebnisqualität.',
      en: 'Not the same as agent mining: observability shows individual runs in technical depth, whereas agent mining condenses thousands of runs into process patterns, variants and frequencies. Nor the same as classic application monitoring, which measures availability and response times; agent observability also covers decisions and output quality.',
    },
    related: ['agent-mining', 'guardian-agents', 'ai-agent-governance', 'agent-conformance-checking'],
  },
  {
    id: 'agentic-bpm',
    question: {
      de: 'Was ist Agentic BPM?',
      en: 'What is Agentic BPM?',
    },
    definition: {
      de: 'Agentic BPM (Agentic Business Process Management) erweitert das klassische Geschäftsprozessmanagement um autonome Akteure: Prozesse werden nicht mehr nur von Menschen und fest programmierten Systemen ausgeführt, sondern auch von KI-Agenten, die innerhalb eines Prozessrahmens eigene Entscheidungen treffen. Gestaltung, Steuerung und Verbesserung von Prozessen müssen deshalb regeln, wie viel Spielraum ein Agent hat und wie seine Entscheidungen nachvollziehbar bleiben. Systematisch beschrieben hat das Konzept ein Forschungsmanifest von 18 BPM-Forschenden, darunter Marlon Dumas, Peter Fettke und Stefanie Rinderle-Ma (März 2026).',
      en: 'Agentic BPM (Agentic Business Process Management) extends classic business process management to autonomous actors: processes are no longer executed only by people and hard-coded systems but also by AI agents that make their own decisions within a process frame. Designing, steering, and improving processes must therefore define how much latitude an agent has and how its decisions stay traceable. The concept was set out systematically in a research manifesto by 18 BPM researchers, including Marlon Dumas, Peter Fettke, and Stefanie Rinderle-Ma (March 2026).',
    },
    whyImportant: {
      de: 'BPM wurde für Abläufe entwickelt, deren Schritte vorab modelliert werden. Agenten entscheiden ihre Schritte zur Laufzeit – damit verschiebt sich BPM vom Vorschreiben zum Rahmensetzen und Überprüfen. Das Manifest nennt vier Fähigkeiten, die solche Agenten mitbringen müssen: gerahmte Autonomie (Framed Autonomy), Erklärbarkeit, Handlungsfähigkeit im Dialog und die Fähigkeit zur Selbstanpassung.',
      en: 'BPM was developed for flows whose steps are modeled in advance. Agents decide their steps at runtime – so BPM shifts from prescribing to setting frames and reviewing. The manifesto names four capabilities such agents must have: framed autonomy, explainability, conversational actionability, and self-modification.',
    },
    teaser: {
      de: 'Geschäftsprozessmanagement für Prozesse, in denen KI-Agenten mitentscheiden.',
      en: 'Business process management for processes in which AI agents share decisions.',
    },
    term: {
      de: 'Agentic BPM',
      en: 'Agentic BPM',
    },
    example: {
      de: 'Im Reklamationsprozess legt das Prozessmodell nicht mehr jeden Schritt fest, sondern den Rahmen: Ziel ist eine Lösung binnen fünf Tagen, Gutschriften über 500 € brauchen eine Freigabe, Kundendaten dürfen nur im CRM geändert werden. Innerhalb dieses Rahmens entscheidet der Agent selbst, ob er Ersatz schickt, eine Gutschrift vorschlägt oder nachfragt — und begründet jede Wahl.',
      en: 'In the complaints process, the process model no longer fixes every step but the frame: the goal is a resolution within five days, credit notes above €500 need approval, customer data may only be changed in the CRM. Within that frame the agent decides itself whether to send a replacement, propose a credit note or ask for details — and justifies each choice.',
    },
    delimitation: {
      de: 'Nicht mit Agentic Process Automation gleichzusetzen: APA beschreibt die Automatisierung einzelner Abläufe mit Agenten, Agentic BPM den gesamten Managementzyklus von der Gestaltung bis zur Verbesserung. Und nicht als Abkehr von Prozessmodellen zu verstehen: das Modell bleibt, es legt aber Grenzen und Ziele fest statt jeder einzelnen Aktivität.',
      en: 'Not the same as agentic process automation: APA describes automating individual flows with agents, agentic BPM the entire management cycle from design to improvement. Nor a departure from process models: the model remains, but it defines boundaries and goals rather than every single activity.',
    },
    related: ['business-process-management', 'agentic-process-automation', 'agent-conformance-checking', 'self-improving-processes'],
  },
  {
    id: 'agent-washing',
    question: {
      de: 'Was ist Agent Washing?',
      en: 'What is agent washing?',
    },
    definition: {
      de: 'Agent Washing bezeichnet die Praxis, bestehende Produkte wie Chatbots, KI-Assistenten oder RPA-Lösungen als „agentisch" oder als „KI-Agenten" zu vermarkten, obwohl ihnen wesentliche agentische Eigenschaften fehlen. Typischerweise können sie kein Ziel über mehrere Schritte eigenständig verfolgen, ihre Werkzeuge nicht selbst wählen und nicht auf unvorhergesehene Situationen reagieren. Der Begriff lehnt sich an „Greenwashing" an und wurde vor allem durch das Analystenhaus Gartner verbreitet.',
      en: 'Agent washing is the practice of marketing existing products such as chatbots, AI assistants, or RPA tools as "agentic" or as "AI agents" even though they lack essential agentic capabilities. Typically they cannot pursue a goal across multiple steps on their own, choose their tools themselves, or respond to unforeseen situations. The term echoes "greenwashing" and was popularized mainly by the analyst firm Gartner.',
    },
    whyImportant: {
      de: 'Gartner schätzte 2025, dass von Tausenden Anbietern, die sich als „agentic" bezeichnen, nur rund 130 echte agentische Fähigkeiten bieten. Wer Lösungen auswählt, sollte deshalb prüfen, ob ein Produkt selbst plant und handelt oder nur auf Anfragen antwortet – sonst investiert man in Erwartungen, die das Produkt nicht einlösen kann.',
      en: 'In 2025 Gartner estimated that of the thousands of vendors describing themselves as "agentic", only about 130 offer real agentic capabilities. Anyone selecting solutions should therefore check whether a product plans and acts on its own or merely answers requests – otherwise they invest in expectations the product cannot meet.',
    },
    teaser: {
      de: 'Wenn Chatbots und Bots als „KI-Agenten" verkauft werden – und woran man es erkennt.',
      en: 'When chatbots and bots are sold as "AI agents" – and how to tell.',
    },
    term: {
      de: 'Agent Washing',
      en: 'Agent Washing',
    },
    example: {
      de: 'Ein Anbieter bewirbt einen „Rechnungsagenten". Im Test zeigt sich: Das Produkt liest Rechnungen per Texterkennung aus und folgt danach einem festen Regelwerk; jede Abweichung landet in einer Warteschlange. Drei Prüffragen entlarven das: Kann es ein Ziel über mehrere Schritte verfolgen? Wählt es seine Werkzeuge selbst? Was passiert bei einem Fall, den niemand vorhergesehen hat?',
      en: 'A vendor advertises an "invoice agent". Testing shows that the product extracts invoices via text recognition and then follows a fixed rule set; every deviation lands in a queue. Three questions expose it: can it pursue a goal over several steps? Does it choose its own tools? What happens with a case nobody anticipated?',
    },
    delimitation: {
      de: 'Nicht als Abwertung regelbasierter Lösungen zu verstehen: RPA oder Chatbots können genau das Richtige sein — problematisch ist nur das falsche Etikett. Und nicht mit dem Unterschied zwischen Copilot und Agent zu verwechseln: der beschreibt zwei legitime Bauformen, Agent Washing eine irreführende Bezeichnung.',
      en: 'Not a verdict against rule-based solutions: RPA or chatbots may be exactly the right choice — the problem is only the wrong label. Nor the same as the copilot-versus-agent distinction, which describes two legitimate designs, whereas agent washing describes a misleading label.',
    },
    related: ['ai-agent-vs-copilot', 'agentic-automation-vs-rpa', 'agentic-ai', 'ai-agent'],
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
