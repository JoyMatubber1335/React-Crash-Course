import { Name } from "./component/Greet"; // I write {Name } like this because we pass the Component
import Myage from "./component/Greet"; // I write Myage like this because we don't pass the default Component
import {Msg} from "./component/State";
function App() {
  return (
    <div className="App">
      <Name />
      <Myage />
      <Msg />
    </div>
  );
}

export default App;
