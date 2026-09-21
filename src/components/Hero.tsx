"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function Hero() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <section className="relative min-h-[100dvh] w-full pt-24 pb-12 overflow-hidden flex items-center">
      {/* Background ambient video */}
      <div className="absolute inset-0 z-0">
        <video 
          src="/hero-video.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-70 mix-blend-screen brightness-110"
        />
        {/* Subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        
        {/* Overlay to hide the watermark in the bottom right corner */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-gradient-to-tl from-black via-black/90 to-transparent pointer-events-none" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col items-start max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-zinc-400 backdrop-blur-md"
          >
            Concept Project
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-sans tracking-tighter leading-[1.05] text-foreground drop-shadow-lg"
          >
            O melhor em liquidificação, reinventado.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg text-zinc-300 leading-relaxed max-w-[20ch] drop-shadow-md"
          >
            Uma interface de toque intuitiva com um design sofisticado e atemporal. Aprimorado com o feedback dos nossos clientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            <button 
              onClick={() => setShowToast(true)}
              className="bg-white text-black px-8 py-4 rounded-full font-medium tracking-wide hover:scale-[1.03] active:scale-[0.97] hover:brightness-110 transition-all duration-300 flex items-center gap-2 shadow-xl"
            >
              Adicionar ao Carrinho
            </button>
            <span className="text-zinc-300 font-mono text-sm tracking-widest uppercase">$749.95</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[4/5] md:aspect-square flex items-center justify-center"
        >
          {/* We use a standard img tag because next/image requires domains config */}
          <img
            src="/dramatic-vitamix.jpg"
            alt="Vitamix Ascent X5"
            className="w-full h-full object-cover object-center rounded-3xl drop-shadow-[0_20px_50px_rgba(255,255,255,0.05)] border border-zinc-800 brightness-110 contrast-125"
          />
        </motion.div>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-8 right-8 z-[100] bg-zinc-900 border border-zinc-800 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3"
          >
            <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className="font-medium tracking-wide text-sm">Produto adicionado ao carrinho</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
