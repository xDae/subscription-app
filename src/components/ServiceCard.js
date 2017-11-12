// @flow

import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import { rgba } from 'polished';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: rgba('#b2b2b2', 0.2),

    alignItems: 'center',

    paddingHorizontal: 10,
    paddingVertical: 10,
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

class ServiceCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
          source={{
            uri: this.props.logo,
          }}
        />
        <Text style={styles.serviceTitle}>{this.props.text}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{this.props.price}</Text>
          <Text style={styles.priceType}>{this.props.priceType}</Text>
        </View>
      </View>
    );
  }
}

export default ServiceCard;
