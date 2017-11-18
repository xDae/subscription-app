// @flow

import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import { rgba } from 'polished';

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: rgba('#979797', 0.1),
    paddingHorizontal: 10,
    paddingVertical: 14,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 4,
  },
  text: {
    color: rgba('#666', 0.7),
    fontFamily: 'montserrat-light',
    fontSize: 12,
    textAlign: 'center',
  },
  logo: {
    width: 80,
    height: 30,
  },
});

const ServiceBox = ({ name, logo }) => (
  <View style={styles.container}>
    <Image
      style={styles.logo}
      resizeMode="contain"
      source={{
        uri: logo,
      }}
    />
    <Text numberOfLines={2} style={styles.text}>
      {name}
    </Text>
  </View>
);

export default ServiceBox;
