// @flow

import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableHighlight,
  StyleSheet,
  Picker,
  Platform,
  Alert,
  Button,
} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
// import { compose } from 'redux';
import { connect } from 'react-redux';
// import { withFormik } from 'formik';
import { rgba } from 'polished';
import capitalize from 'lodash/capitalize';
import getSymbolFromCurrency from 'currency-symbol-map';

// Redux actions
import { editSubscription, removeSubscription } from 'actions/subscriptions';

// UI Components
import GradientButton from 'Components/GradientButton';
import PickerModal from 'Components/PickerModal';
import CurrencyPicker from 'Components/CurrencyPicker';
import ServiceLogo from 'Components/ServiceLogo';
// import Input from 'Components/Input';

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
  fakeInput: {
    height: Platform.OS === 'ios' ? null : 50,
    paddingVertical: Platform.OS === 'ios' ? 16 : null,
    justifyContent: 'center',
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: rgba('#979797', 0.2),
    borderRadius: 2,
    marginBottom: 16,
  },
  fakeInputText: {
    fontFamily: 'montserrat-regular',
    fontSize: 14,
    color: rgba('#000', 0.6),
  },
  inputStyle: {
    height: Platform.OS === 'ios' ? null : 50,
    paddingTop: Platform.OS === 'ios' ? 16 : null,
    paddingBottom: Platform.OS === 'ios' ? 16 : null,
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

export class EditSubscription extends Component {
  static navigationOptions = ({ navigation }) => ({
    // title: `Adding ${navigation.state.params.serviceName}`,
    // headerStyle: {
    //   backgroundColor: '#fff',
    //   borderBottomWidth: 1,
    //   borderBottomColor: rgba('#B2B2B2', 0.2),
    //   paddingRight: 16,
    // },
    headerRight: <SimpleLineIcons name="trash" color="red" size={22} />,
  });

  removeItem = itemID => {
    console.log(itemID);
    return this.props.removeService(itemID);
  };

  alert = () => {
    Alert.alert(
      'Delete subscription',
      `Are you sure you want to delete ${this.props.subscriptionData.name ||
        this.props.serviceData.name} subscription?`,
      [
        { text: 'Yes, do it!', onPress: () => this.removeItem(this.props.subscriptionData.id) },
        { text: 'Ops, not!', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  state = {
    isModalOpen: false,
    modalType: null,
    formData: {
      name: this.props.subscriptionData.name,
      price: this.props.subscriptionData.price,
      description: this.props.subscriptionData.description,
      currencyCode: this.props.subscriptionData.currencyCode,
      subscriptionType: this.props.subscriptionData.subscriptionType,
    },
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
    const form = { ...this.state.formData };
    const id = this.props.subscriptionData.id;

    this.props.editService(id, form);
    this.props.navigation.goBack();
  };

  render() {
    const { name, logo } = this.props.serviceData;

    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={60}>
        <ScrollView
          keyboardDismissMode="on-drag"
          style={styles.container}
          ref={scrollViewRef => {
            this.scrollViewRef = scrollViewRef;
          }}>
          <View style={styles.serviceHeaderContainer}>
            <ServiceLogo style={{ marginBottom: 10 }} url={logo} />
            <Text style={styles.serviceTitle}>{this.state.formData.name || name}</Text>
            <View style={styles.servicePriceContainer}>
              <Text style={styles.servicePrice}>
                {this.state.formData.price || '0.00'}
                {getSymbolFromCurrency(this.state.formData.currencyCode)}
              </Text>
            </View>
            <Text style={styles.subscriptionType}>
              {capitalize(this.state.formData.subscriptionType)}
            </Text>
          </View>

          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.inputStyle}
            defaultValue={this.state.formData.name || name}
            value={this.state.formData.name}
            placeholder="Name"
            returnKeyType="done"
            underlineColorAndroid="transparent"
            onChangeText={name =>
              this.setState({
                ...this.state,
                formData: {
                  ...this.state.formData,
                  name,
                },
              })
            }
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexGrow: 1, marginRight: 10 }}>
              <Text style={styles.inputLabel}>Price</Text>
              <TextInput
                style={styles.inputStyle}
                value={this.state.formData.price}
                keyboardType="numeric"
                placeholder="Price"
                returnKeyType="done"
                onChangeText={price =>
                  this.setState({
                    ...this.state,
                    formData: {
                      ...this.state.formData,
                      price,
                    },
                  })
                }
              />
            </View>

            <View>
              <Text style={styles.inputLabel}>Currency</Text>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => this.handleOpenModal('currency')}>
                <View style={styles.fakeInput}>
                  <Text style={styles.fakeInputText}>{this.state.formData.currencyCode}</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>

          <Text style={styles.inputLabel}>Subscription type</Text>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => this.handleOpenModal('subscriptionType')}>
            <View style={styles.fakeInput}>
              <Text style={styles.fakeInputText}>
                {capitalize(this.state.formData.subscriptionType)}
              </Text>
            </View>
          </TouchableHighlight>

          <Text style={styles.inputLabel}>Description</Text>
          <TextInput
            style={styles.inputStyle}
            multiline
            onFocus={() => this.scrollViewRef.scrollToEnd()}
            placeholder="Description"
            underlineColorAndroid="transparent"
            onChangeText={description =>
              this.setState({
                ...this.state,
                formData: {
                  ...this.state.formData,
                  description,
                },
              })
            }
          />
        </ScrollView>

        <Button onPress={this.alert} title="❌ remove" />

        <TouchableHighlight underlayColor="transparent" onPress={this.handleAddServiceButtonClick}>
          <View>
            <GradientButton text="Edit Subscription" />
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
              selectedValue={this.state.formData.currencyCode}
              onValueChange={currencyCode =>
                this.setState({
                  ...this.state,
                  formData: {
                    ...this.state.formData,
                    currencyCode,
                  },
                })
              }
            />
          )}
          {this.state.modalType === 'subscriptionType' && (
            <Picker
              itemStyle={{ height: 200, color: rgba('#000', 0.6) }}
              selectedValue={this.state.formData.subscriptionType}
              onValueChange={subscriptionType =>
                this.setState({
                  ...this.state,
                  formData: {
                    ...this.state.formData,
                    subscriptionType,
                  },
                })
              }>
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

const mapStateToProps = ({ services, subscriptions }, ownProps) => {
  const { subscriptionID, serviceID } = ownProps.navigation.state.params;

  return {
    serviceData: services[serviceID],
    subscriptionData: { id: subscriptionID, ...subscriptions[subscriptionID] },
  };
};

const mapDispatchToProps = dispatch => ({
  editService: (id, serviceData) => dispatch(editSubscription(id, serviceData)),
  removeService: id => dispatch(removeSubscription(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSubscription);
