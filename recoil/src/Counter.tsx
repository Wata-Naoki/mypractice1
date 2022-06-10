import ComponentA from "./ComponentA";
import { ComponentB } from "./ComponentB";
import ComponentC from "./ComponentC";
import { atom } from "recoil";

export const countState = atom({
  key: "sample/count",
  default: 0,
});

function App() {
  return (
    <>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </>
  );
}

export default App;
