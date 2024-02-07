// import React, { useMemo, useState } from "react";

// function UseMemoSolution() {
//   const [countOne, setCountOne] = useState(0);
//   const [countTwo, setCountTwo] = useState(0);

//   function increment() {
//     setCountOne(countOne + 1);
//   }

//   function decrement() {
//     setCountTwo(countTwo - 1);
//   }
//   const isEven = useMemo(() => {
//     for (let i = 0; i < 1000000000; i++) {}
//     return countOne % 2 === 0;
//   }, [countOne]);

//   return (
//     <div>
//       <button onClick={increment}>Count One + {countOne}</button>
//       {isEven ? "Even Number" : "Odd Number"}
//       <br />
//       <br />
//       <button onClick={decrement}>Count Two - {countTwo}</button>
//     </div>
//   );
// }

// export default UseMemoSolution;

import React, { useMemo, useState } from "react";

const calculationExpensive = (num) => {
  console.log("Calculation...");
  for (let i = 0; i < 1000000000; i++) {
    num = num + 1;
  }
};
function UseMemoSolution() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const calculate = useMemo(
    function () {
      return calculationExpensive(count);
    },
    [count]
  );

  function increment() {
    setCount((c) => c + 1);
  }

  const addTodo = () => {
    setTodos((c) => [...c, "New todo"]);
  };
  return (
    <div>
      <h1>Todos </h1>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
      <div>
        Count:{count}
        <button onClick={increment}> + </button>
      </div>
      <div>
        <h2>{calculate}</h2>
      </div>
    </div>
  );
}

export default UseMemoSolution;
