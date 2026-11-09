import React from 'react';
import { CategoryType } from '../data/products';
import { ShieldCheck, MessageCircle } from 'lucide-react';

import { PolicyPageId } from './PolicyLayout';

interface FooterProps {
  onSelectCategory: (category: CategoryType) => void;
  onNavigatePage: (pageId: PolicyPageId) => void;
  onOpenModal?: (modalType: 'faq' | 'contato' | 'sobre' | 'trocas' | 'envio' | 'privacidade' | 'termos') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onNavigatePage,
  onOpenModal,
}) => {
  return (
    <footer className="w-full bg-[#0a0a0a] text-zinc-300 pt-16 pb-8 relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-14 border-b border-zinc-800/80">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center text-white">
                <svg
                  className="w-7 h-5"
                  viewBox="0 0 40 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="10" cy="12" r="7" />
                  <circle cx="30" cy="12" r="7" />
                  <path d="M17 10 C 20 8, 20 8, 23 10" />
                  <path d="M3 10 L 0 9" />
                  <path d="M37 10 L 40 9" />
                </svg>
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                LUME
              </span>
              <span className="bg-[#FF6A00] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-sm tracking-wider uppercase shadow-2xs">
                SHOP
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Óculos de sol, armações de grau, luz azul e esportivos com proteção UV400. Entrega para todo o Brasil.
            </p>
          </div>

          {/* Col 1: LOJA */}
          <div>
            <h4 className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase mb-4">
              LOJA
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <button
                  onClick={() => onSelectCategory('todos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Todos os modelos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('sol')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sol
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('grau')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Grau
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('luz-azul')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Luz azul
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('esportivo')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Esportivo
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: AJUDA */}
          <div>
            <h4 className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase mb-4">
              AJUDA
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <button
                  onClick={() => onNavigatePage('ajuda')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Perguntas frequentes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('contato')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contato
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('sobre')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sobre a Lume
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: POLÍTICAS */}
          <div>
            <h4 className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase mb-4">
              POLÍTICAS
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <button
                  onClick={() => onNavigatePage('trocas-e-devolucoes')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Trocas e devoluções
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('envio-e-entrega')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Envio e entrega
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('privacidade')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Política de privacidade
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('termos-de-uso')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Termos de uso
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: ATENDIMENTO */}
          <div>
            <h4 className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase mb-4">
              ATENDIMENTO
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href="https://wa.me/5571999808266"
                target="_blank"
                rel="noreferrer"
                className="text-[#FF6A00] font-bold block hover:underline"
              >
                WhatsApp (71) 99980-8266
              </a>
              <div className="text-zinc-400">contato@lume-shop.site</div>
              <div className="text-zinc-400">(24) 9872-3223</div>
              <div className="text-[11px] text-zinc-500 pt-1">
                Segunda a sexta, das 9h às 18h
              </div>
            </div>
          </div>
        </div>

        {/* Payment and Security Strip */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400 border-b border-zinc-800/60">
          {/* Payment Methods */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] tracking-widest text-zinc-500 uppercase mr-1">
              PAGAMENTO
            </span>
            {['Pix', 'Visa', 'Mastercard', 'Elo', 'Amex', 'Hipercard'].map((method) => (
              <span
                key={method}
                className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-medium text-zinc-300"
              >
                {method}
              </span>
            ))}
          </div>

          {/* SSL Certificate Badge */}
          <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
            <span className="font-semibold tracking-wider">SITE SEGURO · HTTPS</span>
          </div>
        </div>

        {/* Legal & CNPJ Text */}
        <div className="pt-6 text-[11px] text-zinc-500 space-y-1">
          <div className="font-semibold text-zinc-400">
            MAC MARKETING DIGITAL - CNPJ 50.744.315/0001-23
          </div>
          <div>
            AV EDSON GALLANA, JARDIM CANAA – UBERLANDIA/MG – CEP 38.412-760
          </div>
          <div className="pt-2 text-zinc-600">
            © 2026 Lume Shop. Todos os direitos reservados.
          </div>
        </div>
      </div>

      {/* Giant LUME Watermark in bottom background */}
      <div
        aria-hidden="true"
        className="w-full text-center select-none pointer-events-none mt-8 text-zinc-900/35 font-black text-[120px] sm:text-[180px] md:text-[230px] leading-none tracking-tighter"
      >
        LUME
      </div>

      {/* Floating WhatsApp Quick Contact Button */}
      <a
        href="https://wa.me/5571999808266"
        target="_blank"
        rel="noreferrer"
        aria-label="Atendimento via WhatsApp"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pl-0 group-hover:pl-2">
          Fale Conosco
        </span>
      </a>
    </footer>
  );
};
