import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';

interface NavbarProps {
  onOpenQuote: () => void;
  onProjectsPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onProjectsPage = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Scroll progress
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }

      // Active section spy
      const sections = ['home', 'about', 'expertise', 'process', 'decor', 'services', 'portfolio', 'reviews', 'offers', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', short: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', short: 'About', href: '#about', id: 'about' },
    { name: 'Our Process', short: 'Process', href: '#process', id: 'process' },
    { name: 'Decor Solutions', short: 'Decor', href: '#decor', id: 'decor' },
    { name: 'Our Services', short: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', short: 'Projects', href: '#portfolio', id: 'portfolio' },
    { name: 'Client Reviews', short: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Offers', short: 'Offers', href: '#offers', id: 'offers' },
    { name: 'Contact', short: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = href;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#080808]/95 backdrop-blur-md border-b border-graphite/40 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-pure-black/80 via-pure-black/30 to-transparent py-5'
        }`}
      >
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="flex items-center justify-between">
            {/* Logo Left */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#home');
              }}
              className="flex items-center space-x-3 group focus:outline-none min-h-[44px] shrink-0"
              aria-label="SD Classic Interiors - Back to top"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 relative flex-shrink-0">
                <img
                  src="/images/logo1_trimmed.png"
                  alt="SD Monogram"
                  className="w-full h-full object-contain filter brightness-100 group-hover:brightness-125 transition-all duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/favicon.svg';
                  }}
                />
              </div>
              <div className="flex items-center">
                <span className="font-serif tracking-[0.12em] sm:tracking-[0.16em] text-[11px] min-[380px]:text-sm sm:text-base font-normal text-white group-hover:text-light-grey transition-colors uppercase whitespace-nowrap">
                  SD CLASSIC INTERIORS
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-5 2xl:space-x-8 mx-6 2xl:mx-10 whitespace-nowrap" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = (onProjectsPage ? 'portfolio' : activeSection) === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`group relative text-xs tracking-[0.14em] 2xl:tracking-[0.2em] uppercase font-sans py-1 transition-colors duration-300 ${
                      isActive ? 'text-white font-medium' : 'text-mid-grey hover:text-white'
                    }`}
                  >
                    <span>{link.short}</span>
                    {/* Fine underline active indicator */}
                    <span
                      className={`absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Right Action Button: GET A QUOTE → */}
            <div className="hidden xl:flex items-center space-x-4 shrink-0">
              <button
                onClick={onOpenQuote}
                className="group relative inline-flex items-center space-x-2 text-xs tracking-[0.18em] uppercase px-4 2xl:px-5 py-2.5 border border-white/60 text-white hover:border-white hover:bg-white hover:text-pure-black hover:shadow-[0_12px_30px_-8px_rgba(255,255,255,0.3)] transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-white rounded-none"
                id="nav-get-quote-btn"
              >
                <span><span className="2xl:hidden">QUOTE</span><span className="hidden 2xl:inline">GET A QUOTE</span></span>
                <span className="text-sm font-normal transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex xl:hidden items-center space-x-3">
              <button
                onClick={onOpenQuote}
                className="hidden min-[400px]:inline-flex items-center text-[11px] tracking-widest uppercase px-3.5 min-h-[44px] border border-white/30 text-white"
              >
                QUOTE
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-11 h-11 flex items-center justify-center text-light-grey hover:text-white focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-graphite/30">
          <div
            className="h-full bg-white transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#080808]/98 backdrop-blur-xl flex flex-col justify-between gap-4 p-6 sm:p-10 overflow-y-auto xl:hidden animate-in fade-in duration-300 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Row with Logo & Close button */}
          <div className="flex items-center justify-between border-b border-graphite/40 pb-5">
            <img
              src="/images/logo2_trimmed.png"
              alt="SD Classic Interiors - Imagine Every Inch"
              className="h-14 sm:h-16 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/favicon.svg';
              }}
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-mid-grey hover:text-white focus:outline-none"
              aria-label="Close navigation menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-1 my-auto" aria-label="Mobile Navigation">
            {navLinks.map((link, index) => {
              const isActive = (onProjectsPage ? 'portfolio' : activeSection) === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="group flex items-center justify-between min-h-[48px] py-1.5 border-b border-graphite/20"
                >
                  <span className="text-xs font-mono tracking-widest text-mid-grey group-hover:text-white">
                    0{index + 1}
                  </span>
                  <span
                    className={`font-serif text-xl sm:text-2xl tracking-[0.12em] transition-colors ${
                      isActive ? 'text-white italic' : 'text-light-grey group-hover:text-white'
                    }`}
                  >
                    {link.name}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-graphite group-hover:text-white transition-colors" />
                </a>
              );
            })}
          </nav>

          {/* Mobile Footer CTAs */}
          <div className="space-y-4 pt-6 border-t border-graphite/40">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3.5 bg-white text-pure-black font-sans text-xs tracking-[0.25em] uppercase font-semibold text-center"
            >
              REQUEST A CONSULTATION
            </button>

            <div className="flex items-center justify-between text-xs tracking-wider text-mid-grey pt-2">
              <a
                href={`tel:${BRAND_INFO.residential.phone}`}
                className="flex items-center space-x-2 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{BRAND_INFO.residential.phone}</span>
              </a>
              <a
                href={BRAND_INFO.residential.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-white"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
