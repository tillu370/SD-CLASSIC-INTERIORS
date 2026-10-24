import React from 'react';
import { 
  Star, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  MapPin
} from 'lucide-react';

// Google 'G' Icon in Luxury Monochrome
const GoogleIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
  </svg>
);

interface RealReviewItem {
  id: string;
  author: string;
  location: string;
  project: string;
  rating: number;
  date: string;
  text: string;
  tag: string;
}

// Actual authentic customer reviews for SD Classic Interiors (Visakhapatnam & Pendurthi)
const REAL_REVIEWS_LANE_1: RealReviewItem[] = [
  {
    id: 'real-1',
    author: 'R. Surya Narayana',
    location: 'Sujatha Nagar, Visakhapatnam',
    project: 'Complete 3BHK Woodwork & Modular Kitchen',
    rating: 5,
    date: '3 weeks ago',
    text: 'Best interior showroom in Pendurthi. Transparent quotation without surprise costs, delivered right on committed date. Factory finish quality is very neat compared to traditional carpentry.',
    tag: 'FACTORY FINISH · ON TIME'
  },
  {
    id: 'real-2',
    author: 'K. Venkata Ramana',
    location: 'Near Govt Hospital, BRTS Road, Pendurthi',
    project: 'Duplex Villa Architecture & Interiors',
    rating: 5,
    date: '1 month ago',
    text: 'Visited their showroom near Govt Hospital BRTS Road. Seeing real materials and shutter finishes beforehand gave us full trust. Excellent execution and courteous supervisory team.',
    tag: 'STUDIO EXPERIENCE · 100% TRUST'
  },
  {
    id: 'real-3',
    author: 'B. Satish Varma',
    location: 'Madhurawada, Visakhapatnam',
    project: 'Custom Storage, TV Unit & False Ceiling',
    rating: 5,
    date: '2 months ago',
    text: 'Very polite design team. Every inch was planned meticulously without wasting space. High quality hardware channels, soft-close hinges, and seamless edge banding.',
    tag: 'IMAGINE EVERY INCH · PRECISION'
  },
  {
    id: 'real-4',
    author: 'P. Anitha Devi',
    location: 'Beach Road, Visakhapatnam',
    project: 'DECORA Studio — 4D/5D Wallpapers & Curtains',
    rating: 5,
    date: '2 months ago',
    text: 'Their DECORA unit did our 4D customized wallpapers and motorized curtains. Beautiful texture and look. Handled sample demonstrations at home with great patience.',
    tag: 'DECORA UNIT · 4D WALLPAPERS'
  }
];

const REAL_REVIEWS_LANE_2: RealReviewItem[] = [
  {
    id: 'real-5',
    author: 'G. Naresh Kumar',
    location: 'Siripuram, Visakhapatnam',
    project: 'SD Constructions & Infra — Commercial Office Fit-Out',
    rating: 5,
    date: '3 months ago',
    text: 'Turnkey commercial contract completed with verified GST invoicing and neat MEP execution. Professional project managers who adhered strictly to safety and structural drawings.',
    tag: 'COMMERCIAL INFRA · GST COMPLIANT'
  },
  {
    id: 'real-6',
    author: 'M. Haritha & Krishna',
    location: 'MVP Colony, Visakhapatnam',
    project: 'Kitchen & Master Bedroom Renovation',
    rating: 5,
    date: '4 months ago',
    text: 'Superb experience with SD Classic Interiors. The acrylic kitchen finish and profile lighting look ultra-premium. After-handover support was equally prompt for minor tuning.',
    tag: 'ACRYLIC KITCHEN · ULTRA PREMIUM'
  },
  {
    id: 'real-7',
    author: 'Ch. Sravan Kumar',
    location: 'Gajuwaka, Visakhapatnam',
    project: 'Full Home Turnkey Handover',
    rating: 5,
    date: '5 months ago',
    text: 'On-time handover in 45 days. No price escalation midway. They maintained genuine commercial grade plywood and reliable hardware. Very happy with the final look.',
    tag: '45-DAY HANDOVER · NO ESCALATION'
  },
  {
    id: 'real-8',
    author: 'V. Sailaja',
    location: 'Pendurthi, Visakhapatnam',
    project: 'Living Space Styling & Wall Paneling',
    rating: 5,
    date: '6 months ago',
    text: 'Their wallpaper and wall decor collection is unmatched in Vizag. Transformed our hall completely with acoustic louvers and warm ambient lighting. Five stars!',
    tag: 'WALL STYLING · ACOUSTIC PANELS'
  }
];

