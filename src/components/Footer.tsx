import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/contexts/LanguageContext";
import { getRoutePath } from "@/lib/routes";
import {
  competenceCityPath,
  competenceHubPath,
  competenceStatePath,
  competenceStates,
  getCitiesOfState
} from "@/lib/competenceCenterIndex";
import logo from "@/assets/noreja_logo_white.webp";
import isoBadge from "@/assets/privacy/iso_white.webp";
import gdprBadge from "@/assets/privacy/gdpr_white.webp";

/** Medium logo — lucide-react ships no Medium brand icon, so it is inlined here. */
function MediumIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

/** Internal links carry `to`, external ones `href` (opened in a new tab). */
interface FooterLink {
  name: string;
  to?: string;
  href?: string;
  /** Rendered in the brand gradient, for the one call to action per footer. */
  highlight?: boolean;
  /** Heads a group of indented links (a state above its cities). */
  group?: boolean;
  indent?: boolean;
}

interface FooterColumn {
  id: string;
  title: string;
  /** Makes the column title itself a link. */
  titleTo?: string;
  links: FooterLink[];
}

const linkClassName = "text-[13px] leading-snug text-muted-foreground hover:text-primary transition-fast";

const highlightStyle = {
  background: 'linear-gradient(to right, hsl(var(--noreja-main)), hsl(var(--noreja-secondary)))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
} as const;

