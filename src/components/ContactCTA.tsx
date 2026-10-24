import React from 'react';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';

interface ContactCTAProps {
  onDiscussProject: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onDiscussProject }) => {
  return (
    <section
      className="relative py-16 sm:py-36 bg-[#000000] text-white overflow-hidden border-t border-graphite/40"
      aria-label="Closing Call to Action"
    >
      {/* Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/hero_luxury_interior.jpg"
          alt="SD Classic Interiors - Architectural Atmosphere"
          className="w-full h-full object-cover filter brightness-[0.28] contrast-[1.2]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pure-black via-pure-black/80 to-transparent" />
        <div className="absolute inset-0 architectural-grid opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-mid-grey">
              07 / GET IN TOUCH
            </span>
            <div className="w-12 h-[1px] bg-white/20" />
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-[0.03em] text-white mb-6 leading-tight">
            Let’s Build Your<br />Dream Space.
          </h2>

          <p className="text-base sm:text-lg font-sans font-light text-light-grey/90 leading-relaxed mb-10 max-w-xl">
            Get in touch for consultations, enquiries or project discussions. Visit our studio in Pendurthi, Visakhapatnam to experience materials firsthand.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-stretch sm:items-center">
            {/* Primary CTA: Call Now */}
            <a
              href={`tel:${BRAND_INFO.residential.phone}`}
              className="inline-flex items-center justify-center space-x-3 px-7 py-4 bg-white text-pure-black font-sans text-xs tracking-[0.22em] uppercase font-semibold shadow-lg hover:bg-light-grey hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-10px_rgba(255,255,255,0.3)] transition-all duration-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              id="cta-call-btn"
            >
              <Phone className="w-4 h-4" />
              <span>CALL NOW — {BRAND_INFO.residential.phone}</span>
            </a>

            {/* Secondary CTA: WhatsApp */}
            <a
              href={`${BRAND_INFO.residential.whatsappUrl}?text=${encodeURIComponent(
                'Hello SD Classic Interiors, I would like to enquire about your interior design & execution services.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 px-7 py-4 border border-white/40 text-white font-sans text-xs tracking-[0.22em] uppercase hover:border-white hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              id="cta-whatsapp-btn"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP US →</span>
            </a>

            {/* Additional CTA: Discuss Your Project */}
            <button
              onClick={onDiscussProject}
              className="inline-flex items-center justify-center space-x-2 text-xs font-sans tracking-[0.22em] uppercase text-light-grey hover:text-white px-4 py-4 transition-colors"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
