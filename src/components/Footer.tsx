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
import { BRAND_INFO, createWhatsAppHref } from '../data/websiteData';

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

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Our Process', href: '#process' },
    { name: 'Decor Solutions', href: '#decor' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Client Reviews', href: '#reviews' },
    { name: 'Offers', href: '#offers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050505] text-white relative overflow-hidden border-t border-white/10" aria-label="Official Footer">
      {/* Background Architectural Subtle Lines */}
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />

      {/* Top Pre-Footer Signature Banner */}
      <div className="border-b border-white/10 bg-[#080808]/80 backdrop-blur-md relative z-10">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4 text-center lg:text-left">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/15 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] flex items-center justify-center shrink-0 hidden sm:flex">
                <Sparkles className="w-6 h-6 text-white/80" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-serif text-white tracking-wide">
                  Planning a New Space?
                </h3>
                <p className="text-xs sm:text-sm font-sans text-light-grey/70 mt-1">
                  Speak with our design team in Visakhapatnam.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={createWhatsAppHref(
                  BRAND_INFO.residential.whatsappUrl,
                  "Hello SD Classic Interiors! I'd like to discuss an interior project. Please share the next steps."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 border border-white/20 bg-white/5 hover:bg-white hover:text-pure-black text-white text-xs font-mono tracking-wider uppercase font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] rounded-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
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
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-20 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-7 lg:gap-8 pb-8 sm:pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Identity (lg: 4 cols) */}
          <div className="lg:col-span-4 pr-0 lg:pr-6">
            <div className="flex items-center justify-center mb-5 -translate-x-8">
              <div className="w-28 h-28 flex-shrink-0">
                <img
                  src="/images/20261111_220010.png"
                  alt="SD Classic Interiors monogram"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/favicon.svg';
                  }}
                />
              </div>
            </div>

            <p className="text-xs font-sans text-light-grey/75 leading-relaxed max-w-sm mb-6">
              {BRAND_INFO.groupStatement}
            </p>

            {/* Social Channels */}
            <div className="flex items-center space-x-3">
              <a
                href={BRAND_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm border border-white/15 bg-white/5 flex items-center justify-center text-white/80 hover:text-black hover:bg-white hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(255,255,255,0.35)] transition-all duration-300"
                aria-label="SD Classic Interiors Facebook"
                title="SD Classic Interiors Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href={BRAND_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm border border-white/15 bg-white/5 flex items-center justify-center text-white/80 hover:text-black hover:bg-white hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(255,255,255,0.35)] transition-all duration-300"
                aria-label="SD Classic Interiors Instagram"
                title="SD Classic Interiors Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={BRAND_INFO.decora.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm border border-white/15 bg-white/5 flex items-center justify-center text-white/80 hover:text-black hover:bg-white hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(255,255,255,0.35)] transition-all duration-300"
                aria-label="DECORA Instagram (@decoravizag)"
                title="DECORA Instagram (@decoravizag)"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={createWhatsAppHref(
                  BRAND_INFO.residential.whatsappUrl,
                  "Hello SD Classic Interiors! I'd like to connect with your team about an interior project."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm border border-white/15 bg-white/5 flex items-center justify-center text-white/80 hover:text-black hover:bg-white hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(255,255,255,0.35)] transition-all duration-300"
                aria-label="WhatsApp Channel"
                title="WhatsApp Channel"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={BRAND_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm border border-white/15 bg-white/5 flex items-center justify-center text-white/80 hover:text-black hover:bg-white hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(255,255,255,0.35)] transition-all duration-300"
                aria-label="SD Classic Interiors YouTube"
                title="SD Classic Interiors YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>

              <a
                href={BRAND_INFO.social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm border border-white/15 bg-white/5 flex items-center justify-center text-white/80 hover:text-black hover:bg-white hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(255,255,255,0.35)] transition-all duration-300"
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
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-1 md:space-y-2.5 md:gap-y-0">
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
          <div className="hidden md:block lg:col-span-2">
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
                <span>Mon – Sat, 10:00 AM – 8:00 PM<br />Sunday - By Appointment</span>
              </p>
            </div>
          </div>

          {/* Col 4: Commercial & Infra (lg: 2 cols) */}
          <div className="hidden md:block lg:col-span-2">
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
              <p className="flex items-start space-x-2 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-white/50 shrink-0 mt-0.5" />
                <span>{BRAND_INFO.commercial.location}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-white/50 shrink-0" />
                <a href={`tel:${BRAND_INFO.commercial.phone}`} className="hover:text-white transition-colors text-white font-mono">
                  {BRAND_INFO.commercial.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-white/50 shrink-0" />
                <a href={`mailto:${BRAND_INFO.commercial.email}`} className="hover:text-white transition-colors break-all">
                  {BRAND_INFO.commercial.email}
                </a>
              </p>
              <p className="text-[10px] font-mono tracking-wide text-light-grey/50 pt-1">
                GSTIN: {BRAND_INFO.commercial.gstin}
              </p>
            </div>
          </div>

          {/* Col 5: DECORA Studio (lg: 2 cols) */}
          <div className="hidden md:block lg:col-span-2">
            <div className="flex items-center space-x-2 mb-5 pb-2 border-b border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-white/70" />
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-white/90 font-bold block">
                DECOR SOLUTIONS
              </span>
            </div>
            <div className="space-y-3 text-xs font-sans text-light-grey/75">
              <p className="font-semibold text-white font-serif text-sm">
                {BRAND_INFO.decora.brand}
              </p>
              <p className="flex items-start space-x-2 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-white/50 shrink-0 mt-0.5" />
                <span>{BRAND_INFO.decora.location}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-white/50 shrink-0" />
                <a href={`tel:${BRAND_INFO.decora.phone}`} className="hover:text-white transition-colors text-white font-mono">
                  {BRAND_INFO.decora.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-white/50 shrink-0" />
                <a href={`mailto:${BRAND_INFO.decora.email}`} className="hover:text-white transition-colors break-all">
                  {BRAND_INFO.decora.email}
                </a>
              </p>
              <p className="flex items-center space-x-2 text-[11px] font-mono text-light-grey/50 pt-1">
                <Clock className="w-3 h-3 text-white/40 shrink-0" />
                <span>Mon – Sat, 10:00 AM – 8:00 PM<br />Sunday - By Appointment</span>
              </p>
            </div>
          </div>

        </div>

        {/* Quality Standards & Craft Highlights Strip */}
        <div className="hidden md:grid py-8 grid-cols-4 gap-3 border-b border-white/10 text-center">
          <div className="flex items-center justify-center space-x-2 text-[11px] font-mono tracking-wider text-light-grey/80 uppercase py-3 px-2 border border-white/0 hover:border-white/10 hover:bg-white/[0.03] rounded-sm transition-all duration-300">
            <ShieldCheck className="w-4 h-4 text-white/70 shrink-0" />
            <span>100% Quality Assured</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-[11px] font-mono tracking-wider text-light-grey/80 uppercase py-3 px-2 border border-white/0 hover:border-white/10 hover:bg-white/[0.03] rounded-sm transition-all duration-300">
            <Sparkles className="w-4 h-4 text-white/70 shrink-0" />
            <span>Professional Execution</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-[11px] font-mono tracking-wider text-light-grey/80 uppercase py-3 px-2 border border-white/0 hover:border-white/10 hover:bg-white/[0.03] rounded-sm transition-all duration-300">
            <Building2 className="w-4 h-4 text-white/70 shrink-0" />
            <span>Turnkey Project Delivery</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-[11px] font-mono tracking-wider text-light-grey/80 uppercase py-3 px-2 border border-white/0 hover:border-white/10 hover:bg-white/[0.03] rounded-sm transition-all duration-300">
            <Home className="w-4 h-4 text-white/70 shrink-0" />
            <span>Clear Communication</span>
          </div>
        </div>

        {/* Bottom Rights & Back to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-light-grey/60 gap-4">
          <p>© 2026 SD Classic Interiors & DECORA. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <span className="text-[11px] font-mono tracking-widest text-light-grey/50 hidden md:inline font-medium uppercase">
              Visakhapatnam, Andhra Pradesh
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
