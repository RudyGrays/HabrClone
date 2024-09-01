import { configureStore } from "@reduxjs/toolkit";
import StateSchema from "./StateSchema";
import { userReducer } from "entities/User";
export const createReduxStore = (initialState: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {
      user: userReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
