"use client";
import { useNavigationToggle } from '@/hooks/use-navigation-search'
import { cn } from '@/lib/utils';
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'


const navItems = [
  {
    linkName: "Home",
    path: "/",
  },
  {
    linkName: "About",
    path: "/about",
  },
  {
    linkName: "Blog",
    path: "/blog",
  },
  {
    linkName: "Contact",
    path: "/contact",
  },
]

const DesktopNav = () => {

  const navigation = useNavigationToggle();

  const pathname = usePathname();

  return (
    <>
        {/* Desktop Navigation */}      
        <div className={cn('hidden md:block bg-white fixed top-0 left-0 right-0 w-full z-[1000] p-2 py-5 duration-1000', !navigation.isSearchOpen && "shadow-sm")}>
            <div className="flex items-center container mx-auto justify-between">
              
              <Image src="/logo.png" alt="" width={150} height={250} />
              <div className="flex items-center gap-20">
                <div className="flex items-center gap-3 font-bold">
                  {navItems.map((link) => (
                    <Link href={link.path} key={link.linkName} className={cn(`px-5
                      text-[#757575] hover:text-[#ff2e55] text-[15px] font-normal
                    `, pathname === link.path && "text-[#ff2e55] font-semibold")}>{link.linkName}</Link>
                  ))}
                </div>
                <div className='p-2 cursor-pointer' onClick={() => navigation.toggleSearchBar()}>
                    <SearchIcon className='h-5 w-5' />
                </div>
              </div>
              
            </div>
           
        </div>
    </>
    
  )
}

export default DesktopNav