
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import TimelineSection from "@/components/TimelineSection";
import SelfCheckQuiz from "@/components/SelfCheckQuiz";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ResourceCards from "@/components/ResourceCards";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StickyCtaBanner from "@/components/StickyCtaBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-lavender-50">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <TimelineSection />
      <SelfCheckQuiz />
      <TestimonialCarousel />
      <ResourceCards />
      <CTASection />
      <Footer />
      <StickyCtaBanner />
    </div>
  );
};

export default Index;
