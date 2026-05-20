import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PrivacySection from "@/components/PrivacySection";
import ValuesSection from "@/components/ValuesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <PrivacySection />
        <ValuesSection />
      </main>
      <Footer />
    </div>
  );
}
