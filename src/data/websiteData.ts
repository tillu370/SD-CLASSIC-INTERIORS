export interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface ServiceItem {
  id: string;
  groupId: string;
  groupName: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface OfferItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  packageType: string;
  ctaText: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'all' | 'living' | 'bedrooms' | 'kitchens' | 'commercial' | 'architectural';
  categoryLabel: string;
  image: string;
  description: string;
  aspect: 'portrait' | 'landscape' | 'square';
  featured?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface BrandFeature {
  title: string;
  description: string;
}

export const BRAND_INFO = {
  name: "SD CLASSIC INTERIORS",
  shortName: "SD Classic",
  tagline: "Imagine Every Inch",
  founded: "2019",
  residential: {
    company: "SD Classic Interiors",
    phone: "9676179499",
    phoneFormatted: "+91 96761 79499",
    whatsappUrl: "https://wa.me/919676179499",
    email: "sd.classicinteriors99@gmail.com",
    address: "#17-61/2, Near Govt Hospital, BRTS Main Road, Pendurthi, Visakhapatnam - 531173, Andhra Pradesh, India.",
    googleMapsUrl: "https://maps.google.com/?q=Pendurthi,Visakhapatnam,531173"
  },
  commercial: {
    company: "SD Constructions & Infra",
    email: "sdconinfra@gmail.com",
    gstin: "37AAAFS9667J1Z9",
    location: "Chinnamushidiwada, Visakhapatnam - 530051, Andhra Pradesh, India."
  },
  social: {
    instagram: "https://www.instagram.com/sd.classicinteriors/",
    website: "https://sdclassicinteriors.com"
  }
};

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: "residential",
    title: "Residential Interior Projects",
    description: "Curated living spaces, bespoke luxury bedrooms, and holistic home transformations.",
    image: "/images/projects/living_room_embossed_logo.jpg",
    tag: "01 / RESIDENTIAL"
  },
  {
    id: "commercial",
    title: "Commercial Interior Projects",
    description: "Executive offices, corporate headquarters, and high-impact retail experiences.",
    image: "/images/projects/commercial_reception_desk.jpg",
    tag: "02 / COMMERCIAL"
  },
  {
    id: "turnkey",
    title: "Turnkey Projects",
    description: "End-to-end execution from raw structural envelope to final decorative styling.",
    image: "/images/projects/living_dining_turnkey.jpg",
    tag: "03 / TURNKEY"
  },
  {
    id: "visualizations",
    title: "Interior Designs & Visualizations",
    description: "Photorealistic 3D rendering, spatial layout modeling, and lighting simulations.",
    image: "/images/projects/project_armchair_shadows.jpg",
    tag: "04 / VISUALIZATION"
  },
  {
    id: "renovation",
    title: "Renovation Projects",
    description: "Thoughtful architectural remodeling and rejuvenation of existing properties.",
    image: "/images/projects/bedroom_ambient_lighting.jpg",
    tag: "05 / RENOVATIONS"
  },
  {
    id: "civil",
    title: "Civil Works",
    description: "Structural alterations, masonry, precision partitions, and MEP coordination.",
    image: "/images/projects/floating_architectural_staircase.jpg",
    tag: "06 / CIVIL WORKS"
  }
];

export const SERVICE_GROUPS = [
  { id: "all", label: "All Services" },
  { id: "kitchens", label: "Kitchens & Storage" },
  { id: "woodwork", label: "Woodwork & Furniture" },
  { id: "wallpapers", label: "Wall Finishes" },
  { id: "flooring", label: "Flooring" },
  { id: "windows", label: "Windows & Soft Furnishings" },
  { id: "landscape", label: "Landscape & Greens" },
  { id: "ceiling", label: "Ceiling & Fabrication" }
];

