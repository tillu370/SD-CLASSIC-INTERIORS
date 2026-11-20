import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Breadcrumb, focusRing, Lightbox, type LightboxItem } from './ProjectsPages';
import { BRAND_INFO, createWhatsAppHref } from '../data/websiteData';
import { renderSrc, renderThumb, SAMPLE_PROJECTS, type ProjectItem } from '../data/projectsData';
import { sampleDesignPath, sampleDesignsPath, type Route } from '../lib/useHashRoute';

type SampleRoute = Extract<Route, { name: 'samples' | 'sample' }>;

const SampleCard: React.FC<{ project: ProjectItem }> = ({ project }) => (
  <a
    href={sampleDesignPath(project.slug)}
    className={`group block h-full border border-[#292929] bg-[#0c0c0c] hover:border-[#D5D2CC]/50 transition-colors ${focusRing}`}
  >
    <div className="relative aspect-[16/10] overflow-hidden bg-black">
      <img
        src={project.renders[0] ? renderThumb(project.slug, project.renders[0].n) : project.cover}
        alt={`${project.title} – sample 3D design`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none"
        loading="lazy"
        decoding="async"
      />
      <span className="absolute left-3 top-3 px-2.5 py-1 bg-black/75 text-[10px] font-sans tracking-[0.14em] uppercase text-white">
        Sample Design
      </span>
    </div>
    <div className="p-4 sm:p-5">
      <h2 className="font-serif text-lg sm:text-xl text-[#F5F3EF] leading-snug mb-1">{project.title}</h2>
      <p className="text-xs font-sans text-[#A5A5A5] mb-4">{project.renders.length} 3D renders{project.walkthrough ? ' · 3D walkthrough' : ''}</p>
      <span className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.15em] uppercase text-[#F5F3EF]">
        <span>View Sample</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </div>
  </a>
);

const SampleDetail: React.FC<{ project: ProjectItem }> = ({ project }) => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const lightboxItems: LightboxItem[] = project.renders.map((render) => ({
    src: renderSrc(project.slug, render.n),
    alt: `${project.title} – ${render.caption}`,
    caption: render.caption,
    w: render.w,
    h: render.h,
  }));
  const otherSample = SAMPLE_PROJECTS.find((sample) => sample.slug !== project.slug);

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', href: '#home' },
          { label: 'Sample Video & 3D Design', href: sampleDesignsPath() },
          { label: project.title },
        ]}
      />

      <div className="max-w-3xl mb-8 sm:mb-10">
        <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#A5A5A5] font-medium block mb-3">
          Sample Design
        </span>
        <h1 className="text-[1.9rem] sm:text-[clamp(2rem,4vw,3.25rem)] font-serif font-normal leading-[1.1] mb-2">
          {project.title}
        </h1>
        <p className="text-sm font-sans font-light text-[#A5A5A5] leading-[1.7]">
          Explore the 3D renders and walkthrough for this budget interior package.
        </p>
      </div>

      {project.walkthrough && (
        <div className="max-w-5xl mb-10 sm:mb-14">
          <h2 className="font-serif text-xl sm:text-2xl mb-4">3D Walkthrough</h2>
          <video
            className="w-full aspect-video bg-black border border-[#292929]"
            src={project.walkthrough.src}
            poster={project.walkthrough.poster}
            controls
            playsInline
            preload="none"
          >
            Your browser does not support video playback.
          </video>
        </div>
      )}

      <div>
        <div className="flex items-end justify-between gap-4 mb-4">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl">3D Renders</h2>
            <p className="text-xs font-sans text-[#A5A5A5] mt-1">Select an image to view it full size.</p>
          </div>
          <span className="text-xs font-sans text-[#A5A5A5]">{project.renders.length} images</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
          {project.renders.map((render, index) => (
            <button
              key={render.n}
              type="button"
              onClick={() => setLightbox(index)}
              className={`group relative block overflow-hidden bg-black border border-[#292929] hover:border-[#D5D2CC]/50 transition-colors text-left ${focusRing}`}
              aria-label={`Open ${render.caption}`}
            >
              <img
                src={renderThumb(project.slug, render.n)}
                alt={`${project.title} – ${render.caption}`}
                width={render.tw}
                height={render.th}
                className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute inset-x-0 bottom-0 px-2.5 py-2 text-[11px] sm:text-xs font-sans text-white bg-gradient-to-t from-black/80 to-transparent">
                {render.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 sm:mt-14 pt-6 border-t border-[#292929] flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <a
          href={sampleDesignsPath()}
          className={`inline-flex items-center gap-2 min-h-[44px] text-xs font-sans tracking-[0.15em] uppercase text-[#A5A5A5] hover:text-white ${focusRing}`}
        >
          <ArrowLeft className="w-4 h-4" />
          All Sample Designs
        </a>
        {otherSample && (
          <a
            href={sampleDesignPath(otherSample.slug)}
            className={`inline-flex items-center gap-2 min-h-[44px] text-xs font-sans tracking-[0.15em] uppercase text-[#F5F3EF] hover:text-white ${focusRing}`}
          >
            {otherSample.title}
            <ArrowRight className="w-4 h-4" />
          </a>
        )}
      </div>

      {lightbox !== null && (
        <Lightbox
          label={project.title}
          items={lightboxItems}
          index={lightbox}
          onIndex={setLightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
};

export const SampleDesignsPage: React.FC<{ route: SampleRoute }> = ({ route }) => {
  const project = route.name === 'sample' ? SAMPLE_PROJECTS.find((sample) => sample.slug === route.slug) : undefined;

  useEffect(() => {
    const previous = document.title;
    document.title = `${project ? project.title : 'Sample Video & 3D Design'} | SD Classic Interiors`;
    window.scrollTo(0, 0);
    return () => {
      document.title = previous;
    };
  }, [project]);

  return (
    <section className="bg-[#080808] text-[#F5F3EF] min-h-screen pt-28 sm:pt-32 pb-14 sm:pb-20 relative">
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {route.name === 'sample' && project ? (
          <SampleDetail key={project.slug} project={project} />
        ) : route.name === 'sample' ? (
          <div className="py-16 text-center">
            <h1 className="font-serif text-2xl sm:text-3xl mb-3">We couldn't find that sample</h1>
            <a href={sampleDesignsPath()} className={`inline-flex items-center gap-2 px-6 min-h-[44px] border border-white/30 text-xs font-sans tracking-[0.15em] uppercase hover:border-white ${focusRing}`}>
              <ArrowLeft className="w-4 h-4" />
              All Sample Designs
            </a>
          </div>
        ) : (
          <>
            <Breadcrumb items={[{ label: 'Home', href: '#home' }, { label: 'Sample Video & 3D Design' }]} />
            <div className="max-w-3xl mb-8 sm:mb-12">
              <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#A5A5A5] font-medium block mb-3">
                Budget Packages
              </span>
              <h1 className="text-[1.9rem] sm:text-[clamp(2rem,4vw,3.25rem)] font-serif font-normal leading-[1.1] mb-3">
                Sample Video &amp; 3D Design
              </h1>
              <p className="text-sm sm:text-base font-sans font-light text-[#A5A5A5] leading-[1.7]">
                View the sample walkthrough videos and 3D designs for our 2BHK and 3BHK budget packages.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {SAMPLE_PROJECTS.map((sample) => <SampleCard key={sample.slug} project={sample} />)}
            </div>
            <div className="mt-8">
              <a
                href={createWhatsAppHref(
                  BRAND_INFO.residential.whatsappUrl,
                  "Hello SD Classic Interiors! I'd like to receive a sample video and 3D design. Please share the details."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 min-h-[44px] bg-white text-black text-xs font-sans tracking-[0.15em] uppercase hover:bg-[#D5D2CC] transition-colors ${focusRing}`}
              >
                Get Sample Details
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
