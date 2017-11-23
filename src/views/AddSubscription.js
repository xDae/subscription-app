// @flow

import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableHighlight,
  StyleSheet,
  Picker,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { rgba } from 'polished';
import shortid from 'shortid';
import capitalize from 'lodash/capitalize';

import getSymbolFromCurrency from 'currency-symbol-map';

import { connect } from 'react-redux';

import { addService } from 'Actions/addService';

// UI Components
import GradientButton from 'Components/GradientButton';
import PickerModal from 'Components/PickerModal';
import CurrencyPicker from 'Components/CurrencyPicker';

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
  subscriptionType: {
    fontFamily: 'montserrat-light',
    fontSize: 12,
    color: rgba('#979797', 0.6),
  },
  servicePriceContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: 160,
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 4,
    borderBottomColor: rgba('#979797', 0.3),
  },
  inputLabel: {
    fontFamily: 'montserrat-light',
    color: rgba('#666', 0.6),
    fontSize: 12,
    marginBottom: 6,
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
    paddingVertical: 0,
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
    isModalOpen: false,
    modalType: null,
    name: null,
    price: 0,
    description: null,
    currencyCode: 'EUR',
    subscriptionType: 'monthly',
  };

  handleOpenModal = type =>
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      modalType: type,
    });

  handleCloseModal = () =>
    this.setState({
      isModalOpen: false,
      modalType: null,
    });

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
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={60}>
        <ScrollView
          keyboardDismissMode="on-drag"
          style={styles.container}
          ref={scrollViewRef => {
            this.scrollViewRef = scrollViewRef;
          }}>
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
            <Text style={styles.subscriptionType}>{capitalize(this.state.subscriptionType)}</Text>
          </View>

          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.inputStyle}
            defaultValue={serviceName}
            placeholder="Name"
            onChangeText={name => this.setState({ name })}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexGrow: 1, marginRight: 10 }}>
              <Text style={styles.inputLabel}>Price</Text>
              <TextInput
                style={styles.inputStyle}
                keyboardType="numeric"
                placeholder="Price"
                onChangeText={price => this.setState({ price })}
              />
            </View>

            <View>
              <Text style={styles.inputLabel}>Currency</Text>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => this.handleOpenModal('currency')}>
                <Text style={styles.inputStyle}>{this.state.currencyCode}</Text>
              </TouchableHighlight>
            </View>
          </View>

          <Text style={styles.inputLabel}>Subscription type</Text>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => this.handleOpenModal('subscriptionType')}>
            <Text style={styles.inputStyle}>{capitalize(this.state.subscriptionType)}</Text>
          </TouchableHighlight>

          <Text style={styles.inputLabel}>Description</Text>
          <TextInput
            style={styles.inputStyle}
            multiline
            onFocus={() => this.scrollViewRef.scrollToEnd()}
            placeholder="Description!"
            onChangeText={description => this.setState({ description })}
          />
        </ScrollView>

        <TouchableHighlight underlayColor="transparent" onPress={this.handleAddServiceButtonClick}>
          <View>
            <GradientButton text="Add Subscription" />
          </View>
        </TouchableHighlight>

        <PickerModal
          animationType="fade"
          transparent
          visible={this.state.isModalOpen}
          onRequestClose={this.handleCloseModal}
          onTransparencyClick={this.handleCloseModal}
          onCloseClick={this.handleCloseModal}>
          {this.state.modalType === 'currency' && (
            <CurrencyPicker
              selectedValue={this.state.currencyCode}
              onValueChange={currencyCode => this.setState({ currencyCode })}
            />
          )}
          {this.state.modalType === 'subscriptionType' && (
            <Picker
              itemStyle={{ height: 200, color: rgba('#000', 0.6) }}
              selectedValue={this.state.subscriptionType}
              onValueChange={subscriptionType => this.setState({ subscriptionType })}>
              <Picker.Item key="weekly" label="Weekly" value="weekly" />
              <Picker.Item key="monthly" label="Monthly" value="monthly" />
              <Picker.Item key="yearly" label="Yearly" value="yearly" />
            </Picker>
          )}
        </PickerModal>
      </KeyboardAvoidingView>
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
