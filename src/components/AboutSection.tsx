import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';
import { Reveal } from './ui/Reveal';

// ── Monochrome line icons ─────────────────────────────────────────
const HighEndFinishesIcon = () => (
  <svg className="w-5 h-5 text-[#111111]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 7V5a3 3 0 016 0v2" />
    <rect x="3" y="7" width="18" height="14" rx="1" />
    <path d="M10 11h4" />
  </svg>
);

const AffordablePricesIcon = () => (
  <svg className="w-5 h-5 text-[#111111]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6h6M9 10h6M9 6v12M12 10a4 4 0 014 4c0 2-2 3-5 3" />
    <line x1="12" y1="17" x2="16" y2="21" />
  </svg>
);

const CustomizedDesignsIcon = () => (
  <svg className="w-5 h-5 text-[#111111]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" y1="4" x2="8.12" y2="15.88" />
    <line x1="14.47" y1="14.48" x2="20" y2="20" />
    <line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
);

const WarrantyIcon = () => (
  <svg className="w-5 h-5 text-[#111111]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <circle cx="12" cy="11" r="2.5" />
  </svg>
);

const SatisfactionIcon = () => (
  <svg className="w-5 h-5 text-[#111111]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4c-1.5 2-2.5 4-2.5 6 0 2 1.5 3.5 2.5 3.5s2.5-1.5 2.5-3.5c0-2-1-4-2.5-6z" />
    <path d="M6 13c1.5-.8 3-.8 4.5 0-.8-1.5-.8-3 0-4.5-1.5.8-2.5 2.5-4.5 4.5z" />
    <path d="M18 13c-1.5-.8-3-.8-4.5 0 .8-1.5.8-3 0-4.5 1.5.8 2.5 2.5 4.5 4.5z" />
  </svg>
);

const QualityAssuredIcon = () => (
  <svg className="w-5 h-5 text-[#111111]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8.5" r="5.5" />
    <path d="M9.5 8.5l1.5 1.5 3.5-3.5" />
    <path d="M8.5 13L7 20l5-2.5 5 2.5-1.5-7" />
  </svg>
);

const FEATURES = [
  { number: "01", title: "High-End Finishes", icon: <HighEndFinishesIcon /> },
  { number: "02", title: "Affordable Prices", icon: <AffordablePricesIcon /> },
  { number: "03", title: "Customized Designs", icon: <CustomizedDesignsIcon /> },
  { number: "04", title: "Warranty on Workmanship", icon: <WarrantyIcon /> },
  { number: "05", title: "Customer Satisfaction", icon: <SatisfactionIcon /> },
  { number: "06", title: "Quality Assured", icon: <QualityAssuredIcon /> },
];

const STATS = [
  { label: "Established", value: BRAND_INFO.founded },
  { label: "Location", value: "Visakhapatnam" },
  { label: "Expertise", value: "Residential & Commercial" },
];

