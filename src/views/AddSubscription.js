// @flow

import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Picker,
  Button,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo';
import { NavigationActions } from 'react-navigation';
// import { SimpleLineIcons } from '@expo/vector-icons';
import { rgba } from 'polished';
import shortid from 'shortid';

import cc from 'currency-codes';
import getSymbolFromCurrency from 'currency-symbol-map';

import { connect } from 'react-redux';

import { addService } from '../actions/addService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  serviceHeaderContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  serviceLogo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  serviceTitle: {
    color: '#666',
    fontFamily: 'montserrat-medium',
    fontSize: 24,
    marginBottom: 16,
  },
  servicePrice: {
    color: rgba('#666', 0.5),
    fontFamily: 'montserrat-light',
    fontSize: 24,
  },
  servicePriceContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: 160,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: rgba('#979797', 0.3),
  },
  inputStyle: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: rgba('#979797', 0.2),
    borderRadius: 2,
    fontFamily: 'montserrat-regular',
    fontSize: 14,
    marginBottom: 16,
    color: rgba('#000', 0.6),
  },
  currencyPickerInput: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: rgba('#979797', 0.2),
    borderRadius: 2,
    marginBottom: 16,
  },
});

export class AddSubscription extends Component {
  static navigationOptions = ({ navigation }) => ({
    // title: navigation.state.params.serviceName,
    headerStyle: {
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: rgba('#B2B2B2', 0.2),
      paddingRight: 16,
    },
    // headerRight: <SimpleLineIcons name="equalizer" size={20} />,
  });

  state = {
    name: null,
    price: 0,
    description: null,
    currencyCode: 'EUR',
  };

  handleAddServiceButtonClick = () => {
    const serviceData = {
      ...this.state,
      serviceName: this.props.navigation.state.params.serviceName,
    };

    const id = shortid.generate();
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });

    this.props.addService(id, serviceData);
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    const { serviceName } = this.props.navigation.state.params;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <View style={styles.serviceHeaderContainer}>
            <Image
              style={styles.serviceLogo}
              resizeMode="contain"
              source={{
                uri:
                  'https://cdn.dribbble.com/assets/dribbble-ball-1000-187399483de9611d2499b0cf6e49be99ed5d1e920c5790e9d930d134bae0c62e.png',
              }}
            />
            <Text style={styles.serviceTitle}>{this.state.name || serviceName}</Text>
            <View style={styles.servicePriceContainer}>
              <Text style={styles.servicePrice}>
                {this.state.price || '0.00'}
                {getSymbolFromCurrency(this.state.currencyCode)}
              </Text>
            </View>
          </View>

          <TextInput
            style={styles.inputStyle}
            defaultValue={serviceName}
            placeholder="Name"
            onChangeText={name => this.setState({ name })}
          />

          <TextInput
            style={styles.inputStyle}
            keyboardType="numeric"
            placeholder="Price!"
            onChangeText={price => this.setState({ price })}
          />

          <View style={styles.currencyPickerInput}>
            <Picker
              selectedValue={this.state.currencyCode}
              onValueChange={currencyCode => this.setState({ currencyCode })}
              itemStyle={{ height: 100 }}>
              {cc
                .codes()
                .map(currencyCode => (
                  <Picker.Item
                    key={currencyCode}
                    label={cc.code(currencyCode).currency}
                    value={currencyCode}
                  />
                ))}
            </Picker>
          </View>

          <TextInput
            style={styles.inputStyle}
            multiline
            placeholder="Description!"
            onChangeText={description => this.setState({ description })}
          />

          <Button onPress={() => console.log(this.state)} title="state" color="#841584" />
          <Button onPress={() => console.log(this.props)} title="props" color="#841584" />
        </ScrollView>

        <TouchableHighlight underlayColor="transparent" onPress={this.handleAddServiceButtonClick}>
          <View>
            <LinearGradient
              colors={['#ff6a00', '#ee0979']}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{
                padding: 15,
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                borderRadius: 2,
                width: '100%',
              }}>
              <Text
                style={{
                  fontFamily: 'montserrat-regular',
                  backgroundColor: 'transparent',
                  fontSize: 15,
                  color: '#fff',
                  textAlign: 'center',
                  marginLeft: 6,
                }}>
                Add Subscription
              </Text>
            </LinearGradient>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    addService: (id, service) => {
      dispatch(addService(id, service));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSubscription);
