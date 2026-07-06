"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="servicios" ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gray-dark relative overflow-hidden">
      <motion.div 
        style={{ y: backgroundY, willChange: "transform" }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.05]" 
      />
      
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 1 } }
            }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-gold"></div>
            <h2 className="text-[10px] md:text-xs text-gold tracking-[0.4em] uppercase font-semibold">Nuestros Servicios</h2>
          </motion.div>
          
          <motion.h3 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } }
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-8 md:mb-12 leading-tight"
          >
            Experiencias <br/> a medida.
          </motion.h3>
          
          <div className="space-y-10 md:space-y-12">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1 } }
              }}
            >
              <h4 className="text-lg md:text-xl font-serif text-gold-light mb-3 md:mb-4 flex items-center gap-3 md:gap-4">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gold inline-block"></span>
                Catering para Eventos
              </h4>
              <p className="text-foreground/60 font-light leading-relaxed text-base md:text-lg pl-5 md:pl-6 border-l border-gold/10">
                Diseñamos menús exclusivos para eventos privados y corporativos. Llevamos la estética y los sabores de Summum a tu espacio, garantizando una ejecución impecable y discreta.
              </p>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1 } }
              }}
            >
              <h4 className="text-lg md:text-xl font-serif text-gold-light mb-3 md:mb-4 flex items-center gap-3 md:gap-4">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gold inline-block"></span>
                Cenas Íntimas
              </h4>
              <p className="text-foreground/60 font-light leading-relaxed text-base md:text-lg pl-5 md:pl-6 border-l border-gold/10">
                Si buscas una velada especial sin salir de casa, preparamos un menú degustación adaptado a tus gustos. Todo entregado con instrucciones precisas para finalizar como un profesional, o con nuestro servicio de chef a domicilio.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1 } }
            }}
            className="mt-12 md:mt-16 flex justify-start w-full"
          >
            <button className="w-full sm:w-auto px-8 md:px-10 py-4 border border-gold text-gold font-light tracking-[0.25em] uppercase hover:bg-gold/10 hover:shadow-[0_0_20px_rgba(158,127,65,0.2)] transition-all duration-500 text-[10px] md:text-xs">
              Solicitar Cotización
            </button>
          </motion.div>
        </motion.div>
        
        <div className="h-[400px] lg:h-[700px] w-full hidden sm:block relative overflow-hidden group">
          <motion.div 
            style={{ y: imageY, willChange: "transform" }}
            className="absolute inset-0 w-full h-[140%] -top-[20%]"
          >
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30 transition-transform duration-[2s] group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-dark via-transparent to-gray-dark opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
