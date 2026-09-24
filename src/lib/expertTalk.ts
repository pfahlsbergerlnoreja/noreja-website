import type { Language } from './translations';

/**
 * "Vier Experten, fünf Meinungen" – a five-part talk series recorded with our
 * partner Miragon. Four experts give their take on one question per episode;
 * the fifth opinion is the viewer's.
 *
 * Everything the page shows lives here, so the prerendered HTML (and the
 * VideoObject JSON-LD built from the same data) always matches the videos.
 * The episodes themselves are in German; the English page translates the
 * surrounding copy and the quotes.
 */

// Eager so the first (server) render already has the URLs – see CLAUDE.md.
const episodeImages = import.meta.glob<string>('../assets/expert-talk/*.webp', {
  eager: true,
  import: 'default',
});

function episodeImage(fileName: string): string {
  return episodeImages[`../assets/expert-talk/${fileName}`] ?? '';
}

export interface ExpertTalkExpert {
  name: string;
  company: 'Miragon' | 'Noreja';
  role?: Record<Language, string>;
  linkedInUrl?: string;
}

export const expertTalkExperts: ExpertTalkExpert[] = [
  {
    name: 'Thomas Heinrichs',
    company: 'Miragon',
    role: { de: 'Growth & Smart Automation Lead', en: 'Growth & Smart Automation Lead' },
    linkedInUrl: 'https://www.linkedin.com/in/thomas-heinrichs-907b0015a/',
  },
  {
    name: 'Dominik Horn',
    company: 'Miragon',
    role: { de: 'Co-Founder', en: 'Co-Founder' },
    linkedInUrl: 'https://www.linkedin.com/in/dominik-horn/',
  },
  {
    name: 'Prof. Dr. Jan Mendling',
    company: 'Noreja',
    role: { de: 'Co-Founder', en: 'Co-Founder' },
    linkedInUrl: 'https://www.linkedin.com/in/janmendling/',
  },
  {
    name: 'Dr. Lukas Pfahlsberger',
    company: 'Noreja',
    role: { de: 'Co-Founder', en: 'Co-Founder' },
    linkedInUrl: 'https://www.linkedin.com/in/lukas-pfahlsberger/',
  },
];

export interface ExpertTalkEpisode {
  number: number;
  /** Anchor on the page, e.g. #thema-1 */
  anchor: string;
  youtubeId: string;
  /** ISO 8601, taken from the YouTube upload */
  uploadDate: string;
  durationSeconds: number;
  image: string;
  /** German transcript in public/transcripts/ (not every episode has one yet) */
  transcript?: string;
  /** Accent colour of the comic artwork – drives the animated frame. */
  accent: string;
  content: Record<
    Language,
    {
      question: string;
      subtitle: string;
      summary: string;
      /** The four speech bubbles from the artwork, in reading order. */
      quotes: [string, string, string, string];
      topics: string[];
    }
  >;
}

