import React from 'react';

// Custom line icons matching reference image
const HighEndFinishesIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 7V5a3 3 0 016 0v2" />
    <rect x="3" y="7" width="18" height="14" rx="1" />
    <path d="M10 11h4" />
  </svg>
);

const AffordablePricesIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6h6M9 10h6M9 6v12M12 10a4 4 0 014 4c0 2-2 3-5 3" />
    <line x1="12" y1="17" x2="16" y2="21" />
  </svg>
);

const CustomizedDesignsIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" y1="4" x2="8.12" y2="15.88" />
    <line x1="14.47" y1="14.48" x2="20" y2="20" />
    <line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
);

const WarrantyIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <circle cx="12" cy="11" r="2.5" />
  </svg>
);

const SatisfactionIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4c-1.5 2-2.5 4-2.5 6 0 2 1.5 3.5 2.5 3.5s2.5-1.5 2.5-3.5c0-2-1-4-2.5-6z" />
    <path d="M6 13c1.5-.8 3-.8 4.5 0-.8-1.5-.8-3 0-4.5-1.5.8-2.5 2.5-4.5 4.5z" />
    <path d="M18 13c-1.5-.8-3-.8-4.5 0 .8-1.5.8-3 0-4.5 1.5.8 2.5 2.5 4.5 4.5z" />
  </svg>
);

const QualityAssuredIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8.5" r="5.5" />
    <path d="M9.5 8.5l1.5 1.5 3.5-3.5" />
    <path d="M8.5 13L7 20l5-2.5 5 2.5-1.5-7" />
  </svg>
);

const COMMITMENTS = [
  { title: "High End Finishes", icon: <HighEndFinishesIcon /> },
  { title: "Affordable Prices", icon: <AffordablePricesIcon /> },
  { title: "Customized Designs", icon: <CustomizedDesignsIcon /> },
  { title: "Warranty on Workmanship", icon: <WarrantyIcon /> },
  { title: "Customer Satisfaction", icon: <SatisfactionIcon /> },
  { title: "100% Quality Assured", icon: <QualityAssuredIcon /> },
];

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 sm:py-28 bg-[#000000] text-white relative border-t border-graphite/40 overflow-hidden"
      aria-label="About SD Classic Interiors"
    >
      {/* Background Subtle Architectural Grid */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      {/* Large Watermark '06' in Top-Right Corner matching reference */}
      <div className="absolute top-8 right-8 sm:top-12 sm:right-16 text-6xl sm:text-8xl lg:text-9xl font-serif font-light text-white/[0.05] select-none pointer-events-none leading-none">
        06
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Exact Armchair in Fluted Room Photo */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-black border border-white/10 shadow-2xl">
              <img
                src="/images/projects/about_armchair_exact.jpg"
                alt="SD Classic Interiors - Contemporary Armchair in Fluted Room"
                className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.08] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Narrative Brand Story */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow: ← ABOUT US */}
            <div className="flex items-center space-x-2.5 mb-3">
              <span className="text-light-grey text-xs">←</span>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.28em] uppercase text-light-grey font-medium">
                ABOUT US
              </span>
            </div>

            {/* Headline: SD CLASSIC INTERIORS */}
            <h2 className="text-2xl sm:text-4xl font-serif tracking-[0.03em] text-white mb-6 uppercase">
              SD CLASSIC INTERIORS
            </h2>

            {/* Exact Paragraphs matching reference image */}
            <div className="space-y-4 text-xs sm:text-sm font-sans font-light text-light-grey/85 leading-relaxed mb-10 max-w-xl">
              <p>
                In 2019, we founded SD Classic Interiors with a vision to provide comprehensive interior solutions under one roof. Our showroom in Visakhapatnam was the only one of its kind, offering a real-time display of major interior products.
              </p>
              <p>
                Additionally, we had a studio apartment where clients could visit and experience the products and designs firsthand.
              </p>
              <p>
                We focus on creating designs that meet our clients’ budget while ensuring the highest quality and complete satisfaction.
              </p>
            </div>

            {/* 6 Commitments as a compact hairline-grid row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {COMMITMENTS.map((item) => (
                <div
                  key={item.title}
                  className="group/item bg-[#050505] p-4 flex items-center space-x-3 hover:bg-[#0d0d0d] transition-colors duration-300 cursor-default"
                >
                  <div className="w-8 h-8 border border-white/20 bg-white/5 flex items-center justify-center flex-shrink-0 text-white group-hover/item:border-white/50 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[11px] sm:text-xs font-sans font-normal text-light-grey/90 group-hover/item:text-white transition-colors leading-snug">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
