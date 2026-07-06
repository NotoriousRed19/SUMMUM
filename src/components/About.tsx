"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Vision from "./Vision";
import Objective from "./Objective";

export default function About() {
  const containerRef = useRef(null);
  const [isVisionOpen, setIsVisionOpen] = useState(false);
  const [isObjectiveOpen, setIsObjectiveOpen] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <>
      <section ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div style={{ y: textY }}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-gold"></div>
              <h2 className="text-[10px] md:text-xs text-gold tracking-[0.4em] uppercase font-semibold">Quiénes Somos</h2>
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight"
            >
              El arte detrás <br/> de lo invisible.
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-foreground/70 leading-relaxed font-light mb-6 text-base md:text-lg"
            >
              Summum nace de la convicción de que la alta gastronomía no necesita un gran salón para ser apreciada. Somos una cocina oculta dedicada a la creación de productos artesanales, elevando ingredientes locales con técnicas de vanguardia.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-foreground/70 leading-relaxed font-light text-base md:text-lg"
            >
              No tenemos mesas, pero sí un compromiso inquebrantable con el detalle. Cada pasta elaborada y cada evento que atendemos es un reflejo de nuestra obsesión por la excelencia pura.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-10"
            >
              <button 
                onClick={() => setIsVisionOpen(true)}
                className="px-8 py-3 border border-gold/30 text-gold text-xs uppercase tracking-[0.2em] hover:bg-gold/10 transition-colors rounded-md"
              >
                Nuestra Visión
              </button>
            </motion.div>
          </motion.div>

          <div className="flex flex-col items-center gap-8 lg:items-end">
            <div className="relative h-[400px] md:h-[600px] w-full bg-gray-dark border border-gray-light/30 flex items-center justify-center overflow-hidden group">
              <motion.div 
                style={{ y: imageY }}
                className="absolute inset-0 w-full h-[140%] -top-[20%]"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598023696416-01c3a70f50fa?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 transition-transform duration-[1.5s] group-hover:scale-105" />
              </motion.div>
              <div className="absolute inset-0 bg-background/20" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="w-full flex justify-start lg:justify-end"
            >
              <button 
                onClick={() => setIsObjectiveOpen(true)}
                className="px-8 py-3 border border-gold/30 text-gold text-xs uppercase tracking-[0.2em] hover:bg-gold/10 transition-colors rounded-md"
              >
                Nuestro Objetivo
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      <Vision isOpen={isVisionOpen} onClose={() => setIsVisionOpen(false)} />
      <Objective isOpen={isObjectiveOpen} onClose={() => setIsObjectiveOpen(false)} />
    </>
  );
}
