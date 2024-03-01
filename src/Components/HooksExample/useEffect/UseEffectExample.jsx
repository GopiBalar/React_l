import React, { useEffect, useState } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(
    function () {
      const myInterval = setInterval(function () {
        setCount(function (prevValue) {
          return prevValue + 1;
        });
      }, 1000);
      return function () {
        clearInterval(myInterval);
      };
    },
    [count]
  );

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        color:"white",
        fontSize:"50px",
        fontWeight:"bold"
      }}
    >
      {count}
    </div>
  );
}

export default UseEffectExample;
