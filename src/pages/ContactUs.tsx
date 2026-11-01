import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import { HubSpotContactForm } from "@/components/HubSpotContactForm";
import { ContactHero } from "@/components/ContactHero";

const ContactUs = () => {
  const { t } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gradientStyle = {
    background: `
      linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 40%, hsl(var(--noreja-secondary) / 0.15) 80%, hsl(var(--background)) 100%),
      radial-gradient(ellipse 1000px 700px at 70% 20%, hsl(var(--noreja-secondary) / 0.14) 0%, transparent 60%)
    `
  } as const;

  return (
    <div className="min-h-screen relative overflow-hidden" style={gradientStyle}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-noreja-main/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
      <ContactHero />

      {/* The page used to be 94 words: an H1, a one-line subtitle and a HubSpot
          form in an iframe, whose content is not part of this document at all.
          These four cases give it something to actually say. */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
            {t.pages.contact.reasonsTitle}
          </h2>
          <dl className="grid gap-5 md:grid-cols-2">
            {t.pages.contact.reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm"
              >
                <dt className="mb-2 text-base font-semibold text-foreground">{reason.title}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">{reason.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-3 text-center text-2xl font-bold text-foreground md:text-3xl">
            {t.pages.contact.formTitle}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">
            {t.pages.contact.subtitle}
          </p>
          <div className="bg-card rounded-2xl border border-border shadow-sm p-8 sm:p-12">
            <HubSpotContactForm
              wrapperClassName="w-full"
              loadingMessage={t.pages.contact.formLoading}
              errorMessage={t.pages.contact.formError}
              targetId="hubspot-contact-form"
            />
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            {t.pages.contact.responseNote}
          </p>
        </div>
      </section>
      </div>
    </div>
  );
};

export default ContactUs;
