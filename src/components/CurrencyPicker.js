// @flow

import React from 'react';
import { Picker } from 'react-native';

import { rgba } from 'polished';
import cc from 'currency-codes';

const MAIN_CURRENCIES = ['EUR', 'USD', 'GBP'];

const CURRENCIES_TO_AVOID = [
  ...MAIN_CURRENCIES,
  'ETB',
  'XTS',
  'CLF',
  'CHW',
  'CHE',
  'BOV',
  'MGA',
  'ANG',
  'MRO',
  'USN',
  'USS',
  'UYI',
  'XBA',
  'XBB',
  'XBC',
  'MXV',
  'CUC',
  'XBD',
  'XFU',
  'XDP',
  'XOP',
  'XOF',
  'XDR',
];

const currencyArr = cc.codes().filter(currency => !CURRENCIES_TO_AVOID.includes(currency));
const orderedCurrencies = MAIN_CURRENCIES.concat(currencyArr);

const CurrencyPicker = props => (
  <Picker
    itemStyle={{ height: 200, color: rgba('#000', 0.6) }}
    selectedValue={props.selectedValue}
    onValueChange={currencyCode => props.onValueChange(currencyCode)}>
    {orderedCurrencies.map(currencyCode => (
      <Picker.Item
        key={currencyCode}
        label={`${currencyCode} - ${cc.code(currencyCode).currency}`}
        value={currencyCode}
      />
    ))}
  </Picker>
);

export default CurrencyPicker;
