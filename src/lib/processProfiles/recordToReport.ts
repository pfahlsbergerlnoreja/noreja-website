import type { ProcessProfile } from '../processProfiles';

export const recordToReport: ProcessProfile = {
  id: 'record-to-report',
  name: 'Record-to-Report',
  abbreviation: 'R2R',
  dateModified: '2026-11-04',
  relatedCases: ['order-to-cash', 'purchase-to-pay', 'premium-to-tax'],
  agents: ['cycle-time', 'compliance', 'rework'],
  content: {
    de: {
      metaTitle: 'Record-to-Report (R2R): Prozess, Phasen & KPIs | Noreja',
      metaDescription:
        'Record-to-Report (R2R) von der Buchung bis zum Abschlussbericht: Phasen, Geschäftsobjekte, KPIs wie Days to Close und typische Probleme im Monatsabschluss.',
      keywords: [
        'Record-to-Report',
        'R2R Prozess',
        'Monatsabschluss',
        'Fast Close',
        'Days to Close',
        'Process Mining Finanzen',
        'Abschlussprozess',
        'Intercompany-Abstimmung',
      ],
      area: 'Finanzen & Controlling',
      tagline:
        'Von der einzelnen Buchung bis zum Abschlussbericht: wie der Record-to-Report-Prozess abläuft, woran er gemessen wird und wo Monats- und Jahresabschlüsse Zeit verlieren.',
      teaser: 'Von der Buchung bis zum Abschlussbericht – Monatsabschluss, Abstimmungen und Reporting.',
      definition:
        'Record-to-Report (R2R) ist der End-to-End-Prozess vom Erfassen eines Geschäftsvorfalls im Hauptbuch bis zum fertigen Finanzbericht. Er umfasst Stammdaten und Kontenplan, die laufende Buchung, Abstimmungen zwischen Haupt- und Nebenbüchern, den Perioden- und Jahresabschluss sowie Konsolidierung und Reporting. Weil fast jeder andere Prozess – Order-to-Cash, Purchase-to-Pay, Hire-to-Retire – am Ende im Hauptbuch landet, entscheidet R2R darüber, wie schnell und verlässlich ein Unternehmen seine Zahlen kennt.',
      aliases: ['R2R', 'Record to Report', 'Account-to-Report', 'Financial Close', 'Abschlussprozess'],
      scope: {
        start: 'Ein Geschäftsvorfall wird im Hauptbuch oder einem Nebenbuch erfasst.',
        end: 'Der geprüfte Abschluss ist berichtet und die Periode geschlossen.',
      },
      phases: [
        {
          title: 'Stammdaten & Buchungslogik',
          text: 'Kontenplan, Kostenstellen, Gesellschaften und Buchungsregeln legen fest, wie Vorfälle aus den operativen Prozessen im Hauptbuch ankommen.',
          steps: ['Kontenplan gepflegt', 'Kostenstelle angelegt', 'Buchungsregel definiert'],
        },
        {
          title: 'Laufende Buchung',
          text: 'Nebenbücher für Debitoren, Kreditoren und Anlagen übergeben ihre Buchungen, dazu kommen manuelle Journale, Abgrenzungen und Umbuchungen.',
          steps: ['Nebenbuch-Buchung übernommen', 'Manuelles Journal erstellt', 'Journal freigegeben', 'Abgrenzung gebucht'],
        },
        {
          title: 'Abstimmung',
          text: 'Konten, Bankbestände, Nebenbücher und Intercompany-Salden werden abgestimmt; Differenzen werden geklärt und korrigiert.',
          steps: ['Kontenabstimmung gestartet', 'Differenz festgestellt', 'Korrekturbuchung', 'Abstimmung abgezeichnet'],
        },
        {
          title: 'Periodenabschluss',
          text: 'Nach einem Abschlusskalender laufen Abschlussaufgaben in fester Reihenfolge: Bewertung, Abschreibung, Umlagen, Intercompany-Abgleich und das Sperren der Periode.',
          steps: ['Abschlussaufgabe gestartet', 'Bewertung & Abschreibung', 'Umlage gebucht', 'Intercompany abgeglichen', 'Periode gesperrt'],
        },
        {
          title: 'Konsolidierung & Reporting',
          text: 'Die Einzelabschlüsse werden konsolidiert, geprüft und für Management, Aufsicht und Kapitalmarkt berichtet.',
          steps: ['Konsolidierung', 'Review & Freigabe', 'Bericht veröffentlicht'],
        },
      ],
      objects: [
        { name: 'Buchungsbeleg', text: 'Jeder Vorfall im Hauptbuch, mit Erfasser, Zeitpunkt, Konto und Herkunft aus dem Vorprozess.' },
        { name: 'Manuelles Journal', text: 'Buchungen ohne operativen Vorprozess – ein häufiger Ort für Korrekturen und Kontrollen.' },
        { name: 'Abstimmung', text: 'Abgleich eines Kontos mit Nebenbuch, Bank oder Gegengesellschaft, inklusive Differenzen.' },
        { name: 'Abschlussaufgabe', text: 'Eine Aufgabe im Abschlusskalender mit Verantwortlichem, Soll-Termin und Abhängigkeiten.' },
        { name: 'Intercompany-Saldo', text: 'Forderungen und Verbindlichkeiten zwischen Gesellschaften, die sich decken müssen.' },
        { name: 'Periode', text: 'Buchungsperiode mit Status offen, im Abschluss oder gesperrt.' },
      ],
      systems: ['ERP-Hauptbuch (z. B. SAP S/4HANA FI/CO, Microsoft Dynamics 365 Finance)', 'Close-Management-Tools', 'Konsolidierungssoftware', 'Bank- und Zahlungsdaten'],
      kpis: [
        { name: 'Days to Close', text: 'Arbeitstage vom Periodenende bis zum fertigen Abschluss.' },
        { name: 'Anteil manueller Journale', text: 'Wie viele Buchungen ohne operativen Vorprozess entstehen.' },
        { name: 'Korrekturbuchungen nach Abschluss', text: 'Buchungen, die eine bereits abgeschlossene Periode nachträglich ändern.' },
        { name: 'Termintreue der Abschlussaufgaben', text: 'Anteil der Aufgaben, die zum Soll-Termin im Abschlusskalender erledigt sind.' },
        { name: 'Offene Intercompany-Differenzen', text: 'Anzahl und Alter ungeklärter Differenzen zwischen Gesellschaften.' },
      ],
      challenges: [
        {
          title: 'Der Abschluss wartet auf die Vorprozesse',
          text: 'Späte Rechnungen aus Purchase-to-Pay oder offene Lieferungen aus Order-to-Cash verschieben Abgrenzungen und Abstimmungen – das Problem entsteht außerhalb der Buchhaltung.',
        },
        {
          title: 'Manuelle Journale als Dauerlösung',
          text: 'Wiederkehrende Korrekturen per Hand verdecken fehlerhafte Buchungsregeln oder Schnittstellen und binden jeden Monat Kapazität.',
        },
        {
          title: 'Abhängigkeiten im Abschlusskalender',
          text: 'Eine verspätete Aufgabe blockiert alle nachfolgenden. Welche Aufgabe den kritischen Pfad bestimmt, zeigt die Checkliste allein nicht.',
        },
        {
          title: 'Kontrollen ohne Nachweis',
          text: 'Vier-Augen-Prinzip und Freigabegrenzen für Journale sind definiert, aber nicht in jedem Fall nachvollziehbar eingehalten.',
        },
      ],
      questions: [
        'Welche Abschlussaufgaben liegen regelmäßig auf dem kritischen Pfad?',
        'Aus welchen Vorprozessen stammen die meisten Korrekturbuchungen?',
        'Welche manuellen Journale wiederholen sich jeden Monat?',
        'Wo werden Journale ohne vorgesehene Freigabe gebucht?',
        'Welche Gesellschaften verursachen die meisten Intercompany-Differenzen?',
        'Wie stark verschieben späte Rechnungseingänge den Abschluss?',
      ],
      approach: [
        'Im Hauptbuch sieht man das Ergebnis, nicht den Weg dorthin. Eine Korrekturbuchung hat ihre Ursache oft in einer Bestellung, einer Lieferung oder einer Stammdatenänderung Wochen vorher. Noreja verbindet Buchungsbelege im Event Knowledge Graph mit den Objekten der Vorprozesse, statt den Abschluss als isolierten Eventlog zu betrachten.',
        'Der Abschlusskalender wird als erwartete Reihenfolge modelliert. So wird sichtbar, welche Aufgabe übersprungen, zu spät begonnen oder wiederholt wurde – und welche Verzögerung sich bis zum Bericht durchzieht.',
      ],
      faq: [
        {
          question: 'Was ist der Record-to-Report-Prozess?',
          answer:
            'Record-to-Report (R2R) ist der End-to-End-Prozess vom Erfassen eines Geschäftsvorfalls im Hauptbuch bis zum fertigen Finanzbericht. Er umfasst Buchung, Abstimmung, Perioden- und Jahresabschluss sowie Konsolidierung und Reporting.',
        },
        {
          question: 'Was ist der Unterschied zwischen Record-to-Report und Order-to-Cash?',
          answer:
            'Order-to-Cash beschreibt den operativen Weg vom Kundenauftrag bis zum Zahlungseingang. Record-to-Report beginnt dort, wo dieser und andere Prozesse ins Hauptbuch buchen, und endet mit dem Abschlussbericht.',
        },
        {
          question: 'Welche KPIs sind im Record-to-Report wichtig?',
          answer:
            'Typische Kennzahlen sind Days to Close, der Anteil manueller Journale, Korrekturbuchungen nach Abschluss, die Termintreue der Abschlussaufgaben und offene Intercompany-Differenzen.',
        },
        {
          question: 'Kann man Process Mining im Finanzabschluss einsetzen?',
          answer:
            'Ja. Buchungsbelege, Journale, Abstimmungen und Abschlussaufgaben hinterlassen Zeitstempel und Verantwortliche im ERP und in Close-Management-Tools. Process Mining zeigt daraus den tatsächlichen Ablauf des Abschlusses, Wartezeiten zwischen Aufgaben und Kontrollabweichungen.',
        },
      ],
    },
    en: {
      metaTitle: 'Record-to-Report (R2R): Process, Phases & KPIs | Noreja',
      metaDescription:
        'Record-to-report (R2R) from journal entry to financial report: phases, business objects, KPIs such as days to close and typical problems in the month-end close.',
      keywords: [
        'Record-to-Report',
        'R2R process',
        'month-end close',
        'fast close',
        'days to close',
        'process mining finance',
        'financial close process',
        'intercompany reconciliation',
      ],
      area: 'Finance & controlling',
      tagline:
        'From a single journal entry to the financial report: how the record-to-report process runs, how it is measured and where month-end and year-end closes lose time.',
      teaser: 'From journal entry to financial report – month-end close, reconciliations and reporting.',
      definition:
        'Record-to-report (R2R) is the end-to-end process from recording a business transaction in the general ledger to the finished financial report. It covers master data and the chart of accounts, ongoing posting, reconciliations between general ledger and subledgers, the period-end and year-end close, and consolidation and reporting. Because almost every other process – order-to-cash, purchase-to-pay, hire-to-retire – ends up in the general ledger, R2R decides how quickly and reliably a company knows its numbers.',
      aliases: ['R2R', 'Record to Report', 'Account-to-Report', 'Financial close'],
      scope: {
        start: 'A business transaction is recorded in the general ledger or a subledger.',
        end: 'The audited close is reported and the period is locked.',
      },
      phases: [
        {
          title: 'Master data & posting logic',
          text: 'Chart of accounts, cost centres, legal entities and posting rules define how transactions from the operational processes arrive in the general ledger.',
          steps: ['Chart of accounts maintained', 'Cost centre created', 'Posting rule defined'],
        },
        {
          title: 'Ongoing posting',
          text: 'Subledgers for receivables, payables and assets hand over their postings, complemented by manual journals, accruals and reclassifications.',
          steps: ['Subledger posting transferred', 'Manual journal created', 'Journal approved', 'Accrual posted'],
        },
        {
          title: 'Reconciliation',
          text: 'Accounts, bank balances, subledgers and intercompany balances are reconciled; differences are clarified and corrected.',
          steps: ['Account reconciliation started', 'Difference identified', 'Correcting entry', 'Reconciliation signed off'],
        },
        {
          title: 'Period-end close',
          text: 'Close tasks run in a fixed order according to a close calendar: valuation, depreciation, allocations, intercompany matching and locking the period.',
          steps: ['Close task started', 'Valuation & depreciation', 'Allocation posted', 'Intercompany matched', 'Period locked'],
        },
        {
          title: 'Consolidation & reporting',
          text: 'The individual financial statements are consolidated, reviewed and reported to management, supervisors and the capital market.',
          steps: ['Consolidation', 'Review & approval', 'Report published'],
        },
      ],
      objects: [
        { name: 'Journal entry', text: 'Every transaction in the general ledger, with author, time, account and origin in the upstream process.' },
        { name: 'Manual journal', text: 'Postings without an operational upstream process – a frequent place for corrections and controls.' },
        { name: 'Reconciliation', text: 'Matching an account against a subledger, bank or counterparty entity, including differences.' },
        { name: 'Close task', text: 'A task in the close calendar with an owner, a due date and dependencies.' },
        { name: 'Intercompany balance', text: 'Receivables and payables between entities that have to match.' },
        { name: 'Period', text: 'Posting period with the status open, in close or locked.' },
      ],
      systems: ['ERP general ledger (e.g. SAP S/4HANA FI/CO, Microsoft Dynamics 365 Finance)', 'Close management tools', 'Consolidation software', 'Bank and payment data'],
      kpis: [
        { name: 'Days to close', text: 'Working days from period end to the finished close.' },
        { name: 'Share of manual journals', text: 'How many postings arise without an operational upstream process.' },
        { name: 'Post-close adjustments', text: 'Postings that change a period after it has been closed.' },
        { name: 'On-time close tasks', text: 'Share of tasks completed by their due date in the close calendar.' },
        { name: 'Open intercompany differences', text: 'Number and age of unresolved differences between entities.' },
      ],
      challenges: [
        {
          title: 'The close waits for upstream processes',
          text: 'Late invoices from purchase-to-pay or open deliveries from order-to-cash delay accruals and reconciliations – the problem arises outside accounting.',
        },
        {
          title: 'Manual journals as a permanent fix',
          text: 'Recurring manual corrections hide faulty posting rules or interfaces and tie up capacity every month.',
        },
        {
          title: 'Dependencies in the close calendar',
          text: 'One late task blocks all that follow. The checklist alone does not show which task determines the critical path.',
        },
        {
          title: 'Controls without evidence',
          text: 'Four-eyes principle and approval limits for journals are defined but not traceably met in every case.',
        },
      ],
      questions: [
        'Which close tasks are regularly on the critical path?',
        'Which upstream processes cause most correcting entries?',
        'Which manual journals recur every month?',
        'Where are journals posted without the required approval?',
        'Which entities cause most intercompany differences?',
        'How much do late incoming invoices delay the close?',
      ],
      approach: [
        'The general ledger shows the result, not the way there. A correcting entry often has its cause in a purchase order, a delivery or a master data change weeks earlier. Noreja connects journal entries with the objects of the upstream processes in the event knowledge graph instead of treating the close as an isolated event log.',
        'The close calendar is modelled as the expected order. This shows which task was skipped, started late or repeated – and which delay carries through to the report.',
      ],
      faq: [
        {
          question: 'What is the record-to-report process?',
          answer:
            'Record-to-report (R2R) is the end-to-end process from recording a business transaction in the general ledger to the finished financial report. It covers posting, reconciliation, the period-end and year-end close, and consolidation and reporting.',
        },
        {
          question: 'What is the difference between record-to-report and order-to-cash?',
          answer:
            'Order-to-cash describes the operational path from customer order to incoming payment. Record-to-report starts where this and other processes post to the general ledger and ends with the financial report.',
        },
        {
          question: 'Which KPIs matter in record-to-report?',
          answer:
            'Typical KPIs are days to close, the share of manual journals, post-close adjustments, on-time completion of close tasks and open intercompany differences.',
        },
        {
          question: 'Can process mining be used in the financial close?',
          answer:
            'Yes. Journal entries, manual journals, reconciliations and close tasks leave timestamps and owners in the ERP and in close management tools. Process mining shows the actual flow of the close, waiting times between tasks and control deviations.',
        },
      ],
    },
  },
};
