import "./App.css";
import React, { createContext, useState } from "react";
import CounterProvider from "./CountProvider";

export const CountContext = createContext();

function App() {
  
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const countDown = () => {
    setCount(count - 1);
  };

  return (
    <>
      <CountContext.Provider value={{ count, addCount, countDown }}>
        <CounterProvider />
      </CountContext.Provider>
      
    </>
  );
}

export default App;
