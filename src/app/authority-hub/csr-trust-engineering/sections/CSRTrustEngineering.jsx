import React from "react";
import { CheckCircle2 } from "lucide-react";

const CSRTrustEngineering = () => {
  const traditional = [
    "Performative initiatives without measurable social impact",
    "Limited transparency leading to stakeholder skepticism",
    "Disconnected initiatives that fail to build brand trust",
    "Manual reporting that lacks real-time verification",
  ];

  const evolution = [
    "Authentic impact with AI-powered measurement and verification",
    "Radical transparency through automated disclosure systems",
    "Integrated CSR strategy that builds brand authority",
    "Real-time, blockchain-verified impact reporting",
  ];

  return (
    <section className="w-full py-20 px-4 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        The Trust Engineering Imperative
      </h2>

      {/* Subtitle */}
      <p className="text-center text-gray-600 max-w-3xl mb-12 leading-relaxed">
        In an era of increasing skepticism and demand for transparency, authentic
        corporate social responsibility has evolved from nice-to-have to
        business-critical for sustainable competitive advantage.
      </p>

      {/* Card */}
      <div
        className="
          bg-white shadow-md rounded-2xl p-10 
          w-full max-w-6xl border border-gray-200
          flex flex-col md:flex-row gap-12
        "
      >
        {/* Left Column – Traditional CSR */}
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-5">Traditional CSR Limitations</h3>

          <ul className="space-y-6">
            {traditional.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                {/* RED SOLID DOT */}
                <span className="w-3 h-3 rounded-full bg-red-500 mt-[6px]" />
                <span className="text-gray-800 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column – Trust Engineering */}
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-5">Trust Engineering Evolution</h3>

          <ul className="space-y-6">
            {evolution.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-[2px]" />
                <span className="text-gray-800 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CSRTrustEngineering;
