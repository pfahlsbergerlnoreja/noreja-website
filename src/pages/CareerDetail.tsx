import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Mail, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getJobById, type JobListing } from '@/lib/careers';
import { getRoutePath } from '@/lib/routes';

const MAILTO_ADDRESS = 'lukas.pfahlsberger@noreja.com';

const CareerDetail = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const { t, language } = useLanguage();
  const job = jobId ? getJobById(jobId) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [jobId]);

  if (!job) {
    return <Navigate to={getRoutePath('careers', language)} replace />;
  }

  const subject = language === 'de'
    ? `Bewerbung: ${job.title}`
    : `Application: ${job.title}`;
  const mailtoHref = `mailto:${MAILTO_ADDRESS}?subject=${encodeURIComponent(subject)}`;

  const getTypeLabel = (type: JobListing['type']) => {
    const labels: Record<JobListing['type'], string> = {
      'full-time': t.careers.fullTime,
      'part-time': t.careers.partTime,
      'internship': t.careers.internship,
      'working-student': t.careers.workingStudent,
    };
    return labels[type];
  };

  const gradientStyle = {
    background: `
      linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 40%, hsl(var(--noreja-secondary) / 0.15) 80%, hsl(var(--background)) 100%),
      radial-gradient(ellipse 1000px 700px at 70% 20%, hsl(var(--noreja-secondary) / 0.14) 0%, transparent 60%)
    `
  } as const;

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const renderParagraph = (text: string) => (
    <div className="space-y-4">
      {text.split('\n\n').map((paragraph, i) => (
        <p key={i} className="text-muted-foreground leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );

  const renderList = (items: string[]) => (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <span className="text-muted-foreground leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );

  const sections: { heading: string; content: React.ReactNode }[] = [
    {
      heading: t.careers.aboutCompanyHeading,
      content: renderParagraph(job.aboutCompany[language]),
    },
    {
      heading: t.careers.roleDescriptionHeading,
      content: renderParagraph(job.roleDescription[language]),
    },
    {
      heading: t.careers.tasksHeading,
      content: renderList(job.tasks[language]),
    },
    {
      heading: t.careers.requirementsHeading,
      content: renderList(job.requirements[language]),
    },
    {
      heading: t.careers.benefitsHeading,
      content: renderList(job.benefits[language]),
    },
    {
      heading: t.careers.closingHeading,
      content: (
        <div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {job.closingText[language]}
          </p>
          <Button size="lg" asChild>
            <a href={mailtoHref} className="inline-flex items-center gap-2">
              {t.careers.applyNow}
              <Mail className="h-4 w-4" />
            </a>
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={gradientStyle}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-noreja-main/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        {/* Back link + Hero */}
        <section className="relative pt-8 md:pt-12 pb-12 md:pb-16">
          <div className="w-full max-w-4xl mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={getRoutePath('careers', language)}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                {t.careers.backToOverview}
              </Link>

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="secondary" className="text-xs capitalize">
                  {getTypeLabel(job.type)}
                </Badge>
                {job.department && (
                  <Badge variant="outline" className="text-xs">
                    {job.department}
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {job.title}
              </h1>

              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-lg">
                  {job.location.address?.[language] ?? t.careers[job.location.type]}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="pb-20 px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.heading}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
                {section.content}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareerDetail;
