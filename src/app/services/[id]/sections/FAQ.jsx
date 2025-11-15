import React from 'react'

const FAQ = ({faqs}) => {
  return (
    <section className="mt-20 flex flex-col items-center justify-center gap-10">
     <h2 className="text-3xl md:text-4xl font-bold text-neutral-800">
        Frequently Asked Questions
      </h2>
      <div className="mt-5 flex flex-col w-full max-w-4xl mx-auto items-center justify-center gap-10">
        {
          faqs.map((faq , index)=>(
            <div key={index} className='w-full rounded-xl shadow-lg bg-white p-8'>
         <h5 className='text-lg md:text-xl font-bold text-black'>{faq.question}</h5>
         <p className='mt-4 text-lg text-neutral-700'>{faq.answer}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default FAQ