import { fetchAllBlogs } from "@/actions/fetchAllBlogs";
import HeroSlide from "@/components/hero/HeroSlide";
import Newsletter from "@/components/newletter/Newsletter";
import PostsList from "@/components/posts/PostsList";


export default async function Home() {

  const allPosts = await fetchAllBlogs();
  console.log(allPosts);
  return (
    <div>
      <HeroSlide />
      <PostsList blogs={allPosts}/>
      <Newsletter />
    </div>
  );
}
