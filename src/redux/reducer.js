import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  filter: "",
};

const namesSlice = createSlice({
  name: "names",
  initialState,
  reducers: {
    addName(state, action) {
      state.list.push(action.payload);
    },
    removeName(state, action) {
      state.list = state.list.filter((_, i) => i !== action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addName, removeName, setFilter } = namesSlice.actions;
export default namesSlice.reducer;
