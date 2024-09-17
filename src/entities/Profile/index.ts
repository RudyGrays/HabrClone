export { ProfileSchema, Profile } from "./model/types/ProfileSchema";

export {
  ProfileSlice,
  profileReducer,
  profileActions,
} from "./model/slice/ProfileSlice";

export { getProfileById } from "./model/services/getProfileById/getProfileById";

export {
  getProfileCountry,
  getProfileError,
  getProfileLastname,
  getProfileLoading,
  getProfileName,
  getProfileState,
} from "./model/selectors/selectors";
