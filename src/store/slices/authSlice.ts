import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  isUserLogin: boolean;
}

const initialState: IAuthState = {
  isUserLogin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogout: (state: IAuthState, action: PayloadAction) => {
      localStorage.clear();
      // localStorage.removeItem(STORAGE_USER);
      // localStorage.removeItem(KEY_LANGUAGE);
    },
    setAuthState: (state: IAuthState, action: PayloadAction<IAuthState>) => {
      state.isUserLogin =
        action.payload?.isUserLogin ?? initialState.isUserLogin;
    },
  },
});

const { actions } = authSlice;
export const { setAuthState, userLogout } = actions;
export const authReducer = authSlice.reducer;
