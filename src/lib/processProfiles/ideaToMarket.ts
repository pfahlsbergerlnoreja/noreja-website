import type { ProcessProfile } from '../processProfiles';

export const ideaToMarket: ProcessProfile = {
  id: 'idea-to-market',
  name: 'Idea-to-Market',
  abbreviation: 'I2M',
  dateModified: '2026-11-04',
  relatedCases: ['plan-to-produce', 'purchase-to-pay'],
  agents: ['cycle-time', 'rework', 'structural-deviation'],
  content: {
    de: {
      metaTitle: 'Idea-to-Market (I2M): Prozess, Phasen & KPIs | Noreja',
      metaDescription:
        'Idea-to-Market (I2M) von der Produktidee bis zur Markteinführung: Phasen, Stage-Gates, Geschäftsobjekte, KPIs wie Time-to-Market und typische Probleme.',
      keywords: [
        'Idea-to-Market',
        'I2M Prozess',
        'Produktentstehungsprozess',
        'Stage-Gate-Prozess',
        'Time-to-Market',
        'Engineering Change Management',
        'Produktentwicklung',
        'Process Mining PLM',
      ],
      area: 'Forschung & Entwicklung',
      tagline:
        'Von der ersten Idee bis zum marktreifen Produkt: wie der Idea-to-Market-Prozess abläuft, woran er gemessen wird und wo Entwicklungsprojekte an Gates, Änderungen und Freigaben Zeit verlieren.',
      teaser: 'Von der Produktidee bis zur Markteinführung – Bewertung, Entwicklung, Validierung und Launch.',
      definition:
        'Idea-to-Market (I2M) ist der End-to-End-Prozess von der Erfassung einer Produktidee bis zur Markteinführung des fertigen Produkts. Er umfasst Ideenbewertung und Stage-Gates, Konzept und Business Case, Konstruktion und Entwicklung mit technischen Änderungen, Validierung, Tests und Zertifizierung, die Industrialisierung sowie den Launch. Weil Entwicklung, Qualität, Einkauf, Produktion und Vertrieb über Monate oder Jahre an einem Produkt zusammenarbeiten, bestimmt I2M, wie schnell und mit welchem Aufwand neue Produkte auf den Markt kommen.',
      aliases: ['I2M', 'Idea to Market', 'Concept-to-Market', 'Concept-to-Launch', 'Design-to-Release', 'Produktentstehungsprozess (PEP)'],
      scope: {
        start: 'Eine Produktidee wird erfasst.',
        end: 'Das Produkt ist freigegeben, industrialisiert und im Markt eingeführt.',
      },
      phases: [
        {
          title: 'Ideenerfassung & Bewertung',
          text: 'Ideen aus Markt, Kundenfeedback, Forschung oder Mitarbeitenden werden gesammelt, bewertet und am ersten Gate für die Weiterverfolgung ausgewählt.',
          steps: ['Idee erfasst', 'Idee bewertet', 'Gate 1 entschieden'],
        },
        {
          title: 'Konzept & Business Case',
          text: 'Anforderungen, Lösungskonzept, Kosten und Marktpotenzial werden ausgearbeitet; das nächste Gate entscheidet über das Entwicklungsprojekt.',
          steps: ['Anforderungen definiert', 'Konzept erstellt', 'Business Case bewertet', 'Projekt freigegeben'],
        },
        {
          title: 'Entwicklung & Konstruktion',
          text: 'In PLM und CAD entstehen Bauteile, Baugruppen und Stücklisten. Technische Änderungen durchlaufen einen eigenen Antrags- und Freigabeweg.',
          steps: ['Konstruktion gestartet', 'Stückliste angelegt', 'Änderungsantrag gestellt', 'Änderung freigegeben', 'Design freigegeben'],
        },
        {
          title: 'Validierung & Zertifizierung',
          text: 'Prototypen und Muster werden getestet, Befunde fließen als Änderungen zurück in die Entwicklung, bis Prüfungen und Zulassungen bestanden sind.',
          steps: ['Prototyp gebaut', 'Test durchgeführt', 'Befund erfasst', 'Zertifizierung erteilt'],
        },
        {
          title: 'Industrialisierung & Markteinführung',
          text: 'Werkzeuge, Lieferanten und Fertigungsprozesse werden vorbereitet, die Serienfreigabe erteilt und das Produkt in Vertrieb und Markt eingeführt.',
          steps: ['Lieferant freigegeben', 'Nullserie gefertigt', 'Serienfreigabe', 'Markteinführung'],
        },
      ],
      objects: [
        { name: 'Idee', text: 'Erfasster Vorschlag mit Quelle, Bewertung und Gate-Entscheidung.' },
        { name: 'Entwicklungsprojekt', text: 'Projekt mit Phasen, Gates, Budget und Verantwortlichen – der Rahmen für alle weiteren Objekte.' },
        { name: 'Anforderung', text: 'Funktionale, regulatorische oder kundenspezifische Vorgabe, gegen die das Produkt geprüft wird.' },
        { name: 'Bauteil & Stückliste', text: 'Konstruktionsstand im PLM mit Version, Reifegrad und Freigabestatus.' },
        { name: 'Änderungsantrag', text: 'Technische Änderung an Bauteil, Zeichnung oder Stückliste, mit Begründung, Bewertung und Freigabe.' },
        { name: 'Test & Befund', text: 'Prüfung an Prototyp oder Muster mit Ergebnis und daraus entstehenden Maßnahmen.' },
      ],
      systems: [
        'PLM-Systeme (z. B. Siemens Teamcenter, PTC Windchill, Dassault ENOVIA)',
        'CAD-Werkzeuge',
        'Ideen- und Innovationsmanagement, Projektportfolio-Management',
        'Requirements- und Testmanagement',
        'ERP für Materialstamm, Lieferanten und Serienfreigabe',
      ],
      kpis: [
        { name: 'Time-to-Market', text: 'Zeit von der Projektfreigabe bis zur Markteinführung.' },
        { name: 'Durchlaufzeit pro Gate', text: 'Wie lange ein Projekt zwischen zwei Gates braucht und wie lange es auf die Gate-Entscheidung wartet.' },
        { name: 'Änderungen nach Designfreigabe', text: 'Technische Änderungen, die einen bereits freigegebenen Stand wieder öffnen.' },
        { name: 'Durchlaufzeit von Änderungsanträgen', text: 'Zeit vom Änderungsantrag bis zur umgesetzten Freigabe.' },
        { name: 'Testwiederholungen', text: 'Wie oft Prüfungen nach einem Befund erneut durchlaufen werden müssen.' },
        { name: 'Termintreue der Meilensteine', text: 'Anteil der Gates und Freigaben, die zum geplanten Termin erreicht werden.' },
      ],
      challenges: [
        {
          title: 'Gates, die nur auf dem Papier stehen',
          text: 'Projekte gehen in die nächste Phase, bevor das Gate entschieden ist, oder Gate-Kriterien werden nachträglich erfüllt. Der Stage-Gate-Prozess steuert dann nicht mehr, sondern dokumentiert.',
        },
        {
          title: 'Späte technische Änderungen',
          text: 'Änderungen nach Designfreigabe oder in der Industrialisierung lösen Nacharbeit in Konstruktion, Test, Einkauf und Werkzeugbau aus – je später, desto mehr Objekte sind betroffen.',
        },
        {
          title: 'Wartezeiten zwischen Fachbereichen',
          text: 'Konstruktion wartet auf Testergebnisse, der Test auf Muster, der Einkauf auf freigegebene Stücklisten. Die Projektplanung zeigt Termine, aber nicht, wo die Übergaben hängen.',
        },
        {
          title: 'Schleifen zwischen Test und Entwicklung',
          text: 'Wiederholte Befunde an denselben Bauteilen deuten auf unklare Anforderungen oder fehlende Erkenntnisse aus früheren Projekten hin.',
        },
      ],
      questions: [
        'Welche Gates verzögern die Time-to-Market am stärksten?',
        'Wo starten Entwicklungsarbeiten vor der vorgesehenen Gate-Entscheidung?',
        'Welche Bauteile werden nach der Designfreigabe am häufigsten geändert?',
        'Wie lange warten Änderungsanträge auf Bewertung und Freigabe?',
        'Welche Tests müssen regelmäßig wiederholt werden, und warum?',
        'Welche Übergaben zwischen Entwicklung, Einkauf und Produktion verursachen die längsten Wartezeiten?',
      ],
      approach: [
        'Ein Entwicklungsprojekt ist kein einzelner Fall mit einer Abfolge von Schritten. Daran hängen Hunderte Bauteile mit eigenen Versionen, Änderungsanträge, die mehrere Stücklisten betreffen, Tests an verschiedenen Prototypen und Lieferanten für einzelne Komponenten. Ein flacher Eventlog müsste eines dieser Objekte zum Fall erklären und verliert die übrigen. Noreja bildet sie im Event Knowledge Graph gemeinsam ab, sodass eine späte Änderung bis zu jedem betroffenen Test und jeder Bestellung sichtbar bleibt.',
        'Stage-Gate-Logik und Freigaberegeln werden mit Fachwissen aus Entwicklung und Qualität als erwartete Reihenfolge modelliert: kein Entwicklungsstart vor dem Gate, keine Serienfreigabe vor bestandener Zertifizierung. So wird erkennbar, wo Projekte vom vorgesehenen Ablauf abweichen und welche Abweichung später Nacharbeit auslöst.',
      ],
      faq: [
        {
          question: 'Was ist der Idea-to-Market-Prozess?',
          answer:
            'Idea-to-Market (I2M) ist der End-to-End-Prozess von der Produktidee bis zur Markteinführung. Er umfasst Ideenbewertung und Stage-Gates, Konzept und Business Case, Entwicklung und technische Änderungen, Validierung und Zertifizierung sowie Industrialisierung und Launch.',
        },
        {
          question: 'Was ist der Unterschied zwischen Idea-to-Market und Plan-to-Produce?',
          answer:
            'Idea-to-Market endet dort, wo die Serienproduktion geplant wird: mit freigegebenem Produkt, Stückliste und Fertigungsprozess. Plan-to-Produce übernimmt ab diesem Punkt und beschreibt die laufende Planung und Fertigung des Produkts. Technische Änderungen an Serienprodukten verbinden beide Prozesse.',
        },
        {
          question: 'Welche KPIs sind im Idea-to-Market wichtig?',
          answer:
            'Typische Kennzahlen sind Time-to-Market, die Durchlaufzeit pro Gate, Änderungen nach Designfreigabe, die Durchlaufzeit von Änderungsanträgen, Testwiederholungen und die Termintreue der Meilensteine.',
        },
        {
          question: 'Kann man Process Mining in der Produktentwicklung einsetzen?',
          answer:
            'Ja. Gate-Entscheidungen, Änderungsanträge, Freigaben von Bauteilen und Stücklisten sowie Testergebnisse hinterlassen Zeitstempel und Verantwortliche in PLM, Projekt- und Testmanagement. Process Mining zeigt daraus den tatsächlichen Projektverlauf, Wartezeiten zwischen Fachbereichen und Schleifen durch späte Änderungen.',
        },
      ],
    },
    en: {
      metaTitle: 'Idea-to-Market (I2M): Process, Phases & KPIs | Noreja',
      metaDescription:
        'Idea-to-market (I2M) from product idea to market launch: phases, stage gates, business objects, KPIs such as time to market and typical problems in development.',
      keywords: [
        'Idea-to-Market',
        'I2M process',
        'product development process',
        'stage-gate process',
        'time to market',
        'engineering change management',
        'new product development',
        'process mining PLM',
      ],
      area: 'Research & development',
      tagline:
        'From the first idea to a market-ready product: how the idea-to-market process runs, how it is measured and where development projects lose time at gates, changes and releases.',
      teaser: 'From product idea to market launch – evaluation, development, validation and launch.',
      definition:
        'Idea-to-market (I2M) is the end-to-end process from capturing a product idea to launching the finished product on the market. It covers idea evaluation and stage gates, concept and business case, design and engineering including engineering changes, validation, testing and certification, industrialisation and the launch itself. Because engineering, quality, procurement, production and sales work on one product for months or years, I2M determines how quickly and at what effort new products reach the market.',
      aliases: ['I2M', 'Idea to Market', 'Concept-to-Market', 'Concept-to-Launch', 'Design-to-Release', 'New product development (NPD)'],
      scope: {
        start: 'A product idea is captured.',
        end: 'The product is released, industrialised and launched on the market.',
      },
      phases: [
        {
          title: 'Idea capture & evaluation',
          text: 'Ideas from the market, customer feedback, research or employees are collected, evaluated and selected for further work at the first gate.',
          steps: ['Idea captured', 'Idea evaluated', 'Gate 1 decided'],
        },
        {
          title: 'Concept & business case',
          text: 'Requirements, solution concept, costs and market potential are worked out; the next gate decides on the development project.',
          steps: ['Requirements defined', 'Concept created', 'Business case assessed', 'Project approved'],
        },
        {
          title: 'Development & engineering',
          text: 'Parts, assemblies and bills of materials take shape in PLM and CAD. Engineering changes follow their own request and approval path.',
          steps: ['Design started', 'Bill of materials created', 'Change request raised', 'Change approved', 'Design released'],
        },
        {
          title: 'Validation & certification',
          text: 'Prototypes and samples are tested, and findings flow back into engineering as changes until tests and approvals are passed.',
          steps: ['Prototype built', 'Test performed', 'Finding recorded', 'Certification granted'],
        },
        {
          title: 'Industrialisation & market launch',
          text: 'Tooling, suppliers and manufacturing processes are prepared, the release for series production is granted and the product is launched to sales and the market.',
          steps: ['Supplier approved', 'Pilot series produced', 'Series release', 'Market launch'],
        },
      ],
      objects: [
        { name: 'Idea', text: 'Captured proposal with source, evaluation and gate decision.' },
        { name: 'Development project', text: 'Project with phases, gates, budget and owners – the frame for all other objects.' },
        { name: 'Requirement', text: 'Functional, regulatory or customer-specific specification the product is tested against.' },
        { name: 'Part & bill of materials', text: 'Design status in PLM with version, maturity and release status.' },
        { name: 'Engineering change request', text: 'Technical change to a part, drawing or bill of materials, with justification, assessment and approval.' },
        { name: 'Test & finding', text: 'Test on a prototype or sample with its result and the actions that follow.' },
      ],
      systems: [
        'PLM systems (e.g. Siemens Teamcenter, PTC Windchill, Dassault ENOVIA)',
        'CAD tools',
        'Idea and innovation management, project portfolio management',
        'Requirements and test management',
        'ERP for material master, suppliers and series release',
      ],
      kpis: [
        { name: 'Time to market', text: 'Time from project approval to market launch.' },
        { name: 'Cycle time per gate', text: 'How long a project takes between two gates and how long it waits for the gate decision.' },
        { name: 'Changes after design release', text: 'Engineering changes that reopen a design that has already been released.' },
        { name: 'Change request cycle time', text: 'Time from change request to implemented approval.' },
        { name: 'Test repetitions', text: 'How often tests have to be run again after a finding.' },
        { name: 'Milestone adherence', text: 'Share of gates and releases reached on the planned date.' },
      ],
      challenges: [
        {
          title: 'Gates that exist only on paper',
          text: 'Projects move into the next phase before the gate is decided, or gate criteria are met after the fact. The stage-gate process then documents instead of steering.',
        },
        {
          title: 'Late engineering changes',
          text: 'Changes after design release or during industrialisation trigger rework in engineering, testing, procurement and tooling – the later they come, the more objects are affected.',
        },
        {
          title: 'Waiting times between functions',
          text: 'Engineering waits for test results, testing waits for samples, procurement waits for released bills of materials. The project plan shows dates, but not where the hand-overs get stuck.',
        },
        {
          title: 'Loops between testing and engineering',
          text: 'Repeated findings on the same parts point to unclear requirements or lessons from earlier projects that were not carried over.',
        },
      ],
      questions: [
        'Which gates delay time to market the most?',
        'Where does development work start before the required gate decision?',
        'Which parts are changed most often after design release?',
        'How long do change requests wait for assessment and approval?',
        'Which tests have to be repeated regularly, and why?',
        'Which hand-overs between engineering, procurement and production cause the longest waiting times?',
      ],
      approach: [
        'A development project is not a single case with a sequence of steps. It involves hundreds of parts with their own versions, change requests that affect several bills of materials, tests on different prototypes and suppliers for individual components. A flat event log would have to declare one of these objects the case and lose the rest. Noreja represents them together in the event knowledge graph, so a late change stays visible down to every affected test and purchase order.',
        'Stage-gate logic and release rules are modelled as the expected order with domain knowledge from engineering and quality: no development start before the gate, no series release before certification has been passed. This shows where projects deviate from the intended flow and which deviation later triggers rework.',
      ],
      faq: [
        {
          question: 'What is the idea-to-market process?',
          answer:
            'Idea-to-market (I2M) is the end-to-end process from product idea to market launch. It covers idea evaluation and stage gates, concept and business case, development and engineering changes, validation and certification, and industrialisation and launch.',
        },
        {
          question: 'What is the difference between idea-to-market and plan-to-produce?',
          answer:
            'Idea-to-market ends where series production planning begins: with a released product, bill of materials and manufacturing process. Plan-to-produce takes over from there and describes the ongoing planning and manufacturing of the product. Engineering changes to series products connect the two processes.',
        },
        {
          question: 'Which KPIs matter in idea-to-market?',
          answer:
            'Typical KPIs are time to market, cycle time per gate, changes after design release, change request cycle time, test repetitions and milestone adherence.',
        },
        {
          question: 'Can process mining be used in product development?',
          answer:
            'Yes. Gate decisions, change requests, releases of parts and bills of materials and test results leave timestamps and owners in PLM, project and test management. Process mining shows the actual course of a project, waiting times between functions and loops caused by late changes.',
        },
      ],
    },
  },
};
