import React from 'react';
import { Route } from 'react-router-dom';

import ReduxRouter from './ReduxRouter';

import Item from './components/Item';

const App = () => (
  <ReduxRouter>
    <div>
      <Item id="abc"/>
      <Route path="/item/:id" component={Item} />
    </div>
  </ReduxRouter>
);

export default App;
