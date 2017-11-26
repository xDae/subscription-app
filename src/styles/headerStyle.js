import { Platform } from 'react-native';
import { Constants } from 'expo';
import { rgba } from 'polished';

export default {
  backgroundColor: '#fff',
  borderBottomWidth: 1,
  borderBottomColor: rgba('#b2b2b2', 0.2),
  paddingRight: 16,
  // paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
  height: Platform.OS === 'ios' ? 64 : 56 + Constants.statusBarHeight,
  paddingTop: Platform.OS === 'ios' ? 20 : Constants.statusBarHeight,
};
