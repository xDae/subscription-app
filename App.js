// @flow

import React, { Component } from 'react';
import { AsyncStorage, Text } from 'react-native';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Font } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { compose, withHandlers, withProps, withState } from 'recompose';

import { firestore } from './firebase-config';

import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const finalReducer = persistReducer(persistConfig, AppReducer);

const store = createStore(
  finalReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ firestore })))
);
const persistor = persistStore(store);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'montserrat-light': require('./assets/fonts/Montserrat-Light.otf'),
      'montserrat-regular': require('./assets/fonts/Montserrat-Regular.otf'),
      'montserrat-medium': require('./assets/fonts/Montserrat-Medium.otf'),
      'montserrat-semibold': require('./assets/fonts/Montserrat-SemiBold.otf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Text>loading</Text>} persistor={persistor}>
          {this.state.fontLoaded && <AppWithNavigationState />}
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
