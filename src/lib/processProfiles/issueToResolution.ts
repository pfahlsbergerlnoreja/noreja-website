import type { ProcessProfile } from '../processProfiles';

export const issueToResolution: ProcessProfile = {
  id: 'issue-to-resolution',
  name: 'Issue-to-Resolution',
  abbreviation: 'I2R',
  dateModified: '2026-11-04',
  relatedCases: ['order-to-cash', 'lead-to-activation'],
  agents: ['on-time', 'rework', 'waiting-time'],
  content: {
    de: {
      metaTitle: 'Issue-to-Resolution (I2R): Prozess, Phasen & KPIs | Noreja',
      metaDescription:
        'Issue-to-Resolution (I2R) von der Kundenanfrage bis zur gelösten Reklamation: Phasen, Tickets, KPIs wie First Contact Resolution und SLA-Treue, typische Probleme.',
      keywords: [
        'Issue-to-Resolution',
        'I2R Prozess',
        'Kundenservice-Prozess',
        'Ticketbearbeitung',
        'Reklamationsmanagement',
        'SLA-Treue',
        'First Contact Resolution',
        'Process Mining Kundenservice',
      ],
      area: 'Kundenservice',
      tagline:
        'Von der Kundenanfrage bis zur gelösten Reklamation: wie der Issue-to-Resolution-Prozess abläuft, woran er gemessen wird und wo Tickets zwischen Kanälen, Teams und Supportstufen hängen bleiben.',
      teaser: 'Von der Kundenanfrage bis zur Lösung – Tickets, Eskalationen, Reklamationen und Gewährleistung.',
      definition:
        'Issue-to-Resolution (I2R) ist der End-to-End-Prozess vom Eingang eines Kundenanliegens bis zu seiner abschließenden Lösung. Er umfasst die Erfassung über Telefon, E-Mail, Chat oder Portal, Klassifizierung und Priorisierung, die Zuweisung an ein Team, die Bearbeitung mit Eskalationen und Übergaben zwischen Supportstufen, die Lösung, den Abschluss und das Feedback des Kunden. Dazu gehören Serviceanfragen ebenso wie Reklamationen und Gewährleistungsfälle. Weil Kunden einen Service am Ergebnis und an der Wartezeit messen, entscheidet I2R wesentlich über Zufriedenheit und Kundenbindung.',
      aliases: ['I2R', 'Issue to Resolution', 'Case-to-Resolution', 'Ticket-to-Resolution', 'Complaint-to-Resolution', 'Reklamationsprozess'],
      scope: {
        start: 'Ein Kunde meldet ein Anliegen über einen Kanal, ein Ticket entsteht.',
        end: 'Das Anliegen ist gelöst, das Ticket geschlossen und das Feedback erfasst.',
      },
      phases: [
        {
          title: 'Erfassung',
          text: 'Anliegen kommen über Telefon, E-Mail, Chat, Portal oder Außendienst an und werden als Ticket oder Fall angelegt, im Idealfall mit Kunde, Produkt und Auftrag verknüpft.',
          steps: ['Anfrage eingegangen', 'Ticket angelegt', 'Kunde & Auftrag zugeordnet'],
        },
        {
          title: 'Klassifizierung & Zuweisung',
          text: 'Das Ticket wird nach Art, Dringlichkeit und Vertrag eingestuft; daraus folgen Priorität, SLA und das zuständige Team.',
          steps: ['Kategorie gesetzt', 'Priorität vergeben', 'SLA zugeordnet', 'An Team zugewiesen'],
        },
        {
          title: 'Bearbeitung & Eskalation',
          text: 'Der First Level löst, was er lösen kann, und gibt den Rest an Second Level, Fachabteilung oder Hersteller weiter. Rückfragen beim Kunden und Eskalationen unterbrechen die Bearbeitung.',
          steps: ['Bearbeitung gestartet', 'Rückfrage an Kunden', 'An Second Level übergeben', 'Eskalation', 'Lösung erarbeitet'],
        },
        {
          title: 'Lösung & Abschluss',
          text: 'Die Lösung wird umgesetzt – als Auskunft, Reparatur, Ersatzlieferung oder Gutschrift – und dem Kunden mitgeteilt. Danach wird das Ticket geschlossen oder bei erneutem Problem wieder geöffnet.',
          steps: ['Lösung mitgeteilt', 'Gutschrift oder Ersatz ausgelöst', 'Ticket geschlossen', 'Ticket wiedereröffnet'],
        },
        {
          title: 'Feedback & Auswertung',
          text: 'Kundenzufriedenheit wird abgefragt, wiederkehrende Ursachen werden an Produkt, Qualität oder Logistik zurückgemeldet.',
          steps: ['Umfrage versendet', 'Bewertung erhalten', 'Ursache zurückgemeldet'],
        },
      ],
      objects: [
        { name: 'Ticket / Fall', text: 'Das Kundenanliegen mit Kanal, Kategorie, Priorität, Status und Bearbeitungshistorie.' },
        { name: 'Kunde & Vertrag', text: 'Wer das Anliegen meldet und welche Servicevereinbarung dafür gilt.' },
        { name: 'Interaktion', text: 'Jeder Kontakt zum Ticket – Anruf, E-Mail, Chatnachricht, Rückfrage oder Antwort.' },
        { name: 'SLA', text: 'Vereinbarte Reaktions- und Lösungszeiten je Priorität, mit Uhr, Pausen und Verletzungen.' },
        { name: 'Reklamation & Gewährleistungsfall', text: 'Anliegen zu einem gelieferten Produkt, verknüpft mit Auftrag, Lieferung und Rechnung.' },
        { name: 'Gutschrift / Ersatzlieferung', text: 'Die kaufmännische oder logistische Folge einer berechtigten Reklamation.' },
      ],
      systems: [
        'Kundenservice- und Ticketsysteme (z. B. Salesforce Service Cloud, ServiceNow CSM, Zendesk)',
        'CRM-Systeme',
        'Contact-Center- und Telefonieplattformen',
        'ERP für Aufträge, Lieferungen, Gutschriften und Gewährleistung',
      ],
      kpis: [
        { name: 'Time to Resolution', text: 'Zeit vom Eingang des Anliegens bis zur Lösung.' },
        { name: 'First Contact Resolution', text: 'Anteil der Anliegen, die beim ersten Kontakt ohne Übergabe gelöst werden.' },
        { name: 'SLA-Treue', text: 'Anteil der Tickets, deren Reaktions- und Lösungszeit innerhalb der Vereinbarung liegt.' },
        { name: 'Wiedereröffnungsquote', text: 'Wie viele geschlossene Tickets erneut geöffnet werden müssen.' },
        { name: 'Übergaben pro Ticket', text: 'Wie oft ein Ticket zwischen Teams oder Supportstufen weitergereicht wird.' },
        { name: 'Kundenzufriedenheit', text: 'Bewertung des Kunden nach Abschluss, z. B. als CSAT oder Net Promoter Score.' },
      ],
      challenges: [
        {
          title: 'Ping-Pong zwischen Teams',
          text: 'Falsch klassifizierte Tickets wandern zwischen Teams und Supportstufen hin und her. Jede Übergabe startet eine neue Warteschlange, ohne dass jemand am Anliegen arbeitet.',
        },
        {
          title: 'SLA-Uhren, die schön gerechnet werden',
          text: 'Tickets werden auf „Warten auf Kunde“ gesetzt, um die Uhr anzuhalten, oder vorschnell geschlossen. Die SLA-Treue im Bericht stimmt dann nicht mit der Wartezeit des Kunden überein.',
        },
        {
          title: 'Wiedereröffnete und doppelte Tickets',
          text: 'Ungelöste Anliegen kommen als wiedereröffnetes Ticket oder als neuer Fall über einen anderen Kanal zurück – und werden dann getrennt gezählt.',
        },
        {
          title: 'Ursachen außerhalb des Service',
          text: 'Viele Reklamationen entstehen in Lieferung, Abrechnung oder Produktqualität. Ohne Verbindung zu Auftrag und Rechnung bleibt der Service beim Symptom.',
        },
      ],
      questions: [
        'Welche Kategorien und Kanäle verletzen die SLAs am häufigsten?',
        'Welche Tickets werden zwischen Teams mehrfach hin- und hergereicht?',
        'Wie lange liegen Tickets nach einer Übergabe, bevor jemand sie bearbeitet?',
        'Welche Lösungen führen besonders oft zu einer Wiedereröffnung?',
        'Wo wird die SLA-Uhr angehalten, obwohl der Kunde nicht gefragt wurde?',
        'Welche Aufträge, Lieferungen oder Rechnungen lösen die meisten Reklamationen aus?',
      ],
      approach: [
        'Ein Ticketsystem zeigt Statuswechsel, aber nicht das ganze Anliegen. Derselbe Kunde meldet sich per E-Mail und Telefon, ein Fall wird geteilt oder zusammengeführt, eine Reklamation hängt an einem Auftrag, einer Lieferung und einer Gutschrift. Noreja verbindet Tickets, Interaktionen, Kunden und die Belege aus dem ERP im Event Knowledge Graph, statt jedes Ticket als isolierten Fall in einem flachen Eventlog zu betrachten.',
        'Der vorgesehene Ablauf – Klassifizierung vor Zuweisung, Eskalation nach festen Regeln, Rückfrage vor dem Anhalten der SLA-Uhr, Abschluss erst nach Rückmeldung des Kunden – wird mit Fachwissen aus dem Service als erwartete Reihenfolge modelliert. So wird sichtbar, wo Tickets diesen Weg verlassen und welche Abweichung zu Wiedereröffnungen führt.',
      ],
      faq: [
        {
          question: 'Was ist der Issue-to-Resolution-Prozess?',
          answer:
            'Issue-to-Resolution (I2R) ist der End-to-End-Prozess vom Eingang eines Kundenanliegens bis zu seiner Lösung. Er umfasst Erfassung, Klassifizierung, Zuweisung, Bearbeitung mit Eskalationen, Lösung, Abschluss und Feedback – für Serviceanfragen ebenso wie für Reklamationen und Gewährleistungsfälle.',
        },
        {
          question: 'Was ist der Unterschied zwischen Issue-to-Resolution und Request-to-Fulfill?',
          answer:
            'Request-to-Fulfill beschreibt interne IT-Serviceanfragen, etwa nach Zugängen, Hardware oder Software, aus einem Servicekatalog. Issue-to-Resolution betrifft die Anliegen externer Kunden – Fragen, Störungen, Reklamationen – und misst sich an deren Wartezeit und Zufriedenheit.',
        },
        {
          question: 'Wie hängen Issue-to-Resolution und Order-to-Cash zusammen?',
          answer:
            'Reklamationen zu Lieferungen oder Rechnungen haben ihren Ursprung im Order-to-Cash-Prozess und wirken dorthin zurück: als Gutschrift, Ersatzlieferung oder gesperrte Zahlung. Wer beide Prozesse verbindet, sieht, welche Aufträge die meisten Serviceanliegen auslösen.',
        },
        {
          question: 'Welche KPIs sind im Issue-to-Resolution wichtig?',
          answer:
            'Typische Kennzahlen sind Time to Resolution, First Contact Resolution, SLA-Treue, die Wiedereröffnungsquote, Übergaben pro Ticket und die Kundenzufriedenheit nach Abschluss.',
        },
      ],
    },
    en: {
      metaTitle: 'Issue-to-Resolution (I2R): Process, Phases & KPIs | Noreja',
      metaDescription:
        'Issue-to-resolution (I2R) from customer request to resolved complaint: phases, tickets, KPIs such as first contact resolution and SLA adherence, typical problems.',
      keywords: [
        'Issue-to-Resolution',
        'I2R process',
        'customer service process',
        'ticket handling',
        'complaint management',
        'SLA adherence',
        'first contact resolution',
        'process mining customer service',
      ],
      area: 'Customer service',
      tagline:
        'From customer request to resolved complaint: how the issue-to-resolution process runs, how it is measured and where tickets get stuck between channels, teams and support levels.',
      teaser: 'From customer request to resolution – tickets, escalations, complaints and warranty claims.',
      definition:
        'Issue-to-resolution (I2R) is the end-to-end process from receiving a customer issue to its final resolution. It covers capture via phone, email, chat or portal, classification and prioritisation, assignment to a team, handling with escalations and hand-offs between support levels, the solution, closure and customer feedback. It includes service requests as well as complaints and warranty claims. Because customers judge service by the outcome and by how long they wait, I2R has a major influence on satisfaction and retention.',
      aliases: ['I2R', 'Issue to Resolution', 'Case-to-Resolution', 'Ticket-to-Resolution', 'Complaint-to-Resolution', 'Customer service process'],
      scope: {
        start: 'A customer raises an issue through a channel and a ticket is created.',
        end: 'The issue is resolved, the ticket closed and the feedback recorded.',
      },
      phases: [
        {
          title: 'Capture',
          text: 'Issues arrive by phone, email, chat, portal or field service and are created as a ticket or case, ideally linked to customer, product and order.',
          steps: ['Request received', 'Ticket created', 'Customer & order linked'],
        },
        {
          title: 'Classification & assignment',
          text: 'The ticket is classified by type, urgency and contract; this determines priority, SLA and the responsible team.',
          steps: ['Category set', 'Priority assigned', 'SLA attached', 'Assigned to team'],
        },
        {
          title: 'Handling & escalation',
          text: 'First level resolves what it can and passes the rest to second level, a specialist department or the manufacturer. Queries to the customer and escalations interrupt the work.',
          steps: ['Work started', 'Query to customer', 'Handed to second level', 'Escalation', 'Solution found'],
        },
        {
          title: 'Resolution & closure',
          text: 'The solution is delivered – as information, repair, replacement or credit note – and communicated to the customer. The ticket is then closed, or reopened if the problem returns.',
          steps: ['Solution communicated', 'Credit note or replacement triggered', 'Ticket closed', 'Ticket reopened'],
        },
        {
          title: 'Feedback & review',
          text: 'Customer satisfaction is surveyed, and recurring causes are reported back to product, quality or logistics.',
          steps: ['Survey sent', 'Rating received', 'Root cause reported back'],
        },
      ],
      objects: [
        { name: 'Ticket / case', text: 'The customer issue with channel, category, priority, status and handling history.' },
        { name: 'Customer & contract', text: 'Who raises the issue and which service agreement applies to it.' },
        { name: 'Interaction', text: 'Every contact on the ticket – call, email, chat message, query or reply.' },
        { name: 'SLA', text: 'Agreed response and resolution times per priority, with clock, pauses and breaches.' },
        { name: 'Complaint & warranty claim', text: 'Issue about a delivered product, linked to order, delivery and invoice.' },
        { name: 'Credit note / replacement', text: 'The commercial or logistical consequence of a justified complaint.' },
      ],
      systems: [
        'Customer service and ticketing systems (e.g. Salesforce Service Cloud, ServiceNow CSM, Zendesk)',
        'CRM systems',
        'Contact centre and telephony platforms',
        'ERP for orders, deliveries, credit notes and warranty',
      ],
      kpis: [
        { name: 'Time to resolution', text: 'Time from receiving the issue to its resolution.' },
        { name: 'First contact resolution', text: 'Share of issues resolved at the first contact without a hand-off.' },
        { name: 'SLA adherence', text: 'Share of tickets whose response and resolution times stay within the agreement.' },
        { name: 'Reopen rate', text: 'How many closed tickets have to be opened again.' },
        { name: 'Hand-offs per ticket', text: 'How often a ticket is passed between teams or support levels.' },
        { name: 'Customer satisfaction', text: 'The customer’s rating after closure, e.g. as CSAT or Net Promoter Score.' },
      ],
      challenges: [
        {
          title: 'Ping-pong between teams',
          text: 'Misclassified tickets bounce between teams and support levels. Every hand-off starts a new queue without anyone working on the issue.',
        },
        {
          title: 'SLA clocks that flatter the numbers',
          text: 'Tickets are set to “waiting for customer” to pause the clock, or closed prematurely. SLA adherence in the report then no longer matches how long the customer actually waited.',
        },
        {
          title: 'Reopened and duplicate tickets',
          text: 'Unresolved issues come back as a reopened ticket or as a new case through another channel – and are then counted separately.',
        },
        {
          title: 'Causes outside customer service',
          text: 'Many complaints originate in delivery, billing or product quality. Without a link to order and invoice, service stays with the symptom.',
        },
      ],
      questions: [
        'Which categories and channels breach SLAs most often?',
        'Which tickets are passed back and forth between teams several times?',
        'How long do tickets sit after a hand-off before anyone works on them?',
        'Which solutions lead to a reopened ticket particularly often?',
        'Where is the SLA clock paused although the customer was never asked?',
        'Which orders, deliveries or invoices trigger the most complaints?',
      ],
      approach: [
        'A ticketing system shows status changes, not the whole issue. The same customer gets in touch by email and phone, a case is split or merged, a complaint is tied to an order, a delivery and a credit note. Noreja connects tickets, interactions, customers and the documents from the ERP in the event knowledge graph instead of treating each ticket as an isolated case in a flat event log.',
        'The intended flow – classification before assignment, escalation by fixed rules, a query to the customer before the SLA clock is paused, closure only after the customer has confirmed – is modelled as the expected order with domain knowledge from customer service. This shows where tickets leave that path and which deviation leads to reopened cases.',
      ],
      faq: [
        {
          question: 'What is the issue-to-resolution process?',
          answer:
            'Issue-to-resolution (I2R) is the end-to-end process from receiving a customer issue to its resolution. It covers capture, classification, assignment, handling with escalations, resolution, closure and feedback – for service requests as well as complaints and warranty claims.',
        },
        {
          question: 'What is the difference between issue-to-resolution and request-to-fulfill?',
          answer:
            'Request-to-fulfill describes internal IT service requests, such as access, hardware or software, from a service catalogue. Issue-to-resolution concerns the issues of external customers – questions, faults, complaints – and is measured by their waiting time and satisfaction.',
        },
        {
          question: 'How are issue-to-resolution and order-to-cash connected?',
          answer:
            'Complaints about deliveries or invoices originate in the order-to-cash process and feed back into it: as a credit note, a replacement delivery or a blocked payment. Connecting both processes shows which orders trigger the most service issues.',
        },
        {
          question: 'Which KPIs matter in issue-to-resolution?',
          answer:
            'Typical KPIs are time to resolution, first contact resolution, SLA adherence, the reopen rate, hand-offs per ticket and customer satisfaction after closure.',
        },
      ],
    },
  },
};
