"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CHECKOUT_URL = "/termos";

const depoimentos = [
  { nome: "Dr. Carlos Trindade", especialidade: "Medicina da Dor", texto: "Gosto da proatividade e da tentativa de resolver os problemas com comprometimento." },
  { nome: "Dra. Aline Ribeiro", especialidade: "Cirurgia Plástica", texto: "Estamos com 6 agendamentos no total e uma conversão de 13%." },
  { nome: "Dr. Fabiano Winckler", especialidade: "Nutrologia", texto: "Essa semana foram mais de 15 solicitações de exames para consulta." },
  { nome: "Dr. Romollo Pelegrino", especialidade: "Cirurgia Vascular", texto: "Praticamente uma semana de campanha ativa e já conseguimos 2 agendamentos." },
  { nome: "Dr. Samuel Cagnolati", especialidade: "Psiquiatria", texto: "Consegui 3 pacientes já na primeira semana. O retorno foi imediato." },
  { nome: "Dra. Giovanna Cabral", especialidade: "Dermatologia", texto: "A equipe é muito atenciosa e realmente entende do marketing médico." },
  { nome: "Dr. Gustavo Coelho", especialidade: "Cirurgia Plástica", texto: "Qualidade excepcional no material produzido." },
  { nome: "Dra. Marcela Salles", especialidade: "Psiquiatria", texto: "Aumentei em 40% o número de consultas em dois meses." },
  { nome: "Dr. Roberto Souza", especialidade: "Ortopedia", texto: "Profissionalismo e dedicação em cada etapa do projeto." },
  { nome: "Dra. Jibse Marchioro", especialidade: "Medicina Estética", texto: "Retorno sobre investimento muito superior ao esperado." },
  { nome: "Dr. Benjamin Rodrigues", especialidade: "Cardiologia", texto: "Estratégia clara e resultados mensuráveis desde o início." },
  { nome: "Pedro Neviani", especialidade: "Fisioterapia", texto: "Consegui preencher a agenda em apenas 3 semanas." },
];

function ScrollRow({ items, direction = "left", duration = 30 }: { items: typeof depoimentos; direction?: "left" | "right"; duration?: number }) {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          x: {
            duration,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((depoimento, i) => (
          <div
            key={`${depoimento.nome}-${i}`}
            className="flex-shrink-0 w-[320px] md:w-[380px] bg-[#1a1d1d] border border-[#2a2e2e] rounded-2xl p-6 hover:border-[#01FEC2]/20 transition-colors"
          >
            <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
              &ldquo;{depoimento.texto}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#01FEC2]/10 flex items-center justify-center">
                <span className="text-[#01FEC2] text-sm font-bold">
                  {depoimento.nome.split(" ")[1]?.[0] || depoimento.nome[0]}
                </span>
              </div>
              <div>
                <p className="text-white text-sm font-medium">{depoimento.nome}</p>
                <p className="text-white/40 text-xs">{depoimento.especialidade}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function WallOfLove() {
  const row1 = depoimentos.slice(0, 6);
  const row2 = depoimentos.slice(6, 12);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradiente de entrada — funde com a seção anterior */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#131515] to-transparent z-10 pointer-events-none" />
      {/* Gradiente de saída — funde com a Proposta */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#131515] to-transparent z-10 pointer-events-none" />

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0d1010]" />
        <motion.div
          animate={{ opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#01FEC2] blur-[150px]"
        />
      </div>

      {/* Header */}
      <div className="px-6 md:px-12 max-w-4xl mx-auto mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 text-white/40 text-sm mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#01FEC2] animate-pulse" />
            Ainda tem dúvidas?
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient">Ainda não está</span>
            <br />
            convencido?
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Veja o que nossos médicos dizem sobre a GrowDoc.
            <span className="block text-[#01FEC2]/60 mt-2">(spoiler: eles amaram)</span>
          </p>
        </motion.div>
      </div>

      {/* Fileira 1 — vai para esquerda */}
      <div className="mb-4">
        <ScrollRow items={row1} direction="left" duration={40} />
      </div>

      {/* Fileira 2 — vai para direita */}
      <div className="mb-16">
        <ScrollRow items={row2} direction="right" duration={45} />
      </div>

      {/* CTA final */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center px-6"
      >
        <p className="text-white/30 text-sm mb-4">Já viu o suficiente?</p>
        <motion.a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, boxShadow: "0 0 60px rgba(1,254,194,0.4)" }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 bg-[#01FEC2] text-[#131515] font-bold text-lg px-10 py-5 rounded-full"
        >
          Quero começar agora
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
