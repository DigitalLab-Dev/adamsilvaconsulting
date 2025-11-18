import React from "react";
import { Eye, Ribbon, Shield, UsersRound } from "lucide-react";

export default function CSRTrustFramework() {
  const cards = [
    {
      icon: <Eye className="w-7 h-7 text-green-600" />,
      bg: "bg-green-100",
      title: "Transparency Systems Architecture",
      desc:
        "Build comprehensive transparency frameworks that demonstrate authentic commitment to stakeholder interests and ethical business practices",
      points: [
        "Open data disclosure",
        "Process transparency",
        "Decision-making clarity",
        "Impact measurement visibility",
      ],
    },
    {
      icon: <Ribbon className="w-7 h-7 text-green-600" />,
      bg: "bg-green-100",
      title: "Impact Measurement & Verification",
      desc:
        "Develop AI-powered systems for real-time tracking, measurement, and third-party verification of social and environmental impact",
      points: [
        "Real-time impact tracking",
        "Third-party verification",
        "Blockchain-based records",
        "Continuous monitoring",
      ],
    },
    {
      icon: <Shield className="w-7 h-7 text-green-600" />,
      bg: "bg-green-100",
      title: "Ethical AI Governance",
      desc:
        "Establish comprehensive frameworks for responsible AI development, deployment, and oversight that builds stakeholder confidence",
      points: [
        "AI ethics committees",
        "Bias detection systems",
        "Algorithmic accountability",
        "Responsible AI practices",
      ],
    },
    {
      icon: <UsersRound className="w-7 h-7 text-green-600" />,
      bg: "bg-green-100",
      title: "Stakeholder Engagement Platforms",
      desc:
        "Create sophisticated engagement systems that foster genuine dialogue, feedback integration, and collaborative impact initiatives",
      points: [
        "Multi-stakeholder dialogue",
        "Feedback integration systems",
        "Collaborative governance",
        "Community engagement",
      ],
    },
  ];

  return (
    <section className="w-full flex flex-col items-center py-20 px-4 bg-white font-inter">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
        Trust Engineering Framework
      </h2>

      {/* Subtitle */}
      <p className="text-neutral-600 text-center max-w-3xl mb-14 leading-relaxed">
        Four foundational pillars that transform corporate social responsibility into verifiable
        trust and competitive advantage
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-10 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-start gap-4">
              {/* Icon wrapper EXACT like screenshot */}
              <div className={`p-4 rounded-xl ${card.bg} flex items-center justify-center`}>
                {card.icon}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-neutral-800">{card.title}</h3>
                <p className="text-neutral-600 mt-2 leading-relaxed">{card.desc}</p>
              </div>
            </div>

            {/* Bullet points EXACT style */}
            <ul className="mt-6 space-y-2 text-neutral-700 text-sm list-none">
              {card.points.map((p, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-green-600 rounded-full"></span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
