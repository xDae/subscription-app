import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  serviceLogo: {
    width: 60,
    height: 60,
  },
});

const ServiceLogo = props => (
  <Image
    style={[styles.serviceLogo, props.style]}
    resizeMode="contain"
    source={{ uri: props.url }}
  />
);

export default ServiceLogo;
