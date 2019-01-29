const reducer = (state = {}, action) => {
  switch (action.type) {
  case 'ITEM_SET_DATA':
    return { ...state, data: action.data };
  default:
    return state;
  }
};

export const selectors = {
  get: (state) => {
    return state.data;
  },
};

export default reducer;
