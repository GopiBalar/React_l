import React from "react";

function MasalaCard(props) {
  console.log("props", props);
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img
        src={props.imgURL}
        alt="India Ke Masale!"
        style={{
          width: "100%",
          objectFit: "cover",
          height: "400px",
          borderRadius: "15px",
        }}
      />
      <h3 style={{ textAlign: "center" }}>PRICE : {props.Price}/- kg</h3>
    </div>
  );
}

export default MasalaCard;
