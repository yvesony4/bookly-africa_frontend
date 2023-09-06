import React from 'react'
import { GoodToKnowData } from '../../Data/GoodToKnowData'

export default function GoodToKnow() {
  return (
    <div className='bg-gray-100 px-[360px] py-[50px]'>
        <div className='text-[22px] font-bold mb-8'>Good To Know</div>
        <div>
            {
                GoodToKnowData.map((item) => {
                    return(
                        <div>
                           <div className='flex gap-5'>
                                <div className='pt-1'>{item.icons}</div>
                                <div>{item.name}</div>
                                <div className='w-[600px]'>{item.description}</div>
                           </div>
                            <div className='h-[1px] bg-gray-300 w-full my-4'></div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
