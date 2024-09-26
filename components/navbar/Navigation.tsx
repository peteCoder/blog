import Image from 'next/image'
import React from 'react'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'
import SearchComponent from './SearchComponent'

const Navigation = () => {
  return (
    <div className='bg-white'>
        <MobileNav />
        <DesktopNav />

        <div className="mt-[3.42rem] md:mt-20">
          <SearchComponent />
        </div>
        
    </div>
  )
}

export default Navigation