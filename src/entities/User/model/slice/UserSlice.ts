import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserSchema } from "../types/userSchema";
import { USER_LOCALSTORAGE_KEY } from "shared/constants/constants";
const initialState: UserSchema = {
  authData: {
    id: "",
    username: "",
  },
  authorized: false,
  _init: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      console.log("dispatched");
      state.authData.id = action.payload.id;
      state.authData.username = action.payload.username;
      state.authorized = true;
      const user = {
        id: action.payload.id,
        username: action.payload.username,
      };
      state._init = true;
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
    },
    logout: (state, action: PayloadAction<User>) => {
      state.authorized = false;
      state.authData = {
        id: "",
        username: "",
      };
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
    updateUser: state => {
      const user: User = JSON.parse(
        localStorage.getItem(USER_LOCALSTORAGE_KEY),
      );

      if (user) {
        state.authData.id = user.id;
        state.authData.username = user.username;
        state.authorized = true;
      }
      state._init = true;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
