import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  function decrement() {
    return setCount((c) => c - 1);
  }

  function increment() {
    return setCount((c) => c + 1);
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default UseState;
