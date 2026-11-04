import type { ProcessProfile } from '../processProfiles';

export const sourceToContract: ProcessProfile = {
  id: 'source-to-contract',
  name: 'Source-to-Contract',
  abbreviation: 'S2C',
  dateModified: '2026-11-04',
  relatedCases: ['purchase-to-pay'],
  agents: ['cycle-time', 'compliance', 'structural-deviation'],
  content: {
    de: {
      metaTitle: 'Source-to-Contract (S2C): Prozess, Phasen & KPIs | Noreja',
      metaDescription:
        'Source-to-Contract (S2C) vom Bedarf bis zum nutzbaren Vertrag: Phasen, Objekte, KPIs wie Sourcing Cycle Time und typische Probleme im strategischen Einkauf.',
      keywords: [
        'Source-to-Contract',
        'S2C Prozess',
        'strategischer Einkauf',
        'Ausschreibung',
        'RFx',
        'Vertragsmanagement Einkauf',
        'Process Mining Einkauf',
        'Source-to-Pay',
      ],
      area: 'Einkauf & Beschaffung',
      tagline:
        'Von der Bedarfsanalyse bis zum Rahmenvertrag im Bestellsystem: wie der Source-to-Contract-Prozess abläuft, woran er gemessen wird und wo Ausschreibungen und Vertragsabschlüsse Zeit verlieren.',
      teaser: 'Vom Bedarf bis zum nutzbaren Vertrag – Ausschreibung, Lieferantenauswahl, Verhandlung und Vertragsabschluss.',
      definition:
        'Source-to-Contract (S2C) ist der End-to-End-Prozess des strategischen Einkaufs, von der Analyse von Bedarf und Ausgaben bis zu einem unterschriebenen Vertrag, aus dem im operativen Einkauf bestellt werden kann. Er umfasst Spend-Analyse und Bedarfsbündelung, die Sourcing-Strategie, Lieferantensuche und -qualifizierung, Ausschreibungen (RFI, RFP, RFQ), Angebotsbewertung und Verhandlung, die Vergabe sowie Erstellung, Freigabe, Unterzeichnung und Pflege des Vertrags. S2C entscheidet, zu welchen Konditionen und mit welchen Lieferanten Purchase-to-Pay später arbeitet.',
      aliases: ['S2C', 'Source to Contract', 'Strategic Sourcing', 'Strategischer Einkauf', 'Sourcing-to-Contract'],
      scope: {
        start: 'Ein Bedarf oder eine auslaufende Vereinbarung macht eine Beschaffungsentscheidung nötig.',
        end: 'Der Vertrag ist unterschrieben und im Einkaufssystem als Bezugsquelle für Bestellungen verfügbar.',
      },
      phases: [
        {
          title: 'Bedarf & Spend-Analyse',
          text: 'Ausgaben, Bedarfe der Fachbereiche und auslaufende Verträge werden ausgewertet und zu Warengruppen gebündelt.',
          steps: ['Spend-Analyse', 'Bedarf gemeldet', 'Sourcing-Projekt angelegt'],
        },
        {
          title: 'Strategie & Lieferantenauswahl',
          text: 'Für die Warengruppe wird eine Sourcing-Strategie festgelegt; mögliche Lieferanten werden gesucht, bewertet und qualifiziert.',
          steps: ['Sourcing-Strategie festgelegt', 'Lieferanten recherchiert', 'Selbstauskunft angefordert', 'Lieferant qualifiziert'],
        },
        {
          title: 'Ausschreibung & Verhandlung',
          text: 'Anfragen werden versendet, Angebote eingeholt, technisch und kaufmännisch bewertet und in einer oder mehreren Runden verhandelt.',
          steps: ['RFx veröffentlicht', 'Angebot eingegangen', 'Angebot bewertet', 'Verhandlungsrunde', 'Vergabe entschieden'],
        },
        {
          title: 'Vertragsabschluss',
          text: 'Aus der Vergabe entsteht ein Vertrag, der juristisch geprüft, intern freigegeben und von beiden Seiten unterschrieben wird.',
          steps: ['Vertragsentwurf erstellt', 'Rechtliche Prüfung', 'Vertrag freigegeben', 'Vertrag unterschrieben'],
        },
        {
          title: 'Vertragsbereitstellung & -pflege',
          text: 'Konditionen werden als Rahmenvertrag, Katalog oder Kontrakt im Einkaufssystem hinterlegt und bis zum Ablauf gepflegt, verlängert oder neu ausgeschrieben.',
          steps: ['Kontrakt im ERP angelegt', 'Katalog freigeschaltet', 'Vertragsänderung', 'Ablauf oder Verlängerung'],
        },
      ],
      objects: [
        { name: 'Sourcing-Projekt', text: 'Klammer um eine Beschaffungsentscheidung, mit Warengruppe, Verantwortlichen und Zeitplan.' },
        { name: 'Lieferant', text: 'Bestehender oder potenzieller Lieferant, mit Qualifizierungsstatus, Selbstauskunft und Bewertung.' },
        { name: 'RFx-Ereignis', text: 'Anfrage, Ausschreibung oder Auktion, mit Teilnehmenden, Fristen und Runden.' },
        { name: 'Angebot', text: 'Antwort eines Lieferanten auf eine Anfrage, inklusive Versionen aus den Verhandlungsrunden.' },
        { name: 'Vertrag', text: 'Vereinbarung mit Konditionen, Laufzeit, Freigaben und Status von Entwurf bis abgelaufen.' },
        { name: 'Kontrakt & Katalog', text: 'Die Abbildung des Vertrags im Einkaufssystem, aus der Bestellungen abgerufen werden.' },
      ],
      systems: [
        'Source-to-Pay-Suiten (z. B. SAP Ariba, Coupa, Jaggaer)',
        'Lieferantenmanagement und Spend-Analyse',
        'Vertragsmanagement (z. B. Icertis, DocuSign CLM)',
        'ERP-Einkauf für Kontrakte und Kataloge (z. B. SAP S/4HANA MM, Microsoft Dynamics 365)',
      ],
      kpis: [
        { name: 'Sourcing Cycle Time', text: 'Zeit vom angelegten Sourcing-Projekt bis zur Vergabe.' },
        { name: 'Contract Cycle Time', text: 'Zeit von der Vergabe bis zum unterschriebenen und im System verfügbaren Vertrag.' },
        { name: 'Spend under Management', text: 'Anteil der Ausgaben, die über verhandelte Verträge laufen.' },
        { name: 'Wettbewerbsquote', text: 'Anteil der Vergaben, denen ein Wettbewerb mit mehreren Angeboten vorausging.' },
        { name: 'Auslaufende Verträge ohne Folgeprojekt', text: 'Verträge, deren Ende naht, ohne dass eine Verlängerung oder Neuausschreibung läuft.' },
      ],
      challenges: [
        {
          title: 'Der Vertrag ist unterschrieben, aber nicht nutzbar',
          text: 'Zwischen Unterschrift und Kontrakt im ERP vergeht Zeit. Bis dahin bestellen Fachbereiche weiter zu alten Konditionen oder bei anderen Lieferanten.',
        },
        {
          title: 'Ausschreibungen ohne Wettbewerb',
          text: 'Unter Zeitdruck werden Verträge direkt vergeben oder nur mit einem Angebot verhandelt – entgegen der Einkaufsrichtlinie und ohne dokumentierte Begründung.',
        },
        {
          title: 'Freigabeschleifen im Vertragsabschluss',
          text: 'Rechtsabteilung, Fachbereich und Einkauf geben nacheinander frei. Rückfragen schicken den Entwurf zurück an den Anfang, und niemand sieht, wo er gerade liegt.',
        },
        {
          title: 'Verträge laufen unbemerkt aus',
          text: 'Wenn das Vertragsende nicht rechtzeitig eine neue Beschaffung auslöst, verlängern sich Verträge automatisch oder es entsteht eine Lücke ohne gültige Konditionen.',
        },
      ],
      questions: [
        'In welcher Phase verlieren Sourcing-Projekte die meiste Zeit?',
        'Welche Vergaben kamen ohne Wettbewerb oder ohne vorgesehene Freigabe zustande?',
        'Wie lange dauert es von der Unterschrift, bis ein Vertrag im Einkaufssystem nutzbar ist?',
        'Welche Verträge gehen in der Freigabe mehrfach zurück?',
        'Welche Verträge laufen in den nächsten Monaten aus, ohne dass ein Folgeprojekt läuft?',
        'Nach welchen Verträgen wird im Purchase-to-Pay tatsächlich bestellt – und wo wird an ihnen vorbei gekauft?',
      ],
      approach: [
        'Im strategischen Einkauf hängen viele Objekte aneinander: Ein Sourcing-Projekt führt zu mehreren Ausschreibungsrunden, jede Runde zu Angeboten mehrerer Lieferanten, die Vergabe zu einem oder mehreren Verträgen, und jeder Vertrag später zu Kontrakten und Bestellungen. Ein flacher Eventlog muss eine dieser Ebenen als Fall wählen und verliert den Zusammenhang. Noreja verbindet sie im Event Knowledge Graph – bis hinein in die Bestellungen aus Purchase-to-Pay, sodass sichtbar wird, ob ein verhandelter Vertrag überhaupt genutzt wird.',
        'Einkaufsrichtlinien werden als erwartete Reihenfolge modelliert: Qualifizierung vor Einladung, Wettbewerb vor Vergabe, Freigabe vor Unterschrift, Kontrakt vor der ersten Bestellung. So werden Direktvergaben, übersprungene Freigaben und Verträge, die nie im System ankommen, als konkrete Fälle sichtbar.',
      ],
      faq: [
        {
          question: 'Was ist der Source-to-Contract-Prozess?',
          answer:
            'Source-to-Contract (S2C) ist der End-to-End-Prozess des strategischen Einkaufs, von der Bedarfs- und Spend-Analyse über Lieferantenauswahl, Ausschreibung, Verhandlung und Vergabe bis zum unterschriebenen Vertrag, aus dem im operativen Einkauf bestellt werden kann.',
        },
        {
          question: 'Was ist der Unterschied zwischen Source-to-Contract und Purchase-to-Pay?',
          answer:
            'Source-to-Contract legt fest, bei wem und zu welchen Konditionen eingekauft wird, und endet mit dem nutzbaren Vertrag. Purchase-to-Pay beginnt dort mit der Bestellanforderung und reicht bis zur Zahlung der Rechnung. Zusammen werden beide Prozesse oft als Source-to-Pay bezeichnet.',
        },
        {
          question: 'Welche KPIs sind im Source-to-Contract wichtig?',
          answer:
            'Typische Kennzahlen sind Sourcing Cycle Time, Contract Cycle Time, Spend under Management, die Wettbewerbsquote bei Vergaben und auslaufende Verträge ohne Folgeprojekt.',
        },
        {
          question: 'Kann man Process Mining im strategischen Einkauf einsetzen?',
          answer:
            'Ja. Sourcing-Projekte, Ausschreibungen, Angebote, Freigaben und Verträge hinterlassen Zeitstempel und Statuswechsel in Sourcing- und Vertragsmanagementsystemen. Process Mining zeigt daraus den tatsächlichen Ablauf, Wartezeiten in Freigaben und Abweichungen von der Einkaufsrichtlinie.',
        },
      ],
    },
    en: {
      metaTitle: 'Source-to-Contract (S2C): Process, Phases & KPIs | Noreja',
      metaDescription:
        'Source-to-contract (S2C) from demand to a usable contract: phases, business objects, KPIs such as sourcing cycle time and typical problems in strategic sourcing.',
      keywords: [
        'Source-to-Contract',
        'S2C process',
        'strategic sourcing',
        'tendering',
        'RFx',
        'procurement contract management',
        'process mining procurement',
        'Source-to-Pay',
      ],
      area: 'Procurement',
      tagline:
        'From spend analysis to a framework agreement in the purchasing system: how the source-to-contract process runs, how it is measured and where tenders and contract signature lose time.',
      teaser: 'From demand to a usable contract – tendering, supplier selection, negotiation and contract signature.',
      definition:
        'Source-to-contract (S2C) is the end-to-end process of strategic sourcing, from analysing demand and spend to a signed contract that operational purchasing can order against. It covers spend analysis and demand aggregation, the sourcing strategy, supplier search and qualification, tenders (RFI, RFP, RFQ), bid evaluation and negotiation, the award, and the creation, approval, signature and maintenance of the contract. S2C determines with which suppliers and on which terms purchase-to-pay later operates.',
      aliases: ['S2C', 'Source to Contract', 'Strategic sourcing', 'Sourcing-to-Contract'],
      scope: {
        start: 'A demand or an expiring agreement calls for a sourcing decision.',
        end: 'The contract is signed and available in the purchasing system as a source of supply for orders.',
      },
      phases: [
        {
          title: 'Demand & spend analysis',
          text: 'Spend, the needs of the business units and expiring contracts are analysed and grouped into categories.',
          steps: ['Spend analysis', 'Demand raised', 'Sourcing project created'],
        },
        {
          title: 'Strategy & supplier selection',
          text: 'A sourcing strategy is set for the category; potential suppliers are identified, assessed and qualified.',
          steps: ['Sourcing strategy defined', 'Suppliers identified', 'Supplier questionnaire requested', 'Supplier qualified'],
        },
        {
          title: 'Tender & negotiation',
          text: 'Requests are sent out, bids collected, evaluated on technical and commercial criteria and negotiated in one or more rounds.',
          steps: ['RFx published', 'Bid received', 'Bid evaluated', 'Negotiation round', 'Award decided'],
        },
        {
          title: 'Contract signature',
          text: 'The award turns into a contract that is reviewed by legal, approved internally and signed by both parties.',
          steps: ['Contract drafted', 'Legal review', 'Contract approved', 'Contract signed'],
        },
        {
          title: 'Contract deployment & maintenance',
          text: 'Terms are set up as a framework agreement, catalogue or outline agreement in the purchasing system and maintained, renewed or re-tendered until expiry.',
          steps: ['Outline agreement created in ERP', 'Catalogue activated', 'Contract amendment', 'Expiry or renewal'],
        },
      ],
      objects: [
        { name: 'Sourcing project', text: 'The umbrella for a sourcing decision, with category, owners and schedule.' },
        { name: 'Supplier', text: 'Existing or potential supplier, with qualification status, questionnaire and rating.' },
        { name: 'RFx event', text: 'Request, tender or auction, with participants, deadlines and rounds.' },
        { name: 'Bid', text: 'A supplier’s response to a request, including the versions from negotiation rounds.' },
        { name: 'Contract', text: 'Agreement with terms, duration, approvals and a status from draft to expired.' },
        { name: 'Outline agreement & catalogue', text: 'The contract as set up in the purchasing system, which orders are released against.' },
      ],
      systems: [
        'Source-to-pay suites (e.g. SAP Ariba, Coupa, Jaggaer)',
        'Supplier management and spend analytics',
        'Contract lifecycle management (e.g. Icertis, DocuSign CLM)',
        'ERP purchasing for outline agreements and catalogues (e.g. SAP S/4HANA MM, Microsoft Dynamics 365)',
      ],
      kpis: [
        { name: 'Sourcing cycle time', text: 'Time from the sourcing project being created to the award.' },
        { name: 'Contract cycle time', text: 'Time from the award to the contract being signed and available in the system.' },
        { name: 'Spend under management', text: 'Share of spend that runs through negotiated contracts.' },
        { name: 'Competitive award rate', text: 'Share of awards preceded by competition with several bids.' },
        { name: 'Expiring contracts without follow-up', text: 'Contracts nearing their end with no renewal or new tender under way.' },
      ],
      challenges: [
        {
          title: 'Signed but not usable',
          text: 'Time passes between signature and the outline agreement in the ERP. Until then, business units keep ordering on old terms or from other suppliers.',
        },
        {
          title: 'Awards without competition',
          text: 'Under time pressure, contracts are awarded directly or negotiated with a single bid – against the procurement policy and without a documented reason.',
        },
        {
          title: 'Approval loops before signature',
          text: 'Legal, the business unit and procurement approve one after another. Queries send the draft back to the start, and nobody can see where it currently sits.',
        },
        {
          title: 'Contracts expire unnoticed',
          text: 'If the end of a contract does not trigger a new sourcing event in time, contracts roll over automatically or a gap without valid terms opens up.',
        },
      ],
      questions: [
        'In which phase do sourcing projects lose the most time?',
        'Which awards were made without competition or without the required approval?',
        'How long does it take from signature until a contract can be used in the purchasing system?',
        'Which contracts are sent back repeatedly during approval?',
        'Which contracts expire in the coming months without a follow-up project?',
        'Which contracts are actually ordered against in purchase-to-pay – and where is spend going around them?',
      ],
      approach: [
        'In strategic sourcing, many objects hang together: a sourcing project leads to several tender rounds, each round to bids from several suppliers, the award to one or more contracts, and every contract later to outline agreements and purchase orders. A flat event log has to pick one of these levels as its case and loses the connection. Noreja links them in the event knowledge graph – right through to the purchase orders in purchase-to-pay, so it becomes visible whether a negotiated contract is used at all.',
        'Procurement policies are modelled as the expected order: qualification before invitation, competition before award, approval before signature, outline agreement before the first order. Direct awards, skipped approvals and contracts that never reach the system then show up as concrete cases.',
      ],
      faq: [
        {
          question: 'What is the source-to-contract process?',
          answer:
            'Source-to-contract (S2C) is the end-to-end process of strategic sourcing, from demand and spend analysis through supplier selection, tendering, negotiation and award to a signed contract that operational purchasing can order against.',
        },
        {
          question: 'What is the difference between source-to-contract and purchase-to-pay?',
          answer:
            'Source-to-contract decides from whom and on which terms a company buys, and ends with a usable contract. Purchase-to-pay starts there with the purchase requisition and runs until the invoice is paid. Together, the two processes are often called source-to-pay.',
        },
        {
          question: 'Which KPIs matter in source-to-contract?',
          answer:
            'Typical KPIs are sourcing cycle time, contract cycle time, spend under management, the competitive award rate and expiring contracts without a follow-up project.',
        },
        {
          question: 'Can process mining be used in strategic sourcing?',
          answer:
            'Yes. Sourcing projects, tenders, bids, approvals and contracts leave timestamps and status changes in sourcing and contract management systems. Process mining shows the actual flow, waiting times in approvals and deviations from the procurement policy.',
        },
      ],
    },
  },
};
