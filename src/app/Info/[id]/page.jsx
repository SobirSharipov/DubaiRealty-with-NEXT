'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import img1 from '../../../../public/img1 (32).png'
import Image from 'next/image'

const InfoByid = () => {
    let {id}=useParams()
    const [data, setData] = useState({});
    

  
        
  return (
    <div>
       <Image src={img1} alt='test' className='w-[100%] my-[50px]'/>
    </div>
  )
}

export default InfoByid