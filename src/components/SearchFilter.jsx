import React, { useEffect, useState } from "react";

const SearchFilter = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchedPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      setPosts(result);
      setFilteredPosts(result);
    };
    fetchedPosts();
  }, []);

  useEffect(() => {
    const result = posts.filter((post) =>
      post.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredPosts(result);
  }, [posts, searchInput]);

  return (
    <div>
      <div className="m-10">
        <input
          type="text"
          placeholder="Search here..."
          className="border-2 border-slate-300 p-4 w-[100%]"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="m-10 grid grid-cols-4 gap-5">
        {filteredPosts.map((post) => (
          <div key={post.id} className="p-5 bg-slate-200">
            <h2 className="text-xl font-medium mb-2">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
