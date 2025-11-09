import Navigation from '@/components/Navigation';
import Landing from '@/components/Landing';
import Footer from '@/components/Footer';
import FeaturesSection from '@/components/FeaturesSection';
import PatentSection from '@/components/PatentSection';
import PremiumSection from '@/components/PremiumSection';
import ProgramSection from '@/components/ProgramSection';
import SlimmingProgramSection from '@/components/SlimmingProgramSection';
import MuscleFitSection from '@/components/MuscleFitSection';
import WellnessBodyTherapySection from '@/components/WellnessBodyTherapySection';
import PriceSection from '@/components/PriceSection';
import ProcessSection from '@/components/ProcessSection';
import LocationSection from '@/components/LocationSection';
import CTASection from '@/components/CTASection';

export default function LandingPage() {
  return (
    <>
      <div className="relative">
        <Navigation align="left" fixed={false} />
        <Landing />
      </div>
      <Footer />
      <FeaturesSection />
      <PatentSection />
      <PremiumSection />
      <Footer />
      <ProgramSection />
      <SlimmingProgramSection />
      <MuscleFitSection />
      <WellnessBodyTherapySection />
      <PriceSection />
      <ProcessSection />
      <LocationSection />
      <CTASection />
    </>
  );
}

