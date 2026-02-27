"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Check, Shield, Clock, FileText, ArrowRight, AlertCircle, Info } from "lucide-react";
import confetti from "canvas-confetti";

const CHECKOUT_URL = "https://pay.barte.com/payment-link/5f010996-9f70-46c4-af5c-900f7bc0d32a";
const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwMsMAp-HVv_LiVTntFFNk-zznUUKj0usBgpfH_LaojDG_Y_b0pt6KQF2LDfevBrUk/exec";

const pontosPrincipais = [
  {
    icon: FileText,
    titulo: "O que você está contratando",
    itens: [
      { tipo: "ok", texto: "Landing Page profissional (hospedada no domínio GrowDoc)" },
      { tipo: "ok", texto: "Ficha Google Meu Negócio configurada com SEO" },
      { tipo: "ok", texto: "Ensaio ART.IA — 5 fotos profissionais com IA" },
      { tipo: "ok", texto: "3 Posts Iniciais para Instagram (vídeo, estático ou carrossel)" },
      { tipo: "ok", texto: "Acesso à Plataforma GrowDoc (aulas para sua 1ª campanha)" },
    ],
  },
  {
    icon: Clock,
    titulo: "Prazo e entrega",
    itens: [
      { tipo: "ok", texto: "Entrega completa em até 1 mês após o pagamento" },
      { tipo: "ok", texto: "Proposta válida por 5 dias" },
      { tipo: "ok", texto: "Comunicação via WhatsApp com todo o time" },
    ],
  },
  {
    icon: Shield,
    titulo: "Importante saber antes de continuar",
    itens: [
      { tipo: "info", texto: "Valores pagos não serão reembolsados" },
      { tipo: "info", texto: "Por ser projeto único, o contrato encerra-se automaticamente com a entrega dos itens" },
      { tipo: "info", texto: "A GrowDoc não garante resultados comerciais (pacientes, faturamento etc.) — nosso compromisso é com os itens entregues; a conversão depende de fatores externos" },
      { tipo: "info", texto: "Não estão incluídos: anúncios pagos, gestão de redes sociais ou branding" },
    ],
  },
];

