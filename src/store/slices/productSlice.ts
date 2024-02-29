import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
    setStoreProducts: (state : IProductState, action: PayloadAction<IProductState>) => {
      state.storeProducts = action.payload?.storeProducts ?? initialState.storeProducts;
    },
  },
});
const { reducer, actions } = authSlice;
export const { setStoreProducts } = actions;
export default reducer;
