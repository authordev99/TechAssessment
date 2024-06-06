import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState<string>('');
  const [secondNumber, setSecondNumber] = useState<string>('');
  const [result, setResult] = useState(0);

  function sum() {
    setResult(Number(firstNumber) + Number(secondNumber));
  }
  return (
    <View style={styles.container}>
      <Text>Adding two number</Text>
      <TextInput
        style={styles.textInputContainer}
        placeholder={'First Number'}
        value={firstNumber}
        onChangeText={value => setFirstNumber(value)}
      />
      <TextInput
        style={styles.textInputContainer}
        placeholder={'Second Number'}
        value={secondNumber}
        onChangeText={value => setSecondNumber(value)}
      />
      <Button title={'Add Two number'} onPress={sum} />
      <Text>{`Total: ${result}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
    padding: 8,
  },
  textInputContainer: {
    borderWidth: 1,
    padding: 8,
  },
});

export default Calculator;
