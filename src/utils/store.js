import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import browserHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

import rootReducer from './../reducers/index';

export const history = browserHistory();
const enhancers = [];

const middleware = [
  thunk,
  routerMiddleware(history)
];


const composeEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export default createStore(rootReducer, composeEnhancers);
