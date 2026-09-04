import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Download,
  ExternalLink,
  Lock,
  Maximize2,
  Minimize2,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  HUBSPOT_FORM_GUID_SMART_DATA_FORGE,
  HUBSPOT_PORTAL_ID,
  SMART_DATA_FORGE_DOWNLOAD_NAME,
  SMART_DATA_FORGE_FILE,
} from "@/lib/config";

/**
 * Email gate in front of the Smart Data Forge generator.
 *
 * Locked state: a HubSpot form (the `hs-form-frame` embed the downloads and
 * the newsletter toast already use). HubSpot posts a `hsFormCallback` message
 * to the parent window on submit — that message is what unlocks the page, so
 * the visitor never has to leave it.
 *
 * Unlocked state: the generator itself, embedded byte-for-byte from
 * public/tools/ in a same-origin iframe. It is a self-contained HTML file with
 * no network calls and no storage, so whatever a visitor configures in it
 * stays in their browser.
 *
 * The unlock is remembered in localStorage. That also covers the case of a
 * HubSpot form configured with a redirect: the callback still fires before the
 * redirect, so the generator is open when the visitor comes back.
 */

const UNLOCK_KEY = "noreja_smart_data_forge_unlocked";
/** Read by DownloadThankYou.tsx — the fallback if the form does redirect. */
const PENDING_DOWNLOAD_KEY = "pendingDownload";

const HS_REGION = "eu1";
const HS_SCRIPT_URL = `https://js-eu1.hsforms.net/forms/embed/${HUBSPOT_PORTAL_ID}.js`;

const COPY = {
  de: {
    lockedBadge: "Kostenloser Zugang",
    lockedTitle: "Smart Data Forge freischalten",
    lockedLead:
      "Trag deine E-Mail-Adresse ein und der Generator öffnet sich direkt hier auf der Seite — ohne Installation, ohne Account.",
    privacy:
      "Wir nutzen deine Adresse, um dir den Zugang und gelegentlich Produktneuigkeiten zu schicken. Abmeldung jederzeit möglich.",
    unlockedBadge: "Zugang freigeschaltet",
    unlockedTitle: "Noreja Smart Data Forge",
    unlockedLead:
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
      "Leave your email address and the generator opens right here on the page — no install, no account.",
    privacy:
      "We use your address to send you the access link and the occasional product update. Unsubscribe at any time.",
    unlockedBadge: "Access unlocked",
    unlockedTitle: "Noreja Smart Data Forge",
    unlockedLead:
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

/**
 * Fallback for a HubSpot form that carries a redirect: the thank-you page
 * reads this entry and opens the generator in a new tab.
 */
function savePendingDownload(title: string) {
  try {
    localStorage.setItem(
      PENDING_DOWNLOAD_KEY,
      JSON.stringify({
        fileUrl: SMART_DATA_FORGE_FILE,
        title,
        id: "smart-data-forge",
        timestamp: Date.now(),
      })
    );
  } catch {
    /* ignore */
  }
}

/**
 * HubSpot embeds post `{ type: 'hsFormCallback', eventName, id, data }` to the
 * parent window; some versions post that payload as a JSON string, so both
 * shapes are accepted here.
 */
function isFormSubmitMessage(raw: unknown): boolean {
  let payload: unknown = raw;

  if (typeof payload === "string") {
    if (!payload.includes("hsFormCallback")) return false;
    try {
      payload = JSON.parse(payload);
    } catch {
      return false;
    }
  }

  if (!payload || typeof payload !== "object") return false;
  const message = payload as { type?: unknown; eventName?: unknown };
  if (message.type !== "hsFormCallback") return false;
  return message.eventName === "onFormSubmitted" || message.eventName === "onFormSubmit";
}

export function SmartDataForgeGate({ className = "" }: { className?: string }) {
  const { language } = useLanguage();
  const copy = COPY[language];

  const [unlocked, setUnlocked] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const frameWrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  /** Only a fresh submit scrolls the generator into view, not a stored unlock. */
  const scrollOnUnlock = useRef(false);
  const scriptRequested = useRef(false);

  // Restore an earlier unlock (this is also what saves a redirected visitor).
  useEffect(() => {
    if (readUnlocked()) setUnlocked(true);
  }, []);

  // Load the HubSpot embed script once, and only while the gate is closed.
  useEffect(() => {
    if (unlocked || scriptRequested.current) return;
    scriptRequested.current = true;

    savePendingDownload(copy.unlockedTitle);

    if (document.querySelector<HTMLScriptElement>(`script[src="${HS_SCRIPT_URL}"]`)) return;

    const script = document.createElement("script");
    script.src = HS_SCRIPT_URL;
    script.defer = true;
    document.head.appendChild(script);
  }, [unlocked, copy.unlockedTitle]);

  const unlock = useCallback(() => {
    persistUnlock();
    scrollOnUnlock.current = true;
    setUnlocked(true);

    window.dataLayer?.push({
      event: "lead_magnet_unlocked",
      lead_magnet: "smart-data-forge",
      form_id: HUBSPOT_FORM_GUID_SMART_DATA_FORGE,
    });
  }, []);

  // The unlock trigger: HubSpot's cross-frame submit callback.
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (isFormSubmitMessage(event.data)) unlock();
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [unlock]);

  // Keep the generator in view when it replaces the form.
  useEffect(() => {
    if (!unlocked || !scrollOnUnlock.current) return;
    scrollOnUnlock.current = false;
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [unlocked]);

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

  return (
    <div ref={sectionRef} className={`scroll-mt-24 ${className}`}>
      {!unlocked ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-xl rounded-3xl border border-noreja-main/30 bg-card/80 p-6 shadow-lg backdrop-blur-sm md:p-8"
        >
          <div className="mb-5 text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <Lock className="mr-2 h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-medium">{copy.lockedBadge}</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold md:text-3xl">{copy.lockedTitle}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {copy.lockedLead}
            </p>
          </div>

          {/* HubSpot renders into this div once its embed script has loaded. */}
          <div
            className="hs-form-frame"
            data-region={HS_REGION}
            data-form-id={HUBSPOT_FORM_GUID_SMART_DATA_FORGE}
            data-portal-id={HUBSPOT_PORTAL_ID}
          />

          <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground/80">
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent" />
            {copy.privacy}
          </p>
        </motion.div>
      ) : (
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
                <span className="text-xs font-medium">{copy.unlockedBadge}</span>
              </div>
              <h2 className="text-2xl font-bold md:text-3xl">{copy.unlockedTitle}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {copy.unlockedLead}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                asChild
                size="sm"
                className="bg-noreja-main text-white hover:bg-noreja-main/90"
              >
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
