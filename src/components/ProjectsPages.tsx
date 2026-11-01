import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import {
  CATEGORY_PAGES,
  PROJECTS,
  renderSrc,
  renderThumb,
  type CategoryPage,
  type ProjectItem,
} from '../data/projectsData';
import { INSPIRATION } from '../data/inspirationData';
import { categoryPath, projectPath, type Route } from '../lib/useHashRoute';
import { BRAND_INFO } from '../data/websiteData';

const thumbOf = (cover: string) => (cover.endsWith('.webp') ? cover.replace('.webp', '-t.webp') : cover);

const focusRing =
  'focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D5D2CC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]';

// ─── Lightbox ────────────────────────────────────────────────────
interface LightboxItem {
  src: string;
  alt: string;
  caption: string;
  w: number;
  h: number;
}

interface LightboxProps {
  label: string;
  items: LightboxItem[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ label, items, index, onIndex, onClose }) => {
  const total = items.length;
  const touchX = useRef<number | null>(null);
  const current = items[index];

  const go = useCallback(
    (delta: number) => onIndex((index + delta + total) % total),
    [index, total, onIndex]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [go, onClose]);

  useEffect(() => {
    const next = new Image();
    next.src = items[(index + 1) % total].src;
  }, [index, items, total]);

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/95 flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={`${label} gallery`}
      onClick={onClose}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
      }}
    >
      <div className="flex items-center justify-between px-4 sm:px-8 py-3" onClick={(e) => e.stopPropagation()}>
        <span className="text-xs font-sans tracking-[0.18em] uppercase text-[#A5A5A5]">
          {index + 1} / {total}
        </span>
        <button
          onClick={onClose}
          className={`w-11 h-11 flex items-center justify-center border border-[#292929] text-white hover:border-white transition-colors ${focusRing}`}
          aria-label="Close gallery"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="relative flex-1 min-h-0 flex items-center justify-center px-2 sm:px-16">
        <button
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
          className={`hidden sm:flex absolute left-4 w-11 h-11 items-center justify-center border border-[#292929] bg-black/60 text-white hover:border-white transition-colors ${focusRing}`}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          width={current.w}
          height={current.h}
          className="max-h-full max-w-full object-contain select-none"
          onClick={(e) => e.stopPropagation()}
          draggable={false}
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
          className={`hidden sm:flex absolute right-4 w-11 h-11 items-center justify-center border border-[#292929] bg-black/60 text-white hover:border-white transition-colors ${focusRing}`}
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="px-4 sm:px-8 py-4 text-center" onClick={(e) => e.stopPropagation()}>
        <p className="font-serif text-lg sm:text-xl text-[#F5F3EF]">{current.caption}</p>
        <p className="text-[11px] font-sans text-[#A5A5A5] mt-1 sm:hidden">Swipe to browse</p>
      </div>
    </div>
  );
};

