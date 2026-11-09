import React from 'react';
import { PolicyLayout, PolicyPageId, ContactInfoBlock } from '../components/PolicyLayout';
import { Lock, ShieldCheck } from 'lucide-react';

interface PrivacyPageProps {
  onNavigatePage: (pageId: PolicyPageId) => void;
  onNavigateHome: () => void;
}

const TOC_ITEMS = [
  { id: 'controlador', label: '1. Controlador' },
  { id: 'dados-coletados', label: '2. Dados coletados' },
  { id: 'finalidades', label: '3. Finalidades' },
  { id: 'compartilhamento', label: '4. Compartilhamento' },
  { id: 'seguranca-retencao', label: '5. Segurança e retenção' },
  { id: 'seus-direitos', label: '6. Seus direitos' },
  { id: 'cookies', label: '7. Cookies' },
  { id: 'contato', label: '8. Contato' },
];

export const PrivacyPage: React.FC<PrivacyPageProps> = ({
  onNavigatePage,
  onNavigateHome,
}) => {
  return (
    <PolicyLayout
      currentPageId="privacidade"
      breadcrumbLabel="Privacidade"
      titlePrefix="Política de"
      highlightWord="privacidade."
      subtitle="Como tratamos seus dados pessoais, de acordo com a LGPD (Lei Geral de Proteção de Dados nº 13.709/2018)."
      tocItems={TOC_ITEMS}
      onNavigatePage={onNavigatePage}
      onNavigateHome={onNavigateHome}
    >
      {/* 1. Controlador */}
      <section id="controlador" className="scroll-mt-32 space-y-3">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          1. Controlador
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          O controlador responsável pelo tratamento dos dados pessoais coletados neste site é <strong>MAC MARKETING DIGITAL</strong>, inscrita no CNPJ sob o nº <strong>50.744.315/0001-23</strong>, com sede na <strong>AV EDSON GALLANA, CEP 38.412-760, JARDIM CANAA, UBERLANDIA - MG</strong>.
        </p>
      </section>

      {/* 2. Dados coletados */}
      <section id="dados-coletados" className="scroll-mt-32 space-y-3 pt-6 border-t border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          2. Dados coletados
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Coletamos exclusivamente as informações necessárias para viabilizar sua experiência de compra e a entrega dos pedidos:
        </p>
        <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-600">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] mt-2 shrink-0" />
            <span><strong>Cadastro e pedido:</strong> Nome completo, CPF (para emissão obrigatória da Nota Fiscal Eletrônica), e-mail, telefone/WhatsApp e endereço completo de entrega.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] mt-2 shrink-0" />
            <span><strong>Pagamento:</strong> Dados da transação. Dados de cartão de crédito são criptografados de ponta a ponta e informados diretamente às adquirentes e gateways de pagamento homologados pelo Banco Central — <strong>não armazenamos números de cartão</strong> em nossos servidores.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] mt-2 shrink-0" />
            <span><strong>Navegação técnica:</strong> Endereço IP, tipo de navegador, dispositivo e itens da sacola (armazenados localmente no seu próprio navegador via cookies/localStorage).</span>
          </li>
        </ul>
      </section>

      {/* 3. Finalidades */}
      <section id="finalidades" className="scroll-mt-32 space-y-3 pt-6 border-t border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          3. Finalidades
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Seus dados são tratados estritamente para as seguintes bases legais:
        </p>
        <ul className="space-y-2 text-xs sm:text-sm text-zinc-600">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] mt-2 shrink-0" />
            <span>Processar o pedido, validar o pagamento e efetuar a entrega das armações e óculos.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] mt-2 shrink-0" />
            <span>Emitir nota fiscal e cumprir com obrigações fiscais, tributárias e regulatórias brasileiras.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] mt-2 shrink-0" />
            <span>Prevenir fraudes e garantir a segurança das transações em ambiente digital.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] mt-2 shrink-0" />
            <span>Atendimento humanizado ao cliente e envio de atualizações sobre o status e rastreamento da entrega.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] mt-2 shrink-0" />
            <span>Envio de novidades e promoções, apenas quando autorizado expressamente pelo usuário.</span>
          </li>
        </ul>
      </section>

      {/* 4. Compartilhamento */}
      <section id="compartilhamento" className="scroll-mt-32 space-y-3 pt-6 border-t border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          4. Compartilhamento de dados
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Compartilhamos seus dados somente com parceiros essenciais para a execução do contrato de compra: instituições financeiras para processamento bancário, transportadoras parceiras e Correios para envio das encomendas, e serviços de verificação antifraude.
        </p>
        <div className="p-4 bg-zinc-50 border border-zinc-200/80 rounded-xl text-xs font-semibold text-zinc-800">
          🔒 <strong>Compromisso ético:</strong> Nunca vendemos, alugamos ou comercializamos listas de dados pessoais de clientes para terceiros em hipótese alguma.
        </div>
      </section>

      {/* 5. Segurança e retenção */}
      <section id="seguranca-retencao" className="scroll-mt-32 space-y-3 pt-6 border-t border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          5. Segurança e retenção
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Nosso site opera com certificado de segurança SSL/TLS e tráfego criptografado por protocolo HTTPS (256 bits). Os dados são mantidos em ambientes de nuvem protegidos pelo tempo estritamente necessário para cumprir as finalidades contratuais e os prazos legais de guarda fiscal.
        </p>
      </section>

      {/* 6. Seus direitos (LGPD) */}
      <section id="seus-direitos" className="scroll-mt-32 space-y-3 pt-6 border-t border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          6. Seus direitos
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          De acordo com o art. 18 da LGPD, você tem direito de solicitar a qualquer momento a confirmação da existência de tratamento, o acesso aos dados, a correção de dados incompletos ou inexatos, a anonimização ou eliminação de dados desnecessários e a revogação do consentimento.
        </p>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Para exercer esses direitos, basta enviar um e-mail para <strong className="text-black">contato@lume-shop.site</strong> com o assunto "Direitos LGPD". Respondemos a todas as solicitações no prazo máximo legal de 15 dias úteis.
        </p>
      </section>

      {/* 7. Cookies */}
      <section id="cookies" className="scroll-mt-32 space-y-3 pt-6 border-t border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          7. Cookies
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Utilizamos cookies essenciais para manter itens na sua sacola de compras durante a sessão de navegação e registrar preferências básicas. Você pode configurar ou bloquear cookies a qualquer momento nas configurações do seu navegador web.
        </p>
      </section>

      {/* 8. Contato */}
      <section id="contato" className="scroll-mt-32">
        <ContactInfoBlock />
      </section>
    </PolicyLayout>
  );
};
