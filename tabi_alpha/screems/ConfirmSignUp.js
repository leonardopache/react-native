import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import logo from '../assets/images/apeapua_logo.png';

const ConfirmSignUpScreen = () => {
  const {height} = useWindowDimensions();
  return (
    <View style={ styles.root }>
      <Text style={styles.text}> Congratulations, User registred! Confirmation link sent to email.</Text>
      <Image 
        source={ logo } 
        style={[styles.logo, {height: height * 0.2}]}
        resizeMode='contain' />
      <View>
        <Text> Back to login in 10s.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root : { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 20,
    height: '100%',
    backgroundColor: '#d3ffce', 
  },
    logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  text:{
    fontSize: 24,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
  }
});

export default ConfirmSignUpScreen;
