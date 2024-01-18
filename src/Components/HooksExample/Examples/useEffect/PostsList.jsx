import React from "react";
import PostCard from "./PostCard";

function PostsList(props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
        gap: "12px",
        margin: "12px",
        padding: "1rem",
      }}
    >
      {props.posts.map(function (post) {
        return (
          <PostCard
            key={post.id}
            title={post.title}
            id={post.id}
            userId={post.userId}
            body={post.body}
          />
        );
      })}
    </div>
  );
}

export default PostsList;
