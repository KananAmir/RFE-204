import { useState } from "react";
import Decrement from "../Decrement";
import Increment from "../Increment";
import IncrementByAmount from "../IncrementByAmount";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  //   const increment = (): void => {
  //     setCount((count) => count + 1);
  //   };
  //   const decrement = (): void => {
  //     setCount((count) => count - 1);
  //   };
  return (
    <div>
      <Increment setCount={setCount} />
      <h1>{count}</h1>
      <Decrement setCount={setCount} />
      <hr />
      <IncrementByAmount setCount={setCount} />
    </div>
  );
};

export default Counter;
