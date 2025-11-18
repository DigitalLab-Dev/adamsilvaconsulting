import React from "react";
import { Lock, CheckCircle } from "lucide-react";

export default function CSRTrustTechnologies() {
  const cards = [
    {
      title: "Blockchain Impact Ledger",
      desc:
        "Immutable recording of social and environmental impact data with transparent, verifiable history",
      points: [
        "Tamper-proof records",
        "Public verification",
        "Audit trail transparency",
        "Trust enhancement",
      ],
    },
    {
      title: "AI-Powered Monitoring",
      desc:
        "Real-time tracking of CSR initiatives through satellite imagery, IoT sensors, and data analytics",
      points: [
        "Continuous monitoring",
        "Objective measurement",
        "Early issue detection",
        "Automated reporting",
      ],
    },
    {
      title: "Smart Contract Execution",
      desc:
        "Automated execution of CSR commitments with transparent triggers and verifiable outcomes",
      points: [
        "Automated compliance",
        "Transparent execution",
        "Stakeholder confidence",
        "Reduced oversight costs",
      ],
    },
    {
      title: "Stakeholder Sentiment Analytics",
      desc:
        "AI analysis of stakeholder feedback, sentiment, and engagement across all communication channels",
      points: [
        "Real-time insights",
        "Proactive response",
        "Improved relations",
        "Strategic guidance",
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-4 flex flex-col items-center">

      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-3">
        Advanced Verification Technologies
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 text-center max-w-3xl text-sm mb-16 leading-relaxed">
        Cutting-edge technologies that provide undeniable proof of social responsibility
        commitment and impact
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {cards.map((card, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-2xl p-10 bg-white"
          >
            <div className="flex items-start gap-4 mb-4">
              {/* Icon Block EXACT like screenshot */}
              <div className="bg-green-100 p-4 rounded-xl flex items-center justify-center">
                <Lock className="w-7 h-7 text-green-600" />
              </div>

              <div>
                <h3 className="text-gray-900 font-semibold text-base">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>

            {/* Points with EXACT green check icons */}
            <ul className="mt-4 space-y-2">
              {card.points.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="text-green-600 w-4 h-4 mt-0.5" />
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
