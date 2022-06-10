import "./App.css";

import { CountContext } from "./App";
import { useContext } from "react";

function ComponentA() {
  const { count, setCount } = useContext(CountContext);

  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={addCount}>add</button>
    </>
  );
}

export default ComponentA;
