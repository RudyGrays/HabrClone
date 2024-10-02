import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "entities/Profile";
import { ProfileErrors, ProfileErrorsEnum } from "../../types/ProfileSchema";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export interface updateProfileByIdProps {
  profileData: Profile;
  id: string;
}

export const updateProfileById = createAsyncThunk<
  Profile,
  updateProfileByIdProps,
  ThunkConfig<ProfileErrors>
>("profile/updateProfileById", async (profileData, thunkAPI) => {
  try {
    const errors = validateProfileData(profileData.profileData);

    if (errors.length > 0) {
      return thunkAPI.rejectWithValue(errors as ProfileErrors);
    }

    const response = await thunkAPI.extra.api.post<Profile>(
      "/updateProfile",
      profileData,
    );

    if (!response.data) {
      return thunkAPI.rejectWithValue([
        ProfileErrorsEnum.NO_DATA,
      ] as ProfileErrors);
    }

    return response.data;
  } catch (err: any) {
    const error = [err?.response?.data?.message] || [
      ProfileErrorsEnum.SERVER_ERROR,
    ];
    thunkAPI.rejectWithValue(error as ProfileErrors);
  }
});
