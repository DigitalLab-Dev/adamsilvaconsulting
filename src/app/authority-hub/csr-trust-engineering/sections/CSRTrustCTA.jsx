import { ArrowRight, Globe } from "lucide-react";
import Link from "next/link";
import React from "react";

const CSRTrustCTA = () => {
  return (
    <section
      className="w-full py-28 flex flex-col items-center justify-center px-4 gap-8 bg-[#119E68] bg-gradient-to-r from-[#0EA86B] to-[#0B8F5B]"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
        Engineer Unshakeable Trust Through Authentic CSR
      </h2>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-white text-center max-w-3xl leading-relaxed">
        Transform corporate social responsibility into verifiable competitive
        advantage that builds lasting stakeholder trust
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-4">
        {/* Primary Button */}
        <Link href="/trust-engineering">
          <button
            className="bg-white text-[#119E68] text-lg font-medium px-8 py-3 rounded-md flex items-center gap-2 hover:opacity-90 transition-all duration-200 shadow-sm"
          >
            Start Trust Engineering Implementation
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>

        {/* Secondary Button */}
        <Link href="/authority-frameworks">
          <button
            className="border border-white text-white text-lg font-medium px-8 py-3 rounded-md flex items-center gap-2 hover:bg-white hover:text-[#119E68] transition-all duration-200"
          >
            Explore All Authority Frameworks
            <Globe className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CSRTrustCTA;
