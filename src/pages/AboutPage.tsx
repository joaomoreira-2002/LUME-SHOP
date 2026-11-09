import React from 'react';
import { ArrowLeft, ChevronRight, Shield, Ruler, RotateCcw, ArrowRight, MessageCircle } from 'lucide-react';
import { PolicyPageId } from '../components/PolicyLayout';

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigatePage: (pageId: PolicyPageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onNavigatePage,
}) => {
  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen text-zinc-900 pb-20">
      {/* Top Breadcrumb Navigation */}
      <div className="w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-xs sticky top-[65px] z-30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between text-xs text-zinc-500">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5">
            <button
              onClick={onNavigateHome}
              className="hover:text-black font-medium transition-colors cursor-pointer"
            >
              Início
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
            <span className="font-semibold text-zinc-900">Sobre</span>
          </nav>

          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1 text-xs font-semibold text-zinc-700 hover:text-[#FF6A00] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar à loja</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1100px] mx-auto px-4 sm:px-8 pt-12 sm:pt-16">
        {/* Sub-label */}
        <div className="inline-block bg-zinc-100 text-zinc-700 font-mono text-[11px] font-bold px-2.5 py-1 rounded tracking-widest uppercase mb-4">
          LUME SHOP
        </div>

        {/* Big Impact Headline matching Prime Shop design */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-black tracking-tight leading-[1.05] max-w-3xl mb-6">
          Óculos bons<br />
          não precisam<br />
          ser{' '}
          <span className="inline-block bg-[#FF6A00] text-white px-3 sm:px-4 py-0.5 rounded-sm shadow-xs">
            caros.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-zinc-600 leading-relaxed max-w-2xl font-normal mb-12 sm:mb-16">
          A Lume Shop é uma loja online especializada em óculos de sol, armações de grau, lentes com filtro de luz azul e modelos esportivos. Design contemporâneo, acabamento refinado e proteção de verdade com preço justo, entregues com carinho em todo o Brasil.
        </p>

        {/* 3 Pillars / Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 01 */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-zinc-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-zinc-400 mb-6">01</div>
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6A00] flex items-center justify-center mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-black tracking-tight mb-2">
                Proteção primeiro
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Todas as nossas lentes de sol contam com proteção UV400 completa contra radiação ultravioleta UVA/UVB. Sem exceção, em qualquer modelo da loja.
              </p>
            </div>
          </div>

          {/* Card 02 */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-zinc-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-zinc-400 mb-6">02</div>
              <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center mb-4">
                <Ruler className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-black tracking-tight mb-2">
                Medidas reais
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Cada modelo da Lume Shop exibe largura de lente, ponte nasal e comprimento da haste em milímetros exatos, para você escolher com precisão o caimento ideal.
              </p>
            </div>
          </div>

          {/* Card 03 */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-zinc-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-zinc-400 mb-6">03</div>
              <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center mb-4">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-black tracking-tight mb-2">
                Troca sem drama
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Experimentou e quer outro modelo? Você tem 7 dias corridos após o recebimento para solicitar, e a primeira troca é inteiramente por nossa conta.
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Legal Card / Table */}
        <div className="bg-white rounded-2xl border border-zinc-200/80 shadow-xs overflow-hidden mb-16">
          <div className="p-6 sm:p-8 border-b border-zinc-100 bg-zinc-50/50">
            <h3 className="text-base sm:text-lg font-black text-black tracking-tight">
              Dados cadastrais e informações da empresa
            </h3>
            <p className="text-xs text-zinc-500 mt-1">
              Transparência total para você comprar com tranquilidade e nota fiscal.
            </p>
          </div>

          <div className="divide-y divide-zinc-100 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:p-5">
              <span className="font-bold text-zinc-400 uppercase tracking-wider text-[11px]">
                Razão Social & CNPJ
              </span>
              <span className="sm:col-span-2 text-zinc-800 font-semibold mt-1 sm:mt-0">
                MAC MARKETING DIGITAL — CNPJ 50.744.315/0001-23
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:p-5">
              <span className="font-bold text-zinc-400 uppercase tracking-wider text-[11px]">
                Endereço
              </span>
              <span className="sm:col-span-2 text-zinc-700 mt-1 sm:mt-0">
                AV EDSON GALLANA, 38.412-760 JARDIM CANAA, UBERLANDIA - MG
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:p-5">
              <span className="font-bold text-zinc-400 uppercase tracking-wider text-[11px]">
                WhatsApp Oficial
              </span>
              <span className="sm:col-span-2 text-zinc-800 mt-1 sm:mt-0">
                <a
                  href="https://wa.me/5571999808266"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#FF6A00] font-bold hover:underline inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>(71) 99980-8266</span>
                </a>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:p-5">
              <span className="font-bold text-zinc-400 uppercase tracking-wider text-[11px]">
                E-mail
              </span>
              <span className="sm:col-span-2 text-zinc-700 mt-1 sm:mt-0 font-medium">
                contato@lume-shop.site
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:p-5">
              <span className="font-bold text-zinc-400 uppercase tracking-wider text-[11px]">
                Telefones
              </span>
              <span className="sm:col-span-2 text-zinc-700 mt-1 sm:mt-0">
                (24) 9872-3223 / (71) 99980-8266
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:p-5">
              <span className="font-bold text-zinc-400 uppercase tracking-wider text-[11px]">
                Atendimento
              </span>
              <span className="sm:col-span-2 text-zinc-700 mt-1 sm:mt-0">
                Segunda a sexta-feira, das 9h às 18h
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-zinc-950 via-black to-zinc-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
              Conheça nossa coleção completa
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Explore 40 armações selecionadas entre modelos de sol, grau, luz azul e esportivos com frete grátis e 5% de desconto no Pix.
            </p>
          </div>
          <button
            onClick={onNavigateHome}
            className="px-8 py-3.5 bg-[#FF6A00] hover:bg-[#e05d00] text-white font-bold text-sm rounded-xl transition-all shadow-lg active:scale-95 cursor-pointer flex items-center gap-2 shrink-0"
          >
            <span>Ver todos os modelos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
};
