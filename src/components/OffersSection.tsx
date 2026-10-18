import React from 'react';
import { ArrowRight } from 'lucide-react';

interface OffersSectionProps {
  onSelectOffer: (offerTitle: string) => void;
}

interface OfferPackageItem {
  id: string;
  titleLine1: string;
  titleLine2: string;
  photoUrl: string;
  subtitleLine1: string;
  subtitleLine2: string;
  offerKey: string;
}

const OFFER_PACKAGES: OfferPackageItem[] = [
  {
    id: "kitchen-upgrade",
    titleLine1: "Kitchen",
    titleLine2: "Upgrade",
    photoUrl: "/images/offers/photo_offer_kitchen_upgrade.png",
    subtitleLine1: "Modular & Semi Modular",
    subtitleLine2: "Kitchen Solutions",
    offerKey: "Kitchen Upgrade"
  },
  {
    id: "smart-storage",
    titleLine1: "Smart",
    titleLine2: "Storage",
    photoUrl: "/images/offers/photo_offer_smart_storage.png",
    subtitleLine1: "Customised Wardrobes",
    subtitleLine2: "& Cupboards",
    offerKey: "Smart Storage"
  },
  {
    id: "complete-home-interiors",
    titleLine1: "Complete",
    titleLine2: "Home Interiors",
    photoUrl: "/images/offers/photo_offer_complete_home.png",
    subtitleLine1: "2BHK / 3BHK",
    subtitleLine2: "Complete Interiors",
    offerKey: "Complete Home Interiors"
  },
  {
    id: "renovation-studio",
    titleLine1: "Renovation",
    titleLine2: "Studio",
    photoUrl: "/images/offers/photo_offer_renovation_studio.png",
    subtitleLine1: "Transform Your",
    subtitleLine2: "Existing Space",
    offerKey: "Renovation Studio"
  },
  {
    id: "custom-decor",
    titleLine1: "Custom Decor",
    titleLine2: "",
    photoUrl: "/images/offers/photo_offer_custom_decor.png",
    subtitleLine1: "Wallpapers, Flooring,",
    subtitleLine2: "Curtains & Blinds",
    offerKey: "Custom Decor"
  }
];

export const OffersSection: React.FC<OffersSectionProps> = ({ onSelectOffer }) => {
  return (
    <section
      id="offers"
      className="py-24 sm:py-32 bg-[#080808] text-white relative border-t border-graphite/40 overflow-hidden"
      aria-label="Special Offers - Exclusive Interior Packages"
    >
      {/* Background Subtle Architectural Grid */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      {/* Large Watermark '04' in Top-Right Corner matching reference */}
      <div className="absolute top-8 right-8 sm:top-12 sm:right-16 text-6xl sm:text-8xl lg:text-9xl font-serif font-light text-white/[0.04] select-none pointer-events-none leading-none">
        04
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Centered Editorial Header exactly matching user reference image */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          {/* Eyebrow: —— SPECIAL OFFERS —— */}
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-8 sm:w-12 h-[1px] bg-white/20" />
            <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.28em] uppercase text-mid-grey">
              SPECIAL OFFERS
            </span>
            <div className="w-8 sm:w-12 h-[1px] bg-white/20" />
          </div>

          {/* Main Headline: Exclusive Interior Packages */}
          <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-serif font-normal tracking-[0.02em] text-white mb-3 leading-tight">
            Exclusive Interior Packages
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm font-sans font-normal text-light-grey/80 leading-relaxed max-w-xl mx-auto">
            Beautiful spaces. Better value. Limited period offers.
          </p>
        </div>

        {/* 5 Full-bleed Photographic Cards (5 Columns on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {OFFER_PACKAGES.map((pkg, idx) => (
            <div
              key={pkg.id}
              onClick={() => onSelectOffer(pkg.offerKey)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectOffer(pkg.offerKey);
                }
              }}
              aria-label={`Enquire for ${pkg.offerKey}`}
              className="group relative cursor-pointer overflow-hidden bg-[#0a0a0a] aspect-[4/5] focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
            >
              {/* Full-bleed photograph */}
              <img
                src={pkg.photoUrl}
                alt={pkg.offerKey}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none group-hover:scale-[1.03]"
                loading="lazy"
              />

              {/* Gradient confined to the text zone */}
              <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              {/* Index number */}
              <span className="absolute top-4 left-4 text-[10px] font-sans text-white/70 tracking-[0.2em] uppercase">
                0{idx + 1}
              </span>

              {/* Title, subtitle, enquire link */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-serif font-normal text-white leading-[1.12] tracking-[0.01em] mb-2">
                  <span className="block">{pkg.titleLine1}</span>
                  {pkg.titleLine2 && <span className="block">{pkg.titleLine2}</span>}
                </h3>
                <p className="text-xs font-sans text-light-grey/75 leading-relaxed mb-4">
                  <span className="block">{pkg.subtitleLine1}</span>
                  <span className="block">{pkg.subtitleLine2}</span>
                </p>
                <div className="flex items-center space-x-2 text-xs font-sans font-normal text-white/85 group-hover:text-white transition-colors duration-400 motion-reduce:transition-none pt-3 border-t border-white/15">
                  <span className="tracking-wide">Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[1.5] transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none group-hover:translate-x-1" />
                </div>
              </div>

              {/* Restrained hover edge */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/15 transition-colors duration-400 motion-reduce:transition-none pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
