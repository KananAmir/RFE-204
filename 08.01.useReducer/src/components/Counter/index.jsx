import { useReducer } from "react";

const initialState = { count: 0, inputValue: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "SET_INPUT_VALUE":
      return { ...state, inputValue: action.payload };
    case "INCREMENT_BY_INPUT_VALUE":
      return { ...state, count: state.count + state.inputValue };

    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <h1>count is {state.count}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
      <hr />
      <input
        type="number"
        onChange={(e) =>
          dispatch({ type: "SET_INPUT_VALUE", payload: +e.target.value })
        }
      />
      <button onClick={() => dispatch({ type: "INCREMENT_BY_INPUT_VALUE" })}>
        increment by input value
      </button>
    </>
  );
}

export default Counter;
