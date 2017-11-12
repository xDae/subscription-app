// @flow

import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
} from 'react-native-dotenv';
import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
};

const firebaseConfig = firebase.initializeApp(config);

var firestore = firebase.firestore();
var auth = firebaseConfig.auth();

export { firestore, auth };
export default firebaseConfig;
