import React, { useState } from 'react';
import { ArrowRight, Eye, X, Sparkles, Layers } from 'lucide-react';
import { TiltedGridHero, type TiltedGridImage } from '@/components/ui/tilted-grid-hero';
import { BRAND_INFO } from '../data/websiteData';

interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const PORTFOLIO_PROJECTS: ProjectDetail[] = [
  {
    id: "proj-1",
    title: "Minimalist Lounge with Signature Embossed Monogram Wall",
    category: "Residential Living",
    image: "/images/projects/carousel_embossed_living.jpg",
    description: "Monochrome architectural living lounge featuring subtle bespoke wall art and custom charcoal seating."
  },
  {
    id: "proj-2",
    title: "Executive Master Bedroom with Backlit Fluted Paneling",
    category: "Bedrooms",
    image: "/images/projects/carousel_master_bedroom.jpg",
    description: "Warm LED acoustic fluted wall paneling with integrated reading sconces and minimalist floating side tables."
  },
  {
    id: "proj-3",
    title: "Warm LED Entryway Foyer & Custom Shoe Credenza",
    category: "Architectural Details",
    image: "/images/projects/carousel_foyer_credenza.jpg",
    description: "Subtle recessed downlights illuminating rich grain woodwork and concealed soft-close Italian cabinetry."
  },
  {
    id: "proj-4",
    title: "Turnkey Open Architectural Living & Dining Pavilion",
    category: "Turnkey Interiors",
    image: "/images/projects/living_dining_turnkey.jpg",
    description: "Seamless open plan living and dining layout with warm timber ceiling accents and bespoke lighting."
  },
  {
    id: "proj-5",
    title: "Neo-Classical Curved Arch Dining Salon",
    category: "Living Spaces",
    image: "/images/projects/arch_dining_space.jpg",
    description: "Architectural arch niche framing dining console with travertine textures and minimalist pendant fixture."
  },
  {
    id: "proj-6",
    title: "Floating Cantilevered Staircase with Glass Balustrade",
    category: "Architectural Details",
    image: "/images/projects/floating_architectural_staircase.jpg",
    description: "Monochrome architectural staircase with concealed riser LEDs and frameless structural safety glass."
  },
  {
    id: "proj-7",
    title: "Corporate Front Office & Reception Portal",
    category: "Commercial Infra",
    image: "/images/projects/commercial_reception_desk.jpg",
    description: "Fluted reception desk with warm backlight and brand signage executed by SD Constructions & Infra."
  },
  {
    id: "proj-8",
    title: "DECORA Studio — Custom Drapery & Textured Wall Styling",
    category: "DECORA Decor",
    image: "/images/divisions/division_decora.jpg",
    description: "High-end imported textured wall coverings, acoustic louvers, and motorized blackout blinds."
  },
  {
    id: "proj-9",
    title: "Luxury Modern Villa Double-Height Living Room",
    category: "Residential Living",
    image: "/images/divisions/division_residential.jpg",
    description: "Double-height architectural villa living space with Italian marble flooring and floor-to-ceiling glass envelope."
  },
  {
    id: "proj-10",
    title: "Acoustic Master Suite with Ambient Linear Illumination",
    category: "Bedrooms",
    image: "/images/projects/bedroom_ambient_lighting.jpg",
    description: "Dark luxury bedroom suite with architectural fluted panels and subtle ambient cove lighting."
  }
];

