"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Check, Shield, Clock, FileText, ArrowRight, AlertCircle, Info } from "lucide-react";
import confetti from "canvas-confetti";

const CHECKOUT_URL = "https://pay.barte.com/payment-link/ac24dcba-e550-46e9-a3b0-dbc236b64dac";
const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwMsMAp-HVv_LiVTntFFNk-zznUUKj0usBgpfH_LaojDG_Y_b0pt6KQF2LDfevBrUk/exec";
const FORMSPREE_URL = "https://formspree.io/f/xpqjvelq";

const pontosPrincipais = [
  {
    icon: FileText,
    titulo: "O que você está contratando",
    itens: [
      { tipo: "ok", texto: "Site Institucional Médico completo (hospedado no domínio GrowDoc)" },
      { tipo: "ok", texto: "Design premium personalizado para a sua especialidade" },
      { tipo: "ok", texto: "Copywriting médico profissional" },
      { tipo: "ok", texto: "Estrutura otimizada para SEO" },
    ],
  },
  {
    icon: Clock,
    titulo: "Prazo e entrega",
    itens: [
      { tipo: "ok", texto: "Entrega completa em até 1 mês após o pagamento" },
      { tipo: "ok", texto: "Pagamento único no início do projeto" },
      { tipo: "ok", texto: "Comunicação via WhatsApp com todo o time" },
    ],
  },
  {
    icon: Shield,
    titulo: "Importante saber antes de continuar",
    itens: [
      { tipo: "info", texto: "Valores pagos não serão reembolsados" },
      { tipo: "info", texto: "Por ser projeto único, o contrato encerra-se automaticamente com a entrega do site" },
      { tipo: "info", texto: "A GrowDoc não garante resultados comerciais — nosso compromisso é com o item entregue" },
      { tipo: "info", texto: "Não estão incluídos: anúncios pagos, gestão de redes sociais, landing page de vendas ou branding" },
    ],
  },
];

const termosCompletos = `CONTRATO DE PRESTAÇÃO DE SERVIÇOS — SITE INSTITUCIONAL GROWDOC

CONTRATADA: GROWDOC LTDA.
CNPJ: 65.329.313/0001-33
Sede: Belo Horizonte/MG
Contato: financeiro@growdoc.com.br

CONTRATANTE: Identificado no momento da compra (dados fornecidos na plataforma de pagamento).

1. OBJETO
Desenvolvimento e entrega de Site Institucional Médico, conforme entregáveis descritos nesta página. Não estão incluídos serviços de tráfego pago, gestão de redes sociais, landing page de vendas, branding, ou quaisquer outros serviços não expressamente listados.

2. ENTREGÁVEIS
a) Site Institucional completo com design premium personalizado;
b) Copywriting médico profissional;
c) Estrutura otimizada para SEO;
d) Hospedagem no domínio GrowDoc (ex: seunome.growdoc.com.br).

3. PAGAMENTO
Valor total: R$ 1.500,00, pagável via PIX, boleto ou cartão de crédito. Pagamento integral no início do projeto.

4. PRAZO DE EXECUÇÃO
1 (um) mês a partir da confirmação do pagamento e preenchimento do formulário de onboarding.

5. OBRIGAÇÕES DO CONTRATANTE
O contratante se compromete a participar ativamente do processo, disponibilizar agenda para reuniões, designar um responsável de comunicação e fornecer os materiais e acessos necessários dentro dos prazos acordados.

6. POLÍTICA DE REEMBOLSO E VALORES ANTECIPADOS
Os valores pagos não são restituídos em hipótese alguma, independentemente do motivo do encerramento.

7. ISENÇÃO DE GARANTIA DE RESULTADO
A GrowDoc se exime de qualquer garantia de resultado comercial, incluindo, mas não se limitando a: número de pacientes gerados, taxa de conversão, retorno financeiro ou faturamento. A Contratada se compromete exclusivamente com a entrega do site descrito no objeto deste contrato.

8. APROVAÇÃO TÁCITA DE ENTREGÁVEIS
Materiais, peças e entregáveis enviados para aprovação serão considerados automaticamente aprovados caso o Contratante não manifeste objeção por escrito em até 5 (cinco) dias corridos após o envio.

9. COMPROVAÇÃO DE ENTREGA E REGISTROS
A Contratada mantém registros de todas as entregas realizadas, incluindo links do site publicado, capturas de tela com data e hora, e confirmações de envio por escrito. Tais registros constituem prova suficiente de prestação dos serviços contratados.

10. CONTESTAÇÃO DE PAGAMENTO (CHARGEBACK)
A abertura de contestação ou disputa junto à operadora de cartão de crédito após a comprovada prestação dos serviços constitui descumprimento contratual, sujeitando o Contratante à multa prevista neste contrato, acrescida de todos os custos administrativos e legais decorrentes da contestação.

11. PROPRIEDADE INTELECTUAL E USO DE IMAGEM
O site produzido é de uso do Contratante após a entrega. A GrowDoc reserva-se o direito de utilizar os materiais para fins de portfólio, casos de sucesso e divulgação, salvo solicitação expressa em contrário por escrito. A hospedagem no domínio GrowDoc é gratuita durante a vigência. A transferência para domínio próprio tem custo adicional. Em caso de inadimplência, a GrowDoc poderá suspender a hospedagem até regularização.

12. MULTA POR DESCUMPRIMENTO
Em caso de descumprimento não sanado em 30 dias, a parte infratora estará sujeita à multa de R$ 5.000,00, além das perdas e danos cabíveis.

13. PROTEÇÃO DE DADOS (LGPD)
Os dados pessoais fornecidos pelo Contratante serão utilizados exclusivamente para execução deste contrato e comunicação relacionada ao projeto, nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018).

14. FORO
Comarca de Belo Horizonte/MG, com renúncia a qualquer outro, por mais privilegiado que seja.

Ao clicar em "Entendi, quero começar!", o Contratante declara ter lido, compreendido e concordado integralmente com todos os termos acima. Este aceite eletrônico tem validade jurídica equivalente a uma assinatura, sendo registrado com data, hora e identificação do dispositivo, nos termos do art. 10 da MP nº 2.200-2/2001.

A confirmação do pagamento constitui aceite integral e irrevogável de todos os termos e condições desta contratação, independentemente de qualquer outra formalidade.`;

