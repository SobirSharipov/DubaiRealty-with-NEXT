import React from 'react'
import img from '../../../public/img1.png'
import Image from 'next/image'

const Contact = () => {
    return (
        <div>
            <p className='font-bold text-5xl m-[50px]'>Contact</p>
            <div className='lg:w-[90%] mx-auto'>
                <div className='bg-black text-white lg:absolute z-10 p-[20px] lg:w-[30%] lg:mt-[100px] lg:ml-[200px] rounded py-[40px]'>
                    <p className=' font-bold text-2xl mb-[10px]'>Dubai, <span className='text-yellow-600'>UAE</span> </p>
                    <p>269 King Str, 05th Floor, Utral Hosue Building,
                        Dubai, VIC 3000, UAE.</p>
                        <p className='font-bold lg:text-2xl my-[20px]'>+99 (0) 344 956 4050</p>
                        <p className='font-bold lg:mt-[10px] '>Email: <span className='font-light'>info@sparch.co</span></p>
                        <p className='font-bold lg:mt-[10px]'>Follow us:</p>
                        <p className='font-bold lg:mt-[10px]'>Work Hours: <span className='font-light'>Monday - Friday : 08h00 - 17h30</span></p>
                </div>
                <Image src={img} alt='test' />
            </div>
            <div className='lg:w-[70%] w-[90%] mx-auto my-[100px]'>
                <p className='text-yellow-600 font-bold text-4xl mb-[40px]'>Be in touch <br /> <span className='text-white'>with us</span> </p>
                <div className=' lg:flex gap-[30px] '>
                    <input className='border border-gray-300 p-2 rounded w-full mb-4' type="text" placeholder='Your Name' />
                    <input className='border border-gray-300 p-2 rounded w-full mb-4' type="text" placeholder='Your Email' />
                    <input className='border border-gray-300 p-2 rounded w-full mb-4' type="text" placeholder='Subject' />
                </div>
                    <textarea className='border border-gray-300 p-6 rounded w-full mb-4' placeholder='Message'></textarea>
            </div>
        </div>
    )
}

export default Contact