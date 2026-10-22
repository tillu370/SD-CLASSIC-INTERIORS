import React, { useState } from 'react';
import { 
  Star, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  CheckCircle2 
} from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';

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

interface ReviewItem {
  id: string;
  author: string;
  role: string;
  location: string;
  category: 'residential' | 'commercial' | 'decora' | 'turnkey';
  rating: number;
  date: string;
  text: string;
  highlight: string;
}

const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rajesh Varma',
    role: 'Homeowner · Bespoke Villa',
    location: 'Pendurthi, Visakhapatnam',
    category: 'residential',
    rating: 5,
    date: '1 month ago',
    text: 'Visiting their studio showroom in Pendurthi completely changed our confidence in the project. Being able to touch the Italian laminates, drawer channels, and acrylic finishes before ordering gave us 100% clarity. The execution was completed in 42 days right on schedule. Exceptional precision by the SD Classic team.',
    highlight: 'Studio showroom gave 100% clarity · Handed over on schedule'
  },
  {
    id: 'rev-2',
    author: 'Dr. K. Srinivasa Rao',
    role: 'Client · Luxury Penthouse',
    location: 'MVP Colony, Visakhapatnam',
    category: 'turnkey',
    rating: 5,
    date: '2 months ago',
    text: 'Turnkey interior execution handled with immense maturity. From 3D space planning to false ceiling lighting and modular kitchen installation, every millimeter was accounted for. Truly lives up to their tagline "Imagine Every Inch".',
    highlight: 'Every millimeter accounted for · Exceptional 3D execution'
  },
  {
    id: 'rev-3',
    author: 'Sai Kumar Reddy',
    role: 'Homeowner · 3BHK Flat',
    location: 'Madhurawada, Visakhapatnam',
    category: 'residential',
    rating: 5,
    date: '3 months ago',
    text: 'Found SD Classic Interiors through a recommendation. Their factory-finish modular cabinetry quality is far superior to on-site carpenter work. Very transparent pricing with no hidden surprises.',
    highlight: 'Factory-finish cabinetry · 100% Transparent pricing'
  },
  {
    id: 'rev-4',
    author: 'Anita & Venkat Chowdary',
    role: 'Client · DECORA Wall & Window',
    location: 'Beach Road, Visakhapatnam',
    category: 'decora',
    rating: 5,
    date: '4 months ago',
    text: 'Their DECORA unit completely transformed our living room and master suite. The wallpaper selection and motorized blackout blinds are top notch. The finish and fabric quality are pure luxury.',
    highlight: 'DECORA transformed our space · Pure luxury fabrics'
  },
  {
    id: 'rev-5',
    author: 'M. Ramesh Naidu',
    role: 'Managing Director · Corporate Office',
    location: 'Siripuram, Visakhapatnam',
    category: 'commercial',
    rating: 5,
    date: '5 months ago',
    text: 'SD Constructions & Infra delivered our 4,500 sq.ft commercial office turnkey contract with verified GST compliance and professional MEP supervision. Delivered ahead of our business launch date.',
    highlight: 'Turnkey corporate office · GST verified & on time'
  },
  {
    id: 'rev-6',
    author: 'Pooja & Harish V.',
    role: 'Homeowners · Modern Apartment',
    location: 'Sujatha Nagar, Visakhapatnam',
    category: 'residential',
    rating: 5,
    date: '6 months ago',
    text: 'Clean architectural lines, perfect contrast lighting, and polite workforce. The after-handover service support was equally prompt when we needed minor hinge adjustments.',
    highlight: 'Prompt after-handover support · Polite workforce'
  }
];

