// @flow

import React, { Component } from 'react';
import { Text, View, Button, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { SimpleLineIcons } from '@expo/vector-icons';
import capitalize from 'lodash/capitalize';
import getSymbolFromCurrency from 'currency-symbol-map';
import { rgba } from 'polished';

// redux actions
import { removeService } from 'Actions/addService';

// UI components
import ServiceLogo from 'Components/ServiceLogo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  serviceWrapper: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  serviceTitle: {
    fontFamily: 'montserrat-medium',
    color: '#333',
    fontSize: 18,
    marginBottom: 20,
  },
  price: {
    fontFamily: 'montserrat-medium',
    color: '#333',
    fontSize: 52,
  },
  servicePriceContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '60%',
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 4,
    borderBottomColor: rgba('#979797', 0.3),
  },
  subscriptionType: {
    fontFamily: 'montserrat-light',
    fontSize: 16,
    color: rgba('#979797', 0.6),
  },
});

export class ServiceDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.serviceName,
    headerRight: (
      <TouchableHighlight onPress={() => navigation.navigate('Home')} underlayColor="transparent">
        <SimpleLineIcons name="options" size={20} />
      </TouchableHighlight>
    ),
  });

  removeItem = itemID => this.props.removeService(itemID);

  render() {
    const { serviceName, userServiceID } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        {this.props.serviceDetails && (
          <View style={styles.serviceWrapper}>
            <ServiceLogo style={{ marginBottom: 10 }} url={this.props.serviceData.logo} />

            <Text style={styles.serviceTitle}>{serviceName}</Text>

            <View style={styles.servicePriceContainer}>
              <Text style={styles.price}>
                {this.props.serviceDetails.price}
                {getSymbolFromCurrency(this.props.serviceDetails.currencyCode)}
              </Text>
            </View>
            <Text style={styles.subscriptionType}>
              {capitalize(this.props.serviceDetails.subscriptionType)}
            </Text>

            <Text>{this.props.serviceDetails.description || ''}</Text>
          </View>
        )}
        <Button onPress={() => this.removeItem(userServiceID)} title="❌ remove" />
      </View>
    );
  }
}

const mapStateToProps = ({ serviceList, userServices }, ownProps) => {
  const { userServiceID, serviceID } = ownProps.navigation.state.params;

  return {
    serviceDetails: userServices[userServiceID],
    serviceData: serviceList[serviceID],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeService: id => dispatch(removeService(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetail);
