import { ArrowRight, CircleCheckBig } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Guidelines = ({ guideline, color }) => {
  const { heading, description, schema, implementation } = guideline;
  const buttonColor = `bg-${color}-700`;
  const borderColor = `border-${color}-600`;
  const headingColor = `text-${color}-800`;
  const textColor = `text-${color}-600`;
  const BgColor = `bg-${color}-100`;
  return (
    <section className="mt-20   max-w-4xl mx-auto flex flex-col items-center justify-center gap-10">
      <div className="bg-gray-50 p-5 rounded-md flex flex-col items-center justify-center gap-10">
        <h2 className="text-3xl md:text-4xl text-neutral-800 font-bold">
          Technical Implementation Guidelines
        </h2>
        <div className="flex flex-col gap-5 items-start">
          <h3 className="text-2xl  text-neutral-800 font-bold">{heading}</h3>
          <p className="text-lg text-neutral-700">{description}</p>
        </div>
        <div className="mt-3 w-full bg-white p-8 rounded-xl border border-gray-200">
          <h4 className="text-xl font-bold ">{schema.heading}</h4>
          <div className="flex w-full mt-5 flex-wrap items-start justify-center space-y-5">
            {schema.points.map((point, index) => {
              return (
                <div
                  key={index}
                  className="max-w-1/2 w-full   flex items-start justify-start gap-2"
                >
                  <CircleCheckBig color="green" className="w-5 h-5" />
                  <span className="text-sm text-neutral-600">{point}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={`mt-10 p-10 rounded-xl flex items-center justify-center gap-10 border ${borderColor} ${BgColor}`}>
        <div>
          <h5 className={`${headingColor} text-xl md:text-2xl font-bold `}>
            {implementation.heading}
          </h5>
          <p className={`my-3 text-md ${textColor}`}>
            {implementation.description}
          </p>
          <button className={` ${buttonColor} text-white p-4 rounded-md flex items-center gap-3`}>
            Get Implementation Support <ArrowRight />{' '}
          </button>
        </div>
        <Image
          src={implementation.imageUrl}
          alt="image"
          width={400}
          height={400}
          className="rounded-xl"
        />
      </div>
    </section>
  );
};

export default Guidelines;
