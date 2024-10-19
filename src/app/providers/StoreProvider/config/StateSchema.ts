// import { UserSchema } from "entities/User";
import {
  Action,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ArticleSchema } from "entities/Acticle/model/types/Article";
import { CommentSchema } from "entities/Comment";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";
import { ProfileCardSchema } from "features/EditableProfileCard";

export interface StateSchema {
  loginForm?: LoginSchema;
  user?: UserSchema;
  profile?: ProfileSchema;
  profileCard?: ProfileCardSchema;
  article?: ArticleSchema;
  comment?: CommentSchema;
}

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

export interface ThunkExtraArg {
  api?: AxiosInstance;
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
