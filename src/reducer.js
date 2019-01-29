import { combineReducers } from 'redux';
import subSelectors from 'sub-selectors';

import item, {selectors as itemSelectors} from './item/reducer';

export default combineReducers({
  item,
});

export const selectors = {
  item: subSelectors(itemSelectors, 'item'),
};
