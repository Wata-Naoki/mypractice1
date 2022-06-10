import React from "react";
import { CountContext } from "./App";
import { useContext } from "react";

export const ComponentB = () => {
  const { count, setCount } = useContext(CountContext);

  const countDown = () => {
    setCount(count - 1);
  };

  return <button onClick={countDown}>down</button>;
};
