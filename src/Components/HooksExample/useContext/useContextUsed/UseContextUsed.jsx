import React, { createContext, useState } from "react";
import Child from "./Child";

export const global = createContext();

function UseContextUsed() {
  const [color, setColor] = useState("red");
  const [day, setDay] = useState("Monday");

  const getDay = (items) => {
    setDay(items);
  };

  return (
    <global.Provider value={{ color, getDay }}>
      <h1>UseContextUsed {day}</h1>
      <Child />
    </global.Provider>
  );
}

export default UseContextUsed;
