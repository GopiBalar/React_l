import React from "react";
import { useState } from "react";

function UseStateExample4() {
  const initialColor = generateRandomColor();
  const [color, setColor] = useState(initialColor);

  function generateRandomColor() {
    return (
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
    );
  }

  function handleColorChange() {
    setColor(generateRandomColor());
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "300px",
          width: "300px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          gap: "8px",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
        onClick={handleColorChange}
      >
        <div
          style={{
            marginTop:"10px",
            height: "250px",
            width: "217px",
            backgroundColor: color,
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
          }}
        />
        <p style={{ fontSize: "1.25rem" }}>{color}</p>
      </div>
    </div>
  );
}

export default UseStateExample4;
