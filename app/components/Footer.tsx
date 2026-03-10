"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CHECKOUT_URL = "/termos";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#0a0d0d]" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#01FEC2] blur-[130px]"
          />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "linear-gradient(#01FEC2 1px, transparent 1px), linear-gradient(90deg, #01FEC2 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Pronto para{" "}
            <span className="text-gradient">crescer?</span>
          </h2>

          <p className="text-white/40 text-lg md:text-xl mb-12 leading-relaxed">
            Seu site institucional profissional começa agora.
            <br />Não deixe para depois.
          </p>

          <motion.a
            href={CHECKOUT_URL}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            animate={{
              boxShadow: [
                "0 0 30px rgba(1,254,194,0.15)",
                "0 0 80px rgba(1,254,194,0.45)",
                "0 0 30px rgba(1,254,194,0.15)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-3 bg-[#01FEC2] text-[#131515] font-bold text-xl px-12 py-5 rounded-full"
          >
            Quero meu site agora
            <ArrowRight className="w-6 h-6" />
          </motion.a>

          <p className="mt-6 text-white/20 text-sm">
            R$1.500 · Pagamento único · Entrega em até 1 mês
          </p>
        </motion.div>
      </div>

      <div className="border-t border-white/5 px-6 py-8 md:px-12 bg-[#0a0d0d]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src="/images/logo-navbar.png" alt="GrowDoc" width={160} height={44} className="h-9 w-auto" />
          <motion.p
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-white/30 text-sm tracking-[0.3em] font-bold uppercase"
          >
            Grow or Die
          </motion.p>
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} GrowDoc · Sua Parceria de Marketing Médico
          </p>
        </div>
      </div>
    </footer>
  );
}
