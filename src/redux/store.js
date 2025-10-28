import { configureStore } from "@reduxjs/toolkit";
import namesReducer from "./reducer";

import storage from "redux-persist/lib/storage";

import { persistStore, persistReducer } from "redux-persist";


const persistConfig = {
  key: "root",
  storage,
}


export const persistedReducer = persistReducer(persistConfig, namesReducer)

export const store = configureStore({
  reducer: {
    names: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
        ],
      },
    }),
});


export const persistor = persistStore(store)