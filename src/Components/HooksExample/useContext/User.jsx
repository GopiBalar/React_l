import React, { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export function useUser() {
  const user = useContext(UserContext);
  return user;
}

function User(props) {
  const [user, setUser] = useState("User");

  return (
    <UserContext.Provider value={user}>
      <>{props.children}</>
    </UserContext.Provider>
  );
}

export default User;
