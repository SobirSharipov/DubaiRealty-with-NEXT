'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Button, Input, Modal } from 'antd';
import image from '../../../public/img1 (38).png'
import img1 from '../../../public/img1 (39).png'
import img2 from '../../../public/img1 (40).png'
import img3 from '../../../public/img1 (41).png'
import img4 from '../../../public/img1 (42).png'
import img5 from '../../../public/img1 (43).png'
import Link from 'next/link';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Blog = () => {
  let [data, setdata] = useState([
    {
      img: img1,
      name: "Commercial property in Abu Dhabi",
      lorem: "In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...",
      id: "1"
    },
    {
      img: img2,
      name: "Commercial property in Abu Dhabi",
      lorem: "In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...",
      id: "2"
    },
    {
      img: img3,
      name: "Commercial property in Abu Dhabi",
      lorem: "In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...",
      id: "3"
    },
    {
      img: img4,
      name: "Commercial property in Abu Dhabi",
      lorem: "In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...",
      id: "4"
    },
    {
      img: img5,
      name: "Commercial property in Abu Dhabi",
      lorem: "In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...",
      id: "5"
    },
    {
      img: image,
      name: "Commercial property in Abu Dhabi",
      lorem: "In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...",
      id: "6"
    },
  ])


  function DeletUser(id) {
    data = data.filter(el => el.id != id)
    setdata(data)
  }


  const [isModalOpen, setIsModalOpen] = useState(false);
  let [Addname, setAddname] = useState("")
  let [Addlorem, setAddlorem] = useState("")
  function AddUser() {
    let newUser = {
      name: Addname,
      lorem: Addlorem,
      img: img2,
      id: Date.now().toString()
    }
    setdata([...data, newUser])
    setIsModalOpen(false);
    setAddlorem("")
    setAddname("")
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (el) => {
    setIsModalEdit(true);
    setEditname(el.name)
    setEditlorem(el.lorem)
    setEditimg(el.img)
    setidx(el.id)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsModalEdit(false)
  };

  const [isModalEdit, setIsModalEdit] = useState(false);
  let [Editname, setEditname] = useState("")
  let [Editlorem, setEditlorem] = useState("")
  let [Editimg, setEditimg] = useState(null)
  let [idx, setidx] = useState(null)
  function EditUser() {
    data = data.map(el => {
      if (el.id == idx) {
        return {
          ...el,
          name: Editname,
          lorem: Editlorem,
          img: Editimg || el.img
        }
      }
      return el
    })
    setdata(data)
    setIsModalEdit(false)

  }

  let [Search, setSearch] = useState("")



  return (
    <div>
      <div className='flex gap-[20px] items-center  justify-between mx-[20px] my-[60px]'>
        <p className='font-bold lg:block hidden text-4xl'>Blog</p>
        <div className='lg:w-[40%] w-[100%] border rounded flex items-center'>
          <input value={Search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search...' className='w-[100%] p-[10px]' />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
        <div className='lg:block hidden'>
        <Button type="primary" onClick={showModal} >
          ADD PRODUCTS
        </Button>
        </div>
        <div className='lg:hidden'>
        <Button type="primary" onClick={showModal} >
          +
        </Button>
        </div>
      </div>


      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={AddUser}
        onCancel={handleCancel}
      >
        <Input value={Addname} onChange={(e) => setAddname(e.target.value)} placeholder='Name...' /> <br /><br />
        <Input value={Addlorem} onChange={(e) => setAddlorem(e.target.value)} placeholder='Desctop...' />
      </Modal>
      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalEdit}
        onOk={EditUser}
        onCancel={handleCancel}
      >
        <Input value={Editname} onChange={(e) => setEditname(e.target.value)} placeholder='Name...' /> <br /><br />
        <Input value={Editlorem} onChange={(e) => setEditlorem(e.target.value)} placeholder='Desctop...' /> <br /><br />
        {Editimg && (
          <Image src={Editimg} alt='test' className='w-[100%] ' />
        )}
      </Modal>

      <div className='grid lg:grid-cols-3 gap-[30px] w-[80%] mx-auto my-[50px]'>
        {data.filter(el => el.name.toLowerCase().includes(Search.toLowerCase())).map(el => {
          return (
            <div>
              <Image src={el.img} alt='test' />
              <div className='border border-amber-600 bg-black p-[20px]'>
                <p className='font-bold text-2xl mb-[20px]'>{el.name}</p>
                <p>{el.lorem}</p>
                <div className='flex justify-between items-center mt-[20px]'>
                  <button className=' hover:text-yellow-600 cursor-pointer ' onClick={() => DeletUser(el.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </button>
                  <button className=' hover:text-yellow-600 cursor-pointer ' onClick={() => handleOk(el)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                  </button>
                  <Link href={'Info/' + el.id} >
                    <p className='flex  gap-[10px] hover:text-yellow-600 cursor-pointer '>Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
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

    </div>
  )
}

export default Blog