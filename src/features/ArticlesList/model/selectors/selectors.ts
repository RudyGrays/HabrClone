import { StateSchema } from "app/providers/StoreProvider";
import { articlesAdapter } from "../slice/ArticlesSlice";

export const getArticlesSelector = articlesAdapter.getSelectors<StateSchema>(
  state => state.articles || articlesAdapter.getInitialState(),
);

export const getArticlesLoading = (state: StateSchema) =>
  state?.articles?.isLoading || false;

export const getArticlesErrors = (state: StateSchema) =>
  state?.articles?.errors || [];
