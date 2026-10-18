import React from 'react';
import { ArrowUp, Globe, Phone, Mail, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Offers', href: '#offers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-white text-pure-black relative overflow-hidden" aria-label="Footer">
      {/* Dark Signature Band */}
      <div className="bg-[#000000] border-t border-graphite/40 py-14 sm:py-16 flex items-center justify-center">
        <img
          src="/images/logo2_trimmed.png"
          alt="SD Classic Interiors - Imagine Every Inch"
          className="w-full max-w-[240px] sm:max-w-[320px] h-auto object-contain"
          loading="lazy"
        />
      </div>

      {/* Subtle Architectural Grid Accent */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#E5E5E2]">
          {/* Col 1: Brand & Monogram (lg: 4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 relative">
                <img
                  src="/images/brand/monogram_black.png"
                  alt="SD Classic Interiors Monogram"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/brand/logo_dark_transparent.png';
                  }}
                />
              </div>
              <div>
                <span className="font-serif tracking-[0.2em] text-lg font-semibold text-pure-black block">
                  SD CLASSIC
                </span>
                <span className="text-[10px] font-sans tracking-[0.25em] text-mid-grey uppercase block font-medium">
                  Interiors
                </span>
              </div>
            </div>

            <p className="font-serif italic text-pure-black text-base mb-6 tracking-wider font-medium">
              “Imagine Every Inch”
            </p>

            <p className="text-xs font-sans font-light text-graphite leading-relaxed max-w-sm mb-6">
              Turnkey interior architecture, modular systems, customized furniture and precision civil execution for discerning residential and commercial clients across Visakhapatnam.
            </p>

            <div className="flex items-center space-x-4">
              <a
                href={BRAND_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#D5D5D0] flex items-center justify-center text-graphite hover:text-pure-black hover:border-pure-black hover:bg-black/5 transition-colors"
                aria-label="Visit SD Classic Interiors on Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={BRAND_INFO.social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#D5D5D0] flex items-center justify-center text-graphite hover:text-pure-black hover:border-pure-black hover:bg-black/5 transition-colors"
                aria-label="Official Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (lg: 2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-pure-black font-semibold block mb-6">
              Navigation
            </span>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs font-sans tracking-[0.15em] uppercase text-graphite hover:text-pure-black font-medium transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Residential Studio (lg: 3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-pure-black font-semibold block mb-6">
              Residential Studio
            </span>
            <div className="space-y-3 text-xs font-sans text-graphite">
              <p className="font-semibold text-pure-black font-serif text-sm">
                {BRAND_INFO.residential.company}
              </p>
              <p className="flex items-start space-x-2 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-mid-grey flex-shrink-0 mt-0.5" />
                <span>{BRAND_INFO.residential.address}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-mid-grey flex-shrink-0" />
                <a href={`tel:${BRAND_INFO.residential.phone}`} className="hover:text-pure-black font-medium transition-colors">
                  {BRAND_INFO.residential.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-mid-grey flex-shrink-0" />
                <a href={`mailto:${BRAND_INFO.residential.email}`} className="hover:text-pure-black font-medium transition-colors">
                  {BRAND_INFO.residential.email}
                </a>
              </p>
            </div>
          </div>

          {/* Col 4: Commercial & Infra (lg: 3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-pure-black font-semibold block mb-6">
              Corporate & Infra
            </span>
            <div className="space-y-3 text-xs font-sans text-graphite">
              <p className="font-semibold text-pure-black font-serif text-sm">
                {BRAND_INFO.commercial.company}
              </p>
              <div className="inline-block px-2.5 py-0.5 bg-[#F0F0EE] border border-black/10 text-xs font-mono tracking-wider text-pure-black font-semibold">
                GST NO: {BRAND_INFO.commercial.gstin}
              </div>
              <p className="flex items-start space-x-2 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-mid-grey flex-shrink-0 mt-0.5" />
                <span>{BRAND_INFO.commercial.location}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-mid-grey flex-shrink-0" />
                <a href={`mailto:${BRAND_INFO.commercial.email}`} className="hover:text-pure-black font-medium transition-colors">
                  {BRAND_INFO.commercial.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-mid-grey gap-4">
          <p>© 2026 SD Classic Interiors. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <span className="text-[11px] font-mono tracking-widest text-graphite hidden md:inline font-medium">
              ARCHITECTURAL EXCELLENCE · VISAKHAPATNAM
            </span>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 py-2 px-3 border border-[#D5D5D0] text-graphite hover:text-pure-black hover:border-pure-black hover:bg-black/5 transition-colors font-medium"
              aria-label="Back to top"
            >
              <span className="text-[10px] font-mono tracking-widest uppercase">BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
