import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectors } from '../reducer';
import * as actions from '../actions';

const Item = ({data}) => (
  <div>
    <h1>{"Item"}</h1>
    {data}
  </div>
);

export default withRouter(
  connect(
    (state, {id, match}) => ({
      data: selectors.item.get(state, id || match.params.id),
    }),
    actions
  )(Item)
);
