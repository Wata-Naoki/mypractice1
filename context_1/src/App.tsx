/* import { UseCounter } from "./UseCounter"; */

import { useState } from "react";

export const UseCounter = () => {
const [count, setCount] = useState(0);




 const countUp = () => {
  
  setCount((count) => count + 1);
};



 const countDown = () => {
  
  setCount((count) => count - 1);
};


 
  return (
    <>
      <h1>Counter</h1>

      <h2>count: {count}</h2>

      <button onClick={countUp}>+ number1</button>

      <button onClick={countDown}>- number-1</button>
    </>
  );
};


export default UseCounter;
