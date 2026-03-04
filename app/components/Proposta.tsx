"use client";

import { motion } from "framer-motion";
import { Check, Clock, Shield, ArrowRight } from "lucide-react";

const CHECKOUT_URL = "/termos";

const entregaveis = [
  "Landing Page de alta conversão (hospedada pela GrowDoc)",
  "Ficha Google Meu Negócio com SEO",
  "Ensaio ART.IA — 5 fotos profissionais",
  "3 Posts Iniciais para Instagram (vídeo, estático ou carrossel)",
  "Manual de Sobrevivência do Marketing Médico (livro digital)",
];

const condicoes = [
  { icon: Clock, texto: "Proposta válida por 5 dias" },
  { icon: Shield, texto: "Entrega em até 1 mês" },
  { icon: Check, texto: "LP hospedada no domínio GrowDoc" },
];

export default function Proposta() {
  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[1px] bg-gradient-to-r from-transparent via-[#01FEC2]/20 to-transparent" />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[#01FEC2] text-sm font-semibold tracking-widest uppercase">Sua proposta</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Tudo pronto para você{" "}
            <span className="text-gradient">começar</span>
          </h2>
        </motion.div>

        {/* Card da proposta */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#1a1d1d] border border-[#01FEC2]/30 rounded-3xl p-8 md:p-12 glow-accent"
        >
          {/* Nome do plano */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-[#01FEC2] text-sm font-semibold tracking-widest uppercase mb-1">Plano</p>
              <h3 className="text-2xl md:text-3xl font-bold">GrowDoc Starter Plus</h3>
            </div>
            <div className="sm:text-right">
              <p className="text-white/40 text-sm">Investimento</p>
              <div className="flex items-baseline gap-1">
                <span className="text-white/60 text-lg">R$</span>
                <span className="text-4xl md:text-5xl font-bold text-white">3.500</span>
                <span className="text-white/40">/projeto</span>
              </div>
            </div>
          </div>

          {/* Divisor */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#01FEC2]/20 to-transparent mb-8" />

          {/* Entregáveis */}
          <div className="mb-8">
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">O que está incluso</p>
            <div className="space-y-3">
              {entregaveis.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#01FEC2]/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#01FEC2]" />
                  </div>
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Condições */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {condicoes.map((cond) => (
              <div key={cond.texto} className="flex items-center gap-2 bg-[#131515]/60 rounded-xl p-3">
                <cond.icon className="w-4 h-4 text-[#01FEC2] flex-shrink-0" />
                <span className="text-white/50 text-xs">{cond.texto}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-white/25 text-xs">
            Valores definitivos · Não sujeitos a estorno após confirmação do pagamento
          </p>
        </motion.div>
      </div>
    </section>
  );
}
