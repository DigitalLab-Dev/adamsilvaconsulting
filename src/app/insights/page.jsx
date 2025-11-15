import React from 'react';
import Hero from './sections/Hero';
import StrategicIntelligenceHero from './sections/Hero';
import InsightsSection from './sections/InsightsSection';
import IntelligenceBriefings from './sections/IntellegenceBriefings';
import FeaturedAnalysis from './sections/FeaturedAnalysis';

const page = () => {
  return <main>
  <StrategicIntelligenceHero/>
  <FeaturedAnalysis/>
  <InsightsSection/>
  <IntelligenceBriefings/>
  </main>;
};

export default page;
