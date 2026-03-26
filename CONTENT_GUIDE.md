# Content Guide – Noreja Website

Dieser Guide erklärt, wie du Inhalte auf der Noreja-Website anlegst und bearbeitest. Er richtet sich an Personen, die Content pflegen, ohne tief in die technische Architektur einsteigen zu müssen.

> Für technische Details (Routing, Build-Prozess, Architektur, Deployment) siehe die [README.md](./README.md).

---

## Inhaltsverzeichnis

1. [Überblick](#1-überblick)
2. [Asset-Workflow (Bilder)](#2-asset-workflow-bilder)
3. [Events](#3-events)
4. [Success Stories](#4-success-stories)
5. [Team & Advisory Board](#5-team--advisory-board)
6. [Partner & Kundenstimmen](#6-partner--kundenstimmen)
7. [Use Cases](#7-use-cases)
8. [Downloads](#8-downloads)
9. [Übersetzungen & FAQs](#9-übersetzungen--faqs)
10. [SEO, Seitentitel & LLM-Crawlability](#10-seo-seitentitel--llm-crawlability)
11. [Checkliste: Neuen Content live bringen](#11-checkliste-neuen-content-live-bringen)

---

## 1. Überblick

Alle Inhalte der Website werden in TypeScript-Dateien unter `src/lib/` gepflegt. Es gibt **kein CMS und keine Datenbank** — Content-Änderungen sind Code-Änderungen.

| Content-Typ | Datei | Bilder-Ordner |
|---|---|---|
| Events | `src/lib/events.ts` | — |
| Success Stories | `src/lib/successStories.ts` | `assets_raw/success_stories/` |
| Team & Advisory | `src/lib/team.ts` | `assets_raw/team/` |
| Partner | `src/lib/partners.ts` | `assets_raw/partners/`, `assets_raw/partnerFaces/` |
| Use Cases | `src/lib/useCases.ts` | `assets_raw/use_cases/` |
| Downloads | `src/lib/downloads.ts` | — (PDFs liegen auf HubSpot) |
| Texte & FAQs | `src/lib/translations.ts` | — |
| LLM-Content | `public/llms.txt`, `public/llms-full.txt` | — |
| Seitentitel | `src/components/PageTitle.tsx` | — |
| Structured Data | `src/components/StructuredData.tsx` | — |

**Grundprinzip:** Die Website ist bilingual (Deutsch + Englisch). Viele Felder erwarten deshalb ein Objekt mit `{ de: "...", en: "..." }`.

---

## 2. Asset-Workflow (Bilder)

Bilder werden **nicht direkt** in `src/assets/` abgelegt. Stattdessen gibt es eine Pipeline:

```
assets_raw/  →  npm run compress-images  →  src/assets/
```

### Schritt für Schritt

1. **Originalbild** in den passenden Unterordner von `assets_raw/` legen (PNG oder JPG)
2. **`npm run compress-images`** ausführen — konvertiert PNG/JPG automatisch zu WebP (Qualität 80%)
3. Die konvertierte Datei landet in `src/assets/` im gleichen Unterordner

### Was wird konvertiert, was nicht?

| Format | Verhalten |
|---|---|
| `.png`, `.jpg`, `.jpeg` | → Konvertiert zu `.webp` |
| `.svg` | → Wird 1:1 kopiert |
| `.webm`, `.mp4`, etc. | → Wird übersprungen |

### Ausgeschlossene Ordner

Die Ordner `icons/` und `platform/` werden **nicht** durch die Pipeline verarbeitet. Sie enthalten Bilder, die unverändert bleiben sollen.

### Ordnerstruktur in `assets_raw/`

```
assets_raw/
├── agents/              # KI-Agenten-Bilder
├── animation/           # Animationsdateien (.webm)
├── customers/           # Kundenlogos (weiß auf transparent)
├── icons/               # Icons (ausgeschlossen von Konvertierung)
├── integrations/        # Integrationslogos
├── maintenance/         # Wartungsseite
├── other_logos/         # Sonstige Logos
├── partnerFaces/        # Porträtfotos der Partner-Ansprechpartner
├── partners/            # Partner-Logos
│   └── partners_white/  # Weiße Logo-Varianten
├── platform/            # Plattform-Screenshots (ausgeschlossen)
├── privacy/             # Datenschutz-Grafiken
├── success_stories/     # Bilder für Success Stories
│   └── cover_images/    # Cover-Bilder pro Branche
├── team/                # Team-Fotos
└── use_cases/           # Use-Case-Bilder
```

### Wichtig

- Die Pipeline läuft auch automatisch bei `npm run build`
- Dateinamen beibehalten (nur die Endung ändert sich: `.png` → `.webp`)
- Im Code dann immer auf `.webp` referenzieren

---

## 3. Events

**Datei:** `src/lib/events.ts`

Events erscheinen automatisch auf der Events-Seite. Vergangene Events werden automatisch in den "Past Events"-Bereich verschoben (basierend auf dem `date`-Feld).

### So fügst du ein neues Event hinzu

Öffne `src/lib/events.ts` und füge einen neuen Eintrag in das `eventData`-Array ein:

```typescript
{
  id: '14',                              // Eindeutige ID (als String)
  title: 'Name der Veranstaltung',
  description: {
    de: 'Deutsche Beschreibung...',
    en: 'English description...',
  },
  date: new Date('2026-09-15'),          // Startdatum
  endDate: new Date('2026-09-16'),       // Optional: Enddatum (bei mehrtägigen Events)
  location: {
    type: 'onsite',                      // 'online' | 'onsite' | 'hybrid'
    address: 'Messe Wien, Vienna, Austria',  // Bei onsite/hybrid
    // platform: 'Zoom',                 // Bei online/hybrid
  },
  registration: {
    required: true,                      // Ist eine Anmeldung nötig?
    url: 'https://example.com/register', // Optional: externer Anmelde-Link
    // deadline: new Date('2026-09-01'), // Optional: Anmeldeschluss
    // capacity: 200,                    // Optional: max. Teilnehmer
  },
  type: 'conference',                    // 'webinar' | 'conference' | 'workshop' | 'announcement' | 'exhibition'
  featured: true,                        // Optional: hervorgehobene Darstellung
  // logo: 'event-logo.webp',            // Optional: Event-Logo
  // image: 'event-image.webp',          // Optional: Event-Bild
}
```

### Pflichtfelder

- `id`, `title`, `description` (de + en), `date`, `location` (mit `type`), `registration` (mit `required`), `type`

### Tipps

- `featured: true` hebt das Event auf der Startseite hervor
- Die `registration.url` kann auch ein interner Pfad sein (z.B. `'/contact'`)
- Events mit `date` in der Vergangenheit wandern automatisch in "Past Events"

---

## 4. Success Stories

**Datei:** `src/lib/successStories.ts`

Success Stories sind die umfangreichsten Content-Objekte. Jede Story hat mehrere Sektionen mit bilingualem Text.

### Interface-Übersicht

```typescript
interface SuccessStory {
  id: string;                           // URL-Slug (z.B. "hector")
  companyName: string;
  logoUrl: string;                      // Wird per getImagePath() aufgelöst
  coverImageUrl: string;                // Wird per getCoverImagePath() aufgelöst
  summary: Record<Language, string>;
  subtitle: Record<Language, string>;
  whoIsSection: Record<Language, {      // "Wer ist [Firma]?"
    title: string;
    content: string;
    highlight?: string;
  }>;
  blindSpotsSection: Record<Language, { // "Blind Spots"
    title: string;
    content: string;
    highlight?: string;
  }>;
  findingsSection: Record<Language, {   // Erkenntnisse
    title: string;
    findings: Array<{ title: string; content: string }>;
    highlight?: string;
  }>;
  detailSection: Record<Language, {     // Details mit Bildern
    title: string;
    items: SuccessStoryDetailItem[];
    highlight?: string;
  }>;
  nextStepsSection: Record<Language, {  // Nächste Schritte
    title: string;
    content?: string;
    imagePath?: string;
    imageSize?: "s" | "m" | "l";
    items?: SuccessStoryDetailItem[];
    highlight?: string;
  }>;
  downloadAssetId: string;              // Verknüpfung zu downloads.ts (ohne Sprach-Suffix)
  keyStat?: Record<Language, {          // Optional: Kennzahl
    value: string;
    metric: string;
  }>;
  externalUrl: string;
  industry: Record<Language, string>;
  company_size: Record<Language, string>;
  metaDescription?: Record<Language, string>;
}
```

### Cover-Bilder

Cover-Bilder werden automatisch über die Branche (`industry.en`) zugeordnet. Das Mapping liegt in `getCoverImagePath()`:

| Branche (EN) | Cover-Bild |
|---|---|
| Insurance | `Insurance.webp` |
| Supply Chain | `Supply-Chain.webp` |
| Manufacturing | `Manufacturing.webp` |
| Software Development | `Software-Development.webp` |

Für eine neue Branche musst du das Mapping in der Datei erweitern und das Cover-Bild in `assets_raw/success_stories/cover_images/` ablegen.

### Detail-Items

Innerhalb der `detailSection` und `nextStepsSection` können einzelne Items optional ein Bild enthalten:

```typescript
{
  imagePath: getSuccessStoryImagePath("dateiname.webp"),  // Optional
  imageSize: "m",     // "s" | "m" | "l" — Standard: "m"
  content: "Beschreibungstext...",
  number: "7329",     // Optional: hervorgehobene Kennzahl
  title: "Überschrift" // Optional
}
```

### Download-Verknüpfung

Das Feld `downloadAssetId` verknüpft die Story mit einem Download aus `downloads.ts`. Beispiel: `"success-story-hector"` wird für DE zu `"success-story-hector-de"` und für EN zu `"success-story-hector-en"` aufgelöst.

### So fügst du eine neue Success Story hinzu

1. Bilder in `assets_raw/success_stories/[story-name]/` ablegen
2. Falls neue Branche: Cover-Bild in `assets_raw/success_stories/cover_images/` + Mapping erweitern
3. `npm run compress-images` ausführen
4. Kunden-Logo in `assets_raw/customers/` ablegen (falls nicht vorhanden)
5. Neuen Eintrag in `successStories`-Array in `src/lib/successStories.ts` anlegen
6. Download-Einträge (DE + EN) in `src/lib/downloads.ts` anlegen (PDFs auf HubSpot hochladen)

---

## 5. Team & Advisory Board

**Datei:** `src/lib/team.ts`

Es gibt zwei getrennte Gruppen: **Team Members** und **Advisory Members**.

### Team Member hinzufügen

1. Foto in `assets_raw/team/` ablegen (z.B. `Vorname-Nachname.png`)
2. `npm run compress-images` ausführen
3. Neuen Eintrag in `teamMembersBase` einfügen:

```typescript
{
  id: "9",
  name: "Vorname Nachname",
  role: "Job Title",
  oneLiner: "Kurzbeschreibung (wird auf der Übersichtsseite angezeigt).",
  linkedInUrl: "https://www.linkedin.com/in/...",
  imageFilename: "Vorname-Nachname.webp",   // Dateiname in src/assets/team/
  isFounder: false,
  personalIntro: {
    en: "Englische Biografie...",
    de: "Deutsche Biografie..."
  }
}
```

### Advisory Member hinzufügen

Gleicher Bild-Workflow, dann Eintrag in `advisoryMembersBase`:

```typescript
{
  id: "adv-5",
  name: "Vorname Nachname",
  linkedInUrl: "https://www.linkedin.com/in/...",
  imageFilename: "Vorname-Nachname.webp"
}
```

### Wichtig

- Bilder werden **lazy loaded** (asynchron geladen)
- Der `imageFilename` referenziert die Datei in `src/assets/team/` (nach Kompression, also `.webp`)
- Gründer werden mit `isFounder: true` markiert und oben angezeigt

---

## 6. Partner & Kundenstimmen

**Datei:** `src/lib/partners.ts`

Partner-Einträge werden je nach `partnerType` und `isPartner` an verschiedenen Stellen auf der Website angezeigt.

### Partner-Typen

| `partnerType` | `isPartner` | Anzeige |
|---|---|---|
| `businessWithQuote` | `true` | Partner-Seite mit Logo und Zitat |
| `businessWithoutQuote` | `true` | Partner-Seite nur mit Logo |
| `advisorWithQuote` | `true/false` | Kundenstimmen-Bereich mit Foto und Zitat |

### Logo-Quellen

Logos können aus verschiedenen Ordnern kommen. Das wird über `logoSource` gesteuert:

| `logoSource` | Ordner in `assets_raw/` |
|---|---|
| `'partners'` | `partners/` |
| `'partners_white'` | `partners/partners_white/` |
| `'customers'` | `customers/` |
| `'other_logos'` | `other_logos/` |

### Neuen Partner hinzufügen

1. Logo in den passenden `assets_raw/`-Ordner ablegen
2. Falls Zitat vorhanden: Porträtfoto in `assets_raw/partnerFaces/` ablegen
3. `npm run compress-images` ausführen
4. Neuen Eintrag in `partnersBase` einfügen:

```typescript
{
  id: "22",
  name: "Firmenname GmbH",
  isPartner: true,
  partnerType: 'businessWithQuote',
  logoFilename: "firmenname_logo.svg",      // Dateiname im Logo-Ordner
  logoSource: 'partners',                   // Welcher Ordner?
  logoFilenameWhite: "firmenname_white.webp", // Optional: weiße Logo-Variante
  logoSize: 'medium',                       // 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
  personPhotoFilename: "person_firma.webp", // Optional: Porträtfoto (für Zitat)
  website: "https://www.firma.de/",
  category: "consulting",                   // Optional: 'technology' | 'software' | 'consulting' | 'legal' | 'academic' | 'insurance' | 'incubator' | 'advisory' | 'industry'
  quote: "Das Zitat des Partners...",       // Optional
  quoteAuthor: "Vorname Nachname, Titel",   // Optional
  linkedin: "https://www.linkedin.com/in/..." // Optional
}
```

### Hinweise

- `preferOriginalLogo: true` erzwingt das farbige Logo auch auf hellen Hintergründen
- Einträge ohne `quote` werden nur als Logo angezeigt
- Die `logoSize` beeinflusst die Darstellungsgröße im Logo-Grid

---

## 7. Use Cases

**Datei:** `src/lib/useCases.ts`

Jeder Use Case hat eine Detailseite mit mehreren Sektionen und optionalen "Additional Use Cases".

### So fügst du einen neuen Use Case hinzu

Neuen Eintrag im `useCases`-Array:

```typescript
{
  id: "neuer-use-case",                    // URL-Slug
  title: {
    en: "New Use Case",
    de: "Neuer Anwendungsfall"
  },
  shortDescription: {
    en: "Short teaser text...",
    de: "Kurzer Teaser-Text..."
  },
  description: {
    en: "Longer introductory text...",
    de: "Längerer Einleitungstext..."
  },
  sections: {
    en: [
      {
        title: "Section Title",
        subtitle: "Optional subtitle",       // Optional
        content: "Detailed description...",
        imagePath: getUseCaseImagePath("image-name")  // Optional
      },
      // ... weitere Sections
    ],
    de: [
      // Gleiche Struktur auf Deutsch
    ]
  },
  additionalUseCases: [                     // Optional: "Und mehr..."-Bereich
    {
      id: "sub-use-case",
      title: { en: "Sub Use Case", de: "Unter-Anwendungsfall" },
      description: { en: "...", de: "..." },
      icon: "Settings"                      // Icon-Name aus lucide-react
    }
  ]
}
```

### Bilder

- Use-Case-Bilder in `assets_raw/use_cases/` ablegen
- Per `getUseCaseImagePath("dateiname")` referenzieren (ohne Endung — das Matching ist case-insensitiv)

### Whitepaper-Verknüpfung

In `src/lib/downloads.ts` gibt es ein Mapping `useCaseToWhitepaperMap`, das Use-Case-IDs mit Whitepaper-Downloads verknüpft. Für einen neuen Use Case mit Whitepaper muss dort ein Eintrag ergänzt werden:

```typescript
const useCaseToWhitepaperMap: Record<string, Record<Language, string>> = {
  // ...bestehende...
  "neuer-use-case": {
    de: "whitepaper-neuer-use-case-de",
    en: "whitepaper-neuer-use-case-en"
  }
};
```

Zur bearbeitung von Logos (bspw. weiße Version von Logos) nutze ich [Flowpoint](https://flowpoint.ai/tools/logo-color-changer).
Einige der Cover Bilder, bspw. bei den Use Cases und Success Stories, wurden mit [Recraft](https://www.recraft.ai/community) erstellt. 

---

## 8. Downloads

**Datei:** `src/lib/downloads.ts`

Downloads sind PDFs, die auf HubSpot gehostet werden. Es gibt zwei Zugriffsarten:

| `access` | Verhalten |
|---|---|
| `"free"` | Sofort herunterladbar |
| `"locked"` | Erfordert HubSpot-Formular-Submission vor dem Download |

### Neuen Download hinzufügen

1. PDF auf HubSpot hochladen (HubSpot → Files → Upload)
2. Die URL kopieren
3. Neuen Eintrag im `downloadAssets`-Array:

```typescript
{
  id: "whitepaper-thema-de",              // Eindeutige ID
  title: "Whitepaper: Thema",
  description: "Kurzbeschreibung des Downloads.",
  fileUrl: "https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/...",
  fileSize: "2.5 MB",
  fileType: "PDF",
  category: "Whitepaper",                 // "Whitepaper" | "Success Stories" | "Referral Program"
  access: "locked",                       // "free" | "locked"
  languages: ["de"],                      // Für welche Sprache verfügbar
  // formGuid: "abc-123-...",             // Optional: HubSpot-Formular-ID überschreiben
}
```

### Sprachversionen

Bei bilingualen Downloads separate Einträge anlegen (mit `-de` / `-en` Suffix in der ID). Das `languages`-Array steuert, auf welcher Sprachversion der Website der Download angezeigt wird.

---

## 9. Übersetzungen & FAQs

**Datei:** `src/lib/translations.ts`

Diese Datei enthält **alle UI-Texte** der Website in DE und EN. Sie ist sehr groß (~1800 Zeilen).

### Texte ändern

Die Struktur ist ein verschachteltes Objekt. Suche nach dem bestehenden Text und ändere ihn an beiden Stellen (EN-Block und DE-Block):

```typescript
// EN (ab ca. Zeile 200)
en: {
  pages: {
    pricing: {
      faq: {
        items: [
          { question: "...", answer: "..." },
          // ...
        ]
      }
    }
  }
}

// DE (ab ca. Zeile 900)
de: {
  // Gleiche Struktur
}
```

### Neuen FAQ-Eintrag hinzufügen

FAQs befinden sich unter `pages.pricing.faq.items`. Füge ein neues Objekt in **beide** Sprachblöcke ein:

```typescript
// Im EN-Block
{
  question: "What is the new feature?",
  answer: "The answer to the question..."
},

// Im DE-Block (gleiche Position!)
{
  question: "Was ist das neue Feature?",
  answer: "Die Antwort auf die Frage..."
},
```

### Tipps

- Immer **beide** Sprachen pflegen — fehlende Übersetzungen führen zu leeren Stellen
- Die Position im Array bestimmt die Reihenfolge auf der Website
- Zum Finden des richtigen Abschnitts: Im Browser den Text kopieren, in der Datei suchen

---

## 10. SEO, Seitentitel & LLM-Crawlability

Die Website enthält mehrere Mechanismen, die sicherstellen, dass Suchmaschinen und LLM-Crawler (GPTBot, ClaudeBot, PerplexityBot etc.) die Inhalte korrekt erfassen.

### llms.txt und llms-full.txt

**Dateien:** `public/llms.txt`, `public/llms-full.txt`

Diese Dateien folgen dem [llms.txt-Standard](https://llmstxt.org/) und geben LLM-Crawlern eine strukturierte Zusammenfassung der Website — unabhängig von JavaScript-Rendering.

- **`llms.txt`** — Kompakte Übersicht: Firmenname, Produktbeschreibung, Links zu den wichtigsten Seiten
- **`llms-full.txt`** — Ausführlicher Plaintext: Plattform-Module, Use Cases, Success Stories, Pricing, FAQ, Team, Partner

**Wann aktualisieren?**

Diese Dateien werden **nicht automatisch** generiert. Sie müssen manuell aktualisiert werden, wenn sich folgende Inhalte ändern:

- Neue Success Stories, Use Cases oder Partner
- Änderungen an Produkt-Features oder Pricing
- Neue Team-Mitglieder oder Gründeränderungen
- Neue FAQ-Einträge

> **Tipp:** Am besten bei jedem größeren Content-Update kurz prüfen, ob `llms-full.txt` noch aktuell ist.

### Seitentitel

**Datei:** `src/components/PageTitle.tsx`

Jede Seite bekommt einen eigenen `<title>` Tag (sichtbar im Browser-Tab). Die Titel sind direkt in der Komponente definiert — für statische Seiten als Mapping, für dynamische Seiten (Success Stories, Use Cases) wird der Titel aus den Daten generiert.

**Wann aktualisieren?**

- Bei **neuen statischen Seiten**: Eintrag im `pageTitles`-Objekt in `PageTitle.tsx` ergänzen
- Bei **Success Stories und Use Cases**: Kein Handlungsbedarf — der Titel wird automatisch aus `companyName` bzw. `title` generiert

### Structured Data (JSON-LD)

**Datei:** `src/components/StructuredData.tsx`

Die Website gibt Suchmaschinen und LLMs über JSON-LD strukturierte Daten mit. Folgende Schemas sind aktiv:

| Schema | Seite | Was es enthält |
|---|---|---|
| `OrganizationSchema` | Homepage (`Index.tsx`) | Firmenname, URL, Logo, Social Links, Kontakt |
| `SoftwareApplicationSchema` | Plattform (`Functionalities.tsx`) | Produktname, Features, Preisbereich |
| `FAQSchema` | Pricing (`Pricing.tsx`) | FAQ-Fragen und -Antworten (aus `translations.ts`) |
| `BreadcrumbSchema` | Success Story Detail, Use Case | Breadcrumb-Navigation (Home → Übersicht → Detail) |
| `EventSchema` | Events (`Events.tsx`) | Event-Daten (war bereits vorhanden) |

**Wann aktualisieren?**

- **OrganizationSchema**: Bei Änderungen an Firmendaten (Adresse, Social Links, Gründungsjahr) → direkt in `StructuredData.tsx` anpassen
- **SoftwareApplicationSchema**: Bei neuen Features oder Preisänderungen → direkt in `StructuredData.tsx` anpassen
- **FAQSchema**: Wird automatisch aus `translations.ts` gezogen — kein manueller Aufwand
- **BreadcrumbSchema**: Wird automatisch generiert — kein manueller Aufwand

### hreflang-Tags

**Datei:** `src/components/HreflangTags.tsx`

Für jede Seite werden automatisch `<link rel="alternate" hreflang="de/en">` Tags gesetzt. Das hilft Suchmaschinen, die Sprachversionen korrekt zuzuordnen.

**Kein manueller Aufwand** — die Tags werden aus dem bestehenden Routing generiert.

### Meta Descriptions

**Datei:** `src/lib/translations.ts` (Abschnitt `metaDescriptions`)

Meta Descriptions werden pro Route und Sprache aus `translations.ts` geladen. Für neue statische Seiten muss ein Eintrag unter `metaDescriptions` in **beiden** Sprachblöcken (EN + DE) ergänzt werden.

### Netlify Pre-Rendering

In `netlify.toml` ist Pre-Rendering aktiviert. Netlify rendert die SPA serverseitig für Bot-Crawler, sodass auch Crawler ohne JavaScript-Support den vollständigen HTML-Content sehen.

---

## 11. Checkliste: Neuen Content live bringen

Wenn du neuen Content erstellt hast, gehe diese Punkte durch:

### Vor dem Commit

- [ ] **Bilder komprimiert?** → `npm run compress-images` ausgeführt
- [ ] **Beide Sprachen gepflegt?** → Alle `de`/`en`-Felder ausgefüllt
- [ ] **IDs eindeutig?** → Keine doppelten `id`-Werte im Array
- [ ] **Build erfolgreich?** → `npm run build` ohne Fehler

### Bei Success Stories und Use Cases

- [ ] **Sitemap** wird automatisch generiert — die IDs werden aus den Dateien extrahiert
- [ ] **Download-Einträge** in `downloads.ts` angelegt (falls PDF vorhanden)
- [ ] **Whitepaper-Mapping** in `downloads.ts` aktualisiert (bei Use Cases)
- [ ] **`llms-full.txt`** aktualisiert? → Neue Story/Use Case ergänzen

### Bei neuen Seiten/URLs

- [ ] **Redirects** in `netlify.toml` prüfen, falls sich URLs geändert haben
- [ ] **SEO**: `metaDescription` in `translations.ts` gesetzt (beide Sprachen)
- [ ] **Seitentitel**: Eintrag in `PageTitle.tsx` ergänzt (bei statischen Seiten)

### Bei Änderungen an Produkt, Pricing, Team oder Partnern

- [ ] **`llms-full.txt`** aktualisiert? → Relevante Abschnitte anpassen
- [ ] **Structured Data** in `StructuredData.tsx` prüfen (bei Feature- oder Preisänderungen)

### Deployment

Die Website wird über **Netlify** deployed. Ein Push auf `main` triggert automatisch einen neuen Build.

---

> Bei Fragen zur technischen Architektur, zum Build-Prozess oder zum Routing siehe die [README.md](./README.md).
