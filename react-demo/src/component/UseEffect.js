import React, { useEffect, useState } from "react";

export const UseEffect = () => {
  const [countIncrement, setCountIncrement] = useState(0);
  const [countDecriment, setCountDecriment] = useState(0);
  //   useEffect(() => {
  //     // call every time
  //     console.log("useEffecr");
  //   });
  //   useEffect(() => {
  //     // call first  time
  //     console.log("useEffecr");
  //   }, []);

  useEffect(() => {
    // call if countIncrement value was chenged
    console.log("useEffect");
  }, [countIncrement]);

  useEffect(() => {
    // call if countDecriment value was chenged
    console.log("useEffect2");
  }, [countDecriment]);

  const countUpdateInc = () => {
    setCountIncrement((countIncrement) => countIncrement + 1);
  };

  const countUpdateDec = () => {
    setCountDecriment((countDecriment) => countDecriment - 1);
  };

  return (
    <div>
      {console.log("render")}
      <h2>{countIncrement}</h2>
      <button onClick={countUpdateInc}>+</button>
      <h1>{countDecriment}</h1>
      <button onClick={countUpdateDec}>+</button>
    </div>
  );
};
