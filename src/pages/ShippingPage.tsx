import React from 'react';
import { PolicyLayout, PolicyPageId, ContactInfoBlock } from '../components/PolicyLayout';
import { Truck, ShieldCheck, Clock, ArrowRight } from 'lucide-react';

interface ShippingPageProps {
  onNavigatePage: (pageId: PolicyPageId) => void;
  onNavigateHome: () => void;
}

const TOC_ITEMS = [
  { id: 'area-entrega', label: '1. Área de entrega' },
  { id: 'prazos-valores', label: '2. Prazos e valores' },
  { id: 'rastreamento', label: '3. Rastreamento' },
  { id: 'destinatario-ausente', label: '4. Destinatário ausente' },
  { id: 'embalagem-violada', label: '5. Embalagem violada' },
  { id: 'contato', label: '6. Contato' },
];

export const ShippingPage: React.FC<ShippingPageProps> = ({
  onNavigatePage,
  onNavigateHome,
}) => {
  return (
    <PolicyLayout
      currentPageId="envio-e-entrega"
      breadcrumbLabel="Envio e entrega"
      titlePrefix="Envio e"
      highlightWord="entrega."
      subtitle="Prazos, valores e rastreamento dos pedidos para todo o Brasil."
      tocItems={TOC_ITEMS}
      onNavigatePage={onNavigatePage}
      onNavigateHome={onNavigateHome}
    >
      {/* 1. Área de entrega */}
      <section id="area-entrega" className="scroll-mt-32 space-y-3">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          1. Área de entrega
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Entregamos para todos os estados e municípios do Brasil, através de contrato direto com os <strong className="text-black">Correios</strong> (Sedex e PAC) e transportadoras privadas parceiras de alta pontualidade (Jadlog, Total Express e Azul Cargo).
        </p>
      </section>

      {/* 2. Prazos e valores */}
      <section id="prazos-valores" className="scroll-mt-32 space-y-4 pt-6 border-t border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          2. Prazos e valores
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Oferecemos duas modalidades de frete selecionáveis no momento da compra:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-zinc-900 text-base">Econômica (PAC)</span>
              <span className="font-mono font-bold text-[#FF6A00] text-sm">R$ 19,90</span>
            </div>
            <p className="text-zinc-600 text-xs">
              Prazo estimado de <strong className="text-black">5 a 9 dias úteis</strong> após a postagem.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-emerald-700">
              ✓ Grátis para pedidos acima de R$ 199,00
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-zinc-900 text-base">Expressa (Sedex)</span>
              <span className="font-mono font-bold text-black text-sm">R$ 34,90</span>
            </div>
            <p className="text-zinc-600 text-xs">
              Prazo estimado de <strong className="text-black">2 a 4 dias úteis</strong> após a postagem.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-zinc-500">
              Ideal para quem tem urgência
            </div>
          </div>
        </div>

        <div className="p-4 bg-orange-50/60 border border-orange-200/80 rounded-xl text-xs text-zinc-700 flex items-start gap-2.5">
          <Clock className="w-4 h-4 text-[#FF6A00] mt-0.5 shrink-0" />
          <div>
            <strong>Prazo de despacho:</strong> O pedido é embalado com proteção reforçada e postado em até <strong className="text-black">2 dias úteis</strong> após a confirmação do pagamento.
          </div>
        </div>
      </section>

      {/* 3. Rastreamento */}
      <section id="rastreamento" className="scroll-mt-32 space-y-3 pt-6 border-t border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          3. Rastreamento
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Assim que o pacote é despachado, você recebe instantaneamente por e-mail e no WhatsApp o código de rastreamento com link direto para acompanhamento em tempo real, desde o centro de triagem até a entrega na sua porta.
        </p>
      </section>

      {/* 4. Destinatário ausente */}
      <section id="destinatario-ausente" className="scroll-mt-32 space-y-3 pt-6 border-t border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          4. Destinatário ausente
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          São realizadas até 3 tentativas de entrega no endereço indicado. Caso não haja ninguém para receber, o pacote fica disponível para retirada por 7 dias corridos na agência dos Correios indicada no rastreamento.
        </p>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Se o produto retornar ao nosso remetente após o vencimento do prazo de retirada, um novo envio poderá ter cobrança de frete.
        </p>
      </section>

      {/* 5. Embalagem violada */}
      <section id="embalagem-violada" className="scroll-mt-32 space-y-3 pt-6 border-t border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          5. Embalagem violada
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Todos os nossos produtos são enviados em caixa rígida selada com fita de segurança personalizada. Se a embalagem chegar com sinais de violação, rasgo ou amassamento severo, <strong>recuse o recebimento no ato da entrega</strong> informando o motivo no verso do comprovante.
        </p>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Em seguida, entre em contato imediatamente com nossa equipe pelo WhatsApp para que possamos despachar um novo produto sem qualquer custo adicional para você.
        </p>
      </section>

      {/* 6. Contato */}
      <section id="contato" className="scroll-mt-32">
        <ContactInfoBlock />
      </section>

      {/* Action banner */}
      <div className="pt-6 flex items-center justify-between flex-wrap gap-4 bg-zinc-50 p-6 rounded-2xl border border-zinc-200/80">
        <div>
          <h4 className="font-bold text-sm text-zinc-900">Aproveite frete grátis em pedidos acima de R$ 199</h4>
          <p className="text-xs text-zinc-500">Adicione seus modelos favoritos à sacola e economize.</p>
        </div>
        <button
          onClick={onNavigateHome}
          className="px-5 py-2.5 bg-black hover:bg-[#FF6A00] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-2"
        >
          <span>Ir para a loja</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </PolicyLayout>
  );
};
