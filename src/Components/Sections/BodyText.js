import React from 'react'
import 'flowbite';

export default function BodyText() {
  return (
    <div>
        <div className="flex bg-[url('http://localhost:3000/black-woman-with-suitcase-airport1.jpg')] bg-cover bg-center ">
<div>
</div>
        <div className=' w-[1000px] text-left py-[240px] px-[190px]'>
            <div className='text-[50px] text-white'>Discover Your Favorite <span className='text-[#2ba189]'>Place</span> with Us</div>
        </div>
        <div className=' w-[1000px] py-[200px] px-[150px] text-left '>
            <div className='bg-white rounded-2xl px-4 py-4 space-y-3'>
                <h3 className='text-[20px] pb-3'>Find deals for any reason</h3>
                <div className='text-gray-300 pb-1'>From cazy country homes to funcy city<br /> apartments!</div>
                <div><input className='px-3 rounded w-full pb-1 border-gray-300' type="text" placeholder='location'/></div>
                <div><input className='px-3 w-full rounded border-gray-300'  type="text" placeholder='From - To'/></div>
                <div>
                    <select className='w-full pb-5 rounded border-gray-300'>
                        <option>Adult - children - room</option>
                    </select>
                </div>
                <div><input className='px-3 py-2 w-full bg-[#2ba189] rounded text-white mb-5' type="submit" value='Search'/></div>
            </div>
        </div>
    </div>
    </div>
  )
}
