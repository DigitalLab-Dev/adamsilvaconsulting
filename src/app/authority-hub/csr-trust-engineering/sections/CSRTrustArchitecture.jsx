import { Check, Star } from "lucide-react";

const ArchitectureCard = ({
  number,
  title,
  description,
  coreComponents,
  outcomes,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm px-10 py-8 w-full max-w-7xl mx-auto">

      {/* === 3-COLUMN LAYOUT EXACTLY AS IMAGE === */}
      <div className="grid grid-cols-12 gap-10 items-start">

        {/* LEFT COLUMN */}
        <div className="col-span-4">
          <div className="flex items-center gap-3 mb-3">
            {/* Number Icon EXACT (green circle, white number) */}
            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-green-600 text-white text-sm font-semibold">
              {number}
            </div>

            <h3 className="text-[15px] font-semibold text-gray-800 leading-none">
              {title}
            </h3>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* MIDDLE COLUMN – KEY Components */}
        <div className="col-span-4">
          <h4 className="font-semibold text-gray-800 text-sm mb-2">
            Key Components:
          </h4>
          <ul className="space-y-2">
            {coreComponents.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                {/* Green star icon EXACT like screenshot */}
                <Star className="w-4 h-4 text-green-600 mt-[2px]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN – Trust Outcomes */}
        <div className="col-span-4">
          <h4 className="font-semibold text-gray-800 text-sm mb-2">
            Trust Outcomes:
          </h4>
          <ul className="space-y-2">
            {outcomes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                {/* Exact green star icon as shown in your image */}
                <Star className="w-4 h-4 text-green-600 mt-[2px]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default function CSRTrustArchitecture() {
  return (
    <section className="w-full py-16 bg-gray-50 flex flex-col items-center px-4">

      {/* TITLE EXACT AS IMAGE */}
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
        Four-Dimensional Trust Building Architecture
      </h2>

      <p className="text-gray-600 text-center max-w-3xl text-sm mb-12">
        Comprehensive framework for building unshakeable stakeholder trust through<br />
        authentic commitment and verifiable action
      </p>

      <div className="flex flex-col gap-8 w-full">

        {/* ============ CARD 1 ============ */}
        <ArchitectureCard
          number="1"
          title="Authenticity Foundation"
          description="Establish genuine commitment to social responsibility through aligned business practices and measurable impact"
          coreComponents={[
            "Mission-business alignment",
            "Authentic value integration",
            "Genuine impact creation",
            "Consistent practice delivery",
          ]}
          outcomes={[
            "Credible brand positioning",
            "Stakeholder confidence",
            "Authentic differentiation",
            "Sustainable reputation",
          ]}
        />

        {/* ============ CARD 2 ============ */}
        <ArchitectureCard
          number="2"
          title="Transparency Excellence"
          description="Implement comprehensive disclosure systems that demonstrate openness, accountability, and continuous improvement"
          coreComponents={[
            "Open impact reporting",
            "Process documentation",
            "Decision transparency",
            "Failure acknowledgment",
          ]}
          outcomes={[
            "Enhanced credibility",
            "Stakeholder trust",
            "Regulatory confidence",
            "Public accountability",
          ]}
        />

        {/* ============ CARD 3 ============ */}
        <ArchitectureCard
          number="3"
          title="Verification Systems"
          description="Deploy third-party verification and blockchain-based tracking for undeniable proof of social and environmental commitments"
          coreComponents={[
            "Independent auditing",
            "Blockchain tracking",
            "Real-time monitoring",
            "Public verification",
          ]}
          outcomes={[
            "Verifiable impact",
            "Undeniable proof",
            "Enhanced trust",
            "Competitive differentiation",
          ]}
        />

        {/* ============ CARD 4 ============ */}
        <ArchitectureCard
          number="4"
          title="Continuous Evolution"
          description="Establish learning systems that adapt and improve CSR initiatives based on feedback, results, and changing stakeholder needs"
          coreComponents={[
            "Feedback integration",
            "Performance optimization",
            "Adaptive strategies",
            "Innovation implementation",
          ]}
          outcomes={[
            "Continuous improvement",
            "Stakeholder satisfaction",
            "Future-ready positioning",
            "Sustained impact",
          ]}
        />

      </div>
    </section>
  );
}
