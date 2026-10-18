import React, { useState } from 'react';
import { IntroAnimation } from './components/IntroAnimation';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectCategoryGrid } from './components/ProjectCategoryGrid';
import { ServicesSection } from './components/ServicesSection';
import { OffersSection } from './components/OffersSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactCTA } from './components/ContactCTA';
import { ContactSection } from './components/ContactSection';
import { EnquiryForm } from './components/EnquiryForm';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [introCompleted, setIntroCompleted] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledOffer, setPrefilledOffer] = useState('');

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireService = (serviceName: string) => {
    setPrefilledService(serviceName);
    setPrefilledOffer('');
    scrollToEnquiry();
  };

  const handleSelectOffer = (offerTitle: string) => {
    setPrefilledOffer(offerTitle);
    setPrefilledService('');
    scrollToEnquiry();
  };

  const handleExploreWork = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F3] font-sans overflow-x-hidden selection:bg-white selection:text-black">
      {/* Signature Brand Reveal Opening Experience */}
      {!introCompleted && (
        <IntroAnimation onComplete={() => setIntroCompleted(true)} />
      )}

      {/* Global Navigation */}
      <Navbar onOpenQuote={scrollToEnquiry} />

      {/* Main Architectural Experience */}
      <main>
        {/* 01. Hero Section */}
        <HeroSection
          onOpenConsultation={scrollToEnquiry}
          onExploreWork={handleExploreWork}
        />

        {/* 02. Project Categories (Bright Off-White) */}
        <ProjectCategoryGrid onSelectCategory={handleSelectCategory} />

        {/* 03. Complete Brochure Services */}
        <ServicesSection onEnquireService={handleEnquireService} />

        {/* 04. Special Offers & Packages */}
        <OffersSection onSelectOffer={handleSelectOffer} />

        {/* 05. Selected Work Portfolio Gallery with Lightbox */}
        <PortfolioGallery />

        {/* 06. About SD Classic Interiors */}
        <AboutSection />

        {/* 07. Methodology & Process */}
        <ProcessSection />

        {/* 08. Credibility Standards */}
        <WhyChooseUs />

        {/* 09. Final Closing Call To Action */}
        <ContactCTA onDiscussProject={scrollToEnquiry} />

        {/* 10. Structured Contact Directory (Residential & Commercial) */}
        <ContactSection />

        {/* 11. Functional Consultation Enquiry Form */}
        <EnquiryForm
          prefilledService={prefilledService}
          prefilledOffer={prefilledOffer}
        />
      </main>

      {/* 12. Refined Luxury Black Footer */}
      <Footer />
    </div>
  );
};

export default App;