export const expertTalkEpisodes: ExpertTalkEpisode[] = [
  {
    number: 1,
    anchor: 'thema-1',
    youtubeId: 'U09s0O9Vcu4',
    uploadDate: '2026-09-24T14:25:09-07:00',
    durationSeconds: 253,
    image: episodeImage('episode-1-organisatorische-huerden.webp'),
    transcript: '/transcripts/vier-experten-fuenf-meinungen-1-organisatorische-huerden.txt',
    accent: '350 85% 55%',
    content: {
      de: {
        question: 'Organisatorische Hürden von Process Intelligence?',
        subtitle: 'Warum der wichtigste Faktor der Mensch ist.',
        summary:
          'Welche organisatorischen Hürden gibt es bei der Einführung von Process-Intelligence-Lösungen – und warum ist der Faktor Mensch dabei der zentrale Aspekt? Die Technik ist meist gelöst; ohne Change Management, Vertrauen und Menschen, die mit den Ergebnissen arbeiten wollen, bleibt jedes Tool ein teures Dashboard.',
        quotes: [
          'Das beste Tool bringt nichts, wenn keiner damit arbeiten will.',
          'Ohne Change Management bleibt es ein teures Dashboard.',
          'Transparenz macht Angst. Erst Vertrauen, dann Daten!',
          'Die Technik ist gelöst. Die Hürde sitzt im Kopf.',
        ],
        topics: ['Process Intelligence', 'Change Management', 'Akzeptanz', 'Prozesstransparenz'],
      },
      en: {
        question: 'Organisational hurdles of process intelligence?',
        subtitle: 'Why people are the most important factor.',
        summary:
          'Which organisational hurdles come up when introducing process intelligence solutions – and why are people the central factor? The technology is usually solved; without change management, trust and people who actually want to work with the results, every tool remains an expensive dashboard.',
        quotes: [
          'The best tool is useless if nobody wants to work with it.',
          'Without change management it stays an expensive dashboard.',
          'Transparency is scary. Trust first, then data!',
          'The technology is solved. The hurdle is in people’s heads.',
        ],
        topics: ['Process intelligence', 'Change management', 'Adoption', 'Process transparency'],
      },
    },
  },
  {
    number: 2,
    anchor: 'thema-2',
    youtubeId: 'FWxrQOhn45s',
    uploadDate: '2026-09-24T14:39:22-07:00',
    durationSeconds: 244,
    image: episodeImage('episode-2-process-mining-impact.webp'),
    transcript: '/transcripts/vier-experten-fuenf-meinungen-2-process-mining-impact.txt',
    accent: '322 80% 55%',
    content: {
      de: {
        question: 'Process Mining erzeugt keinen Impact?',
        subtitle: 'Warum IT und Fachbereich zwingend zusammenarbeiten müssen.',
        summary:
          'Warum kommt Prozessmanagement so häufig nie wirklich bei der Optimierung von Prozessen an? Erst die Zusammenarbeit und das Enablement von IT und Fachbereich – ausgestattet mit Umsetzungskompetenz und klaren Prozess-Ownern – führt zum Erfolg.',
        quotes: [
          'IT liefert die Daten, der Fachbereich den Kontext.',
          'Ein Dashboard ohne Prozess-Owner ist nur Deko.',
          'Silos im Unternehmen = Silos in der Analyse.',
          'Impact entsteht erst, wenn jemand auch umsetzt!',
        ],
        topics: ['Process Mining', 'IT und Fachbereich', 'Prozess-Owner', 'Umsetzung'],
      },
      en: {
        question: 'Process mining creates no impact?',
        subtitle: 'Why IT and business teams have to work together.',
        summary:
          'Why does process management so often never really get to optimising processes? Only collaboration and enablement of IT and business teams – equipped with the ability to implement and with clear process owners – leads to success.',
        quotes: [
          'IT delivers the data, the business delivers the context.',
          'A dashboard without a process owner is just decoration.',
          'Silos in the company = silos in the analysis.',
          'Impact only happens when someone actually implements!',
        ],
        topics: ['Process mining', 'IT and business', 'Process owners', 'Implementation'],
      },
    },
  },
  {
    number: 3,
    anchor: 'thema-3',
    youtubeId: 'M7Novuo0MEY',
    uploadDate: '2026-09-24T14:39:40-07:00',
    durationSeconds: 633,
    image: episodeImage('episode-3-prozessaufnahme-process-mining.webp'),
    transcript: '/transcripts/vier-experten-fuenf-meinungen-3-prozessaufnahme-process-mining.txt',
    accent: '262 75% 60%',
    content: {
      de: {
        question: 'Prozessaufnahme mit Process Mining?',
        subtitle: 'Warum der schnelle Event-Log nicht die Lösung ist.',
        summary:
          'Wie lässt sich Process Mining sinnvoll für die Prozessaufnahme einsetzen? Die Runde spricht über die fundamentalen Unterschiede zwischen klassischer Process Discovery auf einem Event-Log und dem hypothesenbasierten Ansatz von Noreja – und warum die Menschen im Prozess die andere Hälfte der Wahrheit liefern.',
        quotes: [
          'Der Event-Log zeigt, WAS passiert. Nicht WARUM.',
          'Garbage in, garbage out. Auch beim Process Mining.',
          'Ohne die Menschen im Prozess fehlt die halbe Wahrheit.',
          'Schnell ist gut. Richtig ist besser!',
        ],
        topics: ['Prozessaufnahme', 'Event-Log', 'Process Discovery', 'Hypothesenbasierte Analyse'],
      },
      en: {
        question: 'Process discovery with process mining?',
        subtitle: 'Why the quick event log is not the answer.',
        summary:
          'How can process mining be used sensibly for capturing processes? The panel discusses the fundamental differences between classic process discovery on an event log and Noreja’s hypothesis-driven approach – and why the people in the process provide the other half of the truth.',
        quotes: [
          'The event log shows WHAT happens. Not WHY.',
          'Garbage in, garbage out. Process mining included.',
          'Without the people in the process, half the truth is missing.',
          'Fast is good. Right is better!',
        ],
        topics: ['Process discovery', 'Event log', 'Data quality', 'Hypothesis-driven analysis'],
      },
    },
  },
  {
    number: 4,
    anchor: 'thema-4',
    youtubeId: 'uuuVVFUdaIQ',
    uploadDate: '2026-09-24T14:39:46-07:00',
    durationSeconds: 1016,
    image: episodeImage('episode-4-it-blocker-ki.webp'),
    transcript: '/transcripts/vier-experten-fuenf-meinungen-4-it-blocker-ki.txt',
    accent: '198 90% 50%',
    content: {
      de: {
        question: 'IT ist immer der Blocker bei KI-Initiativen?',
        subtitle: 'Warum es häufig an starrer Governance scheitert.',
        summary:
          'Wie verändert sich die Rolle der IT in Zeiten von KI? Nicht die IT blockiert, sondern starre Regeln: Wenn die Freigabe eines KI-Piloten sechs Monate dauert, ist das Projekt vorbei, bevor es beginnt. Governance soll ermöglichen – mit Leitplanken statt Schlagbäumen.',
        quotes: [
          'Nicht die IT blockiert, sondern starre Regeln!',
          'Governance soll ermöglichen, nicht verhindern.',
          '6 Monate Freigabe für einen KI-Piloten? Game over.',
          'Leitplanken statt Schlagbäume!',
        ],
        topics: ['KI-Initiativen', 'IT-Governance', 'KI-Pilot', 'Rolle der IT'],
      },
      en: {
        question: 'IT is always the blocker for AI initiatives?',
        subtitle: 'Why it often fails because of rigid governance.',
        summary:
          'How is the role of IT changing in the age of AI? It is not IT that blocks, but rigid rules: if approving an AI pilot takes six months, the project is over before it starts. Governance should enable – with guardrails instead of barriers.',
        quotes: [
          'It’s not IT that blocks, it’s rigid rules!',
          'Governance should enable, not prevent.',
          'Six months to approve an AI pilot? Game over.',
          'Guardrails instead of barriers!',
        ],
        topics: ['AI initiatives', 'IT governance', 'AI pilots', 'Role of IT'],
      },
    },
  },
  {
    number: 5,
    anchor: 'thema-5',
    youtubeId: '7TNGIcfrv4E',
    uploadDate: '2026-09-24T14:53:19-07:00',
    durationSeconds: 1279,
    image: episodeImage('episode-5-ki-in-produkten.webp'),
    accent: '48 100% 55%',
    content: {
      de: {
        question: 'Jeder integriert KI in die eigenen Produkte?',
        subtitle: 'Warum die Zukunft von KI anders aussehen könnte.',
        summary:
          'Wohin entwickelt sich KI? Weg von der Integration in einzelne SaaS-Lösungen, hin zu MCP-Apps, KI-Browsern und Agenten, die über Systemgrenzen hinweg arbeiten. KI wird Infrastruktur statt Feature – und bald integrieren sich die Produkte in die KI, nicht umgekehrt.',
        quotes: [
          'Nicht jedes Produkt braucht einen eigenen Chatbot.',
          'Die Zukunft sind Agenten über Systemgrenzen hinweg.',
          'KI wird Infrastruktur, kein Feature.',
          'Bald integrieren sich Produkte in die KI. Nicht umgekehrt.',
        ],
        topics: ['KI-Agenten', 'MCP', 'KI-Browser', 'SaaS'],
      },
      en: {
        question: 'Everyone is building AI into their own products?',
        subtitle: 'Why the future of AI might look different.',
        summary:
          'Where is AI heading? Away from integration into individual SaaS products, towards MCP apps, AI browsers and agents that work across system boundaries. AI becomes infrastructure rather than a feature – and soon products will integrate into the AI, not the other way round.',
        quotes: [
          'Not every product needs its own chatbot.',
          'The future is agents that work across system boundaries.',
          'AI becomes infrastructure, not a feature.',
          'Soon products will integrate into AI. Not the other way round.',
        ],
        topics: ['AI agents', 'MCP', 'AI browsers', 'SaaS'],
      },
    },
  },
];

/** 253 → "PT4M13S" (schema.org duration) */
export function toIsoDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `PT${m}M${s}S`;
}

/** 253 → "4:13" */
export function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}
