import React, { useState, useEffect, useRef } from 'react';
import { problemData, researchSources } from '../data/presentationData';
import { Bus, Stethoscope, Briefcase, ExternalLink, ChevronDown, ChevronUp, BookOpen, Info } from 'lucide-react';

export default function ProblemSection() {
  const [activeChallengeIndex, setActiveChallengeIndex] = useState(0);
  const [showSources, setShowSources] = useState(false);
  const activeChallenge = problemData.challenges[activeChallengeIndex];
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Custom Roblox-inspired 3D simulation assets mapped to the 3 focus areas
  const challengeAssets = [
    {
      img: '/assets/roblox/roblox_accessible_transit.jpg',
      alt: 'Roblox 3D simulation of accessible transit with wheelchair ramp and tactile paving'
    },
    {
      img: '/assets/roblox/roblox_healthcare_clinic.jpg',
      alt: 'Roblox 3D simulation of inclusive healthcare clinic with digital queue and lowered counter'
    },
    {
      img: '/assets/roblox/roblox_workplace_aoe.jpg',
      alt: 'Roblox 3D simulation of AOE inclusive workplace with ergonomic height-adjustable station'
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

  const challengeIcons = [Bus, Stethoscope, Briefcase];

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden"
    >
      {/* Decorative ambient colorful glows */}
      <div className="absolute top-12 right-0 w-96 h-96 bg-city-teal-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-city-coral-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-city-indigo-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Cartoony Slide-Up */}
        <div className={`max-w-3xl mb-16 cartoony-slide-up ${isVisible ? 'cartoony-active' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-city-coral-500 text-white text-xs font-heading uppercase tracking-wider mb-4 border border-city-coral-600 shadow-poly-sm">
            <span>{problemData.badge}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-city-charcoal-900 tracking-normal leading-tight mb-5">
            {problemData.title}
          </h2>

          <p className="font-sans text-base sm:text-lg text-city-charcoal-700 leading-relaxed font-normal">
            {problemData.description}
          </p>
        </div>

        {/* 3 Real Research Evidence Stat Cards with CONSTANT FLOAT ANIMATION & VIBRANT PALETTE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {problemData.stats.map((stat, idx) => {
            const floatAnimClass = idx === 0 ? 'animate-card-float-1' : idx === 1 ? 'animate-card-float-2' : 'animate-card-float-3';
            const badgeBg = stat.color === 'teal' 
              ? 'bg-[#00897B] text-white border-[#00695C]' 
              : stat.color === 'sage' 
                ? 'bg-[#1E88E5] text-white border-[#1565C0]' 
                : 'bg-[#E53935] text-white border-[#C62828]';
            const numColor = stat.color === 'teal'
              ? 'text-[#00897B]'
              : stat.color === 'sage'
                ? 'text-[#1E88E5]'
                : 'text-[#E53935]';
            const cardBorder = stat.color === 'teal'
              ? 'border-[#00897B] shadow-[0_6px_0_0_#00897B]'
              : stat.color === 'sage'
                ? 'border-[#1E88E5] shadow-[0_6px_0_0_#1E88E5]'
                : 'border-[#E53935] shadow-[0_6px_0_0_#E53935]';

            return (
              <div
                key={idx}
                className={`p-7 rounded-2xl bg-white/95 backdrop-blur-md roblox-card-block relative flex flex-col justify-between ${floatAnimClass} cartoony-pop ${
                  isVisible ? 'cartoony-active' : ''
                } ${cardBorder}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] sm:text-xs font-heading font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg border-2 shadow-sm ${badgeBg}`}>
                      {stat.label}
                    </span>
                  </div>

                  <div className={`font-display text-4xl sm:text-5xl mb-4 tracking-normal ${numColor}`}>
                    {stat.number}
                  </div>

                  <p className="font-sans text-sm text-city-charcoal-800 leading-relaxed mb-4">
                    {stat.detail}
                  </p>
                </div>

                {/* Research Source Attribution */}
                <div className="pt-3 border-t border-city-charcoal-100 flex items-center justify-between text-xs font-sans text-city-charcoal-600 font-medium">
                  <span className="truncate">{stat.sourceShort}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Problem Explorer with Opposite Slides */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left: Challenge Selectors with Constant Subtle Float */}
          <div className={`lg:col-span-5 flex flex-col justify-between space-y-4 cartoony-slide-left ${
            isVisible ? 'cartoony-active delay-300' : ''
          }`}>
            <div className="text-xs font-heading text-city-indigo-600 uppercase tracking-wider">
              Three Interconnected Urban Challenges
            </div>

            {problemData.challenges.map((challenge, idx) => {
              const isSelected = activeChallengeIndex === idx;
              const Icon = challengeIcons[idx] || Bus;
              return (
                <button
                  key={challenge.id}
                  onClick={() => setActiveChallengeIndex(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border text-left w-full relative ${
                    isSelected
                      ? 'bg-white border-city-indigo-500 shadow-[0_6px_0_0_#4C6EF5] translate-x-2 scale-[1.01]'
                      : 'bg-white/80 backdrop-blur-sm border-city-charcoal-200 hover:bg-white hover:border-city-indigo-300 hover:translate-x-1 shadow-poly-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] sm:text-xs font-heading font-bold px-2.5 py-1 rounded-md text-white border shadow-sm ${
                      challenge.color === 'teal'
                        ? 'bg-[#00897B] border-[#00695C]'
                        : challenge.color === 'sage'
                          ? 'bg-[#1E88E5] border-[#1565C0]'
                          : 'bg-[#E53935] border-[#C62828]'
                    }`}>
                      {challenge.badge}
                    </span>
                    <Icon size={18} className={isSelected ? 'text-[#1E88E5]' : 'text-city-charcoal-400'} />
                  </div>

                  <h3 className="font-heading text-base text-city-charcoal-900 mb-1.5">
                    {challenge.title}
                  </h3>

                  <p className="font-sans text-xs text-city-charcoal-700 line-clamp-2 leading-relaxed">
                    {challenge.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed In-Depth Challenge Vignette with Constant Floating Motion */}
          <div className={`lg:col-span-7 rounded-2xl bg-white/95 backdrop-blur-md p-6 sm:p-9 roblox-card-block flex flex-col justify-between relative overflow-hidden animate-card-float-subtle cartoony-slide-right ${
            isVisible ? 'cartoony-active delay-400' : ''
          }`}>
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] sm:text-xs font-heading font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider text-white border shadow-sm ${
                  activeChallenge.color === 'teal'
                    ? 'bg-[#00897B] border-[#00695C]'
                    : activeChallenge.color === 'sage'
                      ? 'bg-[#1E88E5] border-[#1565C0]'
                      : 'bg-[#E53935] border-[#C62828]'
                }`}>
                  {activeChallenge.focusArea}
                </span>
                <span className="text-xs font-heading text-[#1E88E5] uppercase tracking-wider">
                  Focus 0{activeChallengeIndex + 1}
                </span>
              </div>

              <h4 className="font-heading text-2xl text-city-charcoal-900 mb-4 leading-tight">
                {activeChallenge.title}
              </h4>

              {/* 3D Roblox Simulation Visual Asset Preview Window */}
              <div className="mb-6 relative rounded-xl overflow-hidden border-2 border-city-charcoal-200 shadow-poly-sm group">
                <img
                  src={challengeAssets[activeChallengeIndex].img}
                  alt={challengeAssets[activeChallengeIndex].alt}
                  className="w-full h-48 sm:h-56 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <p className="font-sans text-sm text-city-charcoal-800 leading-relaxed font-normal mb-6">
                {activeChallenge.summary}
              </p>

              {/* Research Metrics Breakdown */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {activeChallenge.keyMetrics.map((m, mIdx) => (
                  <div key={mIdx} className="p-3 rounded-xl bg-city-sand/70 border border-city-charcoal-200 shadow-poly-sm">
                    <div className="text-xs font-heading text-city-charcoal-600 truncate mb-1">
                      {m.label}
                    </div>
                    <div className="font-heading text-sm text-city-indigo-600 font-bold">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Consequence Note */}
            <div className="text-xs font-sans text-city-charcoal-800 bg-city-sand/80 p-4 rounded-xl border border-city-charcoal-200 leading-relaxed">
              <strong className="text-city-charcoal-900 font-heading">Real-world impact:</strong> {activeChallenge.impact}
            </div>

          </div>

        </div>

        {/* Expandable Verified Research Sources & Evidence Section */}
        <div className="rounded-2xl border-2 border-city-charcoal-200 bg-white/95 backdrop-blur-md overflow-hidden shadow-poly-sm">
          <button
            onClick={() => setShowSources(!showSources)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-city-sand/40 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <BookOpen size={18} className="text-city-teal-600" />
              <span className="font-heading text-sm text-city-charcoal-900">
                Research & Academic Evidence Sources ({researchSources.length})
              </span>
              <span className="text-xs font-sans text-city-charcoal-600 hidden sm:inline">
                • Verified peer-reviewed papers & institutional reports
              </span>
            </div>

            <div className="flex items-center gap-1 text-xs font-heading text-city-teal-700">
              <span>{showSources ? 'Hide Sources' : 'View Verified Citations'}</span>
              {showSources ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </button>

          {showSources && (
            <div className="px-6 pb-6 pt-2 border-t border-city-charcoal-200 space-y-4">
              
              <div className="flex items-start gap-2 p-3 rounded-xl bg-city-sand/60 text-xs font-sans text-city-charcoal-700 mb-2">
                <Info size={16} className="shrink-0 mt-0.5 text-city-indigo-500" />
                <span>
                  <strong>Methodological Note:</strong> Findings reflect the specific scopes and surveyed boundaries of each source (e.g., ITDP Indonesia municipal transit evaluation, UNTIRTA bus stop audit, BMC 6-district national study across Indonesia, and BPS national labor statistics). They illustrate structural systemic barriers rather than an identical singular experience for all persons with disabilities.
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {researchSources.map((source) => (
                  <div
                    key={source.key}
                    className="p-4 rounded-xl bg-white border border-city-charcoal-200 flex flex-col justify-between text-xs space-y-2 shadow-poly-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-heading text-city-indigo-600 uppercase tracking-wider text-[11px]">
                          {source.focus} • {source.year}
                        </span>
                      </div>
                      <p className="font-sans font-medium text-city-charcoal-900 mb-1.5 leading-snug">
                        {source.citation}
                      </p>
                      <p className="font-sans text-city-charcoal-700 leading-relaxed">
                        <strong className="text-city-charcoal-900">Scope:</strong> {source.scope}
                      </p>
                      <p className="font-sans text-city-charcoal-700 leading-relaxed mt-1">
                        <strong className="text-city-charcoal-900">Findings:</strong> {source.findings}
                      </p>
                    </div>

                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-heading text-city-teal-700 hover:text-city-teal-600 transition-colors pt-2 border-t border-city-charcoal-100 w-fit"
                    >
                      <span>Access Publication Record</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                ))}
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
