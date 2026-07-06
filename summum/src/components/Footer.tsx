"use client";

export default function Footer() {
  return (
    <footer className="bg-background py-16 px-6 border-t border-gray-light/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-serif text-gold-light tracking-[0.2em] uppercase">Summum</h2>
          <p className="text-foreground/50 text-xs tracking-widest uppercase mt-3">Dark Kitchen & Catering</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <a href="#" className="text-foreground/70 hover:text-gold transition-colors text-xs uppercase tracking-widest">Contacto Directo</a>
          <a href="#" className="text-foreground/70 hover:text-gold transition-colors text-xs uppercase tracking-widest">WhatsApp</a>
          <a href="#" className="text-foreground/70 hover:text-gold transition-colors text-xs uppercase tracking-widest">Instagram</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-light/10 text-center">
        <p className="text-foreground/30 text-xs uppercase tracking-wider">&copy; {new Date().getFullYear()} Summum. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
