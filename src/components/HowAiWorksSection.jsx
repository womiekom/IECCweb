import React, { useRef, useState, useEffect } from 'react';
import { aiWorkflowData } from '../data/presentationData';
import {
  Lightbulb,
  MapPin,
  Search,
  Cpu,
  ShieldAlert,
  Code2,
  Boxes,
  Bug,
  Sparkles
} from 'lucide-react';

export default function HowAiWorksSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Icon mapping for GPT-5.6 (Luna) contributions
  const tool1Icons = [Lightbulb, MapPin, Search, Cpu, ShieldAlert];

  // Icon mapping for Antigravity + Gemini contributions
  const tool2Icons = [Code2, Boxes, Bug, Sparkles];

  return (
    <section
      ref={sectionRef}
      id="how-ai-works"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-city-ivory border-t-2 border-city-charcoal-200 overflow-hidden"
    >
      {/* 
        Low-Poly Jakarta Cityscape Background:
        Solid opaque bg-city-ivory container completely prevents hero elements from bleeding through.
      */}
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

      {/* Soft Ambient Background Glows matching existing palette */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-city-teal-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-city-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className={`max-w-3xl mb-16 cartoony-slide-up ${isVisible ? 'cartoony-active' : ''}`}>
          <h2 className="font-display text-3xl sm:text-5xl text-city-charcoal-900 tracking-normal leading-tight mb-6">
            {aiWorkflowData.title}
          </h2>

          <p className="font-sans text-base sm:text-lg text-city-charcoal-700 leading-relaxed font-normal">
            {aiWorkflowData.description}
          </p>
        </div>

        {/* 2 Distinct AI Tool Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {aiWorkflowData.tools.map((tool, index) => {
            const icons = index === 0 ? tool1Icons : tool2Icons;
            const isTool1 = index === 0;

            return (
              <div
                key={tool.id}
                className={`bg-white rounded-2xl p-7 sm:p-9 border-2 roblox-card-block relative flex flex-col justify-between ${
                  isTool1
                    ? 'border-city-teal-400 shadow-[0_6px_0_0_#2A9D8F]'
                    : 'border-city-blue-400 shadow-[0_6px_0_0_#3B82C4]'
                } cartoony-pop ${isVisible ? 'cartoony-active' : ''} ${
                  index === 0 ? 'delay-200' : 'delay-300'
                }`}
              >
                <div>
                  {/* Top Bar: Official Logo Right-Aligned */}
                  <div className="flex items-center justify-end mb-6 pb-4 border-b border-city-charcoal-100">
                    {/* Official Brand Logo Container */}
                    <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-city-ivory border-2 border-city-charcoal-200 shadow-poly flex-shrink-0 p-2 group-hover:scale-105 transition-transform">
                      {tool.logoType === 'svg' ? (
                        <div
                          className="w-full h-full text-city-charcoal-900 flex items-center justify-center"
                          dangerouslySetInnerHTML={{
                            __html: `<svg viewBox="0 0 24 24" class="w-full h-full fill-current"><path d="M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z"/></svg>`
                          }}
                        />
                      ) : (
                        <img
                          src={tool.logo}
                          alt="Google Antigravity Logo"
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>
                  </div>

                  {/* Main Tool Title & Role */}
                  <div className="mb-4">
                    <h3 className="font-display text-xl sm:text-2xl text-city-charcoal-900 mb-2">
                      {tool.name}
                    </h3>
                    <div
                      className={`inline-block px-3 py-1 rounded-md text-xs font-heading uppercase tracking-wide font-semibold ${
                        isTool1
                          ? 'bg-city-teal-100 text-city-teal-800'
                          : 'bg-city-blue-100 text-city-blue-800'
                      }`}
                    >
                      ROLE: {tool.role}
                    </div>
                  </div>

                  {/* Summary Narrative */}
                  <p className="font-sans text-sm sm:text-base text-city-charcoal-700 leading-relaxed mb-6">
                    {tool.summary}
                  </p>

                  {/* Contributions List with 3D Block Badges */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-heading uppercase tracking-wider text-city-charcoal-500 block mb-2">
                      KEY CONTRIBUTIONS:
                    </span>
                    {tool.contributions.map((c, cIdx) => {
                      const IconComponent = icons[cIdx] || Sparkles;
                      return (
                        <div
                          key={cIdx}
                          className="flex items-start gap-3.5 p-3 rounded-xl bg-city-ivory/80 border border-city-charcoal-150 hover:border-city-charcoal-300 transition-colors"
                        >
                          <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-white shadow-poly-sm mt-0.5 ${
                              isTool1 ? 'bg-city-teal-600' : 'bg-city-blue-600'
                            }`}
                          >
                            <IconComponent size={14} />
                          </div>
                          <div>
                            <span className="font-heading text-xs font-bold text-city-charcoal-900 block mb-0.5">
                              {c.title}
                            </span>
                            <span className="font-sans text-xs sm:text-sm text-city-charcoal-700 leading-snug block">
                              {c.desc}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Card Footer Pill */}
                <div className="pt-4 border-t border-city-charcoal-100 flex items-center justify-between text-xs font-sans text-city-charcoal-500">
                  <span>Development Stage:</span>
                  <span className="font-heading font-bold text-city-charcoal-800 uppercase text-[11px]">
                    {isTool1 ? 'Early & Strategic Stages' : 'Implementation & Refinement'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
