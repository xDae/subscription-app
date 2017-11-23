// @flow

import React, { Component } from 'react';
import { Modal, Text, View, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { SimpleLineIcons } from '@expo/vector-icons';
import { rgba } from 'polished';

// UI Components
import GradientButton from 'Components/GradientButton';
import ServiceBox from 'Components/ServiceBox';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  list: {
    width: '100%',
    flex: 1,
  },
  columnWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

class ServiceList extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    return {
      headerRight: (
        <TouchableHighlight
          onPress={() => params.toggleModalVisible(!params.modalVisible)}
          underlayColor="transparent">
          <SimpleLineIcons name="equalizer" size={20} />
        </TouchableHighlight>
      ),
    };
  };

  state = {
    modalVisible: false,
  };

  componentDidMount() {
    this.props.navigation.setParams({
      modalVisible: this.state.modalVisible,
      toggleModalVisible: this.toggleModalVisible,
    });
  }

  toggleModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{ paddingTop: 10 }}
          style={styles.list}
          data={this.props.serviceList}
          keyExtractor={item => item.id}
          numColumns={3}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => navigate('AddSubscription', { serviceName: item.name })}
              underlayColor="transparent">
              <View>
                <ServiceBox name={item.name} logo={item.logo} />
              </View>
            </TouchableHighlight>
          )}
        />

        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => navigate('AddSubscription', { service: 'Custom' })}>
          <View>
            <GradientButton
              text="Add Custom Subscription"
              icon={<SimpleLineIcons name="wallet" size={20} color="#fff" />}
            />
          </View>
        </TouchableHighlight>

        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{ marginTop: 22, backgroundColor: rgba('red', 0.1), flex: 1 }}>
            <FlatList
              contentContainerStyle={{ paddingTop: 10 }}
              // style={styles.list}
              data={['Media', 'Finance', 'other', 'dasd', 'dadasddad', 'dadsasdamsd']}
              keyExtractor={item => item}
              renderItem={({ item }) => (
                <TouchableHighlight
                  // onPress={() => {
                  //   this.toggleModalVisible(!this.state.modalVisible);
                  // }}
                  underlayColor="transparent">
                  <View>
                    <Text>{item}</Text>
                  </View>
                </TouchableHighlight>
              )}
            />
            <View>
              <TouchableHighlight
                onPress={() => {
                  this.toggleModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = ({ serviceList }) => ({
  serviceList: Object.keys(serviceList).map(serviceID => ({
    id: serviceID,
    ...serviceList[serviceID],
  })),
});

export default connect(mapStateToProps)(ServiceList);
