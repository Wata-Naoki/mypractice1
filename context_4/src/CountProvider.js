import "./App.css";
import { CountContext } from "./App";
import React, { useContext } from 'react';



function CounterProvider() {
    
    const {count, addCount, countDown} = useContext(CountContext)
  
  return (
    <div>
      <p>count: {count} </p>
      <button onClick={addCount}>
        add
      </button>
      <button onClick={countDown}>
        down
      </button>
    </div>
  );
}

export default CounterProvider;
