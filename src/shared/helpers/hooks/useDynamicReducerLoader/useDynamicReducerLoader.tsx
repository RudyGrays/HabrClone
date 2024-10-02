import { Reducer } from "@reduxjs/toolkit";
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from "app/providers/StoreProvider";
import { useStore } from "react-redux";
import { useEffect } from "react";

const useDynamicReducerLoader = (
  reducerName: StateSchemaKey,
  reducer: Reducer,
): void => {
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    if (!store.reducerManager.getReducerMap()[reducerName]) {
      store.reducerManager.add(reducerName, reducer);
    }

    return () => {
      store.reducerManager.remove(reducerName);
    };
  }, [store, reducerName, reducer]);

  return null;
};

export { useDynamicReducerLoader };
