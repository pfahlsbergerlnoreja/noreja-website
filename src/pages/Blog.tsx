import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Lightbulb, Layers, Newspaper, Briefcase, Sparkles, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { getRoutePath } from "@/lib/routes";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  author?: string;
  imageUrl?: string;
  category?: string;
}

export default function Blog() {
  const { t, language } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Language-specific heading texts
  const headingTexts = {
    en: {
      fixedText: "Read Articles That",
      rotatingWords: ["Matter", "Solve Problems", "Go Deeper", "Add Value"]
    },
    de: {
      fixedText: "Lese Artikel, die",
      rotatingWords: ["relevant sind", "Probleme lösen", "tiefer gehen", "Mehrwert bieten"]
    }
  };

  const currentHeading = headingTexts[language];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Normalize category names from RSS feed to our internal format
  // RSS feed uses formats like "News Round-Up (English)", "Two-For-One (German - Germany)", etc.
  const normalizeCategory = (categoryText: string): string | null => {
    if (!categoryText) return null;
    
    const normalized = categoryText.toLowerCase().trim();
    
    // Match variations of Quick Tips (handles "Quick Tips", "Quick Tips (English)", etc.)
    if (normalized.includes('quick tip')) {
      return 'quick tips';
    }
    // Match variations of Two-For-One (handles "Two-For-One", "Two For One", etc.)
    if (normalized.includes('two-for-one') || normalized.includes('two for one')) {
      return 'two for one';
    }
    // Match variations of News Round-Up (handles "News Round-Up", "News Round Up", etc.)
    if (normalized.includes('news round-up') || normalized.includes('news round up')) {
      return 'news round up';
    }
    // Match variations of Business Case
    if (normalized.includes('business case')) {
      return 'business case';
    }
    // Match variations of Feature Highlight
    if (normalized.includes('feature highlight')) {
      return 'feature highlight';
    }
    
    return null;
  };

  const categories = [
    {
      key: 'quickTips',
      icon: Lightbulb,
      title: t.blog.features.quickTips.title,
      description: t.blog.features.quickTips.description,
      color: 'bg-gradient-to-br from-noreja-main to-noreja-secondary',
      category: 'quick tips',
      displayName: 'Quick Tips'
    },
    {
      key: 'twoForOne',
      icon: Layers,
      title: t.blog.features.twoForOne.title,
      description: t.blog.features.twoForOne.description,
      color: 'bg-gradient-to-br from-noreja-secondary to-noreja-tertiary',
      category: 'two for one',
      displayName: 'Two for One'
    },
    {
      key: 'newsRoundUp',
      icon: Newspaper,
      title: t.blog.features.newsRoundUp.title,
      description: t.blog.features.newsRoundUp.description,
      color: 'bg-gradient-to-br from-noreja-main to-noreja-tertiary',
      category: 'news round up',
      displayName: 'News Round Up'
    },
    {
      key: 'businessCase',
      icon: Briefcase,
      title: t.blog.features.businessCase.title,
      description: t.blog.features.businessCase.description,
      color: 'bg-gradient-to-br from-noreja-tertiary to-noreja-secondary',
      category: 'business case',
      displayName: 'Business Case'
    },
    {
      key: 'featureHighlight',
      icon: Sparkles,
      title: t.blog.features.featureHighlight.title,
      description: t.blog.features.featureHighlight.description,
      color: 'bg-gradient-to-br from-noreja-main to-noreja-secondary',
      category: 'feature highlight',
      displayName: 'Feature Highlight'
    }
  ];

  // RSS Feed URLs
  const RSS_FEED_URL = language === 'de' 
    ? 'https://blog.noreja.com/de-de/rss.xml'
    : 'https://blog.noreja.com/en/rss.xml';

  // Helper function for resilient fetching with retry logic
  const fetchWithRetry = async (
    url: string,
    options: RequestInit = {},
    maxRetries = 3,
    retryDelay = 1000,
    timeout = 10000,
    abortSignal?: AbortSignal
  ): Promise<Response> => {
    let lastError: Error | null = null;
    
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        // Create AbortController for timeout
        const timeoutController = new AbortController();
        const timeoutId = setTimeout(() => timeoutController.abort(), timeout);
        
        // Combine timeout signal with component abort signal if provided
        let combinedSignal: AbortSignal | undefined;
        if (abortSignal) {
          const combinedController = new AbortController();
          const abortHandler = () => combinedController.abort();
          const timeoutHandler = () => combinedController.abort();
          
          abortSignal.addEventListener('abort', abortHandler);
          timeoutController.signal.addEventListener('abort', timeoutHandler);
          
          // Cleanup listeners after fetch completes or fails
          const cleanup = () => {
            abortSignal?.removeEventListener('abort', abortHandler);
            timeoutController.signal.removeEventListener('abort', timeoutHandler);
          };
          
          combinedSignal = combinedController.signal;
          // Store cleanup function for later use
          (combinedSignal as any)._cleanup = cleanup;
        } else {
          combinedSignal = timeoutController.signal;
        }
        
        try {
          const response = await fetch(url, {
            ...options,
            signal: combinedSignal,
            mode: 'cors',
            credentials: 'omit',
          });
          
          clearTimeout(timeoutId);
          // Cleanup signal listeners
          if ((combinedSignal as any)?._cleanup) {
            (combinedSignal as any)._cleanup();
          }
          
          // Only retry on network errors or 5xx errors
          if (!response.ok && response.status >= 500 && attempt < maxRetries - 1) {
            await new Promise(resolve => setTimeout(resolve, retryDelay * (attempt + 1)));
            continue;
          }
          
          return response;
        } catch (fetchError) {
          clearTimeout(timeoutId);
          // Cleanup signal listeners
          if ((combinedSignal as any)?._cleanup) {
            (combinedSignal as any)._cleanup();
          }
          throw fetchError;
        }
      } catch (error) {
        lastError = error instanceof Error ? error : new Error('Unknown fetch error');
        
        // Don't retry on abort (timeout or component unmount) or client errors (4xx)
        if (error instanceof Error && error.name === 'AbortError') {
          if (abortSignal?.aborted) {
            throw new Error('Request cancelled');
          }
          throw new Error('Request timeout');
        }
        
        // Retry on network errors
        if (attempt < maxRetries - 1) {
          await new Promise(resolve => setTimeout(resolve, retryDelay * (attempt + 1)));
          continue;
        }
      }
    }
    
    throw lastError || new Error('Failed to fetch after retries');
  };

  // Fetch RSS feed data
  useEffect(() => {
    const abortController = new AbortController();
    
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch RSS feed with retry logic
        const response = await fetchWithRetry(
          RSS_FEED_URL,
          {
            headers: {
              'Accept': 'application/rss+xml, application/xml, text/xml',
            },
          },
          3, // maxRetries
          1000, // retryDelay
          10000, // timeout
          abortController.signal // abortSignal
        );
        
        if (!response.ok) {
          throw new Error(`Failed to fetch blog posts: ${response.status}`);
        }
        
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        
        const parserError = xmlDoc.querySelector('parsererror');
        if (parserError) {
          throw new Error('Failed to parse RSS feed');
        }
        
        const items = xmlDoc.querySelectorAll('item');
        // Remove limit to get all articles from RSS feed
        const blogPosts: BlogPost[] = Array.from(items).map(item => {
          const title = item.querySelector('title')?.textContent || 'Untitled';
          const link = item.querySelector('link')?.textContent || '#';
          const pubDate = item.querySelector('pubDate')?.textContent || '';
          const description = item.querySelector('description')?.textContent || '';
          const authorRaw = item.querySelector('author, dc\\:creator')?.textContent;
          
          // Extract category from RSS feed
          // Check all category tags and collect valid ones
          const categoryElements = item.querySelectorAll('category');
          const validCategories: string[] = [];
          for (const catEl of Array.from(categoryElements)) {
            const categoryText = catEl.textContent?.trim();
            const normalized = normalizeCategory(categoryText);
            if (normalized) {
              validCategories.push(normalized);
            }
          }
          
          let postCategory: string | undefined;
          
          // If multiple valid categories found, check title for disambiguation
          if (validCategories.length > 1) {
            const titleLower = title.toLowerCase();
            // Check title for category indicators (check more specific patterns first)
            // Check for "Quick Tips:" or "Quick Tip:" at the start
            if (titleLower.match(/^quick tips?:/i) || titleLower.includes('quick tips') || titleLower.includes('quick tip')) {
              postCategory = 'quick tips';
            } else if (titleLower.match(/^two[- ]for[- ]one:/i) || titleLower.includes('two-for-one') || titleLower.includes('two for one')) {
              postCategory = 'two for one';
            } else if (titleLower.match(/^news round[- ]?up:/i) || titleLower.includes('news round-up') || titleLower.includes('news round up')) {
              postCategory = 'news round up';
            } else if (titleLower.match(/^business case:/i) || titleLower.includes('business case')) {
              postCategory = 'business case';
            } else if (titleLower.match(/^feature highlight:/i) || titleLower.includes('feature highlight')) {
              postCategory = 'feature highlight';
            } else {
              // If title doesn't help, use first valid category
              postCategory = validCategories[0];
            }
          } else if (validCategories.length === 1) {
            postCategory = validCategories[0];
          }
          
          // Extract image from description HTML
          let imageUrl: string | undefined;
          if (description) {
            const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
            if (imgMatch) {
              imageUrl = imgMatch[1];
            }
          }
          
          // Clean up description
          const cleanDescription = description.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
          
          return {
            title,
            link,
            pubDate,
            description: cleanDescription,
            author: authorRaw?.replace(/<[^>]*>/g, '').trim(),
            imageUrl,
            category: postCategory,
          };
        });
        
        if (!abortController.signal.aborted) {
          setPosts(blogPosts);
        }
      } catch (err) {
        if (!abortController.signal.aborted) {
          console.error('Error fetching blog posts:', err);
          const errorMessage = err instanceof Error ? err.message : 'Failed to load blog posts';
          setError(errorMessage);
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchBlogPosts();
    
    // Cleanup: abort fetch if component unmounts
    return () => {
      abortController.abort();
    };
  }, [RSS_FEED_URL, language]);

  // Helper function to extract author name
  const extractAuthorName = (authorString: string | null | undefined): string | undefined => {
    if (!authorString) return undefined;
    
    const nameInParens = authorString.match(/\(([^)]+)\)/);
    if (nameInParens) {
      return nameInParens[1].trim();
    }
    
    const nameBeforeEmail = authorString.match(/^([^<]+)</);
    if (nameBeforeEmail) {
      return nameBeforeEmail[1].trim();
    }
    
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(authorString.trim());
    if (isEmail) {
      return undefined;
    }
    
    return authorString.trim();
  };

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

  // Filter posts by category from RSS feed
  const getPostsForCategory = (categoryKey: string) => {
    const categoryConfig = categories.find(cat => cat.key === categoryKey);
    if (!categoryConfig) return [];
    
    const categoryPosts = posts.filter(post => {
      if (!post.category) return false;
      return post.category.toLowerCase() === categoryConfig.category.toLowerCase();
    });
    
    return categoryPosts.slice(0, 3); // Show latest 3 posts for each category
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <AnimatedHeading 
              fixedText={currentHeading.fixedText}
              rotatingWords={currentHeading.rotatingWords}
              size="md"
              className="text-foreground mb-6"
            />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              {t.blog.subtitle}
            </p>
          </motion.div>
        </div>
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-0" />
      </section>

      {/* Latest Posts by Category */}
      <div className="relative" style={{
        background: `
          linear-gradient(45deg, hsl(var(--background)) 0%, hsl(var(--noreja-secondary) / 0.12) 30%, hsl(var(--background)) 100%),
          radial-gradient(ellipse 1200px 900px at 30% 70%, hsl(var(--noreja-main) / 0.08) 0%, transparent 60%)
        `
      }}>
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-0" />
        <div className="relative z-10">
          <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              {t.blog.latestPostsPreview}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.blog.getGlimpse}
            </p>
          </motion.div>

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-noreja-main"></div>
              <p className="mt-4 text-muted-foreground">Loading blog posts...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">{error}</p>
              <Button variant="outline" onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          )}

          {!loading && !error && (
            <div className="space-y-16">
              {categories.map((category, categoryIndex) => {
                const categoryPosts = getPostsForCategory(category.key);
                // Always show all categories, even if empty
                return (
                  <motion.div
                    key={category.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full ${category.color} flex items-center justify-center shadow-lg`}>
                          <category.icon className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {t.blog.latestFrom}{' '}
                          <span className="bg-gradient-primary bg-clip-text text-transparent">
                            {category.displayName}
                          </span>
                        </h3>
                      </div>
                      <Link to={getRoutePath('blogCategory', language, { category: category.category })}>
                        <Button variant="ghost" className="text-noreja-main hover:bg-noreja-main/10">
                          {t.blog.viewAllPosts}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>

                    {categoryPosts.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryPosts.map((post, postIndex) => (
                          <motion.div
                            key={`${category.key}-${postIndex}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: postIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-noreja-main/30 group bg-background/80 backdrop-blur-sm flex flex-col">
                              {post.imageUrl && (
                                <div className="w-full aspect-video overflow-hidden bg-muted">
                                  <img 
                                    src={post.imageUrl} 
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                  />
                                </div>
                              )}
                              <CardHeader className="flex-grow">
                                <div className="flex items-center justify-between mb-2">
                                  <Badge variant="secondary" className="text-xs">
                                    {Math.ceil(Math.random() * 8) + 2} min read
                                  </Badge>
                                  <span className="text-xs text-muted-foreground">
                                    {formatDate(post.pubDate)}
                                  </span>
                                </div>
                                <CardTitle className="text-lg line-clamp-2 group-hover:text-noreja-main transition-colors">
                                  {post.title}
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="flex flex-col flex-grow">
                                <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-grow">
                                  {post.description}
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                  {post.author && (
                                    <span className="text-xs text-muted-foreground">
                                      {extractAuthorName(post.author)}
                                    </span>
                                  )}
                                  <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className="p-0 h-auto text-noreja-main hover:bg-noreja-main/10"
                                    asChild
                                  >
                                    <a href={post.link}>
                                      {t.blog.readMore}
                                      <ExternalLink className="w-3 h-3 ml-1" />
                                    </a>
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12 text-muted-foreground">
                        <p>No posts available in this category yet.</p>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          )}
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="relative" style={{
        background: `
          linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 40%, hsl(var(--noreja-secondary) / 0.15) 80%, hsl(var(--background)) 100%),
          radial-gradient(ellipse 1000px 700px at 70% 20%, hsl(var(--noreja-secondary) / 0.14) 0%, transparent 60%)
        `
      }}>
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
        <div className="relative z-10">
          <div className="w-full max-w-4xl mx-auto px-4 lg:px-8 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-noreja-main/10 to-noreja-main/5 rounded-2xl p-8 lg:p-12 border border-noreja-main/20 backdrop-blur-sm">
                <BookOpen className="w-12 h-12 mx-auto mb-6 text-noreja-main" />
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                  {t.blog.newsletterCta.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {t.blog.newsletterCta.description}
                </p>
                <div className="flex justify-center items-center">
                  <Button 
                    size="lg" 
                    className="gradient-primary glow-primary"
                    asChild
                  >
                    <a 
                      href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7127319663822221313" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {t.blog.newsletterCta.subscribeLinkedIn}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}