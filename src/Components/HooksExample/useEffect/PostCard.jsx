import React from "react";

function PostCard(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "aquamarine",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "1.2rem",
        }}
      >
        <p>{props.id}</p>
        <p>{props.userId}</p>
      </div>
      <hr style={{ border: "1px solid green", margin: "0.5px" }} />
      <div>
        <h3 style={{ fontSize: "2rem" }}>{props.title}</h3>
      </div>
      <div style={{ fontSize: "1.3rem" }}>
        <p>{props.body}</p>
      </div>
    </div>
  );
}

export default PostCard;
