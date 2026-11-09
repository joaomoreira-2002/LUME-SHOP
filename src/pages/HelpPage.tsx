import React, { useState } from 'react';
import { PolicyLayout, PolicyPageId, ContactInfoBlock } from '../components/PolicyLayout';
import { ChevronDown, Search, HelpCircle, MessageCircle } from 'lucide-react';

interface HelpPageProps {
  onNavigatePage: (pageId: PolicyPageId) => void;
  onNavigateHome: () => void;
}

const TOC_ITEMS = [
  { id: 'armacoes-lentes', label: '1. Armações e lentes' },
  { id: 'pedidos-pagamento', label: '2. Pedidos e pagamento' },
  { id: 'envio-rastreio', label: '3. Envio e rastreio' },
  { id: 'trocas-garantia', label: '4. Trocas e garantia' },
  { id: 'contato', label: '5. Canais de atendimento' },
];

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: { categoryId: string; categoryTitle: string; items: FAQItem[] }[] = [
  {
    categoryId: 'armacoes-lentes',
    categoryTitle: '1. Armações e lentes',
    items: [
      {
        q: 'Como sei se a armação vai ficar boa no meu rosto?',
        a: 'Cada produto em nossa loja possui as medidas exatas em milímetros especificadas (largura da lente, ponte nasal, comprimento da haste e largura total frontal). Você pode medir um óculos que você já use confortavelmente e comparar com as especificações do nosso catálogo.',
      },
      {
        q: 'Os óculos de sol têm proteção UV de verdade?',
        a: 'Sim, 100% dos óculos de sol da Lume Shop contam com proteção UV400 certificada, bloqueando raios UVA e UVB nocivos aos olhos. Todas as lentes passam por testes laboratoriais de controle óptico.',
      },
      {
        q: 'As armações de grau já vêm com lentes graduadas?',
        a: 'Nossas armações da linha Grau são vendidas com lentes demonstrativas em acrílico sem graduação. Para colocar sua graduação (miopia, astigmatismo, hipermetropia ou multifocal), basta levar a armação à sua ótica de confiança com sua receita oftalmológica.',
      },
      {
        q: 'O que é a tecnologia de lentes com filtro de Luz Azul?',
        a: 'São lentes com tratamento antirreflexo que filtram a luz azul-violeta nociva emitida por monitores de computador, tablets e celulares, prevenindo a vista cansada, dores de cabeça e melhorando a qualidade do sono.',
      },
    ],
  },
  {
    categoryId: 'pedidos-pagamento',
    categoryTitle: '2. Pedidos e pagamento',
    items: [
      {
        q: 'Quais formas de pagamento são aceitas?',
        a: 'Aceitamos Pix com 5% de desconto imediato e cartões de crédito das bandeiras Visa, Mastercard, Elo, American Express e Hipercard, com parcelamento em até 6x sem juros.',
      },
      {
        q: 'Como funciona o desconto de 5% no Pix?',
        a: 'Ao selecionar o Pix como método de pagamento no checkout, o desconto é calculado automaticamente no valor dos produtos. Um código "Pix Copia e Cola" e o QR Code são gerados na hora para você pagar pelo aplicativo do seu banco.',
      },
      {
        q: 'O pagamento no site é seguro?',
        a: 'Totalmente seguro. Nosso site opera sob conexão criptografada HTTPS com certificado SSL de 256 bits. O processamento financeiro é realizado por adquirentes bancárias líderes de mercado, e seus dados de cartão nunca são salvos pela nossa loja.',
      },
    ],
  },
  {
    categoryId: 'envio-rastreio',
    categoryTitle: '3. Envio e rastreio',
    items: [
      {
        q: 'Qual o prazo de entrega para minha região?',
        a: 'Entregamos em todo o Brasil. Na modalidade Econômica o prazo estimado é de 5 a 9 dias úteis após a postagem. Na modalidade Expressa, o prazo é de 2 a 4 dias úteis. As postagens são realizadas em até 2 dias úteis após a confirmação do pagamento.',
      },
      {
        q: 'Como rastrear o meu pedido?',
        a: 'Assim que sua encomenda for despachada, enviamos o código de rastreamento oficial dos Correios/transportadora diretamente para seu e-mail e WhatsApp para que você acompanhe cada etapa da entrega.',
      },
      {
        q: 'Como conseguir Frete Grátis?',
        a: 'Todas as compras acima de R$ 199,00 contam com Frete Grátis na modalidade Econômica para qualquer cidade do Brasil.',
      },
    ],
  },
  {
    categoryId: 'trocas-garantia',
    categoryTitle: '4. Trocas e garantia',
    items: [
      {
        q: 'Como funciona a Primeira Troca Grátis?',
        a: 'Se o modelo não vestir como você esperava, você tem até 7 dias corridos após o recebimento para solicitar a troca. Nossa equipe envia uma autorização de postagem reversa pré-paga para você enviar o produto de volta sem nenhum custo de frete.',
      },
      {
        q: 'Qual é o prazo de garantia dos óculos?',
        a: 'Todas as nossas armações contam com garantia legal de 90 dias corridos contra qualquer defeito de fabricação na estrutura ou nas lentes.',
      },
    ],
  },
];

