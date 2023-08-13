import React from 'react'
import Laptop from '../Assets/laptop.jpg'

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto m4' src={Laptop} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#219ebc] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centerally</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corporis reprehenderit, quam, obcaecati error dolores voluptates exercitationem tempora tenetur, assumenda ex. Dolorum saepe, soluta fuga suscipit deleniti libero vero fugit?</p>
                    <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-0 py-3 text-[#219ebc]'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics