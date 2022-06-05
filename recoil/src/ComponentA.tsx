import { useRecoilState } from "recoil";
import { countState } from "./Counter";

function ComponentA() {
  const [count, setCount] = useRecoilState(countState);

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
