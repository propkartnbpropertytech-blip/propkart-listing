import React from 'react';
import { ListingProperty } from '../types/listing';
import {
  MapPin,
  Calendar,
  ShieldCheck,
  MessageCircle,
  Building2,
  Check,
  ChevronRight,
} from 'lucide-react';

interface PropertyCardProps {
  property: ListingProperty;
  onViewDetails: (property: ListingProperty) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onViewDetails,
}) => {
  const mainImage =
    property.images?.[0] ||
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80';

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Hello PropKart, I am interested in *${property.title}* (${property.listing_type} - ${property.price_display || '₹ ' + property.price}). Please share verified project brochure, floor plans, and pricing.`
    );
    window.open(`https://wa.me/919974209999?text=${text}`, '_blank');
  };

  return (
    <div
      onClick={() => onViewDetails(property)}
      className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between shadow-apple-sm hover:shadow-apple-lg cursor-pointer"
    >
      {/* Top Media Banner */}
      <div>
        <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
          <img
            src={mainImage}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          {/* Badges on Top */}
          <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
            <span
              className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-xl shadow-xs text-white ${
                property.listing_type === 'Pre-sales'
                  ? 'bg-purple-600'
                  : property.listing_type === 'Rent'
                  ? 'bg-emerald-600'
                  : 'bg-blue-600'
              }`}
            >
              {property.listing_type}
            </span>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-xl bg-white/95 backdrop-blur-md text-slate-800 shadow-xs border border-black/[0.04]">
              {property.property_category}
            </span>
          </div>

          {/* Price Overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-white/50 text-slate-900">
              <div className="text-[10px] font-medium text-slate-500">
                {property.listing_type === 'Rent' ? 'Monthly Rent' : 'Expected Price'}
              </div>
              <div className="text-base font-black text-slate-900">
                {property.price_display || `₹ ${property.price.toLocaleString('en-IN')}`}
              </div>
            </div>

            {property.area && (
              <div className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-xl text-xs font-semibold text-white">
                {property.area.toLocaleString('en-IN')} sq.ft
              </div>
            )}
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-5 space-y-3.5">
          <div className="space-y-1.5">
            <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1">
              {property.title}
            </h3>

            {property.developer && (
              <p className="text-xs font-semibold text-purple-700 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                <span>By {property.developer}</span>
              </p>
            )}

            <p className="text-xs text-slate-500 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="line-clamp-1">{property.locality || property.address}, {property.city}</span>
            </p>

            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed pt-0.5">
              {property.description}
            </p>
          </div>

          {/* Configuration & Specs */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700">
            {property.bhk && (
              <span className="px-2.5 py-1 rounded-xl bg-slate-100 border border-slate-200">
                {property.bhk}
              </span>
            )}
            {property.property_sub_type && (
              <span className="px-2.5 py-1 rounded-xl bg-slate-100 border border-slate-200">
                {property.property_sub_type}
              </span>
            )}
          </div>

          {/* Pre-sales specific badge */}
          {property.listing_type === 'Pre-sales' && property.possession_date && (
            <div className="text-[11px] text-purple-800 bg-purple-50 border border-purple-200 rounded-xl px-3 py-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-3.5 h-3.5 text-purple-600" />
                <span>Possession: {property.possession_date}</span>
              </span>
              <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                <ShieldCheck className="w-3 h-3" />
                <span>RERA</span>
              </span>
            </div>
          )}

          {/* Amenities Chips */}
          {property.amenities && property.amenities.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {property.amenities.slice(0, 3).map((a, i) => (
                <span
                  key={i}
                  className="text-[10px] font-medium px-2 py-0.5 rounded-lg bg-slate-50 text-slate-600 border border-slate-200 flex items-center gap-1"
                >
                  <Check className="w-2.5 h-2.5 text-emerald-600" />
                  <span>{a}</span>
                </span>
              ))}
              {property.amenities.length > 3 && (
                <span className="text-[10px] text-slate-400 px-1 py-0.5 font-medium">
                  +{property.amenities.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-4 pt-3 border-t border-slate-100 bg-slate-50/60 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onViewDetails(property)}
          className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-all text-center flex items-center justify-center gap-1"
        >
          <span>View Details</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        </button>

        <button
          type="button"
          onClick={handleWhatsApp}
          className="py-2 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 flex items-center gap-1.5 transition-all shadow-xs active:scale-95"
          title="Direct WhatsApp Inquiry"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Inquire</span>
        </button>
      </div>
    </div>
  );
};
