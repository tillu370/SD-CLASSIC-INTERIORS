# SD CLASSIC INTERIORS — Official Website

> **“Imagine Every Inch”**  
> Luxury Architectural Website & Digital Experience for SD Classic Interiors (Visakhapatnam, Andhra Pradesh, India).

---

## 🏛️ Brand & Design Direction

- **Brand:** SD Classic Interiors
- **Tagline:** Imagine Every Inch
- **Founded:** 2019
- **Location:** Visakhapatnam, Andhra Pradesh, India
- **Aesthetic:** Luxury architectural editorial design, contemporary Swiss typography, high-contrast monochrome palette, fine 1px borders, and cinematic motion.

### Strict Monochrome Palette
| Token | Hex | Role |
| :--- | :--- | :--- |
| **Pure Black** | `#000000` | Backgrounds, high-contrast panels, deep voids |
| **Rich Black** | `#080808` | Primary dark surface, hero, global canvas |
| **Charcoal** | `#171717` | Card surfaces, modals, containers |
| **Graphite Grey** | `#303030` | Subtle dividers, 1px borders, input outlines |
| **Mid Grey** | `#858585` | Subtitles, metadata, secondary tags |
| **Light Grey** | `#D8D8D8` | Body text, captions, secondary typography |
| **Off White** | `#F5F5F3` | Contrasting expertise & process sections |
| **Pure White** | `#FFFFFF` | Primary serif headlines, prominent CTAs |

---

## ✨ Key Features & Architecture

### 1. Signature Brand Reveal Opening Experience
- **Scene A:** Silent black screen with brief intentional pause.
- **Scene B:** Invisible architectural pencil line construction of the official intertwined **SD monogram** using animated SVG `stroke-dasharray` and `stroke-dashoffset` paths, followed by the revelation of the wordmark *"SD CLASSIC INTERIORS"* and tagline *"Imagine Every Inch"*.
- **Scene C:** 3D architectural double door opening outwards (left panel pure black, right panel textured architectural surface) with perspective reveals the website.
- **Scene D:** Smooth entrance into the hero section. Managed via `sessionStorage` so it only runs once per browser session. Supports `prefers-reduced-motion` and keyboard skip (`[ESC]`).

### 2. Global Navigation & Mobile Overlay
- Transparent over hero; switches to dark surface on scroll.
- Active section indicator and real-time scroll progress bar.
- Outlined **"GET A QUOTE"** call-to-action button.
- Full-screen mobile menu with body scroll lock.

### 3. Full-Viewport Hero
- Cinematic ambient interior visual.
- Small eyebrow: `INTERIORS · DESIGN · EXECUTION`.
- Dual action buttons: `EXPLORE OUR WORK →` and `BOOK A CONSULTATION`.

### 4. 02 / Project Categories (Bright Off-White)
- 6 editorial cards: *Residential*, *Commercial*, *Turnkey*, *Interior Designs & Visualizations*, *Renovation Projects*, and *Civil Works*.

### 5. 03 / Complete Brochure Services
- Complete official brochure catalogue across 7 disciplines:
  - **A. Kitchens & Storage:** Modular / Semi Modular Kitchens, Wardrobes / Cupboards
  - **B. Woodwork & Furniture:** Complete Wood Works, Residential Furniture, Office Furniture
  - **C. Wallpapers & Wall Finishes:** 3D Designed Wallpapers, 4D Customized Wallpapers, PVC / PU Panels, Paints & Putty Works
  - **D. Flooring:** Vinyl / PVC Flooring, Wooden / SPC Flooring
  - **E. Windows & Soft Furnishings:** Window Blinds, Customized Window Blinds, Customized Curtains
  - **F. Landscape & Green Spaces:** Artificial Grass / Sports Turf, Vertical Garden
  - **G. Ceiling & Fabrication:** False Ceiling, Fabrications
- Filterable category tabs and detailed specification modal with instant pre-filled enquiry CTA.

### 6. 04 / Special Offers & Packages
- 5 enquiry-based packages with accurate commercial labeling (*"Enquire for Current Offers"*).

### 7. 05 / Selected Work Portfolio & Lightbox
- High-res project gallery featuring real photography from SD Classic Interiors portfolio.
- Category filters (*All, Living Spaces, Bedrooms, Kitchens, Commercial, Architectural Details*).
- Fullscreen keyboard-accessible lightbox (Left/Right arrow navigation, Esc to close).

### 8. 06 / About SD Classic Interiors & 8 Commitments
- Split editorial layout with official founding story (2019) and Visakhapatnam showroom background.
- 8 verified company standards:
  - High End Finishes
  - Affordable Prices
  - Customized Designs
  - Warranty on Workmanship
  - Customer Satisfaction
  - Specialized in Renovations
  - Hassle Free Services
  - 100% Quality Assured

### 9. 07 / Methodology & Process
- 4-phase structured journey: `01 DISCOVER`, `02 DESIGN`, `03 EXECUTE`, `04 COMPLETE`.

### 10. 08 / Credibility Standards
- Minimalist typographic standards highlighting craft and transparency.

### 11. 09 / Closing CTA
- Full-width high-contrast banner with direct telephone link (`9676179499`) and WhatsApp integration.

### 12. 10 / Two Separate Business Divisions Directory
- **Residential Division:**
  - Company: SD Classic Interiors
  - Phone / WhatsApp: +91 9676179499
  - Email: `sd.classicinteriors99@gmail.com`
  - Address: `#17-61/2, Near Govt Hospital, BRTS Main Road, Pendurthi, Visakhapatnam - 531173`
- **Commercial / Corporate Division:**
  - Company: SD Constructions & Infra
  - Email: `sdconinfra@gmail.com`
  - GSTIN: `37AAAFS9667J1Z9`
  - Location: `Chinnamushidiwada, Visakhapatnam - 530051`
- One-click address copy interactions and interactive Google Maps embed.

### 13. 11 / Functional Consultation Enquiry Form
- Accessible input fields: Full Name, Indian Phone Number (10 digits), Email, Project Type, Service Required dropdown, Project Location, Estimated Budget (optional), Project Description.
- Validations with accessible alerts.
- Local storage submission persistence and instant **"SUBMIT VIA WHATSAPP"** fallback.

### 14. 12 / Refined Black Footer
- Brand monogram, tagline, links, Instagram link (`https://www.instagram.com/sd.classicinteriors/`), verified contact details, copyright statement, and smooth back-to-top button.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS (Strict custom monochrome palette)
- **Animation:** Framer Motion (SVG line drawing, 3D architectural door perspective)
- **Icons:** Lucide React
- **Typography:** Google Fonts (`Cormorant Garamond` serif + `Manrope` sans-serif)
- **SEO & Structured Data:** Schema.org `InteriorDesigner` & `GeneralContractor` JSON-LD

---

## 🚀 Getting Started

### Development
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
npm run preview
```
