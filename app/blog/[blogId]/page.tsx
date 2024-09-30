import { fetchSinglePost } from '@/actions/fetchSingleBlog'
import PostDetails from '@/components/posts/PostDetails'
import { notFound } from 'next/navigation'
import React from 'react'

interface Params {
    params: {
      blogId: string
    }
}

const BlogDetail = async ({
    params: { blogId },
  }: Params) => {
    // Fetch the blog here

    const posts: BlogInterface[] = await fetchSinglePost(blogId);

  if (posts.length < 1) {
    return notFound;
  }

  return (
    <div>
      <PostDetails post={posts[0]} />
    </div>
  )
}

export default BlogDetail