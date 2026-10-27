import { useState } from "react";
function App() {
  let [counter, setcounter] = useState(0);
  return (
    <>
      <button onClick={() => setcounter(counter + 1)}>Increment</button>
      {/* setCounter(prev => prev + 1) */}
      <button onClick={() => setcounter(counter - 1)}>Decrement</button>
      <div><h1>{counter}</h1></div>
    </>
  );
}
export default App;
