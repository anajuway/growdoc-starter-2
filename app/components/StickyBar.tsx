"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const CHECKOUT_URL = "/termos";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const nearBottom = scrollY + windowHeight >= docHeight - 240;

      setVisible(scrollY > windowHeight * 0.8 && !nearBottom);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="sticky-bar"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-4 left-0 right-0 z-50 px-4"
        >
          <div
            className="max-w-sm mx-auto bg-[#1a1d1d]/90 backdrop-blur-xl border border-[#01FEC2]/20 rounded-2xl px-4 py-3 flex items-center justify-center"
            style={{ boxShadow: "0 8px 60px rgba(1,254,194,0.10), 0 2px 20px rgba(0,0,0,0.6)" }}
          >
            <motion.a
              href={CHECKOUT_URL}
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(1,254,194,0.35)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-[#01FEC2] text-[#131515] font-bold text-sm px-6 py-2.5 rounded-full whitespace-nowrap"
            >
              Quero começar agora
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
