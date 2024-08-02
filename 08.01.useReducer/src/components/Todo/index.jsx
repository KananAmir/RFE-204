import { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

class Todo {
  constructor(id, todoText, isCompleted) {
    this.id = id;
    this.todoText = todoText;
    this.isCompleted = isCompleted;
  }
}
const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const inputRef = useRef();

  const handleAddTodo = () => {
    // console.log(inputRef.current.value);
    const todo = new Todo(Date.now(), inputRef.current?.value, false);
    // console.log(todo);
    setTodos([...todos, todo]);
    inputRef.current.value = "";
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((q) => q.id !== id));
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => handleAddTodo()}>ADD</button>
      <hr />
      <ul>
        {todos.length > 0 &&
          todos.map((todo) => {
            return (
              <li key={todo.id}>
                <span>
                  {todo.todoText}{" "}
                  <IoMdClose onClick={() => handleDelete(todo.id)} />
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoApp;
