// @flow

import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
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
    const { services, subscriptions } = this.props;

    return (
      <View style={styles.container}>
        {Object.keys(subscriptions).length ? (
          <FlatList
            contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 12 }}
            style={{ width: '100%' }}
            data={Object.keys(subscriptions)}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() =>
                  navigate('ServiceDetail', {
                    subscriptionID: item,
                    serviceID: subscriptions[item].serviceID,
                    serviceName:
                      subscriptions[item].name || services[subscriptions[item].serviceID].name,
                  })
                }>
                <View style={{ marginTop: 10 }}>
                  <ServiceCard
                    // logoUrl={services[subscriptions[item].serviceID].logo}
                    text={subscriptions[item].name || services[subscriptions[item].serviceID].name}
                    price={subscriptions[item].price}
                    currencySymbol={getSymbolFromCurrency(subscriptions[item].currencyCode)}
                    priceType={subscriptions[item].subscriptionType}
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

export default Home;
