import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IUserState {
  isLogin: boolean;
}

const initialState: IUserState = {
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout: (state: IUserState, action: PayloadAction) => {
      localStorage.clear();
      // localStorage.removeItem(STORAGE_USER);
      // localStorage.removeItem(KEY_LANGUAGE);
    },
    setUserState: (state: IUserState, action: PayloadAction<IUserState>) => {
      state.isLogin = action.payload?.isLogin ?? initialState.isLogin;
    },
  },
});
const { reducer, actions } = userSlice;
export const { setUserState , userLogout } = actions;
export default reducer;
