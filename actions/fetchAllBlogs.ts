import { mySanityClient } from "@/lib/sanityClient"
import { cache } from "react";

export const fetchAllBlogs = cache(async () => {
    const query = `*[_type == 'blog']{
        _id,
        title,
        description,
        bannerImage{
            asset->{
                url
            }
        },
        body,
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
        _updatedAt,
        _createdAt
    }`;
    const result = await mySanityClient.fetch(query);
    return result;
});