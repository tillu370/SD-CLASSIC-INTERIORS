import React from 'react';
import { BRAND_INFO } from '../data/websiteData';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.74.46 3.44 1.32 4.95L2 22l5.27-1.38a9.9 9.9 0 004.77 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.15h-.01a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.22 8.22 0 01-1.26-4.37c0-4.55 3.7-8.25 8.26-8.25 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 012.42 5.83c0 4.55-3.71 8.24-8.26 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.04 0 1.2.88 2.36 1 2.52.12.17 1.74 2.65 4.21 3.72.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z" />
  </svg>
);

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`${BRAND_INFO.residential.whatsappUrl}?text=${encodeURIComponent(
        'Hello SD Classic Interiors, I would like to know more.'
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[70] group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40 motion-reduce:hidden" />
      <span className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105">
        <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </span>
    </a>
  );
};
