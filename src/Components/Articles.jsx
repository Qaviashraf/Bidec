import React from 'react';

export const Articles = () => {
    const data = [
        {
            image: "https://kota-content.b-cdn.net/app/uploads/2024/02/blog-header-500x267.webp",
            title: "CULTURE,OUR WORK",
            para: "Creating Bidec to celebrate 10 years."
        },
        {
            image: "https://kota-content.b-cdn.net/app/uploads/2023/10/post-2-500x267.jpg",
            title: "Expertise",
            para: "How long it take to bulid "
        },
        {
            image: "https://kota-content.b-cdn.net/app/uploads/2024/06/clutch-top-branding-company-2024-1-500x281.png",
            title: "CULTURE,OUR WORK",
            para: "Creating Bidec to celebrate 10 years."
        },
    ];

    return (
        <div className='flex flex-col md:flex-row justify-center my-4 gap-4' >
            {data.map((article, index) => (
                <div key={index} className='flex justify-center cursor-pointer mx-4'>
                    <div className='w-96 bg-white text-black rounded-tr-2xl rounded-tr-[100px]'>
                        <div>
                            <img src={article.image} alt="" className='rounded-tr-[90px]' />
                        </div>
                        <div className='my-12 mx-6'>
                            <p>{article.title}</p>
                            <h1 className='text-xl font-bold'>{article.para}</h1>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
