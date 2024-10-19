import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { ServerErrorsEnum } from "app/types/globalType";
import { Comment } from "entities/Comment";
type CommentWithoutId = Omit<Comment, "id">;

export const addComment = createAsyncThunk<
  Comment,
  CommentWithoutId,
  ThunkConfig<string[]>
>("addComment", async (commentWithoutId, { rejectWithValue, extra }) => {
  try {
    const response = await extra.api.post<Comment>("/comment", {
      commentWithoutId: commentWithoutId,
    });

    if (!response.data) {
      return rejectWithValue([ServerErrorsEnum.NO_DATA]);
    }

    return response.data;
  } catch (e) {
    return rejectWithValue([ServerErrorsEnum.SERVER_ERROR]);
  }
});
