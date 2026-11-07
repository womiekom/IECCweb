import React, { useState, useEffect } from 'react';
import { navigationLinks } from '../data/presentationData';

export default function PresentationNav({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (setActiveSection) {
      setActiveSection(id);
    }
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-8 py-4 pointer-events-none">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full pointer-events-auto transition-all duration-500 ${
          scrolled
            ? 'bg-city-ivory/80 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-city-charcoal-100/80 text-city-charcoal-900'
            : 'bg-transparent text-white border border-transparent'
        }`}
      >
        {/* Brand identity with Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <img
            src="/assets/images/jakarta_for_all_logo.svg"
            alt="Jakarta For All"
            className="h-7 sm:h-8 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-105"
          />
        </button>

        {/* Clean Architectural Nav Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navigationLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-2 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? scrolled
                      ? 'text-city-teal-700'
                      : 'text-white'
                    : scrolled
                      ? 'text-city-charcoal-600 hover:text-city-charcoal-950'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {/* Active Underline Pill Indicator */}
                {isActive && (
                  <span
                    className={`absolute bottom-0.5 inset-x-3 h-[2px] rounded-full transition-all duration-300 ${
                      scrolled ? 'bg-city-teal-600' : 'bg-city-sage-400 shadow-[0_0_8px_#7FA87E]'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
