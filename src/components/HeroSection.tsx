import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onExploreWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onExploreWork,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[82vh] sm:min-h-screen w-full flex items-center overflow-hidden bg-[#080808]"
      aria-label="Hero Section"
    >
      {/* Background Architectural Living Room Image with Diagonal Window Light */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 7, ease: 'easeOut' }}
          className="relative w-full h-full"
        >
          <img
            src="/images/hero/hero_clean_bg_2k.jpg"
            alt="SD Classic Interiors - Luxury Architectural Living Room"
            className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05]"
            loading="eager"
            fetchPriority="high"
            onError={(e) => {
              // Fallback to original clean bg if 2k is not ready
              (e.target as HTMLImageElement).src = '/images/hero/hero_clean_bg.jpg';
            }}
          />
        </motion.div>

        {/* Subtle dark gradient overlay to ensure text contrast while preserving natural light */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/40 pointer-events-none" />
      </div>

      {/* Far Left Architectural Margin Indicator: 01 and vertical line */}
      <div className="hidden lg:flex absolute left-6 xl:left-10 top-1/2 -translate-y-1/2 z-20 flex-col items-center pointer-events-none">
        <span className="text-[11px] font-mono tracking-widest text-light-grey mb-3">01</span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-white/40 via-white/20 to-transparent" />
      </div>

      {/* Far Right Architectural Vertical Label */}
      <div className="hidden lg:flex absolute right-6 xl:right-10 bottom-16 z-20 items-center space-x-3 pointer-events-none origin-bottom-right rotate-90">
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-light-grey/60">
          DESIGN · EXECUTION
        </span>
        <div className="w-12 h-[1px] bg-white/30" />
      </div>

      {/* Hero Content Container - Positioned to the Left matching user reference image */}
      <div className="relative z-10 w-full pl-6 sm:pl-14 md:pl-20 lg:pl-24 xl:pl-28 pr-6 sm:pr-12 pt-28 pb-16 flex items-center min-h-[72svh] sm:min-h-[85svh] lg:min-h-screen">
        <div className="max-w-xl lg:max-w-2xl text-left">
          {/* Eyebrow: INTERIORS · DESIGN · EXECUTION */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-3 flex items-center space-x-3"
          >
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.3em] uppercase text-light-grey font-medium">
              INTERIORS &nbsp;·&nbsp; DESIGN &nbsp;·&nbsp; EXECUTION
            </span>
          </motion.div>

          {/* Main Headline: SD CLASSIC INTERIORS */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-serif font-normal tracking-[0.04em] text-white leading-[1.06] mb-2"
          >
            SD CLASSIC INTERIORS
          </motion.h1>

          {/* Tagline: —— Imagine Every Inch —— */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center space-x-4 mb-6"
          >
            <div className="w-10 sm:w-16 h-[1px] bg-mid-grey/60" />
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic tracking-[0.08em] text-light-grey font-normal">
              Imagine Every Inch
            </p>
            <div className="w-10 sm:w-16 h-[1px] bg-mid-grey/60" />
          </motion.div>

          {/* Supporting Copy: 3 Lines Left-Aligned */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg font-sans font-light text-light-grey/90 leading-relaxed mb-8 max-w-lg tracking-wide"
          >
            Transforming spaces into timeless experiences with thoughtful design, premium materials and precise execution.
          </motion.p>

          {/* Action Buttons: Solid White Button + Outlined White Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            {/* Solid White Rectangular Button */}
            <button
              onClick={onExploreWork}
              className="group inline-flex items-center justify-center space-x-3 px-7 py-3.5 bg-white text-pure-black font-sans text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:bg-light-grey hover:-translate-y-0.5 focus:outline-none focus:ring-1 focus:ring-white rounded-none shadow-lg hover:shadow-[0_18px_40px_-10px_rgba(255,255,255,0.25)] motion-reduce:hover:translate-y-0"
              id="hero-explore-work-btn"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Outlined 1px White Rectangular Button */}
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 border border-white/60 text-white font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:border-white hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-10px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-1 focus:ring-white rounded-none motion-reduce:hover:translate-y-0"
              id="hero-book-consultation-btn"
            >
              <span>BOOK A CONSULTATION</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
