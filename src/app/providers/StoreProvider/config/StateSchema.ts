// import { UserSchema } from "entities/User";
import {
  Action,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";
import { ProfileCardSchema } from "features/EditableProfileCard";

import { NavigateFunction } from "react-router-dom";

export interface StateSchema {
  loginForm?: LoginSchema;
  user?: UserSchema;
  profile?: ProfileSchema;
  profileCard?: ProfileCardSchema;
}
export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};
export interface ThunkExtraArg {
  api?: AxiosInstance;
  navigate?: NavigateFunction;
}
export interface ThunkConfig<T> {
  extra: ThunkExtraArg;
  rejectValue: T;
}

export type StateSchemaKey = keyof Partial<StateSchema>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema | undefined, action: Action) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
