export interface ServiceCardDetail {
  id: string;
  number: string;
  title: string;
  line1: string;
  line2?: string;
  group: string;
  image: string;
  features: string[];
  description: string;
  /** Extra gallery images shown before the default set. */
  extraGallery?: string[];
  /** When set, the card links to this DECORA category page instead of the service detail page. */
  decoraCategory?: string;
  /** Primary local-SEO keyword phrase this service should rank for (used in <title> and meta description). */
  seoKeyword?: string;
}

export const SERVICE_ITEMS: ServiceCardDetail[] = [
  {
    id: "modular-kitchens",
    number: "01",
    title: "Modular / Semi Modular Kitchens",
    line1: "Modular / Semi Modular",
    line2: "Kitchens",
    group: "Kitchens & Storage",
    image: "/images/services/detail_modular_kitchen.jpg",
    features: ["German Soft-close Hardware", "Waterproof Ply/HDF Carcass", "Quartz / Granite Waterfall Counters", "Concealed LED Task Lighting"],
    description: "Ergonomic culinary architecture engineered with German hardware, moisture-resistant carcasses, and bespoke finishes.",
    seoKeyword: "Complete Home Interiors in Visakhapatnam"
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
    id: "aluminum-works",
    number: "03",
    title: "Aluminium Cupboards",
    line1: "Aluminium",
    line2: "Cupboards",
    group: "Kitchens & Storage",
    image: "/images/services/gallery/aluminum-works/cupboard-04.jpg",
    features: ["Powder-coated Profile Sections", "Precision CNC Fabrication", "Corrosion & Weather Resistant", "Slim Sightline Framing"],
    description: "Custom aluminium cupboards, kitchen cabinets and wardrobes, along with window and door frames, partitions, and architectural sections built for durability and a clean finish.",
    extraGallery: [
      "/images/services/gallery/aluminum-works/cupboard-01.jpg",
      "/images/services/gallery/aluminum-works/cupboard-02.jpg",
      "/images/services/gallery/aluminum-works/cupboard-03.jpg",
    ],
  },
  {
    id: "complete-wood-works",
    number: "04",
    title: "Complete Wood Works",
    line1: "Complete",
    line2: "Wood Works",
    group: "Woodwork & Furniture",
    image: "/images/services/gallery/complete-wood-works/wood-08.jpg",
    features: ["Bespoke Veneer & Polish", "Fluted Acoustic Wall Panels", "Solid Wood Door Jambs", "Master Craftsmanship"],
    description: "Fine architectural carpentry including door portals, wood paneling, acoustic slatted partitions, and customized joinery.",
    extraGallery: [
      "/images/services/gallery/complete-wood-works/wood-01.jpg",
      "/images/services/gallery/complete-wood-works/wood-02.jpg",
      "/images/services/gallery/complete-wood-works/wood-03.jpg",
      "/images/services/gallery/complete-wood-works/wood-04.jpg",
      "/images/services/gallery/complete-wood-works/wood-05.jpg",
      "/images/services/gallery/complete-wood-works/wood-06.jpg",
      "/images/services/gallery/complete-wood-works/wood-07.jpg",
    ],
  },
  {
    id: "residential-furniture",
    number: "05",
    title: "Residential Furniture",
    line1: "Residential",
    line2: "Furniture",
    group: "Woodwork & Furniture",
    image: "/images/services/gallery/residential-furniture/furn-07.jpg",
    features: ["Premium Leather & Fabric Upholstery", "Curated Sofas & Sectionals", "Designer Bedroom Furniture", "Tailored to Room Scale"],
    description: "Curated sofas, sectionals and bedroom furniture selected and arranged to complement your interiors.",
    extraGallery: [
      "/images/services/gallery/residential-furniture/furn-01.jpg",
      "/images/services/gallery/residential-furniture/furn-02.jpg",
      "/images/services/gallery/residential-furniture/furn-03.jpg",
      "/images/services/gallery/residential-furniture/furn-04.jpg",
      "/images/services/gallery/residential-furniture/furn-05.jpg",
      "/images/services/gallery/residential-furniture/furn-06.jpg",
    ],
  },
  {
    id: "3d-designed-wallpapers",
    number: "06",
    title: "3D Designed Wallpapers",
    line1: "3D Designed",
    line2: "Wallpapers",
    group: "Wall Finishes",
    image: "/images/project-type/decora-wallpapers/01.webp",
    features: ["High-definition Textures", "Seamless Surface Installation", "Moisture-resistant Backing", "Non-reflective Matte Finish"],
    description: "Tactile textured wall coverings with geometric depth, fabric-backed finishes, and subtle architectural shadows.",
    decoraCategory: "decora-wallpapers",
    seoKeyword: "Best Wallpapers in Visakhapatnam"
  },
  {
    id: "4d-customized-wallpapers",
    number: "07",
    title: "4D Customized Wallpapers",
    line1: "4D Customized",
    line2: "Wallpapers",
    group: "Wall Finishes",
    image: "/images/project-type/decora-customized-wallpapers/01.webp",
    features: ["Bespoke Wall Scaling", "Eco-friendly Odorless Inks", "Scratch-resistant Coating", "Artisan Level Detail"],
    description: "Panoramic custom murals and dimensional wall murals tailored to precise room elevations and lighting angles.",
    decoraCategory: "decora-customized-wallpapers",
    seoKeyword: "Premium Wallpapers in Vizag"
  },
  {
    id: "pvc-pu-panels",
    number: "08",
    title: "PVC / PU Panels",
    line1: "PVC",
    line2: "/ PU Panels",
    group: "Wall Finishes",
    image: "/images/services/detail_pvc_pu_panels.jpg",
    features: ["100% Termite & Waterproof", "Interlocking Concealed Joins", "Realistic Wood & Stone Textures", "Minimal Maintenance"],
    description: "Contemporary fluted wall panels, charcoal louvers, and lightweight architectural cladding for dramatic feature walls.",
    decoraCategory: "decora-decorative",
    seoKeyword: "PVC Wall Panels in Vizag"
  },
  {
    id: "paints-putty-works",
    number: "09",
    title: "Paints & Putty Works",
    line1: "Paints &",
    line2: "Putty Works",
    group: "Wall Finishes",
    image: "/images/services/detail_paints_putty.jpg",
    features: ["Laser-level Surface Prep", "Zero VOC Low Odor Formulation", "Velvet Matte & Eggshell Sheens", "Washable Exterior & Interior Coatings"],
    description: "Multi-coat surface preparation, leveling putty, architectural micro-cement textures, and royal luxury emulsion finishes."
  },
  {
    id: "artistic-paints-putty-works",
    number: "10",
    title: "Artistic Paints and Putty Works",
    line1: "Artistic Paints",
    line2: "and Putty Works",
    group: "Wall Finishes",
    image: "/images/services/gallery/artistic-paints-putty-works/paint-07.jpg",
    features: ["Hand-crafted Textured Finishes", "Designer Wall Art & Murals", "Decorative Stencil & Stucco Work", "Premium Durable Coatings"],
    description: "Artistic wall finishes including textured stucco, decorative murals, stencil art and designer surface treatments for distinctive interiors.",
    extraGallery: [
      "/images/services/gallery/artistic-paints-putty-works/paint-01.jpg",
      "/images/services/gallery/artistic-paints-putty-works/paint-02.jpg",
      "/images/services/gallery/artistic-paints-putty-works/paint-03.jpg",
      "/images/services/gallery/artistic-paints-putty-works/paint-04.jpg",
      "/images/services/gallery/artistic-paints-putty-works/paint-05.jpg",
      "/images/services/gallery/artistic-paints-putty-works/paint-06.jpg",
    ],
  },
  {
    id: "vinyl-pvc-flooring",
    number: "11",
    title: "Vinyl / PVC Flooring",
    line1: "Vinyl",
    line2: "/ PVC Flooring",
    group: "Flooring",
    image: "/images/services/detail_vinyl_flooring.jpg",
    features: ["Acoustic Sound Dampening", "Waterproof Core", "High Scratch Resistance", "Warm Underfoot Comfort"],
    description: "Resilient luxury vinyl tiles and acoustic planks engineered for high foot traffic and effortless maintenance.",
    decoraCategory: "decora-flooring",
    seoKeyword: "Flooring Solutions in Visakhapatnam"
  },
  {
    id: "wooden-spc-flooring",
    number: "12",
    title: "Wooden / SPC Flooring",
    line1: "Wooden",
    line2: "/ SPC Flooring",
    group: "Flooring",
    image: "/images/services/detail_wooden_flooring.jpg",
    features: ["Limestone Rigid Core", "Zero Expansion in Humid Coastal Climate", "Natural Wood Grain Relief", "UV Protected Wear Layer"],
    description: "Stone Plastic Composite (SPC) and real hardwood engineered flooring in classic herringbone and wide-plank patterns.",
    decoraCategory: "decora-flooring",
    seoKeyword: "Flooring Solutions in Visakhapatnam"
  },
  {
    id: "wall-to-wall-carpets",
    number: "13",
    title: "Wall to Wall Carpets",
    line1: "Wall to Wall",
    line2: "Carpets",
    group: "Flooring",
    image: "/images/project-type/decora-flooring/17.webp",
    features: ["Soft Underfoot Comfort", "Sound & Heat Insulation", "Wide Range of Textures & Tones", "Seamless Wall-to-wall Installation"],
    description: "Plush wall-to-wall carpeting that adds warmth, comfort and a refined finish to bedrooms, living areas and commercial interiors.",
    decoraCategory: "decora-flooring",
    seoKeyword: "Flooring Solutions in Visakhapatnam"
  },
  {
    id: "window-blinds",
    number: "14",
    title: "Window Blinds",
    line1: "Window",
    line2: "Blinds",
    group: "Windows & Soft Furnishings",
    image: "/images/services/detail_window_blinds.jpg",
    features: ["Solar UV Heat Filtering", "Motorized Automation Ready", "Custom Architectural Cassettes", "Dust-repellent Fabric Treatments"],
    description: "Motorized and manual roller blinds, Venetian blinds, and blackout solar control shades with precision hardware.",
    decoraCategory: "decora-blinds",
    seoKeyword: "Window Blinds in Vizag"
  },
  {
    id: "customized-window-blinds",
    number: "15",
    title: "Customized Window Blinds",
    line1: "Customized",
    line2: "Window Blinds",
    group: "Windows & Soft Furnishings",
    image: "/images/project-type/decora-blinds/11.webp",
    features: ["Day & Night Light Modulation", "Genuine Basswood Options", "Minimalist Cordless Systems", "Custom Header Pelmets"],
    description: "Dual zebra blinds, wooden louver blinds, and bespoke printed privacy panels engineered for unique window dimensions.",
    decoraCategory: "decora-blinds",
    seoKeyword: "Window Blinds in Vizag"
  },
  {
    id: "customized-curtains",
    number: "16",
    title: "Customized Curtains",
    line1: "Customized",
    line2: "Curtains",
    group: "Windows & Soft Furnishings",
    image: "/images/services/detail_custom_curtains.jpg",
    features: ["Ripplefold Wave Heading", "100% Thermal Blackout Interlining", "Hand-tailored Hemming", "Concealed Motorized Tracks"],
    description: "Floor-to-ceiling wave fold drapery, sheer Belgian linens, blackout linings, and concealed ceiling track systems.",
    decoraCategory: "decora-curtains",
    seoKeyword: "Curtains Shop in Visakhapatnam"
  },
  {
    id: "artificial-grass-turf",
    number: "17",
    title: "Artificial Grass / Sports Turf",
    line1: "Artificial Grass",
    line2: "/ Sports Turf",
    group: "Landscape & Greens",
    image: "/images/services/gallery/artificial-grass-turf/turf-08.jpg",
    features: ["Natural Multi-tone Blades", "Self-draining Perforated Latex Backing", "UV Colorfastness Guarantee", "Child & Pet Safe"],
    description: "High-density UV-stabilized synthetic turf for balconies, terrace gardens, putting greens, rooftop sports courts, and courtyard relaxation areas.",
    extraGallery: [
      "/images/services/gallery/artificial-grass-turf/turf-01.jpg",
      "/images/services/gallery/artificial-grass-turf/turf-02.jpg",
      "/images/services/gallery/artificial-grass-turf/turf-03.jpg",
      "/images/services/gallery/artificial-grass-turf/turf-04.jpg",
      "/images/services/gallery/artificial-grass-turf/turf-05.jpg",
      "/images/services/gallery/artificial-grass-turf/turf-06.jpg",
      "/images/services/gallery/artificial-grass-turf/turf-07.jpg",
    ],
  },
  {
    id: "vertical-garden",
    number: "18",
    title: "Vertical Garden",
    line1: "Vertical",
    line2: "Garden",
    group: "Landscape & Greens",
    image: "/images/services/gallery/vertical-garden/vg-07.jpg",
    features: ["Integrated Drip Irrigation (Live)", "Dense Architectural Foliage Mix", "Zero Maintenance Foliage Options", "Acoustic Noise Reduction"],
    description: "Lush biophilic living walls and premium UV-rated artificial green foliage installations for indoor and outdoor facades.",
    extraGallery: [
      "/images/services/gallery/vertical-garden/vg-01.jpg",
      "/images/services/gallery/vertical-garden/vg-02.jpg",
      "/images/services/gallery/vertical-garden/vg-03.jpg",
      "/images/services/gallery/vertical-garden/vg-04.jpg",
      "/images/services/gallery/vertical-garden/vg-05.jpg",
      "/images/services/gallery/vertical-garden/vg-06.jpg",
    ],
  },
  {
    id: "false-ceiling",
    number: "19",
    title: "False Ceiling",
    line1: "False",
    line2: "Ceiling",
    group: "Ceiling & Fabrication",
    image: "/images/services/gallery/false-ceiling/fc-10.jpg",
    features: ["GI Channel Structural Grid", "Concealed Ambient LED Coves", "Acoustic Gypsum Boards", "Seamless Shadow Gap Details"],
    description: "Gypsum and metal grid false ceilings with recessed cove lighting, magnetic track lights, and architectural drop reveals.",
    extraGallery: [
      "/images/services/gallery/false-ceiling/fc-01.jpg",
      "/images/services/gallery/false-ceiling/fc-02.jpg",
      "/images/services/gallery/false-ceiling/fc-03.jpg",
      "/images/services/gallery/false-ceiling/fc-04.jpg",
      "/images/services/gallery/false-ceiling/fc-05.jpg",
      "/images/services/gallery/false-ceiling/fc-06.jpg",
      "/images/services/gallery/false-ceiling/fc-07.jpg",
      "/images/services/gallery/false-ceiling/fc-08.jpg",
      "/images/services/gallery/false-ceiling/fc-09.jpg",
    ],
  },
  {
    id: "fabrications",
    number: "20",
    title: "Fabrications",
    line1: "Fabrications",
    group: "Ceiling & Fabrication",
    image: "/images/services/gallery/fabrications/fab-07.jpg",
    features: ["Precision Laser Cutting", "Powder-coated Matte Black Finish", "Toughened Architectural Glass", "Heavy-gauge Structural Steel"],
    description: "Structural steel frameworks, laser-cut CNC metal screens, glass railings, and bespoke architectural metalwork.",
    extraGallery: [
      "/images/services/gallery/fabrications/fab-01.jpg",
      "/images/services/gallery/fabrications/fab-02.jpg",
      "/images/services/gallery/fabrications/fab-03.jpg",
      "/images/services/gallery/fabrications/fab-04.jpg",
      "/images/services/gallery/fabrications/fab-05.jpg",
      "/images/services/gallery/fabrications/fab-06.jpg",
    ],
  }
];

export const serviceGallery = (service: ServiceCardDetail): string[] =>
  service.extraGallery
    ? [...service.extraGallery, service.image]
    : [
        service.image,
        `/images/services/gallery/${service.id}/02.jpg`,
        `/images/services/gallery/${service.id}/03.jpg`,
        `/images/services/gallery/${service.id}/04.jpg`,
        `/images/services/gallery/${service.id}/05.jpg`,
      ];
