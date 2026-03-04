"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileText, Calendar, Users, Rocket, PackageCheck, BarChart2, CheckCircle, ArrowUpRight } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    titulo: "Grupo no WhatsApp",
    descricao: "Criamos um grupo exclusivo com todo o time: Gestor de Tráfego, Designer, Copy, Editor e Suporte Operacional.",
  },
  {
    icon: FileText,
    titulo: "Formulário de onboarding",
    descricao: "Enviamos um formulário simples para coletar todas as informações necessárias sobre você e seu consultório.",
  },
  {
    icon: CheckCircle,
    titulo: "Você preenche o formulário",
    descricao: "Rápido e direto. Tudo o que precisamos para personalizar seu projeto com precisão.",
  },
  {
    icon: Calendar,
    titulo: "1ª Reunião agendada",
    descricao: "Agendamos o onboarding com seu Gestor de Tráfego — o principal ponto de contato em todo o projeto.",
  },
  {
    icon: Users,
    titulo: "Reunião de alinhamento",
    descricao: "Coletamos seus acessos e validamos todas as informações. Do onboarding ao primeiro entregável, você sabe exatamente o que esperar.",
  },
  {
    icon: Rocket,
    titulo: "Mão na massa",
    descricao: "Execução completa do projeto em até 1 mês. O time trabalha, você acompanha pelo WhatsApp.",
  },
  {
    icon: PackageCheck,
    titulo: "Entrega do projeto",
    descricao: "Você recebe tudo pronto: Landing Page publicada, Ficha Google Meu Negócio configurada, Ensaio ART.IA e o Manual de Sobrevivência do Marketing Médico.",
  },
];

export default function ComoFunciona() {
  return (
    <section className="relative py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#006C60]/8 blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#01FEC2] text-sm font-semibold tracking-widest uppercase">Como funciona</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Do pagamento à{" "}
            <span className="text-gradient">entrega em 7 etapas</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Processo estruturado para que você tenha clareza total em cada fase do projeto.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha vertical sólida (passos 1–7) */}
          <div className="absolute left-6 top-0 w-px bg-gradient-to-b from-[#01FEC2]/40 via-[#01FEC2]/20 to-[#01FEC2]/10 md:left-8" style={{ height: "calc(100% - 120px)" }} />
          {/* Linha pontilhada (passo 8 — upsell) */}
          <div
            className="absolute left-6 bottom-0 w-px md:left-8"
            style={{
              height: "120px",
              backgroundImage: "repeating-linear-gradient(to bottom, rgba(1,254,194,0.25) 0px, rgba(1,254,194,0.25) 6px, transparent 6px, transparent 12px)",
            }}
          />

          <div className="space-y-8">
            {/* Passos normais 01–07 */}
            {steps.map((step, i) => (
              <motion.div
                key={step.titulo}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex gap-6 md:gap-8 pl-16 md:pl-20"
              >
                {/* Ícone no círculo */}
                <div className="absolute left-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1a1d1d] border border-[#2a2e2e] flex items-center justify-center flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#01FEC2]/10 flex items-center justify-center">
                    <step.icon className="w-4 h-4 text-[#01FEC2]" />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="bg-[#1a1d1d] border border-[#2a2e2e] rounded-xl p-5 flex-1 hover:border-[#01FEC2]/20 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#01FEC2]/40 text-xs font-mono">0{i + 1}</span>
                    <h3 className="font-semibold text-white">{step.titulo}</h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{step.descricao}</p>
                </div>
              </motion.div>
            ))}

            {/* Passo 08 — Acompanhamento contínuo (upsell, visual pontilhado) */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: steps.length * 0.08 }}
              className="relative flex gap-6 md:gap-8 pl-16 md:pl-20"
            >
              {/* Ícone no círculo — opaco */}
              <div className="absolute left-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1a1d1d] border border-dashed border-[#2a2e2e] flex items-center justify-center flex-shrink-0 opacity-50">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <BarChart2 className="w-4 h-4 text-white/30" />
                </div>
              </div>

              {/* Card pontilhado */}
              <div className="flex-1 rounded-xl p-5 border border-dashed border-[#2a2e2e] bg-[#1a1d1d]/50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-white/20 text-xs font-mono">08</span>
                    <h3 className="font-semibold text-white/40">Acompanhamento contínuo</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#01FEC2]/70 bg-[#01FEC2]/8 border border-[#01FEC2]/20 px-2.5 py-1 rounded-full whitespace-nowrap self-start">
                    Disponível nos planos de recorrência
                  </span>
                </div>
                <p className="text-white/25 text-sm leading-relaxed">
                  O time acompanha mensalmente as diretrizes do Google e atualiza sua Ficha Google Meu Negócio conforme necessário — garantindo que você continue bem ranqueado na busca orgânica sem precisar se preocupar com nada.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* WhatsApp note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-white/40 text-sm flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4 text-[#01FEC2]" />
            Canal principal de comunicação: <span className="text-white/60 font-medium">WhatsApp</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
