import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "entities/Profile";
import { ProfileErrors } from "../../types/ProfileSchema";
import { validateProfileData } from "../validateProfileData/validateProfileData";
import { ServerErrorsEnum } from "app/types/globalType";

export interface updateProfileByIdProps {
  profileData: Profile;
  id: string;
}

export const updateProfileById = createAsyncThunk<
  Profile,
  updateProfileByIdProps,
  ThunkConfig<ProfileErrors | ServerErrorsEnum[]>
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
      return thunkAPI.rejectWithValue([ServerErrorsEnum.NO_DATA]);
    }

    return response.data;
  } catch (err: any) {
    const error = [ServerErrorsEnum.SERVER_ERROR];
    thunkAPI.rejectWithValue(error);
  }
});
