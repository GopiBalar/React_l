import React, { useState } from "react";
// It's Array type example

function UseStateExample2() {
  const [car, setCar] = useState(["BMW", "Mustang", "Red", "1956"]);

  return (
    <div>
      <h1>My Car {car[0]} !!</h1>
      <p>
        It is a {car[2]} {car[1]} from {car[3]}.
      </p>
    </div>
  );
}

export default UseStateExample2;
