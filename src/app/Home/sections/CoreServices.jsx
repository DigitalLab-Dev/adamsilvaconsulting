'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';

const CoreServicesCTA = () => {
  const services = [
    {
      title: 'AI-Powered Content & Lead Generation',
      description:
        'Automated content creation, visual assets, and video production that converts visitors into qualified leads through strategic marketing funnels.',
      metrics: [
        { value: '80%', label: 'Faster Content Creation', sublabel: 'vs Traditional Methods' },
        { value: '60%', label: 'Higher Engagement', sublabel: 'AI-Optimized Content' },
        { value: '5x', label: 'More Qualified Leads', sublabel: 'Through Automation' },
      ],
    },
    {
      title: 'AEO/GEO Optimization & Marketing Automation',
      description:
        'Advanced strategies for Answer Engine and Generative Engine optimization combined with intelligent marketing automation for maximum lead conversion.',
      metrics: [
        { value: '300%', label: 'More AI Citations', sublabel: 'Brand Authority' },
        { value: '45%', label: 'Higher ROI', sublabel: 'Automated Campaigns' },
        { value: '24/7', label: 'Lead Generation', sublabel: 'AI-Powered Systems' },
      ],
    },
  ];

  return (
    <>
      {/* Core Services Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl  font-bold text-gray-700 mb-6">
              Our Core{' '}
              <span className="text-blue-800">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive lead generation services that leverage AI optimization to drive measurable results for your business.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
              >
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {service.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm font-semibold text-gray-800 mb-1">
                        {metric.label}
                      </div>
                      <div className="text-xs text-gray-600">
                        {metric.sublabel}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-100 to-blue-300" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl  font-black text-black mb-6 leading-tight">
            Ready to Build{' '}
            <span className="text-blue-900">AI Authority</span>{" "}?
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed mb-10">
            The transition to AI-driven information discovery is not a distant trend—its the current reality. 
            The organizations that thrive will be those that move decisively to build genuine, verifiable authority.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/authority-assessment"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-900 hover:bg-blue-950 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-blue-900/30 transition-all duration-300"
            >
              <span>Start Your Authority Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/authority-hub"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-gray-50 text-blue-900 font-semibold text-lg rounded-lg shadow-lg border-2 border-blue-900 hover:shadow-blue-900/20 transition-all duration-300"
            >
              <Search className="w-5 h-5" />
              <span>Explore Authority Hub</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreServicesCTA;