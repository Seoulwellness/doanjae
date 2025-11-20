import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Banner from "@/components/Banner";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Landing from "@/components/Landing";
import ErrorBoundary from "@/components/ErrorBoundary";

// Lazy load below-the-fold components for better performance
const Footer = dynamic(() => import("@/components/Footer"));
const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"));
const PatentSection = dynamic(() => import("@/components/PatentSection"));
const PremiumSection = dynamic(() => import("@/components/PremiumSection"));
const ProgramSection = dynamic(() => import("@/components/ProgramSection"));
const SlimmingProgramSection = dynamic(
  () => import("@/components/SlimmingProgramSection")
);
const MuscleFitSection = dynamic(() => import("@/components/MuscleFitSection"));
const WellnessBodyTherapySection = dynamic(
  () => import("@/components/WellnessBodyTherapySection")
);
const PriceSection = dynamic(() => import("@/components/PriceSection"));
const ProcessSection = dynamic(() => import("@/components/ProcessSection"));
const LocationSection = dynamic(() => import("@/components/LocationSection"));
const CTASection = dynamic(() => import("@/components/CTASection"));
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"));
const WelcomePopup = dynamic(() => import("@/components/WelcomePopup"));

// Keep ReviewSection import for future use
const ReviewSection = dynamic(() => import("@/components/ReviewSection"));

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
      <WelcomePopup />
    </ErrorBoundary>
  );
}
