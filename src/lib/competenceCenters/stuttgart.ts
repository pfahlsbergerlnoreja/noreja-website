import type { CompetenceCityContent } from '../competenceCenters';

export const stuttgart: CompetenceCityContent = {
  id: 'stuttgart',
  metaTitle: {
    de: 'Process Mining & Prozessoptimierung Stuttgart',
    en: 'Process Mining Consulting Stuttgart',
  },
  metaDescription: {
    de: 'Process Mining Beratung für Automobilzulieferer, Maschinenbau und Versicherer in der Region Stuttgart: Workshops vor Ort, Proof of Value in 3–4 Wochen.',
    en: 'Process mining consulting for automotive suppliers, mechanical engineering and insurers in the Stuttgart region: on-site workshops, proof of value in 3–4 weeks.',
  },
  h1: {
    de: 'Process Mining Beratung in Stuttgart und der Region',
    en: 'Process Mining Consulting in Stuttgart and the Region',
  },
  intro: {
    de: 'Wir unterstützen Unternehmen in Stuttgart und der Region mit Process Mining und Process Intelligence: Automobilzulieferer, Maschinen- und Anlagenbauer, Versicherer und Finanzdienstleister. Kick-off und Ergebnisworkshop finden bei dir vor Ort statt, dazwischen analysieren wir einen Teilprozess in drei bis vier Wochen – kausal, also mit den Ursachen hinter Verzögerungen und Nacharbeit.',
    en: 'We support companies in Stuttgart and the surrounding region with process mining and process intelligence: automotive suppliers, machinery and plant manufacturers, insurers and financial services providers. Kick-off and results workshop take place at your site; in between we analyze one sub-process in three to four weeks – causally, meaning with the causes behind delays and rework.',
  },
  teaser: {
    de: 'Für Zulieferer, Maschinenbau und Versicherer zwischen Ludwigsburg, Esslingen und Böblingen.',
    en: 'For suppliers, mechanical engineering and insurers between Ludwigsburg, Esslingen and Böblingen.',
  },
  presence: {
    de: {
      title: 'Vor Ort in der Region Stuttgart',
      text: 'Von unserem Standort in Freiburg sind wir schnell im Neckartal. Wir kommen zum Kick-off zu dir, sehen uns die Abläufe dort an, wo sie passieren – in der Fertigung, im Einkauf, in der Schadenbearbeitung – und stellen die Ergebnisse gemeinsam mit deinen Fachbereichen vor. Die Datenanbindung und Analyse dazwischen erledigen wir remote.',
    },
    en: {
      title: 'On site in the Stuttgart region',
      text: 'From our location in Freiburg we are quickly in the Neckar valley. We come to you for the kick-off, look at the processes where they happen – on the shop floor, in purchasing, in claims handling – and present the results together with your departments. Data connection and analysis in between run remotely.',
    },
  },
  surroundings: {
    de: ['Ludwigsburg', 'Esslingen am Neckar', 'Böblingen und Sindelfingen', 'Waiblingen und Rems-Murr', 'Göppingen', 'Reutlingen und Tübingen'],
    en: ['Ludwigsburg', 'Esslingen am Neckar', 'Böblingen and Sindelfingen', 'Waiblingen and Rems-Murr', 'Göppingen', 'Reutlingen and Tübingen'],
  },
  region: {
    de: {
      title: 'Region Stuttgart: Industrie im Umbruch',
      paragraphs: [
        'Rund um Stuttgart sitzt eine der dichtesten Industrielandschaften Europas: Fahrzeugbau und ein breites Netz an Zulieferern, Maschinen- und Anlagenbau, Elektrotechnik, dazu ein starker Finanz- und Versicherungsstandort. Viele der Zulieferer sind Familienunternehmen, die gerade ihr Produktportfolio umbauen – weg vom Verbrenner, hin zu Elektromobilität, Software und neuen Märkten.',
        'In so einer Phase entscheidet die Prozesseffizienz über die Marge: Wenn Stückzahlen schwanken und Preise unter Druck stehen, muss klar sein, wo Durchlaufzeit, Sonderfahrten und gebundenes Kapital entstehen. Process Intelligence liefert dieses Bild aus den Daten, die in SAP oder deinem ERP ohnehin schon liegen – und zeigt die Ursachen, nicht nur die Symptome.',
      ],
    },
    en: {
      title: 'The Stuttgart region: industry in transition',
      paragraphs: [
        'Around Stuttgart lies one of the densest industrial landscapes in Europe: vehicle manufacturing and a wide network of suppliers, machinery and plant engineering, electrical engineering, plus a strong financial and insurance centre. Many of the suppliers are family businesses currently rebuilding their portfolio – away from the combustion engine, towards electric mobility, software and new markets.',
        'In a phase like this, process efficiency decides the margin: when volumes fluctuate and prices are under pressure, it has to be clear where lead time, special shipments and tied-up capital come from. Process intelligence delivers that picture from the data that already sits in SAP or your ERP – and shows the causes, not just the symptoms.',
      ],
    },
  },
  industries: {
    de: [
      { title: 'Automobilzulieferer', text: 'Abrufschwankungen, Sonderfahrten, Lieferperformance: Wir verbinden Kundenabrufe, Fertigung und Versand und zeigen, welche Ursachen Termintreue und Marge kosten.' },
      { title: 'Maschinen- & Anlagenbau', text: 'Auftragsfertigung mit langen Durchlaufzeiten: Wir machen sichtbar, wo Konstruktion, Einkauf und Montage aufeinander warten.' },
      { title: 'Versicherungen & Finanzdienstleister', text: 'Antrags-, Vertrags- und Schadenprozesse: Wir finden die Schleifen, die Bearbeitungszeit und Kundenzufriedenheit kosten.' },
      { title: 'Elektrotechnik', text: 'Variantenreiche Produkte und globale Beschaffung: Purchase-to-Pay und Order-to-Cash in einem durchgängigen Prozessgraphen.' },
    ],
    en: [
      { title: 'Automotive suppliers', text: 'Fluctuating call-offs, special shipments, delivery performance: we connect customer call-offs, production and shipping and show which causes cost on-time delivery and margin.' },
      { title: 'Machinery & plant engineering', text: 'Make-to-order with long lead times: we show where engineering, purchasing and assembly wait for each other.' },
      { title: 'Insurance & financial services', text: 'Application, policy and claims processes: we find the loops that cost handling time and customer satisfaction.' },
      { title: 'Electrical engineering', text: 'Variant-rich products and global sourcing: purchase-to-pay and order-to-cash in one end-to-end process graph.' },
    ],
  },
  processes: [
    {
      id: 'order-to-cash',
      text: {
        de: 'Vom Kundenabruf bis zum Zahlungseingang: Liefertreue, Teillieferungen und Forderungslaufzeit.',
        en: 'From customer call-off to incoming payment: on-time delivery, partial shipments and days sales outstanding.',
      },
    },
    {
      id: 'purchase-to-pay',
      text: {
        de: 'Beschaffung bei vielen Lieferanten: Wo Bestellungen, Wareneingänge und Rechnungsprüfung auseinanderlaufen.',
        en: 'Sourcing from many suppliers: where orders, goods receipts and invoice checks drift apart.',
      },
    },
    {
      id: 'premium-to-tax',
      text: {
        de: 'Für Versicherer: vom Beitrag bis zur Versicherungsteuer, durchgängig nachvollziehbar.',
        en: 'For insurers: from premium to insurance tax, traceable end to end.',
      },
    },
  ],
  faq: [
    {
      question: {
        de: 'Kommt ihr für Workshops nach Stuttgart?',
        en: 'Do you come to Stuttgart for workshops?',
      },
      answer: {
        de: 'Ja. Kick-off und Ergebnisworkshop machen wir persönlich bei dir – in Stuttgart und in der ganzen Region, von Ludwigsburg bis Reutlingen. Die Datenanbindung und die Analyse dazwischen laufen remote.',
        en: 'Yes. We hold the kick-off and the results workshop in person at your company – in Stuttgart and across the region, from Ludwigsburg to Reutlingen. Data connection and analysis in between run remotely.',
      },
    },
    {
      question: {
        de: 'Wie hilft Process Intelligence Automobilzulieferern in der Transformation?',
        en: 'How does process intelligence help automotive suppliers in the transition?',
      },
      answer: {
        de: 'Wenn Volumen und Preise unter Druck stehen, zählt jede Stunde Durchlaufzeit und jeder Euro gebundenes Kapital. Noreja verbindet Kundenabrufe, Fertigung, Einkauf und Versand in einem kausalen Prozessgraphen und zeigt, welche Ursachen Termintreue und Marge kosten – als Grundlage für Maßnahmen, die sich priorisieren lassen.',
        en: 'When volumes and prices are under pressure, every hour of lead time and every euro of tied-up capital counts. Noreja connects customer call-offs, production, purchasing and shipping in a causal process graph and shows which causes cost on-time delivery and margin – a basis for measures you can prioritize.',
      },
    },
    {
      question: {
        de: 'Wir arbeiten mit SAP – brauchen wir dafür ein eigenes Datenprojekt?',
        en: 'We run SAP – do we need a separate data project?',
      },
      answer: {
        de: 'Nein. Noreja liest direkt aus den Tabellen der operativen Systeme, ein vorgefertigtes Event Log ist nicht nötig. Nach dem Proof of Value sind erfahrungsgemäß rund 60 % der Datenanbindung bereits erledigt, sodass der Übergang in den laufenden Betrieb schnell geht.',
        en: 'No. Noreja reads directly from the tables of your operational systems; no pre-built event log is needed. After the proof of value, roughly 60 % of the data integration is usually done, so moving into regular operation is quick.',
      },
    },
  ],
};
