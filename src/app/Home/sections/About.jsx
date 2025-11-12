'use client';
import React from 'react';
import { Target, Rocket, Shield } from 'lucide-react';

const About = () => {
  const keyPoints = [
    {
      icon: Target,
      heading: "Solve, Don't Just Sell",
      description: "Content structured around key business pain points: Resource Crunch, Visibility Crisis, Data Dilemma, and Engagement Gap. We solve problems, not just promote services.",
    },
    {
      icon: Rocket,
      heading: "Build the Flywheel",
      description: "Architecture supports continuous feedback loops where performance data informs content creation, creating compound growth in authority and visibility.",
    },
    {
      icon: Shield,
      heading: "Trust is Ultimate Asset",
      description: "Verifiable data and CSR initiatives provide auditable proof of trustworthiness, the most valuable signal in AI evaluation frameworks.",
    },
  ];

  const metrics = [
    { label: "AI Engine Citations", value: 85 },
    { label: "Featured Snippet Ownership", value: 72 },
    { label: "Brand Authority Score", value: 91 },
    { label: "Voice Search Responses", value: 68 },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl  font-bold text-zinc-900 mb-6">
            Lead Generation Through{' '}
            <span className="text-blue-700">AI Authority</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine proven lead generation tactics with cutting-edge AEO/GEO strategy. 
            While others chase clicks, we build the authority that converts prospects into customers.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Part - Key Points */}
          <div className="space-y-8">
            {keyPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-13 h-13 bg-blue-700 rounded-lg flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                      {point.heading}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Part - Metrics */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl  font-bold text-black mb-8 text-left">
              The New Success Metrics
            </h3>
            
            <div className="space-y-6">
              {metrics.map((metric, index) => (
                <div key={index}>
                  {/* Label and Value */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium text-base md:text-lg">
                      {metric.label}
                    </span>
                    <span className="text-blue-700 font-bold text-xl md:text-2xl">
                      {metric.value}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-blue-900 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;