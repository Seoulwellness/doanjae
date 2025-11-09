import Banner from '@/components/Banner';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Banner />
      <Navigation />
      <Hero />
    </div>
  );
}

