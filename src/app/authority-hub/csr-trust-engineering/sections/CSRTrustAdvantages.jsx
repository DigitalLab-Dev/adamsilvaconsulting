import React from "react";
import { Shield } from "lucide-react";

export default function CSRTrustAdvantages() {
  const cards = [
    {
      title: "Competitive Differentiation",
      desc:
        "Create unique market positioning through verifiable social responsibility and ethical leadership",
      points: [
        "Market premium positioning",
        "Customer loyalty enhancement",
        "Talent attraction advantage",
        "Investor preference gain",
      ],
    },
    {
      title: "Risk Mitigation & Resilience",
      desc:
        "Build organizational resilience through proactive social responsibility and transparent governance",
      points: [
        "Regulatory compliance excellence",
        "Reputation risk reduction",
        "Crisis management preparedness",
        "Stakeholder support during challenges",
      ],
    },
    {
      title: "Sustainable Growth Foundation",
      desc:
        "Establish long-term business sustainability through stakeholder alignment and social value creation",
      points: [
        "Sustainable business model",
        "Long-term value creation",
        "Stakeholder capital building",
        "Future-ready positioning",
      ],
    },
  ];

  return (
    <section className="w-full flex flex-col items-center py-20 px-4 font-inter bg-white">
      {/* Main Title */}
      <div className="text-center mb-16 max-w-3xl">
        <h2 className="text-4xl font-bold text-neutral-800">
          Strategic Business Advantages
        </h2>
        <p className="text-neutral-600 mt-4 text-lg">
          Three fundamental advantages that create sustainable competitive differentiation
          through trust engineering
        </p>
      </div>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              {/* Icon Container */}
              <div className="p-4 bg-green-100 rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-green-600" />
              </div>

              <h3 className="text-xl font-bold text-neutral-800 leading-tight">
                {card.title}
              </h3>
            </div>

            <p className="text-neutral-600 mb-6 text-sm">{card.desc}</p>

            <ul className="space-y-2 text-neutral-700 text-sm list-none pl-0">
              {card.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2 bg-green-600 rounded-full flex-shrink-0"></span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}