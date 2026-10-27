import CounterAction from "./components/CounterAction";
import { CounterDisplay } from "./components/CounterDisplay";
import CounterProvider from "./components/CounterProvider";

function App() {
return<>
<CounterProvider>
  <CounterDisplay></CounterDisplay>
  <CounterAction></CounterAction>
  </CounterProvider></>
}
export default App;