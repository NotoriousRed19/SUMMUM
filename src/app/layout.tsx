import type { Metadata, Viewport } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Summum | Artesanía Oculta. Sabor Absoluto.",
  description: "Dark Kitchen & Catering de alta gastronomía. Sabores artesanales, eventos y experiencias culinarias únicas.",
  keywords: ["dark kitchen", "catering", "gastronomía", "eventos", "Summum"],
  openGraph: {
    title: "Summum | Artesanía Oculta",
    description: "Dark Kitchen & Catering de alta gastronomía.",
    type: "website",
    locale: "es_VE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${cinzel.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans font-light overflow-x-hidden selection:bg-gold selection:text-black relative">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
