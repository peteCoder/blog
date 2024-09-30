import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const isEven = (num: number) => {
  return num % 2 === 0;
}

const Post = ({post} : {post: BlogInterface}) => {
  return (
    <div className="px-1 overflow-hidden mx-2 mb-3 group">
      <div className={cn("bg-[#f7f7f7] rounded-lg overflow-hidden w-full")}>
        <div className="w-full overflow-hidden">
        {/* Image */}
          {/* <div style={{backgroundImage: `url(${post.bannerImage.asset.url})`}} className="min-h-[300px] md:min-h-[410px] overflow-hidden w-full h-full bg-center bg-cover group-hover:scale-105 transition-all duration-700"></div> */}
        </div>
        <div className="py-6 px-7 md:text-center">
          <div className="">
            <Link href={`/blog/${post._id}`} className="hover:underline text-2xl md:text-3xl lg:text-4xl mb-4 inline-block text-[rgb(41,41,41)]">{post.title}</Link>
            <div className="lg:text-lg mb-3">{post.description}</div>
            <Link href={`/blog/${post._id}`} className="text-sm mb-5  mt-5 inline-block 
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