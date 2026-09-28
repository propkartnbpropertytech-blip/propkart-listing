import React from 'react';
import { ListingType } from '../types/listing';
import {
  Building2,
  KeyRound,
  Briefcase,
  Compass,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface ChannelCardsSectionProps {
  counts: {
    'Pre-sales': number;
    Rent: number;
    'Re-sale': number;
    Total: number;
  };
  onSelectCard: (type: ListingType) => void;
}

export const ChannelCardsSection: React.FC<ChannelCardsSectionProps> = ({
  counts,
  onSelectCard,
}) => {
  const cards = [
    {
      id: 'Pre-sales' as ListingType,
      title: 'Pre-sales',
      subtitle: 'Exclusive Builder Launches & Upcoming Towers',
      badge: '🏢 Pre-sales',
      count: counts['Pre-sales'],
      countLabel: 'Projects Live',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      description:
        'Discover upcoming developer launches, high-rise luxury towers, and early-bird pre-construction bookings with verified Gujarat RERA.',
      highlight: 'Direct Developer Allotment • Early-Bird Pricing',
      accentColor: 'from-emerald-600 to-teal-700',
      tagColor: 'bg-emerald-500 text-white',
    },
    {
      id: 'Rent' as ListingType,
      title: 'Rent',
      subtitle: 'Verified Luxury Apartments & Move-in Ready Homes',
      badge: '🔑 Rent',
      count: counts['Rent'],
      countLabel: 'Rentals Live',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      description:
        'Curated luxury apartments, penthouses, executive villas and commercial workspaces verified directly from genuine property owners.',
      highlight: '100% Direct Owner Verified • No Brokerage Scams',
      accentColor: 'from-blue-600 to-indigo-700',
      tagColor: 'bg-blue-500 text-white',
    },
    {
      id: 'Re-sale' as ListingType,
      title: 'Re-sale',
      subtitle: 'Prime Commercial Spaces & Investment Plots',
      badge: '🏷️ Re-sale',
      count: counts['Re-sale'],
      countLabel: 'Properties Live',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      description:
        'Ready-to-move resale homes, corporate office suites, and high-appreciation land investments with clear title deeds and instant possession.',
      highlight: 'Clear Title Deeds • Market-Tested Valuation',
      accentColor: 'from-amber-600 to-orange-700',
      tagColor: 'bg-amber-500 text-white',
    },
  ];

  return (
    <section id="channel-cards" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
          <div className="space-y-1.5 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 w-fit">
              <Compass className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Property Channels</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Choose Your Property Channel
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
              Explore verified real estate across Gujarat with full legal clarity, direct pricing, and operations verification.
            </p>
          </div>

          <div className="text-left sm:text-right shrink-0">
            <span className="text-xs font-bold text-slate-700 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs">
              {counts.Total} Verified Properties Live
            </span>
          </div>
        </div>

        {/* The 3 Cards with Rich Background Imagery & Hover-Revealed Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelectCard(card.id)}
              className="group relative h-[400px] sm:h-[440px] rounded-3xl overflow-hidden cursor-pointer shadow-apple-md hover:shadow-apple-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between p-5 sm:p-6 select-none border border-black/10 active:scale-[0.99]"
            >
              {/* Background Architectural Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Gradient Shadow Overlay for High Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/25 group-hover:from-black/98 group-hover:via-black/70 transition-all duration-300" />
              </div>

              {/* Top Card Badges */}
              <div className="relative z-10 flex items-center justify-between">
                <span className={`text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full shadow-md ${card.tagColor}`}>
                  {card.badge}
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 shadow-sm">
                  {card.count} {card.countLabel}
                </span>
              </div>

              {/* Bottom Card Content with Hover-Revealed Description */}
              <div className="relative z-10 space-y-2">
                {/* Channel Pre-title */}
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>{card.title} Channel</span>
                </div>

                {/* Primary Card Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight group-hover:text-emerald-300 transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs text-slate-300 font-medium line-clamp-2 group-hover:hidden transition-all">
                  {card.subtitle}
                </p>

                {/* Hover-Revealed Detailed Description & Highlights */}
                <div className="max-h-0 opacity-0 group-hover:max-h-60 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out space-y-3 pt-1">
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                    {card.description}
                  </p>

                  <div className="text-[11px] font-semibold text-emerald-400 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 w-fit">
                    ✓ {card.highlight}
                  </div>

                  <div className="pt-1 flex items-center gap-2 text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                    <span>Explore {card.title} Properties</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>

                {/* Subtle affordance when not hovered */}
                <div className="pt-1 flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:hidden">
                  <span className="hidden sm:inline">Hover to read • </span>
                  <span>Tap to open channel</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChannelCardsSection;
