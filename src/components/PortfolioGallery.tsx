import React, { useEffect, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { TiltedGridHero } from '@/components/ui/tilted-grid-hero';
import { BRAND_INFO } from '../data/websiteData';

interface CarouselSlide {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

// Exact original project images
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
  const [lightboxProject, setLightboxProject] = useState<CarouselSlide | null>(null);

  // The 3D cylindrical band needs a wider-than-tall container to read well;
  // on narrow phone viewports it collapses into a thin sliver with a large
  // empty gap, so it gets shorter, flatter geometry there instead.
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const images = CAROUSEL_PROJECTS.map((p) => ({
    src: p.image,
    alt: p.title,
  }));

  return (
    <section
      id="portfolio"
      className="relative w-full sm:min-h-screen bg-pure-black text-white overflow-hidden border-t border-graphite/40 flex flex-col justify-center py-16 sm:py-0"
      aria-label="Our Projects - Spaces We've Transformed"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />

      {/* Ambient Watermark '05' */}
      <div 
        className="absolute top-10 right-8 sm:right-16 text-8xl sm:text-[14rem] font-serif font-light text-white/[0.03] select-none pointer-events-none leading-none font-bold"
        aria-hidden="true"
      >
        05
      </div>

      {/* Full-Screen Tilted 3D Cylindrical Grid Hero */}
      <TiltedGridHero
        images={images}
        speed={isMobile ? 5.5 : 7.5}
        tileHeight={isMobile ? 70 : 42}
        aspectRatio={isMobile ? 4 / 3 : 16 / 10}
        gap={6}
        axis={isMobile ? 48 : 58}
        curve={isMobile ? 45 : 80}
        fade={isMobile ? 6 : 12}
        className="relative w-full h-[560px] sm:h-screen min-h-[480px] sm:min-h-[700px] flex flex-col justify-between"
      >
        {/* Header Overlay (Centered Clean Text) */}
        <div className="relative z-10 w-full pt-16 sm:pt-24 px-6 sm:px-10 pointer-events-auto text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
            {/* Eyebrow: —— OUR PROJECTS —— */}
            <div className="flex items-center justify-center space-x-3 mb-3">
              <div className="w-8 sm:w-12 h-[1px] bg-white/40" />
              <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.28em] uppercase text-mid-grey">
                OUR PROJECTS
              </span>
              <div className="w-8 sm:w-12 h-[1px] bg-white/40" />
            </div>

            {/* Headline: Spaces We’ve Transformed */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-[0.02em] text-white leading-tight mb-3">
              Spaces We’ve Transformed
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm font-sans font-light text-light-grey/80 leading-relaxed max-w-xl mx-auto mb-4">
              A glimpse of our recent residential and commercial projects.
            </p>

            {/* View All Projects Action */}
            <a
              href={BRAND_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-mono font-medium tracking-[0.2em] uppercase text-light-grey hover:text-white transition-colors underline underline-offset-4 decoration-white/40 hover:decoration-white"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Clean Vignette Spacer */}
        <div className="relative z-10 pb-8 sm:pb-12 text-center pointer-events-none" />
      </TiltedGridHero>

      {/* Lightbox Modal (for viewing full images) */}
      {lightboxProject && (
        <div
          className="fixed inset-0 z-50 bg-pure-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between pb-4 border-b border-graphite/40 max-w-6xl mx-auto w-full">
            <span className="text-xs font-mono uppercase tracking-widest text-light-grey">
              {lightboxProject.category}
            </span>
            <button
              onClick={() => setLightboxProject(null)}
              className="w-10 h-10 border border-graphite hover:border-white text-white flex items-center justify-center hover:bg-white hover:text-pure-black transition-colors rounded-sm"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative flex-grow flex items-center justify-center my-4 overflow-hidden max-w-6xl mx-auto w-full">
            <img
              src={lightboxProject.image}
              alt={lightboxProject.title}
              className="max-h-[72vh] max-w-full object-contain filter contrast-[1.05] rounded-sm shadow-2xl"
            />
          </div>

          <div className="max-w-2xl mx-auto text-center pt-4 border-t border-graphite/40 w-full">
            <h4 className="text-xl sm:text-2xl font-serif text-white mb-2">
              {lightboxProject.title}
            </h4>
            <p className="text-xs sm:text-sm font-sans text-light-grey/85">
              {lightboxProject.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
