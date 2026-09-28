import React, { useState, useEffect, useMemo } from 'react';
import { ListingProperty, ListingType } from './types/listing';
import {
  fetchPublishedListings,
  fetchAssistancePhone,
  DEFAULT_ASSISTANCE_PHONE,
} from './services/listingApi';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ChannelCardsSection } from './components/ChannelCardsSection';
import { CategoryPageView } from './components/CategoryPageView';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { ListPropertyModal } from './components/ListPropertyModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [properties, setProperties] = useState<ListingProperty[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // View state: 'landing' (Universal search strip above-fold, 3 cards on scroll down) vs 'category' (Separate page with all filters)
  const [currentView, setCurrentView] = useState<'landing' | 'category'>('landing');
  const [selectedSection, setSelectedSection] = useState<ListingType | 'all'>('Pre-sales');

  // Search & Filter state (Used inside the particular card / separate page)
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [universalSearchQuery, setUniversalSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBhk, setSelectedBhk] = useState<string>('all');

  // Modals & Metadata
  const [selectedProperty, setSelectedProperty] = useState<ListingProperty | null>(null);
  const [isListModalOpen, setIsListModalOpen] = useState<boolean>(false);
  const [assistancePhone, setAssistancePhone] = useState<string>(DEFAULT_ASSISTANCE_PHONE);

  // Load published properties and assistance contact phone
  const loadData = async (isInitial = false) => {
    if (isInitial) setLoading(true);
    try {
      const [publishedData, phone] = await Promise.all([
        fetchPublishedListings(),
        fetchAssistancePhone(),
      ]);

      setProperties(publishedData);
      if (phone) setAssistancePhone(phone);
    } catch (e) {
      console.error('Failed to sync published listings', e);
    } finally {
      if (isInitial) setLoading(false);
    }
  };

  // Initial load + Realtime Polling Sync (every 1.5 seconds)
  useEffect(() => {
    loadData(true);

    const pollInterval = setInterval(() => {
      loadData(false);
    }, 1500);

    let channel: BroadcastChannel | null = null;
    try {
      channel = new BroadcastChannel('propkart_listing_channel');
      channel.onmessage = (event) => {
        if (event.data?.type === 'LISTING_TOGGLED' || event.data?.type === 'INVENTORY_UPDATED') {
          loadData(false);
        }
      };
    } catch (e) {}

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'propkart_panel_listings_inventory' || e.key === 'propkart_assistance_phone') {
        loadData(false);
      }
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      clearInterval(pollInterval);
      if (channel) channel.close();
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Filtered properties based on active section, category, BHK, and search query
  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      // 1. Transaction Channel: Pre-sales, Rent, Re-sale (or 'all' for universal search)
      if (selectedSection !== 'all' && p.listing_type !== selectedSection) {
        return false;
      }

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
        const matchesDeveloper = (p.developer || p.owner_name || '').toLowerCase().includes(q);
        const matchesSubtype = (p.property_sub_type || '').toLowerCase().includes(q);
        const matchesCode = (p.registration_code || '').toLowerCase().includes(q);
        if (!matchesTitle && !matchesLocality && !matchesCity && !matchesDeveloper && !matchesSubtype && !matchesCode) {
          return false;
        }
      }

      return true;
    });
  }, [properties, selectedSection, selectedCategory, selectedBhk, searchQuery]);

  // Tab counts
  const counts = useMemo(() => {
    return {
      'Pre-sales': properties.filter((p) => p.listing_type === 'Pre-sales').length,
      Rent: properties.filter((p) => p.listing_type === 'Rent').length,
      'Re-sale': properties.filter((p) => p.listing_type === 'Re-sale').length,
      Total: properties.length,
    };
  }, [properties]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setUniversalSearchQuery('');
    setSelectedCategory('all');
    setSelectedBhk('all');
  };

  // User clicked one of the 3 cards
  const handleSelectCard = (type: ListingType) => {
    setSelectedSection(type);
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBhk('all');
    setCurrentView('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // User submitted search from universal search strip on landing page
  const handleUniversalSearchSubmit = () => {
    setSearchQuery(universalSearchQuery);
    setSelectedSection('all');
    setSelectedCategory('all');
    setSelectedBhk('all');
    setCurrentView('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Return to landing page
  const handleBackToHome = () => {
    setCurrentView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Smooth scroll down to 3 cards
  const handleScrollToCards = () => {
    const el = document.getElementById('channel-cards');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white relative">
      {/* 100% Transparent Header with Logo & "NB Listing" only (Zero shadow) */}
      <Header
        onGoHome={handleBackToHome}
        variant={currentView === 'landing' ? 'light' : 'dark'}
      />

      {/* Main Content Router */}
      {currentView === 'landing' ? (
        /* ==================================================== */
        /* LANDING PAGE VIEW:                                   */
        /* 1. First Screen: Simple Long Search Strip & 3D Typo  */
        /*    (NO filters, NO cards on main landing page)       */
        /* 2. Scroll Down: Shows 3 Channel Cards               */
        /* 3. Footer: Contains Assistance Phone & List Property */
        /* ==================================================== */
        <main className="flex-1">
          {/* Above-the-fold Hero with Long Strip Search Bar */}
          <HeroSection
            universalSearchQuery={universalSearchQuery}
            onUniversalSearchChange={setUniversalSearchQuery}
            onSearchSubmit={handleUniversalSearchSubmit}
            onScrollToCards={handleScrollToCards}
          />

          {/* When scrolled down: The 3 Channel Cards */}
          <ChannelCardsSection
            counts={counts}
            onSelectCard={handleSelectCard}
          />
        </main>
      ) : (
        /* ==================================================== */
        /* SEPARATE PAGE VIEW: DEDICATED CHANNEL & ALL FILTERS  */
        /* (Filters, categories, BHK, and search live here)     */
        /* ==================================================== */
        <main className="flex-1 pt-20">
          <CategoryPageView
            selectedSection={selectedSection}
            onSelectSection={(sec) => {
              setSelectedSection(sec);
              setSelectedCategory('all');
            }}
            onBackToHome={handleBackToHome}
            properties={filteredProperties}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedBhk={selectedBhk}
            onBhkChange={setSelectedBhk}
            onResetFilters={handleResetFilters}
            counts={counts}
            onViewDetails={setSelectedProperty}
            assistancePhone={assistancePhone}
            onOpenListModal={() => setIsListModalOpen(true)}
            loading={loading}
          />
        </main>
      )}

      {/* Property Details Lightbox Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        assistancePhone={assistancePhone}
      />

      {/* Category Selection Modal for "List Property" */}
      <ListPropertyModal
        isOpen={isListModalOpen}
        onClose={() => setIsListModalOpen(false)}
      />

      {/* Footer with Assistance Phone & List Property Button */}
      <Footer
        assistancePhone={assistancePhone}
        onOpenListModal={() => setIsListModalOpen(true)}
      />
    </div>
  );
};

export default App;
