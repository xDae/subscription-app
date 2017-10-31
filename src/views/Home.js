// flow

import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo';
import { SimpleLineIcons } from '@expo/vector-icons';

import { connect } from 'react-redux';
// import { Font } from 'expo';

// Views
import NoSubscriptions from './NoSubscriptions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <TouchableHighlight
        onPress={() => navigation.navigate('Settings')}
        underlayColor="transparent">
        <SimpleLineIcons name="settings" size={20} />
      </TouchableHighlight>
    ),
  });

  facebookLogin = () => this.loginWithFacebook();

  render() {
    const { navigate } = this.props.navigation;
    // return <View style={styles.container}>{this.state.fontLoaded && <NoSubscriptions />}</View>;
    return (
      <View style={styles.container}>
        {Object.keys(this.props.serviceList).length ? (
          <FlatList
            style={{ width: '100%' }}
            data={Object.keys(this.props.serviceList)}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <TouchableHighlight onPress={() => navigate('ServiceDetail', { serviceID: item })}>
                <Text>{this.props.serviceList[item].serviceName}</Text>
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
                  // fontFamily: 'montserrat-regular',
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
