import React from 'react';

export const DevloperThings = () => {
  const data = [
    {
      index: "01/",
      title: "Beauty",
      para: "Developing stunning one-of-a-kind digital design that catches people’s eyes and brings your brand to life online.",
    },
    {
      index: "02/",
      title: "Thought",
      para: "Developing stunning one-of-a-kind digital design that catches people’s eyes and brings your brand to life online.",
    },
    {
      index: "03/",
      title: "Impact",
      para: "Developing stunning one-of-a-kind digital design that catches people’s eyes and brings your brand to life online.",
    }
  ];

  return (
    <div className='-w-screen text-white'>
      <div className='text-center text-4xl md:text-7xl relative'>
        <h1 className='relative inline-block'>
          We develop bespoke <br />
          websites with three <br />
          things in mind
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 20"
            className='absolute w-full h-6 left-0'
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 Q50,0 80,10 T200,100"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </h1>
      </div>
      {data.map((item, index) => (
        <div className='mx-8 md:mx-24 my-12' key={index}>
          <h1 className='text-lg md:text-xl mx-2'>{item.index}</h1>
          <div className='flex flex-col md:flex-row justify-between my-2 group'>
            <h1 className='text-4xl md:text-9xl opacity-70 group-hover:opacity-100 transition-opacity duration-100'>{item.title}</h1>
            <p className='w-96 text-xl md:text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-100'>{item.para}</p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};
