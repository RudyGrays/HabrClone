import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { ServerErrorsEnum } from "app/types/globalType";
import { Article } from "entities/Acticle";

export const getArticles = createAsyncThunk<
  Article[],
  undefined,
  ThunkConfig<string[]>
>("getArticles", async (_, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.get("/articles");

    if (!response.data) {
      return rejectWithValue([ServerErrorsEnum.NO_DATA]);
    }

    return response.data;
  } catch (e) {
    return rejectWithValue([ServerErrorsEnum.SERVER_ERROR]);
  }
});
