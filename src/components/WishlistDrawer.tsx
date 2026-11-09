import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '../data/products';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlist,
  onRemoveFromWishlist,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  const formatBRL = (val: number) =>
    val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-zinc-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-[#FF6A00] fill-[#FF6A00]" />
              <h2 className="text-base font-bold text-zinc-900 tracking-tight">
                Seus Favoritos
              </h2>
              <span className="bg-zinc-100 text-zinc-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                {wishlist.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-black rounded-lg hover:bg-zinc-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-zinc-100">
            {wishlist.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-4 text-[#FF6A00]">
                  <Heart className="w-8 h-8 stroke-1" />
                </div>
                <h3 className="text-sm font-bold text-zinc-900 mb-1">
                  Nenhum favorito ainda
                </h3>
                <p className="text-xs text-zinc-500 max-w-xs mb-6">
                  Clique no ícone de coração nos produtos para salvar seus modelos preferidos.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-black text-white rounded-xl text-xs font-semibold hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  Explorar catálogo
                </button>
              </div>
            ) : (
              wishlist.map((product) => (
                <div key={product.id} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                  <div className="w-20 h-20 bg-zinc-100 rounded-xl overflow-hidden shrink-0 border border-zinc-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-zinc-900 truncate">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveFromWishlist(product.id)}
                          className="text-zinc-400 hover:text-red-500 transition-colors p-0.5 cursor-pointer"
                          title="Remover dos favoritos"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-zinc-500">
                        {product.code} · {product.formatLabel}
                      </p>
                      <div className="text-xs font-bold text-zinc-950 mt-1">
                        {formatBRL(product.price)}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        onAddToCart(product);
                        onRemoveFromWishlist(product.id);
                      }}
                      className="mt-2 w-full py-1.5 px-3 bg-black hover:bg-[#FF6A00] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Mover para a Sacola</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
