import { createSlice } from "@reduxjs/toolkit";
import { ProfileSchema } from "../types/ProfileSchema";
import { getProfileById } from "../services/getProfileById/getProfileById";

export const ProfileState: ProfileSchema = {
  isLoading: false,
  error: undefined,
  readonly: true,
  profileData: {
    age: "",
    country: "",
    lastname: "",
    name: "",
  },
};

export const ProfileSlice = createSlice({
  name: "profile",
  initialState: ProfileState,

  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProfileById.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getProfileById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getProfileById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
        const { age, country, lastname, name } = action.payload;
        state.isLoading = false;
        const data = {
          age,
          country,
          lastname,
          name,
        };
        state.profileData = data;
      });
  },
});

export const { reducer: profileReducer } = ProfileSlice;
export const { actions: profileActions } = ProfileSlice;
