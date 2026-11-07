import React, { useRef, useState, useEffect } from 'react';
import { solutionData } from '../data/presentationData';
import { Compass, Stethoscope, Briefcase, Sparkles } from 'lucide-react';

export default function SolutionSection() {
  const iconList = [Compass, Stethoscope, Briefcase];
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Custom Roblox simulation illustration assets for each core civic principle
  const principleAssets = [
    {
      img: '/assets/roblox/roblox_accessible_transit.jpg',
      alt: 'Accessible transit low-poly 3D Roblox environment'
    },
    {
      img: '/assets/roblox/roblox_healthcare_clinic.jpg',
      alt: 'Inclusive healthcare low-poly 3D Roblox environment'
    },
    {
      img: '/assets/roblox/roblox_workplace_aoe.jpg',
      alt: 'Ability Opportunity Engine low-poly 3D Roblox workplace'
    }
  ];

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

  return (
    <section
      ref={sectionRef}
      id="solution"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-transparent border-y-2 border-city-charcoal-200 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-city-teal-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-city-purple-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Cartoony Slide-Up */}
        <div className={`max-w-3xl mb-16 cartoony-slide-up ${isVisible ? 'cartoony-active' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-city-emerald-500 text-white text-xs font-heading uppercase tracking-wider mb-4 border border-city-emerald-600 shadow-poly-sm">
            <span>{solutionData.badge}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-city-charcoal-900 tracking-normal leading-tight mb-4">
            {solutionData.title}
          </h2>

          {/* Central Statement Callout */}
          <p className="font-display text-xl sm:text-2xl text-city-teal-600 mb-6 leading-snug tracking-wide">
            “{solutionData.centralStatement}”
          </p>

          <p className="font-sans text-base text-city-charcoal-800 leading-relaxed font-normal">
            {solutionData.supportingExplanation}
          </p>
        </div>

        {/* 3 Core Principles Cards with CONSTANT FLOAT ANIMATION & COLOR VARIETY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutionData.principles.map((principle, idx) => {
            const Icon = iconList[idx] || Sparkles;
            const floatAnimClass = idx === 0 ? 'animate-card-float-1' : idx === 1 ? 'animate-card-float-2' : 'animate-card-float-3';
            return (
              <div
                key={idx}
                className={`bg-white/95 backdrop-blur-md rounded-2xl p-7 roblox-card-block relative flex flex-col justify-between ${floatAnimClass} cartoony-pop ${
                  isVisible ? 'cartoony-active' : ''
                } ${
                  idx === 0
                    ? 'border-city-teal-400 shadow-[0_6px_0_0_#2A9D8F]'
                    : idx === 1
                      ? 'border-city-emerald-400 shadow-[0_6px_0_0_#12B886]'
                      : 'border-city-coral-400 shadow-[0_6px_0_0_#FA5252]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* 3D Physical Block Icon Container */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-poly transition-all duration-300 ${
                      principle.color === 'teal'
                        ? 'bg-city-teal-500 border-2 border-city-teal-600'
                        : principle.color === 'sage'
                          ? 'bg-city-emerald-500 border-2 border-city-emerald-600'
                          : 'bg-city-coral-500 border-2 border-city-coral-600'
                    }`}>
                      <Icon size={24} />
                    </div>

                    <span className={`text-[10px] sm:text-xs font-heading font-bold px-3 py-1.5 rounded-lg text-white border-2 shadow-sm ${
                      principle.color === 'teal'
                        ? 'bg-[#00897B] border-[#00695C]'
                        : principle.color === 'sage'
                          ? 'bg-[#1E88E5] border-[#1565C0]'
                          : 'bg-[#E53935] border-[#C62828]'
                    }`}>
                      {principle.badge}
                    </span>
                  </div>

                  {/* 3D Simulation Asset Preview Thumbnail */}
                  <div className="mb-5 relative rounded-xl overflow-hidden border-2 border-city-charcoal-200 shadow-poly-sm group/img">
                    <img
                      src={principleAssets[idx].img}
                      alt={principleAssets[idx].alt}
                      className="w-full h-36 object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                    />
                  </div>

                  <div className="text-xs font-heading text-city-indigo-600 uppercase tracking-wider mb-1">
                    Principle {principle.number} • {principle.subtitle}
                  </div>

                  <h3 className="font-heading text-xl text-city-charcoal-900 mb-3 transition-colors">
                    {principle.title}
                  </h3>

                  <p className="font-sans text-sm text-city-charcoal-700 leading-relaxed font-normal">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
