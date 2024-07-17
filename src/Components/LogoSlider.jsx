import HALO from 'vanta/src/vanta.halo'
import React, { useEffect } from 'react'


const logos = [
  'Bidec',
  'Bidec',
  'Bidec',
  'Bidec',
  'Bidec',

];

const LogoSlider = () => {
  // useEffect(() => {
  // HALO({
  //   el: "#vantahalo",
  //   // mouseControls: true,
  //   // touchControls: true,
  //   gyroControls: false,
  //   minHeight: 150.00,
  //   minWidth: 300.00,
  //   baseColor: 0x0,
  //   backgroundColor: 0x0,
  //   amplitudeFactor: 0.40,
  //   size: 1.20
  // })
  // }, [])
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

