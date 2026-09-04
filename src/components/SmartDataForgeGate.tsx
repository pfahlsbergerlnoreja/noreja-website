import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Download,
  ExternalLink,
  Loader2,
  Lock,
  Maximize2,
  Minimize2,
  PlayCircle,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { getRoutePath } from "@/lib/routes";
import {
  HUBSPOT_FORM_GUID_SMART_DATA_FORGE,
  HUBSPOT_PORTAL_ID,
  SMART_DATA_FORGE_DOWNLOAD_NAME,
  SMART_DATA_FORGE_FILE,
} from "@/lib/config";

/**
 * Email gate in front of the Smart Data Forge generator.
 *
 * This deliberately does NOT use a HubSpot form embed. The embed obeys the
 * form's post-submit setting, and a form configured with a redirect navigates
 * the visitor off this page — which defeats the point of a generator that is
 * supposed to open in place. Instead the address goes straight to HubSpot's
 * Forms Submission API, so the lead still lands in the same form (including
 * whatever automation hangs off it) while the page stays where it is.
 *
 * Three states:
 *   1. locked   — the email field
 *   2. unlocked — an "open the tool" button; also where a returning visitor
 *                 starts, via localStorage
 *   3. open     — the generator itself, embedded byte-for-byte from
 *                 public/tools/ in a same-origin iframe. It is self-contained
 *                 (no network calls, no storage), so everything a visitor
 *                 configures in it stays in their browser.
 */

const UNLOCK_KEY = "noreja_smart_data_forge_unlocked";

/**
 * EU data-residency host first (this portal is eu1); the global host is the
 * fallback in case the portal is answered from the US region.
 */
const HUBSPOT_SUBMIT_HOSTS = ["https://api-eu1.hsforms.com", "https://api.hsforms.com"];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const COPY = {
  de: {
    lockedBadge: "Kostenloser Zugang",
    lockedTitle: "Smart Data Forge freischalten",
    lockedLead:
      "Trag deine E-Mail-Adresse ein — danach öffnest du das Tool mit einem Klick direkt hier auf der Seite.",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "name@unternehmen.de",
    submit: "Zugang freischalten",
    submitting: "Wird gesendet …",
    errorInvalid: "Bitte gib eine gültige E-Mail-Adresse ein.",
    errorGeneric:
      "Das hat gerade nicht geklappt. Bitte versuch es noch einmal oder schreib uns kurz.",
    privacyBefore:
      "Wir nutzen deine Adresse für den Zugang und gelegentliche Produktneuigkeiten. Abmeldung jederzeit möglich. Mehr dazu in der ",
    privacyLink: "Datenschutzerklärung",
    privacyAfter: ".",

    unlockedBadge: "Zugang freigeschaltet",
    unlockedTitle: "Smart Data Forge ist freigeschaltet",
    unlockedLead:
      "Öffne das Tool direkt hier auf der Seite. Für die Arbeit mit dem AI Coach lädst du es zusätzlich herunter und gibst es deiner KI.",
    openTool: "Tool öffnen",

    openBadge: "Tool geöffnet",
    openTitle: "Noreja Smart Data Forge",
    openLead:
      "Der Generator läuft vollständig in deinem Browser. Für die Arbeit mit dem AI Coach lädst du das Tool zusätzlich herunter und gibst es deiner KI.",
    fullscreen: "Vollbild",
    exitFullscreen: "Vollbild verlassen",
    newTab: "In neuem Tab öffnen",
    download: "Tool herunterladen",
    frameTitle: "Noreja Smart Data Forge – Generator",
    mobileHint:
      "Auf dem Smartphone wird es eng: Öffne die Seite am Desktop oder nutze den neuen Tab.",
  },
  en: {
    lockedBadge: "Free access",
    lockedTitle: "Unlock Smart Data Forge",
    lockedLead:
      "Leave your email address — you then open the tool with one click, right here on the page.",
    emailLabel: "Email address",
    emailPlaceholder: "name@company.com",
    submit: "Unlock access",
    submitting: "Sending …",
    errorInvalid: "Please enter a valid email address.",
    errorGeneric: "That did not work just now. Please try again or get in touch.",
    privacyBefore:
      "We use your address for access and the occasional product update. Unsubscribe at any time. More in our ",
    privacyLink: "privacy policy",
    privacyAfter: ".",

    unlockedBadge: "Access unlocked",
    unlockedTitle: "Smart Data Forge is unlocked",
    unlockedLead:
      "Open the tool right here on the page. To work with the AI coach, download it as well and hand it to your AI.",
    openTool: "Open the tool",

    openBadge: "Tool open",
    openTitle: "Noreja Smart Data Forge",
    openLead:
      "The generator runs entirely in your browser. To work with the AI coach, download the tool as well and hand it to your AI.",
    fullscreen: "Fullscreen",
    exitFullscreen: "Exit fullscreen",
    newTab: "Open in a new tab",
    download: "Download the tool",
    frameTitle: "Noreja Smart Data Forge – generator",
    mobileHint:
      "It gets cramped on a phone: open this page on a desktop or use the new tab.",
  },
} as const;

