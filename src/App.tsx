import React, { useEffect, useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectCategoryGrid } from './components/ProjectCategoryGrid';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { DecorSolutionsSection } from './components/DecorSolutionsSection';
import { OffersSection } from './components/OffersSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { AboutSection } from './components/AboutSection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProjectsPage } from './components/ProjectsPages';
import { categoryPath, parseHash, useHashRoute } from './lib/useHashRoute';

export const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(() => parseHash(window.location.hash).name === 'home');
  const route = useHashRoute();

  // Returning home from a project page: the target section only exists after the
  // home view has rendered, so scroll to the hash anchor once it does.
  useEffect(() => {
    if (route.name !== 'home') return;
    const id = window.location.hash.replace('#', '');
    if (!id) return;
    const el = document.getElementById(id);
    if (el) requestAnimationFrame(() => el.scrollIntoView());
  }, [route.name]);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#contact';
    }
  };

  const handleSelectCategory = (categoryId: string) => {
    window.location.hash = categoryPath(categoryId);
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
      {/* Cinematic Black & Grey Splash Screen with Logo Reveal */}
      {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )}

      {/* Global Navigation */}
      <Navbar onOpenQuote={scrollToContact} onProjectsPage={route.name !== 'home'} />

      {route.name !== 'home' ? (
        <main>
          <ProjectsPage route={route} />
        </main>
      ) : (
      <main>
        {/* 01. Hero Section */}
        <HeroSection
          onOpenConsultation={scrollToContact}
          onExploreWork={handleExploreWork}
        />

        {/* 02. About SD Classic Interiors */}
        <AboutSection />

        {/* 03. Project Categories (Bright Off-White) */}
        <ProjectCategoryGrid onSelectCategory={handleSelectCategory} />

        {/* 04. Our Process & Methodology */}
        <ProcessSection />

        {/* 05. Decor Solutions - DECORA */}
        <DecorSolutionsSection />

        {/* 06. Complete Brochure Services */}
        <ServicesSection onEnquireService={handleEnquireService} />

        {/* 07. Selected Work Portfolio Gallery with Lightbox */}
        <PortfolioGallery />

        {/* 08. Verified Google Client Reviews (Social Proof Bridge) */}
        <GoogleReviewsSection />

        {/* 09. Special Offers & Packages */}
        <OffersSection onSelectOffer={handleSelectOffer} />

        {/* 10. Structured Contact Directory (Residential, Commercial & DECORA) */}
        <ContactSection />
      </main>
      )}

      {/* 09. Refined Luxury Black Footer */}
      <Footer />

      {/* Persistent WhatsApp Quick-Contact */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
