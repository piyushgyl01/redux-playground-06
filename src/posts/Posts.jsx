import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, likeButtonPresses } from "./postSlice.js";

export default function Posts() {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <h1>Posts</h1>
      {status === "loading" && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts.map((post) => (
        <div key={post.postId}>
          <p>{post.caption}</p>
          <button onClick={() => dispatch(likeButtonPresses(post.postId))}>
            {post.likes} likes
          </button>
        </div>
      ))}
    </>
  );
}
