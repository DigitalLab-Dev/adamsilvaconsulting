import React from 'react';
import { Play, Cog, FileText, BarChart } from 'lucide-react';

// Data structure for the four resource cards
const resources = [
  {
    icon: Play,
    title: "Quick Start Guides",
    description: "Essential first steps for immediate implementation",
    count: 6,
    color: "text-[#34A853]",
    bgColor: "bg-[#F3FCEF]", // Light Green
    borderColor: "border-[#D1EED5]",
  },
  {
    icon: Cog,
    title: "Technical Frameworks",
    description: "Advanced implementation methodologies",
    count: 8,
    color: "text-[#4285F4]",
    bgColor: "bg-[#F4F9FF]", // Light Blue
    borderColor: "border-[#D0E0FF]",
  },
  {
    icon: FileText,
    title: "Strategy Templates",
    description: "Proven templates and worksheets",
    count: 12,
    color: "text-[#9354F9]",
    bgColor: "bg-[#FBF6FF]", // Light Purple
    borderColor: "border-[#EDE2FF]",
  },
  {
    icon: BarChart,
    title: "Measurement Tools",
    description: "KPIs, metrics, and tracking systems",
    count: 5,
    color: "text-[#E67C3A]",
    bgColor: "bg-[#FFF9F4]", // Light Orange
    borderColor: "border-[#FFE5D3]",
  },
];

const ResourceCard = ({ icon: Icon, title, description, count, color, bgColor, borderColor }) => {
  return (
    <div
      className={`
        flex flex-col items-center p-6  text-center h-full
        rounded-2xl border-2 transition-all duration-300 shadow-md hover:shadow-xl
        ${bgColor} ${borderColor}
        min-w-[280px]
      `}
    >
      {/* Icon */}
      <div className={`${color}`}>
        <Icon className="w-8 h-8 sm:w-10 sm:h-10 mb-2" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className={`text-xl font-semibold mb-2 text-blue-800 `}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 text-sm sm:text-base">
        {description}
      </p>

      {/* Resources Available Count */}
      <p className={`font-medium text-base sm:text-lg mt-auto ${color}`}>
        {count} Resources Available
      </p>
    </div>
  );
};


const ResourceCategory = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <header className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl  font-bold text-gray-800 mb-4">
            Resource Categories
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Organized by implementation phase and expertise level for systematic AI authority building
          </p>
        </header>

        {/* Cards Grid - Fully Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              {...resource}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceCategory;