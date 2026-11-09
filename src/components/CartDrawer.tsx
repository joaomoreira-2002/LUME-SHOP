import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { CartItem } from '../data/products';
import { buildCheckoutUrl } from '../config/gateway';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout?: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 199.0;

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const pixDiscount = subtotal * 0.05;
  const pixTotal = subtotal - pixDiscount;
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progressPercent = Math.min(
    100,
    (subtotal / FREE_SHIPPING_THRESHOLD) * 100
  );

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
          {/* Drawer Header */}
          <div className="p-5 border-b border-zinc-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-zinc-900" />
              <h2 className="text-base font-bold text-zinc-900 tracking-tight">
                Sua Sacola
              </h2>
              <span className="bg-zinc-100 text-zinc-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                {items.reduce((acc, i) => acc + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-black rounded-lg hover:bg-zinc-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="px-5 py-3.5 bg-zinc-50 border-b border-zinc-100">
            {remainingForFreeShipping > 0 ? (
              <p className="text-xs text-zinc-600 mb-2">
                Faltam apenas <span className="font-bold text-black">{formatBRL(remainingForFreeShipping)}</span> para você ganhar <span className="text-emerald-700 font-semibold">Frete Grátis</span>!
              </p>
            ) : (
              <p className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5 mb-2">
                <span>🎉</span> Parabéns! Você ganhou <span className="underline">Frete Grátis</span>.
              </p>
            )}
            <div className="w-full bg-zinc-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#FF6A00] h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-zinc-100">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center mb-4 text-zinc-400">
                  <ShoppingBag className="w-8 h-8 stroke-1" />
                </div>
                <h3 className="text-sm font-bold text-zinc-900 mb-1">
                  Sua sacola está vazia
                </h3>
                <p className="text-xs text-zinc-500 max-w-xs mb-6">
                  Explore nosso catálogo e encontre o óculos perfeito para seu estilo.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-black text-white rounded-xl text-xs font-semibold hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  Continuar comprando
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.product.id} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                  {/* Item Image */}
                  <div className="w-20 h-20 bg-zinc-100 rounded-xl overflow-hidden shrink-0 border border-zinc-100">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-zinc-900 truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-zinc-400 hover:text-red-500 transition-colors p-0.5 cursor-pointer"
                          title="Remover produto"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-zinc-500">
                        {item.product.code} · {item.product.formatLabel}
                      </p>
                      <p className="text-[11px] text-zinc-400">
                        {item.product.color}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-1">
                      {/* Quantity buttons */}
                      <div className="flex items-center border border-zinc-200 rounded-lg overflow-hidden bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="p-1 text-zinc-600 hover:bg-zinc-100 transition-colors cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-7 text-center text-xs font-semibold text-zinc-900 tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="p-1 text-zinc-600 hover:bg-zinc-100 transition-colors cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="text-xs font-semibold text-zinc-900 tabular-nums">
                          {formatBRL(item.product.price * item.quantity)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer Summary */}
          {items.length > 0 && (
            <div className="p-5 border-t border-zinc-100 bg-zinc-50 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-zinc-600">
                  <span>Subtotal</span>
                  <span className="tabular-nums font-medium text-zinc-900">
                    {formatBRL(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-emerald-700">
                  <span>Desconto Pix (5% OFF)</span>
                  <span className="tabular-nums font-semibold">
                    -{formatBRL(pixDiscount)}
                  </span>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>Frete</span>
                  <span className="tabular-nums font-medium text-zinc-900">
                    {remainingForFreeShipping === 0 ? 'Grátis' : 'Calculado no checkout'}
                  </span>
                </div>
                <div className="pt-2 border-t border-zinc-200 flex justify-between items-baseline">
                  <div>
                    <span className="text-sm font-bold text-zinc-900">Total no Pix:</span>
                    <span className="block text-[11px] text-zinc-500">ou {formatBRL(subtotal)} em até 6x</span>
                  </div>
                  <span className="text-lg font-black text-zinc-950 tabular-nums">
                    {formatBRL(pixTotal)}
                  </span>
                </div>
              </div>

              {/* Checkout CTA -> Redirecionamento Direto para Gateway Externo */}
              <a
                href={buildCheckoutUrl(
                  items.map((i) => ({
                    id: i.product.id,
                    name: i.product.name,
                    code: i.product.code,
                    quantity: i.quantity,
                    price: i.product.price,
                  })),
                  pixTotal,
                  subtotal
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black hover:bg-[#FF6A00] text-white transition-all font-bold text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-98"
              >
                <span>Finalizar Compra</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Compra Segura · Troca Grátis em 7 dias</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
