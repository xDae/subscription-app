// @flow

import React, { Component } from 'react';
import { Text, View, Button, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { SimpleLineIcons } from '@expo/vector-icons';

// redux actions
import { removeService } from 'Actions/addService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
});

export class ServiceDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.serviceID,
    headerRight: (
      <TouchableHighlight onPress={() => navigation.navigate('Home')} underlayColor="transparent">
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
      <View style={styles.container}>
        <Image
          style={styles.serviceLogo}
          resizeMode="contain"
          source={{
            uri:
              'https://cdn.dribbble.com/assets/dribbble-ball-1000-187399483de9611d2499b0cf6e49be99ed5d1e920c5790e9d930d134bae0c62e.png',
          }}
        />

        <Text>{this.props.navigation.state.params.serviceID}</Text>
        <Button onPress={this.removeItem} title="remove" />
      </View>
    );
  }
}

const mapStateToProps = ({ userServices }, ownProps) => {
  const { serviceID } = ownProps.navigation.state.params;

  return {
    serviceData: { id: serviceID, ...userServices[serviceID] },
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeService: id => dispatch(removeService(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetail);
