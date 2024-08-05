import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  markAsDone,
} from "../../redux/todoSlice/todo.slice";
import { useState } from "react";

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const state = useSelector((state) => state.todos);
  //   console.log(state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="add todo here.."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(
            addTodo({
              id: Date.now(),
              todoText: inputValue,
              isCompleted: false,
            })
          );
          setInputValue("");
        }}
      >
        add
      </button>
      <hr />
      <ul>
        {state.todos.length > 0 &&
          state.todos.map((todo) => {
            return (
              <li key={todo.id}>
                <span
                  style={{ textDecoration: todo.isCompleted && "line-through" }}
                >
                  {todo.todoText}
                </span>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>
                  DELETE
                </button>
                <button
                  onClick={() => {
                    dispatch(markAsDone(todo.id));
                    console.log(state.todos);
                  }}
                >
                  {!todo.isCompleted ? "mark as done" : "completed"}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoApp;
