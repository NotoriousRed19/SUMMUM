"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Vision({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/95 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-4xl bg-gray-dark border border-gold/20 p-8 md:p-16 text-center shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-foreground/50 hover:text-gold transition-colors"
            >
              <X size={24} />
            </button>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-8 bg-gold"></div>
              <h2 className="text-[10px] md:text-xs text-gold tracking-[0.4em] uppercase font-semibold">Nuestra Visión</h2>
              <div className="h-[1px] w-8 bg-gold"></div>
            </div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-foreground mb-10 leading-relaxed font-light">
              "Redefinir la intimidad del buen comer, llevando la precisión y elegancia del fine dining directamente a la esencia de lo privado."
            </h3>
            
            <p className="text-foreground/60 uppercase tracking-[0.1em] md:tracking-[0.2em] text-[10px] md:text-sm">
              - El equipo de Summum
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
