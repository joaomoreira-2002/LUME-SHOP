import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, X } from 'lucide-react';
import { CategoryType } from '../data/products';

interface HeaderProps {
  currentPage?: string;
  activeCategory: CategoryType;
  onSelectCategory: (category: CategoryType) => void;
  cartCount: number;
  onOpenCart: () => void;
  wishlistCount: number;
  onOpenWishlist: () => void;
  onOpenAbout: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage = 'store',
  activeCategory,
  onSelectCategory,
  cartCount,
  onOpenCart,
  wishlistCount,
  onOpenWishlist,
  onOpenAbout,
  searchQuery,
  onSearchChange,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-40 border-b border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] backdrop-blur-md bg-white/95">
      {/* Top Black Announcement Strip */}
      <div className="w-full bg-[#0a0a0a] text-white text-[10px] md:text-[11px] tracking-widest font-medium py-2 px-4 sm:px-8">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between uppercase">
          <div className="text-zinc-400 hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
            <span>FRETE GRÁTIS ACIMA DE R$ 199,00</span>
          </div>
          <div className="mx-auto sm:mx-0 text-center flex items-center gap-2">
            <span className="text-[#FF6A00] font-bold">6X SEM JUROS</span>
            <span className="text-zinc-600">·</span>
            <span className="text-white font-bold bg-[#FF6A00]/20 px-2 py-0.5 rounded text-[10px]">
              5% OFF NO PIX
            </span>
          </div>
          <div className="text-zinc-400 hidden sm:flex items-center gap-2">
            <span>TROCA GRÁTIS EM 7 DIAS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
        </div>
      </div>

      {/* Main Distinctive Navigation Bar */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => onSelectCategory('todos')}
          className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none"
        >
          {/* Eyeglasses & Light Motif Icon */}
          <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center transition-all group-hover:bg-[#FF6A00] shadow-sm">
            <svg
              className="w-5 h-5 transition-transform group-hover:scale-105"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="6" cy="12" r="4" />
              <circle cx="18" cy="12" r="4" />
              <line x1="10" y1="12" x2="14" y2="12" />
              <path d="M2 11l2-2" />
              <path d="M22 11l-2-2" />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-xl md:text-2xl font-black tracking-tight text-black">
                LUME
              </span>
              <span className="bg-[#FF6A00] text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded tracking-widest uppercase">
                SHOP
              </span>
            </div>
            <span className="text-[9px] font-medium text-zinc-400 tracking-wider uppercase mt-0.5">
              Eyewear & Optical
            </span>
          </div>
        </button>

        {/* Center Categories with Active Underline Badges */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {[
            { id: 'todos' as CategoryType, label: 'Todos os Modelos', count: 40 },
            { id: 'sol' as CategoryType, label: 'Sol', count: 15 },
            { id: 'grau' as CategoryType, label: 'Grau', count: 15 },
            { id: 'luz-azul' as CategoryType, label: 'Luz Azul', count: 6 },
            { id: 'esportivo' as CategoryType, label: 'Esportivo', count: 4 },
          ].map((cat) => {
            const isActive = currentPage === 'store' && activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`relative px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'text-black bg-zinc-100 font-bold'
                    : 'text-zinc-600 hover:text-black hover:bg-zinc-50'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-medium tabular-nums ${
                    isActive
                      ? 'bg-[#FF6A00] text-white'
                      : 'bg-zinc-200 text-zinc-600'
                  }`}
                >
                  {cat.count}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#FF6A00] rounded-full" />
                )}
              </button>
            );
          })}
          <button
            onClick={onOpenAbout}
            className={`relative px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              currentPage === 'sobre'
                ? 'text-black bg-zinc-100 font-bold'
                : 'text-zinc-600 hover:text-black hover:bg-zinc-50'
            }`}
          >
            <span>Sobre a Marca</span>
            {currentPage === 'sobre' && (
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#FF6A00] rounded-full" />
            )}
          </button>
        </nav>

        {/* Right Search, Wishlist & Cart Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Toggle / Input */}
          <div className="relative flex items-center">
            {isSearchOpen ? (
              <div className="flex items-center bg-zinc-100 rounded-full px-3 py-1.5 border border-zinc-200 w-48 sm:w-64 transition-all">
                <Search className="w-3.5 h-3.5 text-zinc-400 mr-2 shrink-0" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Buscar modelo ou cor..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="bg-transparent text-xs text-zinc-900 focus:outline-none w-full"
                />
                <button
                  onClick={() => {
                    onSearchChange('');
                    setIsSearchOpen(false);
                  }}
                  className="text-zinc-400 hover:text-black p-0.5 cursor-pointer ml-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Buscar óculos"
                className="p-2 text-zinc-600 hover:text-black hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
                title="Buscar produtos"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            aria-label="Ver favoritos"
            className="relative p-2 text-zinc-600 hover:text-black hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
            title="Lista de Favoritos"
          >
            <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'text-[#FF6A00] fill-[#FF6A00]' : ''}`} />
            {wishlistCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#FF6A00] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center tabular-nums shadow-2xs">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Shopping Bag Button */}
          <button
            onClick={onOpenCart}
            aria-label="Abrir Sacola de compras"
            className="flex items-center gap-2 bg-black text-white hover:bg-zinc-800 transition-all px-3.5 sm:px-4 py-2 rounded-full cursor-pointer shadow-sm group active:scale-95"
          >
            <ShoppingBag className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold tracking-wide hidden sm:inline">Sacola</span>
            <span className="bg-[#FF6A00] text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center tabular-nums shadow-xs">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
