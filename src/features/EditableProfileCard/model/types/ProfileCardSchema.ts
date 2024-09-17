import { Profile } from "entities/Profile";

export interface ProfileCardState {
  isLoading?: boolean;
  error?: string;
  editableProfile?: Profile;
}
