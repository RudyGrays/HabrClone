import { createAsyncThunk } from "@reduxjs/toolkit";
import { Profile, ProfileErrors } from "../../types/ProfileSchema";
import { ThunkConfig } from "app/providers/StoreProvider";
import { ServerErrorsEnum } from "app/types/globalType";

type ProfileId = string;

export const getProfileById = createAsyncThunk<
  Profile,
  ProfileId,
  ThunkConfig<ProfileErrors | ServerErrorsEnum[]>
>("profile/getProfileById", async (id, thunkAPI) => {
  try {
    //@ts-ignore
    const response = await thunkAPI.extra.api.post<Profile>("/profile", {
      id: id,
    });

    if (!response.data) {
      return thunkAPI.rejectWithValue([ServerErrorsEnum.NO_DATA]);
    }

    thunkAPI.fulfillWithValue(response.data);

    return response.data;
  } catch (err: any) {
    const errorMessage = [ServerErrorsEnum.SERVER_ERROR];
    return thunkAPI.rejectWithValue(errorMessage);
  }
});
