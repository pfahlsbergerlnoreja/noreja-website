import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useScrollTracking } from "@/hooks/use-scroll-tracking";
import { ConditionalLayout } from "@/components/ConditionalLayout";
import { CanonicalUrl } from "@/components/CanonicalUrl";
import { MetaDescription } from "@/components/MetaDescription";
import { PageTitle } from "@/components/PageTitle";
import { HreflangTags } from "@/components/HreflangTags";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { NewsletterToast } from "@/components/NewsletterToast";

// Critical routes loaded eagerly
import Index from "./pages/Index";
import Functionalities from "./pages/Functionalities";
import Pricing from "./pages/Pricing";
import SuccessStories from "./pages/SuccessStories";
import ContactUs from "./pages/ContactUs";

// Less critical routes loaded lazily
const SuccessStoryDetail = lazy(() => import("./pages/SuccessStoryDetail"));
const UseCase = lazy(() => import("./pages/UseCase"));
const Team = lazy(() => import("./pages/Team"));
const Partners = lazy(() => import("./pages/Partners"));
const Downloads = lazy(() => import("./pages/Downloads"));
const DownloadThankYou = lazy(() => import("./pages/DownloadThankYou"));
const Events = lazy(() => import("./pages/Events"));
const Careers = lazy(() => import("./pages/Careers"));
const CareerDetail = lazy(() => import("./pages/CareerDetail"));
const Imprint = lazy(() => import("./pages/Imprint"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Maintenance = lazy(() => import("./pages/Maintenance"));
const AIAgents = lazy(() => import("./pages/AIAgents"));

const queryClient = new QueryClient();

// Component to track HubSpot page views on route changes for SPA
function HubSpotPageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    // Wait for HubSpot script to load and track page view for SPA navigation
    if (typeof window !== 'undefined' && window._hsq) {
      // Set the path and track page view
      window._hsq.push(['setPath', location.pathname + location.search]);
      window._hsq.push(['trackPageView']);
    }
  }, [location]);

  return null;
}

// Component to track scroll depth events for GA4
function ScrollDepthTracker() {
  useScrollTracking();
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <HubSpotPageViewTracker />
        <ScrollDepthTracker />
        <CanonicalUrl />
        <LanguageProvider>
          <NewsletterToast />
          <MetaDescription />
          <PageTitle />
          <HreflangTags />
          <ConditionalLayout>
            <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
              {/* Redirect root to German home */}
              <Route path="/" element={<Navigate to="/de" replace />} />
              
              {/* Language-prefixed routes */}
              <Route path="/de" element={<Index />} />
              <Route path="/en" element={<Index />} />
              
              {/* Functionalities */}
              <Route path="/de/plattform" element={<Functionalities />} />
              <Route path="/en/platform" element={<Functionalities />} />
              
              {/* Pricing */}
              <Route path="/de/preise" element={<Pricing />} />
              <Route path="/en/pricing" element={<Pricing />} />
              
              {/* Success Stories */}
              <Route path="/de/success-stories" element={<SuccessStories />} />
              <Route path="/en/success-stories" element={<SuccessStories />} />
              
              {/* Success Story Detail */}
              <Route path="/de/success-story/:companyName" element={<SuccessStoryDetail />} />
              <Route path="/en/success-story/:companyName" element={<SuccessStoryDetail />} />
              
              {/* Partners */}
              <Route path="/de/partner" element={<Partners />} />
              <Route path="/en/partners" element={<Partners />} />
              
              {/* Team */}
              <Route path="/de/team" element={<Team />} />
              <Route path="/en/team" element={<Team />} />
              
              {/* Events */}
              <Route path="/de/veranstaltungen" element={<Events />} />
              <Route path="/en/events" element={<Events />} />
              
              {/* Careers */}
              <Route path="/de/karriere" element={<Careers />} />
              <Route path="/en/careers" element={<Careers />} />
              <Route path="/de/karriere/:jobId" element={<CareerDetail />} />
              <Route path="/en/careers/:jobId" element={<CareerDetail />} />

              {/* Downloads */}
              <Route path="/de/downloads" element={<Downloads />} />
              <Route path="/en/downloads" element={<Downloads />} />
              
              {/* Download Thank You */}
              <Route path="/de/download-vielen-dank" element={<DownloadThankYou />} />
              <Route path="/en/download-thank-you" element={<DownloadThankYou />} />
              
              {/* Use Cases */}
              <Route path="/de/use-cases/:useCaseName" element={<UseCase />} />
              <Route path="/en/use-cases/:useCaseName" element={<UseCase />} />
              
              {/* Contact */}
              <Route path="/de/kontakt" element={<ContactUs />} />
              <Route path="/en/contact" element={<ContactUs />} />
              
              {/* Imprint */}
              <Route path="/de/impressum" element={<Imprint />} />
              <Route path="/en/imprint" element={<Imprint />} />
              
              {/* Privacy */}
              <Route path="/de/datenschutz" element={<PrivacyPolicy />} />
              <Route path="/en/privacy" element={<PrivacyPolicy />} />
              
              {/* Terms */}
              <Route path="/de/nutzungsbedingungen" element={<TermsOfService />} />
              <Route path="/en/terms" element={<TermsOfService />} />
              
              {/* AI Agents */}
              <Route path="/de/frontier-agents" element={<AIAgents />} />
              <Route path="/en/frontier-agents" element={<AIAgents />} />
              
              {/* Maintenance */}
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="/de/wartung" element={<Maintenance />} />
              <Route path="/en/maintenance" element={<Maintenance />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
          </ConditionalLayout>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
