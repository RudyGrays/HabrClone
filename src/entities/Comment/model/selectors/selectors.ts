import { StateSchema } from "app/providers/StoreProvider";

export const getCommentsData = (state: StateSchema) => state?.comment?.data;

export const getCommentsLoading = (state: StateSchema) =>
  state?.comment?.isLoading || false;

export const getCommentsErrors = (state: StateSchema) =>
  state?.comment?.errors || [];
