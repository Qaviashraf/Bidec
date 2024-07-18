import React from 'react'

export const Articles = () => {
    const data = [
        {
            image: "https://kota-content.b-cdn.net/app/uploads/2024/02/blog-header-500x267.webp",
            title : "CULTURE,OUR WORK",
            para : "Creating Bidec to celebrate 10 years."
        },
        {
            image: "https://kota-content.b-cdn.net/app/uploads/2024/02/blog-header-500x267.webp",
            title : "CULTURE,OUR WORK",
            para : "Creating Bidec to celebrate 10 years."
        },{
            image: "https://kota-content.b-cdn.net/app/uploads/2024/02/blog-header-500x267.webp",
            title : "CULTURE,OUR WORK",
            para : "Creating Bidec to celebrate 10 years."
        },
    ]
  return (
    <div className='flex justify-center'>
        <div className='w-96 bg-white text-black rounded-tr-2xl rounded-tr-[100px]'>
            <div >
            <img src="https://kota-content.b-cdn.net/app/uploads/2024/02/blog-header-500x267.webp" alt="" 
            className='rounded-tr-[90px]'/>
</div>
<div className='my-12'>
    <h1>CULTURE,OUR WORK</h1>
    <p>Creating Bidec to celebrate 10 years.</p>
</div>
        </div>
    </div>
  )
}
