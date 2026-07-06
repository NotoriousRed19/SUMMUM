"use client";
import { LazyMotion, domAnimation, m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <LazyMotion features={domAnimation}>
      <section ref={ref} className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Background Image with Parallax - Optimized via next/image */}
        <m.div 
          className="absolute inset-0 z-0 origin-top"
          style={{ y: backgroundY, willChange: "transform" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1615486171439-019d5fc831dc?q=80&w=2000&auto=format&fit=crop"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-[0.15] scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/90 to-background" />
        </m.div>

        <m.div 
          className="relative z-10 flex flex-col items-center text-center px-4 mt-20 w-full"
          style={{ y: textY, opacity }}
        >
          <m.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif tracking-[0.15em] text-gold-light mb-6 md:mb-8 uppercase"
            style={{ textShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
          >
            Summum
          </m.h1>
          
          <m.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="text-[10px] sm:text-xs md:text-sm text-foreground/60 tracking-[0.2em] sm:tracking-[0.4em] uppercase font-sans mb-12 md:mb-16 max-w-2xl font-light px-2"
          >
            Artesanía Oculta. Sabor Absoluto.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full sm:w-auto px-4 sm:px-0"
          >
            <a href="#despensa" className="w-full sm:w-auto">
              <button className="btn-fog w-full px-8 sm:px-12 py-4 bg-gold text-background font-medium tracking-[0.25em] uppercase hover:bg-gold-light transition-all duration-500 text-[10px] sm:text-xs shadow-[0_0_15px_rgba(158,127,65,0.15)] hover:shadow-[0_0_25px_rgba(193,164,105,0.3)] hover:-translate-y-1 rounded-md">
                Nuestros Productos
              </button>
            </a>
            <a href="#servicios" className="w-full sm:w-auto">
              <button className="btn-fog w-full px-8 sm:px-12 py-4 border border-gold/30 text-gold font-light tracking-[0.25em] uppercase hover:bg-gold/10 hover:border-gold transition-all duration-500 text-[10px] sm:text-xs hover:-translate-y-1 rounded-md">
                Catering
              </button>
            </a>
          </m.div>
        </m.div>
      </section>
    </LazyMotion>
  );
}
