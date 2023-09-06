import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdDateRange } from 'react-icons/md'
import { AiFillCheckCircle } from 'react-icons/ai'
import Hotels from '../Components/Sections/Hotels'
import ExploreOption from '../Components/Sections/ExploreOption'

export default function Hotel() {
  return (
    <div className='bg-[#f8f8f8] pt-36'>
      <div className=' mb-[50px] mx-[320px] flex border border-gray-300 shadow-xl h-[84px] bg-white rounded-r-xl rounded-l-xl'>
        <div className='w-full flex px-5 py-2'>
            <div className='pt-5'><AiOutlineSearch className='text-[30px] text-[#5aa389]' /></div>
            <div>
                <div className='px-3 text-gray-400 font-bold'>Destination</div>
                <div><input type='text' className='w-full border-none focus:ring-0 rounded-bl-xl text-black font-bold' placeholder='Kigali , Rwanda' /></div>
            </div>
        </div>
        <div className='bg-gray-300 w-3'></div>
        <div className='flex  px-5 py-2'>
            <div className='flex gap-2'>
                <div className='pt-1'><MdDateRange /></div>
                <div>
                    <div className='text-gray-400 font-bold'>From - To</div>
                    <div><input type='date' className='border-none focus:ring-0'  /></div>
                </div>
            </div>
            <div className='flex gap-2'>
                <div className='pt-1'><AiFillCheckCircle /></div>
                <div>
                    <div className='text-gray-400 font-bold'>To</div>
                    <div><input type='date' className='border-none focus:ring-0' /></div>
                </div>
            </div>
        </div>
        <div className='bg-gray-300 w-3'></div>
        <div className='w-full px-5 py-2'>
            <div className='w-full'>
                <div className='text-gray-400 font-bold'>Adult - children - room</div>
                <div>
                    <select className='w-full border-none focus:ring-0'>
                        <option>2 Guests , 1 Room</option>
                    </select>
                </div>
            </div>
        </div>
        <div>
            <div>
                <button className='bg-[#5aa389] text-white py-[29px] px-[60px] rounded-r-xl font-bold'>Search</button>
            </div>
        </div>
      </div>
      <div><Hotels /></div>
      <ExploreOption />
    </div>
  )
}
