import React from 'react'
import { StaysnearYouData } from './Data/StaysnearYouData'
import { AiTwotoneStar } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'
import { BsClock } from 'react-icons/bs'
import { FaBed } from 'react-icons/fa'

export default function StaysnearYou() {
  return (
    <div>
        <div className='px-[100px]'>

        <div className='flex justify-between'>
            <div>
                <div className='text-[#31ac9e] text-[20px]'><b>Stays near you</b></div>
                <div className='mb-5 text-[12px]'>Sat, Jun 3 - Sun, Jun 4</div>
            </div>
            <div>
                <div className='bg-[#2ba189] rounded px-3 text-white text-[10px] py-1'>See All</div>
               
            </div>
        </div>
        <div className=' grid grid-cols-4 gap-5 justify-center'>
            {
                StaysnearYouData.map((item) => {
                    return(
                        <div className='bg-white rounded-3xl  pb-[40px]'>
                            <div><img className='rounded w-[510px] h-[200px] object-cover' src={item.photo} /></div>
                            <div className='  mt-1'>
                            <div  className='mb-1 text-[12px] font-bold'>{item.HotelName}</div>
                            <div className='flex gap-2'>
                            <div className='flex mt-[4px]'>
                                <div><AiTwotoneStar className='text-balck text-[12px]' /></div>
                                <div><AiTwotoneStar className='text-balck text-[12px]' /></div>
                                <div><AiTwotoneStar className='text-balck text-[12px]' /></div>
                            </div>
                            <div className='text-[10px] pt-[2px]'>{item.rate}</div>
                            </div>
                            </div>
                            <div className='text-[10px]'>{item.location}</div>
                            <div className='text-[10px] font-bold mt-2'>${item.Kilo}</div>
                         
                        </div>
                    )
                })
            }
        </div>
    </div>
    </div>
  )
}