export const ALL_SERVICES: ServiceItem[] = [
  // A. Kitchens & Storage
  {
    id: "modular-kitchens",
    groupId: "kitchens",
    groupName: "Kitchens & Storage",
    title: "Modular / Semi Modular Kitchens",
    description: "Ergonomic culinary architecture engineered with German hardware, moisture-resistant carcasses, and bespoke finishes.",
    image: "/images/services/modular_kitchen.jpg",
    features: ["German Soft-close Hardware", "Waterproof Ply/HDF Carcass", "Quartz / Granite Waterfall Counters", "Concealed LED Task Lighting"]
  },
  {
    id: "wardrobes-cupboards",
    groupId: "kitchens",
    groupName: "Kitchens & Storage",
    title: "Wardrobes / Cupboards",
    description: "Floor-to-ceiling built-in wardrobes, walk-in dressing suites, and smart sliding configurations with internal architectural illumination.",
    image: "/images/services/luxury_wardrobe.jpg",
    features: ["Tinted Fluted Glass Profiles", "Bespoke Jewelry Drawers", "Integrated Sensor Illumination", "Anti-warp Soft Close Systems"]
  },

  // B. Woodwork & Furniture
  {
    id: "complete-wood-works",
    groupId: "woodwork",
    groupName: "Woodwork & Furniture",
    title: "Complete Wood Works",
    description: "Fine architectural carpentry including door portals, wood paneling, acoustic slatted partitions, and customized joinery.",
    image: "/images/projects/architectural_wood_door.jpg",
    features: ["Bespoke Veneer & Polish", "Fluted Acoustic Wall Panels", "Solid Wood Door Jambs", "Master Craftsmanship"]
  },
  {
    id: "residential-furniture",
    groupId: "woodwork",
    groupName: "Woodwork & Furniture",
    title: "Residential Furniture's",
    description: "Custom-scaled sculptural sofas, designer dining tables, upholstered bed heads, and accent occasional seating.",
    image: "/images/projects/luxury_boucle_armchair.jpg",
    features: ["Ergonomic Proportions", "High-density Resilience Foam", "Premium Stain-resistant Boucle & Linen", "Solid Teak & Metal Subframes"]
  },
  {
    id: "office-furniture",
    groupId: "woodwork",
    groupName: "Woodwork & Furniture",
    title: "Office Furniture's",
    description: "Executive conference tables, ergonomic workstations, reception consoles, and modular acoustic pods.",
    image: "/images/projects/commercial_reception_desk.jpg",
    features: ["Wire Management Integration", "Commercial Grade Laminates", "Modular Reconfigurability", "Heavy-duty Durability"]
  },

  // C. Wallpapers & Wall Finishes
  {
    id: "3d-wallpapers",
    groupId: "wallpapers",
    groupName: "Wallpapers & Wall Finishes",
    title: "3D Designed Wallpapers",
    description: "Tactile textured wall coverings with geometric depth, fabric-backed finishes, and subtle architectural shadows.",
    image: "/images/projects/wall_art_living_room.jpg",
    features: ["High-definition Textures", "Seamless Surface Installation", "Moisture-resistant Backing", "Non-reflective Matte Finish"]
  },
  {
    id: "4d-wallpapers",
    groupId: "wallpapers",
    groupName: "Wallpapers & Wall Finishes",
    title: "4D Customized Wallpapers",
    description: "Panoramic custom murals and dimensional wall murals tailored to precise room elevations and lighting angles.",
    image: "/images/projects/monochrome_furniture_accent.jpg",
    features: ["Bespoke Wall Scaling", "Eco-friendly Odorless Inks", "Scratch-resistant Coating", "Artisan Level Detail"]
  },
  {
    id: "pvc-pu-panels",
    groupId: "wallpapers",
    groupName: "Wallpapers & Wall Finishes",
    title: "PVC / PU Panels",
    description: "Contemporary fluted wall panels, charcoal louvers, and lightweight architectural cladding for dramatic feature walls.",
    image: "/images/projects/minimalist_black_console.jpg",
    features: ["100% Termite & Waterproof", "Interlocking Concealed Joins", "Realistic Wood & Stone Textures", "Minimal Maintenance"]
  },
  {
    id: "paints-putty",
    groupId: "wallpapers",
    groupName: "Wallpapers & Wall Finishes",
    title: "Paints & Putty Works",
    description: "Multi-coat surface preparation, leveling putty, architectural micro-cement textures, and royal luxury emulsion finishes.",
    image: "/images/projects/living_room_embossed_logo.jpg",
    features: ["Laser-level Surface Prep", "Zero VOC Low Odor Formulation", "Velvet Matte & Eggshell Sheens", "Washable Exterior & Interior Coatings"]
  },

  // D. Flooring
  {
    id: "vinyl-pvc-flooring",
    groupId: "flooring",
    groupName: "Flooring",
    title: "Vinyl / PVC Flooring",
    description: "Resilient luxury vinyl tiles and acoustic planks engineered for high foot traffic and effortless maintenance.",
    image: "/images/projects/arch_dining_space.jpg",
    features: ["Acoustic Sound Dampening", "Waterproof Core", "High Scratch Resistance", "Warm Underfoot Comfort"]
  },
  {
    id: "wooden-spc-flooring",
    groupId: "flooring",
    groupName: "Flooring",
    title: "Wooden / SPC Flooring",
    description: "Stone Plastic Composite (SPC) and real hardwood engineered flooring in classic herringbone and wide-plank patterns.",
    image: "/images/hero/hero_luxury_interior.jpg",
    features: ["Limestone Rigid Core", "Zero Expansion in Humid Coastal Climate", "Natural Wood Grain Relief", "UV Protected Wear Layer"]
  },

  // E. Windows & Soft Furnishings
  {
    id: "window-blinds",
    groupId: "windows",
    groupName: "Windows & Soft Furnishings",
    title: "Window Blinds",
    description: "Motorized and manual roller blinds, Venetian blinds, and blackout solar control shades with precision hardware.",
    image: "/images/projects/project_armchair_shadows.jpg",
    features: ["Solar UV Heat Filtering", "Motorized Automation Ready", "Custom Architectural Cassettes", "Dust-repellent Fabric Treatments"]
  },
  {
    id: "custom-window-blinds",
    groupId: "windows",
    groupName: "Windows & Soft Furnishings",
    title: "Customized Window Blinds",
    description: "Dual zebra blinds, wooden louver blinds, and bespoke printed privacy panels engineered for unique window dimensions.",
    image: "/images/projects/foyer_storage_warm_lighting.jpg",
    features: ["Day & Night Light Modulation", "Genuine Basswood Options", "Minimalist Cordless Systems", "Custom Header Pelmets"]
  },
  {
    id: "customized-curtains",
    groupId: "windows",
    groupName: "Windows & Soft Furnishings",
    title: "Customized Curtains",
    description: "Floor-to-ceiling wave fold drapery, sheer Belgian linens, blackout linings, and concealed ceiling track systems.",
    image: "/images/projects/bedroom_ambient_lighting.jpg",
    features: ["Ripplefold Wave Heading", "100% Thermal Blackout Interlining", "Hand-tailored Hemming", "Concealed Motorized Tracks"]
  },

  // F. Landscape & Green Spaces
  {
    id: "artificial-grass-turf",
    groupId: "landscape",
    groupName: "Landscape & Green Spaces",
    title: "Artificial Grass / Sports Turf",
    description: "High-density UV-stabilized synthetic turf for balconies, terrace gardens, putting greens, and courtyard relaxation areas.",
    image: "/images/projects/living_dining_turnkey.jpg",
    features: ["Natural Multi-tone Blades", "Self-draining Perforated Latex Backing", "UV Colorfastness Guarantee", "Child & Pet Safe"]
  },
  {
    id: "vertical-garden",
    groupId: "landscape",
    groupName: "Landscape & Green Spaces",
    title: "Vertical Garden",
    description: "Lush biophilic living walls and premium UV-rated artificial green foliage installations for indoor and outdoor facades.",
    image: "/images/projects/globe_chandelier_lighting.jpg",
    features: ["Integrated Drip Irrigation (Live)", "Dense Architectural Foliage Mix", "Zero Maintenance Foliage Options", "Acoustic Noise Reduction"]
  },

  // G. Ceiling & Fabrication
  {
    id: "false-ceiling",
    groupId: "ceiling",
    groupName: "Ceiling & Fabrication",
    title: "False Ceiling",
    description: "Gypsum and metal grid false ceilings with recessed cove lighting, magnetic track lights, and architectural drop reveals.",
    image: "/images/projects/backlit_display_shelving.jpg",
    features: ["GI Channel Structural Grid", "Concealed Ambient LED Coves", "Acoustic Gypsum Boards", "Seamless Shadow Gap Details"]
  },
  {
    id: "fabrications",
    groupId: "ceiling",
    groupName: "Ceiling & Fabrication",
    title: "Fabrications",
    description: "Structural steel frameworks, laser-cut CNC metal screens, glass railings, and bespoke architectural metalwork.",
    image: "/images/projects/floating_architectural_staircase.jpg",
    features: ["Precision Laser Cutting", "Powder-coated Matte Black Finish", "Toughened Architectural Glass", "Heavy-gauge Structural Steel"]
  }
];

