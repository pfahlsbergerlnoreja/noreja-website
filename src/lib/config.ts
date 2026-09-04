// Central configuration for Noreja marketing site

export const SITE_NAME = "Noreja";
export const SITE_URL = "https://noreja.com";
export const HUBSPOT_PORTAL_ID = "144242473";
export const HUBSPOT_FORM_GUID_DEFAULT = "cba179f6-530c-43a4-9d41-4bc0a459953b";
export const BLOG_SUBDOMAIN_URL = "https://blog.noreja.com";

// --- Smart Data Forge lead magnet -----------------------------------------
// The generator itself is one self-contained HTML file, served straight from
// public/tools/. The landing page (src/pages/SmartDataForge.tsx) embeds it in
// an iframe once a visitor has left their email address.
export const SMART_DATA_FORGE_FILE = "/tools/noreja-smart-data-forge.html";
export const SMART_DATA_FORGE_DOWNLOAD_NAME = "Noreja_Smart_Data_Forge.html";
export const SMART_DATA_FORGE_VERSION = "6.58";

// HubSpot form that gates the generator.
//
// TODO: swap in the GUID of the dedicated Smart Data Forge form once it exists
// in HubSpot. That form needs exactly two properties:
//   * one email field, and
//   * post-submit action "display an inline thank-you message" — NOT a
//     redirect. The gate unlocks the generator in place, so the visitor has to
//     stay on the page.
// Until then this falls back to the generic download form, which does redirect
// to the thank-you page. That case still works, just less elegantly: the gate
// persists the unlock in localStorage and leaves a pendingDownload entry, so
// the thank-you page opens the generator in a new tab and the landing page
// shows it unlocked on return.
export const HUBSPOT_FORM_GUID_SMART_DATA_FORGE = HUBSPOT_FORM_GUID_DEFAULT;

export const siteConfig = {
  name: SITE_NAME,
  description: "Revolutionary technology solutions for the future",
  url: SITE_URL,
  links: {
    blog: BLOG_SUBDOMAIN_URL,
    linkedin: "https://linkedin.com/company/noreja",
    twitter: "https://twitter.com/noreja_",
    youtube: "https://www.youtube.com/@noreja_intelligence",
    medium: "https://medium.com/@lukas.pfahlsberger",
    referralProgram: "https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/144242473/Noreja%20Referral%20Program%20DE.pdf"
  },
  hubspot: {
    contactForm: "https://share.hsforms.com/YOUR_CONTACT_FORM_ID",
    appointmentBooking: "https://outlook.office365.com/book/Kennenlernen@noreja.com/?ismsaljsauthenabled=true"
  }
};

export const headerNavigation = [
  { name: "Home", href: "/" },
  { name: "Functionalities", href: "/functionalities" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "Partners", href: "/partners" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" }
];

export const footerNavigation = [
  { name: "Team", href: "/team" },
  { name: "Downloads", href: "/downloads" }
];

export const legalLinks = [
  { name: "Imprint", href: "/imprint" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" }
];

export const hubspotConfig = {
  portalId: HUBSPOT_PORTAL_ID,
  forms: {
    contact: "YOUR_CONTACT_FORM_ID",
    newsletter: "YOUR_NEWSLETTER_FORM_ID",
    newsletterEn: "c56d0262-0916-49c0-b058-cd0d2d4e2539",
    download: HUBSPOT_FORM_GUID_DEFAULT
  }
};

export const config = {
  site: {
    name: SITE_NAME,
    description: "Advanced platform for digital transformation and enterprise solutions",
    url: SITE_URL
  },
  hubspot: {
    portalId: HUBSPOT_PORTAL_ID,
    defaultFormGuid: HUBSPOT_FORM_GUID_DEFAULT,
    forms: {
      download: HUBSPOT_FORM_GUID_DEFAULT,
      smartDataForge: HUBSPOT_FORM_GUID_SMART_DATA_FORGE,
      newsletter: "YOUR_NEWSLETTER_FORM_GUID",
      newsletterEn: "c56d0262-0916-49c0-b058-cd0d2d4e2539",
      contact: "YOUR_CONTACT_FORM_GUID"
    }
  }
};