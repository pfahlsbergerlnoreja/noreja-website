import type { CompetenceCityContent } from '../competenceCenters';

export const freiburg: CompetenceCityContent = {
  id: 'freiburg',
  metaTitle: {
    de: 'Process Mining & Prozessoptimierung Freiburg',
    en: 'Process Mining Consulting Freiburg',
  },
  metaDescription: {
    de: 'Process Mining und Prozessoptimierung in Freiburg und Südbaden: Noreja-Standort vor Ort, Workshops bei dir im Haus, Proof of Value in 3–4 Wochen.',
    en: 'Process mining and process optimization in Freiburg and South Baden: a Noreja location on site, workshops at your company, proof of value in 3–4 weeks.',
  },
  h1: {
    de: 'Process Mining Beratung in Freiburg und Südbaden',
    en: 'Process Mining Consulting in Freiburg and South Baden',
  },
  intro: {
    de: 'Freiburg ist einer unserer Standorte. Von hier aus begleiten wir mittelständische Unternehmen in Südbaden, im Schwarzwald und am Hochrhein mit Process Mining und Process Intelligence – vom ersten Workshop bei dir im Haus bis zum Proof of Value in drei bis vier Wochen. Wir lesen deine Prozesse direkt aus ERP und Datenbank und zeigen nicht nur, wo es hakt, sondern warum.',
    en: 'Freiburg is one of our locations. From here we work with mid-sized companies in South Baden, the Black Forest and the Upper Rhine on process mining and process intelligence – from the first workshop at your site to a proof of value in three to four weeks. We read your processes straight from your ERP and database and show not just where things get stuck, but why.',
  },
  teaser: {
    de: 'Unser Standort im Breisgau – für Südbaden, den Schwarzwald und das Dreiländereck.',
    en: 'Our location in the Breisgau – for South Baden, the Black Forest and the tri-border area.',
  },
  presence: {
    de: {
      title: 'Vor Ort in Freiburg',
      text: 'Weil ein Teil unseres Teams in Freiburg sitzt, sind Workshops in Südbaden für uns kein Reisetag, sondern ein kurzer Weg. Kick-off und Ergebnisworkshop finden bei dir statt, die Analyse dazwischen läuft remote – so bleibt der Aufwand für deine Fachbereiche überschaubar, und du hast trotzdem Ansprechpartner, die schnell im Raum sind.',
    },
    en: {
      title: 'On site in Freiburg',
      text: 'Part of our team is based in Freiburg, so a workshop in South Baden is a short trip for us, not a travel day. Kick-off and results workshop take place at your site, the analysis in between runs remotely – which keeps the effort for your departments small while you still have people who can be in the room quickly.',
    },
  },
  surroundings: {
    de: ['Breisgau-Hochschwarzwald', 'Emmendingen', 'Ortenau mit Offenburg und Lahr', 'Lörrach und Weil am Rhein', 'Waldshut und Hochrhein', 'Schwarzwald-Baar'],
    en: ['Breisgau-Hochschwarzwald', 'Emmendingen', 'Ortenau with Offenburg and Lahr', 'Lörrach and Weil am Rhein', 'Waldshut and the Upper Rhine', 'Schwarzwald-Baar'],
  },
  region: {
    de: {
      title: 'Mittelstand in Südbaden: Nischen-Weltmarktführer mit schlanken Teams',
      paragraphs: [
        'Südbaden ist geprägt von inhabergeführten Unternehmen: Feinwerk- und Präzisionstechnik im Schwarzwald, Medizintechnik und Life Sciences zwischen Freiburg und Basel, dazu Solar- und Umwelttechnik, für die Freiburg mit seinen Forschungseinrichtungen bekannt ist. Viele dieser Firmen führen den Weltmarkt in ihrer Nische an – mit schlanken Teams und wenig Zeit für lange Datenprojekte.',
        'Genau dafür ist Process Intelligence gebaut: Wir binden dein ERP direkt an, ohne monatelanges Event-Log-Projekt, und zeigen in Wochen statt Monaten, wo Durchlaufzeit, Nacharbeit und gebundenes Kapital entstehen. Die Lage im Dreiländereck bringt außerdem grenzüberschreitende Lieferketten mit sich – Prozesse, in denen sich kleine Verzögerungen besonders teuer summieren.',
      ],
    },
    en: {
      title: 'Mid-sized companies in South Baden: niche world leaders with lean teams',
      paragraphs: [
        'South Baden is shaped by owner-managed companies: precision engineering in the Black Forest, medical technology and life sciences between Freiburg and Basel, plus solar and environmental technology, for which Freiburg and its research institutes are known. Many of these companies lead the world market in their niche – with lean teams and little time for long data projects.',
        'That is what process intelligence is built for: we connect your ERP directly, without a months-long event log project, and show in weeks rather than months where lead time, rework and tied-up capital come from. The location on the French and Swiss borders also means cross-border supply chains – processes in which small delays add up to real money.',
      ],
    },
  },
  industries: {
    de: [
      { title: 'Medizintechnik & Life Sciences', text: 'Regulierte Prozesse mit vielen Freigaben: Wir zeigen, welche Prüf- und Dokumentationsschritte die Durchlaufzeit bestimmen – nachvollziehbar für Qualitätsmanagement und Audit.' },
      { title: 'Feinwerk- & Präzisionstechnik', text: 'Kleine Losgrößen, viele Varianten: Wir verfolgen Aufträge bis auf Arbeitsplatzebene und machen sichtbar, wo Wartezeiten zwischen Fertigungsschritten Kapital binden.' },
      { title: 'Solar- & Umwelttechnik', text: 'Projektgeschäft mit langen Lieferketten: Wir verbinden Einkauf, Fertigung und Montage zu einem durchgängigen Bild und finden die Ursachen für Terminverzug.' },
      { title: 'Handel über Grenzen', text: 'Mehrere Gesellschaften, Zoll und Währungen: Order-to-Cash und Purchase-to-Pay über Ländergrenzen hinweg – ohne vorgeschaltetes Data-Warehouse-Projekt.' },
    ],
    en: [
      { title: 'Medical technology & life sciences', text: 'Regulated processes with many approvals: we show which inspection and documentation steps drive lead time – traceable for quality management and audits.' },
      { title: 'Precision engineering', text: 'Small batches, many variants: we follow orders down to the workstation and show where waiting times between production steps tie up capital.' },
      { title: 'Solar & environmental technology', text: 'Project business with long supply chains: we connect purchasing, production and installation into one picture and find the causes of delays.' },
      { title: 'Cross-border trade', text: 'Several entities, customs and currencies: order-to-cash and purchase-to-pay across borders – without a data warehouse project up front.' },
    ],
  },
  processes: [
    {
      id: 'purchase-to-pay',
      text: {
        de: 'Lieferanten in Deutschland, der Schweiz und Frankreich: Wo bleiben Bestellungen, Wareneingänge und Rechnungen liegen?',
        en: 'Suppliers in Germany, Switzerland and France: where do orders, goods receipts and invoices get stuck?',
      },
    },
    {
      id: 'order-to-cash',
      text: {
        de: 'Vom variantenreichen Auftrag bis zum Zahlungseingang – besonders im Exportgeschäft.',
        en: 'From a variant-rich order to the incoming payment – especially in export business.',
      },
    },
  ],
  faq: [
    {
      question: {
        de: 'Ist Noreja in Freiburg vor Ort?',
        en: 'Is Noreja based in Freiburg?',
      },
      answer: {
        de: 'Ja. Freiburg ist neben Wien einer unserer Standorte. Workshops in Freiburg, im Breisgau und in ganz Südbaden machen wir deshalb ohne lange Anreise persönlich bei dir im Unternehmen.',
        en: 'Yes. Next to Vienna, Freiburg is one of our locations. That is why we run workshops in Freiburg, the Breisgau and all of South Baden in person at your company, without a long journey.',
      },
    },
    {
      question: {
        de: 'Lohnt sich Process Mining auch für kleinere Mittelständler?',
        en: 'Is process mining worth it for smaller mid-sized companies?',
      },
      answer: {
        de: 'Ja. Weil Noreja direkt aus den Datenbanken deines ERP liest, entfällt das aufwendige Bauen eines Event Logs. Ein Proof of Value auf einem Teilprozess dauert drei bis vier Wochen und läuft zu einem Fixpreis – danach weißt du, ob und wo sich der Einsatz für dein Unternehmen rechnet.',
        en: 'Yes. Because Noreja reads directly from your ERP databases, there is no costly event log to build. A proof of value on one sub-process takes three to four weeks at a fixed price – afterwards you know whether and where it pays off for your company.',
      },
    },
    {
      question: {
        de: 'Wie gehen wir mit sensiblen Daten aus regulierten Prozessen um?',
        en: 'How do we handle sensitive data from regulated processes?',
      },
      answer: {
        de: 'Noreja ist nach ISO 27001 zertifiziert. Die Daten liegen bei Google Cloud oder AWS in Frankfurt, auf Wunsch auch in einer anderen Region oder On-Premises. Für KI-Auswertungen kann ein privates, vollständig isoliertes Sprachmodell betrieben werden, auf das nur dein Unternehmen Zugriff hat.',
        en: 'Noreja is ISO 27001 certified. Data is hosted with Google Cloud or AWS in Frankfurt, on request in another region or on-premises. For AI analyses, a private and fully isolated language model can be run that only your company can access.',
      },
    },
  ],
};
