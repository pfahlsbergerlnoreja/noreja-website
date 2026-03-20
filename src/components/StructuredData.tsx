import { useEffect } from 'react';
import { SITE_URL, siteConfig } from '@/lib/config';

interface StructuredDataProps {
  schema: Record<string, unknown>;
  id: string;
}

export function StructuredData({ schema, id }: StructuredDataProps) {
  useEffect(() => {
    const scriptId = `structured-data-${id}`;
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    return () => {
      script?.remove();
    };
  }, [schema, id]);

  return null;
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Noreja Intelligence GmbH',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    description:
      "Noreja is a Generative Process Intelligence platform that contextualizes operational data and human knowledge for the application of GenAI to business process analysis and optimization.",
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.twitter,
      siteConfig.links.youtube,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      url: `${SITE_URL}/en/contact`,
      contactType: 'sales',
      availableLanguage: ['English', 'German'],
    },
    foundingDate: '2022',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vienna',
      addressCountry: 'AT',
    },
  };

  return <StructuredData schema={schema} id="organization" />;
}

export function SoftwareApplicationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Noreja Process Intelligence Platform',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web-based',
    description:
      'Generative Process Intelligence platform combining causal process mining with AI to analyze, understand, and optimize business processes without requiring event logs.',
    url: `${SITE_URL}/en/platform`,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '8600',
      highPrice: '20600',
      offerCount: 3,
      url: `${SITE_URL}/en/pricing`,
    },
    provider: {
      '@type': 'Organization',
      name: 'Noreja Intelligence GmbH',
      url: SITE_URL,
    },
    featureList: [
      'Dashboard with configurable widgets',
      'Interactive Process Analyzer',
      'Minerva AI Assistant',
      'Builder for data source connections',
      'Workbench with integrated Jupyter Notebooks',
      'Direct database connection without event logs',
      'Multidimensional process perspectives',
      'Context and domain knowledge integration',
      'Private LLM hosting',
      'ISO 27001 certified',
    ],
  };

  return <StructuredData schema={schema} id="software-application" />;
}

export function FAQSchema({ items }: { items: Array<{ question: string; answer: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return <StructuredData schema={schema} id="faq" />;
}

export function CaseStudySchema({
  companyName,
  headline,
  description,
  url,
  industry,
  imageUrl,
}: {
  companyName: string;
  headline: string;
  description: string;
  url: string;
  industry: string;
  imageUrl?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    author: {
      '@type': 'Organization',
      name: 'Noreja Intelligence GmbH',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Noreja Intelligence GmbH',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.ico`,
      },
    },
    about: {
      '@type': 'Organization',
      name: companyName,
    },
    keywords: `Process Intelligence, Case Study, ${companyName}, ${industry}`,
    ...(imageUrl ? { image: imageUrl } : {}),
  };

  return <StructuredData schema={schema} id={`case-study-${companyName.toLowerCase()}`} />;
}

export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <StructuredData schema={schema} id="breadcrumb" />;
}
