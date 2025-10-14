const initialState = {
  list: [],
  filter: ""
};

export const namesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "names/add":
      return { ...state, list: [...state.list, action.payload] };
    case "names/remove":
      return { ...state, list: state.list.filter((_, i) => i !== action.payload) };
    case "names/setFilter":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
