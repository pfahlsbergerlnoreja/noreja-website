import type { CompetenceCityContent } from '../competenceCenters';

export const augsburg: CompetenceCityContent = {
  id: 'augsburg',
  metaTitle: {
    de: 'Process Mining & Prozessoptimierung Augsburg',
    en: 'Process Mining Consulting Augsburg',
  },
  metaDescription: {
    de: 'Process Mining Beratung in Augsburg und Bayerisch-Schwaben, gemeinsam mit Partner Miragon: Prozessoptimierung vor Ort, Proof of Value in 3–4 Wochen.',
    en: 'Process mining consulting in Augsburg and Bavarian Swabia, together with partner Miragon: process optimization on site, proof of value in 3–4 weeks.',
  },
  h1: {
    de: 'Process Mining Beratung in Augsburg und Bayerisch-Schwaben',
    en: 'Process Mining Consulting in Augsburg and Bavarian Swabia',
  },
  intro: {
    de: 'In Augsburg arbeiten wir Hand in Hand mit Miragon, unserem Technologie- und Implementierungspartner mit Sitz in der Stadt. Gemeinsam begleiten wir Maschinenbauer, Automatisierer, Luftfahrtzulieferer und den Mittelstand in Bayerisch-Schwaben: Noreja findet mit Process Intelligence die Ursachen für Verzögerungen und Nacharbeit, Miragon bringt die Erfahrung in Prozessmanagement und Automatisierung mit, um sie abzustellen.',
    en: 'In Augsburg we work hand in hand with Miragon, our technology and implementation partner based in the city. Together we support mechanical engineering, automation and aerospace suppliers and the mid-sized companies of Bavarian Swabia: Noreja finds the causes of delays and rework with process intelligence, Miragon brings the experience in process management and automation to fix them.',
  },
  teaser: {
    de: 'Gemeinsam mit unserem Partner Miragon – für Maschinenbau, Automation und Mittelstand in Schwaben.',
    en: 'Together with our partner Miragon – for engineering, automation and mid-sized companies in Swabia.',
  },
  presence: {
    de: {
      title: 'Vor Ort in Augsburg – mit Miragon',
      text: 'Miragon ist eine Boutique-Beratung für Prozessmanagement, Process Mining und Automatisierung aus Augsburg und setzt Noreja-Projekte als Implementierungspartner um. Für dich heißt das: ein Team, das vor Ort ist, die Unternehmen der Region kennt und nach der Analyse auch die Umsetzung begleiten kann – von der Prozessverbesserung bis zur Automatisierung.',
    },
    en: {
      title: 'On site in Augsburg – with Miragon',
      text: 'Miragon is a boutique consultancy for process management, process mining and automation from Augsburg and implements Noreja projects as an implementation partner. For you that means a team that is on site, knows the region’s companies and can carry on into implementation after the analysis – from process improvement to automation.',
    },
  },
  surroundings: {
    de: ['Landkreis Augsburg', 'Aichach-Friedberg', 'Donau-Ries', 'Günzburg', 'Kaufbeuren und Ostallgäu', 'Memmingen und Unterallgäu'],
    en: ['Augsburg district', 'Aichach-Friedberg', 'Donau-Ries', 'Günzburg', 'Kaufbeuren and Ostallgäu', 'Memmingen and Unterallgäu'],
  },
  region: {
    de: {
      title: 'Bayerisch-Schwaben: Maschinenbau, Automation und Leichtbau',
      paragraphs: [
        'Augsburg und das Umland stehen für Maschinenbau, Robotik und Automation, Luft- und Raumfahrt, Faserverbund und Umwelttechnik. Dazu kommt ein breiter Mittelstand in Schwaben und im Allgäu – Familienunternehmen, die in ihren Märkten führend sind und in der Fertigung mit vielen Varianten und kleinen Losgrößen arbeiten.',
        'Wer automatisieren will, muss zuerst wissen, welcher Prozess sich lohnt und woran er tatsächlich hängt. Genau hier greifen Noreja und Miragon ineinander: Process Intelligence liefert die kausale Analyse direkt aus ERP und Fertigungsdaten, Miragon übersetzt die Erkenntnisse in schlankere Abläufe und automatisierte Prozesse.',
      ],
    },
    en: {
      title: 'Bavarian Swabia: mechanical engineering, automation and lightweight construction',
      paragraphs: [
        'Augsburg and its surroundings stand for mechanical engineering, robotics and automation, aerospace, fibre composites and environmental technology. On top of that comes a broad base of mid-sized companies in Swabia and the Allgäu – family businesses that lead their markets and produce with many variants and small batch sizes.',
        'Anyone who wants to automate first has to know which process is worth it and what is really holding it back. This is where Noreja and Miragon interlock: process intelligence delivers the causal analysis directly from ERP and production data, Miragon turns the findings into leaner workflows and automated processes.',
      ],
    },
  },
  industries: {
    de: [
      { title: 'Maschinenbau', text: 'Fertigung bis auf Arbeitsplatzebene: Wir zeigen, wo Aufträge zwischen den Schritten warten und Working Capital binden.' },
      { title: 'Robotik & Automation', text: 'Projektgeschäft mit Engineering, Einkauf und Inbetriebnahme: Wo Übergaben Zeit kosten und Termine kippen.' },
      { title: 'Luft- & Raumfahrt', text: 'Strenge Qualitäts- und Dokumentationsanforderungen: Abweichungen von der vorgesehenen Reihenfolge werden nachvollziehbar.' },
      { title: 'Mittelstand in Schwaben & Allgäu', text: 'Order-to-Cash und Purchase-to-Pay transparent machen – als Grundlage für Automatisierung, die sich rechnet.' },
    ],
    en: [
      { title: 'Mechanical engineering', text: 'Production down to the workstation: we show where orders wait between steps and tie up working capital.' },
      { title: 'Robotics & automation', text: 'Project business with engineering, purchasing and commissioning: where hand-overs cost time and deadlines slip.' },
      { title: 'Aerospace', text: 'Strict quality and documentation requirements: deviations from the intended sequence become traceable.' },
      { title: 'Mid-sized companies in Swabia & Allgäu', text: 'Make order-to-cash and purchase-to-pay transparent – as the basis for automation that pays off.' },
    ],
  },
  processes: [
    {
      id: 'order-to-cash',
      text: {
        de: 'Vom Auftrag über Fertigung und Lieferung bis zum Zahlungseingang – mit den Ursachen für Terminverzug.',
        en: 'From order through production and delivery to payment – with the causes of delays.',
      },
    },
    {
      id: 'purchase-to-pay',
      text: {
        de: 'Beschaffung von Material und Zukaufteilen: Wo Bestellung, Wareneingang und Rechnung auseinanderlaufen.',
        en: 'Sourcing of materials and bought-in parts: where order, goods receipt and invoice drift apart.',
      },
    },
  ],
  faq: [
    {
      question: {
        de: 'Mit wem arbeitet Noreja in Augsburg zusammen?',
        en: 'Who does Noreja work with in Augsburg?',
      },
      answer: {
        de: 'Mit Miragon, einer Boutique-Beratung für Prozessmanagement, Process Mining und Automatisierung aus Augsburg. Miragon ist Technologie- und Implementierungspartner von Noreja und begleitet Projekte in der Region vor Ort.',
        en: 'With Miragon, a boutique consultancy for process management, process mining and automation from Augsburg. Miragon is Noreja’s technology and implementation partner and supports projects in the region on site.',
      },
    },
    {
      question: {
        de: 'Lässt sich Process Mining mit Prozessautomatisierung verbinden?',
        en: 'Can process mining be combined with process automation?',
      },
      answer: {
        de: 'Ja, das ist sogar die beste Reihenfolge: Zuerst zeigt Process Intelligence, welche Schritte Zeit und Geld kosten und warum. Danach wird gezielt automatisiert – dort, wo es sich rechnet. Mit Miragon steht dafür in Augsburg ein Partner mit Automatisierungserfahrung bereit.',
        en: 'Yes, and that is the best order: first, process intelligence shows which steps cost time and money and why. Then you automate in a targeted way – where it pays off. With Miragon, a partner with automation experience is ready in Augsburg.',
      },
    },
    {
      question: {
        de: 'Eignet sich Noreja für Fertigungsprozesse im Maschinenbau?',
        en: 'Is Noreja suitable for production processes in mechanical engineering?',
      },
      answer: {
        de: 'Ja. Beim Maschinenbauer Sesotec haben wir zum Beispiel den Produktionsprozess bis auf Arbeitsplatzebene analysiert, um Wartezeiten und gebundenes Working Capital aufzudecken. Noreja liest dafür direkt aus dem ERP, ein vorgefertigtes Event Log ist nicht nötig.',
        en: 'Yes. At the machine manufacturer Sesotec, for example, we analyzed the production process down to workstation level to uncover waiting times and tied-up working capital. Noreja reads directly from the ERP for this; no pre-built event log is needed.',
      },
    },
  ],
  related: [
    {
      label: { de: 'Vier Experten, fünf Meinungen – Talk-Reihe mit Miragon', en: 'Four Experts, Five Opinions – talk series with Miragon' },
      path: { de: '/de/vier-experten-fuenf-meinungen', en: '/en/four-experts-five-opinions' },
    },
    {
      label: { de: 'Unsere Partner', en: 'Our partners' },
      path: { de: '/de/partner', en: '/en/partners' },
    },
  ],
};
