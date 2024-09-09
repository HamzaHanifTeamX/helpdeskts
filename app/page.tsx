import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import ServicesCarousel from "./components/ServicesCarousel";
import VideoSection from "./components/VideoSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesCarousel />
      <InfoSection />
      <VideoSection />
    </main>
  );
}
