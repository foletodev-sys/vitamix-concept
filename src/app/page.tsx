"use client";

import { Hero } from "@/components/Hero";
import { Bento } from "@/components/Bento";
import { StrawberryExplosion } from "@/components/StrawberryExplosion";
import { MangoExplosion } from "@/components/MangoExplosion";
import { SmoothieResult } from "@/components/SmoothieResult";
import { Specs } from "@/components/Specs";
import { Accessories } from "@/components/Accessories";

export default function Home() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-full">
      {/* Super minimal nav */}
      <nav className="w-full absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="text-xl font-medium tracking-wide drop-shadow-md">
          Vitamix
        </div>
        <div className="flex items-center gap-8 text-sm font-medium drop-shadow-md">
          <a href="#recursos" onClick={(e) => scrollTo(e, 'recursos')} className="text-zinc-300 hover:text-white transition-colors hidden md:block">Recursos</a>
          <a href="#especificacoes" onClick={(e) => scrollTo(e, 'especificacoes')} className="text-zinc-300 hover:text-white transition-colors hidden md:block">Especificações</a>
          <a href="#acessorios" onClick={(e) => scrollTo(e, 'acessorios')} className="text-zinc-300 hover:text-white transition-colors hidden md:block">Suporte</a>
        </div>
      </nav>

      <Hero />
      <Bento />
      <StrawberryExplosion />
      <MangoExplosion />
      <SmoothieResult />
      <Specs />
      <Accessories />
      
      {/* Minimal Footer */}
      <footer className="w-full py-12 px-6 border-t border-zinc-900 bg-zinc-950 mt-auto">
        <div className="mx-auto w-full max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-sm text-zinc-500 max-w-2xl leading-relaxed">
            Este é um projeto conceitual criado para fins de portfólio. Vitamix® é marca registrada de seus respectivos proprietários. Este site não tem fins comerciais.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
            <a href="#" className="hover:text-foreground transition-colors">Termos</a>
            <a href="#" className="hover:text-foreground transition-colors">Garantia</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
