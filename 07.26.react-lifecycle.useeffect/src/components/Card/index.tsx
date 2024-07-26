import { useEffect, useState } from "react";

const Card = () => {
  const [count, setCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  //   useEffect(() => {
  //     console.log("card comp mounted");

  //     //cleanup function, works on unmouinting
  //     return () => {
  //       console.log("card comp unmounted");
  //     };
  //   }, []);

  useEffect(() => {
    console.log("card comp updated");

    //cleanup function, works on unmouinting
    return () => {
      console.log("card comp unmounted");
    };
  }, [count]);

  return (
    <div>
      <h1>This is Card Comp..</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <h1>count is {count}</h1>

      <hr />

      <input
        type="text"
        name=""
        id=""
        placeholder="enter ur name here.."
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <p>{inputValue}</p>
    </div>
  );
};

export default Card;
