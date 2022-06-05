import { useState } from "react";

export const UseCounter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount((count) => count + 1);
  };

  const countDown = () => {
    setCount((count) => count - 1);
  };

 

  const counters = () => {
    return { count, setCount, countUp, countDown };
  };
};

/* export default UseCounter; */
