import React from "react";

function Todos(props) {
  console.log("props", props);
  return <div>Todos :{props.data}</div>;
}

export default React.memo(Todos);
