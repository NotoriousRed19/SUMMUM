"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gold"></div>
            <h2 className="text-xs text-gold tracking-[0.4em] uppercase font-semibold">Quiénes Somos</h2>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
            El arte detrás <br/> de lo invisible.
          </h3>
          <p className="text-foreground/70 leading-relaxed font-light mb-6 text-lg">
            Summum nace de la convicción de que la alta gastronomía no necesita un gran salón para ser apreciada. Somos una cocina oculta dedicada a la creación de productos artesanales, elevando ingredientes locales con técnicas de vanguardia.
          </p>
          <p className="text-foreground/70 leading-relaxed font-light text-lg">
            No tenemos mesas, pero sí un compromiso inquebrantable con el detalle. Cada pasta elaborada y cada evento que atendemos es un reflejo de nuestra obsesión por la excelencia pura.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          className="relative h-[600px] w-full bg-gray-dark border border-gray-light/30 flex items-center justify-center overflow-hidden group"
        >
          {/* Temporary placeholder image from Unsplash for visual layout testing */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598023696416-01c3a70f50fa?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-105 mix-blend-luminosity grayscale" />
          <div className="absolute inset-0 bg-background/20" />
        </motion.div>
      </div>
    </section>
  );
}
