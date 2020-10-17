import { combineReducers } from 'redux';

import WeatheReducer from './weatherReducer';

const rootReducer = combineReducers({
  weather: WeatheReducer,
});

export default rootReducer;
