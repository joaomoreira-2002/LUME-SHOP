import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronRight, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

export type PolicyPageId =
  | 'trocas-e-devolucoes'
  | 'envio-e-entrega'
  | 'privacidade'
  | 'termos-de-uso'
  | 'ajuda'
  | 'sobre'
  | 'contato';

export interface TocItem {
  id: string;
  label: string;
}

interface PolicyLayoutProps {
  currentPageId: PolicyPageId;
  breadcrumbLabel: string;
  dateUpdated?: string;
  titlePrefix: string;
  highlightWord: string;
  subtitle: string;
  tocItems: TocItem[];
  onNavigatePage: (pageId: PolicyPageId) => void;
  onNavigateHome: () => void;
  children: React.ReactNode;
}

const OTHER_POLICIES: { id: PolicyPageId; label: string }[] = [
  { id: 'trocas-e-devolucoes', label: 'Trocas e devoluções' },
  { id: 'envio-e-entrega', label: 'Envio e entrega' },
  { id: 'privacidade', label: 'Política de privacidade' },
  { id: 'termos-de-uso', label: 'Termos de uso' },
  { id: 'ajuda', label: 'Perguntas frequentes' },
  { id: 'contato', label: 'Contato & Suporte' },
  { id: 'sobre', label: 'Sobre a Lume Shop' },
];

export const PolicyLayout: React.FC<PolicyLayoutProps> = ({
  currentPageId,
  breadcrumbLabel,
  dateUpdated = '03/11/2026',
  titlePrefix,
  highlightWord,
  subtitle,
  tocItems,
  onNavigatePage,
  onNavigateHome,
  children,
}) => {
  const [activeSectionId, setActiveSectionId] = useState<string>(tocItems[0]?.id || '');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of tocItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSectionId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSectionId(id);
    }
  };

  const otherPoliciesFiltered = OTHER_POLICIES.filter((p) => p.id !== currentPageId);

  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen text-zinc-900 pb-20">
      {/* Top Breadcrumb & Action Header */}
      <div className="w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-xs sticky top-[65px] z-30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between text-xs text-zinc-500">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={onNavigateHome}
              className="hover:text-black font-medium transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Início</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
            <span className="font-semibold text-zinc-900">{breadcrumbLabel}</span>
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

      {/* Main Container */}
      <main className="max-w-[1280px] mx-auto px-4 sm:px-8 pt-10 sm:pt-14">
        {/* Title Header with Clean Orange Highlight */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          {dateUpdated && (
            <div className="text-[11px] font-mono font-bold tracking-widest text-zinc-400 uppercase mb-3">
              ATUALIZADO EM {dateUpdated}
            </div>
          )}

          <h1 className="text-4xl sm:text-6xl font-black text-black tracking-tight leading-[1.08] mb-4">
            <span>{titlePrefix} </span>
            <span className="relative inline-block bg-[#FF6A00] text-white px-3 py-0.5 rounded-sm shadow-xs">
              {highlightWord}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl font-normal">
            {subtitle}
          </p>
        </div>

        {/* 2-Column Grid (Sticky Sidebar + Content) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Table of Contents & Navigation */}
          <aside className="lg:col-span-4 lg:sticky lg:top-[130px] space-y-8 order-2 lg:order-1">
            {/* Table of Contents */}
            {tocItems.length > 0 && (
              <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs">
                <h3 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-3.5">
                  Neste documento
                </h3>
                <nav className="space-y-1.5 text-xs">
                  {tocItems.map((item) => {
                    const isActive = activeSectionId === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full text-left py-1.5 px-2.5 rounded-lg transition-all cursor-pointer ${
                          isActive
                            ? 'bg-zinc-100 text-black font-bold pl-3 border-l-2 border-[#FF6A00]'
                            : 'text-zinc-600 hover:text-black hover:bg-zinc-50 font-medium'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </nav>
              </div>
            )}

            {/* Other Policies */}
            <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs">
              <h3 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-3.5">
                Outras políticas e ajuda
              </h3>
              <nav className="space-y-2 text-xs">
                {otherPoliciesFiltered.map((pol) => (
                  <button
                    key={pol.id}
                    onClick={() => onNavigatePage(pol.id)}
                    className="flex items-center justify-between w-full text-left py-1 text-zinc-600 hover:text-[#FF6A00] font-medium transition-colors cursor-pointer group"
                  >
                    <span>{pol.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-300 group-hover:text-[#FF6A00] transition-transform group-hover:translate-x-0.5" />
                  </button>
                ))}
              </nav>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-zinc-900 to-black text-white p-6 rounded-2xl shadow-md">
              <h4 className="font-bold text-sm mb-1">Dúvidas com seu pedido?</h4>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                Nossa equipe responde em minutos no horário comercial.
              </p>
              <a
                href="https://wa.me/5571999808266"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#FF6A00] hover:bg-[#e05d00] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp (71) 99980-8266</span>
              </a>
            </div>
          </aside>

          {/* Right Column: Detailed Document Content */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl border border-zinc-200/80 shadow-xs order-1 lg:order-2 space-y-10">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export const ContactInfoBlock: React.FC = () => {
  return (
    <div className="pt-8 border-t border-zinc-100">
      <h3 className="text-base sm:text-lg font-bold text-zinc-900 mb-4">
        Canais oficiais de atendimento
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        <a
          href="https://wa.me/5571999808266"
          target="_blank"
          rel="noreferrer"
          className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70 hover:border-[#FF6A00] hover:bg-orange-50/20 transition-all flex items-start gap-3 group"
        >
          <div className="p-2 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00]">
            <MessageCircle className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-zinc-900 group-hover:text-[#FF6A00] transition-colors">
              WhatsApp Oficial
            </div>
            <div className="text-zinc-600 mt-0.5">(71) 99980-8266</div>
            <div className="text-[10px] text-zinc-400 mt-0.5">Atendimento rápido</div>
          </div>
        </a>

        <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-zinc-200 text-zinc-700">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-zinc-900">E-mail</div>
            <div className="text-zinc-600 mt-0.5">contato@lume-shop.site</div>
            <div className="text-[10px] text-zinc-400 mt-0.5">Resposta em até 24h</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-zinc-200 text-zinc-700">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-zinc-900">Horário</div>
            <div className="text-zinc-600 mt-0.5">Segunda a sexta, das 9h às 18h</div>
            <div className="text-[10px] text-zinc-400 mt-0.5">Exceto feriados</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-zinc-200 text-zinc-700">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-zinc-900">Razão Social & Sede</div>
            <div className="text-zinc-600 mt-0.5 leading-snug">
              MAC MARKETING DIGITAL<br />
              CNPJ 50.744.315/0001-23<br />
              AV EDSON GALLANA, 38.412-760 JARDIM CANAA UBERLANDIA MG
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
