// store.js
import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Userslice";
import featuredProductsSlice from "./Featureslice";


export default configureStore({
  reducer: {
    user: userSlice.reducer, // Use .reducer to access the reducer
    featuredProducts: featuredProductsSlice.reducer,
  },
});