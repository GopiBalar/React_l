import React, { useContext } from "react";
import { global } from "./UseContextUsed";

function SuperChild() {
  const { color, getDay } = useContext(global);
  const day = "Sunday";
  return (
    <div style={{ color: color }}>
      <h1>SuperChild</h1>
      <button onClick={() => getDay(day)}>Click</button>
    </div>
  );
}

export default SuperChild;
