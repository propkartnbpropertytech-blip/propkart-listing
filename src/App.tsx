import React, { useState, useEffect, useMemo } from 'react';
import { ListingProperty, ListingType } from './types/listing';
import { fetchPublishedListings } from './services/listingApi';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PropertyCard } from './components/PropertyCard';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { Footer } from './components/Footer';
import {
  Building2,
  X,
  Loader2,
  Sparkles,
  SlidersHorizontal,
} from 'lucide-react';

export const App: React.FC = () => {
  const [properties, setProperties] = useState<ListingProperty[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<ListingType>('Pre-sales');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBhk, setSelectedBhk] = useState<string>('all');
  const [selectedProperty, setSelectedProperty] = useState<ListingProperty | null>(null);

  const loadProperties = async () => {
    setLoading(true);
    try {
      const data = await fetchPublishedListings();
      setProperties(data);
    } catch (e) {
      console.error('Failed to load published listings', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProperties();

    // Auto-sync across browser tabs when user toggles in PropKart Panel desk
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'propkart_panel_listings_inventory') {
        loadProperties();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Filtered properties
  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      // 1. Transaction Tab: Pre-sales, Rent, Re-sale
      if (p.listing_type !== activeTab) return false;

      // 2. Category Filter (Residential, Commercial, Industrial, Land & Plot)
      if (selectedCategory !== 'all' && p.property_category !== selectedCategory) {
        return false;
      }

      // 3. BHK Filter
      if (selectedBhk !== 'all' && p.bhk && !p.bhk.includes(selectedBhk)) {
        return false;
      }

      // 4. Search Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesLocality = (p.locality || '').toLowerCase().includes(q);
        const matchesCity = (p.city || '').toLowerCase().includes(q);
        const matchesDeveloper = (p.developer || '').toLowerCase().includes(q);
        const matchesSubtype = (p.property_sub_type || '').toLowerCase().includes(q);
        if (!matchesTitle && !matchesLocality && !matchesCity && !matchesDeveloper && !matchesSubtype) {
          return false;
        }
      }

      return true;
    });
  }, [properties, activeTab, selectedCategory, selectedBhk, searchQuery]);

  // Tab counts
  const counts = useMemo(() => {
    return {
      'Pre-sales': properties.filter((p) => p.listing_type === 'Pre-sales').length,
      Rent: properties.filter((p) => p.listing_type === 'Rent').length,
      'Re-sale': properties.filter((p) => p.listing_type === 'Re-sale').length,
    };
  }, [properties]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBhk('all');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* Light Theme Navbar */}
      <Header
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          setSelectedCategory('all');
        }}
        publishedCount={properties.length}
      />

      {/* Hero Section with uploaded architectural image & search */}
      <HeroSection
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          setSelectedCategory('all');
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedBhk={selectedBhk}
        onBhkChange={setSelectedBhk}
        onSearchSubmit={() => {}}
        counts={counts}
      />

      {/* Main Showcase Property Feed */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-200 gap-3">
          <div>
            <div className="flex items-center gap-2.5">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                Verified {activeTab} Properties
              </h2>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">
                {filteredProperties.length} Available
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Directly managed via PropKart Operations Desk • 100% verified specifications and pricing.
            </p>
          </div>

          {(searchQuery || selectedCategory !== 'all' || selectedBhk !== 'all') && (
            <button
              onClick={handleResetFilters}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear Search Filters</span>
            </button>
          )}
        </div>

        {/* Content State */}
        {loading ? (
          <div className="py-24 flex flex-col items-center justify-center text-slate-500 gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
            <span className="text-xs font-semibold">Loading verified properties...</span>
          </div>
        ) : filteredProperties.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center text-slate-500 space-y-3 mt-6 shadow-apple-sm">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-800">No {activeTab} properties match your filters</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              No published properties found under {activeTab} matching your selected filters. Try broadening your criteria or reset the search.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#1d1d1f] hover:bg-black mt-2 cursor-pointer shadow-apple-sm"
            >
              <span>View All {activeTab}</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={setSelectedProperty}
              />
            ))}
          </div>
        )}
      </main>

      {/* Property Details Lightbox Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />

      {/* Light Theme Footer */}
      <Footer />
    </div>
  );
};

export default App;
