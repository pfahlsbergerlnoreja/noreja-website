import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getActiveListings, getJobDescription, type JobListing } from '@/lib/careers';
import { getRoutePath } from '@/lib/routes';

const MAILTO_ADDRESS = 'lukas.pfahlsberger@noreja.com';

const Careers = () => {
  const { t, language } = useLanguage();
  const listings = getActiveListings();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gradientStyle = {
    background: `
      linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 40%, hsl(var(--noreja-secondary) / 0.15) 80%, hsl(var(--background)) 100%),
      radial-gradient(ellipse 1000px 700px at 70% 20%, hsl(var(--noreja-secondary) / 0.14) 0%, transparent 60%)
    `
  } as const;

  const getTypeLabel = (type: JobListing['type']) => {
    const labels: Record<JobListing['type'], string> = {
      'full-time': t.careers.fullTime,
      'part-time': t.careers.partTime,
      'internship': t.careers.internship,
      'working-student': t.careers.workingStudent,
    };
    return labels[type];
  };

  const getLocationLabel = (location: JobListing['location']) => {
    if (location.address) {
      return location.address[language];
    }
    const typeLabels: Record<JobListing['location']['type'], string> = {
      remote: t.careers.remote,
      onsite: t.careers.onsite,
      hybrid: t.careers.hybrid,
    };
    return typeLabels[location.type];
  };

  const JobCard = ({ job }: { job: JobListing }) => {
    const detailPath = getRoutePath('careerDetail', language, { jobId: job.id });

    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="group"
      >
        <Link to={detailPath} className="block h-full">
          <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 border-border/50 hover:border-primary/30">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs capitalize">
                  {getTypeLabel(job.type)}
                </Badge>
                {job.department && (
                  <Badge variant="outline" className="text-xs">
                    {job.department}
                  </Badge>
                )}
              </div>
              <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors h-[3.5rem] line-clamp-2">
                {job.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-0 flex flex-col flex-1">
              <p className="text-muted-foreground leading-relaxed h-[9rem] line-clamp-6">
                {getJobDescription(job, language)}
              </p>

              <div className="mt-auto pt-6">
                <div className="flex items-center gap-3 text-sm mb-6">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span>{getLocationLabel(job.location)}</span>
                </div>

                <Button className="w-full group/btn" asChild>
                  <span className="flex items-center justify-center gap-2">
                    {t.careers.viewDetails}
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Link>
      </motion.div>
    );
  };

  const EmptyState = () => {
    const mailtoHref = `mailto:${MAILTO_ADDRESS}?subject=${encodeURIComponent(
      language === 'de' ? 'Initiativbewerbung Noreja' : 'Unsolicited Application for Noreja'
    )}`;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20"
      >
        <div className="max-w-md mx-auto">
          <Briefcase className="h-16 w-16 mx-auto mb-6 text-muted-foreground/50" />
          <h3 className="text-2xl font-semibold mb-4">
            {t.careers.noOpenPositions}
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            {t.careers.noOpenPositionsDescription}
          </p>
          <Button asChild>
            <a href={mailtoHref} className="flex items-center gap-2">
              {t.careers.initiativeApplication}
              <Mail className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={gradientStyle}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-noreja-main/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t.navigation.careers}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {t.careers.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            {listings.length > 0 ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold mb-4">{t.careers.openPositions}</h2>
                  <p className="text-muted-foreground">
                    {listings.length} {listings.length === 1
                      ? t.careers.openPosition
                      : t.careers.openPositionsLabel}
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {listings.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </>
            ) : (
              <EmptyState />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
