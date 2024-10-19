import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddCommentFormSchema } from "../types/addCommentForm";
import { addComment } from "../services/addComment";
import { Comment } from "entities/Comment";
const initialState: AddCommentFormSchema = {
  errors: [],
  isLoading: false,
  data: undefined,
};
export const addCommentFormSlice = createSlice({
  name: "addCommentForm",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        addComment.fulfilled,
        (state, action: PayloadAction<Comment>) => {
          state.isLoading = false;
          state.errors = [];
          state.data = action.payload;
        },
      )
      .addCase(addComment.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload;
      });
  },
});
