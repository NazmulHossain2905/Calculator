import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../styles/theme';

const getButtonTextColor = type =>
  type === 'symbol' ? theme.colors.yellow : 'gray';

const Button = ({label, getColor, type, isEqual, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={8}
      onPress={() => onPress(label)}
      style={{
        width: isEqual ? 70 * 2 + 14 : 70,
        height: 70,
        borderRadius: 15,
        elevation: 8,
        backgroundColor: isEqual
          ? theme.colors.yellow
          : getColor(theme.colors.light, theme.colors.dark),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.4,
        borderColor: '#cccccc40',
      }}>
      <Text
        style={{
          color: isEqual ? theme.colors.light : getButtonTextColor(type),
          fontSize: 20,
          fontWeight: '500',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
