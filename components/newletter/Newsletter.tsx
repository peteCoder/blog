
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'


const Newsletter = () => {
  return (
    <div className="bg-[#f7f7f7] container mx-auto py-20 px-6 mt-14">
        <div className='flex justify-between items-center flex-col md:flex-row gap-4'>
            <h2 className='max-w-[350px] text-2xl font-light text-center mb-5 md:mb-0 md:text-left basis-[45%]'>Subscribe to our newsletter and stay updated.</h2>
            <div className="flex items-center md:h-14 flex-col md:flex-row w-full md:w-fit basis-[45%] md:basis-[50%]">
                <Input placeholder='Write your email here...' type='text' className='border-none h-14 md:h-full rounded-none focus-visible:ring-0 bg-white' />
                <Button className='h-14 w-full md:w-fit md:h-full rounded-none  hover:bg-[#ff2e55] uppercase text-lg '>Subscribe</Button>
            </div>

        </div>
    </div>
    
  )
}

export default Newsletter