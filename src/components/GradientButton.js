// @flow

import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo';

const styles = StyleSheet.create({
  gradient: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    // width: '100%',
  },
  text: {
    fontFamily: 'montserrat-regular',
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    marginLeft: 6,
  },
});

const GradientButton = props => (
  <LinearGradient
    colors={['#ff6a00', '#ee0979']}
    start={{ x: 1, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={styles.gradient}>
    {props.icon}
    <Text style={styles.text}>{props.text}</Text>
  </LinearGradient>
);

export default GradientButton;
