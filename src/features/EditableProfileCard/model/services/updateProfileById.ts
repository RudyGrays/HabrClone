import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "entities/Profile";
import { User } from "entities/User";
import { ProfileCardActions } from "../slice/ProfileCardSlice";

export interface updateProfileByIdProps {
  user: User;
  id: string;
}

export const updateProfileById = createAsyncThunk<
  Profile,
  updateProfileByIdProps,
  ThunkConfig<string>
>("profileCardSlice/updateProfileById", async (userData, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.post<Profile>(
      "/updateProfile",
      userData,
    );

    if (!response.data) {
      return thunkAPI.rejectWithValue("No data in response");
    }

    thunkAPI.dispatch(ProfileCardActions.updateProfile(response.data));

    return response.data;
  } catch (err: any) {
    thunkAPI.rejectWithValue(
      err?.response?.data?.message || "Error with server!",
    );
  }
});
