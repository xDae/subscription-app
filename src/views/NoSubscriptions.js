import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import { firestore } from '../../firebase-config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

class NoSubscriptions extends Component {
  readData = () => {
    var docRef = firestore.collection('services').doc('TXLJfgDrJ90r6umDbrcc');

    docRef.get().then(doc => {
      console.log(doc.data());
      const category = doc.data().category;

      category.get().then(doc => console.log(doc.data().name));
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40, marginBottom: 10 }}>😞</Text>
        <Text
          style={{
            // fontFamily: 'montserrat-regular',
            fontSize: 18,
            marginBottom: 16,
          }}>
          No Subscriptions Yet!
        </Text>
        <Text
          style={{
            // fontFamily: 'montserrat-light',
            fontSize: 12,
            color: '#333333',
            opacity: 0.7,
            maxWidth: 300,
            textAlign: 'center',
            marginBottom: 30,
          }}>
          Oh no! This place looks empty! Create your First subscription and manage it with ease!
        </Text>
        <Text
          style={{
            fontSize: 40,
            textAlign: 'center',
          }}>
          👇🏻
        </Text>
      </View>
    );
  }
}

export default withNavigation(NoSubscriptions);
