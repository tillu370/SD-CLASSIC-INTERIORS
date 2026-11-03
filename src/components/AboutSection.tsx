import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Gem, IndianRupee, PenTool, ShieldCheck, Smile, BadgeCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';
import { Reveal } from './ui/Reveal';

const FEATURE_ICON_CLASS = "w-5 h-5 text-[#111111]";

const FEATURES = [
  { number: "01", title: "High-End Finishes", icon: <Gem className={FEATURE_ICON_CLASS} strokeWidth={1.6} /> },
  { number: "02", title: "Affordable Prices", icon: <IndianRupee className={FEATURE_ICON_CLASS} strokeWidth={1.6} /> },
  { number: "03", title: "Customized Designs", icon: <PenTool className={FEATURE_ICON_CLASS} strokeWidth={1.6} /> },
  { number: "04", title: "Warranty on Workmanship", icon: <ShieldCheck className={FEATURE_ICON_CLASS} strokeWidth={1.6} /> },
  { number: "05", title: "Customer Satisfaction", icon: <Smile className={FEATURE_ICON_CLASS} strokeWidth={1.6} /> },
  { number: "06", title: "Quality Assured", icon: <BadgeCheck className={FEATURE_ICON_CLASS} strokeWidth={1.6} /> },
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
      <div className="absolute inset-0 architectural-grid-light opacity-40 pointer-events-none" />

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
              src="/images/brand/about_logo_plaque.webp"
              alt="SD Classic Interiors gold monogram and wordmark on a dark wall, Imagine Every Inch"
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
              href={`${BRAND_INFO.residential.whatsappUrl}?text=${encodeURIComponent(
                'Hello SD Classic Interiors, I would like to discuss my project.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
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
