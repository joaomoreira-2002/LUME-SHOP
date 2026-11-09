import React, { useState } from 'react';
import { X, Check, Shield, Truck, RotateCcw, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Product } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const formatBRL = (val: number) =>
    val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all w-full max-w-3xl border border-zinc-100">
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Fechar detalhes do produto"
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-zinc-600 hover:text-black shadow-xs transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Product Image (Completely clean, no overlay elements) */}
            <div className="relative bg-[#f4f4f5] p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-zinc-100">
              <div className="w-full aspect-[339/304] rounded-xl overflow-hidden shadow-inner">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Info and Actions */}
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-mono text-xs font-bold text-zinc-700 bg-zinc-100 border border-zinc-200/80 px-2.5 py-0.5 rounded-md">
                    {product.code}
                  </span>
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                    {product.category.toUpperCase()} · {product.formatLabel}
                  </span>
                  {product.badge && (
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                      product.badge === 'NOVO'
                        ? 'bg-[#FF6A00] text-white shadow-xs'
                        : product.badge === 'MAIS VENDIDO'
                        ? 'bg-black text-white'
                        : 'bg-zinc-800 text-white'
                    }`}>
                      {product.badge === 'MAIS VENDIDO' ? 'Mais Vendido' : product.badge === 'NOVO' ? 'Novo' : 'Oferta'}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-black text-zinc-900 tracking-tight">
                  {product.name}
                </h2>
                <p className="text-xs text-zinc-500 mt-1">
                  Cor: <span className="text-zinc-800 font-medium">{product.color}</span> · Material: <span className="text-zinc-800 font-medium">{product.materialLabel}</span>
                </p>

                {/* Price block */}
                <div className="mt-4 p-3.5 bg-zinc-50 rounded-xl border border-zinc-100">
                  <div className="flex items-baseline gap-2">
                    {product.originalPrice && (
                      <span className="text-xs text-zinc-400 line-through tabular-nums">
                        {formatBRL(product.originalPrice)}
                      </span>
                    )}
                    <span className="text-2xl font-black text-zinc-900 tabular-nums">
                      {formatBRL(product.price)}
                    </span>
                  </div>
                  <div className="text-xs text-emerald-700 font-medium mt-0.5">
                    ou <span className="font-bold">{formatBRL(product.pixPrice)}</span> com 5% OFF no Pix
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-1">
                    em até 6x de {formatBRL(product.price / 6)} sem juros
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-600 leading-relaxed mt-4">
                  {product.description}
                </p>

                {/* Dimensions specifications */}
                <div className="mt-4 pt-4 border-t border-zinc-100">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Medidas da Armação
                  </h4>
                  <div className="grid grid-cols-4 gap-2 text-center text-xs">
                    <div className="bg-zinc-50 p-2 rounded-lg border border-zinc-100">
                      <span className="block text-[10px] text-zinc-400">Lente</span>
                      <span className="font-bold text-zinc-800 tabular-nums">{product.dimensions.lensWidth}</span>
                    </div>
                    <div className="bg-zinc-50 p-2 rounded-lg border border-zinc-100">
                      <span className="block text-[10px] text-zinc-400">Ponte</span>
                      <span className="font-bold text-zinc-800 tabular-nums">{product.dimensions.bridge}</span>
                    </div>
                    <div className="bg-zinc-50 p-2 rounded-lg border border-zinc-100">
                      <span className="block text-[10px] text-zinc-400">Haste</span>
                      <span className="font-bold text-zinc-800 tabular-nums">{product.dimensions.temple}</span>
                    </div>
                    <div className="bg-zinc-50 p-2 rounded-lg border border-zinc-100">
                      <span className="block text-[10px] text-zinc-400">Total</span>
                      <span className="font-bold text-zinc-800 tabular-nums">{product.dimensions.totalWidth}</span>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mt-4 space-y-1.5 text-xs text-zinc-600">
                  <div className="flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>Proteção UV400 completa contra radiação solar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RotateCcw className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>Primeira troca grátis em até 7 dias corridos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>Envio para todo o Brasil com código de rastreio</span>
                  </div>
                </div>
              </div>

              {/* Quantity and CTA */}
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-3">
                <div className="flex items-center border border-zinc-300 rounded-xl overflow-hidden bg-white shrink-0">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2.5 text-zinc-600 hover:bg-zinc-100 transition-colors cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-zinc-900 tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2.5 text-zinc-600 hover:bg-zinc-100 transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  disabled={added}
                  className={`flex-1 py-3 px-5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                    added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-black text-white hover:bg-zinc-800 active:scale-98'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Adicionado à sacola!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Adicionar à sacola</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
