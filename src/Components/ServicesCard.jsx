import React from 'react'

export const ServicesCard = () => {
    const services = [
        {
            title: "Web design & development",
            keywords: ["Design", "Copywriting", "WordPress"],
            intro: "Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.",
            video: "https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4",
        },
        {
            title: "Branding",
            keywords: ["Brand strategy", "Tone of voice", "Visual identity"],
            intro: "It all starts with your brand. We use sound strategic thinking to create or elevate your brand identity, from your visuals to your voice.",
            video: "https://kota-content.b-cdn.net/app/uploads/2024/02/homepage-1.mp4",
        },
        {
            title: "Digital Marketing",
            keywords: ["Motion graphics", "Creative campaigns", "Marketing support"],
            intro: "Delivering eye-catching motion graphics and campaigns that earn attention, spark emotion and increase conversions.",
            video: "https://kota-content.b-cdn.net/app/uploads/2024/02/homepage-3.mp4"
        }
    ];

    return (
        <div className='flex flex-col items-center space-y-8'>
            {services.map((service, index) => (
                <div key={index} className='flex flex-col md:flex-row justify-center w-fit bg-white text-black px-16 py-20 rounded-br-[100px] rounded-tl-[100px]'>
                    <div className='w-52 md:w-96 md:mr-12'>
                        <h1 className='text-3xl md:text-5xl'>{service.title}</h1>
                        <div className='flex flex-wrap my-4 gap-2'>
                            {service.keywords.map((keyword, keywordIndex) => (
                                <button key={keywordIndex} className='py-1 px-2 border border-gray-300 hover:bg-black hover:text-white rounded-2xl'>
                                    {keyword}
                                </button>
                            ))}
                        </div>
                        <p>{service.intro}</p>
                        <button className='my-4 py-1 px-2 border border-black hover:bg-black hover:text-white rounded-2xl'>Find out more</button>
                    </div>
                    <div>
                        <video
                            src={service.video}
                            autoPlay
                            loop
                            muted
                            className='w-52 h-52 md:w-96 md:h-96 rounded-tr-[90px] rounded-bl-[90px]'>
                        </video>
                    </div>
                </div>
            ))}
        </div>
    );
};



