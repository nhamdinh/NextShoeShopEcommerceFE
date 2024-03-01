import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

export interface IProductState {
  storeProducts: Array<any>;
}

const initialState: IProductState = {
  storeProducts: [],
};

export const authSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setStoreProducts: (
      state: IProductState,
      action: PayloadAction<IProductState>
    ) => {
      state.storeProducts =
        action.payload?.storeProducts ?? initialState.storeProducts;
    },
  },
});
const { actions } = authSlice;
export const { setStoreProducts } = actions;
export const productReducer = authSlice.reducer;
