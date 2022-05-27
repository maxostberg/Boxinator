import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boxes: null,
  errorMessage: [],
  totalWeight: null,
  totalCost: null,
};

export const boxSlice = createSlice({
  name: "box",
  initialState,
  reducers: {
    saveBoxes: (state, action) => {
      state.boxes = action.payload;
    },

    addErrorMessage: (state, action) => {
      state.errorMessage.push(action.payload);
    },

    saveTotalWeight: (state, action) => {
      state.totalWeight = action.payload;
    },

    saveTotalCost: (state, action) => {
      state.totalCost = action.payload;
    },
  },
});

export const { saveBoxes, addErrorMessage, saveTotalWeight, saveTotalCost } =
  boxSlice.actions;

export default boxSlice.reducer;
