"use client"
import Hero from './sections/Hero';
import { services } from '@/lib/Services';
import React, { useEffect, useState } from 'react';
import Challenge from './sections/Challenge';
import KeyFeatures from './sections/KeyFeatures';
import KeyBenifits from './sections/KeyBenifits';
import Process from './sections/Process';
import FAQ from './sections/FAQ';
import ServiceCTA from './sections/ServiceCTA';

const page = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if running client-side before accessing window
    if (typeof window === 'undefined') return;

    // 1. Extract the ID from the path using standard browser API
    const path = window.location.pathname;
    const pathSegments = path.split('/');
    const currentId = pathSegments[pathSegments.length - 1].split('?')[0]; // Extract ID

    // 2. Find the matching pillar data object
    const matchingService = services.find((service) => service.id === currentId);

    // 3. Update state with the Hero data if found
    if (matchingService) {
      setData(matchingService);
    } else {
      console.error(`Service not found for ID: ${currentId}`);
      // Fallback logic for isolated environments or missing routes
      const fallbackPillar = pillars[0];
      if (fallbackPillar) {
        setHeroData(fallbackPillar);
      } else {
        setHeroData(null);
      }
    }

    setIsLoading(false);
  }, []); // Run once on client mount

  if (isLoading) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800">Loading Page...</h1>
      </main>
    );
  }

  return <main>
   <Hero hero={data.Hero}/>
   <Challenge challenge={data.Challenge} solution={data.Solution}/>
   <KeyFeatures features={data.Features}/>
   <KeyBenifits benefits={data.Benefits}/>
   <Process process={data.Process}/>
   <FAQ faqs={data.FAQ}/>
   <ServiceCTA cta={data.CTA}/>
  </main>;
};

export default page;
