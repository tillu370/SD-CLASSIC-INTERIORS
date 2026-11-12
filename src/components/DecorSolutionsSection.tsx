import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BRAND_INFO, withDescription } from '../data/websiteData';
import { categoryPath } from '../lib/useHashRoute';
import { galleryThumb } from '../data/projectsData';

interface DecorCollection {
  title: string;
  description: string;
  categoryId: string;
  badge?: string;
}

const DECORA_COLLECTIONS: DecorCollection[] = [
  {
    title: "Wallpapers",
    description: "An extensive selection of ready wallpaper designs, textures and patterns to give your walls a distinctive identity.",
    categoryId: "decora-wallpapers",
    badge: "Most Requested",
  },
  {
    title: "Customized Wallpapers",
    description: "Fully customized wallpaper creations tailored to bring your own ideas and designs to life.",
    categoryId: "decora-wallpapers",
  },
  {
    title: "Window Blinds",
    description: "Create the perfect balance of light, privacy and style with window blinds designed to complement your interiors.",
    categoryId: "decora-blinds",
  },
  {
    title: "Customized Curtains",
    description: "Bring softness, elegance and warmth to your spaces with carefully selected, custom-made curtain fabrics, colours and styles.",
    categoryId: "decora-curtains",
  },
  {
    title: "Flooring Solutions",
    description: "Set the foundation for beautiful interiors with flooring options that combine design, durability and everyday practicality. Explore vinyl, PVC, wooden and SPC flooring.",
    categoryId: "decora-flooring",
  },
  {
    title: "Decorative Solutions",
    description: "Add the finishing touches that make a space feel complete. Discover decorative elements and finishes that enhance the overall character of your interiors.",
    categoryId: "decora-decorative",
  },
];

const VALUE_PILLARS = [
  { number: "01", title: "Curated Collections", description: "A carefully selected range of designs, materials and finishes to suit different styles and spaces." },
  { number: "02", title: "Personalized Recommendations", description: "Helping you choose the right products to complement your taste, space and requirements." },
  { number: "03", title: "Expert Guidance", description: "Professional assistance to help you make the right choices for your interiors." },
  { number: "04", title: "Customization", description: "Tailored solutions to match your design preferences and project requirements." },
  { number: "05", title: "Complete Support", description: "Dedicated support from product selection to professional installation." },
  { number: "06", title: "Doorstep Convenience", description: "Explore our samples and collections through convenient doorstep visits." },
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


      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 sm:w-12 h-[1px] bg-white/20" />
            <span className="text-[8px] sm:text-[9px] font-mono font-medium tracking-[0.28em] uppercase text-mid-grey">
              DECOR SOLUTIONS
            </span>
            <div className="w-8 sm:w-12 h-[1px] bg-white/20" />
          </div>

          <img
            src="/images/20261111_220034.png"
            alt="DECORA — Wall, Window, Floor and Decor"
            className="w-64 h-[180px] sm:w-72 sm:h-[200px] object-cover object-center mx-auto mb-2"
          />
          <p className="font-serif italic text-light-grey/80 text-base sm:text-lg mb-4">
            The Art of Beautiful Details.
          </p>
          <p className="text-xs sm:text-sm font-sans font-normal text-light-grey/85 leading-relaxed max-w-xl mx-auto">
            Offering specialised décor solutions, including wallpapers, customized wallpapers, window blinds, curtains, flooring and a wide range of décor products — adding style and character to every space.
          </p>
        </div>

        {/* Explore the Collection */}
        <div className="mb-8 sm:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-[11px] sm:text-xs font-mono tracking-[0.25em] uppercase text-mid-grey whitespace-nowrap">
              EXPLORE THE DECORA COLLECTION
            </h3>
            <div className="flex-1 h-[1px] bg-white/10" />
            <a
              href={categoryPath('decora')}
              className="shrink-0 inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono tracking-[0.18em] uppercase text-white/80 hover:text-white transition-colors whitespace-nowrap"
            >
              <span>View Full Gallery</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5">
            {DECORA_COLLECTIONS.map((item) => (
              <a
                key={item.title}
                href={categoryPath(item.categoryId)}
                aria-label={`Open ${item.title} in the DECORA gallery`}
                className={`group relative block bg-[#0c0c0c] shadow-sm overflow-hidden cursor-pointer transition-all duration-400 hover:shadow-md hover:-translate-y-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] ${
                  item.badge
                    ? 'border-2 border-[#B8A98C] shadow-[0_0_0_1px_rgba(184,169,140,0.25)]'
                    : 'border border-white/10 hover:border-white/30'
                }`}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={galleryThumb(item.categoryId, 1)}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  {item.badge && (
                    <span className="absolute top-2 left-2 sm:top-3 sm:left-3 inline-flex items-center px-2 py-1 sm:px-2.5 sm:py-1 bg-[#B8A98C] text-[#111111] text-[9px] sm:text-[10px] font-sans font-bold tracking-[0.12em] uppercase rounded-sm">
                      {item.badge}
                    </span>
                  )}
                  <h4 className="absolute bottom-2 left-3 right-3 sm:bottom-3 sm:left-4 sm:right-4 text-white text-[13px] sm:text-base font-serif leading-snug">
                    {item.title}
                  </h4>
                </div>
                <p className="p-3 sm:p-4 text-[11px] sm:text-xs font-sans text-light-grey/80 leading-relaxed">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* More Than Just Decor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 mb-8 sm:mb-20">
          <div className="lg:col-span-5">
            <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.25em] uppercase text-mid-grey block mb-3">
              More Than Just Décor
            </span>
            <p className="text-xs sm:text-sm font-sans text-light-grey/85 leading-relaxed">
              Every detail makes a difference. We bring together carefully selected designs, materials and finishes to help you create spaces that reflect your style and personality.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-px bg-white/10 border border-white/10">
            {VALUE_PILLARS.map((item) => (
              <div key={item.title} className="bg-[#0c0c0c] p-3 sm:p-5 hover:bg-[#161616] transition-colors duration-300">
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
              href={BRAND_INFO.decora.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3 bg-white text-black text-xs font-mono tracking-wider uppercase font-semibold hover:bg-light-grey transition-all duration-300"
            >
              <span>Visit Our Showroom</span>
            </a>
            <a
              href={`${BRAND_INFO.decora.whatsappUrl}?text=${encodeURIComponent(
                withDescription('Hello DECORA, I would like to book a home visit.')
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3 border border-white/20 text-white text-xs font-mono tracking-wider uppercase font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              <span>Book Your Home Visit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
