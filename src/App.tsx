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
import { ContactCTA } from './components/ContactCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [introCompleted, setIntroCompleted] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
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

  const handleEnquireService = () => {
    scrollToContact();
  };

  const handleSelectOffer = () => {
    scrollToContact();
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
      <Navbar onOpenQuote={scrollToContact} />

      {/* Main Architectural Experience */}
      <main>
        {/* 01. Hero Section */}
        <HeroSection
          onOpenConsultation={scrollToContact}
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

        {/* 07. Methodology & Execution Process (Revamped Layout) */}
        <ProcessSection />

        {/* 08. Final Closing Call To Action */}
        <ContactCTA onDiscussProject={scrollToContact} />

        {/* 09. Structured Contact Directory (Residential, Commercial & DECORA) */}
        <ContactSection />
      </main>

      {/* 11. Refined Luxury Black Footer */}
      <Footer />
    </div>
  );
};

export default App;
