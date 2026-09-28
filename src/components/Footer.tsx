import React from 'react';
import { Building2, Phone, Mail, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white text-slate-600 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#1d1d1f] text-white flex items-center justify-center font-bold">
                <Building2 className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="font-extrabold text-base text-slate-900 tracking-tight">PropKart Listing</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-md">
              Gujarat's premier property showcase portal. Handpicked and verified real estate across Pre-sales, Rent, and Re-sale directly managed through the PropKart Operations Desk.
            </p>
            <div className="pt-1 text-[11px] text-slate-400">
              Official Showcase Domain: <span className="font-mono text-slate-700 font-semibold">listing.nbpropertytech.com</span>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Portfolio</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>Residential Apartments & Villas</li>
              <li>Corporate Commercial Offices</li>
              <li>Industrial Warehouses & Sheds</li>
              <li>NA Land & Villa Plots</li>
              <li>RERA Approved Pre-sales Launches</li>
            </ul>
          </div>

          {/* Contact Assistance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Inquiry Desk</h4>
            <div className="space-y-2 text-xs text-slate-600">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>+91 99742 09999</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>connect@nbpropertytech.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Ahmedabad & Surat, Gujarat</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© 2026 PropKart. All rights reserved. Powered by NB Property Technology.</p>
          <p className="flex items-center gap-1">
            <span>Crafted for high-performance real estate operations</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
