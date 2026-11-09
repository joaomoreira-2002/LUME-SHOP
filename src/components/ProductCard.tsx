import React from 'react';
import { Product } from '../data/products';
import { Plus, Heart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
  onOpenDetails: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product, e: React.MouseEvent) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onOpenDetails,
  isWishlisted,
  onToggleWishlist,
}) => {
  const formatBRL = (val: number) => {
    return val.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <article
      onClick={() => onOpenDetails(product)}
      className="group flex flex-col cursor-pointer transition-all duration-300"
    >
      {/* Image Container with Luxury Neutral Card Backdrop */}
      <div className="relative w-full aspect-[4/3] bg-[#fbfbfb] rounded-2xl overflow-hidden border border-zinc-200/70 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 group-hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] group-hover:border-zinc-300">
        <img
          src={product.image}
          alt={`Óculos ${product.name} ${product.code}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />



        {/* Wishlist Heart Button */}
        <button
          onClick={(e) => onToggleWishlist(product, e)}
          aria-label={isWishlisted ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          className={`absolute top-3 right-3 z-20 p-2 rounded-full backdrop-blur-xs transition-all cursor-pointer shadow-xs ${
            isWishlisted
              ? 'bg-[#FF6A00] text-white hover:bg-[#e05d00]'
              : 'bg-white/90 text-zinc-500 hover:text-black hover:bg-white'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Hover Quick Action Buttons */}
        <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-250 translate-y-2 group-hover:translate-y-0 z-20 pointer-events-none group-hover:pointer-events-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product, e);
            }}
            className="flex-1 bg-black text-white hover:bg-[#FF6A00] font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-lg backdrop-blur-xs transition-all active:scale-95 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Adicionar à Sacola</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(product);
            }}
            aria-label="Ver detalhes"
            className="p-2.5 bg-white text-zinc-800 hover:bg-zinc-100 rounded-xl shadow-md transition-colors cursor-pointer"
            title="Espiar detalhes"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Metadata below image */}
      <div className="pt-3 pb-1 flex items-start justify-between gap-2">
        {/* Left Information */}
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h3 className="font-bold text-[15px] sm:text-[16px] text-zinc-900 tracking-tight leading-tight group-hover:text-[#FF6A00] transition-colors">
              {product.name}
            </h3>
            {product.badge && (
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                product.badge === 'NOVO'
                  ? 'bg-orange-50 text-[#FF6A00] border border-orange-200/80'
                  : product.badge === 'MAIS VENDIDO'
                  ? 'bg-zinc-100 text-zinc-800 border border-zinc-200'
                  : 'bg-zinc-900 text-white'
              }`}>
                {product.badge === 'MAIS VENDIDO' ? 'Mais Vendido' : product.badge === 'NOVO' ? 'Novo' : 'Oferta'}
              </span>
            )}
          </div>
          <p className="text-xs text-zinc-500 mt-1 font-normal flex items-center gap-1.5 flex-wrap">
            <span className="font-mono text-[11px] text-zinc-400 font-medium">{product.code}</span>
            <span className="text-zinc-300">·</span>
            <span>{product.formatLabel}</span>
            <span className="text-zinc-300">·</span>
            <span>{product.materialLabel}</span>
          </p>
          <p className="text-[11px] text-zinc-400 mt-0.5 truncate">
            {product.color}
          </p>
        </div>

        {/* Right Price Information */}
        <div className="text-right shrink-0">
          {product.originalPrice && (
            <div className="text-xs text-zinc-400 line-through tabular-nums leading-none mb-0.5">
              {formatBRL(product.originalPrice)}
            </div>
          )}
          <div className="font-bold text-sm sm:text-[15px] text-zinc-950 tabular-nums leading-tight">
            {formatBRL(product.price)}
          </div>
          <div className="text-[11px] text-[#FF6A00] font-semibold tabular-nums mt-0.5">
            {formatBRL(product.pixPrice)} no Pix
          </div>
        </div>
      </div>
    </article>
  );
};
