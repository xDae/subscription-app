import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import { rgba } from 'polished';

// Views
import App from './views/App';
import AddSubscription from './views/AddSubscription';
import ServiceList from './views/ServiceList';
import Settings from './views/Settings';

const routes = {
  Home: {
    screen: App,
    navigationOptions: {
      headerTitle: 'My Subscriptions',
      headerRight: <SimpleLineIcons name="settings" size={20} />,
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: rgba('#B2B2B2', 0.2),
        paddingRight: 16,
      },
    },
  },
  ServiceList: {
    screen: ServiceList,
    navigationOptions: {
      title: 'Add new subscription',
      headerRight: <SimpleLineIcons name="equalizer" size={20} />,
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: rgba('#B2B2B2', 0.2),
        paddingRight: 16,
      },
      headerBackTitleStyle: {
        color: '#666666',
      },
      headerTintColor: '#666666',
    },
  },
  AddSubscription: {
    screen: AddSubscription,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: rgba('#B2B2B2', 0.2),
      },
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: rgba('#B2B2B2', 0.2),
      },
    },
  },
};

export default routes;
