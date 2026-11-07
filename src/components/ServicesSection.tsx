import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICE_ITEMS, type ServiceCardDetail } from '../data/servicesData';
import { servicePath } from '../lib/useHashRoute';

export const ServicesSection: React.FC = () => {
  // Group services by discipline in catalogue order, preserving first-seen group order
  const groups: { name: string; items: ServiceCardDetail[] }[] = [];
  for (const item of SERVICE_ITEMS) {
    let g = groups.find((entry) => entry.name === item.group);
    if (!g) {
      g = { name: item.group, items: [] };
      groups.push(g);
    }
    g.items.push(item);
  }

  const renderCard = (service: ServiceCardDetail) => (
    <a
      key={service.id}
      href={servicePath(service.id)}
      aria-label={`View ${service.title} photo gallery`}
      className="group relative block cursor-pointer overflow-hidden bg-[#0d0d0d] aspect-[4/3] shadow-[0_6px_18px_-8px_rgba(0,0,0,0.3)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.4)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F4F2]"
    >
      {/* Background photograph — primary focus */}
      <img
        src={service.image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none group-hover:scale-[1.03]"
        loading="lazy"
      />

      {/* Gradient confined to the text zone only */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none" />

      {/* Index number */}
      <span className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 text-[10px] font-sans text-white/70 tracking-[0.2em] uppercase">
        {service.number}
      </span>

      {/* Title + arrow */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-2.5 sm:p-4">
        <h3 className="text-[13px] sm:text-base font-serif font-normal text-white leading-[1.15] tracking-[0.01em] transition-colors duration-400 motion-reduce:transition-none group-hover:text-white/90">
          <span className="block">{service.line1}</span>
          {service.line2 && <span className="block">{service.line2}</span>}
        </h3>
        <span className="shrink-0 mb-0.5 text-white/70 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowRight className="w-4 h-4 stroke-[1.5]" />
        </span>
      </div>

      {/* Restrained hover edge */}
      <div className="absolute inset-0 border border-white/0 group-hover:border-white/15 transition-colors duration-400 motion-reduce:transition-none pointer-events-none" />
    </a>
  );

  return (
    <section
      id="services"
      className="py-10 sm:py-32 bg-[#F4F4F2] text-[#111111] relative border-t border-black/10 overflow-hidden"
      aria-label="What We Do - Complete Services"
    >
      {/* Background subtle architectural grid */}
      <div className="absolute inset-0 architectural-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Centered Editorial Header as requested by user */}
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-20">
          {/* Eyebrow: —— 06 / WHAT WE DO —— */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 sm:w-12 h-[1px] bg-black/20" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.28em] uppercase text-[#777777]">
              06 / WHAT WE DO
            </span>
            <div className="w-8 sm:w-12 h-[1px] bg-black/20" />
          </div>

          {/* Heading: Designed With Purpose. Crafted With Precision. */}
          <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-serif font-normal tracking-[0.03em] text-[#111111] mb-4 leading-tight">
            Designed With Purpose.<br />
            Crafted With Precision.
          </h2>

          {/* Centered Supporting Paragraph */}
          <p className="text-xs sm:text-sm md:text-base font-sans font-light text-[#555555] leading-relaxed max-w-2xl mx-auto mb-6">
            Every detail matters. Explore our interior design, material, furniture and turnkey execution solutions curated under one roof.
          </p>

          {/* Centered Badge: 16+ SPECIALIZED DISCIPLINES */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-black/[0.03] border border-black/15 text-[10px] font-mono tracking-[0.25em] uppercase text-[#555555]">
            <span>16 Specialized Disciplines</span>
          </div>
        </div>

        {/* Services grouped by discipline, each on a consistent 4-column editorial grid */}
        <div className="space-y-8 sm:space-y-16">
          {groups.map((g) => (
            <div key={g.name}>
              <div className="flex items-center gap-4 mb-5 sm:mb-6">
                <h3 className="text-[11px] sm:text-xs font-mono tracking-[0.25em] uppercase text-[#777777] whitespace-nowrap">
                  {g.name}
                </h3>
                <div className="flex-1 h-[1px] bg-black/10" />
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
                {g.items.map(renderCard)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