export const AboutSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="bg-[#F4F4F2] text-[#111111] relative border-t border-black/10 overflow-hidden"
      aria-label="About SD Classic Interiors"
    >
      {/* Background Subtle Architectural Grid */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      {/* ───────────────────────────────────────────────────────────
          SECTION ONE — THE BRAND STORY
      ─────────────────────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-6 lg:gap-12 items-center">
          {/* Left: Hero Photograph */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 1.04, clipPath: 'inset(4% round 2px)' }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, clipPath: 'inset(0% round 2px)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[520px] mx-auto lg:max-w-none aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/4.2] overflow-hidden bg-[#E8E6E1] border border-black/10 shadow-[0_35px_90px_-25px_rgba(0,0,0,0.25)]"
          >
            <img
              src="/images/projects/about_armchair_exact.jpg"
              alt="Contemporary armchair in a fluted, warmly lit living room designed by SD Classic Interiors"
              className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.06]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Right: Brand Introduction */}
          <Reveal delay={0.15}>
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#5A5A5A] font-medium mb-3 block">
              About Us / Est. {BRAND_INFO.founded}
            </span>

            <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-serif font-normal tracking-[0.01em] text-[#111111] leading-[1.08] mb-2 sm:mb-4">
              SD Classic Interiors
            </h2>

            <p className="text-sm sm:text-base font-sans font-light text-[#5A5A5A] leading-[1.7] max-w-xl mb-4 sm:mb-6">
              Established in {BRAND_INFO.founded}, SD Classic Interiors is a Visakhapatnam-based interior design and execution studio, bringing concept, 3D visualization, material selection and final execution together under one roof.
            </p>

            {/* Compact Brand Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-black/10">
              {STATS.map((stat) => (
                <div key={stat.label} className="py-3 pr-4 border-b sm:border-b-0 sm:border-r border-black/10 last:border-0 flex sm:block items-baseline justify-between sm:justify-start gap-4">
                  <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#5A5A5A] block mb-1">
                    {stat.label}
                  </span>
                  <span className="text-sm sm:text-base font-serif text-[#111111]">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────
          BRAND PROMISE — PREMIUM FEATURE STRIP
      ─────────────────────────────────────────────────────────── */}
      <div className="border-t border-black/10 bg-[#EFEDE8]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-6 sm:py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 border-t border-l border-black/10">
            {FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="group relative p-3 sm:p-5 border-r border-b border-black/10 flex items-center gap-2.5 sm:gap-3 transition-colors duration-300 hover:bg-black/5"
              >
                <div className="flex items-center justify-between gap-2 shrink-0">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 border border-black/10 bg-black/[0.03] flex items-center justify-center text-[#111111] group-hover:border-[#B8A98C] transition-colors duration-300">
                    {feat.icon}
                  </div>
                  <span className="hidden sm:inline text-[10px] font-sans tracking-widest text-[#5A5A5A]">
                    {feat.number}
                  </span>
                </div>
                <span className="min-w-0 text-[13px] sm:text-[15px] font-sans font-medium text-[#111111]/90 group-hover:text-[#111111] transition-colors duration-300 leading-tight">
                  {feat.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────
          SECTION TWO — OUR VISION & MISSION
      ─────────────────────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          <Reveal>
            <div className="relative h-full bg-white border border-black/10 p-5 sm:p-7 overflow-hidden transition-colors duration-300 hover:border-[#D5D2CC]/40">
              <span
                className="absolute -top-4 right-4 text-[5rem] sm:text-[9rem] font-serif font-light text-black/[0.04] select-none pointer-events-none leading-none"
                aria-hidden="true"
              >
                01
              </span>
              <span className="relative text-[10px] font-sans tracking-[0.28em] uppercase text-[#5A5A5A] font-medium mb-2 block">
                Our Vision
              </span>
              <h3 className="relative text-xl sm:text-2xl font-serif text-[#111111] mb-2 leading-tight">
                Spaces That Inspire.
              </h3>
              <p className="relative text-sm sm:text-base font-sans font-light text-[#5A5A5A] leading-[1.7] max-w-md">
                To create thoughtfully designed interiors and architectural environments that combine timeless aesthetics, functionality and exceptional craftsmanship.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-full bg-white border border-black/10 p-5 sm:p-7 overflow-hidden transition-colors duration-300 hover:border-[#D5D2CC]/40">
              <span
                className="absolute -top-4 right-4 text-[5rem] sm:text-[9rem] font-serif font-light text-black/[0.04] select-none pointer-events-none leading-none"
                aria-hidden="true"
              >
                02
              </span>
              <span className="relative text-[10px] font-sans tracking-[0.28em] uppercase text-[#5A5A5A] font-medium mb-2 block">
                Our Mission
              </span>
              <h3 className="relative text-xl sm:text-2xl font-serif text-[#111111] mb-2 leading-tight">
                Design With Purpose.
              </h3>
              <p className="relative text-sm sm:text-base font-sans font-light text-[#5A5A5A] leading-[1.7] max-w-md">
                To deliver comprehensive interior solutions through creative design, carefully selected materials, transparent execution and a commitment to every client's vision.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────
          SECTION THREE — TWO BUSINESS DIVISIONS
      ─────────────────────────────────────────────────────────── */}
      <div className="border-t border-black/10 bg-[#EFEDE8]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-8 sm:py-12 relative z-10">
          <Reveal className="mb-5 sm:mb-8 max-w-2xl">
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#5A5A5A] font-medium block mb-3">
              Business Directory
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-[#111111] leading-tight">
              Two Divisions, One Standard of Craft.
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {/* Division 01 — Residential */}
            <Reveal>
              <a
                href="#division-residential"
                className="group block h-full bg-white border border-black/10 p-5 sm:p-7 transition-colors duration-300 hover:border-[#B8A98C] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B8A98C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFEDE8]"
              >
                <span className="text-[10px] font-sans tracking-[0.28em] uppercase text-[#5A5A5A] font-medium block mb-3">
                  Division 01 · Residential Interiors
                </span>
                <h4 className="text-lg sm:text-xl font-serif text-[#111111] mb-2">
                  {BRAND_INFO.residential.company}
                </h4>
                <p className="text-xs sm:text-sm font-sans font-light text-[#5A5A5A] leading-[1.6] mb-4 max-w-sm">
                  Residential interior design, modular kitchens, customized furniture, complete home interiors and turnkey execution.
                </p>

                <div className="hidden sm:block space-y-1.5 text-xs sm:text-sm font-sans text-[#5A5A5A] border-t border-black/10 pt-4 mb-4">
                  <p className="leading-relaxed">{BRAND_INFO.residential.address}</p>
                  <p>{BRAND_INFO.residential.phoneFormatted}</p>
                  <p className="break-all">{BRAND_INFO.residential.email}</p>
                </div>

                <span className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.15em] uppercase text-[#111111]">
                  <span>Explore Residential Interiors</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>

            {/* Division 02 — Commercial & Infra */}
            <Reveal delay={0.1}>
              <a
                href="#division-commercial"
                className="group block h-full bg-white border border-black/10 p-5 sm:p-7 transition-colors duration-300 hover:border-[#B8A98C] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B8A98C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFEDE8]"
              >
                <span className="text-[10px] font-sans tracking-[0.28em] uppercase text-[#5A5A5A] font-medium block mb-3">
                  Division 02 · Commercial &amp; Infrastructure
                </span>
                <h4 className="text-lg sm:text-xl font-serif text-[#111111] mb-2">
                  {BRAND_INFO.commercial.company}
                </h4>
                <p className="text-xs sm:text-sm font-sans font-light text-[#5A5A5A] leading-[1.6] mb-4 max-w-sm">
                  Commercial construction, civil works, structural alterations and infrastructure execution.
                </p>

                <div className="hidden sm:block space-y-1.5 text-xs sm:text-sm font-sans text-[#5A5A5A] border-t border-black/10 pt-4 mb-4">
                  <p>GSTIN: {BRAND_INFO.commercial.gstin}</p>
                  <p className="break-all">{BRAND_INFO.commercial.email}</p>
                  <p className="leading-relaxed">{BRAND_INFO.commercial.location}</p>
                </div>

                <span className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.15em] uppercase text-[#111111]">
                  <span>Explore Civil &amp; Infrastructure</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────
          SECTION FOUR — BRAND STATEMENT
      ─────────────────────────────────────────────────────────── */}
      <div className="relative py-10 sm:py-14 border-t border-black/10">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-12 text-center relative z-10">
          <Reveal>
            <h3 className="text-[clamp(1.75rem,4vw,3rem)] font-serif italic text-[#111111] leading-[1.1] mb-3">
              Imagine Every Inch.
            </h3>
            <p className="text-sm sm:text-base font-sans font-light text-[#5A5A5A] leading-[1.7] max-w-xl mx-auto mb-5 sm:mb-6">
              Thoughtfully designed spaces. Carefully selected materials. Exceptional attention to detail.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center space-x-2.5 px-7 py-3 border border-[#B8A98C] text-[#111111] font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-black/5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B8A98C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F4F2]"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
