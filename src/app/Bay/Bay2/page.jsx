import React from 'react'
import Image from 'next/image'
import img7 from '../../../../public/img1 (36).png'
import img8 from '../../../../public/img1 (37).png'

const Bay2 = () => {
    return (
        <div>
            <table className="lg:w-[80%] my-[50px] mx-auto border-collapse">
                <thead>
                    <tr className="bg-yellow-500 text-black text-lg">
                        <th className="text-left p-3">Included in the package</th>
                        <th className="p-3">Complete management</th>
                        <th className="p-3">Partial control</th>
                    </tr>
                </thead>
                <tbody className="bg-black text-white">
                    <tr className="border-b hover:bg-gray-600 border-gray-700">
                        <td className="p-3">Real estate advertising</td>
                        <td className="text-center">✓</td>
                        <td className="text-center">✓</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-600 border-gray-700">
                        <td className="p-3">Search for tenants</td>
                        <td className="text-center">✓</td>
                        <td className="text-center">✓</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-600 border-gray-700">
                        <td className="p-3">Conclusion of a lease agreement</td>
                        <td className="text-center">✓</td>
                        <td className="text-center">✓</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-600 border-gray-700">
                        <td className="p-3">Getting paid</td>
                        <td className="text-center">✓</td>
                        <td className="text-center">✓</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-600 border-gray-700">
                        <td className="p-3">Key handover</td>
                        <td className="text-center">✓</td>
                        <td className="text-center">✓</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-600 border-gray-700">
                        <td className="p-3">Payment processing</td>
                        <td className="text-center">✓</td>
                        <td className="text-center">✓</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-600 border-gray-700">
                        <td className="p-3">Dealing with repair requests</td>
                        <td className="text-center"></td>
                        <td className="text-center">✓</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-600 border-gray-700">
                        <td className="p-3">DEWA connection (electricity/water)</td>
                        <td className="text-center"></td>
                        <td className="text-center">✓</td>
                    </tr>
                      <tr className="border-b hover:bg-gray-600 border-gray-700">
                        <td className="p-3">Key handover</td>
                        <td className="text-center"></td>
                        <td className="text-center">✓</td>
                    </tr>
                      <tr className="border-b hover:bg-gray-600 border-gray-700">
                        <td className="p-3">Handover</td>
                        <td className="text-center"></td>
                        <td className="text-center">✓</td>
                    </tr>
                      <tr className="border-b hover:bg-gray-600 border-gray-700">
                        <td className="p-3">Key </td>
                        <td className="text-center"></td>
                        <td className="text-center">✓</td>
                    </tr>
                </tbody>
            </table>

            <div className='my-[100px]'>
                <div className='flex justify-around items-center my-[30px]'>
                    <p className='font-bold text-3xl'>We will also propose</p>
                    <p className='lg:flex hidden gap-[10px] cursor-pointer hover:text-yellow-500'>View all services
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </p>
                </div>
                <div className='grid lg:grid-cols-3 w-[80%] gap-[30px] mx-auto'>
                    <div>
                        <Image src={img8} alt='test' />
                    </div>
                    <div className='bg-yellow-500 text-black rounded p-[20px]'>
                        <p className='font-bold text-4xl mb-[30px]'>Mortgage Registration</p>
                        <p>A person applying for a mortgage in the United Arab Emirates must meet the following requirements</p>
                        <p className='flex gap-[10px] cursor-pointer mt-[80px]'>Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </p>
                    </div>
                    <div>
                        <Image src={img7} alt='test' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bay2