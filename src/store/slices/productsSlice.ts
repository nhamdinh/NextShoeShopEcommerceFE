import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IfProductsStore {
  dataProducts?: any;
  productsCart?: any;
  cart?: any;
}

const initialState: IfProductsStore = {
  dataProducts: [],
  productsCart: [],
  cart: {},
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    setStoProducts: (state: IfProductsStore, action: PayloadAction<IfProductsStore>) => {
      state.dataProducts = action.payload?.dataProducts ?? initialState.dataProducts;
    },
    setStoCart: (state: IfProductsStore, action: PayloadAction<IfProductsStore>) => {
      state.cart = action.payload?.cart ?? initialState.cart;
    },
    setStProductsCart: (
      state: IfProductsStore,
      action: PayloadAction<IfProductsStore>
    ) => {
      state.productsCart = action.payload?.productsCart ?? initialState.productsCart;
    },
  },
});

const { reducer, actions } = productsSlice;
export const { setStoProducts, setStoCart, setStProductsCart } = actions;
export default reducer;

export const productReducer = productsSlice.reducer;
