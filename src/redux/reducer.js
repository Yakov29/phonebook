import { createReducer, createSlice } from "@reduxjs/toolkit";
// import { addName, removeName, setFilter } from "./actions";

const initialState = {
  list: [],
  filter: "",
};

// обычный

// export const namesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "names/add":
//       return { ...state, list: [...state.list, action.payload] };
//     case "names/remove":
//       return { ...state, list: state.list.filter((_, i) => i !== action.payload) };
//     case "names/setFilter":
//       return { ...state, filter: action.payload };
//     default:
//       return state;
//   }
// };

// билдер

// export const namesReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(addName, (state, action) => {
//       return { ...state, list: [...state.list, action.payload] };
//     })
//     .addCase(removeName, (state, action) => {
//       return {
//         ...state,
//         list: state.list.filter((_, i) => i !== action.payload),
//       };
//     })
//     .addCase(setFilter, (state, action) => {
//       return { ...state, filter: action.payload };
//     });
// });

// слайс

const namesSlice = createSlice({
  name: "names",
  initialState,
  reducers: {
    addName(state, action) {
      return { ...state, list: [...state.list, action.payload] };
    },
    removeName(state, action) {
      return {
        ...state,
        list: state.list.filter((_, i) => i !== action.payload),
      };
    },
    setFilter(state, action) {
      return { ...state, filter: action.payload };
    },
  },
});

export const { addName, removeName, setFilter } = namesSlice.actions;
export default namesSlice.reducer