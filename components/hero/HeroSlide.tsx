"use client";

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { carouselData as items} from "@/app/_data/dummy";
import Image from "next/image";
import Link from "next/link";
import { fetchAllBlogs } from "@/actions/fetchAllBlogs";

function HeroSlide() {


  const [allBlogs, setAllBlogs] = React.useState([])


    const data = items;

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  React.useEffect(() => {
    const getFetchAllBlogs = async () => {
      const blogs = await fetchAllBlogs();

      setAllBlogs(blogs)
    }
    
    getFetchAllBlogs();

  }, []);

  console.log("This are all the blogs: ", allBlogs);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {data.map((post, index) => (
          <CarouselItem  key={index}>
            <div className="p-0">
              <Card className="shadow-none border-0">
                <CardContent className="flex items-center flex-col p-0">
                  <Image src={post.image} alt={post.title + "image."} width={2000} height={1000} />
                  
                  <div className=" py-3 md:py-10 text-center  ">
                    <h2 className="text-2xl md:text-3xl lg:text-5xl mb-3 lg:leading-[3.5rem] max-w-[700px] mx-auto">{post.title}</h2>
                    <p className="text-sm mt-2 md:mt-5 max-w-[800px] mx-auto">{post.description}</p>
                    <Link href={`/blog/${post._id}`} className="mb-5 text-sm md:text-lg mt-5 inline-block px-2 py-1 sm:px-5 sm:py-2 md:px-7 md:py-3 font-bold uppercase text-white  bg-black dark:text-black hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-white dark:bg-white">Read More</Link>
                  </div>
                
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-0 right-0">
        <CarouselPrevious className="static rounded-none text-white md:w-[60px] bg-black dark:text-black hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-white dark:bg-white text-3xl" />
        <CarouselNext className="static rounded-none text-white md:w-[60px] bg-black dark:text-black hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-white dark:bg-white text-3xl" />
      </div>
      
    </Carousel>
  )
}


export default HeroSlide;