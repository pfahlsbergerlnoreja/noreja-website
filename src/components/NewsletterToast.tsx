import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PORTAL_ID = "144242473";
const FORM_ID_EN = "c56d0262-0916-49c0-b058-cd0d2d4e2539";
const FORM_ID_DE = "4c2d159d-aefd-491d-b7bb-0d64474ae2a3";
const HS_SCRIPT_URL = `https://js-eu1.hsforms.net/forms/embed/${PORTAL_ID}.js`;

function hasMarketingConsent(): boolean {
  const match = document.cookie.match(/(?:^|;\s*)cookieyes-consent=([^;]*)/);
  if (!match) return false;
  const value = decodeURIComponent(match[1]);
  return value.includes("advertisement:yes");
}

export function NewsletterToast() {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const scriptLoaded = useRef(false);

  const formId = language === "en" ? FORM_ID_EN : FORM_ID_DE;

  // Preload HubSpot embed script after delay, only show popup if marketing cookies are accepted
  useEffect(() => {
    if (!formId) return;

    const dismissed = sessionStorage.getItem('noreja_newsletter_dismissed') === 'true';
    const submitted  = localStorage.getItem('noreja_newsletter_submitted')  === 'true';
    if (dismissed || submitted) return;

    const timer = setTimeout(() => {
      if (scriptLoaded.current) return;
      if (!hasMarketingConsent()) return;

      const script = document.createElement("script");
      script.src = HS_SCRIPT_URL;
      script.async = true;
      script.onload = () => {
        setScriptReady(true);
        setVisible(true);
      };
      script.onerror = () => {
        scriptLoaded.current = false;
      };
      document.head.appendChild(script);
      scriptLoaded.current = true;
    }, 5000);
    return () => clearTimeout(timer);
  }, [formId]);

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

  return (
    <AnimatePresence>
      {visible && scriptReady && formId && (
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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 w-[560px] rounded-xl bg-card/80 backdrop-blur-xl border border-border/40 shadow-2xl px-6 py-3"
          >
            <button
              onClick={handleDismiss}
              aria-label="Close"
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={18} />
            </button>
            <div
              className="hs-form-frame"
              data-region="eu1"
              data-form-id={formId}
              data-portal-id={PORTAL_ID}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
