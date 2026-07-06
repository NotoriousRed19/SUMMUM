"use client";
import { motion } from "framer-motion";

export default function Products() {
  const products = [
    { title: "Pastas Artesanales", desc: "Elaboradas a mano diariamente con sémola de trigo duro importada y huevos de campo.", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop" },
    { title: "Salsas de Autor", desc: "Reducciones lentas y sabores profundos embotellados listos para finalizar en casa.", img: "https://images.unsplash.com/photo-1626078235282-3d7790bdfcb6?q=80&w=1000&auto=format&fit=crop" },
    { title: "Panadería Masa Madre", desc: "Hogazas rústicas de fermentación lenta, con cortezas crujientes e interior alveolado.", img: "https://images.unsplash.com/photo-1589367920969-ab8e050bfc54?q=80&w=1000&auto=format&fit=crop" },
    { title: "Cortes Curados", desc: "Selección curada de charcutería artesanal para iniciar cualquier experiencia.", img: "https://images.unsplash.com/photo-1602928321679-560bb463f63c?q=80&w=1000&auto=format&fit=crop" }
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gold"></div>
            <h2 className="text-xs text-gold tracking-[0.4em] uppercase font-semibold">Despensa</h2>
            <div className="h-[1px] w-12 bg-gold"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-foreground">Nuestros Productos</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative h-[400px] w-full bg-gray-dark overflow-hidden flex items-end p-8 border border-gray-light/20"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 transition-transform duration-1000 group-hover:scale-110 mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:opacity-50"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
              
              <div className="relative z-10 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h4 className="text-2xl font-serif text-gold-light">{item.title}</h4>
                </div>
                <p className="text-foreground/80 font-light text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <button className="px-10 py-4 bg-gold text-background font-medium tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300 text-sm">
            Ver menú completo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
