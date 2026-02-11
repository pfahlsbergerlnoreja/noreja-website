# Noreja - SaaS Marketing Website

A modern, responsive multilingual marketing website built with React, TypeScript, and Tailwind CSS.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Project Architecture](#project-architecture)
- [Asset Management](#asset-management)
- [Translation System](#translation-system)
- [Routing System](#routing-system)
- [Sitemap Generation](#sitemap-generation)
- [HubSpot Integration](#hubspot-integration)
- [Content Management](#content-management)
- [Component Structure](#component-structure)
- [Styling & Theming](#styling--theming)
- [Build & Deployment](#build--deployment)
- [Development Workflow](#development-workflow)
- [Key Files Reference](#key-files-reference)

## Project Overview

**Production URL**: https://noreja.com  
**Lovable Project**: https://lovable.dev/projects/ba92bb2f-03b7-4dad-95de-18c6fdc2e6b2

This is a bilingual (German/English) marketing website for Noreja, featuring:

- **Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **UI Components**: shadcn-ui (Radix UI primitives)
- **Routing**: React Router v6 with language-prefixed routes
- **Internationalization**: Centralized translation system supporting EN/DE
- **Deployment**: Netlify with automated builds
- **Forms & Analytics**: HubSpot integration for lead capture and tracking

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended) - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** (comes with Node.js)

### Installation

```bash
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd noreja-website

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The development server will start at `http://localhost:8080` (configured in `vite.config.ts`).

### Available Scripts

```bash
# Development
npm run dev              # Start development server with hot reload

# Build
npm run build            # Production build (runs prebuild scripts automatically)
npm run build:dev        # Development build

# Image Processing
npm run compress-images  # Manually compress images from assets_raw/ to src/assets/

# Sitemap
npm run generate-sitemap # Manually generate sitemap.xml

# Code Quality
npm run lint             # Run ESLint

# Preview
npm run preview          # Preview production build locally

# Testing
npm run test             # Run tests (if configured)
```

### Testing

```bash
# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests once (CI mode)
npm run test:run
```

## Project Architecture

### Tech Stack

- **Build Tool**: Vite 5
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS 3 with custom design tokens
- **UI Components**: shadcn-ui (Radix UI primitives)
- **Routing**: React Router v6
- **State Management**: React Context API (for language)
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion
- **Image Processing**: Sharp (for WebP conversion)
- **Deployment**: Netlify

### Directory Structure

```
noreja-website/
├── assets_raw/              # Raw image assets (PNG, JPG, SVG)
│   ├── partners/            # Partner logos
│   ├── customers/           # Customer logos
│   ├── success_stories/    # Success story images
│   └── ...
├── public/                  # Static assets served as-is
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml          # Generated sitemap
├── scripts/                 # Build-time scripts
│   ├── compress-images.ts   # Image compression script
│   └── generate-sitemap.ts  # Sitemap generation script
├── src/
│   ├── assets/              # Processed assets (WebP, SVG)
│   │   ├── partners/
│   │   ├── customers/
│   │   └── ...
│   ├── components/          # React components
│   │   ├── ui/              # shadcn-ui components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── contexts/            # React contexts
│   │   └── LanguageContext.tsx
│   ├── hooks/               # Custom React hooks
│   │   ├── use-hubspot-form.ts
│   │   ├── use-mobile.tsx
│   │   └── ...
│   ├── lib/                 # Utilities and data
│   │   ├── config.ts        # Site configuration
│   │   ├── translations.ts  # Translation strings
│   │   ├── routes.ts        # Route definitions
│   │   ├── downloads.ts     # Download assets data
│   │   ├── successStories.ts
│   │   ├── partners.ts
│   │   ├── team.ts
│   │   ├── events.ts
│   │   ├── useCases.ts
│   │   └── utils.ts
│   ├── pages/               # Page components
│   │   ├── Index.tsx
│   │   ├── Functionalities.tsx
│   │   ├── SuccessStories.tsx
│   │   └── ...
│   ├── styles/              # Global styles
│   │   └── tokens.css       # CSS custom properties
│   ├── test/                # Test files
│   ├── App.tsx              # Root component with routing
│   └── main.tsx             # Entry point
├── netlify.toml             # Netlify configuration
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── package.json
```

### Key Configuration Files

- **`vite.config.ts`**: Vite build configuration, path aliases (`@/` → `src/`), React plugin
- **`tailwind.config.ts`**: Tailwind CSS theme, custom colors, design tokens
- **`netlify.toml`**: Deployment config, redirects, headers, build commands
- **`tsconfig.json`**: TypeScript compiler options
- **`src/lib/config.ts`**: Site-wide configuration (HubSpot IDs, URLs, etc.)

## Asset Management

### Overview

The project uses a two-stage asset workflow:
1. **Raw assets** are stored in `assets_raw/`
2. **Processed assets** are automatically generated in `src/assets/` during build

### Raw Assets (`assets_raw/`)

Place your original image files here:
- **PNG, JPG, JPEG**: Will be converted to WebP
- **SVG**: Copied as-is (no conversion)
- **Videos**: Skipped (not processed)

**Folder Structure**:
```
assets_raw/
├── partners/           # Partner logos
├── customers/          # Customer logos
├── success_stories/    # Success story images
│   └── cover_images/   # Cover images for stories
├── partnerFaces/       # Partner photos
└── other_logos/        # Other logo assets
```

### Image Processing (`scripts/compress-images.ts`)

The compression script automatically:

1. **Scans** `assets_raw/` recursively
2. **Converts** PNG/JPG/JPEG → WebP (80% quality)
3. **Copies** SVG files unchanged
4. **Excludes** certain folders (`icons`, `platform` by default)
5. **Outputs** to `src/assets/` maintaining folder structure

**Manual Execution**:
```bash
npm run compress-images
```

**Exclude Folders**:
```bash
npm run compress-images -- --exclude folder1,folder2
```

### Build Integration

The compression script runs automatically before every build via the `prebuild` hook in `package.json`:

```json
{
  "scripts": {
    "prebuild": "npm run compress-images && npm run generate-sitemap",
    "build": "vite build"
  }
}
```

### Using Assets in Code

Assets are imported dynamically using Vite's `import.meta.glob`:

**Example from `src/lib/partners.ts`**:
```typescript
// Dynamically import all partner logos
const partnerLogoImages = import.meta.glob<{ default: string }>(
  '../assets/partners/*.{png,jpg,jpeg,svg,webp}',
  { eager: false }
);

// Get image path (async)
const getImagePath = async (filename: string) => {
  const entry = Object.entries(partnerLogoImages).find(([path]) => 
    path.toLowerCase().includes(filename.toLowerCase())
  );
  if (entry) {
    const module = await entry[1]();
    return module.default;
  }
  return '';
};
```

**Static Imports** (for specific assets):
```typescript
import logo from '@/assets/partners/logo.webp';
```

## Translation System

### Overview

The project uses a centralized translation system in `src/lib/translations.ts` supporting **German (DE)** and **English (EN)**.

### Translation File Structure

The `translations.ts` file exports:
- `Language` type: `'en' | 'de'`
- `Translations` interface: Type-safe translation structure
- `translations` object: Contains `en` and `de` translation objects

**Structure Example**:
```typescript
export const translations = {
  en: {
    navigation: { home: "Home", ... },
    pages: { functionalities: { title: "...", ... } },
    // ... more sections
  },
  de: {
    navigation: { home: "Startseite", ... },
    pages: { functionalities: { title: "...", ... } },
    // ... more sections
  }
};
```

### Using Translations in Components

**1. Import the hook**:
```typescript
import { useLanguage } from '@/contexts/LanguageContext';
```

**2. Access translations**:
```typescript
function MyComponent() {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t.navigation.home}</h1>
      <p>Current language: {language}</p>
    </div>
  );
}
```

The `t` object provides type-safe access to all translation strings.

### Language Context (`src/contexts/LanguageContext.tsx`)

The `LanguageProvider`:
- Detects language from URL path (`/de/...` or `/en/...`)
- Provides `language`, `setLanguage()`, and `t` (translations) via context
- Updates HTML `lang` attribute for accessibility
- Syncs language changes with URL routing

**Usage**:
```typescript
// Already wrapped in App.tsx
<LanguageProvider>
  {/* Your app */}
</LanguageProvider>
```

### Language Switching

Language switching is handled automatically:
- **URL-based**: Language is detected from path (`/de/...` vs `/en/...`)
- **Switching**: Changes URL to same page in other language
- **Persistence**: Language preference stored in localStorage

**Language Switcher Component** (`src/components/LanguageSwitcher.tsx`):
- Toggles between EN/DE
- Updates URL and translations automatically

### Adding New Translations

1. **Add to interface** in `translations.ts`:
```typescript
export interface Translations {
  // ... existing
  myNewSection: {
    title: string;
    description: string;
  };
}
```

2. **Add translations** for both languages:
```typescript
export const translations = {
  en: {
    // ... existing
    myNewSection: {
      title: "My Title",
      description: "My Description"
    }
  },
  de: {
    // ... existing
    myNewSection: {
      title: "Mein Titel",
      description: "Meine Beschreibung"
    }
  }
};
```

3. **Use in component**:
```typescript
const { t } = useLanguage();
<h1>{t.myNewSection.title}</h1>
```

## Routing System

### Overview

The project uses **language-prefixed routing**:
- German routes: `/de/...`
- English routes: `/en/...`
- Root `/` redirects to `/de` (default)

### Route Definitions (`src/lib/routes.ts`)

Routes are centrally defined with language variants:

```typescript
export const routes = {
  home: { de: '/de', en: '/en' },
  functionalities: { de: '/de/plattform', en: '/en/platform' },
  pricing: { de: '/de/preise', en: '/en/pricing' },
  successStories: { de: '/de/success-stories', en: '/en/success-stories' },
  // ... more routes
};
```

### Dynamic Routes

Some routes include dynamic parameters:

- **Success Stories**: `/de/success-story/:companyName` or `/en/success-story/:companyName`
- **Use Cases**: `/de/use-cases/:useCaseName` or `/en/use-cases/:useCaseName`

### Route Utilities

**Get route path**:
```typescript
import { getRoutePath } from '@/lib/routes';

const path = getRoutePath('successStoryDetail', 'en', { companyName: 'acme-corp' });
// Returns: '/en/success-story/acme-corp'
```

**Translate route** (switch language):
```typescript
import { translateRoute } from '@/lib/routes';

const newPath = translateRoute('/de/plattform', 'en');
// Returns: '/en/platform'
```

**Get language from path**:
```typescript
import { getLanguageFromPath } from '@/lib/routes';

const lang = getLanguageFromPath('/de/plattform');
// Returns: 'de'
```

### Route Registration (`src/App.tsx`)

Routes are registered in `App.tsx` using React Router:

```typescript
<Routes>
  <Route path="/" element={<Navigate to="/de" replace />} />
  <Route path="/de" element={<Index />} />
  <Route path="/en" element={<Index />} />
  <Route path="/de/plattform" element={<Functionalities />} />
  <Route path="/en/platform" element={<Functionalities />} />
  {/* ... more routes */}
</Routes>
```

### Adding New Routes

1. **Add to `routes.ts`**:
```typescript
export const routes = {
  // ... existing
  myNewPage: {
    de: '/de/meine-seite',
    en: '/en/my-page'
  }
};
```

2. **Add route mapping** (if needed for translation):
```typescript
const pathToRouteKey: Record<string, keyof typeof routes> = {
  // ... existing
  '/de/meine-seite': 'myNewPage',
  '/en/my-page': 'myNewPage',
};
```

3. **Register in `App.tsx`**:
```typescript
<Route path="/de/meine-seite" element={<MyNewPage />} />
<Route path="/en/my-page" element={<MyNewPage />} />
```

4. **Add translations** (see [Translation System](#translation-system))

## Sitemap Generation

### Overview

The sitemap is automatically generated before each build by `scripts/generate-sitemap.ts`.

### How It Works

1. **Extracts dynamic content IDs**:
   - Parses `src/lib/successStories.ts` to extract success story IDs
   - Parses `src/lib/useCases.ts` to extract use case IDs

2. **Generates multilingual URLs**:
   - Creates entries for both `/de/...` and `/en/...` variants
   - Sets appropriate priorities and change frequencies

3. **Outputs to `public/sitemap.xml`**:
   - Uses the `sitemap` npm package
   - Includes all static pages, dynamic pages, and legal pages

### Sitemap Structure

- **Home pages**: Priority 1.0, daily updates
- **Main pages** (platform, pricing, etc.): Priority 0.9, weekly updates
- **Secondary pages** (partners, team, etc.): Priority 0.8, weekly updates
- **Legal pages**: Priority 0.5, monthly updates
- **Dynamic pages** (success stories, use cases): Priority 0.7, monthly updates

### Manual Generation

```bash
npm run generate-sitemap
```

### Adding Pages to Sitemap

Edit `scripts/generate-sitemap.ts` and add entries:

```typescript
// Static pages
addEntry('/de/my-page', 0.8, 'weekly');
addEntry('/en/my-page', 0.8, 'weekly');

// Dynamic pages (if you add new dynamic content types)
const myContentIds = extractMyContentIds();
myContentIds.forEach((id) => {
  addEntry(`/de/my-content/${id}`, 0.7, 'monthly');
  addEntry(`/en/my-content/${id}`, 0.7, 'monthly');
});
```

## HubSpot Integration

### Configuration (`src/lib/config.ts`)

HubSpot settings are centralized:

```typescript
export const HUBSPOT_PORTAL_ID = "144242473";
export const HUBSPOT_FORM_GUID_DEFAULT = "cba179f6-530c-43a4-9d41-4bc0a459953b";

export const hubspotConfig = {
  portalId: HUBSPOT_PORTAL_ID,
  forms: {
    contact: "YOUR_CONTACT_FORM_ID",
    newsletter: "YOUR_NEWSLETTER_FORM_ID",
    download: HUBSPOT_FORM_GUID_DEFAULT
  }
};
```

### Form Components

**1. Contact Form** (`src/components/HubSpotContactForm.tsx`):
- Embeds HubSpot forms using HubSpot's JavaScript SDK
- Supports custom styling and error handling
- Loads script dynamically

**Usage**:
```typescript
<HubSpotContactForm
  portalId="144242473"
  formId="your-form-id"
  region="eu1"
/>
```

**2. Download Gate** (`src/components/DownloadGate.tsx`):
- Shows HubSpot form before allowing download
- Tracks form submissions in session storage
- Handles download triggering after form submission

**Usage**:
```typescript
<DownloadGate
  title="Download Resource"
  description="Fill out the form to download"
  fileUrl="/downloads/resource.pdf"
  formGuid="form-guid"
/>
```

### Download Gating Workflow

1. User clicks download button
2. HubSpot form is displayed
3. User submits form
4. Form submission is tracked in session storage
5. Download is triggered automatically
6. User is redirected to thank you page

### HubSpot Tracking

**Page View Tracking** (`src/App.tsx`):
- Tracks page views for SPA navigation
- Uses HubSpot's `_hsq` queue
- Updates path on route changes

```typescript
// Automatically handled by HubSpotPageViewTracker component
window._hsq.push(['setPath', location.pathname]);
window._hsq.push(['trackPageView']);
```

### Finding HubSpot IDs

1. **Portal ID**: Found in HubSpot account settings
2. **Form GUID**: 
   - Go to Marketing → Lead Capture → Forms
   - Select your form
   - Copy the Form ID (GUID)

## Content Management

Content is managed through TypeScript data files in `src/lib/`. Each content type has its own file.

### Downloads (`src/lib/downloads.ts`)

**Add a new download**:
```typescript
export const downloadAssets: DownloadAsset[] = [
  // ... existing
  {
    id: "new-asset-id",
    title: "New Resource Title",
    description: "Brief description",
    fileUrl: "/downloads/new-resource.pdf",
    fileSize: "2.5 MB",
    fileType: "PDF",
    category: "Whitepapers",
    access: "locked", // or "free"
    languages: ["de", "en"],
    formGuid: "optional-form-guid" // Override default form
  }
];
```

### Success Stories (`src/lib/successStories.ts`)

**Add a new success story**:
```typescript
export const successStories: SuccessStory[] = [
  // ... existing
  {
    id: "new-story-id",
    companyName: "Company Name",
    industry: "Technology",
    challenge: "Client's challenge",
    solution: "How solution addressed challenge",
    results: "Quantifiable results",
    quote: "Testimonial quote",
    author: "John Doe",
    authorRole: "CEO",
    companyLogo: "logo-filename.png", // Matches file in assets/customers/
    metrics: [
      { label: "ROI Increase", value: "150%" }
    ]
  }
];
```

**Note**: The sitemap generator extracts IDs from this file automatically.

### Partners (`src/lib/partners.ts`)

**Add a new partner**:
```typescript
export const partners: Partner[] = [
  // ... existing
  {
    id: "new-partner-id",
    name: "Partner Company",
    description: "Partnership description",
    logoUrl: "logo-filename.png", // Matches file in assets/partners/
    website: "https://partner-website.com",
    category: "Technology"
  }
];
```

### Team Members (`src/lib/team.ts`)

**Add a new team member**:
```typescript
export const teamMembers: TeamMember[] = [
  // ... existing
  {
    id: "new-member-id",
    name: "Jane Doe",
    role: "Senior Developer",
    oneLiner: "Brief expertise description",
    linkedInUrl: "https://linkedin.com/in/jane-doe",
    imageUrl: "jane-doe.jpg" // Matches file in assets/team/
  }
];
```

### Events (`src/lib/events.ts`)

**Add a new event**:
```typescript
export const events: Event[] = [
  // ... existing
  {
    id: "new-event-id",
    title: "Event Title",
    description: "Event description",
    date: "2024-12-01",
    time: "14:00",
    location: "Location or 'Online'",
    type: "online" | "onsite" | "hybrid",
    price: "free" | "paid",
    capacity: 100,
    registrationUrl: "https://..."
  }
];
```

### Use Cases (`src/lib/useCases.ts`)

**Add a new use case**:
```typescript
export const useCases: UseCase[] = [
  // ... existing
  {
    id: "new-use-case-id",
    title: { en: "Use Case Title", de: "Anwendungsfall Titel" },
    description: { en: "...", de: "..." },
    // ... more fields
  }
];
```

**Note**: The sitemap generator extracts IDs from this file automatically.

## Component Structure

### UI Components (`src/components/ui/`)

These are **shadcn-ui** components (Radix UI primitives):
- `button.tsx`, `card.tsx`, `dialog.tsx`, `input.tsx`, etc.
- Pre-styled, accessible, customizable
- Can be modified directly (they're copied into your project)

### Custom Components (`src/components/`)

Reusable components for the site:

- **Layout**: `Header.tsx`, `Footer.tsx`, `Layout.tsx`, `ConditionalLayout.tsx`
- **Forms**: `HubSpotContactForm.tsx`, `DownloadGate.tsx`
- **Content**: `FunctionalitiesTeaser.tsx`, `PartnersTeaser.tsx`, `TeamCard.tsx`
- **Navigation**: `LanguageSwitcher.tsx`, `FunctionalitiesNav.tsx`
- **SEO**: `CanonicalUrl.tsx`, `MetaDescription.tsx`
- **Animations**: `AnimatedGradientBox.tsx`, `AnimatedHeading.tsx`
- **Other**: `YouTubePlaylist.tsx`, `LogoBanner.tsx`, etc.

### Page Components (`src/pages/`)

Each route has a corresponding page component:

- `Index.tsx` - Homepage
- `Functionalities.tsx` - Platform/Functionalities page
- `SuccessStories.tsx` - Success stories listing
- `SuccessStoryDetail.tsx` - Individual success story
- `Pricing.tsx` - Pricing page
- `Partners.tsx` - Partners page
- `Team.tsx` - Team page
- `Downloads.tsx` - Downloads page
- `Events.tsx` - Events page
- `ContactUs.tsx` - Contact page
- `UseCase.tsx` - Use case detail page
- `AIAgents.tsx` - AI Agents page
- Legal: `Imprint.tsx`, `PrivacyPolicy.tsx`, `TermsOfService.tsx`
- `NotFound.tsx` - 404 page
- `Maintenance.tsx` - Maintenance mode

### Layout System

**`ConditionalLayout.tsx`**:
- Wraps all pages except maintenance
- Provides Header and Footer

**`Layout.tsx`**:
- Main layout wrapper
- Includes Header, Footer, and children

## Styling & Theming

### Tailwind CSS

The project uses Tailwind CSS 3 with custom configuration:

- **Config**: `tailwind.config.ts`
- **Content paths**: Scans `src/**/*.{ts,tsx}`
- **Dark mode**: Class-based (`dark:` prefix)

### Design Tokens (`src/styles/tokens.css`)

CSS custom properties for brand colors:

```css
:root {
  --noreja-main: #452BE9;
  --noreja-secondary: #4569E7;
  --noreja-tertiary: #23F3DA;
}
```

### Tailwind Theme Extension

Custom colors and utilities in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      noreja: {
        main: 'var(--noreja-main)',
        secondary: 'var(--noreja-secondary)',
        tertiary: 'var(--noreja-tertiary)'
      }
    }
  }
}
```

**Usage**:
```tsx
<div className="bg-noreja-main text-white">
  Brand colored element
</div>
```

### Global Styles

- **`src/index.css`**: Tailwind directives, base styles
- **`src/App.css`**: App-specific styles
- **`src/styles/tokens.css`**: Design tokens

## Build & Deployment

### Build Process

**Production Build**:
```bash
npm run build
```

This runs:
1. `prebuild` hook:
   - `npm run compress-images` - Processes images
   - `npm run generate-sitemap` - Generates sitemap
2. `vite build` - Creates optimized production bundle in `dist/`

**Development Build**:
```bash
npm run build:dev
```

### Build Output

- **Location**: `dist/`
- **HTML**: `dist/index.html` (SPA entry point)
- **Assets**: `dist/assets/` (hashed filenames for cache busting)
- **Static**: `dist/` (public folder contents)

### Netlify Deployment

**Configuration** (`netlify.toml`):

```toml
[build]
  publish = "dist"
  command = "npm run build"
```

**Features**:
- **Redirects**: Language redirects, old URL redirects, query parameter cleanup
- **Headers**: Cache control for assets, HTML, sitemap
- **SPA Routing**: All routes rewrite to `/index.html`

**Deployment Methods**:

1. **Via Lovable**: 
   - Open [Lovable Project](https://lovable.dev/projects/ba92bb2f-03b7-4dad-95de-18c6fdc2e6b2)
   - Click Share → Publish

2. **Via Git**:
   - Push to main branch
   - Netlify auto-deploys (if connected)

3. **Custom Domain**:
   - Project > Settings > Domains in Lovable
   - Or configure in Netlify dashboard

### Environment Variables

No environment variables are currently required. All configuration is in `src/lib/config.ts`.

## Development Workflow

### Adding a New Page

1. **Create page component** (`src/pages/MyNewPage.tsx`):
```typescript
import { useLanguage } from '@/contexts/LanguageContext';

export default function MyNewPage() {
  const { t } = useLanguage();
  return <div>{t.myNewPage.title}</div>;
}
```

2. **Add route** (see [Routing System](#routing-system))

3. **Add translations** (see [Translation System](#translation-system))

4. **Register in `App.tsx`**:
```typescript
<Route path="/de/my-page" element={<MyNewPage />} />
<Route path="/en/my-page" element={<MyNewPage />} />
```

5. **Add to sitemap** (see [Sitemap Generation](#sitemap-generation))

### Adding New Translations

1. **Update `Translations` interface** in `translations.ts`
2. **Add translations** for both `en` and `de`
3. **Use in components** via `useLanguage()` hook

### Adding New Routes

1. **Add to `routes.ts`** with language variants
2. **Register in `App.tsx`** with `<Route>` components
3. **Update `pathToRouteKey`** mapping if needed for translation

### Testing

Tests are located in `src/test/`:
- `Routes.test.tsx` - Route testing
- `DownloadGate.test.tsx` - Download gate component
- `HubSpotBlogTeaser.test.tsx` - Blog teaser component

**Run tests**:
```bash
npm run test
```

### Code Editing Options

**Use Lovable**: Visit the [Lovable Project](https://lovable.dev/projects/ba92bb2f-03b7-4dad-95de-18c6fdc2e6b2) and start prompting.

**Use your preferred IDE**: Clone this repo and push changes. Pushed changes will be reflected in Lovable.

**Edit directly in GitHub**: Navigate to files and click the "Edit" button.

**Use GitHub Codespaces**: Click "Code" → "Codespaces" → "New codespace" for a cloud development environment.

## Key Files Reference

| File | Purpose |
|------|---------|
| `src/App.tsx` | Root component, routing setup |
| `src/main.tsx` | Application entry point |
| `src/lib/config.ts` | Site configuration (HubSpot, URLs) |
| `src/lib/translations.ts` | All translation strings (EN/DE) |
| `src/lib/routes.ts` | Route definitions and utilities |
| `src/contexts/LanguageContext.tsx` | Language state management |
| `src/components/Layout.tsx` | Main layout wrapper |
| `src/components/Header.tsx` | Site header/navigation |
| `src/components/Footer.tsx` | Site footer |
| `scripts/compress-images.ts` | Image compression script |
| `scripts/generate-sitemap.ts` | Sitemap generation script |
| `netlify.toml` | Netlify deployment configuration |
| `vite.config.ts` | Vite build configuration |
| `tailwind.config.ts` | Tailwind CSS configuration |
| `src/lib/downloads.ts` | Download assets data |
| `src/lib/successStories.ts` | Success stories data |
| `src/lib/partners.ts` | Partners data |
| `src/lib/team.ts` | Team members data |
| `src/lib/events.ts` | Events data |
| `src/lib/useCases.ts` | Use cases data |
| `src/components/HubSpotContactForm.tsx` | HubSpot form component |
| `src/components/DownloadGate.tsx` | Download gating component |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For questions or support, please refer to the [Lovable documentation](https://docs.lovable.dev/) or contact our team.
