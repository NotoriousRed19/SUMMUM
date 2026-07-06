"use client";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-gray-dark relative z-10 border-t border-b border-gray-light/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-8 bg-gold"></div>
            <h2 className="text-xs text-gold tracking-[0.4em] uppercase font-semibold">Nuestra Visión</h2>
            <div className="h-[1px] w-8 bg-gold"></div>
          </div>
          
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-10 leading-relaxed font-light">
            "Redefinir la intimidad del buen comer, llevando la precisión y elegancia del fine dining directamente a la esencia de lo privado."
          </h3>
          
          <p className="text-foreground/60 uppercase tracking-[0.2em] text-sm">
            - El equipo de Summum
          </p>
        </motion.div>
      </div>
    </section>
  );
}
