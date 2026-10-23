import type { Language } from './translations';

/**
 * URL slugs of the Minerva Agent Library, per language.
 *
 * Kept apart from agents.ts on purpose: routes.ts needs the slugs to translate
 * a detail URL into the other language, and routes.ts is part of the main
 * bundle. The agent copy itself (agents.ts) stays in the lazy page chunks.
 *
 * The slugs carry the agent name, so the search term is in the URL as well as
 * in the H1. Adding an agent: add its slugs here and its content in agents.ts.
 */
export const agentSlugs = {
  'structural-deviation': {
    de: 'strukturfehleranalyse-agent',
    en: 'structural-deviation-analysis-agent',
  },
  'cycle-time': {
    de: 'laufzeitenanalyse-agent',
    en: 'cycle-time-analysis-agent',
  },
  'waiting-time': {
    de: 'wartezeitenanalyse-agent',
    en: 'waiting-time-analysis-agent',
  },
  'working-capital': {
    de: 'working-capital-analyse-agent',
    en: 'working-capital-analysis-agent',
  },
  'work-in-progress': {
    de: 'wip-analyse-agent',
    en: 'wip-analysis-agent',
  },
  compliance: {
    de: 'compliance-agent',
    en: 'compliance-agent',
  },
  rework: {
    de: 'nacharbeitsanalyse-agent',
    en: 'rework-analysis-agent',
  },
  'root-cause': {
    de: 'ursachenanalyse-agent',
    en: 'root-cause-analysis-agent',
  },
  'on-time': {
    de: 'termintreue-analyse-agent',
    en: 'on-time-performance-agent',
  },
  automation: {
    de: 'automatisierungspotenzial-agent',
    en: 'automation-potential-agent',
  },
} as const satisfies Record<string, Record<Language, string>>;

export type AgentId = keyof typeof agentSlugs;

export function getAgentIdBySlug(slug: string): AgentId | undefined {
  const lower = slug.toLowerCase();
  return (Object.keys(agentSlugs) as AgentId[]).find(
    (id) => agentSlugs[id].de === lower || agentSlugs[id].en === lower
  );
}
