import HeroSlide from "@/components/hero/HeroSlide";
import Newsletter from "@/components/newletter/Newsletter";
import PostsList from "@/components/posts/PostsList";


export default function Home() {
  return (
    <div>
      <HeroSlide />
      <PostsList />
      <Newsletter />
    </div>
  );
}
