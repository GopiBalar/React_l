import React, { useState } from "react";
// It's Object type example

function UseStateExample3() {
  const [fruits, setFruits] = useState({
    fruit: "Apple",
    color: "Red",
    range: "200",
  });

  const [formvalues, setFormValues] = useState({
    fruit: "Apple",
    color: "Red",
    range: "200",
  });

  function handlechange(e) {
    setFormValues({ ...formvalues, [e.target.name]: e.target.value });
  }

  function handlesubmit() {
    setFruits({ ...fruits, ...formvalues });
  }

  return (
    <div className="containerOuter">
      <div className="containerInner">
        <div style={{ marginBottom: "32px" }}>
          <h2>My Favourite {fruits.fruit}</h2>
          <p>
            It's {fruits.color} colour range of {fruits.range} RS.
          </p>
        </div>
        <div style={{ display: "Flex", flexDirection: "column", gap: "10px" }}>
          <input
            type="text"
            placeholder="Enter a Fruit !"
            name="fruit"
            onChange={function (e) {
              handlechange(e);
            }}
          />
          <input
            type="text"
            placeholder="Enter a Color !"
            name="color"
            onChange={function (e) {
              handlechange(e);
            }}
          />
          <input
            type="text"
            placeholder="Enter a Range !"
            name="range"
            onChange={function (e) {
              handlechange(e);
            }}
          />
          <button onClick={handlesubmit}>Submit !</button>
        </div>
      </div>
    </div>
  );
}

export default UseStateExample3;
