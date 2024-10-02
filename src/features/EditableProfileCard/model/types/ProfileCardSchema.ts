import { Profile } from "entities/Profile";

export interface ProfileCardSchema {
  isLoading?: boolean;
  error?: string;
  editableProfile?: Profile;
}
