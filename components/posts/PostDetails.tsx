import React from 'react'
import DetailPortableContent from '../blockContent/DetailPortableContent';
import { urlFor } from '@/lib/sanityClient';
import Image from 'next/image';


const PostDetails = ({post}: {post: BlogInterface}) => {

  console.log("Image: ", urlFor(post?.bannerImage).url())
  return (
    <div>
        <div className="mb-10">
          <div className="text-center  max-w-[950px] mx-auto space-y-2 md:space-y-5 mb-5">
            <h2 className='text-xl md:text-3xl lg:text-4xl xl:text-5xl text-[rgb(41,41,41)]'>{post.title}</h2>
            <p className='text-sm lg:text-lg'>{post?._createdAt}</p>
            {/* <p className='uppercase text-[#d10068] text-sm md:text-[16px]'>{post.category.title}</p> */}
          </div>
        

        {/* Body content */}
        <div className="">
          {/* Header Image */}
            <Image
              src={urlFor(post?.bannerImage).url()} 
              width={2000} 
              height={1000} 
              alt={post.title || "post image"}
              className='w-full object-cover max-h-[500px]'
            />
            {/* Rest Body */}
            <div className="max-w-[900px] mx-auto mt-5 sm:mt-10 md:mt-20 text-left flex flex-col ">
              <DetailPortableContent body={post.body} />
              {/* Call to action */}
            </div>
        </div>


        {/* Social Media */}
        
        </div>
        

    </div>
  )
}

export default PostDetails