// @flow

import { combineReducers } from 'redux';

import nav from './nav';
import auth from './auth';
import serviceList from './serviceList';
import userServices from './userServices';

const AppReducer = combineReducers({
  nav,
  auth,
  serviceList,
  userServices,
});

export default AppReducer;
