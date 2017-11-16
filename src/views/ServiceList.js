// @flow

import React, { Component } from 'react';
import { Modal, Text, View, StyleSheet, FlatList, Image, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo';
import { SimpleLineIcons } from '@expo/vector-icons';
import { rgba } from 'polished';

const serviceList = [
  {
    id: 1,
    name: 'Dribbble',
    logo:
      'https://cdn.dribbble.com/assets/dribbble-ball-1000-187399483de9611d2499b0cf6e49be99ed5d1e920c5790e9d930d134bae0c62e.png',
  },
  {
    id: 2,
    name: 'Slack',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png',
  },
  {
    id: 3,
    name: 'Invision',
    logo: 'https://icon-icons.com/icons2/836/PNG/512/Invision_icon-icons.com_66743.png',
  },
  {
    id: 4,
    name: 'Netlfix',
    logo: 'http://tusimagenesde.com/wp-content/uploads/2016/05/netflix-logo-7.png',
  },
  {
    id: 5,
    name: 'Sketch',
    logo:
      'https://www.sketchapp.com/images/press/sketch-press-kit/app-icons/sketch-mac-icon@2x.png',
  },
  {
    id: 6,
    name: 'PlayStation Plus',
    logo:
      'https://media.playstation.com/is/image/SCEA/ps4-june-refresh-playstation-plus-logo-01-us-09jun16?$TwoColumn_Image$',
  },
  {
    id: 7,
    name: 'Spotify',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/2000px-Spotify_logo_with_text.svg.png',
  },
  {
    id: 8,
    name: 'Apple Music',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apple_Music_logo.svg/2000px-Apple_Music_logo.svg.png',
  },
  {
    id: 9,
    name: 'Basecamp',
    logo: 'https://37signals.com/images/basecamp-logo.png',
  },
  {
    id: 12,
    name: 'Dropbox',
    logo: 'https://cfl.dropboxstatic.com/static/images/logo_catalog/glyph_2016@2x-vfl4JntaM.png',
  },
  {
    id: 11,
    name: 'Avocode',
    logo: 'https://startpack.ru/repository/application/1441/logo.png',
  },
  {
    id: 12,
    name: 'Creative cloud',
    logo: 'http://ofirlatam.com/wp-content/uploads/2016/06/Adobe-Creative-Cloud.png',
  },
  {
    id: 13,
    name: 'Marvel app',
    logo: 'https://responsivewebdesign.com/dist/logos/podcast/png/marvel-app.png',
  },
  {
    id: 14,
    name: 'Marvel',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png',
  },
  {
    id: 15,
    name: 'Zeplin',
    logo: 'https://zeplin.io/img/favicon/228x228.png',
  },
  {
    id: 16,
    name: 'Amazon Prime',
    logo:
      'https://images-na.ssl-images-amazon.com/images/G/15/marketing/prime/mom/family/landing/checkPrime._CB507233612_.png',
  },
  {
    id: 17,
    name: 'Evernote',
    logo: 'http://logok.org/wp-content/uploads/2015/02/Evernote-logo-880x626.png',
  },
  {
    id: 18,
    name: 'Todoist',
    logo: 'https://blog.todoist.com/wp-content/uploads/2015/09/todoist-logo.png',
  },
  {
    id: 19,
    name: 'HBO',
    logo: 'https://www.dafont.com/forum/attach/orig/3/6/367660.png',
  },
  {
    id: 20,
    name: 'PornHub',
    logo:
      'https://image.spreadshirtmedia.com/image-server/v1/designs/1001327268,width=800,removeWhite=true.png',
  },
  {
    id: 21,
    name: 'Github',
    logo: 'https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png',
  },
  {
    id: 22,
    name: 'Trello',
    logo: 'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Trello-128.png',
  },
  {
    id: 23,
    name: 'Flinto',
    logo:
      'http://www.sketchappsources.com/blog/data/uploads/app-prototyping-tools-compared/Logo_Flinto.png',
  },
  {
    id: 24,
    name: 'LinkedIn',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2000px-LinkedIn_Logo.svg.png',
  },
  {
    id: 25,
    name: 'Heroku',
    logo: 'https://logos-download.com/wp-content/uploads/2016/09/Heroku_logo.png',
  },
  {
    id: 27,
    name: 'Firebase',
    logo: 'https://firebase.google.com/_static/images/firebase/touchicon-180.png',
  },
  {
    id: 26,
    name: 'SoundCloud',
    logo: 'https://seeklogo.com/images/S/soundcloud-logo-DBFE84F880-seeklogo.com.png',
  },
];

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
  serviceCard: {
    width: 110,
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: rgba('#979797', 0.1),
    paddingHorizontal: 10,
    paddingVertical: 14,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 4,
  },
  cardText: {
    color: rgba('#666', 0.7),
    fontFamily: 'montserrat-light',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default class ServiceList extends Component {
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
          data={serviceList}
          keyExtractor={item => item.id}
          numColumns={3}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => navigate('AddSubscription', { service: item.name })}
              underlayColor="transparent">
              <View style={styles.serviceCard}>
                <Image
                  style={{ width: 80, height: 30 }}
                  resizeMode="contain"
                  source={{
                    uri: item.logo,
                  }}
                />
                <Text numberOfLines={2} style={styles.cardText}>
                  {item.name}
                </Text>
              </View>
            </TouchableHighlight>
          )}
        />
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => navigate('AddSubscription', { service: 'Custom' })}>
          <View>
            <LinearGradient
              colors={['#FF6A00', '#EE0979']}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{
                padding: 15,
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                borderRadius: 2,
                width: '100%',
              }}>
              <SimpleLineIcons name="wallet" size={20} color="#fff" />
              <Text
                style={{
                  fontFamily: 'montserrat-regular',
                  backgroundColor: 'transparent',
                  fontSize: 15,
                  color: '#fff',
                  textAlign: 'center',
                  marginLeft: 6,
                }}>
                Add Custom Subscription
              </Text>
            </LinearGradient>
          </View>
        </TouchableHighlight>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{ marginTop: 22 }}>
            <FlatList
              contentContainerStyle={{ paddingTop: 10 }}
              // style={styles.list}
              data={['Media', 'Finance', 'other', 'dasd', 'dadasddad', 'dadsasdamsd']}
              keyExtractor={item => item}
              renderItem={({ item }) => (
                <TouchableHighlight
                  onPress={() => {
                    this.toggleModalVisible(!this.state.modalVisible);
                  }}
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
