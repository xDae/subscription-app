// @flow

import React, { Component } from 'react';
import { Text, View, Button, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { SimpleLineIcons } from '@expo/vector-icons';

// redux actions
import { removeService } from '../actions/addService';

export class ServiceDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.serviceID,
    headerRight: (
      <TouchableHighlight onPress={() => navigation.navigate('Home')} underlayColor="transparent">
        {/* <Text>Edit</Text> */}
        <SimpleLineIcons name="tag" size={20} />
      </TouchableHighlight>
    ),
  });

  removeItem = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });

    this.props.removeService(this.props.navigation.state.params.serviceID);
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (
      <View>
        <Text> {this.props.navigation.state.params.serviceID} </Text>
        <Button onPress={this.removeItem} title="remove" />
      </View>
    );
  }
}

const mapStateToProps = ({ serviceList }) => {
  return {
    serviceList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeService: id => {
      dispatch(removeService(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetail);
