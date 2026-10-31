import React from 'react';
import { Reveal } from './ui/Reveal';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Understanding Your Requirements",
    description: "We understand your needs, preferences, lifestyle and budget.",
  },
  {
    number: "02",
    title: "Design & Space Planning",
    description: "We develop suitable concepts, functional layouts and 3D visualizations.",
  },
  {
    number: "03",
    title: "Material Selection",
    description: "We guide you in selecting appropriate materials, colours, textures and finishes.",
  },
  {
    number: "04",
    title: "Execution & Coordination",
    description: "We coordinate the work and manage the execution process on site.",
  },
  {
    number: "05",
    title: "Quality Inspection & Handover",
    description: "We focus on finishing, quality checks and a smooth project handover.",
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="process"
      className="py-8 sm:py-28 lg:py-[120px] bg-[#F4F4F2] text-[#111111] relative overflow-hidden border-t border-black/10"
      aria-label="Our Process"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <Reveal className="max-w-2xl mb-5 sm:mb-16">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#777777] font-medium block mb-2 sm:mb-4">
            Our Process
          </span>
          <h2 className="text-[1.6rem] sm:text-[clamp(2rem,4vw,3.25rem)] font-serif font-normal text-[#111111] leading-[1.1] mb-2 sm:mb-5">
            From First Conversation<br />to Final Detail
          </h2>
          <p className="text-xs sm:text-base font-sans text-[#555555] leading-[1.6] sm:leading-[1.7] max-w-lg">
            Every project begins with understanding your vision and ends with attention to the smallest detail.
          </p>
        </Reveal>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-[#D9D9D5]">
          {PROCESS_STEPS.map((step, idx) => (
            <li
              key={step.number}
              className="group relative p-3 sm:p-8 border-r border-b border-[#D9D9D5] bg-[#F4F4F2] transition-colors duration-300 hover:bg-white"
            >
              <Reveal delay={idx * 0.06} className="flex items-start gap-3 sm:block">
                <span className="text-lg sm:text-4xl font-serif font-light text-[#111111]/30 block sm:mb-8 leading-none shrink-0 w-6 sm:w-auto pt-0.5">
                  {step.number}
                </span>
                <div className="min-w-0"><h3 className="text-sm sm:text-lg font-serif font-semibold text-[#111111] mb-0.5 sm:mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[11px] sm:text-sm font-sans text-[#555555] leading-snug sm:leading-[1.7]">
                  {step.description}
                </p></div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
