import { createSlice } from "@reduxjs/toolkit";

const initialState = () =>
  localStorage.getItem("texts")
    ? JSON.parse(localStorage.getItem("texts"))
    : [];

const textsSlice = createSlice({
  name: "texts",
  initialState,
  reducers: {
    addText: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addText } = textsSlice.actions;
export default textsSlice.reducer;
