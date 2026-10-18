import React, { useState } from 'react';
import {
  ArrowUpRight,
  Sparkles,
  Home,
  Building2,
  KeyRound,
  Layers,
  Hammer,
  Wrench,
  CheckCircle2
} from 'lucide-react';

interface ProjectCategoryGridProps {
  onSelectCategory: (categoryId: string) => void;
}

interface CategoryItem {
  id: string;
  number: string;
  badge: string;
  title: string;
  line1: string;
  line2: string;
  tagline: string;
  description: string;
  photoUrl: string;
  filterGroup: 'residential' | 'commercial' | 'turnkey_civil';
  icon: React.FC<{ className?: string }>;
  accentColor: string; // Tailwind color name for gradients and borders
  badgeStyles: string;
  glowStyles: string;
  deliverables: string[];
}

const CATEGORIES: CategoryItem[] = [
  {
    id: "residential",
    number: "01",
    badge: "LUXURY LIVING",
    title: "Residential Interior Projects",
    line1: "Residential",
    line2: "Interior Projects",
    tagline: "Villas, Luxury Flats & Penthouses",
    description: "Bespoke residential sanctuaries crafted with German modular fittings, custom veneer woodwork, and warm ambient illumination.",
    photoUrl: "/images/services/hd_photo_category_exact_residential.png",
    filterGroup: "residential",
    icon: Home,
    accentColor: "amber",
    badgeStyles: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    glowStyles: "group-hover:shadow-[0_0_35px_rgba(245,158,11,0.25)] group-hover:border-amber-500/40",
    deliverables: ["Luxury 3BHK & 4BHK", "Gourmet Modular Kitchens", "Master Walk-in Wardrobes"]
  },
  {
    id: "commercial",
    number: "02",
    badge: "CORPORATE & RETAIL",
    title: "Commercial Interior Projects",
    line1: "Commercial",
    line2: "Interior Projects",
    tagline: "Offices, Showrooms & Lounges",
    description: "High-performance corporate work environments, boutique retail showrooms, and hospitality suites built to captivate clients.",
    photoUrl: "/images/services/hd_photo_category_exact_commercial.png",
    filterGroup: "commercial",
    icon: Building2,
    accentColor: "sky",
    badgeStyles: "bg-sky-500/15 text-sky-300 border-sky-500/30",
    glowStyles: "group-hover:shadow-[0_0_35px_rgba(56,189,248,0.25)] group-hover:border-sky-500/40",
    deliverables: ["Executive Director Cabins", "Acoustic Workstations", "Brand Identity Display"]
  },
  {
    id: "turnkey",
    number: "03",
    badge: "ALL-IN-ONE DELIVERY",
    title: "Turnkey Projects",
    line1: "Turnkey",
    line2: "Projects",
    tagline: "Design, Procurement to Handover",
    description: "Zero-stress comprehensive turnkey execution — single point of contact, fixed milestone timelines, and complete site delivery.",
    photoUrl: "/images/services/hd_photo_category_exact_turnkey.png",
    filterGroup: "turnkey_civil",
    icon: KeyRound,
    accentColor: "emerald",
    badgeStyles: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    glowStyles: "group-hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] group-hover:border-emerald-500/40",
    deliverables: ["Single-Point Accountability", "Guaranteed Timeline", "Complete Furnishing"]
  },
  {
    id: "visualizations",
    number: "04",
    badge: "4K 3D ARCHITECTURE",
    title: "Interior Designs & Visualizations",
    line1: "Interior Designs",
    line2: "& Visualizations",
    tagline: "Photorealistic 3D & VR Spatial Walkthroughs",
    description: "Experience your future space with millimeter-precise CAD blueprints, realistic material rendering, and cinematic 3D simulations.",
    photoUrl: "/images/services/hd_photo_category_exact_visualizations.png",
    filterGroup: "residential",
    icon: Layers,
    accentColor: "purple",
    badgeStyles: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    glowStyles: "group-hover:shadow-[0_0_35px_rgba(168,85,247,0.25)] group-hover:border-purple-500/40",
    deliverables: ["Photorealistic 3D Renders", "360° Virtual Walkthrough", "Exact Material Mockups"]
  },
  {
    id: "renovation",
    number: "05",
    badge: "MODERN MAKEOVER",
    title: "Renovation Projects",
    line1: "Renovation",
    line2: "Projects",
    tagline: "Space Transformation & Remodeling",
    description: "Breathe new life into existing spaces with structural optimization, layout re-engineering, premium resurfacing, and modern aesthetic upgrades.",
    photoUrl: "/images/services/hd_photo_category_exact_renovation.png",
    filterGroup: "residential",
    icon: Hammer,
    accentColor: "rose",
    badgeStyles: "bg-rose-500/15 text-rose-300 border-rose-500/30",
    glowStyles: "group-hover:shadow-[0_0_35px_rgba(244,63,94,0.25)] group-hover:border-rose-500/40",
    deliverables: ["Wall Demolition & Redesign", "Flooring & Tile Replacement", "Full Lighting Overhaul"]
  },
  {
    id: "civil",
    number: "06",
    badge: "STRUCTURAL CRAFT",
    title: "Civil Works",
    line1: "Civil",
    line2: "Works",
    tagline: "Masonry, False Ceilings & Engineering",
    description: "Master civil construction including designer gypsum false ceilings, specialized waterproofing, structural plumbing, and electrical load distribution.",
    photoUrl: "/images/services/hd_photo_category_exact_civil.png",
    filterGroup: "turnkey_civil",
    icon: Wrench,
    accentColor: "teal",
    badgeStyles: "bg-teal-500/15 text-teal-300 border-teal-500/30",
    glowStyles: "group-hover:shadow-[0_0_35px_rgba(20,184,166,0.25)] group-hover:border-teal-500/40",
    deliverables: ["Designer False Ceilings", "Concealed Conduit Wiring", "Moisture-Proof Plumbing"]
  }
];

