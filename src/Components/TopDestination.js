import React from 'react'
import Vector243 from '../assets/booklimages/Vector243.png'

export default function TopDestination() {
  return (
        <div className='mt-7 mb-5 px-[100px]'>
        <div className='text-[#31ac9e] text-[30px]'><b>Top Destination & Cities</b></div>
        <div className='mb-5'><img className='w-[230px]' src={Vector243} /></div>
   <div className='flex'>
   <div>
   <div className="bg-[url('http://localhost:3002/rubavu.jpg')] w-[344px] h-[300px] bg-cover bg-center rounded-3xl pt-6 px-6">
        <div className='px-6 py-1 bg-[#f6611f] text-white w-[143px] rounded-full'>Deal from 5$</div>
        <div className='mt-[140px] text-white'>
            <div className='text-[20px]'>Rubavu - Rwanda</div>
            <div className='h-[2px] bg-white'></div>
            <div className='text-[12px] py-1'>5 Properties</div>
            <div>
                <button className='bg-[#2ba189] px-3 rounded-full py-[2px] text-[12px]'>See More</button>
            </div>
        </div>
        
    </div>
    <div className="bg-[url('http://localhost:3002/musanze.jpg')] w-[344px] h-[300px] bg-cover bg-center rounded-3xl pt-6 px-6 mt-7">
        <div className='px-6 py-1 bg-[#f6611f] text-white w-[143px] rounded-full'>Deal from 5$</div>
        <div className='mt-[140px] text-white'>
            <div className='text-[20px]'>Musanze - Rwanda</div>
            <div className='h-[2px] bg-white'></div>
            <div className='text-[12px] py-1'>40 Properties</div>
            <div>
                <button className='bg-[#2ba189] px-3 rounded-full py-[2px] text-[12px]'>See More</button>
            </div>
        </div>
        
    </div>
   </div>
   <div className='w-full pr-[28px]'>
   <div className="bg-[url('http://localhost:3002/kigali.jpg')] w-full h-[630px] bg-cover bg-center rounded-3xl pt-6 px-6 ml-7">
        <div className='px-6 py-1 bg-[#f6611f] text-white w-[143px] rounded-full'>Deal from 5$</div>
        <div className='mt-[470px] text-white'>
            <div className='text-[20px]'>Kigali - Rwanda</div>
            <div className='h-[2px] bg-white'></div>
            <div className='text-[12px] py-1'>100 Properties</div>
            <div>
                <button className='bg-[#2ba189] px-3 rounded-full py-[2px] text-[12px]'>See More</button>
            </div>
        </div>
        
    </div>
   </div>
   <div>
   <div className="bg-[url('http://localhost:3002/nairobi.jpg')] w-[500px] h-[300px] bg-cover bg-center rounded-3xl pt-6 px-6 ml-7">
        <div className='px-6 py-1 bg-[#f6611f] text-white w-[143px] rounded-full'>Deal from 5$</div>
        <div className='mt-[140px] text-white'>
            <div className='text-[20px]'>Nairobi - Kenya</div>
            <div className='h-[2px] bg-white'></div>
            <div className='text-[12px] py-1'>230 Properties</div>
            <div>
                <button className='bg-[#2ba189] px-3 rounded-full py-[2px] text-[12px]'>See More</button>
            </div>
        </div>
        
    </div>
    <div className='flex'>
    <div className="bg-[url('http://localhost:3002/kampala.jpg')] w-[214px] h-[300px] bg-cover bg-center rounded-3xl mt-7 ml-7 pt-6 px-6">
        <div className='px-6 py-1 bg-[#f6611f] text-white w-[143px] rounded-full'>Deal from 5$</div>
        <div className='mt-[140px] text-white'>
            <div className='text-[20px]'>Kampala - Uganda</div>
            <div className='h-[2px] bg-white'></div>
            <div className='text-[12px] py-1'>300 Properties</div>
            <div>
                <button className='bg-[#2ba189] px-3 rounded-full py-[2px] text-[12px]'>See More</button>
            </div>
        </div>
        
    </div>
    <div className="bg-[url('http://localhost:3002/dar.jpg')] w-[260px] h-[300px] bg-cover bg-center rounded-3xl mt-7 ml-7 pt-6 px-6">
        <div className='px-6 py-1 bg-[#f6611f] text-white w-[143px] rounded-full'>Deal from 5$</div>
        <div className='mt-[140px] text-white'>
            <div className='text-[20px]'>Dar es Salam - Tanzania</div>
            <div className='h-[2px] bg-white'></div>
            <div className='text-[12px] py-1'>150 Properties</div>
            <div>
                <button className='bg-[#2ba189] px-3 rounded-full py-[2px] text-[12px]'>See More</button>
            </div>
        </div>
        
    </div>
    </div>
   </div>
   </div>
   <div>
    <button className='bg-[#2ba189] px-12 my-8 py-2 rounded text-white'>View All</button>
   </div>
   
    </div>
  )
}
