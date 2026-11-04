import type { ProcessProfile } from '../processProfiles';

export const quoteToCash: ProcessProfile = {
  id: 'quote-to-cash',
  name: 'Quote-to-Cash',
  abbreviation: 'Q2C',
  dateModified: '2026-11-04',
  relatedCases: ['order-to-cash', 'lead-to-activation'],
  agents: ['cycle-time', 'rework', 'working-capital'],
  content: {
    de: {
      metaTitle: 'Quote-to-Cash (Q2C): Prozess, Phasen & KPIs | Noreja',
      metaDescription:
        'Quote-to-Cash (Q2C) vom Angebot bis zur Verlängerung: Phasen, Geschäftsobjekte, KPIs wie Quote Cycle Time und typische Probleme zwischen Vertrieb und Billing.',
      keywords: [
        'Quote-to-Cash',
        'Q2C Prozess',
        'CPQ',
        'Subscription Billing',
        'Angebotsprozess',
        'Umsatzrealisierung',
        'Process Mining Vertrieb',
        'Vertragsverlängerung',
      ],
      area: 'Vertrieb & Finanzen',
      tagline:
        'Vom ersten Angebot bis zur Vertragsverlängerung: wie der Quote-to-Cash-Prozess abläuft, woran er gemessen wird und wo zwischen Vertrieb, Vertrag und Abrechnung Umsatz verloren geht.',
      teaser: 'Vom Angebot bis zur Verlängerung – Konfiguration, Preisfreigabe, Vertrag, Billing und Renewal.',
      definition:
        'Quote-to-Cash (Q2C) ist der End-to-End-Prozess vom Angebot an eine Kundin oder einen Kunden bis zum Zahlungseingang und zur Verlängerung des Vertrags. Er umfasst Produktkonfiguration und Preisfindung (CPQ), Rabatt- und Preisfreigaben, Vertragserstellung, Auftrag, Bereitstellung, Abrechnung einschließlich wiederkehrender Abonnements, Umsatzrealisierung, Forderungsmanagement und Renewal. Q2C verbindet damit Vertrieb, Rechtsabteilung, Operations und Finanzen – und entscheidet, ob ein gewonnener Abschluss vollständig und rechtzeitig zu Umsatz wird.',
      aliases: ['Q2C', 'Quote to Cash', 'Offer-to-Cash', 'Contract-to-Cash', 'CPQ-to-Cash'],
      scope: {
        start: 'Für eine Verkaufschance wird ein Angebot konfiguriert.',
        end: 'Die Zahlung ist eingegangen und der Vertrag ist verlängert, angepasst oder beendet.',
      },
      phases: [
        {
          title: 'Angebot & Konfiguration',
          text: 'Produkte, Optionen und Laufzeiten werden konfiguriert und bepreist; Rabatte außerhalb der Richtlinien gehen in eine Preisfreigabe.',
          steps: ['Angebot erstellt', 'Produkt konfiguriert', 'Rabatt beantragt', 'Preis freigegeben', 'Angebot versendet'],
        },
        {
          title: 'Vertrag & Auftrag',
          text: 'Aus dem angenommenen Angebot entsteht ein Vertrag, der verhandelt, juristisch geprüft und unterschrieben wird; danach wird der Auftrag angelegt.',
          steps: ['Vertrag erstellt', 'Vertragsprüfung', 'Vertrag unterschrieben', 'Auftrag angelegt'],
        },
        {
          title: 'Bereitstellung',
          text: 'Je nach Geschäftsmodell werden Waren geliefert, Lizenzen freigeschaltet oder Services eingerichtet; der Leistungsbeginn bestimmt den Start der Abrechnung.',
          steps: ['Lieferung oder Provisionierung', 'Leistung bereitgestellt', 'Abnahme bestätigt'],
        },
        {
          title: 'Abrechnung & Umsatzrealisierung',
          text: 'Einmalige und wiederkehrende Rechnungen werden erstellt, nutzungsabhängige Positionen ergänzt und der Umsatz nach den Regeln der Rechnungslegung über die Laufzeit realisiert.',
          steps: ['Rechnung erstellt', 'Wiederkehrende Abrechnung', 'Umsatz realisiert', 'Zahlung eingegangen', 'Mahnung versendet'],
        },
        {
          title: 'Verlängerung & Änderung',
          text: 'Vor Vertragsende wird über Verlängerung, Upgrade oder Kündigung entschieden; Änderungen während der Laufzeit führen zu neuen Angeboten und Anpassungen der Abrechnung.',
          steps: ['Verlängerungsangebot erstellt', 'Upsell oder Änderung', 'Vertrag verlängert', 'Kündigung erfasst'],
        },
      ],
      objects: [
        { name: 'Angebot', text: 'Konfiguriertes Angebot mit Positionen, Preisen, Rabatten und Versionen.' },
        { name: 'Preisfreigabe', text: 'Freigabeanfrage für Rabatte oder Sonderkonditionen, mit Genehmigenden und Entscheidung.' },
        { name: 'Vertrag', text: 'Vereinbarung mit Laufzeit, Konditionen und Status von Entwurf bis unterschrieben, verlängert oder gekündigt.' },
        { name: 'Auftrag', text: 'Operativer Auftrag, der Bereitstellung und Abrechnung auslöst.' },
        { name: 'Abonnement', text: 'Wiederkehrende Leistung mit Abrechnungsrhythmus, Laufzeit und Änderungen während der Laufzeit.' },
        { name: 'Rechnung & Zahlung', text: 'Einmalige oder wiederkehrende Rechnung, der Zahlungseingang und gegebenenfalls Gutschriften.' },
      ],
      systems: [
        'CRM und CPQ (z. B. Salesforce Sales Cloud und Salesforce CPQ, SAP CPQ, HubSpot)',
        'Vertragsmanagement und E-Signatur (z. B. DocuSign CLM, Ironclad)',
        'Subscription Billing (z. B. Zuora, SAP Billing and Revenue Innovation Management)',
        'ERP für Auftrag, Faktura und Debitoren (z. B. SAP S/4HANA, NetSuite)',
      ],
      kpis: [
        { name: 'Quote Cycle Time', text: 'Zeit von der Angebotserstellung bis zum versendeten, freigegebenen Angebot.' },
        { name: 'Quote-to-Close-Zeit', text: 'Zeit vom ersten Angebot bis zum unterschriebenen Vertrag.' },
        { name: 'Rabattabweichungen', text: 'Angebote mit Rabatten außerhalb der Richtlinie oder ohne vorgesehene Freigabe.' },
        { name: 'Zeit bis zur ersten Rechnung', text: 'Abstand zwischen Vertragsunterschrift oder Leistungsbeginn und erster Rechnung.' },
        { name: 'Rechnungskorrekturen', text: 'Gutschriften und Neuausstellungen, weil Rechnung und Vertrag nicht übereinstimmen.' },
        { name: 'Renewal Rate', text: 'Anteil der auslaufenden Verträge, die verlängert werden.' },
      ],
      challenges: [
        {
          title: 'Freigaben bremsen das Angebot',
          text: 'Sonderrabatte durchlaufen mehrere Freigabestufen. Ohne Transparenz über den Freigabeweg warten Angebote, während die Kundin oder der Kunde auf eine Antwort wartet.',
        },
        {
          title: 'Vertrag und Rechnung passen nicht zusammen',
          text: 'Konditionen aus dem Vertrag kommen unvollständig im Billing an. Die Folge sind Rechnungskorrekturen, Rückfragen und verspätete Zahlungen.',
        },
        {
          title: 'Lücke zwischen Unterschrift und Abrechnung',
          text: 'Bereitstellung oder Auftragsanlage verzögern sich, und die erste Rechnung geht später hinaus als vertraglich möglich – Umsatz, der bereits gewonnen war, kommt verspätet an.',
        },
        {
          title: 'Verlängerungen auf den letzten Drücker',
          text: 'Renewals werden erst kurz vor Vertragsende angestoßen. Verträge laufen ungewollt aus oder verlängern sich zu alten Konditionen.',
        },
      ],
      questions: [
        'Welche Freigabestufen verlängern die Angebotserstellung am stärksten?',
        'Bei welchen Angeboten werden Rabatte ohne vorgesehene Freigabe gewährt?',
        'Wie lange dauert es von der Unterschrift bis zur ersten Rechnung – und woran liegt es?',
        'Welche Vertragskonditionen führen regelmäßig zu Rechnungskorrekturen?',
        'Wie oft wird ein Angebot nach dem Versand noch einmal überarbeitet?',
        'Wann werden Verlängerungen angestoßen, und welche Verträge laufen ungeplant aus?',
      ],
      approach: [
        'Quote-to-Cash ist kein einzelner Fall, sondern ein Geflecht: Ein Angebot hat mehrere Versionen, ein Vertrag bündelt mehrere Angebote, ein Abonnement erzeugt über Jahre viele Rechnungen und wird durch Änderungen und Verlängerungen immer wieder neu geschnitten. Ein flacher Eventlog muss sich für Angebot, Vertrag oder Rechnung als Fall entscheiden. Noreja verbindet diese Objekte im Event Knowledge Graph und zeigt so, welche Rechnungskorrektur auf welche Vertragsversion und welche Preisfreigabe zurückgeht.',
        'Die erwartete Reihenfolge wird mit Fachwissen modelliert: Preisfreigabe vor Versand, Unterschrift vor Bereitstellung, Abrechnung ab Leistungsbeginn, Verlängerungsangebot vor Vertragsende. Abweichungen davon – ein Angebot ohne Freigabe, eine Bereitstellung ohne Vertrag, ein Renewal nach Ablauf – werden so als Befund sichtbar statt als Rauschen.',
      ],
      faq: [
        {
          question: 'Was ist der Quote-to-Cash-Prozess?',
          answer:
            'Quote-to-Cash (Q2C) ist der End-to-End-Prozess vom Angebot über Konfiguration und Preisfreigabe, Vertrag, Auftrag, Bereitstellung und Abrechnung bis zum Zahlungseingang und zur Verlängerung des Vertrags.',
        },
        {
          question: 'Was ist der Unterschied zwischen Quote-to-Cash und Order-to-Cash?',
          answer:
            'Order-to-Cash beginnt mit dem Kundenauftrag und endet mit dem Zahlungseingang. Quote-to-Cash setzt früher an – beim Angebot und der Preisfindung – und schließt Vertragsverhandlung, wiederkehrende Abrechnung und Verlängerung ein. Order-to-Cash ist damit ein Teil von Quote-to-Cash.',
        },
        {
          question: 'Welche KPIs sind im Quote-to-Cash wichtig?',
          answer:
            'Typische Kennzahlen sind Quote Cycle Time, die Zeit vom Angebot bis zur Unterschrift, Rabattabweichungen, die Zeit bis zur ersten Rechnung, Rechnungskorrekturen und die Renewal Rate.',
        },
        {
          question: 'Was hat CPQ mit Quote-to-Cash zu tun?',
          answer:
            'CPQ steht für Configure, Price, Quote und deckt den Anfang des Prozesses ab: Produkt konfigurieren, Preis bestimmen, Angebot erstellen. Quote-to-Cash reicht weiter, über Vertrag, Bereitstellung und Abrechnung bis zur Verlängerung.',
        },
      ],
    },
    en: {
      metaTitle: 'Quote-to-Cash (Q2C): Process, Phases & KPIs | Noreja',
      metaDescription:
        'Quote-to-cash (Q2C) from quote to renewal: phases, business objects, KPIs such as quote cycle time and typical problems between sales, contracts and billing.',
      keywords: [
        'Quote-to-Cash',
        'Q2C process',
        'CPQ',
        'subscription billing',
        'quote process',
        'revenue recognition',
        'process mining sales',
        'contract renewal',
      ],
      area: 'Sales & finance',
      tagline:
        'From the first quote to the contract renewal: how the quote-to-cash process runs, how it is measured and where revenue leaks between sales, contracts and billing.',
      teaser: 'From quote to renewal – configuration, pricing approval, contract, billing and renewal.',
      definition:
        'Quote-to-cash (Q2C) is the end-to-end process from a quote to a customer through to incoming payment and the renewal of the contract. It covers product configuration and pricing (CPQ), discount and pricing approvals, contract creation, the order, fulfilment and provisioning, billing including recurring subscriptions, revenue recognition, collections and renewal. Q2C thus connects sales, legal, operations and finance – and decides whether a won deal turns into revenue completely and on time.',
      aliases: ['Q2C', 'Quote to Cash', 'Offer-to-Cash', 'Contract-to-Cash', 'CPQ-to-Cash'],
      scope: {
        start: 'A quote is configured for a sales opportunity.',
        end: 'Payment has been received and the contract has been renewed, amended or terminated.',
      },
      phases: [
        {
          title: 'Quote & configuration',
          text: 'Products, options and terms are configured and priced; discounts outside the guidelines go to a pricing approval.',
          steps: ['Quote created', 'Product configured', 'Discount requested', 'Price approved', 'Quote sent'],
        },
        {
          title: 'Contract & order',
          text: 'The accepted quote becomes a contract that is negotiated, reviewed by legal and signed; the order is then created.',
          steps: ['Contract drafted', 'Contract review', 'Contract signed', 'Order created'],
        },
        {
          title: 'Fulfilment & provisioning',
          text: 'Depending on the business model, goods are delivered, licences activated or services set up; the service start determines when billing begins.',
          steps: ['Delivery or provisioning', 'Service provided', 'Acceptance confirmed'],
        },
        {
          title: 'Billing & revenue recognition',
          text: 'One-off and recurring invoices are issued, usage-based items added and revenue recognised over the term according to accounting rules.',
          steps: ['Invoice issued', 'Recurring billing', 'Revenue recognised', 'Payment received', 'Dunning notice sent'],
        },
        {
          title: 'Renewal & amendment',
          text: 'Before the contract ends, renewal, upgrade or cancellation is decided; changes during the term lead to new quotes and billing adjustments.',
          steps: ['Renewal quote created', 'Upsell or amendment', 'Contract renewed', 'Cancellation recorded'],
        },
      ],
      objects: [
        { name: 'Quote', text: 'Configured quote with line items, prices, discounts and versions.' },
        { name: 'Pricing approval', text: 'Approval request for discounts or special terms, with approvers and decision.' },
        { name: 'Contract', text: 'Agreement with term, conditions and a status from draft to signed, renewed or terminated.' },
        { name: 'Order', text: 'Operational order that triggers fulfilment and billing.' },
        { name: 'Subscription', text: 'Recurring service with billing frequency, term and changes during the term.' },
        { name: 'Invoice & payment', text: 'One-off or recurring invoice, the incoming payment and any credit notes.' },
      ],
      systems: [
        'CRM and CPQ (e.g. Salesforce Sales Cloud and Salesforce CPQ, SAP CPQ, HubSpot)',
        'Contract management and e-signature (e.g. DocuSign CLM, Ironclad)',
        'Subscription billing (e.g. Zuora, SAP Billing and Revenue Innovation Management)',
        'ERP for orders, invoicing and receivables (e.g. SAP S/4HANA, NetSuite)',
      ],
      kpis: [
        { name: 'Quote cycle time', text: 'Time from creating a quote to sending the approved quote.' },
        { name: 'Quote-to-close time', text: 'Time from the first quote to the signed contract.' },
        { name: 'Discount deviations', text: 'Quotes with discounts outside the guideline or without the required approval.' },
        { name: 'Time to first invoice', text: 'Gap between contract signature or service start and the first invoice.' },
        { name: 'Invoice corrections', text: 'Credit notes and reissued invoices because invoice and contract do not match.' },
        { name: 'Renewal rate', text: 'Share of expiring contracts that are renewed.' },
      ],
      challenges: [
        {
          title: 'Approvals slow down the quote',
          text: 'Special discounts pass through several approval levels. Without visibility of the approval path, quotes sit idle while the customer waits for an answer.',
        },
        {
          title: 'Contract and invoice do not match',
          text: 'Terms from the contract reach billing incompletely. The result is invoice corrections, customer queries and late payments.',
        },
        {
          title: 'Gap between signature and billing',
          text: 'Provisioning or order creation is delayed, and the first invoice goes out later than the contract would allow – revenue that was already won arrives late.',
        },
        {
          title: 'Last-minute renewals',
          text: 'Renewals are only started shortly before the contract ends. Contracts lapse unintentionally or roll over on outdated terms.',
        },
      ],
      questions: [
        'Which approval levels lengthen quote creation the most?',
        'Which quotes grant discounts without the required approval?',
        'How long does it take from signature to first invoice – and why?',
        'Which contract terms regularly lead to invoice corrections?',
        'How often is a quote reworked after it has been sent?',
        'When are renewals started, and which contracts lapse unplanned?',
      ],
      approach: [
        'Quote-to-cash is not a single case but a web: a quote has several versions, a contract bundles several quotes, and a subscription generates many invoices over the years while amendments and renewals keep reshaping it. A flat event log has to choose the quote, the contract or the invoice as its case. Noreja connects these objects in the event knowledge graph and shows which invoice correction goes back to which contract version and which pricing approval.',
        'The expected order is modelled with domain knowledge: pricing approval before the quote is sent, signature before provisioning, billing from service start, renewal quote before the contract ends. Deviations – a quote without approval, provisioning without a contract, a renewal after expiry – then show up as findings rather than noise.',
      ],
      faq: [
        {
          question: 'What is the quote-to-cash process?',
          answer:
            'Quote-to-cash (Q2C) is the end-to-end process from the quote through configuration and pricing approval, contract, order, fulfilment and billing to incoming payment and the renewal of the contract.',
        },
        {
          question: 'What is the difference between quote-to-cash and order-to-cash?',
          answer:
            'Order-to-cash starts with the customer order and ends with incoming payment. Quote-to-cash starts earlier – with the quote and pricing – and also covers contract negotiation, recurring billing and renewal. Order-to-cash is therefore part of quote-to-cash.',
        },
        {
          question: 'Which KPIs matter in quote-to-cash?',
          answer:
            'Typical KPIs are quote cycle time, the time from quote to signature, discount deviations, time to first invoice, invoice corrections and the renewal rate.',
        },
        {
          question: 'How does CPQ relate to quote-to-cash?',
          answer:
            'CPQ stands for configure, price, quote and covers the start of the process: configuring the product, setting the price and creating the quote. Quote-to-cash goes further, through contract, fulfilment and billing up to renewal.',
        },
      ],
    },
  },
};
