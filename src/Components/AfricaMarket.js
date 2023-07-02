import React from 'react'
import Maskgroup from '../assets/booklimages/homepage/Maskgroup.png'
import greenline from '../assets/booklimages/greenline.png'
import apple from '../assets/booklimages/apple.png'
import googleplay from '../assets/booklimages/googleplay.png'
import Group14786 from '../assets/booklimages/homepage/Group14786.png'
import Maskgroups from '../assets/booklimages/homepage/Maskgroup-1.png'
export default function AfricaMarket() {
  return (
    <div className=''>
        <div className=' flex'>
        <div className=''>
            <img className='' src={Maskgroup} />
        </div>
        <div className='mt-[23px]'>
            <div className='text-[30px] font-bold'>Africa's all in one market place for travelers</div>
            <div><img className='h-[20px]' src={greenline} /></div>
            <div>Book flights, hotels, trains & rental cars anywhere in the world in just secons. Get real-time flight updates, travel info, exclusive deals, and 30% more Trip Coins only on the app !</div>
            <div><button className='border px-4 rounded mt-3'>Email</button></div>
            <div>Enter your Email to receive a text with a link to download the app.</div>
            <div className='flex space-x-8 mt-3'>
            <div>
            <div><input className=' bg-[#31ac9e] h-[30px] w-[340px] mb-2 rounded' type="email" placeholder='Your Email' /></div>
            <div><button className='bg-[#f6611f] text-white h-[30px] w-full rounded'>Send App Link</button></div>
            </div>
            <div>
            <div><img className='h-[30px] w-full mb-2 rounded' src={apple} /></div>
            <div><img className=' h-[30px]' src={googleplay} /></div>
            </div>
            </div>
        </div>
        <div>
            <div className='w-[600px]'>
                <img src={Group14786} />
            </div>
        </div>
        <div className='flex items-end'>

        <div><img className='object-cover' src={Maskgroups} /></div>
        </div>
        </div>
    </div>
  )
}
