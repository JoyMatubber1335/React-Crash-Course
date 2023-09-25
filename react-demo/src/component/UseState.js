import { useState } from "react";

export const UseState = () => {
  const [count, serCount] = useState(4);
  const [color, setColor] = useState("blue");
  const decriment = () => {
    serCount((previous) => previous - 1);
    setColor("red");
  };
  const incriment = () => {
    serCount((previous) => previous + 1);
    setColor("green");
  };
  console.log("render use state");
  return (
    <div>
      <button onClick={decriment}>-</button>
      <span>{count}</span>
      <span>{color}</span>
      <button onClick={incriment}>+</button>
    </div>
  );
};
