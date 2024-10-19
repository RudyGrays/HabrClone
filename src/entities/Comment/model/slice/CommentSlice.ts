import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comment, CommentSchema } from "../types/CommentSchema";
import { getComments } from "../services/getComments";

const initialState: CommentSchema = {
  isLoading: false,
  errors: [],
  data: undefined,
};

export const CommentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getComments.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(
        getComments.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.data = action.payload;
          state.isLoading = false;
          state.errors = [];
        },
      )
      .addCase(getComments.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload;
      });
  },
});

export const { reducer: CommentReducer } = CommentSlice;
export const { actions: CommentActions } = CommentSlice;
