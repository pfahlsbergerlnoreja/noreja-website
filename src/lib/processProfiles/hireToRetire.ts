import type { ProcessProfile } from '../processProfiles';

export const hireToRetire: ProcessProfile = {
  id: 'hire-to-retire',
  name: 'Hire-to-Retire',
  abbreviation: 'H2R',
  dateModified: '2026-11-04',
  relatedCases: [],
  agents: ['cycle-time', 'waiting-time', 'compliance'],
  content: {
    de: {
      metaTitle: 'Hire-to-Retire (H2R): Prozess, Phasen & KPIs | Noreja',
      metaDescription:
        'Hire-to-Retire (H2R) von der Stellenplanung bis zum Austritt: Phasen, Objekte, KPIs wie Time to Hire und typische Probleme im Mitarbeiterlebenszyklus.',
      keywords: [
        'Hire-to-Retire',
        'H2R Prozess',
        'Recruit-to-Retire',
        'Mitarbeiterlebenszyklus',
        'Time to Hire',
        'Onboarding-Prozess',
        'Process Mining HR',
        'Offboarding',
      ],
      area: 'Personal & HR',
      tagline:
        'Von der geplanten Stelle bis zum letzten Arbeitstag: wie der Hire-to-Retire-Prozess abläuft, woran er gemessen wird und wo Einstellung, Lohnabrechnung und Austritt ins Stocken geraten.',
      teaser: 'Von der Stellenplanung bis zum Austritt – Recruiting, Onboarding, Abrechnung und Offboarding.',
      definition:
        'Hire-to-Retire (H2R) ist der End-to-End-Prozess des Mitarbeiterlebenszyklus, von der Planung einer Stelle bis zum Austritt oder Ruhestand. Er umfasst Personalplanung, Recruiting, Onboarding, Entwicklung und Leistungsbeurteilung, Zeitwirtschaft und Lohnabrechnung, Versetzungen und Vertragsänderungen sowie das Offboarding. Weil an fast jedem Schritt mehrere Bereiche beteiligt sind – Fachabteilung, HR, IT, Payroll –, entscheidet H2R darüber, wie schnell neue Mitarbeitende arbeitsfähig sind und wie sauber Änderungen und Austritte umgesetzt werden.',
      aliases: ['H2R', 'Hire to Retire', 'Recruit-to-Retire', 'Employee Lifecycle', 'Mitarbeiterlebenszyklus'],
      scope: {
        start: 'Eine Stelle wird geplant oder ein Personalbedarf gemeldet.',
        end: 'Der Austritt ist vollständig abgewickelt: letzte Abrechnung erstellt, Zugänge entzogen, Unterlagen archiviert.',
      },
      phases: [
        {
          title: 'Personalplanung & Bedarf',
          text: 'Aus Budget und Stellenplan entsteht eine Personalanforderung, die von Fachbereich, HR und gegebenenfalls Controlling freigegeben wird.',
          steps: ['Stelle im Stellenplan angelegt', 'Personalanforderung erstellt', 'Anforderung freigegeben'],
        },
        {
          title: 'Recruiting & Einstellung',
          text: 'Die Stelle wird ausgeschrieben, Bewerbungen werden gesichtet, Gespräche geführt und ein Angebot erstellt – bis zum unterschriebenen Arbeitsvertrag.',
          steps: ['Stelle ausgeschrieben', 'Bewerbung eingegangen', 'Interview geführt', 'Angebot versendet', 'Vertrag unterschrieben'],
        },
        {
          title: 'Onboarding',
          text: 'Vor dem ersten Arbeitstag müssen Stammdaten, Arbeitsplatz, Zugänge und Einarbeitung bereitstehen; mehrere Abteilungen arbeiten dafür parallel.',
          steps: ['Personalstammsatz angelegt', 'Hardware & Zugänge bereitgestellt', 'Erster Arbeitstag', 'Probezeitgespräch'],
        },
        {
          title: 'Entwicklung, Zeit & Abrechnung',
          text: 'Im laufenden Arbeitsverhältnis wiederholen sich Zeiterfassung, Abwesenheiten, Lohnabrechnung und Zielgespräche; dazu kommen Versetzungen, Beförderungen und Vertragsänderungen.',
          steps: ['Zeiten erfasst & genehmigt', 'Lohnabrechnung erstellt', 'Mitarbeitergespräch geführt', 'Vertragsänderung umgesetzt'],
        },
        {
          title: 'Offboarding & Austritt',
          text: 'Kündigung oder Ruhestand lösen eine Reihe von Aufgaben aus: Übergabe, Rückgabe von Ausstattung, Entzug der Zugänge, Zeugnis und Endabrechnung.',
          steps: ['Kündigung erfasst', 'Übergabe & Rückgabe', 'Zugänge entzogen', 'Endabrechnung erstellt'],
        },
      ],
      objects: [
        { name: 'Stelle', text: 'Planstelle im Organisationsmodell, mit Kostenstelle, Budget und Besetzungsstatus.' },
        { name: 'Bewerbung', text: 'Kandidatin oder Kandidat in einem Auswahlverfahren, mit Status, Interviews und Entscheidung.' },
        { name: 'Mitarbeitende', text: 'Personalstammsatz mit Vertrag, Organisationszuordnung und allen Änderungen über die Zeit.' },
        { name: 'Personalmaßnahme', text: 'Einstellung, Versetzung, Beförderung oder Austritt – jeweils mit Antrag, Freigabe und Wirksamkeitsdatum.' },
        { name: 'Zugang & Ausstattung', text: 'Benutzerkonten, Berechtigungen und Hardware, die mit Ein- und Austritt bereitgestellt oder entzogen werden.' },
        { name: 'Lohnabrechnung', text: 'Abrechnungslauf pro Periode, inklusive Korrekturen und Rückrechnungen.' },
      ],
      systems: [
        'HR-Kernsysteme (z. B. SAP SuccessFactors, Workday, SAP HCM)',
        'Bewerbermanagement (z. B. Personio, Greenhouse, SAP SuccessFactors Recruiting)',
        'Zeitwirtschaft und Lohnabrechnung (z. B. DATEV, ADP)',
        'IT-Service-Management und Identity Management (z. B. ServiceNow, Microsoft Entra ID)',
      ],
      kpis: [
        { name: 'Time to Hire', text: 'Zeit von der freigegebenen Personalanforderung bis zum unterschriebenen Vertrag.' },
        { name: 'Time to Productivity', text: 'Zeit vom ersten Arbeitstag, bis Zugänge, Ausstattung und Einarbeitung vollständig sind.' },
        { name: 'Onboarding-Vollständigkeit am ersten Tag', text: 'Anteil der Eintritte, bei denen Arbeitsplatz und Zugänge zum Start bereitstehen.' },
        { name: 'Korrekturen in der Lohnabrechnung', text: 'Rückrechnungen und manuelle Korrekturen, etwa durch verspätete Personalmaßnahmen.' },
        { name: 'Frühfluktuation', text: 'Austritte innerhalb der Probezeit oder des ersten Jahres.' },
        { name: 'Zugangsentzug bei Austritt', text: 'Zeit zwischen letztem Arbeitstag und vollständig entzogenen Berechtigungen.' },
      ],
      challenges: [
        {
          title: 'Der erste Arbeitstag ohne Laptop',
          text: 'HR, IT und Fachbereich arbeiten parallel, aber ohne gemeinsamen Zeitplan. Ob ein Eintritt rechtzeitig vorbereitet ist, zeigt sich oft erst am ersten Tag.',
        },
        {
          title: 'Freigabeschleifen im Recruiting',
          text: 'Personalanforderungen und Angebote durchlaufen mehrere Freigaben. Jede Rückfrage verlängert die Besetzung – und gute Kandidatinnen und Kandidaten springen ab.',
        },
        {
          title: 'Späte Personalmaßnahmen in der Abrechnung',
          text: 'Versetzungen, Gehaltsänderungen oder Austritte werden nach dem Abrechnungsstichtag erfasst und erzwingen Rückrechnungen in der folgenden Periode.',
        },
        {
          title: 'Offene Zugänge nach dem Austritt',
          text: 'Wenn das Offboarding nicht an die IT übergeben wird, bleiben Konten und Berechtigungen bestehen – ein Risiko für Datenschutz und Informationssicherheit.',
        },
      ],
      questions: [
        'In welchem Schritt verliert das Recruiting die meiste Zeit?',
        'Welche Freigaben verzögern Personalanforderungen und Angebote am stärksten?',
        'Bei welchen Eintritten fehlen Zugänge oder Ausstattung am ersten Arbeitstag?',
        'Welche Personalmaßnahmen lösen regelmäßig Korrekturen in der Lohnabrechnung aus?',
        'Wo bleiben Berechtigungen nach dem Austritt bestehen?',
        'Unterscheidet sich der Onboarding-Ablauf zwischen Standorten oder Gesellschaften?',
      ],
      approach: [
        'Der Mitarbeiterlebenszyklus verteilt sich auf viele Objekte und Systeme: Eine Stelle führt zu mehreren Bewerbungen, eine Einstellung zu einem Personalstammsatz, der wiederum IT-Tickets, Berechtigungen und Abrechnungsläufe nach sich zieht. Ein flacher Eventlog muss sich für einen Fall entscheiden und verliert die übrigen. Noreja verbindet diese Objekte im Event Knowledge Graph, sodass etwa ein verspäteter Laptop auf die Personalmaßnahme zurückgeführt werden kann, die ihn ausgelöst hat.',
        'Onboarding und Offboarding werden als erwartete Reihenfolge modelliert: Zugänge vor dem ersten Arbeitstag, Entzug der Berechtigungen spätestens am letzten. So wird sichtbar, welcher Schritt fehlt, zu spät kommt oder doppelt angestoßen wurde – auch wenn er in einem anderen System liegt als die Personalmaßnahme selbst.',
      ],
      faq: [
        {
          question: 'Was ist der Hire-to-Retire-Prozess?',
          answer:
            'Hire-to-Retire (H2R) ist der End-to-End-Prozess des Mitarbeiterlebenszyklus, von der Planung einer Stelle über Recruiting, Onboarding, Entwicklung, Zeitwirtschaft und Lohnabrechnung bis zum Austritt oder Ruhestand.',
        },
        {
          question: 'Was ist der Unterschied zwischen Hire-to-Retire und Recruit-to-Retire?',
          answer:
            'Beide Begriffe meinen in der Regel denselben Prozess. Recruit-to-Retire betont stärker, dass der Prozess bereits mit der Personalplanung und dem Recruiting beginnt und nicht erst mit der Einstellung.',
        },
        {
          question: 'Welche KPIs sind im Hire-to-Retire wichtig?',
          answer:
            'Typische Kennzahlen sind Time to Hire, Time to Productivity, die Vollständigkeit des Onboardings am ersten Tag, Korrekturen in der Lohnabrechnung, Frühfluktuation und die Zeit bis zum Entzug der Zugänge nach dem Austritt.',
        },
        {
          question: 'Kann man Process Mining im Personalwesen einsetzen?',
          answer:
            'Ja. Personalanforderungen, Bewerbungen, Personalmaßnahmen, IT-Tickets und Abrechnungsläufe hinterlassen Zeitstempel und Statuswechsel in HR- und IT-Systemen. Process Mining zeigt daraus den tatsächlichen Ablauf, Wartezeiten zwischen Abteilungen und Abweichungen vom vorgesehenen Ablauf. Personenbezogene Daten lassen sich dafür pseudonymisieren.',
        },
      ],
    },
    en: {
      metaTitle: 'Hire-to-Retire (H2R): Process, Phases & KPIs | Noreja',
      metaDescription:
        'Hire-to-retire (H2R) from workforce planning to offboarding: phases, business objects, KPIs such as time to hire and typical problems in the employee lifecycle.',
      keywords: [
        'Hire-to-Retire',
        'H2R process',
        'Recruit-to-Retire',
        'employee lifecycle',
        'time to hire',
        'onboarding process',
        'process mining HR',
        'offboarding',
      ],
      area: 'People & HR',
      tagline:
        'From a planned position to the last working day: how the hire-to-retire process runs, how it is measured and where hiring, payroll and offboarding stall.',
      teaser: 'From workforce planning to leaving – recruiting, onboarding, payroll and offboarding.',
      definition:
        'Hire-to-retire (H2R) is the end-to-end process of the employee lifecycle, from planning a position to an employee leaving or retiring. It covers workforce planning, recruiting, onboarding, development and performance management, time management and payroll, transfers and contract changes, and offboarding. Because almost every step involves several functions – the hiring department, HR, IT and payroll – H2R decides how quickly new employees can actually work and how cleanly changes and departures are carried out.',
      aliases: ['H2R', 'Hire to Retire', 'Recruit-to-Retire', 'Employee lifecycle'],
      scope: {
        start: 'A position is planned or a staffing need is raised.',
        end: 'The departure is fully processed: final payroll run, access revoked, records archived.',
      },
      phases: [
        {
          title: 'Workforce planning & demand',
          text: 'Budget and the headcount plan turn into a job requisition that is approved by the department, HR and, where required, controlling.',
          steps: ['Position created in headcount plan', 'Job requisition raised', 'Requisition approved'],
        },
        {
          title: 'Recruiting & hiring',
          text: 'The position is advertised, applications are screened, interviews held and an offer made – up to the signed employment contract.',
          steps: ['Job posted', 'Application received', 'Interview held', 'Offer sent', 'Contract signed'],
        },
        {
          title: 'Onboarding',
          text: 'Before the first working day, master data, workplace, access and induction have to be ready; several departments work on this in parallel.',
          steps: ['Employee record created', 'Hardware & access provided', 'First working day', 'Probation review'],
        },
        {
          title: 'Development, time & payroll',
          text: 'During employment, time recording, absences, payroll and performance reviews recur; transfers, promotions and contract changes come on top.',
          steps: ['Time recorded & approved', 'Payroll run', 'Performance review held', 'Contract change applied'],
        },
        {
          title: 'Offboarding & leaving',
          text: 'A resignation or retirement triggers a set of tasks: handover, return of equipment, revoking access, reference letter and final payroll.',
          steps: ['Resignation recorded', 'Handover & equipment return', 'Access revoked', 'Final payroll run'],
        },
      ],
      objects: [
        { name: 'Position', text: 'Planned position in the organisational model, with cost centre, budget and staffing status.' },
        { name: 'Application', text: 'A candidate in a selection process, with status, interviews and decision.' },
        { name: 'Employee', text: 'Employee record with contract, organisational assignment and every change over time.' },
        { name: 'Personnel action', text: 'Hire, transfer, promotion or termination – each with a request, an approval and an effective date.' },
        { name: 'Access & equipment', text: 'User accounts, permissions and hardware that are provided or withdrawn on joining and leaving.' },
        { name: 'Payroll run', text: 'Payroll per period, including corrections and retroactive recalculations.' },
      ],
      systems: [
        'Core HR systems (e.g. SAP SuccessFactors, Workday, SAP HCM)',
        'Applicant tracking (e.g. Greenhouse, Personio, SAP SuccessFactors Recruiting)',
        'Time management and payroll (e.g. ADP, DATEV)',
        'IT service management and identity management (e.g. ServiceNow, Microsoft Entra ID)',
      ],
      kpis: [
        { name: 'Time to hire', text: 'Time from the approved job requisition to the signed contract.' },
        { name: 'Time to productivity', text: 'Time from the first working day until access, equipment and induction are complete.' },
        { name: 'Day-one readiness', text: 'Share of new joiners whose workplace and access are ready on their start date.' },
        { name: 'Payroll corrections', text: 'Retroactive recalculations and manual corrections, for example caused by late personnel actions.' },
        { name: 'Early attrition', text: 'Leavers within the probation period or the first year.' },
        { name: 'Access revocation on leaving', text: 'Time between the last working day and all permissions being withdrawn.' },
      ],
      challenges: [
        {
          title: 'The first day without a laptop',
          text: 'HR, IT and the department work in parallel but without a shared schedule. Whether a new joiner is properly prepared often only becomes clear on day one.',
        },
        {
          title: 'Approval loops in recruiting',
          text: 'Job requisitions and offers pass through several approvals. Every query lengthens time to fill – and strong candidates drop out.',
        },
        {
          title: 'Late personnel actions in payroll',
          text: 'Transfers, salary changes or terminations are recorded after the payroll cut-off and force retroactive recalculations in the following period.',
        },
        {
          title: 'Open access after leaving',
          text: 'If offboarding is not handed over to IT, accounts and permissions remain active – a risk for data protection and information security.',
        },
      ],
      questions: [
        'In which step does recruiting lose the most time?',
        'Which approvals delay job requisitions and offers the most?',
        'Which new joiners lack access or equipment on their first day?',
        'Which personnel actions regularly cause payroll corrections?',
        'Where do permissions remain active after an employee has left?',
        'Does the onboarding flow differ between sites or legal entities?',
      ],
      approach: [
        'The employee lifecycle is spread across many objects and systems: one position leads to several applications, a hire to an employee record, which in turn triggers IT tickets, permissions and payroll runs. A flat event log has to pick one case notion and loses the rest. Noreja connects these objects in the event knowledge graph, so that a late laptop, for example, can be traced back to the personnel action that triggered it.',
        'Onboarding and offboarding are modelled as the expected order: access before the first working day, permissions withdrawn by the last one at the latest. This shows which step is missing, comes too late or was triggered twice – even when it lives in a different system from the personnel action itself.',
      ],
      faq: [
        {
          question: 'What is the hire-to-retire process?',
          answer:
            'Hire-to-retire (H2R) is the end-to-end process of the employee lifecycle, from planning a position through recruiting, onboarding, development, time management and payroll to an employee leaving or retiring.',
        },
        {
          question: 'What is the difference between hire-to-retire and recruit-to-retire?',
          answer:
            'Both terms usually describe the same process. Recruit-to-retire puts more emphasis on the fact that the process already starts with workforce planning and recruiting, not only with the hire.',
        },
        {
          question: 'Which KPIs matter in hire-to-retire?',
          answer:
            'Typical KPIs are time to hire, time to productivity, day-one readiness, payroll corrections, early attrition and the time it takes to revoke access after an employee leaves.',
        },
        {
          question: 'Can process mining be used in HR?',
          answer:
            'Yes. Job requisitions, applications, personnel actions, IT tickets and payroll runs leave timestamps and status changes in HR and IT systems. Process mining shows the actual flow, waiting times between departments and deviations from the intended sequence. Personal data can be pseudonymised for the analysis.',
        },
      ],
    },
  },
};
