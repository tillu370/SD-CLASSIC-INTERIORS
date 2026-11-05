import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, X, CheckCircle2, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';

interface ServicesSectionProps {
  onEnquireService: (serviceName: string) => void;
}

interface ServiceCardDetail {
  id: string;
  number: string;
  title: string;
  line1: string;
  line2?: string;
  group: string;
  image: string;
  features: string[];
  description: string;
}

const SERVICE_ITEMS: ServiceCardDetail[] = [
  {
    id: "modular-kitchens",
    number: "01",
    title: "Modular / Semi Modular Kitchens",
    line1: "Modular / Semi Modular",
    line2: "Kitchens",
    group: "Kitchens & Storage",
    image: "/images/services/detail_modular_kitchen.jpg",
    features: ["German Soft-close Hardware", "Waterproof Ply/HDF Carcass", "Quartz / Granite Waterfall Counters", "Concealed LED Task Lighting"],
    description: "Ergonomic culinary architecture engineered with German hardware, moisture-resistant carcasses, and bespoke finishes."
  },
  {
    id: "wardrobes-cupboards",
    number: "02",
    title: "Wardrobes / Cupboards",
    line1: "Wardrobes",
    line2: "/ Cupboards",
    group: "Kitchens & Storage",
    image: "/images/services/detail_wardrobes.jpg",
    features: ["Tinted Fluted Glass Profiles", "Bespoke Jewelry Drawers", "Integrated Sensor Illumination", "Anti-warp Soft Close Systems"],
    description: "Floor-to-ceiling built-in wardrobes, walk-in dressing suites, and smart sliding configurations with internal architectural illumination."
  },
  {
    id: "complete-wood-works",
    number: "03",
    title: "Complete Wood Works",
    line1: "Complete",
    line2: "Wood Works",
    group: "Woodwork & Furniture",
    image: "/images/services/detail_wood_works.jpg",
    features: ["Bespoke Veneer & Polish", "Fluted Acoustic Wall Panels", "Solid Wood Door Jambs", "Master Craftsmanship"],
    description: "Fine architectural carpentry including door portals, wood paneling, acoustic slatted partitions, and customized joinery."
  },
  {
    id: "3d-designed-wallpapers",
    number: "04",
    title: "3D Designed Wallpapers",
    line1: "3D Designed",
    line2: "Wallpapers",
    group: "Wall Finishes",
    image: "/images/services/detail_3d_wallpapers.jpg",
    features: ["High-definition Textures", "Seamless Surface Installation", "Moisture-resistant Backing", "Non-reflective Matte Finish"],
    description: "Tactile textured wall coverings with geometric depth, fabric-backed finishes, and subtle architectural shadows."
  },
  {
    id: "4d-customized-wallpapers",
    number: "05",
    title: "4D Customized Wallpapers",
    line1: "4D Customized",
    line2: "Wallpapers",
    group: "Wall Finishes",
    image: "/images/services/detail_4d_wallpapers.jpg",
    features: ["Bespoke Wall Scaling", "Eco-friendly Odorless Inks", "Scratch-resistant Coating", "Artisan Level Detail"],
    description: "Panoramic custom murals and dimensional wall murals tailored to precise room elevations and lighting angles."
  },
  {
    id: "vinyl-pvc-flooring",
    number: "06",
    title: "Vinyl / PVC Flooring",
    line1: "Vinyl",
    line2: "/ PVC Flooring",
    group: "Flooring",
    image: "/images/services/detail_vinyl_flooring.jpg",
    features: ["Acoustic Sound Dampening", "Waterproof Core", "High Scratch Resistance", "Warm Underfoot Comfort"],
    description: "Resilient luxury vinyl tiles and acoustic planks engineered for high foot traffic and effortless maintenance."
  },
  {
    id: "wooden-spc-flooring",
    number: "07",
    title: "Wooden / SPC Flooring",
    line1: "Wooden",
    line2: "/ SPC Flooring",
    group: "Flooring",
    image: "/images/services/detail_wooden_flooring.jpg",
    features: ["Limestone Rigid Core", "Zero Expansion in Humid Coastal Climate", "Natural Wood Grain Relief", "UV Protected Wear Layer"],
    description: "Stone Plastic Composite (SPC) and real hardwood engineered flooring in classic herringbone and wide-plank patterns."
  },
  {
    id: "window-blinds",
    number: "08",
    title: "Window Blinds",
    line1: "Window",
    line2: "Blinds",
    group: "Windows & Soft Furnishings",
    image: "/images/services/detail_window_blinds.jpg",
    features: ["Solar UV Heat Filtering", "Motorized Automation Ready", "Custom Architectural Cassettes", "Dust-repellent Fabric Treatments"],
    description: "Motorized and manual roller blinds, Venetian blinds, and blackout solar control shades with precision hardware."
  },
  {
    id: "customized-window-blinds",
    number: "09",
    title: "Customized Window Blinds",
    line1: "Customized",
    line2: "Window Blinds",
    group: "Windows & Soft Furnishings",
    image: "/images/services/detail_custom_blinds.jpg",
    features: ["Day & Night Light Modulation", "Genuine Basswood Options", "Minimalist Cordless Systems", "Custom Header Pelmets"],
    description: "Dual zebra blinds, wooden louver blinds, and bespoke printed privacy panels engineered for unique window dimensions."
  },
  {
    id: "customized-curtains",
    number: "10",
    title: "Customized Curtains",
    line1: "Customized",
    line2: "Curtains",
    group: "Windows & Soft Furnishings",
    image: "/images/services/detail_custom_curtains.jpg",
    features: ["Ripplefold Wave Heading", "100% Thermal Blackout Interlining", "Hand-tailored Hemming", "Concealed Motorized Tracks"],
    description: "Floor-to-ceiling wave fold drapery, sheer Belgian linens, blackout linings, and concealed ceiling track systems."
  },
  {
    id: "artificial-grass-turf",
    number: "11",
    title: "Artificial Grass / Sports Turf",
    line1: "Artificial Grass",
    line2: "/ Sports Turf",
    group: "Landscape & Greens",
    image: "/images/services/detail_artificial_grass.jpg",
    features: ["Natural Multi-tone Blades", "Self-draining Perforated Latex Backing", "UV Colorfastness Guarantee", "Child & Pet Safe"],
    description: "High-density UV-stabilized synthetic turf for balconies, terrace gardens, putting greens, and courtyard relaxation areas."
  },
  {
    id: "vertical-garden",
    number: "12",
    title: "Vertical Garden",
    line1: "Vertical",
    line2: "Garden",
    group: "Landscape & Greens",
    image: "/images/services/detail_vertical_garden.jpg",
    features: ["Integrated Drip Irrigation (Live)", "Dense Architectural Foliage Mix", "Zero Maintenance Foliage Options", "Acoustic Noise Reduction"],
    description: "Lush biophilic living walls and premium UV-rated artificial green foliage installations for indoor and outdoor facades."
  },
  {
    id: "pvc-pu-panels",
    number: "13",
    title: "PVC / PU Panels",
    line1: "PVC",
    line2: "/ PU Panels",
    group: "Wall Finishes",
    image: "/images/services/detail_pvc_pu_panels.jpg",
    features: ["100% Termite & Waterproof", "Interlocking Concealed Joins", "Realistic Wood & Stone Textures", "Minimal Maintenance"],
    description: "Contemporary fluted wall panels, charcoal louvers, and lightweight architectural cladding for dramatic feature walls."
  },
  {
    id: "false-ceiling",
    number: "14",
    title: "False Ceiling",
    line1: "False",
    line2: "Ceiling",
    group: "Ceiling & Fabrication",
    image: "/images/services/detail_false_ceiling.jpg",
    features: ["GI Channel Structural Grid", "Concealed Ambient LED Coves", "Acoustic Gypsum Boards", "Seamless Shadow Gap Details"],
    description: "Gypsum and metal grid false ceilings with recessed cove lighting, magnetic track lights, and architectural drop reveals."
  },
  {
    id: "paints-putty-works",
    number: "15",
    title: "Paints & Putty Works",
    line1: "Paints &",
    line2: "Putty Works",
    group: "Wall Finishes",
    image: "/images/services/detail_paints_putty.jpg",
    features: ["Laser-level Surface Prep", "Zero VOC Low Odor Formulation", "Velvet Matte & Eggshell Sheens", "Washable Exterior & Interior Coatings"],
    description: "Multi-coat surface preparation, leveling putty, architectural micro-cement textures, and royal luxury emulsion finishes."
  },
  {
    id: "fabrications",
    number: "16",
    title: "Fabrications",
    line1: "Fabrications",
    group: "Ceiling & Fabrication",
    image: "/images/services/detail_fabrications.jpg",
    features: ["Precision Laser Cutting", "Powder-coated Matte Black Finish", "Toughened Architectural Glass", "Heavy-gauge Structural Steel"],
    description: "Structural steel frameworks, laser-cut CNC metal screens, glass railings, and bespoke architectural metalwork."
  }
];

