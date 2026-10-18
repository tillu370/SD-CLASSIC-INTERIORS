import React, { useState } from 'react';
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
  const [currentPage, setCurrentPage] = useState(0);
  const [lightboxProject, setLightboxProject] = useState<CarouselSlide | null>(null);

  // Show 4 projects per page
  const itemsPerPage = 4;
  const totalPages = Math.ceil(CAROUSEL_PROJECTS.length / itemsPerPage);

  const displayedProjects = CAROUSEL_PROJECTS.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="portfolio"
      className="py-24 sm:py-28 bg-[#F4F4F2] text-pure-black relative overflow-hidden"
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

        {/* 4 Cards Carousel Row with Side Navigation Controls */}
        <div className="relative group">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black text-white flex items-center justify-center shadow-2xl hover:bg-neutral-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black"
            aria-label="Previous projects slide"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2]" />
          </button>

          {/* 4 Cards Grid matching reference layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {displayedProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setLightboxProject(proj)}
                className="group/card relative cursor-pointer overflow-hidden bg-black aspect-[16/15] sm:aspect-[4/3] lg:aspect-[16/15] border border-black/20 shadow-md hover:shadow-xl transition-all duration-400"
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
                  className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.04] transition-transform duration-700 ease-out motion-reduce:transition-none group-hover/card:scale-108"
                  loading="lazy"
                />

                {/* Subtle dark vignette on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/30 transition-colors duration-400" />

                {/* Eye Icon Hover Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Category tag */}
                <div className="absolute bottom-3 left-3 z-10 bg-black/75 backdrop-blur-sm text-white px-2 py-0.5 text-[9px] font-mono tracking-widest uppercase">
                  {proj.category}
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black text-white flex items-center justify-center shadow-2xl hover:bg-neutral-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black"
            aria-label="Next projects slide"
          >
            <ChevronRight className="w-5 h-5 stroke-[2]" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`transition-all duration-300 rounded-full ${
                currentPage === idx
                  ? 'w-6 h-2 bg-black'
                  : 'w-2 h-2 bg-black/30 hover:bg-black/60'
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
