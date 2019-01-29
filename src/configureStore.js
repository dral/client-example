
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reducer from './reducer';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const configureStore = (history) => {
  const initialState = window.__INITIAL_STATE__ || {};

  const middlewares = [
    thunk,
    routerMiddleware(history), // sync react router state
  ];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  const enhancers = [
    applyMiddleware(...middlewares),
  ];
  const store = createStore(
    connectRouter(history)(reducer), // new root reducer with router state
    initialState,
    composeEnhancers(...enhancers)
  );

  return store;
};

export default configureStore;
