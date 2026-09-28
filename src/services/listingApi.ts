import { ListingProperty } from '../types/listing';

const STORAGE_KEY = 'propkart_panel_listings_inventory';
const BASE_URL = import.meta.env.VITE_API_URL || '/api/v1';

export const SEED_PROPERTIES: ListingProperty[] = [
  // ----------------------------------------
  // PRE-SALES (NEW LAUNCH / UPCOMING PROJECTS)
  // ----------------------------------------
  {
    id: 'prop-presale-01',
    title: 'The Grand Solitaire by Adani Realty',
    description: 'Iconic 32-storey twin towers offering bespoke 3 & 4 BHK sky residences with 45,000 sq.ft podium club, private plunge pools, and Miyawaki forest.',
    listing_type: 'Pre-sales',
    property_category: 'Residential',
    property_sub_type: 'High-Rise Sky Residences',
    price: 14500000,
    price_display: '₹ 1.45 Cr onwards',
    price_unit: 'total',
    area: 2400,
    bhk: '3 & 4 BHK',
    developer: 'Adani Realty',
    possession_date: 'December 2026',
    rera_number: 'PR/GJ/AHMEDABAD/CITY/AUDA/RAA10192/100424',
    address: 'Off SG Highway, Behind Nirma University',
    locality: 'SG Highway',
    city: 'Ahmedabad',
    location_url: 'https://maps.google.com/?q=SG+Highway+Ahmedabad',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    ],
    is_published: true,
    amenities: ['Podium Club', 'Infinity Sky Pool', 'Squash Court', 'Mini Theatre', 'EV Charging Bays'],
    created_at: new Date(Date.now() - 3600000 * 24 * 2).toISOString(),
  },
  {
    id: 'prop-presale-02',
    title: 'One World West Signature Tech Towers',
    description: 'Next-gen IGBC Platinum certified corporate offices with high floor-to-ceiling clearance, triple-height grand atrium, and rooftop solar plant.',
    listing_type: 'Pre-sales',
    property_category: 'Commercial',
    property_sub_type: 'Corporate Offices',
    price: 9500000,
    price_display: '₹ 95 Lakhs onwards',
    price_unit: 'total',
    area: 1250,
    developer: 'Amrapali Group',
    possession_date: 'Mid 2027',
    rera_number: 'PR/GJ/AHMEDABAD/AUDA/CAA08921/280624',
    address: 'Ambli-Bopal Road near Iskcon Cross',
    locality: 'Ambli-Bopal',
    city: 'Ahmedabad',
    location_url: 'https://maps.google.com/?q=Ambli+Bopal+Ahmedabad',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    ],
    is_published: true,
    amenities: ['IGBC Platinum', 'Triple Height Lobby', 'Food Court', 'Automated Multi-Level Parking'],
    created_at: new Date(Date.now() - 3600000 * 24 * 4).toISOString(),
  },
  {
    id: 'prop-presale-03',
    title: 'Greenfield Eco-Villas (Phase 2)',
    description: 'Exclusive 4 BHK Spanish architectural villas with private temperature-controlled pool, landscaped sun deck, and organic orchard views.',
    listing_type: 'Pre-sales',
    property_category: 'Residential',
    property_sub_type: 'Luxury Eco-Villas',
    price: 38000000,
    price_display: '₹ 3.80 Cr onwards',
    price_unit: 'total',
    area: 4200,
    bhk: '4 BHK',
    developer: 'Greenfield Developers',
    possession_date: 'March 2027',
    rera_number: 'PR/GJ/AHMEDABAD/SANAND/VAA12048/120225',
    address: 'Thaltej-Shilaj Extension Road',
    locality: 'Thaltej Extension',
    city: 'Ahmedabad',
    location_url: 'https://maps.google.com/?q=Thaltej+Ahmedabad',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80',
    ],
    is_published: true,
    amenities: ['Private Pool', 'Solar Powered', 'Club Wellness', 'Tennis Court'],
    created_at: new Date(Date.now() - 3600000 * 24 * 1).toISOString(),
  },

  // ----------------------------------------
  // RENT - RESIDENTIAL, COMMERCIAL, INDUSTRIAL, LAND
  // ----------------------------------------
  {
    id: 'prop-rent-res-01',
    title: 'Luxurious 3 BHK High-Floor Apartment',
    description: 'Fully furnished luxury flat with panoramic city views, modular Italian kitchen, premium fittings, and dedicated covered parking.',
    listing_type: 'Rent',
    property_category: 'Residential',
    property_sub_type: 'Apartment',
    price: 55000,
    price_display: '₹ 55,000 / month',
    price_unit: 'month',
    area: 2150,
    bhk: '3 BHK',
    floor_number: 11,
    total_floors: 14,
    address: 'Near Judges Bungalow Road, Bodakdev',
    locality: 'Bodakdev',
    city: 'Ahmedabad',
    location_url: 'https://maps.google.com/?q=Bodakdev+Ahmedabad',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
    ],
    is_published: true,
    amenities: ['24/7 Security', 'Club House', 'Swimming Pool', 'Reserved Parking'],
    created_at: new Date(Date.now() - 3600000 * 24 * 3).toISOString(),
  },
  {
    id: 'prop-rent-res-02',
    title: '4 BHK Ultra-Luxury Sky Villa',
    description: 'Double height living room, private terrace garden, smart home automation, and maid quarter.',
    listing_type: 'Rent',
    property_category: 'Residential',
    property_sub_type: 'Villa / Penthouse',
    price: 120000,
    price_display: '₹ 1,20,000 / month',
    price_unit: 'month',
    area: 3800,
    bhk: '4 BHK',
    floor_number: 19,
    total_floors: 22,
    address: 'Main Sindhu Bhavan Road, Near Taj Skyline',
    locality: 'Sindhu Bhavan Road',
    city: 'Ahmedabad',
    location_url: 'https://maps.google.com/?q=Sindhu+Bhavan+Road+Ahmedabad',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    ],
    is_published: true,
    amenities: ['Private Elevator', 'Gymnasium', 'Infinity Pool', 'Terrace Garden'],
    created_at: new Date(Date.now() - 3600000 * 24 * 5).toISOString(),
  },
  {
    id: 'prop-rent-comm-01',
    title: 'Grade-A Corporate Office Space',
    description: 'Furnished office space with 40 workstations, 3 executive cabins, 1 boardroom, pantry, and reception desk.',
    listing_type: 'Rent',
    property_category: 'Commercial',
    property_sub_type: 'Office',
    price: 85000,
    price_display: '₹ 85,000 / month',
    price_unit: 'month',
    area: 1850,
    floor_number: 8,
    total_floors: 18,
    address: 'Near ISKCON Cross Road, SG Highway',
    locality: 'SG Highway',
    city: 'Ahmedabad',
    location_url: 'https://maps.google.com/?q=SG+Highway+Ahmedabad',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    ],
    is_published: true,
    amenities: ['Centrally Air Conditioned', 'High Speed Elevators', 'Cafeteria'],
    created_at: new Date(Date.now() - 3600000 * 24 * 2).toISOString(),
  },
  {
    id: 'prop-rent-ind-01',
    title: 'Industrial Heavy Shed with Gantry Crane',
    description: 'PEB industrial structure with 10-ton EOT crane provision, 30 HP electrical power, heavy flooring, and wide trailer turning radius.',
    listing_type: 'Rent',
    property_category: 'Industrial',
    property_sub_type: 'Industrial Shed',
    price: 145000,
    price_display: '₹ 1,45,000 / month',
    price_unit: 'month',
    area: 12000,
    address: 'Changodar Industrial Estate, Moraiya',
    locality: 'Changodar',
    city: 'Ahmedabad',
    location_url: 'https://maps.google.com/?q=Changodar+Ahmedabad',
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    ],
    is_published: true,
    amenities: ['10 Ton Crane', '3 Phase Power', 'Trailer Access', 'Fire NOC'],
    created_at: new Date(Date.now() - 3600000 * 24 * 4).toISOString(),
  },
  {
    id: 'prop-rent-land-01',
    title: 'Fenced Commercial Open Yard for Storage',
    description: 'Leveled commercial open plot on main highway with security cabin, 8-feet compound wall, and separate gate for container trucks.',
    listing_type: 'Rent',
    property_category: 'Land & Plot',
    property_sub_type: 'Open Yard',
    price: 75000,
    price_display: '₹ 75,000 / month',
    price_unit: 'month',
    area: 15000,
    address: 'Sarkhej-Bavla Highway near Ujala Circle',
    locality: 'Sarkhej-Bavla Road',
    city: 'Ahmedabad',
    location_url: 'https://maps.google.com/?q=Sarkhej+Bavla+Highway',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
    ],
    is_published: true,
    amenities: ['Boundary Wall', 'Security Cabin', 'Water Connection'],
    created_at: new Date(Date.now() - 3600000 * 24 * 1).toISOString(),
  },

  // ----------------------------------------
  // RE-SALE - RESIDENTIAL, COMMERCIAL, INDUSTRIAL, LAND
  // ----------------------------------------
  {
    id: 'prop-sale-res-01',
    title: 'Elegant 3 BHK Garden-Facing Flat',
    description: 'Sunlit east-facing apartment overlooking landscaped club gardens. Premium marble flooring, 3 balconies, and semi-furnished interiors.',
    listing_type: 'Re-sale',
    property_category: 'Residential',
    property_sub_type: 'Apartment',
    price: 9200000,
    price_display: '₹ 92 Lakhs',
    price_unit: 'total',
    area: 1950,
    bhk: '3 BHK',
    floor_number: 4,
    total_floors: 14,
    address: 'South Bopal - Shela Link Road',
    locality: 'Shela',
    city: 'Ahmedabad',
    location_url: 'https://maps.google.com/?q=Shela+Ahmedabad',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80',
    ],
    is_published: true,
    amenities: ['Clubhouse', 'Children Play Area', 'Gym', 'Jogging Track'],
    created_at: new Date(Date.now() - 3600000 * 24 * 7).toISOString(),
  },
  {
    id: 'prop-sale-res-02',
    title: 'Grand 5 BHK Luxury Independent Bungalow',
    description: 'Designer architecture villa featuring private lawn, plunge pool, home theatre room, imported Italian marble, and servant quarters.',
    listing_type: 'Re-sale',
    property_category: 'Residential',
    property_sub_type: 'Bungalow / Villa',
    price: 65000000,
    price_display: '₹ 6.50 Cr',
    price_unit: 'total',
    area: 5200,
    bhk: '5 BHK',
    address: 'Ambli Road, Off Iskcon-Ambli BRTS Corridor',
    locality: 'Ambli Road',
    city: 'Ahmedabad',
    location_url: 'https://maps.google.com/?q=Ambli+Road+Ahmedabad',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80',
    ],
    is_published: true,
    amenities: ['Private Garden', 'Private Pool', 'Home Theatre', '3 Car Garage'],
    created_at: new Date(Date.now() - 3600000 * 24 * 12).toISOString(),
  },
  {
    id: 'prop-sale-comm-01',
    title: 'Pre-Leased Corporate Office (8.2% ROI)',
    description: 'Fully furnished corporate office leased to an MNC tenant for 5-year tenure with 15% escalation every 3 years. Immediate rental yield.',
    listing_type: 'Re-sale',
    property_category: 'Commercial',
    property_sub_type: 'Office',
    price: 24000000,
    price_display: '₹ 2.40 Cr',
    price_unit: 'total',
    area: 2600,
    floor_number: 6,
    total_floors: 14,
    address: 'Near Prahlad Nagar Garden, Makarba',
    locality: 'Makarba',
    city: 'Ahmedabad',
    location_url: 'https://maps.google.com/?q=Makarba+Ahmedabad',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    ],
    is_published: true,
    amenities: ['Pre-Leased MNC', 'High Yield', 'Allocated Parking'],
    created_at: new Date(Date.now() - 3600000 * 24 * 11).toISOString(),
  },
  {
    id: 'prop-sale-ind-01',
    title: 'Operating Engineering Manufacturing Unit',
    description: 'Complete operational factory unit with RCC administrative block, heavy fabrication shed, 100 kVA dedicated transformer, and pollution NOC.',
    listing_type: 'Re-sale',
    property_category: 'Industrial',
    property_sub_type: 'Factory / Unit',
    price: 42500000,
    price_display: '₹ 4.25 Cr',
    price_unit: 'total',
    area: 16500,
    address: 'Kathwada GIDC Phase-II',
    locality: 'Kathwada',
    city: 'Ahmedabad',
    location_url: 'https://maps.google.com/?q=Kathwada+GIDC',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    ],
    is_published: true,
    amenities: ['100 kVA Transformer', 'GIDC Allotment Clear', 'Pollution NOC'],
    created_at: new Date(Date.now() - 3600000 * 24 * 15).toISOString(),
  },
  {
    id: 'prop-sale-land-01',
    title: 'NA Residential Villa Plot in Gated Community',
    description: 'Clear title, non-agricultural (NA) villa plot inside a lush green weekend society with club, 24/7 security, and internal paved roads.',
    listing_type: 'Re-sale',
    property_category: 'Land & Plot',
    property_sub_type: 'Villa Plot',
    price: 18500000,
    price_display: '₹ 1.85 Cr',
    price_unit: 'total',
    area: 4500,
    address: 'Near Shanku Water Park Road, Rancharda',
    locality: 'Rancharda',
    city: 'Ahmedabad',
    location_url: 'https://maps.google.com/?q=Rancharda+Ahmedabad',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
    ],
    is_published: true,
    amenities: ['Gated Society', 'Clubhouse Access', 'Clear Title'],
    created_at: new Date(Date.now() - 3600000 * 24 * 13).toISOString(),
  },
];

export async function fetchPublishedListings(): Promise<ListingProperty[]> {
  // 1. Try remote API
  try {
    const res = await fetch(`${BASE_URL}/listings/public`);
    if (res.ok) {
      const json = await res.json();
      if (Array.isArray(json.data) && json.data.length > 0) {
        return json.data.filter((p: ListingProperty) => p.is_published);
      }
    }
  } catch (e) {}

  // 2. Try shared localStorage with Panel desk
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed: ListingProperty[] = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.filter((p) => p.is_published === true);
      }
    }
  } catch (e) {}

  // 3. Fallback to seed properties
  return SEED_PROPERTIES.filter((p) => p.is_published);
}
