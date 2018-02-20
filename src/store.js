import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;

// import { createStore, applyMiddleware, compose } from 'redux';
// import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
// import { Router, browserHistory } from 'react-router';
// import { createLogger } from 'redux-logger';
// import thunk from 'redux-thunk';
// import createHistory from 'history/createBrowserHistory';
// import rootReducer from './reducers';
// import initRoutes from './routes';

// export const history = createHistory();

// const initialState = {};
// const enhancers = [];
// const middleware = [thunk, routerMiddleware(history)];

// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.devToolsExtension;
//   middleware.push(createLogger());
//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension());
//   }
// }

// const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
// const store = createStore(rootReducer, initialState, composedEnhancers);
// const history = syncHistoryWithStore(browserHistory, store);
// const routes = initRoutes(store);

// export default store;
