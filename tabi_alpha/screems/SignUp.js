import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { logo } from '../constants';
import CustomInput from '../components/customInput/index';
import CustomButton from '../components/customButton/index';

const SignUp = () => {
  const {height} = useWindowDimensions();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSignUp = () => {
    console.warn('Sign Up');
  }
  return (
    <View style={styles.root} >
      <Image 
        source={ logo } 
        style={[styles.logo, {height: height * 0.2}]}
        resizeMode='contain' />

      <Text style={styles.header}> SignUp  </Text>

      <CustomInput 
        placeholder='Name' 
        value={name}
        setValue={setName}
      />
      <CustomInput 
        placeholder='Email' 
        value={email}
        setValue={setEmail}
      />
      <CustomInput 
        placeholder='Confirm Email' 
        value={confirmEmail}
        setValue={setConfirmEmail}
      />
      <CustomInput 
        placeholder='Password' 
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomInput 
        placeholder='Confirm Password' 
        value={confirmEmail}
        setValue={setConfirmPassword}
        secureTextEntry={true}
      />

      <CustomButton text='Register' onPress={onSignUp} />

      <CustomButton text='Login' onPress={onSignUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
    height: '110%',
    backgroundColor: '#d3ffce',
  },
  logo: {
    width: '30%',
    maxWidth: 300,
    maxHeight: 200,
  },
  header:{
    fontSize: 24,
    fontStyle: 'bold',
    paddingTop: 20,
    paddingBottom: 20,
  }
});

export default SignUp;