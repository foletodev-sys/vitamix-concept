"use client";

import { motion } from "motion/react";

export function SmoothieResult() {
  return (
    <section className="relative w-full py-32 bg-black flex flex-col items-center overflow-hidden border-t border-zinc-900">
      {/* Background ambient video */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      >
        <video 
          src="/smoothie-pour.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="mx-auto w-full max-w-7xl px-6 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 z-10"
        >
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-sans tracking-tighter leading-[1.05] text-white">
            Zero pedaços.<br />Zero concessões.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl aspect-square md:aspect-video flex items-center justify-center -mt-8"
        >
          <img
            src="/smoothie-pour.jpg"
            alt="Suco perfeito com zero pedaços"
            className="w-full h-full object-contain mix-blend-screen"
          />
        </motion.div>
      </div>
    </section>
  );
}
