"use client";

import Image from 'next/image'
import React from 'react'
import { Facebook, SearchIcon, X, Youtube } from "lucide-react"
import { useNavigationToggle } from '@/hooks/use-navigation-search';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

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

const MobileNav = () => {
    const navigation = useNavigationToggle();

    const router = useRouter();

    const pathname = usePathname();


    return (
        <>
            {/* Mobile Navigation */}
            <div className={cn('md:hidden block bg-white fixed top-0 left-0 w-full z-[1000] duration-1000', !navigation.isSearchOpen && "shadow-sm")}>
                <div className="container flex justify-between items-center p-2 px-2 mx-auto">
                    {/* Hamburger */}
                    <div className="hamburger cursor-pointer p-2" onClick={() => {
                        navigation.toggleNavBar();
                    }}>
                        <span className='line'></span>
                        <span className='line'></span>
                        <span className='line'></span>
                    </div>
                    {/* Nav Slider */}
                    <div className={cn(
                        "fixed top-0 left-0 h-screen overflow-y-auto shadow-md z-[1000] w-[80%] sm:w-[300px] bg-white transition duration-500 -translate-x-full",
                        navigation.isNavOpen && "translate-x-0 "
                    )}>
                        {/* Nav Header */}
                        <div className="p-4 py-2 border-b flex items-center justify-between">
                            {/* Logo */}
                            <div className="">
                                <Image src="/logo.png" alt="" width={100} height={200} />
                            </div>
                            {/* X Icon */}
                            <div className='p-2 cursor-pointer' onClick={() => { 
                                navigation.closeNavBar();
                            }}>
                                <X className='h-[1.2rem] w-[1.2rem] sm:h-5 sm:w-5' />
                            </div>
                        </div>
                        {/* Nav Items */}
                        <div className="pt-8 mt-5 flex gap-4 flex-col p-4 py-2">
                            {navItems.map((link) => (
                                <span key={link.linkName} className={cn('cursor-pointer p-2 hover:text-[#ff2e55]', 
                                    pathname === link.path && "text-[#ff2e55]")} 
                                    onClick={() => {router.push(link.path);
                                        navigation.closeNavBar();
                                    }}
                                >
                                    {link.linkName}
                                </span>
                            ))}
                        </div>

                        {/* Socials */}
                        <div className="text-center mt-40 p-4">
                            <h2>Follow us</h2>
                            <div className="flex items-center gap-5 justify-center mt-5 mb-4 flex-wrap">
                                <Image src="/icons/facebook-icon.svg" alt="" className='h-6 w-6 cursor-pointer' width={100} height={200} />
                                <Image src="/icons/instagram.svg" alt="" className='h-6 w-6 cursor-pointer' width={100} height={200} />
                                <Image src="/icons/linkedin.svg" alt="" className='h-6 w-6 cursor-pointer' width={100} height={200} />
                                <Image src="/icons/twitter.svg" alt="" className='h-6 w-6 cursor-pointer' width={100} height={200} />
                            </div>
                        </div>
                    </div>
                    {/* Overlay */}
                    <div onClick={() => navigation.closeNavBar()} className={cn("nav-overlay", navigation.isNavOpen && "visible opacity-[.2]")}></div>
                    <div className="">
                        <Image src="/logo.png" alt="" width={100} height={200} />
                    </div>

                    <div className='p-2 cursor-pointer' onClick={() => navigation.toggleSearchBar()}>
                        <SearchIcon className='h-5 w-5' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNav;


