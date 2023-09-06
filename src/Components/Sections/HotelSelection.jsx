import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { CiMapPin } from 'react-icons/ci'
import { IoIosBicycle } from 'react-icons/io'
import { AiOutlineClockCircle } from 'react-icons/ai'
import GoodToKnow from './GoodToKnow'
import HotelDescription from './HotelDescription'

export default function HotelSelection() {
  return (
    <div>
        <div className='px-[360px]'>
        <div className='flex justify-between'>
            <div className='flex gap-2'>
                <div className='text-[25px] font-bold'>UBUMWE GRAND HOTEL</div>
                <div className='flex mt-3'>
                    <div><AiFillStar className='text-[#f65c42]' /></div>
                    <div><AiFillStar className='text-[#f65c42]' /></div>
                    <div><AiFillStar className='text-[#f65c42]' /></div>
                    <div><AiFillStar className='text-[#f65c42]' /></div>
                    <div><AiFillStar className='text-[#f65c42]' /></div>
                </div>
            </div>
            <div className='flex gap-2'>
                <div className='text-[25px] font-bold'>$100</div>
                <div><button className='bg-[#04a189] py-1 px-4 rounded-md text-white text-[10px] mt-2'>View deals</button></div>
            </div>
        </div>
        <div className='flex'>
            <div className='text-[10px] pt-[2px]'><CiMapPin /></div>
            <div className='text-[10px]'>Kigali, Rwanda</div>
        </div>
        <div className='flex gap-3 py-5'>
            <div className='text-[23px] font-bold'>4.4</div>
            <div className='mt-2'>
                <div className='flex gap-1'>
                    <div><IoIosBicycle  className='text-[10px] mt-[-2px]'/></div>
                    <div className='bg-[#00aa6c] rounded-full w-2 h-2'></div>
                    <div className='bg-[#00aa6c] rounded-full w-2 h-2'></div>
                    <div className='bg-[#00aa6c] rounded-full w-2 h-2'></div>
                    <div className='bg-[#00aa6c] rounded-full w-2 h-2'></div>
                    <div className='flex'>
                        <div className='bg-[#00aa6c] rounded-l-full w-[4px] h-2'></div>
                        <div className='border border-[#00aa6c] rounded-r-full w-[4px] h-2'></div>
                    </div>
                </div>
                <div className='text-[10px]'>100 Reviews</div>
            </div>
        </div>
        <div className='text-[22px] font-bold text-[#04a189] mb-[23px]'>Hotel Rating</div>
        <div>
        <div className='flex gap-4'>
            <div className='flex gap-3 pb-5 mt-4'>
                <div className='text-[23px] font-bold'>3.5</div>
                <div className='mt-2'>
                    <div className='flex gap-1'>
                        <div><IoIosBicycle  className='text-[10px] mt-[-2px]'/></div>
                        <div className='bg-[#00aa6c] rounded-full w-2 h-2'></div>
                        <div className='bg-[#00aa6c] rounded-full w-2 h-2'></div>
                        <div className='bg-[#00aa6c] rounded-full w-2 h-2'></div>
                        <div className='bg-[#00aa6c] rounded-full w-2 h-2'></div>
                        <div className='flex'>
                            <div className='bg-[#00aa6c] rounded-l-full w-[4px] h-2'></div>
                            <div className='border border-[#00aa6c] rounded-r-full w-[4px] h-2'></div>
                        </div>
                    </div>
                    <div className='text-[10px]'>43 Reviews</div>
                </div>
            </div>
                <div className='w-full'>
                    <div className='flex justify-between'>
                        <div className='text-[10px]'>Cleanliness</div>
                        <div className='text-[10px]'>4.0</div>
                    </div>
                    <div className='bg-[#e0e3e5] h-2 w-full rounded-full pr-[150px]'>
                        <div className='bg-[#0d838a] h-2 w-full rounded-full'></div>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <div className='text-[10px]'>Service</div>
                        <div className='text-[10px]'>3.5</div>
                    </div>
                    <div className='bg-[#e0e3e5] h-2 w-full rounded-full pr-[250px]'>
                        <div className='bg-[#f65c42] h-2 w-full rounded-full'></div>
                    </div>
                </div>
                <div>
                </div>
                <div className='w-full'>
                    <div className='flex justify-between'>
                        <div className='text-[10px]'>Location</div>
                        <div className='text-[10px]'>4.0</div>
                    </div>
                    <div className='bg-[#e0e3e5] h-2 w-full rounded-full pr-[150px]'>
                        <div className='bg-[#0d838a] h-2 w-full rounded-full'></div>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <div className='text-[10px]'>Rooms</div>
                        <div className='text-[10px]'>4.0</div>
                    </div>
                    <div className='bg-[#e0e3e5] h-2 w-full rounded-full pr-[150px]'>
                        <div className='bg-[#0d838a] h-2 w-full rounded-full'></div>
                    </div>
                </div>
                <div></div>
            </div>
            </div>
            <div>
                <div className='text-[25px] mt-8 pb-4'>Check in and check out</div>
                <div className='flex gap-32 pb-9'>
                    <div><AiOutlineClockCircle className='text-[50px]' /></div>
                    <div>
                        <div>Check in from:</div>
                        <div className='font-bold'>15:00</div>
                    </div>
                    <div>
                        <div>Check out before:</div>
                        <div className='font-bold'>12:00</div>
                    </div>
                </div>
            </div>
    </div>
            <GoodToKnow />
            <HotelDescription />
    </div>
  )
}
