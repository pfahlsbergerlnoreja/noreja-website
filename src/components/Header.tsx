import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getRoutePath, type routes } from "@/lib/routes";
import logo from "@/assets/noreja_logo_white.webp";

type NavItem = {
  name: string;
  // 'blog' is external and has no entry in routes
  routeKey: keyof typeof routes | 'blog';
  external?: boolean;
};

// Compact mobile language switcher
function MobileLanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      aria-label={`Switch language to ${language === 'en' ? 'German' : 'English'}`}
      className="relative flex items-center space-x-2 px-3 py-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors border border-border/50 hover:border-primary/30"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center space-x-2">
        <span 
          className={`text-sm font-medium transition-colors ${
            language === 'en' ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          EN
        </span>
        <span className="text-muted-foreground text-sm">|</span>
        <span 
          className={`text-sm font-medium transition-colors ${
            language === 'de' ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          DE
        </span>
      </div>
      
      {/* Animated indicator */}
      <motion.div
        className="absolute bottom-0 h-0.5 bg-primary"
        initial={false}
        animate={{
          x: language === 'en' ? -6 : 32,
          width: 16
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </motion.button>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<NavItem['routeKey'] | null>(null);
  const location = useLocation();
  const { t, language } = useLanguage();

  const isActive = (routeKey: NavItem['routeKey']) => {
    // Blog is now external, so it's never active
    if (routeKey === 'blog') return false;
    const routePath = getRoutePath(routeKey, language);
    return location.pathname === routePath || location.pathname.startsWith(routePath + '/');
  };

  // External blog URLs
  const blogUrl = language === 'de' ? 'https://blog.noreja.com/de-de' : 'https://blog.noreja.com/en';
  
  const navigationItems: NavItem[] = [
    { name: t.navigation.functionalities, routeKey: 'functionalities' as const },
    { name: t.navigation.pricing, routeKey: 'pricing' as const },
    { name: t.navigation.successStories, routeKey: 'successStories' as const },
    { name: t.navigation.partners, routeKey: 'partners' as const },
    { name: t.navigation.blog, routeKey: 'blog' as const, external: true }
  ];

  // Shown on the right, set apart by a divider and highlighted text
  const featuredItems: NavItem[] = [
    { name: t.navigation.processes, routeKey: 'processes' as const },
    { name: t.navigation.agents, routeKey: 'agentLibrary' as const }
  ];

  // Desktop item: a pill follows the pointer from item to item, and a gradient
  // line glides under the active route (shared layoutIds).
  const renderDesktopItem = (item: NavItem, featured = false) => {
    const active = isActive(item.routeKey);
    const content = (
      <>
        <AnimatePresence>
          {hovered === item.routeKey && (
            <motion.span
              layoutId="nav-hover-pill"
              className={`absolute inset-0 rounded-full border ${
                featured
                  ? "border-[hsl(var(--noreja-tertiary)/0.25)] bg-[hsl(var(--noreja-main)/0.12)]"
                  : "border-white/10 bg-white/[0.05]"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
            />
          )}
        </AnimatePresence>
        {active && (
          <motion.span
            layoutId="nav-active-line"
            className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full gradient-accent"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
        <span className={`relative ${featured ? "nav-featured-text" : ""}`}>{item.name}</span>
      </>
    );
    const className = `relative whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-fast ${
      featured
        ? "font-semibold"
        : active
          ? "text-[hsl(256,77%,72%)]"
          : "text-muted-foreground hover:text-foreground"
    }`;
    const hoverHandlers = {
      onMouseEnter: () => setHovered(item.routeKey),
      onFocus: () => setHovered(item.routeKey),
    };

    if (item.routeKey === 'blog') {
      return (
        <a key={item.routeKey} href={blogUrl} target="_blank" rel="noopener noreferrer" className={className} {...hoverHandlers}>
          {content}
        </a>
      );
    }
    return (
      <Link key={item.routeKey} to={getRoutePath(item.routeKey, language)} className={className} {...hoverHandlers}>
        {content}
      </Link>
    );
  };

  const renderMobileItem = (item: NavItem, featured = false) => {
    const className = `whitespace-nowrap text-sm transition-fast ${
      featured
        ? "font-semibold"
        : isActive(item.routeKey)
          ? "font-medium text-[hsl(256,77%,72%)]"
          : "font-medium text-muted-foreground hover:text-[hsl(256,77%,72%)]"
    }`;
    const label = <span className={featured ? "nav-featured-text" : undefined}>{item.name}</span>;

    if (item.routeKey === 'blog') {
      return (
        <a
          key={item.routeKey}
          href={blogUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          onClick={() => setIsMenuOpen(false)}
        >
          {label}
        </a>
      );
    }
    return (
      <Link
        key={item.routeKey}
        to={getRoutePath(item.routeKey, language)}
        className={className}
        onClick={() => setIsMenuOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={getRoutePath('home', language)} className="flex items-center">
            <motion.img
              src={logo}
              alt="Noreja Logo"
              width={1566}
              height={405}
              // React 18 does not know the camelCase prop yet and drops it with
              // a warning, so the attribute is passed through verbatim.
              {...{ fetchpriority: 'high' }}
              className="w-36 aspect-[1566/405]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          {/* Desktop Navigation */}
          {/* Seven items need the lg breakpoint; below it they wrap and collide with the CTA. */}
          <MotionConfig reducedMotion="user">
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center gap-0.5 xl:gap-2"
              onMouseLeave={() => setHovered(null)}
              onBlur={() => setHovered(null)}
            >
              {navigationItems.map((item) => renderDesktopItem(item))}
              <span aria-hidden="true" className="nav-divider mx-2 xl:mx-3" />
              {featuredItems.map((item) => renderDesktopItem(item, true))}
            </nav>
          </MotionConfig>

          {/* Language Switcher and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link to={getRoutePath('contact', language)}>
              <Button size="sm" className="gradient-primary glow-primary">
                {t.buttons.contactUs}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden py-4 border-t border-border/40"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col space-y-4">
              {navigationItems.map((item) => renderMobileItem(item))}
              <span aria-hidden="true" className="nav-divider-horizontal" />
              {featuredItems.map((item) => renderMobileItem(item, true))}
              <div className="flex items-center justify-between pt-4">
                <Link to={getRoutePath('contact', language)}>
                  <Button size="sm" className="gradient-primary">
                    {t.buttons.contactUs}
                  </Button>
                </Link>
                <MobileLanguageSwitcher />
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}