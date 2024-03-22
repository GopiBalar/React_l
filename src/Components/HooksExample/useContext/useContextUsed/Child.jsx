import React, { useContext } from "react";
import { global } from "../useContextUsed/UseContextUsed";
import SuperChild from "./SuperChild";

function Child() {
  const { color } = useContext(global);

  return (
    <div>
      <h1 style={{ color: color }}>Child</h1>

      <SuperChild />
    </div>
  );
}

export default Child;