// ─── Shared bits ─────────────────────────────────────────────────
const Breadcrumb: React.FC<{ items: Array<{ label: string; href?: string }> }> = ({ items }) => {
  const parent = [...items].reverse().find((item) => item.href);
  return (
    <nav aria-label="Breadcrumb" className="mb-4 sm:mb-8">
      {parent && (
        <a
          href={parent.href}
          className={`sm:hidden inline-flex items-center gap-2 min-h-[44px] text-xs font-sans tracking-[0.12em] uppercase text-[#A5A5A5] hover:text-white transition-colors ${focusRing}`}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{parent.label}</span>
        </a>
      )}
      <ol className="hidden sm:flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-sans tracking-[0.12em] uppercase text-[#A5A5A5]">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.href ? (
              <a href={item.href} className={`hover:text-white transition-colors ${focusRing}`}>
                {item.label}
              </a>
            ) : (
              <span className="text-[#F5F3EF]" aria-current="page">
                {item.label}
              </span>
            )}
            {i < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-[11px] font-sans px-2.5 py-1 border border-[#292929] text-[#A5A5A5]">{children}</span>
);

// ─── Design inspiration (reference photography with credits) ─────
const InspirationView: React.FC<{ page: CategoryPage }> = ({ page }) => {
  const images = INSPIRATION[page.id] ?? [];
  const [lightbox, setLightbox] = useState<number | null>(null);
  const base = `/projects/inspiration/${page.id}`;
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <>
      <div className="border border-[#292929] bg-[#0c0c0c] p-4 sm:p-5 mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-xs sm:text-sm font-sans font-light text-[#A5A5A5] leading-[1.6] max-w-2xl">
          <span className="text-[#F5F3EF] font-medium">Design inspiration.</span> These are reference photographs of
          similar spaces, not completed SD Classic projects. Our own work for this category is being added.
        </p>
        <a
          href={`${BRAND_INFO.residential.whatsappUrl}?text=${encodeURIComponent(
            'Hello SD Classic Interiors, I would like to discuss my space.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`shrink-0 inline-flex items-center space-x-2 px-5 min-h-[44px] border border-[#D5D2CC]/60 text-xs font-sans tracking-[0.16em] uppercase hover:border-[#D5D2CC] hover:bg-white/5 transition-colors ${focusRing}`}
        >
          <span>Discuss Your Space</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
        {images.map((img, i) => (
          <button
            key={img.n}
            onClick={() => setLightbox(i)}
            className={`group relative block overflow-hidden bg-black border border-[#292929] hover:border-[#D5D2CC]/50 transition-colors text-left ${focusRing}`}
            aria-label={`Open ${img.caption}`}
          >
            <img
              src={`${base}/${pad(img.n)}-t.webp`}
              alt={`${img.caption} – design inspiration`}
              width={img.tw}
              height={img.th}
              className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none"
              loading="lazy"
              decoding="async"
            />
            <span className="absolute inset-x-0 bottom-0 px-2.5 py-2 text-[11px] sm:text-xs font-sans text-white bg-gradient-to-t from-black/80 to-transparent">
              {img.caption}
            </span>
          </button>
        ))}
      </div>

      <details className="mt-8 text-xs font-sans text-[#A5A5A5]">
        <summary className={`cursor-pointer min-h-[44px] inline-flex items-center hover:text-white ${focusRing}`}>
          Photo credits
        </summary>
        <ul className="mt-2 space-y-1.5 leading-relaxed">
          {images.map((img) => (
            <li key={img.n}>
              {img.caption}: {img.artist},{' '}
              {img.licenseUrl ? (
                <a href={img.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                  {img.license}
                </a>
              ) : (
                img.license
              )}
              , via{' '}
              <a href={img.source} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                Wikimedia Commons
              </a>
            </li>
          ))}
        </ul>
      </details>

      {lightbox !== null && (
        <Lightbox
          label={page.title}
          items={images.map((img) => ({
            src: `${base}/${pad(img.n)}.webp`,
            alt: `${img.caption} – design inspiration`,
            caption: `${img.caption} · ${img.artist}`,
            w: img.w,
            h: img.h,
          }))}
          index={lightbox}
          onIndex={setLightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
};

// ─── Category page (list of projects) ────────────────────────────
const CategoryView: React.FC<{ page: CategoryPage }> = ({ page }) => {
  const projects = page.projectSlugs
    .map((slug) => PROJECTS.find((p) => p.slug === slug))
    .filter((p): p is ProjectItem => Boolean(p));

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', href: '#home' },
          { label: 'Projects', href: '#expertise' },
          { label: page.title },
        ]}
      />

      <Reveal className="max-w-2xl mb-8 sm:mb-12">
        <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#A5A5A5] font-medium block mb-3">
          {page.eyebrow}
        </span>
        <h1 className="text-[1.9rem] sm:text-[clamp(2rem,4vw,3.25rem)] font-serif font-normal leading-[1.1] mb-3">
          {page.title}
        </h1>
        <p className="text-sm sm:text-base font-sans font-light text-[#A5A5A5] leading-[1.7]">{page.description}</p>
      </Reveal>

      {projects.length === 0 && page.inspiration ? (
        <InspirationView page={page} />
      ) : projects.length === 0 ? (
        <div className="border border-[#292929] bg-[#0c0c0c] p-8 sm:p-12 text-center">
          <h2 className="font-serif text-xl sm:text-2xl mb-2">Projects are being added</h2>
          <p className="text-sm font-sans font-light text-[#A5A5A5] leading-[1.7] max-w-md mx-auto mb-6">
            We are preparing this collection. In the meantime, tell us about your space and we will share relevant work.
          </p>
          <a
            href={`${BRAND_INFO.residential.whatsappUrl}?text=${encodeURIComponent(
              'Hello SD Classic Interiors, I would like to discuss my project.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center space-x-2 px-7 min-h-[44px] border border-[#D5D2CC]/60 text-xs font-sans tracking-[0.2em] uppercase hover:border-[#D5D2CC] hover:bg-white/5 transition-colors ${focusRing}`}
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.06}>
              <a
                href={projectPath(page.id, p.slug)}
                className={`group block h-full border border-[#292929] bg-[#0c0c0c] hover:border-[#D5D2CC]/40 transition-colors duration-300 ${focusRing}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={thumbOf(p.cover)}
                    alt={`${p.title} – cover render`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h2 className="font-serif text-lg sm:text-xl text-[#F5F3EF] leading-snug mb-1">{p.title}</h2>
                  <p className="text-xs font-sans text-[#A5A5A5] mb-3">{p.location}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.renders.length > 0 && <Chip>{p.renders.length} 3D renders</Chip>}
                    {p.walkthrough && <Chip>3D walkthrough</Chip>}
                    {p.completed && page.sections.includes('completed') && <Chip>Completed work</Chip>}
                  </div>
                  <span className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.15em] uppercase text-[#F5F3EF]">
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      )}
    </>
  );
};

// ─── Project detail page ─────────────────────────────────────────
type TabId = 'renders' | 'walkthrough' | 'completed';

const TAB_LABELS: Record<TabId, string> = {
  renders: '3D Renders',
  walkthrough: '3D Walkthrough',
  completed: 'Completed Work',
};

const ProjectView: React.FC<{ page: CategoryPage; project: ProjectItem }> = ({ page, project }) => {
  const tabs = page.sections.filter((s) => {
    if (s === 'renders') return project.renders.length > 0;
    if (s === 'walkthrough') return Boolean(project.walkthrough);
    return Boolean(project.completed);
  });
  const [tab, setTab] = useState<TabId>(tabs[0] ?? 'renders');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const siblings = page.projectSlugs;
  const pos = siblings.indexOf(project.slug);
  const prev = pos > 0 ? PROJECTS.find((p) => p.slug === siblings[pos - 1]) : undefined;
  const next = pos >= 0 && pos < siblings.length - 1 ? PROJECTS.find((p) => p.slug === siblings[pos + 1]) : undefined;

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', href: '#home' },
          { label: page.title, href: categoryPath(page.id) },
          { label: project.title },
        ]}
      />

      <Reveal className="max-w-2xl mb-6 sm:mb-8">
        <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#A5A5A5] font-medium block mb-3">
          {page.title}
        </span>
        <h1 className="text-[1.9rem] sm:text-[clamp(2rem,4vw,3.25rem)] font-serif font-normal leading-[1.1] mb-2">
          {project.title}
        </h1>
        <p className="text-sm font-sans text-[#A5A5A5]">{project.location}</p>
      </Reveal>

      <div role="tablist" aria-label="Project media" className="flex gap-2 overflow-x-auto no-scrollbar mb-6 sm:mb-8 -mx-1 px-1">
        {tabs.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`shrink-0 px-4 min-h-[44px] border text-xs font-sans tracking-[0.14em] uppercase transition-colors ${focusRing} ${
              tab === t
                ? 'border-[#F5F3EF] bg-[#F5F3EF] text-[#080808]'
                : 'border-[#292929] text-[#A5A5A5] hover:border-[#D5D2CC]/60 hover:text-white'
            }`}
          >
            {TAB_LABELS[t]}
            {t === 'renders' && <span className="ml-2 opacity-70">{project.renders.length}</span>}
          </button>
        ))}
      </div>

      <div role="tabpanel">
        {tab === 'renders' && (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
            {project.renders.map((r, i) => (
              <button
                key={r.n}
                onClick={() => setLightbox(i)}
                className={`group relative block overflow-hidden bg-black border border-[#292929] hover:border-[#D5D2CC]/50 transition-colors text-left ${focusRing}`}
                aria-label={`Open ${r.caption}`}
              >
                <img
                  src={renderThumb(project.slug, r.n)}
                  alt={`${project.title} – ${r.caption}`}
                  width={r.tw}
                  height={r.th}
                  className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute inset-x-0 bottom-0 px-2.5 py-2 text-[11px] sm:text-xs font-sans text-white bg-gradient-to-t from-black/80 to-transparent">
                  {r.caption}
                </span>
              </button>
            ))}
          </div>
        )}

        {tab === 'walkthrough' && project.walkthrough && (
          <div className="max-w-5xl">
            <video
              key={project.walkthrough.src}
              className="w-full aspect-video bg-black border border-[#292929]"
              src={project.walkthrough.src}
              poster={project.walkthrough.poster}
              controls
              playsInline
              preload="none"
            >
              Your browser does not support video playback.
            </video>
            <p className="text-xs font-sans text-[#A5A5A5] mt-3">3D walkthrough of the proposed interiors.</p>
          </div>
        )}

        {tab === 'completed' && project.completed && (
          <div className="max-w-[360px] mx-auto sm:mx-0">
            <video
              key={project.completed.src}
              className="w-full aspect-[9/16] bg-black border border-[#292929]"
              src={project.completed.src}
              poster={project.completed.poster}
              controls
              playsInline
              preload="none"
            >
              Your browser does not support video playback.
            </video>
            <p className="text-xs font-sans text-[#A5A5A5] mt-3">The finished space, captured on site.</p>
          </div>
        )}
      </div>

      {(prev || next) && (
        <div className="grid grid-cols-2 gap-3 mt-12 sm:mt-16 pt-6 border-t border-[#292929]">
          {prev ? (
            <a
              href={projectPath(page.id, prev.slug)}
              className={`group flex flex-col items-start min-h-[44px] ${focusRing}`}
            >
              <span className="text-[11px] font-sans tracking-[0.18em] uppercase text-[#A5A5A5] flex items-center gap-1.5">
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" /> Previous
              </span>
              <span className="font-serif text-base sm:text-lg text-[#F5F3EF] mt-1">{prev.title}</span>
            </a>
          ) : (
            <span />
          )}
          {next ? (
            <a
              href={projectPath(page.id, next.slug)}
              className={`group flex flex-col items-end text-right min-h-[44px] ${focusRing}`}
            >
              <span className="text-[11px] font-sans tracking-[0.18em] uppercase text-[#A5A5A5] flex items-center gap-1.5">
                Next <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="font-serif text-base sm:text-lg text-[#F5F3EF] mt-1">{next.title}</span>
            </a>
          ) : (
            <span />
          )}
        </div>
      )}

      {lightbox !== null && (
        <Lightbox
          label={project.title}
          items={project.renders.map((r) => ({
            src: renderSrc(project.slug, r.n),
            alt: `${project.title} – ${r.caption}`,
            caption: r.caption,
            w: r.w,
            h: r.h,
          }))}
          index={lightbox}
          onIndex={setLightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
};

// ─── Entry ───────────────────────────────────────────────────────
export const ProjectsPage: React.FC<{ route: Exclude<Route, { name: 'home' }> }> = ({ route }) => {
  const page = CATEGORY_PAGES[route.category];
  const project = route.name === 'project' ? PROJECTS.find((p) => p.slug === route.slug) : undefined;

  useEffect(() => {
    const previous = document.title;
    const label = project ? project.title : page ? page.title : 'Projects';
    document.title = `${label} | SD Classic Interiors`;
    window.scrollTo(0, 0);
    return () => {
      document.title = previous;
    };
  }, [project, page]);

  return (
    <section className="bg-[#080808] text-[#F5F3EF] min-h-screen pt-28 sm:pt-32 pb-14 sm:pb-20 relative">
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {!page || (route.name === 'project' && !project) ? (
          <div className="py-16 text-center">
            <h1 className="font-serif text-2xl sm:text-3xl mb-3">We couldn't find that page</h1>
            <a
              href="#expertise"
              className={`inline-flex items-center space-x-2 px-7 min-h-[44px] border border-[#D5D2CC]/60 text-xs font-sans tracking-[0.2em] uppercase hover:bg-white/5 transition-colors ${focusRing}`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Projects</span>
            </a>
          </div>
        ) : project ? (
          <ProjectView key={`${page.id}/${project.slug}`} page={page} project={project} />
        ) : (
          <CategoryView page={page} />
        )}
      </div>
    </section>
  );
};
