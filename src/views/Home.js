// @flow

import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableHighlight } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import { connect } from 'react-redux';

// Views
import NoSubscriptions from './NoSubscriptions';
import ServiceCard from '../components/ServiceCard';

// UI Components
import GradientButton from '../components/GradientButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
});

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <TouchableHighlight
        onPress={() => navigation.navigate('Settings')}
        underlayColor="transparent">
        <SimpleLineIcons name="settings" size={20} />
      </TouchableHighlight>
    ),
  });

  // facebookLogin = () => this.loginWithFacebook();

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        {Object.keys(this.props.serviceList).length ? (
          <FlatList
            contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 12 }}
            style={{ width: '100%' }}
            data={Object.keys(this.props.serviceList)}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => navigate('ServiceDetail', { serviceID: item })}>
                <View style={{ marginTop: 10 }}>
                  <ServiceCard
                    logoUrl="https://cdn.dribbble.com/assets/dribbble-ball-1000-187399483de9611d2499b0cf6e49be99ed5d1e920c5790e9d930d134bae0c62e.png"
                    text={this.props.serviceList[item].serviceName}
                    price={this.props.serviceList[item].price}
                    priceType="monthly"
                  />
                </View>
              </TouchableHighlight>
            )}
          />
        ) : (
          <NoSubscriptions />
        )}
        <TouchableHighlight onPress={() => navigate('ServiceList')}>
          <View>
            <GradientButton text="Add New Subscription" />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = ({ serviceList }) => {
  return {
    serviceList,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     removeService: id => {
//       dispatch(removeService(id));
//     },
//   };
// };

export default connect(mapStateToProps)(Home);
