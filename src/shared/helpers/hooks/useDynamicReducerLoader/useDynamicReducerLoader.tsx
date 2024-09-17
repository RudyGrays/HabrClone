import { Reducer } from "@reduxjs/toolkit";
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from "app/providers/StoreProvider";
import { useStore } from "react-redux";

const useDynamicReducerLoader = () => {
  const store = useStore() as ReduxStoreWithManager;

  const addReducer = (reducerName: StateSchemaKey, reducer: Reducer) => {
    store.reducerManager.add(reducerName, reducer);
  };
  const removeReducer = (reducerName: StateSchemaKey) => {
    store.reducerManager.remove(reducerName);
  };

  return {
    addReducer,
    removeReducer,
  };
};

export { useDynamicReducerLoader };
