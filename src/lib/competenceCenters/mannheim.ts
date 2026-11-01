import type { CompetenceCityContent } from '../competenceCenters';

export const mannheim: CompetenceCityContent = {
  id: 'mannheim',
  metaTitle: {
    de: 'Process Mining & Prozessoptimierung Mannheim',
    en: 'Process Mining Consulting Mannheim',
  },
  metaDescription: {
    de: 'Process Mining Beratung in Mannheim und Rhein-Neckar: Ursachen von Prozessproblemen direkt aus SAP finden, Prozesse optimieren, Proof of Value in 3–4 Wochen.',
    en: 'Process mining consulting in Mannheim and Rhine-Neckar: find the causes of process problems straight from SAP, optimize processes, proof of value in 3–4 weeks.',
  },
  h1: {
    de: 'Process Mining Beratung in Mannheim und der Metropolregion Rhein-Neckar',
    en: 'Process Mining Consulting in Mannheim and the Rhine-Neckar Region',
  },
  intro: {
    de: 'Zwischen Mannheim, Heidelberg und Ludwigshafen begleiten wir Unternehmen aus Chemie und Pharma, Maschinen- und Anlagenbau, Energie und Logistik mit Process Mining und Process Intelligence. Wir lesen direkt aus SAP und anderen ERP-Systemen, analysieren einen Teilprozess in drei bis vier Wochen und besprechen die Ergebnisse persönlich mit deinem Team vor Ort.',
    en: 'Between Mannheim, Heidelberg and Ludwigshafen we support companies from chemicals and pharma, machinery and plant engineering, energy and logistics with process mining and process intelligence. We read directly from SAP and other ERP systems, analyze one sub-process in three to four weeks and discuss the results in person with your team on site.',
  },
  teaser: {
    de: 'Für Chemie, Pharma, Maschinenbau und Logistik in der Metropolregion Rhein-Neckar.',
    en: 'For chemicals, pharma, engineering and logistics in the Rhine-Neckar metropolitan region.',
  },
  presence: {
    de: {
      title: 'Vor Ort in Mannheim und Rhein-Neckar',
      text: 'Mannheim ist einer der großen Bahnknoten im Südwesten – für uns gut erreichbar, für Workshops ideal. Wir kommen zu Kick-off und Ergebnispräsentation zu dir, ob in der Quadratestadt, in Heidelberg, Ludwigshafen oder an der Bergstraße. Die Arbeit an Daten und Analyse dazwischen erledigen wir remote.',
    },
    en: {
      title: 'On site in Mannheim and Rhine-Neckar',
      text: 'Mannheim is one of the major rail hubs in the south-west – easy for us to reach and ideal for workshops. We come to you for the kick-off and the results presentation, whether in Mannheim itself, in Heidelberg, Ludwigshafen or along the Bergstrasse. The work on data and analysis in between happens remotely.',
    },
  },
  surroundings: {
    de: ['Heidelberg', 'Ludwigshafen am Rhein', 'Weinheim und Bergstraße', 'Schwetzingen und Hockenheim', 'Walldorf und Wiesloch', 'Speyer und Worms'],
    en: ['Heidelberg', 'Ludwigshafen am Rhein', 'Weinheim and the Bergstrasse', 'Schwetzingen and Hockenheim', 'Walldorf and Wiesloch', 'Speyer and Worms'],
  },
  region: {
    de: {
      title: 'Rhein-Neckar: Chemie, Industrie und SAP-Know-how auf engem Raum',
      paragraphs: [
        'Die Metropolregion Rhein-Neckar verbindet drei Bundesländer und eine ungewöhnlich breite Wirtschaft: Chemie und Pharma entlang des Rheins, Maschinen-, Anlagen- und Landtechnik, Energieversorger, einen der großen Binnenhäfen Europas und mit Walldorf den Heimatort von SAP. Entsprechend viele Unternehmen in der Region arbeiten mit SAP – und haben dort Prozessdaten über Jahre gesammelt.',
        'Diese Daten sind ein Schatz, der selten gehoben wird. Process Intelligence liest sie direkt aus den SAP-Tabellen, verknüpft Aufträge, Lieferungen, Chargen und Rechnungen und zeigt, welche Ursachen Durchlaufzeit, Nacharbeit und Compliance-Risiken treiben – ohne dass vorher ein Event Log gebaut werden muss.',
      ],
    },
    en: {
      title: 'Rhine-Neckar: chemicals, industry and SAP know-how in one region',
      paragraphs: [
        'The Rhine-Neckar metropolitan region spans three federal states and an unusually broad economy: chemicals and pharma along the Rhine, machinery, plant and agricultural engineering, energy suppliers, one of Europe’s large inland ports and, in Walldorf, SAP’s home town. Accordingly, many companies in the region run SAP – and have collected process data there for years.',
        'That data is a treasure that is rarely put to use. Process intelligence reads it directly from the SAP tables, links orders, deliveries, batches and invoices and shows which causes drive lead time, rework and compliance risks – without building an event log first.',
      ],
    },
  },
  industries: {
    de: [
      { title: 'Chemie & Pharma', text: 'Chargen, Freigaben, Qualitätsprüfungen: Wir zeigen, welche Prüf- und Freigabeschritte den Durchsatz begrenzen – nachvollziehbar und auditfähig.' },
      { title: 'Maschinen-, Anlagen- & Landtechnik', text: 'Auftragsfertigung und Ersatzteilgeschäft: Wo Konstruktion, Beschaffung und Montage aufeinander warten und wo Ersatzteile zu spät beim Kunden ankommen.' },
      { title: 'Logistik & Hafenwirtschaft', text: 'Viele Übergaben zwischen Partnern: Wir verbinden Sendungen, Umschlag und Abrechnung und finden die Ursachen für Standzeiten.' },
      { title: 'Energie', text: 'Netzanschluss, Abrechnung, Kundenservice: Massenprozesse, in denen Schleifen und Rückfragen schnell teuer werden.' },
    ],
    en: [
      { title: 'Chemicals & pharma', text: 'Batches, approvals, quality checks: we show which inspection and release steps limit throughput – traceable and audit-ready.' },
      { title: 'Machinery, plant & agricultural engineering', text: 'Make-to-order and spare parts: where engineering, sourcing and assembly wait for each other and where spare parts reach the customer too late.' },
      { title: 'Logistics & port economy', text: 'Many hand-overs between partners: we connect shipments, handling and billing and find the causes of idle times.' },
      { title: 'Energy', text: 'Grid connection, billing, customer service: high-volume processes in which loops and queries quickly get expensive.' },
    ],
  },
  processes: [
    {
      id: 'purchase-to-pay',
      text: {
        de: 'Beschaffung in SAP: Bestellungen, Wareneingänge und Rechnungsprüfung – inklusive Abweichungen von der Freigabe.',
        en: 'Procurement in SAP: orders, goods receipts and invoice checks – including deviations from approval.',
      },
    },
    {
      id: 'order-to-cash',
      text: {
        de: 'Vom Kundenauftrag über Lieferung und Faktura bis zum Zahlungseingang.',
        en: 'From customer order through delivery and billing to incoming payment.',
      },
    },
  ],
  faq: [
    {
      question: {
        de: 'Betreut ihr die ganze Metropolregion Rhein-Neckar?',
        en: 'Do you cover the whole Rhine-Neckar metropolitan region?',
      },
      answer: {
        de: 'Ja. Neben Mannheim kommen wir nach Heidelberg, Ludwigshafen, Weinheim, Walldorf, Speyer und in die übrige Region – also auch in die pfälzischen und hessischen Teile der Metropolregion.',
        en: 'Yes. Besides Mannheim we come to Heidelberg, Ludwigshafen, Weinheim, Walldorf, Speyer and the rest of the region – including the Palatinate and Hessian parts of the metropolitan region.',
      },
    },
    {
      question: {
        de: 'Wie aufwendig ist die Anbindung an SAP?',
        en: 'How much effort is the SAP connection?',
      },
      answer: {
        de: 'Überschaubar: Noreja liest direkt aus den SAP-Tabellen, ein vorgefertigtes Event Log ist nicht nötig. Im Proof of Value binden wir einen Teilprozess in drei bis vier Wochen an und analysieren ihn – danach sind erfahrungsgemäß rund 60 % der Datenanbindung erledigt.',
        en: 'Manageable: Noreja reads directly from the SAP tables, no pre-built event log needed. In the proof of value we connect and analyze one sub-process in three to four weeks – afterwards roughly 60 % of the data integration is usually done.',
      },
    },
    {
      question: {
        de: 'Eignet sich Process Intelligence für regulierte Prozesse in Chemie und Pharma?',
        en: 'Is process intelligence suitable for regulated processes in chemicals and pharma?',
      },
      answer: {
        de: 'Ja. Gerade dort ist Nachvollziehbarkeit wichtig: Noreja zeigt, wo Prozesse von der vorgesehenen Reihenfolge abweichen, wo Prüfschritte übersprungen oder wiederholt werden und welche Ursachen dahinterstehen. Noreja ist nach ISO 27001 zertifiziert, gehostet wird in Frankfurt oder auf Wunsch On-Premises.',
        en: 'Yes. Traceability matters most there: Noreja shows where processes deviate from the intended sequence, where inspection steps are skipped or repeated and which causes lie behind it. Noreja is ISO 27001 certified and hosted in Frankfurt, or on-premises on request.',
      },
    },
  ],
};
