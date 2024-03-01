import React, { useState } from "react";

function UseStateExample() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [color, setColor] = useState("Red");
  const [year, setYear] = useState("1556");

  return (
    <div>
      <h1>My Car {brand} </h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </div>
  );
}

export default UseStateExample;
