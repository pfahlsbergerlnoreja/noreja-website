import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

// NOTE: The GlobalConnectionOverlay + data-global-connections wiring was removed
// here: ProcessGraphSection (the only producer of that data) is not mounted on
// any page, so the overlay never rendered anything — but its body-wide
// MutationObservers still ran on every page and burned main-thread time on each
// DOM/style mutation (Lighthouse "Script Evaluation" / forced reflow). If
// ProcessGraphSection is reintroduced, render <GlobalConnectionOverlay /> on
// that page directly instead of globally.

export function Layout({ children }: LayoutProps) {

  return (
    <div className="min-h-screen flex flex-col relative w-full max-w-full overflow-x-hidden">
      {/* Global grid background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--noreja-main)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--noreja-main)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* TODO: Add HubSpot tracking script */}
      {/* 
      <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/YOUR_PORTAL_ID.js"></script>
      */}
      
      <Header />
      <main className="flex-1 relative z-10 w-full max-w-full overflow-x-hidden" role="main">
        {children}
      </main>
      <Footer />

      {/* TODO: Add HubSpot chat widget */}
      {/* 
      <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/YOUR_PORTAL_ID.js"></script>
      */}
    </div>
  );
}