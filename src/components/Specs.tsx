"use client";

import { motion } from "motion/react";

const specs = [
  { label: "Dimensões", value: '9.75" × 7.75" × 17"', detail: "C × L × A" },
  { label: "Potência", value: "2.2 HP", detail: "Capacidade do motor" },
  { label: "Elétrica", value: "120V", detail: "1500W" },
  { label: "Capacidade", value: "48 oz", detail: "Recipiente livre de BPA" },
  { label: "Peso", value: "14.25 lbs", detail: "Construção robusta e sólida" },
  { label: "Cabo de Energia", value: "3.5 ft", detail: "Uso doméstico" },
];

export function Specs() {
  return (
    <section id="especificacoes" className="relative w-full py-24 px-6 bg-black overflow-hidden border-t border-zinc-900">
      {/* Background ambient video */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      >
        <video 
          src="/blades-spinning.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        {/* Subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
      </motion.div>

      <div className="mx-auto w-full max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-sans tracking-tight leading-tight text-white drop-shadow-md">
            Feito para durar.
          </h2>
          <p className="mt-4 text-lg text-zinc-300 drop-shadow-md">
            Potência e capacidade de nível profissional, na medida para sua cozinha.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col border-t border-zinc-800 pt-6"
            >
              <span className="text-sm font-medium text-zinc-500 mb-4 tracking-wide uppercase">
                {spec.label}
              </span>
              <span className="text-3xl md:text-4xl tracking-tight font-medium text-foreground mb-2">
                {spec.value}
              </span>
              <span className="text-sm text-zinc-400">
                {spec.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
