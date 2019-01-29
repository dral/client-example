import { combineReducers } from 'redux';

const subordinateCombine = ({main, ...subordinates}) => {
  let reducer = combineReducers({main, ...subordinates})
  return (state, action) => {
    let newState = reducer(state, action);
    if (newState.main === undefined)
      return undefined;
    else
      return newState;
  }
}

export default subordinateCombine;
