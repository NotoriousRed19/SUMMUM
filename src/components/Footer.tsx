"use client";

export default function Footer() {
  return (
    <footer className="bg-background py-16 px-6 border-t border-gray-light/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-serif text-gold-light tracking-[0.2em] uppercase">Summum</h2>
          <p className="text-foreground/50 text-xs tracking-widest uppercase mt-3">Dark Kitchen & Catering</p>
        </div>
        
        <div className="flex items-center">
          <a href="#" className="text-foreground/50 hover:text-gold transition-colors duration-300" aria-label="Instagram Summum">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-light/10 text-center">
        <p className="text-foreground/30 text-xs uppercase tracking-wider">&copy; {new Date().getFullYear()} Summum. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
