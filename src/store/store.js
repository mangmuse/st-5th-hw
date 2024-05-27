import { configureStore } from "@reduxjs/toolkit";
import textsSlice from "./textsSlice";

const store = configureStore({
  reducer: {
    texts: textsSlice,
  },
});

export default store;
