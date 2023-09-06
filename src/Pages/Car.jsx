import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiFillExclamationCircle } from 'react-icons/ai'
import { AiFillCar } from 'react-icons/ai'
import { BsFillCalendarWeekFill } from 'react-icons/bs'
import { AiTwotoneTag } from 'react-icons/ai'
import CarRental from '../Components/Sections/CarRental'

export default function Car() {
  return (
    <div className='bg-[#f8f8f8]'>
      <div className='pt-1 '>
      <div className="bg-[url('http://localhost:3000/carrent.jpg')] bg-cover my-8 px-[130px] py-[85px] mt-40">
        <div>
        <h1 className='text-white pb-[13px] text-[33px]'>Find the best car rental deals</h1>
        </div>
        <div className=' rounded-t bg-[#2ba189] flex gap-[2px] px-3 py-5 w-full'>
          <div className='flex text-[10px] w-full'>
            <div className='w-full'>
              <div className='text-white w-full'>Pick-up Location</div>
              <div><input type="text" className='text-[12px] border-none focus:ring-0 rounded-l h-[33px] w-full' placeholder='City, airport or station' /></div>
            </div>
            <div className=''>
              <div className='text-white'>Pick-up Date</div>
              <div className='border pl-2 pr-[80px] py-2 bg-white'>03/06/2023</div>
            </div>
            <div className=''>
              <div className='text-white'>Time</div>
              <div className='border pl-2 pr-6 py-2 flex gap-3 bg-white'>
                <div>10:00</div>
                <div className='pt-[2px]'><IoMdArrowDropdown /></div>
              </div>
            </div>
            <div className=''>
              <div className='text-white'>Drop-off Date</div>
              <div className='border pl-2 pr-[80px] py-2 bg-white'>03/06/2023</div>
            </div>
            <div className=''>
              <div className='text-white'>Time</div>
              <div className='border pl-2 pr-5 py-2 flex gap-3 rounded-r bg-white'>
                <div>10:00</div>
                <div className='pt-[2px]'><IoMdArrowDropdown /></div>
              </div>
            </div>
          </div>
        </div>
          <div className='flex justify-between rounded-b bg-[#2ba189] pb-4 px-3 w-full'>
            <div>
              <div className='flex gap-2 pt-2'>
                <div><input type="checkbox" /></div>
                <div className='text-[10px] pt-[5px] text-white'>Return car to a different location</div>
              </div>

              <div className='flex gap-2'>
                <div><input type="checkbox" /></div>
                <div className='text-[10px] pt-[5px] text-white'>Driver aged between 25 - 75</div>
                <div className='pt-1'><AiFillExclamationCircle className='text-white' /></div>
            </div>
            </div>
            <div className='bg-[#f26d36] rounded mt-4 text-white text-[10px] px-4 py-2 h-[31px] w-[80px] flex gap-2'><button>Search</button><div className='pt-[1px]'><AiOutlineArrowRight  className='text-[12px]'/></div></div>
          </div>
      </div>
    </div>
    <div className='text-[10px] flex gap-8 px-[300px]'>
      <div className='flex gap-1'>
        <div className='pt-[3px]'><AiFillCar /></div>
        <div>Search for cheap car rental in seconds - anywhere in the world</div>
      </div>
      <div className='flex gap-1'>
        <div className='pt-[3px]'><BsFillCalendarWeekFill /></div>
        <div>Search for cheap car rental in seconds - anywhere in the world</div>
      </div>
      <div className='flex gap-1'>
        <div className='pt-[3px]'><AiTwotoneTag /></div>
        <div>Search for cheap car rental in seconds - anywhere in the world</div>
      </div>
    </div>
    <CarRental />
    </div>
  )
}