export const SPECIAL_OFFERS: OfferItem[] = [
  {
    id: "kitchen-upgrade",
    number: "01",
    title: "Kitchen Upgrade",
    packageType: "Modular & Semi-Modular",
    description: "Explore modular and semi-modular kitchen solutions tailored to your space.",
    image: "/images/services/modular_kitchen.jpg",
    ctaText: "ENQUIRE NOW →"
  },
  {
    id: "smart-storage",
    number: "02",
    title: "Smart Storage",
    packageType: "Wardrobes & Cupboards",
    description: "Discover customized wardrobes and cupboards designed around your storage needs.",
    image: "/images/services/luxury_wardrobe.jpg",
    ctaText: "ENQUIRE NOW →"
  },
  {
    id: "complete-home",
    number: "03",
    title: "Complete Home Interiors",
    packageType: "2BHK / 3BHK Turnkey",
    description: "Discuss a complete interior solution for your home, from individual rooms to full-home projects.",
    image: "/images/hero/hero_luxury_interior.jpg",
    ctaText: "ENQUIRE NOW →"
  },
  {
    id: "renovation-studio",
    number: "04",
    title: "Renovation Studio",
    packageType: "Living & Space Makeover",
    description: "Reimagine existing spaces with thoughtful renovation and interior upgrades.",
    image: "/images/projects/living_room_embossed_logo.jpg",
    ctaText: "ENQUIRE NOW →"
  },
  {
    id: "custom-decor",
    number: "05",
    title: "Custom Decor",
    packageType: "Finishes & Furnishings",
    description: "Explore wallpapers, flooring, curtains, blinds and other finishing options.",
    image: "/images/projects/foyer_storage_warm_lighting.jpg",
    ctaText: "ENQUIRE NOW →"
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: "proj-1",
    title: "Minimalist Lounge with Signature Embossed Monogram Wall",
    category: "living",
    categoryLabel: "Living Spaces",
    image: "/images/projects/living_room_embossed_logo.jpg",
    description: "Monochrome architectural living lounge featuring subtle wall art and custom charcoal seating.",
    aspect: "landscape",
    featured: true
  },
  {
    id: "proj-2",
    title: "Executive Master Bedroom with Backlit Headboard",
    category: "bedrooms",
    categoryLabel: "Bedrooms",
    image: "/images/projects/bedroom_ambient_lighting.jpg",
    description: "Warm LED acoustic fluted wall paneling with integrated reading sconces and minimalist side tables.",
    aspect: "landscape"
  },
  {
    id: "proj-3",
    title: "Warm LED Entryway Foyer & Custom Shoe Credenza",
    category: "architectural",
    categoryLabel: "Architectural Details",
    image: "/images/projects/foyer_storage_warm_lighting.jpg",
    description: "Subtle recessed downlights illuminating rich grain woodwork and concealed soft-close cabinetry.",
    aspect: "portrait"
  },
  {
    id: "proj-4",
    title: "Bespoke Fluted Architectural Portal & Brass Pull",
    category: "architectural",
    categoryLabel: "Architectural Details",
    image: "/images/projects/architectural_wood_door.jpg",
    description: "Custom fluted solid timber door featuring bespoke architectural craftsmanship.",
    aspect: "portrait"
  },
  {
    id: "proj-5",
    title: "Contemporary Open-Concept Living & Dining Suite",
    category: "living",
    categoryLabel: "Living Spaces",
    image: "/images/projects/living_dining_turnkey.jpg",
    description: "Harmonious flow of marble flooring, dropped tray ceilings, and coordinated architectural furniture.",
    aspect: "landscape",
    featured: true
  },
  {
    id: "proj-6",
    title: "Sculptural Brass Globe Chandelier Installation",
    category: "architectural",
    categoryLabel: "Architectural Details",
    image: "/images/projects/globe_chandelier_lighting.jpg",
    description: "Artistic branch luminaire casting ambient warm spherical light over dining zone.",
    aspect: "portrait"
  },
  {
    id: "proj-7",
    title: "Matte Black & Granite Island Modular Kitchen",
    category: "kitchens",
    categoryLabel: "Kitchens",
    image: "/images/services/modular_kitchen.jpg",
    description: "Waterfall stone island with fluted timber accents and integrated appliances.",
    aspect: "landscape",
    featured: true
  },
  {
    id: "proj-8",
    title: "Corporate Front Office & Reception Portal",
    category: "commercial",
    categoryLabel: "Commercial Interiors",
    image: "/images/projects/commercial_reception_desk.jpg",
    description: "Fluted reception desk with warm backlight and brand signage for corporate client.",
    aspect: "landscape"
  },
  {
    id: "proj-9",
    title: "Floating Cantilevered Staircase with Glass Balustrade",
    category: "architectural",
    categoryLabel: "Architectural Details",
    image: "/images/projects/floating_architectural_staircase.jpg",
    description: "Monochrome architectural staircase with concealed riser LEDs and frameless structural glass.",
    aspect: "portrait"
  },
  {
    id: "proj-10",
    title: "Illuminated Smoked-Glass Walk-in Wardrobe",
    category: "bedrooms",
    categoryLabel: "Bedrooms",
    image: "/images/services/luxury_wardrobe.jpg",
    description: "Full height wardrobe joinery with automated internal strip illumination and center dressing ottoman.",
    aspect: "landscape"
  },
  {
    id: "proj-11",
    title: "Curated Boucle Lounge Chair in Natural Light",
    category: "living",
    categoryLabel: "Living Spaces",
    image: "/images/projects/project_armchair_shadows.jpg",
    description: "High-contrast architectural shadows highlighting textural boucle upholstery.",
    aspect: "portrait"
  },
  {
    id: "proj-12",
    title: "Curved Arch Dining Salon with Travertine Console",
    category: "living",
    categoryLabel: "Living Spaces",
    image: "/images/projects/arch_dining_space.jpg",
    description: "Neo-classical arch niche framing dining table and minimalist pendant fixture.",
    aspect: "portrait"
  }
];

