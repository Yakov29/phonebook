import { configureStore } from "@reduxjs/toolkit";
import namesReducer from "./reducer";

export const store = configureStore({
  reducer: {
    names: namesReducer,
  },
});
