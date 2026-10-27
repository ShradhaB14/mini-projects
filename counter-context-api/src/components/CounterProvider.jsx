import { CounterContext } from "../context/counterContext";
import { useState } from "react";

const CounterProvider = ({ children }) => {
  const [count, setCounter] = useState(0);

  const increment = () => {
    setCounter((previousCount) => previousCount + 1);
  };

  const decrement = () => {
    setCounter((previousCount) => previousCount - 1);
  };

  return (
    <>
      <CounterContext.Provider value={{ count, increment, decrement }}>
        {children}
      </CounterContext.Provider>
    </>
  );
};
export default CounterProvider;
