import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowRight, Eye, Play, Pause } from 'lucide-react';
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
  },
  {
    id: "proj-turnkey-living",
    title: "Turnkey Open Architectural Living & Dining Pavilion",
    category: "Turnkey Interiors",
    image: "/images/projects/living_dining_turnkey.jpg",
    description: "Seamless open plan living and dining layout with warm timber ceiling accents and bespoke lighting."
  },
  {
    id: "proj-ambient-suite",
    title: "Acoustic Master Suite with Ambient Linear Illumination",
    category: "Bedrooms",
    image: "/images/projects/bedroom_ambient_lighting.jpg",
    description: "Dark luxury bedroom suite with architectural fluted panels and subtle cove lighting."
  }
];

export const PortfolioGallery: React.FC = () => {
  const [isReversed, setIsReversed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxProject, setLightboxProject] = useState<CarouselSlide | null>(null);

  // Duplicate for seamless 100% infinite marquee loop
  const infiniteProjects = [...CAROUSEL_PROJECTS, ...CAROUSEL_PROJECTS];

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

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        {/* Unlimited Infinite Horizontal Marquee Stream */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Left & Right Soft Fade Gradients for continuous architectural illusion */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 md:w-28 bg-gradient-to-r from-[#F4F4F2] via-[#F4F4F2]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 md:w-28 bg-gradient-to-l from-[#F4F4F2] via-[#F4F4F2]/80 to-transparent z-20 pointer-events-none" />

          {/* Seamless Infinite Marquee Track */}
          <div
            className="animate-infinite-marquee flex items-center space-x-3.5 sm:space-x-5 will-change-transform"
            style={{
              animationDirection: isReversed ? 'reverse' : 'normal',
              animationPlayState: isPaused || lightboxProject !== null ? 'paused' : 'running',
              animationDuration: '52s',
            }}
          >
            {infiniteProjects.map((proj, idx) => (
              <div
                key={`${proj.id}-${idx}`}
                onClick={() => setLightboxProject(proj)}
                className="group/card relative cursor-pointer overflow-hidden bg-black w-[280px] sm:w-[350px] md:w-[390px] lg:w-[420px] aspect-[16/11] shrink-0 border border-black/15 shadow-md hover:shadow-2xl transition-all duration-500 rounded-sm"
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
                  className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.04] transition-transform duration-700 ease-out group-hover/card:scale-108"
                  loading="lazy"
                  draggable={false}
                />

                {/* Subtle dark vignette on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/35 transition-colors duration-400" />

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
        </div>

        {/* Editorial Controls & Infinite Status Bar */}
        <div className="flex items-center justify-between max-w-3xl mx-auto px-2 mt-8 pt-4 border-t border-black/10">
          {/* Reverse Direction */}
          <button
            onClick={() => setIsReversed(true)}
            className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              isReversed
                ? 'bg-black text-white shadow-md'
                : 'bg-black/5 text-graphite hover:bg-black/10'
            }`}
            aria-label="Scroll in reverse direction"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reverse</span>
          </button>

          {/* Infinite Stream Indicator */}
          <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-mono tracking-[0.18em] uppercase text-graphite/75 select-none">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Unlimited Scroll · Hover To Pause</span>
          </div>

          {/* Pause / Play Toggle & Forward Direction */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
                isPaused
                  ? 'bg-black text-white shadow-md'
                  : 'bg-black/5 text-graphite hover:bg-black/10'
              }`}
              aria-label={isPaused ? "Resume scroll" : "Pause scroll"}
              title={isPaused ? "Play" : "Pause"}
            >
              {isPaused ? <Play className="w-3 h-3 fill-current" /> : <Pause className="w-3 h-3 fill-current" />}
            </button>

            <button
              onClick={() => setIsReversed(false)}
              className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                !isReversed
                  ? 'bg-black text-white shadow-md'
                  : 'bg-black/5 text-graphite hover:bg-black/10'
              }`}
              aria-label="Scroll in forward direction"
            >
              <span className="hidden sm:inline">Forward</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
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
