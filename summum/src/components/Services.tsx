"use client";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-gray-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed bg-center opacity-10 mix-blend-luminosity grayscale" />
      
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gold"></div>
            <h2 className="text-xs text-gold tracking-[0.4em] uppercase font-semibold">Nuestros Servicios</h2>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
            Experiencias <br/> a medida.
          </h3>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-serif text-gold-light mb-3">Catering para Eventos</h4>
              <p className="text-foreground/70 font-light leading-relaxed">
                Diseñamos menús exclusivos para eventos privados y corporativos. Llevamos la estética y los sabores de Summum a tu espacio, garantizando una ejecución impecable y discreta.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-serif text-gold-light mb-3">Cenas Íntimas (2+ Personas)</h4>
              <p className="text-foreground/70 font-light leading-relaxed">
                Si buscas una velada especial sin salir de casa, preparamos un menú degustación adaptado a tus gustos. Todo entregado con instrucciones precisas para finalizar como un profesional, o con nuestro servicio de chef a domicilio.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <button className="px-8 py-3 border border-gold text-gold font-medium tracking-[0.2em] uppercase hover:bg-gold/10 transition-colors duration-300 text-sm">
              Solicitar Cotización
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, opacity: 0 }}
          whileInView={{ opacity: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="h-[600px] w-full hidden lg:block"
        >
           {/* Space reserved for a tall vertical image if needed, or simply empty space for balance */}
        </motion.div>
      </div>
    </section>
  );
}
