import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream, readFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import config (simple import, no dynamic globs)
import { SITE_URL } from '../src/lib/config';
import { useCases } from '../src/lib/useCases';

// Read and parse TypeScript files to extract IDs
function extractSuccessStoryIds(): string[] {
  const filePath = resolve(__dirname, '../src/lib/successStories.ts');
  const content = readFileSync(filePath, 'utf-8');
  const ids: string[] = [];
  
  // Extract id from export const successStories array (only top-level objects)
  // Match the array content and extract ids from objects that have companyName field
  const arrayMatch = content.match(/export const successStories: SuccessStory\[\] = \[([\s\S]*?)\];/);
  if (arrayMatch) {
    const arrayContent = arrayMatch[1];
    // Match objects that start with { and have id followed by companyName (to ensure it's a top-level story object)
    const storyMatches = arrayContent.matchAll(/\{\s*id:\s*"([^"]+)"[\s\S]*?companyName:/g);
    for (const match of storyMatches) {
      ids.push(match[1]);
    }
  }
  
  return ids;
}

function extractJobIds(): string[] {
  const filePath = resolve(__dirname, '../src/lib/careers.ts');
  const content = readFileSync(filePath, 'utf-8');
  const ids: string[] = [];

  const arrayMatch = content.match(/export const jobListings: JobListing\[\] = \[([\s\S]*?)\n\];/);
  if (arrayMatch) {
    const arrayContent = arrayMatch[1];
    const jobMatches = arrayContent.matchAll(/\{\s*id:\s*'([^']+)'[\s\S]*?title:/g);
    for (const match of jobMatches) {
      ids.push(match[1]);
    }
  }

  return ids;
}

function extractDefinitionIds(): string[] {
  const filePath = resolve(__dirname, '../src/lib/definitions.ts');
  const content = readFileSync(filePath, 'utf-8');
  const ids: string[] = [];

  const arrayMatch = content.match(/export const definitions: Definition\[\] = \[([\s\S]*?)\n\];/);
  if (arrayMatch) {
    const arrayContent = arrayMatch[1];
    const defMatches = arrayContent.matchAll(/\{\s*id:\s*'([^']+)'[\s\S]*?question:/g);
    for (const match of defMatches) {
      ids.push(match[1]);
    }
  }

  return ids;
}

function extractBattleCardIds(): string[] {
  const filePath = resolve(__dirname, '../src/lib/battle-cards.ts');
  const content = readFileSync(filePath, 'utf-8');
  const ids: string[] = [];

  const arrayMatch = content.match(/export const battleCards: BattleCard\[\] = \[([\s\S]*?)\n\];/);
  if (arrayMatch) {
    const arrayContent = arrayMatch[1];
    // Match top-level battle card objects: id followed by name
    const cardMatches = arrayContent.matchAll(/\{\s*id:\s*'([^']+)',\s*name:/g);
    for (const match of cardMatches) {
      ids.push(match[1]);
    }
  }

  return ids;
}

function extractUseCaseIds(): string[] {
  // Only top-level use cases have their own detail route (/use-cases/:id).
  // Nested additionalUseCases entries do not, so importing the array directly
  // (instead of regex-scraping the source) guarantees we never emit dead URLs.
  return useCases.map((useCase) => useCase.id);
}


// Pretty-print the single-line XML the `sitemap` library produces, applying
// standard indentation and one element per line.
function formatXml(xml: string): string {
  const PADDING = '  ';
  const withBreaks = xml.replace(/>\s*</g, '>\n<');
  let indent = 0;

  return withBreaks
    .split('\n')
    .map((line) => {
      // Closing tag (</url>): dedent before printing.
      if (/^<\/[^>]+>$/.test(line)) {
        indent = Math.max(indent - 1, 0);
        return PADDING.repeat(indent) + line;
      }
      // Leaf element (<loc>…</loc>), self-closing tag, declaration or comment:
      // stays on a single line at the current depth.
      if (
        /^<[^!?][^>]*>.*<\/[^>]+>$/.test(line) ||
        /^<[^>]+\/>$/.test(line) ||
        /^<\?.*\?>$/.test(line) ||
        /^<!.*>$/.test(line)
      ) {
        return PADDING.repeat(indent) + line;
      }
      // Opening tag (<url>, <urlset …>): print, then indent children.
      const out = PADDING.repeat(indent) + line;
      indent += 1;
      return out;
    })
    .join('\n');
}

interface SitemapEntry {
  url: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  lastmod?: Date;
}

