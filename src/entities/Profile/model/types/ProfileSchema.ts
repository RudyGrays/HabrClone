export interface ProfileSchema {
  isLoading: boolean;
  errors?: ProfileErrors;
  profileData?: Profile;
  newProfileData?: Partial<Profile>;
  readonly: boolean;
}

export const enum ProfileErrorsEnum {
  INCORRECT_USERNAME = "ошибка в имени",
  INCORRECT_LASTNAME = "ошибка в фамилии",
  INCORRECT_PASSWORD = "ошибка в пароле",
  INCORRECT_AGE = "ошибка в возрасте",
  INCORRECT_COUNTRY = "ошибка в стране",
  SERVER_ERROR = "ошибка с сервера",
  NO_DATA = "ошибка нет данных",
}

export type ProfileErrorsType = ProfileErrors | ProfileErrorsEnum;

export type ProfileErrors = ProfileErrorsEnum[];

export interface Profile {
  name: string;
  lastname: string;
  age: string;
  country: string;
}
