import Hero from "@/components/Hero";
import TeoriaMudancaSection from "@/components/TeoriaMudancaSection";
import TeoriaProgramaSection from "@/components/TeoriaProgramaSection";
import AbrangenciaSection from "@/components/AbrangenciaSection";
import MethodologySection from "@/components/MethodologySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TeoriaMudancaSection />
      <TeoriaProgramaSection />
      <AbrangenciaSection />
      <MethodologySection />
      <Footer />
    </div>
  );
};

export default Index;