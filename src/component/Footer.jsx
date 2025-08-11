import React from 'react'
import logo from '../../public/Logo.svg'
import img1 from '../../public/img1 (2).png'
import Image from 'next/image'

const Footer = () => {
    return (
        <div>
            <hr />
            <div className='flex justify-center my-[30px]'>
                <Image src={logo} alt='logo' />
            </div>
            <div className='flex flex-wrap gap-[50px] w-[90%] mx-auto my-[30px]'>
                <div>
                    <p className='font-bold text-2xl'>Buy</p>
                    <p className='my-[10px]'>Apartment in Dubai</p>
                    <p className='my-[10px]'>House in Dubai</p>
                    <p className='my-[10px]'>Apartments in Dubai</p>
                    <p className='my-[10px]'>Loft in Dubai</p>
                    <p className='my-[10px]'>Penthouse in Dubai</p>
                    <p className='my-[10px]'>Villa in Dubai</p>
                </div>
                <div>
                    <p className='font-bold text-2xl'>Services</p>
                    <p className='my-[10px]'>Property management in Dubai, UAE</p>
                    <p className='my-[10px]'>Sell ​​property in Dubai, UAE</p>
                    <p className='my-[10px]'>Rent property in Dubai, UAE</p>
                    <p className='my-[10px]'>Investments in Dubai, UAE</p>
                    <p className='my-[10px]'>Real estate for cryptocurrency in Dubai</p>
                    <p className='my-[10px]'>Moving to Dubai, UAE</p>
                </div>
                <div>
                    <p className='font-bold text-2xl'>Information</p>
                    <p className='my-[10px]'>Video</p>
                    <p className='my-[10px]'>Podcasts</p>
                    <p className='my-[10px]'>Laws</p>
                    <p className='my-[10px]'>Questions and answers</p>
                    <p className='my-[10px]'>Books</p>
                    <p className='my-[10px]'>Articles</p>
                </div>
                <div>
                    <p className='font-bold text-2xl'>About company</p>
                    <p className='my-[10px]'>Jobs </p>
                    <p className='my-[10px]'>Story</p>
                    <p className='my-[10px]'>Licenses</p>
                    <p className='my-[10px]'>Why are we</p>
                    <p className='my-[10px]'>Real estate agency</p>
                </div>
                <div>
                    <p className='font-bold text-2xl'>Contact</p>
                    <p className='my-[10px]'>964 Worthington Drive <br />   Dubai, UAE</p>
                    <p className='my-[10px]'>dubairealty@mail.com</p>
                    <button className='bg-yellow-500 p-[10px] rounded text-black font-bold mt-[20px]'>Book a consultation</button>
                </div>
            </div>
            <hr />
            <div className=' flex justify-between mx-[20px] items-center my-[30px]'>
                <p>Copyright © 2022 Dubai Realty</p>
                <Image src={img1} alt='icon'/>
            </div>
        </div>
    )
}

export default Footer