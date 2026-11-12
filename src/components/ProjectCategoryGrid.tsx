import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCategoryGridProps {
  onSelectCategory: (categoryId: string) => void;
}

interface CategoryItem {
  id: string;
  number: string;
  title: string;
  line1: string;
  line2: string;
  photoUrl: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: "residential",
    number: "01",
    title: "Residential Interior Projects",
    line1: "Residential",
    line2: "Interior Projects",
    photoUrl: "/images/services/hd_photo_category_exact_residential.png"
  },
  {
    id: "commercial",
    number: "02",
    title: "Commercial Interior Projects",
    line1: "Commercial",
    line2: "Interior Projects",
    photoUrl: "/images/services/hd_photo_category_exact_commercial.png"
  },
  {
    id: "turnkey",
    number: "03",
    title: "Turnkey Projects",
    line1: "Turnkey",
    line2: "Projects",
    photoUrl: "/images/services/hd_photo_category_exact_turnkey.png"
  },
  {
    id: "visualizations",
    number: "04",
    title: "Interior Designs & Visualizations",
    line1: "Interior Designs",
    line2: "& Visualizations",
    photoUrl: "/images/services/hd_photo_category_exact_visualizations.png"
  },
  {
    id: "renovation",
    number: "05",
    title: "Renovation Projects",
    line1: "Renovation",
    line2: "Projects",
    photoUrl: "/images/services/hd_photo_category_exact_renovation.png"
  },
  {
    id: "civil",
    number: "06",
    title: "Civil Works",
    line1: "Civil",
    line2: "Works",
    photoUrl: "/images/services/hd_photo_category_exact_civil.png"
  }
];

interface ServiceCardProps {
  cat: CategoryItem;
  onSelectCategory: (categoryId: string) => void;
  featured?: boolean;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ cat, onSelectCategory, featured = false, className = '' }) => (
  <div
    onClick={() => onSelectCategory(cat.id)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onSelectCategory(cat.id);
      }
    }}
    aria-label={`View details for ${cat.title}`}
    className={`group relative cursor-pointer overflow-hidden bg-[#111111] shadow-[0_6px_20px_-8px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-15px_rgba(0,0,0,0.6)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F4F2] ${
      featured ? 'min-h-[220px] sm:min-h-[420px] lg:min-h-full' : 'min-h-[140px] sm:min-h-[240px]'
    } ${className}`}
  >
    {/* Photograph — primary visual focus */}
    <img
      src={cat.photoUrl}
      alt=""
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none group-hover:scale-[1.03]"
      loading="lazy"
    />

    {/* Subtle gradient confined to the text zone only */}
    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

    {/* Service index number */}
    <span
      className={`absolute top-3 left-3 sm:top-6 sm:left-6 font-sans text-white/70 tracking-[0.2em] uppercase ${
        featured ? 'text-xs' : 'text-[11px]'
      }`}
    >
      {cat.number}
    </span>

    {/* Title + arrow */}
    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-3 sm:p-6 lg:p-7">
      <h3
        className={`font-serif font-normal text-white leading-[1.12] tracking-[0.01em] transition-colors duration-400 motion-reduce:transition-none group-hover:text-white/90 ${
          featured ? 'text-2xl sm:text-3xl lg:text-[2.1rem]' : 'text-sm sm:text-xl'
        }`}
      >
        <span className="block">{cat.line1}</span>
        <span className="block">{cat.line2}</span>
      </h3>

      <span className="shrink-0 mb-1 text-white/70 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <ArrowUpRight className={featured ? 'w-5 h-5' : 'w-4 h-4'} strokeWidth={1.5} />
      </span>
    </div>

    {/* Faint hover edge — restrained, no heavy border */}
    <div className="absolute inset-0 border border-white/0 group-hover:border-white/15 transition-colors duration-400 motion-reduce:transition-none pointer-events-none" />
  </div>
);

export const ProjectCategoryGrid: React.FC<ProjectCategoryGridProps> = ({ onSelectCategory }) => {
  const [residential, commercial, turnkey, visualizations, renovation, civil] = CATEGORIES;

  return (
    <section
      id="expertise"
      className="py-10 sm:py-28 lg:py-32 bg-[#F4F4F2] text-[#111111] relative overflow-hidden border-t border-black/10"
      aria-label="Our Services - Complete Interior Solutions"
    >
      {/* Background Subtle Architectural Grid */}
      <div className="absolute inset-0 architectural-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-20">
          <div className="flex items-center justify-center space-x-3 mb-5">
            <div className="w-8 sm:w-10 h-[1px] bg-black/20" />
            <span className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-[#777777]">
              Our Projects
            </span>
            <div className="w-8 sm:w-10 h-[1px] bg-black/20" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-serif font-normal tracking-[0.01em] text-[#111111] mb-4 leading-[1.1]">
            Explore By Project Type
          </h2>

          <p className="text-sm sm:text-[15px] font-sans font-normal text-[#555555] leading-relaxed max-w-md mx-auto">
            From concept to completion, browse the kind of space you're planning to transform.
          </p>
        </div>

        {/* Row 1 — asymmetric editorial layout: one featured card + two stacked cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 sm:gap-6 mb-2.5 sm:mb-6">
          <ServiceCard cat={residential} onSelectCategory={onSelectCategory} featured />
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-6">
            <ServiceCard cat={commercial} onSelectCategory={onSelectCategory} />
            <ServiceCard cat={turnkey} onSelectCategory={onSelectCategory} />
          </div>
        </div>

        {/* Row 2 — three balanced, consistent-height cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
          <ServiceCard cat={visualizations} onSelectCategory={onSelectCategory} />
          <ServiceCard cat={renovation} onSelectCategory={onSelectCategory} />
          <ServiceCard cat={civil} onSelectCategory={onSelectCategory} className="col-span-2 lg:col-span-1" />
        </div>
      </div>
    </section>
  );
};
