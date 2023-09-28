import React, { useState } from "react";
import { Context2 } from "./Context2";
import { UserContext } from "./UserContext";

export const MainContext = () => {
  const [user, setUser] = useState({ name: "Joy MAtubber", id: 12 });
  return (
    <div>
      <UserContext.Provider value={user}>
        <Context2 />
      </UserContext.Provider>
    </div>
  );
};
