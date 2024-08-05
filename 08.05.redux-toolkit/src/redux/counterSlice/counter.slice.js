import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state, action) => {
      state.count--;
    },
    reset: (state, action) => {
      state.count = 0;
    },
    incrementByInputValue: (state, action) => {
      state.count = state.count + action.payload;
      //   console.log(action);
    },
  },
});

export const { increment, decrement, reset, incrementByInputValue } =
  counterSlice.actions;

export default counterSlice.reducer;
