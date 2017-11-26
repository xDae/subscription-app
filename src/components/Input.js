import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { rgba } from 'polished';

const styles = StyleSheet.create({
  inputStyle: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: rgba('#979797', 0.2),
    borderRadius: 2,
    fontFamily: 'montserrat-regular',
    fontSize: 14,
    marginBottom: 16,
    color: rgba('#000', 0.6),
  },
});

const Input = props => <TextInput {...props} style={[styles.inputStyle, props.styles]} />;

export default Input;
