import React, { useState } from 'react';
import { CheckCircle2, Compass, Layers, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';

interface ProcessPhase {
  id: string;
  stepNumber: string;
  phaseCode: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
  icon: React.ReactNode;
  durationTag: string;
}

const PROCESS_PHASES: ProcessPhase[] = [
  {
    id: "discovery",
    stepNumber: "01",
    phaseCode: "DISCOVERY & SURVEY",
    title: "Spatial Assessment",
    headline: "Understanding Your Space & Lifestyle",
    description: "In-depth spatial survey, lifestyle routine evaluation, natural light assessment, and transparent budget mapping.",
    deliverables: [
      "On-site laser measurements",
      "Vastu & structural checks",
      "Functional zoning mapping",
      "Transparent budget framework"
    ],
    icon: <Compass className="w-5 h-5 text-pure-black" />,
    durationTag: "Week 01"
  },
  {
    id: "design",
    stepNumber: "02",
    phaseCode: "SCHEMATICS & SAMPLES",
    title: "3D Visualization",
    headline: "Visualizing Every Detail & Finish",
    description: "Photorealistic 3D architectural renders, tactile veneer and laminate moodboards, and itemized transparent BOQ.",
    deliverables: [
      "Photorealistic 3D walkthroughs",
      "Physical material sample boards",
      "Modular kitchen & wardrobe CADs",
      "Itemized zero-surprise BOQ"
    ],
    icon: <Layers className="w-5 h-5 text-pure-black" />,
    durationTag: "Week 02–03"
  },
  {
    id: "execution",
    stepNumber: "03",
    phaseCode: "PRECISION EXECUTION",
    title: "Craft & Fabrication",
    headline: "Factory Precision & Supervised Site Work",
    description: "Automated German-spec factory fabrication, on-site civil and electrical execution under a dedicated site engineer.",
    deliverables: [
      "Automated edge-banded fabrication",
      "Dedicated on-site site supervisor",
      "Weekly photo & video progress updates",
      "Milestone-based quality checkpoints"
    ],
    icon: <Wrench className="w-5 h-5 text-pure-black" />,
    durationTag: "Week 04–08"
  },
  {
    id: "handover",
    stepNumber: "04",
    phaseCode: "AUDIT & HANDOVER",
    title: "White-Glove Delivery",
    headline: "120-Point Quality Audit & Handover",
    description: "Thorough 120-point snag check, deep professional cleaning, hardware calibration, and formal warranty handover.",
    deliverables: [
      "120-point quality audit checklist",
      "Hardware alignment & soft-close test",
      "Deep industrial clean & polish",
      "Official workmanship warranty handover"
    ],
    icon: <ShieldCheck className="w-5 h-5 text-pure-black" />,
    durationTag: "Completion"
  }
];

export const ProcessSection: React.FC = () => {
  const [activePhase, setActivePhase] = useState<string>("discovery");

  return (
    <section
      id="process"
      className="py-14 sm:py-32 bg-[#F4F4F2] text-pure-black relative overflow-hidden select-none border-t border-black/10"
      aria-label="Our Structured Execution Process"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 architectural-grid-light opacity-50 pointer-events-none" />

      {/* Watermark 07 */}
      <div className="absolute top-8 right-8 sm:top-12 sm:right-16 text-6xl sm:text-8xl lg:text-9xl font-serif font-light text-black/[0.05] select-none pointer-events-none leading-none">
        07
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-8 sm:mb-18">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 sm:w-12 h-[1px] bg-graphite/40" />
            <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.28em] uppercase text-mid-grey">
              OUR PROCESS & METHODOLOGY
            </span>
            <div className="w-8 sm:w-12 h-[1px] bg-graphite/40" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-normal tracking-[0.02em] text-pure-black mb-4 leading-tight">
            From First Conversation<br />to Final Detail
          </h2>
          <p className="text-xs sm:text-sm font-sans font-normal text-graphite/85 leading-relaxed max-w-xl">
            A transparent, 4-stage architectural execution framework built on precision milestones, uncompromising material standards, and zero surprises.
          </p>
        </div>

        {/* Revamped Interactive Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {PROCESS_PHASES.map((phase) => {
            const isSelected = activePhase === phase.id;

            return (
              <div
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`relative bg-white border transition-all duration-400 p-7 flex flex-col justify-between cursor-pointer rounded-sm group ${
                  isSelected 
                    ? 'border-pure-black shadow-xl -translate-y-1' 
                    : 'border-[#E2E2DF] shadow-sm hover:border-black/50 hover:shadow-md'
                }`}
              >
                {/* Active Indicator Top Stripe */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-[3px] transition-all duration-400 ${
                    isSelected ? 'bg-black' : 'bg-transparent group-hover:bg-black/30'
                  }`} 
                />

                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#EBEBE8]">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-[#F4F4F2] border border-black/15 flex items-center justify-center">
                        {phase.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block font-medium">
                          STAGE {phase.stepNumber}
                        </span>
                        <h4 className="text-sm font-sans font-bold tracking-wider uppercase text-pure-black">
                          {phase.title}
                        </h4>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-pure-black px-2 py-0.5 bg-[#F4F4F2] border border-black/10 uppercase font-medium">
                      {phase.durationTag}
                    </span>
                  </div>

                  {/* Headline & Description */}
                  <h3 className="text-base sm:text-lg font-serif text-pure-black font-semibold mb-2 leading-snug">
                    {phase.headline}
                  </h3>
                  <p className="text-xs font-sans text-graphite/80 leading-relaxed mb-6">
                    {phase.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block font-semibold">
                      Key Deliverables
                    </span>
                    {phase.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs font-sans text-pure-black/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pure-black/75 shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Code Badge */}
                <div className="pt-4 border-t border-[#EBEBE8] flex items-center justify-between text-[10px] font-mono tracking-wider text-mid-grey">
                  <span>{phase.phaseCode}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isSelected ? 'translate-x-1 text-black' : 'group-hover:translate-x-1'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner at bottom of Process */}
        <div className="mt-12 p-6 sm:p-7 bg-white border border-[#E2E2DF] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 rounded-sm">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-pure-black text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-sans font-bold uppercase tracking-wider text-pure-black">
                Fixed-Timeline & Transparent Pricing Guarantee
              </h4>
              <p className="text-xs font-sans text-graphite">
                All milestones are contractually scheduled with itemized material specifications and dedicated site oversight.
              </p>
            </div>
          </div>
          <div className="text-[11px] font-mono tracking-widest uppercase text-pure-black font-semibold bg-[#F4F4F2] px-4 py-2 border border-black/15 shrink-0">
            Artisan Precision Guaranteed
          </div>
        </div>
      </div>
    </section>
  );
};
