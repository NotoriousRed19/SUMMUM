"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Products() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  const products = [
    { title: "Pastas Artesanales", desc: "Elaboradas a mano diariamente con sémola de trigo duro importada y huevos de campo.", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop" },
    { title: "Salsas de Autor", desc: "Reducciones lentas y sabores profundos embotellados listos para finalizar en casa.", img: "https://images.unsplash.com/photo-1626078235282-3d7790bdfcb6?q=80&w=1000&auto=format&fit=crop" },
    { title: "Panadería Masa Madre", desc: "Hogazas rústicas de fermentación lenta, con cortezas crujientes e interior alveolado.", img: "https://images.unsplash.com/photo-1589367920969-ab8e050bfc54?q=80&w=1000&auto=format&fit=crop" },
    { title: "Cortes Curados", desc: "Selección curada de charcutería artesanal para iniciar cualquier experiencia.", img: "https://images.unsplash.com/photo-1602928321679-560bb463f63c?q=80&w=1000&auto=format&fit=crop" }
  ];

  // Duplicate for infinite scroll effect
  const duplicatedProducts = [...products, ...products];

  return (
    <section id="despensa" ref={containerRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div 
          style={{ y: titleY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16 md:mb-20 relative z-10"
        >
          <div className="flex items-center gap-2 md:gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-gold"></div>
            <h2 className="text-[10px] md:text-xs text-gold tracking-[0.4em] uppercase font-semibold">Despensa</h2>
            <div className="h-[1px] w-8 md:w-12 bg-gold"></div>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-6">Nuestros Productos</h3>
          <p className="text-foreground/70 font-light max-w-2xl text-sm md:text-base leading-relaxed px-4">
            Explora nuestra selección exclusiva de productos artesanales. Solicita el menú completo y recibe asesoría personalizada para tu próxima experiencia culinaria.
          </p>
        </motion.div>
      </div>

      <div className="w-full relative z-20 overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 35 
          }}
          className="flex w-max pb-8"
        >
          {duplicatedProducts.map((item, index) => (
            <div 
              key={index}
              className="group relative h-[350px] md:h-[450px] w-[85vw] sm:w-[400px] md:w-[450px] shrink-0 bg-gray-dark overflow-hidden flex items-end p-6 md:p-8 border border-gray-light/10 mr-6 md:mr-8"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 transition-transform duration-[2s] group-hover:scale-110 mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:opacity-60 pointer-events-none"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 transition-opacity duration-1000 group-hover:opacity-70 pointer-events-none" />
              
              <div className="relative z-10 w-full transform transition-transform duration-[1s] group-hover:-translate-y-4 pointer-events-none">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-8 md:w-12 h-[1px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-4 group-hover:translate-x-0"></div>
                    <h4 className="text-xl md:text-2xl font-serif text-gold-light group-hover:text-white transition-colors duration-500">{item.title}</h4>
                </div>
                <p className="text-foreground/80 font-light text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 translate-y-4 group-hover:translate-y-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-16 md:mt-24 flex justify-center relative z-10"
        >
          <a 
            href="https://wa.me/1234567890?text=Hola,%20me%20gustaría%20solicitar%20el%20menú%20completo%20de%20Summum%20y%20recibir%20recomendaciones." 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="px-10 py-4 border border-gold text-gold font-light tracking-[0.25em] uppercase hover:bg-gold/10 hover:shadow-[0_0_20px_rgba(158,127,65,0.2)] transition-all duration-500 text-xs">
              Ver menú completo
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
