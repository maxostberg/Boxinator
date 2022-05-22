import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./slices/testSlice";
import formReducer from "./slices/formSlice";

export const store = configureStore({
  reducer: {
    test: testReducer,
    forms: formReducer,
  },
});
