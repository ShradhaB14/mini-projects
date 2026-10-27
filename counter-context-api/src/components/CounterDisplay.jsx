import { useContext } from "react";
import { CounterContext } from "../context/counterContext";

export const CounterDisplay = () => {
  const { count } = useContext(CounterContext);
  return <>{count}</>;
};
