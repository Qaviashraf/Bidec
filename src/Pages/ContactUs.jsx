import React, { useRef } from 'react'
import { FiArrowDownLeft } from "react-icons/fi";
import { IoArrowForward } from "react-icons/io5";

const ContactUs = () => {
  const data = [
    { title: 'A new website' },
    { title: 'Branding' },
    { title: 'Motion graphics' },
    { title: 'E-Commerce' },
    { title: 'Development' },
    { title: 'On-going support' },
    { title: 'App from scratch' }
  ];

  const formDataRef = useRef();

  const submit = (e) => {
    e.preventDefault();
    const form = formDataRef.current;
    const formData = {
      firstName: form['first-name'].value,
      lastName: form['last-name'].value,
      email: form['email'].value,
      budget: form['budget'].value,
      message: form['message'].value,
      newsletter: form['newsletter'].checked,
      dataConsent: form['data-consent'].checked,
    };
    console.log(formData);
  };


  return (
    <div className='py-32 bg-gradient-to-r from-[#227C85] to-[#0C1A16] animate-gradientbg text-white px-10 md:px-20'>
      <h1 className='md:text-7xl text-4xl w-3/4 '>Good things happen when you say
        <span> hey.
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 20"
            className='absolute lg:w-96 hidden lg:block w-52 left-0 h-6 '
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 Q50,0 80,10 T200,100"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </span>
      </h1>
      <div className="md:mt-20 mt-10 md:text-5xl text-2xl">
        <div className="flex justify-between"><h1 className='mb-3'>I am interested in :</h1> <h1 className='text-9xl hidden md:block'><FiArrowDownLeft /></h1></div>
        {
          data.map((data, index) => (
            <button key={index} className='rounded-full outline outline-1 outline-offset-2 md:m-3 m-2 p-2 md:text-lg text-sm px-5 hover:bg-[#0C1A16] hover:text-white' value={data.title}>{data.title}</button>
          ))
        }
      </div>
      <form ref={formDataRef} onSubmit={submit} className='mt-20'>
        <input name='first-name' className='outline-0 border-b p-3 w-full text-white text-lg md:text-2xl mx-2 md:w-1/2 bg-transparent' type="text" placeholder='First name*' />
        <input name='last-name' className='outline-0 border-b p-3 text-white text-lg md:text-2xl mx-2 w-full md:w-1/2 bg-transparent' type="text" placeholder='Last name*' />
        <input name='email' className='outline-0 border-b p-3 text-white text-lg md:text-2xl mx-2 w-full md:w-2/3 bg-transparent' type="email" placeholder='Email*' />
        <br />
        <input name='budget' className='outline-0 border-b p-3 text-white text-lg md:text-2xl mx-2 w-full md:w-3/4 bg-transparent' type="number" placeholder='Budget (€)' />
        <input name='message' className='outline-0 border-b p-3 text-white text-lg md:text-2xl mx-2 w-full md:w-3/4 bg-transparent' type="text" placeholder='Message' />
        <br />
        <div className="flex justify-between">
          <div>
            <input name='newsletter' className='m-2 mt-8' type="checkbox" />I'm happy to receive a monthly newsletter from KOTA
            <br />
            <input name='data-consent' className='m-2' type="checkbox" />I understand that KOTA will securely hold my data in accordance with their privacy policy.
          </div>
        </div>
        <button className='rounded-full outline outline-1 outline-offset-1 my-5 p-2 flex md:text-lg text-sm px-5 hover:bg-[#0C1A16] hover:text-white' type='submit'>Submit <IoArrowForward className='ms-2 my-1.5' /></button>
      </form>
      <div className='flex justify-between'>
        <div className="">
          <div className="">
            <h1>London</h1>
            <p>KOTA
              1-5 Clerkenwell Rd
              London
              EC1M 5PA</p>
          </div>
          <div className=""></div>
        </div>
        <div className=""></div>
      </div>
    </div>
  )
}

export default ContactUs
