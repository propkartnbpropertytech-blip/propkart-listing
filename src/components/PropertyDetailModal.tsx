import React from 'react';
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
} from 'lucide-react';

interface PropertyDetailModalProps {
  property: ListingProperty | null;
  onClose: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
}) => {
  if (!property) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello PropKart, I am interested in *${property.title}* (${property.listing_type} - ${property.price_display || '₹ ' + property.price}). Please share verified project brochure, floor plans, and pricing.`
    );
    window.open(`https://wa.me/919974209999?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col text-slate-900">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2">
            <span
              className={`text-xs uppercase font-extrabold px-2.5 py-1 rounded-xl text-white ${
                property.listing_type === 'Pre-sales'
                  ? 'bg-purple-600'
                  : property.listing_type === 'Rent'
                  ? 'bg-emerald-600'
                  : 'bg-blue-600'
              }`}
            >
              {property.listing_type}
            </span>
            <span className="text-xs font-bold text-slate-600">
              {property.property_category} • {property.property_sub_type || 'Property'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-200/60 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Main Photo */}
          <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs">
            <img
              src={property.images?.[0] || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80'}
              alt={property.title}
              className="w-full h-full object-cover"
            />
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

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Property Details</h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{property.description}</p>
          </div>

          {/* RERA info if Pre-sales */}
          {property.rera_number && (
            <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-between text-xs">
              <span className="text-purple-900 font-semibold">Gujarat RERA Registration:</span>
              <span className="font-mono text-purple-900 font-bold bg-purple-100 px-2.5 py-1 rounded-lg">
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
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          {property.location_url ? (
            <a
              href={property.location_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-emerald-700 hover:underline flex items-center gap-1.5 font-bold"
            >
              <MapPin className="w-4 h-4" />
              <span>Open on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : <div />}

          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-apple-sm active:scale-95 transition-all cursor-pointer"
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
