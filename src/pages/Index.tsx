import Hero from "@/components/Hero";
import LuzDoPovoSection from "@/components/LuzDoPovoSection";
import MethodologySection from "@/components/MethodologySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LuzDoPovoSection />
      <MethodologySection />
      <Footer />
    </div>
  );
};

export default Index;