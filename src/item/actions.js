import fetcher from './fetcher';
import { getItem } from '../api';

export const itemSetData = (id, data) => ({
  type: 'ITEM_SET_DATA',
  data,
  id,
});

export const fetchItem = (id) => (dispatch, getState) => {
  fetcher(dispatch)("ITEM", getItem, id)
    .then(result => {
      dispatch(itemSetData(id, result))
    })
    .catch(error => {
      console.log('working offline', error.message)
    });
}
