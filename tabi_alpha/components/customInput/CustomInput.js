import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ placeholder, value, setValue, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry} />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '99%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
  }, 
  input: {

  }
});

export default CustomInput;