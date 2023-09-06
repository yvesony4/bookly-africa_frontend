import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

export default function Wishlist() {
  return (
    <div className='px-[100px] py-[35px] bg-[#d3f8f2]'>
        <div>
        <h1 className='font-bold'>Your Wishlist starts here</h1>
        </div>
        <div className='text-[9px]'>
            Save destinations all in one place-even if you're not ready to book
        </div>
        <div className='grid grid-cols-2 gap-3 mt-2 '>
            <div className=''>
                <div className="bg-[url('http://localhost:3000/nairobi.jpg')] bg-cover flex justify-end px-2 py-2 rounded w-full h-[500px] my-1">
                    <div className='bg-white w-[40px] rounded px-3 py-2  h-[30px]'>
                        <AiOutlineHeart />
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-[12px]'>NAIROBI, KENYA</h1>
                </div>
                <div className='text-[9px]'>
                    Stays from $80+
                </div>
            </div>
            <div className=''>
                <div className="bg-[url('http://localhost:3000/Figure.jpg')] bg-cover flex justify-end px-2 py-2 rounded w-full h-[500px] mt-1">
                    <div className='bg-white w-[40px] rounded px-3 py-2  h-[30px]'>
                        <AiOutlineHeart />
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-[12px]'>New York, NY</h1>
                </div>
                <div className='text-[9px]'>
                    Stays from $174+
                </div>
                </div>
        </div>
    </div>
  )
}
