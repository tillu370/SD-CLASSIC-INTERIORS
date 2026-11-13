import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { Breadcrumb, Lightbox, focusRing } from './ProjectsPages';
import { SERVICE_ITEMS, serviceGallery } from '../data/servicesData';
import { BRAND_INFO, createWhatsAppHref } from '../data/websiteData';
import { type Route } from '../lib/useHashRoute';

interface ServiceGalleryPageProps {
  route: Extract<Route, { name: 'service' }>;
  onEnquireService: (serviceName: string) => void;
}

export const ServiceGalleryPage: React.FC<ServiceGalleryPageProps> = ({ route, onEnquireService }) => {
  const service = SERVICE_ITEMS.find((s) => s.id === route.id);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const gallery = service ? serviceGallery(service) : [];

  useEffect(() => {
    const previous = document.title;
    document.title = `${service ? service.title : 'Service'} | SD Classic Interiors`;
    window.scrollTo(0, 0);
    return () => {
      document.title = previous;
    };
  }, [service]);

  return (
    <section className="bg-[#080808] text-[#F5F3EF] min-h-screen pt-28 sm:pt-32 pb-14 sm:pb-20 relative">
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {!service ? (
          <div className="py-16 text-center">
            <h1 className="font-serif text-2xl sm:text-3xl mb-3">We couldn't find that service</h1>
            <a
              href="#services"
              className={`inline-flex items-center space-x-2 px-7 min-h-[44px] border border-[#D5D2CC]/60 text-xs font-sans tracking-[0.2em] uppercase hover:bg-white/5 transition-colors ${focusRing}`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>What We Do</span>
            </a>
          </div>
        ) : (
          <>
            <Breadcrumb
              items={[
                { label: 'Home', href: '#home' },
                { label: 'What We Do', href: '#services' },
                { label: service.title },
              ]}
            />

            <div className="max-w-2xl mb-8 sm:mb-12">
              <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#A5A5A5] font-medium block mb-3">
                {service.group}
              </span>
              <h1 className="text-[1.9rem] sm:text-[clamp(2rem,4vw,3.25rem)] font-serif font-normal leading-[1.1] mb-3">
                {service.title}
              </h1>
              <p className="text-sm sm:text-base font-sans font-light text-[#A5A5A5] leading-[1.7]">
                {service.description}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setLightbox(i)}
                  className={`group relative block overflow-hidden bg-black border border-[#292929] hover:border-[#D5D2CC]/50 transition-colors text-left ${focusRing}`}
                  aria-label={`Open ${service.title} photo ${i + 1}`}
                >
                  <img
                    src={src}
                    alt={`${service.title} – photo ${i + 1}`}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>

            <div className="mt-10 sm:mt-14 border-t border-[#292929] pt-8 sm:pt-10">
              <h2 className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#A5A5A5] mb-4">
                Specification Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10">
                {service.features.map((feat) => (
                  <div key={feat} className="flex items-center space-x-2 text-xs sm:text-sm font-sans text-[#D5D2CC]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onEnquireService(service.title)}
                  className={`flex-1 py-3.5 bg-white text-[#080808] font-sans text-xs tracking-[0.2em] uppercase font-semibold text-center hover:bg-[#D5D2CC] transition-colors ${focusRing}`}
                >
                  ENQUIRE FOR THIS SERVICE
                </button>
                <a
                  href={createWhatsAppHref(
                    BRAND_INFO.residential.whatsappUrl,
                    `Hello SD Classic Interiors! I'm interested in your ${service.title} service. Please share the details and next steps.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center space-x-2 px-6 py-3.5 border border-white/30 text-white hover:border-white hover:bg-white/10 text-xs tracking-widest uppercase transition-colors ${focusRing}`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </>
        )}
      </div>

      {service && lightbox !== null && (
        <Lightbox
          label={service.title}
          items={gallery.map((src, i) => ({
            src,
            alt: `${service.title} – photo ${i + 1}`,
            caption: `${service.title} · ${i + 1} of ${gallery.length}`,
            w: 1448,
            h: 1086,
          }))}
          index={lightbox}
          onIndex={setLightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
};
