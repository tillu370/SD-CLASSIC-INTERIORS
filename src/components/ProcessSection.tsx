import React from 'react';
import { PROCESS_STEPS } from '../data/websiteData';

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="process"
      className="py-24 sm:py-28 bg-[#F4F4F2] text-pure-black relative overflow-hidden"
      aria-label="Our Process"
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 architectural-grid-light opacity-50 pointer-events-none" />

      {/* Large Watermark '07' in Top-Right Corner matching reference */}
      <div className="absolute top-8 right-8 sm:top-12 sm:right-16 text-6xl sm:text-8xl lg:text-9xl font-serif font-light text-black/[0.06] select-none pointer-events-none leading-none">
        07
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          {/* Eyebrow: —— OUR PROCESS —— */}
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 sm:w-12 h-[1px] bg-graphite/40" />
            <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.28em] uppercase text-mid-grey">
              OUR PROCESS
            </span>
            <div className="w-8 sm:w-12 h-[1px] bg-graphite/40" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif tracking-[0.03em] text-pure-black mb-3 leading-tight">
            From First Conversation<br />to Final Detail
          </h2>
          <p className="text-xs sm:text-sm font-sans font-light text-graphite/90 leading-relaxed max-w-xl">
            A structured, collaborative execution framework ensuring clarity, timeline transparency, and flawless finish standards.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-6 left-12 right-12 h-[1px] bg-black/15 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="group relative flex flex-col justify-between"
              >
                {/* Step indicator node on timeline */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full border border-black/30 bg-white flex items-center justify-center font-mono text-xs font-semibold tracking-widest text-pure-black shadow-sm group-hover:border-black group-hover:bg-pure-black group-hover:text-white transition-all duration-300">
                    {step.number}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey">
                    PHASE 0{idx + 1}
                  </span>
                </div>

                {/* Step Card Body */}
                <div className="p-6 bg-white border border-black/10 shadow-sm group-hover:shadow-md transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none group-hover:-translate-y-1 flex-grow flex flex-col justify-between min-h-[200px]">
                  <div>
                    <h3 className="text-base sm:text-lg font-serif tracking-wide text-pure-black mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-graphite/85 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-black/5 flex items-center justify-between text-[10px] font-mono tracking-widest text-mid-grey">
                    <span>STEP {step.number}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-black font-bold">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
