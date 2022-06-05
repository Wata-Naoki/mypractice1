import "./App.css";
import React, { createContext, useState } from "react";
import ComponentA from "./ComponentA";
import { ComponentB } from "./ComponentB";
import ComponentC from "./ComponentC";

interface ContextInterface {
  count: number;
  /*  addCount: any
  countDown: any */
  setCount: any;
}

export const CountContext = createContext({} as ContextInterface);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={{ count, setCount }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </>
  );
}

export default App;
