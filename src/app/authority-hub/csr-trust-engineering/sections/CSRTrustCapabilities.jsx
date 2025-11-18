import { CheckCircle } from "lucide-react";

export default function CSRTrustCapabilities() {
  const cards = [
    {
      title: "AI-Powered Impact Tracking",
      desc: "Advanced systems for real-time measurement and verification of social and environmental impact",
      items: [
        "Real-time environmental monitoring with IoT integration",
        "Social impact measurement through community feedback",
        "Automated sustainability reporting with verified data",
        "Predictive impact modeling for strategic planning",
      ],
    },
    {
      title: "Transparency & Disclosure Systems",
      desc: "Comprehensive platforms for open communication of business practices, decisions, and impact",
      items: [
        "Open-source impact dashboards with public access",
        "Automated regulatory compliance reporting",
        "Real-time decision-making process documentation",
        "Stakeholder communication automation and engagement",
      ],
    },
    {
      title: "Ethical AI Governance",
      desc: "Frameworks for responsible AI development and deployment that builds stakeholder confidence",
      items: [
        "AI bias detection and mitigation systems",
        "Algorithmic transparency and explainability",
        "Ethical AI committee governance structures",
        "Responsible AI training and certification programs",
      ],
    },
    {
      title: "Stakeholder Engagement Intelligence",
      desc: "AI-enhanced platforms for meaningful dialogue and collaborative impact initiatives",
      items: [
        "Multi-channel stakeholder communication platforms",
        "Sentiment analysis and feedback integration",
        "Collaborative governance and decision-making tools",
        "Community impact co-creation platforms",
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 flex flex-col items-center">

      {/* Heading */}
      <h2 className="text-3xl font-semibold text-gray-900 text-center mb-2">
        Advanced CSR Intelligence Capabilities
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 text-center max-w-3xl text-sm mb-14 leading-relaxed">
        Comprehensive AI-powered capabilities that transform corporate social responsibility
        into verifiable competitive advantage
      </p>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-10 bg-white shadow-sm"
          >
            {/* Title */}
            <h3 className="text-gray-900 font-semibold text-base mb-2">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              {card.desc}
            </p>

            {/* Bullet List */}
            <ul className="space-y-3">
              {card.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <CheckCircle className="text-green-500 w-4 h-4 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}