export const HelpPage: React.FC<HelpPageProps> = ({
  onNavigatePage,
  onNavigateHome,
}) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'armacoes-lentes-0': true,
    'pedidos-pagamento-0': true,
  });
  const [search, setSearch] = useState('');

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredCategories = FAQS.map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (item) =>
        item.q.toLowerCase().includes(search.toLowerCase()) ||
        item.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.items.length > 0);

  return (
    <PolicyLayout
      currentPageId="ajuda"
      breadcrumbLabel="Ajuda & FAQ"
      titlePrefix="Perguntas"
      highlightWord="frequentes."
      subtitle="Tire suas dúvidas sobre armações, medidas, lentes, compras e entrega."
      tocItems={TOC_ITEMS}
      onNavigatePage={onNavigatePage}
      onNavigateHome={onNavigateHome}
    >
      {/* Search Input Box */}
      <div className="relative">
        <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Busque por dúvida, palavra-chave (ex: frete, medidas, pix, troca)..."
          className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:ring-1 focus:ring-black"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="text-xs text-zinc-400 hover:text-black absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer font-medium"
          >
            Limpar
          </button>
        )}
      </div>

      {/* Accordion Categories */}
      <div className="space-y-10">
        {filteredCategories.length === 0 ? (
          <div className="p-8 text-center bg-zinc-50 rounded-2xl border border-zinc-200/80">
            <HelpCircle className="w-8 h-8 text-zinc-400 mx-auto mb-2" />
            <h4 className="font-bold text-sm text-zinc-900">Nenhuma pergunta encontrada para "{search}"</h4>
            <p className="text-xs text-zinc-500 mt-1 mb-4">
              Fale diretamente com nossa equipe no WhatsApp para tirar qualquer dúvida.
            </p>
            <a
              href="https://wa.me/5571999808266"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6A00] text-white text-xs font-bold rounded-xl"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp (71) 99980-8266</span>
            </a>
          </div>
        ) : (
          filteredCategories.map((category) => (
            <section
              key={category.categoryId}
              id={category.categoryId}
              className="scroll-mt-32 space-y-3"
            >
              <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight pb-2 border-b border-zinc-100">
                {category.categoryTitle}
              </h2>

              <div className="space-y-2.5">
                {category.items.map((faq, idx) => {
                  const key = `${category.categoryId}-${idx}`;
                  const isOpen = !!openItems[key];

                  return (
                    <div
                      key={key}
                      className="rounded-xl border border-zinc-200/80 overflow-hidden bg-zinc-50/50 transition-colors"
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-100/70 transition-colors"
                      >
                        <span className="font-bold text-xs sm:text-sm text-zinc-900">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-black' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 bg-white">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))
        )}
      </div>

      {/* 5. Canais de atendimento */}
      <section id="contato" className="scroll-mt-32">
        <ContactInfoBlock />
      </section>
    </PolicyLayout>
  );
};
