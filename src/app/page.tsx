import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"), { ssr: false });
const Products = dynamic(() => import("@/components/Products"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const RegistrationModal = dynamic(() => import("@/components/RegistrationModal"), { ssr: false });

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-background">
      <Hero />
      <About />
      <Products />
      <Services />
      <Footer />
      <RegistrationModal />
    </main>
  );
}
