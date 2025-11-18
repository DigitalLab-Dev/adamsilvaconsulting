import React from "react";
import { CheckCircle2, CircleDot } from "lucide-react";

const phases = [
  {
    number: "1",
    category: "Foundation & Assessment",
    title: "Current State Analysis & Vision Development",
    duration: "4–6 weeks",
    description:
      "Comprehensive evaluation of existing CSR initiatives and development of AI-enhanced trust engineering strategy.",
    keyActivities: [
      "CSR maturity assessment",
      "Stakeholder analysis",
      "Trust gap identification",
      "Strategic vision development",
    ],
    deliverables: [
      "CSR baseline report",
      "Trust engineering strategy",
      "Stakeholder mapping",
      "Implementation roadmap",
    ],
  },
  {
    number: "2",
    category: "System Design & Development",
    title: "Transparency & Verification System Creation",
    duration: "8–12 weeks",
    description:
      "Development of comprehensive transparency platforms and AI-powered verification systems for impact tracking.",
    keyActivities: [
      "Platform architecture design",
      "AI system development",
      "Verification protocol creation",
      "Integration planning",
    ],
    deliverables: [
      "Transparency platform",
      "AI verification systems",
      "Impact tracking protocols",
      "Integration guidelines",
    ],
  },
  {
    number: "3",
    category: "Pilot Implementation & Testing",
    title: "Controlled Deployment & Optimization",
    duration: "6–8 weeks",
    description:
      "Careful rollout of trust engineering systems with continuous monitoring, stakeholder feedback, and performance optimization.",
    keyActivities: [
      "Pilot program launch",
      "Stakeholder engagement",
      "System testing",
      "Performance optimization",
    ],
    deliverables: [
      "Pilot results analysis",
      "System optimization",
      "Stakeholder feedback",
      "Performance metrics",
    ],
  },
  {
    number: "4",
    category: "Full Deployment & Evolution",
    title: "Complete Implementation & Continuous Improvement",
    duration: "Ongoing",
    description:
      "Full-scale deployment of CSR trust engineering systems with ongoing evolution and strategic advancement.",
    keyActivities: [
      "Full system deployment",
      "Continuous monitoring",
      "Strategic evolution",
      "Innovation integration",
    ],
    deliverables: [
      "Complete CSR platform",
      "Performance dashboards",
      "Evolution strategy",
      "Innovation roadmap",
    ],
  },
];

const PhaseCard = ({ data }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 w-full">

      {/* Header Row */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-semibold">
          {data.number}
        </div>

        <div>
          <p className="text-xs text-green-700 font-medium">{data.category}</p>
          <h2 className="text-[15px] font-semibold text-gray-900 leading-snug">
            {data.title}
          </h2>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm leading-relaxed mb-5">
        {data.description}
      </p>

      <hr className="mb-5" />

      {/* Duration */}
      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold text-gray-800 text-sm">Timeline:</p>
        <p className="text-green-700 text-sm font-medium">{data.duration}</p>
      </div>

      {/* Key Activities */}
      <div className="mb-5">
        <p className="font-semibold text-gray-800 text-sm mb-2">
          Key Activities:
        </p>

        <ul className="space-y-2">
          {data.keyActivities.map((item, index) => (
            <li key={index} className="flex gap-2 text-sm text-gray-700">
              <CircleDot className="text-green-600 w-3 h-3 mt-[3px]" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Deliverables */}
      <div>
        <p className="font-semibold text-gray-800 text-sm mb-2">
          Deliverables:
        </p>

        <ul className="space-y-2">
          {data.deliverables.map((item, index) => (
            <li key={index} className="flex gap-2 text-sm text-gray-700">
              <CheckCircle2 className="text-green-600 w-4 h-4 mt-[2px]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const CSRTrustImplementation = () => {
  return (
    <section className="w-full py-16 bg-gray-50 flex flex-col items-center px-4">

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-3">
        Strategic Implementation Roadmap
      </h1>

      <p className="text-gray-600 text-center max-w-3xl text-sm mb-14 leading-relaxed">
        Phased approach to implementing CSR trust engineering with verifiable milestones <br />
        and stakeholder validation
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {phases.map((phase, i) => (
          <PhaseCard key={i} data={phase} />
        ))}
      </div>
    </section>
  );
};

export default CSRTrustImplementation;
