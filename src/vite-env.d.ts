/// <reference types="vite/client" />

// HubSpot tracking code global interface
interface Window {
  _hsq?: Array<[string, ...unknown[]]>;

  // GA4 / Google Tag Manager
  dataLayer?: Array<Record<string, unknown>>;
}
