import { Check } from 'lucide-react'
import React from 'react'

const KeyFeatures = ({ features }) => {
  return (
    <section className="mt-20 flex flex-col items-center justify-center gap-10">
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-800">Key Features</h2>
      <p className="text-xl text-neutral-700 max-w-4xl px-8 text-center">
        Comprehensive capabilities designed to deliver measurable results
      </p>

      <div className="flex w-full flex-wrap items-center justify-center p-10 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-5 flex flex-col items-start justify-center gap-5 rounded-xl bg-neutral-100 border border-neutral-200 md:max-w-[28%] w-full"
          >
            {/* Icon Wrapper */}
            <div className="p-2 rounded-md bg-blue-100 flex items-center justify-center">
              <Check className="text-blue-700" size={20} />
            </div>

            <p className="text-md font-semibold">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