/** Storage throws in private mode and in some embedded views. */
function readUnlocked(): boolean {
  try {
    return localStorage.getItem(UNLOCK_KEY) === "true";
  } catch {
    return false;
  }
}

function persistUnlock() {
  try {
    localStorage.setItem(UNLOCK_KEY, "true");
  } catch {
    /* ignore */
  }
}

/** HubSpot's tracking cookie, so the submission is tied to the known visitor. */
function readTrackingCookie(): string | undefined {
  const match = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : undefined;
}

/**
 * Creates the lead in HubSpot. Resolves on success, rejects with HubSpot's own
 * message otherwise — which is what a missing required field looks like.
 */
async function submitToHubSpot(email: string): Promise<void> {
  const body = JSON.stringify({
    fields: [{ objectTypeId: "0-1", name: "email", value: email }],
    context: {
      hutk: readTrackingCookie(),
      pageUri: window.location.href,
      pageName: document.title,
    },
  });

  let lastError: Error | null = null;

  for (const host of HUBSPOT_SUBMIT_HOSTS) {
    const url = `${host}/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID_SMART_DATA_FORGE}`;
    let response: Response;

    try {
      response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
    } catch (networkError) {
      // Offline, or blocked by a tracker blocker: the other host is worth a try.
      lastError = networkError instanceof Error ? networkError : new Error("network error");
      continue;
    }

    if (response.ok) return;

    const payload = (await response.json().catch(() => null)) as
      | { message?: string; errors?: Array<{ message?: string }> }
      | null;
    lastError = new Error(
      payload?.errors?.[0]?.message || payload?.message || `HTTP ${response.status}`
    );

    // The request reached HubSpot and was rejected on its merits — asking the
    // other region would only repeat the same rejection.
    if (response.status !== 404) break;
  }

  throw lastError ?? new Error("submission failed");
}

export function SmartDataForgeGate({ className = "" }: { className?: string }) {
  const { language } = useLanguage();
  const copy = COPY[language];

  const [unlocked, setUnlocked] = useState(false);
  const [frameOpen, setFrameOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const frameWrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Restore an earlier unlock: a returning visitor goes straight to the button.
  useEffect(() => {
    if (readUnlocked()) setUnlocked(true);
  }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (submitting) return;

      const value = email.trim();
      if (!EMAIL_PATTERN.test(value)) {
        setError(copy.errorInvalid);
        return;
      }

      setSubmitting(true);
      setError(null);

      try {
        await submitToHubSpot(value);
        persistUnlock();
        setUnlocked(true);

        window.dataLayer?.push({
          event: "lead_magnet_unlocked",
          lead_magnet: "smart-data-forge",
          form_id: HUBSPOT_FORM_GUID_SMART_DATA_FORGE,
        });
        // Tie the tracking cookie to the contact that was just created.
        window._hsq?.push(["identify", { email: value }]);
      } catch (submitError) {
        console.error("Smart Data Forge gate: HubSpot submission failed", submitError);
        setError(copy.errorGeneric);
      } finally {
        setSubmitting(false);
      }
    },
    [copy.errorGeneric, copy.errorInvalid, email, submitting]
  );

  const openTool = useCallback(() => {
    setFrameOpen(true);
    // Let the frame mount before scrolling it into view.
    window.requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  useEffect(() => {
    const handleChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      void document.exitFullscreen?.();
      return;
    }
    void frameWrapperRef.current?.requestFullscreen?.();
  }, []);

  const secondaryActions = (
    <>
      <Button asChild size="sm" variant="outline" className="bg-background/60">
        <a href={SMART_DATA_FORGE_FILE} download={SMART_DATA_FORGE_DOWNLOAD_NAME}>
          <Download className="mr-2 h-4 w-4" />
          {copy.download}
        </a>
      </Button>
      <Button asChild size="sm" variant="outline" className="bg-background/60">
        <a href={SMART_DATA_FORGE_FILE} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="mr-2 h-4 w-4" />
          {copy.newTab}
        </a>
      </Button>
    </>
  );

  return (
    <div ref={sectionRef} className={`scroll-mt-24 ${className}`}>
      {/* ------------------------------------------------------- 1. locked */}
      {!unlocked && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-xl rounded-3xl border border-noreja-main/30 bg-card/80 p-6 shadow-lg backdrop-blur-sm md:p-8"
        >
          <div className="mb-6 text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <Lock className="mr-2 h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-medium">{copy.lockedBadge}</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold md:text-3xl">{copy.lockedTitle}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {copy.lockedLead}
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-3">
            <label htmlFor="smart-data-forge-email" className="sr-only">
              {copy.emailLabel}
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                id="smart-data-forge-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                placeholder={copy.emailPlaceholder}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? "smart-data-forge-email-error" : undefined}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (error) setError(null);
                }}
                className="h-11 flex-1 bg-background/80"
              />
              <Button
                type="submit"
                disabled={submitting}
                className="h-11 bg-noreja-main text-white hover:bg-noreja-main/90"
              >
                {submitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <ArrowRight className="mr-2 h-4 w-4" />
                )}
                {submitting ? copy.submitting : copy.submit}
              </Button>
            </div>

            {error && (
              <p
                id="smart-data-forge-email-error"
                role="alert"
                className="text-sm text-destructive"
              >
                {error}
              </p>
            )}
          </form>

          <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground/80">
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent" />
            <span>
              {copy.privacyBefore}
              <Link
                to={getRoutePath("privacy", language)}
                className="underline underline-offset-2 hover:text-foreground"
              >
                {copy.privacyLink}
              </Link>
              {copy.privacyAfter}
            </span>
          </p>
        </motion.div>
      )}

      {/* --------------------------------------- 2. unlocked, not yet open */}
      {unlocked && !frameOpen && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-xl rounded-3xl border border-noreja-main/30 bg-card/80 p-6 text-center shadow-lg backdrop-blur-sm md:p-8"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1">
            <Check className="mr-1.5 h-3.5 w-3.5 text-green-600 dark:text-green-400" />
            <span className="text-xs font-medium">{copy.unlockedBadge}</span>
          </div>
          <h2 className="mb-2 text-2xl font-bold md:text-3xl">{copy.unlockedTitle}</h2>
          <p className="mx-auto mb-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            {copy.unlockedLead}
          </p>

          <Button
            size="lg"
            onClick={openTool}
            className="bg-noreja-main text-white hover:bg-noreja-main/90"
          >
            <PlayCircle className="mr-2 h-5 w-5" />
            {copy.openTool}
          </Button>

          <div className="mt-5 flex flex-wrap justify-center gap-2">{secondaryActions}</div>
        </motion.div>
      )}

      {/* --------------------------------------------------- 3. tool open */}
      {unlocked && frameOpen && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1">
                <Check className="mr-1.5 h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                <span className="text-xs font-medium">{copy.openBadge}</span>
              </div>
              <h2 className="text-2xl font-bold md:text-3xl">{copy.openTitle}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {copy.openLead}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {secondaryActions}
              <Button
                size="sm"
                variant="outline"
                className="bg-background/60"
                onClick={toggleFullscreen}
              >
                {isFullscreen ? (
                  <Minimize2 className="mr-2 h-4 w-4" />
                ) : (
                  <Maximize2 className="mr-2 h-4 w-4" />
                )}
                {isFullscreen ? copy.exitFullscreen : copy.fullscreen}
              </Button>
            </div>
          </div>

          <p className="mb-3 text-xs text-muted-foreground/80 md:hidden">{copy.mobileHint}</p>

          {/* The generator, embedded unchanged and same-origin. */}
          <div
            ref={frameWrapperRef}
            className="overflow-hidden rounded-2xl border border-border/60 bg-[#14121e] shadow-xl"
          >
            <iframe
              src={SMART_DATA_FORGE_FILE}
              title={copy.frameTitle}
              className="h-[78vh] min-h-[560px] w-full border-0 bg-[#14121e]"
              allow="clipboard-write; fullscreen"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default SmartDataForgeGate;
