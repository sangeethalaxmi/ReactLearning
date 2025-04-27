import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
// creates a store and this store will have a big reducer which reeduces all the slices
// add slice to store
const appStore = configureStore({
  reducer: {
    cart: cartReducer, // Ensure cartReducer is the reducer function
  },
});

export default appStore;
