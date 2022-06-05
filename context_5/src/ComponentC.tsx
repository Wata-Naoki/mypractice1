import "./App.css";
import { CountContext } from "./App";
import React, { useContext } from "react";

function ComponentC() {
  const { count } = useContext(CountContext);

  return (
    <div>
      <p>count: {count} </p>
    </div>
  );
}

export default ComponentC;
