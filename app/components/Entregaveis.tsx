"use client";

import { motion } from "framer-motion";
import { Globe, ExternalLink, Smartphone, Search, Shield, Zap } from "lucide-react";

const features = [
  { icon: Smartphone, title: "Design responsivo", desc: "Funciona perfeitamente em celular, tablet e computador." },
  { icon: Search, title: "SEO otimizado", desc: "Estrutura técnica pensada para ranquear no Google desde o primeiro dia." },
  { icon: Shield, title: "Passa autoridade", desc: "Visual premium que transmite credibilidade antes mesmo de o paciente ler uma linha." },
  { icon: Zap, title: "Carregamento rápido", desc: "Performance otimizada para não perder visitas por lentidão." },
];

export default function Entregaveis() {
  return (
    <section className="relative py-16 md:py-28 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#006C60]/6 blur-[130px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <span className="text-[#01FEC2] text-sm font-semibold tracking-widest uppercase">O que você recebe</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight max-w-xl">
            Um site institucional que{" "}
            <span className="text-gradient">fala por você</span>
          </h2>
        </motion.div>

        {/* Card principal — destaque total */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -6 }}
          className="relative bg-[#1a1d1d] border border-[#01FEC2]/25 rounded-3xl p-8 md:p-12 overflow-hidden group mb-4"
          style={{ boxShadow: "0 0 60px rgba(1,254,194,0.06)" }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#01FEC2]/5 blur-[80px] group-hover:bg-[#01FEC2]/10 transition-colors duration-500" />
          <span className="text-8xl font-bold text-white/3 absolute top-6 right-8 select-none hidden lg:block">01</span>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Conteúdo */}
            <div className="flex-1 min-w-0">
              <div className="w-14 h-14 rounded-2xl bg-[#01FEC2]/10 flex items-center justify-center mb-6 group-hover:bg-[#01FEC2]/20 transition-colors">
                <Globe className="w-7 h-7 text-[#01FEC2]" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-3">Site Institucional Médico</h3>
              <p className="text-white/50 leading-relaxed max-w-lg mb-6">
                Desenvolvemos do zero um site completo e profissional para apresentar você, sua especialidade,
                sua trajetória e seu consultório. Uma vitrine digital que trabalha por você 24h por dia.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Design premium", "Copywriting médico", "Hospedagem inclusa", "Domínio GrowDoc"].map((tag) => (
                  <span key={tag} className="text-xs text-[#01FEC2]/80 bg-[#01FEC2]/8 border border-[#01FEC2]/15 px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://romolo.growdoc.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#01FEC2]/70 hover:text-[#01FEC2] transition-colors border border-[#01FEC2]/15 hover:border-[#01FEC2]/40 rounded-full px-4 py-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  romolo.growdoc.com.br
                </a>
                <a
                  href="https://drjosealfredo.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#01FEC2]/70 hover:text-[#01FEC2] transition-colors border border-[#01FEC2]/15 hover:border-[#01FEC2]/40 rounded-full px-4 py-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  drjosealfredo.com.br
                </a>
              </div>
            </div>

            {/* Browser mockup */}
            <motion.div
              className="hidden lg:flex flex-col flex-shrink-0 w-64"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                className="rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                style={{ boxShadow: "0 16px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(1,254,194,0.08)" }}
              >
                <div className="bg-[#0d1010] px-3 py-2.5 flex items-center gap-2 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff6b6b]/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffd93d]/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#6bcb77]/50" />
                  </div>
                  <div className="flex-1 bg-white/5 rounded px-2 py-0.5">
                    <span className="text-white/25 text-[8px] font-mono">drseunome.growdoc.com.br</span>
                  </div>
                </div>
                <div className="bg-[#0a0d0d] p-4 space-y-3">
                  {/* Nav simulada */}
                  <div className="flex justify-between items-center mb-2">
                    <div className="h-2 bg-[#01FEC2]/30 rounded-full w-16" />
                    <div className="flex gap-2">
                      <div className="h-1.5 bg-white/8 rounded-full w-8" />
                      <div className="h-1.5 bg-white/8 rounded-full w-10" />
                      <div className="h-1.5 bg-white/8 rounded-full w-8" />
                    </div>
                  </div>
                  {/* Hero com foto */}
                  <div className="flex gap-2 items-center">
                    <div className="w-12 h-16 rounded-lg bg-gradient-to-b from-[#01FEC2]/15 to-[#006C60]/20 flex-shrink-0" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-2 bg-[#01FEC2]/20 rounded-full w-3/4" />
                      <div className="h-1.5 bg-white/6 rounded-full w-full" />
                      <div className="h-1.5 bg-white/6 rounded-full w-5/6" />
                      <div className="h-1.5 bg-white/6 rounded-full w-2/3" />
                      <div className="mt-1 h-5 bg-[#01FEC2]/18 border border-[#01FEC2]/20 rounded-full flex items-center px-2 w-3/4">
                        <div className="h-1.5 bg-[#01FEC2]/50 rounded-full w-2/3" />
                      </div>
                    </div>
                  </div>
                  {/* Seção sobre */}
                  <div className="h-px bg-white/4 my-1" />
                  <div className="space-y-1">
                    <div className="h-1.5 bg-white/8 rounded-full w-2/5" />
                    <div className="h-1.5 bg-white/5 rounded-full w-full" />
                    <div className="h-1.5 bg-white/5 rounded-full w-5/6" />
                    <div className="h-1.5 bg-white/5 rounded-full w-4/6" />
                  </div>
                  {/* Cards especialidades */}
                  <div className="flex gap-1.5 mt-1">
                    {[1,2,3].map(i => (
                      <div key={i} className="flex-1 h-8 rounded-lg bg-[#01FEC2]/6 border border-[#01FEC2]/10" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-center text-white/20 text-[9px] mt-2 font-mono tracking-wider">preview</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-[#1a1d1d] border border-[#2a2e2e] hover:border-[#01FEC2]/20 rounded-2xl p-5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#01FEC2]/8 flex items-center justify-center mb-3">
                <f.icon className="w-5 h-5 text-[#01FEC2]" />
              </div>
              <h4 className="font-semibold text-sm mb-1">{f.title}</h4>
              <p className="text-white/40 text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
