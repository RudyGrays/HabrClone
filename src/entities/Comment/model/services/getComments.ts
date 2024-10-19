import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment, CommentErrors } from "../types/CommentSchema";
import { ServerErrorsEnum } from "app/types/globalType";

export interface getCommentsProps {
  byValue: string;
}

export const getComments = createAsyncThunk<
  Comment[],
  getCommentsProps,
  ThunkConfig<CommentErrors>
>("getComments", async ({ byValue }, { extra, rejectWithValue }) => {
  try {
    const result = await extra.api.post(`/comments`, {
      postId: byValue,
    });
    if (!result.data) rejectWithValue([ServerErrorsEnum.NO_DATA]);
    return result.data;
  } catch {
    return rejectWithValue([ServerErrorsEnum.SERVER_ERROR]);
  }
});
