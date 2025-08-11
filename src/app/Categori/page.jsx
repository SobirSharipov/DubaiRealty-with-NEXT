import React from 'react'
import Image from 'next/image'
import img from '../../../public/img1 (15).png'
import img1 from '../../../public/img1 (16).png'
import img2 from '../../../public/img1 (17).png'
import img3 from '../../../public/img1 (18).png'
import img4 from '../../../public/img1 (20).png'
import img5 from '../../../public/img1 (21).png'
import img6 from '../../../public/img1 (22).png'
import img7 from '../../../public/img1 (23).png'
import img8 from '../../../public/img1 (24).png'
import img9 from '../../../public/img1 (25).png'
import img10 from '../../../public/img1 (26).png'
import img11 from '../../../public/img1 (27).png'
import img12 from '../../../public/img1 (28).png'
import img13 from '../../../public/img1 (29).png'
import img14 from '../../../public/img1 (30).png'
import img15 from '../../../public/img1 (19).png'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import img16 from '../../../public/img1 (9).png'

const Categori = () => {
  return (
    <div>
      <div className='w-[95%] mx-auto'>
        <Image src={img} alt='test' />
        <p className='font-bold lg:text-5xl text-center mt-[-50px] lg:mt-[-200px] lg:mb-[200px]'>Apartments <br /> <span className='text-yellow-600'>in Dubai</span> </p>
      </div>
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
      <div>
        <p className='font-bold text-5xl text-center my-[40px]'>Best Offers</p>
        <div className='grid lg:grid-cols-4 grid-cols-2 gap-[10px] lg:gap-[30px] w-[95%] mx-auto my-[50px]'>
          <div >
            <Image src={img4} alt='test' />
            <div className='border border-amber-600 p-[20px] hover:bg-amber-500 hover:text-black'>
              <p>Townhous</p>
              <p className='my-[10px] font-bold lg:text-3xl'>Arabian Ranches</p>
              <p className='my-[10px] text-gray-600'>The launch of this community enabled expats to own a luxurious property in Dubai. </p>
              <p className='flex gap-[10px]  mt-[30px] cursor-pointer hover:text-yellow-600'>Learn more
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </p>
            </div>
          </div>
          <div >
            <Image src={img5} alt='test' />
            <div className='border border-amber-600 p-[20px] hover:bg-amber-500 hover:text-black'>
              <p>Townhous</p>
              <p className='my-[10px] font-bold lg:text-3xl'>Dubai Hills Estate</p>
              <p className='my-[10px] text-gray-600'>The launch of this community enabled expats to own a luxurious property in Dubai. </p>
              <p className='flex gap-[10px]  mt-[30px] cursor-pointer hover:text-yellow-600'>Learn more
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </p>
            </div>
          </div>
          <div >
            <Image src={img6} alt='test' />
            <div className='border border-amber-600 p-[20px] hover:bg-amber-500 hover:text-black'>
              <p>Townhous</p>
              <p className='my-[10px] font-bold lg:text-3xl'>Shell and Core</p>
              <p className='my-[10px] text-gray-600'>The launch of this community enabled expats to own a luxurious property in Dubai. </p>
              <p className='flex gap-[10px]  mt-[30px] cursor-pointer hover:text-yellow-600'>Learn more
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </p>
            </div>
          </div>
          <div >
            <Image src={img7} alt='test' />
            <div className='border border-amber-600 p-[20px] hover:bg-amber-500 hover:text-black'>
              <p>Townhous</p>
              <p className='my-[10px] font-bold lg:text-3xl'>Luxury Living</p>
              <p className='my-[10px] text-gray-600'>The launch of this community enabled expats to own a luxurious property in Dubai. </p>
              <p className='flex gap-[10px]  mt-[30px] cursor-pointer hover:text-yellow-600'>Learn more
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </p>
            </div>
          </div>
          <div >
            <Image src={img8} alt='test' />
            <div className='border border-amber-600 p-[20px] hover:bg-amber-500 hover:text-black'>
              <p>Townhous</p>
              <p className='my-[10px] font-bold lg:text-3xl'>Arabian Ranches</p>
              <p className='my-[10px] text-gray-600'>The launch of this community enabled expats to own a luxurious property in Dubai. </p>
              <p className='flex gap-[10px]  mt-[30px] cursor-pointer hover:text-yellow-600'>Learn more
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </p>
            </div>
          </div>
          <div >
            <Image src={img9} alt='test' />
            <div className='border border-amber-600 p-[20px] hover:bg-amber-500 hover:text-black'>
              <p>Townhous</p>
              <p className='my-[10px] font-bold lg:text-3xl'>Dubai Hills Estate</p>
              <p className='my-[10px] text-gray-600'>The launch of this community enabled expats to own a luxurious property in Dubai. </p>
              <p className='flex gap-[10px]  mt-[30px] cursor-pointer hover:text-yellow-600'>Learn more
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </p>
            </div>
          </div>
          <div >
            <Image src={img10} alt='test' />
            <div className='border border-amber-600 p-[20px] hover:bg-amber-500 hover:text-black'>
              <p>Townhous</p>
              <p className='my-[10px] font-bold lg:text-3xl'>Shell and Core</p>
              <p className='my-[10px] text-gray-600'>The launch of this community enabled expats to own a luxurious property in Dubai. </p>
              <p className='flex gap-[10px]  mt-[30px] cursor-pointer hover:text-yellow-600'>Learn more
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </p>
            </div>
          </div>
          <div >
            <Image src={img11} alt='test' />
            <div className='border border-amber-600 p-[20px] hover:bg-amber-500 hover:text-black'>
              <p>Townhous</p>
              <p className='my-[10px] font-bold lg:text-3xl'>Luxury Living</p>
              <p className='my-[10px] text-gray-600'>The launch of this community enabled expats to own a luxurious property in Dubai. </p>
              <p className='flex gap-[10px]  mt-[30px] cursor-pointer hover:text-yellow-600'>Learn more
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </p>
            </div>
          </div>
          <div >
            <Image src={img12} alt='test' />
            <div className='border border-amber-600 p-[20px] hover:bg-amber-500 hover:text-black'>
              <p>Townhous</p>
              <p className='my-[10px] font-bold lg:text-3xl'>Arabian Ranches</p>
              <p className='my-[10px] text-gray-600'>The launch of this community enabled expats to own a luxurious property in Dubai. </p>
              <p className='flex gap-[10px]  mt-[30px] cursor-pointer hover:text-yellow-600'>Learn more
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </p>
            </div>
          </div>
          <div >
            <Image src={img13} alt='test' />
            <div className='border border-amber-600 p-[20px] hover:bg-amber-500 hover:text-black'>
              <p>Townhous</p>
              <p className='my-[10px] font-bold lg:text-3xl'>Dubai Hills Estate</p>
              <p className='my-[10px] text-gray-600'>The launch of this community enabled expats to own a luxurious property in Dubai. </p>
              <p className='flex gap-[10px]  mt-[30px] cursor-pointer hover:text-yellow-600'>Learn more
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </p>
            </div>
          </div>
          <div >
            <Image src={img14} alt='test' />
            <div className='border border-amber-600 p-[20px] hover:bg-amber-500 hover:text-black'>
              <p>Townhous</p>
              <p className='my-[10px] font-bold lg:text-3xl'>Shell and Core</p>
              <p className='my-[10px] text-gray-600'>The launch of this community enabled expats to own a luxurious property in Dubai. </p>
              <p className='flex gap-[10px]  mt-[30px] cursor-pointer hover:text-yellow-600'>Learn more
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </p>
            </div>
          </div>
          <div >
            <Image src={img15} alt='test' />
            <div className='border border-amber-600 p-[20px] hover:bg-amber-500 hover:text-black'>
              <p>Townhous</p>
              <p className='my-[10px] font-bold lg:text-3xl'>Luxury Living</p>
              <p className='my-[10px] text-gray-600'>The launch of this community enabled expats to own a luxurious property in Dubai. </p>
              <p className='flex gap-[10px]  mt-[30px] cursor-pointer hover:text-yellow-600'>Learn more
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
        <div className='flex justify-center my-[30px]'>
        <Stack spacing={2}>
          <Pagination
            count={10}
            shape="rounded"
            sx={{
              '& .MuiPaginationItem-root': {
                color: 'white',
                fontWeight: 'bold',
              },
              '& .MuiPaginationItem-root.Mui-selected': {
                backgroundColor: 'white',
                color: 'black'
              }
            }}
          />
        </Stack>
      </div>
      <div className='lg:w-[70%] w-[95%] mx-auto my-[50px]'>
        <p className='font-bold text-5xl mb-[20px]'>Apartments</p>
        <p className='text-gray-600'>To and from, fascinated her: every pebble, ant, stick, leaf, blade of grass,
          and crack in the sidewalk was something to be picked up, looked at, tasted, smelled,
          and shaken. Everything was interesting to her. She knew nothing. I knew everything…been there,
          done that. She was in the moment, I was in the past. She was mindful. I was mindless.</p>
        <p className='font-bold text-3xl my-[20px]'>Everything along the way</p>
        <p className='text-gray-500'>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future.
          The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule.
          We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most
          common of all: making mistakes.</p>
      </div>
      <div className='my-[50px]'>
        <div className='absolute z-10 text-black w-[100%] text-center lg:mt-[30px]'>
          <p className='lg:block hidden'>Do you have any questions?</p>
          <p className='font-bold lg:text-5xl'>Contact us</p>
          <div className='flex  justify-center gap-[10px] lg:mt-[30px]'>
            <input className=' lg:p-[15px] p-[10px] lg:w-[25%] bg-white rounded ' type="text" placeholder='Enter your mail' />
            <button className='lg:p-[15px] p-[10px] bg-black text-white lg:w-[10%] rounded cursor-pointer'>Send</button>
          </div>
        </div>
        <Image src={img16} alt='test' />
      </div>

    
    </div>
  )
}

export default Categori