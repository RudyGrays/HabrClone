export interface ProfileSchema {
  isLoading: boolean;
  error?: string;
  profileData?: Profile;
  readonly: boolean;
}

export interface Profile {
  name: string;
  lastname: string;
  age: string;
  country: string;
}
