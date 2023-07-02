import React from 'react'
import Copyright from './Copyright'
import { FooterData } from './Data/FooterData'
import { SocialMediaData } from './Data/SocialMediaData'

export default function Footer() {
  return (
    <div>
        <div className="bg-[url('http://localhost:3000/footer.jpg')] bg-cover flex justify-between">
        <div className='flex justify-between text-white py-8 gap-[120px]  px-[100px]'>
        {
            FooterData.map((item) => {
                return(
                    <div>
                        <div className='text-[21px] font-bold mb-2'>{item.FooterName}</div>
                        <div className='space-y-2'>
                        {item.FooterMenu.map((menuItem, menuItemIndex) => (
                        <div key={menuItemIndex}>{menuItem.FooterMenuItem}</div>
                        ))}

                        </div>
                    </div>
                )
            })
        }
        </div>
        <div className='mx-[190px] py-8'>
        <div className='text-[21px] font-bold mb-2 text-white'>Site / Currency</div>
        <div className='mb-2'>
            <select className='w-[240px] bg-transparent text-white border-white'>
                <option>United States</option>
            </select>
        </div>
        <div className='mb-2'>
            <select className='w-[240px] bg-transparent text-white border-white'>
                <option>United States Dollar</option>
            </select>
        </div>
        <div className='mb-2 flex'>
            <div><input className='w-[160px] text-[8px] h-[30px]' type='email' placeholder='youremail123@gmail.com'/></div>
            <div><button className='bg-black text-white px-4 py-2 text-[8px]'>SUBSCRIBE</button></div>
        </div>
        <div className='flex gap-5'>
            {
                SocialMediaData.map((item) => {
                    return(
                        <div className='text-white'>{item.Icons}</div>
                    )
                })
            }
        </div>
        </div>
    </div>
    <div>
        <Copyright />
    </div>
    </div>
  )
}
