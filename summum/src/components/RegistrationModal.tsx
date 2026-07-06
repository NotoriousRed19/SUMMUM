"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function RegistrationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", lastName: "", cedula: "", email: "", phone: "" });
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate unique code generation (This will later connect to a DB like Supabase)
    const code = "SUM-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    setGeneratedCode(code);
    
    console.log("Nuevo Cliente Registrado:", { ...formData, codigoUnico: code });
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
        <button 
          onClick={() => setIsOpen(true)}
          className="px-4 py-3 md:px-6 md:py-4 bg-gold text-background text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold-light shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(197,160,89,0.5)] transition-all duration-300"
        >
          Acceso Exclusivo
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/90 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-gray-dark border border-gold/20 p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-foreground/50 hover:text-gold transition-colors"
              >
                <X size={20} />
              </button>

              <div className="mb-6 md:mb-8 text-center mt-2 md:mt-4">
                <h3 className="text-xl md:text-2xl font-serif text-gold-light mb-2">Club Privado Summum</h3>
                <p className="text-foreground/70 text-xs md:text-sm font-light">Regístrate para obtener tu código único de cliente y acceder a atención personalizada.</p>
              </div>

              {!generatedCode ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input required type="text" placeholder="Nombre" className="w-full bg-background border border-gray-light px-4 py-3 text-sm focus:outline-none focus:border-gold text-foreground transition-colors" onChange={e => setFormData({...formData, name: e.target.value})} />
                    <input required type="text" placeholder="Apellido" className="w-full bg-background border border-gray-light px-4 py-3 text-sm focus:outline-none focus:border-gold text-foreground transition-colors" onChange={e => setFormData({...formData, lastName: e.target.value})} />
                  </div>
                  <input required type="text" placeholder="Cédula de Identidad" className="w-full bg-background border border-gray-light px-4 py-3 text-sm focus:outline-none focus:border-gold text-foreground transition-colors" onChange={e => setFormData({...formData, cedula: e.target.value})} />
                  <input required type="email" placeholder="Correo Electrónico" className="w-full bg-background border border-gray-light px-4 py-3 text-sm focus:outline-none focus:border-gold text-foreground transition-colors" onChange={e => setFormData({...formData, email: e.target.value})} />
                  <input required type="tel" placeholder="Teléfono" className="w-full bg-background border border-gray-light px-4 py-3 text-sm focus:outline-none focus:border-gold text-foreground transition-colors" onChange={e => setFormData({...formData, phone: e.target.value})} />
                  
                  <button type="submit" className="w-full py-4 mt-6 bg-gold text-background font-medium tracking-[0.2em] uppercase hover:bg-gold-light transition-colors text-[10px] md:text-sm">
                    Generar Mi Código
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-center py-8"
                >
                  <p className="text-foreground/80 mb-6 text-sm font-light">Tu registro ha sido exitoso. Conserva este código único para futuras reservas.</p>
                  <div className="inline-block border border-gold border-dashed p-6 bg-gold/5 mb-8">
                    <span className="text-3xl font-serif text-gold-light tracking-widest">{generatedCode}</span>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="w-full py-4 border border-gold/50 text-gold font-medium tracking-[0.2em] uppercase hover:bg-gold/10 transition-colors text-sm">
                    Cerrar Panel
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