const termosCompletos = `CONTRATO DE PRESTAÇÃO DE SERVIÇOS — GROWDOC STARTER 2

CONTRATADA: GROWDOC LTDA.
CNPJ: 65.329.313/0001-33
Sede: Belo Horizonte/MG
Contato: financeiro@growdoc.com.br

CONTRATANTE: Identificado no momento da compra (dados fornecidos na plataforma de pagamento).

1. OBJETO
Implementação do Growdoc Program STARTER 2, conforme entregáveis descritos nesta página. Não estão incluídos serviços de tráfego pago, gestão de redes sociais, branding, ou quaisquer outros serviços não expressamente listados.

2. ENTREGÁVEIS
a) Landing Page de alta conversão (hospedada no domínio GrowDoc);
b) Configuração da Ficha Google Meu Negócio com palavras-chave de SEO;
c) Ensaio ART.IA — 5 fotos profissionais geradas com IA;
d) 3 (três) Posts Iniciais para Instagram (vídeo, estático ou carrossel — formato a definir com o cliente);
e) Acesso à Plataforma GrowDoc com aulas para estruturar a 1ª campanha.

3. PAGAMENTO
Valor total: R$ 3.500,00, pagável via PIX, boleto ou cartão de crédito. O link de pagamento tem validade de 5 dias corridos.

4. PRAZO DE EXECUÇÃO
1 (um) mês a partir da confirmação do pagamento e preenchimento do formulário de onboarding.

5. OBRIGAÇÕES DO CONTRATANTE
O contratante se compromete a participar ativamente do processo, disponibilizar agenda para reuniões, designar um responsável de comunicação e fornecer os materiais e acessos necessários dentro dos prazos acordados.

6. POLÍTICA DE REEMBOLSO E VALORES ANTECIPADOS
Os valores pagos não são restituídos em hipótese alguma, independentemente do motivo do encerramento. Isso inclui pagamentos antecipados de múltiplos meses ou períodos: caso o Contratante opte por encerrar a contratação antes de usufruir de todos os meses pagos antecipadamente, os valores referentes aos meses não utilizados não serão devolvidos nem convertidos em crédito, salvo acordo expresso por escrito entre as partes.

7. AVISO PRÉVIO
O encerramento da contratação exige comunicação formal por escrito (e-mail ou mensagem no grupo do WhatsApp do projeto) com antecedência mínima de 30 (trinta) dias corridos. O prazo de aviso prévio é improrrogável e não pode ser reduzido unilateralmente pelo Contratante. Durante o período de aviso prévio, os serviços continuam sendo prestados normalmente e as obrigações financeiras do Contratante permanecem vigentes.

8. ISENÇÃO DE GARANTIA DE RESULTADO
A GrowDoc se exime de qualquer garantia de resultado comercial, incluindo, mas não se limitando a: número de pacientes gerados, taxa de conversão, retorno financeiro ou faturamento. O objetivo da GrowDoc é a entrega de leads qualificados (potenciais pacientes); a conversão desses contatos em consultas e procedimentos depende de fatores externos à execução dos serviços, como disponibilidade de agenda, habilidade de atendimento e perfil do consultório. A Contratada se compromete exclusivamente com a entrega dos itens descritos no objeto deste contrato.

9. APROVAÇÃO TÁCITA DE ENTREGÁVEIS
Materiais, peças e entregáveis enviados para aprovação serão considerados automaticamente aprovados caso o Contratante não manifeste objeção por escrito em até 5 (cinco) dias corridos após o envio. Revisões solicitadas após esse prazo poderão estar sujeitas a cobranças adicionais.

10. COMPROVAÇÃO DE ENTREGA E REGISTROS
A Contratada mantém registros de todas as entregas realizadas, incluindo, mas não se limitando a: links das páginas publicadas, capturas de tela com data e hora, histórico de mensagens no grupo do WhatsApp do projeto e confirmações de envio por escrito. Tais registros constituem prova suficiente de prestação dos serviços contratados e poderão ser utilizados em eventual litígio administrativo ou judicial. A ausência de contestação formal dentro do prazo previsto na Cláusula 9 confirma o aceite integral dos entregáveis pelo Contratante, não sendo admitida alegação posterior de não entrega dos itens tacitamente aprovados.

11. CONTESTAÇÃO DE PAGAMENTO (CHARGEBACK)
A abertura de contestação ou disputa junto à operadora de cartão de crédito, instituição financeira ou plataforma de pagamento (chargeback) após a comprovada prestação dos serviços constitui descumprimento contratual e tentativa de enriquecimento ilícito, sujeitando o Contratante à multa prevista neste contrato, acrescida de todos os custos administrativos e legais decorrentes da contestação. A Contratada se reserva o direito de apresentar todos os registros de entrega como prova de serviço prestado perante as plataformas, órgãos de defesa do consumidor e o Poder Judiciário.

12. PROPRIEDADE INTELECTUAL E USO DE IMAGEM
Os materiais produzidos durante o contrato (Landing Page, fotos ART.IA, peças visuais) são de uso do Contratante durante a vigência ativa. A GrowDoc reserva-se o direito de utilizar esses materiais — incluindo resultados de campanha, capturas de tela da Landing Page e depoimentos fornecidos pelo Contratante — para fins de portfólio, casos de sucesso e divulgação nas redes sociais, site institucional e apresentações comerciais da GrowDoc, salvo solicitação expressa em contrário por escrito. A hospedagem no domínio GrowDoc é gratuita durante a vigência. A transferência para domínio próprio tem custo de R$1.500,00. Em caso de inadimplência, a GrowDoc poderá suspender a hospedagem até regularização.

13. MULTA POR DESCUMPRIMENTO
Em caso de descumprimento não sanado em 30 dias, a parte infratora estará sujeita à multa de R$ 5.000,00, além das perdas e danos cabíveis.

14. PROTEÇÃO DE DADOS (LGPD)
Os dados pessoais fornecidos pelo Contratante serão utilizados exclusivamente para execução deste contrato e comunicação relacionada ao projeto, nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018).

15. FORO
Comarca de Belo Horizonte/MG, com renúncia a qualquer outro, por mais privilegiado que seja.

Ao clicar em "Entendi, quero começar!", o Contratante declara ter lido, compreendido e concordado integralmente com todos os termos acima. Este aceite eletrônico tem validade jurídica equivalente a uma assinatura, sendo registrado com data, hora e identificação do dispositivo, nos termos do art. 10 da MP nº 2.200-2/2001.

A confirmação do pagamento constitui aceite integral e irrevogável de todos os termos e condições desta contratação, independentemente de qualquer outra formalidade.`;

