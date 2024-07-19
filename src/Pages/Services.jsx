import React from 'react';
import { ProjectSlider } from '../Components/ProjectSlider';
import { GoArrowDownLeft } from "react-icons/go";


const Services = () => {
  return (
    <div className='flex flex-col justify-center max-w-screen text-white mx-4 md:mx-16 py-36'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
          <h1 className='mt-10 text-4xl md:text-6xl lg:text-8xl md:w-1/2 text-center md:text-left'>From concepts to conversions</h1>
          <video
            src="https://kota-content.b-cdn.net/app/uploads/2023/11/bento1.mp4"
            autoPlay
            loop
            muted
            className='w-52 h-52 md:w-96 md:h-96 rounded-full'>
          </video>
        </div>
        <p className='text-lg md:text-xl w-72 md:w-full lg:w-1/2 lg:ml-[750px] mt-8 text-center md:text-left'>A full-service, creative digital marketing agency that converts indifferent consumers into excited customers.</p>
      </div>
      <div className='flex flex-col md:flex-row gap-12 md:gap-24 mx-4 md:mx-12 lg:mx-52 mt-24'>
        <h1 className='text-4xl md:text-5xl w-full md:w-1/2 text-center md:text-left'>Clever marketing to cut through the noise.</h1>
        <p className='text-xl md:text-2xl w-full md:w-1/2 text-center md:text-left'>Creating everything from motion graphics to creative campaigns, we know how to elevate your brand’s online presence to the next level.</p>
      </div>
      <div className='flex flex-col md:flex-row justify-around items-center mx-4 md:mx-12 lg:mx-24 mt-24'>
        <div className='w-full md:w-[600px] text-center md:text-left my-2'>
          <h1 className='text-5xl md:text-7xl'>Motion graphics</h1>
          <p className='text-xl md:text-2xl pt-4'>From moving logo idents to immersive animations, we use the power of motion to bring brands to life.</p>
        </div>
        <div>
          <video
            src="https://kota-content.b-cdn.net/app/uploads/2023/11/motion-graphics.mp4"
            autoPlay
            loop
            muted
            className='w-52 h-52 md:w-[300px] md:h-[300px] rounded-tr-[100px]'>
          </video>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-around items-center mx-4 md:mx-12 lg:mx-24 my-24'>
        <div>
          <video
            src="https://kota-content.b-cdn.net/app/uploads/2023/11/bento1-2.mp4"
            autoPlay
            loop
            muted
            className='w-52 h-52 md:w-[300px] md:h-[300px] rounded-tl-[100px]'>
          </video>
        </div>
        <div className='w-full md:w-[600px] text-center md:text-left my-2'>
          <h1 className='text-5xl md:text-7xl'>Creative campaigns</h1>
          <p className='text-xl md:text-2xl pt-4'>From moving logo idents to immersive animations, we use the power of motion to bring brands to life.</p>
        </div>
      </div>
      <div className='md:mx-16 lg:mx-32 py-10 pb-32'>
          <div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
          >
            <h1 className='mx-8 md:mx-16 lg:mx-24 my-4 text-5xl md:text-9xl font-semibold drop-shadow-lg'>Our</h1>
            <div className='flex'>
              <h1 className='mx-16 md:mx-36 lg:mx-52 my-6 text-5xl md:text-9xl font-semibold drop-shadow-lg'>Results</h1>
              <GoArrowDownLeft size={"8rem"} />
            </div>
          </div>
          <div className='flex justify-center mx-4 mt-4 max-w-screen'>
            <ProjectSlider />
          </div>
        </div>
    </div>
  );
}

export default Services;
