import React from 'react';
import { X, Building2, KeyRound, Tag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface ListPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  presalesUrl?: string;
  propconnectUrl?: string;
}

export const ListPropertyModal: React.FC<ListPropertyModalProps> = ({
  isOpen,
  onClose,
  presalesUrl,
  propconnectUrl,
}) => {
  if (!isOpen) return null;

  // Determine local vs production URLs
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const defaultPresalesUrl = import.meta.env.VITE_PRESALES_URL || (isLocal ? 'http://localhost:3006' : 'https://presales.nbpropertytech.com');
  const defaultPropconnectUrl = import.meta.env.VITE_PROPCONNECT_URL || 'https://propconnect.nbpropertytech.com';

  const finalPresalesUrl = presalesUrl || defaultPresalesUrl;
  const finalPropconnectUrl = propconnectUrl || defaultPropconnectUrl;

  const handleSelectOption = (targetUrl: string) => {
    onClose();
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full p-5 sm:p-8 border border-black/[0.08] shadow-apple-xl relative overflow-y-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
          title="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Select Listing Category</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Choose How You Want to List
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            Select the transaction category for your property to access the specialized listing intake portal.
          </p>
        </div>

        {/* Option Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* 1. Pre-sales */}
          <div
            onClick={() => handleSelectOption(finalPresalesUrl)}
            className="group relative p-5 rounded-2xl border-2 border-purple-200 hover:border-purple-600 bg-purple-50/40 hover:bg-purple-50 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-apple-md hover:-translate-y-0.5"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-xs mb-4 group-hover:scale-105 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-200/80 text-purple-900">
                New Project
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-2">
                Pre-sales Property
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Upcoming developer launches, under-construction towers, luxury villas, and RERA projects.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-purple-200/70 flex items-center justify-between text-xs font-bold text-purple-700">
              <span>Open Pre-sales</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* 2. Rent */}
          <div
            onClick={() => handleSelectOption(`${finalPropconnectUrl}?listing_type=Rent`)}
            className="group relative p-5 rounded-2xl border-2 border-emerald-200 hover:border-emerald-600 bg-emerald-50/40 hover:bg-emerald-50 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-apple-md hover:-translate-y-0.5"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-xs mb-4 group-hover:scale-105 transition-transform">
                <KeyRound className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-200/80 text-emerald-900">
                Rental Income
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-2">
                Rent Property
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Residential apartments, luxury penthouses, corporate offices, and commercial spaces for lease.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-emerald-200/70 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>List for Rent</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* 3. Re-sale */}
          <div
            onClick={() => handleSelectOption(`${finalPropconnectUrl}?listing_type=Re-sale`)}
            className="group relative p-5 rounded-2xl border-2 border-blue-200 hover:border-blue-600 bg-blue-50/40 hover:bg-blue-50 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-apple-md hover:-translate-y-0.5"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-xs mb-4 group-hover:scale-105 transition-transform">
                <Tag className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-200/80 text-blue-900">
                Direct Sale
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-2">
                Re-sale Property
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Ready-to-move homes, resale bungalows, industrial sheds, and clear-title NA land plots.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-blue-200/70 flex items-center justify-between text-xs font-bold text-blue-700">
              <span>List for Re-sale</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Footer info badge */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Verified intake process powered by PropKart Operations Desk & Gujarat RERA compliance.</span>
        </div>
      </div>
    </div>
  );
};
