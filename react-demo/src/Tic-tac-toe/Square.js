import React, { useState } from "react";

import "./styles.css";
// let ValuX = true;
export const Square = ({ value, handelSqureClick }) => {
  // const [value, setValue] = useState();
  // const handelClick = () => {
  //   setValue(ValuX ? "X" : "O");
  //   ValuX = !ValuX;
  // };
  return (
    <div>
      <button className="square" onClick={handelSqureClick}>
        {value}
      </button>
    </div>
  );
};
