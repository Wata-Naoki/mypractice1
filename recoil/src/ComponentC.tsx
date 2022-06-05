import { countState } from "./Counter";
import { useRecoilState } from "recoil";

function ComponentC() {
  const [count] = useRecoilState(countState);

  return (
    <div>
      <p>count: {count} </p>
    </div>
  );
}

export default ComponentC;
