import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Copy, 
  Check, 
  ExternalLink, 
  Building2, 
  Home 
} from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';

export const ContactSection: React.FC = () => {
  const [copiedResAddress, setCopiedResAddress] = useState(false);
  const [copiedCommAddress, setCopiedCommAddress] = useState(false);

  const copyToClipboard = (text: string, isResidential: boolean) => {
    navigator.clipboard.writeText(text);
    if (isResidential) {
      setCopiedResAddress(true);
      setTimeout(() => setCopiedResAddress(false), 2000);
    } else {
      setCopiedCommAddress(true);
      setTimeout(() => setCopiedCommAddress(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#F6F6F4] text-pure-black relative border-t border-light-grey/40 overflow-hidden"
      aria-label="Contact Information & Studio Location"
    >
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />

      {/* Large Watermark Number */}
      <div 
        className="absolute top-12 right-6 sm:right-12 text-7xl sm:text-9xl font-serif text-black/[0.04] select-none pointer-events-none font-bold"
        aria-hidden="true"
      >
        10
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-mid-grey font-medium">
              10 / DIRECTORY
            </span>
            <div className="w-12 h-[1px] bg-black/20" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-[0.03em] text-pure-black mb-5 leading-tight">
            Connect With Our Studios
          </h2>
          <p className="text-sm sm:text-base font-sans font-light text-graphite leading-relaxed max-w-xl">
            Choose between our residential interior design showroom or our commercial construction and infrastructure division.
          </p>
        </div>

        {/* Two Divisions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* DIVISION 1: Residential — SD Classic Interiors */}
          <div className="bg-white border border-[#E2E2DF] shadow-sm hover:shadow-md hover:border-pure-black/50 hover:-translate-y-1 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#EBEBE8] pb-5 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-pure-black flex items-center justify-center text-white shadow-sm">
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block font-medium">
                      DIVISION 01
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-pure-black">
                      Residential Interiors
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono tracking-widest text-pure-black px-2.5 py-1 bg-[#F5F5F3] border border-black/10 uppercase font-medium">
                  Studio Showroom
                </span>
              </div>

              {/* Company Details */}
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase block mb-1 font-medium">
                    Company Name
                  </span>
                  <p className="text-lg font-serif text-pure-black font-medium">
                    {BRAND_INFO.residential.company}
                  </p>
                </div>

                {/* Phone & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase block mb-1 font-medium">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${BRAND_INFO.residential.phone}`}
                      className="inline-flex items-center space-x-2 text-sm font-sans text-graphite hover:text-pure-black transition-colors font-medium"
                    >
                      <Phone className="w-4 h-4 text-pure-black" />
                      <span>{BRAND_INFO.residential.phoneFormatted}</span>
                    </a>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase block mb-1 font-medium">
                      WhatsApp Channel
                    </span>
                    <a
                      href={BRAND_INFO.residential.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-sm font-sans text-graphite hover:text-pure-black transition-colors font-medium"
                    >
                      <MessageSquare className="w-4 h-4 text-pure-black" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase block mb-1 font-medium">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${BRAND_INFO.residential.email}`}
                    className="inline-flex items-center space-x-2 text-sm font-sans text-graphite hover:text-pure-black transition-colors font-medium"
                  >
                    <Mail className="w-4 h-4 text-pure-black" />
                    <span>{BRAND_INFO.residential.email}</span>
                  </a>
                </div>

                {/* Studio Address */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase font-medium">
                      Studio & Experience Center
                    </span>
                    <button
                      onClick={() => copyToClipboard(BRAND_INFO.residential.address, true)}
                      className="inline-flex items-center space-x-1 text-[11px] font-mono text-mid-grey hover:text-pure-black transition-colors"
                    >
                      {copiedResAddress ? (
                        <>
                          <Check className="w-3 h-3 text-pure-black" />
                          <span className="text-pure-black font-semibold">COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>COPY ADDRESS</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-sm font-sans text-graphite leading-relaxed">
                    {BRAND_INFO.residential.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Quick Direction Link */}
            <div className="pt-8 mt-8 border-t border-[#EBEBE8]">
              <a
                href={BRAND_INFO.residential.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.2em] uppercase text-pure-black hover:text-graphite font-semibold transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* DIVISION 2: Commercial / Corporate — SD Constructions & Infra */}
          <div className="bg-white border border-[#E2E2DF] shadow-sm hover:shadow-md hover:border-pure-black/50 hover:-translate-y-1 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#EBEBE8] pb-5 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-pure-black flex items-center justify-center text-white shadow-sm">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-mid-grey block font-medium">
                      DIVISION 02
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-pure-black">
                      Commercial & Corporate
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono tracking-widest text-pure-black px-2.5 py-1 bg-[#F5F5F3] border border-black/10 uppercase font-medium">
                  Civil & Infra
                </span>
              </div>

              {/* Company Details */}
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase block mb-1 font-medium">
                    Corporate Division
                  </span>
                  <p className="text-lg font-serif text-pure-black font-medium">
                    {BRAND_INFO.commercial.company}
                  </p>
                </div>

                {/* GSTIN */}
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase block mb-1 font-medium">
                    Verified GSTIN Registration
                  </span>
                  <div className="inline-block px-3 py-1 bg-[#F5F5F3] border border-[#D5D5D0] text-xs font-mono tracking-wider text-pure-black font-semibold">
                    GST NO : {BRAND_INFO.commercial.gstin}
                  </div>
                </div>

                {/* Corporate Email */}
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase block mb-1 font-medium">
                    Corporate Tender & Enquiries Email
                  </span>
                  <a
                    href={`mailto:${BRAND_INFO.commercial.email}`}
                    className="inline-flex items-center space-x-2 text-sm font-sans text-graphite hover:text-pure-black transition-colors font-medium"
                  >
                    <Mail className="w-4 h-4 text-pure-black" />
                    <span>{BRAND_INFO.commercial.email}</span>
                  </a>
                </div>

                {/* Corporate Location */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono tracking-widest text-mid-grey uppercase font-medium">
                      Operational Location
                    </span>
                    <button
                      onClick={() => copyToClipboard(BRAND_INFO.commercial.location, false)}
                      className="inline-flex items-center space-x-1 text-[11px] font-mono text-mid-grey hover:text-pure-black transition-colors"
                    >
                      {copiedCommAddress ? (
                        <>
                          <Check className="w-3 h-3 text-pure-black" />
                          <span className="text-pure-black font-semibold">COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>COPY LOCATION</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-sm font-sans text-graphite leading-relaxed">
                    {BRAND_INFO.commercial.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Note on commercial tenders */}
            <div className="pt-8 mt-8 border-t border-[#EBEBE8]">
              <span className="text-[11px] font-mono tracking-wider text-mid-grey uppercase font-medium">
                Turnkey Contracts · Structural Alterations · MEP Execution
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
