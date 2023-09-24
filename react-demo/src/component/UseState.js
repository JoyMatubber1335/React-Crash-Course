import { useState } from "react";

export const UseState = () => {
  const [count, serCount] = useState(4);
  const decriment = () => {
    serCount((previous) => previous - 1);
  };
  const incriment = () => {
    serCount((previous) => previous + 1);
  };
  return (
    <div>
      <button onClick={decriment}>-</button>
      <span>{count}</span>
      <button onClick={incriment}>+</button>
    </div>
  );
};
