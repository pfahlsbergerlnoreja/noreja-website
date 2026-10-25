# Noreja Intelligence GmbH - Website

Marketing website for Noreja Intelligence GmbH, explaining the company's process intelligence tool and providing general company information. Frontend-only with HubSpot integrations.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite
- **Routing:** React Router v6 (client-side only)
- **Styling:** Tailwind CSS + shadcn/ui (Radix UI primitives)
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **State:** TanStack React Query

## Project Structure

```
src/
├── pages/        # Route-level components (~20 pages)
├── components/   # Reusable UI components
│   └── ui/       # shadcn/ui (Radix-based) primitives
├── assets/       # Images, icons, logos
├── lib/          # Config, routes, translations, team/partner data
├── hooks/        # Custom hooks (e.g. useHubSpotForm)
├── contexts/     # LanguageContext (multilingual support)
└── styles/       # Global CSS
```

## Key Integrations

### HubSpot
- Portal ID and form GUIDs are in `src/lib/config.ts`
- `useHubSpotForm` hook (`src/hooks/use-hubspot-form.ts`) handles script loading, form rendering, submission detection, and analytics tracking
- `HubSpotContactForm` component wraps the hook with loading/error states
- HubSpot page view tracking runs on every route change via `HubSpotPageViewTracker` in `App.tsx`
- Region: `eu1`

### Analytics
- Google Analytics 4 (GTM) — ID: `G-W8W4S9BL46`
- `dataLayer` pushes on form submissions
- Cookieyes for cookie consent

## Multilingual Support

The site supports German and English with URL-based routing (`/de/...`, `/en/...`). Language context is in `src/contexts/LanguageContext.tsx` and translations are in `src/lib/translations.ts`.

## Common Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build (sitemap → client build → SSR build → prerender → inline CSS)
npm run lint         # ESLint
npm run test         # Vitest
```

## SEO / GEO: build-time prerendering

`npm run build` does more than bundle the app:

1. `prebuild` regenerates `public/sitemap.xml` (`scripts/generate-sitemap.ts`),
   `src/lib/imageSizes.ts` and `src/lib/blogPosts.ts` (latest posts from the
   blog's RSS feeds, `scripts/generate-blog-posts.ts`; on a fetch error the
   committed file is kept), then runs `scripts/sync-llms.ts` (see below).
2. `vite build` produces the client bundle.
3. `build:ssr` bundles `src/entry-server.tsx` (the same `AppRoutes` tree, but in a
   `StaticRouter`) into `dist-ssr/`.
4. `scripts/prerender.ts` renders every sitemap URL plus a few unlisted routes and
   writes `dist/<route>/index.html`: per-route title, description, canonical,
   hreflang, Open Graph, robots and JSON-LD, plus the page's own markup as a
   no-JavaScript fallback inside `<div id="root">`. It also writes `dist/404.html`.
5. `scripts/inline-css.ts` inlines the CSS into the root `dist/index.html` only;
   the prerendered route files keep the cacheable `<link rel="stylesheet">`.

Consequences to keep in mind:

- **New routes must be added to `scripts/generate-sitemap.ts`** (or to
  `EXTRA_ROUTES` in `scripts/prerender.ts` for pages that should not be indexed).
  Unknown URLs are served as `/404.html` with a 404 status, so a route without a
  prerendered file is a dead page. The prerender step fails the build if a static
  route in `App.tsx` has no file.
- **Components must render without `window`/`document`.** Guard browser-only
  access (`typeof window === 'undefined'`) or move it into an effect; a component
  that throws during the server render costs that route its content.
- **Content that only appears after an effect is invisible to crawlers.** Data that
  can be resolved synchronously (e.g. `import.meta.glob` with `eager: true`)
  should be, so the first render already has it — see `src/lib/team.ts` and
  `src/lib/partners.ts`.
- Titles and descriptions come from `src/lib/pageMeta.ts` (`getPageMeta`), which is
  shared by the prerenderer and the runtime `PageTitle` / `MetaDescription` /
  `CanonicalUrl` / `HreflangTags` components. Change copy there, not in the
  components. The runtime components load it lazily (`src/lib/pageMetaLoader.ts`)
  and skip it on the route the document was prerendered for: `pageMeta.ts` pulls
  in the data of every detail page, so **never import it statically from code
  in the main bundle**.
- Raster images are never inlined as base64 (`assetsInlineLimit` in
  `vite.config.ts`), so small logos stay out of the main bundle.
- `StructuredData` renders its JSON-LD inline in the React tree (not via an
  effect), so schema ends up in the static HTML.
- The LLM discovery files in `public/` are maintained by hand: `llms.txt` (index
  of every page), `llms-full.txt` (curated knowledge base) and
  `llms-ctx-full.txt` (the knowledge base plus a summary per page). When a page,
  definition or agent is added or renamed, update `llms.txt` and the summaries in
  `llms-ctx-full.txt`. Do not edit the copy of `llms-full.txt` embedded in
  `llms-ctx-full.txt`: `scripts/sync-llms.ts` refreshes it on every build and
  warns about sitemap pages missing from the files and links to pages that do
  not exist.
- Icons and the web manifest (`public/favicon.svg`, `apple-touch-icon.png`,
  `icon-192/512.png`) are generated by `node scripts/generate-icons.mjs` and
  committed; rerun it only if the artwork changes.

## Deployment

Deployed on Netlify. Config and redirect rules are in `netlify.toml`, including the
baseline security headers and the 404 catch-all.

## Notes

- No backend — all data is static or fetched from HubSpot APIs
- Download-gated assets require a HubSpot form submission before access
- Blog teaser posts (`HubSpotBlogTeaser`) are resolved at build time from the
  HubSpot RSS feeds into `src/lib/blogPosts.ts`; new posts appear with the next deploy
- Avoid adding server-side logic; keep everything frontend-only
