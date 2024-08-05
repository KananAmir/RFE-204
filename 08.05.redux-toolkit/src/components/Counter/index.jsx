import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  incrementByInputValue,
} from "../../redux/counterSlice/counter.slice";
import { useRef, useState } from "react";

const Counter = () => {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const inputRef = useRef();

  console.log(state);
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <hr />
      <input type="number" placeholder="type here.." ref={inputRef} />
      <button
        onClick={() =>
          dispatch(incrementByInputValue(inputRef.current.valueAsNumber))
        }
      >
        increment by input value
      </button>

      <h1>{state.count}</h1>
    </div>
  );
};

export default Counter;
