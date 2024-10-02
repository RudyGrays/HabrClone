import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileErrors, ProfileSchema } from "../types/ProfileSchema";
import { getProfileById } from "../services/getProfileById/getProfileById";
import { updateProfileById } from "../services/updateProfileById/updateProfileById";

export const ProfileState: ProfileSchema = {
  isLoading: false,
  errors: undefined,
  readonly: true,
  newProfileData: {
    age: "",
    country: "",
    lastname: "",
    name: "",
  },
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

  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    setNewProfile: (state, action: PayloadAction<Partial<Profile>>) => {
      const profileData = {
        ...state.newProfileData,
        ...action.payload,
      };

      state.newProfileData = profileData;
    },
    setInitialNewProfile: state => {
      state.newProfileData = state.profileData;
      state.errors = undefined;
    },
  },
  extraReducers: builder => {
    builder
      //GetProfile
      .addCase(getProfileById.pending, state => {
        state.isLoading = true;
        state.errors = undefined;
      })
      .addCase(
        getProfileById.rejected,
        (state, action: PayloadAction<ProfileErrors>) => {
          state.isLoading = false;
          state.errors = action.payload;
        },
      )
      .addCase(getProfileById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errors = undefined;
        const { age, country, lastname, name } = action.payload;

        const data = {
          age,
          country,
          lastname,
          name,
        };
        state.profileData = data;
        state.newProfileData = data;
      })

      //UpdateProfile
      .addCase(updateProfileById.pending, (state, action) => {
        state.isLoading = true;
        state.errors = undefined;
      })
      .addCase(
        updateProfileById.rejected,
        (state, action: PayloadAction<ProfileErrors>) => {
          state.isLoading = false;
          state.errors = action.payload;
        },
      )
      .addCase(updateProfileById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errors = undefined;
        const { age, country, lastname, name } = action.payload;
        const data = {
          age,
          country,
          lastname,
          name,
        };
        state.profileData = data;
        state.readonly = true;
      });
  },
});

export const { reducer: profileReducer } = ProfileSlice;
export const { actions: profileActions } = ProfileSlice;
