import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const PORTAL_ID = "144242473";
const FORM_ID_EN = "c56d0262-0916-49c0-b058-cd0d2d4e2539";
const FORM_ID_DE = "4c2d159d-aefd-491d-b7bb-0d64474ae2a3";
const HS_SCRIPT_URL = `https://js-eu1.hsforms.net/forms/embed/${PORTAL_ID}.js`;

const COPY = {
  en: {
    eyebrow: "Product Newsletter",
    title: "New in Noreja, straight to your inbox",
    note: "Once a month. Features, releases, no spam.",
    open: "Click to open",
    collapse: "Collapse",
    close: "Close",
  },
  de: {
    eyebrow: "Product Newsletter",
    title: "Neues von Noreja, direkt ins Postfach",
    note: "Einmal im Monat. Features, Releases, kein Spam.",
    open: "Hier öffnen",
    collapse: "Einklappen",
    close: "Schließen",
  },
} as const;

function hasMarketingConsent(): boolean {
  const match = document.cookie.match(/(?:^|;\s*)cookieyes-consent=([^;]*)/);
  if (!match) return false;
  const value = decodeURIComponent(match[1]);
  return value.includes("advertisement:yes");
}

export function NewsletterToast() {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  // Latches on first expand: the form stays mounted afterwards, because the
  // HubSpot script renders into the frame div once and would not do it again.
  const [formMounted, setFormMounted] = useState(false);
  const scriptLoaded = useRef(false);

  const formId = language === "en" ? FORM_ID_EN : FORM_ID_DE;
  const copy = COPY[language === "en" ? "en" : "de"];

  // Show the collapsed teaser after a delay, only if marketing cookies are accepted
  useEffect(() => {
    if (!formId) return;

    // Dev-only preview: CookieYes is not registered for localhost, so the
    // consent gate never opens there and the popup can never be seen while
    // developing. `?newsletter=1` skips the consent gate and the "already seen"
    // flags. Compiled out of production builds via import.meta.env.DEV.
    const preview =
      import.meta.env.DEV &&
      new URLSearchParams(window.location.search).get('newsletter') === '1';

    const dismissed = sessionStorage.getItem('noreja_newsletter_dismissed') === 'true';
    const submitted  = localStorage.getItem('noreja_newsletter_submitted')  === 'true';
    if (!preview && (dismissed || submitted)) return;

    const timer = setTimeout(() => {
      if (!preview && !hasMarketingConsent()) return;
      setVisible(true);
    }, preview ? 500 : 5000);
    return () => clearTimeout(timer);
  }, [formId]);

  // Load the HubSpot embed script only once the user opens the form. The frame
  // div is rendered first (formMounted), so the script finds it on load.
  useEffect(() => {
    if (!formMounted || scriptLoaded.current) return;

    const script = document.createElement("script");
    script.src = HS_SCRIPT_URL;
    script.async = true;
    script.onerror = () => {
      scriptLoaded.current = false;
    };
    document.head.appendChild(script);
    scriptLoaded.current = true;
  }, [formMounted]);

  // Hide popup if user revokes consent after it was shown
  useEffect(() => {
    const handleConsentUpdate = () => {
      if (!hasMarketingConsent()) {
        setVisible(false);
      }
    };
    document.addEventListener("cookieyes_consent_update", handleConsentUpdate);
    return () => document.removeEventListener("cookieyes_consent_update", handleConsentUpdate);
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('noreja_newsletter_dismissed', 'true');
    setVisible(false);
  };

  const handleToggle = () => {
    setExpanded((open) => {
      if (!open) setFormMounted(true);
      return !open;
    });
  };

  return (
    <AnimatePresence>
      {visible && formId && (
        <>
          {/* Invisible backdrop — click/tap outside to dismiss */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            onClick={handleDismiss}
          />
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="newsletter-toast fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] max-w-[360px]"
            role="dialog"
            aria-label={copy.eyebrow}
          >
            <button
              onClick={handleDismiss}
              aria-label={copy.close}
              className="absolute right-2.5 top-2.5 z-10 grid h-7 w-7 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
            >
              <X size={14} />
            </button>

            <button
              type="button"
              onClick={handleToggle}
              aria-expanded={expanded}
              aria-controls="newsletter-toast-form"
              className="w-full rounded-2xl px-4 pb-3 pr-11 pt-4 text-left"
            >
              <span className="flex items-start gap-2.5">
                <span className="newsletter-toast__badge">
                  <Sparkles size={14} strokeWidth={2.2} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--noreja-tertiary))]">
                    {copy.eyebrow}
                  </span>
                  <span className="mt-0.5 block text-[13px] font-semibold leading-snug text-foreground">
                    {copy.title}
                  </span>
                  <span className="mt-1 block text-[11px] leading-snug text-muted-foreground">
                    {copy.note}
                  </span>
                </span>
              </span>

              <span
                className={cn(
                  "mt-2.5 flex items-center gap-1 text-[11px] font-semibold text-[hsl(var(--noreja-tertiary))]",
                  !expanded && "newsletter-toast__hint"
                )}
              >
                {expanded ? copy.collapse : copy.open}
                <ChevronDown
                  size={13}
                  strokeWidth={2.4}
                  className={cn("transition-transform duration-300", expanded && "rotate-180")}
                />
              </span>
            </button>

            {/* Reveal is pure CSS (grid-template-rows 0fr/1fr) rather than an
                animated inline height: the open state must render at full
                height even if the transition never runs, and it has to keep
                tracking the HubSpot iframe as that resizes itself. */}
            <div
              id="newsletter-toast-form"
              className="newsletter-toast__reveal"
              data-open={expanded ? "true" : "false"}
            >
              <div>
                <div className="newsletter-toast__form max-h-[58vh] overflow-y-auto border-t border-white/[0.07] px-4 pb-3 pt-2">
                  {formMounted && (
                    <div
                      className="hs-form-frame"
                      data-region="eu1"
                      data-form-id={formId}
                      data-portal-id={PORTAL_ID}
                    />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