async function registrarAceite(nome: string, email: string) {
  let ip = "desconhecido";
  try {
    const r = await fetch("https://api.ipify.org?format=json");
    const d = await r.json();
    ip = d.ip;
  } catch {}

  const timestamp = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

  if (WEBHOOK_URL) {
    try {
      const body = new URLSearchParams({ timestamp, plano: "Site Institucional GrowDoc", nome, email, ip, userAgent: navigator.userAgent.substring(0, 250), url: window.location.href });
      fetch(WEBHOOK_URL, { method: "POST", mode: "no-cors", body });
    } catch {}
  }

  try {
    fetch(FORMSPREE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ nome, email, plano: "Site Institucional GrowDoc", timestamp, ip }),
    });
  } catch {}
}

export default function TermosPage() {
  const [acordoMarcado, setAcordoMarcado] = useState(false);
  const [termosAbertos, setTermosAbertos] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const podeProsseguir = acordoMarcado && nome.trim().length > 2 && email.includes("@");

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
    if (!podeProsseguir) { e.preventDefault(); return; }
    registrarAceite(nome, email);
  };

  return (
    <main className="min-h-screen bg-[#131515] text-white flex flex-col">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#01FEC2]/4 blur-[120px]" />
      </div>

      <header className="px-6 py-6 flex justify-center border-b border-white/5">
        <Image src="/images/logo-white.png" alt="GrowDoc" width={120} height={32} className="object-contain" />
      </header>

      <div className="flex-1 px-6 py-10 max-w-2xl mx-auto w-full">

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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="mt-5 space-y-3"
              >
                <p className="text-[#01FEC2] text-sm font-medium flex items-center gap-2">
                  <span>🎉</span> Ótimo! Só mais dois campos para registrar seu aceite.
                </p>
                <div>
                  <label className="block text-white/40 text-xs mb-1.5 font-medium">Nome completo</label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Dr. João Silva"
                    className="w-full bg-[#1a1d1d] border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder:text-white/20 outline-none transition-colors focus:border-[#01FEC2]/50 font-[Axiforma,sans-serif]"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-xs mb-1.5 font-medium">E-mail</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="joao@exemplo.com"
                    className="w-full bg-[#1a1d1d] border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder:text-white/20 outline-none transition-colors focus:border-[#01FEC2]/50 font-[Axiforma,sans-serif]"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

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

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <motion.a
            href={podeProsseguir ? CHECKOUT_URL : undefined}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleConcordar}
            whileHover={podeProsseguir ? { scale: 1.02 } : {}}
            whileTap={podeProsseguir ? { scale: 0.98 } : {}}
            className={`flex items-center justify-center gap-3 w-full font-bold text-base py-4 rounded-2xl transition-all duration-300 ${
              podeProsseguir
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
          {acordoMarcado && !podeProsseguir && (
            <p className="text-center text-white/25 text-xs mt-3">
              Preencha nome e e-mail para continuar
            </p>
          )}

          <p className="text-center text-white/20 text-xs mt-4 leading-relaxed">
            A confirmação do pagamento implica a aceitação integral dos termos desta contratação.
          </p>
        </motion.div>

        <p className="text-center text-white/15 text-xs mt-10">
          GROWDOC LTDA. · CNPJ 65.329.313/0001-33 · Belo Horizonte/MG
        </p>
      </div>
    </main>
  );
}
