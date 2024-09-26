import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface PostInterface {
  _id: string;
  title: string;
  description: string;
  image: string;
}

const isEven = (num: number) => {
  return num % 2 === 0;
}

const Post = ({post, index} : {post: PostInterface, index: number}) => {

  let p1left = 0;
  const p2 = 0
  
  return (
    <div className="px-1 overflow-hidden mx-2 mb-3">
      <div className={cn("bg-[#f7f7f7] rounded-lg overflow-hidden w-full")}>
        <Image src={post.image} alt={post.title} width={1000} height={500} className={cn('w-full object-cover min-h-[450px]', isEven(index + 1) ? "md:min-h-[500px]": "md:min-h-[400px]")} />
        <div className="py-6 px-7 text-center">
          <div className="">
            <Link href={`/posts/${post._id}`} className="hover:underline text-2xl md:text-3xl lg:text-4xl mb-4 inline-block">{post.title}</Link>
            <div className="text-sm lg:text-lg mb-3">{post.description}</div>
            <Link href={`/posts/${post._id}`} className="text-sm mb-5  mt-5 inline-block 
              px-5 py-2 font-bold uppercase text-black 
               bg-white rounded-sm overflow-hidden
              dark:text-black hover:bg-black dark:hover:bg-white 
              dark:hover:text-white hover:text-white  dark:bg-white"
            >Read More</Link>
          </div>
          
        </div>
    </div>
    
    </div>
  )
}

export default Post