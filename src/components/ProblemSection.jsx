import React, { useState, useEffect, useRef } from 'react';
import { problemData, researchSources } from '../data/presentationData';
import { Bus, Stethoscope, Briefcase, ExternalLink, ChevronDown, ChevronUp, BookOpen, Info } from 'lucide-react';

export default function ProblemSection() {
  const [activeChallengeIndex, setActiveChallengeIndex] = useState(0);
  const [showSources, setShowSources] = useState(false);
  const activeChallenge = problemData.challenges[activeChallengeIndex];
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

  const challengeIcons = [Bus, Stethoscope, Briefcase];

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-city-ivory overflow-hidden"
    >
      {/* Decorative ambient gradients */}
      <div className="absolute top-12 right-0 w-96 h-96 bg-city-teal-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-city-terracotta-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Cartoony Slide-Up */}
        <div className={`max-w-3xl mb-16 cartoony-slide-up ${isVisible ? 'cartoony-active' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-city-sand text-city-charcoal-700 text-xs font-heading font-bold uppercase tracking-wider mb-4 border border-city-charcoal-100">
            <span>{problemData.badge}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-city-charcoal-900 tracking-tight leading-tight mb-5">
            {problemData.title}
          </h2>

          <p className="font-sans text-base sm:text-lg text-city-charcoal-700 leading-relaxed font-light">
            {problemData.description}
          </p>
        </div>

        {/* 3 Real Research Evidence Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {problemData.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-3xl bg-city-card border transition-all duration-300 shadow-card hover:shadow-card-hover hover:-translate-y-2 cartoony-pop flex flex-col justify-between ${
                isVisible ? 'cartoony-active' : ''
              } ${
                idx === 0 ? 'delay-100' : idx === 1 ? 'delay-200' : 'delay-300'
              } ${
                stat.color === 'teal'
                  ? 'border-city-teal-200/80 hover:border-city-teal-400'
                  : stat.color === 'sage'
                    ? 'border-city-sage-200/80 hover:border-city-sage-400'
                    : 'border-city-terracotta-200/80 hover:border-city-terracotta-400'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-heading font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    stat.color === 'teal'
                      ? 'bg-city-teal-100 text-city-teal-700'
                      : stat.color === 'sage'
                        ? 'bg-city-sage-100 text-city-sage-700'
                        : 'bg-city-terracotta-100 text-city-terracotta-700'
                  }`}>
                    {stat.label}
                  </span>
                </div>

                <div className={`font-heading font-extrabold text-5xl mb-3 tracking-tight ${
                  stat.color === 'teal'
                    ? 'text-city-teal-600'
                    : stat.color === 'sage'
                      ? 'text-city-sage-600'
                      : 'text-city-terracotta-600'
                }`}>
                  {stat.number}
                </div>

                <p className="font-sans text-sm text-city-charcoal-700 leading-relaxed mb-4">
                  {stat.detail}
                </p>
              </div>

              {/* Research Source Attribution */}
              <div className="pt-3 border-t border-city-charcoal-100/80 flex items-center justify-between text-xs font-mono text-city-charcoal-500">
                <span className="truncate">{stat.sourceShort}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Problem Explorer with Opposite Slides */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left: Challenge Selectors */}
          <div className={`lg:col-span-5 flex flex-col justify-between space-y-4 cartoony-slide-left ${
            isVisible ? 'cartoony-active delay-300' : ''
          }`}>
            <div className="text-xs font-heading font-bold text-city-charcoal-500 uppercase tracking-wider">
              Three Interconnected Urban Challenges
            </div>

            {problemData.challenges.map((challenge, idx) => {
              const isSelected = activeChallengeIndex === idx;
              const Icon = challengeIcons[idx] || Bus;
              return (
                <button
                  key={challenge.id}
                  onClick={() => setActiveChallengeIndex(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border text-left w-full ${
                    isSelected
                      ? 'bg-city-card border-city-charcoal-900 shadow-card-hover translate-x-2 scale-[1.01]'
                      : 'bg-city-sand/40 border-city-charcoal-100 hover:bg-city-card hover:border-city-charcoal-300 hover:translate-x-1'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-heading font-bold px-2.5 py-0.5 rounded-md ${
                      challenge.color === 'teal'
                        ? 'bg-city-teal-100 text-city-teal-700'
                        : challenge.color === 'sage'
                          ? 'bg-city-sage-100 text-city-sage-700'
                          : 'bg-city-terracotta-100 text-city-terracotta-700'
                    }`}>
                      {challenge.badge}
                    </span>
                    <Icon size={16} className="text-city-charcoal-400" />
                  </div>

                  <h3 className="font-heading font-bold text-base text-city-charcoal-900 mb-1.5">
                    {challenge.title}
                  </h3>

                  <p className="font-sans text-xs text-city-charcoal-600 line-clamp-2 leading-relaxed">
                    {challenge.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed In-Depth Challenge Vignette */}
          <div className={`lg:col-span-7 rounded-3xl bg-city-card p-6 sm:p-9 border border-city-charcoal-100 shadow-card flex flex-col justify-between relative overflow-hidden cartoony-slide-right ${
            isVisible ? 'cartoony-active delay-400' : ''
          }`}>
            
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-heading font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                  activeChallenge.color === 'teal'
                    ? 'bg-city-teal-100 text-city-teal-700 border border-city-teal-200'
                    : activeChallenge.color === 'sage'
                      ? 'bg-city-sage-100 text-city-sage-700 border border-city-sage-200'
                      : 'bg-city-terracotta-100 text-city-terracotta-700 border border-city-terracotta-200'
                }`}>
                  {activeChallenge.focusArea}
                </span>
                <span className="text-xs font-sans text-city-charcoal-500">
                  Focus 0{activeChallengeIndex + 1}
                </span>
              </div>

              <h4 className="font-heading font-extrabold text-2xl text-city-charcoal-900 mb-4 leading-tight">
                {activeChallenge.title}
              </h4>

              <p className="font-sans text-sm text-city-charcoal-700 leading-relaxed font-normal mb-6">
                {activeChallenge.summary}
              </p>

              {/* Research Metrics Breakdown */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {activeChallenge.keyMetrics.map((m, mIdx) => (
                  <div key={mIdx} className="p-3 rounded-xl bg-city-sand/50 border border-city-charcoal-100">
                    <div className="text-xs font-sans text-city-charcoal-500 truncate mb-1">
                      {m.label}
                    </div>
                    <div className="font-heading font-bold text-sm text-city-charcoal-900">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Consequence Note */}
            <div className="text-xs font-sans text-city-charcoal-700 bg-city-sand/60 p-4 rounded-2xl border border-city-charcoal-100 leading-relaxed">
              <strong className="text-city-charcoal-900">Real-world impact:</strong> {activeChallenge.impact}
            </div>

          </div>

        </div>

        {/* Expandable Verified Research Sources & Evidence Section */}
        <div className="rounded-2xl border border-city-charcoal-100 bg-city-card overflow-hidden shadow-sm">
          <button
            onClick={() => setShowSources(!showSources)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-city-sand/30 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <BookOpen size={18} className="text-city-teal-600" />
              <span className="font-heading font-bold text-sm text-city-charcoal-900">
                Research & Academic Evidence Sources ({researchSources.length})
              </span>
              <span className="text-xs font-sans text-city-charcoal-500 hidden sm:inline">
                • Verified peer-reviewed papers & institutional reports
              </span>
            </div>

            <div className="flex items-center gap-1 text-xs font-heading font-semibold text-city-teal-700">
              <span>{showSources ? 'Hide Sources' : 'View Verified Citations'}</span>
              {showSources ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </button>

          {showSources && (
            <div className="px-6 pb-6 pt-2 border-t border-city-charcoal-100 space-y-4">
              
              <div className="flex items-start gap-2 p-3 rounded-xl bg-city-sand/50 text-xs font-sans text-city-charcoal-600 mb-2">
                <Info size={16} className="shrink-0 mt-0.5 text-city-charcoal-500" />
                <span>
                  <strong>Methodological Note:</strong> Findings from specific research studies reflect their respective surveyed samples and geographic boundaries (e.g., Universitas Indonesia TransJakarta corridor audit, ITB commuter survey, BMC 6-district national study, and ILO national labor statistics). They illustrate structural systemic barriers rather than an identical singular experience for all persons with disabilities.
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {researchSources.map((source) => (
                  <div
                    key={source.key}
                    className="p-4 rounded-xl bg-city-ivory border border-city-charcoal-100 flex flex-col justify-between text-xs space-y-2"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-heading font-bold text-city-teal-700 uppercase tracking-wider text-[11px]">
                          {source.focus} • {source.year}
                        </span>
                      </div>
                      <p className="font-sans font-medium text-city-charcoal-900 mb-1.5 leading-snug">
                        {source.citation}
                      </p>
                      <p className="font-sans text-city-charcoal-600 leading-relaxed">
                        <strong className="text-city-charcoal-700">Scope:</strong> {source.scope}
                      </p>
                      <p className="font-sans text-city-charcoal-600 leading-relaxed mt-1">
                        <strong className="text-city-charcoal-700">Findings:</strong> {source.findings}
                      </p>
                    </div>

                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-heading font-semibold text-city-teal-700 hover:text-city-teal-600 transition-colors pt-2 border-t border-city-charcoal-100/60 w-fit"
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
