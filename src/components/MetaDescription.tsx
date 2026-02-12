import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '@/contexts/LanguageContext';
import { getRouteKeyFromPath } from '@/lib/routes';
import { successStories } from '@/lib/successStories';

/**
 * Component that dynamically updates meta description tags in <head>
 * based on the current route and language.
 * Updates: meta name="description", og:description, and twitter:description
 */
export function MetaDescription() {
  const location = useLocation();
  const context = useContext(LanguageContext);
  
  // Gracefully skip if provider isn't ready (avoids crash during router transitions/HMR)
  if (!context) {
    return null;
  }
  
  const { language, t } = context;

  useEffect(() => {
    const routeKey = getRouteKeyFromPath(location.pathname);
    let description = '';

    // Handle success story detail pages
    if (routeKey === 'successStoryDetail') {
      const match = location.pathname.match(/^\/(?:de|en)\/success-story\/(.+)$/);
      if (match) {
        const companyName = match[1];
        const successStory = successStories.find(
          story => story.id.toLowerCase() === companyName.toLowerCase()
        );
        
        if (successStory) {
          // Use metaDescription if available, otherwise fall back to summary
          description = successStory.metaDescription?.[language] || successStory.summary[language];
        }
      }
    } else if (routeKey && routeKey in t.metaDescriptions) {
      // Handle regular pages with meta descriptions in translations
      const metaDescKey = routeKey as keyof typeof t.metaDescriptions;
      description = t.metaDescriptions[metaDescKey];
    }

    // If no description found, use default from index.html
    if (!description) {
      description = "Noreja's Generative Process Intelligence allows to contextualize operational data and human knowledge for the application of GenAI.";
    }

    // Update or create meta name="description"
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Update or create og:description
    let ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement;
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = description;

    // Update or create twitter:description
    let twitterDesc = document.querySelector('meta[name="twitter:description"]') as HTMLMetaElement;
    if (!twitterDesc) {
      twitterDesc = document.createElement('meta');
      twitterDesc.name = 'twitter:description';
      document.head.appendChild(twitterDesc);
    }
    twitterDesc.content = description;
  }, [location.pathname, language, t]);

  return null;
}
