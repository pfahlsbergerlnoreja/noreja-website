import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { getLanguageFromPath } from './lib/routes'
import { loadTranslations } from './lib/translationsLoader'
import './index.css'

// Only the URL's language is downloaded (see translationsLoader). The prerendered
// HTML modulepreloads its chunk, so this usually resolves without a round trip.
await loadTranslations(getLanguageFromPath(window.location.pathname));

createRoot(document.getElementById("root")!).render(<App />);
