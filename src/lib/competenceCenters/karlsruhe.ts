import type { CompetenceCityContent } from '../competenceCenters';

export const karlsruhe: CompetenceCityContent = {
  id: 'karlsruhe',
  metaTitle: {
    de: 'Process Mining & Prozessoptimierung Karlsruhe',
    en: 'Process Mining Consulting Karlsruhe',
  },
  metaDescription: {
    de: 'Process Mining Beratung in Karlsruhe und der TechnologieRegion: Prozessoptimierung mit kausaler Analyse und KI-Agenten, Workshops vor Ort.',
    en: 'Process mining consulting in Karlsruhe and its technology region: process optimization with causal analysis and AI agents, on-site workshops.',
  },
  h1: {
    de: 'Process Mining Beratung in Karlsruhe und der TechnologieRegion',
    en: 'Process Mining Consulting in Karlsruhe and Its Technology Region',
  },
  intro: {
    de: 'In Karlsruhe arbeiten wir mit Unternehmen, die ihre Daten ernst nehmen: Softwarehäuser und IT-Dienstleister, Energieversorger, Handel und eine breite industrielle Basis zwischen Rhein und Nordschwarzwald. Noreja verbindet sich direkt mit ERP, Ticketsystem oder eigener Datenbank, modelliert Prozesse kausal in einem Event Knowledge Graph und liefert nach drei bis vier Wochen belastbare Ergebnisse – persönlich vorgestellt bei dir vor Ort.',
    en: 'In Karlsruhe we work with companies that take their data seriously: software houses and IT service providers, energy suppliers, retail and a broad industrial base between the Rhine and the northern Black Forest. Noreja connects directly to your ERP, ticketing system or own database, models processes causally in an event knowledge graph and delivers solid results after three to four weeks – presented in person at your site.',
  },
  teaser: {
    de: 'Für IT, Energie, Handel und Industrie zwischen Rhein, Pfalz und Nordschwarzwald.',
    en: 'For IT, energy, retail and industry between the Rhine, the Palatinate and the northern Black Forest.',
  },
  presence: {
    de: {
      title: 'Vor Ort in Karlsruhe',
      text: 'Karlsruhe liegt an der Rheintalstrecke und damit nah an unserem Standort Freiburg. Wir kommen für Kick-off und Ergebnisworkshop zu dir, gern auch zu einem technischen Deep Dive mit deiner IT – gerade in Karlsruhe wollen die Teams genau wissen, wie die Anbindung funktioniert. Die Analyse dazwischen läuft remote.',
    },
    en: {
      title: 'On site in Karlsruhe',
      text: 'Karlsruhe sits on the Rhine valley line, close to our location in Freiburg. We come to you for the kick-off and the results workshop, and gladly for a technical deep dive with your IT as well – teams in Karlsruhe tend to want to know exactly how the connection works. The analysis in between runs remotely.',
    },
  },
  surroundings: {
    de: ['Ettlingen', 'Bruchsal', 'Rastatt', 'Baden-Baden', 'Pforzheim', 'Landau und Südpfalz'],
    en: ['Ettlingen', 'Bruchsal', 'Rastatt', 'Baden-Baden', 'Pforzheim', 'Landau and the Southern Palatinate'],
  },
  region: {
    de: {
      title: 'TechnologieRegion Karlsruhe: IT-Kompetenz trifft Industrie',
      paragraphs: [
        'Karlsruhe ist einer der großen IT-Standorte Deutschlands. Rund um das Karlsruher Institut für Technologie (KIT) sind zahlreiche Softwarehäuser, IT-Dienstleister und Gründungen entstanden, dazu kommen Energieversorger, große Handelsunternehmen und ein Mittelstand aus Fahrzeug-, Maschinen- und Anlagenbau in der Region zwischen Rastatt, Bruchsal und Pforzheim.',
        'Viele dieser Unternehmen haben ihre Daten im Griff – aber nicht ihre Prozesse über Systemgrenzen hinweg. Ein Ticket im Service, ein Auftrag im ERP, eine Rechnung in der Buchhaltung: Process Intelligence verbindet diese Objekte zu einem Prozessgraphen und zeigt, welche Ursachen Bearbeitungszeit und Kosten treiben. Für technisch versierte Teams gibt es dazu eine Workbench mit integrierten Jupyter Notebooks, in der eigene Analysen direkt auf dem Prozessgraphen laufen.',
      ],
    },
    en: {
      title: 'The Karlsruhe technology region: IT expertise meets industry',
      paragraphs: [
        'Karlsruhe is one of Germany’s major IT locations. Around the Karlsruhe Institute of Technology (KIT), many software houses, IT service providers and start-ups have emerged, alongside energy suppliers, large retail companies and mid-sized vehicle, machinery and plant manufacturers in the region between Rastatt, Bruchsal and Pforzheim.',
        'Many of these companies have their data under control – but not their processes across system boundaries. A ticket in service, an order in the ERP, an invoice in accounting: process intelligence connects these objects into one process graph and shows which causes drive handling time and cost. Technical teams also get a workbench with integrated Jupyter notebooks to run their own analyses directly on the process graph.',
      ],
    },
  },
  industries: {
    de: [
      { title: 'Software & IT-Dienstleistung', text: 'Vom Lead bis zur Aktivierung, vom Ticket bis zur Lösung: Wir verbinden CRM, Ticketsystem und Abrechnung und zeigen, wo Kunden warten.' },
      { title: 'Energie & Versorgung', text: 'Hausanschlüsse, Zählerwechsel, Abrechnung: Massenprozesse mit vielen Beteiligten, in denen sich Schleifen schnell vervielfachen.' },
      { title: 'Handel', text: 'Bestellung, Lager, Retoure: Wir machen sichtbar, welche Ursachen Lieferzeit und Retourenkosten treiben – auch über mehrere Systeme hinweg.' },
      { title: 'Industrie im Umland', text: 'Fahrzeug-, Maschinen- und Anlagenbau zwischen Rastatt und Pforzheim: Auftragsabwicklung und Beschaffung durchgängig analysiert.' },
    ],
    en: [
      { title: 'Software & IT services', text: 'From lead to activation, from ticket to resolution: we connect CRM, ticketing and billing and show where customers wait.' },
      { title: 'Energy & utilities', text: 'Grid connections, meter changes, billing: high-volume processes with many parties, where loops multiply quickly.' },
      { title: 'Retail', text: 'Order, warehouse, return: we show which causes drive delivery time and return costs – across several systems, too.' },
      { title: 'Industry in the region', text: 'Vehicle, machinery and plant engineering between Rastatt and Pforzheim: order processing and procurement analyzed end to end.' },
    ],
  },
  processes: [
    {
      id: 'lead-to-activation',
      text: {
        de: 'Für Software- und SaaS-Anbieter: vom ersten Kontakt bis zum aktiv nutzenden Kunden.',
        en: 'For software and SaaS providers: from first contact to an actively using customer.',
      },
    },
    {
      id: 'order-to-cash',
      text: {
        de: 'Für Handel und Industrie: Auftrag, Lieferung, Rechnung und Zahlungseingang in einem Bild.',
        en: 'For retail and industry: order, delivery, invoice and payment in one picture.',
      },
    },
  ],
  faq: [
    {
      question: {
        de: 'Können wir Noreja an unsere eigene Software oder Datenbank anbinden?',
        en: 'Can we connect Noreja to our own software or database?',
      },
      answer: {
        de: 'Ja. Noreja ist quellsystem-agnostisch und liest direkt aus Datenbanken wie PostgreSQL, MS SQL, MySQL oder Snowflake – genauso wie aus ERP-Systemen und Ticketsystemen wie ServiceNow oder Jira. Ein vorgefertigtes Event Log ist nicht nötig.',
        en: 'Yes. Noreja is source-system agnostic and reads directly from databases such as PostgreSQL, MS SQL, MySQL or Snowflake – just like from ERP systems and ticketing systems such as ServiceNow or Jira. No pre-built event log is needed.',
      },
    },
    {
      question: {
        de: 'Was unterscheidet kausales Process Mining vom klassischen Process Mining?',
        en: 'How does causal process mining differ from classic process mining?',
      },
      answer: {
        de: 'Klassisches Process Mining zählt, welche Aktivität wie oft auf welche folgt. Kausales Process Mining modelliert, welche Ereignisse sich tatsächlich gegenseitig bedingen – auch über mehrere Geschäftsobjekte hinweg. So siehst du nicht nur, dass ein Prozess langsam ist, sondern wodurch.',
        en: 'Classic process mining counts which activity follows which and how often. Causal process mining models which events actually depend on each other – across several business objects, too. So you see not only that a process is slow, but what makes it slow.',
      },
    },
    {
      question: {
        de: 'Kommt ihr für einen technischen Workshop zu uns nach Karlsruhe?',
        en: 'Will you come to Karlsruhe for a technical workshop?',
      },
      answer: {
        de: 'Gern. Neben Kick-off und Ergebnisworkshop bieten wir einen technischen Termin mit deiner IT an, in dem wir Datenquellen, Berechtigungen und Hosting klären – in Karlsruhe und der ganzen TechnologieRegion, von Bruchsal bis Baden-Baden.',
        en: 'Gladly. Besides the kick-off and results workshop, we offer a technical session with your IT to settle data sources, permissions and hosting – in Karlsruhe and across the technology region, from Bruchsal to Baden-Baden.',
      },
    },
  ],
};
