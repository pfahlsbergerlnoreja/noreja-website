import { useEffect } from 'react';
import { SITE_URL, siteConfig } from '@/lib/config';

interface StructuredDataProps {
  schema: Record<string, unknown> | Array<Record<string, unknown>>;
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

interface JobPostingInput {
  id: string;
  title: string;
  description: string;
  datePosted: string;
  employmentType: string;
  locationType: 'remote' | 'onsite' | 'hybrid';
  locationAddress?: string;
  url: string;
}

export function JobPostingSchema({ jobs }: { jobs: JobPostingInput[] }) {
  const schema = jobs.map((job) => {
    const base: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      title: job.title,
      description: job.description,
      datePosted: job.datePosted,
      employmentType: job.employmentType,
      url: job.url,
      directApply: false,
      hiringOrganization: {
        '@type': 'Organization',
        name: 'Noreja Intelligence GmbH',
        sameAs: SITE_URL,
        logo: `${SITE_URL}/favicon.ico`,
      },
    };

    // Remote roles must declare jobLocationType + applicantLocationRequirements;
    // onsite/hybrid roles get a physical jobLocation.
    if (job.locationType === 'remote') {
      base.jobLocationType = 'TELECOMMUTE';
      // The address field is free text (e.g. "Southern Germany / Remote"); map it to
      // valid schema.org Country names so structured-data validators don't reject it.
      const text = (job.locationAddress || '').toLowerCase();
      const countries: string[] = [];
      if (text.includes('german') || text.includes('deutschland')) countries.push('Germany');
      if (text.includes('austria') || text.includes('österreich') || text.includes('oesterreich')) countries.push('Austria');
      if (countries.length === 0) countries.push('Germany');
      const countryNodes = countries.map((name) => ({ '@type': 'Country', name }));
      base.applicantLocationRequirements = countryNodes.length === 1 ? countryNodes[0] : countryNodes;
    } else {
      base.jobLocation = {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: job.locationAddress || 'Vienna',
          addressCountry: 'AT',
        },
      };
    }

    return base;
  });

  return <StructuredData schema={schema} id="job-postings" />;
}

interface TeamPersonInput {
  name: string;
  role: string;
  linkedInUrl?: string;
  imageUrl?: string;
}

export function TeamSchema({ members }: { members: TeamPersonInput[] }) {
  const schema = members.map((member) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.role,
    worksFor: {
      '@type': 'Organization',
      name: 'Noreja Intelligence GmbH',
      url: SITE_URL,
    },
    ...(member.linkedInUrl ? { sameAs: [member.linkedInUrl] } : {}),
    ...(member.imageUrl ? { image: member.imageUrl } : {}),
  }));

  return <StructuredData schema={schema} id="team" />;
}

interface DefinitionSchemaInput {
  term: string;
  question: string;
  answer: string;
  url: string;
}

const GLOSSARY_NAME = 'Noreja Process Intelligence Glossary';

/**
 * Emits a DefinedTerm (for glossary semantics) plus a FAQPage (question → answer)
 * for a single definition page. The Q&A shape is ideal for AI/LLM comprehension.
 */
export function DefinitionSchema({ term, question, answer, url }: DefinitionSchemaInput) {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'DefinedTerm',
      name: term,
      description: answer,
      url,
      inDefinedTermSet: {
        '@type': 'DefinedTermSet',
        name: GLOSSARY_NAME,
        url: `${SITE_URL}/en/definitions`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answer,
          },
        },
      ],
    },
  ];

  return <StructuredData schema={schema} id="definition" />;
}

/** Emits a DefinedTermSet listing every glossary entry — used on the hub page. */
export function DefinitionSetSchema({
  terms,
}: {
  terms: Array<{ term: string; description: string; url: string }>;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: GLOSSARY_NAME,
    url: `${SITE_URL}/en/definitions`,
    hasDefinedTerm: terms.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.description,
      url: t.url,
    })),
  };

  return <StructuredData schema={schema} id="definition-set" />;
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
