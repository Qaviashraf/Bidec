import React, { useState } from 'react';
// import { MdOutlineArrowOutward } from "react-icons/md";

const Footer = () => {

  const [emailCopied, setEmailCopied] = useState(false)

    const buttons = [
        "Agencies", "SaaS and Tech", "B2B Transformation", "Healthcare", "Media and Entertainment", "Retail"
    ];

    const copyEmailToClipboard = () => {
        const email = "hello@bidec.com";
        navigator.clipboard.writeText(email)
            .then(() => {
                setEmailCopied(true);
                setTimeout(() => setEmailCopied(false), 2000)
            })
            .catch(err => {
                alert('Failed to copy: ', err);
            });
    };

    return (
        <div className='bg-[#000000] text-white max-w-screen border-t border-gray-600'>
            <div className='flex ml-6'>
                <div className='py-10 w-screen'>
                    <div className="flex justify-between w-full ">
                        <h1 className="text-3xl font-bold">Bidec</h1>
                        <div 
                            className="lg:text-6xl md:text-4xl text-xl cursor-pointer hover:text-blue-300 mr-10"
                            onClick={copyEmailToClipboard}
                        >
                            hello@bidec.com
                            <p className={`absolute bg-white text-black font-bold text-sm w-fit mx-4 mt-2 lg:mx-44 px-4 py-2 rounded-full ${ emailCopied ? 'block' : 'hidden'}`}>Email Copied</p>
                        </div>
                    </div>
                    <div className='flex py-4 gap-1'>
                        <div className='flex cursor-pointer transition-transform duration-100 hover:gap-0.5'>
                            LinkedIn 
                        </div>
                        <div className='flex cursor-pointer transition-transform duration-100 hover:gap-0.5'>
                            Facebook 
                        </div>
                        <div className='flex cursor-pointer transition-transform duration-100 hover:gap-0.5'>
                            Instagram 
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-between'>
                        <div className='flex text-lg gap-x-4 cursor-pointer'>
                        <h2>Contact Us</h2>
                        <h2>FAQs</h2>
                        <h2>Policies</h2>
                        </div>
                        <button className='mr-10 my-4 md:my-0 border border-white px-4 py-2 rounded-full hover:bg-gray-200 hover:text-black transition duration-300'>Subscribe Newsletter</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap mx-4'>
                <h2 className='text-lg mt-3 ml-4'>Our Sectors :</h2>
                <div className='flex flex-wrap my-2'>
                    {buttons.map((title, index) => (
                        <button
                            key={index}
                            className='mx-4 mb-4 border border-white px-2 py-1 rounded-full hover:bg-gray-200 hover:text-black transition duration-300'
                        >
                            {title}
                        </button>
                    ))}
                </div>
                <h2 className='text-sm lg:text-lg mt-3 ml-6'>© BIDEC 2024</h2>
            </div>
        </div>
    );
}

export default Footer;
