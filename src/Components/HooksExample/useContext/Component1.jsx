// import React, { createContext, useContext } from "react";
// import Component2 from "./Component2";

// export const UserContext = createContext();
// const UserContext2 = createContext();

// export function User() {
//   const use = useContext(UserContext2);
//   return use;
// }

// function Component1() {
//   return (
//     <UserContext.Provider value="Ram">
//       <UserContext2.Provider value=" Shyam">
//         <Component2 />
//       </UserContext2.Provider>
//     </UserContext.Provider>
//   );
// }

// export default Component1;

import React from "react";
import Component2 from "./Component2";
import { useTheme } from "./Theme";
// import User from "./User";

function Component1(props) {
  const { theme, setTheme } = props;
  console.log("theme", theme);

  const dStyles = {
    backgroundColor: theme === "dark" ? "#212121" : "#fafafa",
    color: theme === "dark" ? "#fafafa" : "#212121",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    // <User>
    <div style={dStyles}>
      <Component2 />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        dolorum? Repellendus itaque officia provident tempore distinctio. Iure
        eveniet, modi commodi illum aspernatur architecto atque, quos
        perferendis velit harum fugit voluptatum?
      </p>
      <button
        onClick={() => {
          if (!theme) {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      >
        Change Theme
      </button>
    </div>
    // {/* </User> */}
  );
}

export default Component1;
