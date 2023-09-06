import React from 'react'
import 'flowbite';
import SlidingImages from '../Slide/SlidingImages';
import { navData } from '../../Data/navData';
import { Link, useLocation } from 'react-router-dom'
import SecondNavbar from './SecondNavbar';

export default function BodyText() {
const location = useLocation();
const active = location.pathname;
  return (
    <div className='relative'>
            <SlidingImages />
        <div className='absolute top-12'>
            <SecondNavbar />
            <div className='flex '>
                <div className=' w-full pt-[80px] text-left pb-[240px] px-[190px]'>
                    <div className='text-[50px] text-white'>Discover Your Favorite <span className='text-[#2ba189]'>Place</span> with Us</div>
                </div>
                <div className=' w-full pt-[80px] pb-[200px] px-[150px] text-left '>
                    <div className='px-4 mb-2 rounded-2xl bg-[#5caba3]'>
                        <div className='flex py-2 justify-between'>
                            {
                                navData.map((item) => {
                                    return(
                                        <Link to={item.path}>
                                        <div className={`${item.Hotels === "Hotels" ? "bg-white text-[#5caba3] rounded" : null} px-7 text-white py-3 `}>{item.Hotels}</div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
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
    </div>
  )
}
