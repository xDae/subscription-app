// @flow

import { combineReducers } from 'redux';

import nav from './nav';
import auth from './auth';
import subscriptions from './subscriptions';
import services from './services';

const AppReducer = combineReducers({
  nav,
  auth,
  services,
  subscriptions,
});

export default AppReducer;
