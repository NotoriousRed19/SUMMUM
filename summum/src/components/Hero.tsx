"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615486171439-019d5fc831dc?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-widest text-gold-light mb-6 uppercase drop-shadow-lg"
        >
          Summum
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="text-sm md:text-lg text-foreground/80 tracking-[0.3em] uppercase font-sans mb-12 max-w-2xl"
        >
          Artesanía Oculta. Sabor Absoluto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button className="px-10 py-4 bg-gold text-background font-medium tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300 text-sm">
            Haz tu pedido
          </button>
          <button className="px-10 py-4 border border-gold/50 text-gold font-medium tracking-[0.2em] uppercase hover:bg-gold/10 transition-colors duration-300 text-sm">
            Catering
          </button>
        </motion.div>
      </div>
    </section>
  );
}
