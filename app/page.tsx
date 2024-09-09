import FAQs from "./components/FAQs";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import MobileAppsSection from "./components/MobileAppsSection";
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
      <MobileAppsSection />
    </main>
  );
}
