import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import ServicesCarousel from "./components/ServicesCarousel";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesCarousel />
      <InfoSection />
    </main>
  );
}
