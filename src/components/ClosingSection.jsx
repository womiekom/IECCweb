import React, { useRef, useState, useEffect } from 'react';
import { closingData } from '../data/presentationData';
import { ArrowUp } from 'lucide-react';

export default function ClosingSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={sectionRef}
      id="closing"
      className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-city-charcoal-950 text-white overflow-hidden border-t border-white/10"
    >
      {/* Background soft ambient illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-city-teal-500/20 via-city-sage-500/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Core Project Vision Message with Cartoony Slide-Up */}
        <div className={`max-w-4xl mx-auto text-center mb-16 cartoony-slide-up ${
          isVisible ? 'cartoony-active' : ''
        }`}>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-8">
            “{closingData.title}”
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            {closingData.description}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-400">
          <div>
            Jakarta For All • Roblox Game Presentation Platform
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-heading font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
