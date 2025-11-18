import React from "react";

const stats = [
  {
    value: "94%",
    title: "Stakeholder Trust Score",
    desc: "Improvement in verified stakeholder trust ratings",
  },
  {
    value: "380%",
    title: "Transparency Index Increase",
    desc: "Enhancement in public transparency and disclosure scores",
  },
  {
    value: "99.7%",
    title: "Impact Verification Accuracy",
    desc: "Accuracy of AI-powered impact measurement and verification",
  },
  {
    value: "45%",
    title: "Brand Trust Premium",
    desc: "Increase in brand value attributed to trust and CSR leadership",
  },
  {
    value: "275%",
    title: "Stakeholder Engagement Growth",
    desc: "Improvement in meaningful stakeholder participation",
  },
  {
    value: "85%",
    title: "ESG Rating Enhancement",
    desc: "Improvement in Environmental, Social, and Governance scores",
  },
];

export default function CSRTrustImpact() {
  return (
    <section className="w-full bg-gray-50 py-20 px-4 flex flex-col items-center">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
        Measurable Trust & Impact Outcomes
      </h2>

      <p className="text-gray-600 text-center max-w-3xl text-sm mb-14 leading-relaxed">
        Quantified results achieved through strategic CSR trust engineering implementation
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-green-50 border border-green-300 rounded-xl px-10 py-8 text-center"
          >
            <h3 className="text-3xl font-bold text-green-600 mb-1">
              {item.value}
            </h3>

            <p className="text-gray-900 font-semibold text-sm mb-1">
              {item.title}
            </p>

            <p className="text-gray-600 text-xs leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
