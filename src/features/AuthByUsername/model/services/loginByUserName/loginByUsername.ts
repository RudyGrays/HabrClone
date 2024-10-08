import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User } from "entities/User";
import { userActions } from "entities/User";
export interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>("login/loginByUserName", async (loginData, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.post<User>("/login", loginData);
    if (!response.data) {
      return thunkAPI.rejectWithValue("No data in response");
    }

    thunkAPI.dispatch(userActions.login(response.data));

    return response.data;
  } catch (err: any) {
    const errorMessage = err.response?.data?.message || "Failed to login";
    return thunkAPI.rejectWithValue(errorMessage);
  }
});
