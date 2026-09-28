import React from 'react';
import { ListingType } from '../types/listing';
import {
  Search,
  Building2,
  Home,
  Briefcase,
  Factory,
  Trees,
  Layers,
  Sparkles,
  MapPin,
} from 'lucide-react';
import heroBgImage from '../assets/hero-bg.jpg';

interface HeroSectionProps {
  activeTab: ListingType;
  onSelectTab: (tab: ListingType) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  selectedBhk: string;
  onBhkChange: (bhk: string) => void;
  onSearchSubmit: () => void;
  counts: {
    'Pre-sales': number;
    Rent: number;
    'Re-sale': number;
  };
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  activeTab,
  onSelectTab,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedBhk,
  onBhkChange,
  onSearchSubmit,
  counts,
}) => {
  const categories = [
    { id: 'all', label: 'All Categories', icon: Layers },
    { id: 'Residential', label: 'Residential', icon: Home },
    { id: 'Commercial', label: 'Commercial', icon: Briefcase },
    { id: 'Industrial', label: 'Industrial', icon: Factory },
    { id: 'Land & Plot', label: 'Land & Plot', icon: Trees },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
      {/* ==================================================== */}
      {/* HERO BACKGROUND IMAGE (Uploaded by User) */}
      {/* ==================================================== */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Luxury Architecture Landscape"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.04] scale-[1.02]"
        />
        {/* Soft, Light Gradient Overlay to maintain 100% Light Theme readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/55 to-slate-50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-6 w-full">
        {/* Top Monogram / Verified Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/[0.08] text-xs font-semibold text-slate-800 shadow-apple-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Gujarat's Official Verified Property Directory • Light Edition</span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Discover Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-800">Exclusive Home</span>
          </h1>
          <p className="text-xs sm:text-base text-slate-700 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-xs">
            Handpicked, verified real estate across Pre-sales Launches, Premium Rentals, and High-Yield Re-sale properties.
          </p>
        </div>

        {/* ==================================================== */}
        {/* THE 3 TABS: Pre-sales, Rent, Re-sale */}
        {/* ==================================================== */}
        <div className="pt-2">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-black/[0.08] shadow-apple-lg">
            {(['Pre-sales', 'Rent', 'Re-sale'] as ListingType[]).map((tab) => {
              const isActive = activeTab === tab;
              const count = counts[tab] || 0;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => onSelectTab(tab)}
                  className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#1d1d1f] text-white shadow-apple-sm scale-[1.02]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span>
                    {tab === 'Pre-sales' && '🏢'}
                    {tab === 'Rent' && '🔑'}
                    {tab === 'Re-sale' && '🏷️'}
                  </span>
                  <span>{tab}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ==================================================== */}
        {/* UNIVERSAL SEARCH BAR CONTAINER (LIGHT THEME) */}
        {/* ==================================================== */}
        <div className="w-full max-w-3xl mx-auto bg-white/95 backdrop-blur-xl border border-black/[0.08] rounded-3xl p-4 sm:p-5 shadow-2xl space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Keyword Search Input */}
            <div className="relative flex-1 w-full text-left">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSearchSubmit()}
                placeholder={`Search ${activeTab} by project, developer, locality, city...`}
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all"
              />
            </div>

            {/* Category Dropdown */}
            <div className="w-full sm:w-44 text-left">
              <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-full px-3.5 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 font-semibold focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all cursor-pointer"
              >
                <option value="all">All Categories</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
                <option value="Land & Plot">Land & Plot</option>
              </select>
            </div>

            {/* BHK Dropdown */}
            <div className="w-full sm:w-32 text-left">
              <select
                value={selectedBhk}
                onChange={(e) => onBhkChange(e.target.value)}
                className="w-full px-3.5 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 font-semibold focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all cursor-pointer"
              >
                <option value="all">Any BHK</option>
                <option value="1 BHK">1 BHK</option>
                <option value="2 BHK">2 BHK</option>
                <option value="3 BHK">3 BHK</option>
                <option value="4 BHK">4+ BHK</option>
              </select>
            </div>

            {/* Universal Search Action Button */}
            <button
              type="button"
              onClick={onSearchSubmit}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-apple-sm active:scale-95 transition-all cursor-pointer shrink-0"
            >
              <Search className="w-4 h-4" />
              <span>Search {activeTab}</span>
            </button>
          </div>

          {/* Quick Sub-Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs">
            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider shrink-0 mr-1">
              Asset Category:
            </span>
            {categories.map((c) => {
              const Icon = c.icon;
              const isSel = selectedCategory === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => onCategoryChange(c.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSel
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSel ? 'text-white' : 'text-slate-500'}`} />
                  <span>{c.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
