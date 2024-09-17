import { StateSchema } from "app/providers/StoreProvider";
import { ProfileState } from "../slice/ProfileSlice";

export const getProfileCountry = (state: StateSchema) =>
  state?.profile?.profileData?.country || "";

export const getProfileError = (state: StateSchema) => state?.profile?.error;

export const getProfileLastname = (state: StateSchema) =>
  state?.profile?.profileData?.lastname || "";

export const getProfileLoading = (state: StateSchema) =>
  state?.profile?.isLoading || false;

export const getProfileName = (state: StateSchema) =>
  state?.profile?.profileData?.name || "";

export const getProfileState = (state: StateSchema) =>
  state?.profile?.profileData || ProfileState?.profileData;
