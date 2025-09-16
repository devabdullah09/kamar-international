import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import WhatWeDo from '@/components/WhatWeDo';
import WhoWeAre from '@/components/WhoWeAre';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <WhatWeDo />
      <WhoWeAre />
    </Layout>
  );
}