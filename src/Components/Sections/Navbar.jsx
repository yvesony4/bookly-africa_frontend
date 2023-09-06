import React from 'react'
import usaLogo from '../../assets/usa.png'
import { RxTriangleDown } from 'react-icons/rx'
import logo_bookly from '../../assets/booklimages/logo_bookly.png'
import { navData } from '../../Data/navData'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation();
    const active = location.pathname
  return (
    // <div class="flex justify-center absolute w-[100%] z-[1]">
    <div class="flex justify-center absolute w-[100%]">
        <div className='flex items-center justify-between text-white px-[110px] text-[12px] header'>
            <Link to='/'>
            <div className='py-4'><img className='h-[40px]' src={logo_bookly} /></div>
            </Link>
            <div className='flex py-8'>
                {
                    navData.map((item) => {
                        return(
                            <Link to={item.path}>
                            <div className={`${active === item.path ? "bg-teal-500" : null} flex gap-1 hover:bg-teal-500 px-4 py-1 rounded`}>
                                <div className='py-[6px]'>{item.logoNew}</div>
                                <div className='py-1'>{item.Hotels}</div>
                            </div>
                            </Link>
                        )
                    })
                }
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
    </div>
  )
}
