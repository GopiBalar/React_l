import { useState } from "react";
import Todos from "./Todos";

function Memodemo() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(1);

  function increment() {
    setData(2);
    setCount(count + 1);
  }

  return (
    <div>
      <Todos data={data} />
      <button onClick={increment}> + {count} Increment</button>
    </div>
  );
}

export default Memodemo;
