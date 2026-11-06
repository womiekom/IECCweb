import React, { useRef, useState, useEffect } from 'react';
import { solutionData } from '../data/presentationData';
import { Compass, Stethoscope, Briefcase, Sparkles } from 'lucide-react';

export default function SolutionSection() {
  const iconList = [Compass, Stethoscope, Briefcase];
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

  return (
    <section
      ref={sectionRef}
      id="solution"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-city-sand/40 border-y border-city-charcoal-100/80 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-city-teal-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-city-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Cartoony Slide-Up */}
        <div className={`max-w-3xl mb-16 cartoony-slide-up ${isVisible ? 'cartoony-active' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-city-sand text-city-charcoal-700 text-xs font-heading font-bold uppercase tracking-wider mb-4 border border-city-charcoal-100">
            <span>{solutionData.badge}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-city-charcoal-900 tracking-tight leading-tight mb-4">
            {solutionData.title}
          </h2>

          {/* Central Statement Callout */}
          <p className="font-display font-bold text-xl sm:text-2xl text-city-teal-700 mb-6 leading-snug">
            “{solutionData.centralStatement}”
          </p>

          <p className="font-sans text-base text-city-charcoal-700 leading-relaxed font-light">
            {solutionData.supportingExplanation}
          </p>
        </div>

        {/* 3 Core Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutionData.principles.map((principle, idx) => {
            const Icon = iconList[idx] || Sparkles;
            return (
              <div
                key={idx}
                className={`bg-city-card rounded-3xl p-8 border border-city-charcoal-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2.5 cartoony-pop ${
                  isVisible ? 'cartoony-active' : ''
                } ${
                  idx === 0 ? 'delay-100' : idx === 1 ? 'delay-200' : 'delay-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md transform group-hover:rotate-12 transition-transform duration-300 ${
                      principle.color === 'teal'
                        ? 'bg-gradient-to-tr from-city-teal-500 to-city-teal-400'
                        : principle.color === 'sage'
                          ? 'bg-gradient-to-tr from-city-sage-500 to-city-sage-400'
                          : 'bg-gradient-to-tr from-city-terracotta-500 to-city-terracotta-400'
                    }`}>
                      <Icon size={24} />
                    </div>

                    <span className="text-xs font-heading font-bold px-3 py-1 rounded-full bg-city-sand text-city-charcoal-700 border border-city-charcoal-100">
                      {principle.badge}
                    </span>
                  </div>

                  <div className="text-xs font-heading font-bold text-city-charcoal-400 uppercase tracking-wider mb-1">
                    Principle {principle.number} • {principle.subtitle}
                  </div>

                  <h3 className="font-heading font-bold text-xl text-city-charcoal-900 mb-3 group-hover:text-city-teal-700 transition-colors">
                    {principle.title}
                  </h3>

                  <p className="font-sans text-sm text-city-charcoal-700 leading-relaxed font-light">
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