const serviceGallery = (service: ServiceCardDetail): string[] => [
  service.image,
  `/images/services/gallery/${service.id}/02.jpg`,
  `/images/services/gallery/${service.id}/03.jpg`,
  `/images/services/gallery/${service.id}/04.jpg`,
  `/images/services/gallery/${service.id}/05.jpg`,
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onEnquireService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceCardDetail | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const gallery = activeModalService ? serviceGallery(activeModalService) : [];

  const goLightbox = useCallback(
    (delta: number) => {
      setLightboxIndex((i) => (i === null ? null : (i + delta + gallery.length) % gallery.length));
    },
    [gallery.length]
  );

  useEffect(() => {
    if (!activeModalService) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxIndex !== null) {
          setLightboxIndex(null);
        } else {
          setActiveModalService(null);
        }
      }
      if (lightboxIndex !== null) {
        if (e.key === 'ArrowRight') goLightbox(1);
        if (e.key === 'ArrowLeft') goLightbox(-1);
      }
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [activeModalService, lightboxIndex, goLightbox]);

  const openModal = (service: ServiceCardDetail) => {
    setActiveModalService(service);
    setLightboxIndex(0);
  };

  const closeModal = () => {
    setActiveModalService(null);
    setLightboxIndex(null);
  };

  // Group services by discipline in catalogue order, preserving first-seen group order
  const groups: { name: string; items: ServiceCardDetail[] }[] = [];
  for (const item of SERVICE_ITEMS) {
    let g = groups.find((entry) => entry.name === item.group);
    if (!g) {
      g = { name: item.group, items: [] };
      groups.push(g);
    }
    g.items.push(item);
  }

  const renderCard = (service: ServiceCardDetail) => (
    <div
      key={service.id}
      onClick={() => openModal(service)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(service);
        }
      }}
      aria-label={`View ${service.title}`}
      className="group relative cursor-pointer overflow-hidden bg-[#0d0d0d] aspect-[4/3] shadow-[0_6px_18px_-8px_rgba(0,0,0,0.3)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.4)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F4F2]"
    >
      {/* Background photograph — primary focus */}
      <img
        src={service.image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none group-hover:scale-[1.03]"
        loading="lazy"
      />

      {/* Gradient confined to the text zone only */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none" />

      {/* Index number */}
      <span className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 text-[10px] font-sans text-white/70 tracking-[0.2em] uppercase">
        {service.number}
      </span>

      {/* Title + arrow */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-2.5 sm:p-4">
        <h3 className="text-[13px] sm:text-base font-serif font-normal text-white leading-[1.15] tracking-[0.01em] transition-colors duration-400 motion-reduce:transition-none group-hover:text-white/90">
          <span className="block">{service.line1}</span>
          {service.line2 && <span className="block">{service.line2}</span>}
        </h3>
        <span className="shrink-0 mb-0.5 text-white/70 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowRight className="w-4 h-4 stroke-[1.5]" />
        </span>
      </div>

      {/* Restrained hover edge */}
      <div className="absolute inset-0 border border-white/0 group-hover:border-white/15 transition-colors duration-400 motion-reduce:transition-none pointer-events-none" />
    </div>
  );

  return (
    <section
      id="services"
      className="py-10 sm:py-32 bg-[#F4F4F2] text-[#111111] relative border-t border-black/10 overflow-hidden"
      aria-label="What We Do - Complete Services"
    >
      {/* Background subtle architectural grid */}
      <div className="absolute inset-0 architectural-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Centered Editorial Header as requested by user */}
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-20">
          {/* Eyebrow: —— 06 / WHAT WE DO —— */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 sm:w-12 h-[1px] bg-black/20" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.28em] uppercase text-[#777777]">
              06 / WHAT WE DO
            </span>
            <div className="w-8 sm:w-12 h-[1px] bg-black/20" />
          </div>

          {/* Heading: Designed With Purpose. Crafted With Precision. */}
          <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-serif font-normal tracking-[0.03em] text-[#111111] mb-4 leading-tight">
            Designed With Purpose.<br />
            Crafted With Precision.
          </h2>

          {/* Centered Supporting Paragraph */}
          <p className="text-xs sm:text-sm md:text-base font-sans font-light text-[#555555] leading-relaxed max-w-2xl mx-auto mb-6">
            Every detail matters. Explore our interior design, material, furniture and turnkey execution solutions curated under one roof.
          </p>

          {/* Centered Badge: 16+ SPECIALIZED DISCIPLINES */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-black/[0.03] border border-black/15 text-[10px] font-mono tracking-[0.25em] uppercase text-[#555555]">
            <span>16 Specialized Disciplines</span>
          </div>
        </div>

        {/* Services grouped by discipline, each on a consistent 4-column editorial grid */}
        <div className="space-y-8 sm:space-y-16">
          {groups.map((g) => (
            <div key={g.name}>
              <div className="flex items-center gap-4 mb-5 sm:mb-6">
                <h3 className="text-[11px] sm:text-xs font-mono tracking-[0.25em] uppercase text-[#777777] whitespace-nowrap">
                  {g.name}
                </h3>
                <div className="flex-1 h-[1px] bg-black/10" />
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
                {g.items.map(renderCard)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Service Specification Modal */}
      {activeModalService && (
        <div
          className="fixed inset-0 z-50 bg-pure-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#111111] border border-white/20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] max-w-xl w-full max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 w-11 h-11 bg-black/80 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label="Close service details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <button
              type="button"
              onClick={() => setLightboxIndex(0)}
              className="relative aspect-[16/10] w-full bg-black overflow-hidden block text-left"
              aria-label={`Open ${activeModalService.title} photo gallery`}
            >
              <img
                src={gallery[0]}
                alt={activeModalService.title}
                className="w-full h-full object-cover filter brightness-[0.88]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
            </button>

            {/* Gallery thumbnail strip — 5 photos per service */}
            <div className="grid grid-cols-5 gap-[2px] bg-black">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="relative aspect-square overflow-hidden focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                  aria-label={`View ${activeModalService.title} photo ${i + 1} of ${gallery.length}`}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-8">
              <h3 className="text-2xl font-serif text-white mb-2">
                {activeModalService.title}
              </h3>
              <p className="text-sm font-sans text-light-grey/90 leading-relaxed mb-6">
                {activeModalService.description}
              </p>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-mid-grey mb-3">
                  Specification Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalService.features.map((feat, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs font-sans text-light-grey">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-graphite/40 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const svc = activeModalService.title;
                    closeModal();
                    onEnquireService(svc);
                  }}
                  className="flex-1 py-3.5 bg-white text-pure-black font-sans text-xs tracking-[0.2em] uppercase font-semibold text-center hover:bg-light-grey hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-8px_rgba(255,255,255,0.25)] transition-all duration-300"
                >
                  ENQUIRE FOR THIS SERVICE →
                </button>
                <a
                  href={`${BRAND_INFO.residential.whatsappUrl}?text=${encodeURIComponent(
                    `Hello SD Classic Interiors, I am interested in enquiry for: ${activeModalService.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 border border-white/30 text-white hover:border-white hover:bg-white/10 text-xs tracking-widest uppercase transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen photo gallery lightbox */}
      {activeModalService && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeModalService.title} gallery`}
          onClick={() => setLightboxIndex(null)}
        >
          <div className="flex items-center justify-between px-4 sm:px-8 py-3" onClick={(e) => e.stopPropagation()}>
            <span className="text-xs font-sans tracking-[0.18em] uppercase text-white/60">
              {lightboxIndex + 1} / {gallery.length}
            </span>
            <button
              onClick={() => setLightboxIndex(null)}
              className="w-11 h-11 flex items-center justify-center border border-white/20 text-white hover:border-white transition-colors"
              aria-label="Close gallery"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative flex-1 min-h-0 flex items-center justify-center px-2 sm:px-16">
            <button
              onClick={(e) => {
                e.stopPropagation();
                goLightbox(-1);
              }}
              className="hidden sm:flex absolute left-4 w-11 h-11 items-center justify-center border border-white/20 bg-black/60 text-white hover:border-white transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <img
              key={gallery[lightboxIndex]}
              src={gallery[lightboxIndex]}
              alt={`${activeModalService.title} – photo ${lightboxIndex + 1}`}
              className="max-h-full max-w-full object-contain select-none"
              onClick={(e) => e.stopPropagation()}
              draggable={false}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                goLightbox(1);
              }}
              className="hidden sm:flex absolute right-4 w-11 h-11 items-center justify-center border border-white/20 bg-black/60 text-white hover:border-white transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="px-4 sm:px-8 py-4 text-center" onClick={(e) => e.stopPropagation()}>
            <p className="font-serif text-lg sm:text-xl text-white">{activeModalService.title}</p>
          </div>
        </div>
      )}
    </section>
  );
};
