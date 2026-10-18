import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowRight, Eye } from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';

interface CarouselSlide {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const CAROUSEL_PROJECTS: CarouselSlide[] = [
  {
    id: "proj-embossed-living",
    title: "Minimalist Lounge with Signature Embossed Monogram Wall",
    category: "Living Spaces",
    image: "/images/projects/carousel_embossed_living.jpg",
    description: "Monochrome architectural living lounge featuring subtle wall art and custom charcoal seating."
  },
  {
    id: "proj-master-bedroom",
    title: "Executive Master Bedroom with Backlit Headboard",
    category: "Bedrooms",
    image: "/images/projects/carousel_master_bedroom.jpg",
    description: "Warm LED acoustic fluted wall paneling with integrated reading sconces and minimalist side tables."
  },
  {
    id: "proj-foyer-credenza",
    title: "Warm LED Entryway Foyer & Custom Shoe Credenza",
    category: "Architectural Details",
    image: "/images/projects/carousel_foyer_credenza.jpg",
    description: "Subtle recessed downlights illuminating rich grain woodwork and concealed soft-close cabinetry."
  },
  {
    id: "proj-balcony-facade",
    title: "Bespoke Balcony Vertical Garden & Modern Facade",
    category: "Landscape & Greens",
    image: "/images/projects/carousel_balcony_facade.jpg",
    description: "Contemporary outdoor terrace integration with lush biophilic vertical garden foliage."
  },
  {
    id: "proj-dining-arch",
    title: "Curved Arch Dining Salon with Travertine Console",
    category: "Living Spaces",
    image: "/images/projects/arch_dining_space.jpg",
    description: "Neo-classical arch niche framing dining table and minimalist pendant fixture."
  },
  {
    id: "proj-staircase",
    title: "Floating Cantilevered Staircase with Glass Balustrade",
    category: "Architectural Details",
    image: "/images/projects/floating_architectural_staircase.jpg",
    description: "Monochrome architectural staircase with concealed riser LEDs and frameless structural glass."
  },
  {
    id: "proj-reception",
    title: "Corporate Front Office & Reception Portal",
    category: "Commercial Interiors",
    image: "/images/projects/commercial_reception_desk.jpg",
    description: "Fluted reception desk with warm backlight and brand signage for corporate client."
  },
  {
    id: "proj-boucle-chair",
    title: "Curated Boucle Lounge Chair in Natural Light",
    category: "Living Spaces",
    image: "/images/projects/project_armchair_shadows.jpg",
    description: "High-contrast architectural shadows highlighting textural boucle upholstery."
  }
];

export const PortfolioGallery: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxProject, setLightboxProject] = useState<CarouselSlide | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  // 4 projects per page slide
  const itemsPerPage = 4;

  // Group projects into slide pages
  const pages: CarouselSlide[][] = [];
  for (let i = 0; i < CAROUSEL_PROJECTS.length; i += itemsPerPage) {
    pages.push(CAROUSEL_PROJECTS.slice(i, i + itemsPerPage));
  }

  // Extended pages for seamless continuous forward loop
  const extendedPages = pages.length > 1 ? [...pages, pages[0]] : pages;

  const handleNext = () => {
    setWithTransition(true);
    setSlideIndex((prev) => {
      if (prev >= extendedPages.length - 1) {
        return 1;
      }
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setWithTransition(true);
    setSlideIndex((prev) => {
      if (prev <= 0) {
        return pages.length - 1;
      }
      return prev - 1;
    });
  };

  // When transition ends at the duplicate clone, seamlessly reset to index 0 without transition
  const handleTransitionEnd = () => {
    if (slideIndex >= pages.length) {
      setWithTransition(false);
      setSlideIndex(0);
    }
  };

  // Re-enable smooth transition immediately after silent reset
  useEffect(() => {
    if (!withTransition) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [withTransition]);

  // Automatic slide: smoothly advances every 3.5 seconds
  useEffect(() => {
    if (isPaused || lightboxProject !== null) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, lightboxProject, slideIndex]);

  // Touch swipe support for mobile & tablet users
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartXRef.current - touchEndX;
    if (deltaX > 40) {
      handleNext();
    } else if (deltaX < -40) {
      handlePrev();
    }
    touchStartXRef.current = null;
  };

  // Active dot index mapped modulo totalPages
  const activeDotIndex = slideIndex % pages.length;

  return (
    <section
      id="portfolio"
      className="py-24 sm:py-28 bg-[#F4F4F2] text-pure-black relative overflow-hidden select-none"
      aria-label="Our Projects - Spaces We've Transformed"
    >
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 architectural-grid-light opacity-50 pointer-events-none" />

      {/* Large Watermark '05' in Top-Right Corner matching reference */}
      <div className="absolute top-8 right-8 sm:top-12 sm:right-16 text-6xl sm:text-8xl lg:text-9xl font-serif font-light text-black/[0.06] select-none pointer-events-none leading-none">
        05
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Header Area */}
        <div className="relative mb-12 sm:mb-14">
          {/* Centered Editorial Header exactly matching user reference image */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Eyebrow: —— OUR PROJECTS —— */}
            <div className="flex items-center justify-center space-x-3 mb-3">
              <div className="w-8 sm:w-12 h-[1px] bg-graphite/40" />
              <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.28em] uppercase text-mid-grey">
                OUR PROJECTS
              </span>
              <div className="w-8 sm:w-12 h-[1px] bg-graphite/40" />
            </div>

            {/* Headline: Spaces We've Transformed */}
            <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-serif font-normal tracking-[0.02em] text-pure-black mb-3 leading-tight">
              Spaces We’ve Transformed
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm font-sans font-normal text-graphite/80 leading-relaxed max-w-xl mx-auto">
              A glimpse of our recent residential and commercial projects.
            </p>
          </div>

          {/* Top Right Action: VIEW ALL PROJECTS → */}
          <div className="mt-6 sm:mt-0 sm:absolute sm:right-0 sm:bottom-1 flex justify-center sm:justify-end">
            <a
              href={BRAND_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-sans font-semibold tracking-[0.2em] uppercase text-pure-black hover:text-graphite transition-colors underline underline-offset-4 decoration-black/40 hover:decoration-black"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
            </a>
          </div>
        </div>

        {/* 4 Cards Carousel Row with Seamless Automatic Side Sliding & Controls */}
        <div className="relative group">
          {/* Left Arrow Button */}
          <button
            onClick={() => {
              setIsPaused(true);
              handlePrev();
              setTimeout(() => setIsPaused(false), 2000);
            }}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black text-white flex items-center justify-center shadow-2xl hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black group/btn cursor-pointer"
            aria-label="Previous projects slide"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2] transition-transform duration-300 group-hover/btn:-translate-x-0.5" />
          </button>

          {/* Sliding Track Viewport */}
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Sliding Track with GPU acceleration & continuous seamless translation */}
            <div
              className={`flex will-change-transform ${
                withTransition
                  ? 'transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]'
                  : ''
              }`}
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedPages.map((pageProjects, pageIdx) => (
                <div
                  key={pageIdx}
                  className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 px-0.5"
                >
                  {pageProjects.map((proj, projIdx) => (
                    <div
                      key={`${proj.id}-${pageIdx}-${projIdx}`}
                      onClick={() => setLightboxProject(proj)}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      className="group/card relative cursor-pointer overflow-hidden bg-black aspect-[16/15] sm:aspect-[4/3] lg:aspect-[16/15] border border-black/20 shadow-md hover:shadow-2xl transition-all duration-500"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setLightboxProject(proj);
                        }
                      }}
                      aria-label={`View ${proj.title}`}
                    >
                      {/* Image */}
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.04] transition-transform duration-700 ease-out group-hover/card:scale-110"
                        loading="lazy"
                        draggable={false}
                      />

                      {/* Subtle dark vignette on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/30 transition-colors duration-400" />

                      {/* Eye Icon Hover Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-300 pointer-events-none transform group-hover/card:scale-100 scale-75">
                        <div className="w-11 h-11 rounded-full bg-black/80 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-xl">
                          <Eye className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Category tag */}
                      <div className="absolute bottom-3 left-3 z-10 bg-black/80 backdrop-blur-sm text-white px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase border border-white/10 shadow-sm transition-transform duration-300 group-hover/card:translate-y-[-2px]">
                        {proj.category}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => {
              setIsPaused(true);
              handleNext();
              setTimeout(() => setIsPaused(false), 2000);
            }}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black text-white flex items-center justify-center shadow-2xl hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black group/btn cursor-pointer"
            aria-label="Next projects slide"
          >
            <ChevronRight className="w-5 h-5 stroke-[2] transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center space-x-2.5 mt-8">
          {pages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setWithTransition(true);
                setSlideIndex(idx);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 2500);
              }}
              className={`transition-all duration-500 rounded-full cursor-pointer ${
                activeDotIndex === idx
                  ? 'w-7 h-2 bg-black shadow-sm'
                  : 'w-2 h-2 bg-black/25 hover:bg-black/50'
              }`}
              aria-label={`Go to slide page ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxProject && (
        <div
          className="fixed inset-0 z-50 bg-pure-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between pb-4 border-b border-graphite/40">
            <span className="text-xs font-mono uppercase tracking-widest text-light-grey">
              {lightboxProject.category}
            </span>
            <button
              onClick={() => setLightboxProject(null)}
              className="w-10 h-10 border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative flex-grow flex items-center justify-center my-4 overflow-hidden">
            <img
              src={lightboxProject.image}
              alt={lightboxProject.title}
              className="max-h-[70vh] max-w-full object-contain filter contrast-[1.05]"
            />
          </div>

          <div className="max-w-2xl mx-auto text-center pt-4 border-t border-graphite/40">
            <h4 className="text-xl sm:text-2xl font-serif text-white mb-2">
              {lightboxProject.title}
            </h4>
            <p className="text-xs sm:text-sm font-sans text-light-grey/80">
              {lightboxProject.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
