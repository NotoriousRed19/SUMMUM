import Hero from "@/components/Hero";
import About from "@/components/About";
import Vision from "@/components/Vision";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";

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
