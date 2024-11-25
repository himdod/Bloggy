// import { useContext, useEffect, useState } from "react";
import PostCard from "./Post";
// import { PostStore } from "../store/postStore";
import WelcomeMessage from "./welcomeMessage";
import { useLoaderData } from "react-router-dom";

function PostList() {
  // const { Post } = useContext(PostStore);

const Post = useLoaderData();

  return (
    <>
    {/* {fetching && <LoadingSpinner/>} */}
      {Post.length === 0 && (
        <WelcomeMessage />
      )}
      {Post.map((items) => (
        <PostCard key={items.id} posts={items} />
      ))}
    </>
  );
}

export const postLoader = ()=>{
  return fetch("http://dummyjson.com/posts")
  .then((res) => res.json())
  .then((data) => {
    return data.posts;
  });
}

export default PostList;
