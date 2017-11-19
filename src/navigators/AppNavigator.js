// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Home from '../views/Home';
import Settings from '../views/Settings';
import ServiceList from '../views/ServiceList';
import AddSubscription from '../views/AddSubscription';
import ServiceDetail from '../views/ServiceDetail';

import headerStyle from '../styles/headerStyle';

export const AppNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'My Subscriptions',
      headerTintColor: '#666',
      headerStyle,
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      headerTitle: 'Settings',
      headerStyle,
    },
  },
  ServiceList: {
    screen: ServiceList,
    navigationOptions: {
      title: 'Add new subscription',
      // headerRight: <SimpleLineIcons name="equalizer" size={20} />,
      // headerBackTitle: null,
      headerTintColor: '#666',
      headerStyle,
      // headerBackTitleStyle: {
      //   color: '#666',
      // },
    },
  },
  AddSubscription: {
    screen: AddSubscription,

    navigationOptions: {
      headerTintColor: '#666',
      headerStyle,
    },
  },
  ServiceDetail: {
    screen: ServiceDetail,
    navigationOptions: {
      headerStyle,
    },
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
