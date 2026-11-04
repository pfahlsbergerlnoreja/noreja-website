import type { ProcessProfile } from '../processProfiles';

export const projectToProfit: ProcessProfile = {
  id: 'project-to-profit',
  name: 'Project-to-Profit',
  abbreviation: 'PtP',
  dateModified: '2026-11-04',
  relatedCases: ['plan-to-produce', 'order-to-cash', 'lead-to-activation'],
  agents: ['rework', 'working-capital', 'root-cause'],
  content: {
    de: {
      metaTitle: 'Project-to-Profit (PtP): Prozess, Phasen & KPIs | Noreja',
      metaDescription:
        'Project-to-Profit (PtP) im Projektgeschäft vom Auftrag bis zur Nachkalkulation: Phasen, PSP-Elemente, KPIs wie Projektmarge und typische Probleme in der Abrechnung.',
      keywords: [
        'Project-to-Profit',
        'PtP Prozess',
        'Projektgeschäft',
        'Projektcontrolling',
        'Nachkalkulation',
        'Meilensteinfakturierung',
        'Process Mining Projekte',
        'Nachtragsmanagement',
      ],
      area: 'Projektgeschäft',
      tagline:
        'Vom Auftrag bis zur Nachkalkulation: wie der Project-to-Profit-Prozess im Anlagenbau, Engineering und in der Beratung abläuft, woran er gemessen wird und wo Projekte ihre Marge verlieren.',
      teaser: 'Vom Projektauftrag bis zur Nachkalkulation – Projektstruktur, Ressourcen, Rückmeldungen und Abrechnung.',
      definition:
        'Project-to-Profit (PtP) ist der End-to-End-Prozess im Projektgeschäft vom Projektauftrag bis zur abgeschlossenen Nachkalkulation. Er umfasst die Projektinitiierung aus einem Auftrag oder einer Opportunity, den Aufbau von Projektstrukturplan und Budget, die Ressourcen- und Personalplanung, die Ausführung mit Zeit-, Spesen- und Materialrückmeldungen, die Abrechnung nach Meilensteinen oder Leistungsfortschritt, das Management von Änderungen und Nachträgen sowie den Projektabschluss. Weil Kosten, Leistung und Erlös über Monate auseinanderlaufen können, entscheidet PtP darüber, ob ein Projekt am Ende den kalkulierten Ergebnisbeitrag liefert.',
      aliases: ['PtP', 'Project to Profit', 'Project-to-Cash', 'Opportunity-to-Project', 'Projektabwicklung', 'Projektcontrolling'],
      scope: {
        start: 'Ein Kundenauftrag oder eine gewonnene Opportunity löst ein Projekt aus.',
        end: 'Das Projekt ist schlussgerechnet, nachkalkuliert und technisch abgeschlossen.',
      },
      phases: [
        {
          title: 'Projektinitiierung & Struktur',
          text: 'Aus Auftrag oder Opportunity entsteht ein Projekt mit Projektstrukturplan (PSP), Budget, Abrechnungsart und Verantwortlichen. Die Struktur legt fest, auf welche Elemente später Kosten und Erlöse laufen.',
          steps: ['Projekt angelegt', 'PSP-Elemente strukturiert', 'Budget freigegeben', 'Abrechnungsplan hinterlegt'],
        },
        {
          title: 'Ressourcenplanung & Besetzung',
          text: 'Arbeitspakete werden terminiert, Rollen und Personen eingeplant, Fremdleistungen und Material disponiert. Engpässe bei Schlüsselpersonen werden früh sichtbar – oder eben nicht.',
          steps: ['Arbeitspaket terminiert', 'Ressource angefragt', 'Ressource zugeordnet', 'Fremdleistung bestellt'],
        },
        {
          title: 'Ausführung & Rückmeldung',
          text: 'Das Projektteam erfasst Zeiten, Spesen und Materialverbrauch auf die PSP-Elemente. Leistungsfortschritt und Restaufwand werden regelmäßig geschätzt und gegen Plan und Budget gestellt.',
          steps: ['Zeit zurückgemeldet', 'Spesen erfasst', 'Material entnommen', 'Fortschritt bewertet', 'Restaufwand geschätzt'],
        },
        {
          title: 'Änderungen & Abrechnung',
          text: 'Änderungswünsche und Nachträge werden bewertet, beauftragt oder abgelehnt. Meilenstein- oder Fortschrittsrechnungen gehen an den Kunden, Anzahlungen werden verrechnet.',
          steps: ['Änderungsantrag erfasst', 'Nachtrag beauftragt', 'Meilenstein erreicht', 'Rechnung gestellt'],
        },
        {
          title: 'Projektabschluss & Nachkalkulation',
          text: 'Nach Abnahme folgen Schlussrechnung, Abgrenzung offener Kosten und die Nachkalkulation, die Ist-Kosten und Erlöse der ursprünglichen Kalkulation gegenüberstellt.',
          steps: ['Abnahme erteilt', 'Schlussrechnung gestellt', 'Nachkalkulation erstellt', 'Projekt abgeschlossen'],
        },
      ],
      objects: [
        { name: 'Projekt', text: 'Der Rahmen mit Kunde, Projektleitung, Vertragsart, Budget und Status von angelegt bis abgeschlossen.' },
        { name: 'PSP-Element', text: 'Ein Knoten im Projektstrukturplan, auf den Kosten, Leistungen und Erlöse gebucht werden.' },
        { name: 'Ressourcenzuordnung', text: 'Die Einplanung einer Person oder Rolle auf ein Arbeitspaket, mit Zeitraum und geplantem Aufwand.' },
        { name: 'Zeit- und Kostenrückmeldung', text: 'Erfasste Stunden, Spesen und Materialentnahmen, mit Erfasser, Datum und Kontierung.' },
        { name: 'Änderungsantrag / Nachtrag', text: 'Eine Änderung am Leistungsumfang mit Bewertung, Entscheidung und Auswirkung auf Budget und Erlös.' },
        { name: 'Meilenstein & Projektrechnung', text: 'Abrechnungsrelevanter Termin und die daraus erstellte Rechnung an den Kunden.' },
      ],
      systems: ['ERP-Projektsystem (z. B. SAP PS, SAP S/4HANA Projektabwicklung, Microsoft Dynamics 365 Project Operations)', 'Projektplanung und Terminierung (z. B. Oracle Primavera, Microsoft Project)', 'Professional-Services-Automation und Zeiterfassung', 'CRM für Opportunities und Angebote'],
      kpis: [
        { name: 'Projektmarge', text: 'Ergebnisbeitrag des Projekts in der Nachkalkulation im Vergleich zur Angebotskalkulation.' },
        { name: 'Budgetabweichung', text: 'Differenz zwischen Ist-Kosten, Restaufwand und freigegebenem Budget je PSP-Element.' },
        { name: 'Auslastung', text: 'Anteil abrechenbarer Stunden an der verfügbaren Kapazität der eingeplanten Personen.' },
        { name: 'Unfakturierte Leistung', text: 'Erbrachte, aber noch nicht abgerechnete Leistung – gebundenes Kapital im Projekt.' },
        { name: 'Termintreue der Meilensteine', text: 'Anteil der Meilensteine, die zum vereinbarten Termin erreicht und abgerechnet sind.' },
        { name: 'Nachtragsquote', text: 'Anteil der Leistungsänderungen, die als Nachtrag beauftragt und berechnet werden.' },
      ],
      challenges: [
        {
          title: 'Mehraufwand ohne Nachtrag',
          text: 'Zusätzliche Leistungen werden erbracht, aber nicht als Änderung erfasst oder berechnet. In der Nachkalkulation erscheinen sie nur noch als Budgetüberschreitung.',
        },
        {
          title: 'Rückmeldungen kommen zu spät',
          text: 'Zeiten und Kosten werden gesammelt nachgetragen. Bis die Überschreitung im Projektbericht sichtbar ist, ist ein großer Teil des Budgets bereits verbraucht.',
        },
        {
          title: 'Leistung erbracht, Rechnung offen',
          text: 'Meilensteine sind fachlich erreicht, die Abnahme oder Rechnung verzögert sich. Unfakturierte Leistung bindet Liquidität und verschiebt den Zahlungseingang.',
        },
        {
          title: 'Nachkalkulation ohne Lerneffekt',
          text: 'Die Abweichung zwischen Angebot und Ergebnis ist bekannt, aber nicht ihre Ursache – ob Kalkulation, Besetzung, Änderung oder Ausführung den Unterschied gemacht hat.',
        },
      ],
      questions: [
        'In welchen Projekten wird Mehraufwand erbracht, ohne dass ein Nachtrag folgt?',
        'Wie lange liegt erbrachte Leistung, bevor sie abgerechnet wird?',
        'Welche PSP-Elemente überschreiten ihr Budget regelmäßig und warum?',
        'Wo werden Zeiten und Kosten verspätet zurückgemeldet?',
        'Welche Besetzungswechsel gehen Budgetüberschreitungen voraus?',
        'Wie unterscheiden sich profitable und unprofitable Projekte im tatsächlichen Ablauf?',
      ],
      approach: [
        'Ein Projekt ist kein linearer Vorgang, sondern ein Geflecht aus PSP-Elementen, Ressourcenzuordnungen, Rückmeldungen, Bestellungen, Nachträgen und Rechnungen, die über Monate parallel laufen. In einem flachen Eventlog mit dem Projekt als einziger Fall-ID gehen diese Bezüge verloren. Noreja verbindet die Objekte im Event Knowledge Graph, sodass sich etwa eine Budgetüberschreitung bis zu der Änderung, Besetzung oder Fremdleistung zurückverfolgen lässt, die sie ausgelöst hat.',
        'Die vereinbarte Abfolge – Struktur vor Rückmeldung, Nachtrag vor Mehrleistung, Abnahme vor Schlussrechnung – wird als erwartete Reihenfolge modelliert. So wird sichtbar, wo Leistung ohne Auftrag entsteht, Rechnungen auf sich warten lassen oder Projekte ohne Nachkalkulation geschlossen werden.',
      ],
      faq: [
        {
          question: 'Was ist der Project-to-Profit-Prozess?',
          answer:
            'Project-to-Profit (PtP) ist der End-to-End-Prozess im Projektgeschäft vom Projektauftrag bis zur abgeschlossenen Nachkalkulation. Er umfasst Projektstruktur und Budget, Ressourcenplanung, Ausführung mit Zeit- und Kostenrückmeldung, Nachtragsmanagement, Meilenstein- oder Fortschrittsabrechnung und den Projektabschluss.',
        },
        {
          question: 'Was ist der Unterschied zwischen Project-to-Profit und Order-to-Cash?',
          answer:
            'Order-to-Cash beschreibt standardisierte Aufträge von der Bestellung bis zum Zahlungseingang. Project-to-Profit gilt für Einzel- und Kundenprojekte, bei denen Leistung, Kosten und Abrechnung über einen längeren Zeitraum gesteuert werden und sich der Umfang während der Laufzeit ändern kann.',
        },
        {
          question: 'Welche KPIs sind im Project-to-Profit wichtig?',
          answer:
            'Typische Kennzahlen sind Projektmarge, Budgetabweichung je PSP-Element, Auslastung, unfakturierte Leistung, die Termintreue der Meilensteine und die Nachtragsquote.',
        },
        {
          question: 'Kann man Process Mining im Projektgeschäft einsetzen?',
          answer:
            'Ja. Projektstrukturen, Rückmeldungen, Änderungsanträge, Meilensteine und Rechnungen hinterlassen Zeitstempel und Verantwortliche im Projektsystem, in der Zeiterfassung und im ERP. Process Mining zeigt daraus, wie Projekte tatsächlich ablaufen, wo Leistung unberechnet bleibt und welche Muster unprofitablen Projekten vorausgehen.',
        },
      ],
    },
    en: {
      metaTitle: 'Project-to-Profit (PtP): Process, Phases & KPIs | Noreja',
      metaDescription:
        'Project-to-profit (PtP) in project business from order to final costing: phases, WBS elements, KPIs such as project margin and typical problems with budgets and billing.',
      keywords: [
        'Project-to-Profit',
        'PtP process',
        'project business',
        'project controlling',
        'project final costing',
        'milestone billing',
        'process mining projects',
        'change request management',
      ],
      area: 'Project business',
      tagline:
        'From order to final costing: how the project-to-profit process runs in plant engineering, engineering services and consulting, how it is measured and where projects lose their margin.',
      teaser: 'From project order to final costing – project structure, resources, time recording and billing.',
      definition:
        'Project-to-profit (PtP) is the end-to-end process in project business from the project order to the completed final costing. It covers project initiation from an order or opportunity, setting up the work breakdown structure (WBS) and budget, resource planning and staffing, execution with time, expense and material recording, billing by milestone or progress, managing change requests and claims, and project closure. Because costs, work performed and revenue can drift apart over months, PtP decides whether a project ultimately delivers the margin it was calculated with.',
      aliases: ['PtP', 'Project to Profit', 'Project-to-Cash', 'Opportunity-to-Project', 'Project lifecycle management'],
      scope: {
        start: 'A customer order or a won opportunity triggers a project.',
        end: 'The project is finally invoiced, its final costing is complete and it is technically closed.',
      },
      phases: [
        {
          title: 'Project initiation & structure',
          text: 'An order or opportunity becomes a project with a work breakdown structure (WBS), budget, billing method and owners. The structure defines which elements costs and revenue will later be posted to.',
          steps: ['Project created', 'WBS elements structured', 'Budget released', 'Billing plan defined'],
        },
        {
          title: 'Resource planning & staffing',
          text: 'Work packages are scheduled, roles and people assigned, subcontracting and material planned. Bottlenecks around key people become visible early – or they do not.',
          steps: ['Work package scheduled', 'Resource requested', 'Resource assigned', 'Subcontract ordered'],
        },
        {
          title: 'Execution & recording',
          text: 'The project team records time, expenses and material consumption against WBS elements. Progress and remaining effort are estimated regularly and compared with plan and budget.',
          steps: ['Time recorded', 'Expenses entered', 'Material issued', 'Progress assessed', 'Remaining effort estimated'],
        },
        {
          title: 'Changes & billing',
          text: 'Change requests and claims are assessed, approved or rejected. Milestone or progress invoices go to the customer and down payments are cleared.',
          steps: ['Change request logged', 'Change order approved', 'Milestone reached', 'Invoice issued'],
        },
        {
          title: 'Project closure & final costing',
          text: 'After acceptance come the final invoice, accruals for outstanding costs and the final costing, which compares actual costs and revenue with the original calculation.',
          steps: ['Acceptance granted', 'Final invoice issued', 'Final costing prepared', 'Project closed'],
        },
      ],
      objects: [
        { name: 'Project', text: 'The frame with customer, project manager, contract type, budget and a status from created to closed.' },
        { name: 'WBS element', text: 'A node in the work breakdown structure that costs, work performed and revenue are posted to.' },
        { name: 'Resource assignment', text: 'Scheduling a person or role on a work package, with period and planned effort.' },
        { name: 'Time and cost record', text: 'Recorded hours, expenses and material issues, with author, date and account assignment.' },
        { name: 'Change request / claim', text: 'A change to the scope of work with assessment, decision and effect on budget and revenue.' },
        { name: 'Milestone & project invoice', text: 'A billing-relevant date and the customer invoice raised from it.' },
      ],
      systems: ['ERP project systems (e.g. SAP PS, SAP S/4HANA project management, Microsoft Dynamics 365 Project Operations)', 'Project planning and scheduling (e.g. Oracle Primavera, Microsoft Project)', 'Professional services automation and time recording', 'CRM for opportunities and quotes'],
      kpis: [
        { name: 'Project margin', text: 'The project’s contribution in the final costing compared with the quotation calculation.' },
        { name: 'Budget variance', text: 'Difference between actual costs, remaining effort and released budget per WBS element.' },
        { name: 'Utilisation', text: 'Share of billable hours in the available capacity of the assigned people.' },
        { name: 'Unbilled work', text: 'Work performed but not yet invoiced – capital tied up in the project.' },
        { name: 'On-time milestones', text: 'Share of milestones reached and billed by the agreed date.' },
        { name: 'Change order rate', text: 'Share of scope changes that are approved and billed as change orders.' },
      ],
      challenges: [
        {
          title: 'Extra work without a change order',
          text: 'Additional work is delivered but never logged or billed as a change. In the final costing it only shows up as a budget overrun.',
        },
        {
          title: 'Late time and cost recording',
          text: 'Hours and costs are entered in batches after the fact. By the time the overrun appears in the project report, much of the budget is already spent.',
        },
        {
          title: 'Work done, invoice pending',
          text: 'Milestones are reached in substance, but acceptance or invoicing is delayed. Unbilled work ties up cash and postpones incoming payments.',
        },
        {
          title: 'Final costing without lessons learned',
          text: 'The gap between quotation and result is known, but not its cause – whether calculation, staffing, changes or execution made the difference.',
        },
      ],
      questions: [
        'In which projects is extra work delivered without a change order following?',
        'How long does completed work wait before it is billed?',
        'Which WBS elements regularly exceed their budget, and why?',
        'Where are time and costs recorded late?',
        'Which staffing changes precede budget overruns?',
        'How do profitable and unprofitable projects differ in their actual flow?',
      ],
      approach: [
        'A project is not a linear sequence but a web of WBS elements, resource assignments, time records, purchase orders, change requests and invoices that run in parallel for months. A flat event log with the project as its only case ID loses these links. Noreja connects the objects in the event knowledge graph, so a budget overrun can be traced back to the change, staffing decision or subcontract that caused it.',
        'The agreed sequence – structure before recording, change order before extra work, acceptance before final invoice – is modelled as the expected order. This shows where work is done without an order, where invoices are held up and which projects are closed without a final costing.',
      ],
      faq: [
        {
          question: 'What is the project-to-profit process?',
          answer:
            'Project-to-profit (PtP) is the end-to-end process in project business from the project order to the completed final costing. It covers project structure and budget, resource planning, execution with time and cost recording, change management, milestone or progress billing and project closure.',
        },
        {
          question: 'What is the difference between project-to-profit and order-to-cash?',
          answer:
            'Order-to-cash describes standardised orders from customer order to incoming payment. Project-to-profit applies to one-off and customer projects where work, costs and billing are managed over a longer period and the scope can change along the way.',
        },
        {
          question: 'Which KPIs matter in project-to-profit?',
          answer:
            'Typical KPIs are project margin, budget variance per WBS element, utilisation, unbilled work, on-time milestones and the change order rate.',
        },
        {
          question: 'Can process mining be used in project business?',
          answer:
            'Yes. Project structures, time records, change requests, milestones and invoices leave timestamps and owners in the project system, time recording and the ERP. Process mining shows how projects actually run, where work goes unbilled and which patterns precede unprofitable projects.',
        },
      ],
    },
  },
};
