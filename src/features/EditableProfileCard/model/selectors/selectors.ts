import { StateSchema } from "app/providers/StoreProvider";

export const getNewProfile = (state: StateSchema) =>
  state?.profileCard?.editableProfile;
