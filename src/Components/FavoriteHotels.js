import React from 'react'
import { StaysnearYouData } from './Data/StaysnearYouData'
import { AiTwotoneStar } from 'react-icons/ai'
import Vector243 from '../assets/booklimages/Vector243.png'

export default function FavoriteHotels() {
  return (
    <div>
        <div className='px-[100px]'>

        <div className='flex justify-between'>
            <div>
                <div className='text-[#31ac9e] text-[22px]'><b>Favorite Hotels around the globe</b></div>
                <div className='mb-5'><img className='w-[230px]' src={Vector243} /></div>
            </div>
            <div>
                <div className='bg-[#2ba189] rounded px-3 text-white text-[10px] py-[6px]'>See All</div>
               
            </div>
        </div>
        <div className=' grid grid-cols-4 gap-2 justify-center'>
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

