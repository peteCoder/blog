import { mySanityClient } from "@/lib/sanityClient"
import { cache } from "react";

export const fetchSinglePost = cache(async (_id: string) => {
    const query = `*[_type == 'blog' && _id == '${_id}']{
        _id,
        title,
        description,
        bannerImage{
            asset->{
                url
            }
        },
        category->{
            _id,
            title,
            description,
            image{
                asset->{
                    url
                }
            }
        },
        body,
        _updatedAt,
        _createdAt
    }`;
    const result = await mySanityClient.fetch(query);

    console.log("This is the result: ", result)

    
    return result;
    
});