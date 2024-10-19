import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "../../types/Article";
import { ThunkConfig } from "app/providers/StoreProvider";
import { ServerErrorsEnum } from "app/types/globalType";

export type ArticleData = string;

export const getArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string[]>
>("article/getArticleById", async (id, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.get<Article>(`/articles/${id}`);
    if (!response.data) {
      return thunkAPI.rejectWithValue([ServerErrorsEnum.NO_DATA]);
    }
    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue([ServerErrorsEnum.SERVER_ERROR]);
  }
});
