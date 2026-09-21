"use client";

import { motion } from "motion/react";

export function Bento() {
  return (
    <section id="recursos" className="w-full py-32 bg-black flex flex-col items-center overflow-hidden">
      <div className="mx-auto w-full max-w-[90rem] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans tracking-tighter leading-[1.1] text-white drop-shadow-md">
            Projetado para precisão. Por dentro e por fora.
          </h2>
          <p className="mt-6 text-xl text-zinc-400">
            Cada componente foi desenvolvido com um propósito: entregar desempenho de nível comercial na sua cozinha.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden bg-black flex items-center justify-center border border-white/5"
        >
          <img
            src="/exploded.jpg"
            alt="Exploded view of Vitamix Ascent X5"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
