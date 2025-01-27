import React, { useState, useEffect, useRef } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { motion, useAnimation, useInView } from 'framer-motion';

const data = [
  {
    title: "Wogan Coffee",
    percentage: "83.14 %",
    description: "increase in sales after 1 year.",
    imgSrc: "https://kota-content.b-cdn.net/app/uploads/2024/05/wogan-stat-1-768x621.png"
  },
  {
    title: "Pison",
    percentage: "45.67 %",
    description: "improvement in user engagement.",
    imgSrc: "https://kota-content.b-cdn.net/app/uploads/2024/05/pison-stats-768x621.png"
  },
  {
    title: "DK&A",
    percentage: "72.88 %",
    description: "increase in efficiency.",
    imgSrc: "https://kota-content.b-cdn.net/app/uploads/2024/05/DK-Stat-768x621.png"
  }
];

export const ProjectSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        rotateY: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [isInView, controls]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentData = data[currentIndex];

  return (
    <motion.div
      ref={ref}
      className='relative rounded-3xl bg-[#133939] text-white p-6 drop-shadow-2xl	'
      initial={{ opacity: 0, rotateY: 90 }}
      animate={controls}
      transition={{ duration: 0.2 }}
    >
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-bold'>
          {currentData.title}
        </h1>
        <div className='flex justify-center items-center cursor-pointer rounded-bl-3xl rounded-tr-3xl border border-gray-500 bg-[#0C1A16] hover:bg-transparent w-12 h-12' onClick={handleNext}>
          <FaArrowCircleRight size={"1.5em"} color='white' />
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center mt-6'>
        <motion.div 
          className='md:w-[250px] mr-20' 
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-2xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-blue-300 to-red-400 bg-clip-text text-transparent animate-gradient'>
            {currentData.percentage}
          </h1>
          <h2 className='text-lg md:text-2xl text-gray-400'>{currentData.description}</h2>
        </motion.div>
        <motion.div
          className='w-72 md:w-96'
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img className='rounded-3xl' src={currentData.imgSrc} alt={currentData.title} />
        </motion.div>
      </div>
      <div className='flex justify-between mt-2'>
        <div className='flex justify-center items-center cursor-pointer rounded-bl-3xl rounded-tr-3xl border border-gray-500 bg-[#0C1A16] hover:bg-transparent w-12 h-12' onClick={handlePrev}>
          <FaArrowCircleLeft size={"1.5em"} color='white' />
        </div>
        <div className='flex justify-center'>
          <button className='px-4 py-2 rounded-2xl border border-white hover:bg-[#0C1A16] text-white hover:text-white transition duration-300'>
            View Project
          </button>
        </div>
      </div>
    </motion.div>
  );
};