export const BRAND_FEATURES: BrandFeature[] = [
  {
    title: "High End Finishes",
    description: "Meticulous surface treatments, razor-thin shadow reveals, and premium imported hardware."
  },
  {
    title: "Affordable Prices",
    description: "Transparent cost engineering ensuring maximum value without compromising material integrity."
  },
  {
    title: "Customized Designs",
    description: "Bespoke architectural solutions uniquely calibrated to your spatial dimensions and lifestyle."
  },
  {
    title: "Warranty on Workmanship",
    description: "Dedicated post-handover guarantee on execution quality and structural installations."
  },
  {
    title: "Customer Satisfaction",
    description: "Client-first collaborative methodology with ongoing milestone approvals and open communication."
  },
  {
    title: "Specialized in Renovations",
    description: "Expertise in transforming older buildings into contemporary, high-performing luxury spaces."
  },
  {
    title: "Hassle Free Services",
    description: "Single point of contact managing procurement, civil works, carpentry, and final handover."
  },
  {
    title: "100% Quality Assured",
    description: "Multi-point inspection protocol conducted at every phase of execution."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understand the client's requirements, preferred style, budget and space through an in-depth spatial assessment."
  },
  {
    number: "02",
    title: "DESIGN",
    description: "Discuss concepts, layouts, material options and visualizations as applicable, aligning every inch with your vision."
  },
  {
    number: "03",
    title: "EXECUTE",
    description: "Coordinate the agreed interior work and execution requirements with dedicated site supervision and craft precision."
  },
  {
    number: "04",
    title: "COMPLETE",
    description: "Review the finished work with attention to agreed specifications and details, followed by seamless handover."
  }
];
