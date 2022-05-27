import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import boxReducer from "./slices/boxSlice";

export const store = configureStore({
  reducer: {
    forms: formReducer,
    boxes: boxReducer,
  },
});
