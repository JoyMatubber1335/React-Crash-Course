import React from "react";
import { useState } from "react";

export const Button = () => {
  const [count, setCount] = useState(0);
  const handelClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handelClick}>Clcik me {count}</button>
      {/* <button onClick={handelClick}>Clcik me {count}</button> */}
    </div>
  );
};
