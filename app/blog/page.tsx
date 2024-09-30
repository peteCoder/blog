import { fetchAllBlogs } from '@/actions/fetchAllBlogs';
import PostsList from '@/components/posts/PostsList'
import React from 'react'

const BlogPage = async () => {
  const allPosts = await fetchAllBlogs();
  console.log(allPosts);
  return (
    <PostsList blogs={allPosts} />
  )
}

export default BlogPage