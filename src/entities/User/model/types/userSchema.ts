export interface UserSchema {
  authData?: User;
  authorized: boolean;
}

export interface User {
  id: string | null;
  username: string;
}
