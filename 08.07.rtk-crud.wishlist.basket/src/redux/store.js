import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoriesApi } from "./services/categoriesApi";
import favoritesReducer from "./features/favoritesSlice";
import basketReducer from "./features/basketSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    basket: basketReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoriesApi.middleware),
});

setupListeners(store.dispatch);
