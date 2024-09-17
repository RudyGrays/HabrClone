import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginSchema } from "features/AuthByUsername";
import { loginByUserName } from "features/AuthByUsername";

const initialState: LoginSchema = {
  isLoading: false,
  password: "",
  username: "",
  error: "",
};

export const loginFormSlice = createSlice({
  name: "loginForm",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginByUserName.fulfilled, (state, action) => {
        state.error = "";
        state.isLoading = false;
      })
      .addCase(loginByUserName.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(loginByUserName.pending, (state, action) => {
        state.isLoading = true;
        state.error = "";
      });
  },
});

export const { actions: loginFormActions } = loginFormSlice;
export const { reducer: loginFormReducer } = loginFormSlice;
