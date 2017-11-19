import React, { Component } from 'react';
import { Modal, View, TouchableHighlight, StyleSheet } from 'react-native';

import { rgba } from 'polished';

import GradientButton from './GradientButton';

export class PickerModal extends Component {
  render() {
    return (
      <Modal {...this.props}>
        <TouchableHighlight
          style={styles.touchable}
          underlayColor="transparent"
          onPress={this.props.onTransparencyClick}>
          <View style={styles.transparentWrapper}>
            <View style={styles.childrenWrapper}>{this.props.children}</View>
            <View>
              <TouchableHighlight underlayColor="transparent" onPress={this.props.onCloseClick}>
                <View>
                  <GradientButton text="Select and Close" />
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </TouchableHighlight>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  touchable: { flex: 1 },
  transparentWrapper: {
    marginTop: 22,
    flex: 1,
    backgroundColor: rgba('#000', 0.6),
    justifyContent: 'flex-end',
    padding: 10,
  },
  childrenWrapper: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 2,
    marginBottom: 10,
  },
});

export default PickerModal;
