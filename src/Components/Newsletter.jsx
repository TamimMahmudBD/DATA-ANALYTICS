import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full text-white py-16 px-4 flex flex-row '>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-3xl tect-xl font-bold py-2'>Eant tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to data.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col  sm:flex-row item-center justify-between w-full'>
                        <input className='px-3 flex w-full rounded-md text-black h-10 mb-4' type="email" placeholder='Enter Email' />
                        <button className='bg-[#219ebc] text-black w-[200px] rounded-md font-medium mb-4 md:ml-4 px-6 sm:tex md:mx-auto py-2'>Notify Me</button>
                    </div>
                    <p className=''>We care about protection of your data. Read our <span className='text-[#219ebc]'>Privacy policy</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter