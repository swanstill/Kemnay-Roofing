import HeroSection from "@/components/home/HeroSection";
import QuoteWizardSection from "@/components/home/QuoteWizardSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import RecentProjects from "@/components/home/RecentProjects";
import TeamSection from "@/components/home/TeamSection";

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Multi-Step Quote Form (overlaps hero by 60px) */}
      <QuoteWizardSection />

      {/* 3. Services */}
      <ServicesSection />

      {/* 4. Testimonials */}
      <TestimonialsSection />

      {/* 5. Recent Projects */}
      <RecentProjects />

      {/* 6. Meet the Team */}
      <TeamSection />
    </>
  );
}
