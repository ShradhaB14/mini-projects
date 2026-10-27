import { useContext } from "react"
// import CounterProvider from "./CounterProvider"
import { CounterContext } from "../context/counterContext";

const CounterAction=()=>{
  const {increment, decrement} = useContext(CounterContext);

  return<>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </>
}
export default CounterAction