import React from 'react';
import { Star, ExternalLink, MapPin } from 'lucide-react';
import { Reveal } from './ui/Reveal';

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

const googleReviewsUrl = "https://www.google.com/search?q=SD+Classic+Interiors+Pendurthi+Visakhapatnam+reviews";

export const GoogleReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      className="py-8 sm:py-12 lg:py-14 bg-[#F4F4F2] text-[#111111] relative border-t border-black/10 overflow-hidden"
      aria-label="Client Reviews"
    >
      <div className="absolute inset-0 architectural-grid-light opacity-40 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10 mb-4 sm:mb-6">
        <Reveal className="max-w-2xl">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#5A5A5A] font-medium block mb-1.5 sm:mb-2">
            Client Reviews
          </span>
          <h2 className="text-[1.4rem] sm:text-[clamp(1.6rem,3vw,2.25rem)] font-serif font-normal leading-[1.1] mb-1 sm:mb-2">
            What Our Clients Say
          </h2>
          <p className="text-xs sm:text-sm font-sans font-light text-[#5A5A5A] leading-[1.6]">
            Feedback from homeowners and commercial clients across Visakhapatnam.
          </p>
        </Reveal>
      </div>

      <div className="relative w-full overflow-hidden mb-2 sm:mb-3 py-1">
        <div className="absolute left-0 inset-y-0 w-10 sm:w-32 bg-gradient-to-r from-[#F4F4F2] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-10 sm:w-32 bg-gradient-to-l from-[#F4F4F2] to-transparent z-20 pointer-events-none" />
        <div className="animate-infinite-marquee motion-reduce:animate-none flex items-center space-x-3 sm:space-x-4">
          {[...REAL_REVIEWS_LANE_1, ...REAL_REVIEWS_LANE_1, ...REAL_REVIEWS_LANE_1].map((rev, index) => (
            <div
              key={`lane1-${rev.id}-${index}`}
              className="w-[260px] sm:w-[420px] lg:w-[480px] p-3 sm:p-4 bg-white border border-black/10 hover:border-black/30 rounded-lg flex flex-col justify-between shrink-0 transition-colors duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#111111] text-[#111111]" />
                      ))}
                    </div>
                    <span className="hidden sm:inline text-[10px] font-mono tracking-widest text-[#5A5A5A]">
                      5.0 RATING
                    </span>
                  </div>
                  <span className="hidden sm:inline text-[10px] font-mono tracking-wider px-2 py-0.5 bg-black/[0.03] border border-black/10 rounded-sm text-[#555555]">
                    {rev.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-sans font-light text-[#333333]/90 leading-relaxed mb-2 sm:mb-3 italic whitespace-normal line-clamp-3 sm:line-clamp-3">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-2 border-t border-black/10 flex items-center justify-between gap-3 text-xs">
                <div className="min-w-0">
                  <h4 className="font-serif font-semibold text-[#111111] text-sm truncate">{rev.author}</h4>
                  <p className="text-[11px] font-mono text-[#5A5A5A] truncate">{rev.project}</p>
                </div>
                <div className="hidden sm:flex items-center space-x-1.5 text-[10px] font-mono text-[#5A5A5A] shrink-0">
                  <MapPin className="w-3 h-3 text-[#5A5A5A]" />
                  <span>{rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-1">
        <div className="absolute left-0 inset-y-0 w-10 sm:w-32 bg-gradient-to-r from-[#F4F4F2] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-10 sm:w-32 bg-gradient-to-l from-[#F4F4F2] to-transparent z-20 pointer-events-none" />
        <div className="animate-infinite-marquee-reverse motion-reduce:animate-none flex items-center space-x-3 sm:space-x-4">
          {[...REAL_REVIEWS_LANE_2, ...REAL_REVIEWS_LANE_2, ...REAL_REVIEWS_LANE_2].map((rev, index) => (
            <div
              key={`lane2-${rev.id}-${index}`}
              className="w-[260px] sm:w-[420px] lg:w-[480px] p-3 sm:p-4 bg-white border border-black/10 hover:border-black/30 rounded-lg flex flex-col justify-between shrink-0 transition-colors duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#111111] text-[#111111]" />
                      ))}
                    </div>
                    <span className="hidden sm:inline text-[10px] font-mono tracking-widest text-[#5A5A5A]">
                      5.0 RATING
                    </span>
                  </div>
                  <span className="hidden sm:inline text-[10px] font-mono tracking-wider px-2 py-0.5 bg-black/[0.03] border border-black/10 rounded-sm text-[#555555]">
                    {rev.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-sans font-light text-[#333333]/90 leading-relaxed mb-2 sm:mb-3 italic whitespace-normal line-clamp-3 sm:line-clamp-3">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-2 border-t border-black/10 flex items-center justify-between gap-3 text-xs">
                <div className="min-w-0">
                  <h4 className="font-serif font-semibold text-[#111111] text-sm truncate">{rev.author}</h4>
                  <p className="text-[11px] font-mono text-[#5A5A5A] truncate">{rev.project}</p>
                </div>
                <div className="hidden sm:flex items-center space-x-1.5 text-[10px] font-mono text-[#5A5A5A] shrink-0">
                  <MapPin className="w-3 h-3 text-[#5A5A5A]" />
                  <span>{rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 mt-4 sm:mt-6 relative z-10">
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center space-x-2 text-xs font-sans tracking-[0.18em] uppercase text-[#111111] hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B8A98C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F4F2]"
        >
          <span>Find Us on Google</span>
          <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
};
