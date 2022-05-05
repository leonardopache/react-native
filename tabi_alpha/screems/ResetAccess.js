import React from 'react';
import { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import { logo } from '../constants';

import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';


const ResetAccessScreen = () => {
  const {height} = useWindowDimensions();
  const [login, setLogin] = useState('');
 
  const onReset = () => {
    console.warn('Reset link sent');
  }

  const onSignIn = () => {
    console.warn('Reset link sent');
  }

  return ( 
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image 
            source={ logo } 
            style={[styles.logo, {height: height * 0.4}]}
            resizeMode='contain' />

        <CustomInput 
          placeholder='Email' 
          value={login}
          setValue={setLogin}
        />

        <CustomButton text='Reset Password' onPress={onReset} />
        <CustomButton text='Sign Up' onPress={onSignIn} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    height: '100%',
    backgroundColor: '#d3ffce',
  },
  logo: {
    width: '60%',
    maxWidth: 300,
    maxHeight: 200,
  },
});


export default ResetAccessScreen;