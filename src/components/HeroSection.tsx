import React from 'react';
import { ChevronRight, Sparkles, Sun, Eye, Monitor, Zap, Shield, RotateCcw, Truck } from 'lucide-react';
import { CATEGORIES, CategoryType } from '../data/products';

interface HeroSectionProps {
  activeCategory: CategoryType;
  onSelectCategory: (category: CategoryType) => void;
  totalModels: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const getCategoryIcon = (id: CategoryType) => {
    switch (id) {
      case 'todos':
        return <Sparkles className="w-3.5 h-3.5" />;
      case 'sol':
        return <Sun className="w-3.5 h-3.5" />;
      case 'grau':
        return <Eye className="w-3.5 h-3.5" />;
      case 'luz-azul':
        return <Monitor className="w-3.5 h-3.5" />;
      case 'esportivo':
        return <Zap className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="w-full pt-6 pb-6 border-b border-zinc-100">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-zinc-400 mb-5">
        <span className="hover:text-zinc-700 cursor-pointer transition-colors" onClick={() => onSelectCategory('todos')}>
          Início
        </span>
        <ChevronRight className="w-3 h-3 text-zinc-300" />
        <span className="hover:text-zinc-700 cursor-pointer transition-colors" onClick={() => onSelectCategory('todos')}>
          Catálogo
        </span>
        {activeCategory !== 'todos' && (
          <>
            <ChevronRight className="w-3 h-3 text-zinc-300" />
            <span className="text-[#FF6A00] font-semibold capitalize">
              {activeCategory === 'luz-azul' ? 'Luz Azul' : activeCategory}
            </span>
          </>
        )}
      </nav>

      {/* Editorial Headline & Value Proposition */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-7">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#FF6A00] text-[11px] font-bold tracking-wider uppercase mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
            <span>Coleção Autoral 2026 · Proteção UV400</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-[1.1] mb-3">
            O design que redefine o seu <span className="text-[#FF6A00] underline decoration-[#FF6A00]/30 underline-offset-8">olhar.</span>
          </h1>

          <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed font-normal">
            Filtre por linha, formato ou material nobre. Todos os modelos contam com proteção solar UV400 comprovada, acabamento premium e troca grátis em até 7 dias corridos.
          </p>
        </div>

        {/* Quick Trust Badges Strip */}
        <div className="flex flex-wrap lg:flex-col gap-2.5 text-xs text-zinc-600 bg-zinc-50 p-3.5 rounded-2xl border border-zinc-100 shrink-0">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#FF6A00]" />
            <span className="font-medium text-zinc-800">100% Proteção UV400 Testada</span>
          </div>
          <div className="flex items-center gap-2">
            <RotateCcw className="w-3.5 h-3.5 text-[#FF6A00]" />
            <span className="font-medium text-zinc-800">Primeira Troca Grátis em 7 Dias</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-3.5 h-3.5 text-[#FF6A00]" />
            <span className="font-medium text-zinc-800">Frete Grátis acima de R$ 199</span>
          </div>
        </div>
      </div>

      {/* Segmented Category Pill Showcase */}
      <div className="flex flex-wrap items-center gap-2 pt-2">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer shadow-2xs ${
                isActive
                  ? 'bg-black text-white ring-2 ring-black shadow-sm'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200/80 hover:text-black'
              }`}
            >
              <span className={isActive ? 'text-[#FF6A00]' : 'text-zinc-500'}>
                {getCategoryIcon(cat.id)}
              </span>
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold tabular-nums ${
                  isActive ? 'bg-[#FF6A00] text-white' : 'bg-zinc-200 text-zinc-600'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
