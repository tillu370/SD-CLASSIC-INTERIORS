import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
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
      const sections = ['home', 'expertise', 'services', 'offers', 'portfolio', 'about', 'contact'];
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
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#portfolio', id: 'portfolio' },
    { name: 'Offers', href: '#offers', id: 'offers' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
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
              className="flex items-center space-x-3 group focus:outline-none"
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
                <span className="font-serif tracking-[0.16em] text-sm sm:text-base font-normal text-white group-hover:text-light-grey transition-colors uppercase">
                  SD CLASSIC INTERIORS
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`group relative text-xs tracking-[0.2em] uppercase font-sans py-1 transition-colors duration-300 ${
                      isActive ? 'text-white font-medium' : 'text-mid-grey hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
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
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={onOpenQuote}
                className="group relative inline-flex items-center space-x-2 text-xs tracking-[0.22em] uppercase px-5 py-2.5 border border-white/60 text-white hover:border-white hover:bg-white hover:text-pure-black hover:shadow-[0_12px_30px_-8px_rgba(255,255,255,0.3)] transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-white rounded-none"
                id="nav-get-quote-btn"
              >
                <span>GET A QUOTE</span>
                <span className="text-sm font-normal transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center space-x-3">
              <button
                onClick={onOpenQuote}
                className="text-[11px] tracking-widest uppercase px-3 py-1.5 border border-white/30 text-white"
              >
                QUOTE
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-light-grey hover:text-white focus:outline-none"
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
          className="fixed inset-0 z-50 bg-[#080808]/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 md:hidden animate-in fade-in duration-300"
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
          <nav className="flex flex-col space-y-5 my-auto" aria-label="Mobile Navigation">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="group flex items-center justify-between py-2 border-b border-graphite/20"
                >
                  <span className="text-xs font-mono tracking-widest text-mid-grey group-hover:text-white">
                    0{index + 1}
                  </span>
                  <span
                    className={`font-serif text-2xl tracking-[0.15em] transition-colors ${
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
