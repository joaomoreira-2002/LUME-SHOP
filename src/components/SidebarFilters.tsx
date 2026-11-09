import React from 'react';
import {
  FormatType,
  MaterialType,
  PriceRangeType,
  FORMAT_OPTIONS,
  MATERIAL_OPTIONS,
  PRICE_OPTIONS,
} from '../data/products';
import { RotateCcw } from 'lucide-react';

interface SidebarFiltersProps {
  selectedFormat: FormatType | null;
  onSelectFormat: (format: FormatType | null) => void;
  selectedMaterial: MaterialType | null;
  onSelectMaterial: (material: MaterialType | null) => void;
  selectedPriceRange: PriceRangeType;
  onSelectPriceRange: (range: PriceRangeType) => void;
  onClearAll: () => void;
  hasActiveFilters: boolean;
}

export const SidebarFilters: React.FC<SidebarFiltersProps> = ({
  selectedFormat,
  onSelectFormat,
  selectedMaterial,
  onSelectMaterial,
  selectedPriceRange,
  onSelectPriceRange,
  onClearAll,
  hasActiveFilters,
}) => {
  return (
    <aside className="w-full lg:w-[220px] shrink-0 space-y-7">
      {/* Reset button if any filter is active */}
      {hasActiveFilters && (
        <button
          onClick={onClearAll}
          className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-black transition-colors font-medium mb-3 cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Limpar filtros</span>
        </button>
      )}

      {/* Formato */}
      <div>
        <h3 className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase mb-3">
          FORMATO
        </h3>
        <div className="flex flex-wrap gap-2">
          {FORMAT_OPTIONS.map((item) => {
            const isSelected = selectedFormat === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectFormat(isSelected ? null : item.id)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-medium ${
                  isSelected
                    ? 'bg-black text-white border-black shadow-xs'
                    : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase mb-3">
          MATERIAL
        </h3>
        <div className="flex flex-wrap gap-2">
          {MATERIAL_OPTIONS.map((item) => {
            const isSelected = selectedMaterial === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectMaterial(isSelected ? null : item.id)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-medium ${
                  isSelected
                    ? 'bg-black text-white border-black shadow-xs'
                    : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Preço */}
      <div>
        <h3 className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase mb-3">
          PREÇO
        </h3>
        <div className="flex flex-wrap gap-2">
          {PRICE_OPTIONS.map((item) => {
            const isSelected = selectedPriceRange === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectPriceRange(isSelected ? 'all' : item.id)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-medium ${
                  isSelected
                    ? 'bg-black text-white border-black shadow-xs'
                    : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
