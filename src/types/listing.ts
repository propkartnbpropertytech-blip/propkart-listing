export type ListingType = 'Pre-sales' | 'Rent' | 'Re-sale';
export type ListingCategory = 'Residential' | 'Commercial' | 'Industrial' | 'Land & Plot';

export interface ListingProperty {
  id: string;
  title: string;
  description?: string;
  listing_type: ListingType;
  property_category: ListingCategory;
  property_sub_type?: string;
  price: number;
  price_display?: string;
  price_unit?: 'month' | 'total' | 'sqft';
  area: number; // in sq.ft
  bhk?: string;
  floor_number?: number | null;
  total_floors?: number | null;
  address?: string;
  locality?: string;
  city: string;
  location_url?: string;
  images: string[];
  videos?: string[];
  is_published: boolean; // Must be true to display
  developer?: string; // Pre-sales specific
  possession_date?: string; // Pre-sales specific
  rera_number?: string; // Pre-sales specific
  amenities?: string[];
  raw_data?: Record<string, any>;
  created_at: string;
}

export interface FilterState {
  activeTab: ListingType;
  selectedCategory: string; // 'all' | 'Residential' | ...
  searchQuery: string;
  selectedBhk: string;
  budgetRange: string; // 'all' | 'under_50l' | '50l_1cr' | '1cr_3cr' | '3cr_plus'
}
