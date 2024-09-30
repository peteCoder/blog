"use client";

import Post from "./Post";

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { useEffect, useState } from "react";

const PostsList = ({ blogs }: {blogs: BlogInterface[]}) => { // Here we receive the posts as props from the server.
    const postData = blogs;

    console.log(postData)

    const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null;

    return (
        <div className="mt-16">
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 550: 2}}
            >
                <Masonry>
                    {/* Children */}
                    {postData?.map((post, index) => (
                        <Post post={post} key={post._id} />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
        
    )
}

export default PostsList;