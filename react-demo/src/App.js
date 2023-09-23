import { Name } from "./component/Greet"; // I write {Name } like this because we pass the Component
import Myage from "./component/Greet"; // I write Myage like this because we don't pass the default Component
import {Msg} from "./component/State";
function App() {
  return (
    <div className="App">
      <Name id="23" />
      <Name id="23" />
      <Name id="23" />
      <Myage>
        <h1>This is child props </h1>
      </Myage>
    </div>
  );
}

export default App;
