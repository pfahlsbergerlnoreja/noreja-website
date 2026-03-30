import type { Language } from './translations';

export interface JobListing {
  id: string;
  title: string;
  description: {
    de: string;
    en: string;
  };
  type: 'full-time' | 'part-time' | 'internship' | 'working-student';
  location: {
    type: 'remote' | 'onsite' | 'hybrid';
    address?: string;
  };
  department?: string;
  publishedDate: Date;
}

export const jobListings: JobListing[] = [];

export function getActiveListings(): JobListing[] {
  return [...jobListings].sort(
    (a, b) => b.publishedDate.getTime() - a.publishedDate.getTime()
  );
}

export function getJobDescription(job: JobListing, language: Language): string {
  return job.description[language];
}
