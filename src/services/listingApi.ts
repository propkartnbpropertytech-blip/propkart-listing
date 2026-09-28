import { ListingProperty } from '../types/listing';

const STORAGE_KEY = 'propkart_panel_listings_inventory';
const PHONE_STORAGE_KEY = 'propkart_assistance_phone';
const BASE_URL = import.meta.env.VITE_API_URL || '/api/v1';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || '';

export const DEFAULT_ASSISTANCE_PHONE = '+91 99742 09999';

// Zero dummy data fallback: strictly empty to ensure toggled-off properties stay hidden
export const SEED_PROPERTIES: ListingProperty[] = [];

export interface PublicListingResponse {
  properties: ListingProperty[];
  assistancePhone: string;
}

/**
 * Fetch published listings from backend or shared storage.
 * If all properties are toggled off, returns an empty array [] without dummy fallbacks.
 */
export async function fetchPublishedListings(): Promise<ListingProperty[]> {
  const endpoints = [
    `${BASE_URL}/listings/public`,
    BACKEND_URL ? `${BACKEND_URL}/api/v1/listings/public` : null,
    'http://localhost:5050/api/v1/listings/public',
  ].filter(Boolean) as string[];

  for (const url of endpoints) {
    try {
      const res = await fetch(url, {
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        const json = await res.json();
        // Save synchronized assistance phone if provided
        if (json.assistance_phone) {
          localStorage.setItem(PHONE_STORAGE_KEY, json.assistance_phone);
        }
        if (Array.isArray(json.data)) {
          // Strictly return only properties that are APPROVED and PUBLISHED
          const published = json.data.filter(
            (p: ListingProperty) =>
              p.is_published === true &&
              (p.is_approved === true || p.approval_status === 'Approved') &&
              !p.id.startsWith('prop-rent-res-') &&
              !p.id.startsWith('prop-presale-01') &&
              !p.id.startsWith('prop-presale-02') &&
              !p.id.startsWith('prop-presale-03') &&
              !p.id.startsWith('prop-sale-res-') &&
              !p.id.startsWith('prop-rent-comm-') &&
              !p.id.startsWith('prop-sale-comm-') &&
              !p.id.startsWith('prop-rent-ind-') &&
              !p.id.startsWith('prop-sale-ind-') &&
              !p.id.startsWith('prop-plot-')
          );
          return published;
        }
      }
    } catch (e) {
      // Continue to next endpoint fallback
    }
  }

  // Fallback to shared localStorage (e.g. from local panel testing)
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed: ListingProperty[] = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed.filter(
          (p) =>
            p.is_published === true &&
            (p.is_approved === true || p.approval_status === 'Approved') &&
            !p.id.startsWith('prop-rent-res-') &&
            !p.id.startsWith('prop-presale-01') &&
            !p.id.startsWith('prop-presale-02') &&
            !p.id.startsWith('prop-presale-03') &&
            !p.id.startsWith('prop-sale-res-') &&
            !p.id.startsWith('prop-rent-comm-') &&
            !p.id.startsWith('prop-sale-comm-') &&
            !p.id.startsWith('prop-rent-ind-') &&
            !p.id.startsWith('prop-sale-ind-') &&
            !p.id.startsWith('prop-plot-')
        );
      }
    }
  } catch (e) {}

  // Strictly return empty array when no published listings exist
  return [];
}

/**
 * Fetch the live synchronized assistance contact phone number
 */
export async function fetchAssistancePhone(): Promise<string> {
  const endpoints = [
    `${BASE_URL}/forms/assistance-phone`,
    BACKEND_URL ? `${BACKEND_URL}/api/v1/forms/assistance-phone` : null,
    'http://localhost:5050/api/v1/forms/assistance-phone',
  ].filter(Boolean) as string[];

  for (const url of endpoints) {
    try {
      const res = await fetch(url, {
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        const json = await res.json();
        const phone = json.data?.assistance_phone || json.assistance_phone;
        if (phone) {
          localStorage.setItem(PHONE_STORAGE_KEY, phone);
          return phone;
        }
      }
    } catch (e) {}
  }

  return localStorage.getItem(PHONE_STORAGE_KEY) || DEFAULT_ASSISTANCE_PHONE;
}