export const ProjectCategoryGrid: React.FC<ProjectCategoryGridProps> = ({ onSelectCategory }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'commercial' | 'turnkey_civil'>('all');

  const filteredCategories = activeTab === 'all'
    ? CATEGORIES
    : CATEGORIES.filter(cat => cat.filterGroup === activeTab);

  return (
    <section
      id="expertise"
      className="py-24 sm:py-32 bg-[#0B0B0E] text-white relative overflow-hidden"
      aria-label="Our Services - Complete Interior Solutions"
    >
      {/* Ambient background glow gradients for vibrancy */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle architectural grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Decorative large backdrop section numeral */}
      <div className="absolute top-6 right-6 sm:top-10 sm:right-12 text-7xl sm:text-9xl lg:text-[12rem] font-serif font-light text-white/[0.03] select-none pointer-events-none leading-none">
        02
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Vibrant Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Our Services & Specializations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-white mb-5 leading-[1.12]">
            Complete Interior{' '}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent italic font-serif">
              Solutions
            </span>
          </h2>

          <p className="text-sm sm:text-base font-sans font-light text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            From initial architectural concept and 3D visualization to factory-precision modular manufacturing and turnkey site handover, we build spaces that celebrate your lifestyle.
          </p>

          {/* Dynamic Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)] font-semibold'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              All Disciplines ({CATEGORIES.length})
            </button>
            <button
              onClick={() => setActiveTab('residential')}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                activeTab === 'residential'
                  ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)] font-semibold'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              Residential & Living
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                activeTab === 'commercial'
                  ? 'bg-sky-500 text-black shadow-[0_0_20px_rgba(56,189,248,0.4)] font-semibold'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              Commercial & Offices
            </button>
            <button
              onClick={() => setActiveTab('turnkey_civil')}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                activeTab === 'turnkey_civil'
                  ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)] font-semibold'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              Turnkey & Civil Works
            </button>
          </div>
        </div>

        {/* 6-Card Vibrant Luxury Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredCategories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectCategory(cat.id);
                  }
                }}
                aria-label={`Explore ${cat.title}`}
                className={`group relative rounded-2xl overflow-hidden bg-[#131317] border border-white/10 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer flex flex-col min-h-[460px] sm:min-h-[480px] ${cat.glowStyles}`}
              >
                {/* Background Image with vibrant zoom & color dynamics */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={cat.photoUrl}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                    loading="lazy"
                  />
                  {/* Vibrant multilayer dark gradient shield */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/75 to-black/35 transition-opacity duration-500 group-hover:from-[#08080A] group-hover:via-[#08080A]/85" />
                  
                  {/* Subtle top-vignette */}
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
                </div>

                {/* Top Section: Badges & Category Number */}
                <div className="relative z-10 p-5 sm:p-6 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-xs font-mono font-bold text-white/90">
                      {cat.number}
                    </span>
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border backdrop-blur-md ${cat.badgeStyles}`}>
                      {cat.badge}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:bg-amber-400 group-hover:text-black group-hover:border-amber-400 transition-all duration-300">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                {/* Spacer to push content to bottom */}
                <div className="flex-1" />

                {/* Bottom Section: Title, Subtitle, Deliverables & Interactive CTA */}
                <div className="relative z-10 p-5 sm:p-6 bg-gradient-to-t from-[#09090B] via-[#09090B]/90 to-transparent">
                  {/* Tagline */}
                  <div className="text-[11px] font-sans font-medium uppercase tracking-[0.18em] text-amber-400/90 mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{cat.tagline}</span>
                  </div>

                  {/* Primary Heading */}
                  <h3 className="text-2xl sm:text-[1.65rem] font-serif font-normal text-white leading-tight mb-2.5 group-hover:text-amber-100 transition-colors duration-300">
                    {cat.title}
                  </h3>

                  {/* Narrative snippet */}
                  <p className="text-xs sm:text-[13px] font-sans text-neutral-300 font-light leading-relaxed mb-4 line-clamp-2">
                    {cat.description}
                  </p>

                  {/* Curated Deliverables Pill Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cat.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[10px] font-medium text-neutral-200 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10 group-hover:border-white/20 transition-colors"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-amber-400 shrink-0" />
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Interactive Action Bar */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-medium tracking-wide text-white/80 group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                      Explore Detailed Scope
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 group-hover:bg-amber-400 group-hover:text-black group-hover:border-amber-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shadow-sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Vibrant ambient border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-400/40 transition-colors duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Quality Commitment Trust Bar underneath grid */}
        <div className="mt-14 sm:mt-18 rounded-2xl bg-gradient-to-r from-white/[0.03] via-white/[0.06] to-white/[0.03] border border-white/10 p-6 sm:p-8 backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-3 md:pt-0">
              <div className="text-2xl sm:text-3xl font-serif text-amber-400 font-bold mb-1">500+</div>
              <div className="text-xs text-neutral-300 tracking-wider uppercase font-medium">Projects Delivered</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Visakhapatnam & Coastal AP</div>
            </div>
            <div className="pt-3 md:pt-0">
              <div className="text-2xl sm:text-3xl font-serif text-amber-400 font-bold mb-1">100%</div>
              <div className="text-xs text-neutral-300 tracking-wider uppercase font-medium">German Modular Specs</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Hettich & Hafele Hardware</div>
            </div>
            <div className="pt-3 md:pt-0">
              <div className="text-2xl sm:text-3xl font-serif text-amber-400 font-bold mb-1">10-Year</div>
              <div className="text-xs text-neutral-300 tracking-wider uppercase font-medium">Workmanship Warranty</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">BWP Waterproof Ply Certified</div>
            </div>
            <div className="pt-3 md:pt-0">
              <div className="text-2xl sm:text-3xl font-serif text-amber-400 font-bold mb-1">Fixed</div>
              <div className="text-xs text-neutral-300 tracking-wider uppercase font-medium">Timeline Guarantee</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Zero Hidden Escalations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
