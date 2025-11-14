import type { Metadata } from "next";
import Banner from "@/components/Banner";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";
import Landing from "@/components/Landing";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import FeaturesSection from "@/components/FeaturesSection";
import PatentSection from "@/components/PatentSection";
import PremiumSection from "@/components/PremiumSection";
import ProgramSection from "@/components/ProgramSection";
import SlimmingProgramSection from "@/components/SlimmingProgramSection";
import MuscleFitSection from "@/components/MuscleFitSection";
import WellnessBodyTherapySection from "@/components/WellnessBodyTherapySection";
import ReviewSection from "@/components/ReviewSection";
import PriceSection from "@/components/PriceSection";
import ProcessSection from "@/components/ProcessSection";
import LocationSection from "@/components/LocationSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "도안재 - 프리미엄 다이어트 테라피",
  description:
    "천년의 지혜와 현대의 기술을 접목한 가장 이상적인 다이어트 솔루션. 몸은 가볍게, 과정은 편안하게, 결과는 한층 아름답게.",
  keywords:
    "다이어트, 체형관리, 웰니스, 바디테라피, 도안재, 특허기술, 근적외선, 온열요법",
  openGraph: {
    title: "도안재 - 프리미엄 다이어트 테라피",
    description:
      "천년의 지혜와 현대의 기술을 접목한 가장 이상적인 다이어트 솔루션",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "도안재 - 프리미엄 다이어트 테라피",
    description:
      "천년의 지혜와 현대의 기술을 접목한 가장 이상적인 다이어트 솔루션",
  },
};

export default function Home() {
  return (
    <ErrorBoundary>
      {/* Hero Section with Banner and Navigation */}
      <Banner />
      <Navigation />
      <Hero />

      {/* Landing Sections - Scrollable */}
      <Banner />
      <Landing />
      <Footer />
      <ErrorBoundary>
        <FeaturesSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <PatentSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <PremiumSection />
      </ErrorBoundary>
      <Footer />
      <ErrorBoundary>
        <ProgramSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <SlimmingProgramSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <MuscleFitSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <WellnessBodyTherapySection />
      </ErrorBoundary>
      <ErrorBoundary>
        <ReviewSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <PriceSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <ProcessSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <LocationSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <CTASection />
      </ErrorBoundary>
      <ScrollToTop />
    </ErrorBoundary>
  );
}
