import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { BRAND_FEATURES } from '../data/websiteData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section
      className="py-14 sm:py-28 bg-[#080808] text-white border-t border-graphite/40 relative overflow-hidden"
      aria-label="Quality & Craftsmanship"
    >
      {/* Background Subtle Architectural Grid */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      {/* Large Watermark '08' in Top-Right Corner */}
      <div className="absolute top-8 right-8 sm:top-12 sm:right-16 text-6xl sm:text-8xl lg:text-9xl font-serif font-light text-white/[0.04] select-none pointer-events-none leading-none">
        08
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Centered Header matching reference */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-20">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-8 sm:w-12 h-[1px] bg-white/20" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.28em] uppercase text-mid-grey">
              QUALITY & CRAFTSMANSHIP
            </span>
            <div className="w-8 sm:w-12 h-[1px] bg-white/20" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif tracking-[0.03em] text-white mb-4 leading-tight">
            Thoughtful Design. Quality Execution.
          </h2>

          <p className="text-xs sm:text-sm font-sans font-light text-light-grey/80 leading-relaxed max-w-xl mx-auto">
            Our company standards are built on transparent material specifications, dedicated site supervision, and unwavering commitment to client vision.
          </p>
        </div>

        {/* 8 Feature Blocks in 4-column minimal grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {BRAND_FEATURES.map((feat, idx) => (
            <div
              key={feat.title}
              className="group relative bg-[#0b0b0b] p-7 flex flex-col justify-between overflow-hidden hover:bg-[#121212] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none hover:-translate-y-1"
            >
              {/* Accent line that grows in on hover */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-white transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none group-hover:w-full" />

              <div>
                <span className="text-[10px] font-mono tracking-widest text-mid-grey block mb-5">
                  0{idx + 1}
                </span>
                <h3 className="text-base sm:text-lg font-serif text-white mb-2.5">
                  {feat.title}
                </h3>
                <p className="text-xs font-sans text-light-grey/70 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-mid-grey">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span className="uppercase tracking-widest">VERIFIED CRAFT</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
