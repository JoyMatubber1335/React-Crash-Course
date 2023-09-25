import React from "react";

import { useState, useMemo } from "react";

export const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [black, setBlack] = useState(false);
  const doubleNumber = useMemo(() => {
    return slow(number);
  }, [number]);
  const color = {
    backgroundColor: black ? "black" : "white",
    color: black ? "white" : "black",
  };
  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))}></input>
      <button onClick={() => setBlack((prevBlack) => !prevBlack)}>Change Theme </button>
      <div style={color}>{doubleNumber}</div>
    </div>
  );
};

function slow(num) {
  for (let index = 0; index < 1000000000; index++) {}
  return num * 2;
}
