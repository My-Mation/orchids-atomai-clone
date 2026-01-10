import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import ContextSection from "@/components/sections/trusted-by";
import FeaturesGrid from "@/components/sections/features-grid";
import OutboundSystems from "@/components/sections/outbound-systems";
import SuccessStory from "@/components/sections/success-story";
import Testimonials from "@/components/sections/testimonials";
import IntegrationsSection from "@/components/sections/integrations";
import FAQSection from "@/components/sections/faq";
import CTABanner from "@/components/sections/cta-banner";
import Footer from "@/components/sections/footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20">
      <Navbar />
      
      <HeroSection />

      <ScrollReveal variant="blur-in" threshold={0.05}>
        <ContextSection />
      </ScrollReveal>

      <ScrollReveal variant="blur-in">
        <OutboundSystems />
      </ScrollReveal>

      <ScrollReveal variant="blur-in">
        <FeaturesGrid />
      </ScrollReveal>

      <ScrollReveal variant="blur-in">
        <SuccessStory />
      </ScrollReveal>

      <ScrollReveal variant="blur-in">
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal variant="blur-in">
        <IntegrationsSection />
      </ScrollReveal>

      <ScrollReveal variant="blur-in">
        <FAQSection />
      </ScrollReveal>

      <ScrollReveal variant="scale" threshold={0.2}>
        <CTABanner />
      </ScrollReveal>

      <Footer />
    </main>
  );
}
