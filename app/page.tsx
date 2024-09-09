import FAQs from "./components/FAQs";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import SecuritySection from "./components/SecuritySection";
import ServicesCarousel from "./components/ServicesCarousel";
import SubscriptionPlan from "./components/SubscriptionPlan";
import VideoSection from "./components/VideoSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesCarousel />
      <InfoSection />
      <VideoSection />
      <FAQs />
      <SecuritySection />
      <SubscriptionPlan />
    </main>
  );
}
