import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AdvisorsSection from "./sections/AdvisorsSection";
import CTASection from "./sections/CTASection";
import HeroSection from "./sections/HeroSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import WhySection from "./sections/WhySection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <AdvisorsSection />
        <WhySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
