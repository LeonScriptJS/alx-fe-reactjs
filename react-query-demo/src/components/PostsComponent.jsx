import React from 'react';
import { useQuery } from '@tanstack/react-query';

function PostsComponent() {
  const fetchPosts = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  };

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery("posts", fetchPosts, {
    staleTime: 1000 * 60 * 5,          // 5 minutes
    cacheTime: 1000 * 60 * 10,        // 10 minutes
    refetchOnWindowFocus: false,      // do not auto refetch on tab focus
    keepPreviousData: true,           // keep old data while fetching new
  });

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Posts</h2>

      <button onClick={() => refetch()}>
        Refetch Posts
      </button>

      {data.slice(0, 10).map((post) => (
        <div key={post.id} style={{ marginBottom: "15px" }}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsComponent;