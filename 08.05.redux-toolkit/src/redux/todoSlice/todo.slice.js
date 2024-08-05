import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = [...state.todos.filter((q) => q.id !== action.payload)];
    },
    markAsDone: (state, action) => {
      const found = [...state.todos].find((q) => q.id == action.payload);
      found.isCompleted = !found.isCompleted;
    },
  },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;

export default todoSlice.reducer;
