import item, {selectors as itemSelecors} from './item';
import collectionReducer, { itemSelectors, prefixFilter } from 'collection-reducer';

export default collectionReducer(
  item,
  prefixFilter('ITEM')
);

export const selectors = itemSelectors(itemSelecors);
