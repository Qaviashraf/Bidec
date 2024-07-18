
import React, { useEffect } from 'react'


const logos = [
  'Bidec',
  'Bidec',
  'Bidec',
  'Bidec',
  'Bidec',

];

const LogoSlider = () => {

  return (
    <div className="overflow-hidden relative w-screen text-white h-32 mb-4">
      <div className="flex w-[200%] animate-marquee">
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-32 h-32 m-2 mt-16 text-3xl">
            <h1>{logo}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;

