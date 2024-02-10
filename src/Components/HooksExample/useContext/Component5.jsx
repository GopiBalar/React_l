// import React, { useContext } from "react";
// import { UserContext } from "./Component1";
// import { User } from "./Component1";

// function Component5() {
//   const userContext = useContext(UserContext);
//   const us = User();
//   return (
//     <div>
//       {userContext}
//       {us}
//     </div>
//   );
// }

// export default Component5;

import React from "react";
import { useUser } from "./User";

function Component5() {
  const user = useUser();
  return (
    <div>
      Hello
      {user}
    </div>
  );
}

export default Component5;
