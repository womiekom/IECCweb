import React from 'react';
import { projectMeta } from '../data/presentationData';

export default function CinematicHero({ onExploreClick }) {
  return (
    <section id="hero" className="relative h-screen min-h-[640px] w-full flex flex-col justify-center items-center overflow-hidden text-center select-none">
      
      {/* Background Motionless Video: Jakarta For All low-poly 3D city panoramic environment */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-105"
        >
          <source src="/assets/videos/VideoBg.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Film Vignette & Subtle Warm City Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-city-charcoal-950/80 via-city-charcoal-950/45 to-city-charcoal-950/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(42,157,143,0.22)_0%,transparent_70%)]" />
      </div>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Game Logo with gentle continuous floating animation */}
        <div className="relative mb-5 animate-logo-float select-none">
          <img
            src="/assets/images/jakarta_for_all_logo.svg"
            alt="Jakarta For All Logo"
            className="h-16 sm:h-20 md:h-26 w-auto object-contain filter drop-shadow-[0_10px_22px_rgba(0,0,0,0.65)]"
          />
        </div>

        {/* Tagline with Blocky Display Font */}
        <p className="font-display text-2xl sm:text-4xl text-city-sand mb-4 max-w-2xl drop-shadow-[0_2px_15px_rgba(0,0,0,0.85)] tracking-wide leading-tight">
          {projectMeta.tagline}
        </p>

        {/* Natural Narrative Description */}
        <p className="font-sans text-sm sm:text-base text-slate-200/90 max-w-xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] mb-8">
          {projectMeta.description}
        </p>

        {/* Action button with 3D tactile block press */}
        {onExploreClick && (
          <button
            onClick={onExploreClick}
            className="relative inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-city-teal-500 hover:bg-city-teal-400 text-white font-heading text-xs uppercase tracking-wider roblox-btn-3d cursor-pointer select-none"
          >
            <span>Explore the Presentation</span>
          </button>
        )}

      </div>

    </section>
  );
}
