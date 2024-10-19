import { createSlice } from "@reduxjs/toolkit";
import { ArticleSchema } from "../types/Article";
import { getArticleById } from "../services/getArticleById/getArticleById";

export const initialState: ArticleSchema = {
  isLoading: false,
  errors: [],
  data: undefined,
};

export const ArticleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getArticleById.fulfilled, (state, action) => {
        state.errors = [];
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getArticleById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getArticleById.rejected, (state, action) => {
        state.errors = action.payload;
        state.isLoading = false;
        state.data = undefined;
      });
  },
});

export const { reducer: ArticleReducer } = ArticleSlice;
export const { actions: ArticleActions } = ArticleSlice;
