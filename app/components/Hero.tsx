"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const CHECKOUT_URL = "/termos";

const words = ["Sua", "presença", "digital,", "do", "zero", "ao", "profissional."];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#01FEC2] blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.06, 0.03, 0.06] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#006C60] blur-[120px]"
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#01FEC2 1px, transparent 1px), linear-gradient(90deg, #01FEC2 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 flex flex-col items-center text-center px-6 pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 border border-[#01FEC2]/25 rounded-full px-5 py-2 text-sm text-[#01FEC2]/80 bg-[#01FEC2]/5 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#01FEC2] animate-pulse" />
          Sua Parceria de Marketing Médico
        </motion.div>

        {/* Headline — palavra por palavra */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-5xl mb-6">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className={`inline-block mr-4 ${i >= 4 ? "text-gradient" : ""}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed mb-10"
        >
          Landing page, ficha no Google otimizada para SEO, ensaio fotográfico com IA,
          posts iniciais para o Instagram e plataforma exclusiva — tudo em 1 mês.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          <motion.a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: "0 0 60px rgba(1,254,194,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-[#01FEC2] text-[#131515] font-bold text-base md:text-lg px-8 py-4 rounded-full transition-all"
          >
            Quero começar agora
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Trust */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-14 flex flex-wrap justify-center gap-8 text-sm text-white/30"
        >
          {["Time especializado em médicos", "Entrega em até 1 mês", "Proposta válida por 5 dias"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="text-[#01FEC2]">✓</span> {item}
            </span>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border border-white/10 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-[#01FEC2]/60" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
