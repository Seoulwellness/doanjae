import Navigation from '@/components/Navigation';
import Landing from '@/components/Landing';
import Footer from '@/components/Footer';
import FeaturesSection from '@/components/FeaturesSection';
import PatentSection from '@/components/PatentSection';
import PremiumSection from '@/components/PremiumSection';
import ProgramSection from '@/components/ProgramSection';

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
    </>
  );
}

