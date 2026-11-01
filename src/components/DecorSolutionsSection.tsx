import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';

interface DecorCollection {
  title: string;
  description: string;
  image: string;
}

const DECORA_COLLECTIONS: DecorCollection[] = [
  {
    title: "Wallpapers & Custom Wallpapers",
    description: "Give your walls a distinctive identity with an extensive selection of wallpaper designs, textures and patterns. Explore ready designs and customized creations that bring your ideas to life.",
    image: "/images/services/detail_3d_wallpapers.jpg",
  },
  {
    title: "Window Blinds",
    description: "Create the perfect balance of light, privacy and style with window blinds designed to complement your interiors.",
    image: "/images/services/detail_window_blinds.jpg",
  },
  {
    title: "Curtains & Fabrics",
    description: "Bring softness, elegance and warmth to your spaces with carefully selected curtain fabrics, colours and styles.",
    image: "/images/services/detail_custom_curtains.jpg",
  },
  {
    title: "Flooring Solutions",
    description: "Set the foundation for beautiful interiors with flooring options that combine design, durability and everyday practicality. Explore vinyl, PVC, wooden and SPC flooring.",
    image: "/images/services/detail_wooden_flooring.jpg",
  },
  {
    title: "Decorative Solutions",
    description: "Add the finishing touches that make a space feel complete. Discover decorative elements and finishes that enhance the overall character of your interiors.",
    image: "/images/projects/carousel_foyer_credenza.jpg",
  },
];

const VALUE_PILLARS = [
  { title: "Curated Collections", description: "A thoughtfully selected range of designs, materials and finishes." },
  { title: "Personalized Selection", description: "Options that complement your taste, space and requirements." },
  { title: "Expert Guidance", description: "Assistance in choosing the right products for your interiors." },
  { title: "Customization", description: "Solutions tailored to your design preferences and project needs." },
  { title: "Professional Support", description: "Guidance from product selection through installation." },
];

export const DecorSolutionsSection: React.FC = () => {
  return (
    <section
      id="decor"
      className="py-10 sm:py-32 bg-[#080808] text-white relative overflow-hidden border-t border-graphite/40"
      aria-label="Decor Solutions - DECORA"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      {/* Watermark */}
      <div className="absolute top-8 right-8 sm:top-12 sm:right-16 text-6xl sm:text-8xl lg:text-9xl font-serif font-light text-white/[0.05] select-none pointer-events-none leading-none">
        05
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 sm:w-12 h-[1px] bg-white/20" />
            <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.28em] uppercase text-mid-grey">
              DECOR SOLUTIONS · {BRAND_INFO.decora.unitOf}
            </span>
            <div className="w-8 sm:w-12 h-[1px] bg-white/20" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-[0.1em] text-white mb-3">
            DECORA
          </h2>
          <p className="font-serif italic text-light-grey/80 text-base sm:text-lg mb-4">
            The Art of Beautiful Details.
          </p>
          <p className="text-xs sm:text-sm font-sans font-normal text-light-grey/85 leading-relaxed max-w-xl mx-auto">
            Every beautiful space is defined by its details. At DECORA, we bring together thoughtfully selected décor collections that add style, character and individuality to your interiors. From elegant wallpapers and refined window treatments to contemporary flooring and decorative finishes, we help you find the right elements to complete your space.
          </p>
        </div>

        {/* Explore the Collection */}
        <div className="mb-8 sm:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-[11px] sm:text-xs font-mono tracking-[0.25em] uppercase text-mid-grey whitespace-nowrap">
              EXPLORE THE DECORA COLLECTION
            </h3>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5">
            {DECORA_COLLECTIONS.map((item, idx) => (
              <div
                key={item.title}
                className="group relative bg-[#0c0c0c] border border-white/10 shadow-sm overflow-hidden last:col-span-2 lg:last:col-span-1 transition-all duration-400 hover:border-white/30 hover:shadow-md hover:-translate-y-1"
              >
                <div className={`relative overflow-hidden ${idx === DECORA_COLLECTIONS.length - 1 ? 'aspect-[2/1] sm:aspect-[4/3]' : 'aspect-[4/3]'}`}>
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <h4 className="absolute bottom-2 left-3 right-3 sm:bottom-3 sm:left-4 sm:right-4 text-white text-[13px] sm:text-base font-serif leading-snug">
                    {item.title}
                  </h4>
                </div>
                <p className="p-3 sm:p-4 text-[11px] sm:text-xs font-sans text-light-grey/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* More Than Just Decor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 mb-8 sm:mb-20">
          <div className="lg:col-span-5">
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-white mb-3">
              More Than Just Décor
            </h3>
            <p className="text-xs sm:text-sm font-sans text-light-grey/85 leading-relaxed">
              At DECORA, we believe choosing the right materials is just as important as choosing the right design.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-px bg-white/10 border border-white/10">
            {VALUE_PILLARS.map((item) => (
              <div key={item.title} className="bg-[#0c0c0c] p-3 sm:p-5 hover:bg-[#161616] transition-colors duration-300 last:col-span-2 sm:last:col-span-1">
                <h4 className="text-[11px] sm:text-sm font-sans font-bold uppercase tracking-wider text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs font-sans text-light-grey/75 leading-snug sm:leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience DECORA Banner */}
        <div className="p-4 sm:p-8 bg-[#0c0c0c] border border-white/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5 rounded-sm">
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block mb-1">
              EXPERIENCE DECORA
            </span>
            <h4 className="text-sm sm:text-base font-serif font-semibold text-white">
              See It. Feel It. Choose It.
            </h4>
            <p className="text-xs font-sans text-light-grey/80 mt-1 max-w-md">
              Explore our showroom and experience our collections beyond the screen, with guidance from our team to help you make the right choice.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={BRAND_INFO.decora.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3 border border-white/20 text-white text-xs font-mono tracking-wider uppercase font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              <span>Explore Our Collections</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={BRAND_INFO.decora.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3 bg-white text-black text-xs font-mono tracking-wider uppercase font-semibold hover:bg-light-grey transition-all duration-300"
            >
              <span>Visit Our Showroom</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