export const PortfolioGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxProject, setLightboxProject] = useState<ProjectDetail | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  // Map into TiltedGridImage items for the 3D cylindrical stream
  const tiltedImages: TiltedGridImage[] = filteredProjects.map(p => ({
    src: p.image,
    alt: p.title
  }));

  return (
    <section
      id="portfolio"
      className="py-24 sm:py-32 bg-[#050505] text-white relative overflow-hidden border-t border-graphite/40"
      aria-label="Our Projects - Spaces We've Transformed"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />

      {/* Ambient Watermark '05' */}
      <div 
        className="absolute top-10 right-8 sm:right-16 text-8xl sm:text-[13rem] font-serif font-light text-white/[0.03] select-none pointer-events-none leading-none font-bold"
        aria-hidden="true"
      >
        05
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-[11px] font-mono tracking-[0.28em] uppercase text-mid-grey">
                05 / PORTFOLIO ARCHIVES
              </span>
              <div className="w-12 h-[1px] bg-graphite" />
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-[0.02em] text-white leading-tight mb-4">
              Spaces We’ve Transformed
            </h2>

            <p className="text-sm sm:text-base font-sans font-light text-light-grey/80 leading-relaxed">
              Explore our curated portfolio in an interactive 3D curved architectural reel. From bespoke residential villas and modular kitchens to corporate fit-outs and DECORA wall styling in Visakhapatnam.
            </p>
          </div>

          {/* Top Right Action: View on Instagram */}
          <div className="shrink-0">
            <a
              href={BRAND_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-sm bg-charcoal border border-graphite hover:border-white hover:bg-white hover:text-pure-black text-white text-xs font-mono tracking-widest uppercase transition-all duration-300 group shadow-md"
            >
              <span>EXPLORE INSTAGRAM</span>
              <ArrowRight className="w-3.5 h-3.5 text-mid-grey group-hover:text-pure-black transition-colors" />
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-graphite/40">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects (10)' },
              { id: 'residential', label: 'Residential Living' },
              { id: 'bedrooms', label: 'Bedrooms' },
              { id: 'commercial', label: 'Commercial Infra' },
              { id: 'decora', label: 'DECORA Studio' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all rounded-sm border ${
                  activeCategory === tab.id
                    ? 'bg-white text-pure-black border-white font-semibold'
                    : 'bg-charcoal/60 text-light-grey border-graphite hover:border-white/60 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 text-[11px] font-mono text-mid-grey">
            <Layers className="w-3.5 h-3.5 text-white" />
            <span>3D CYLINDER ARCHITECTURAL REEL</span>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3D CURVED TILTED GRID HERO INTEGRATION
        ───────────────────────────────────────────────────────────── */}
        <div className="relative rounded-xl border border-graphite bg-pure-black/90 shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden">
          <TiltedGridHero
            images={tiltedImages}
            speed={3.6}
            tileHeight={42}
            aspectRatio={16 / 10}
            gap={6}
            axis={52}
            curve={75}
            fade={14}
            className="h-[480px] sm:h-[580px] lg:h-[620px] w-full"
          >
            {/* Center Content Overlay */}
            <div className="relative z-10 flex h-full flex-col items-center justify-between py-10 sm:py-12 pointer-events-none text-center">
              {/* Top Tag */}
              <div className="pointer-events-auto px-4 py-1.5 rounded-full bg-pure-black/80 border border-graphite text-[10px] font-mono tracking-widest uppercase text-light-grey backdrop-blur-md">
                <span>CURVED 3D MOTION STREAM · SD CLASSIC PORTFOLIO</span>
              </div>

              {/* Central Title */}
              <div className="px-6 max-w-xl">
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-white tracking-[0.03em] drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)] mb-3">
                  Every Detail Crafted With Intent
                </h3>
                <p className="text-xs sm:text-sm font-sans font-light text-light-grey/90 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] leading-relaxed">
                  Hover to pause and explore the stream of completed projects across Visakhapatnam.
                </p>
              </div>

              {/* Bottom Interactive Prompt */}
              <div className="pointer-events-auto flex items-center space-x-2 px-4 py-2 rounded-full bg-pure-black/85 border border-graphite text-[11px] font-mono tracking-wider text-mid-grey backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>CLICK ANY PROJECT BELOW FOR FULL RESOLUTION VIEW</span>
              </div>
            </div>
          </TiltedGridHero>
        </div>

        {/* Quick Project Showcase Cards Grid with Lightbox Trigger */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mt-10">
          {filteredProjects.slice(0, 4).map((proj) => (
            <div
              key={proj.id}
              onClick={() => setLightboxProject(proj)}
              className="group/card relative cursor-pointer overflow-hidden bg-charcoal rounded-md border border-graphite hover:border-white/50 transition-all duration-300 shadow-md"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setLightboxProject(proj);
                }
              }}
              aria-label={`View ${proj.title}`}
            >
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05] group-hover/card:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-pure-black/0 group-hover/card:bg-pure-black/40 transition-colors flex items-center justify-center opacity-0 group-hover/card:opacity-100">
                <div className="w-10 h-10 rounded-full bg-pure-black/90 border border-white/30 flex items-center justify-center text-white shadow-xl">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              <div className="p-3 bg-pure-black/95 border-t border-graphite">
                <span className="text-[9px] font-mono tracking-widest uppercase text-mid-grey block mb-0.5">
                  {proj.category}
                </span>
                <h4 className="text-xs font-serif text-white truncate">
                  {proj.title}
                </h4>
              </div>
            </div>
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
          <div className="flex items-center justify-between pb-4 border-b border-graphite/40 max-w-6xl mx-auto w-full">
            <span className="text-xs font-mono uppercase tracking-widest text-light-grey">
              {lightboxProject.category} · SD CLASSIC ARCHIVE
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
