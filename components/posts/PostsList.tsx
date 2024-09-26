import { postData } from "@/app/_data/dummy";
import Post from "./Post";

const PostsList = () => {
    const data = postData;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 mt-8">
            {postData.map((post, index) => (
                <Post post={post} key={post._id} index={index} />
            ))}
        </div>
    )
}

export default PostsList;