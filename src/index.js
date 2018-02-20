import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './store';
import fetchData from './utils/fetchData';
import registerServiceWorker from './registerServiceWorker';

import { REQ_TYPE } from './actiontypes'
import App from './app/App.jsx';
import './index.css';

const initialState = window.__INITIAL_STATE__;

render(
  <Provider store={store}>
    <ConnectedRouter history={history} onUpdate={onUpdate}>
      <Route component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

function onUpdate() {
  if (window.__INITIAL_STATE__ !== null) {
    window.__INITIAL_STATE__ = null;
    return;
  }

  store.dispatch({ type: REQ_TYPE.CREATE_REQUEST });
    fetchData(this.state).then(data => {
    return store.dispatch({ type: REQ_TYPE.REQUEST_SUCCESS, data });
  });
}
