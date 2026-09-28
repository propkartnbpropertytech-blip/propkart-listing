import React from 'react';
import { Building2, Phone, ExternalLink, Sparkles } from 'lucide-react';
import { ListingType } from '../types/listing';

interface HeaderProps {
  activeTab: ListingType;
  onSelectTab: (tab: ListingType) => void;
  publishedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  publishedCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-xl border-b border-black/[0.06] shadow-apple-sm px-4 sm:px-8 py-3.5 flex items-center justify-between transition-all">
      {/* Brand Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-[#1d1d1f] text-white flex items-center justify-center shadow-apple-sm shrink-0">
          <Building2 className="w-5 h-5 text-emerald-400" />
        </div>
        <div>
          <div className="font-extrabold text-base tracking-tight text-slate-900 flex items-center gap-2">
            <span>PropKart</span>
            <span className="text-emerald-700 font-bold text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
              Listing
            </span>
          </div>
          <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
            Verified Real Estate & Premium Inventory Showcase
          </p>
        </div>
      </div>

      {/* Center Nav Tabs (Desktop) */}
      <nav className="hidden md:flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl border border-black/[0.04]">
        {(['Pre-sales', 'Rent', 'Re-sale'] as ListingType[]).map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => onSelectTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-white text-slate-900 shadow-apple-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <span>{tab}</span>
            </button>
          );
        })}
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <a
          href="tel:+919974209999"
          className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/70 transition-all cursor-pointer"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-600" />
          <span>+91 99742 09999</span>
        </a>

        <a
          href="https://propconnect.nbpropertytech.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#1d1d1f] hover:bg-black active:scale-95 transition-all shadow-apple-sm cursor-pointer"
        >
          <span>List Property</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
        </a>
      </div>
    </header>
  );
};
