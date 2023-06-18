import React from 'react'
import usaLogo from '../../assets/usa.png'
import { RxTriangleDown } from 'react-icons/rx'
import logo_bookly from '../../assets/booklimages/logo_bookly.png'

export default function Navbar() {
  return (
    <div className='flex justify-between  px-[110px] text-[12px]'>
        <div className='py-4'><img className='h-[40px]' src={logo_bookly} /></div>
        <div className='flex space-x-8 py-8'>
            <div className='bg-teal-500 px-4 py-1 rounded text-white'>Hotels</div>
            <div className='py-1'>Homestays</div>
            <div className='py-1'>Tour</div>
            <div className='py-1'>Car</div>
            <div className='py-1'>Event</div>
        </div>
        <div className='flex space-x-4 py-8'>
            <div className='flex space-x-1 pt-1'>
                <div><img className='h-[15px]' src={usaLogo} /></div>
                <div><RxTriangleDown /></div>
            </div>
            <div className='flex space-x-1'>
                <div><b>USD</b></div>
                <div className='pt-1'><RxTriangleDown /></div>
            </div>
        </div>
    </div>
  )
}
