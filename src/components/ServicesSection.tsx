import React, { useState } from 'react';
import { ArrowRight, X, CheckCircle2, MessageSquare } from 'lucide-react';
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

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onEnquireService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceCardDetail | null>(null);

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
      onClick={() => setActiveModalService(service)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setActiveModalService(service);
        }
      }}
      aria-label={`View ${service.title}`}
      className="group relative cursor-pointer overflow-hidden bg-[#0d0d0d] aspect-[4/3] focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      {/* Background photograph — primary focus */}
      <img
        src={service.image}
        alt={service.title}
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
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3.5 sm:p-4">
        <h3 className="text-sm sm:text-base font-serif font-normal text-white leading-[1.15] tracking-[0.01em] transition-colors duration-400 motion-reduce:transition-none group-hover:text-white/90">
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
      className="py-24 sm:py-32 bg-[#000000] text-white relative border-t border-graphite/40 overflow-hidden"
      aria-label="What We Do - Complete Services"
    >
      {/* Background subtle architectural grid */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Centered Editorial Header as requested by user */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Eyebrow: —— 03 / WHAT WE DO —— */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 sm:w-12 h-[1px] bg-white/20" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.28em] uppercase text-mid-grey">
              03 / WHAT WE DO
            </span>
            <div className="w-8 sm:w-12 h-[1px] bg-white/20" />
          </div>

          {/* Heading: Designed With Purpose. Crafted With Precision. */}
          <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-serif font-normal tracking-[0.03em] text-white mb-4 leading-tight">
            Designed With Purpose.<br />
            Crafted With Precision.
          </h2>

          {/* Centered Supporting Paragraph */}
          <p className="text-xs sm:text-sm md:text-base font-sans font-light text-light-grey/80 leading-relaxed max-w-2xl mx-auto mb-6">
            Every detail matters. Explore our interior design, material, furniture and turnkey execution solutions curated under one roof.
          </p>

          {/* Centered Badge: 18+ SPECIALIZED DISCIPLINES */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white/5 border border-white/15 text-[10px] font-mono tracking-[0.25em] uppercase text-light-grey">
            <span>18+ SPECIALIZED DISCIPLINES</span>
          </div>
        </div>

        {/* Services grouped by discipline, each on a consistent 4-column editorial grid */}
        <div className="space-y-12 sm:space-y-16">
          {groups.map((g) => (
            <div key={g.name}>
              <div className="flex items-center gap-4 mb-5 sm:mb-6">
                <h3 className="text-[11px] sm:text-xs font-mono tracking-[0.25em] uppercase text-light-grey/70 whitespace-nowrap">
                  {g.name}
                </h3>
                <div className="flex-1 h-[1px] bg-white/10" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
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
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#111111] border border-white/20 max-w-xl w-full max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/80 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label="Close service details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full bg-black overflow-hidden">
              <img
                src={activeModalService.image}
                alt={activeModalService.title}
                className="w-full h-full object-cover filter brightness-[0.88]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
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
                    setActiveModalService(null);
                    onEnquireService(svc);
                  }}
                  className="flex-1 py-3.5 bg-white text-pure-black font-sans text-xs tracking-[0.2em] uppercase font-semibold text-center hover:bg-light-grey transition-colors"
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
    </section>
  );
};
