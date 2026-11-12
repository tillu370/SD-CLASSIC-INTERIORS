import React, { useEffect } from 'react';
import { ArrowLeft, Download, MessageSquare } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import {
  GUIDE_ADDITIONAL_WORKS,
  GUIDE_CLIENT_RESPONSIBILITIES,
  GUIDE_CLOSING,
  GUIDE_INTRO,
  GUIDE_MEASUREMENT,
  GUIDE_STEPS,
  GUIDE_WORKFLOW,
  type GuideBlock,
} from '../data/guideContent';
import { BRAND_INFO } from '../data/websiteData';

const focusRing =
  'focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D5D2CC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]';

const Blocks: React.FC<{ blocks: GuideBlock[] }> = ({ blocks }) => (
  <>
    {blocks.map((block, i) =>
      block.type === 'p' ? (
        <p key={i} className="text-sm sm:text-[15px] font-sans font-light text-[#A5A5A5] leading-[1.75] mb-4">
          {block.text}
        </p>
      ) : (
        <ul key={i} className="space-y-2 mb-5 pl-0">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-2.5 text-sm font-sans font-light text-[#A5A5A5] leading-[1.7]">
              <span className="shrink-0 w-1 h-1 rounded-full bg-[#D5D2CC]/60 mt-[9px]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    )}
  </>
);

export const GuidePage: React.FC = () => {
  useEffect(() => {
    const previous = document.title;
    document.title = 'Project Process & Client Information Guide | SD Classic Interiors';
    window.scrollTo(0, 0);
    return () => {
      document.title = previous;
    };
  }, []);

  const whatsappHref = `${BRAND_INFO.residential.whatsappUrl}?text=${encodeURIComponent(
    'Hello SD Classic Interiors, I have read the Project Process & Client Information Guide and would like to discuss my project.'
  )}`;

  return (
    <section className="bg-[#080808] text-[#F5F3EF] min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-24 relative">
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />
      <div className="max-w-[820px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 sm:mb-10">
          <a
            href="#process"
            className={`inline-flex items-center gap-2 min-h-[44px] text-xs font-sans tracking-[0.12em] uppercase text-[#A5A5A5] hover:text-white transition-colors ${focusRing}`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </a>
        </nav>

        <Reveal className="mb-10 sm:mb-14">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#A5A5A5] font-medium block mb-3">
            Client Guide
          </span>
          <h1 className="text-[1.9rem] sm:text-[clamp(2rem,4vw,3.25rem)] font-serif font-normal leading-[1.1] mb-4">
            Project Process &amp; Client Information Guide
          </h1>
          <p className="text-sm sm:text-base font-sans font-light text-[#A5A5A5] leading-[1.7]">
            A detailed walkthrough of how we work, from first call to handover.
          </p>

          <div className="flex flex-wrap gap-3 mt-7">
            <a
              href="/downloads/SD-Classic-Project-Process-Client-Guide.docx"
              download="SD Classic Interiors - Project Process & Client Guide.docx"
              className={`inline-flex items-center justify-center space-x-2 px-6 min-h-[44px] border border-[#D5D2CC]/60 text-xs font-sans tracking-[0.2em] uppercase hover:border-[#D5D2CC] hover:bg-white/5 transition-colors ${focusRing}`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Guide</span>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center space-x-2 px-6 min-h-[44px] border border-[#292929] text-xs font-sans tracking-[0.2em] uppercase text-[#A5A5A5] hover:border-[#D5D2CC]/60 hover:text-white transition-colors ${focusRing}`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask a Question</span>
            </a>
          </div>
        </Reveal>

        {/* Welcome */}
        <Reveal className="mb-10 sm:mb-14 pb-10 sm:pb-14 border-b border-[#292929]">
          <h2 className="text-lg sm:text-xl font-serif text-[#F5F3EF] mb-4">Welcome</h2>
          <Blocks blocks={GUIDE_INTRO} />
        </Reveal>

        {/* Workflow overview */}
        <Reveal className="mb-10 sm:mb-14 pb-10 sm:pb-14 border-b border-[#292929]">
          <h2 className="text-lg sm:text-xl font-serif text-[#F5F3EF] mb-5">Our Project Workflow</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
            {GUIDE_WORKFLOW.map((step, i) => (
              <li key={step} className="flex items-baseline gap-3 text-sm font-sans text-[#D5D2CC]">
                <span className="font-serif text-[#A5A5A5]/70 text-xs w-5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* Steps */}
        {GUIDE_STEPS.map((step) => (
          <Reveal key={step.number} className="mb-10 sm:mb-14 pb-10 sm:pb-14 border-b border-[#292929]">
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-serif text-3xl sm:text-4xl font-light text-[#F5F3EF]/25 leading-none">{step.number}</span>
              <h2 className="text-lg sm:text-xl font-serif text-[#F5F3EF]">{step.title}</h2>
            </div>
            <Blocks blocks={step.blocks} />
          </Reveal>
        ))}

        {/* Measurement standards */}
        <Reveal className="mb-10 sm:mb-14 pb-10 sm:pb-14 border-b border-[#292929]">
          <h2 className="text-lg sm:text-xl font-serif text-[#F5F3EF] mb-5">Measurement &amp; Calculation Standards</h2>
          <Blocks blocks={GUIDE_MEASUREMENT} />
        </Reveal>

        {/* Additional works */}
        <Reveal className="mb-10 sm:mb-14 pb-10 sm:pb-14 border-b border-[#292929]">
          <h2 className="text-lg sm:text-xl font-serif text-[#F5F3EF] mb-5">Additional Works &amp; Scope Changes</h2>
          <Blocks blocks={GUIDE_ADDITIONAL_WORKS} />
        </Reveal>

        {/* Client responsibilities */}
        <Reveal className="mb-10 sm:mb-14 pb-10 sm:pb-14 border-b border-[#292929]">
          <h2 className="text-lg sm:text-xl font-serif text-[#F5F3EF] mb-5">Client Responsibilities</h2>
          <Blocks blocks={GUIDE_CLIENT_RESPONSIBILITIES} />
        </Reveal>

        {/* Closing */}
        <Reveal className="mb-12 sm:mb-16">
          <h2 className="text-lg sm:text-xl font-serif text-[#F5F3EF] mb-5">Thank You</h2>
          <Blocks blocks={GUIDE_CLOSING} />
          <p className="text-sm font-sans text-[#D5D2CC] mt-6">
            Thanks &amp; Regards,
            <br />
            SD Classic Interiors
            <br />
            9676154499 · www.sdclassicinteriors.com
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 sm:p-6 border border-[#292929] bg-[#0c0c0c]">
            <p className="text-sm font-sans font-light text-[#A5A5A5] leading-relaxed max-w-md">
              Have questions about your project? We are happy to walk you through any part of this process.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`shrink-0 inline-flex items-center justify-center space-x-2 px-6 min-h-[44px] border border-[#D5D2CC]/60 text-xs font-sans tracking-[0.2em] uppercase hover:border-[#D5D2CC] hover:bg-white/5 transition-colors ${focusRing}`}
            >
              <span>Discuss Your Project</span>
              <MessageSquare className="w-3.5 h-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
