import type { ProcessProfile } from '../processProfiles';

export const requestToFulfill: ProcessProfile = {
  id: 'request-to-fulfill',
  name: 'Request-to-Fulfill',
  abbreviation: 'R2F',
  dateModified: '2026-11-04',
  relatedCases: ['purchase-to-pay'],
  agents: ['waiting-time', 'automation', 'on-time'],
  content: {
    de: {
      metaTitle: 'Request-to-Fulfill (R2F): Prozess, Phasen & KPIs | Noreja',
      metaDescription:
        'Request-to-Fulfill (R2F) im IT-Service-Management vom Serviceantrag bis zur Bereitstellung: Phasen, Objekte, KPIs wie SLA-Erfüllung und typische Probleme bei Freigaben.',
      keywords: [
        'Request-to-Fulfill',
        'R2F Prozess',
        'Service Request Management',
        'IT4IT',
        'ITIL Request Fulfilment',
        'Servicekatalog',
        'Process Mining IT-Service',
        'SLA-Erfüllung',
      ],
      area: 'IT-Service-Management',
      tagline:
        'Vom Antrag im Serviceportal bis zur bestätigten Bereitstellung: wie der Request-to-Fulfill-Prozess abläuft, woran er gemessen wird und wo Standardanfragen unnötig lange warten.',
      teaser: 'Vom Serviceantrag bis zur Bereitstellung – Servicekatalog, Genehmigung, Erfüllung und SLAs.',
      definition:
        'Request-to-Fulfill (R2F) ist der End-to-End-Prozess vom Antrag auf einen IT-Service bis zu seiner bestätigten Bereitstellung. Er umfasst die Auswahl eines Angebots im Servicekatalog oder Self-Service-Portal, die fachliche und gegebenenfalls kaufmännische Genehmigung, die Erfüllung – etwa Zugriffsrechte, Hardware, Softwarelizenzen oder die IT-Ausstattung neuer Mitarbeitender, teils über den Einkauf –, die Übergabe mit Bestätigung durch den Antragsteller und den Abschluss des Antrags. Das Value-Stream-Modell IT4IT und die ITIL-Praxis Service Request Management beschreiben diesen Ablauf; im Alltag entscheidet er darüber, wie schnell Mitarbeitende arbeitsfähig sind.',
      aliases: ['R2F', 'Request to Fulfill', 'Request-to-Fulfil', 'Service Request Management', 'Request Fulfilment', 'Serviceanforderung'],
      scope: {
        start: 'Ein Mitarbeitender oder eine Führungskraft beantragt einen Service aus dem Servicekatalog.',
        end: 'Der Service ist bereitgestellt, vom Antragsteller bestätigt und der Antrag geschlossen.',
      },
      phases: [
        {
          title: 'Antrag über Servicekatalog',
          text: 'Im Self-Service-Portal wählt der Antragsteller ein Katalogangebot und füllt das zugehörige Formular aus. Katalogeintrag und Formular legen fest, welche Daten, Genehmigungen und Erfüllungsschritte folgen.',
          steps: ['Katalogangebot gewählt', 'Antrag eingereicht', 'Antrag vervollständigt', 'Antrag klassifiziert'],
        },
        {
          title: 'Genehmigung',
          text: 'Je nach Service geben Vorgesetzte, Kostenstellenverantwortliche oder Dateneigentümer den Antrag frei. Kritische Berechtigungen benötigen zusätzliche Prüfungen.',
          steps: ['Genehmigung angefordert', 'Rückfrage gestellt', 'Antrag genehmigt', 'Antrag abgelehnt'],
        },
        {
          title: 'Erfüllung',
          text: 'Fulfilment-Aufgaben werden an die zuständigen Teams verteilt oder automatisiert ausgeführt: Berechtigung vergeben, Software verteilen, Gerät aus dem Lager bereitstellen oder über eine Bestellung beschaffen.',
          steps: ['Erfüllungsaufgabe erstellt', 'Aufgabe zugewiesen', 'Berechtigung vergeben', 'Bestellung ausgelöst', 'Gerät konfiguriert'],
        },
        {
          title: 'Übergabe & Abschluss',
          text: 'Der Service wird übergeben, der Antragsteller bestätigt die Bereitstellung, und der Antrag wird geschlossen – bei Bedarf mit Zufriedenheitsabfrage.',
          steps: ['Service übergeben', 'Bereitstellung bestätigt', 'Antrag geschlossen'],
        },
      ],
      objects: [
        { name: 'Serviceantrag', text: 'Der Antrag mit Antragsteller, Katalogangebot, Priorität, SLA und Status von eingereicht bis geschlossen.' },
        { name: 'Katalogangebot', text: 'Ein Eintrag im Servicekatalog mit Formular, Genehmigungsregel und hinterlegtem Erfüllungsablauf.' },
        { name: 'Genehmigung', text: 'Freigabe oder Ablehnung durch eine verantwortliche Person, mit Zeitpunkt und Begründung.' },
        { name: 'Erfüllungsaufgabe', text: 'Ein Arbeitsschritt für ein Team oder eine Automatisierung, mit Zuweisung, Wartezeit und Ergebnis.' },
        { name: 'Bestellung', text: 'Beschaffung von Hardware oder Lizenzen, wenn der Bedarf nicht aus Bestand gedeckt werden kann.' },
        { name: 'Konfigurationselement', text: 'Das bereitgestellte Gerät, die Lizenz oder die Berechtigung, wie sie in der CMDB erfasst wird.' },
      ],
      systems: ['IT-Service-Management-Plattformen (z. B. ServiceNow, Jira Service Management, BMC Helix)', 'Identity- und Access-Management', 'Software-Verteilung und Endgeräteverwaltung', 'ERP- oder Einkaufssystem für Bestellungen'],
      kpis: [
        { name: 'Durchlaufzeit je Katalogangebot', text: 'Zeit vom eingereichten Antrag bis zur bestätigten Bereitstellung.' },
        { name: 'SLA-Erfüllung', text: 'Anteil der Anträge, die innerhalb der vereinbarten Servicezeit erfüllt sind.' },
        { name: 'Genehmigungsdauer', text: 'Wartezeit zwischen Anforderung und Entscheidung einer Freigabe.' },
        { name: 'Automatisierungsgrad', text: 'Anteil der Erfüllungsaufgaben, die ohne manuellen Eingriff ablaufen.' },
        { name: 'Wiedereröffnungsquote', text: 'Anteil der Anträge, die nach dem Schließen erneut geöffnet oder nachgebessert werden.' },
      ],
      challenges: [
        {
          title: 'Warten auf Freigaben',
          text: 'Mehrstufige Genehmigungen und Rückfragen machen oft den größten Teil der Durchlaufzeit aus, obwohl die eigentliche Erfüllung schnell erledigt wäre.',
        },
        {
          title: 'Standardanfragen mit Handarbeit',
          text: 'Wiederkehrende Anträge wie Zugriffsrechte oder Softwareinstallationen laufen trotz klarer Regeln über manuelle Aufgaben und Teamwechsel.',
        },
        {
          title: 'Die Beschaffung als Blackbox',
          text: 'Sobald ein Gerät bestellt werden muss, endet die Sicht des Service-Desks. Wie lange Bestellung, Lieferung und Wareneingang dauern, steht in einem anderen System.',
        },
        {
          title: 'Uneinheitliche Wege pro Katalogangebot',
          text: 'Formulare werden unvollständig eingereicht, Aufgaben zwischen Teams weitergereicht oder Schritte außerhalb des Tools erledigt – derselbe Service läuft jedes Mal anders.',
        },
      ],
      questions: [
        'Welche Katalogangebote verfehlen ihre SLAs am häufigsten?',
        'Wie viel der Durchlaufzeit entfällt auf Genehmigungen und Rückfragen?',
        'Welche Standardanfragen eignen sich für eine vollständige Automatisierung?',
        'Wie lange warten Anträge mit Beschaffung auf Bestellung und Lieferung?',
        'Wo werden Aufgaben mehrfach zwischen Teams weitergereicht?',
        'Wie schnell ist die IT-Ausstattung neuer Mitarbeitender zum Eintrittstag bereit?',
      ],
      approach: [
        'Ein Serviceantrag zerfällt in Genehmigungen, mehrere Erfüllungsaufgaben und manchmal eine Bestellung im Einkaufssystem – mit eigenen Zeitstempeln und Verantwortlichen. Ein flacher Eventlog mit dem Antrag als Fall-ID zeigt nur die Gesamtdauer. Noreja verbindet Antrag, Aufgaben, Bestellung und Konfigurationselement im Event Knowledge Graph und macht so sichtbar, ob die Zeit in der Freigabe, im Fulfilment-Team oder in der Lieferung verloren geht.',
        'Für jedes Katalogangebot wird der vorgesehene Erfüllungsablauf als erwartete Reihenfolge modelliert. So fällt auf, wo Genehmigungen übersprungen, Aufgaben doppelt angelegt oder Anträge geschlossen werden, bevor der Service tatsächlich bereitsteht.',
      ],
      faq: [
        {
          question: 'Was ist der Request-to-Fulfill-Prozess?',
          answer:
            'Request-to-Fulfill (R2F) ist der End-to-End-Prozess vom Antrag auf einen IT-Service bis zu seiner bestätigten Bereitstellung. Er umfasst Antrag über den Servicekatalog, Genehmigung, Erfüllung – etwa Berechtigungen, Hardware oder Software –, Übergabe und Abschluss.',
        },
        {
          question: 'Was ist der Unterschied zwischen Request-to-Fulfill und Issue-to-Resolution?',
          answer:
            'Request-to-Fulfill behandelt geplante Anforderungen an einen Standardservice, etwa ein neues Notebook oder eine Berechtigung. Issue-to-Resolution beschreibt die Bearbeitung von Störungen und Kundenservice-Tickets, bei denen etwas nicht funktioniert und wiederhergestellt werden muss.',
        },
        {
          question: 'Welche KPIs sind im Request-to-Fulfill wichtig?',
          answer:
            'Typische Kennzahlen sind die Durchlaufzeit je Katalogangebot, die SLA-Erfüllung, die Genehmigungsdauer, der Automatisierungsgrad der Erfüllungsaufgaben und die Wiedereröffnungsquote.',
        },
        {
          question: 'Kann man Process Mining im IT-Service-Management einsetzen?',
          answer:
            'Ja. Anträge, Genehmigungen, Aufgaben und Statuswechsel hinterlassen Zeitstempel und Zuständigkeiten in der ITSM-Plattform, Bestellungen im ERP. Process Mining zeigt daraus den tatsächlichen Ablauf je Service, Wartezeiten zwischen Teams und Kandidaten für die Automatisierung.',
        },
      ],
    },
    en: {
      metaTitle: 'Request-to-Fulfill (R2F): Process, Phases & KPIs | Noreja',
      metaDescription:
        'Request-to-fulfill (R2F) in IT service management from service request to delivery: phases, business objects, KPIs such as SLA compliance and typical approval problems.',
      keywords: [
        'Request-to-Fulfill',
        'R2F process',
        'service request management',
        'IT4IT',
        'ITIL request fulfilment',
        'service catalogue',
        'process mining IT service',
        'SLA compliance',
      ],
      area: 'IT service management',
      tagline:
        'From a request in the service portal to confirmed delivery: how the request-to-fulfill process runs, how it is measured and where standard requests wait longer than they should.',
      teaser: 'From service request to delivery – service catalogue, approval, fulfilment and SLAs.',
      definition:
        'Request-to-fulfill (R2F) is the end-to-end process from a request for an IT service to its confirmed delivery. It covers choosing an offering in the service catalogue or self-service portal, business and, where needed, financial approval, fulfilment – such as access rights, hardware, software licences or the IT equipment for new joiners, partly via purchasing – handover with confirmation by the requester, and closing the request. The IT4IT value stream model and the ITIL practice of service request management describe this flow; in day-to-day work it determines how quickly employees are able to do their jobs.',
      aliases: ['R2F', 'Request to Fulfill', 'Request-to-Fulfil', 'Service request management', 'Request fulfilment'],
      scope: {
        start: 'An employee or manager requests a service from the service catalogue.',
        end: 'The service is delivered, confirmed by the requester and the request is closed.',
      },
      phases: [
        {
          title: 'Request via service catalogue',
          text: 'In the self-service portal, the requester selects a catalogue offering and fills in its form. The catalogue item and form define which data, approvals and fulfilment steps follow.',
          steps: ['Catalogue offering selected', 'Request submitted', 'Request completed', 'Request categorised'],
        },
        {
          title: 'Approval',
          text: 'Depending on the service, line managers, cost centre owners or data owners approve the request. Critical access rights require additional checks.',
          steps: ['Approval requested', 'Query raised', 'Request approved', 'Request rejected'],
        },
        {
          title: 'Fulfilment',
          text: 'Fulfilment tasks are routed to the responsible teams or run automatically: granting access, deploying software, issuing a device from stock or procuring it through a purchase order.',
          steps: ['Fulfilment task created', 'Task assigned', 'Access granted', 'Purchase order triggered', 'Device configured'],
        },
        {
          title: 'Handover & closure',
          text: 'The service is handed over, the requester confirms delivery and the request is closed – with a satisfaction survey where required.',
          steps: ['Service handed over', 'Delivery confirmed', 'Request closed'],
        },
      ],
      objects: [
        { name: 'Service request', text: 'The request with requester, catalogue offering, priority, SLA and a status from submitted to closed.' },
        { name: 'Catalogue offering', text: 'An item in the service catalogue with its form, approval rule and defined fulfilment flow.' },
        { name: 'Approval', text: 'Approval or rejection by a responsible person, with time and reason.' },
        { name: 'Fulfilment task', text: 'A work step for a team or an automation, with assignment, waiting time and outcome.' },
        { name: 'Purchase order', text: 'Procurement of hardware or licences when the need cannot be met from stock.' },
        { name: 'Configuration item', text: 'The delivered device, licence or access right as recorded in the CMDB.' },
      ],
      systems: ['IT service management platforms (e.g. ServiceNow, Jira Service Management, BMC Helix)', 'Identity and access management', 'Software distribution and endpoint management', 'ERP or procurement system for purchase orders'],
      kpis: [
        { name: 'Cycle time per catalogue offering', text: 'Time from the submitted request to confirmed delivery.' },
        { name: 'SLA compliance', text: 'Share of requests fulfilled within the agreed service time.' },
        { name: 'Approval duration', text: 'Waiting time between requesting an approval and the decision.' },
        { name: 'Automation rate', text: 'Share of fulfilment tasks that run without manual intervention.' },
        { name: 'Reopen rate', text: 'Share of requests reopened or reworked after closure.' },
      ],
      challenges: [
        {
          title: 'Waiting for approvals',
          text: 'Multi-level approvals and queries often account for most of the cycle time, even though the actual fulfilment would be done quickly.',
        },
        {
          title: 'Manual work on standard requests',
          text: 'Recurring requests such as access rights or software installations go through manual tasks and team hand-offs despite clear rules.',
        },
        {
          title: 'Procurement as a black box',
          text: 'As soon as a device has to be ordered, the service desk loses sight of the request. How long the purchase order, delivery and goods receipt take is recorded in another system.',
        },
        {
          title: 'Inconsistent paths per catalogue offering',
          text: 'Forms are submitted incomplete, tasks are passed between teams or steps are done outside the tool – the same service runs differently every time.',
        },
      ],
      questions: [
        'Which catalogue offerings miss their SLAs most often?',
        'How much of the cycle time is spent on approvals and queries?',
        'Which standard requests are suitable for full automation?',
        'How long do requests involving procurement wait for ordering and delivery?',
        'Where are tasks passed back and forth between teams?',
        'How reliably is the IT equipment for new joiners ready on their first day?',
      ],
      approach: [
        'A service request breaks down into approvals, several fulfilment tasks and sometimes a purchase order in the procurement system – each with its own timestamps and owners. A flat event log with the request as its case ID only shows the overall duration. Noreja connects request, tasks, purchase order and configuration item in the event knowledge graph, revealing whether time is lost in approval, in the fulfilment team or in delivery.',
        'For each catalogue offering, the intended fulfilment flow is modelled as the expected order. This highlights where approvals are skipped, tasks are created twice or requests are closed before the service is actually available.',
      ],
      faq: [
        {
          question: 'What is the request-to-fulfill process?',
          answer:
            'Request-to-fulfill (R2F) is the end-to-end process from a request for an IT service to its confirmed delivery. It covers the request via the service catalogue, approval, fulfilment – such as access rights, hardware or software – handover and closure.',
        },
        {
          question: 'What is the difference between request-to-fulfill and issue-to-resolution?',
          answer:
            'Request-to-fulfill handles planned requests for a standard service, such as a new laptop or an access right. Issue-to-resolution covers incidents and customer service tickets, where something does not work and has to be restored.',
        },
        {
          question: 'Which KPIs matter in request-to-fulfill?',
          answer:
            'Typical KPIs are cycle time per catalogue offering, SLA compliance, approval duration, the automation rate of fulfilment tasks and the reopen rate.',
        },
        {
          question: 'Can process mining be used in IT service management?',
          answer:
            'Yes. Requests, approvals, tasks and status changes leave timestamps and assignments in the ITSM platform, purchase orders in the ERP. Process mining shows the actual flow per service, waiting times between teams and candidates for automation.',
        },
      ],
    },
  },
};
