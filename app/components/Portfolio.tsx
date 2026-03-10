"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const paginas = [
  { nome: "ProPlástica", img: "/portfolio/proplastica.jpg" },
  { nome: "Dr. Rômolo Pellegrino", img: "/portfolio/romolo-pellegrino.jpg" },
  { nome: "Dr. Samuel Cagnolati", img: "/portfolio/samuel-cagnolati.jpg" },
  { nome: "Money Pause", img: "/portfolio/moneypause.jpg" },
  { nome: "Dr. Carlos Trindade", img: "/portfolio/carlos-trindade.jpg" },
  { nome: "Dr. Gustavo Coelho", img: "/portfolio/gustavo-coelho.jpg" },
  { nome: "Dra. Jibse Marchioro", img: "/portfolio/jibse-marchioro.jpg" },
  { nome: "Dr. Fabiano Winckler", img: "/portfolio/fabiano-winckler.jpg" },
  { nome: "Dr. Roberto Souza", img: "/portfolio/roberto-souza.jpg" },
  { nome: "Adriana Gomes", img: "/portfolio/adriana-gomes.jpg" },
  { nome: "Dra. Giovanna Cabral", img: "/portfolio/giovanna-cabral.jpg" },
  { nome: "Dra. Marcela Salles", img: "/portfolio/marcela-salles.jpg" },
  { nome: "Dra. Mônica Melo", img: "/portfolio/monica-melo.jpg" },
  { nome: "Dr. Benjamin Rodrigues", img: "/portfolio/benjamin-rodrigues.jpg" },
  { nome: "Pedro Neviani", img: "/portfolio/pedro-neviani.jpg" },
  { nome: "Juliana Barbi", img: "/portfolio/juliana-barbi.jpg" },
];

const row1 = paginas.slice(0, 8);
const row2 = paginas.slice(8, 16);

function ScrollRow({ items, onSelect }: { items: typeof paginas; onSelect: (item: typeof paginas[0]) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 rounded-full bg-[#1a1d1d] border border-[#2a2e2e] flex items-center justify-center text-white/60 hover:text-[#01FEC2] hover:border-[#01FEC2]/40 transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 rounded-full bg-[#1a1d1d] border border-[#2a2e2e] flex items-center justify-center text-white/60 hover:text-[#01FEC2] hover:border-[#01FEC2]/40 transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, i) => (
          <motion.button
            key={item.img}
            onClick={() => onSelect(item)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="relative flex-shrink-0 w-[240px] md:w-[280px] rounded-xl overflow-hidden snap-start border border-[#2a2e2e] hover:border-[#01FEC2]/40 transition-all duration-300 group cursor-pointer"
          >
            <div className="relative aspect-video bg-[#131515]">
              <Image
                src={item.img}
                alt={item.nome}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#131515]/0 group-hover:bg-[#131515]/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#01FEC2]/90 text-[#131515] text-xs font-bold px-3 py-1.5 rounded-full">
                  Ver capa
                </div>
              </div>
            </div>
            <div className="bg-[#1a1d1d] px-3 py-2.5 text-left">
              <p className="text-xs font-medium text-white/60 group-hover:text-white/90 transition-colors truncate">
                {item.nome}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [selected, setSelected] = useState<typeof paginas[0] | null>(null);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#01FEC2]/15 to-transparent" />

      <div className="px-6 md:px-12 max-w-6xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#01FEC2] text-sm font-semibold tracking-widest uppercase">Nosso portfólio</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Páginas que já{" "}
            <span className="text-gradient">construímos</span>
          </h2>
          <p className="mt-3 text-white/40 text-sm">
            Clique em qualquer página para expandir a capa.
          </p>
        </motion.div>
      </div>

      <div className="space-y-4 px-6 md:px-12">
        <ScrollRow items={row1} onSelect={setSelected} />
        <ScrollRow items={row2} onSelect={setSelected} />
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden border border-[#01FEC2]/20"
              style={{ boxShadow: "0 0 80px rgba(1,254,194,0.15)" }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="relative aspect-video w-full bg-[#131515]">
                <Image src={selected.img} alt={selected.nome} fill className="object-cover object-top" />
              </div>
              <div className="bg-[#1a1d1d] border-t border-[#2a2e2e] px-5 py-3 flex items-center justify-between">
                <p className="text-sm font-medium text-white/80">{selected.nome}</p>
                <span className="text-xs text-[#01FEC2]/60">GrowDoc</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
