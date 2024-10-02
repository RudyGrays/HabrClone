import {
  Profile,
  ProfileErrors,
  ProfileErrorsEnum,
} from "../../types/ProfileSchema";

export const validateProfileData = (profileData: Partial<Profile>) => {
  const { age, country, lastname, name } = profileData;
  const errors: ProfileErrors = [];

  if (age && age == "0" && typeof age !== "string") {
    errors.push(ProfileErrorsEnum.INCORRECT_AGE);
  }
  if (country && country.length < 4) {
    errors.push(ProfileErrorsEnum.INCORRECT_COUNTRY);
  }
  if (lastname && lastname.length < 4) {
    errors.push(ProfileErrorsEnum.INCORRECT_LASTNAME);
  }
  if (name && name.length < 4) {
    errors.push(ProfileErrorsEnum.INCORRECT_USERNAME);
  }

  return errors;
};
