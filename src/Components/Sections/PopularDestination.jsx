import React from 'react'
import { PopularDestinationData } from '../../Data/PopularDestinationData'

export default function PopularDestination() {
  return (
    <div className='px-[100px] py-[50px] bg-[#f0f0f0]'>
        <div className='text-[#2ba189] font-bold text-[30px] mb-3'>Popular destinations</div>
        <div className='grid grid-cols-3 gap-3'>
            {
                PopularDestinationData.map((item) => {
                    return(
                        <div className='flex gap-5 justify-between w-[170px]'>
                            <div >
                            <div className='text-[20px] font-bold'>{item.Country}</div>
                            <div className='text-[12px]'>{item.ListNo}</div>
                            </div>
                            <div className='text-[35px]'>{item.PIcons}</div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
