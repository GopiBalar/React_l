import React, { useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);

  function handleInput() {
    inputRef.current.value = 1000;
    // inputRef.current.focus();
    // inputRef.current.style.color = "red";
    // inputRef.current.style.display = "none";
  }
  return (
    <div>
      <h1>UseRef</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>Click</button>
    </div>
  );
}

export default UseRef;
