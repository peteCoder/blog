"use client";

import React, { useEffect } from 'react'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { useNavigationToggle } from '@/hooks/use-navigation-search';

const SearchComponent = () => {

    
    const navigation = useNavigationToggle();
    const isSearchOpen =  navigation.isSearchOpen;
    const isSearchActive = navigation.isSearchActive;

    useEffect(() => {
        if (!isSearchOpen) {
            navigation.makeSearchUnactive();
        }
    }, [isSearchOpen])

  return (
    <div className='bg-gray-100 '>
        <div className={cn(`relative container mx-auto flex items-center px-4 h-[88px] duration-500 overflow-hidden`,
            isSearchOpen ? "opacity-100" : "h-[0px] opacity-0"
        )}>
            <Input 
                className={cn(`
                    bg-transparent shadow-none outline-none 
                    focus-within:border-none border-none
                    focus-visible:ring-0 text-lg p-0
                `)}
                placeholder='Enter Your Search Topic'
                onFocus={() => navigation.makeSearchBarActive()}
            />
            <div className='p-2 cursor-pointer' onClick={() => { 
                navigation.closeSearchBar();
            }}>
                <X className='h-5 w-5' />
            </div>
            
        </div>
        {/* Here Search Dropdown will be here */}
    </div>
    
  )
}

export default SearchComponent