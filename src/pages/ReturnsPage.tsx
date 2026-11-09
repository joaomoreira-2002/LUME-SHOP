import React from 'react';
import { PolicyLayout, PolicyPageId, ContactInfoBlock } from '../components/PolicyLayout';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ReturnsPageProps {
  onNavigatePage: (pageId: PolicyPageId) => void;
  onNavigateHome: () => void;
}

const TOC_ITEMS = [
  { id: 'arrependimento', label: '1. Direito de arrependimento' },
  { id: 'condicoes', label: '2. Condições do produto' },
  { id: 'como-solicitar', label: '3. Como solicitar' },
  { id: 'defeito', label: '4. Produto com defeito' },
  { id: 'reembolso', label: '5. Reembolso' },
  { id: 'contato', label: '6. Contato' },
];

export const ReturnsPage: React.FC<ReturnsPageProps> = ({
  onNavigatePage,
  onNavigateHome,
}) => {
  return (
    <PolicyLayout
      currentPageId="trocas-e-devolucoes"
      breadcrumbLabel="Trocas e devoluções"
      titlePrefix="Trocas e"
      highlightWord="devoluções."
      subtitle="Comprou e não ficou como esperava? Veja como trocar ou devolver de forma rápida e sem burocracia."
      tocItems={TOC_ITEMS}
      onNavigatePage={onNavigatePage}
      onNavigateHome={onNavigateHome}
    >
      {/* 1. Direito de arrependimento */}
      <section id="arrependimento" className="scroll-mt-32 space-y-3">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          1. Direito de arrependimento
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Você pode desistir da compra em até <strong className="text-black font-bold">7 dias corridos</strong> após o recebimento do pacote em seu endereço, conforme garante o art. 49 do Código de Defesa do Consumidor (CDC), sem precisar justificar o motivo.
        </p>
        <div className="p-4 bg-orange-50/50 border border-orange-200/60 rounded-xl text-xs text-zinc-700 flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0" />
          <span>A <strong>primeira troca é 100% gratuita</strong> — nós arcamos com todos os custos de envio da devolução.</span>
        </div>
      </section>

      {/* 2. Condições do produto */}
      <section id="condicoes" className="scroll-mt-32 space-y-3 pt-6 border-t border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          2. Condições do produto
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Para que a devolução ou troca seja aprovada com sucesso, os itens devem atender aos seguintes requisitos:
        </p>
        <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-600">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] mt-2 shrink-0" />
            <span>Produto sem qualquer sinal de uso, riscos nas lentes, manchas ou danos físicos na armação.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] mt-2 shrink-0" />
            <span>Na embalagem original completa, acompanhado do estojo protetor rígido, flanela em microfibra e etiquetas afixadas.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] mt-2 shrink-0" />
            <span><strong>Atenção para Armações de Grau:</strong> Armações que já tenham recebido lentes graduadas confeccionadas em laboratório ótico externo não poderão ser devolvidas por arrependimento, apenas em caso de defeito fabril comprovado.</span>
          </li>
        </ul>
      </section>

      {/* 3. Como solicitar */}
      <section id="como-solicitar" className="scroll-mt-32 space-y-3 pt-6 border-t border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          3. Como solicitar
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          O processo é simples e totalmente digital:
        </p>
        <ol className="space-y-3 text-xs sm:text-sm text-zinc-700">
          <li className="p-3.5 bg-zinc-50 rounded-xl border border-zinc-100 flex items-start gap-3">
            <span className="font-mono font-bold text-xs bg-black text-white px-2 py-0.5 rounded">01</span>
            <div>
              <strong>Chame nosso suporte no WhatsApp:</strong> Envie uma mensagem para <a href="https://wa.me/5571999808266" target="_blank" rel="noreferrer" className="text-[#FF6A00] font-bold hover:underline">(71) 99980-8266</a> ou escreva para <strong>contato@lume-shop.site</strong> informando o número do pedido e se deseja troca ou estorno.
            </div>
          </li>
          <li className="p-3.5 bg-zinc-50 rounded-xl border border-zinc-100 flex items-start gap-3">
            <span className="font-mono font-bold text-xs bg-black text-white px-2 py-0.5 rounded">02</span>
            <div>
              <strong>Receba o código de postagem reversa:</strong> Em até 2 dias úteis nossa equipe enviará a autorização de postagem dos Correios já pré-paga por nós.
            </div>
          </li>
          <li className="p-3.5 bg-zinc-50 rounded-xl border border-zinc-100 flex items-start gap-3">
            <span className="font-mono font-bold text-xs bg-black text-white px-2 py-0.5 rounded">03</span>
            <div>
              <strong>Poste na agência:</strong> Embale o produto na caixa original com o estojo e leve a qualquer agência dos Correios.
            </div>
          </li>
        </ol>
      </section>

      {/* 4. Produto com defeito */}
      <section id="defeito" className="scroll-mt-32 space-y-3 pt-6 border-t border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          4. Produto com defeito
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Defeitos de fabricação aparentes ou funcionais podem ser reclamados em até <strong className="text-black font-bold">90 dias</strong> após o recebimento, de acordo com o Código de Defesa do Consumidor.
        </p>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Após o recebimento e análise técnica em nosso centro de distribuição (prazo máximo de 3 dias úteis), o produto será reparado, substituído por um modelo novo sem custo ou o valor integral será devolvido, a critério do cliente.
        </p>
      </section>

      {/* 5. Reembolso */}
      <section id="reembolso" className="scroll-mt-32 space-y-3 pt-6 border-t border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          5. Reembolso
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Aprovada a devolução após a checagem das condições do produto, o estorno é processado de acordo com a forma de pagamento escolhida:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
            <div className="font-bold text-sm text-zinc-900 mb-1">Pagamentos via Pix</div>
            <p className="text-zinc-600 leading-relaxed">
              Estornado diretamente para a mesma conta bancária de origem em até <strong className="text-black">5 dias úteis</strong>.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
            <div className="font-bold text-sm text-zinc-900 mb-1">Cartão de Crédito</div>
            <p className="text-zinc-600 leading-relaxed">
              Solicitação de estorno encaminhada à administradora em até 5 dias úteis; o crédito constará em até 2 faturas subsequentes conforme o banco emissor.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Contato */}
      <section id="contato" className="scroll-mt-32">
        <ContactInfoBlock />
      </section>

      {/* Action banner */}
      <div className="pt-6 flex items-center justify-between flex-wrap gap-4 bg-zinc-50 p-6 rounded-2xl border border-zinc-200/80">
        <div>
          <h4 className="font-bold text-sm text-zinc-900">Quer escolher outro modelo agora?</h4>
          <p className="text-xs text-zinc-500">Veja nosso catálogo completo de armações e óculos de sol.</p>
        </div>
        <button
          onClick={onNavigateHome}
          className="px-5 py-2.5 bg-black hover:bg-[#FF6A00] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-2"
        >
          <span>Explorar catálogo</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </PolicyLayout>
  );
};
