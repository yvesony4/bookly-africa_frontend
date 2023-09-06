import React from 'react'
import { BiSearch } from 'react-icons/bi'
import UpComingEventNew from '../Components/Sections/UpComingEventNew'

export default function Event() {
  return (
    <div className='bg-[#f8f8f8]'>
      <div className='pt-1 '>
      <div className="bg-[url('http://localhost:3000/event.jpg')] bg-cover my-8 px-[300px] py-[85px] mx-4 mt-40">
        <div>
        <h2 className='text-white pb-[13px] text-[23px]'>Events</h2>
        </div>
        <div className='text-white flex gap-[2px] py-3 w-full'>
          <div className='flex h-[36px] bg-white px-3 rounded w-full'>
            <div className='w-full'><select className='text-[10px] h-[36px] border-none text-black w-full'>
                <option> Rwanda</option>
                <option></option>
              </select>
            </div>
          </div>
          <div className='flex h-[36px] bg-white px-3 rounded w-full'>
            <div className='w-full'><select className='text-[10px] h-[36px] border-none text-black w-full'>
                <option> Search attraction or activity</option>
                <option></option>
              </select>
            </div>
          </div>
          
          
          <div className='py-1 px-4 bg-[#2ba189] font-bold rounded pt-[5px] flex gap-2'>
            <div>Search</div> 
            <div className='pt-[5px]'><BiSearch /></div>
            </div>
        </div>
      </div>
    </div>
    <UpComingEventNew />
    </div>
  )
}
