import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ExternalLink,
  Building2,
  Home,
  Sparkles,
  Clock,
  ChevronDown
} from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';

export const ContactSection: React.FC = () => {
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
      <section className="relative pt-8 pb-6 sm:pt-12 sm:pb-8 bg-pure-black border-t border-graphite/40 border-b border-graphite/40">
        <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-3 mb-2 px-3 py-1 rounded-full border border-graphite/60 bg-charcoal/40">
            <span className="text-[11px] font-mono tracking-[0.28em] uppercase text-light-grey">
              CONTACT
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-serif tracking-[0.02em] text-white mb-4">
            Get in Touch
          </h2>

          <p className="text-xs sm:text-sm font-sans font-light text-light-grey/80 leading-relaxed max-w-2xl mx-auto mb-4 sm:mb-6">
            Connect with our dedicated teams for residential interiors, commercial and infrastructure projects, and complete décor solutions.
          </p>

          {/* Clean Monochrome Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
            <button
              onClick={() => scrollToDivision('division-residential')}
              className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-charcoal/80 border border-graphite hover:border-white hover:bg-white hover:text-pure-black text-white text-xs font-mono tracking-widest uppercase transition-all duration-300 group"
            >
              <Home className="w-3.5 h-3.5 text-mid-grey group-hover:text-pure-black transition-colors" />
              <span>01 · Residential</span>
              <ChevronDown className="w-3 h-3 text-mid-grey group-hover:text-pure-black transition-colors" />
            </button>
            <button
              onClick={() => scrollToDivision('division-commercial')}
              className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-charcoal/80 border border-graphite hover:border-white hover:bg-white hover:text-pure-black text-white text-xs font-mono tracking-widest uppercase transition-all duration-300 group"
            >
              <Building2 className="w-3.5 h-3.5 text-mid-grey group-hover:text-pure-black transition-colors" />
              <span>02 · Commercial &amp; Infra</span>
              <ChevronDown className="w-3 h-3 text-mid-grey group-hover:text-pure-black transition-colors" />
            </button>
            <button
              onClick={() => scrollToDivision('division-decora')}
              className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-charcoal/80 border border-graphite hover:border-white hover:bg-white hover:text-pure-black text-white text-xs font-mono tracking-widest uppercase transition-all duration-300 group"
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
        className="relative py-6 sm:py-10 flex items-center border-b border-graphite/40"
        aria-label="Division 01: Residential Interiors"
      >
        {/* Clearly Visible Architectural Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/divisions/division_residential.jpg"
            alt="SD Classic Interiors - Residential Living Showroom"
            className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
            loading="lazy"
          />
          {/* Subtle directional gradient: dark on left for text readability, open and visible on right */}
          <div className="absolute inset-0 bg-pure-black/40 lg:hidden" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-pure-black/80 via-pure-black/50 via-45% to-pure-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-pure-black/55 via-transparent to-pure-black/30" />
        </div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
            {/* Left Column: Division Identity */}
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="text-xs font-mono tracking-[0.25em] uppercase text-white px-3.5 py-1 bg-charcoal/80 border border-graphite rounded-full">
                  DIVISION 01 · RESIDENTIAL INTERIORS
                </span>
              </div>

              <img
                src="/images/brand/sd-classic-interiors-wordmark-white.png"
                alt="SD Classic Interiors"
                className="h-16 sm:h-20 w-auto object-contain object-left"
              />

              <div className="inline-block border-l-2 border-white pl-4 py-1">
                <p className="text-sm sm:text-base font-serif text-white italic tracking-wide">
                  Complete Home Interiors, Thoughtfully Designed
                </p>
              </div>

              <p className="text-xs sm:text-base font-sans font-light text-light-grey/90 leading-relaxed max-w-xl">
                We provide end-to-end residential interior solutions, bringing together creative design, customised concepts, material selection and expert execution to transform houses into beautiful, functional homes.
              </p>

              {/* Monochrome Badges */}
              <div className="hidden sm:grid grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 bg-pure-black/80 border border-graphite/80 rounded-sm backdrop-blur-sm">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block mb-0.5">SPECIALITY</span>
                  <span className="text-base sm:text-lg font-serif text-white font-semibold">Residential Interiors</span>
                </div>
                <div className="p-3.5 bg-pure-black/80 border border-graphite/80 rounded-sm backdrop-blur-sm">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block mb-0.5">SERVICES</span>
                  <span className="text-base sm:text-lg font-serif text-white font-semibold">Design &amp; Turnkey Execution</span>
                </div>
                <div className="p-3.5 bg-pure-black/80 border border-graphite/80 rounded-sm backdrop-blur-sm col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block mb-0.5">LOCATION</span>
                  <span className="text-base sm:text-lg font-serif text-white font-semibold">Pendurthi, Visakhapatnam</span>
                </div>
              </div>

              {/* Visiting Hours */}
              <div className="flex items-center space-x-2 text-xs font-mono text-mid-grey pt-1">
                <Clock className="w-4 h-4 text-light-grey" />
                <span>Showroom Hours: Mon – Sun, 9:30 AM – 8:30 PM (Sunday by appointment)</span>
              </div>
            </div>

            {/* Right Column: Monochrome Luxury Console */}
            <div className="lg:col-span-6">
              <div className="bg-pure-black/85 backdrop-blur-md border border-graphite p-4 sm:p-6 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:border-white/40 transition-all duration-300">
                <div className="space-y-3 sm:space-y-4">
                  {/* Primary Call & WhatsApp: Clean Monochrome */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <a
                      href={`tel:${BRAND_INFO.residential.phone}`}
                      className="inline-flex items-center justify-center space-x-2 px-5 py-3 bg-white text-pure-black font-sans text-xs tracking-[0.2em] uppercase font-bold rounded-sm hover:bg-light-grey transition-all shadow-md hover:-translate-y-0.5"
                    >
                      <Phone className="w-4 h-4" />
                      <span>CALL US</span>
                    </a>
                    <a
                      href={`${BRAND_INFO.residential.whatsappUrl}?text=${encodeURIComponent(
                        'Hello SD Classic Interiors, I would like to book a residential interior consultation.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 px-5 py-3 bg-charcoal text-white border border-graphite hover:border-white hover:bg-white hover:text-pure-black font-sans text-xs tracking-[0.2em] uppercase font-semibold rounded-sm transition-all shadow-md hover:-translate-y-0.5"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WHATSAPP US</span>
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-mid-grey uppercase block mb-1">
                      Email
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
                    <span className="text-[10px] font-mono tracking-widest text-mid-grey uppercase block mb-1.5">
                      Showroom Address
                    </span>
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
        className="relative py-6 sm:py-10 flex items-center border-b border-graphite/40"
        aria-label="Division 02: Commercial Construction & Infrastructure"
      >
        {/* Clearly Visible Architectural Corporate Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/divisions/division_commercial.jpg"
            alt="SD Constructions & Infra - Commercial Architecture"
            className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
            loading="lazy"
          />
          {/* Subtle directional gradient */}
          <div className="absolute inset-0 bg-pure-black/40 lg:hidden" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-pure-black/80 via-pure-black/50 via-45% to-pure-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-pure-black/55 via-transparent to-pure-black/30" />
        </div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
            {/* Left Column: Division Identity */}
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="text-xs font-mono tracking-[0.25em] uppercase text-white px-3.5 py-1 bg-charcoal/80 border border-graphite rounded-full">
                  DIVISION 02 · COMMERCIAL &amp; INFRASTRUCTURE
                </span>
              </div>

              <img
                src="/images/brand/sd-constructions-infra-wordmark.png"
                alt="SD Constructions & Infra"
                className="h-16 sm:h-20 w-auto object-contain object-left"
              />

              <div className="inline-block border-l-2 border-white pl-4 py-1">
                <p className="text-sm sm:text-base font-serif text-white italic tracking-wide">
                  Commercial · Corporate Interiors · Infrastructure Projects
                </p>
              </div>

              <p className="text-xs sm:text-base font-sans font-light text-light-grey/90 leading-relaxed max-w-xl">
                We provide end-to-end commercial, corporate and infrastructure solutions, covering design, planning, construction and execution with a focus on quality and efficient project delivery.
              </p>

              {/* Monochrome Badges */}
              <div className="hidden sm:grid grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 bg-pure-black/80 border border-graphite/80 rounded-sm backdrop-blur-sm">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block mb-0.5">SPECIALITY</span>
                  <span className="text-base sm:text-lg font-serif text-white font-semibold">Commercial, Corporate Interiors &amp; Infrastructure Projects</span>
                </div>
                <div className="p-3.5 bg-pure-black/80 border border-graphite/80 rounded-sm backdrop-blur-sm">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block mb-0.5">SERVICES</span>
                  <span className="text-base sm:text-lg font-serif text-white font-semibold">End to End Interiors &amp; Infrastructure Solutions</span>
                </div>
                <div className="p-3.5 bg-pure-black/80 border border-graphite/80 rounded-sm backdrop-blur-sm col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block mb-0.5">LOCATION</span>
                  <span className="text-base sm:text-lg font-serif text-white font-semibold">Chinnamushidiwada, Visakhapatnam</span>
                </div>
              </div>
            </div>

            {/* Right Column: Monochrome Corporate Console */}
            <div className="lg:col-span-6">
              <div className="bg-pure-black/85 backdrop-blur-md border border-graphite p-4 sm:p-6 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:border-white/40 transition-all duration-300">
                <div className="space-y-3 sm:space-y-4">
                  {/* Action Buttons: Clean Monochrome */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <a
                      href={`tel:${BRAND_INFO.residential.phone}`}
                      className="inline-flex items-center justify-center space-x-2 px-5 py-3 bg-white text-pure-black font-sans text-xs tracking-[0.2em] uppercase font-bold rounded-sm hover:bg-light-grey transition-all shadow-md hover:-translate-y-0.5"
                    >
                      <Phone className="w-4 h-4" />
                      <span>CALL US</span>
                    </a>
                    <a
                      href={`${BRAND_INFO.residential.whatsappUrl}?text=${encodeURIComponent(
                        'Hello SD Constructions & Infra, I would like to discuss a commercial project / turnkey construction.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 px-5 py-3 bg-charcoal text-white border border-graphite hover:border-white hover:bg-white hover:text-pure-black font-sans text-xs tracking-[0.2em] uppercase font-semibold rounded-sm transition-all shadow-md hover:-translate-y-0.5"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WHATSAPP US</span>
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

                  {/* GSTIN */}
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-mid-grey uppercase block mb-1">
                      GSTIN
                    </span>
                    <p className="text-sm sm:text-base font-mono text-light-grey tracking-wider">
                      {BRAND_INFO.commercial.gstin}
                    </p>
                  </div>

                  {/* Commercial Email */}
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-mid-grey uppercase block mb-1">
                      Email
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
                    <span className="text-[10px] font-mono tracking-widest text-mid-grey uppercase block mb-1.5">
                      Operational Address
                    </span>
                    <p className="text-xs font-sans text-light-grey/90 leading-relaxed mb-2.5">
                      {BRAND_INFO.commercial.location}
                    </p>
                    <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-mid-grey">
                      <MapPin className="w-3.5 h-3.5 text-light-grey" />
                      <span>Visakhapatnam, Andhra Pradesh</span>
                    </span>
                  </div>
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
        className="relative py-6 sm:py-10 flex items-center"
        aria-label="Division 03: DECORA Studio"
      >
        {/* Clearly Visible Boutique Decor Studio Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/divisions/division_decora.jpg"
            alt="DECORA - Wall, Window, Floor & Decor Showroom"
            className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
            loading="lazy"
          />
          {/* Subtle directional gradient */}
          <div className="absolute inset-0 bg-pure-black/40 lg:hidden" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-pure-black/80 via-pure-black/50 via-45% to-pure-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-pure-black/55 via-transparent to-pure-black/30" />
        </div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
            {/* Left Column: Division Identity */}
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="text-xs font-mono tracking-[0.25em] uppercase text-white px-3.5 py-1 bg-charcoal/80 border border-graphite rounded-full">
                  DIVISION 03 · DÉCOR SOLUTIONS
                </span>
              </div>

              <div>
                <img
                  src="/images/brand/decora-wordmark-white.png"
                  alt="DECORA — Wall, Window, Floor and Decor"
                  className="h-16 sm:h-20 w-auto object-contain object-left"
                />
                <p className="text-[10px] font-mono tracking-[0.25em] text-mid-grey uppercase mt-1">
                  {BRAND_INFO.decora.floor}
                </p>
              </div>

              <p className="text-xs sm:text-base font-sans font-light text-light-grey/90 leading-relaxed max-w-xl">
                We offer thoughtfully selected décor solutions, including wallpapers, customised wallpapers, blinds, curtains and flooring, adding style and character to every space.
              </p>

              {/* Monochrome Badges */}
              <div className="hidden sm:grid grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 bg-pure-black/80 border border-graphite/80 rounded-sm backdrop-blur-sm">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block mb-0.5">SPECIALITY</span>
                  <span className="text-base sm:text-lg font-serif text-white font-semibold">Décor Products &amp; Solutions</span>
                </div>
                <div className="p-3.5 bg-pure-black/80 border border-graphite/80 rounded-sm backdrop-blur-sm">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block mb-0.5">SERVICES</span>
                  <span className="text-base sm:text-lg font-serif text-white font-semibold">Wallpapers, Blinds, Curtains &amp; Flooring</span>
                </div>
                <div className="p-3.5 bg-pure-black/80 border border-graphite/80 rounded-sm backdrop-blur-sm col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block mb-0.5">LOCATION</span>
                  <span className="text-base sm:text-lg font-serif text-white font-semibold">Pendurthi, Visakhapatnam</span>
                </div>
              </div>

              {/* Showroom Hours */}
              <div className="flex items-center space-x-2 text-xs font-mono text-mid-grey pt-1">
                <Clock className="w-4 h-4 text-light-grey" />
                <span>Showroom Hours: Mon – Sun, 9:30 AM – 8:30 PM (Sunday by appointment)</span>
              </div>
            </div>

            {/* Right Column: Monochrome DECORA Console */}
            <div className="lg:col-span-6">
              <div className="bg-pure-black/85 backdrop-blur-md border border-graphite p-4 sm:p-6 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:border-white/40 transition-all duration-300">
                <div className="space-y-3 sm:space-y-4">
                  {/* Action Buttons: Clean Monochrome */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <a
                      href={`tel:${BRAND_INFO.decora.phone}`}
                      className="inline-flex items-center justify-center space-x-2 px-5 py-3 bg-white text-pure-black font-sans text-xs tracking-[0.2em] uppercase font-bold rounded-sm hover:bg-light-grey transition-all shadow-md hover:-translate-y-0.5"
                    >
                      <Phone className="w-4 h-4" />
                      <span>CALL US</span>
                    </a>
                    <a
                      href={BRAND_INFO.decora.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 px-5 py-3 bg-charcoal text-white border border-graphite hover:border-white hover:bg-white hover:text-pure-black font-sans text-xs tracking-[0.2em] uppercase font-semibold rounded-sm transition-all shadow-md hover:-translate-y-0.5"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WHATSAPP US</span>
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-mid-grey uppercase block mb-1">
                      Email
                    </span>
                    <a
                      href={`mailto:${BRAND_INFO.decora.email}`}
                      className="inline-flex items-center space-x-2 text-xs sm:text-sm font-sans text-light-grey hover:text-white transition-colors break-all"
                    >
                      <Mail className="w-4 h-4 text-mid-grey shrink-0" />
                      <span>{BRAND_INFO.decora.email}</span>
                    </a>
                  </div>

                  {/* Location */}
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-mid-grey uppercase block mb-1.5">
                      Location
                    </span>
                    <p className="text-xs font-sans text-light-grey/90 leading-relaxed mb-2.5">
                      {BRAND_INFO.decora.location}
                    </p>
                    <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-mid-grey">
                      <MapPin className="w-3.5 h-3.5 text-light-grey" />
                      <span>Pendurthi, Visakhapatnam, Andhra Pradesh</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
