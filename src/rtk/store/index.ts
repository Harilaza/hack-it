import { configureStore } from "@reduxjs/toolkit";

import currentPageReducer from "../features/currentPage";

export const store = configureStore({
  reducer: { currentPage: currentPageReducer },
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
