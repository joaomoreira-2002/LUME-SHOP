import React from 'react';
import { PolicyLayout, PolicyPageId, ContactInfoBlock } from '../components/PolicyLayout';

interface TermsPageProps {
  onNavigatePage: (pageId: PolicyPageId) => void;
  onNavigateHome: () => void;
}

const TOC_ITEMS = [
  { id: 'quem-somos', label: '1. Quem somos' },
  { id: 'produtos-precos', label: '2. Produtos e preços' },
  { id: 'pedidos-pagamento', label: '3. Pedidos e pagamento' },
  { id: 'entrega', label: '4. Entrega' },
  { id: 'trocas-devolucoes', label: '5. Trocas e devoluções' },
  { id: 'propriedade-intelectual', label: '6. Propriedade intelectual' },
  { id: 'lei-foro', label: '7. Lei e foro' },
  { id: 'contato', label: '8. Contato' },
];

export const TermsPage: React.FC<TermsPageProps> = ({
  onNavigatePage,
  onNavigateHome,
}) => {
  return (
    <PolicyLayout
      currentPageId="termos-de-uso"
      breadcrumbLabel="Termos de uso"
      titlePrefix="Termos"
      highlightWord="de uso."
      subtitle="Condições gerais para compras e navegação no site da Lume Shop."
      tocItems={TOC_ITEMS}
      onNavigatePage={onNavigatePage}
      onNavigateHome={onNavigateHome}
    >
      {/* 1. Quem somos */}
      <section id="quem-somos" className="scroll-mt-32 space-y-3">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          1. Quem somos
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          A plataforma de comércio eletrônico <strong>Lume Shop</strong> é operada por <strong>MAC MARKETING DIGITAL</strong>, inscrita no CNPJ sob o nº <strong>50.744.315/0001-23</strong>, com sede localizada na <strong>AV EDSON GALLANA, CEP 38.412-760, JARDIM CANAA, UBERLANDIA - MG</strong>.
        </p>
      </section>

      {/* 2. Produtos e preços */}
      <section id="produtos-precos" className="scroll-mt-32 space-y-3 pt-6 border-t border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          2. Produtos e preços
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          As fotos dos produtos apresentadas no site foram produzidas com alta fidelidade de cor e proporção. No entanto, pequenas variações de tonalidade podem ocorrer devido à calibração de cor de diferentes monitores e telas de smartphones.
        </p>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Os preços, promoções e condições de pagamento estão sujeitos a alterações sem aviso prévio, prevalecendo os valores exibidos na sacola no momento da finalização do pedido.
        </p>
        <div className="p-4 bg-zinc-50 border border-zinc-200/80 rounded-xl text-xs text-zinc-700">
          <strong>Aviso sobre Lentes de Grau:</strong> As armações da categoria Grau são comercializadas com lentes demonstrativas em acrílico sem graduação. A confecção e montagem das lentes com seu receituário oftalmológico devem ser realizadas em ótica especializada de sua preferência.
        </div>
      </section>

      {/* 3. Pedidos e pagamento */}
      <section id="pedidos-pagamento" className="scroll-mt-32 space-y-3 pt-6 border-t border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          3. Pedidos e pagamento
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          O pedido é considerado confirmado apenas após a autorização do pagamento pela instituição financeira, via Pix (com desconto de 5%) ou cartão de crédito em até 6 parcelas sem juros.
        </p>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Por medidas de segurança contra fraudes no comércio eletrônico, pedidos com divergência de dados cadastrais ou suspeita de uso indevido de cartão poderão ser submetidos à análise antifraude ou cancelados preventivamente, com estorno integral do valor pago.
        </p>
      </section>

      {/* 4. Entrega */}
      <section id="entrega" className="scroll-mt-32 space-y-3 pt-6 border-t border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          4. Entrega
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Prazos de postagem, opções de frete econômico e expresso, valores e regras de rastreamento encontram-se detalhados integralmente em nossa página de{' '}
          <button
            onClick={() => onNavigatePage('envio-e-entrega')}
            className="text-[#FF6A00] font-bold hover:underline cursor-pointer"
          >
            envio e entrega
          </button>.
        </p>
      </section>

      {/* 5. Trocas e devoluções */}
      <section id="trocas-devolucoes" className="scroll-mt-32 space-y-3 pt-6 border-t border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          5. Trocas e devoluções
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Garantimos o direito de arrependimento em até 7 dias corridos e 90 dias contra defeitos de fabricação, com primeira troca grátis, de acordo com as condições estipuladas na nossa{' '}
          <button
            onClick={() => onNavigatePage('trocas-e-devolucoes')}
            className="text-[#FF6A00] font-bold hover:underline cursor-pointer"
          >
            política de trocas e devoluções
          </button>.
        </p>
      </section>

      {/* 6. Propriedade intelectual */}
      <section id="propriedade-intelectual" className="scroll-mt-32 space-y-3 pt-6 border-t border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          6. Propriedade intelectual
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Todo o conteúdo visual, logotipo da Lume Shop, fotografias de produtos, textos descritivos, layouts, código-fonte e elementos gráficos deste website são de propriedade exclusiva de MAC MARKETING DIGITAL ou devidamente licenciados. É expressamente proibida a cópia, reprodução ou comercialização sem autorização prévia por escrito.
        </p>
      </section>

      {/* 7. Lei e foro */}
      <section id="lei-foro" className="scroll-mt-32 space-y-3 pt-6 border-t border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          7. Lei e foro
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Estes Termos de Uso são regidos e interpretados em conformidade com as leis da República Federativa do Brasil, em especial a Lei Federal nº 8.078/1990 (Código de Defesa do Consumidor) e o Marco Civil da Internet. Fica eleito o foro da comarca de domicílio do consumidor para dirimir quaisquer dúvidas decorrentes deste contrato.
        </p>
      </section>

      {/* 8. Contato */}
      <section id="contato" className="scroll-mt-32">
        <ContactInfoBlock />
      </section>
    </PolicyLayout>
  );
};
