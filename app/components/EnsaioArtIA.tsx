"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const fotosAntes = Array.from({ length: 10 }, (_, i) => ({
  src: `/images/ensaio/antes-${i + 1}.jpg`,
  alt: `Foto bruta ${i + 1}`,
}));

const fotosDepois = [
  { src: "/images/ensaio/ensaio-2.png", alt: "Ensaio ART.IA 2" },
  { src: "/images/ensaio/ensaio-3.png", alt: "Ensaio ART.IA 3" },
  { src: "/images/ensaio/ensaio-4.png", alt: "Ensaio ART.IA 4" },
  { src: "/images/ensaio/ensaio-5.png", alt: "Ensaio ART.IA 5" },
  { src: "/images/ensaio/ensaio-6.png", alt: "Ensaio ART.IA 6" },
  { src: "/images/ensaio/ensaio-7.png", alt: "Ensaio ART.IA 7" },
  { src: "/images/ensaio/ensaio-8.png", alt: "Ensaio ART.IA 8" },
  { src: "/images/ensaio/ensaio-9.png", alt: "Ensaio ART.IA 9" },
  { src: "/images/ensaio/ensaio-10.png", alt: "Ensaio ART.IA 10" },
];

function ScrollGallery({
  fotos,
  grayscale = false,
}: {
  fotos: { src: string; alt: string }[];
  grayscale?: boolean;
}) {
  return (
    <div
      className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {fotos.map((foto, i) => (
        <motion.div
          key={foto.src}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          whileHover={{ scale: 1.03, zIndex: 10 }}
          className={`relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[3/4] rounded-2xl overflow-hidden snap-start border transition-colors duration-300 ${
            grayscale
              ? "border-white/5 hover:border-white/15"
              : "border-[#01FEC2]/10 hover:border-[#01FEC2]/40"
          }`}
        >
          <Image
            src={foto.src}
            alt={foto.alt}
            fill
            className={`object-cover object-top ${grayscale ? "grayscale opacity-60" : ""}`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${grayscale ? "from-black/50" : "from-black/20"} to-transparent`} />
          {!grayscale && (
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-[#01FEC2]/5"
            />
          )}
          <div className={`absolute bottom-3 right-3 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded-full ${
            grayscale ? "bg-white/10 text-white/50" : "bg-black/60 text-[#01FEC2]"
          }`}>
            {String(i + 1).padStart(2, "0")}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function EnsaioArtIA() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Fundo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0d1010]" />
        <motion.div
          animate={{ opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#01FEC2] blur-[150px]"
        />
      </div>

      {/* Header */}
      <div className="px-6 md:px-12 max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 text-[#01FEC2] text-sm font-semibold tracking-widest uppercase">
            <Sparkles className="w-4 h-4" />
            Ensaio ART.IA
            <Sparkles className="w-4 h-4" />
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            Fotos de estúdio.
            <br />
            <span className="text-gradient">Sem sair de casa.</span>
          </h2>
          <p className="mt-5 text-white/45 max-w-xl mx-auto text-lg leading-relaxed">
            Com fotos simples do celular, nosso time transforma em imagens
            dignas de campanha nacional — IA + toque humano de arte.
          </p>
        </motion.div>
      </div>

      {/* ANTES */}
      <div className="mb-3 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 flex items-center gap-3 max-w-6xl mx-auto"
        >
          <div className="h-px flex-1 bg-white/8" />
          <span className="text-white/30 text-xs font-semibold tracking-widest uppercase">
            Antes — fotos enviadas pelo celular
          </span>
          <div className="h-px flex-1 bg-white/8" />
        </motion.div>
        <ScrollGallery fotos={fotosAntes} grayscale />
        <p className="text-center text-white/20 text-xs mt-3">
          ← deslize para ver todas →
        </p>
      </div>

      {/* Seta de transformação */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true }}
        className="flex justify-center my-10"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-white/10 to-[#01FEC2]/50" />
          <div className="w-8 h-8 rounded-full bg-[#01FEC2]/10 border border-[#01FEC2]/30 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-[#01FEC2]" />
          </div>
          <div className="w-px h-12 bg-gradient-to-b from-[#01FEC2]/50 to-[#01FEC2]/20" />
        </div>
      </motion.div>

      {/* DEPOIS */}
      <div className="px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 flex items-center gap-3 max-w-6xl mx-auto"
        >
          <div className="h-px flex-1 bg-[#01FEC2]/15" />
          <span className="text-[#01FEC2] text-xs font-semibold tracking-widest uppercase flex items-center gap-2">
            <Sparkles className="w-3 h-3" />
            Depois — resultado com IA
          </span>
          <div className="h-px flex-1 bg-[#01FEC2]/15" />
        </motion.div>
        <ScrollGallery fotos={fotosDepois} />
        <p className="text-center text-white/20 text-xs mt-3">
          ← deslize para ver todas →
        </p>
      </div>

      {/* Stats */}
      <div className="mt-12 md:mt-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {[
            { valor: "7 dias", label: "prazo máximo de entrega" },
            { valor: "R$0", label: "sem custo de estúdio" },
            { valor: "∞", label: "satisfação garantida" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center bg-white/3 border border-white/5 rounded-2xl p-4 md:p-6"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.valor}</div>
              <div className="text-white/35 text-xs md:text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
