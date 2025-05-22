import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import TodoReducer from "../slice/todos";
const persistUser = {
  key: "todo",
  storage,
};
export const store = configureStore({
  reducer: {
    todo: persistReducer(persistUser, TodoReducer),
  },
});
export const persistor = persistStore(store);
