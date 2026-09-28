import React from 'react';
import { Phone, Mail, MapPin, PlusCircle, ShieldCheck } from 'lucide-react';

interface FooterProps {
  assistancePhone?: string;
  onOpenListModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  assistancePhone = '+91 99742 09999',
  onOpenListModal,
}) => {
  const cleanPhone = assistancePhone.replace(/[^0-9+]/g, '');

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white text-slate-600 font-sans">
      {/* ==================================================== */}
      {/* TOP ACTION STRIP IN FOOTER: ASSISTANCE & LIST PROPERTY */}
      {/* ==================================================== */}
      <div className="bg-[#1d1d1f] text-white border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0 border border-emerald-500/30">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                Direct Operations Assistance Desk
              </div>
              <a
                href={`tel:${cleanPhone}`}
                className="text-sm sm:text-base font-extrabold text-white hover:text-emerald-400 transition-colors"
                title="Call Operations Assistance"
              >
                {assistancePhone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {onOpenListModal && (
              <button
                type="button"
                onClick={onOpenListModal}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all shadow-apple-sm cursor-pointer"
              >
                <PlusCircle className="w-4 h-4 text-white" />
                <span>List a Property</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info with Official Squircle Monogram Logo */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden shadow-xs shrink-0 flex items-center justify-center bg-black">
                <img
                  src="/favicon.svg"
                  alt="NB Listing Official Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-extrabold text-base text-slate-900 tracking-tight">
                NB Listing
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-md">
              Gujarat's official verified property directory and premium real estate showcase. Handpicked and verified properties across Pre-sales, Rent, and Re-sale channels.
            </p>
            <div className="pt-1 text-[11px] text-slate-400">
              Official Showcase Domain: <span className="font-mono text-slate-700 font-semibold">listing.nbpropertytech.com</span>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Portfolio Channels</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>RERA Approved Pre-sales Launches</li>
              <li>Verified Luxury Rental Homes</li>
              <li>High-Yield Re-sale Inventory</li>
              <li>Corporate Commercial Offices</li>
              <li>NA Land & Industrial Plots</li>
            </ul>
          </div>

          {/* Contact Assistance Desk */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Direct Contact</h4>
            <div className="space-y-2 text-xs text-slate-600">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <a href={`tel:${cleanPhone}`} className="hover:text-emerald-700 font-semibold transition-colors">
                  {assistancePhone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>connect@nbpropertytech.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Ahmedabad, Gujarat</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© 2026 NB Listing. All rights reserved. Powered by NB Property Technology.</p>
          <p className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Gujarat's Official Verified Property Directory</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