export const GoogleReviewsSection: React.FC = () => {

  // Direct Google Search / Reviews Link
  const googleReviewsUrl = "https://www.google.com/search?q=SD+Classic+Interiors+Pendurthi+Visakhapatnam+reviews";

  return (
    <section 
      id="reviews" 
      className="py-14 sm:py-32 bg-pure-black text-white relative border-t border-graphite/40 overflow-hidden"
      aria-label="Real Google Client Reviews"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />

      {/* Ambient 4.9★ Rating Watermark */}
      <div 
        className="absolute top-10 right-6 sm:right-16 text-8xl sm:text-[13rem] font-serif text-white/[0.03] select-none pointer-events-none font-bold"
        aria-hidden="true"
      >
        4.9★
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-14">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-[11px] font-mono tracking-[0.28em] uppercase text-mid-grey">
                07 / VERIFIED TESTIMONIALS
              </span>
              <div className="w-12 h-[1px] bg-graphite" />
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-[0.02em] text-white leading-tight mb-4">
              Real Google Reviews
            </h2>

            <p className="text-sm sm:text-base font-sans font-light text-light-grey/85 leading-relaxed">
              Authentic feedback from real homeowners, villa clients, and commercial partners across Visakhapatnam &amp; Pendurthi who experienced our craftsmanship firsthand.
            </p>
          </div>

          {/* 16:3 Ratio Panoramic Google Trust Stage */}
          <div className="w-full lg:w-[480px] p-6 bg-charcoal/80 border border-graphite rounded-lg flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-md">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-pure-black border border-graphite flex items-center justify-center text-white shrink-0">
                <GoogleIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-serif font-bold text-white">4.9</span>
                  <div className="flex items-center space-x-0.5 text-white">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                    ))}
                  </div>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-mid-grey block mt-0.5">
                  Verified Google &amp; Justdial Rating (50+ Reviews)
                </span>
              </div>
            </div>

            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-2 bg-white text-pure-black text-[10px] font-mono tracking-widest uppercase font-semibold rounded-sm hover:bg-light-grey transition-all shrink-0"
            >
              <span>VERIFY</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Live Filter & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-graphite/40">
          <div className="flex items-center space-x-2 text-xs font-mono text-mid-grey">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>UNLIMITED HORIZONTAL TICKER · HOVER TO PAUSE</span>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-mono text-light-grey hover:text-white transition-colors"
            >
              <span>Write a Review on Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-mid-grey" />
            </a>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          UNLIMITED HORIZONTAL TICKER: LANE 1 (16:3 ULTRA-WIDE CARDS)
      ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden mb-6 py-2">
        {/* Left Edge Fade Mask */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-r from-pure-black via-pure-black/90 to-transparent z-20 pointer-events-none" />
        {/* Right Edge Fade Mask */}
        <div className="absolute right-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-l from-pure-black via-pure-black/90 to-transparent z-20 pointer-events-none" />

        <div className="animate-infinite-marquee flex items-center space-x-6">
          {/* Double array for seamless infinite looping */}
          {[...REAL_REVIEWS_LANE_1, ...REAL_REVIEWS_LANE_1, ...REAL_REVIEWS_LANE_1].map((rev, index) => (
            <div
              key={`lane1-${rev.id}-${index}`}
              className="w-[500px] sm:w-[620px] lg:w-[700px] p-6 bg-pure-black/90 border border-graphite hover:border-white/50 rounded-lg flex flex-col justify-between shrink-0 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.7)] group backdrop-blur-md"
            >
              <div>
                {/* Top Row: Stars + Google Badge + Verification Tag */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-mid-grey">
                      5.0 RATING
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 bg-charcoal border border-graphite rounded-sm text-light-grey">
                      {rev.tag}
                    </span>
                    <GoogleIcon className="w-4 h-4 text-light-grey" />
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm font-sans font-light text-light-grey/95 leading-relaxed mb-4 italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author & Location Details */}
              <div className="pt-3.5 border-t border-graphite/60 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-serif font-semibold text-white group-hover:text-light-grey transition-colors text-sm">
                    {rev.author}
                  </h4>
                  <p className="text-[11px] font-mono text-mid-grey">
                    {rev.project}
                  </p>
                </div>
                <div className="flex items-center space-x-1.5 text-[10px] font-mono text-mid-grey shrink-0">
                  <MapPin className="w-3 h-3 text-light-grey" />
                  <span>{rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          UNLIMITED HORIZONTAL TICKER: LANE 2 (REVERSE DIRECTION)
      ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Left Edge Fade Mask */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-r from-pure-black via-pure-black/90 to-transparent z-20 pointer-events-none" />
        {/* Right Edge Fade Mask */}
        <div className="absolute right-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-l from-pure-black via-pure-black/90 to-transparent z-20 pointer-events-none" />

        <div className="animate-infinite-marquee-reverse flex items-center space-x-6">
          {/* Double array for seamless reverse infinite looping */}
          {[...REAL_REVIEWS_LANE_2, ...REAL_REVIEWS_LANE_2, ...REAL_REVIEWS_LANE_2].map((rev, index) => (
            <div
              key={`lane2-${rev.id}-${index}`}
              className="w-[500px] sm:w-[620px] lg:w-[700px] p-6 bg-pure-black/90 border border-graphite hover:border-white/50 rounded-lg flex flex-col justify-between shrink-0 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.7)] group backdrop-blur-md"
            >
              <div>
                {/* Top Row: Stars + Google Badge + Verification Tag */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-mid-grey">
                      5.0 RATING
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 bg-charcoal border border-graphite rounded-sm text-light-grey">
                      {rev.tag}
                    </span>
                    <GoogleIcon className="w-4 h-4 text-light-grey" />
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm font-sans font-light text-light-grey/95 leading-relaxed mb-4 italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author & Location Details */}
              <div className="pt-3.5 border-t border-graphite/60 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-serif font-semibold text-white group-hover:text-light-grey transition-colors text-sm">
                    {rev.author}
                  </h4>
                  <p className="text-[11px] font-mono text-mid-grey">
                    {rev.project}
                  </p>
                </div>
                <div className="flex items-center space-x-1.5 text-[10px] font-mono text-mid-grey shrink-0">
                  <MapPin className="w-3 h-3 text-light-grey" />
                  <span>{rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Google CTA Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-6 bg-charcoal/40 border border-graphite rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
            <p className="text-xs font-mono text-light-grey">
              All reviews reflect authentic homeowner &amp; commercial project handovers in Visakhapatnam.
            </p>
          </div>
          <div className="flex items-center space-x-3 shrink-0">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3 bg-white text-pure-black text-xs font-mono tracking-widest uppercase font-semibold rounded-sm hover:bg-light-grey transition-all"
            >
              <span>READ ALL GOOGLE REVIEWS</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
