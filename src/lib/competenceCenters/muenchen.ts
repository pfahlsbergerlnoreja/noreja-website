import type { CompetenceCityContent } from '../competenceCenters';

export const muenchen: CompetenceCityContent = {
  id: 'muenchen',
  metaTitle: {
    de: 'Process Mining & Prozessoptimierung München',
    en: 'Process Mining Consulting Munich',
  },
  metaDescription: {
    de: 'Process Mining Beratung in München: Process Intelligence mit kausaler Analyse und KI-Agenten für Versicherer, Industrie und Mittelstand. Workshops vor Ort.',
    en: 'Process mining consulting in Munich: process intelligence with causal analysis and AI agents for insurers, industry and mid-sized companies. On-site workshops.',
  },
  h1: {
    de: 'Process Mining Beratung in München und Oberbayern',
    en: 'Process Mining Consulting in Munich and Upper Bavaria',
  },
  intro: {
    de: 'In München ist Process Mining kein Fremdwort – viele Unternehmen haben es ausprobiert, manche sind an Grenzen gestoßen. Wir bringen den nächsten Schritt: Process Intelligence, die Prozesse kausal in einem Event Knowledge Graph modelliert und mit KI-Agenten auswertet. Für Versicherer, Industrie, Softwarehäuser und den Mittelstand in Oberbayern – mit Workshops vor Ort und einem Proof of Value in drei bis vier Wochen.',
    en: 'In Munich, process mining is no foreign word – many companies have tried it, and some have hit its limits. We bring the next step: process intelligence that models processes causally in an event knowledge graph and analyzes them with AI agents. For insurers, industry, software houses and mid-sized companies in Upper Bavaria – with on-site workshops and a proof of value in three to four weeks.',
  },
  teaser: {
    de: 'Für Versicherer, Industrie, Software und Mittelstand im Großraum München.',
    en: 'For insurers, industry, software and mid-sized companies in Greater Munich.',
  },
  presence: {
    de: {
      title: 'Vor Ort in München',
      text: 'Unser Firmensitz in Hohenweiler am Bodensee liegt direkt an der bayerischen Grenze, von dort ist München gut erreichbar. Kick-off und Ergebnisworkshop machen wir bei dir im Haus, auf Wunsch auch einen Termin mit Fachbereich und IT gemeinsam. Datenanbindung und Analyse dazwischen laufen remote.',
    },
    en: {
      title: 'On site in Munich',
      text: 'Our registered office in Hohenweiler on Lake Constance sits right on the Bavarian border, and Munich is easy to reach from there. We hold the kick-off and results workshop at your site and, if you like, a joint session with business and IT. Data connection and analysis in between run remotely.',
    },
  },
  surroundings: {
    de: ['Garching und Unterschleißheim', 'Freising und Flughafenregion', 'Fürstenfeldbruck und Dachau', 'Starnberg', 'Rosenheim', 'Ingolstadt'],
    en: ['Garching and Unterschleissheim', 'Freising and the airport region', 'Fürstenfeldbruck and Dachau', 'Starnberg', 'Rosenheim', 'Ingolstadt'],
  },
  region: {
    de: {
      title: 'Großraum München: Konzernsitze und ein starker Mittelstand',
      paragraphs: [
        'München vereint große Versicherer und Rückversicherer, Fahrzeugbau, Elektrotechnik, Medizintechnik und eine der größten Software- und Tech-Szenen Deutschlands. Ebenso prägend ist der Mittelstand im Umland: Maschinenbau, Lebensmittel und Zulieferer zwischen Freising, Rosenheim und Ingolstadt – oft familiengeführt und international aufgestellt.',
        'Process Mining ist in München zu Hause, und viele Unternehmen kennen frequenzbasierte Prozessmodelle bereits. Unser Ansatz geht weiter: Statt nur zu zählen, welche Aktivität auf welche folgt, modelliert Noreja, welche Ereignisse sich tatsächlich bedingen – über Aufträge, Verträge und Schadenfälle hinweg. Minerva und ihre KI-Agenten beantworten Fragen dazu in Klartext.',
      ],
    },
    en: {
      title: 'Greater Munich: corporate headquarters and strong mid-sized companies',
      paragraphs: [
        'Munich combines large insurers and reinsurers, vehicle manufacturing, electrical engineering, medical technology and one of Germany’s largest software and tech scenes. Just as defining are the mid-sized companies in the surrounding area: mechanical engineering, food and suppliers between Freising, Rosenheim and Ingolstadt – often family-run and internationally active.',
        'Process mining is at home in Munich, and many companies already know frequency-based process models. Our approach goes further: instead of only counting which activity follows which, Noreja models which events actually depend on each other – across orders, contracts and claims. Minerva and her AI agents answer questions about them in plain language.',
      ],
    },
  },
  industries: {
    de: [
      { title: 'Versicherungen', text: 'Antrag, Vertrag, Schaden, Versicherungsteuer: Wir finden die Schleifen und übersprungenen Kontrollen, die Bearbeitungszeit und Compliance kosten.' },
      { title: 'Fahrzeugbau & Zulieferer', text: 'Abrufe, Fertigung, Versand: Wir verbinden Werke, Lieferanten und Kunden in einem kausalen Prozessgraphen.' },
      { title: 'Software & Tech', text: 'Vom Lead bis zur Aktivierung: Wo Interessenten abspringen und wo Onboarding und Abrechnung hängen.' },
      { title: 'Mittelstand im Umland', text: 'Maschinenbau, Lebensmittel, Handel: Auftragsabwicklung und Einkauf transparent machen, ohne großes Datenprojekt vorab.' },
    ],
    en: [
      { title: 'Insurance', text: 'Application, policy, claim, insurance tax: we find the loops and skipped controls that cost handling time and compliance.' },
      { title: 'Vehicle manufacturing & suppliers', text: 'Call-offs, production, shipping: we connect plants, suppliers and customers in one causal process graph.' },
      { title: 'Software & tech', text: 'From lead to activation: where prospects drop off and where onboarding and billing get stuck.' },
      { title: 'Mid-sized companies in the region', text: 'Mechanical engineering, food, retail: make order processing and purchasing transparent without a big data project up front.' },
    ],
  },
  processes: [
    {
      id: 'premium-to-tax',
      text: {
        de: 'Für Versicherer: von der Prämie bis zur bezahlten Versicherungsteuer, mit allen Kontrollen.',
        en: 'For insurers: from premium to paid insurance tax, including every control.',
      },
    },
    {
      id: 'lead-to-activation',
      text: {
        de: 'Für Software- und Plattformanbieter: vom ersten Kontakt bis zum aktiven Kunden.',
        en: 'For software and platform providers: from first contact to active customer.',
      },
    },
    {
      id: 'order-to-cash',
      text: {
        de: 'Für Industrie und Mittelstand: Auftrag, Lieferung, Rechnung und Zahlung durchgängig.',
        en: 'For industry and mid-sized companies: order, delivery, invoice and payment end to end.',
      },
    },
  ],
  faq: [
    {
      question: {
        de: 'Seid ihr für Workshops in München vor Ort?',
        en: 'Do you come to Munich for workshops?',
      },
      answer: {
        de: 'Ja. Kick-off und Ergebnisworkshop finden persönlich bei dir statt – in München und im Umland von Freising bis Rosenheim. Datenanbindung und Analyse dazwischen laufen remote, sodass deine Teams nur für die Workshops Zeit einplanen müssen.',
        en: 'Yes. Kick-off and results workshop take place in person at your company – in Munich and the surrounding area from Freising to Rosenheim. Data connection and analysis in between run remotely, so your teams only need to set aside time for the workshops.',
      },
    },
    {
      question: {
        de: 'Wir setzen schon ein Process-Mining-Tool ein. Passt Noreja trotzdem?',
        en: 'We already use a process mining tool. Does Noreja still fit?',
      },
      answer: {
        de: 'Ja, als Ergänzung oder als Alternative. Klassische Tools arbeiten frequenzbasiert auf einem Event Log; Noreja liest direkt aus den Quellsystemen und modelliert Ursache-Wirkungs-Beziehungen. Das hilft vor allem dort, wo Prozesse über mehrere Objekte laufen und die Frage nach dem Warum offen bleibt. Einen sachlichen Vergleich findest du in unseren Battle Cards.',
        en: 'Yes, as a complement or an alternative. Classic tools work frequency-based on an event log; Noreja reads directly from the source systems and models cause-and-effect relationships. That helps above all where processes span several objects and the question of why remains open. You will find a factual comparison in our battle cards.',
      },
    },
    {
      question: {
        de: 'Wie sicher sind unsere Daten, etwa als Versicherer?',
        en: 'How secure is our data, for example as an insurer?',
      },
      answer: {
        de: 'Noreja ist nach ISO 27001 zertifiziert. Gehostet wird bei Google Cloud oder AWS in Frankfurt, auf Wunsch in einer anderen Region oder On-Premises. Für KI-Auswertungen kann ein privates Sprachmodell in einer vollständig isolierten Umgebung betrieben werden.',
        en: 'Noreja is ISO 27001 certified. Hosting is with Google Cloud or AWS in Frankfurt, on request in another region or on-premises. For AI analyses, a private language model can run in a fully isolated environment.',
      },
    },
  ],
  related: [
    {
      label: { de: 'Noreja vs. Celonis im Vergleich', en: 'Noreja vs. Celonis compared' },
      path: { de: '/de/battle-cards/celonis', en: '/en/battle-cards/celonis' },
    },
    {
      label: { de: 'Top 10 Celonis-Alternativen', en: 'Top 10 Celonis alternatives' },
      path: { de: '/de/battle-cards/top-10/celonis-alternatives', en: '/en/battle-cards/top-10/celonis-alternatives' },
    },
    {
      label: { de: 'Success Story: CIB', en: 'Success story: CIB' },
      path: { de: '/de/success-story/cib', en: '/en/success-story/cib' },
    },
  ],
};
