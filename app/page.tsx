import Hero from '@/components/Hero';
import TrustRibbon from '@/components/TrustRibbon';
import Services from '@/components/Services';
// import ProjectShowcase from '@/components/_ProjectShowcase';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustRibbon />
      <Services />
      {/* <ProjectShowcase /> */}
    </>
  );
}