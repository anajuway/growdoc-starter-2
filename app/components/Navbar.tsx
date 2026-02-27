"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
    >
      {/* Fundo glassmorphism que aparece ao scrollar */}
      <motion.div
        className="absolute inset-0 -z-10 border-b border-white/5 backdrop-blur-md"
        style={{
          backgroundColor: "rgba(19, 21, 21, 0.96)",
          opacity: bgOpacity,
        }}
      />

      <Image
        src="/images/logo-navbar.png"
        alt="GrowDoc"
        width={180}
        height={48}
        className="h-10 w-auto"
      />
      <a
        href="/termos"
        className="hidden md:inline-flex items-center gap-2 bg-[#01FEC2] text-[#131515] font-semibold text-sm px-5 py-2.5 rounded-full hover:brightness-110 transition-all"
      >
        Quero começar agora
      </a>
    </motion.nav>
  );
}
