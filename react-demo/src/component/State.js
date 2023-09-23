import { useState } from "react";

export const Msg = () => {
  const [msgOld, msgNew] = useState("Click hare");
  return (
    <div>
      <h1>{msgOld}</h1>
      <button onClick={() => msgNew("Click is occure !")}>Click</button>
    </div>
  );
};
