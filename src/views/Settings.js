// @flow

import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

export default class Settings extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <TouchableHighlight onPress={() => navigation.navigate('Home')} underlayColor="transparent">
        <SimpleLineIcons name="mustache" size={20} />
      </TouchableHighlight>
    ),
  });

  render() {
    // const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Settings</Text>
      </View>
    );
  }
}
