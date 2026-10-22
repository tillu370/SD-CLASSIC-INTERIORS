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
  Sparkles,
  Clock,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';

// Monochrome Instagram Icon (Black / White / Grey only)
const MonochromeInstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
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
  const [copiedGstin, setCopiedGstin] = useState(false);

  const copyToClipboard = (text: string, type: 'res' | 'comm' | 'decora' | 'gstin') => {
    navigator.clipboard.writeText(text);
    if (type === 'res') {
      setCopiedResAddress(true);
      setTimeout(() => setCopiedResAddress(false), 2200);
    } else if (type === 'comm') {
      setCopiedCommAddress(true);
      setTimeout(() => setCopiedCommAddress(false), 2200);
    } else if (type === 'decora') {
      setCopiedDecoraLocation(true);
      setTimeout(() => setCopiedDecoraLocation(false), 2200);
    } else if (type === 'gstin') {
      setCopiedGstin(true);
      setTimeout(() => setCopiedGstin(false), 2200);
    }
  };

  const scrollToDivision = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="contact" className="bg-pure-black text-white overflow-hidden scroll-mt-20">
      {/* ─────────────────────────────────────────────────────────────
          SECTION DIRECTORY HEADER & MONOCHROME DIVISION SELECTOR
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 bg-pure-black border-t border-graphite/40 border-b border-graphite/40">
        <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-3 mb-4 px-4 py-1.5 rounded-full border border-graphite/60 bg-charcoal/40">
            <span className="text-[11px] font-mono tracking-[0.28em] uppercase text-light-grey">
              DIRECTORY · SPECIALIZED DIVISIONS
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-[0.02em] text-white mb-4">
            Connect With Our Studios
          </h2>
          
          <p className="text-sm sm:text-base font-sans font-light text-light-grey/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Choose between our residential interior design showroom, our commercial construction division, or our specialized soft furnishings &amp; wall decor studio (DECORA).
          </p>

          {/* Clean Monochrome Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
            <button
              onClick={() => scrollToDivision('division-residential')}
              className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-charcoal/80 border border-graphite hover:border-white hover:bg-white hover:text-pure-black text-white text-xs font-mono tracking-widest uppercase transition-all duration-300 group"
            >
              <Home className="w-3.5 h-3.5 text-mid-grey group-hover:text-pure-black transition-colors" />
              <span>01 · Residential</span>
              <ChevronDown className="w-3 h-3 text-mid-grey group-hover:text-pure-black transition-colors" />
            </button>
            <button
              onClick={() => scrollToDivision('division-commercial')}
              className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-charcoal/80 border border-graphite hover:border-white hover:bg-white hover:text-pure-black text-white text-xs font-mono tracking-widest uppercase transition-all duration-300 group"
            >
              <Building2 className="w-3.5 h-3.5 text-mid-grey group-hover:text-pure-black transition-colors" />
              <span>02 · Commercial &amp; Infra</span>
              <ChevronDown className="w-3 h-3 text-mid-grey group-hover:text-pure-black transition-colors" />
            </button>
            <button
              onClick={() => scrollToDivision('division-decora')}
              className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-charcoal/80 border border-graphite hover:border-white hover:bg-white hover:text-pure-black text-white text-xs font-mono tracking-widest uppercase transition-all duration-300 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-mid-grey group-hover:text-pure-black transition-colors" />
              <span>03 · DECORA Studio</span>
              <ChevronDown className="w-3 h-3 text-mid-grey group-hover:text-pure-black transition-colors" />
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SCREEN 1: RESIDENTIAL INTERIORS — SD CLASSIC INTERIORS
      ───────────────────────────────────────────────────────────── */}
      <section
        id="division-residential"
        className="relative min-h-screen py-24 sm:py-32 flex items-center border-b border-graphite/40"
        aria-label="Division 01: Residential Interiors"
      >
        {/* Clearly Visible Architectural Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/divisions/division_residential.jpg"
            alt="SD Classic Interiors - Residential Living Showroom"
            className="w-full h-full object-cover filter brightness-[0.78] contrast-[1.08]"
            loading="lazy"
          />
          {/* Subtle directional gradient: dark on left for text readability, open and visible on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-pure-black via-pure-black/85 via-45% to-pure-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-pure-black via-transparent to-pure-black/60" />
        </div>

        {/* Ambient Division Watermark */}
        <div 
          className="absolute bottom-6 right-6 sm:bottom-10 sm:right-12 text-8xl sm:text-[14rem] font-serif text-white/[0.06] select-none pointer-events-none font-bold"
          aria-hidden="true"
        >
          01
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Division Identity */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono tracking-[0.25em] uppercase text-white px-3.5 py-1 bg-charcoal/80 border border-graphite rounded-full">
                  DIVISION 01 · RESIDENTIAL
                </span>
                <span className="text-[11px] font-mono tracking-widest uppercase text-mid-grey">
                  EST. 2019
                </span>
              </div>

              <h3 className="text-4xl sm:text-6xl font-serif tracking-[0.02em] text-white leading-tight">
                SD CLASSIC<br />INTERIORS
              </h3>

              <div className="inline-block border-l-2 border-white pl-4 py-1">
                <p className="text-sm sm:text-base font-serif text-white italic tracking-wide">
                  "Imagine Every Inch" — Bespoke Villas, Luxury Apartments &amp; Modular Living
                </p>
              </div>

              <p className="text-sm sm:text-base font-sans font-light text-light-grey/90 leading-relaxed max-w-xl">
                Experience bespoke Italian finishes, engineered woodwork, and architectural living firsthand. Visit our flagship studio showroom in Pendurthi, Visakhapatnam to touch, feel and customize your dream residence.
              </p>

              {/* Monochrome Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 bg-pure-black/80 border border-graphite/80 rounded-sm backdrop-blur-sm">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block mb-0.5">PROJECTS</span>
                  <span className="text-base sm:text-lg font-serif text-white font-semibold">100+ Handed Over</span>
                </div>
                <div className="p-3.5 bg-pure-black/80 border border-graphite/80 rounded-sm backdrop-blur-sm">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block mb-0.5">STUDIO</span>
                  <span className="text-base sm:text-lg font-serif text-white font-semibold">Material Experience</span>
                </div>
                <div className="p-3.5 bg-pure-black/80 border border-graphite/80 rounded-sm backdrop-blur-sm col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block mb-0.5">LOCATION</span>
                  <span className="text-base sm:text-lg font-serif text-white font-semibold">Pendurthi, Vizag</span>
                </div>
              </div>

              {/* Visiting Hours */}
              <div className="flex items-center space-x-2 text-xs font-mono text-mid-grey pt-1">
                <Clock className="w-4 h-4 text-light-grey" />
                <span>Showroom Hours: Mon – Sun, 9:30 AM – 8:30 PM</span>
              </div>
            </div>

            {/* Right Column: Monochrome Luxury Console */}
            <div className="lg:col-span-6">
              <div className="bg-pure-black/85 backdrop-blur-md border border-graphite p-7 sm:p-9 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:border-white/40 transition-all duration-300">
                <div className="flex items-center justify-between border-b border-graphite/60 pb-5 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-md bg-charcoal border border-graphite flex items-center justify-center text-white">
                      <Home className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block">
                        SHOWROOM DIRECTORY
                      </span>
                      <h4 className="text-base sm:text-lg font-serif text-white font-medium">
                        Residential Studio Desk
                      </h4>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-light-grey border border-graphite bg-charcoal/60 px-2.5 py-1 rounded-sm uppercase">
                    Open For Visits
                  </span>
                </div>

                <div className="space-y-6">
                  {/* Primary Call & WhatsApp: Clean Monochrome */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <a
                      href={`tel:${BRAND_INFO.residential.phone}`}
                      className="inline-flex items-center justify-center space-x-2 px-5 py-4 bg-white text-pure-black font-sans text-xs tracking-[0.2em] uppercase font-bold rounded-sm hover:bg-light-grey transition-all shadow-md hover:-translate-y-0.5"
                    >
                      <Phone className="w-4 h-4" />
                      <span>CALL {BRAND_INFO.residential.phone}</span>
                    </a>
                    <a
                      href={`${BRAND_INFO.residential.whatsappUrl}?text=${encodeURIComponent(
                        'Hello SD Classic Interiors, I would like to book a residential interior consultation.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 px-5 py-4 bg-charcoal text-white border border-graphite hover:border-white hover:bg-white hover:text-pure-black font-sans text-xs tracking-[0.2em] uppercase font-semibold rounded-sm transition-all shadow-md hover:-translate-y-0.5"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WHATSAPP STUDIO</span>
                    </a>
                  </div>

                  {/* Direct Line */}
                  <div className="pt-1">
                    <span className="text-[10px] font-mono tracking-widest text-mid-grey uppercase block mb-1">
                      Direct Showroom Line
                    </span>
                    <a
                      href={`tel:${BRAND_INFO.residential.phone}`}
                      className="inline-flex items-center space-x-2 text-base font-serif text-white hover:text-light-grey transition-colors"
                    >
                      <Phone className="w-4 h-4 text-mid-grey" />
                      <span>{BRAND_INFO.residential.phoneFormatted}</span>
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-mid-grey uppercase block mb-1">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${BRAND_INFO.residential.email}`}
                      className="inline-flex items-center space-x-2 text-xs sm:text-sm font-sans text-light-grey hover:text-white transition-colors break-all"
                    >
                      <Mail className="w-4 h-4 text-mid-grey shrink-0" />
                      <span>{BRAND_INFO.residential.email}</span>
                    </a>
                  </div>

                  {/* Showroom Address */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono tracking-widest text-mid-grey uppercase">
                        Showroom Address
                      </span>
                      <button
                        onClick={() => copyToClipboard(BRAND_INFO.residential.address, 'res')}
                        className="inline-flex items-center space-x-1 text-[10px] font-mono text-mid-grey hover:text-white transition-colors cursor-pointer px-2 py-0.5 bg-charcoal border border-graphite rounded-sm"
                      >
                        {copiedResAddress ? (
                          <>
                            <Check className="w-3 h-3 text-white" />
                            <span className="text-white font-semibold">COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>COPY ADDRESS</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-xs font-sans text-light-grey/90 leading-relaxed mb-2.5">
                      {BRAND_INFO.residential.address}
                    </p>
                    <a
                      href={BRAND_INFO.residential.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-mid-grey hover:text-white transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-light-grey" />
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3 text-mid-grey" />
                    </a>
                  </div>
                </div>

                {/* Console Footnote */}
                <div className="pt-6 mt-6 border-t border-graphite/60 flex items-center justify-between text-[11px] font-mono text-mid-grey">
                  <span>SD CLASSIC INTERIORS</span>
                  <span>PENDURTHI SHOWROOM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SCREEN 2: COMMERCIAL & INFRASTRUCTURE — SD CONSTRUCTIONS & INFRA
      ───────────────────────────────────────────────────────────── */}
      <section
        id="division-commercial"
        className="relative min-h-screen py-24 sm:py-32 flex items-center border-b border-graphite/40"
        aria-label="Division 02: Commercial Construction & Infrastructure"
      >
        {/* Clearly Visible Architectural Corporate Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/divisions/division_commercial.jpg"
            alt="SD Constructions & Infra - Commercial Architecture"
            className="w-full h-full object-cover filter brightness-[0.78] contrast-[1.08]"
            loading="lazy"
          />
          {/* Subtle directional gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-pure-black via-pure-black/85 via-45% to-pure-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-pure-black via-transparent to-pure-black/60" />
        </div>

        {/* Ambient Division Watermark */}
        <div 
          className="absolute bottom-6 right-6 sm:bottom-10 sm:right-12 text-8xl sm:text-[14rem] font-serif text-white/[0.06] select-none pointer-events-none font-bold"
          aria-hidden="true"
        >
          02
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Division Identity */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono tracking-[0.25em] uppercase text-white px-3.5 py-1 bg-charcoal/80 border border-graphite rounded-full">
                  DIVISION 02 · COMMERCIAL &amp; INFRA
                </span>
                <span className="text-[11px] font-mono tracking-widest uppercase text-mid-grey">
                  CIVIL &amp; TURNKEY
                </span>
              </div>

              <h3 className="text-4xl sm:text-6xl font-serif tracking-[0.02em] text-white leading-tight">
                SD CONSTRUCTIONS<br />&amp; INFRA
              </h3>

              <div className="inline-block border-l-2 border-white pl-4 py-1">
                <p className="text-sm sm:text-base font-serif text-white italic tracking-wide">
                  Corporate Fit-Outs · Turnkey Commercial Contracts · Structural Execution · MEP Works
                </p>
              </div>

              <p className="text-sm sm:text-base font-sans font-light text-light-grey/90 leading-relaxed max-w-xl">
                Our heavy commercial and infrastructure division delivers comprehensive turnkey execution for corporate offices, retail hubs, commercial complexes, and architectural alterations across Visakhapatnam and coastal Andhra Pradesh.
              </p>

              {/* Verified GSTIN Banner: Strict Monochrome */}
              <div className="p-4 bg-pure-black/80 border border-graphite rounded-md flex items-center justify-between backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-5 h-5 text-white shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block">
                      VERIFIED GOVERNMENT REGISTRATION
                    </span>
                    <span className="text-sm sm:text-base font-mono font-semibold text-white tracking-wider">
                      GSTIN : {BRAND_INFO.commercial.gstin}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(BRAND_INFO.commercial.gstin, 'gstin')}
                  className="px-3 py-1 text-[10px] font-mono uppercase bg-charcoal hover:bg-white hover:text-pure-black text-white border border-graphite rounded-sm transition-all"
                >
                  {copiedGstin ? 'COPIED' : 'COPY'}
                </button>
              </div>

              {/* Core Commercial Capabilities */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 bg-pure-black/80 border border-graphite/80 rounded-sm backdrop-blur-sm">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block mb-0.5">SPECIALTY</span>
                  <span className="text-xs sm:text-sm font-sans text-white font-medium">Turnkey Commercial Execution</span>
                </div>
                <div className="p-3.5 bg-pure-black/80 border border-graphite/80 rounded-sm backdrop-blur-sm">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block mb-0.5">COMPLIANCE</span>
                  <span className="text-xs sm:text-sm font-sans text-white font-medium">GST Registered &amp; Verified</span>
                </div>
              </div>
            </div>

            {/* Right Column: Monochrome Corporate Console */}
            <div className="lg:col-span-6">
              <div className="bg-pure-black/85 backdrop-blur-md border border-graphite p-7 sm:p-9 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:border-white/40 transition-all duration-300">
                <div className="flex items-center justify-between border-b border-graphite/60 pb-5 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-md bg-charcoal border border-graphite flex items-center justify-center text-white">
                      <Building2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block">
                        CORPORATE CONTACT
                      </span>
                      <h4 className="text-base sm:text-lg font-serif text-white font-medium">
                        Commercial &amp; Tender Desk
                      </h4>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-light-grey border border-graphite bg-charcoal/60 px-2.5 py-1 rounded-sm uppercase">
                    Turnkey Division
                  </span>
                </div>

                <div className="space-y-6">
                  {/* Action Buttons: Clean Monochrome */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <a
                      href={`mailto:${BRAND_INFO.commercial.email}?subject=Commercial%20Project%20Enquiry`}
                      className="inline-flex items-center justify-center space-x-2 px-5 py-4 bg-white text-pure-black font-sans text-xs tracking-[0.2em] uppercase font-bold rounded-sm hover:bg-light-grey transition-all shadow-md hover:-translate-y-0.5"
                    >
                      <Mail className="w-4 h-4" />
                      <span>EMAIL TENDER DESK</span>
                    </a>
                    <a
                      href={`${BRAND_INFO.residential.whatsappUrl}?text=${encodeURIComponent(
                        'Hello SD Constructions & Infra, I would like to discuss a commercial project / turnkey construction.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 px-5 py-4 bg-charcoal text-white border border-graphite hover:border-white hover:bg-white hover:text-pure-black font-sans text-xs tracking-[0.2em] uppercase font-semibold rounded-sm transition-all shadow-md hover:-translate-y-0.5"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WHATSAPP INFRA</span>
                    </a>
                  </div>

                  {/* Corporate Entity Name */}
                  <div className="pt-1">
                    <span className="text-[10px] font-mono tracking-widest text-mid-grey uppercase block mb-1">
                      Corporate Entity
                    </span>
                    <p className="text-base font-serif text-white font-medium">
                      {BRAND_INFO.commercial.company}
                    </p>
                  </div>

                  {/* Commercial Email */}
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-mid-grey uppercase block mb-1">
                      Commercial &amp; Tender Email
                    </span>
                    <a
                      href={`mailto:${BRAND_INFO.commercial.email}`}
                      className="inline-flex items-center space-x-2 text-xs sm:text-sm font-sans text-light-grey hover:text-white transition-colors break-all"
                    >
                      <Mail className="w-4 h-4 text-mid-grey shrink-0" />
                      <span>{BRAND_INFO.commercial.email}</span>
                    </a>
                  </div>

                  {/* Operational Location */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono tracking-widest text-mid-grey uppercase">
                        Operational Headquarters
                      </span>
                      <button
                        onClick={() => copyToClipboard(BRAND_INFO.commercial.location, 'comm')}
                        className="inline-flex items-center space-x-1 text-[10px] font-mono text-mid-grey hover:text-white transition-colors cursor-pointer px-2 py-0.5 bg-charcoal border border-graphite rounded-sm"
                      >
                        {copiedCommAddress ? (
                          <>
                            <Check className="w-3 h-3 text-white" />
                            <span className="text-white font-semibold">COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>COPY LOCATION</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-xs font-sans text-light-grey/90 leading-relaxed mb-2.5">
                      {BRAND_INFO.commercial.location}
                    </p>
                    <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-mid-grey">
                      <MapPin className="w-3.5 h-3.5 text-light-grey" />
                      <span>Visakhapatnam, Andhra Pradesh</span>
                    </span>
                  </div>
                </div>

                {/* Console Footnote */}
                <div className="pt-6 mt-6 border-t border-graphite/60 flex items-center justify-between text-[11px] font-mono text-mid-grey">
                  <span>SD CONSTRUCTIONS &amp; INFRA</span>
                  <span>GSTIN VERIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SCREEN 3: SPECIALIZED DECOR STUDIO — DECORA
      ───────────────────────────────────────────────────────────── */}
      <section
        id="division-decora"
        className="relative min-h-screen py-24 sm:py-32 flex items-center"
        aria-label="Division 03: DECORA Studio"
      >
        {/* Clearly Visible Boutique Decor Studio Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/divisions/division_decora.jpg"
            alt="DECORA - Wall, Window, Floor & Decor Showroom"
            className="w-full h-full object-cover filter brightness-[0.78] contrast-[1.08]"
            loading="lazy"
          />
          {/* Subtle directional gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-pure-black via-pure-black/85 via-45% to-pure-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-pure-black via-transparent to-pure-black/60" />
        </div>

        {/* Ambient Division Watermark */}
        <div 
          className="absolute bottom-6 right-6 sm:bottom-10 sm:right-12 text-8xl sm:text-[14rem] font-serif text-white/[0.06] select-none pointer-events-none font-bold"
          aria-hidden="true"
        >
          03
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Division Identity */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono tracking-[0.25em] uppercase text-white px-3.5 py-1 bg-charcoal/80 border border-graphite rounded-full">
                  DIVISION 03 · SPECIALIZED DECOR
                </span>
                <span className="text-[11px] font-mono tracking-widest uppercase text-mid-grey">
                  STUDIO UNIT
                </span>
              </div>

              <div>
                <h3 className="text-5xl sm:text-7xl font-serif tracking-[0.05em] text-white leading-none mb-2">
                  DECORA
                </h3>
                <p className="text-sm sm:text-base font-mono tracking-widest text-light-grey uppercase">
                  Wall · Window · Floor · Decor
                </p>
                <p className="text-xs font-mono text-mid-grey uppercase tracking-widest mt-1">
                  A Unit of SD CLASSIC INTERIORS
                </p>
              </div>

              <div className="inline-block border-l-2 border-white pl-4 py-1">
                <p className="text-sm sm:text-base font-serif text-white italic tracking-wide">
                  "The Art Of Beautiful Spaces" — Curated soft furnishings, wallpapers &amp; architectural surfaces
                </p>
              </div>

              <p className="text-sm sm:text-base font-sans font-light text-light-grey/90 leading-relaxed max-w-xl">
                DECORA is our specialized boutique studio dedicated to sensory soft furnishings. From imported wallpapers and custom motorized blinds to luxury linen drapery and acoustic wooden floorings, we complete every millimeter of interior spaces.
              </p>

              {/* Specialization Tags in Monochrome */}
              <div className="space-y-2 pt-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block">
                  SPECIALIZED PORTFOLIO
                </span>
                <div className="flex flex-wrap gap-2">
                  {BRAND_INFO.decora.services.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono tracking-wide bg-charcoal/80 text-light-grey px-3 py-1 rounded-sm border border-graphite"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="text-xs font-mono tracking-wide bg-charcoal/80 text-light-grey px-3 py-1 rounded-sm border border-graphite">
                    Acoustic Panels
                  </span>
                  <span className="text-xs font-mono tracking-wide bg-charcoal/80 text-light-grey px-3 py-1 rounded-sm border border-graphite">
                    Motorized Blinds
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Monochrome DECORA Console */}
            <div className="lg:col-span-6">
              <div className="bg-pure-black/85 backdrop-blur-md border border-graphite p-7 sm:p-9 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:border-white/40 transition-all duration-300">
                <div className="flex items-center justify-between border-b border-graphite/60 pb-5 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-md bg-charcoal border border-graphite flex items-center justify-center text-white">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block">
                        DECOR BOUTIQUE DIRECTORY
                      </span>
                      <h4 className="text-base sm:text-lg font-serif text-white font-medium">
                        DECORA Studio Helpline
                      </h4>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-light-grey border border-graphite bg-charcoal/60 px-2.5 py-1 rounded-sm uppercase">
                    Soft Furnishings
                  </span>
                </div>

                <div className="space-y-6">
                  {/* Action Buttons: Clean Monochrome */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <a
                      href={`tel:${BRAND_INFO.decora.phone}`}
                      className="inline-flex items-center justify-center space-x-2 px-5 py-4 bg-white text-pure-black font-sans text-xs tracking-[0.2em] uppercase font-bold rounded-sm hover:bg-light-grey transition-all shadow-md hover:-translate-y-0.5"
                    >
                      <Phone className="w-4 h-4" />
                      <span>CALL {BRAND_INFO.decora.phone}</span>
                    </a>
                    <a
                      href={BRAND_INFO.decora.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 px-5 py-4 bg-charcoal text-white border border-graphite hover:border-white hover:bg-white hover:text-pure-black font-sans text-xs tracking-[0.2em] uppercase font-semibold rounded-sm transition-all shadow-md hover:-translate-y-0.5"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WHATSAPP DECORA</span>
                    </a>
                  </div>

                  {/* Direct Helpline */}
                  <div className="pt-1">
                    <span className="text-[10px] font-mono tracking-widest text-mid-grey uppercase block mb-1">
                      Direct Decor Helpline
                    </span>
                    <a
                      href={`tel:${BRAND_INFO.decora.phone}`}
                      className="inline-flex items-center space-x-2 text-base font-serif text-white hover:text-light-grey transition-colors"
                    >
                      <Phone className="w-4 h-4 text-mid-grey" />
                      <span>{BRAND_INFO.decora.phoneFormatted}</span>
                    </a>
                  </div>

                  {/* Official Instagram (Monochrome Icon) */}
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-mid-grey uppercase block mb-1">
                      Official Instagram Gallery
                    </span>
                    <a
                      href={BRAND_INFO.decora.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-sm font-sans text-light-grey hover:text-white transition-colors"
                    >
                      <MonochromeInstagramIcon className="w-4 h-4 text-white" />
                      <span className="font-mono text-white">{BRAND_INFO.decora.instagramHandle}</span>
                      <ExternalLink className="w-3 h-3 text-mid-grey" />
                    </a>
                  </div>

                  {/* Location */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono tracking-widest text-mid-grey uppercase">
                        Studio City
                      </span>
                      <button
                        onClick={() => copyToClipboard(BRAND_INFO.decora.location, 'decora')}
                        className="inline-flex items-center space-x-1 text-[10px] font-mono text-mid-grey hover:text-white transition-colors cursor-pointer px-2 py-0.5 bg-charcoal border border-graphite rounded-sm"
                      >
                        {copiedDecoraLocation ? (
                          <>
                            <Check className="w-3 h-3 text-white" />
                            <span className="text-white font-semibold">COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>COPY LOCATION</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-xs font-sans text-light-grey/90 leading-relaxed mb-2.5">
                      {BRAND_INFO.decora.location}
                    </p>
                    <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-mid-grey">
                      <MapPin className="w-3.5 h-3.5 text-light-grey" />
                      <span>Pendurthi &amp; Visakhapatnam, Andhra Pradesh</span>
                    </span>
                  </div>
                </div>

                {/* Console Footnote */}
                <div className="pt-6 mt-6 border-t border-graphite/60 flex items-center justify-between text-[11px] font-mono text-mid-grey">
                  <span>DECORA STUDIO</span>
                  <span>WALL · WINDOW · FLOOR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
