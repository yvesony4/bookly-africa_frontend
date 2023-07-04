import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BiBed } from 'react-icons/bi'
import { SlCalender } from 'react-icons/sl'
import { BsFillPersonFill } from 'react-icons/bs'

export default function Homestays() {
  return (
    <div className='mt-24 pt-1'>
      <div className="bg-[url('http://localhost:3000/staying.jpg')] bg-cover my-8 px-[300px] py-[85px]">
        <div>
        <h2 className='text-white pb-[13px] text-[23px]'>Where are you staying?</h2>
        </div>
        <div className='text-white flex gap-[2px] py-3'>
          <div className='flex h-[34px] bg-white px-3 rounded w-full'>
            <div className='text-black pt-[7px]'><BiBed /></div>
            <div className=''><input type="text" className='text-[10px] h-[26px] border-none text-black w-[260px]' placeholder='Enter a city, hotel, airport, address or landmark' /></div>
          </div>
          <div className='h-[34px] flex bg-white px-3 rounded'>
            <div className='text-black pt-[7px]'><SlCalender /></div>
            <div><input type="date" className='text-[10px] h-[26px] border-none text-black' /></div>
          </div>
          <div className='h-[34px] flex bg-white px-3 rounded'>
            <div className='text-black pt-[7px]'><SlCalender /></div>
            <div><input type="date" className='text-[10px] h-[26px] border-none text-black' /></div>
          </div>
          <div className='h-[34px] flex bg-white px-3 rounded'>
            <div className='text-black pt-[7px]'><BsFillPersonFill /></div>
            <div>
              <select className='text-[10px] h-[24px] border-none text-black mt-[1px]'>
                <option>1 room, 2 guests</option>
              </select>
            </div>
            </div>
          <div className='py-1 px-2 bg-[#2ba189] font-bold rounded pt-[9px]'><BiSearch /></div>
        </div>
      </div>
    </div>
  )
}
