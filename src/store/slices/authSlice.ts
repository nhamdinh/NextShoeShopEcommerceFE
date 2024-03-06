import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IfAuthStore {
  isUserLogin?: boolean;
  userInfo?: any;
  accessToken?: any;
}

const initialState: IfAuthStore = {
  isUserLogin: false,
  userInfo: {},
  accessToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogout: (state: IfAuthStore, action: PayloadAction) => {
      localStorage.clear();
      state.isUserLogin = false;
      state.userInfo = {};
      state.accessToken = "";
      // localStorage.removeItem(STORAGE_USER);
      // localStorage.removeItem(KEY_LANGUAGE);
    },
    setAuthState: (state: IfAuthStore, action: PayloadAction<IfAuthStore>) => {
      state.isUserLogin =
        action.payload?.isUserLogin ?? initialState.isUserLogin;
    },
    setUserInfo: (state: IfAuthStore, action: PayloadAction<IfAuthStore>) => {
      state.userInfo = action.payload.userInfo ?? initialState.userInfo;
    },
  },
});

const { actions } = authSlice;
export const { setUserInfo, setAuthState, userLogout } = actions;
export const authReducer = authSlice.reducer;
