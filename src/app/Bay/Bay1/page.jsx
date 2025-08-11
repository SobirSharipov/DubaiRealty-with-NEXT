import React from 'react'
import Image from 'next/image'
import img from '../../../../public/img1 (15).png'
import img1 from '../../../../public/img1 (16).png'
import img2 from '../../../../public/img1 (17).png'
import img3 from '../../../../public/img1 (18).png'

const Bay1 = () => {
    return (
        <div>
            <div>
                <p className='font-bold text-4xl text-center my-[30px]'>All Apartments Category</p>
                <div className='grid lg:grid-cols-4 gap-[30px] w-[90%] mx-auto my-[50px]'>
                    <div>
                        <Image src={img2} alt='test' />
                    </div>
                    <div>
                        <Image src={img3} alt='test' />
                    </div>
                    <div>
                        <Image src={img1} alt='test' />
                    </div>
                    <div className='bg-yellow-400 text-black rounded p-[20px]'>
                        <p className='font-bold text-4xl mb-[30px]'>Apartments</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</p>
                        <p className='flex gap-[10px] justify-end mt-[30px]'>Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </p>
                    </div>
                </div>
                <div className='flex justify-center gap-[20px] mb-[50px]'>
                    <div className='w-[10px] h-[10px] rounded-full bg-yellow-600'></div>
                    <div className='w-[10px] h-[10px] rounded-full bg-white'></div>
                    <div className='w-[10px] h-[10px] rounded-full bg-white'></div>
                    <div className='w-[10px] h-[10px] rounded-full bg-white'></div>
                </div>
            </div>
            <div className='w-[95%] mx-auto'>
                <Image src={img} alt='test' />
                <p className='font-bold lg:text-5xl text-center mt-[-50px] lg:mt-[-200px] lg:mb-[200px]'>Apartments <br /> <span className='text-yellow-600'>in Dubai</span> </p>
            </div>
        </div>
    )
}

export default Bay1