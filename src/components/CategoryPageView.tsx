import React from 'react';
import { ListingProperty, ListingType } from '../types/listing';
import { PropertyCard } from './PropertyCard';
import {
  ArrowLeft,
  Search,
  Building2,
  Home,
  Briefcase,
  Factory,
  Trees,
  Layers,
  X,
  PlusCircle,
  Sparkles,
  KeyRound,
  Filter,
} from 'lucide-react';

interface CategoryPageViewProps {
  selectedSection: ListingType | 'all';
  onSelectSection: (section: ListingType | 'all') => void;
  onBackToHome: () => void;
  properties: ListingProperty[];
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  selectedBhk: string;
  onBhkChange: (bhk: string) => void;
  onResetFilters: () => void;
  counts: {
    'Pre-sales': number;
    Rent: number;
    'Re-sale': number;
    Total: number;
  };
  onViewDetails: (property: ListingProperty) => void;
  assistancePhone: string;
  onOpenListModal: () => void;
  loading: boolean;
}

export const CategoryPageView: React.FC<CategoryPageViewProps> = ({
  selectedSection,
  onSelectSection,
  onBackToHome,
  properties,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedBhk,
  onBhkChange,
  onResetFilters,
  counts,
  onViewDetails,
  assistancePhone,
  onOpenListModal,
  loading,
}) => {
  const categories = [
    { id: 'all', label: 'All Categories', icon: Layers },
    { id: 'Residential', label: 'Residential', icon: Home },
    { id: 'Commercial', label: 'Commercial', icon: Briefcase },
    { id: 'Industrial', label: 'Industrial', icon: Factory },
    { id: 'Land & Plot', label: 'Land & Plot', icon: Trees },
  ];

  const getSectionTitle = () => {
    switch (selectedSection) {
      case 'Pre-sales':
        return '🏢 Pre-sales Launches & New Projects';
      case 'Rent':
        return '🔑 Verified Premium Rentals';
      case 'Re-sale':
        return '🏷️ High-Yield Re-sale Inventory';
      default:
        return '🌐 Universal Verified Real Estate Showcase';
    }
  };

  const getSectionSubtitle = () => {
    switch (selectedSection) {
      case 'Pre-sales':
        return 'Browse verified developer launches, tower releases, and early-bird pre-sales across Gujarat with Gujarat RERA verification.';
      case 'Rent':
        return 'Handpicked luxury apartments, modern penthouses, executive villas & commercial spaces verified directly with property owners.';
      case 'Re-sale':
        return 'Prime ready-to-move homes, corporate office spaces & high-appreciation land plots with clear title deeds and immediate possession.';
      default:
        return 'Complete directory of verified properties across Pre-sales Launches, Premium Rentals, and High-Yield Re-sale.';
    }
  };

  const hasActiveFilters = searchQuery.trim() !== '' || selectedCategory !== 'all' || selectedBhk !== 'all';

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* ==================================================== */}
      {/* TOP NAVIGATION: BACK TO HOME & CHANNEL TABS */}
      {/* ==================================================== */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 shadow-apple-sm active:scale-95 transition-all cursor-pointer w-fit"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-600" />
          <span>Back to Channels</span>
        </button>

        {/* Quick Channel Switcher */}
        <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-apple-sm overflow-x-auto no-scrollbar max-w-full">
          {(['Pre-sales', 'Rent', 'Re-sale', 'all'] as const).map((tab) => {
            const isActive = selectedSection === tab;
            const count = tab === 'all' ? counts.Total : counts[tab];
            const label = tab === 'all' ? 'All Channels' : tab;
            const icon = tab === 'Pre-sales' ? '🏢' : tab === 'Rent' ? '🔑' : tab === 'Re-sale' ? '🏷️' : '🌐';
            return (
              <button
                key={tab}
                type="button"
                onClick={() => onSelectSection(tab)}
                className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#1d1d1f] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>{icon}</span>
                <span>{label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
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
      {/* SECTION BANNER */}
      {/* ==================================================== */}
      <div className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200/90 shadow-apple-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                {getSectionTitle()}
              </h1>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">
                {properties.length} Available
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl leading-relaxed">
              {getSectionSubtitle()}
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenListModal}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-[#1d1d1f] hover:bg-black text-white text-xs font-bold shadow-apple-sm transition-all cursor-pointer w-fit shrink-0"
          >
            <PlusCircle className="w-4 h-4 text-emerald-400" />
            <span>List a Property</span>
          </button>
        </div>

        {/* ==================================================== */}
        {/* DEDICATED SEARCH BAR FOR THIS SEPARATE PAGE */}
        {/* ==================================================== */}
        <div className="pt-2 border-t border-slate-100 space-y-3">
          <div className="flex flex-col lg:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 w-full text-left">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={`Search in ${selectedSection === 'all' ? 'all channels' : selectedSection} (project, developer, locality, city)...`}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all"
              />
            </div>

            {/* Category Dropdown */}
            <div className="w-full sm:w-44 text-left">
              <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 font-semibold focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all cursor-pointer"
              >
                <option value="all">All Categories</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
                <option value="Land & Plot">Land & Plot</option>
              </select>
            </div>

            {/* BHK Dropdown */}
            <div className="w-full sm:w-36 text-left">
              <select
                value={selectedBhk}
                onChange={(e) => onBhkChange(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 font-semibold focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all cursor-pointer"
              >
                <option value="all">Any BHK</option>
                <option value="1 BHK">1 BHK</option>
                <option value="2 BHK">2 BHK</option>
                <option value="3 BHK">3 BHK</option>
                <option value="4 BHK">4+ BHK</option>
              </select>
            </div>

            {/* Clear Filters Button */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={onResetFilters}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shrink-0"
              >
                <X className="w-3.5 h-3.5 text-slate-500" />
                <span>Clear Filters</span>
              </button>
            )}
          </div>

          {/* Quick Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider shrink-0 mr-1">
              Category:
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

      {/* ==================================================== */}
      {/* PROPERTY FEED GRID */}
      {/* ==================================================== */}
      {loading ? (
        <div className="py-24 flex flex-col items-center justify-center text-slate-500 gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-emerald-600 border-t-transparent animate-spin" />
          <span className="text-xs font-semibold">Loading verified properties...</span>
        </div>
      ) : properties.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center text-slate-500 space-y-4 shadow-apple-sm">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <Building2 className="w-7 h-7" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-800">
            No properties found matching your criteria
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            {hasActiveFilters
              ? 'No properties match your active search and filter settings. Try clearing filters or expanding your search parameters.'
              : `There are currently no active published listings in this channel. Check back shortly as new verified inventory is added daily.`}
          </p>
          <div className="pt-2 flex items-center justify-center gap-3">
            {hasActiveFilters && (
              <button
                type="button"
                onClick={onResetFilters}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 cursor-pointer"
              >
                Reset Filters
              </button>
            )}
            <button
              type="button"
              onClick={onBackToHome}
              className="px-4 py-2 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 cursor-pointer"
            >
              Back to Channels
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 pt-4">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onViewDetails={onViewDetails}
              assistancePhone={assistancePhone}
            />
          ))}
        </div>
      )}
    </div>
  );
};
