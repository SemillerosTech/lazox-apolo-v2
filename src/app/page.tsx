import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CollectionsSection from "@/components/CollectionsSection";
import PricingSection from "@/components/PricingSection";
import ForSchoolsSection from "@/components/ForSchoolsSection";
import ForFamiliesSection from "@/components/ForFamiliesSection";
import FAQSection from "@/components/FAQSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhatIsSection />
      <HowItWorksSection />
      <CollectionsSection />
      <PricingSection />
      <ForSchoolsSection />
      <ForFamiliesSection />
      <FAQSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
