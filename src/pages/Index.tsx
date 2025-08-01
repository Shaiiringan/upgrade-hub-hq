import { Hero } from "@/components/Hero";
import { ServiceExplanation } from "@/components/ServiceExplanation";
import { HowItWorks } from "@/components/HowItWorks";
import { UrgencySection } from "@/components/UrgencySection";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServiceExplanation />
      <HowItWorks />
      <UrgencySection />
      <FinalCTA />
    </main>
  );
};

export default Index;
