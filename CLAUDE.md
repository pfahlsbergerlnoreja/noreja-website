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
npm run build        # Production build
npm run lint         # ESLint
npm run test         # Vitest
```

## Deployment

Deployed on Netlify. Config and redirect rules are in `netlify.toml`.

## Notes

- No backend — all data is static or fetched from HubSpot APIs
- Download-gated assets require a HubSpot form submission before access
- Blog content is pulled from HubSpot via `HubSpotBlogTeaser`
- Avoid adding server-side logic; keep everything frontend-only
