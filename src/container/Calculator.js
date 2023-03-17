import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import Button from '../components/Button';
import ToggleTheme from '../components/ToggleTheme';
import {theme} from '../styles/theme';

const Calculator = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [calculateResult, setCalculateResult] = useState('');

  const getColor = (lightMode, darkMode) => (darkTheme ? darkMode : lightMode);

  const calculate = label => {
    if (label === 'AC') {
      setCalculateResult('');
    } else if (label === 'DEL') {
      setCalculateResult(
        calculateResult?.substring(0, calculateResult.length - 1),
      );
    } else if (label === '=') {
      const result = Number(eval(calculateResult).toFixed(9)).toString();
      setCalculateResult(result);
    } else {
      setCalculateResult(calculateResult + label);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: getColor(theme.colors.light, theme.colors.dark)},
      ]}>
      <ToggleTheme
        darkTheme={darkTheme}
        getColor={getColor}
        setDarkTheme={setDarkTheme}
      />

      <View style={styles.calculateResultContainer}>
        <Text
          style={[
            styles.calculateResult,
            {color: getColor(theme.colors.dark, theme.colors.light)},
          ]}>
          {calculateResult ? calculateResult : '0'}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonSubContainer}>
          <Button
            onPress={calculate}
            label="AC"
            getColor={getColor}
            type="symbol"
          />
          <Button
            onPress={calculate}
            label="DEL"
            getColor={getColor}
            type="symbol"
          />
          <Button
            onPress={calculate}
            label="%"
            getColor={getColor}
            type="symbol"
          />
          <Button
            onPress={calculate}
            label="/"
            getColor={getColor}
            type="symbol"
          />
        </View>
        <View style={styles.buttonSubContainer}>
          <Button onPress={calculate} label="7" getColor={getColor} />
          <Button onPress={calculate} label="8" getColor={getColor} />
          <Button onPress={calculate} label="9" getColor={getColor} />
          <Button
            onPress={calculate}
            label="*"
            getColor={getColor}
            type="symbol"
          />
        </View>
        <View style={styles.buttonSubContainer}>
          <Button onPress={calculate} label="4" getColor={getColor} />
          <Button onPress={calculate} label="5" getColor={getColor} />
          <Button onPress={calculate} label="6" getColor={getColor} />
          <Button
            onPress={calculate}
            label="-"
            getColor={getColor}
            type="symbol"
          />
        </View>
        <View style={styles.buttonSubContainer}>
          <Button onPress={calculate} label="1" getColor={getColor} />
          <Button onPress={calculate} label="2" getColor={getColor} />
          <Button onPress={calculate} label="3" getColor={getColor} />
          <Button
            onPress={calculate}
            label="+"
            getColor={getColor}
            type="symbol"
          />
        </View>
        <View style={styles.buttonSubContainer}>
          <Button onPress={calculate} label="0" getColor={getColor} />
          <Button onPress={calculate} label="." getColor={getColor} />
          <Button
            onPress={calculate}
            label="="
            getColor={getColor}
            type="symbol"
            isEqual={true}
          />
        </View>
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calculateResultContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  calculateResult: {
    fontSize: 55,
    fontWeight: '400',
    textAlign: 'right',
    paddingRight: 20,
  },
  buttonContainer: {
    paddingVertical: 10,
  },
  buttonSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 8,
    marginBottom: 17,
  },
});
