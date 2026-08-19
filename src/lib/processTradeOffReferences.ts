/**
 * Curated external sources for the cost-of-inaction / Devil's Quadrangle page.
 *
 * Every entry was checked against Crossref or the publisher itself, so the
 * metadata below (authors, venue, year) matches the cited work. DOI links are
 * preferred over publisher URLs because they stay stable.
 */

export type ReferenceKind = "paper" | "book" | "standard" | "article" | "overview";

export interface ProcessReference {
  id: string;
  kind: ReferenceKind;
  /** Work title, kept in its original language */
  title: string;
  authors: string;
  /** Journal, book series, publisher or site the work appeared in */
  venue: string;
  year: string;
  url: string;
  /** Why this source is worth opening, per language */
  note: Record<"de" | "en", string>;
}

export interface ReferenceGroup {
  id: string;
  label: Record<"de" | "en", string>;
  description: Record<"de" | "en", string>;
  references: ProcessReference[];
}

export const referenceGroups: ReferenceGroup[] = [
  {
    id: "quadrangle",
    label: {
      de: "Devil's Quadrangle: Ursprung und Weiterentwicklung",
      en: "Devil's Quadrangle: origin and further development",
    },
    description: {
      de: "Die Standardliteratur zum Zielkonflikt aus Zeit, Kosten, Qualität und Flexibilität – und wie das Modell heute erweitert wird.",
      en: "The standard literature on the trade-off between time, cost, quality and flexibility – and how the model is being extended today.",
    },
    references: [
      {
        id: "reijers-2005",
        kind: "paper",
        title:
          "Best practices in business process redesign: an overview and qualitative evaluation of successful redesign heuristics",
        authors: "Hajo A. Reijers, Selma Limam Mansar",
        venue: "Omega – The International Journal of Management Science 33(4), 283–306",
        year: "2005",
        url: "https://doi.org/10.1016/j.omega.2004.04.012",
        note: {
          de: "Die vielzitierte Referenz für das Devil's Quadrangle: 29 Redesign-Heuristiken, jeweils bewertet nach ihrer Wirkung auf Zeit, Kosten, Qualität und Flexibilität.",
          en: "The widely cited reference for the Devil's Quadrangle: 29 redesign heuristics, each assessed for its effect on time, cost, quality and flexibility.",
        },
      },
      {
        id: "dumas-2018",
        kind: "book",
        title: "Fundamentals of Business Process Management",
        authors: "Marlon Dumas, Marcello La Rosa, Jan Mendling, Hajo A. Reijers",
        venue: "Springer, 2. Auflage",
        year: "2018",
        url: "https://doi.org/10.1007/978-3-662-56509-4",
        note: {
          de: "Das Standardlehrbuch des Business Process Management. Ordnet das Quadrangle in den vollständigen BPM-Lebenszyklus von Discovery bis Redesign ein.",
          en: "The standard textbook on business process management. Places the quadrangle within the full BPM lifecycle from discovery to redesign.",
        },
      },
      {
        id: "bpm-goal-hexagon",
        kind: "paper",
        title: "The BPM Goal Hexagon: an update to the Devil's Quadrangle",
        authors:
          "Peter A. François, Vincent Borghoff, Alexander Mayr, Ralf Plattfaut, Christian Janiesch",
        venue: "Management Review Quarterly",
        year: "2026",
        url: "https://doi.org/10.1007/s11301-026-00586-0",
        note: {
          de: "Aktuelle Erweiterung des Modells: Zeit, Qualität und Flexibilität bleiben, Kosten werden zu einer breiteren Ökonomie-Dimension, hinzu kommen Menschen und Umwelt.",
          en: "A current extension of the model: time, quality and flexibility remain, cost widens into an economics dimension, and people plus environment are added.",
        },
      },
    ],
  },
  {
    id: "measurement",
    label: {
      de: "Den Zielkonflikt mit Prozessdaten messen",
      en: "Measuring the trade-off with process data",
    },
    description: {
      de: "Ohne belastbare Prozessdaten bleibt der Zielkonflikt eine Behauptung. Diese Quellen beschreiben, wie er messbar wird.",
      en: "Without dependable process data the trade-off stays an assertion. These sources describe how it becomes measurable.",
    },
    references: [
      {
        id: "velasquez-2024",
        kind: "paper",
        title: "Analyzing the Devil's Quadrangle of Process Instances Through Process Mining",
        authors: "Ignacio Velásquez, Marcos Sepúlveda",
        venue: "Business Process Management Workshops, LNBIP, Springer",
        year: "2024",
        url: "https://doi.org/10.1007/978-3-031-50974-2_21",
        note: {
          de: "Zeigt, wie sich die vier Dimensionen je Prozessinstanz aus Event-Daten berechnen lassen – die datenbasierte Variante genau dieser Visualisierung.",
          en: "Shows how the four dimensions can be computed per process instance from event data – the data-driven counterpart to this very visualisation.",
        },
      },
      {
        id: "aalst-2016",
        kind: "book",
        title: "Process Mining: Data Science in Action",
        authors: "Wil van der Aalst",
        venue: "Springer, 2. Auflage",
        year: "2016",
        url: "https://doi.org/10.1007/978-3-662-49851-4",
        note: {
          de: "Das Grundlagenwerk zum Process Mining von dessen Begründer: Discovery, Conformance Checking und Performance-Analyse auf Event-Logs.",
          en: "The foundational process mining work by the field's originator: discovery, conformance checking and performance analysis on event logs.",
        },
      },
      {
        id: "process-mining-manifesto",
        kind: "standard",
        title: "Process Mining Manifesto",
        authors: "IEEE Task Force on Process Mining (77 Autoren, 53 Organisationen)",
        venue: "IEEE Task Force on Process Mining",
        year: "2012",
        url: "https://www.tf-pm.org/resources/manifesto",
        note: {
          de: "Die gemeinsamen Leitprinzipien und offenen Herausforderungen der Disziplin, verfügbar in 16 Sprachen inklusive Deutsch.",
          en: "The discipline's shared guiding principles and open challenges, available in 16 languages including German.",
        },
      },
    ],
  },
  {
    id: "context",
    label: {
      de: "Einordnung und Überblick",
      en: "Context and overview",
    },
    description: {
      de: "Für den Einstieg und die historische Einordnung: warum Prozesse überhaupt neu gedacht werden und wo Process Mining herkommt.",
      en: "For getting started and for historical context: why processes get rethought at all, and where process mining comes from.",
    },
    references: [
      {
        id: "hammer-1990",
        kind: "article",
        title: "Reengineering Work: Don't Automate, Obliterate",
        authors: "Michael Hammer",
        venue: "Harvard Business Review",
        year: "1990",
        url: "https://hbr.org/1990/07/reengineering-work-dont-automate-obliterate",
        note: {
          de: "Der Klassiker des Business Process Reengineering – und die Ursprungsthese, dass Automatisierung schlechter Prozesse nur schneller schlechte Ergebnisse produziert.",
          en: "The business process reengineering classic – and the original argument that automating a bad process only produces bad results faster.",
        },
      },
      {
        id: "wikipedia-process-mining",
        kind: "overview",
        title: "Process mining",
        authors: "Wikipedia-Autoren",
        venue: "Wikipedia",
        year: "laufend",
        url: "https://en.wikipedia.org/wiki/Process_mining",
        note: {
          de: "Kompakter, gut belegter Überblick über Process Discovery, Conformance Checking und Performance-Analyse.",
          en: "A compact, well-sourced overview of process discovery, conformance checking and performance analysis.",
        },
      },
      {
        id: "wikipedia-bpr",
        kind: "overview",
        title: "Business process re-engineering",
        authors: "Wikipedia-Autoren",
        venue: "Wikipedia",
        year: "laufend",
        url: "https://en.wikipedia.org/wiki/Business_process_re-engineering",
        note: {
          de: "Überblick über Ziele, Methoden und dokumentierte Grenzen des Prozess-Reengineerings.",
          en: "An overview of the goals, methods and documented limits of process reengineering.",
        },
      },
    ],
  },
];

/** Flat list, used for the schema.org `citation` property */
export const allReferences = referenceGroups.flatMap((group) => group.references);

/** Maps a reference onto the closest schema.org creative-work type */
export const referenceSchemaType = (kind: ReferenceKind) => {
  switch (kind) {
    case "paper":
      return "ScholarlyArticle";
    case "book":
      return "Book";
    case "article":
      return "Article";
    default:
      return "CreativeWork";
  }
};
