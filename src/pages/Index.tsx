import Hero from "@/components/Hero";
import BolsaFamiliaSection from "@/components/BolsaFamiliaSection";
import LuzDoPovoSection from "@/components/LuzDoPovoSection";
import MethodologySection from "@/components/MethodologySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BolsaFamiliaSection />
      <LuzDoPovoSection />
      <MethodologySection />
      <Footer />
    </div>
  );
};

export default Index;