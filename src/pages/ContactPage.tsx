import React, { useState } from 'react';
import { PolicyLayout, PolicyPageId, ContactInfoBlock } from '../components/PolicyLayout';
import { MessageCircle, Mail, Phone, MapPin, CheckCircle2, Send } from 'lucide-react';

interface ContactPageProps {
  onNavigatePage: (pageId: PolicyPageId) => void;
  onNavigateHome: () => void;
}

const TOC_ITEMS = [
  { id: 'canais-diretos', label: '1. Canais rápidos' },
  { id: 'formulario', label: '2. Enviar mensagem' },
  { id: 'dados-empresa', label: '3. Dados da empresa' },
];

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigatePage,
  onNavigateHome,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    orderNumber: '',
    subject: 'Dúvida sobre produtos',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        contact: '',
        orderNumber: '',
        subject: 'Dúvida sobre produtos',
        message: '',
      });
    }, 4500);
  };

  return (
    <PolicyLayout
      currentPageId="contato"
      breadcrumbLabel="Contato"
      titlePrefix="Fale com a"
      highlightWord="gente."
      subtitle="Estamos à disposição para ajudar você a escolher a armação ideal ou tirar qualquer dúvida sobre o seu pedido."
      tocItems={TOC_ITEMS}
      onNavigatePage={onNavigatePage}
      onNavigateHome={onNavigateHome}
    >
      {/* 1. Canais rápidos */}
      <section id="canais-diretos" className="scroll-mt-32 space-y-4">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          1. Atendimento rápido
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Para respostas imediatas durante o horário comercial, recomendamos chamar nossa equipe pelo WhatsApp.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://wa.me/5571999808266"
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all flex items-start gap-4 group"
          >
            <div className="p-3 rounded-xl bg-[#25D366] text-white">
              <MessageCircle className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="font-bold text-sm text-zinc-900 group-hover:text-emerald-700 transition-colors">
                WhatsApp Oficial
              </div>
              <div className="font-mono font-bold text-emerald-800 text-sm mt-0.5">
                (71) 99980-8266
              </div>
              <div className="text-xs text-zinc-600 mt-1">
                Atendimento humanizado em tempo real.
              </div>
            </div>
          </a>

          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-zinc-200 text-zinc-800">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-zinc-900">E-mail de Suporte</div>
              <div className="font-semibold text-zinc-800 text-sm mt-0.5">
                contato@lume-shop.site
              </div>
              <div className="text-xs text-zinc-500 mt-1">
                Respondemos em até 24 horas úteis.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Formulário de mensagem */}
      <section id="formulario" className="scroll-mt-32 space-y-4 pt-6 border-t border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          2. Enviar mensagem pelo site
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Preencha os campos abaixo e nosso time de suporte entrará em contato com você:
        </p>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm">Mensagem enviada com sucesso!</h4>
              <p className="text-xs text-emerald-700 mt-0.5">
                Obrigado pelo contato. Nossa equipe responderá no seu WhatsApp ou e-mail o mais breve possível.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 bg-zinc-50/70 p-6 rounded-2xl border border-zinc-200/80">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  Seu nome completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Como gostaria de ser chamado?"
                  className="w-full px-3.5 py-2.5 bg-white border border-zinc-200 rounded-xl text-xs text-zinc-900 focus:outline-hidden focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  E-mail ou WhatsApp *
                </label>
                <input
                  type="text"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="(71) 99980-8266 ou seu@email.com"
                  className="w-full px-3.5 py-2.5 bg-white border border-zinc-200 rounded-xl text-xs text-zinc-900 focus:outline-hidden focus:ring-1 focus:ring-black"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  Assunto
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-zinc-200 rounded-xl text-xs text-zinc-900 focus:outline-hidden focus:ring-1 focus:ring-black"
                >
                  <option>Dúvida sobre produtos e armações</option>
                  <option>Troca ou devolução</option>
                  <option>Rastreamento de entrega</option>
                  <option>Dúvida sobre pagamento / Pix</option>
                  <option>Outro assunto</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  Número do pedido (opcional)
                </label>
                <input
                  type="text"
                  value={formData.orderNumber}
                  onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                  placeholder="Ex: #LM-4821"
                  className="w-full px-3.5 py-2.5 bg-white border border-zinc-200 rounded-xl text-xs text-zinc-900 focus:outline-hidden focus:ring-1 focus:ring-black font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                Mensagem *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Descreva detalhadamente como podemos te ajudar..."
                className="w-full px-3.5 py-2.5 bg-white border border-zinc-200 rounded-xl text-xs text-zinc-900 focus:outline-hidden focus:ring-1 focus:ring-black resize-none"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-black hover:bg-[#FF6A00] text-white text-xs font-bold rounded-xl transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Enviar mensagem</span>
            </button>
          </form>
        )}
      </section>

      {/* 3. Dados da empresa */}
      <section id="dados-empresa" className="scroll-mt-32">
        <ContactInfoBlock />
      </section>
    </PolicyLayout>
  );
};
