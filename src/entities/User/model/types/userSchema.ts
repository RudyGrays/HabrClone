export interface UserSchema {
  authData?: User;
  authorized: boolean;
  _init?: boolean;
}

export interface User {
  id: string | null;
  username: string;
}
