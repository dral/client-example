import subSelectors from 'sub-selectors';
import fetchReducer, {selectors as fetchSelectors} from './fetchReducer';
import subordinateCombine from './subordinateCombine';

const reducer = (state = {}, action) => {
  switch (action.type) {
  case 'ITEM_SET_DATA':
    return { ...state, data: action.data };
  default:
    return state;
  }
};

export default subordinateCombine({
  main: reducer,
  fetch: fetchReducer("ITEM"),
});

export const selectors = {
  get: (state) => {
    return state.main.data;
  },
  ...subSelectors(fetchSelectors, 'fetch')
};
