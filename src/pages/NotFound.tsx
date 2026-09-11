import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { getRoutePath } from "@/lib/routes";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const gradientStyle = {
    background: `
      linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 40%, hsl(var(--noreja-secondary) / 0.15) 80%, hsl(var(--background)) 100%),
      radial-gradient(ellipse 1000px 700px at 70% 20%, hsl(var(--noreja-secondary) / 0.14) 0%, transparent 60%)
    `
  } as const;

  const t =
    language === 'de'
      ? {
          headline: 'Seite nicht gefunden',
          text: 'Diese Seite existiert nicht (mehr). Vielleicht hilft einer dieser Wege weiter:',
          home: 'Zur Startseite',
          suggestions: 'Häufig gesucht',
        }
      : {
          headline: 'Page not found',
          text: 'This page does not exist (any more). One of these might help:',
          home: 'Go to homepage',
          suggestions: 'Frequently visited',
        };

  // The homepage link is rendered twice on purpose: the primary button points
  // at the language-specific home (/de, /en), while the site root "/" is the
  // link a visitor — or a link checker — looks for on an error page.
  const suggestions = [
    { routeKey: 'functionalities' as const, label: language === 'de' ? 'Plattform' : 'Platform' },
    { routeKey: 'pricing' as const, label: language === 'de' ? 'Preise' : 'Pricing' },
    { routeKey: 'faq' as const, label: 'FAQ' },
    { routeKey: 'successStories' as const, label: 'Success Stories' },
    { routeKey: 'contact' as const, label: language === 'de' ? 'Kontakt' : 'Contact' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4" style={gradientStyle}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-noreja-main/5 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-noreja-main">404</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">{t.headline}</h1>
        <p className="mt-4 text-muted-foreground">{t.text}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link to={getRoutePath('home', language)}>
              <Home className="mr-2 h-4 w-4" />
              {t.home}
            </Link>
          </Button>
          <a href="/" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-primary">
            noreja.com
          </a>
        </div>

        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t.suggestions}</p>
          <nav className="mt-3 flex flex-wrap justify-center gap-2">
            {suggestions.map((entry) => (
              <Link
                key={entry.routeKey}
                to={getRoutePath(entry.routeKey, language)}
                className="rounded-full border border-border/60 bg-background/70 px-4 py-1.5 text-sm text-foreground/80 transition-colors hover:border-noreja-main/50 hover:text-noreja-main"
              >
                {entry.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
