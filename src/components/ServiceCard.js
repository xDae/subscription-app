// @flow

import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import { rgba } from 'polished';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: rgba('#b2b2b2', 0.2),
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  priceContainer: {
    marginLeft: 'auto',
    alignContent: 'flex-end',
    alignItems: 'center',
  },
  serviceTitle: {
    fontFamily: 'montserrat-medium',
    fontSize: 14,
    color: rgba('#000', 0.6),
  },
  price: {
    fontFamily: 'montserrat-medium',
    fontSize: 14,
    color: rgba('#000', 0.6),
    marginBottom: 4,
  },
  priceType: {
    fontFamily: 'montserrat-light',
    fontSize: 10,
    color: rgba('#000', 0.4),
  },
});

const ServiceCard = ({ logoUrl, text, price, priceType }) => (
  <View style={styles.container}>
    <Image
      style={styles.logo}
      resizeMode="contain"
      source={{
        uri: logoUrl,
      }}
    />
    <Text style={styles.serviceTitle}>{text}</Text>
    <View style={styles.priceContainer}>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.priceType}>{priceType}</Text>
    </View>
  </View>
);

export default ServiceCard;
