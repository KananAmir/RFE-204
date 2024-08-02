import { useReducer } from "react";
import { nanoid } from "nanoid";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) ?? [],
  inputValue: "",
};

const ACTIONS = {
  SET_INPUT_VALUE: "SET_INPUT_VALUE",
  CLEAR_INPUT_VALUE: "CLEAR_INPUT_VALUE",
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  DELETE_ALL_TODOS: "DELETE_ALL_TODOS",
  TOGGLE_TODO: "TOGGLE_TODO",
};

const reducer = (state, action) => {
  let updatedTodos;
  switch (action.type) {
    case ACTIONS.SET_INPUT_VALUE:
      return { ...state, inputValue: action.payload };

    case ACTIONS.CLEAR_INPUT_VALUE:
      return { ...state, inputValue: "" };

    case ACTIONS.ADD_TODO:
      updatedTodos = [...state.todos, action.payload];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return { ...state, todos: updatedTodos };

    case ACTIONS.DELETE_TODO:
      updatedTodos = state.todos.filter((q) => q.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return { ...state, todos: updatedTodos };

    case ACTIONS.DELETE_ALL_TODOS:
      localStorage.removeItem("todos");
      return { ...state, todos: [] };

    case ACTIONS.TOGGLE_TODO:
      updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return { ...state, todos: updatedTodos };

    default:
      return state;
  }
};

const TodoAppWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = () => {
    if (state.inputValue) {
      dispatch({
        type: ACTIONS.ADD_TODO,
        payload: {
          id: nanoid(),
          todoText: state.inputValue,
          isCompleted: false,
        },
      });
      dispatch({ type: ACTIONS.CLEAR_INPUT_VALUE });
    } else {
      window.alert("Fill input!");
    }
  };

  const handleDeleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
    }
  };

  return (
    <div>
      <input
        type="text"
        value={state.inputValue}
        onChange={(event) => {
          dispatch({
            type: ACTIONS.SET_INPUT_VALUE,
            payload: event.target.value,
          });
        }}
      />
      <button onClick={handleAddTodo}>ADD</button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_ALL_TODOS })}>
        DELETE ALL
      </button>

      <hr />

      {state.todos.length > 0 ? (
        <ul>
          {state.todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() =>
                  dispatch({ type: ACTIONS.TOGGLE_TODO, payload: todo.id })
                }
              />
              <span
                style={{
                  textDecoration: `${todo.isCompleted ? "line-through" : ""}`,
                }}
              >
                {todo.todoText}
              </span>
              <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <h4>There are no todos yet..</h4>
      )}
    </div>
  );
};

export default TodoAppWithUseReducer;
