import React, { useState } from 'react';

export const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const data = [
    {
      title: "Tangerine",
      image: "https://kota-content.b-cdn.net/app/uploads/2024/01/tangerine-images0-2000x1126.jpg",
      detail: "This is the detail for Tangerine project."
    },
    {
      title: "Florence",
      image: "https://kota-content.b-cdn.net/app/uploads/2024/05/hero-2000x1126.png",
      detail: "This is the detail for Florence project."
    }
  ];

  return (
    <div>
      <div 
        className='my-4 ' 
        onMouseEnter={() => setHoveredIndex('floan')} 
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <h1 className='bg-white text-black rounded-t-2xl font-bold py-2 px-6 w-fit'>Floan</h1>
        <div className='relative '>
        <img src="https://kota-content.b-cdn.net/app/uploads/2024/02/08-5-2000x1125.jpg" alt="Floan" className='w-[1030px] h-fit' />
        {hoveredIndex === 'floan' && (
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-white p-4'>
            <p>This is the detail for Floan project.</p>
          </div>   
        )}
        </div>
      </div>
      <div className='flex flex-col md:flex-row'>
        {data.map((item, index) => (
          <div 
            key={index} 
            className='relative mx-2'
            onMouseEnter={() => setHoveredIndex(index)} 
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h1 className='bg-white text-black rounded-t-xl font-bold py-2 px-6 w-fit'>{item.title}</h1>
            <div className='relative'>
              <img src={item.image} alt={item.title} className='w-[500px] h-fit' />
              {hoveredIndex === index && (
                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-white p-4'>
                  <p>{item.detail}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
