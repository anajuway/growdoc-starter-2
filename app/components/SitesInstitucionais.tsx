"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Globe } from "lucide-react";

const sites = [
  {
    nome: "Dr. Rômolo Pellegrino",
    especialidade: "Cirurgia Vascular",
    url: "https://romolo.growdoc.com.br/",
    dominio: "romolo.growdoc.com.br",
    img: "/sites/romolo.png",
  },
  {
    nome: "Dr. José Alfredo",
    especialidade: "Cirurgia Digestiva e Obesidade",
    url: "https://drjosealfredo.com.br/",
    dominio: "drjosealfredo.com.br",
    img: "/sites/josealfredo.png",
  },
];

function BrowserMockup({ dominio, img, nome }: { dominio: string; img: string; nome: string }) {
  return (
    <div
      className="rounded-xl overflow-hidden border border-white/10 w-full"
      style={{ boxShadow: "0 16px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(1,254,194,0.06)" }}
    >
      {/* Barra do browser */}
      <div className="bg-[#0d1010] px-3 py-2.5 flex items-center gap-2 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff6b6b]/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffd93d]/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#6bcb77]/50" />
        </div>
        <div className="flex-1 bg-white/5 rounded px-2.5 py-1 flex items-center gap-1.5">
          <Globe className="w-2.5 h-2.5 text-white/20 flex-shrink-0" />
          <span className="text-white/30 text-[9px] font-mono truncate">{dominio}</span>
        </div>
      </div>

      {/* Screenshot real */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={img}
          alt={nome}
          fill
          className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
        />
        {/* Overlay sutil no hover */}
        <div className="absolute inset-0 bg-[#01FEC2]/0 group-hover:bg-[#01FEC2]/5 transition-colors duration-300" />
      </div>
    </div>
  );
}

export default function SitesInstitucionais() {
  return (
    <section className="relative py-28 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#01FEC2]/3 blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-[#01FEC2] text-sm font-semibold tracking-widest uppercase">Sites que já construímos</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Exemplos{" "}
            <span className="text-gradient">reais</span>
          </h2>
          <p className="mt-4 text-white/40 text-base max-w-md mx-auto">
            Veja dois sites institucionais que desenvolvemos. Clique para visitar.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sites.map((site, i) => (
            <motion.a
              key={site.url}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#1a1d1d] border border-[#2a2e2e] hover:border-[#01FEC2]/30 rounded-3xl p-5 overflow-hidden transition-all duration-300 block"
            >
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#01FEC2]/0 group-hover:bg-[#01FEC2]/4 blur-[60px] transition-all duration-500 pointer-events-none" />

              {/* Browser mockup com screenshot */}
              <div className="mb-4">
                <BrowserMockup dominio={site.dominio} img={site.img} nome={site.nome} />
              </div>

              {/* Info */}
              <div className="flex items-center justify-between pt-1">
                <div>
                  <p className="font-semibold text-white">{site.nome}</p>
                  <p className="text-white/35 text-sm mt-0.5">{site.especialidade}</p>
                </div>
                <div className="flex items-center gap-2 text-[#01FEC2]/40 group-hover:text-[#01FEC2] transition-colors">
                  <span className="hidden sm:inline text-xs font-mono text-white/20 group-hover:text-[#01FEC2]/60 transition-colors">{site.dominio}</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
