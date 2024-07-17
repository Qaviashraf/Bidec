import React, { useEffect } from 'react'
import FOG from 'vanta/src/vanta.fog'

import { GoArrowDownLeft } from "react-icons/go";

// Components
import QuestionAnswers from '../Components/QuestionAnswers';
import  LogoSlider  from '../Components/LogoSlider';
import { ServicesCard } from '../Components/ServicesCard';
import { ProjectSlider } from '../Components/ProjectSlider';

const Home = () => {

  useEffect(() => {
    FOG ({
      el: "#vanta",
      speed: 2,
  gyroControls: false,
  minHeight: 900.00,
  minWidth: 1040.00,
  highlightColor: 0x111111,
  midtoneColor: 0x555555,
  lowlightColor: 0x757575,
  baseColor: 0x0
  })
  }, [])

  return (
    <>
    <div className='max-w-screen text-white' >

      {/* Intro  */}
      <div className='mx-12 md:mx-0 py-24' >
      <h1 className='text-7xl md:text-9xl font-serif font-bold ml:44 md:ml-52 drop-shadow-lg'>rebel</h1>
      <h1 className='text-7xl md:text-9xl font-serif font-bold ml:52 md:ml-72 drop-shadow-lg'>against</h1>
      <div className='flex flex-wrap'>
        <h1 className='text-7xl md:text-9xl font-serif font-bold md:mx-52 drop-shadow-lg'>boring</h1>
        <p className='md:w-80 md:ml-32 mt-10 text-xl drop-shadow-md'>
          We're a creative web design and branding agency based in London that crafts beautiful work for brands who <b className='text-blue-200 hover:text-gray-300'>refuse to blend in.</b>
        </p>
      </div>
      </div>

      {/* Services Section  */}
      <div className='md:mx-16 py-10 pb-32'>
        <h1 className='mx-8 md:mx-16 lg:mx-24 my-4 text-5xl md:text-8xl font-semibold drop-shadow-lg'>Our</h1>
        <div className='flex'>
        <h1 className='mx-16 md:mx-36 lg:mx-52 my-6 text-5xl md:text-8xl font-semibold drop-shadow-lg'>Services</h1>
        <GoArrowDownLeft size={"8rem"}/>
        </div>
        <div className='flex justify-center mx-4 max-w-screen'>
        <ServicesCard />
        </div>
      </div>

      {/* Projects Section  */}
      <div className='md:mx-16 py-10 pb-32'>
        <h1 className='mx-8 md:mx-16 lg:mx-24 my-4 text-5xl md:text-8xl font-semibold drop-shadow-lg'>Our</h1>
        <div className='flex'>
        <h1 className='mx-16 md:mx-36 lg:mx-52 my-6 text-5xl md:text-8xl font-semibold drop-shadow-lg'>Results</h1>
        <GoArrowDownLeft size={"8rem"}/>
        </div>
        <div className='flex justify-center mx-4 max-w-screen'>
        <ProjectSlider />
        </div>
      </div>

      {/* FAQ Section */}
      <div className='py-10 pb-32'>
        <h1 className='mx-8 md:mx-16 lg:mx-24 my-4 text-7xl font-semibold drop-shadow-lg'>FAQ's</h1>
        <QuestionAnswers />
      </div>
      
</div>
      {/* Logo Slider  */}
      <div >
        {/* <LogoSlider />      */}
    </div>
    </>
  );
};

export default Home;

