import React from 'react';
import {StyleSheet, Switch} from 'react-native';
import {theme} from '../styles/theme';

const ToggleTheme = ({getColor = () => {}, darkTheme, setDarkTheme}) => {
  return (
    <Switch
      value={darkTheme}
      thumbColor={getColor(theme.colors.dark, theme.colors.light)}
      trackColor={{true: 'gray', false: 'gray'}}
      onValueChange={() => setDarkTheme(prev => !prev)}
      style={{alignSelf: 'center', marginTop: 20}}
    />
  );
};

export default ToggleTheme;

const styles = StyleSheet.create({});
