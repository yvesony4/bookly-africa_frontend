import React from 'react'
import Vector243 from '../assets/booklimages/Vector243.png'
import { BestSellerData } from './Data/BestSellerData'
import { AiTwotoneStar } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'
import { BsClock } from 'react-icons/bs'
import { FaBed } from 'react-icons/fa'
import AfricaMarket from './AfricaMarket'

export default function BestSeller() {
  return (
    <div>
        <div className='bg-[#d3f8f2] px-[100px] pt-[20px]'>

<div className='text-[#31ac9e] text-[30px]'><b>BestSeller Hotels</b></div>
        <div className='mb-5'><img className='w-[230px]' src={Vector243} /></div>
        <div className='mt-4 flex flex-wrap gap-5 justify-center'>
            {
                BestSellerData.map((item) => {
                    return(
                        <div className='bg-white w-[510px] rounded-3xl  pb-[40px]'>
                            <div><img className='rounded-3xl w-[510px] h-[300px]' src={item.photo} /></div>
                            <div className='flex justify-between px-6 mt-1'>
                            <div className='flex space-x-2'>
                            <div className='text-[#9a9a9a]'>{item.rate}</div>
                            <div className='flex mt-[4px]'>
                                <div><AiTwotoneStar className='text-[#f8dc00]' /></div>
                                <div><AiTwotoneStar className='text-[#f8dc00]' /></div>
                                <div><AiTwotoneStar className='text-[#f8dc00]' /></div>
                                <div><AiTwotoneStar className='text-[#f8dc00]' /></div>
                                <div><AiTwotoneStar className='text-[#fbf5ce]' /></div>
                            </div>
                            </div>
                            <div className='flex mt-[4px] font-bold'>
                            <div><AiOutlineHeart /></div>
                            <div><BsBookmark /></div>
                            </div>
                            </div>
                            <div  className='px-6 mb-1 font-bold'>{item.HotelName}</div>
                            <div className='px-6 mb-1 flex justify-between'>
                            <div className='text-[13px] text-[#858585]'>{item.location}</div>
                            <div className='text-[13px] text-[#858585]'>{item.Kilo}</div>
                            </div>
                            <div className='bg-[#e6e5e5] h-[3px] mx-6  my-3'></div>
                            <div  className='flex justify-between'>
                            <div className='px-6 flex space-x-2 text-[13px] text-[#858585]'>
                            <div className='mt-[3px]'><BsClock /></div>
                            <div>{item.time}</div>
                            </div>
                            <div className='px-6 flex space-x-2 text-[#858585]'>
                            <div className='mt-[3px]'><FaBed /></div>
                            <div>{item.qty}</div>
                            </div>
                            </div>
                            <div className='px-6 flex justify-between mt-5'>
                            <div className='text-[18px] mt-[14px]'><b><del className='text-[#f6611f]'><span className='text-[#f6611f]'>$129</span></del> / 100</b></div>
                            <div><button className='px-8 py-3 bg-[#2ba189] text-white rounded-full'>Book Now</button></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

   <div>
    <button className='bg-[#2ba189] px-12 ml-[100px] my-8 py-2 rounded text-white'>View All</button>
   </div>

    </div>

<AfricaMarket />
    </div>
  )
}
