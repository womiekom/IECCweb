import React, { useState, useRef, useEffect } from 'react';
import { showcaseAreas } from '../data/presentationData';
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Layers } from 'lucide-react';

export default function GameWorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeLayer, setActiveLayer] = useState('primary'); // 'primary' or 'secondary'
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const currentArea = showcaseAreas[activeIndex];

  // When activeIndex changes, reset video state and layer
  useEffect(() => {
    setActiveLayer('primary');
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [activeIndex]);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Video play interrupted:", err);
      });
    }
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % showcaseAreas.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + showcaseAreas.length) % showcaseAreas.length);
  };

  return (
    <section
      ref={sectionRef}
      id="game-works"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden text-white select-none py-14 px-4 sm:px-8 lg:px-12"
    >
      {/* 
        LITERAL FULL-WIDTH / FULL-HEIGHT SCREENSHOT BACKGROUND:
        Screenshot fills the entire background with a thin, gentle fade.
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          key={currentArea.id + activeLayer}
          src={
            activeLayer === 'secondary' && currentArea.secondaryImage
              ? currentArea.secondaryImage
              : currentArea.bgImage
          }
          alt={
            activeLayer === 'secondary' && currentArea.secondaryAlt
              ? currentArea.secondaryAlt
              : currentArea.bgAlt
          }
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-100 transition-all duration-700"
        />

        {/* Thin, gentle fade overlays: vibrant and natural */}
        <div className="absolute inset-0 bg-gradient-to-t from-city-charcoal-950/80 via-city-charcoal-950/20 to-city-charcoal-950/60" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* TOP HEADER: Focus Area Info & Navigation Tabs */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4">
        
        {/* Title and Identification */}
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-[11px] font-heading font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider text-white shadow-sm ${
              currentArea.themeColor === 'teal'
                ? 'bg-city-teal-600'
                : currentArea.themeColor === 'sage'
                  ? 'bg-city-sage-600'
                  : 'bg-city-terracotta-600'
            }`}>
              {currentArea.classification}
            </span>
            <span className="text-white/80 font-sans text-xs">
              {currentArea.location}
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            {currentArea.title}
          </h2>
        </div>

        {/* Top Right: Focus Area Tabs, Secondary Screenshot Toggle, & Prev/Next */}
        <div className="flex flex-wrap items-center gap-2">
          
          {/* Secondary Screenshot Toggle (specifically for Healthcare: Braille Translation) */}
          {currentArea.secondaryImage && (
            <div className="flex items-center bg-black/40 backdrop-blur-md rounded-xl p-1 border border-white/20 text-xs text-white shadow-md">
              <button
                onClick={() => setActiveLayer('primary')}
                className={`px-3 py-1.5 rounded-lg font-heading font-semibold transition-all cursor-pointer ${
                  activeLayer === 'primary'
                    ? 'bg-white/25 text-white shadow-sm'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Braille Translation
              </button>
              <button
                onClick={() => setActiveLayer('secondary')}
                className={`px-3 py-1.5 rounded-lg font-heading font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeLayer === 'secondary'
                    ? 'bg-white/25 text-white shadow-sm'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <span>{currentArea.secondaryLabel}</span>
              </button>
            </div>
          )}

          {/* 3-Step Navigation Tabs */}
          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md p-1 rounded-xl border border-white/20 shadow-md">
            {showcaseAreas.map((area, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={area.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3.5 py-1.5 rounded-lg font-heading font-bold text-xs transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-white text-city-charcoal-900 shadow-md'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  aria-label={`Switch to ${area.title}`}
                >
                  <span>{area.classification}</span>
                </button>
              );
            })}
          </div>

          {/* Prev / Next Chevrons without arrow icons */}
          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md rounded-xl p-1 border border-white/20 shadow-md">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
              aria-label="Previous focus area"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-xs font-mono font-bold text-white/90 px-1.5">
              0{activeIndex + 1}/0{showcaseAreas.length}
            </span>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
              aria-label="Next focus area"
            >
              <ChevronRight size={16} />
            </button>
          </div>

        </div>

      </div>

      {/* 
        BOTTOM AREA:
        NO card wrapper around this section.
        - Video directly has borders (no card).
        - At the right of the video: The ONE explanatory sentence and the clean Action Button.
      */}
      <div className="relative z-10 max-w-7xl w-full mx-auto mt-auto pt-10 pb-4">
        <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-6 sm:gap-10">
          
          {/* LEFT: Compact Video with Clean Crisp Border (NO CARD) */}
          <div className="w-full md:w-[360px] lg:w-[400px] shrink-0">
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-white/50 shadow-[0_12px_40px_rgba(0,0,0,0.7)] bg-black group">
              <video
                ref={videoRef}
                key={currentArea.videoSrc}
                src={currentArea.videoSrc}
                poster={currentArea.posterSrc}
                playsInline
                muted={isMuted}
                onEnded={() => setIsPlaying(false)}
                className="w-full h-full object-cover"
              />

              {/* Play/Pause Overlay */}
              <div
                onClick={handlePlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-all cursor-pointer group"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 transform group-hover:scale-110 shadow-lg ${
                  isPlaying
                    ? 'bg-black/50 text-white opacity-0 group-hover:opacity-100'
                    : 'bg-white/90 text-city-charcoal-950 opacity-95 group-hover:bg-white'
                }`}>
                  {isPlaying ? <Pause size={20} /> : <Play size={20} className="translate-x-0.5" />}
                </div>
              </div>

              {/* Bottom Video Controls Bar */}
              <div className="absolute bottom-0 inset-x-0 p-2 sm:p-2.5 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between text-white text-[11px]">
                <button
                  onClick={handlePlayPause}
                  className="px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white font-heading font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {isPlaying ? <Pause size={10} /> : <Play size={10} />}
                  <span>{isPlaying ? 'Pause' : 'Play Video'}</span>
                </button>

                <button
                  onClick={handleMuteToggle}
                  className="p-1 rounded bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT (At the right of the video, at the bottom): ONE Explanatory Sentence & Action Button */}
          <div className="flex-1 flex flex-col justify-center space-y-4">
            
            {/* ONE Concise Explanatory Sentence */}
            <p className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] tracking-wide">
              “{currentArea.explanatorySentence}”
            </p>

            {/* Clean Action Button (Without arrow icon) */}
            <div className="pt-2">
              <button
                onClick={() => setActiveIndex(currentArea.nextAreaIndex)}
                className={`inline-flex items-center px-6 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white roblox-btn-3d transition-all duration-300 shadow-lg cursor-pointer ${
                  currentArea.themeColor === 'teal'
                    ? 'bg-city-teal-500 hover:bg-city-teal-400'
                    : currentArea.themeColor === 'sage'
                      ? 'bg-city-sage-500 hover:bg-city-sage-400'
                      : 'bg-city-terracotta-500 hover:bg-city-terracotta-400'
                }`}
              >
                <span>{currentArea.buttonLabel}</span>
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
