import FonctionnalitySection from "@/components/landingPage/FonctionnalitySection";
import FooterSection from "@/components/landingPage/FooterSection";
import HeroBanner from "@/components/landingPage/HeroBanner";
import Navbar from "@/components/landingPage/Navbar";
import PartenairesSection from "@/components/landingPage/PartenairesSection";
import PricingSection from "@/components/landingPage/PricingSection";
import TestimonialsSection from "@/components/landingPage/TestimonialsSection";
import VideoSection from "@/components/landingPage/VideoSection";

export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <HeroBanner />
      <VideoSection />
      <PartenairesSection />
      <FonctionnalitySection />
      <PricingSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}