function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: SITE_URL });
  const entries: SitemapEntry[] = [];

  // Helper function to add entry
  const addEntry = (path: string, priority: number, changefreq: SitemapEntry['changefreq']) => {
    entries.push({
      url: `${SITE_URL}${path}`,
      changefreq,
      priority,
      lastmod: new Date(),
    });
  };

  // Home pages (highest priority)
  addEntry('/de', 1.0, 'daily');
  addEntry('/en', 1.0, 'daily');

  // Main pages (high priority)
  addEntry('/de/plattform', 0.9, 'weekly');
  addEntry('/en/platform', 0.9, 'weekly');
  addEntry('/de/preise', 0.9, 'weekly');
  addEntry('/en/pricing', 0.9, 'weekly');
  addEntry('/de/success-stories', 0.9, 'weekly');
  addEntry('/en/success-stories', 0.9, 'weekly');
  addEntry('/de/partner', 0.8, 'weekly');
  addEntry('/en/partners', 0.8, 'weekly');
  addEntry('/de/team', 0.8, 'weekly');
  addEntry('/en/team', 0.8, 'weekly');
  addEntry('/de/veranstaltungen', 0.8, 'weekly');
  addEntry('/en/events', 0.8, 'weekly');
  addEntry('/de/downloads', 0.8, 'weekly');
  addEntry('/en/downloads', 0.8, 'weekly');
  addEntry('/de/kontakt', 0.8, 'weekly');
  addEntry('/en/contact', 0.8, 'weekly');
  addEntry('/de/frontier-agents', 0.8, 'weekly');
  addEntry('/en/frontier-agents', 0.8, 'weekly');
  addEntry('/de/karriere', 0.7, 'weekly');
  addEntry('/en/careers', 0.7, 'weekly');
  addEntry('/de/definitionen', 0.7, 'weekly');
  addEntry('/en/definitions', 0.7, 'weekly');
  addEntry('/de/battle-cards', 0.7, 'weekly');
  addEntry('/en/battle-cards', 0.7, 'weekly');

  // Legal pages (lower priority)
  addEntry('/de/impressum', 0.5, 'monthly');
  addEntry('/en/imprint', 0.5, 'monthly');
  addEntry('/de/datenschutz', 0.5, 'monthly');
  addEntry('/en/privacy', 0.5, 'monthly');
  addEntry('/de/nutzungsbedingungen', 0.5, 'monthly');
  addEntry('/en/terms', 0.5, 'monthly');

  // Success Story detail pages (using id, not companyName)
  const successStoryIds = extractSuccessStoryIds();
  successStoryIds.forEach((storyId) => {
    addEntry(`/de/success-story/${storyId}`, 0.7, 'monthly');
    addEntry(`/en/success-story/${storyId}`, 0.7, 'monthly');
  });

  // Use Case detail pages
  const useCaseIds = extractUseCaseIds();
  useCaseIds.forEach((useCaseId) => {
    addEntry(`/de/use-cases/${useCaseId}`, 0.7, 'monthly');
    addEntry(`/en/use-cases/${useCaseId}`, 0.7, 'monthly');
  });

  // Career / job detail pages
  const jobIds = extractJobIds();
  jobIds.forEach((jobId) => {
    addEntry(`/de/karriere/${jobId}`, 0.6, 'weekly');
    addEntry(`/en/careers/${jobId}`, 0.6, 'weekly');
  });

  // Definition / knowledge base detail pages
  const definitionIds = extractDefinitionIds();
  definitionIds.forEach((defId) => {
    addEntry(`/de/definitionen/${defId}`, 0.6, 'monthly');
    addEntry(`/en/definitions/${defId}`, 0.6, 'monthly');
  });

  // Battle card / vendor comparison detail pages
  const battleCardIds = extractBattleCardIds();
  battleCardIds.forEach((cardId) => {
    addEntry(`/de/battle-cards/${cardId}`, 0.6, 'monthly');
    addEntry(`/en/battle-cards/${cardId}`, 0.6, 'monthly');
  });

  // Write entries to sitemap stream
  entries.forEach((entry) => {
    sitemap.write(entry);
  });

  sitemap.end();

  // Generate sitemap XML
  return streamToPromise(sitemap).then((sm) => {
    const outputPath = resolve(__dirname, '../public/sitemap.xml');
    const writeStream = createWriteStream(outputPath);
    
    const formatted = formatXml(sm.toString()) + '\n';

    return new Promise<void>((resolve, reject) => {
      writeStream.write(formatted);
      writeStream.end();
      writeStream.on('finish', () => {
        console.log(`✅ Sitemap generated successfully at ${outputPath}`);
        console.log(`   Total URLs: ${entries.length}`);
        resolve();
      });
      writeStream.on('error', reject);
    });
  });
}

// Run the generator
generateSitemap().catch((error) => {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
});
