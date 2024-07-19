import React, { useEffect } from 'react'
import FOG from 'vanta/src/vanta.fog'
import { GoArrowDownLeft } from "react-icons/go";
import { motion } from 'framer-motion';

// Components
import QuestionAnswers from '../Components/QuestionAnswers';
import LogoSlider from '../Components/LogoSlider';
import { ServicesCard } from '../Components/ServicesCard';
import { ProjectSlider } from '../Components/ProjectSlider';
import { DevloperThings } from '../Components/DevloperThings';
import { Articles } from '../Components/Articles';
import { Work } from './Work';

const Home = () => {

  useEffect(() => {
    FOG({
      el: "#vanta",
      speed: 2,
      gyroControls: false,
      minHeight: 400.00,
      minWidth: 200.00,
      highlightColor: 0x111111,
      midtoneColor: 0x555555,
      lowlightColor: 0x757575,
      baseColor: 0x0
    })
  }, [])

  return (
    <>
      <div className='max-w-screen text-white' >

        {/* Intro */}
        <div className='mx-12 md:mx-0 py-36'>
          <h1 className='text-7xl md:text-9xl font-serif font-bold ml:44 md:ml-52 drop-shadow-lg'>rebel</h1>
          <h1 className='text-7xl md:text-9xl font-serif font-bold ml:52 md:ml-72 drop-shadow-lg'>against</h1>
          <div className='flex flex-wrap'>
            <h1 className='text-7xl md:text-9xl font-serif font-bold md:mx-52 drop-shadow-lg'>boring</h1>
            <p className='md:w-80 md:ml-32 mt-10 text-xl drop-shadow-md'>
              We're a creative web design and branding agency based in London that crafts beautiful work for brands who <b className='text-blue-200 hover:text-gray-300'>refuse to blend in.</b>
            </p>
          </div>
        </div>

        {/* Services Section */}
        <motion.div className='md:mx-16 lg:mx-32 py-10 pb-32'
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}>
          <h1 className='mx-8 md:mx-16 lg:mx-24 my-4 text-5xl md:text-9xl font-semibold drop-shadow-lg'>Our</h1>
          <div className='flex'>
            <h1 className='mx-16 md:mx-36 lg:mx-52 my-6 text-5xl md:text-9xl font-semibold drop-shadow-lg'>Services</h1>
            <GoArrowDownLeft size={"8rem"} />
          </div>
          <div className='flex justify-center mx-4 max-w-screen'>
            <ServicesCard />
          </div>
        </motion.div>

        {/* Projects Section */}
        <div className='md:mx-16 lg:mx-32 py-10 pb-32'>
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
          >
            <h1 className='mx-8 md:mx-16 lg:mx-24 my-4 text-5xl md:text-9xl font-semibold drop-shadow-lg'>Our</h1>
            <div className='flex'>
              <h1 className='mx-16 md:mx-36 lg:mx-52 my-6 text-5xl md:text-9xl font-semibold drop-shadow-lg'>Results</h1>
              <GoArrowDownLeft size={"8rem"} />
            </div>
          </motion.div>
          <div className='flex justify-center mx-4 mt-4 max-w-screen'>
            <ProjectSlider />
          </div>
        </div>

        {/* Projects Section */}
        <div className='md:mx-16 lg:mx-32 py-10 pb-32'>
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
          >
            <h1 className='mx-8 md:mx-16 lg:mx-24 my-4 text-5xl md:text-9xl font-semibold drop-shadow-lg'>Our</h1>
            <div className='flex'>
              <h1 className='mx-16 md:mx-36 lg:mx-52 my-6 text-5xl md:text-9xl font-semibold drop-shadow-lg'>Work</h1>
              <GoArrowDownLeft size={"8rem"} />
            </div>
          </motion.div>
          <div className='flex justify-center mx-4 mt-4 max-w-screen'>
            <Work />
          </div>
        </div>

        <div className=''>
          <DevloperThings />
        </div>

        {/* FAQ Section */}
        <div className='max-w-screen py-10 pb-32'>
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
          >
            <h1 className='mx-8 md:mx-16 lg:mx-24 my-4 text-9xl drop-shadow-lg'>FAQ's</h1>
          </motion.div>
          <QuestionAnswers />
        </div>

        {/* Articles Section */}
        <div className='max-w-screen py-10 pb-32'>
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
          >
            <h1 className='mx-8 md:mx-16 lg:mx-24 my-4 text-5xl md:text-9xl drop-shadow-lg'>Articles</h1>
          </motion.div>
          <Articles />
        </div>

      </div>
      {/* Logo Slider */}
      <div >
        {/* <LogoSlider /> */}
      </div>
    </>
  );
};

export default Home;


