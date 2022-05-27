import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const formSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    startEditingForm: (state, action) => {
      state[action.payload.formId] = action.payload.data;
    },

    formFieldChange: (state, action) => {
      state[action.payload.formId][action.payload.field] = action.payload.value;
    },

    resetFormState: () => initialState,
  },
});

export const { startEditingForm, formFieldChange, resetFormState } =
  formSlice.actions;

export default formSlice.reducer;