function FooterLinkItem({ link }: { link: FooterLink }) {
  const className = link.highlight
    ? "text-[13px] leading-snug font-bold hover:opacity-80 transition-opacity"
    : link.group
      ? "mt-1 first:mt-0 text-[13px] leading-snug font-medium text-foreground/90 hover:text-primary transition-fast"
      : link.indent
        ? `${linkClassName} pl-3`
        : linkClassName;
  const style = link.highlight ? highlightStyle : undefined;

  if (link.href) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
        {link.name}
      </a>
    );
  }
  return (
    <Link to={link.to!} className={className} style={style}>
      {link.name}
    </Link>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();
  const route = (key: Parameters<typeof getRoutePath>[0]) => getRoutePath(key, language);
  const processRoute = (processSlug: string) => getRoutePath('endToEndProcess', language, { processSlug });

  const documentationHref = language === 'de'
    ? 'https://docs.noreja.com/de/article/der-ursprung-des-causal-process-mining'
    : 'https://docs.noreja.com/en/article/the-origin-of-causal-process-mining';
  const blogHref = language === 'de' ? 'https://blog.noreja.com/de-de' : 'https://blog.noreja.com/en';

  const columns: FooterColumn[] = [
    {
      id: 'platform',
      title: t.footer.sections.platform,
      links: [
        { name: t.navigation.functionalities, to: route('functionalities') },
        { name: t.navigation.minerva, to: route('minerva') },
        { name: t.navigation.frontierAgents, to: route('aiAgents') },
        { name: 'Minerva Agent Library', to: route('agentLibrary') },
        { name: t.navigation.smartDataForge, to: route('smartDataForge') },
        { name: t.navigation.pricing, to: route('pricing') },
        { name: t.footer.sections.documentation, href: documentationHref }
      ]
    },
    {
      id: 'processes',
      title: t.footer.sections.processes,
      links: [
        { name: t.footer.sections.allProcesses, to: route('processes') },
        { name: 'Order-to-Cash', to: processRoute('order-to-cash') },
        { name: 'Purchase-to-Pay', to: processRoute('purchase-to-pay') },
        { name: 'Plan-to-Produce', to: processRoute('plan-to-produce') },
        { name: 'Lead-to-Activation', to: processRoute('lead-to-activation') },
        { name: 'Premium-to-Tax', to: processRoute('premium-to-tax') }
      ]
    },
    {
      id: 'resources',
      title: t.footer.sections.resources,
      links: [
        { name: t.navigation.definitions, to: route('definitions') },
        { name: t.navigation.battleCards, to: route('battleCards') },
        { name: t.navigation.faq, to: route('faq') },
        { name: t.navigation.costOfInaction, to: route('costOfInaction') },
        { name: t.navigation.downloads, to: route('downloads') },
        { name: t.navigation.events, to: route('events') },
        { name: 'Miragon x Noreja', to: route('expertTalk') },
        { name: t.navigation.blog, href: blogHref }
      ]
    },
    {
      id: 'company',
      title: t.footer.sections.company,
      links: [
        { name: t.navigation.team, to: route('team') },
        { name: t.navigation.successStories, to: route('successStories') },
        { name: t.navigation.partners, to: route('partners') },
        { name: t.navigation.careers, to: route('careers') },
        { name: t.footer.sections.referralProgram, href: siteConfig.links.referralProgram },
        { name: t.footer.contact.contactForm, to: route('contact') },
        { name: t.footer.contact.bookAppointment, href: siteConfig.hubspot.appointmentBooking, highlight: true }
      ]
    },
    {
      id: 'competence-center',
      title: t.footer.sections.competenceCenter,
      titleTo: competenceHubPath[language],
      links: competenceStates.flatMap((state) => [
        { name: state.name[language], to: competenceStatePath(state.id, language), group: true },
        ...getCitiesOfState(state.id).map((city) => ({
          name: city.name[language],
          to: competenceCityPath(city.id, language),
          indent: true
        }))
      ])
    }
  ];

  const legalLinks: FooterLink[] = [
    { name: t.footer.legal.imprint, to: route('imprint') },
    { name: t.footer.legal.privacy, to: route('privacy') },
    // The terms page was in the sitemap but had no inbound link anywhere on the
    // site; the label already existed here, it was just never rendered.
    { name: t.footer.legal.terms, to: route('terms') },
    { name: t.footer.legal.trustCenter, href: "https://trust.noreja.com/" }
  ];

  const socialLinks = [
    { href: siteConfig.links.linkedin, label: "Noreja on LinkedIn", icon: <Linkedin className="h-5 w-5" /> },
    { href: siteConfig.links.twitter, label: "Noreja on Twitter", icon: <Twitter className="h-5 w-5" /> },
    { href: siteConfig.links.youtube, label: "Noreja on YouTube", icon: <Youtube className="h-5 w-5" /> },
    { href: siteConfig.links.medium, label: "Noreja on Medium", icon: <MediumIcon className="h-5 w-5" /> }
  ];

  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-5 lg:grid-cols-[minmax(0,1.4fr)_repeat(5,minmax(0,1fr))]">
          {/* Brand */}
          <div className="col-span-2 md:col-span-5 lg:col-span-1 lg:pr-4">
            <Link to={route('home')} className="mb-5 flex items-center">
              <motion.img
                src={logo}
                alt="Noreja Logo"
                width={1566}
                height={405}
                className="w-40 aspect-[1566/405]"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>
            <p className="mb-5 max-w-sm text-[13px] leading-relaxed text-muted-foreground">
              {t.footer.description}
            </p>
            <div className="mb-8 flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-fast"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <img
                  src={isoBadge}
                  alt="ISO 27001 Certified"
                  width={64}
                  height={64}
                  className="w-16 h-10 object-contain mb-1.5"
                  loading="lazy"
                />
                <p className="text-muted-foreground text-xs text-center whitespace-nowrap">
                  {t.footer.certifications.iso}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={gdprBadge}
                  alt="GDPR Compliant"
                  width={512}
                  height={512}
                  className="w-16 h-10 object-contain mb-1.5"
                  loading="lazy"
                />
                <p className="text-muted-foreground text-xs text-center whitespace-nowrap">
                  {t.footer.certifications.gdpr}
                </p>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((column) => (
            <div key={column.id}>
              <p
                id={`footer-nav-${column.id}`}
                className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-foreground"
              >
                {column.titleTo ? (
                  <Link to={column.titleTo} className="hover:text-primary transition-fast">
                    {column.title}
                  </Link>
                ) : (
                  column.title
                )}
              </p>
              <nav aria-labelledby={`footer-nav-${column.id}`} className="flex flex-col gap-1">
                {column.links.map((link) => (
                  <FooterLinkItem key={link.to ?? link.href} link={link} />
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border/40 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
            <p className="text-muted-foreground text-[13px]">
              © {currentYear} {siteConfig.name}. {t.footer.copyright}
            </p>
            <nav aria-label={t.footer.sections.legal} className="flex flex-wrap gap-x-5 gap-y-1.5">
              {legalLinks.map((link) => (
                <FooterLinkItem key={link.to ?? link.href} link={link} />
              ))}
            </nav>
          </div>
          <p className="text-muted-foreground text-[13px]">
            {t.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
