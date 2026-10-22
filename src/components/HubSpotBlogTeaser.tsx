import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';
import { blogPosts } from '@/lib/blogPosts';

interface HubSpotBlogTeaserProps {
  maxItems?: number;
  /**
   * Page-specific heading. Without it every page carrying this teaser shows the
   * same h2, which reads to a crawler as four pages about the same section.
   * `heading` replaces the plain part, `headingHighlight` the gradient part.
   */
  heading?: string;
  headingHighlight?: string;
}

export function HubSpotBlogTeaser({ maxItems = 3, heading, headingHighlight }: HubSpotBlogTeaserProps) {
  const { t, language } = useLanguage();
  const isMobile = useIsMobile();
  // Resolved at build time from the blog's RSS feed (scripts/generate-blog-posts.ts),
  // so the cards are in the first render and in the prerendered HTML.
  const posts = blogPosts[language].slice(0, maxItems);
  const [api, setApi] = useState<CarouselApi>();
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const isAutoAdvancingRef = useRef(false);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  // Handle manual navigation - pause auto-advance
  useEffect(() => {
    if (!api) {
      return;
    }

    let resumeTimeout: NodeJS.Timeout;

    const handleSelect = () => {
      // Only pause if this was manual navigation (not auto-advance)
      if (!isAutoAdvancingRef.current) {
        setIsAutoPlaying(false);
        // Clear any existing timeout
        if (resumeTimeout) {
          clearTimeout(resumeTimeout);
        }
        // Resume after 5 seconds of inactivity
        resumeTimeout = setTimeout(() => {
          setIsAutoPlaying(true);
        }, 5000);
      }
      // Reset the flag
      isAutoAdvancingRef.current = false;
    };

    api.on('select', handleSelect);

    return () => {
      api.off('select', handleSelect);
      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
      }
    };
  }, [api]);

  // Auto-advance carousel every 3 seconds (only when not paused and on mobile)
  useEffect(() => {
    if (!api || !isAutoPlaying || !isMobile) {
      return;
    }

    const interval = setInterval(() => {
      isAutoAdvancingRef.current = true;
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        // Loop back to start
        api.scrollTo(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [api, isAutoPlaying, isMobile]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-8 md:py-16 lg:py-20" aria-labelledby="blog-teaser-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 id="blog-teaser-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 px-4">
            <span className="whitespace-nowrap">{heading ?? t.blog.title}</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent whitespace-nowrap">
              {headingHighlight ?? t.blog.titleHighlight}
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
            {t.blog.subtitle}
          </p>
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-8 md:py-12 px-4">
            <p className="text-muted-foreground text-sm sm:text-base">
              {language === 'de' ? 'Keine Blog-Beiträge verfügbar' : 'No blog posts available'}
            </p>
          </div>
        )}

        {posts.length > 0 && (
          <>
            {/* Mobile: Carousel */}
            <div 
              className="lg:hidden mb-6"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Carousel
                setApi={setApi}
                opts={{
                  align: "center",
                  loop: true,
                }}
                className="w-full max-w-sm mx-auto"
              >
                <CarouselContent className="-ml-0">
                  {posts.map((post, index) => (
                    <CarouselItem key={index} className="pl-0">
                      <Card className="flex flex-col hover:shadow-lg transition-shadow overflow-hidden">
                        {post.imageUrl && (
                          <div className="w-full aspect-video overflow-hidden bg-muted">
                            <img 
                              src={post.imageUrl} 
                              alt={post.title}
                              width={640}
                              height={360}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg sm:text-xl line-clamp-2 leading-snug">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="text-xs sm:text-sm">
                            {formatDate(post.pubDate)}
                            {post.author && ` • ${post.author}`}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow pt-0">
                          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                            {post.description}
                          </p>
                          <Button 
                            variant="outline" 
                            size="lg"
                            className="w-full min-h-[44px]"
                            asChild
                          >
                            <a 
                              href={post.link} 
                              className="inline-flex items-center justify-center gap-2"
                            >
                              {t.blog.readMore}
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 h-6 w-6 opacity-60 hover:opacity-100 bg-background/80" />
                <CarouselNext className="right-2 h-6 w-6 opacity-60 hover:opacity-100 bg-background/80" />
              </Carousel>
            </div>

            {/* Desktop: Grid */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 md:mb-8">
              {posts.map((post, index) => (
                <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow overflow-hidden">
                  {post.imageUrl && (
                    <div className="w-full aspect-video overflow-hidden bg-muted">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        width={640}
                        height={360}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardHeader className="pb-3">
                    <CardTitle as="p" className="text-lg sm:text-xl line-clamp-2 leading-snug">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      {formatDate(post.pubDate)}
                      {post.author && ` • ${post.author}`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow pt-0">
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {post.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="w-full min-h-[44px]"
                      asChild
                    >
                      <a 
                        href={post.link} 
                        className="inline-flex items-center justify-center gap-2"
                      >
                        {t.blog.readMore}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center px-4">
              <Button 
                variant="default"
                size="lg"
                className="min-h-[44px] w-full sm:w-auto"
                asChild
              >
                <a 
                  href={language === 'de' ? 'https://blog.noreja.com/de-de' : 'https://blog.noreja.com/en'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  {t.blog.openBlog}
                </a>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}