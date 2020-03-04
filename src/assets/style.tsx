import React from 'react';
import { StyleSheet } from 'react-native';
import { colorSet } from './colors';

const basicStyle = StyleSheet.create({
  Layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  font: {
    color: colorSet.strongPurple,
  },
});

export {
  basicStyle,
}
