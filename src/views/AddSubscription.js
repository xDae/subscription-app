import React, { Component } from 'react';
import { Text, View, Image, TextInput, Picker, Button, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
// import { SimpleLineIcons } from '@expo/vector-icons';
import { rgba } from 'polished';
import shortid from 'shortid';

import { connect } from 'react-redux';

import { addService } from '../actions/addService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export class AddSubscription extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.service,
    headerStyle: {
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: rgba('#B2B2B2', 0.2),
      paddingRight: 16,
    },
    // headerRight: <SimpleLineIcons name="equalizer" size={20} />,
  });

  state = {
    name: '',
    price: null,
    description: '',
    currency: '$',
  };

  handleAddServiceButtonClick = () => {
    const serviceData = {
      ...this.state,
      serviceName: this.props.navigation.state.params.service,
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
    return (
      <View style={styles.container}>
        <Image source={{}} />
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Picker
          selectedValue={this.state.currency}
          onValueChange={(currency, itemIndex) => this.setState({ currency })}
          itemStyle={{ height: 80 }}>
          <Picker.Item label="Euro" value="€" />
          <Picker.Item label="Dollar" value="$" />
        </Picker>
        <TextInput
          style={{ height: 40 }}
          placeholder="Name!"
          onChangeText={name => this.setState({ name })}
        />
        <TextInput
          keyboardType="numeric"
          style={{ height: 40 }}
          placeholder="Price!"
          onChangeText={price => this.setState({ price })}
        />
        <TextInput
          style={{ height: 40 }}
          multiline
          placeholder="Description!"
          onChangeText={description => this.setState({ description })}
        />
        <Button onPress={this.handleAddServiceButtonClick} title="Click" color="#841584" />
        <Button onPress={() => console.log(this.state)} title="state" color="#841584" />
        <Button onPress={() => console.log(this.props)} title="props" color="#841584" />
        <Button onPress={() => this.props.getService} title="getService" color="#841584" />
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
