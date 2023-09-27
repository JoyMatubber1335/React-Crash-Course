import "./App.css";
// import { useCallback, useState } from "react";
// // import { Name } from "./component/Greet"; // I write {Name } like this because we pass the Component
// import Myage from "./component/Greet"; // I write Myage like this because we don't pass the default Component
// import { Msg } from "./component/State";
// import { ClickHandler } from "./component/ClickHendler";
// import { ConditionalRender } from "./component/ConditionalRendar";
// import { Style } from "./component/Style";
// import { ListRender } from "./component/ListRender";
// import { UseState } from "./component/UseState";
// import { UseEffect } from "./component/UseEffect";
// import { FetchData } from "./component/FetchData";
// import { MemoFunction } from "./component/MemoFunction";
import { Context2 } from "./Context/Context2";
// import { UseMemo } from "./component/UseMemo";
// import { MemoFunction } from "./component/MemoFunction";
// import { UseMemo } from "./component/UseMemo";
// import { UserRef } from "./component/UseRef";
<<<<<<< Updated upstream

=======
// import { UseReducer } from "./component/UseReducer";
import { Axios } from "./Axios/Axios";
>>>>>>> Stashed changes
function App() {
  // const [count, setCount] = useState(0);
  // const [togle, setTogle] = useState(0);
  // console.log("app render ");
  // const handelClick = () => {
  //   setCount((count) => count + 1);
  // };
  // const handelIncriment = useCallback(() => {
  //   return setCount(count + 1);
  // }, [count]);

  return (
    <div className="App">
      {/* {togle ? "on" : "off"}
      <button
        onClick={() => {
          setTogle(!togle);
        }}
      >
        toggle
      </button> */}
      {/* {/* <Name id="23" />
      <Name id="23" />
      <Name id="23" /> }
      <Msg />
      <Myage>
        <h1>This is child props </h1>
      </Myage>
      <ClickHandler />
      <ConditionalRender />
      <Style />
      <ListRender /> */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <h1>{count}</h1> */}
      {/* <button onClick={handelClick}>click</button> render the memo function */}
      {/* <button onClick={demo}>click1</button> */}
      {/* not render the memo Function  */}
      {/* <FetchData /> */}
      {/* <MemoFunction count={count} onHandelIncrement={handelIncriment} /> */}
      {/* <UseMemo /> */}
      {/* <Context2 /> */}
      {/* <UseReducer />
       */}

      <Axios />
    </div>
  );
}

export default App;
