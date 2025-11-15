"use client"
import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, AlertTriangle, Target, Lightbulb, ShieldIcon } from 'lucide-react';

const insights = [
  {
    tag: "Market Intelligence",
    impact: "Critical",
    heading: "Zero-Click Searches: The New Reality of Information Discovery",
    subheading: "With 65% of searches now resulting in zero clicks, AI engines are answering queries directly without user website visits. Analysis of how this fundamental shift impacts business visibility and the strategies required to maintain relevance.",
    date: "Sep 15",
    minRead: "10 min read",
    link: "/insights/zero-click-searches-the-new-reality-of-information-discovery"
  },
  {
    tag: "Strategic Framework",
    impact: "High",
    heading: "The Integrated Service Ecosystem: Strategic Flywheel Analysis",
    subheading: "How technical frameworks, AI content creation, topical authority, AEO/GEO strategies, marketing automation, and CSR initiatives create a self-reinforcing cycle for compound authority growth.",
    date: "Sep 12",
    minRead: "18 min read",
    link: "/insights/the-integrated-service-ecosystem-strategic-flywheel-analysis"
  },
  {
    tag: "Technical Implementation",
    impact: "Medium",
    heading: "E-E-A-T Evolution: Building Authority in the Generative AI Era",
    subheading: "Google's Experience, Expertise, Authoritativeness, and Trustworthiness framework has evolved for AI evaluation. Deep dive into how these signals translate to AI citation success and verifiable authority building.",
    date: "Sep 10",
    minRead: "14 min read",
    link: "/insights/e-e-a-t-evolution-building-authority-in-the-generative-ai-era"
  },
  {
    tag: "Strategic Analysis",
    impact: "High",
    heading: "The Citation Economy: How AI Models Value and Reference Content",
    subheading: "Understanding the new currency of digital authority. Analysis of how AI systems decide what content to cite, the factors that influence citation probability, and strategies to become a preferred source.",
    date: "Sep 8",
    minRead: "16 min read",
    link: "/insights/the-citation-economy-how-ai-models-value-and-reference-content"
  },
  {
    tag: "Market Intelligence",
    impact: "Critical",
    heading: "Search Intent in the Age of AI: Beyond Keywords to Comprehension",
    subheading: "The evolution from keyword matching to contextual understanding. How AI models interpret user intent and what this means for content strategy, with frameworks for aligning content with AI comprehension patterns.",
    date: "Sep 5",
    minRead: "12 min read",
    link: "/insights/search-intent-in-the-age-of-ai-beyond-keywords-to-comprehension"
  },
  {
    tag: "Authority Building",
    impact: "High",
    heading: "Building Topical Authority: The New SEO Paradigm",
    subheading: "Moving beyond individual keyword rankings to comprehensive topic coverage. Strategic frameworks for establishing domain expertise that AI models recognize and cite consistently across related queries.",
    date: "Sep 3",
    minRead: "15 min read",
    link: "/insights/building-topical-authority-the-new-seo-paradigm"
  }
];

const categories = [
  { name: "All Insights", count: 28, active: true },
  { name: "Strategic Analysis", count: 8, active: false },
  { name: "Market Intelligence", count: 5, active: false },
  { name: "Technical Implementation", count: 7, active: false },
  { name: "Authority Building", count: 6, active: false },
  { name: "Business Strategy", count: 2, active: false }
];

export default function InsightsSection() {
  const [activeCategory, setActiveCategory] = useState("All Insights");

  const getImpactColor = (impact) => {
    switch(impact) {
      case "Critical": return "bg-red-50 text-red-600";
      case "High": return "bg-orange-50 text-orange-600";
      case "Medium": return "bg-blue-50 text-blue-600";
      default: return "bg-gray-50 text-gray-600";
    }
  };

  const getTagIcon = (tag) => {
    switch(tag) {
      case "Market Intelligence": return <AlertTriangle size={16} />;
      case "Strategic Framework": 
      case "Strategic Analysis": return <Target size={16} />;
      case "Technical Implementation": 
            return <ShieldIcon size={16}/>
      case "Authority Building": return <Lightbulb size={16} />;
      default: return <Target size={16} />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      {/* Insights Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap max-w-6xl items-center justify-center mx-auto gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 rounded-full text-md font-medium transition-all ${
                activeCategory === category.name
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 px-10 gap-6">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Tag and Impact */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-blue-800 text-sm font-medium">
                  {getTagIcon(insight.tag)}
                  <span>{insight.tag}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getImpactColor(insight.impact)}`}>
                  {insight.impact}
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                {insight.heading}
              </h3>

              {/* Subheading */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {insight.subheading}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{insight.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{insight.minRead}</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={insight.link}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all group"
              >
                Read Analysis
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}