"use client";

import { motion } from "framer-motion";
import { Globe, MapPin, Camera, BookOpen, ArrowUpRight, Search, Instagram } from "lucide-react";

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
            5 entregáveis que constroem sua{" "}
            <span className="text-gradient">presença do zero</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Card grande — LP */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="md:col-span-2 relative bg-[#1a1d1d] border border-[#01FEC2]/25 rounded-3xl p-8 md:p-10 overflow-hidden group transition-all duration-300"
            style={{ boxShadow: "0 0 60px rgba(1,254,194,0.06)" }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#01FEC2]/5 blur-[60px] group-hover:bg-[#01FEC2]/10 transition-colors duration-500" />

            <div className="flex items-start gap-8">
              {/* Conteúdo */}
              <div className="flex-1 min-w-0">
                <span className="text-7xl font-bold text-white/3 absolute top-6 right-8 select-none hidden lg:block">01</span>

                <div className="w-14 h-14 rounded-2xl bg-[#01FEC2]/10 flex items-center justify-center mb-6 group-hover:bg-[#01FEC2]/20 transition-colors">
                  <Globe className="w-7 h-7 text-[#01FEC2]" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-3">Landing Page de Vendas</h3>
                <p className="text-white/50 leading-relaxed max-w-sm mb-6">
                  Página profissional com copywriting médico, design premium e foco total em conversão. Hospedada no domínio GrowDoc.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Design premium", "Copy médico", "Hospedagem inclusa"].map((tag) => (
                    <span key={tag} className="text-xs text-[#01FEC2]/80 bg-[#01FEC2]/8 border border-[#01FEC2]/15 px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Browser mockup — visível só em lg+ */}
              <motion.div
                className="hidden lg:flex flex-col flex-shrink-0 w-52"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                  style={{ boxShadow: "0 16px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(1,254,194,0.08)" }}
                >
                  {/* Barra do browser */}
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

                  {/* Conteúdo simulado da LP */}
                  <div className="bg-[#0a0d0d] p-4 space-y-2.5">
                    {/* Hero simulado */}
                    <div className="h-2 bg-[#01FEC2]/20 rounded-full w-3/4" />
                    <div className="h-1.5 bg-white/6 rounded-full w-full" />
                    <div className="h-1.5 bg-white/6 rounded-full w-5/6" />
                    <div className="h-1.5 bg-white/6 rounded-full w-2/3" />
                    {/* CTA simulado */}
                    <div className="mt-2 h-7 bg-[#01FEC2]/18 border border-[#01FEC2]/20 rounded-full flex items-center justify-center w-3/5">
                      <div className="h-1.5 bg-[#01FEC2]/50 rounded-full w-2/3" />
                    </div>
                    {/* Divisor */}
                    <div className="h-px bg-white/4 my-1" />
                    {/* Avatar + texto simulado */}
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#01FEC2]/10 flex-shrink-0" />
                      <div className="flex-1 space-y-1">
                        <div className="h-1.5 bg-white/8 rounded-full w-full" />
                        <div className="h-1.5 bg-white/5 rounded-full w-4/6" />
                      </div>
                    </div>
                    {/* Mais blocos */}
                    <div className="h-1.5 bg-white/4 rounded-full w-full" />
                    <div className="h-1.5 bg-white/4 rounded-full w-5/6" />
                  </div>
                </div>

                <p className="text-center text-white/20 text-[9px] mt-2 font-mono tracking-wider">preview</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Ficha Google */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="relative bg-[#1a1d1d] border border-[#2a2e2e] hover:border-[#01FEC2]/20 rounded-3xl p-7 overflow-hidden group transition-all duration-300"
          >
            <Search className="w-20 h-20 text-white/3 absolute bottom-3 right-3 group-hover:text-white/5 transition-colors" />
            <span className="text-7xl font-bold text-white/3 absolute top-4 right-6 select-none">02</span>

            <div className="w-12 h-12 rounded-xl bg-[#01FEC2]/10 flex items-center justify-center mb-5 group-hover:bg-[#01FEC2]/15 transition-colors">
              <MapPin className="w-6 h-6 text-[#01FEC2]" />
            </div>

            <h3 className="text-xl font-bold mb-2">Ficha Google Meu Negócio</h3>
            <p className="text-white/45 text-sm leading-relaxed mb-4">
              Palavras-chave específicas para SEO — busca orgânica, sem pagar por clique.
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              {["SEO local", "Busca orgânica"].map((tag) => (
                <span key={tag} className="text-xs text-[#01FEC2]/70 bg-[#01FEC2]/6 border border-[#01FEC2]/12 px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-1 text-white/25 text-xs">
              <ArrowUpRight className="w-3 h-3" />
              Atualizações recorrentes nos planos de recorrência
            </div>
          </motion.div>

          {/* Ensaio ART.IA */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="relative bg-[#1a1d1d] border border-[#2a2e2e] hover:border-[#01FEC2]/20 rounded-3xl p-7 overflow-hidden group transition-all duration-300"
          >
            <span className="text-7xl font-bold text-white/3 absolute top-4 right-6 select-none">03</span>

            <div className="w-12 h-12 rounded-xl bg-[#01FEC2]/10 flex items-center justify-center mb-5 group-hover:bg-[#01FEC2]/15 transition-colors">
              <Camera className="w-6 h-6 text-[#01FEC2]" />
            </div>

            <h3 className="text-xl font-bold mb-2">Ensaio ART.IA</h3>
            <p className="text-white/45 text-sm leading-relaxed mb-4">
              5 fotos profissionais geradas com IA a partir de fotos do seu celular. Sem sair de casa.
            </p>

            <div className="flex flex-wrap gap-2">
              {["5 fotos", "Sem estúdio", "IA + arte"].map((tag) => (
                <span key={tag} className="text-xs text-[#01FEC2]/70 bg-[#01FEC2]/6 border border-[#01FEC2]/12 px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Posts Iniciais Instagram */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            whileHover={{ y: -6 }}
            className="md:col-span-2 relative bg-[#1a1d1d] border border-[#2a2e2e] hover:border-[#01FEC2]/20 rounded-3xl p-8 md:p-10 overflow-hidden group transition-all duration-300"
          >
            <div className="flex items-start gap-8">
              {/* Conteúdo */}
              <div className="flex-1 min-w-0">
                <span className="text-7xl font-bold text-white/3 absolute top-6 right-8 select-none hidden lg:block">04</span>

                <div className="w-12 h-12 rounded-xl bg-[#01FEC2]/10 flex items-center justify-center mb-5 group-hover:bg-[#01FEC2]/15 transition-colors">
                  <Instagram className="w-6 h-6 text-[#01FEC2]" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-3">3 Posts Iniciais para Instagram</h3>
                <p className="text-white/50 leading-relaxed max-w-sm mb-6">
                  3 conteúdos introdutórios para apresentar você ao seu público. Vídeo, estático ou carrossel — no formato que fizer mais sentido para você.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["3 posts", "Vídeo ou estático", "Copy inclusa"].map((tag) => (
                    <span key={tag} className="text-xs text-[#01FEC2]/80 bg-[#01FEC2]/8 border border-[#01FEC2]/15 px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Phone mockup Instagram — visível só em lg+ */}
              <motion.div
                className="hidden lg:flex flex-col flex-shrink-0 w-48"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div
                  className="rounded-2xl overflow-hidden border border-white/10"
                  style={{ boxShadow: "0 16px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(1,254,194,0.08)" }}
                >
                  {/* Header Instagram */}
                  <div className="bg-[#0d1010] px-3 py-2.5 flex items-center gap-2 border-b border-white/5">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#01FEC2]/40 to-[#006C60]/60 flex-shrink-0" />
                    <span className="text-white/30 text-[9px] font-mono flex-1">dr.seunome</span>
                    <div className="w-3 h-3 rounded-sm bg-white/10" />
                  </div>

                  {/* Grid 3x3 simulando posts */}
                  <div className="bg-[#0a0d0d] p-0.5 grid grid-cols-3 gap-0.5">
                    {[
                      "bg-gradient-to-br from-[#01FEC2]/20 to-[#006C60]/30",
                      "bg-gradient-to-br from-[#006C60]/25 to-[#01FEC2]/10",
                      "bg-gradient-to-br from-[#01FEC2]/15 to-[#008879]/20",
                      "bg-gradient-to-br from-[#008879]/20 to-[#01FEC2]/15",
                      "bg-gradient-to-br from-[#01FEC2]/25 to-[#006C60]/20",
                      "bg-gradient-to-br from-[#006C60]/30 to-[#01FEC2]/10",
                      "bg-gradient-to-br from-[#01FEC2]/10 to-[#00B3A0]/20",
                      "bg-gradient-to-br from-[#00B3A0]/20 to-[#01FEC2]/15",
                      "bg-gradient-to-br from-[#01FEC2]/20 to-[#008879]/25",
                    ].map((cls, i) => (
                      <div key={i} className={`aspect-square ${cls} relative`}>
                        {i === 0 && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full border-2 border-[#01FEC2]/40 flex items-center justify-center">
                              <div className="w-0 h-0 border-t-[4px] border-b-[4px] border-l-[6px] border-transparent border-l-[#01FEC2]/60 ml-0.5" />
                            </div>
                          </div>
                        )}
                        {i === 4 && (
                          <div className="absolute bottom-1 right-1">
                            <div className="w-3 h-1 bg-[#01FEC2]/30 rounded-full" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="bg-[#0d1010] px-3 py-2 flex items-center justify-between border-t border-white/5">
                    <div className="flex gap-3">
                      <div className="w-4 h-4 rounded-sm bg-white/8" />
                      <div className="w-4 h-4 rounded-sm bg-white/8" />
                      <div className="w-4 h-4 rounded-sm bg-white/8" />
                    </div>
                    <div className="w-4 h-4 rounded-sm bg-white/8" />
                  </div>
                </div>
                <p className="text-center text-white/20 text-[9px] mt-2 font-mono tracking-wider">preview</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Plataforma */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="md:col-span-3 relative bg-[#1a1d1d] border border-[#2a2e2e] hover:border-[#01FEC2]/20 rounded-3xl p-7 overflow-hidden group transition-all duration-300"
          >
            <span className="text-7xl font-bold text-white/3 absolute top-4 right-8 select-none">05</span>

            {/* Mini capa de livro com branding GrowDoc */}
            <div className="mb-5 relative w-12 h-14 flex-shrink-0">
              <div className="absolute left-0 top-0 w-2.5 h-full rounded-l-sm bg-[#006C60]" />
              <div className="absolute left-2 top-0 right-0 h-full rounded-r-md bg-gradient-to-br from-[#008879] to-[#006C60] flex flex-col items-center justify-center gap-1 overflow-hidden shadow-lg group-hover:from-[#01FEC2]/80 group-hover:to-[#008879] transition-all duration-300">
                <img src="/images/logo-white.png" alt="GrowDoc" className="w-6 object-contain opacity-90" />
                <div className="flex flex-col gap-0.5 w-5 mt-0.5">
                  <div className="h-px bg-white/40 rounded-full w-full" />
                  <div className="h-px bg-white/25 rounded-full w-3/4" />
                  <div className="h-px bg-white/25 rounded-full w-full" />
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2">Manual de Sobrevivência do Marketing Médico</h3>
            <p className="text-white/45 text-sm leading-relaxed mb-4 max-w-md">
              Livro digital exclusivo GrowDoc com tudo que o médico precisa saber sobre marketing na saúde. Disponível para consumo enquanto a assinatura estiver ativa.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Livro digital", "Marketing médico", "Para médicos"].map((tag) => (
                <span key={tag} className="text-xs text-[#01FEC2]/70 bg-[#01FEC2]/6 border border-[#01FEC2]/12 px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
