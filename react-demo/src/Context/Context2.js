import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const Context2 = () => {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.id}</h1>
    </div>
  );
};
