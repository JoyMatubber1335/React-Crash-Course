import "./App.css";
// import { useState } from "react";
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
import { UseMemo } from "./component/UseMemo";

function App() {
  // const [c, cc] = useState(0);
  // const [c1, cc1] = useState(0);
  // console.log("app render ");
  // const ccc = () => {
  //   cc((c) => c + 1);
  // };
  // const demo = () => {
  //   cc1((c1) => c1 + 1);
  // };

  return (
    <div className="App">
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
      {/* <h1>{c}</h1>
      <h1>{c1}</h1> */}

      {/* <button onClick={ccc}>click</button> */}
      {/* render the memo function */}
      {/* <button onClick={demo}>click1</button> */}
      {/* not render the memo Function  */}
      {/* <FetchData /> */}
      {/* <MemoFunction count={c} /> */}
      <UseMemo />
    </div>
  );
}

export default App;
