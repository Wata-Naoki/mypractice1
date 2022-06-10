import { countState } from "./Counter";
import { useRecoilState } from "recoil";

export const ComponentB = () => {
  const [count, setCount] = useRecoilState(countState);

  const countDown = () => {
    setCount(count - 1);
  };

  return <button onClick={countDown}>down</button>;
};
