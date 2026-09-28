import React from 'react';

interface HeaderProps {
  onGoHome?: () => void;
  variant?: 'light' | 'dark';
}

export const Header: React.FC<HeaderProps> = ({ onGoHome, variant = 'light' }) => {
  const isLight = variant === 'light';

  return (
    <header className="absolute top-0 left-0 right-0 z-40 bg-transparent px-4 sm:px-8 py-5 flex items-center justify-between transition-all pointer-events-auto">
      {/* Brand Logo and "NB Listing" only with ZERO SHADOW */}
      <div
        onClick={onGoHome}
        className={`flex items-center gap-3 ${onGoHome ? 'cursor-pointer hover:opacity-90 active:scale-95 transition-all' : ''}`}
        title="NB Listing - Home"
      >
        <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 flex items-center justify-center bg-black">
          <img
            src="/favicon.svg"
            alt="NB Listing Official Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex items-center gap-1.5 select-none">
          <span
            className={`text-xl sm:text-2xl font-black tracking-tight ${
              isLight ? 'text-white' : 'text-slate-900'
            }`}
            style={{ textShadow: 'none', filter: 'none' }}
          >
            NB <span className={isLight ? 'text-emerald-400' : 'text-emerald-600'}>Listing</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
