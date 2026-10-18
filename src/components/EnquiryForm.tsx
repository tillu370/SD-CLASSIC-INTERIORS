import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ShieldCheck,
  User,
  Mail,
  Phone,
  MapPin,
  ChevronDown
} from 'lucide-react';
import { ALL_SERVICES, BRAND_INFO } from '../data/websiteData';

interface EnquiryFormProps {
  prefilledService?: string;
  prefilledOffer?: string;
  onSuccessCallback?: () => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  prefilledService = '',
  prefilledOffer = '',
  onSuccessCallback
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: 'Residential',
    serviceRequired: prefilledService || (prefilledOffer ? `Package: ${prefilledOffer}` : ''),
    projectLocation: '',
    estimatedBudget: '',
    projectDescription: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceRequired: prefilledService }));
    } else if (prefilledOffer) {
      setFormData((prev) => ({ ...prev, serviceRequired: `Package: ${prefilledOffer}` }));
    }
  }, [prefilledService, prefilledOffer]);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }

    // Phone validation for India: 10 digits, optionally with +91
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/;
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for consultations';
    } else if (!phoneRegex.test(cleanPhone)) {
      errs.phone = 'Please enter a valid 10-digit Indian phone number';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.serviceRequired) {
      errs.serviceRequired = 'Please select a primary service';
    }

    if (!formData.projectLocation.trim()) {
      errs.projectLocation = 'Please provide the project location or city';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateWhatsAppMessage = () => {
    return `*New Interior Enquiry — SD Classic Interiors*
👤 *Name:* ${formData.fullName}
📞 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email}
🏢 *Project Type:* ${formData.projectType}
🛠️ *Service Required:* ${formData.serviceRequired}
📍 *Location:* ${formData.projectLocation}
💰 *Est. Budget:* ${formData.estimatedBudget || 'Not specified'}
📝 *Description:* ${formData.projectDescription || 'N/A'}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable form processing and save to localStorage
    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('sd_classic_enquiries') || '[]');
        existing.push({
          ...formData,
          submittedAt: new Date().toISOString()
        });
        localStorage.setItem('sd_classic_enquiries', JSON.stringify(existing));
      } catch {
        // Ignore
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    }, 900);
  };

  const handleSendViaWhatsAppDirect = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `${BRAND_INFO.residential.whatsappUrl}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSuccess(true);
  };

  return (
    <section
      id="enquiry-form-section"
      className="py-24 sm:py-32 bg-[#000000] text-white relative border-t border-graphite/40 overflow-hidden"
      aria-label="Consultation Enquiry Form"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Form Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-mid-grey">
              11 / PROJECT INITIATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-[0.03em] text-white mb-4">
            Request an Architectural Consultation
          </h2>
          <p className="text-sm sm:text-base font-sans font-light text-light-grey/80 leading-relaxed">
            Share your space parameters and design requirements. Our team will review your scope and schedule a personalized discussion.
          </p>
        </div>

        {/* Success Banner */}
        {isSuccess ? (
          <div className="bg-[#111111] border border-white/40 p-8 sm:p-12 text-center animate-in fade-in duration-500">
            <div className="w-16 h-16 rounded-full border border-white/40 bg-pure-black flex items-center justify-center mx-auto mb-6 text-white">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white mb-3">
              Enquiry Received with Sincere Appreciation
            </h3>
            <p className="text-sm font-sans text-light-grey/90 max-w-md mx-auto mb-8 leading-relaxed">
              Thank you, <span className="text-white font-medium">{formData.fullName}</span>. An SD Classic Interiors design specialist will connect with you at <span className="text-white font-mono">{formData.phone}</span> shortly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`${BRAND_INFO.residential.whatsappUrl}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-white text-pure-black text-xs font-sans tracking-[0.2em] uppercase font-semibold hover:bg-light-grey transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open Instant WhatsApp Conversation</span>
              </a>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({
                    fullName: '',
                    phone: '',
                    email: '',
                    projectType: 'Residential',
                    serviceRequired: '',
                    projectLocation: '',
                    estimatedBudget: '',
                    projectDescription: ''
                  });
                }}
                className="text-xs font-sans tracking-[0.18em] uppercase text-mid-grey hover:text-white py-2"
              >
                Submit Another Enquiry
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#0e0e0e] border border-graphite/40 p-6 sm:p-10 md:p-12 relative shadow-2xl"
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-mono uppercase tracking-[0.2em] text-light-grey mb-2"
                >
                  Full Name <span className="text-white">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Varma"
                    className={`w-full bg-[#141414] border ${
                      errors.fullName ? 'border-red-400' : 'border-graphite/60'
                    } px-4 py-3 text-sm text-white placeholder-graphite focus:outline-none focus:border-white transition-colors`}
                  />
                  <User className="w-4 h-4 text-graphite absolute right-3.5 top-3.5 pointer-events-none" />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-300 font-sans flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-mono uppercase tracking-[0.2em] text-light-grey mb-2"
                >
                  Phone Number (India) <span className="text-white">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9676179499"
                    className={`w-full bg-[#141414] border ${
                      errors.phone ? 'border-red-400' : 'border-graphite/60'
                    } px-4 py-3 text-sm text-white placeholder-graphite focus:outline-none focus:border-white transition-colors`}
                  />
                  <Phone className="w-4 h-4 text-graphite absolute right-3.5 top-3.5 pointer-events-none" />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-300 font-sans flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono uppercase tracking-[0.2em] text-light-grey mb-2"
                >
                  Email Address <span className="text-white">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. client@example.com"
                    className={`w-full bg-[#141414] border ${
                      errors.email ? 'border-red-400' : 'border-graphite/60'
                    } px-4 py-3 text-sm text-white placeholder-graphite focus:outline-none focus:border-white transition-colors`}
                  />
                  <Mail className="w-4 h-4 text-graphite absolute right-3.5 top-3.5 pointer-events-none" />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-300 font-sans flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Project Type */}
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-xs font-mono uppercase tracking-[0.2em] text-light-grey mb-2"
                >
                  Project Type <span className="text-white">*</span>
                </label>
                <div className="relative">
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#141414] border border-graphite/60 pl-4 pr-10 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Turnkey">Turnkey Complete Execution</option>
                    <option value="Renovation">Renovation & Remodeling</option>
                    <option value="Civil Works">Civil Works & Alterations</option>
                    <option value="Other">Other Bespoke Requirement</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-graphite absolute right-3.5 top-3.5 pointer-events-none" />
                </div>
              </div>

              {/* Service Required */}
              <div>
                <label
                  htmlFor="serviceRequired"
                  className="block text-xs font-mono uppercase tracking-[0.2em] text-light-grey mb-2"
                >
                  Service Required <span className="text-white">*</span>
                </label>
                <div className="relative">
                  <select
                    id="serviceRequired"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className={`w-full bg-[#141414] border ${
                      errors.serviceRequired ? 'border-red-400' : 'border-graphite/60'
                    } pl-4 pr-10 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer`}
                  >
                    <option value="">Select a service discipline...</option>
                    {ALL_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.groupName})
                      </option>
                    ))}
                    <option value="Comprehensive 2BHK/3BHK Home Interior">Comprehensive 2BHK / 3BHK Home Interior</option>
                    <option value="Complete Commercial Office Fitout">Complete Commercial Office Fitout</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-graphite absolute right-3.5 top-3.5 pointer-events-none" />
                </div>
                {errors.serviceRequired && (
                  <p className="mt-1 text-xs text-red-300 font-sans flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.serviceRequired}</span>
                  </p>
                )}
              </div>

              {/* Project Location */}
              <div>
                <label
                  htmlFor="projectLocation"
                  className="block text-xs font-mono uppercase tracking-[0.2em] text-light-grey mb-2"
                >
                  Project Location / City <span className="text-white">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="projectLocation"
                    name="projectLocation"
                    value={formData.projectLocation}
                    onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                    placeholder="e.g. Pendurthi, MVP Colony, Visakhapatnam"
                    className={`w-full bg-[#141414] border ${
                      errors.projectLocation ? 'border-red-400' : 'border-graphite/60'
                    } px-4 py-3 text-sm text-white placeholder-graphite focus:outline-none focus:border-white transition-colors`}
                  />
                  <MapPin className="w-4 h-4 text-graphite absolute right-3.5 top-3.5 pointer-events-none" />
                </div>
                {errors.projectLocation && (
                  <p className="mt-1 text-xs text-red-300 font-sans flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.projectLocation}</span>
                  </p>
                )}
              </div>

              {/* Estimated Budget (Optional) */}
              <div className="md:col-span-2">
                <label
                  htmlFor="estimatedBudget"
                  className="block text-xs font-mono uppercase tracking-[0.2em] text-light-grey mb-2"
                >
                  Estimated Budget Range <span className="text-graphite font-sans lowercase">(optional)</span>
                </label>
                <div className="relative">
                  <select
                    id="estimatedBudget"
                    name="estimatedBudget"
                    value={formData.estimatedBudget}
                    onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                    className="w-full bg-[#141414] border border-graphite/60 pl-4 pr-10 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select an approximate range...</option>
                    <option value="Under ₹3 Lakhs">Under ₹3 Lakhs (Single Room / Kitchen Upgrade)</option>
                    <option value="₹3 Lakhs – ₹6 Lakhs">₹3 Lakhs – ₹6 Lakhs (2BHK Interiors / Essential)</option>
                    <option value="₹6 Lakhs – ₹12 Lakhs">₹6 Lakhs – ₹12 Lakhs (3BHK Turnkey / Premium)</option>
                    <option value="₹12 Lakhs – ₹25 Lakhs">₹12 Lakhs – ₹25 Lakhs (Luxury Villa / Complete)</option>
                    <option value="₹25 Lakhs+">₹25 Lakhs+ (Commercial / High-End Estate)</option>
                    <option value="Flexible / To be discussed">Flexible / To be discussed based on design</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-graphite absolute right-3.5 top-3.5 pointer-events-none" />
                </div>
              </div>

              {/* Project Description */}
              <div className="md:col-span-2">
                <label
                  htmlFor="projectDescription"
                  className="block text-xs font-mono uppercase tracking-[0.2em] text-light-grey mb-2"
                >
                  Project Details / Spatial Requirements
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  rows={4}
                  value={formData.projectDescription}
                  onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                  placeholder="Share any specific dimensions, floor plan status, preferred finishes, or timeline considerations..."
                  className="w-full bg-[#141414] border border-graphite/60 px-4 py-3 text-sm text-white placeholder-graphite focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>
            </div>

            {/* Privacy notice */}
            <div className="flex items-center space-x-2 text-[11px] font-mono text-mid-grey mb-8">
              <ShieldCheck className="w-3.5 h-3.5 text-light-grey" />
              <span>Your details are kept strictly confidential for interior consultation purposes. No spam.</span>
            </div>

            {/* Submission Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              {/* Primary Form Submission */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:flex-1 py-4 bg-white text-pure-black font-sans text-xs tracking-[0.22em] uppercase font-semibold hover:bg-light-grey transition-colors flex items-center justify-center space-x-2 disabled:opacity-60"
                id="submit-enquiry-form-btn"
              >
                {isSubmitting ? (
                  <span>TRANSMITTING ENQUIRY...</span>
                ) : (
                  <>
                    <span>SUBMIT ENQUIRY</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              {/* Instant WhatsApp Fallback Button */}
              <button
                type="button"
                onClick={handleSendViaWhatsAppDirect}
                className="w-full sm:flex-1 py-4 border border-white/40 text-white font-sans text-xs tracking-[0.22em] uppercase hover:border-white hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
                id="submit-enquiry-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4" />
                <span>SUBMIT VIA WHATSAPP →</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