export const GoogleReviewsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'commercial' | 'decora'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredReviews = activeTab === 'all' 
    ? REVIEWS 
    : REVIEWS.filter(r => r.category === activeTab || (activeTab === 'residential' && r.category === 'turnkey'));

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : Math.max(0, filteredReviews.length - 1)));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < filteredReviews.length - 1 ? prev + 1 : 0));
  };

  // Google review intent URL
  const googleReviewsUrl = "https://www.google.com/search?q=SD+Classic+Interiors+Visakhapatnam+reviews";

  return (
    <section 
      id="reviews" 
      className="py-24 sm:py-32 bg-[#050505] text-white relative border-t border-graphite/40 overflow-hidden"
      aria-label="Client Google Reviews"
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />

      {/* Ambient Watermark */}
      <div 
        className="absolute top-12 right-6 sm:right-16 text-8xl sm:text-9xl font-serif text-white/[0.03] select-none pointer-events-none font-bold"
        aria-hidden="true"
      >
        4.9★
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-[11px] font-mono tracking-[0.28em] uppercase text-mid-grey">
                07 / CLIENT ENDORSEMENTS
              </span>
              <div className="w-10 h-[1px] bg-graphite" />
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif tracking-[0.02em] text-white leading-tight mb-4">
              Verified Google Reviews
            </h2>
            
            <p className="text-sm sm:text-base font-sans font-light text-light-grey/80 leading-relaxed">
              Read authentic feedback from homeowners, villa owners, and commercial partners who trusted SD Classic Interiors for their dream spaces in Visakhapatnam.
            </p>
          </div>

          {/* Overall Google Rating Badge Card */}
          <div className="p-6 bg-pure-black/90 border border-graphite rounded-lg flex items-center space-x-5 shadow-[0_20px_40px_rgba(0,0,0,0.8)] shrink-0 backdrop-blur-md">
            <div className="w-12 h-12 rounded-full bg-charcoal border border-graphite flex items-center justify-center text-white shrink-0">
              <GoogleIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-serif font-bold text-white">4.9</span>
                <div className="flex items-center text-white">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                  ))}
                </div>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-mid-grey block mt-0.5">
                Google Verified Rating · 78+ Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Filter Pills & Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-graphite/40">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => { setActiveTab('all'); setCurrentIndex(0); }}
              className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all rounded-sm border ${
                activeTab === 'all'
                  ? 'bg-white text-pure-black border-white font-semibold'
                  : 'bg-charcoal/60 text-light-grey border-graphite hover:border-white/60 hover:text-white'
              }`}
            >
              All Reviews ({REVIEWS.length})
            </button>
            <button
              onClick={() => { setActiveTab('residential'); setCurrentIndex(0); }}
              className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all rounded-sm border ${
                activeTab === 'residential'
                  ? 'bg-white text-pure-black border-white font-semibold'
                  : 'bg-charcoal/60 text-light-grey border-graphite hover:border-white/60 hover:text-white'
              }`}
            >
              Residential &amp; Villas
            </button>
            <button
              onClick={() => { setActiveTab('commercial'); setCurrentIndex(0); }}
              className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all rounded-sm border ${
                activeTab === 'commercial'
                  ? 'bg-white text-pure-black border-white font-semibold'
                  : 'bg-charcoal/60 text-light-grey border-graphite hover:border-white/60 hover:text-white'
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => { setActiveTab('decora'); setCurrentIndex(0); }}
              className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all rounded-sm border ${
                activeTab === 'decora'
                  ? 'bg-white text-pure-black border-white font-semibold'
                  : 'bg-charcoal/60 text-light-grey border-graphite hover:border-white/60 hover:text-white'
              }`}
            >
              DECORA Studio
            </button>
          </div>

          <div className="flex items-center space-x-2 self-end sm:self-auto">
            <button
              onClick={handlePrev}
              aria-label="Previous Review"
              className="w-10 h-10 rounded-sm bg-charcoal border border-graphite hover:border-white hover:bg-white hover:text-pure-black text-white flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Review"
              className="w-10 h-10 rounded-sm bg-charcoal border border-graphite hover:border-white hover:bg-white hover:text-pure-black text-white flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="group relative bg-pure-black/80 border border-graphite p-7 sm:p-8 rounded-lg flex flex-col justify-between hover:border-white/40 hover:-translate-y-1 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-sm"
            >
              <div>
                {/* Top Row: Stars + Google Badge + Date */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-white text-white" />
                    ))}
                  </div>
                  <div className="flex items-center space-x-2 text-mid-grey">
                    <GoogleIcon className="w-4 h-4 text-light-grey" />
                    <span className="text-[10px] font-mono tracking-wider">{rev.date}</span>
                  </div>
                </div>

                {/* Highlight Tag */}
                <div className="mb-4 inline-block px-2.5 py-1 bg-charcoal border border-graphite text-[10px] font-mono text-light-grey rounded-sm">
                  {rev.highlight}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm font-sans font-light text-light-grey/90 leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-graphite/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-serif font-semibold text-white group-hover:text-light-grey transition-colors">
                    {rev.author}
                  </h4>
                  <span className="text-[11px] font-mono text-mid-grey block">
                    {rev.role}
                  </span>
                  <span className="text-[10px] font-mono text-mid-grey/80 block">
                    {rev.location}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-charcoal border border-graphite flex items-center justify-center text-white shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Row: Google Actions */}
        <div className="p-7 sm:p-9 bg-charcoal/50 border border-graphite rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="flex items-center space-x-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-lg bg-pure-black border border-graphite flex items-center justify-center text-white shrink-0 hidden sm:flex">
              <Quote className="w-5 h-5 text-mid-grey" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-serif text-white font-medium">
                Have you worked with SD Classic Interiors?
              </h3>
              <p className="text-xs font-sans text-mid-grey">
                We value your feedback. Share your experience with future homeowners on Google.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-white text-pure-black text-xs font-mono tracking-widest uppercase font-semibold rounded-sm hover:bg-light-grey transition-all shadow-md hover:-translate-y-0.5"
            >
              <span>WRITE A REVIEW</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={BRAND_INFO.residential.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-charcoal text-white border border-graphite text-xs font-mono tracking-widest uppercase rounded-sm hover:border-white hover:bg-white hover:text-pure-black transition-all shadow-md hover:-translate-y-0.5"
            >
              <span>VIEW ON GOOGLE MAPS</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
