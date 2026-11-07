import React, { useState, useEffect } from 'react';
import PresentationNav from './components/PresentationNav';
import CinematicHero from './components/CinematicHero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import GameWorksSection from './components/GameWorksSection';
import HowAiWorksSection from './components/HowAiWorksSection';
import ClosingSection from './components/ClosingSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['hero', 'problem', 'solution', 'game-works', 'how-ai-works', 'closing'];
      
      // Determine viewport center / focus position
      const scrollY = window.scrollY;
      
      // If within top 100px, it's explicitly hero
      if (scrollY < 120) {
        setActiveSection('hero');
        return;
      }

      // Check each section from bottom to top based on bounding client rect
      const navOffset = 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navOffset && rect.bottom > navOffset) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreClick = () => {
    const problemEl = document.getElementById('problem');
    if (problemEl) {
      problemEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-city-ivory text-city-charcoal-900 font-sans selection:bg-city-teal-100 selection:text-city-teal-700 relative">
      {/* Transparent Sticky Global Navigation */}
      <PresentationNav activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* 
        NEUVA HERO OVERLAP MECHANIC:
        1. Sticky Fullscreen Hero with motionless video background (sticky top-0 h-screen w-full z-0)
           The video stays fixed at the viewport; it does not move up or down on scroll.
        2. Content Sheet with relative z-10 that slides UP directly over the Hero as user scrolls.
      */}
      <div>
        
        {/* Sticky Hero Section: Motionless video fixed at top of viewport */}
        <div id="hero" className="sticky top-0 h-screen w-full z-0 overflow-hidden">
          <CinematicHero onExploreClick={handleExploreClick} />
        </div>

        {/* 
          Overlapping Content Sheet:
          Slides up over the motionless hero video with curved corners and a rich elevation shadow
        */}
        <div
          id="content-sheet"
          className="relative z-10 shadow-[0_-30px_90px_rgba(15,18,21,0.35)] rounded-t-[36px] sm:rounded-t-[48px] border-t-2 border-city-charcoal-200"
        >
          {/* 
            Continuous Static Low-Poly Cityscape Canvas for Problem & Solution sections.
            The cityscape background image is FIXED to the viewport (like the hero video background mechanic)
            so when scrolled, the city background DOES NOT MOVE at all.
          */}
          <div className="relative overflow-hidden rounded-t-[36px] sm:rounded-t-[48px] bg-city-ivory">
            {/* Motionless Static Low-Poly Jakarta Cityscape Background: Fixed in place */}
            <div
              className="absolute inset-0 pointer-events-none z-0 select-none opacity-85"
              style={{
                backgroundImage: `url('/assets/roblox/jakarta_cityscape_bg.jpg')`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            />
            {/* Soft Warm Ivory Gradient Overlay ensuring crisp, high readability of cards and text */}
            <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-b from-city-ivory/55 via-city-ivory/35 to-city-ivory/65" />
            {/* Subtle Roblox Voxel Stud Pattern Grid */}
            <div className="absolute inset-0 pointer-events-none z-0 roblox-stud-pattern opacity-20 mix-blend-multiply" />

            {/* Content for Problem and Solution */}
            <div className="relative z-10">
              {/* Section: The Problem */}
              <ProblemSection />

              {/* Section: Our Solution */}
              <SolutionSection />
            </div>
          </div>

          {/* Section: How the Game Works */}
          <GameWorksSection />

          {/* Section: How AI Works (Immediately before Project Vision / ClosingSection) */}
          <HowAiWorksSection />

          {/* Section: Closing Project Message */}
          <ClosingSection />
        </div>

      </div>
    </div>
  );
}
