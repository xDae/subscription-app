// @flow

import { combineReducers } from 'redux';

import nav from './nav';
import auth from './auth';
import serviceList from './serviceList';

const AppReducer = combineReducers({
  nav,
  auth,
  serviceList,
});

export default AppReducer;
