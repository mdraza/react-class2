import React, { useEffect, useState } from "react";
import Counter from "./Counter";

function HookUseEffect() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      setPosts(result);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  console.log(posts);

  return (
    <div>
      <Counter />
      <h1 className="text-5xl text-center m-5 text-cyan-500 font-bold">
        Post Details
      </h1>
      <div className="grid grid-cols-3 mx-[120px] gap-5">
        {isLoading && <h2 className="text-4xl text-cyan-500">Loading...</h2>}
        {posts?.map((post) => (
          <PostDetails post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

function PostDetails({ post }) {
  return (
    <div className="hover:bg-slate-200 transition-all">
      <div className="border-2 border-slate-300 p-5">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default HookUseEffect;
