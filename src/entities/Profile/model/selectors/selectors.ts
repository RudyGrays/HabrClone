import { StateSchema } from "app/providers/StoreProvider";
import { ProfileState } from "../slice/ProfileSlice";

export const getProfileCountry = (state: StateSchema) =>
  state?.profile?.profileData?.country || "";

export const getProfileError = (state: StateSchema) => state?.profile?.errors;

export const getProfileLastname = (state: StateSchema) =>
  state?.profile?.profileData?.lastname || "";

export const getProfileLoading = (state: StateSchema) =>
  state?.profile?.isLoading;

export const getProfileName = (state: StateSchema) =>
  state?.profile?.profileData?.name || "";

export const getProfileState = (state: StateSchema) =>
  state?.profile?.profileData || ProfileState?.profileData;

export const getProfileReadonly = (state: StateSchema) =>
  state?.profile?.readonly;

export const getNewProfile = (state: StateSchema) =>
  state?.profile?.newProfileData || ProfileState?.newProfileData;
