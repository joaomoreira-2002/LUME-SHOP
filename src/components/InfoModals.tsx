import React, { useState } from 'react';
import { X, ChevronDown, CheckCircle2 } from 'lucide-react';

export type ModalType = 'faq' | 'contato' | 'sobre' | 'trocas' | 'envio' | 'privacidade' | 'termos' | null;

interface InfoModalsProps {
  type: ModalType;
  onClose: () => void;
}

export const InfoModals: React.FC<InfoModalsProps> = ({ type, onClose }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [contactSent, setContactSent] = useState(false);

  if (!type) return null;

  const faqs = [
    {
      q: 'Todos os óculos de sol possuem proteção UV400?',
      a: 'Sim! Todos os nossos modelos de sol possuem lentes com proteção 100% UV400, bloqueando todos os raios nocivos UVA e UVB com comprimento de onda de até 400 nanômetros.'
    },
    {
      q: 'Como funciona a troca grátis em até 7 dias?',
      a: 'Caso você receba o produto e queira trocar por outro modelo, cor ou simplesmente não se adapte, basta solicitar em até 7 dias corridos após o recebimento. A primeira troca é totalmente por nossa conta.'
    },
    {
      q: 'Qual é o prazo de entrega para minha região?',
      a: 'Trabalhamos com despacho expresso via Jadlog e Correios (Sedex / PAC). O prazo médio para capitais é de 2 a 4 dias úteis, e para o interior do país de 4 a 7 dias úteis com código de rastreamento.'
    },
    {
      q: 'Posso colocar lentes com o meu grau nessas armações?',
      a: 'Com certeza! Todas as nossas armações da categoria Grau e Luz Azul são confeccionadas em acetato ou ligas metálicas nobres compatíveis com qualquer laboratório óptico do Brasil.'
    },
    {
      q: 'O que acompanha o pacote do produto?',
      a: 'Cada óculos enviado acompanha: 1 Estojo rígido de proteção Prime com fecho magnético, 1 Flanela de microfibra de alta densidade e 1 Certificado de autenticidade e garantia.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all w-full max-w-xl border border-zinc-100 p-6 md:p-8">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-lg text-zinc-400 hover:text-black hover:bg-zinc-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* FAQ Modal */}
          {type === 'faq' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-black text-zinc-900">Perguntas Frequentes</h3>
                <p className="text-xs text-zinc-500 mt-1">
                  Tire suas dúvidas sobre nossos modelos, entrega, garantia e cuidados.
                </p>
              </div>

              <div className="divide-y divide-zinc-100">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left text-xs font-bold text-zinc-900 hover:text-black transition-colors cursor-pointer"
                      >
                        <span className="pr-3">{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <p className="mt-2 text-xs text-zinc-600 leading-relaxed pr-6">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Sobre Modal */}
          {type === 'sobre' && (
            <div className="space-y-4">
              <h3 className="text-xl font-black text-zinc-900">Sobre a Lume Shop</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                A <strong className="text-black">Lume Shop</strong> nasceu com o propósito de democratizar o design ótico autoral de alto padrão no Brasil. Eliminamos intermediários excessivos para entregar armações em acetato nobre, titânio e TR-90 com a mesma precisão das marcas internacionais de luxo, mas por um valor acessível.
              </p>
              <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 space-y-2 text-xs">
                <div className="font-bold text-zinc-900">Compromissos Lume:</div>
                <div className="text-zinc-600">✓ Lentes com proteção UV400 rigorosamente testadas em espectrofotômetro.</div>
                <div className="text-zinc-600">✓ Atendimento humanizado direto por WhatsApp de segunda a sexta.</div>
                <div className="text-zinc-600">✓ Estoque nacional com envio em até 24h úteis.</div>
              </div>
            </div>
          )}

          {/* Contato Modal */}
          {type === 'contato' && (
            <div className="space-y-4">
              <h3 className="text-xl font-black text-zinc-900">Fale com a Gente</h3>
              <p className="text-xs text-zinc-500">
                Nosso time de atendimento está pronto para tirar suas dúvidas.
              </p>

              {contactSent ? (
                <div className="p-6 text-center bg-emerald-50 rounded-xl text-emerald-800 space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <div className="font-bold text-sm">Mensagem enviada com sucesso!</div>
                  <div className="text-xs">Responderemos em até 2 horas úteis.</div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactSent(true);
                  }}
                  className="space-y-3 text-xs"
                >
                  <div>
                    <label className="block text-[11px] text-zinc-500 mb-1">Seu Nome</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Ana Maria"
                      className="w-full border border-zinc-200 rounded-lg px-3 py-2 text-zinc-900 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-zinc-500 mb-1">E-mail ou WhatsApp</label>
                    <input
                      type="text"
                      required
                      placeholder="seuemail@exemplo.com ou (71) 99980-8266"
                      className="w-full border border-zinc-200 rounded-lg px-3 py-2 text-zinc-900 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-zinc-500 mb-1">Mensagem</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Como podemos te ajudar hoje?"
                      className="w-full border border-zinc-200 rounded-lg px-3 py-2 text-zinc-900 focus:outline-none focus:border-black resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-black text-white rounded-xl font-bold text-xs hover:bg-zinc-800 transition-colors cursor-pointer"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              )}

              <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                <span>WhatsApp: (71) 99980-8266</span>
                <span>contato@lume-shop.site</span>
              </div>
            </div>
          )}

          {/* Trocas e Devoluções */}
          {type === 'trocas' && (
            <div className="space-y-4 text-xs text-zinc-600">
              <h3 className="text-xl font-black text-zinc-900">Política de Trocas e Devoluções</h3>
              <p>
                De acordo com o Código de Defesa do Consumidor e com o compromisso de satisfação Lume Shop, você tem até <strong>7 (sete) dias corridos</strong> após a entrega para solicitar a troca ou devolução sem nenhum custo.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>O produto deve estar na embalagem original sem sinais de uso excessivo.</li>
                <li>Garantimos código de postagem reversa pré-pago sem custo para você.</li>
                <li>Reembolso imediato via Pix ou estorno no cartão na devolução confirmada.</li>
              </ul>
            </div>
          )}

          {/* Envio e Entrega */}
          {type === 'envio' && (
            <div className="space-y-4 text-xs text-zinc-600">
              <h3 className="text-xl font-black text-zinc-900">Envio e Entrega</h3>
              <p>
                Todos os pedidos são conferidos minuciosamente, higienizados e despachados em embalagens reforçadas para garantir a integridade dos óculos.
              </p>
              <div className="p-3 bg-zinc-50 rounded-xl space-y-1.5">
                <div className="font-bold text-zinc-900">Frete Grátis</div>
                <div>Em todas as compras com valor a partir de R$ 199,00 para qualquer CEP do Brasil.</div>
              </div>
            </div>
          )}

          {/* Privacidade */}
          {type === 'privacidade' && (
            <div className="space-y-4 text-xs text-zinc-600">
              <h3 className="text-xl font-black text-zinc-900">Política de Privacidade</h3>
              <p>
                A Lume Shop segue estritamente a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD). Seus dados pessoais de endereço, e-mail e pagamento são utilizados exclusivamente para o processamento do pedido e emissão da nota fiscal eletrônica. Nunca vendemos ou compartilhamos seus dados com terceiros.
              </p>
            </div>
          )}

          {/* Termos de Uso */}
          {type === 'termos' && (
            <div className="space-y-4 text-xs text-zinc-600">
              <h3 className="text-xl font-black text-zinc-900">Termos de Uso</h3>
              <p>
                Ao navegar e realizar pedidos na Lume Shop, o cliente concorda com os termos de compra segura, envio segurado e garantia legal de 90 dias contra defeitos de fabricação em todas as armações e lentes.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
