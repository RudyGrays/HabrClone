import { createAsyncThunk } from "@reduxjs/toolkit";
import { Profile } from "../../types/ProfileSchema";

type ProfileId = string;

export const getProfileById = createAsyncThunk<
  Profile,
  ProfileId,
  { rejectValue: string }
>("profile/getProfileById", async (id, thunkAPI) => {
  try {
    //@ts-ignore
    const response = await thunkAPI.extra.api.post<Profile>("/profile", {
      id: id,
    });

    if (!response.data) {
      return thunkAPI.rejectWithValue("No data in response");
    }

    thunkAPI.fulfillWithValue(response.data);

    return response.data;
  } catch (err: any) {
    const errorMessage = err.response?.data?.message || "Failed to get profile";
    return thunkAPI.rejectWithValue(errorMessage);
  }
});
