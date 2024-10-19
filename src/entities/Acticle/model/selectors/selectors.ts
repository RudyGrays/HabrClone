import { StateSchema } from "app/providers/StoreProvider";

export const getArticleIsLoading = (state: StateSchema) =>
  state?.article?.isLoading || false;

export const getArticleData = (state: StateSchema) =>
  state?.article?.data || undefined;

export const getArticleErrors = (state: StateSchema) =>
  state?.article?.errors || [];
