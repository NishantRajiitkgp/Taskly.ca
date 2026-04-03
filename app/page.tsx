import { NavBar } from '@/components/NavBar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { HowItWorks } from '@/components/HowItWorks';
import { Trust } from '@/components/Trust';
import { Pricing } from '@/components/Pricing';
import { Cta } from '@/components/Cta';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-rich-black">
      <NavBar />
      <Hero />
      <Services />
      <HowItWorks />
      <Trust />
      <Pricing />
      <Cta />
      <Footer />
    </main>
  );
}
