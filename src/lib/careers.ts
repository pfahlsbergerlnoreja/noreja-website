import type { Language } from './translations';

export interface JobListing {
  id: string;
  title: string;
  description: {
    de: string;
    en: string;
  };
  type: 'full-time' | 'part-time' | 'internship' | 'working-student';
  location: {
    type: 'remote' | 'onsite' | 'hybrid';
    address?: {
      de: string;
      en: string;
    };
  };
  department?: string;
  publishedDate: Date;
  aboutCompany: {
    de: string;
    en: string;
  };
  roleDescription: {
    de: string;
    en: string;
  };
  tasks: {
    de: string[];
    en: string[];
  };
  requirements: {
    de: string[];
    en: string[];
  };
  benefits: {
    de: string[];
    en: string[];
  };
  closingText: {
    de: string;
    en: string;
  };
}

export const jobListings: JobListing[] = [
  {
    id: 'customer-success-senior-process-analyst',
    title: 'Customer Success / Senior Process Analyst (m/w/d)',
    description: {
      de: 'Als zentrale Schnittstelle zwischen Kunden, Prozessen und unserer Lösung berätst du Unternehmen bei der Einführung und Weiterentwicklung von Process-Intelligence-Lösungen.',
      en: 'As the key interface between customers, processes, and our solution, you advise companies on the implementation and advancement of process intelligence solutions.',
    },
    type: 'full-time',
    location: {
      type: 'remote',
      address: {
        de: 'Deutschland / Remote',
        en: 'Germany / Remote',
      },
    },
    department: 'Customer Success',
    publishedDate: new Date('2025-03-15'),
    aboutCompany: {
      de: 'Wir sind Noreja – ein Deep-Tech-Startup mit der Mission, Process Intelligence in Kombination mit GenAI neu zu denken und damit Tausenden von Unternehmen bei der digitalen Transformation ihrer Geschäftsprozesse zu helfen.\n\nUnsere cloudbasierte Software unterstützt Unternehmen dabei, Prozesse datenbasiert zu analysieren, Optimierungspotenziale sichtbar zu machen und operative Exzellenz schneller zu erreichen. Dabei verbinden wir moderne Process-Intelligence-Ansätze mit KI-basierten Möglichkeiten, um echten Mehrwert für unsere Kunden zu schaffen.\n\nWir arbeiten vollständig remote, mit Standorten in Wien, sowie Freiburg/Berlin. Bei uns bekommst du viel Eigenverantwortung, kurze Entscheidungswege und die Chance, ein junges Unternehmen aktiv mitzugestalten.',
      en: 'We are Noreja – a deep-tech startup on a mission to rethink Process Intelligence combined with GenAI, helping thousands of companies digitally transform their business processes.\n\nOur cloud-based software helps companies analyze processes in a data-driven way, uncover optimization potential, and achieve operational excellence faster. We combine modern process intelligence approaches with AI-powered capabilities to create real value for our customers.\n\nWe work fully remote, with locations in Vienna, as well as Freiburg/Berlin. With us, you get a high degree of autonomy, short decision-making paths, and the chance to actively shape a young company.',
    },
    roleDescription: {
      de: 'Als Customer Success / Senior Process Analyst bist du die zentrale Schnittstelle zwischen unseren Kunden, ihren Prozessen und unserer Lösung. Du verstehst fachliche Anforderungen, analysierst Prozess- und Systemlandschaften und begleitest unsere Kunden bei der erfolgreichen Nutzung und Weiterentwicklung unserer Plattform.\n\nDu bringst Beratungskompetenz, analytische Stärke und ein gutes Verständnis für Geschäftsprozesse mit – und möchtest Process Intelligence in einem innovativen Umfeld aktiv mitgestalten.',
      en: 'As Customer Success / Senior Process Analyst, you are the key interface between our customers, their processes, and our solution. You understand business requirements, analyze process and system landscapes, and guide our customers in successfully using and evolving our platform.\n\nYou bring consulting expertise, analytical strength, and a solid understanding of business processes – and you want to actively shape Process Intelligence in an innovative environment.',
    },
    tasks: {
      de: [
        'Beratung und Begleitung unserer Kunden bei der Einführung und Weiterentwicklung von Process-Intelligence- und Process-Mining-Lösungen',
        'Bestandkunden-Accounts weiter ausbauen',
        'Analyse, Bewertung und Optimierung von Geschäftsprozessen mit Fokus auf Performance, Transparenz und Skalierbarkeit',
        'Durchführung von Workshops, Anforderungsaufnahmen und fachlichen Abstimmungen mit Kundenseite',
        'Modellierung und Dokumentation von Prozessen mit gängigen Methoden wie BPMN oder ARIS',
        'Analyse und Aufbereitung von Daten aus relevanten Quellsystemen',
        'Unterstützung bei der Anbindung und Interpretation von Daten aus ERP-, CRM- und SCM-Systemlandschaften',
        'Erstellung von Auswertungen, Berichten und Handlungsempfehlungen zur operativen und strategischen Prozessverbesserung',
        'Enge Zusammenarbeit mit Produkt, Tech und Customer Teams zur erfolgreichen Umsetzung von Kundenprojekten',
      ],
      en: [
        'Advise and support customers in implementing and advancing process intelligence and process mining solutions',
        'Expand and grow existing customer accounts',
        'Analyze, evaluate, and optimize business processes with a focus on performance, transparency, and scalability',
        'Conduct workshops, requirements gathering, and business alignment sessions with customers',
        'Model and document processes using established methods such as BPMN or ARIS',
        'Analyze and prepare data from relevant source systems',
        'Support the integration and interpretation of data from ERP, CRM, and SCM system landscapes',
        'Create analyses, reports, and actionable recommendations for operational and strategic process improvement',
        'Collaborate closely with Product, Tech, and Customer teams to successfully deliver customer projects',
      ],
    },
    requirements: {
      de: [
        'Mehrjährige Erfahrung in der Beratung rund um Process Mining, Business Process Management oder Performance-Optimierung',
        'Sehr gutes Verständnis für betriebliche Abläufe und End-to-End-Prozesse in Unternehmen',
        'Fundierte Kenntnisse in Prozessmodellierungsmethoden wie BPMN und/oder ARIS',
        'Gute Kenntnisse in SQL sowie im Umgang mit Datentransformationen',
        'Solides Verständnis von Systemlandschaften sowie vom Aufbau und der Rolle von ERP-, CRM- und SCM-Systemen als Quellsysteme für Process Mining',
        'Strukturierte, analytische und lösungsorientierte Arbeitsweise',
        'Souveränes Auftreten im Kundenkontakt sowie sehr gute Kommunikationsfähigkeiten',
        'Sehr gute Deutschkenntnisse in Wort und Schrift; Englischkenntnisse sind von Vorteil',
      ],
      en: [
        'Several years of experience in consulting around Process Mining, Business Process Management, or performance optimization',
        'Excellent understanding of operational workflows and end-to-end processes in organizations',
        'Strong knowledge of process modeling methods such as BPMN and/or ARIS',
        'Good knowledge of SQL and data transformation techniques',
        'Solid understanding of system landscapes and the role of ERP, CRM, and SCM systems as source systems for Process Mining',
        'Structured, analytical, and solution-oriented working style',
        'Confident demeanor in customer interactions with excellent communication skills',
        'Fluent in German (written and spoken); English skills are a plus',
      ],
    },
    benefits: {
      de: [
        'Eine Schlüsselrolle in einem innovativen Startup an der Schnittstelle von Process Intelligence und GenAI',
        'Direkte Zusammenarbeit mit dem Gründungsteam und hoher Gestaltungsspielraum',
        'Spannende Kundenprojekte mit echtem Impact',
        'Flexible Arbeitszeiten und vollständiges Remote-Arbeiten innerhalb Deutschlands',
        'Schnelle Lernkurve, viel Eigenverantwortung und eine offene, pragmatische Unternehmenskultur',
        'Ein motiviertes Team mit hoher technologischer und unternehmerischer Ambition',
      ],
      en: [
        'A key role in an innovative startup at the intersection of Process Intelligence and GenAI',
        'Direct collaboration with the founding team and significant creative freedom',
        'Exciting customer projects with real impact',
        'Flexible working hours and fully remote work within Germany',
        'Steep learning curve, high autonomy, and an open, pragmatic company culture',
        'A motivated team with strong technological and entrepreneurial ambition',
      ],
    },
    closingText: {
      de: 'Dann freuen wir uns auf deine Bewerbung. Sende uns deinen Lebenslauf und ein paar Zeilen zu deiner Motivation, deinem möglichen Startdatum und deiner relevanten Erfahrung.',
      en: 'We look forward to receiving your application. Send us your CV along with a few lines about your motivation, your earliest possible start date, and your relevant experience.',
    },
  },
  {
    id: 'account-executive',
    title: 'Account Executive (m/w/d)',
    description: {
      de: 'Du verantwortest den gesamten Enterprise-Sales-Cycle – von der Qualifizierung über Demo und Business Case bis hin zu Verhandlung und Closing.',
      en: 'You own the entire enterprise sales cycle – from qualification through demo and business case to negotiation and closing.',
    },
    type: 'full-time',
    location: {
      type: 'remote',
      address: {
        de: 'Süddeutschland / Remote / mit Reisebereitschaft',
        en: 'Southern Germany / Remote / Travel Required',
      },
    },
    department: 'Sales',
    publishedDate: new Date('2025-03-15'),
    aboutCompany: {
      de: 'Wir sind Noreja – ein Deep-Tech-Startup mit der Mission, Process Intelligence und GenAI neu zu verbinden und Unternehmen dabei zu unterstützen, ihre Geschäftsprozesse datengetrieben zu verstehen und nachhaltig zu verbessern.\n\nMit unserer cloudbasierten Lösung schaffen wir Transparenz in komplexen Prozesslandschaften und helfen Unternehmen, operative Potenziale zu heben. Unser Ziel ist es, moderne Process Intelligence für den Mittelstand und größere Organisationen zugänglich, nutzbar und wertstiftend zu machen.\n\nAls vollständig remote arbeitendes Unternehmen mit Teams in Wien, sowie Freiburg/Berlin bauen wir ein Umfeld, das auf Eigenverantwortung, Geschwindigkeit und unternehmerisches Denken setzt.',
      en: 'We are Noreja – a deep-tech startup on a mission to connect Process Intelligence and GenAI in new ways, helping companies understand their business processes in a data-driven manner and improve them sustainably.\n\nWith our cloud-based solution, we create transparency in complex process landscapes and help companies unlock operational potential. Our goal is to make modern Process Intelligence accessible, usable, and value-creating for mid-market and larger organizations.\n\nAs a fully remote company with teams in Vienna, as well as Freiburg/Berlin, we build an environment centered on autonomy, speed, and entrepreneurial thinking.',
    },
    roleDescription: {
      de: 'Als Account Executive verantwortest du den gesamten Sales Cycle – von der Qualifizierung über Discovery, Demo und Business Case bis hin zu Verhandlung und Closing. Du bist in der Lage, Enterprise-Deals eigenständig zu führen, Vertrauen auf Entscheider-Ebene aufzubauen und komplexe SaaS-Lösungen überzeugend zu positionieren.\n\nDu kombinierst starke Sales-Execution mit einem guten technischen Verständnis und fühlst dich im Spannungsfeld von AI, B2B SaaS und Go-to-Market zuhause.',
      en: 'As Account Executive, you own the entire sales cycle – from qualification through discovery, demo, and business case to negotiation and closing. You are capable of independently driving enterprise deals, building trust at decision-maker level, and convincingly positioning complex SaaS solutions.\n\nYou combine strong sales execution with solid technical understanding and feel at home at the intersection of AI, B2B SaaS, and go-to-market.',
    },
    tasks: {
      de: [
        'Eigenständige Verantwortung für den kompletten Enterprise-Sales-Prozess',
        'Identifikation, Entwicklung und Abschluss neuer Geschäftsmöglichkeiten im B2B-Umfeld',
        'Durchführung von Discovery Calls, Demos, Angebotsprozessen und Verhandlungen bis zum erfolgreichen Closing',
        'Aufbau belastbarer Beziehungen zu relevanten Stakeholdern auf Fach- und Management-Ebene',
        'Erarbeitung überzeugender Business Cases und Value Stories für unterschiedliche Zielgruppen',
        'Enge Zusammenarbeit mit Founding Team, Marketing und Product, um Marktfeedback in Go-to-Market- und Produktstrategien einfließen zu lassen',
        'Aktive Mitgestaltung und Weiterentwicklung unserer Sales-Prozesse, Playbooks und Sales-Materialien',
        'Repräsentation von Noreja bei Kundenterminen, Events und vor Ort – daher ist Reisebereitschaft wichtig',
      ],
      en: [
        'Full ownership of the complete enterprise sales process',
        'Identify, develop, and close new business opportunities in the B2B space',
        'Conduct discovery calls, demos, proposal processes, and negotiations through to successful closing',
        'Build strong relationships with relevant stakeholders at both specialist and management levels',
        'Develop compelling business cases and value stories for different target audiences',
        'Collaborate closely with the Founding Team, Marketing, and Product to channel market feedback into go-to-market and product strategies',
        'Actively shape and evolve our sales processes, playbooks, and sales materials',
        'Represent Noreja at customer meetings, events, and on-site – travel readiness is important',
      ],
    },
    requirements: {
      de: [
        'Mind. 7 Jahre Berufserfahrung im B2B-Sales im größeren Mittelstand (1000-10000 MA) mit nachgewiesener Quota-Erreichung',
        'Nachweisbare Erfahrung darin, komplexe Sales-Zyklen eigenständig zu führen und zu closen',
        'Starke Erfahrung im Verkauf von B2B SaaS-Lösungen',
        'Sehr gutes Verständnis für moderne Go-to-Market-Strategien und vertriebsnahe AI-Anwendungsfelder',
        'Solides technisches Verständnis, um erklärungsbedürftige Softwarelösungen sicher zu präsentieren',
        'Hohes Maß an Eigenständigkeit, Ownership und Ergebnisorientierung',
        'Ausgeprägte Kommunikations- und Verhandlungsstärke',
        'Souveränes Auftreten gegenüber C-Level- und Enterprise-Kunden',
        'Sehr gute Deutsch- und Englischkenntnisse in Wort und Schrift',
        'Wohnsitz in Deutschland sowie Bereitschaft zu Reisen innerhalb der DACH-Region',
      ],
      en: [
        'At least 7 years of B2B sales experience in the upper mid-market (1,000–10,000 employees) with proven quota attainment',
        'Demonstrated ability to independently manage and close complex sales cycles',
        'Strong experience selling B2B SaaS solutions',
        'Excellent understanding of modern go-to-market strategies and sales-adjacent AI use cases',
        'Solid technical understanding to confidently present complex software solutions',
        'High degree of autonomy, ownership, and results orientation',
        'Outstanding communication and negotiation skills',
        'Confident presence with C-level and enterprise customers',
        'Fluent in German and English (written and spoken)',
        'Based in Germany with willingness to travel within the DACH region',
      ],
    },
    benefits: {
      de: [
        'Eine zentrale Vertriebsrolle mit großem Einfluss auf das Wachstum von Noreja mit Ausblick auf Unternehmensbeteiligung (ESOPS/VSOPS) bei nachweisbaren Erfolgen',
        'Direkte Zusammenarbeit mit dem Gründerteam in einer frühen und dynamischen Phase',
        'Viel Verantwortung, kurze Wege und echte Gestaltungsmöglichkeiten',
        'Ein innovatives Produkt an der Schnittstelle von Process Intelligence, AI und Enterprise Software',
        'Remote-first-Arbeitsmodell mit flexibler Arbeitsgestaltung',
        'Attraktives Vergütungsmodell mit leistungsorientierter Komponente',
      ],
      en: [
        'A central sales role with significant impact on Noreja\'s growth, with the prospect of equity participation (ESOPS/VSOPS) based on proven success',
        'Direct collaboration with the founding team during an early and dynamic phase',
        'High responsibility, short paths, and real opportunities to shape the company',
        'An innovative product at the intersection of Process Intelligence, AI, and Enterprise Software',
        'Remote-first work model with flexible work arrangements',
        'Attractive compensation model with performance-based components',
      ],
    },
    closingText: {
      de: 'Dann freuen wir uns auf deine Bewerbung. Schick uns deinen CV sowie ein paar kurze Infos zu deinen bisherigen Closing-Erfolgen, deiner Motivation und deiner Verfügbarkeit.',
      en: 'We look forward to your application. Send us your CV along with a few brief notes on your past closing successes, your motivation, and your availability.',
    },
  },
  {
    id: 'ai-marketing-manager',
    title: 'AI Marketing Manager / AI Content Manager (m/w/d)',
    description: {
      de: 'Du unterstützt uns bei der Erstellung und Weiterentwicklung von Marketing-Content mit modernen KI-Tools – kreativ, effizient und markengerecht.',
      en: 'You support us in creating and advancing marketing content using modern AI tools – creatively, efficiently, and on-brand.',
    },
    type: 'full-time',
    location: {
      type: 'remote',
      address: {
        de: 'Remote / Deutschland oder Österreich',
        en: 'Remote / Germany or Austria',
      },
    },
    department: 'Marketing',
    publishedDate: new Date('2025-03-15'),
    aboutCompany: {
      de: 'Wir sind Noreja – ein Deep-Tech-Startup, das Process Intelligence mit GenAI verbindet, um Unternehmen neue Möglichkeiten in der Analyse und Optimierung ihrer Geschäftsprozesse zu eröffnen.\n\nWir bauen eine moderne, cloudbasierte Lösung für datengetriebenes Geschäftsprozessmanagement und wollen unsere Marke, Inhalte und Kommunikation gezielt weiterentwickeln. Dafür suchen wir eine motivierte Person, die Lust hat, Marketing mit Hilfe von KI-Tools effizient, kreativ und modern umzusetzen.',
      en: 'We are Noreja – a deep-tech startup connecting Process Intelligence with GenAI to open up new possibilities for companies in analyzing and optimizing their business processes.\n\nWe are building a modern, cloud-based solution for data-driven business process management and want to strategically evolve our brand, content, and communication. For this, we are looking for a motivated person who is eager to execute marketing efficiently, creatively, and modernly using AI tools.',
    },
    roleDescription: {
      de: 'Als AI Marketing Junior unterstützt du uns bei der Erstellung und Weiterentwicklung von Content für unterschiedliche Kanäle. Du nutzt moderne KI-Tools gezielt für Recherche, Ideengenerierung, Strukturierung und Textproduktion – immer mit Blick auf Qualität, Relevanz und Markenfit.\n\nDie Rolle ist ideal für dich, wenn du sprachlich stark bist, digitale Tools liebst und dich begeisterst, mit AI produktiv und kreativ zu arbeiten.',
      en: 'As AI Marketing Junior, you support us in creating and evolving content for various channels. You strategically use modern AI tools for research, ideation, structuring, and text production – always with an eye on quality, relevance, and brand fit.\n\nThis role is ideal for you if you have strong language skills, love digital tools, and are passionate about working productively and creatively with AI.',
    },
    tasks: {
      de: [
        'Unterstützung bei der Erstellung von Marketing-Content mit Hilfe von KI-Tools',
        'Mitwirkung an Newslettern, LinkedIn-Posts, Website-Texten und weiteren Content-Formaten',
        'Entwicklung und Optimierung von Prompts für unterschiedliche Content-Ziele',
        'Recherche, Themenfindung und Aufbereitung relevanter Inhalte rund um AI, Process Intelligence und B2B SaaS',
        'Anpassung und Verfeinerung KI-generierter Inhalte für unterschiedliche Zielgruppen und Kanäle',
        'Unterstützung bei der Pflege eines konsistenten Sprachstils und Markenauftritts',
        'Zusammenarbeit mit Sales und Founding Team, um Inhalte nah an Markt, Produkt und Zielgruppe zu entwickeln',
      ],
      en: [
        'Support the creation of marketing content using AI tools',
        'Contribute to newsletters, LinkedIn posts, website copy, and other content formats',
        'Develop and optimize prompts for different content objectives',
        'Research, identify topics, and prepare relevant content around AI, Process Intelligence, and B2B SaaS',
        'Adapt and refine AI-generated content for different target audiences and channels',
        'Help maintain a consistent tone of voice and brand presence',
        'Collaborate with Sales and Founding Team to develop content aligned with market, product, and target audience',
      ],
    },
    requirements: {
      de: [
        'Sehr gute Deutsch- und Englischkenntnisse in Wort und Schrift',
        'Hohe Motivation, mit AI-Tools im Marketing und in der Content-Erstellung zu arbeiten',
        'Erste Erfahrung oder starkes Interesse an der Erstellung von Content für Kanäle wie LinkedIn und Newsletter',
        'Gute Kenntnisse im Prompting von KI für Content-Erstellung und Ideenentwicklung',
        'Gespür für Sprache, Struktur und zielgruppengerechte Kommunikation',
        'Selbstständige, sorgfältige und proaktive Arbeitsweise',
        'Interesse an Technologie, Startups, AI und B2B-Kommunikation',
        'Nice-To-Have: Erfahrung mit HubSpot-CRM, Apollo.io, Canva oder LinkedIn-Automatisierungs-Tools wie LinkedHelper oder HeyReach',
      ],
      en: [
        'Fluent in German and English (written and spoken)',
        'High motivation to work with AI tools in marketing and content creation',
        'Initial experience or strong interest in creating content for channels like LinkedIn and newsletters',
        'Good knowledge of AI prompting for content creation and ideation',
        'Strong sense for language, structure, and audience-appropriate communication',
        'Independent, thorough, and proactive working style',
        'Interest in technology, startups, AI, and B2B communication',
        'Nice-to-have: Experience with HubSpot CRM, Apollo.io, Canva, or LinkedIn automation tools like LinkedHelper or HeyReach',
      ],
    },
    benefits: {
      de: [
        'Eine spannende Junior-Rolle mit viel Lernpotenzial in einem innovativen Tech-Startup',
        'Direkte Einblicke in modernes B2B-Marketing an der Schnittstelle von Software, AI und Vertrieb',
        'Viel Raum, neue Tools auszuprobieren und eigene Ideen einzubringen',
        'Flexible Arbeitszeiten und Remote-Arbeit',
        'Direkte Zusammenarbeit mit dem Gründerteam und schnelle Entwicklungsmöglichkeiten',
        'Eine offene, pragmatische und ambitionierte Unternehmenskultur',
      ],
      en: [
        'An exciting junior role with significant learning potential in an innovative tech startup',
        'Direct insights into modern B2B marketing at the intersection of software, AI, and sales',
        'Plenty of room to try new tools and bring your own ideas',
        'Flexible working hours and remote work',
        'Direct collaboration with the founding team and fast development opportunities',
        'An open, pragmatic, and ambitious company culture',
      ],
    },
    closingText: {
      de: 'Dann freuen wir uns auf deine Bewerbung. Schicke uns deinen Lebenslauf und gern auch ein paar Arbeitsproben, z. B. LinkedIn-Posts, Texte, Newsletter-Ideen oder Beispiele für deinen Umgang mit KI in der Content-Erstellung.',
      en: 'We look forward to your application. Send us your CV and ideally some work samples, e.g., LinkedIn posts, articles, newsletter ideas, or examples of how you use AI in content creation.',
    },
  },
];

export function getActiveListings(): JobListing[] {
  return [...jobListings].sort(
    (a, b) => b.publishedDate.getTime() - a.publishedDate.getTime()
  );
}

export function getJobById(id: string): JobListing | undefined {
  return jobListings.find(job => job.id === id);
}

export function getJobDescription(job: JobListing, language: Language): string {
  return job.description[language];
}
