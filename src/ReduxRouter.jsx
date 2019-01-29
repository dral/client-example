import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import configureStore from './configureStore';

const history = createBrowserHistory();
const store = configureStore(history);

const ReduxRouter = ({ children }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      { children }
    </ConnectedRouter>
  </Provider>
);

export default ReduxRouter;
