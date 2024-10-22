import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Article } from "entities/Acticle";
import { ArticlesSchema } from "../types/ArticlesSchema";
import { getArticles } from "../services/getArticles";

export const articlesAdapter = createEntityAdapter({
  selectId: (article: Article) => article.id,
});

export const articlesSlice = createSlice({
  name: "articles",
  initialState: articlesAdapter.getInitialState<ArticlesSchema>({
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getArticles.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        articlesAdapter.setAll(state, action.payload);
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload;
      });
  },
});

export const { reducer: ArticlesReducer } = articlesSlice;
