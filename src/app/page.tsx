import FeaturedProductsSection from "@/components/FeaturedProductsSection";
import HeroSection from "../components/HeroSection";
import AboutSection from "@/components/AboutSection";


export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <FeaturedProductsSection />

      <AboutSection />
    </main>
  );
}
