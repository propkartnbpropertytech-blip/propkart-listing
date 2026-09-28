import React from 'react';
import { ListingProperty } from '../types/listing';
import {
  MapPin,
  Calendar,
  ShieldCheck,
  MessageCircle,
  Building2,
  ChevronRight,
  Sparkles,
  Camera,
  Video,
} from 'lucide-react';

interface PropertyCardProps {
  property: ListingProperty;
  onViewDetails: (property: ListingProperty) => void;
  assistancePhone?: string;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onViewDetails,
  assistancePhone = '+91 99742 09999',
}) => {
  const mainImage =
    property.images?.[0] ||
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80';

  const cleanPhone = assistancePhone.replace(/[^0-9]/g, '');

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Hello PropKart, I am interested in *${property.title}* (${property.listing_type} - ${property.price_display || '₹ ' + property.price.toLocaleString('en-IN')}). Please share verified project brochure, floor plans, and pricing.`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={() => onViewDetails(property)}
      className="group bg-white rounded-3xl overflow-hidden border border-black/[0.08] hover:border-emerald-500/50 transition-all duration-500 flex flex-col h-[520px] sm:h-[555px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15),0_8px_16px_-4px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.06)] hover:shadow-[0_32px_64px_-16px_rgba(16,185,129,0.28),0_16px_32px_-8px_rgba(0,0,0,0.12),0_0_0_1px_rgba(16,185,129,0.3)] hover:-translate-y-2 cursor-pointer relative ring-1 ring-black/[0.05] active:scale-[0.99]"
    >
      {/* 60% Ratio: Fixed Photographic Media Showcase */}
      <div className="h-[56%] sm:h-[60%] relative overflow-hidden bg-slate-900 select-none">
        <img
          src={mainImage}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-black/35" />

        {/* Top Badges */}
        <div className="absolute top-3 sm:top-3.5 left-3 sm:left-3.5 right-3 sm:right-3.5 flex items-center justify-between gap-1.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className={`text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-xl shadow-md text-white ${
                property.listing_type === 'Pre-sales'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600'
                  : property.listing_type === 'Rent'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600'
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600'
              }`}
            >
              {property.listing_type}
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold px-2 sm:px-2.5 py-1 rounded-xl bg-white/95 backdrop-blur-md text-slate-800 shadow-sm border border-white/60">
              {property.property_category}
            </span>
          </div>

          {/* Media Indicators (Photos & Videos) */}
          <div className="flex items-center gap-1.5 shrink-0">
            {property.videos && property.videos.length > 0 && (
              <span className="text-[9px] sm:text-[10px] font-bold px-2 sm:px-2.5 py-1 rounded-xl bg-purple-600/90 backdrop-blur-md text-white flex items-center gap-1 shadow-sm border border-white/20">
                <Video className="w-3 h-3" />
                <span>{property.videos.length}</span>
              </span>
            )}
            {property.images && property.images.length > 1 && (
              <span className="text-[9px] sm:text-[10px] font-bold px-2 sm:px-2.5 py-1 rounded-xl bg-black/65 backdrop-blur-md text-white flex items-center gap-1 shadow-sm border border-white/20">
                <Camera className="w-3 h-3" />
                <span>{property.images.length}</span>
              </span>
            )}
          </div>
        </div>

        {/* Bottom of Image: Price & Space Specs Overlay */}
        <div className="absolute bottom-3 sm:bottom-3.5 left-3 sm:left-3.5 right-3 sm:right-3.5 flex items-end justify-between gap-2">
          <div className="bg-white/95 backdrop-blur-xl px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.18)] border border-white/80 text-slate-900 min-w-0">
            <div className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider text-slate-400">
              {property.listing_type === 'Rent' ? 'Monthly Rent' : 'Expected Price'}
            </div>
            <div className="text-sm sm:text-lg font-black text-slate-900 tracking-tight truncate">
              {property.price_display || `₹ ${property.price.toLocaleString('en-IN')}`}
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 shrink-0">
            {property.area && (
              <div className="bg-black/75 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-xl text-[11px] sm:text-xs font-bold text-white shadow-md border border-white/15">
                {property.area.toLocaleString('en-IN')} sq.ft
              </div>
            )}
            {property.bhk && (
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 backdrop-blur-md px-2 sm:px-2.5 py-0.5 rounded-lg text-[9px] sm:text-[10px] font-extrabold text-white shadow-md border border-white/15">
                {property.bhk}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 40% Ratio: Content Body & Quick Action Buttons */}
      <div className="h-[44%] sm:h-[40%] p-4 sm:p-5 flex flex-col justify-between bg-white">
        <div className="space-y-1 sm:space-y-1.5">
          {/* Title & Developer */}
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1 tracking-tight">
              {property.title}
            </h3>
            {property.developer ? (
              <p className="text-[10px] sm:text-[11px] font-bold text-purple-700 flex items-center gap-1.5 mt-0.5">
                <Building2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span className="line-clamp-1">By {property.developer}</span>
              </p>
            ) : property.property_sub_type ? (
              <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-0.5">
                {property.property_sub_type}
              </p>
            ) : null}
          </div>

          {/* Location */}
          <p className="text-[11px] sm:text-xs text-slate-500 font-medium flex items-center gap-1.5 line-clamp-1">
            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 shrink-0" />
            <span>{property.locality || property.address}, {property.city}</span>
          </p>

          {/* Description */}
          <p className="text-[11px] sm:text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
            {property.description}
          </p>

          {/* Pre-sales possession pill */}
          {property.listing_type === 'Pre-sales' && property.possession_date && (
            <div className="text-[9px] sm:text-[10px] text-purple-800 bg-purple-50/90 border border-purple-200/80 rounded-xl px-2.5 sm:px-3 py-0.5 sm:py-1 flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-medium truncate">
                <Calendar className="w-3 h-3 text-purple-600 shrink-0" />
                <span>Possession: {property.possession_date}</span>
              </span>
              {property.rera_number && (
                <span className="text-[9px] text-emerald-700 font-bold flex items-center gap-0.5 bg-emerald-100/80 px-1.5 py-0.5 rounded-md shrink-0 ml-1">
                  <ShieldCheck className="w-2.5 h-2.5" />
                  <span>RERA</span>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-2 sm:pt-2.5 border-t border-slate-100 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onViewDetails(property)}
            className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl text-xs font-bold text-slate-700 bg-slate-100/90 hover:bg-slate-200/80 border border-slate-200/60 shadow-xs transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer hover:text-slate-900 active:scale-95"
          >
            <span>View Details</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </button>

          <button
            type="button"
            onClick={handleWhatsApp}
            className="py-2 sm:py-2.5 px-3.5 sm:px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 flex items-center gap-1.5 transition-all shadow-[0_4px_14px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.45)] active:scale-95 cursor-pointer"
            title="Inquire via WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Inquire</span>
          </button>
        </div>
      </div>
    </div>
  );
};
