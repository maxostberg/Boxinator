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
  },
});

export const { startEditingForm, formFieldChange } = formSlice.actions;

export default formSlice.reducer;