async function registrarAceite() {
  if (!WEBHOOK_URL) return;
  try {
    let ip = "desconhecido";
    try {
      const r = await fetch("https://api.ipify.org?format=json");
      const d = await r.json();
      ip = d.ip;
    } catch {}

    const body = new URLSearchParams({
      timestamp: new Date().toISOString(),
      plano: "GrowDoc Starter 2",
      ip,
      userAgent: navigator.userAgent.substring(0, 250),
      url: window.location.href,
    });

    fetch(WEBHOOK_URL, { method: "POST", mode: "no-cors", body });
  } catch {}
}

export default function TermosPage() {
  const [acordoMarcado, setAcordoMarcado] = useState(false);
  const [termosAbertos, setTermosAbertos] = useState(false);

  const handleCheckbox = (checked: boolean) => {
    setAcordoMarcado(checked);
    if (checked) {
      void confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.7 },
        colors: ["#01FEC2", "#ffffff", "#006C60", "#00B3A0"],
        scalar: 0.9,
      });
    }
  };

  const handleConcordar = async (e: React.MouseEvent) => {
    if (!acordoMarcado) { e.preventDefault(); return; }
    registrarAceite();
  };

  return (
    <main className="min-h-screen bg-[#131515] text-white flex flex-col">
      {/* Fundo sutil */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#01FEC2]/4 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="px-6 py-6 flex justify-center border-b border-white/5">
        <Image
          src="/images/logo-white.png"
          alt="GrowDoc"
          width={120}
          height={32}
          className="object-contain"
        />
      </header>

      {/* Conteúdo */}
      <div className="flex-1 px-6 py-10 max-w-2xl mx-auto w-full">

        {/* Indicador de etapas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          {[
            { label: "Proposta", step: 1, done: true },
            { label: "Confirmação", step: 2, done: false, active: true },
            { label: "Pagamento", step: 3, done: false },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className={`flex items-center gap-1.5 text-xs ${item.active ? "text-[#01FEC2] font-semibold" : "text-white/30"}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  item.done ? "bg-[#01FEC2]/20 text-[#01FEC2]" :
                  item.active ? "bg-[#01FEC2]/15 border border-[#01FEC2]/50 text-[#01FEC2]" :
                  "bg-white/8 text-white/30"
                }`}>
                  {item.done ? "✓" : item.step}
                </span>
                {item.label}
              </div>
              {i < 2 && <div className="w-6 h-px bg-white/10" />}
            </div>
          ))}
        </motion.div>

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Confirme sua contratação
          </h1>
          <p className="mt-3 text-white/45 text-sm leading-relaxed max-w-md mx-auto">
            Isso é padrão para todos os nossos médicos. Queremos que você saiba exatamente o que está contratando antes de prosseguir.
          </p>
        </motion.div>

        {/* Pontos principais */}
        <div className="space-y-4 mb-8">
          {pontosPrincipais.map((grupo, i) => (
            <motion.div
              key={grupo.titulo}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="bg-[#1a1d1d] border border-[#2a2e2e] rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#01FEC2]/10 flex items-center justify-center flex-shrink-0">
                  <grupo.icon className="w-4 h-4 text-[#01FEC2]" />
                </div>
                <h2 className="font-semibold text-white text-sm">{grupo.titulo}</h2>
              </div>
              <ul className="space-y-2.5">
                {grupo.itens.map((item) => (
                  <li key={item.texto} className="flex items-start gap-2.5">
                    {item.tipo === "ok" ? (
                      <Check className="w-3.5 h-3.5 text-[#01FEC2] flex-shrink-0 mt-0.5" />
                    ) : (
                      <Info className="w-3.5 h-3.5 text-white/35 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm leading-relaxed ${item.tipo === "ok" ? "text-white/60" : "text-white/45"}`}>
                      {item.texto}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Termos completos (accordion) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mb-8"
        >
          <button
            onClick={() => setTermosAbertos(!termosAbertos)}
            className="w-full flex items-center justify-between gap-3 text-white/30 hover:text-white/50 transition-colors text-xs py-3 border-t border-b border-white/8"
          >
            <span className="text-xs underline underline-offset-2 decoration-white/20">Ver contrato completo</span>
            <span className="text-white/20 text-xs">{termosAbertos ? "−" : "+"}</span>
          </button>

          <AnimatePresence>
            {termosAbertos && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="bg-[#1a1d1d] border border-[#2a2e2e] rounded-xl p-5 mt-3">
                  <pre className="text-white/35 text-xs leading-relaxed whitespace-pre-wrap font-sans">
                    {termosCompletos}
                  </pre>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Checkbox de aceite */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mb-5"
        >
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5 flex-shrink-0">
              <input
                type="checkbox"
                className="sr-only"
                checked={acordoMarcado}
                onChange={(e) => handleCheckbox(e.target.checked)}
              />
              <div
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                  acordoMarcado
                    ? "bg-[#01FEC2] border-[#01FEC2]"
                    : "bg-transparent border-white/20 group-hover:border-white/40"
                }`}
              >
                {acordoMarcado && <Check className="w-3 h-3 text-[#131515] stroke-[3]" />}
              </div>
            </div>
            <span className="text-white/55 text-sm leading-relaxed">
              Li e concordo com os termos desta contratação. Estou pronto para começar o meu projeto.
            </span>
          </label>

          <AnimatePresence>
            {acordoMarcado && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="mt-4 flex items-center gap-2 text-[#01FEC2] text-sm font-medium"
              >
                <span className="text-lg">🎉</span>
                Ótimo! Você está a um passo de transformar sua presença digital.
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

        {/* Aviso LGPD + legal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="flex items-start gap-2 mb-8 bg-white/3 rounded-xl p-4"
        >
          <AlertCircle className="w-3.5 h-3.5 text-white/20 flex-shrink-0 mt-0.5" />
          <p className="text-white/25 text-xs leading-relaxed">
            Seus dados são usados exclusivamente para execução deste contrato (LGPD — Lei nº 13.709/2018). Ao prosseguir, este aceite é registrado com data, hora e identificação do dispositivo, tendo validade jurídica de assinatura eletrônica.
          </p>
        </motion.div>

        {/* Botão CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <motion.a
            href={acordoMarcado ? CHECKOUT_URL : undefined}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleConcordar}
            whileHover={acordoMarcado ? { scale: 1.02 } : {}}
            whileTap={acordoMarcado ? { scale: 0.98 } : {}}
            className={`flex items-center justify-center gap-3 w-full font-bold text-base py-4 rounded-2xl transition-all duration-300 ${
              acordoMarcado
                ? "bg-[#01FEC2] text-[#131515] cursor-pointer shadow-[0_0_40px_rgba(1,254,194,0.25)]"
                : "bg-white/5 text-white/25 cursor-not-allowed border border-white/10"
            }`}
          >
            Entendi, quero começar!
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          {!acordoMarcado && (
            <p className="text-center text-white/25 text-xs mt-3">
              Marque a caixa acima para continuar
            </p>
          )}

          <p className="text-center text-white/20 text-xs mt-4 leading-relaxed">
            A confirmação do pagamento implica a aceitação integral dos termos desta contratação.
          </p>
        </motion.div>

        {/* Rodapé */}
        <p className="text-center text-white/15 text-xs mt-10">
          GROWDOC LTDA. · CNPJ 65.329.313/0001-33 · Belo Horizonte/MG
        </p>
      </div>
    </main>
  );
}
