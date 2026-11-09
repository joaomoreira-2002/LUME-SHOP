/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import {
  PRODUCTS,
  Product,
  CategoryType,
  FormatType,
  MaterialType,
  PriceRangeType,
  CartItem,
  FORMAT_OPTIONS,
  MATERIAL_OPTIONS,
  PRICE_OPTIONS,
} from './data/products';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SidebarFilters } from './components/SidebarFilters';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ProductModal } from './components/ProductModal';
import { Footer } from './components/Footer';
import { InfoModals, ModalType } from './components/InfoModals';
import { PolicyPageId } from './components/PolicyLayout';
import { ReturnsPage } from './pages/ReturnsPage';
import { ShippingPage } from './pages/ShippingPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { AboutPage } from './pages/AboutPage';
import { HelpPage } from './pages/HelpPage';
import { ContactPage } from './pages/ContactPage';
import { ChevronDown, X, Check, LayoutGrid, Grid3X3, SlidersHorizontal } from 'lucide-react';

type SortOption = 'relevance' | 'price-asc' | 'price-desc' | 'best-sellers' | 'name-asc';
export type PageView = 'store' | PolicyPageId;

const getInitialPage = (): PageView => {
  if (typeof window !== 'undefined') {
    const rawPath = window.location.pathname.replace(/^\/+|\/+$/g, '');
    const validPages: PolicyPageId[] = [
      'trocas-e-devolucoes',
      'envio-e-entrega',
      'privacidade',
      'termos-de-uso',
      'ajuda',
      'sobre',
      'contato',
    ];
    if (validPages.includes(rawPath as PolicyPageId)) {
      return rawPath as PolicyPageId;
    }
    const p =
      new URLSearchParams(window.location.search).get('p') ||
      new URLSearchParams(window.location.search).get('page');
    if (p && validPages.includes(p as PolicyPageId)) {
      return p as PolicyPageId;
    }
  }
  return 'store';
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>(getInitialPage);

  // Read initial category from URL query parameters (e.g. ?c=sol)
  const [activeCategory, setActiveCategory] = useState<CategoryType>(() => {
    if (typeof window !== 'undefined') {
      const param = new URLSearchParams(window.location.search).get('c');
      if (param && ['sol', 'grau', 'luz-azul', 'esportivo', 'todos'].includes(param)) {
        return param as CategoryType;
      }
    }
    return 'todos';
  });

  // Filter States
  const [selectedFormat, setSelectedFormat] = useState<FormatType | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialType | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRangeType>('all');
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [searchQuery, setSearchQuery] = useState('');
  const [columnsView, setColumnsView] = useState<3 | 4>(3);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Cart State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Wishlist State (persisted to localStorage)
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('lume_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Modal States
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [infoModalType, setInfoModalType] = useState<ModalType>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Page Routing Handlers
  const navigateToPage = (pageId: PolicyPageId) => {
    setCurrentPage(pageId);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', `/${pageId}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToHome = (category: CategoryType = 'todos') => {
    setCurrentPage('store');
    setActiveCategory(category);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.origin);
      if (category !== 'todos') {
        url.searchParams.set('c', category);
      }
      window.history.pushState({}, '', url.pathname + url.search);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Sync category with URL search parameters (?c=sol)
  const handleSelectCategory = (cat: CategoryType) => {
    navigateToHome(cat);
  };

  // Dynamic Document Title based on active page
  useEffect(() => {
    const titles: Record<PageView, string> = {
      store: 'Lume Shop | Óculos de Sol, Armações de Grau e Luz Azul UV400',
      sobre: 'Sobre a Lume Shop | Óculos bons não precisam ser caros',
      ajuda: 'Perguntas Frequentes & Ajuda | Lume Shop',
      contato: 'Fale Conosco & Atendimento | Lume Shop',
      'trocas-e-devolucoes': 'Trocas e Devoluções | Lume Shop',
      'envio-e-entrega': 'Prazos de Envio e Entrega | Lume Shop',
      'termos-de-uso': 'Termos de Uso | Lume Shop',
      privacidade: 'Política de Privacidade | Lume Shop',
    };
    if (typeof document !== 'undefined') {
      document.title = titles[currentPage] || 'Lume Shop';
    }
  }, [currentPage]);

  // Listen to popstate (back/forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      const page = getInitialPage();
      setCurrentPage(page);
      const param = new URLSearchParams(window.location.search).get('c');
      if (param && ['sol', 'grau', 'luz-azul', 'esportivo', 'todos'].includes(param)) {
        setActiveCategory(param as CategoryType);
      } else {
        setActiveCategory('todos');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Save wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('lume_wishlist', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Cart Handlers
  const handleAddToCart = (product: Product, quantity = 1, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
    showToast(`"${product.name}" adicionado à sacola!`);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Wishlist Handlers
  const handleToggleWishlist = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast(`Removido dos favoritos`);
        return prev.filter((p) => p.id !== product.id);
      } else {
        showToast(`"${product.name}" adicionado aos favoritos!`);
        return [...prev, product];
      }
    });
  };

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleClearFilters = () => {
    setSelectedFormat(null);
    setSelectedMaterial(null);
    setSelectedPriceRange('all');
    setSearchQuery('');
  };

  const hasActiveSecondaryFilters =
    selectedFormat !== null ||
    selectedMaterial !== null ||
    selectedPriceRange !== 'all' ||
    searchQuery.trim() !== '';

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (activeCategory !== 'todos' && product.category !== activeCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesCode = product.code.toLowerCase().includes(q);
        const matchesColor = product.color.toLowerCase().includes(q);
        const matchesFormat = product.formatLabel.toLowerCase().includes(q);
        const matchesMaterial = product.materialLabel.toLowerCase().includes(q);
        if (!matchesName && !matchesCode && !matchesColor && !matchesFormat && !matchesMaterial) {
          return false;
        }
      }
      // Format filter
      if (selectedFormat && product.format !== selectedFormat) {
        return false;
      }
      // Material filter
      if (selectedMaterial && product.material !== selectedMaterial) {
        return false;
      }
      // Price range filter
      if (selectedPriceRange === 'under100' && product.price > 100) {
        return false;
      }
      if (
        selectedPriceRange === '100to150' &&
        (product.price <= 100 || product.price > 150)
      ) {
        return false;
      }
      if (selectedPriceRange === 'above150' && product.price <= 150) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'best-sellers') {
        const aScore = a.badge === 'MAIS VENDIDO' ? 2 : a.badge === 'NOVO' ? 1 : 0;
        const bScore = b.badge === 'MAIS VENDIDO' ? 2 : b.badge === 'NOVO' ? 1 : 0;
        return bScore - aScore;
      }
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      return a.id.localeCompare(b.id);
    });
  }, [activeCategory, selectedFormat, selectedMaterial, selectedPriceRange, sortBy, searchQuery]);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-[#FF6A00] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-[#0a0a0a] text-white text-xs font-semibold py-2.5 px-4 rounded-xl shadow-2xl flex items-center gap-2 border border-zinc-800">
          <Check className="w-4 h-4 text-[#FF6A00]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header */}
      <Header
        currentPage={currentPage}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenAbout={() => navigateToPage('sobre')}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Institutional & Policy Pages Route Switcher */}
      {currentPage === 'trocas-e-devolucoes' && (
        <ReturnsPage
          onNavigatePage={navigateToPage}
          onNavigateHome={() => navigateToHome('todos')}
        />
      )}

      {currentPage === 'envio-e-entrega' && (
        <ShippingPage
          onNavigatePage={navigateToPage}
          onNavigateHome={() => navigateToHome('todos')}
        />
      )}

      {currentPage === 'termos-de-uso' && (
        <TermsPage
          onNavigatePage={navigateToPage}
          onNavigateHome={() => navigateToHome('todos')}
        />
      )}

      {currentPage === 'privacidade' && (
        <PrivacyPage
          onNavigatePage={navigateToPage}
          onNavigateHome={() => navigateToHome('todos')}
        />
      )}

      {currentPage === 'sobre' && (
        <AboutPage
          onNavigatePage={navigateToPage}
          onNavigateHome={() => navigateToHome('todos')}
        />
      )}

      {currentPage === 'ajuda' && (
        <HelpPage
          onNavigatePage={navigateToPage}
          onNavigateHome={() => navigateToHome('todos')}
        />
      )}

      {currentPage === 'contato' && (
        <ContactPage
          onNavigatePage={navigateToPage}
          onNavigateHome={() => navigateToHome('todos')}
        />
      )}

      {/* Main Catalog Container (Shown only when in store view) */}
      {currentPage === 'store' && (
        <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-8 pb-20">
          {/* Editorial Hero Section */}
          <HeroSection
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
            totalModels={PRODUCTS.length}
          />

        {/* Dynamic Filters & Control Bar */}
        <div className="pt-6 pb-6 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100">
          {/* Left: Active Filters Chips */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 text-zinc-800 font-semibold cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#FF6A00]" />
              <span>Filtros</span>
            </button>

            <span className="font-bold text-zinc-900 tabular-nums">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'modelo' : 'modelos'}
            </span>

            {/* Category tag chip */}
            {activeCategory !== 'todos' && (
              <span className="bg-[#FF6A00] text-white font-bold text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-2xs">
                <span>
                  {activeCategory === 'sol' && 'Sol'}
                  {activeCategory === 'grau' && 'Grau'}
                  {activeCategory === 'luz-azul' && 'Luz azul'}
                  {activeCategory === 'esportivo' && 'Esportivo'}
                </span>
                <button
                  onClick={() => handleSelectCategory('todos')}
                  className="hover:opacity-75 cursor-pointer"
                  title="Remover filtro"
                >
                  <X className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </span>
            )}

            {/* Search Query chip */}
            {searchQuery && (
              <span className="bg-zinc-100 text-zinc-800 font-semibold text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-zinc-200">
                <span>Busca: "{searchQuery}"</span>
                <button
                  onClick={() => setSearchQuery('')}
                  className="hover:text-red-600 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}

            {/* Format chip */}
            {selectedFormat && (
              <span className="bg-zinc-100 text-zinc-800 font-semibold text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-zinc-200">
                <span>{FORMAT_OPTIONS.find((f) => f.id === selectedFormat)?.label}</span>
                <button
                  onClick={() => setSelectedFormat(null)}
                  className="hover:text-red-600 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}

            {/* Material chip */}
            {selectedMaterial && (
              <span className="bg-zinc-100 text-zinc-800 font-semibold text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-zinc-200">
                <span>{MATERIAL_OPTIONS.find((m) => m.id === selectedMaterial)?.label}</span>
                <button
                  onClick={() => setSelectedMaterial(null)}
                  className="hover:text-red-600 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}

            {/* Price chip */}
            {selectedPriceRange !== 'all' && (
              <span className="bg-zinc-100 text-zinc-800 font-semibold text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-zinc-200">
                <span>{PRICE_OPTIONS.find((p) => p.id === selectedPriceRange)?.label}</span>
                <button
                  onClick={() => setSelectedPriceRange('all')}
                  className="hover:text-red-600 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}
          </div>

          {/* Right: Layout Switcher & Sorting */}
          <div className="flex items-center gap-4 text-xs">
            {/* 3 vs 4 Columns Grid Toggle (Desktop) */}
            <div className="hidden xl:flex items-center gap-1 border border-zinc-200 p-0.5 rounded-lg bg-zinc-50">
              <button
                onClick={() => setColumnsView(3)}
                className={`p-1.5 rounded transition-colors cursor-pointer ${
                  columnsView === 3
                    ? 'bg-white text-black shadow-xs font-bold'
                    : 'text-zinc-400 hover:text-black'
                }`}
                title="Visualização 3 colunas"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setColumnsView(4)}
                className={`p-1.5 rounded transition-colors cursor-pointer ${
                  columnsView === 4
                    ? 'bg-white text-black shadow-xs font-bold'
                    : 'text-zinc-400 hover:text-black'
                }`}
                title="Visualização 4 colunas"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 font-medium">Ordenar:</span>
              <div className="relative inline-block">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  aria-label="Ordenar produtos"
                  className="appearance-none bg-white border border-zinc-200 rounded-lg py-1.5 pl-3 pr-8 text-xs font-semibold text-zinc-800 hover:border-zinc-400 focus:outline-none focus:border-black cursor-pointer shadow-2xs"
                >
                  <option value="relevance">Relevância</option>
                  <option value="best-sellers">Mais Vendidos</option>
                  <option value="price-asc">Menor Preço</option>
                  <option value="price-desc">Maior Preço</option>
                  <option value="name-asc">Nome A-Z</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Catalog Body: Sidebar + Products Grid */}
        <div className="pt-8 flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left Sidebar Filters */}
          <div className={`${isMobileFilterOpen ? 'block' : 'hidden lg:block'} w-full lg:w-[220px]`}>
            <SidebarFilters
              selectedFormat={selectedFormat}
              onSelectFormat={setSelectedFormat}
              selectedMaterial={selectedMaterial}
              onSelectMaterial={setSelectedMaterial}
              selectedPriceRange={selectedPriceRange}
              onSelectPriceRange={setSelectedPriceRange}
              onClearAll={handleClearFilters}
              hasActiveFilters={hasActiveSecondaryFilters}
            />
          </div>

          {/* Right Product Grid */}
          <section className="flex-1 w-full" aria-label="Catálogo de óculos">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center bg-zinc-50 rounded-2xl border border-zinc-100 p-8">
                <p className="text-zinc-800 font-bold text-sm mb-1">
                  Nenhum modelo encontrado com os filtros selecionados.
                </p>
                <p className="text-xs text-zinc-500 mb-6">
                  Tente alterar seus critérios de busca ou conferir toda a nossa coleção.
                </p>
                <button
                  onClick={() => {
                    handleSelectCategory('todos');
                    handleClearFilters();
                  }}
                  className="px-5 py-2.5 bg-black text-white rounded-xl text-xs font-semibold hover:bg-[#FF6A00] transition-colors cursor-pointer"
                >
                  Ver todos os 40 modelos
                </button>
              </div>
            ) : (
              <div
                className={`grid gap-x-6 gap-y-10 ${
                  columnsView === 4
                    ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                }`}
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={(p, e) => handleAddToCart(p, 1, e)}
                    onOpenDetails={(p) => setSelectedProduct(p)}
                    isWishlisted={wishlist.some((w) => w.id === product.id)}
                    onToggleWishlist={handleToggleWishlist}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onAddToCart={(p) => handleAddToCart(p, 1)}
      />

      {/* Product Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(p, qty) => handleAddToCart(p, qty)}
      />

      {/* Help & Policy Modals (Available as modal fallbacks) */}
      <InfoModals
        type={infoModalType}
        onClose={() => setInfoModalType(null)}
      />

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => {
          navigateToHome(cat);
        }}
        onNavigatePage={(pageId) => navigateToPage(pageId)}
        onOpenModal={(type) => setInfoModalType(type)}
      />
    </div>
  );
}
