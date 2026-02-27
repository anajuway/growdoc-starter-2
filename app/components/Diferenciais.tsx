"use client";

import { motion } from "framer-motion";
import { Users, Target, TrendingUp, Stethoscope } from "lucide-react";

const items = [
  {
    icon: Stethoscope,
    title: "Especialistas em médicos",
    description: "Não atendemos qualquer nicho. Somos 100% focados em médicos e profissionais de saúde. Entendemos o CFM, o marketing ético e o que realmente converte pacientes.",
  },
  {
    icon: Target,
    title: "Método validado",
    description: "Funil APQ desenvolvido e testado com dezenas de médicos. Cada entregável tem um propósito claro: atrair, qualificar e converter pacientes.",
  },
  {
    icon: TrendingUp,
    title: "Resultado comprovado",
    description: "Nossos clientes colhem resultados em semanas, não meses. Agendamentos, leads qualificados e presença digital profissional desde o primeiro mês.",
  },
  {
    icon: Users,
    title: "Time completo dedicado",
    description: "Gestor de Tráfego, Designer, Copy, Editor de Vídeo e Suporte Operacional. Um time inteiro trabalhando para o seu sucesso.",
  },
];

export default function Diferenciais() {
  return (
    <section className="relative py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-[#01FEC2] text-sm font-semibold tracking-widest uppercase">Por que a GrowDoc</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Não somos uma agência.<br />
            <span className="text-gradient">Somos sua parceira de marketing.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(1,254,194,0.08)" }}
              className="group relative bg-[#1a1d1d] border border-[#2a2e2e] rounded-2xl p-8 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#01FEC2]/10 flex items-center justify-center group-hover:bg-[#01FEC2]/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[#01FEC2]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/55 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
              {/* Accent line on hover */}
              <motion.div
                className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#01FEC2]/40 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
