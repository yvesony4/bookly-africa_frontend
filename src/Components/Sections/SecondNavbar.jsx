import React from 'react'
import usaLogo from '../../assets/usa.png'
import { RxTriangleDown } from 'react-icons/rx'
import logo_bookly from '../../assets/booklimages/logo_bookly.png'
import { Link, useLocation } from 'react-router-dom'

export default function SecondNavbar() {
    const location = useLocation();
    const active = location.pathname
  return (
    // <div class="flex justify-center absolute w-[100%] z-[1]">
    <div class="">
        <div className='flex items-center justify-between text-white px-[150px] text-[12px]'>
            <div className='pl-9'>
                <Link to='/'>
                    <div className='py-4'><img className='h-[80px]' src={logo_bookly} /></div>
                </Link>
            </div>
            <div className='border-2 rounded-full px-6 flex gap-8 py-2 '>
                <div>
                    <Link to='/'>
                        <button className='bg-[#e65d21] px-8 py-2 rounded font-bold text-[18px]'>
                            Become a Vendor
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to='/'>
                        <button className='bg-[#53a09f] px-8 py-2 rounded font-bold text-[18px]'>
                            B Signin
                        </button>
                    </Link>
                </div>
                <div className='flex space-x-4 pt-3'>
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
        </div>
    </div>
  )
}
