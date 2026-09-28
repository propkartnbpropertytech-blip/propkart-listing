import React, { useState } from 'react';
import { ListingProperty } from '../types/listing';
import {
  X,
  MapPin,
  Building2,
  Calendar,
  ShieldCheck,
  Check,
  MessageCircle,
  Phone,
  ExternalLink,
  Video as VideoIcon,
  Play,
  Camera,
} from 'lucide-react';

interface PropertyDetailModalProps {
  property: ListingProperty | null;
  onClose: () => void;
  assistancePhone?: string;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  assistancePhone = '+91 99742 09999',
}) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);
  if (!property) return null;

  const rawDigits = assistancePhone.replace(/[^0-9]/g, '');

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello PropKart, I am interested in *${property.title}* (${property.listing_type} - ${property.price_display || '₹ ' + property.price.toLocaleString('en-IN')}). Please share verified project brochure, floor plans, and pricing.`
    );
    window.open(`https://wa.me/${rawDigits}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[94vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col text-slate-900">
        {/* Header */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-[10px] sm:text-xs uppercase font-extrabold px-2.5 py-1 rounded-xl text-white ${
                property.listing_type === 'Pre-sales'
                  ? 'bg-purple-600'
                  : property.listing_type === 'Rent'
                  ? 'bg-emerald-600'
                  : property.listing_type === 'Re-sale'
                  ? 'bg-blue-600'
                  : 'bg-slate-700'
              }`}
            >
              {property.listing_type}
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-slate-600 truncate max-w-[200px] sm:max-w-none">
              {property.property_category} • {property.property_sub_type || 'Property'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-200/60 transition-all cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Photo Gallery */}
          <div className="space-y-2">
            <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs">
              <img
                src={
                  property.images?.[activePhotoIdx] ||
                  property.images?.[0] ||
                  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80'
                }
                alt={property.title}
                className="w-full h-full object-cover transition-all duration-200"
              />
              <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-black/70 text-white text-[10px] font-mono font-bold backdrop-blur-xs flex items-center gap-1.5">
                <Camera className="w-3 h-3" />
                <span>Photo {activePhotoIdx + 1} of {property.images?.length || 1}</span>
              </div>
            </div>

            {/* Thumbnails Row if multiple photos */}
            {property.images && property.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
                {property.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActivePhotoIdx(i)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activePhotoIdx === i
                        ? 'border-emerald-600 scale-105 shadow-apple-xs'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`thumb ${i}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Pricing */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">{property.title}</h2>
              {property.developer && (
                <p className="text-xs text-purple-700 font-bold mt-1">Developed by {property.developer}</p>
              )}
              <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{property.address || property.locality}, {property.city}</span>
              </p>
            </div>

            <div className="text-left sm:text-right">
              <div className="text-xs text-slate-500 font-medium">Pricing</div>
              <div className="text-2xl font-black text-emerald-700">
                {property.price_display || `₹ ${property.price.toLocaleString('en-IN')}`}
              </div>
            </div>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Super Built-up</div>
              <div className="text-sm font-extrabold text-slate-900 mt-0.5">{property.area} sq.ft</div>
            </div>

            {property.bhk && (
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Configuration</div>
                <div className="text-sm font-extrabold text-slate-900 mt-0.5">{property.bhk}</div>
              </div>
            )}

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Category</div>
              <div className="text-sm font-extrabold text-slate-900 mt-0.5">{property.property_category}</div>
            </div>

            {property.possession_date ? (
              <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-200 text-center">
                <div className="text-[10px] text-purple-700 uppercase font-bold tracking-wider">Possession</div>
                <div className="text-sm font-extrabold text-purple-900 mt-0.5">{property.possession_date}</div>
              </div>
            ) : (
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                <div className="text-[10px] text-emerald-700 uppercase font-bold tracking-wider">Availability</div>
                <div className="text-sm font-extrabold text-emerald-900 mt-0.5">Ready to Move</div>
              </div>
            )}
          </div>

          {/* Walkthrough & Drone Tour Videos Section */}
          {property.videos && property.videos.length > 0 && (
            <div className="space-y-3 p-4 sm:p-5 rounded-2xl bg-purple-50/70 border border-purple-200">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-purple-950 flex items-center gap-1.5 uppercase tracking-wider">
                  <VideoIcon className="w-4 h-4 text-purple-700" />
                  <span>Project Walkthrough & Drone Videos ({property.videos.length})</span>
                </h4>
                <span className="text-[10px] font-bold text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-md">
                  HD Video Tour
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {property.videos.map((vidUrl, vIdx) => (
                  <div key={vIdx} className="space-y-1">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-xs border border-purple-200">
                      <video
                        src={vidUrl}
                        controls
                        className="w-full h-full object-cover"
                        preload="metadata"
                      />
                    </div>
                    <p className="text-[11px] font-semibold text-purple-900 truncate">
                      Tour Video #{vIdx + 1}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Property Details</h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{property.description}</p>
          </div>

          {/* RERA info if Pre-sales */}
          {property.rera_number && (
            <div className="p-3 sm:p-4 rounded-2xl bg-purple-50 border border-purple-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
              <span className="text-purple-900 font-semibold">Gujarat RERA Registration:</span>
              <span className="font-mono text-purple-900 font-bold bg-purple-100 px-2.5 py-1 rounded-lg break-all">
                {property.rera_number}
              </span>
            </div>
          )}

          {/* Amenities & Features */}
          {property.amenities && property.amenities.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Amenities & Highlights</h4>
              <div className="flex flex-wrap gap-2">
                {property.amenities.map((a, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{a}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {property.location_url ? (
            <a
              href={property.location_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-emerald-700 hover:underline flex items-center justify-center sm:justify-start gap-1.5 font-bold"
            >
              <MapPin className="w-4 h-4" />
              <span>Open on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : <div />}

          <div className="flex items-center gap-2 sm:gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 cursor-pointer text-center"
            >
              Close
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-apple-sm active:scale-95 transition-all cursor-pointer text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
