"use client";

import { motion } from "motion/react";
import { Plus } from "lucide-react";

export function Accessories() {
  const scrollToAccessories = () => {
    document.getElementById('acessorios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="acessorios" className="w-full py-24 px-6 overflow-hidden bg-background">
      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-square rounded-[32px] bg-zinc-900 border border-zinc-800 flex items-center justify-center p-8 overflow-hidden group"
        >
          {/* Subtle glow effect behind the image */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <img
            src="https://www.vitamix.com/us/en_us/products/media_388e2062bc515d20e36d6e60b635d68121a44cfb.png"
            alt="SELF-DETECT Containers"
            className="w-full h-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        <div className="flex flex-col items-start">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-sans tracking-tight leading-tight text-foreground"
          >
            Um sistema que cresce com você.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-[35ch]"
          >
            Combine seu Ascent X5 com recipientes SELF-DETECT®. Adicione uma variedade de acessórios compatíveis para montar um sistema de liquidificação customizado, projetado inteiramente para as suas necessidades.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <button 
              onClick={scrollToAccessories}
              className="flex items-center gap-2 text-foreground font-medium hover:text-accent transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] group"
            >
              <span className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-accent transition-colors bg-zinc-900 shadow-sm group-hover:shadow-md">
                <Plus className="w-5 h-5" />
              </span>
              <span>Explorar Acessórios</span>
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
