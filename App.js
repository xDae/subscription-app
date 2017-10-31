// @flow

import React from 'react';
import { AsyncStorage, Text } from 'react-native';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
// import storage from 'redux-persist/es/storage';
// import { Facebook, Font } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { firestore } from './firebase-config';

import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const finalReducer = persistReducer(persistConfig, AppReducer);

// function configureStore() {
  let store = createStore(
    finalReducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ firestore })))
  );
  let persistor = persistStore(store);

//   return { store, persistor };
// }

// const { persistor, store } = configureStore();
// const store = createStore(
//   AppReducer,
//   composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ firestore })), autoRehydrate())
// );

// class App extends React.Component {
//   state = {
//     fontLoaded: false,
//   };

//   async componentDidMount() {
//     await Font.loadAsync({
//       'montserrat-light': require('./assets/fonts/Montserrat-Light.otf'),
//       'montserrat-regular': require('./assets/fonts/Montserrat-Regular.otf'),
//       'montserrat-medium': require('./assets/fonts/Montserrat-Medium.otf'),
//       'montserrat-semibold': require('./assets/fonts/Montserrat-SemiBold.otf'),
//     });

//     // firebase.auth().onAuthStateChanged(user => {
//     //   if (user != null) {
//     //     console.log('We are authenticated now!', user);
//     //     this.setState({ user });
//     //   }
//     // });

//     this.setState({ fontLoaded: true });
//   }

//   // async loginWithFacebook() {
//   //   const { type, token } = await Facebook.logInWithReadPermissionsAsync('124213921621220', {
//   //     permissions: ['public_profile'],
//   //   });

//   //   if (type === 'success') {
//   //     // Build Firebase credential with the Facebook access token.
//   //     const credential = firebase.auth.FacebookAuthProvider.credential(token);

//   //     // Sign in with credential from the Facebook user.
//   //     firebase
//   //       .auth()
//   //       .signInWithCredential(credential)
//   //       .catch(error => {
//   //         // Handle Errors here.
//   //         console.log(error);
//   //       });
//   //   }
//   // }

//   // render() {
//   //   return (
//   //     <Provider store={store}>
//   //       <AppWithNavigationState />
//   //     </Provider>
//   //   );
//   // }
// }

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Text>span>loading</Text>} persistor={persistor}>
      <AppWithNavigationState />
    </PersistGate>
  </Provider>
);

export default App;
