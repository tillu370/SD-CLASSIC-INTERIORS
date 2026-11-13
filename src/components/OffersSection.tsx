import React from 'react';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { BRAND_INFO, createWhatsAppHref } from '../data/websiteData';

interface OffersSectionProps {
  onSelectOffer: (offerTitle: string) => void;
}

interface BudgetPackage {
  id: string;
  bhk: string;
  label: string;
  price: string;
  offerKey: string;
}

const BUDGET_PACKAGES: BudgetPackage[] = [
  {
    id: '2bhk',
    bhk: '2BHK',
    label: 'Complete Interiors',
    price: '3,49,999',
    offerKey: '2BHK Complete Interiors Package',
  },
  {
    id: '3bhk',
    bhk: '3BHK',
    label: 'Complete Interiors',
    price: '3,99,999',
    offerKey: '3BHK Complete Interiors Package',
  },
];

const PACKAGE_HIGHLIGHTS = [
  'High End Finishes',
  'Customized Designs',
  'No Hidden Charges',
  '100% Quality Assured',
];

interface SpecGroup {
  room: string;
  items: string[];
}

const SPEC_GROUPS: SpecGroup[] = [
  {
    room: 'Living Room / Hall',
    items: ['TV Unit', 'Wallpaper for any one wall', 'Window Blind'],
  },
  {
    room: 'Master Bedroom',
    items: ['Wardrobe / Cupboard', 'Wallpaper for any one wall', 'Window Blind'],
  },
  {
    room: 'Children Bedroom',
    items: ['Wardrobe / Cupboard', 'Wallpaper for any one wall', 'Window Blind'],
  },
  {
    room: 'Guest Bedroom',
    items: ['Wardrobe / Cupboard', 'Wallpaper for any one wall', 'Window Blind'],
  },
  {
    room: 'Kitchen',
    items: ['Kitchen Platform Storage', '3 to 4 Modular Baskets', 'Storage Unit'],
  },
  {
    room: 'Additional Components',
    items: ['Crockery Unit in Dining Area', 'Shoe Rack (Standard Size)', 'Pooja Unit'],
  },
];

export const OffersSection: React.FC<OffersSectionProps> = ({ onSelectOffer }) => {
  return (
    <section
      id="offers"
      className="py-10 sm:py-32 bg-[#080808] text-white relative border-t border-graphite/40 overflow-hidden"
      aria-label="Special Offers - Budget Interior Packages"
    >
      {/* Background Subtle Architectural Grid */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />


      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Centered Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-8 sm:w-12 h-[1px] bg-white/20" />
            <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.28em] uppercase text-mid-grey">
              SPECIAL OFFERS
            </span>
            <div className="w-8 sm:w-12 h-[1px] bg-white/20" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-serif font-normal tracking-[0.02em] text-white mb-3 leading-tight">
            Save Big on Home Interiors
          </h2>

          <p className="text-xs sm:text-sm font-sans font-normal text-light-grey/80 leading-relaxed max-w-xl mx-auto">
            Our new budget packages for semi modular flats &amp; houses.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {BUDGET_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="group relative bg-[#0c0c0c] border border-white/10 p-6 sm:p-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/25 hover:-translate-y-1"
            >
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-mid-grey">
                {pkg.bhk} Package
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white mt-2 mb-4 leading-tight lining-nums">
                {pkg.bhk} {pkg.label}
              </h3>
              <div className="flex items-baseline space-x-2 mb-6 pb-6 border-b border-white/10">
                <span className="text-xl sm:text-2xl font-serif font-bold text-white">₹</span>
                <span className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-wide">{pkg.price}</span>
                <span className="text-sm font-sans text-mid-grey">/-</span>
              </div>

              <ul className="space-y-2.5 mb-8">
                {PACKAGE_HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-center space-x-2.5 text-xs sm:text-sm font-sans text-light-grey/85">
                    <Check className="w-3.5 h-3.5 stroke-[1.5] text-white/70 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => onSelectOffer(pkg.offerKey)}
                aria-label={`Enquire for ${pkg.offerKey}`}
                className="flex items-center space-x-2 text-xs sm:text-sm font-sans font-normal text-white/85 group-hover:text-white transition-colors duration-400 pt-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]"
              >
                <span className="tracking-wide">Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[1.5] transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mb-8 sm:mb-10">
          <a
            href={createWhatsAppHref(
              BRAND_INFO.residential.whatsappUrl,
              "Hello SD Classic Interiors! I'd like to receive a sample video and 3D design. Please share the details."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-black border border-white text-xs sm:text-sm font-mono tracking-wider uppercase font-bold shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:bg-transparent hover:text-white hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Get Sample Video &amp; 3D Design</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Specifications Breakdown */}
        <div className="text-center mb-8 sm:mb-10">
          <h4 className="text-xl sm:text-2xl font-serif font-normal text-white mb-2">
            What's Included
          </h4>
          <p className="text-xs sm:text-sm font-sans text-light-grey/70">
            Specifications of our budget packages, room by room.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 mb-10 sm:mb-14">
          {SPEC_GROUPS.map((group) => (
            <div key={group.room} className="bg-[#0a0a0a] p-5 sm:p-6">
              <h5 className="text-sm sm:text-base font-serif font-normal text-white mb-3">
                {group.room}
              </h5>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-xs font-sans text-light-grey/70 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-[10px] sm:text-[11px] font-sans text-mid-grey tracking-wide">
          *Budget packages are only applicable on semi modular flats / houses. T&amp;C apply.
        </p>
      </div>
    </section>
  );
};
