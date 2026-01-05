import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getPartnersForGrid, type Partner } from "@/lib/partners";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export function PartnerPhotosGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const [loadedPartners, setLoadedPartners] = useState<Partner[]>([]);
  
  // Load only face photos for grid partners
  useEffect(() => {
    const loadData = async () => {
      try {
        const partners = await getPartnersForGrid();
        setLoadedPartners(partners);
      } catch (error) {
        console.error('[PartnerPhotosGrid] Error loading partners:', error);
        setLoadedPartners([]);
      }
    };
    loadData();
  }, []);
  
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);
  const isAutoAdvancingRef = useRef(false);

  // Get all partners with photos and quotes for the grid, randomized on every reload
  const gridPartners = useMemo(() => {
    const partnersWithPhotos = loadedPartners.filter(
      (partner) => partner.personPhotoUrl && partner.quote
    );
    // Fisher-Yates shuffle algorithm
    const shuffled = [...partnersWithPhotos];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // Show all partners, not limited to 12
    return shuffled;
  }, [loadedPartners]);

  // Group partners into slides of 4 for mobile carousel
  const partnerSlides = useMemo(() => {
    const slides: Partner[][] = [];
    for (let i = 0; i < gridPartners.length; i += 4) {
      slides.push(gridPartners.slice(i, i + 4));
    }
    return slides;
  }, [gridPartners]);

  // Handle manual navigation - pause auto-advance
  useEffect(() => {
    if (!api) {
      return;
    }

    let resumeTimeout: NodeJS.Timeout;

    const handleSelect = () => {
      // Only pause if this was manual navigation (not auto-advance)
      if (!isAutoAdvancingRef.current) {
        setIsPaused(true);
        // Clear any existing timeout
        if (resumeTimeout) {
          clearTimeout(resumeTimeout);
        }
        // Resume after 10 seconds of inactivity
        resumeTimeout = setTimeout(() => {
          setIsPaused(false);
        }, 10000);
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

  // Auto-advance carousel every 2 seconds (only when not paused)
  useEffect(() => {
    if (!api || isPaused) {
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
    }, 2000);

    return () => clearInterval(interval);
  }, [api, isPaused]);

  const getPartnerLogo = (partner: Partner) => {
    if (partner.preferOriginalLogo) {
      return partner.logoUrl || partner.logoUrlWhite || "";
    }
    return partner.logoUrlWhite || partner.logoUrl || "";
  };

  const openModal = (partner: Partner) => {
    setSelectedPartner(partner);
  };

  const closeModal = () => {
    setSelectedPartner(null);
  };

  return (
    <section ref={ref} className="relative py-16 md:py-32 overflow-hidden z-10">
      <div className="container mx-auto px-4 lg:px-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 overflow-hidden"
        >
          <h2 className="text-4xl font-bold mb-6">
            {t.partners.title}{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t.partners.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.partners.subtitle}
          </p>
        </motion.div>

        {/* Mobile: Partner Photos Carousel (2x2 grid) */}
        <div className="lg:hidden overflow-hidden">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-sm mx-auto"
          >
            <CarouselContent>
              {partnerSlides.map((slide, slideIndex) => (
                <CarouselItem key={slideIndex}>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-2 gap-3 w-full py-8"
                  >
                    {slide.map((partner, index) => (
                      <motion.div
                        key={partner.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        className="group cursor-pointer overflow-hidden relative z-20"
                        onClick={() => openModal(partner)}
                      >
                        <div className="relative overflow-hidden rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="aspect-square p-3">
                            <div className="relative h-full w-full overflow-hidden rounded-lg transition-transform duration-500 group-hover:scale-105">
                              {partner.personPhotoUrl ? (
                                <img
                                  src={partner.personPhotoUrl}
                                  alt={partner.quoteAuthor || partner.name}
                                  className="w-full h-full object-cover relative z-10"
                                  loading="lazy"
                                  onError={(e) => {
                                    console.error('Failed to load partner image:', partner.personPhotoUrl, partner.name);
                                    const target = e.currentTarget as HTMLImageElement;
                                    target.style.display = 'none';
                                  }}
                                />
                              ) : (
                                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                                  <span className="text-gray-400 text-xs">No image</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        {/* Desktop: Partner Photos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:grid grid-cols-4 gap-6 w-full mx-auto py-8 overflow-hidden"
        >
          {gridPartners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group cursor-pointer overflow-hidden relative z-20"
              onClick={() => openModal(partner)}
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-square p-4">
                  <div className="relative h-full w-full overflow-hidden rounded-lg transition-transform duration-500 group-hover:scale-105">
                    {partner.personPhotoUrl ? (
                      <img
                        src={partner.personPhotoUrl}
                        alt={partner.quoteAuthor || partner.name}
                        className="w-full h-full object-cover relative z-10"
                        loading="lazy"
                        onError={(e) => {
                          console.error('Failed to load partner image:', partner.personPhotoUrl, partner.name);
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                        <span className="text-gray-400 text-xs">No image</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {selectedPartner && createPortal(
          <AnimatePresence>
            {selectedPartner && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-hidden"
                onClick={closeModal}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, y: 32 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 32 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-8 md:p-12">
                    {/* Close Button */}
                    <button
                      onClick={closeModal}
                      className="absolute top-4 right-4 w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>

                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      {/* Partner Photo */}
                      <div className="flex-shrink-0">
                        <div className="w-48 h-48 lg:w-56 lg:h-56 bg-gray-800 rounded-xl shadow-lg flex items-center justify-center p-4 overflow-hidden">
                          <img
                            src={selectedPartner.personPhotoUrl}
                            alt={selectedPartner.quoteAuthor || selectedPartner.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        {/* LinkedIn Link */}
                        {selectedPartner.linkedin && (
                          <div className="mt-4 flex justify-center">
                            <a
                              href={selectedPartner.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-12 h-12 text-blue-400 hover:text-blue-300 hover:bg-blue-900/30 rounded-lg transition-colors duration-200"
                              title="LinkedIn Profile"
                            >
                              <Linkedin className="w-7 h-7" />
                            </a>
                          </div>
                        )}
                      </div>
                      
                      {/* Partner Details */}
                      <div className="flex-1 text-center lg:text-left">
                        <div className="mb-6">
                          {getPartnerLogo(selectedPartner) && (
                            <img
                              src={getPartnerLogo(selectedPartner)}
                              alt={selectedPartner.name}
                              className="h-12 mx-auto lg:mx-0 mb-4 object-contain"
                              onError={(e) => {
                                const target = e.currentTarget as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                          )}
                        </div>
                        
                        <blockquote className="text-xl lg:text-2xl text-white font-medium mb-8 leading-relaxed whitespace-pre-line">
                          "{selectedPartner.quote}"
                        </blockquote>
                        
                        <div className="text-base lg:text-lg text-gray-300 mb-6">
                          <div className="font-semibold text-white">
                            {selectedPartner.quoteAuthor}
                          </div>
                          <div className="text-noreja-tertiary">
                            {selectedPartner.name}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                          {selectedPartner.website && (
                            <Button asChild variant="outline" className="border-gray-600 hover:bg-gray-800 text-white hover:text-white">
                              <a href={selectedPartner.website} target="_blank" rel="noopener noreferrer">
                                Visit Website
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          {selectedPartner.linkedin && (
                            <Button asChild variant="outline" className="border-blue-400 hover:bg-blue-900/30 text-blue-400 hover:text-blue-300">
                              <a href={selectedPartner.linkedin} target="_blank" rel="noopener noreferrer">
                                LinkedIn Profile
                                <Linkedin className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </section>
  );
}
