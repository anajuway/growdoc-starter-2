"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useRef } from "react";

const depoimentos = [
  {
    nome: "Dra. Aline Ribeiro",
    especialidade: "Cirurgia Plástica",
    texto: "Estamos com 6 agendamentos no total e uma conversão de 13%.",
    iniciais: "AR",
    resultado: { prefix: "", value: 13, suffix: "% de conversão" },
    destaque: true,
  },
  {
    nome: "Dr. Romollo Pelegrino",
    especialidade: "Cirurgia Vascular",
    texto: "Praticamente uma semana de campanha ativa e já conseguimos 2 agendamentos.",
    iniciais: "RP",
    resultado: { prefix: "", value: 2, suffix: " agendamentos em 1 semana" },
    destaque: true,
  },
  {
    nome: "Dr. Fabiano Winckler",
    especialidade: "Nutrologia",
    texto: "Essa semana foram mais de 15 solicitações de exames para consulta.",
    iniciais: "FW",
    resultado: { prefix: "+", value: 15, suffix: " solicitações em 1 semana" },
    destaque: false,
  },
  {
    nome: "Dr. Carlos Trindade",
    especialidade: "Medicina da Dor",
    texto: "Gosto da proatividade e da tentativa de resolver os problemas com comprometimento.",
    iniciais: "CT",
    resultado: { prefix: "", value: null, suffix: "Comprometimento total" },
    destaque: false,
  },
];

function AnimatedNumber({ prefix, value, suffix }: { prefix: string; value: number | null; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView && value !== null) {
      const controls = animate(count, value, { duration: 1.4, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, count]);

  if (value === null) {
    return <span ref={ref}>{suffix}</span>;
  }

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Depoimentos() {
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
          <span className="text-[#01FEC2] text-sm font-semibold tracking-widest uppercase">Resultados reais</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Médicos que já{" "}
            <span className="text-gradient">cresceram com a GrowDoc</span>
          </h2>
        </motion.div>

        {/* Layout assimétrico tipo magazine */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {depoimentos.map((dep, i) => (
            <motion.div
              key={dep.nome}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-3xl p-8 overflow-hidden transition-all duration-300 ${
                dep.destaque
                  ? "bg-[#0f1a17] border border-[#01FEC2]/25 md:col-span-1"
                  : "bg-[#1a1d1d] border border-[#2a2e2e] hover:border-[#01FEC2]/15"
              }`}
            >
              {dep.destaque && (
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#01FEC2]/5 blur-[50px]" />
              )}

              <Quote className="w-8 h-8 text-[#01FEC2]/15 mb-4" />

              {/* Resultado animado */}
              <div className="mb-5">
                <span className="text-2xl md:text-3xl font-bold text-gradient leading-tight block mb-1">
                  <AnimatedNumber
                    prefix={dep.resultado.prefix}
                    value={dep.resultado.value}
                    suffix={dep.resultado.suffix}
                  />
                </span>
              </div>

              <blockquote className="text-white/65 leading-relaxed mb-6 text-base">
                &ldquo;{dep.texto}&rdquo;
              </blockquote>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${dep.destaque ? "bg-[#01FEC2]/15 border border-[#01FEC2]/25" : "bg-white/5 border border-white/10"}`}>
                  <span className={`text-xs font-bold ${dep.destaque ? "text-[#01FEC2]" : "text-white/50"}`}>
                    {dep.iniciais}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{dep.nome}</p>
                  <p className="text-white/35 text-xs">{dep.especialidade}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
