import { createSlice } from "@reduxjs/toolkit";
import { ProfileCardSchema } from "../types/ProfileCardSchema";
import { ProfileState } from "entities/Profile/model/slice/ProfileSlice";

const initialState: ProfileCardSchema = {
  editableProfile: ProfileState.profileData,
  error: undefined,
  isLoading: false,
};

export const ProfileCardSlice = createSlice({
  name: "profileCard",
  initialState,
  reducers: {},
});

export const { actions: ProfileCardActions } = ProfileCardSlice;
export const { reducer: ProfileCardReducer } = ProfileCardSlice;
