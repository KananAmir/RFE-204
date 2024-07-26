import React, { useState } from "react";

type Counter = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
const IncrementByAmount = ({ setCount }: Counter) => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <>
      <input type="number" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={() => setCount((c) => c + +inputValue)}>
        Increment by Amount
      </button>
    </>
  );
};

export default IncrementByAmount;
