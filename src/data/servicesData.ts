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

export const serviceGallery = (service: ServiceCardDetail): string[] => [
  service.image,
  `/images/services/gallery/${service.id}/02.jpg`,
  `/images/services/gallery/${service.id}/03.jpg`,
  `/images/services/gallery/${service.id}/04.jpg`,
  `/images/services/gallery/${service.id}/05.jpg`,
];
