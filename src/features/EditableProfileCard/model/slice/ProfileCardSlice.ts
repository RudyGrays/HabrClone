import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileCardState } from "../types/ProfileCardSchema";
import { ProfileState } from "entities/Profile/model/slice/ProfileSlice";
import { Profile } from "entities/Profile";
import { updateProfileById } from "../services/updateProfileById";

const initialState: ProfileCardState = {
  editableProfile: ProfileState.profileData,
  error: undefined,
  isLoading: false,
};

export const ProfileCardSlice = createSlice({
  name: "profileCard",
  initialState,
  reducers: {
    updateProfile: (
      state: ProfileCardState,
      action: PayloadAction<Profile>,
    ) => {
      state.editableProfile = {
        ...state.editableProfile,
        ...action.payload,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(updateProfileById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
      })
      .addCase(updateProfileById.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(updateProfileById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: ProfileCardActions } = ProfileCardSlice;
export const { reducer: ProfileCardReducer } = ProfileCardSlice;
