import {  useReducer } from "react";

const ACTION = {
  INCRIMENT: "increment",
  DECRIMENT: "decriment",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.DECRIMENT:
      return { count: state.count - 1 };
    case ACTION.INCRIMENT:
      return { count: state.count + 1 };
    default:
      return state;
  }
}

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //   const [count, serCount] = useState(4);

  const decriment = () => {
    dispatch({ type: ACTION.DECRIMENT });
  };
  const incriment = () => {
    // serCount((previous) => previous + 1);
    dispatch({ type: ACTION.INCRIMENT });
  };
  console.log("render use state");
  return (
    <div>
      <button onClick={decriment}>-</button>
      <span>{state.count}</span>
      <button onClick={incriment}>+</button>
    </div>
  );
};
