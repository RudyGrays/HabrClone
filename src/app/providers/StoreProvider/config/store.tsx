import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
// import { userReducer } from "entities/User";

import { useDispatch } from "react-redux";
import { userReducer } from "entities/User/model/slice/UserSlice";
import { createReducerManager } from "./ReducerManager";
import { $api } from "shared/api/axiosApiInstance";
import { NavigateFunction } from "react-router-dom";

export const createReduxStore = (
  navigate: NavigateFunction,
  initialState?: StateSchema,
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
  };

  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
  //@ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppStore = ReturnType<typeof createReduxStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch: () => AppDispatch = useDispatch;
