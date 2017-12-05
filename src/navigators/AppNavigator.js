// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Home from 'Views/Home';
import Settings from 'Views/Settings';
import ServiceList from 'Views/ServiceList';
import AddSubscription from 'Views/AddSubscription';
import EditSubscription from 'Views/EditSubscription';
import ServiceDetail from 'Views/ServiceDetail';

import headerStyle from 'Styles/headerStyle';

const navigationOptions = {
  headerTintColor: '#666',
  headerBackTitle: null,
  headerStyle,
};

export const AppNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'My Subscriptions',
      ...navigationOptions,
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
      headerStyle,
    },
  },
  ServiceList: {
    screen: ServiceList,
    navigationOptions: {
      title: 'Add new subscription',
      ...navigationOptions,
    },
  },
  AddSubscription: {
    screen: AddSubscription,
    navigationOptions,
  },
  EditSubscription: {
    screen: EditSubscription,
    navigationOptions,
  },
  ServiceDetail: {
    screen: ServiceDetail,
    navigationOptions,
  },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
