import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: { items: [] },
  reducers: {
    addToBasket: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter((q) => q.id !== action.payload.id);
    },
    increaseBasketItemCount: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.count++;
      }
    },
    decreaseBasketItemCount: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && item.count > 1) {
        item.count--;
      }
    },
    clearBasket: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  increaseBasketItemCount,
  decreaseBasketItemCount,
  clearBasket,
} = basketSlice.actions;
export default basketSlice.reducer;
