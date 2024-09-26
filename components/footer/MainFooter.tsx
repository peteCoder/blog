"use client";

import { useNavigationToggle } from '@/hooks/use-navigation-search';
import { cn } from '@/lib/utils';
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation';
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

  const categoryItems = [
    {
        id: "1232-233-2-4-432-3",
        name: "style & beauty",
    },
    {
        id: "2332-43-2-4-432-3",
        name: "travel",
    },
    {
        id: "564-233-2-4-432-3",
        name: "dating",
    },
    {
        id: "1332-233-2-4-882-3",
        name: "entertainment",
    },

  ]

const MainFooter = () => {

    const navigation = useNavigationToggle();

    const router = useRouter();

    const pathname = usePathname();


  return (
    <div className='text-[#5e5e5e]'>
        <div className='grid md:grid-cols-[200px,1fr] grid-cols-1 w-full gap-8 mb-5'>
            {/* About */}
            <div className="md:basis-1/3 w-full">
                <Image src="/logo.png" alt="" className='mx-auto md:mx-0' width={150} height={300} />
            </div>

            {/* Rest Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full  gap-5">
                {/* Quick Links */}
                <div className="">
                    <h2 className='text-[1rem] text-black dark:text-white font-bold'>Quick Links</h2>
                    <div className="flex flex-col">
                        {navItems.map((link) => (
                            <span key={link.linkName} className={cn('cursor-pointer p-2 hover:text-[#ff2e55]')} 
                                onClick={() => {
                                    router.push(link.path);
                                    navigation.closeNavBar();
                                }}
                            >
                                {link.linkName}
                            </span>
                        ))}
                    </div>
                </div>
                
                {/* Category Links */}
                <div className="">
                    <h2 className='text-[1rem] text-black dark:text-white font-bold'>Categories</h2>
                    <div className="flex flex-col">
                        {categoryItems.map((category) => (
                            <span key={category.id} className={cn('cursor-pointer p-2 hover:text-[#ff2e55] capitalize')} 
                                onClick={() => {
                                    router.push(`/category/${category.id}`);
                                    navigation.closeNavBar();
                                }}
                            >
                                {category.name}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Social Links */}
                <div className="w-full">
                    <div className="my-6">
                        <h2 className='text-[1rem] text-black dark:text-white font-bold'>Follow us</h2>
                        <div className="flex gap-5 mt-5 mb-4 flex-wrap">
                            <Image src="/icons/facebook-icon.svg" alt="" className='h-6 w-6 cursor-pointer' width={100} height={200} />
                            <Image src="/icons/instagram.svg" alt="" className='h-6 w-6 cursor-pointer' width={100} height={200} />
                            <Image src="/icons/linkedin.svg" alt="" className='h-6 w-6 cursor-pointer' width={100} height={200} />
                            <Image src="/icons/twitter.svg" alt="" className='h-6 w-6 cursor-pointer' width={100} height={200} />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <p className='text-center my-10'>Copyright © StoryHub, Inc 2024.</p>
    </div>
  )
}

export default MainFooter