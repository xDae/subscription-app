import React, { Component } from 'react';
import { Modal, View, TouchableHighlight, StyleSheet, Animated } from 'react-native';

import { rgba } from 'polished';

import GradientButton from './GradientButton';

export class PickerModal extends Component {
  constructor() {
    super();
    this.springValue = new Animated.Value(100);
  }

  componentWillReceiveProps = nextProps => {
    this.springValue.setValue(100);
    Animated.spring(this.springValue, {
      toValue: 0,
      friction: 5,
    }).start();
  };

  render() {
    return (
      <Modal {...this.props} onShow={this.spring}>
        <TouchableHighlight
          style={styles.touchable}
          underlayColor="transparent"
          onPress={this.props.onTransparencyClick}>
          <View style={styles.transparentWrapper}>
            <Animated.View style={{ transform: [{ translateY: this.springValue }] }}>
              <View style={styles.childrenWrapper}>{this.props.children}</View>
              <View>
                <TouchableHighlight underlayColor="transparent" onPress={this.props.onCloseClick}>
                  <View>
                    <GradientButton text="Select and Close" />
                  </View>
                </TouchableHighlight>
              </View>
            </Animated.View>
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
