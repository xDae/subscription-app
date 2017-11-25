// @flow

import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import getSymbolFromCurrency from 'currency-symbol-map';

// Views
import NoSubscriptions from 'Views/NoSubscriptions';

// UI Components
import GradientButton from 'Components/GradientButton';
import ServiceCard from 'Components/ServiceCard';

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
        <SimpleLineIcons name="settings" size={20} color="#666" />
      </TouchableHighlight>
    ),
  });

  // facebookLogin = () => this.loginWithFacebook();

  render() {
    const { navigate } = this.props.navigation;
    const { serviceList, userServices } = this.props;

    return (
      <View style={styles.container}>
        {Object.keys(userServices).length ? (
          <FlatList
            contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 12 }}
            style={{ width: '100%' }}
            data={Object.keys(userServices)}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() =>
                  navigate('ServiceDetail', {
                    userServiceID: item,
                    serviceID: userServices[item].serviceID,
                    serviceName:
                      userServices[item].name || serviceList[userServices[item].serviceID].name,
                  })
                }>
                <View style={{ marginTop: 10 }}>
                  <ServiceCard
                    logoUrl={serviceList[userServices[item].serviceID].logo}
                    text={userServices[item].name || serviceList[userServices[item].serviceID].name}
                    price={userServices[item].price}
                    currencySymbol={getSymbolFromCurrency(userServices[item].currencyCode)}
                    priceType={userServices[item].subscriptionType}
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

const mapStateToProps = ({ serviceList, userServices }) => {
  return {
    serviceList,
    userServices,
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
