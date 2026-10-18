import React from 'react';
import { 
  ArrowUp, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles,
  Home,
  Building2,
  Clock
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

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Categories', href: '#services' },
    { name: 'Services Brochure', href: '#services' },
    { name: 'Special Offers', href: '#offers' },
    { name: 'Portfolio Gallery', href: '#portfolio' },
    { name: 'About Studio', href: '#about' },
    { name: 'Execution Process', href: '#process' },
    { name: 'Contact Studios', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050505] text-white relative overflow-hidden border-t border-white/10" aria-label="Official Footer">
      {/* Background Architectural Subtle Lines */}
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />

      {/* Top Pre-Footer Signature Banner */}
      <div className="border-b border-white/10 bg-[#080808]/80 backdrop-blur-md relative z-10">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4 text-center lg:text-left">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/15 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] flex items-center justify-center shrink-0 hidden sm:flex">
                <Sparkles className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-serif text-white tracking-wide">
                  Ready to Transform Your Living or Commercial Space?
                </h3>
                <p className="text-xs sm:text-sm font-sans text-light-grey/70 mt-1">
                  Connect directly with our architects & interior design specialists across Visakhapatnam.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={BRAND_INFO.residential.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 hover:-translate-y-0.5 text-white text-xs font-mono tracking-wider uppercase font-semibold transition-all duration-300 shadow-[0_15px_35px_-10px_rgba(16,185,129,0.4)] hover:shadow-[0_20px_45px_-10px_rgba(16,185,129,0.55)] rounded-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Consultation</span>
              </a>

              <a
                href={`tel:${BRAND_INFO.residential.phone}`}
                className="inline-flex items-center space-x-2 px-5 py-3 bg-white text-pure-black hover:bg-light-grey hover:-translate-y-0.5 text-xs font-mono tracking-wider uppercase font-semibold transition-all duration-300 shadow-[0_15px_35px_-10px_rgba(255,255,255,0.25)] hover:shadow-[0_20px_45px_-10px_rgba(255,255,255,0.35)] rounded-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BRAND_INFO.residential.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main 5-Column Grid */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Identity (lg: 4 cols) */}
          <div className="lg:col-span-4 pr-0 lg:pr-6">
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-11 h-11 rounded-sm bg-white/5 border border-white/15 shadow-[0_10px_25px_-10px_rgba(0,0,0,0.6)] p-2 flex items-center justify-center">
                <img
                  src="/images/brand/logo_white_transparent.png"
                  alt="SD Classic Interiors Logo"
                  className="w-full h-full object-contain filter brightness-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/brand/monogram_black.png';
                  }}
                />
              </div>
              <div>
                <span className="font-serif tracking-[0.2em] text-lg font-bold text-white block">
                  SD CLASSIC
                </span>
                <span className="text-[10px] font-mono tracking-[0.28em] text-light-grey/60 uppercase block">
                  Interiors & Infrastructure
                </span>
              </div>
            </div>

            <p className="font-serif italic text-white/90 text-base mb-4 tracking-wider">
              “Imagine Every Inch”
            </p>

            <p className="text-xs font-sans text-light-grey/75 leading-relaxed max-w-sm mb-6">
              Premier turnkey interior architecture, custom luxury modular systems, high-precision civil engineering, and designer wall & soft-furnishing decor (DECORA) across Visakhapatnam and Coastal Andhra Pradesh.
            </p>

            {/* Social Channels */}
            <div className="flex items-center space-x-3">
              <a
                href={BRAND_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm border border-white/15 bg-white/5 flex items-center justify-center text-white hover:text-black hover:bg-white hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(255,255,255,0.35)] transition-all duration-300"
                aria-label="SD Classic Interiors Instagram"
                title="SD Classic Interiors Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={BRAND_INFO.decora.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm border border-white/15 bg-white/5 flex items-center justify-center text-pink-400 hover:text-white hover:bg-pink-600 hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(219,39,119,0.5)] transition-all duration-300"
                aria-label="DECORA Instagram (@decoravizag)"
                title="DECORA Instagram (@decoravizag)"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={BRAND_INFO.residential.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm border border-white/15 bg-white/5 flex items-center justify-center text-emerald-400 hover:text-white hover:bg-emerald-600 hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(16,185,129,0.5)] transition-all duration-300"
                aria-label="WhatsApp Channel"
                title="WhatsApp Channel"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={BRAND_INFO.social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm border border-white/15 bg-white/5 flex items-center justify-center text-white hover:text-black hover:bg-white hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(255,255,255,0.35)] transition-all duration-300"
                aria-label="Official Website"
                title="Official Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (lg: 2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/90 font-semibold block mb-5 pb-2 border-b border-white/10">
              Quick Navigation
            </span>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs font-sans tracking-[0.1em] text-light-grey/70 hover:text-white font-medium transition-colors inline-flex items-center space-x-1.5 group"
                  >
                    <span className="text-white/30 group-hover:text-white transition-colors">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Residential Studio (lg: 2 cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-5 pb-2 border-b border-white/10">
              <Home className="w-3.5 h-3.5 text-white/70" />
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-white/90 font-semibold block">
                Residential
              </span>
            </div>
            <div className="space-y-3 text-xs font-sans text-light-grey/75">
              <p className="font-semibold text-white font-serif text-sm">
                {BRAND_INFO.residential.company}
              </p>
              <p className="flex items-start space-x-2 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-white/50 shrink-0 mt-0.5" />
                <span>{BRAND_INFO.residential.address}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-white/50 shrink-0" />
                <a href={`tel:${BRAND_INFO.residential.phone}`} className="hover:text-white transition-colors text-white font-mono">
                  {BRAND_INFO.residential.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-white/50 shrink-0" />
                <a href={`mailto:${BRAND_INFO.residential.email}`} className="hover:text-white transition-colors break-all">
                  {BRAND_INFO.residential.email}
                </a>
              </p>
              <p className="flex items-center space-x-2 text-[11px] font-mono text-light-grey/50 pt-1">
                <Clock className="w-3 h-3 text-white/40 shrink-0" />
                <span>Mon–Sat: 9:30 AM – 8:30 PM</span>
              </p>
            </div>
          </div>

          {/* Col 4: Commercial & Infra (lg: 2 cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-5 pb-2 border-b border-white/10">
              <Building2 className="w-3.5 h-3.5 text-white/70" />
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-white/90 font-semibold block">
                Commercial
              </span>
            </div>
            <div className="space-y-3 text-xs font-sans text-light-grey/75">
              <p className="font-semibold text-white font-serif text-sm">
                {BRAND_INFO.commercial.company}
              </p>
              <div className="inline-block px-2 py-0.5 bg-white/5 border border-white/15 text-[10px] font-mono tracking-wider text-amber-200 font-medium">
                GST: {BRAND_INFO.commercial.gstin}
              </div>
              <p className="flex items-start space-x-2 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-white/50 shrink-0 mt-0.5" />
                <span>{BRAND_INFO.commercial.location}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-white/50 shrink-0" />
                <a href={`mailto:${BRAND_INFO.commercial.email}`} className="hover:text-white transition-colors break-all">
                  {BRAND_INFO.commercial.email}
                </a>
              </p>
              <p className="text-[10px] font-mono tracking-wide text-light-grey/50 pt-1">
                Civil Tenders · MEP · Turnkey Commercial
              </p>
            </div>
          </div>

          {/* Col 5: DECORA Studio (lg: 2 cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-5 pb-2 border-b border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-white/90 font-bold block">
                DECORA
              </span>
            </div>
            <div className="space-y-3 text-xs font-sans text-light-grey/75">
              <div>
                <p className="font-bold text-white font-serif text-sm tracking-wider">
                  DECORA
                </p>
                <p className="text-[10px] font-mono text-light-grey/60 uppercase">
                  Wall | Window | Floor | Decor
                </p>
                <p className="text-[10px] text-light-grey/50">
                  A Unit of SD Classic Interiors
                </p>
              </div>

              <p className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-white/50 shrink-0" />
                <a href={`tel:${BRAND_INFO.decora.phone}`} className="hover:text-white transition-colors text-white font-mono">
                  {BRAND_INFO.decora.phoneFormatted}
                </a>
              </p>

              <p className="flex items-center space-x-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={BRAND_INFO.decora.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 text-emerald-400 transition-colors font-medium">
                  Direct WhatsApp Chat
                </a>
              </p>

              <p className="flex items-center space-x-2">
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <a href={BRAND_INFO.decora.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 text-pink-400 transition-colors font-medium">
                  {BRAND_INFO.decora.instagramHandle}
                </a>
              </p>

              <div className="flex flex-wrap gap-1 pt-1">
                {BRAND_INFO.decora.services.map((item) => (
                  <span
                    key={item}
                    className="text-[9px] font-mono px-1.5 py-0.5 bg-white/5 text-light-grey/70 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Quality Standards & Craft Highlights Strip */}
        <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-3 border-b border-white/10 text-center">
          <div className="flex items-center justify-center space-x-2 text-[11px] font-mono tracking-wider text-light-grey/80 uppercase py-3 px-2 border border-white/0 hover:border-white/10 hover:bg-white/[0.03] rounded-sm transition-all duration-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>100% Quality Assured</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-[11px] font-mono tracking-wider text-light-grey/80 uppercase py-3 px-2 border border-white/0 hover:border-white/10 hover:bg-white/[0.03] rounded-sm transition-all duration-300">
            <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
            <span>German Precision Edging</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-[11px] font-mono tracking-wider text-light-grey/80 uppercase py-3 px-2 border border-white/0 hover:border-white/10 hover:bg-white/[0.03] rounded-sm transition-all duration-300">
            <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Turnkey Project Delivery</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-[11px] font-mono tracking-wider text-light-grey/80 uppercase py-3 px-2 border border-white/0 hover:border-white/10 hover:bg-white/[0.03] rounded-sm transition-all duration-300">
            <Home className="w-4 h-4 text-purple-400 shrink-0" />
            <span>Zero-Surprise Transparent BOQ</span>
          </div>
        </div>

        {/* Bottom Rights & Back to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-light-grey/60 gap-4">
          <p>© 2026 SD Classic Interiors & DECORA. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <span className="text-[11px] font-mono tracking-widest text-light-grey/50 hidden md:inline font-medium uppercase">
              Architectural Excellence · Visakhapatnam, AP
            </span>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 py-2 px-3.5 border border-white/15 bg-white/5 text-light-grey hover:text-white hover:border-white hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-8px_rgba(255,255,255,0.2)] transition-all duration-300 font-medium rounded-sm cursor-pointer group"
              aria-label="Back to top"
            >
              <span className="text-[10px] font-mono tracking-widest uppercase">BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
