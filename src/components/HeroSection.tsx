import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  ChevronDown,
  ShieldCheck,
} from 'lucide-react';
import heroBgImage from '../assets/hero-bg.jpg';

interface HeroSectionProps {
  universalSearchQuery: string;
  onUniversalSearchChange: (q: string) => void;
  onSearchSubmit: () => void;
  onScrollToCards?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  universalSearchQuery,
  onUniversalSearchChange,
  onSearchSubmit,
  onScrollToCards,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Make cursor blink by default on page load
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const scrollShadowOpacity = Math.min(1, Math.max(0, scrollY / 250));

  return (
    <section className="relative overflow-hidden min-h-[90vh] sm:min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* ==================================================== */}
      {/* 100% CLEAR HERO BACKGROUND IMAGE (Zero Opacity Overlay) */}
      {/* ==================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        <img
          src={heroBgImage}
          alt="Luxury Architecture Landscape"
          className="w-full h-full object-cover object-center"
        />

        {/* Dynamic scroll shadow: Starts strictly from 0% when at top, deepens on scroll down */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none transition-opacity duration-150"
          style={{
            background:
              'linear-gradient(to bottom, rgba(248, 250, 252, 0) 0%, rgba(248, 250, 252, 0.45) 50%, rgba(248, 250, 252, 1) 100%)',
            opacity: scrollShadowOpacity,
          }}
        />
      </div>

      {/* Content Container (Above the Fold) */}
      <div className="relative z-10 max-w-4xl mx-auto w-full my-auto px-4 flex flex-col items-center">
        {/* ==================================================== */}
        {/* 3D TITLE WITH DUAL TONE LIGHT COLOURS & NO WHITE SHADOW */}
        {/* Auto-adjustable to any screen width via fluid clamp  */}
        {/* ==================================================== */}
        <div className="w-full mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-[clamp(1.85rem,5.5vw,4.25rem)] font-black tracking-tight leading-[1.15] select-none text-center max-w-4xl mx-auto break-words">
            <span
              className="inline"
              style={{
                color: '#FFFFFF',
                textShadow:
                  '0 1px 0 #cbd5e1, 0 2px 0 #94a3b8, 0 3px 0 #64748b, 0 4px 0 #475569, 0 6px 1px rgba(0,0,0,0.4), 0 10px 14px rgba(0,0,0,0.55)',
              }}
            >
              Discover Your Next{' '}
            </span>
            <span
              className="inline"
              style={{
                color: '#6ee7b7', // Vibrant light mint / emerald
                textShadow:
                  '0 1px 0 #34d399, 0 2px 0 #10b981, 0 3px 0 #059669, 0 4px 0 #047857, 0 6px 1px rgba(0,0,0,0.4), 0 10px 14px rgba(0,0,0,0.55)',
              }}
            >
              Exclusive Home
            </span>
          </h1>
        </div>

        {/* ==================================================== */}
        {/* LONG STRIP SEARCH BAR ONLY (NO FILTERS ON MAIN PAGE) */}
        {/* Generous spacing above to eliminate congestion       */}
        {/* ==================================================== */}
        <div className="w-full max-w-3xl mx-auto space-y-4 px-1 sm:px-0">
          <div className="bg-white/95 backdrop-blur-xl border border-black/[0.08] rounded-full p-1.5 sm:p-2.5 shadow-2xl flex items-center gap-1.5 sm:gap-2 hover:shadow-apple-xl transition-all w-full">
            <div className="pl-2.5 sm:pl-4 text-slate-400 shrink-0">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
            </div>
            <input
              ref={inputRef}
              type="text"
              autoFocus
              value={universalSearchQuery}
              onChange={(e) => onUniversalSearchChange(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onSearchSubmit()}
              placeholder="Search Listing..."
              className="borderless-search-input min-w-0 flex-1 bg-transparent !border-0 !border-none !outline-none !ring-0 !shadow-none text-xs sm:text-base text-slate-900 placeholder:text-slate-400 font-medium px-2 py-1.5 sm:py-2 caret-emerald-600 focus:bg-transparent"
              style={{
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
                backgroundColor: 'transparent',
              }}
            />
            <button
              type="button"
              onClick={onSearchSubmit}
              className="px-4 sm:px-8 py-2.5 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 shadow-apple-sm transition-all cursor-pointer shrink-0"
            >
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Search</span>
            </button>
          </div>

          {/* EXACTLY BELOW SEARCH BUTTON / BAR: RERA NUMBER STRING */}
          <div className="pt-1 text-center px-1">
            <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs text-white/95 font-medium shadow-md leading-tight text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="font-mono font-bold tracking-tight sm:tracking-wide break-all sm:break-normal">
                AG/GJ/AHMEDABAD/AHMEDABAD CITY/AA06870/170831R1
              </span>
              <span className="text-slate-300 hidden md:inline">our NB Property Tech RERA number</span>
            </div>
          </div>
        </div>

        {/* Scroll down indicator to explore 3 cards */}
        <div
          onClick={onScrollToCards}
          className="pt-10 sm:pt-14 flex flex-col items-center justify-center gap-1 text-white/90 text-xs font-bold cursor-pointer select-none group w-fit mx-auto transition-transform hover:translate-y-1"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
        >
          <span>Scroll down to explore property channels</span>
          <ChevronDown className="w-4 h-4 text-emerald-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
