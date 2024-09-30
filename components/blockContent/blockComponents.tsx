
import { urlFor } from '@/lib/sanityClient';
import {PortableTextComponents} from '@portabletext/react'
import { headers } from 'next/headers';
import Image from 'next/image';


const blockComponents: PortableTextComponents =  {
    marks: {
        link: ({value, children}) => {
           
            return (
              <a target='_blank'  className='text-[#d10068] underline sm:text-sm  md:text-[16px]' href={value?.href}>
                {children}
              </a>
            )
        },
    },
    block: {
        h1: ({children}) => <h1 className="text-5xl">{children}</h1>,
        h2: ({children}) => <h2 className="text-4xl">{children}</h2>,
        h3: ({children}) => <h3 className="text-3xl">{children}</h3>,
        h4: ({children}) => <h4 className="text-2xl">{children}</h4>,
        h5: ({children}) => <h5 className="text-xl">{children}</h5>,
        h6: ({children}) => <h6 className="text-lg">{children}</h6>,
        p: ({children}) => <p className="mt-5 text-sm md:text-[16px]">{children}</p>,
    },
    list: {
        // Ex. 1: customizing common list types
        bullet: ({children}) => <ul className="mt-xl">{children}</ul>,
        number: ({children}) => <ol className="">{children}</ol>,
    
        // // Ex. 2: rendering custom lists
        // checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
    },
    types: {
        image: ({value}) => {
            return (
                <>
                    <div className="mt-5">
                        <Image
                            src={urlFor(value)?.url()} 
                            width={2000} 
                            height={1000} 
                            alt={"post image"}
                            className='w-full object-cover max-h-[500px]'
                        />
                    </div>
                </>
            )
        },
        
    }
    
    
}

export default blockComponents;