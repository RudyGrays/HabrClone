import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  Profile,
  ProfileErrors,
  ProfileErrorsEnum,
} from "../../types/ProfileSchema";

type ProfileId = string;

export const getProfileById = createAsyncThunk<
  Profile,
  ProfileId,
  { rejectValue: ProfileErrors }
>("profile/getProfileById", async (id, thunkAPI) => {
  try {
    //@ts-ignore
    const response = await thunkAPI.extra.api.post<Profile>("/profile", {
      id: id,
    });

    if (!response.data) {
      return thunkAPI.rejectWithValue([
        ProfileErrorsEnum.NO_DATA,
      ] as ProfileErrors);
    }

    thunkAPI.fulfillWithValue(response.data);

    return response.data;
  } catch (err: any) {
    const errorMessage = [err.response?.data?.message] || [
      ProfileErrorsEnum.SERVER_ERROR,
    ];
    return thunkAPI.rejectWithValue(errorMessage as ProfileErrors);
  }
});
