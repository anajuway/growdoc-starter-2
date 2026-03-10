"use client";

import { motion } from "framer-motion";
import { Check, Clock, Shield, CreditCard } from "lucide-react";

const CHECKOUT_URL = "/termos";

const condicoes = [
  { icon: Clock, texto: "Entrega em até 1 mês" },
  { icon: CreditCard, texto: "Pagamento único no início" },
  { icon: Shield, texto: "Site hospedado no domínio GrowDoc" },
];

export default function Proposta() {
  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[1px] bg-gradient-to-r from-transparent via-[#01FEC2]/20 to-transparent" />

      <div className="max-w-3xl mx-auto">
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

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#1a1d1d] border border-[#01FEC2]/30 rounded-3xl p-8 md:p-12 glow-accent"
        >
          {/* Nome do plano + preço */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-[#01FEC2] text-sm font-semibold tracking-widest uppercase mb-1">Plano</p>
              <h3 className="text-2xl md:text-3xl font-bold">Site Institucional GrowDoc</h3>
            </div>
            <div className="sm:text-right">
              <p className="text-white/40 text-sm">Investimento</p>
              <div className="flex items-baseline gap-1">
                <span className="text-white/60 text-lg">R$</span>
                <span className="text-4xl md:text-5xl font-bold text-white">1.500</span>
                <span className="text-white/40">/projeto</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#01FEC2]/20 to-transparent mb-8" />

          {/* Entregável */}
          <div className="mb-8">
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">O que está incluso</p>
            <div className="flex items-center gap-3 p-4 bg-[#131515]/60 rounded-2xl border border-[#01FEC2]/10">
              <div className="w-8 h-8 rounded-full bg-[#01FEC2]/15 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-[#01FEC2]" />
              </div>
              <div>
                <p className="text-white font-medium">Site Institucional Médico</p>
                <p className="text-white/45 text-sm mt-0.5">
                  Desenvolvido do zero com design premium, copywriting médico e SEO — hospedado no domínio GrowDoc.
                </p>
              </div>
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

          {/* CTA */}
          <motion.a
            href={CHECKOUT_URL}
            whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(1,254,194,0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="block w-full text-center bg-[#01FEC2] text-[#131515] font-bold text-lg py-4 rounded-2xl transition-all mb-4"
          >
            Quero meu site agora
          </motion.a>

          <p className="text-center text-white/25 text-xs">
            Valores definitivos · Não sujeitos a estorno após confirmação do pagamento
          </p>
        </motion.div>
      </div>
    </section>
  );
}
