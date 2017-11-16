// @flow

import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo';
import { SimpleLineIcons } from '@expo/vector-icons';

import { connect } from 'react-redux';

// Views
import NoSubscriptions from './NoSubscriptions';
import ServiceCard from '../components/ServiceCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <LinearGradient
              colors={['#FF6A00', '#EE0979']}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{
                padding: 15,
                alignItems: 'center',
                width: '100%',
              }}>
              <Text
                style={{
                  fontFamily: 'montserrat-regular',
                  backgroundColor: 'transparent',
                  fontSize: 15,
                  color: '#fff',
                }}>
                Add New Subscription
              </Text>
            </LinearGradient>
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
