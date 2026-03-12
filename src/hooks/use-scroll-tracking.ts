import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const THRESHOLDS = [25, 50, 75, 100] as const;

export function useScrollTracking() {
  const location = useLocation();
  const firedRef = useRef<Set<number>>(new Set());
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (location.pathname === "/") return;
    firedRef.current = new Set();
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/") return;

    const handleScroll = () => {
      if (rafRef.current !== null) return;

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;

        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        const percent = (scrollTop + windowHeight) / documentHeight * 100;

        for (const threshold of THRESHOLDS) {
          if (percent >= threshold && !firedRef.current.has(threshold)) {
            firedRef.current.add(threshold);

            const eventData = {
              percent_scrolled: threshold,
              page_path: location.pathname,
            };

            if (typeof window.gtag === "function") {
              window.gtag("event", "scroll_depth", eventData);
            }

            console.log("[GA4 Scroll]", eventData);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Fire immediately for short pages that are already at 100%
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [location.pathname]);
}
