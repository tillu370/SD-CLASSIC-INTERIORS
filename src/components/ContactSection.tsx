import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Copy, 
  Check, 
  ExternalLink, 
  Building2, 
  Home,
  Sparkles
} from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [copiedResAddress, setCopiedResAddress] = useState(false);
  const [copiedCommAddress, setCopiedCommAddress] = useState(false);
  const [copiedDecoraLocation, setCopiedDecoraLocation] = useState(false);

  const copyToClipboard = (text: string, type: 'res' | 'comm' | 'decora') => {
    navigator.clipboard.writeText(text);
    if (type === 'res') {
      setCopiedResAddress(true);
      setTimeout(() => setCopiedResAddress(false), 2000);
    } else if (type === 'comm') {
      setCopiedCommAddress(true);
      setTimeout(() => setCopiedCommAddress(false), 2000);
    } else {
      setCopiedDecoraLocation(true);
      setTimeout(() => setCopiedDecoraLocation(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#F6F6F4] text-pure-black relative border-t border-light-grey/40 overflow-hidden"
      aria-label="Contact Information & Studio Directory"
    >
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />

      {/* Large Watermark Number */}
      <div 
        className="absolute top-12 right-6 sm:right-12 text-7xl sm:text-9xl font-serif text-black/[0.04] select-none pointer-events-none font-bold"
        aria-hidden="true"
      >
        09
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-mid-grey font-medium">
              DIRECTORY · SPECIALIZED DIVISIONS
            </span>
            <div className="w-12 h-[1px] bg-black/20" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-[0.03em] text-pure-black mb-4 leading-tight">
            Connect With Our Studios
          </h2>
          <p className="text-sm sm:text-base font-sans font-light text-graphite leading-relaxed max-w-2xl">
            Choose between our residential interior design showroom, our commercial construction division, or our specialized soft furnishings & wall decor studio (DECORA).
          </p>
        </div>

        {/* Three Specialized Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-16">
          {/* DIVISION 1: Residential — SD Classic Interiors */}
          <div className="group relative overflow-hidden bg-white border border-[#E2E2DF] shadow-[0_10px_35px_-18px_rgba(0,0,0,0.25)] hover:shadow-[0_35px_70px_-20px_rgba(0,0,0,0.3)] hover:border-pure-black/50 hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] p-7 sm:p-8 flex flex-col justify-between rounded-sm">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-pure-black to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            <div>
              <div className="flex items-center justify-between border-b border-[#EBEBE8] pb-5 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-pure-black flex items-center justify-center text-white shadow-[0_10px_25px_-8px_rgba(0,0,0,0.5)] shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block font-medium">
                      DIVISION 01
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif text-pure-black font-semibold">
                      Residential Interiors
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-mono tracking-widest text-pure-black px-2 py-0.5 bg-[#F5F5F3] border border-black/10 uppercase font-medium">
                  Studio Showroom
                </span>
              </div>

              {/* Company Details */}
              <div className="space-y-5">
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase block mb-1 font-medium">
                    Showroom Entity
                  </span>
                  <p className="text-base sm:text-lg font-serif text-pure-black font-medium">
                    {BRAND_INFO.residential.company}
                  </p>
                </div>

                {/* Direct Telephone */}
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase block mb-1 font-medium">
                    Direct Telephone
                  </span>
                  <a
                    href={`tel:${BRAND_INFO.residential.phone}`}
                    className="inline-flex items-center space-x-2 text-sm font-sans text-graphite hover:text-pure-black transition-colors font-medium"
                  >
                    <Phone className="w-4 h-4 text-pure-black" />
                    <span>{BRAND_INFO.residential.phoneFormatted}</span>
                  </a>
                </div>

                {/* WhatsApp Channel */}
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase block mb-1 font-medium">
                    WhatsApp Consultation
                  </span>
                  <a
                    href={BRAND_INFO.residential.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm font-sans text-graphite hover:text-pure-black transition-colors font-medium"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Chat on WhatsApp</span>
                    <ExternalLink className="w-3 h-3 text-mid-grey" />
                  </a>
                </div>

                {/* Email */}
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase block mb-1 font-medium">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${BRAND_INFO.residential.email}`}
                    className="inline-flex items-center space-x-2 text-xs sm:text-sm font-sans text-graphite hover:text-pure-black transition-colors font-medium break-all"
                  >
                    <Mail className="w-4 h-4 text-pure-black shrink-0" />
                    <span>{BRAND_INFO.residential.email}</span>
                  </a>
                </div>

                {/* Studio Address */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase font-medium">
                      Showroom Address
                    </span>
                    <button
                      onClick={() => copyToClipboard(BRAND_INFO.residential.address, 'res')}
                      className="inline-flex items-center space-x-1 text-[10px] font-mono text-mid-grey hover:text-pure-black transition-colors cursor-pointer"
                    >
                      {copiedResAddress ? (
                        <>
                          <Check className="w-3 h-3 text-pure-black" />
                          <span className="text-pure-black font-semibold">COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>COPY</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs font-sans text-graphite leading-relaxed">
                    {BRAND_INFO.residential.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Division Footnote */}
            <div className="pt-6 mt-6 border-t border-[#EBEBE8]">
              <span className="text-[10px] font-mono tracking-wider text-mid-grey uppercase font-medium block">
                Bespoke Villas · Luxury Apartments · Modular Kitchens
              </span>
            </div>
          </div>

          {/* DIVISION 2: Commercial — SD Constructions & Infra */}
          <div className="group relative overflow-hidden bg-white border border-[#E2E2DF] shadow-[0_10px_35px_-18px_rgba(0,0,0,0.25)] hover:shadow-[0_35px_70px_-20px_rgba(0,0,0,0.3)] hover:border-pure-black/50 hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] p-7 sm:p-8 flex flex-col justify-between rounded-sm">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-pure-black to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            <div>
              <div className="flex items-center justify-between border-b border-[#EBEBE8] pb-5 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-pure-black flex items-center justify-center text-white shadow-[0_10px_25px_-8px_rgba(0,0,0,0.5)] shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block font-medium">
                      DIVISION 02
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif text-pure-black font-semibold">
                      Commercial & Infra
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-mono tracking-widest text-pure-black px-2 py-0.5 bg-[#F5F5F3] border border-black/10 uppercase font-medium">
                  Civil & Infra
                </span>
              </div>

              {/* Company Details */}
              <div className="space-y-5">
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase block mb-1 font-medium">
                    Corporate Entity
                  </span>
                  <p className="text-base sm:text-lg font-serif text-pure-black font-medium">
                    {BRAND_INFO.commercial.company}
                  </p>
                </div>

                {/* GSTIN */}
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase block mb-1 font-medium">
                    Verified GSTIN Registration
                  </span>
                  <div className="inline-block px-2.5 py-1 bg-[#F5F5F3] border border-[#D5D5D0] text-[11px] font-mono tracking-wider text-pure-black font-semibold">
                    GST : {BRAND_INFO.commercial.gstin}
                  </div>
                </div>

                {/* Corporate Email */}
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase block mb-1 font-medium">
                    Tender & Commercial Email
                  </span>
                  <a
                    href={`mailto:${BRAND_INFO.commercial.email}`}
                    className="inline-flex items-center space-x-2 text-xs sm:text-sm font-sans text-graphite hover:text-pure-black transition-colors font-medium break-all"
                  >
                    <Mail className="w-4 h-4 text-pure-black shrink-0" />
                    <span>{BRAND_INFO.commercial.email}</span>
                  </a>
                </div>

                {/* Corporate Location */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase font-medium">
                      Operational Location
                    </span>
                    <button
                      onClick={() => copyToClipboard(BRAND_INFO.commercial.location, 'comm')}
                      className="inline-flex items-center space-x-1 text-[10px] font-mono text-mid-grey hover:text-pure-black transition-colors cursor-pointer"
                    >
                      {copiedCommAddress ? (
                        <>
                          <Check className="w-3 h-3 text-pure-black" />
                          <span className="text-pure-black font-semibold">COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>COPY</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs font-sans text-graphite leading-relaxed">
                    {BRAND_INFO.commercial.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Division Footnote */}
            <div className="pt-6 mt-6 border-t border-[#EBEBE8]">
              <span className="text-[10px] font-mono tracking-wider text-mid-grey uppercase font-medium block">
                Turnkey Contracts · Structural Alterations · MEP Execution
              </span>
            </div>
          </div>

          {/* DIVISION 3: DECORA — Wall | Window | Floor | Decor */}
          <div className="group relative overflow-hidden bg-white border-2 border-black/80 shadow-[0_15px_45px_-18px_rgba(0,0,0,0.35)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] hover:border-black hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] p-7 sm:p-8 flex flex-col justify-between rounded-sm">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-pure-black to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            {/* Featured Badge */}
            <div className="absolute -top-3 right-5 bg-black text-white text-[9px] font-mono tracking-widest uppercase px-2.5 py-0.5 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.5)]">
              Specialized Unit
            </div>

            <div>
              <div className="flex items-center justify-between border-b border-[#EBEBE8] pb-5 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-pure-black flex items-center justify-center text-white shadow-[0_10px_25px_-8px_rgba(0,0,0,0.5)] shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Sparkles className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block font-medium">
                      DIVISION 03
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif text-pure-black font-bold tracking-wider">
                      DECORA
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-mono tracking-widest text-pure-black px-2 py-0.5 bg-[#F5F5F3] border border-black/10 uppercase font-medium">
                  Decor Studio
                </span>
              </div>

              {/* Company Details */}
              <div className="space-y-5">
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase block mb-1 font-medium">
                    Brand & Affiliation
                  </span>
                  <p className="text-base sm:text-lg font-serif text-pure-black font-semibold">
                    DECORA
                  </p>
                  <p className="text-xs font-sans text-graphite/90 font-medium">
                    Wall | Window | Floor | Decor
                  </p>
                  <p className="text-[11px] font-mono text-mid-grey">
                    A Unit of SD CLASSIC INTERIORS
                  </p>
                </div>

                {/* Direct Telephone */}
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase block mb-1 font-medium">
                    Direct Helpline / WhatsApp
                  </span>
                  <div className="flex flex-col space-y-1.5">
                    <a
                      href={`tel:${BRAND_INFO.decora.phone}`}
                      className="inline-flex items-center space-x-2 text-sm font-sans text-graphite hover:text-pure-black transition-colors font-medium"
                    >
                      <Phone className="w-4 h-4 text-pure-black" />
                      <span>{BRAND_INFO.decora.phoneFormatted}</span>
                    </a>
                    <a
                      href={BRAND_INFO.decora.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-sans text-emerald-700 hover:text-emerald-800 transition-colors font-semibold"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>wa.me/919676164499</span>
                    </a>
                  </div>
                </div>

                {/* Instagram Handle */}
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase block mb-1 font-medium">
                    Official Instagram
                  </span>
                  <a
                    href={BRAND_INFO.decora.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm font-sans text-graphite hover:text-pure-black transition-colors font-medium"
                  >
                    <InstagramIcon className="w-4 h-4 text-pink-600" />
                    <span>{BRAND_INFO.decora.instagramHandle}</span>
                    <ExternalLink className="w-3 h-3 text-mid-grey" />
                  </a>
                </div>

                {/* Specializations Pills */}
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase block mb-1.5 font-medium">
                    Specialized Offerings
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {BRAND_INFO.decora.services.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] font-mono tracking-wide bg-[#F4F4F2] text-pure-black px-2 py-0.5 border border-black/15 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase font-medium">
                      Studio City
                    </span>
                    <button
                      onClick={() => copyToClipboard(BRAND_INFO.decora.location, 'decora')}
                      className="inline-flex items-center space-x-1 text-[10px] font-mono text-mid-grey hover:text-pure-black transition-colors cursor-pointer"
                    >
                      {copiedDecoraLocation ? (
                        <>
                          <Check className="w-3 h-3 text-pure-black" />
                          <span className="text-pure-black font-semibold">COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>COPY</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs font-sans text-graphite leading-relaxed flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-pure-black shrink-0" />
                    <span>{BRAND_INFO.decora.location}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Division Footnote */}
            <div className="pt-6 mt-6 border-t border-[#EBEBE8]">
              <span className="text-[10px] font-mono tracking-wider text-mid-grey uppercase font-medium block">
                The Art Of Beautiful Spaces · Wallpapers · Blinds · Curtains · Floorings
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
