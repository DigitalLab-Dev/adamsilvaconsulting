import React from 'react';

const Framework = () => {
  return (
    <section className="mt-20 px-8 flex items-center justify-center flex-col gap-5">
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-700">
        The Authority Building Framework
      </h2>
      <p className="text-xl max-w-4xl text-center text-neutral-600">
        A systematic approach to transforming businesses into authoritative
        sources that AI engines trust and cite
      </p>

      <div className="p-8 rounded-md shadow-lg max-w-3xl bg-white flex flex-col items-center gap-4">
        <p className="italic text-lg text-center text-neutral-600">
          "The strategic objective for digital visibility has irrevocably
          shifted from ranking for keywords to being cited for authority.
          Success demands a holistic strategy that seamlessly integrates content
          creation, technical architecture, and multi-platform brand presence."
        </p>
        <span className="text-blue-600 text-sm font-semibold ">— Key Strategic Insight</span>
      </div>
    </section>
  );
};

export default Framework;
